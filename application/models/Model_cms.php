<?php
class Model_cms extends CI_Model {

    function get_data_role()
    {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
        $addSql     = '';
        
        if(isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id AS VARCHAR(3))) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(a.groupname) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').'))';
        }
        
        $sql_total 	= ' SELECT * FROM users.groups a
                        WHERE 1=1 '.$addSql.';';
        // echo $sql_total;exit;
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){
			$sql = 'SELECT * FROM users.groups a
                    WHERE 1=1 '.$addSql.'
                    LIMIT '.$length.' OFFSET '.$start.';';
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

    function get_message_respons()
    {
        $id = $this->input->post('id');
        $tipe = $this->input->post('tipe');

        $sql = 'SELECT a.message_type, a.message_id, a.message_content, a.created_at as created_at_message, c.message_type as urai_message_type, b.result_code, b.result_responses, b.created_at as created_at_responses
                FROM trans.headers a 
                LEFT JOIN trans.responses b ON b.transaction_id = a.id
                LEFT JOIN referensi.message_type c ON c.id = a.message_type
                WHERE a.id = '.$id;

        $result = $this->db->query($sql);
        $arrayReturn = $result->result_array();
        
        $data['id'] = $id;
        $data['tipe'] = $tipe;
        $data['arrayReturn'] = $arrayReturn;

        return $data;
    }
    function hapus_role($id)
    {
        $data = 0;
        $DataUpdate = array('is_active' => 'f' );
        $this->db->update('users.groups',$DataUpdate);
        $this->db->where('id',$id);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }


    public function add_role_item()
    {
        // var_dump($_POST);exit;
        // $post 		= $this->input->post('postdata');
		// $arrPost 	= postajax_toarray($post);

        $rolename = $this->input->post('rolename');
        $status = $this->input->post('status');
        $data = 0;

        $arrayInsert = array(
                            'groupname' => $rolename, 
                            'is_active' => $status, 
                            'created_by' => $this->session->userdata('username'), 
                            'created_at' => date('Y-m-d H:i:s'), 
                            );
        // var_dump($arrayInsert);exit;
        $this->db->insert('users.groups',$arrayInsert);
        if ($this->db->affected_rows() > 0 ) {
            $data = 1;
        }

        return $data;

    }

}
