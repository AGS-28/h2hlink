<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Auth extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		// $this->load->model('Model_profile');
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
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	= '';
		
		$data['content']    	= $this->load->view('main/view/login',$param,true);
		$this->load->view('main/template',$data);
	}

	public function logout() {
		$this->session->sess_destroy();
    	redirect('auth','refresh');
	}
}
