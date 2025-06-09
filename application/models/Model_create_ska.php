<?php
class Model_create_ska extends CI_Model
{

    function get_transaction($id)
    {
        $sql = "SELECT partner_id, client_id, no_aju FROM trans.headers WHERE id = " . $id;
        $result = $this->db->query($sql);
        $arr_result = $result->result_array();

        return $arr_result;
    }

    function upload_draft($arr_message_type)
    {
        $client_partner = $this->input->post('client_partner');
        // $invoice_number = $this->input->post('invoice_number');
        $ipska = $this->input->post('ipska');
        $tipe_form = $this->input->post('tipe_form');
        $pengajuan = $this->input->post('pengajuan');
        // $no_serial = $this->input->post('no_serial');
        // if ($no_serial == '') {
        //     $no_serial = null;
        // }

        $draft_ska_doc = array();
        $resp = 0;

        $val_draft = false;
        while ($val_draft == false) {
            $no_draft = uniqid() . rand();

            $val_sql = "SELECT no_draft FROM trans.draft_ska WHERE no_draft = " . $this->db->escape($no_draft);
            $result_val_sql = $this->db->query($val_sql);
            if ($result_val_sql->num_rows() == 0) {
                $val_draft = true;
            } else {
                $val_draft = false;
            }
        }

        $draft_ska = array(
            'client_id' => $this->session->userdata('client_id'),
            'partner_id' => $client_partner,
            'no_draft' => $no_draft,
            // 'invoice_number' => $invoice_number,
            'co_type_id' => $tipe_form,
            'ipska_office_id' => $ipska,
            'jenis_form' => $pengajuan,
            // 'no_serial_blanko' => $no_serial,
            'created_at' => date("Y-m-d h:i:s"),
            'created_by' => $this->session->userdata('username'),
            'status' => '1'
        );

        $this->db->trans_begin();
        $this->db->insert('trans.draft_ska', $draft_ska);
        $id = $this->db->insert_id();

        if (!empty($_FILES)) {
            $client_refdocuments = $this->Model_master->get_data_client_ref_document($this->session->userdata('client_id'));

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
            $bucket = ENV_S3_BUCKET_NAME;

            foreach ($_FILES as $key => $file) {
                $nama_file = $id . '_' . md5(uniqid() . uniqid() . rand());
                $extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
                $root = 'ska/';
                $dir = $root . 'draft/' . date("Y-m-d") . '/';

                $input_refdocument_id = explode('_', $key)[1];
                $filtered = array_filter($client_refdocuments, function ($item) use ($input_refdocument_id) {
                    return $item['id'] == $input_refdocument_id;
                });
                $result = reset($filtered);
                $allowed_types = strtolower($result['file_extension']);

                if ($extension == $allowed_types) {
                    // Path/key file di S3 (bisa custom sesuai kebutuhan lu)
                    $s3_key = $dir . $nama_file . '.' . $extension;

                    // File upload-an ada di $_FILES['tmp_name']
                    $file_tmp = $file['tmp_name'];

                    try {
                        $s3->putObject([
                            'Bucket'      => $bucket,
                            'Key'         => $s3_key,
                            'SourceFile'  => $file_tmp,
                            'ACL'         => 'private',
                            'ContentType' => $file['type'],
                        ]);

                        $tipe_file = array_search(strtoupper($extension), $arr_message_type, true);
                        $data = array(
                            'draft_id' => $id,
                            'file_name' => $file['name'],
                            'path' => $s3_key, // path di S3
                            'tipe_file' => $tipe_file,
                            'refdokumen_id' => 13,
                            'client_refdokumen_id' => $input_refdocument_id,
                            'created_at' => date("Y-m-d h:i:s"),
                            'created_by' => $this->session->userdata('username')
                        );

                        $draft_ska_doc[] = $data;
                    } catch (Exception $e) {
                        echo "Gagal upload ke S3: " . $e->getMessage();
                        die();
                    }
                } else {
                    $resp = 2;
                    $draft_ska_doc = array();
                    break;
                }
            }

            // !old logic local storage
            // foreach ($_FILES as $key => $file) {
            //     $nama_file = $id . '_' . md5(uniqid() . uniqid() . rand());
            //     $extension = strtolower(pathinfo($file['name'], PATHINFO_EXTENSION));
            //     $root = 'upload/';
            //     $dir = $root . 'draft/' . date("Y-m-d") . '/';

            //     $input_refdocument_id = explode('_', $key)[1];
            //     $filtered = array_filter($client_refdocuments, function ($item) use ($input_refdocument_id) {
            //         return $item['id'] == $input_refdocument_id;
            //     });
            //     $result = reset($filtered);
            //     $allowed_types = strtolower($result['file_extension']);

            //     if ($extension == $allowed_types) {
            //         // Path/key file di S3
            //         $s3_key = $dir . $nama_file . '.' . $extension;

            //         // File upload-an ada di $_FILES['tmp_name']
            //         $file_tmp = $file['tmp_name'];

            //         if (!is_dir($dir)) {
            //             mkdir($dir, 0777, true);
            //         }

            //         $upload_file = array(
            //             'upload_path'       => $dir,
            //             'allowed_types'     => $allowed_types,
            //             // 'max_size'          => 2097152,
            //             'file_name'         => $nama_file . '.' . $extension,
            //             'file_ext_tolower'  => TRUE,
            //         );

            //         $this->load->library('upload', $upload_file);
            //         $this->upload->initialize($upload_file);
            //         if ($this->upload->do_upload($key)) {
            //             $path_file = $dir . $nama_file . '.' . $extension;

            //             $tipe_file = array_search(strtoupper($extension), $arr_message_type, true);
            //             $data = array(
            //                 'draft_id' => $id,
            //                 'file_name' => $file['name'],
            //                 'path' => $path_file,
            //                 'tipe_file' => $tipe_file,
            //                 'refdokumen_id' => 13,
            //                 'client_refdokumen_id' => $input_refdocument_id,
            //                 'created_at' => date("Y-m-d h:i:s"),
            //                 'created_by' => $this->session->userdata('username')
            //             );

            //             $draft_ska_doc[] = $data;
            //             // var_dump($draft_ska_doc);die();
            //         } else {
            //             echo $this->upload->display_errors();
            //             die();
            //         }
            //     } else {
            //         $resp = 2;
            //         $draft_ska_doc = array();
            //         break;
            //     }
            // }
        }

        // var_dump($draft_ska_doc);die();

        if (COUNT($draft_ska_doc) > 0) {
            $this->db->insert_batch('trans.draft_ska_document', $draft_ska_doc);

            if ($this->db->trans_status() == false) {
                $this->db->trans_rollback();
            } else {
                $this->db->trans_commit();
                $resp = 1;
            }
        } else {
            $this->db->trans_rollback();
        }

        return $resp;
    }

