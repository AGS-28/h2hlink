<?php
class Model_master extends CI_Model {

    function get_data_client($id='')
    {
        if($id != '') {
            $sql = "SELECT * FROM profile.clients WHERE id = ".$id;
        } else {
            $sql = "SELECT * FROM profile.clients";
        }
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

    function get_data_ref_document() {
        $sql = "SELECT * FROM referensi.refdokumen";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_aju($end_point='') {
        if($end_point != '') {
            $sql = "SELECT id, no_aju FROM trans.headers WHERE no_aju IS NOT NULL AND partner_endpoint_id = ".$end_point;
        } else {
            $sql = "SELECT id, no_aju FROM trans.headers WHERE no_aju IS NOT NULL";
        }
        
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_message_type() {
        $sql = "SELECT UPPER(message_type) as message_type, id FROM referensi.message_type ORDER BY id";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();
        $arr = array();

        foreach ($arr_result as $key => $value) {
            $arr[$value['id']] = $value['message_type'];
        }

        return $arr;
    }

    function getNameFromNumber($data) {
		$alphabet = array( 'A', 'B', 'C', 'D', 'E',
							'F', 'G', 'H', 'I', 'J',
							'K', 'L', 'M', 'N', 'O',
							'P', 'Q', 'R', 'S', 'T',
							'U', 'V', 'W', 'X', 'Y',
							'Z'
							);
		$return_value = '';
		$data = (string)$data;
		$num  = (int)$data;
		$length = strlen($data);
		if($length == 1){
			$awal = substr($data, 0, 1);
		}else if($length == 2){
			if($num > 25){
				$awal = substr($data, 0, 1);
				$akhir = substr($data, 1, 1);
			}else{
				$awal = substr($data, 0, 1);
			}
		}

		$alpha = '';
		for ($i = 0; $i < $length; $i++) { 
			if($num <= 25){
				if($i == 0){
					$alpha .= $alphabet[$num];
				}
			}else if($num <= 51){
				if($i == 0){
					$awal = (int)$awal - (int)$awal;
					$alpha .= $alphabet[$awal];
				}else if($i == 1){
					$akhir = (int)$data - 26;
					$alpha .= $alphabet[$akhir];
				}
			}else{
				if($i == 0){
					$awal = (int)$awal - (int)$awal + 1;
					$alpha .= $alphabet[$awal];
				}else if($i == 1){
					$akhir = (int)$data - 52;
					$alpha .= $alphabet[$akhir];
				}
			}
		}

		return $alpha;
	}

}
