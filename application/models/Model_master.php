<?php
class Model_master extends CI_Model {

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

}
