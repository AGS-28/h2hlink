<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Home extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		// $this->load->model('Model_profile');
	}

	public function index()
	{
		//Tittle
		$tittle['title'] 	= 'Dashboard';
		$tittle['li_1'] 	= 'WS Portal';
		$tittle['li_2'] 	= 'Dashboard';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/js/pages/dashboard.init.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	= $this->load->view('main/partials/page-title', $tittle,true);
		
		$data['content']    	= $this->load->view('main/view/dashboard',$param,true);
		$this->load->view('main/template',$data);
	}

	public function logout() {
		$this->session->sess_destroy();
    	redirect('auth','refresh');
	}
}
