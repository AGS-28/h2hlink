<?php
class Model_auth extends CI_Model {
	function login($preferensi='')
	{
        //input POST
		$username   = $this->input->post('username');
        $cryptpass  = $this->input->post('password');

        //default variable
        $returnData     = array();
        $status         = 0;
        $label          = "-";
        $txt            = "-";

        $get_pass = "SELECT a.id_user,a.password from users.user a where a.username = ".$this->db->escape($username).";";
        $ret = $this->db->query($get_pass);
        if($ret->num_rows() >0)
        {
            $passDB         = $ret->row()->password;
            $passwordPost   = decryptpassword($cryptpass);
            $isPassword     = decryptpassword($passDB);
            
            if($passwordPost == $isPassword)
            {
                $id_user    = $ret->row()->id_user;
                $get_user    = "SELECT a.username,a.id_user,b.groupname,a.email,a.name,a.is_active,a.user_tipe,a.profile_picture,
                                      a.address,a.phone_number,a.id_groups, a.client_id
                                    FROM users.user a
                                    LEFT JOIN users.groups b on b.id = a.id_groups
                                WHERE a.id_user = ".$id_user.";";
                
                $exec       = $this->db->query($get_user);
                $rowuser    = $exec->num_rows();
                if($rowuser > 0)
                {
                    $datauser  = $exec->row();
                    if ($datauser->is_active == "t") 
                    {
                        switch ($datauser->id_groups) {
                            case '2': //client user add
                                # code...
                                break;
                            case '3': //partner user add
                                # code...
                                break;
                            
                            default:
                                
                                break;
                        }

                        $set_session = $exec->result_array();
                        foreach ($set_session as $key => $param) 
                        {
                            foreach ($param as $key => $value) {
                                $this->session->set_userdata($key, $value);
                            }
                        }
                        
                        $this->session->set_userdata('menu',getMenu($datauser->id_groups));
                        $status      = 1;
                    }
                    else 
                    {
                        $label  = "Opps!";
                        $txt    = "User anda tidak aktif !!!";
                    }
                    

                }
                else
                {
                    $label  = "Opps!";
                    $txt    = "User Error"; 
                }
            }
            else
            {
                $label  = "Opps!";
                $txt = "Password Salah...!";
            }
            
        }
        else
        {
            $label  = "Opps!";
            $txt    = "Username and tidak ditemukan.";
        }
        $returnData['status']   = $status;
        $returnData['label']    = $label;
        $returnData['txt']      = $txt;
        return $returnData;
	}



}
