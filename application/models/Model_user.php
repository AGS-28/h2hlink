<?php
class Model_user extends CI_Model
{
    function get_data_user()
    {
        $start         = $this->input->post('start');
        $length     = $this->input->post('length');
        $post         = $this->input->post('formdata');
        $arrPost     = postajax_toarray($post);
        $addSql     = '';

        if (isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id_user AS VARCHAR(3))) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.username) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.email) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(a.name) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(b.groupname) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(c.client_name) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(c.npwp) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(c.npwp) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . ')';
            $addSql .= ' OR lower(c.address) LIKE lower(' . $this->db->escape('%' . $arrPost['searchkey'] . '%') . '))';
        }

        $sql_total     = 'select a.id_user,a.username ,a.email ,a.name,a.createdate ,a.lastupdate ,a.userupdate ,a.is_active ,a.user_tipe ,a.address,
                            a.phone_number ,a.profile_picture ,b.groupname ,c.client_name ,c.npwp ,c.nib ,c.address ,c.id as id_client,
                            c.handphone_no ,c.telephone_no,c."validate" ,c.valid_until,a.client_id,a.id_groups,d.client_key ,d.api_key,e.partner_name ,e.desc_partner 
                        from users."user" a 
                        left join users."groups" b on a.id_groups = b.id 
                        left join profile.clients c on c.id = a.client_id
                        left join profile.client_partners d on d.client_id = c.id 
                        left join profile.partners e on e.id = d.partner_id  
                        where 1=1 ' . $addSql . ' 
                        group by 
                            a.id_user,a.username ,a.email ,a.name,a.createdate ,a.lastupdate ,a.userupdate ,a.is_active ,a.user_tipe ,a.address,
                            a.phone_number ,a.profile_picture ,b.groupname ,c.client_name ,c.npwp ,c.nib ,c.address ,c.id,
                            c.handphone_no ,c.telephone_no,c."validate" ,c.valid_until,a.client_id,a.id_groups,d.client_key ,d.api_key,e.partner_name ,e.desc_partner
                        order by a.createdate desc;';

        $result_total     = $this->db->query($sql_total);
        $banyak         = $result_total->num_rows();

        if ($banyak > 0) {
            $sql = 'select a.id_user,a.username ,a.email ,a.name,a.createdate ,a.lastupdate ,a.userupdate ,a.is_active ,a.user_tipe ,a.address,
                        a.phone_number ,a.profile_picture ,b.groupname ,c.client_name ,c.npwp ,c.nib ,c.address ,c.id as id_client,
                        c.handphone_no ,c.telephone_no,c."validate" ,c.valid_until,a.client_id,a.id_groups,d.client_key ,d.api_key,e.partner_name ,e.desc_partner 
                    from users."user" a 
                    left join users."groups" b on a.id_groups = b.id 
                    left join profile.clients c on c.id = a.client_id
                    left join profile.client_partners d on d.client_id = c.id 
	                left join profile.partners e on e.id = d.partner_id  
                    where 1=1 ' . $addSql . ' 
                    group by 
                        a.id_user,a.username ,a.email ,a.name,a.createdate ,a.lastupdate ,a.userupdate ,a.is_active ,a.user_tipe ,a.address,
                        a.phone_number ,a.profile_picture ,b.groupname ,c.client_name ,c.npwp ,c.nib ,c.address ,c.id,
                        c.handphone_no ,c.telephone_no,c."validate" ,c.valid_until,a.client_id,a.id_groups,d.client_key ,d.api_key,e.partner_name ,e.desc_partner
                    order by a.createdate desc 
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

    public function getselectgroup()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;
        $addSql     = "";

        if ($id != '') {
            $addSql = " AND a.id = " . $this->db->escape($id);
        }

        $sql        = "SELECT a.id as value,a.groupname as label FROM users.groups a WHERE 1=1 AND a.is_active = 't' " . $addSql;
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
    public function getselectclient()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;
        $addSql     = "";

        if ($id != '') {
            $addSql = " AND a.id = " . $this->db->escape($id);
        }

        $sql        = "SELECT a.id as value,concat(a.client_name,' - ',a.nib) as label FROM profile.clients a WHERE 1=1 AND a.is_active = 't' " . $addSql;
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

    public function add_user()
    {
        $post         = $this->input->post('postdata');
        $arrPost     = postajax_toarray($post);

        $username       = $arrPost['username'];
        $email          = $arrPost['email'];
        $name           = $arrPost['name'];
        $password       = $arrPost['password'];
        $retpassword    = $arrPost['retpassword'];
        $address        = $arrPost['address'];
        $hp             = $arrPost['hp'];
        $groupid        = $arrPost['groupid'];
        $is_active      = $arrPost['status'];

        $updated    = $arrPost['updated'];
        $status     = 0;
        $errortext  = '';
        $data       = array();

        if ($password == '') {
            $errortext          = "Password must be insert !!!";
            $data['status']     = $status;
            $data['errorText']  = $errortext;
            return $data;
            exit;
        }

        if ($password !== $retpassword) {
            $errortext          = "Password and Retype Password not same !!!";
            $data['status']     = $status;
            $data['errorText']  = $errortext;
            return $data;
            exit;
        }


        if ($groupid == '3') {
            $clientid       = $arrPost['clientid'];
        } else {
            $clientid       = null;
        }

        $arrayInsert = array(
            'username'      => $username,
            'email'         => $email,
            'name'          => $name,
            'id_groups'     => $groupid,
            'password'      => password_hash($password, PASSWORD_BCRYPT),
            'createdate'    => date('Y-m-d H:i:s'),
            'lastupdate'    => null,
            'userupdate'    => null,
            'is_active'     => $is_active,
            'phone_number'  => $hp,
            'client_id'     => $clientid,
            'user_tipe'     => 1,
            'address'       => $address,
        );

        if ($updated == "1") {
            $idnya = $arrPost['idnya'];
            $arrayInsert = array(
                'username'      => $username,
                'email'         => $email,
                'name'          => $name,
                'id_groups'     => $groupid,
                'password'      => password_hash($password, PASSWORD_BCRYPT),
                'lastupdate'    => date('Y-m-d H:i:s'),
                'userupdate'    => $this->session->userdata('username'),
                'is_active'     => $is_active,
                'phone_number'  => $hp,
                'client_id'     => $clientid,
                'user_tipe'     => 1,
                'address'       => $address,
            );
            $this->db->where('id_user', $idnya);
            $this->db->update('users.user', $arrayInsert);
        } else {

            $cek_username = "SELECT * FROM users.user a where a.username = '" . $username . "'";
            $result = $this->db->query($cek_username);

            if ($result->num_rows() > 0) {
                $errortext          = "Username has used, please enter another Username...";
                $data['status']     = $status;
                $data['errorText']  = $errortext;
                return $data;
                exit;
            }
            $this->db->insert('users.user', $arrayInsert);
        }


        if ($this->db->affected_rows() > 0) {
            $status = 1;
        } else {
            $errortext = "General Errors... !!";
        }

        $data['status']     = $status;
        $data['errorText']  = $errortext;

        return $data;
    }

    public function get_edit_user()
    {
        $id         = $this->input->post('id');
        $data       = array();
        $status     = 0;

        $sql        = "SELECT * FROM users.user a WHERE a.id_user = " . $this->db->escape($id);
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
}
