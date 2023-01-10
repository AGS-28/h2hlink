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

    function get_data_end_point()
    {
        $sql = "SELECT a.method_name, COUNT(b.id) AS jml
                FROM profile.partner_endpoints a
                LEFT JOIN trans.headers b ON b.partner_endpoint_id = a.id
                WHERE a.is_active = true
                GROUP BY a.id 
                ORDER BY a.method_name";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_draft_status()
    {
        $sql = "SELECT a.status_desc as status, COUNT(b.id) AS jml
                FROM referensi.tblrefstatus a
                LEFT JOIN trans.draft_ska b ON b.status = a.id
                GROUP BY a.id
                ORDER BY a.status_desc";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_transaction()
    {
        $sql = "SELECT a.client_name, COUNT(b.id) AS jml, a.id       
                FROM profile.clients a                           
                LEFT JOIN trans.draft_ska b ON b.client_id = a.id
                GROUP BY a.id
                ORDER BY a.client_name";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    // function get_data_modal_dashboard($id, $tipe)
    // {
    //     if($tipe == 1) {
    //         $sql = "SELECT a.status_desc AS uraian, COUNT(b.id) AS jml 
    //                 FROM referensi.tblrefstatus a 
    //                 LEFT JOIN trans.draft_ska b ON b.status = a.id
    //                 GROUP BY a.id
    //                 ORDER BY a.status_desc";
    //     } else {
    //         $sql = "SELECT a.method_name AS uraian, COUNT(b.id) AS jml 
    //                 FROM profile.partner_endpoints a 
    //                 LEFT JOIN trans.headers b ON b.partner_endpoint_id = a.id
    //                 WHERE a.is_active = true
    //                 GROUP BY a.id
    //                 ORDER BY a.method_name";
    //     }
        
    //     $result = $this->db->query($sql);
    //     $arr_result = $result->result_array();

    //     return $arr_result;
    // }

}
