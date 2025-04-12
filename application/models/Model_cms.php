<?php
class Model_cms extends CI_Model
{

    function get_data_role()
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if (isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id AS VARCHAR(3))) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.groupname) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . '))';
        }

        $sql_total     = ' SELECT * FROM users.groups a
                        WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ';';

        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'SELECT * FROM users.groups a
                    WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ' 
                    order by a.id ASC 
                    LIMIT ' . $length . ' OFFSET ' . $start . ';';
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
    function get_data_file()
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if (isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id AS VARCHAR(3))) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.message_type) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . '))';
        }

        $sql_total     = ' SELECT * FROM referensi.message_type a
                        WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ';';
        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'SELECT * FROM referensi.message_type a
                    WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ' 
                    order by a.id ASC 
                    LIMIT ' . $length . ' OFFSET ' . $start . ';';
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
    function get_data_chanel()
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if (isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id AS VARCHAR(3))) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.name) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . '))';
        }

        $sql_total     = ' SELECT * FROM referensi.chanel a
                        WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ';';

        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'SELECT * FROM referensi.chanel a
                    WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ' 
                    order by a.id ASC 
                    LIMIT ' . $length . ' OFFSET ' . $start . ';';
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
    function get_data_partner()
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if (isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id AS VARCHAR(3))) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.partner_name) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . '))';
        }

        $sql_total     = ' SELECT * FROM profile.partners a
                        WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ';';

        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'SELECT * FROM profile.partners a
                    WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ' 
                    order by a.id ASC 
                    LIMIT ' . $length . ' OFFSET ' . $start . ';';
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
    function get_data_client()
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if (isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(a.id AS VARCHAR(3))) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.client_name) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.npwp) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.nib) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(b.package_name) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . '))';
        }

        $sql_total     = ' select a.*,b.package_name 
                            from profile.clients a
                            left join referensi.package b on b.id = a.package_id 
                        WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ';';

        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'select a.*,b.package_name 
                        from profile.clients a
                        left join referensi.package b on b.id = a.package_id 
                    WHERE 1=1 ' . $addSql . ' AND a.is_deleted = ' . $this->db->escape('f') . ' 
                    order by a.id ASC 
                    LIMIT ' . $length . ' OFFSET ' . $start . ';';
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

    function get_endpoint($id)
    {
        $addSql = " AND a.partner_id = " . $this->db->escape($id);
        $html   = '';
        $sql    = "SELECT * FROM profile.partner_endpoints a 
                    WHERE 1=1 " . $addSql . " AND a.is_deleted  = " . $this->db->escape('f') . " 
                    order by a.id ASC ";
        // echo $sql;exit;
        $result = $this->db->query($sql);

        if ($result->num_rows() > 0) {
            foreach ($result->result() as $key => $value) {
                if ($value->is_active == 't') {
                    $html .= '<span class="badge rounded-pill bg-success">' . $value->method_name . '</span>';
                } else {
                    $html .= '<span class="badge rounded-pill bg-danger">' . $value->method_name . '</span>';
                }
            }
        } else {
            $html   = '<div class="external-event fc-event text-dark bg-soft-dark" data-class="bg-dark">
                        <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>None
                    </div>';
        }

        return $html;
    }

    function hapus_role($id)
    {
        $data = 0;
        $DataUpdate = array('is_deleted' => 't');
        $this->db->where('id', $id);
        $this->db->update('users.groups', $DataUpdate);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }
    function hapus_chanel($id)
    {
        $data = 0;
        $DataUpdate = array('is_deleted' => 't');
        $this->db->where('id', $id);
        $this->db->update('referensi.chanel', $DataUpdate);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }
    function hapus_file($id)
    {
        $data = 0;
        $DataUpdate = array('is_deleted' => 't');
        $this->db->where('id', $id);
        $this->db->update('referensi.message_type', $DataUpdate);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }


    public function add_role_item()
    {
        $post         = $this->input->post('postdata');
        $arrPost     = postajax_toarray($post);

        $rolename   = $arrPost['rolename'];
        $status     = $arrPost['status'];
        $updated    = $arrPost['updated'];
        $data       = 0;

        $arrayInsert = array(
            'groupname' => $rolename,
            'is_active' => $status,
            'is_deleted' => 'f',
            'created_by' => $this->session->userdata('username'),
            'created_at' => date('Y-m-d H:i:s'),
        );
        if ($updated == "1") {
            $idnya = $arrPost['idnya'];
            $arrayInsert = array(
                'groupname' => $rolename,
                'is_active' => $status,
                'updated_by' => $this->session->userdata('username'),
                'updated_at' => date('Y-m-d H:i:s'),
            );
            $this->db->where('id', $idnya);
            $this->db->update('users.groups', $arrayInsert);
        } else {
            $this->db->insert('users.groups', $arrayInsert);
        }


        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }
    public function add_file_item()
    {
        $post         = $this->input->post('postdata');
        $arrPost     = postajax_toarray($post);

        $filetype   = $arrPost['filetype'];
        $status     = $arrPost['status'];
        $updated    = $arrPost['updated'];
        $data       = 0;

        $arrayInsert = array(
            'message_type' => $filetype,
            'is_active' => $status,
            'is_deleted' => 'f',
            'created_by' => $this->session->userdata('username'),
            'created_at' => date('Y-m-d H:i:s'),
        );
        if ($updated == "1") {
            $idnya = $arrPost['idnya'];
            $arrayInsert = array(
                'message_type' => $filetype,
                'is_active' => $status,
                'updated_by' => $this->session->userdata('username'),
                'updated_at' => date('Y-m-d H:i:s'),
            );
            $this->db->where('id', $idnya);
            $this->db->update('referensi.message_type', $arrayInsert);
        } else {
            $this->db->insert('referensi.message_type', $arrayInsert);
        }


        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }
    public function add_chanel_item()
    {
        $post         = $this->input->post('postdata');
        $arrPost     = postajax_toarray($post);

        $name       = $arrPost['name'];
        $status     = $arrPost['status'];
        $updated    = $arrPost['updated'];
        $data       = 0;

        $arrayInsert = array(
            'name' => $name,
            'is_active' => $status,
            'is_deleted' => 'f',
            'created_by' => $this->session->userdata('username'),
            'created_at' => date('Y-m-d H:i:s'),
        );
        if ($updated == "1") {
            $idnya = $arrPost['idnya'];
            $arrayInsert = array(
                'name' => $name,
                'is_active' => $status,
                'updated_by' => $this->session->userdata('username'),
                'updated_at' => date('Y-m-d H:i:s'),
            );
            $this->db->where('id', $idnya);
            $this->db->update('referensi.chanel', $arrayInsert);
        } else {
            $this->db->insert('referensi.chanel', $arrayInsert);
        }


        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }

    public function add_item_client()
    {
        $post         = $this->input->post('postdata');
        $arrPost     = postajax_toarray($post);
        $data       = 0;

        //profile client
        $updated       = $arrPost['updated'];
        $npwp          = $arrPost['npwp'];
        $nib           = $arrPost['nib'];
        $client_name   = $arrPost['client_name'];
        $address       = $arrPost['address'];
        $email         = $arrPost['email'];
        $tlp           = $arrPost['tlp'];
        $hp            = $arrPost['hp'];
        $authors       = $arrPost['authors'];
        $user_endpoint = $arrPost['user_endpoint'];
        $package_type  = $arrPost['package_type'];
        $startdate     = $arrPost['startdate'];
        $enddate       = $arrPost['enddate'];

        // client partner
        $arrpartnername = $arrPost['arrpartnername[]'];
        $arrdescpartner = $arrPost['arrdescpartner[]'];
        $arrxapikey     = $arrPost['arrxapikey[]'];
        $arridpartner   = $arrPost['arridpartner[]'];
        $arrclientkey   = $arrPost['arrclientkey[]'];

        //client chanel
        $arridchanel    = $arrPost['arridchanel[]'];
        $messtypechanel = $arrPost['messtype-chanel[]'];

        $this->db->trans_begin();
        if ($updated == 1) {
            $id_client = $arrPost['id_client'];
            $arrayInsertProfile = array(
                'client_name'       => $client_name,
                'nib'               => $nib,
                'npwp'              => $npwp,
                'user_endpoint'     => $user_endpoint,
                'created_at'        => date('Y-m-d H:i:s'),
                'created_by'        => $this->session->userdata('username'),
                'address'           => $address,
                'handphone_no'      => $hp,
                'telephone_no'      => $tlp,
                'is_active'         => 't',
                'is_deleted'        => 'f',
                'validate'          => $startdate,
                'valid_until'       => $enddate,
                'package_id'        => $package_type,
                'authority_name'    => $authors,
                'email'             => $email,
            );

            $this->db->where('id', $id_client);
            $this->db->update('profile.clients', $arrayInsertProfile);

            $this->db->where('client_id', $id_client);
            $this->db->delete('profile.client_partners');

            $this->db->where('id_client', $id_client);
            $this->db->delete('profile.client_chanel');

            if (is_array($arridpartner)) {
                foreach ($arridpartner as $key => $value) {
                    $sqlgetmethod = "SELECT * FROM profile.partner_endpoints a where a.partner_id = " . $value;
                    $res = $this->db->query($sqlgetmethod);
                    $datamethod = $res->result();

                    foreach ($datamethod as $key2 => $value2) {
                        $arrayInsertPartner = array(
                            'client_id'     => $id_client,
                            'partner_id'    => $value2->partner_id,
                            'client_key'    => $arrclientkey[$key],
                            'created_at'    => date('Y-m-d H:i:s'),
                            'created_by'    => $this->session->userdata('username'),
                            'api_key'       => $arrxapikey[$key],
                            'endpoint_id'   => $value2->id,
                        );
                        $this->db->insert('profile.client_partners', $arrayInsertPartner);
                    }
                }
            } else {
                $sqlgetmethod = "SELECT * FROM profile.partner_endpoints a where a.partner_id = " . $arridpartner;
                $res = $this->db->query($sqlgetmethod);
                $datamethod = $res->result();

                foreach ($datamethod as $key => $value) {
                    $arrayInsertPartner = array(
                        'client_id'     => $id_client,
                        'partner_id'    => $value->partner_id,
                        'client_key'    => $arrclientkey,
                        'created_at'    => date('Y-m-d H:i:s'),
                        'created_by'    => $this->session->userdata('username'),
                        'api_key'       => $arrxapikey,
                        'endpoint_id'   => $value->id,
                    );
                    $this->db->insert('profile.client_partners', $arrayInsertPartner);
                }
            }

            if (is_array($arridchanel)) {
                foreach ($arridchanel as $key => $value) {
                    $arrayInsertChanel = array(
                        'id_client'  => $id_client,
                        'id_chanel'  => $value,
                        'created_at' => date('Y-m-d H:i:s'),
                        'created_by' => $this->session->userdata('username'),
                        'message_id' => $messtypechanel[$key],
                    );
                    $this->db->insert('profile.client_chanel', $arrayInsertChanel);
                }
            } else {
                $arrayInsertChanel = array(
                    'id_client'  => $id_client,
                    'id_chanel'  => $arridchanel,
                    'created_at' => date('Y-m-d H:i:s'),
                    'created_by' => $this->session->userdata('username'),
                    'message_id' => $messtypechanel,
                );
                $this->db->insert('profile.client_chanel', $arrayInsertChanel);
            }
        } else {
            $arrayInsertProfile = array(
                'client_name'       => $client_name,
                'nib'               => $nib,
                'npwp'              => $npwp,
                'user_endpoint'     => $user_endpoint,
                'created_at'        => date('Y-m-d H:i:s'),
                'created_by'        => $this->session->userdata('username'),
                'address'           => $address,
                'handphone_no'      => $hp,
                'telephone_no'      => $tlp,
                'is_active'         => 't',
                'is_deleted'        => 'f',
                'validate'          => $startdate,
                'valid_until'       => $enddate,
                'package_id'        => $package_type,
                'authority_name'    => $authors,
                'email'             => $email,
            );

            $this->db->insert('profile.clients', $arrayInsertProfile);
            $id_client = $this->db->insert_id();

            if (is_array($arridpartner)) {
                foreach ($arridpartner as $key => $value) {
                    $sqlgetmethod = "SELECT * FROM profile.partner_endpoints a where a.partner_id = " . $value;
                    $res = $this->db->query($sqlgetmethod);
                    $datamethod = $res->result();

                    foreach ($datamethod as $key2 => $value2) {
                        $arrayInsertPartner = array(
                            'client_id'     => $id_client,
                            'partner_id'    => $value2->partner_id,
                            'client_key'    => $arrclientkey[$key],
                            'created_at'    => date('Y-m-d H:i:s'),
                            'created_by'    => $this->session->userdata('username'),
                            'api_key'       => $arrxapikey[$key],
                            'endpoint_id'   => $value2->id,
                        );
                        $this->db->insert('profile.client_partners', $arrayInsertPartner);
                    }
                }
            } else {
                $sqlgetmethod = "SELECT * FROM profile.partner_endpoints a where a.partner_id = " . $arridpartner;
                $res = $this->db->query($sqlgetmethod);
                $datamethod = $res->result();

                foreach ($datamethod as $key => $value) {
                    $arrayInsertPartner = array(
                        'client_id'     => $id_client,
                        'partner_id'    => $value->partner_id,
                        'client_key'    => $arrclientkey,
                        'created_at'    => date('Y-m-d H:i:s'),
                        'created_by'    => $this->session->userdata('username'),
                        'api_key'       => $arrxapikey,
                        'endpoint_id'   => $value->id,
                    );
                    $this->db->insert('profile.client_partners', $arrayInsertPartner);
                }
            }

            if (is_array($arridchanel)) {
                foreach ($arridchanel as $key => $value) {
                    $arrayInsertChanel = array(
                        'id_client'  => $id_client,
                        'id_chanel'  => $value,
                        'created_at' => date('Y-m-d H:i:s'),
                        'created_by' => $this->session->userdata('username'),
                        'message_id' => $messtypechanel[$key],
                    );
                    $this->db->insert('profile.client_chanel', $arrayInsertChanel);
                }
            } else {
                $arrayInsertChanel = array(
                    'id_client'  => $id_client,
                    'id_chanel'  => $arridchanel,
                    'created_at' => date('Y-m-d H:i:s'),
                    'created_by' => $this->session->userdata('username'),
                    'message_id' => $messtypechanel,
                );
                $this->db->insert('profile.client_chanel', $arrayInsertChanel);
            }
        }



        if ($this->db->trans_status() === FALSE) {
            $this->db->trans_rollback();
        } else {
            $this->db->trans_commit();
            $data = 1;
        }

        return $data;
    }

    public function add_item_partner()
    {
        $post         = $this->input->post('postdata');
        $arrPost     = postajax_toarray($post);

        $partnerName       = $arrPost['partner-name'];
        $partnerDetail     = $arrPost['parner-detail'];
        $arrmethodname     = $arrPost['arrmethodname[]'];
        $arrType           = $arrPost['arrType[]'];
        $arrendpoint       = $arrPost['arrendpoint[]'];
        $arrstatus         = $arrPost['arrstatus[]'];
        $arrmessageType    = $arrPost['arrmessageType[]'];
        $data              = 0;
        $idhdr             = 0;
        $updated           = 99;

        $arrayInsertHeader = array(
            'partner_name' => $partnerName,
            'desc_partner' => $partnerDetail,
            'is_active' => 't',
            'is_deleted' => 'f',
            'created_by' => $this->session->userdata('username'),
            'created_at' => date('Y-m-d H:i:s'),
        );
        if ($updated == "1") {
            $idnya = $arrPost['idnya'];
            // $arrayInsert = array(
            //     'name' => $name,
            //     'is_active' => $status,
            //     'updated_by' => $this->session->userdata('username'),
            //     'updated_at' => date('Y-m-d H:i:s'),
            // );
            $this->db->where('id', $idnya);
            $this->db->update('referensi.chanel', $arrayInsertHeader);
        } else {
            $this->db->insert('profile.partners', $arrayInsertHeader);
            $idhdr = $this->db->insert_id();

            if ($idhdr != '0') {
                if (is_array($arrmethodname)) {
                    foreach ($arrmethodname as $key => $value) {
                        $insertMethod = array(
                            'method_name'           => $value,
                            'partner_method_type'   => $arrType[$key],
                            'partner_id'            => $idhdr,
                            'partner_endpoint'      => $arrendpoint[$key],
                            'message_id'            => $arrmessageType[$key],
                            'is_active'             => $arrstatus[$key],
                            'is_deleted'            => 'f',
                            'created_at'            => date('Y-m-d H:i:s'),
                            'created_by'            => $this->session->userdata('username'),
                        );
                        $this->db->insert('profile.partner_endpoints', $insertMethod);
                    }
                } else {
                    $insertMethod = array(
                        'method_name'           => $arrmethodname,
                        'partner_method_type'   => $arrType,
                        'partner_id'            => $idhdr,
                        'partner_endpoint'      => $arrendpoint,
                        'message_id'            => $arrmessageType,
                        'is_active'             => $arrstatus,
                        'is_deleted'            => 'f',
                        'created_at'            => date('Y-m-d H:i:s'),
                        'created_by'            => $this->session->userdata('username'),
                    );
                    $this->db->insert('profile.partner_endpoints', $insertMethod);
                }
                // var_dump($insertMethod);exit;
            }
        }


        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }
    public function get_edit_role()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;

        $sql        = "SELECT * FROM users.groups a WHERE a.id = " . $this->db->escape($id);
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->row();
            $status     = 1;
        }
        $data = array(
            'thisdata' => $returnData,
            'status' => $status,
        );

        return $data;
    }
    public function get_edit_client()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;

        $sql        = "SELECT * FROM profile.clients a WHERE a.id = " . $this->db->escape($id);
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->row();
            $status     = 1;
        }
        $data = array(
            'thisdata' => $returnData,
            'status' => $status,
        );

        return $data;
    }
    public function get_edit_chanel()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;

        $sql        = "SELECT * FROM referensi.chanel a WHERE a.id = " . $this->db->escape($id);
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->row();
            $status     = 1;
        }
        $data = array(
            'thisdata' => $returnData,
            'status' => $status,
        );

        return $data;
    }
    public function get_view_client()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;
        $html       = "";

        $sql        = "SELECT a.*,b.package_name 
                            from profile.clients a
                            left join referensi.package b on b.id = a.package_id 
                        WHERE a.id = " . $this->db->escape($id);

        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->row();
            $status     = 1;

            $sql_chanel = "SELECT b.name ,c.message_type  
                                from profile.client_chanel a 
                                left join referensi.chanel b on a.id_chanel = b.id 
                                left join referensi.message_type c on a.message_id = c.id 
                            WHERE a.id_client = " . $this->db->escape($id);
            $result     = $this->db->query($sql_chanel);
            $banyak     = $result->num_rows();
            if ($banyak > 0) {
                $DataChanel = $result->result();

                foreach ($DataChanel as $key => $value) {
                    $html .= "<tr>";
                    $html .= "<td>" . ($key + 1) . "</td>";
                    $html .= "<td>" . $value->name . "</td>";
                    $html .= "<td>" . $value->message_type . "</td>";
                    $html .= "</td>";
                }
            } else {
                $html .= "Data Empty";
            }
            $dataRowChanel = $html;

            $sql_endpoint = "select a.client_key ,a.api_key ,b.partner_name, c.method_name ,c.partner_method_type ,d.message_type ,c.partner_endpoint 
                                from profile.client_partners a 
                                left join profile.partners b on b.id = a.partner_id 
                                left join profile.partner_endpoints c on c.id = a.endpoint_id 
                                left join referensi.message_type d on d.id = c.message_id 
                            where a.client_id = " . $this->db->escape($id);
            $result     = $this->db->query($sql_endpoint);
            $banyak     = $result->num_rows();

            if ($banyak > 0) {
                $DataEndpoints = $result->result();
                $html = "";
                foreach ($DataEndpoints as $key => $value) {
                    $html .= "<tr>";
                    $html .= "<td>" . ($key + 1) . "</td>";
                    $html .= "<td>" . $value->partner_name . "</td>";
                    $html .= "<td>" . $value->method_name . "</td>";
                    $html .= "<td>" . $value->partner_endpoint . "</td>";
                    $html .= "<td>" . $value->client_key . "</td>";
                    $html .= "<td>" . $value->api_key . "</td>";
                    $html .= "<td>" . $value->partner_method_type . "</td>";
                    $html .= "<td>" . $value->message_type . "</td>";
                    $html .= "</td>";
                }
            } else {
                $html .= "Data Empty";
            }

            $dataRowEndpoint = $html;
        }
        $data = array(
            'clientProfile' => $returnData,
            'rowChanel'     => $dataRowChanel,
            'rowEndpoint'   => $dataRowEndpoint,
            'status'        => $status,
        );

        return $data;
    }
    public function get_edit_file()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;

        $sql        = "SELECT * FROM referensi.message_type a WHERE a.id = " . $this->db->escape($id);
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->row();
            $status     = 1;
        }
        $data = array(
            'thisdata' => $returnData,
            'status' => $status,
        );

        return $data;
    }
    public function get_edit_clientpartner()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;

        $sql        = "select a.client_id ,a.partner_id ,a.api_key ,a.client_key ,b.partner_name ,b.desc_partner  
                            from profile.client_partners a
                            left join profile.partners b on a.partner_id = b.id 
                            where a.client_id = " . $this->db->escape($id) . " 
                        group by a.client_id ,a.partner_id ,a.api_key ,a.client_key ,b.partner_name ,b.desc_partner";
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->result();
            $status     = 1;
        }
        $data = array(
            'thisdata' => $returnData,
            'status' => $status,
        );

        return $data;
    }
    public function getmessagetype()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;
        $addSql     = "";
        $html       = "";

        if ($id != '') {
            // $addSql = " WHERE a.id = ".$this->db->escape($id);
        }

        $sql        = "SELECT a.id as value,a.message_type as label FROM referensi.message_type a " . $addSql;
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->result_array();
            foreach ($returnData as $key => $value) {
                $html .= '<option value="' . $value['value'] . '">' . $value['label'] . '</option>';
            }
            $status     = 1;
        }
        $data = array(
            'thisdata' => $returnData,
            'status' => $status,
            'htmldata' => $html,
        );

        return $data;
    }
    public function getselectpartner()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;
        $addSql     = "";

        if ($id != '') {
            $addSql = " AND a.id = " . $this->db->escape($id);
        }

        $sql        = "SELECT a.id as value,a.partner_name as label FROM profile.partners a WHERE 1=1 AND a.is_active = 't' " . $addSql;
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->result_array();
            $status     = 1;
        }
        $data = array(
            'thisdata' => $returnData,
            'status' => $status,
        );

        return $data;
    }
    public function getallpartner()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;
        $addSql     = "";

        if ($id != '') {
            $addSql = " AND a.id = " . $this->db->escape($id);
        }

        $sql        = "SELECT * FROM profile.partners a WHERE 1=1 AND a.is_active = 't' " . $addSql;
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->row();
            $status     = 1;
        }
        $data = array(
            'thisdata' => $returnData,
            'status' => $status,
        );

        return $data;
    }
    public function getaddrowmethod()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;
        $addSql     = "";
        $html       = "";

        if ($id != '') {
            $addSql = " AND a.partner_id IN (" . $id . ") ";
        } else {
            $addSql = " AND a.partner_id = 0";
        }

        $sql        = "SELECT a.*,b.message_type,c.partner_name
                            FROM profile.partner_endpoints a
                            LEFT JOIN referensi.message_type b on b.id = a.message_id
                            LEFT JOIN  profile.partners c on c.id = a.partner_id
                        WHERE 1=1 AND a.is_active = 't' " . $addSql;
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->result();

            foreach ($returnData as $key => $value) {
                $html .= '<tr id="trmethod_"' . $key . '>';
                $html .= '<td>' . $value->partner_name . '</td>';
                $html .= '<td>' . $value->method_name . '</td>';
                $html .= '<td>' . $value->partner_endpoint . '</td>';
                $html .= '<td>' . $value->message_type . '</td>';
                // $html .= '<td><button type="button" class="btn btn-danger waves-effect btn-label btn-sm waves-light" onclick="deleteRowMethod('.$key.')"><i class="bx bxs-trash label-icon"></i> Delete</button></td>';
                $html .= '</tr>';
            }
            $status     = 1;
        } else {
            $status     = 1;
            $html       = '<tr>Empty data...</tr>';
        }
        $data = array(
            'thisdata' => $html,
            'status' => $status,
        );

        return $data;
    }
    public function getchanelpackage()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;
        $addSql     = "";
        $html       = "";
        $packname   = "";
        $select     = $this->getmessagetype();
        // var_dump($select['thisdata']);exit;

        switch ($id) {
            case '1':
                $addSql = " AND a.is_basic = 't'";
                $packname = "Basic";
                break;
            case '2':
                $addSql = " AND a.is_pro = 't'";
                $packname = "Pro";
                break;
            case '3':
                $addSql = " AND a.is_advance = 't'";
                $packname = "Advance";
                break;

            default:
                # code...
                break;
        }

        $sql        = "SELECT * 
                            FROM referensi.chanel a
                        WHERE 1=1 AND a.is_active = 't' " . $addSql;
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) {
            $returnData = $result->result();

            foreach ($returnData as $key => $value) {
                $html .= '<tr id="trmethod_"' . $key . '>';
                $html .= '<td>' . $packname . '</td>';
                $html .= '<td>' . $value->name . '<input type="hidden" name="arridchanel[]" value="' . $value->id . '"></td>';
                $html .= '<td><select class="form-control getmesstype" name="messtype-chanel[]" >' . $select['htmldata'] . '</select></td>';
                $html .= '</tr>';
            }
            $status     = 1;
        } else {
            $status     = 1;
            $html       = '<tr>Empty data...</tr>';
        }
        $data = array(
            'thisdata' => $html,
            'status' => $status,
        );

        return $data;
    }
}