    function save_upload_document()
    {
        $post = $this->input->post('formdata');
        $arrPost = postajax_toarray($post);
        // var_dump($_POST, $_FILES);die();
        $data_client = $this->get_transaction($arrPost['aju_number']);

        $resp = 0;
        $status = false;
        if (!empty($_FILES)) {
            $file = $_FILES['file'];

            $nama_file = md5(uniqid() . uniqid() . rand());
            $extension = pathinfo($file['name'], PATHINFO_EXTENSION);
            $root = 'upload/';
            $dir = $root . 'document/' . date("Y-m-d") . '/';

            if (!is_dir($dir)) {
                mkdir($dir, 0777, true);
            }

            $upload_file = array(
                'upload_path'       => $dir,
                'allowed_types'     => 'pdf',
                // 'max_size'          => 2097152,
                'file_name'         => $nama_file . '.' . $extension,
                'file_ext_tolower'  => TRUE,
            );

            $this->load->library('upload', $upload_file);
            $this->upload->initialize($upload_file);
            if ($this->upload->do_upload('file')) {
                $path_file = $dir . $nama_file . '.' . $extension;
                $status = true;
            }
        }

        if ($status) {
            if (isset($arrPost['kppbc'])) {
                $refkkpbc = $arrPost['kppbc'];
            } else {
                $refkkpbc = null;
            }

            if ($arrPost['document_type'] != '6') {
                $refkkpbc = null;
            }

            if ($arrPost['document_type'] == '1' or $arrPost['document_type'] == '6') {
                $value = str_replace(',', '', $arrPost['value']);
            } else {
                $value = null;
            }

            $this->db->trans_begin();
            $array_data = array(
                'transaction_id' => $arrPost['aju_number'],
                'partner_id' => $data_client[0]['partner_id'],
                'no_aju' => $data_client[0]['no_aju'],
                'document_number' => $arrPost['document_number'],
                'client_id' => $data_client[0]['client_id'],
                'path' => $path_file,
                'document_date' => $arrPost['document_date'],
                'refdokumen_id' => $arrPost['document_type'],
                'refkppbc_id' => $refkkpbc,
                'value' => $value,
                'flag' => 0,
                'created_by' => $this->session->userdata('username'),
                'created_at' => date("Y-m-d h:i:s"),
                'is_delete' => 'f'
            );

            $this->db->insert('trans.document', $array_data);
            if ($this->db->trans_status() == false) {
                $this->db->trans_rollback();
            } else {
                $this->db->trans_commit();
                $resp = 1;
            }
        }

        return $resp;
    }

    function get_data_document()
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if ($arrPost['no_aju'] != '') {
            $addSql .= ' AND a.no_aju = ' . $this->db->escape($arrPost['no_aju']);
        }

