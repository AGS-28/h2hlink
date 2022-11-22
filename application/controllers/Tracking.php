<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Tracking extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		// $this->load->model('Model_profile');
	}

	public function index()
	{
		//Tittle
		$tittle['title'] 	= 'Tracking';
		$tittle['li_1'] 	= 'WS Portal';
		$tittle['li_2'] 	= 'Tracking';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/js/pages/tracking.init.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	= $this->load->view('main/partials/page-title', $tittle,true);
		
		$data['content']    	= $this->load->view('main/view/tracking',$param,true);
		$this->load->view('main/template',$data);
	}

	public function cari()
	{
		var_dump($_POST);die();
	}

}
