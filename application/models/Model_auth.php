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

    function send_recover_pass()
    {
        $email = $this->input->post('email');
        
        $this->load->library('email');
        $this->load->helper('email');
        $emailOK = 0;
        
        $config['mailtype'] = 'html';
        $config['protocol'] = 'smtp';
        $to = "muhammadafif2908@gmail.com";
        $message = "<p>Pesan nya</p>";
        $subject = "TEST Email Atuh..";
        $bcc     = "muhammadafifp2997@gmail.com";

        $param_send['config'] = $config;
        $param_send['to'] = $to;
        $param_send['message'] = $message;
        $param_send['subject'] = $subject;
        $param_send['bcc'] = $bcc;
        echo "<pre>";
        echo json_encode($param_send);exit;
        // $config['charset'] = 'iso-8859-1';
        echo json_encode($config);exit;
        $email = 'muhammadafifp2997@gmail.com';
        $this->email->initialize($config);
        $this->email->from('admin@h2hlink.com');
        $this->email->to('muhammadafifp2997@gmail.com');
        $this->email->bcc('muhammadafif2908@gmail.com');
        $this->email->subject('TEST EMAIL H2HLink.com');
        $message = 'TEST email H2HLink.com';
        $this->email->message($message);
        if ($this->email->send())
        {
            $emailOK = 1;
        }

        echo $emailOK."--".$this->email->print_debugger(array('headers'));
    }

    function send_email($config = array(),$to = "",$message = "",$subject="",$bcc="")
    {
        $json = file_get_contents('php://input');
        $obj  = json_decode($json);

        $config = (array) $obj->config;
        $to = $obj->to;
        $message = $obj->message;
        $subject = $obj->subject;
        $bcc = $obj->bcc;
        $debug_flag = $obj->debug;
        $debug = "no debug!";
        // var_dump($config);exit;

        $this->load->library('email');
        $this->load->helper('email');
        $emailOK = 0;
        
        $this->email->initialize($config);
        $this->email->from('portal@h2hlink.com');
        $this->email->to($to);
        if ($bcc != "") {
            $this->email->bcc($bcc);
        }
        $this->email->subject($subject);
        $this->email->message($message);
        if ($this->email->send())
        {
            $emailOK = 1;
        }
        if ($debug_flag) {
            $debug = $this->email->print_debugger(array('headers'));
        }

        $data['status'] = $emailOK;
        $data['debug_message'] = $debug;
        $data['from'] = 'admin@h2hlink.com';
        $data['to'] = $to;
        $data['config_mail'] = $config;
        $data['subject'] = $subject;

        echo json_encode($data);
    }



}