        $sql_total     = 'SELECT a.id, a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, 
                        d.method_name AS partner_endpoint, a.created_at AS created_at_message,
                        doc.total_docs, doc.send_success,
                        CASE 
                            WHEN doc.total_docs > 0 THEN
                                CASE 
                                    WHEN doc.total_docs = doc.send_success THEN false
                                    ELSE true
                                END
                            ELSE false
                        END AS send_status
                        FROM trans.headers a 
                        LEFT JOIN profile.clients b ON b.id = a.client_id
                        LEFT JOIN profile.partners c ON c.id = a.partner_id
                        LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                        LEFT JOIN (
                            SELECT 
                                transaction_id, 
                                COUNT(*) AS total_docs,
                                SUM(CASE WHEN status = 3 THEN 1 ELSE 0 END) AS send_success
                            FROM trans.document
                            where is_delete = false
                            GROUP BY transaction_id
                        ) doc ON doc.transaction_id = a.id
                        WHERE a.partner_endpoint_id = 1
                        AND a.no_aju IS NOT NULL
                        AND a.client_id = ' . $this->session->userdata('client_id') . ' ' . $addSql . '
                        ORDER BY a.created_at DESC';

        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'SELECT a.id, a.no_aju, b.client_name, b.npwp, b.nib, c.partner_name, 
                    d.method_name AS partner_endpoint, a.created_at AS created_at_message,
                    doc.total_docs, doc.send_success,
                    CASE 
                        WHEN doc.total_docs > 0 THEN
                            CASE 
                                WHEN doc.total_docs = doc.send_success THEN false
                                ELSE true
                            END
                        ELSE false
                    END AS send_status
                    FROM trans.headers a 
                    LEFT JOIN profile.clients b ON b.id = a.client_id
                    LEFT JOIN profile.partners c ON c.id = a.partner_id
                    LEFT JOIN profile.partner_endpoints d ON d.id = a.partner_endpoint_id
                    LEFT JOIN (
                        SELECT 
                            transaction_id, 
                            COUNT(*) AS total_docs,
                            SUM(CASE WHEN status = 3 THEN 1 ELSE 0 END) AS send_success
                        FROM trans.document
                        where is_delete = false
                        GROUP BY transaction_id
                    ) doc ON doc.transaction_id = a.id
                    WHERE a.partner_endpoint_id = 1
                    AND a.no_aju IS NOT NULL
                    AND a.client_id = ' . $this->session->userdata('client_id') . ' ' . $addSql . '
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

    function get_view_document($id, $tipe = '')
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');

        if ($tipe == '') {
            $sql_total     = ' SELECT a.id, b.name, a.document_number, a.document_date, a.created_at AS created_at_document, c.name as kppbc, a.value, a.status, d.status_desc
                            FROM trans.document a 
                            LEFT JOIN referensi.refdokumen b ON b.id = a.refdokumen_id
                            LEFT JOIN referensi.refkppbc c ON c.code = a.refkppbc_id
                            LEFT JOIN referensi.tblrefstatus d ON d.id = a.status
                            WHERE a.is_delete = false 
                            AND a.client_id = ' . $this->session->userdata('client_id') . ' 
                            AND a.transaction_id = ' . $id . '
                            ORDER BY a.created_at DESC';
        } else {
            $sql_total     = ' SELECT c.user_endpoint, c.npwp, c.nib, a.no_aju, b.document_number, b.document_date, b.path, d.kode, b.value, b.refkppbc_id, d.id as dok_id
                            FROM trans.headers a 
                            LEFT JOIN trans.document b ON b.transaction_id = a.id
                            LEFT JOIN profile.clients c ON c.id = a.client_id
                            LEFT JOIN referensi.refdokumen d ON d.id = b.refdokumen_id
                            WHERE b.is_delete = false 
                            AND c.id = ' . $this->session->userdata('client_id') . ' 
                            AND a.id = ' . $id;
        }

        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            if ($tipe == '') {
                $sql = 'SELECT a.id, b.name, a.document_number, a.document_date, a.created_at AS created_at_document, c.name as kppbc, a.value, a.status, d.status_desc
                        FROM trans.document a 
                        LEFT JOIN referensi.refdokumen b ON b.id = a.refdokumen_id
                        LEFT JOIN referensi.refkppbc c ON c.code = a.refkppbc_id
                        LEFT JOIN referensi.tblrefstatus d ON d.id = a.status
                        WHERE a.is_delete = false 
                        AND a.client_id = ' . $this->session->userdata('client_id') . ' 
                        AND a.transaction_id = ' . $id . '
                        ORDER BY a.created_at DESC
                        LIMIT ' . $length . ' OFFSET ' . $start;
            } else {
                $sql = 'SELECT c.user_endpoint, c.npwp, c.nib, a.no_aju, b.document_number, b.document_date, b.path, d.kode, b.value, b.refkppbc_id, d.id as dok_id
                        FROM trans.headers a 
                        LEFT JOIN trans.document b ON b.transaction_id = a.id
                        LEFT JOIN profile.clients c ON c.id = a.client_id
                        LEFT JOIN referensi.refdokumen d ON d.id = b.refdokumen_id
                        WHERE b.is_delete = false 
                        AND c.id = ' . $this->session->userdata('client_id') . ' 
                        AND a.id = ' . $id;
            }

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

