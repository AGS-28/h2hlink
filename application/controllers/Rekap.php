<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Rekap extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_rekap');
		$this->load->model('Model_master');
	}

	public function client()
	{
		//Tittle
		$tittle['title'] 	= 'Rekap';
		$tittle['li_1'] 	= 'Minia';
		$tittle['li_2'] 	= 'Rekap Client';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/js/pages/pass-addon.init.js"></script>';
		$data['addjs'] 		.= '<script src="'.base_url().'assets/main/js/rekap.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$param['data_client'] 	 = $this->Model_master->get_data_client();
		$param['data_partner'] 	 = $this->Model_master->get_data_partner();
		
		$data['content']    	= $this->load->view('main/view/rekap_client',$param,true);
		$this->load->view('main/template',$data);
	}
}
