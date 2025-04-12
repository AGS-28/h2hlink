<?php
class Model_tracking extends CI_Model
{

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
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if (isset($arrPost['no_aju'])) {
            $addSql .= ' AND a.no_aju = ' . $this->db->escape($arrPost['no_aju']);
        }

        if (isset($arrPost['create_date'])) {
            if ($arrPost['create_date'] != '') {
                $arr_tanggal = explode(' to ', $arrPost['create_date']);

                $addSql .= ' AND a.created_at BETWEEN ' . $this->db->escape($arr_tanggal[0]) . ' AND ' . $this->db->escape($arr_tanggal[1]);
            }
        }

        if (isset($arrPost['aju_date'])) {
            if ($arrPost['aju_date'] != '') {
                $arr_aju_date = explode(' to ', $arrPost['aju_date']);

                $addSql .= ' AND a.tgl_aju BETWEEN ' . $this->db->escape($arr_aju_date[0]) . ' AND ' . $this->db->escape($arr_aju_date[1]);
            }
        }

        if (isset($arrPost['nib'])) {
            if (is_array($arrPost['nib'])) {
                $nib = implode("','", $arrPost['nib']);
            } else {
                $nib = $arrPost['nib'];
            }

            $addSql .= " AND b.nib IN ('" . $nib . "')";
        }

        if (isset($arrPost['npwp'])) {
            if (is_array($arrPost['npwp'])) {
                $npwp = implode("','", $arrPost['npwp']);
            } else {
                $npwp = $arrPost['npwp'];
            }

            $addSql .= " AND b.npwp IN ('" . $npwp . "')";
        }

        if (isset($arrPost['client_name'])) {
            if (is_array($arrPost['client_name'])) {
                $client_name = implode("','", $arrPost['client_name']);
            } else {
                $client_name = $arrPost['client_name'];
            }

            $addSql .= " AND b.id IN ('" . $client_name . "')";
        }

        if (isset($arrPost['client_partner'])) {
            if (is_array($arrPost['client_partner'])) {
                $client_partner = implode("','", $arrPost['client_partner']);
            } else {
                $client_partner = $arrPost['client_partner'];
            }

            $addSql .= " AND c.id IN ('" . $client_partner . "')";
        }

        if (isset($arrPost['end_point'])) {
            if (is_array($arrPost['end_point'])) {
                $end_point = implode("','", $arrPost['end_point']);
            } else {
                $end_point = $arrPost['end_point'];
            }

            $addSql .= " AND d.id IN ('" . $end_point . "')";
        }

        if (isset($arrPost['years_multiple'])) {
            if (is_array($arrPost['years_multiple'])) {
                $years = implode("','", $arrPost['years_multiple']);
            } else {
                $years = $arrPost['years_multiple'];
            }

            $addSql .= " AND EXTRACT(YEAR FROM a.tgl_aju) IN ('" . $years . "')";
        }

        if (isset($arrPost['month_enabled'])) {
            if (is_array($arrPost['month_enabled'])) {
                $month = implode("','", $arrPost['month_enabled']);
            } else {
                $month = $arrPost['month_enabled'];
            }

            $addSql .= " AND EXTRACT(MONTH FROM a.tgl_aju) IN ('" . $month . "')";
        }

        $sql_total     = ' SELECT a.id, a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, d.method_name as partner_endpoint, a.created_at as created_at_message, d.id as endpoint_id
                        FROM trans.headers a 
                        LEFT JOIN profile.clients b ON b.id = a.client_id
                        LEFT JOIN profile.partners c ON c.id = a.partner_id
                        LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                        WHERE a.client_id = ' . $this->session->userdata('client_id') . ' ' . $addSql . '
                        ORDER BY a.created_at DESC';
        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'SELECT a.id, a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, d.method_name as partner_endpoint, a.created_at as created_at_message, d.id as endpoint_id
                    FROM trans.headers a 
                    LEFT JOIN profile.clients b ON b.id = a.client_id
                    LEFT JOIN profile.partners c ON c.id = a.partner_id
                    LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                    WHERE a.client_id = ' . $this->session->userdata('client_id') . ' ' . $addSql . '
                    ORDER BY a.created_at DESC
                    LIMIT ' . $length . ' OFFSET ' . $start;
            $result         = $this->db->query($sql);
            $arrayReturn     = $result->result_array();

