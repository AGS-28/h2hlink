<?php
class Model_create_ska extends CI_Model {

    function get_transaction($id) {
        $sql = "SELECT partner_id, client_id, no_aju FROM trans.headers WHERE id = ".$id;
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function upload_draft($arr_message_type) {
        $length = $this->input->post('length');
        $client_partner = $this->input->post('client_partner');
        $invoice_number = $this->input->post('invoice_number');
        $draft_ska_doc = array();
        $resp = 0;
        
        $val_draft = false;
        while ($val_draft == false) {
            $no_draft = uniqid().rand();
            
            $val_sql = "SELECT no_draft FROM trans.draft_ska WHERE no_draft = ".$this->db->escape($no_draft);
            $result_val_sql = $this->db->query($val_sql);
            if ($result_val_sql->num_rows() == 0) {
                $val_draft = true;
            } else {
                $val_draft = false;
            }
        }
        
        $draft_ska = array(
            'client_id' => $this->session->userdata('client_id'),
            'partner_id' => $client_partner,
            'no_draft' => $no_draft,
            'invoice_number' => $invoice_number,
            'created_at' => date("Y-m-d h:i:s"),
            'created_by' => $this->session->userdata('username'),
            'status' => '1'
        );

        $this->db->insert('trans.draft_ska', $draft_ska); 
        $id = $this->db->insert_id();
        // var_dump($length);die();
        for ($i = 0; $i < $length; $i++) { 
            if (!empty($_FILES)) {
                $file = $_FILES['file_'.$i];
                
                $nama_file = md5(uniqid().uniqid().rand());
                $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
                $root = 'upload/';
                $dir = $root.'draft/'.date("Y-m-d").'/';
                
                if(in_array(strtoupper($extension),$arr_message_type)) {
                    
                    if ( !is_dir( $dir ) ) {
                        mkdir($dir, 0777, true);
                    }

                    $upload_file = array(
                        'upload_path'       => $dir,
                        'allowed_types'     => 'csv|xls|xlsx|txt|rar|json|xml',
                        // 'max_size'          => 2097152,
                        'file_name'         => $nama_file.'.'.$extension,
                        'file_ext_tolower'  => TRUE,
                    );

                    $this->load->library('upload', $upload_file);
                    $this->upload->initialize($upload_file);
                    if ($this->upload->do_upload('file_'.$i)) {
                        $path_file = $dir.$nama_file.'.'.$extension;

                        $tipe_file = array_search(strtoupper($extension),$arr_message_type,true);
                        $data = array(
                            'draft_id' => $id,
                            'file_name' => $file['name'],
                            'path' => $path_file,
                            'tipe_file' => $tipe_file,
                            'created_at' => date("Y-m-d h:i:s"),
                            'created_by' => $this->session->userdata('username')
                        );

                        $draft_ska_doc[] = $data;
                        // var_dump($draft_ska_doc);die();
                    } else {
                        echo $this->upload->display_errors();die();
                    }
                } else {
                    $resp = 2;
                    $draft_ska_doc = array();
                    break;
                }
            }
        }

        // var_dump($draft_ska_doc);die();
        
        if(COUNT($draft_ska_doc) > 0) {
            $this->db->insert_batch('trans.draft_ska_document', $draft_ska_doc); 

            if ($this->db->trans_status() == false){
                $this->db->trans_rollback();
            }else{
                $this->db->trans_commit();
                $resp = 1;
            }
        } else {
            $this->db->trans_rollback();
        }

        return $resp;
    }

    function save_upload_document() {
        $post = $this->input->post('formdata');
		$arrPost = postajax_toarray($post);
        // var_dump($_POST, $_FILES);die();
        $data_client = $this->get_transaction($arrPost['aju_number']);

        $resp = 0;
        $status = false;
        if (!empty($_FILES)) {
            $file = $_FILES['file'];

            $nama_file = md5(uniqid().uniqid().rand());
            $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
            $root = 'upload/';
            $dir = $root.'document/'.date("Y-m-d").'/';
            
            if ( !is_dir( $dir ) ) {
                mkdir($dir, 0777, true);
            }

            $upload_file = array(
                'upload_path'       => $dir,
                'allowed_types'     => 'pdf',
                // 'max_size'          => 2097152,
                'file_name'         => $nama_file.'.'.$extension,
                'file_ext_tolower'  => TRUE,
            );

            $this->load->library('upload', $upload_file);
            $this->upload->initialize($upload_file);
            if ($this->upload->do_upload('file')) {
                $path_file = $dir.$nama_file.'.'.$extension;
                $status = true;
            }
        }

        if($status) {
            $array_data = array(
                'transaction_id' => $arrPost['aju_number'],
                'partner_id' => $data_client[0]['partner_id'],
                'no_aju' => $data_client[0]['no_aju'],
                'document_number' => $arrPost['document_number'],
                'client_id' => $data_client[0]['client_id'],
                'path' => $path_file,
                'document_date' => $arrPost['document_date'],
                'refdokumen_id' => $arrPost['document_type'],
                'flag' => 0,
                'created_by' => $this->session->userdata('username'),
                'created_at' => date("Y-m-d h:i:s"),
                'is_delete' => 'f'
            );

            $this->db->insert('trans.document', $array_data); 
            if ($this->db->trans_status() == false){
                $this->db->trans_rollback();
            }else{
                $this->db->trans_commit();
                $resp = 1;
            }
        }

        return $resp;
    }

    function get_data_document() {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
        $addSql     = '';
        
        if($arrPost['no_aju'] != '') {
            $addSql .= ' AND a.no_aju = '.$this->db->escape($arrPost['no_aju']);
        }
        
        $sql_total 	= ' SELECT a.id, a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, d.method_name as partner_endpoint, a.created_at as created_at_message
                        FROM trans.headers a 
                        LEFT JOIN profile.clients b ON b.id = a.client_id
                        LEFT JOIN profile.partners c ON c.id = a.partner_id
                        LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                        WHERE a.partner_endpoint_id = 1
                        AND a.no_aju IS NOT NULL
                        AND a.client_id = '.$this->session->userdata('client_id').' '.$addSql;
    
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){
            $sql = 'SELECT a.id, a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, d.method_name as partner_endpoint, a.created_at as created_at_message
                        FROM trans.headers a 
                        LEFT JOIN profile.clients b ON b.id = a.client_id
                        LEFT JOIN profile.partners c ON c.id = a.partner_id
                        LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                        WHERE a.partner_endpoint_id = 1
                        AND a.no_aju IS NOT NULL
                        AND a.client_id = '.$this->session->userdata('client_id').' '.$addSql.'
                    LIMIT '.$length.' OFFSET '.$start;
			$result 		= $this->db->query($sql);
			$arrayReturn 	= $result->result_array();

			$return['totalRow'] = $banyak;
			$return['arrData'] 	= $arrayReturn;
		}else{
			$return['totalRow'] = 0;
			$return['arrData'] 	= array();
		}		

		return $return;
    }

