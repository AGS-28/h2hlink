<?php
class Model_master extends CI_Model
{
    function get_data_client($id = '')
    {
        if ($id != '') {
            $sql = "SELECT * FROM profile.clients WHERE id = " . $id;
        } else {
            $sql = "SELECT * FROM profile.clients";
        }
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_partner()
    {
        $sql = "SELECT * FROM profile.partners WHERE is_active = true";
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

    function get_data_ref_document($tipe = '', $jenis = '')
    {
        $addSql = 'WHERE id NOT IN (13,14)';
        if ($tipe != '') {
            $addSql = 'WHERE id IN (11,13) ORDER BY is_order';
        }

        $sql = "SELECT * FROM referensi.refdokumen " . $addSql;
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        if ($jenis != '') {
            $arr = array();
            foreach ($arr_result as $key => $value) {
                $arr[$value['kode']] = $value['name'];
            }

            return $arr;
        } else {
            return $arr_result;
        }
    }

    function get_data_extention()
    {
        $sql = "SELECT string_agg(CONCAT('.', LOWER(c.message_type)), ',') AS message_type
                FROM profile.clients a 
                LEFT JOIN profile.client_chanel b ON b.id_client = a.id
                LEFT JOIN referensi.message_type c ON c.id = b.message_id
                WHERE a.id = " . $this->session->userdata('client_id');
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_aju($end_point = '', $client_id = '')
    {
        if ($end_point != '' && $client_id != '') {
            $sql = "SELECT id, no_aju FROM trans.headers WHERE no_aju IS NOT NULL AND partner_endpoint_id = " . $end_point . " AND client_id = " . $client_id;
        } else {
            $sql = "SELECT id, no_aju FROM trans.headers WHERE no_aju IS NOT NULL";
        }

        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_message_type()
    {
        $sql = "SELECT UPPER(message_type) as message_type, id FROM referensi.message_type ORDER BY id";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();
        $arr = array();

        foreach ($arr_result as $key => $value) {
            $arr[$value['id']] = $value['message_type'];
        }

        return $arr;
    }

    function getNameFromNumber($data)
    {
        $alphabet = array(
            'A',
            'B',
            'C',
            'D',
            'E',
            'F',
            'G',
            'H',
            'I',
            'J',
            'K',
            'L',
            'M',
            'N',
            'O',
            'P',
            'Q',
            'R',
            'S',
            'T',
            'U',
            'V',
            'W',
            'X',
            'Y',
            'Z'
        );
        $return_value = '';
        $data = (string)$data;
        $num  = (int)$data;
        $length = strlen($data);
        if ($length == 1) {
            $awal = substr($data, 0, 1);
        } else if ($length == 2) {
            if ($num > 25) {
                $awal = substr($data, 0, 1);
                $akhir = substr($data, 1, 1);
            } else {
                $awal = substr($data, 0, 1);
            }
        }

        $alpha = '';
        for ($i = 0; $i < $length; $i++) {
            if ($num <= 25) {
                if ($i == 0) {
                    $alpha .= $alphabet[$num];
                }
            } else if ($num <= 51) {
                if ($i == 0) {
                    $awal = (int)$awal - (int)$awal;
                    $alpha .= $alphabet[$awal];
                } else if ($i == 1) {
                    $akhir = (int)$data - 26;
                    $alpha .= $alphabet[$akhir];
                }
            } else {
                if ($i == 0) {
                    $awal = (int)$awal - (int)$awal + 1;
                    $alpha .= $alphabet[$awal];
                } else if ($i == 1) {
                    $akhir = (int)$data - 52;
                    $alpha .= $alphabet[$akhir];
                }
            }
        }

        return $alpha;
    }

    function get_data_ref_kppbc($tipe = '')
    {
        $sql = "SELECT * FROM referensi.refkppbc WHERE is_delete is null";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        if ($tipe != '') {
            $arr = array();
            foreach ($arr_result as $key => $value) {
                $arr[$value['code']] = $value['name'];
            }

            return $arr;
        } else {
            return $arr_result;
        }
    }

    function get_data_ref_ipska()
    {
        $sql = "SELECT * FROM referensi.refipska WHERE is_delete is null";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_data_ref_form($tipe = '')
    {
        $sql = "SELECT * FROM referensi.refcotype WHERE is_delete is null";
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        if ($tipe != '') {
            $arr = array();
            foreach ($arr_result as $key => $value) {
                $arr[$value['id']] = $value['name'];
            }

            $arr_result = $arr;
        }

        return $arr_result;
    }

    function get_path_document()
    {
        $id = $this->input->post('id');
        $sql = "SELECT path FROM trans.document WHERE id = " . $id;
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();
        $path = $arr_result[0]['path'];

        $s3 = new \Aws\S3\S3Client([
            'version' => 'latest',
            'region'  => 'id-id',
            'endpoint' => ENV_S3_ENDPOINT_URL,
            'credentials' => [
                'key'    => ENV_S3_ACCESS_KEY,
                'secret' => ENV_S3_SECRET_KEY,
            ],
            'use_path_style_endpoint' => true,
            'suppress_php_deprecation_warning' => true,
        ]);

        $s3_key = $path;

        $cmd = $s3->getCommand('GetObject', [
            'Bucket' => ENV_S3_BUCKET_NAME,
            'Key'    => $s3_key,
        ]);

        $request = $s3->createPresignedRequest($cmd, '+10 minutes');
        $presignedUrl = (string) $request->getUri();

        $fileContents = file_get_contents($presignedUrl);

        if ($fileContents === false) {
            show_error('Gagal mengambil file dari S3.');
        }

        $base64 = base64_encode($fileContents);

        $this->output
            ->set_content_type('application/json')
            ->set_output(json_encode([
                'filename' => basename($s3_key),
                'data' => $base64
            ]));

        return $base64;
    }

    function get_data_client_channel($id)
    {
        $sql = "SELECT string_agg(DISTINCT CONCAT('', c.id_chanel), ',') AS id_channel, b.id AS id_client
                FROM trans.draft_ska a
                LEFT JOIN profile.clients b ON b.id = a.client_id
                LEFT JOIN profile.client_chanel c ON c.id_client = b.id
                LEFT JOIN referensi.message_type d ON d.id = c.message_id
                LEFT JOIN referensi.chanel e ON e.id = c.id_chanel
                WHERE a.id = " . $id . "
                AND e.id = 3
                GROUP BY b.id";

        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function get_url_wso2($id)
    {
        $sql = "SELECT a.url_wso2 FROM profile.partner_endpoints a WHERE a.id = " . $id;

        $result = $this->db->query($sql);
        $arr_result = $result->result_array();
        $url = $arr_result[0]['url_wso2'];

        return $url;
    }

    function get_data_client_ref_document($id = '')
    {
        if ($id != '') {
            $sql = "SELECT a.id, a.client_id, a.refdokumen_name, b.message_type as file_extension
                    FROM profile.client_refdokumens a
                    JOIN referensi.message_type b ON b.id = a.message_type_id 
                    WHERE a.client_id = " . $id . "
                    ORDER BY a.id ASC";
        } else {
            $sql = "SELECT a.id, a.client_id, a.refdokumen_name, b.message_type as file_extension
                    FROM profile.client_refdokumens a
                    JOIN referensi.message_type b ON b.id = a.message_type_id 
                    ORDER BY a.id ASC";
        }
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }
}
