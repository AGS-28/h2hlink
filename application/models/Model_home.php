<?php
class Model_home extends CI_Model {

    function get_data_draft()
    {
        $sql = "SELECT a.no_draft, a.invoice_number, b.client_name, c.partner_name
                FROM trans.draft_ska a 
                LEFT JOIN profile.clients b ON b.id = a.client_id
                LEFT JOIN profile.partners c ON c.id = a.partner_id";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_doc_draft()
    {
        $sql = "SELECT a.no_draft, a.invoice_number, c.message_type
                FROM trans.draft_ska a
                LEFT JOIN trans.draft_ska_document b ON b.draft_id = a.id
                LEFT JOIN referensi.message_type c ON c.id = b.tipe_file";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

}
