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

    function get_data_data_aju()
    {
        $sql = "SELECT a.no_draft
                FROM trans.draft_ska a
                WHERE a.status = 3";
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

    function get_data_penerbitan()
    {
        $sql = "SELECT a.no_aju
                FROM trans.headers a 
                WHERE a.partner_endpoint_id = 5
                AND a.no_ska IS NOT NULL
                AND a.tgl_ska IS NOT NULL
                GROUP BY a.no_aju";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_transaction()
    {
        $sql = "SELECT b.client_name, c.partner_name, d.name AS ipska, a.no_aju, e.name AS form, f.tgl_aju
                FROM trans.draft_ska a
                LEFT JOIN profile.clients b ON b.id = a.client_id
                LEFT JOIN profile.partners c ON c.id = a.partner_id
                LEFT JOIN referensi.refipska d ON d.id = a.ipska_office_id
                LEFT JOIN referensi.refcotype e ON e.id = a.co_type_id
                LEFT JOIN trans.headers f ON f.id_draft = a.id AND f.partner_endpoint_id = 1
                WHERE a.status = 3
                ORDER BY a.no_aju, f.tgl_aju DESC LIMIT 50";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        $arr_data = array();
        if($result->num_rows() > 0) {
            foreach ($arr_result as $key => $value) {
                $sql_log = "SELECT a.no_ska, a.tgl_ska, a.status_ska
                            FROM trans.headers a 
                            WHERE a.partner_endpoint_id = 5 
                            AND a.no_aju = '".$value['no_aju']."'
                            ORDER BY a.created_at DESC LIMIT 1";
                $result_log = $this->db->query($sql_log);
                $arr_result_log = $result_log->result_array();

                if($result_log->num_rows() > 0) {
                    $no_ska = $arr_result_log[0]['no_ska'];
                    $tgl_ska = $arr_result_log[0]['tgl_ska'];
                    $status_ska = $arr_result_log[0]['status_ska'];
                } else {
                    $no_ska = '';
                    $tgl_ska = '';
                    $status_ska = '';
                }

                $arr_data[] = array(
                    'client_name' => $value['client_name'],
                    'partner_name' => $value['partner_name'],
                    'ipska' => $value['ipska'],
                    'no_aju' => $value['no_aju'],
                    'tgl_aju' => $value['tgl_aju'],
                    'form' => $value['form'],
                    'no_ska' => $no_ska,
                    'tgl_ska' => $tgl_ska,
                    'status_ska' => $status_ska
                );
            }
        }

        return $arr_data;
    }

    function get_data_pengajuan()
    {
        $sql = "SELECT x.client_name, COUNT(x.id) AS jml
                FROM (
                    SELECT a.client_name, b.id
                    FROM profile.clients a
                    LEFT JOIN trans.draft_ska b ON b.client_id = a.id
                    WHERE b.status = 3
                ) AS x
                GROUP BY x.client_name
                ORDER BY jml DESC";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_total_penerbitan()
    {
        $sql = "SELECT x.client_name, COUNT(x.id) AS jml
                FROM (
                    SELECT a.client_name, b.id
                    FROM profile.clients a
                    LEFT JOIN trans.headers b ON b.client_id = a.id AND b.partner_endpoint_id = 5
                    WHERE b.no_ska IS NOT NULL
                    AND b.tgl_ska IS NOT NULL
                ) AS x
                GROUP BY x.client_name
                ORDER BY jml DESC";
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