    function get_view_document($id) {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');

        $sql_total 	= ' SELECT a.id, b.name, a.document_number, a.document_date, a.created_at AS created_at_document
                        FROM trans.document a 
                        LEFT JOIN referensi.refdokumen b ON b.id = a.refdokumen_id
                        WHERE a.is_delete = false 
                        AND a.client_id = '.$this->session->userdata('client_id').' 
                        AND a.transaction_id = '.$id;
    
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){			
            $sql = 'SELECT a.id, b.name, a.document_number, a.document_date, a.created_at AS created_at_document
                    FROM trans.document a 
                    LEFT JOIN referensi.refdokumen b ON b.id = a.refdokumen_id
                    WHERE a.is_delete = false 
                    AND a.client_id = '.$this->session->userdata('client_id').' 
                    AND a.transaction_id = '.$id.'
                    LIMIT '.$length.' OFFSET '.$start;
			$result 		= $this->db->query($sql);
			$arrayReturn 	= $result->result_array();

			$return['totalRow'] = $banyak;
			$return['arrData'] 	= $arrayReturn;
		}else{
			$return['totalRow'] = 0;
			$return['arrData'] 	= array();
		}		

		return $return;
    }

    function get_view_draft($id) {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');

        $sql_total 	= ' SELECT a.id, b.message_type, a.path, a.file_name
                        FROM trans.draft_ska_document a
                        LEFT JOIN referensi.message_type b ON b.id = a.tipe_file
                        WHERE a.draft_id = '.$id;
    
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){			
            $sql = 'SELECT a.id, b.message_type, a.path, a.file_name
                    FROM trans.draft_ska_document a
                    LEFT JOIN referensi.message_type b ON b.id = a.tipe_file
                    WHERE a.draft_id = '.$id.'
                    LIMIT '.$length.' OFFSET '.$start;
			$result 		= $this->db->query($sql);
			$arrayReturn 	= $result->result_array();

			$return['totalRow'] = $banyak;
			$return['arrData'] 	= $arrayReturn;
		}else{
			$return['totalRow'] = 0;
			$return['arrData'] 	= array();
		}		

		return $return;
    }

    function delete_document() {
        $id = $this->input->post('id');
        $data = 0;
        $DataUpdate = array('is_delete' => 't' );

        $this->db->where('id', $id);
        $this->db->update('trans.document',$DataUpdate);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }

    function get_path_document() {
        $id = $this->input->post('id');
        $sql = "SELECT path FROM trans.document WHERE id = ".$id;
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();
        $path = $arr_result[0]['path'];
        
        $bas64doc = chunk_split(base64_encode(file_get_contents($path)));

        return $bas64doc;
    }

    function get_data_draft() {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
        $addSql     = '';
        
        if($arrPost['no_draft'] != '') {
            $addSql .= ' AND a.no_draft = '.$this->db->escape($arrPost['no_draft']);
        }
        
        $sql_total 	= ' SELECT a.id, a.no_draft, a.invoice_number, a.created_at, d.status_desc, b.client_name, b.npwp, b.nib, c.partner_name, a.status
                        FROM trans.draft_ska a
                        LEFT JOIN profile.clients b ON b.id = a.client_id
                        LEFT JOIN profile.partners c ON c.id = a.partner_id
                        LEFT JOIN referensi.tblrefstatus d ON d.id = a.status
                        WHERE a.client_id = '.$this->session->userdata('client_id').' '.$addSql;
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){
			$sql = 'SELECT a.id, a.no_draft, a.invoice_number, a.created_at, d.status_desc, b.client_name, b.npwp, b.nib, c.partner_name, a.status
                    FROM trans.draft_ska a
                    LEFT JOIN profile.clients b ON b.id = a.client_id
                    LEFT JOIN profile.partners c ON c.id = a.partner_id
                    LEFT JOIN referensi.tblrefstatus d ON d.id = a.status
                    WHERE a.client_id = '.$this->session->userdata('client_id').' '.$addSql.'
                    LIMIT '.$length.' OFFSET '.$start;
			$result 		= $this->db->query($sql);
			$arrayReturn 	= $result->result_array();

			$return['totalRow'] = $banyak;
			$return['arrData'] 	= $arrayReturn;
		}else{
			$return['totalRow'] = 0;
			$return['arrData'] 	= array();
		}		

		return $return;
    }

}
