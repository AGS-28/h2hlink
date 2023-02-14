<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Auth extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_auth');
		cek_session(0,'');
	}

	public function index()
	{
		//Tittle
		$tittle['title'] 	= 'Dashboard';
		$tittle['li_1'] 	= 'Minia';
		$tittle['li_2'] 	= 'Dashboard';

		//Teamplate
		$data['addmenu'] 	= false;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/js/pages/pass-addon.init.js"></script>';
		$data['addjs'] 		.= '<script src="'.base_url().'assets/main/js/login.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	= '';
		
		$data['content']    	= $this->load->view('main/view/login',$param,true);
		$this->load->view('main/template',$data);
	}
	public function lupa_password()
	{
		//Tittle
		$tittle['title'] 	= 'Dashboard';
		$tittle['li_1'] 	= 'Minia';
		$tittle['li_2'] 	= 'Dashboard';

		//Teamplate
		$data['addmenu'] 	= false;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/js/pages/pass-addon.init.js"></script>';
		$data['addjs'] 		.= '<script src="'.base_url().'assets/main/js/login.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	= '';
		
		$data['content']    	= $this->load->view('main/view/lupapass',$param,true);
		$this->load->view('main/template',$data);
	}
	public function reset()
	{
		$key = $this->uri->segment('3');
		$key_nya = hex2bin($key);
		$id_user = decryptpassword($key_nya);

		$check_link = $this->Model_auth->check_link($id_user);
		
		//Tittle
		$tittle['title'] 	= 'Dashboard';
		$tittle['li_1'] 	= 'Minia';
		$tittle['li_2'] 	= 'Dashboard';

		//Teamplate
		$data['addmenu'] 	= false;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/js/pages/pass-addon.init.js"></script>';
		$data['addjs'] 		.= '<script src="'.base_url().'assets/main/js/login.js"></script>';
		$data['addjs'] 		.= '<script>const hex_id = "'.$key.'"</script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	= '';
		$param['check_link'] 	= $check_link;
		
		$data['content']    	= $this->load->view('main/view/resetpass',$param,true);
		$this->load->view('main/template',$data);
	}

    public function crypt()
    {
        $password = $this->input->post('password');
        echo json_encode(encryptpassword($password));

    }

    public function login()
    {
       echo json_encode($this->Model_auth->login());

    }

    public function send_recover_pass()
    {
       echo json_encode($this->Model_auth->send_recover_pass());

    }
	public function send_email($config=array(),$to = "",$message = "",$subject="",$bcc="")
	{
		$this->Model_auth->send_email($config,$to,$message,$subject,$bcc);
	}

	public function logout() {
		$this->session->sess_destroy();
    	redirect('auth','refresh');
	}
}