            $return['totalRow'] = $banyak;
            $return['arrData']     = $arrayReturn;
        } else {
            $return['totalRow'] = 0;
            $return['arrData']     = array();
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
                WHERE a.id = ' . $id;

        $result = $this->db->query($sql);
        $arrayReturn = $result->result_array();

        $data['id'] = $id;
        $data['tipe'] = $tipe;
        $data['arrayReturn'] = $arrayReturn;

        return $data;
    }

    function get_data_ska()
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if (isset($arrPost['no_aju'])) {
            $addSql .= ' AND a.no_aju = ' . $this->db->escape($arrPost['no_aju']);
        }

        if (isset($arrPost['nib'])) {
            if (is_array($arrPost['nib'])) {
                $nib = implode("','", $arrPost['nib']);
            } else {
                $nib = $arrPost['nib'];
            }

            $addSql .= " AND b.nib IN ('" . $nib . "')";
        }

        if (isset($arrPost['npwp'])) {
            if (is_array($arrPost['npwp'])) {
                $npwp = implode("','", $arrPost['npwp']);
            } else {
                $npwp = $arrPost['npwp'];
            }

            $addSql .= " AND b.npwp IN ('" . $npwp . "')";
        }

        if (isset($arrPost['client_name'])) {
            if (is_array($arrPost['client_name'])) {
                $client_name = implode("','", $arrPost['client_name']);
            } else {
                $client_name = $arrPost['client_name'];
            }

            $addSql .= " AND b.id IN ('" . $client_name . "')";
        }

        if (isset($arrPost['client_partner'])) {
            if (is_array($arrPost['client_partner'])) {
                $client_partner = implode("','", $arrPost['client_partner']);
            } else {
                $client_partner = $arrPost['client_partner'];
            }

            $addSql .= " AND c.id IN ('" . $client_partner . "')";
        }

        $sql_total     = ' SELECT a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, b.user_endpoint
                        FROM trans.headers a
                        LEFT JOIN profile.clients b ON b.id = a.client_id
                        LEFT JOIN profile.partners c ON c.id = a.partner_id
                        WHERE a.no_aju IS NOT NULL 
                        AND a.client_id = ' . $this->session->userdata('client_id') . ' ' . $addSql . '
                        GROUP BY a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, b.user_endpoint
                        ORDER BY a.no_aju DESC';
        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'SELECT a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, b.user_endpoint
                    FROM trans.headers a
                    LEFT JOIN profile.clients b ON b.id = a.client_id
                    LEFT JOIN profile.partners c ON c.id = a.partner_id
                    WHERE a.no_aju IS NOT NULL 
                    AND a.client_id = ' . $this->session->userdata('client_id') . ' ' . $addSql . '
                    GROUP BY a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, b.user_endpoint
                    ORDER BY a.no_aju DESC
                    LIMIT ' . $length . ' OFFSET ' . $start;
            $result         = $this->db->query($sql);
            $arrayReturn     = $result->result_array();

            $return['totalRow'] = $banyak;
            $return['arrData']     = $arrayReturn;
        } else {
            $return['totalRow'] = 0;
            $return['arrData']     = array();
        }

        return $return;
    }

    function update_coo($no_aju, $co_number, $co_date, $status)
    {
        if ($co_number == 'NULL') {
            $co_number = null;
        }

        if ($co_date == 'NULL') {
            $co_date = null;
        }

        if ($status == 'NULL') {
            $status = null;
        }

        $sql = "SELECT a.id FROM trans.headers a WHERE a.no_aju = '" . $no_aju . "' AND a.partner_endpoint_id = 5 ORDER BY a.created_at DESC LIMIT 1";
        $result = $this->db->query($sql);
        $num_row = $result->num_rows();
        if ($num_row > 0) {
            $arr_result = $result->result_array();
            $id = $arr_result[0]['id'];

            $arr = array(
                'no_ska' => $co_number,
                'status_ska' => $status,
                'tgl_ska' => $co_date
            );

            $this->db->where('id', $id);
            $this->db->update('trans.headers', $arr);

            if ($this->db->affected_rows() > 0) {
                $data = 1;
            } else {
                $data = 0;
            }

            return $data;
        }
    }

    function get_coo($no_aju)
    {
        $sql = "SELECT a.no_ska, a.tgl_ska, a.status_ska FROM trans.headers a WHERE a.no_aju = " . $no_aju . " AND a.partner_endpoint_id = 5 ORDER BY a.created_at DESC LIMIT 1";
        $result = $this->db->query($sql);
        $num_row = $result->num_rows();
        if ($num_row > 0) {
            $arr_result = $result->result_array();
            $arr = array(
                'no_ska' => $arr_result[0]['no_ska'],
                'tgl_ska' => $arr_result[0]['tgl_ska'],
                'status_ska' => $arr_result[0]['status_ska']
            );
        } else {
            $arr = array(
                'no_ska' => '',
                'tgl_ska' => '',
                'status_ska' => ''
            );
        }

        return $arr;
    }

    function get_data_coo()
    {
        $no_aju = $this->input->post('aju');
        $nib = $this->input->post('nib');
        $npwp = $this->input->post('npwp');
        $user_endpoint = $this->input->post('user_endpoint');
        $tipe = $this->input->post('tipe');

        $sql = "SELECT a.message_type, a.message_id, a.message_content, a.created_at as created_at_message, c.message_type as urai_message_type, b.result_code, b.result_responses, b.created_at as created_at_responses, a.partner_endpoint_id, e.no_serial_blanko
                FROM trans.headers a 
                LEFT JOIN trans.responses b ON b.transaction_id = a.id
                LEFT JOIN referensi.message_type c ON c.id = a.message_type
                LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                LEFT JOIN trans.draft_ska e ON e.id = a.id_draft
                WHERE a.no_aju = '" . $no_aju . "'
                AND a.partner_endpoint_id = 1";

        $result = $this->db->query($sql);
        $arrayReturn = $result->result_array();

        $sql1 = "SELECT c.user_endpoint, c.npwp, c.nib, a.no_aju, b.document_number, b.document_date, b.path, d.kode, b.value, b.refkppbc_id, d.id as dok_id, e.name AS urai_kppbc, d.name AS urai_dok, b.id as id
                FROM trans.headers a 
                LEFT JOIN trans.document b ON b.transaction_id = a.id
                LEFT JOIN profile.clients c ON c.id = a.client_id
                LEFT JOIN referensi.refdokumen d ON d.id = b.refdokumen_id
                LEFT JOIN referensi.refkppbc e ON e.code = b.refkppbc_id
                WHERE b.is_delete = false 
                AND a.no_aju = '" . $no_aju . "'
                AND a.partner_endpoint_id = 1";

        $result1 = $this->db->query($sql1);
        $arrayReturn1 = $result1->result_array();

        $data['arrayHeaderDetail'] = $arrayReturn;
        $data['arrayHeaderDoc'] = $arrayReturn1;
        $data['arrayPost'] = array(
            'no_aju' => $no_aju,
            'nib' => $nib,
            'npwp' => $npwp,
            'user_endpoint' => $user_endpoint,
            'tipe' => $tipe
        );

        return $data;
    }

    function get_document()
    {
        $id = $this->input->post('id');
        $sql = "SELECT path FROM trans.document WHERE id = " . $id;
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();
        $path = $arr_result[0]['path'];

        $bas64doc = chunk_split(base64_encode(file_get_contents($path)));
        return $bas64doc;
    }
}
