<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Home extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_home');
		$this->load->model('Model_master');
		cek_session(array(1,2,3),'main');
	}

	public function index()
	{
		// var_dump($this->session->userdata());exit;
		//Tittle
		$tittle['title'] 	= 'Dashboard';
		$tittle['li_1'] 	= 'WS Portal';
		$tittle['li_2'] 	= 'Dashboard';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js//dashboard.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['data_client'] 	= $this->Model_master->get_data_client();
		$param['data_partner'] 	= $this->Model_master->get_data_partner();
		$param['data_draft'] 	= $this->Model_home->get_data_draft();
		$param['data_doc_draft'] 	= $this->Model_home->get_data_doc_draft();
		$param['data_end_point'] 	= $this->Model_home->get_data_end_point();
		$param['data_draft_status'] = $this->Model_home->get_data_draft_status();
		$param['page_title'] 	= $this->load->view('main/partials/page-title', $tittle,true);
		
		$data['content']    	= $this->load->view('main/view/dashboard',$param,true);
		$this->load->view('main/template',$data);
	}

	public function logout() {
		$this->session->sess_destroy();
		redirect('auth','refresh');
	}

	public function get_data_draft_transaction() {
		$data['data'] = $this->Model_home->get_data_draft_transaction();
		$data['tipe'] = 1;
		echo $this->load->view('main/view/v_table_dashboard',$data,true);
	}

	public function get_data_request_transaction() {
		$data['data'] = $this->Model_home->get_data_request_transaction();
		$data['tipe'] = 2;
		echo $this->load->view('main/view/v_table_dashboard',$data,true);
	}

	public function get_data_modal_dashboard() {
		$data['id'] = $this->input->post('id');
		$data['tipe'] = $this->input->post('tipe');
		$data['data'] = $this->Model_home->get_data_modal_dashboard($data['id'], $data['tipe']);
		echo $this->load->view('main/view/v_table_modal_dashboard',$data,true);
	}
}