    function get_view_draft($id)
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');

        $sql_total     = ' SELECT a.id, b.message_type, a.path, a.file_name, c.refdokumen_name as name
                        FROM trans.draft_ska_document a
                        LEFT JOIN referensi.message_type b ON b.id = a.tipe_file
                        LEFT JOIN profile.client_refdokumens c ON c.id = a.client_refdokumen_id
                        WHERE a.draft_id = ' . $id . '
                        ORDER BY a.created_at DESC';

        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'SELECT a.id, b.message_type, a.path, a.file_name, c.refdokumen_name as name
                    FROM trans.draft_ska_document a
                    LEFT JOIN referensi.message_type b ON b.id = a.tipe_file
                    LEFT JOIN profile.client_refdokumens c ON c.id = a.client_refdokumen_id
                    WHERE a.draft_id = ' . $id . '
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

    function delete_document()
    {
        $id = $this->input->post('id');
        $data = 0;
        $DataUpdate = array('is_delete' => 't');

        $this->db->where('id', $id);
        $this->db->update('trans.document', $DataUpdate);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }

    function delete_draft()
    {
        $id = $this->input->post('id');
        $data = 0;
        $DataUpdate = array('is_delete' => 't');

        $this->db->where('id', $id);
        $this->db->update('trans.draft_ska', $DataUpdate);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }

    function get_data_draft()
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if ($arrPost['no_draft'] != '') {
            $addSql .= ' AND a.no_draft = ' . $this->db->escape($arrPost['no_draft']);
        }

        $sql_total     = 'SELECT a.id, a.no_draft, a.created_at, d.status_desc, b.client_name, b.npwp, b.nib, c.partner_name, a.status, 
                        e.name as cotype, f.name as ipska, a.jenis_form, a.no_serial_blanko, a.no_aju, a.url_draft_ska
                        FROM trans.draft_ska a
                        LEFT JOIN profile.clients b ON b.id = a.client_id
                        LEFT JOIN profile.partners c ON c.id = a.partner_id
                        LEFT JOIN referensi.tblrefstatus d ON d.id = a.status
                        LEFT JOIN referensi.refcotype e ON e.id = a.co_type_id
                        LEFT JOIN referensi.refipska f ON f.id = a.ipska_office_id
                        WHERE a.is_delete is null 
                        AND a.client_id = ' . $this->session->userdata('client_id') . ' ' . $addSql . '
                        ORDER BY a.id DESC';
        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'SELECT a.id, a.no_draft, a.created_at, d.status_desc, b.client_name, b.npwp, b.nib, c.partner_name, a.status, 
                    e.name as cotype, f.name as ipska, a.jenis_form, a.no_serial_blanko, a.no_aju, a.url_draft_ska
                    FROM trans.draft_ska a
                    LEFT JOIN profile.clients b ON b.id = a.client_id
                    LEFT JOIN profile.partners c ON c.id = a.partner_id
                    LEFT JOIN referensi.tblrefstatus d ON d.id = a.status
                    LEFT JOIN referensi.refcotype e ON e.id = a.co_type_id
                    LEFT JOIN referensi.refipska f ON f.id = a.ipska_office_id
                    WHERE a.is_delete is null
                    AND a.client_id = ' . $this->session->userdata('client_id') . ' ' . $addSql . '
                    ORDER BY a.id DESC
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

    function update_draft($id, $status, $no_aju)
    {
        $this->db->trans_begin();

        if ($no_aju == '') {
            $no_aju = null;
        }

        $arr = array(
            'status' => $status,
            'no_aju' => $no_aju,
            'updated_at' => date("Y-m-d h:i:s")
        );

        $this->db->where('id', $id);
        $this->db->update('trans.draft_ska', $arr);

        if ($no_aju != '') {
            $arr_draft = array(
                'id_draft' => $id
            );

            $this->db->where('no_aju', $no_aju);
            $this->db->where('partner_endpoint_id', 1);
            $this->db->where('client_id', $this->session->userdata('client_id'));
            $this->db->update('trans.headers', $arr_draft);
        }

        if ($this->db->trans_status() == false) {
            $this->db->trans_rollback();

            $data = 0;
        } else {
            $this->db->trans_commit();

            $data = 1;
        }

        return $data;
    }
}
