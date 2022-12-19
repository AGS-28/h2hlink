<?php
class Model_tracking extends CI_Model {

    function get_data_client()
    {
        $sql = "SELECT * FROM profile.clients";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_partner()
    {
        $sql = "SELECT * FROM profile.partners";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_end_point()
    {
        $sql = "SELECT * FROM profile.partner_endpoints";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data()
    {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
        $addSql     = '';
        
        if(isset($arrPost['no_aju'])) {
            $addSql .= ' AND a.no_aju = '.$this->db->escape($arrPost['no_aju']);
        }
        
        if(isset($arrPost['create_date'])) {
            if($arrPost['create_date'] != '') {
                $arr_tanggal = explode(' to ', $arrPost['create_date']);

                $addSql .= ' AND a.created_at BETWEEN '.$this->db->escape($arr_tanggal[0]).' AND '.$this->db->escape($arr_tanggal[1]);
            }
        }

        if(isset($arrPost['aju_date'])) {
            if($arrPost['aju_date'] != '') {
                $arr_aju_date = explode(' to ', $arrPost['aju_date']);

                $addSql .= ' AND a.tgl_aju BETWEEN '.$this->db->escape($arr_aju_date[0]).' AND '.$this->db->escape($arr_aju_date[1]);
            }
        }

        if(isset($arrPost['nib'])) {
            if(is_array($arrPost['nib'])) {
                $nib = implode("','", $arrPost['nib']);
            } else {
                $nib = $arrPost['nib'];
            }

            $addSql .= " AND b.nib IN ('".$nib."')";
        }

        if(isset($arrPost['npwp'])) {
            if(is_array($arrPost['npwp'])) {
                $npwp = implode("','", $arrPost['npwp']);
            } else {
                $npwp = $arrPost['npwp'];
            }

            $addSql .= " AND b.npwp IN ('".$npwp."')";
        }

        if(isset($arrPost['client_name'])) {
            if(is_array($arrPost['client_name'])) {
                $client_name = implode("','", $arrPost['client_name']);
            } else {
                $client_name = $arrPost['client_name'];
            }

            $addSql .= " AND b.id IN ('".$client_name."')";
        }

        if(isset($arrPost['client_partner'])) {
            if(is_array($arrPost['client_partner'])) {
                $client_partner = implode("','", $arrPost['client_partner']);
            } else {
                $client_partner = $arrPost['client_partner'];
            }

            $addSql .= " AND c.id IN ('".$client_partner."')";
        }

        if(isset($arrPost['end_point'])) {
            if(is_array($arrPost['end_point'])) {
                $end_point = implode("','", $arrPost['end_point']);
            } else {
                $end_point = $arrPost['end_point'];
            }

            $addSql .= " AND d.id IN ('".$end_point."')";
        }
        
        if(isset($arrPost['years_multiple'])) {
            if(is_array($arrPost['years_multiple'])) {
                $years = implode("','", $arrPost['years_multiple']);
            } else {
                $years = $arrPost['years_multiple'];
            }

            $addSql .= " AND EXTRACT(YEAR FROM a.tgl_aju) IN ('".$years."')";
        }

        if(isset($arrPost['month_enabled'])) {
            if(is_array($arrPost['month_enabled'])) {
                $month = implode("','", $arrPost['month_enabled']);
            } else {
                $month = $arrPost['month_enabled'];
            }

            $addSql .= " AND EXTRACT(MONTH FROM a.tgl_aju) IN ('".$month."')";
        }

        $sql_total 	= ' SELECT a.id, a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, d.method_name as partner_endpoint, a.created_at as created_at_message, d.id as endpoint_id
                        FROM trans.headers a 
                        LEFT JOIN profile.clients b ON b.id = a.client_id
                        LEFT JOIN profile.partners c ON c.id = a.partner_id
                        LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                        WHERE a.client_id = '.$this->session->userdata('client_id').' '.$addSql.'
                        ORDER BY a.created_at DESC';
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){
			$sql = 'SELECT a.id, a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, d.method_name as partner_endpoint, a.created_at as created_at_message, d.id as endpoint_id
                    FROM trans.headers a 
                    LEFT JOIN profile.clients b ON b.id = a.client_id
                    LEFT JOIN profile.partners c ON c.id = a.partner_id
                    LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                    WHERE a.client_id = '.$this->session->userdata('client_id').' '.$addSql.'
                    ORDER BY a.created_at DESC
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

    function get_message_respons()
    {
        $id = $this->input->post('id');
        $tipe = $this->input->post('tipe');

        $sql = 'SELECT a.message_type, a.message_id, a.message_content, a.created_at as created_at_message, c.message_type as urai_message_type, b.result_code, b.result_responses, b.created_at as created_at_responses, a.partner_endpoint_id
                FROM trans.headers a 
                LEFT JOIN trans.responses b ON b.transaction_id = a.id
                LEFT JOIN referensi.message_type c ON c.id = a.message_type
                LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                WHERE a.id = '.$id;

        $result = $this->db->query($sql);
        $arrayReturn = $result->result_array();
        
        $data['id'] = $id;
        $data['tipe'] = $tipe;
        $data['arrayReturn'] = $arrayReturn;

        return $data;
    }

}
