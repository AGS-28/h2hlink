<?php
class Model_rekap extends CI_Model
{

    function cari_data($jenis = '')
    {
        if ($jenis == '') {
            $start         = $this->input->post('start');
            $length     = $this->input->post('length');
        }
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';
        $addSelect  = '';

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

        if ($arrPost['show_table'] == '1') {
            $years = $arrPost['years_single'];
            $addSql .= " AND EXTRACT(YEAR FROM a.tgl_aju) = '" . $years . "'";

            if (isset($arrPost['month_enabled'])) {
                if (is_array($arrPost['month_enabled'])) {
                    $arr_month = $arrPost['month_enabled'];
                    $month = implode("','", $arr_month);
                } else {
                    $month = $arrPost['month_enabled'];
                    $arr_month = array($month);
                }

                $addSql .= " AND EXTRACT(MONTH FROM a.tgl_aju) IN ('" . $month . "')";
                sort($arr_month);
            } else {
                $arr_month = get_month();
            }

            foreach ($arr_month as $key => $value) {
                if (isset($arrPost['month_enabled'])) {
                    $addSelect .= 'COUNT(DISTINCT(CASE WHEN EXTRACT(YEAR FROM a.tgl_aju) = ' . $years . ' AND EXTRACT(MONTH FROM a.tgl_aju) = ' . $value . ' THEN a.id END)) AS tot_' . $years . '_' . $value . ',';
                } else {
                    $index_month = (int)$key + 1;
                    $addSelect .= 'COUNT(DISTINCT(CASE WHEN EXTRACT(YEAR FROM a.tgl_aju) = ' . $years . ' AND EXTRACT(MONTH FROM a.tgl_aju) = ' . $index_month . ' THEN a.id END)) AS tot_' . $years . '_' . $index_month . ',';
                }
            }

            $addSelect .= 'COUNT(DISTINCT a.id) AS total';
        }

        if ($arrPost['show_table'] == '2') {
            if (isset($arrPost['years_multiple'])) {
                if (is_array($arrPost['years_multiple'])) {
                    $arr_years = $arrPost['years_multiple'];
                    $years = implode("','", $arr_years);
                } else {
                    $years = $arrPost['years_multiple'];
                    $arr_years = array($years);
                }
            } else {
                $arr_years = get_years();
                $years = implode("','", $arr_years);
            }

            $addSql .= " AND EXTRACT(YEAR FROM a.tgl_aju) IN ('" . $years . "')";

            $arr_month = get_month();
            sort($arr_years);
            foreach ($arr_years as $key => $value) {
                foreach ($arr_month as $key1 => $value1) {
                    $index_month = (int)$key1 + 1;
                    $addSelect .= 'COUNT(DISTINCT(CASE WHEN EXTRACT(YEAR FROM a.tgl_aju) = ' . $value . ' AND EXTRACT(MONTH FROM a.tgl_aju) = ' . $index_month . ' THEN a.id END)) AS tot_' . $value . '_' . $index_month . ',';
                }

                if (COUNT($arr_years) > 1) {
                    $addSelect .= 'COUNT(DISTINCT(CASE WHEN EXTRACT(YEAR FROM a.tgl_aju) = ' . $value . ' THEN a.id END)) AS tot_' . $value . ',';
                }
            }

            $addSelect .= 'COUNT(DISTINCT a.id) AS total';
        }

        if ($arrPost['tipe'] == '0') {
            $select = 'b.id, b.client_name, c.partner_name, c.id as partner_id,';
            $group_by = 'b.id, b.client_name, c.partner_name, c.id';
        } else {
            $select = 'c.id, c.partner_name, c.id as partner_id,';
            $group_by = 'c.id, c.partner_name';
        }
        $sql_total     = ' SELECT ' . $select . '
                        ' . $addSelect . '
                        FROM trans.headers a
                        LEFT JOIN profile.clients b ON b.id = a.client_id
                        LEFT JOIN profile.partners c ON c.id = a.partner_id
                        WHERE a.no_aju IS NOT NULL ' . $addSql . '
                        GROUP BY ' . $group_by;
        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            if ($jenis == '') {
                $limit = 'LIMIT ' . $length . ' OFFSET ' . $start;
            } else {
                $limit = '';
            }

            $sql = 'SELECT ' . $select . '
                    ' . $addSelect . '
                    FROM trans.headers a
                    LEFT JOIN profile.clients b ON b.id = a.client_id
                    LEFT JOIN profile.partners c ON c.id = a.partner_id
                    WHERE a.no_aju IS NOT NULL ' . $addSql . '
                    GROUP BY ' . $group_by . '
                    ' . $limit;
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
}
