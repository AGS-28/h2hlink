<?php
class Model_auth extends CI_Model
{
    function login($preferensi = '')
    {
        //input POST
        $username   = $this->input->post('username');
        $cryptpass  = $this->input->post('password');

        //default variable
        $returnData     = array();
        $status         = 0;
        $label          = "-";
        $txt            = "-";

        $get_pass = "SELECT a.id_user,a.password from users.user a where a.username = " . $this->db->escape($username) . ";";
        $ret = $this->db->query($get_pass);
        if ($ret->num_rows() > 0) {
            $passDB         = $ret->row()->password;
            $passwordPost   = decryptpassword($cryptpass);
            $isPassword     = decryptpassword($passDB);

            if ($passwordPost == $isPassword) {
                $id_user    = $ret->row()->id_user;
                $get_user    = "SELECT a.username,a.id_user,b.groupname,a.email,a.name,a.is_active,a.user_tipe,a.profile_picture,
                                      a.address,a.phone_number,a.id_groups, a.client_id
                                    FROM users.user a
                                    LEFT JOIN users.groups b on b.id = a.id_groups
                                WHERE a.id_user = " . $id_user . ";";

                $exec       = $this->db->query($get_user);
                $rowuser    = $exec->num_rows();
                if ($rowuser > 0) {
                    $datauser  = $exec->row();
                    if ($datauser->is_active == "t") {
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
                        foreach ($set_session as $key => $param) {
                            foreach ($param as $key => $value) {
                                // var_dump('key', $key, 'value', $value, '====================');
                                $this->session->set_userdata($key, $value);
                            }
                            // die;
                        }

                        $this->session->set_userdata('menu', getMenu($datauser->id_groups));
                        $status      = 1;
                    } else {
                        $label  = "Opps!";
                        $txt    = "User anda tidak aktif !!!";
                    }
                } else {
                    $label  = "Opps!";
                    $txt    = "User Error";
                }
            } else {
                $label  = "Opps!";
                $txt = "Password Salah...!";
            }
        } else {
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
        $this->load->library('email');
        $this->load->helper('email');
        $emailOK = 0;
        $email_send = "Email / Username Tidak Ditemukan..";
        $debug = "-";
        $subject = "-";
        $from = "portal@h2hlink.com";

        //config email
        $config['mailtype'] = 'html';
        $config['protocol'] = 'smtp';



        $email = $this->input->post('email');

        $cek = "SELECT * FROM users.user a where a.username = " . $this->db->escape($email) . " OR a.email = " . $this->db->escape($email);

        $ret_cek = $this->db->query($cek);
        $banyak = $ret_cek->num_rows();
        if ($banyak > 0) {
            $result = $ret_cek->row();
            $email_send = $result->email;
            $id_user = $result->id_user;
            $key = encryptpassword($id_user);
            $key_id = bin2hex($key);

            $subject = "=== RESET PASSWORD H2Hlink.com ===";

            $message = '<p>Yth. Bapak/Ibu Pengguna H2HLink.com</p>
            <p>Terima kasih atas partisipasi Anda dalam menggunakan aplikasi Portal H2hLink</p>
            <p>Berikut ini adalah informasi data Akun Anda</p>
            
            <table border="0" cellpadding="1" cellspacing="1" style="width:100%">
                <tbody>
                    <tr>
                        <td style="width:30%;font-weight:bold">Username</td>
                        <td style="width:5%;font-weight:bold">:</td>
                        <td style="width:65%;font-weight:bold">' . $result->username . '</td>
                    </tr>
                    <tr>
                        <td style="width:30%;font-weight:bold">Nama User</td>
                        <td style="width:5%;font-weight:bold">:</td>
                        <td style="width:65%;font-weight:bold">' . $result->name . '</td>
                    </tr>	
                </tbody>
            </table>
            
            <p>Silahkan melakukan Reset Password dengan klik link berikut :</p>
            
            <a href="' . site_url() . '/auth/reset/' . $key_id . '" style="text-decoration:none;display:inline-block;color:#ffffff;background-color:#3aaee0;border-radius:4px;width:auto;border-top:0px solid transparent;font-weight:400;border-right:0px solid transparent;border-bottom:0px solid transparent;border-left:0px solid transparent;padding-top:5px;padding-bottom:5px;font-family:Nunito,Arial,Helvetica Neue,Helvetica,sans-serif;text-align:center;word-break:keep-all" target="_blank" data-saferedirecturl="https://www.google.com/url?q=https://ska.kemendag.go.id/reset-pass/c42a239d36d22c5688b3d7774403fe3e863bc81268f964592c50eefc4a526ff03e76b194c34f74bc69884ee59f1fe0aeaa6c450d28db9a539d4a98be6dff9e82b6d5a40720d60ec1e8298b1edddee526&amp;source=gmail&amp;ust=1674722880381000&amp;usg=AOvVaw1ANoZrH54YXH3QeHSFR8Jr"><span style="padding-left:20px;padding-right:20px;font-size:14px;display:inline-block;letter-spacing:normal"><span style="line-height:28px">Reset Password</span></span></a>';
            // echo $message;exit;
            $bcc     = "muhammadafifp2997@gmail.com";

            $this->email->initialize($config);
            $this->email->from($from);
            $this->email->to($email_send);
            $this->email->bcc('muhammadafif2908@gmail.com');
            $this->email->subject($subject);
            $this->email->message($message);
            if ($this->email->send()) {
                $emailOK = 1;
                $arrayUpdate = array(
                    'reset' => 1,
                    'datereset' => date('Y-m-d H:i:s'),
                );
                $this->db->where('id_user', $id_user);
                $this->db->update('users.user', $arrayUpdate);
            } else {
                $emailOK = 99;
                $email_send = " Kirim email ke " . $email_send;
            }
            $debug = $this->email->print_debugger(array('headers'));
        }


        $data['status']         = $emailOK;
        $data['debug_message']  = $debug;
        $data['from']           = $from;
        $data['to']             = $email_send;
        $data['config_mail']    = $config;
        $data['subject']        = $subject;

        return $data;
    }

    function send_email($config = array(), $to = "", $message = "", $subject = "", $bcc = "")
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
        if ($this->email->send()) {
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

    public function check_link($id)
    {
        $sql     = "SELECT * FROM users.user WHERE id_user = " . $this->db->escape($id);
        $result  = $this->db->query($sql);
        $status = "99";
        $date   = "";

        $banyak = $result->num_rows();
        if ($banyak > 0) {
            $data   = $result->row();
            $status = $data->reset;
            $date   = $data->datereset;
        }


        $returndata['status'] = $status;
        $returndata['date']   = $date;

        return $returndata;
    }
}
