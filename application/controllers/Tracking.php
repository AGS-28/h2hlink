<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Tracking extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_tracking');
		$this->load->model('Model_master');
	}

	public function index()
	{
		//Tittle
		$tittle['title'] 	= 'Tracking';
		$tittle['li_1'] 	= 'WS Portal';
		$tittle['li_2'] 	= 'Tracking Log';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/tracking.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$param['data_client'] 	 = $this->Model_master->get_data_client();
		$param['data_partner'] 	 = $this->Model_master->get_data_partner();
		$param['data_end_point'] = $this->Model_master->get_data_end_point();
		$param['tipe'] 			 = 0;

		if($this->input->post('tipe') != '') {
			$param['tipe'] = 1;
			$param['partner_id'] = $this->input->post('partner_id');
			if($this->input->post('tipe') == '0') {
				$param['data_client_byid'] = $this->Model_master->get_data_client($this->input->post('client_id'));
			}
			
			$param['years_select'] = explode(',', $this->input->post('years_tracking'));
			$param['month_select'] = explode(',', $this->input->post('month_tracking'));
		}

		$data['content']    	= $this->load->view('main/view/tracking',$param,true);
		$this->load->view('main/template',$data);
	}

	public function cari()
	{
		$arrRet 	= $this->Model_tracking->get_data();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		// var_dump($arrData);die();
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

			$html[] = $no;
			$html[] = '<b> Name : <font color="#d75350">'.$data['client_name'].'</font></b><br/><b> NIB : </b>'.$data['nib'].'<br/><b> NPWP : </b>'.$data['npwp'];
			$html[] = '<b> Name : <font color="#4549a2">'.$data['partner_name'].'</font><br/> End Point : </b>'.$data['partner_endpoint'];
			$html[] = '<b> Aju Number : <font color="#4549a2">'.$data['no_aju'].'</font><br/> Created : </b>'.$data['created_at_message'];
			// $json_pretty = json_decode(json_encode($data['message_content']));

			$views = '';
			if($data['endpoint_id'] == '1') {
				$views = '
						<li><a class="dropdown-item" href="#" onclick="show_modal('.$data['id'].',2);">Views Data</a></li>
						<li><a class="dropdown-item" href="#" onclick="show_modal('.$data['id'].',3);">Views Draft</a></li>
						';
			}

			if($data['endpoint_id'] == '4') {
				$views = '<li><a class="dropdown-item" href="#" onclick="show_modal('.$data['id'].',3);">Views Draft</a></li>';
			}

			if($data['endpoint_id'] == '2') {
				$views = '<li><a class="dropdown-item" href="#" onclick="show_modal('.$data['id'].',4);">Views Document</a></li>';
			}

			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="show_modal('.$data['id'].',0);">Request</a></li>
								<li><a class="dropdown-item" href="#" onclick="show_modal('.$data['id'].',1);">Respons</a></li>'.$views.'
							</ul>
						</div>
					';
			$row[]  = $html;

			$no++;
		}

		$return['data'] 			= isset($row) ? $row : array();
		$return['recordsTotal'] 	= $arrRet['totalRow'];
		$return['recordsFiltered'] 	= $arrRet['totalRow'];
		$return['error'] 			= '';

        unset($row);
        echo json_encode($return);
	}

	public function cari_ska()
	{
		$arrRet 	= $this->Model_tracking->get_data_ska();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		// var_dump($arrData);die();
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}
			
			$nib = "'".$data['nib']."'";
			$npwp = "'".$data['npwp']."'";
			$user_endpoint = "'".$data['user_endpoint']."'";
			$no_aju = "'".$data['no_aju']."'";

			$coo = $this->Model_tracking->get_coo($no_aju);

			$html[] = $no;
			$html[] = '<b> Name : <font color="#d75350">'.$data['client_name'].'</font></b><br/><b> NIB : </b>'.$data['nib'].'<br/><b> NPWP : </b>'.$data['npwp'];
			$html[] = '<b> Name : <font color="#4549a2">'.$data['partner_name'].'</font>';
			$html[] = '<b> Aju Number : <font color="#4549a2">'.$data['no_aju'].'</font><br/> SKA Number : </b>'.$coo['no_ska'].'<br/><b>SKA Date : </b>'.$coo['tgl_ska'].'<br/><b> Status : </b>'.$coo['status_ska'];
			
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="get_draftcoo('.$no_aju.','.$nib.','.$npwp.','.$user_endpoint.',4);">Get Draft</a></li>
								<li><a class="dropdown-item" href="#" onclick="get_draftcoo('.$no_aju.','.$nib.','.$npwp.','.$user_endpoint.',5);">Get Coo</a></li>
								<li><a class="dropdown-item" href="#" onclick="get_draftcoo('.$no_aju.','.$nib.','.$npwp.','.$user_endpoint.',3);">Submit Coo</a></li>
							</ul>
						</div>
					';
			$row[]  = $html;

			$no++;
		}

		$return['data'] 			= isset($row) ? $row : array();
		$return['recordsTotal'] 	= $arrRet['totalRow'];
		$return['recordsFiltered'] 	= $arrRet['totalRow'];
		$return['error'] 			= '';

        unset($row);
        echo json_encode($return);
	}

	public function get_message_respons()
	{
		$tipe = $this->input->post('tipe');
		$data['data'] = $this->Model_tracking->get_message_respons();
		$data['arr_refdokumen'] = $this->Model_master->get_data_ref_document('',1);
		$data['arr_refkppbc'] = $this->Model_master->get_data_ref_kppbc(1);
		$data['refform'] = $this->Model_master->get_data_ref_form(1);

		switch ($tipe) {
			case '0':
				echo $this->load->view('main/view/v_json_request',$data,true);
				break;

			case '1':
				echo $this->load->view('main/view/v_json_respons',$data,true);
				break;

			case '2':
				echo $this->load->view('main/view/v_parsing_json_request',$data,true);
				break;

			case '3':
				echo $this->load->view('main/view/v_draft',$data,true);
				break;
			
			case '4':
				echo $this->load->view('main/view/v_document_pendukung',$data,true);
				break;
			
			default:
				exit;
				break;
		}
	}

	public function show_table_document() 
	{
		$post 		= $this->input->post('formdata');
		$arr_post 	= postajax_toarray($post);
		$index_data = (int)$arr_post['index_data'];
		for ($i = 0; $i < $index_data; $i++) {
			if (isset($html)) {
				unset($html);
			}

			$html[] = $i;
			$html[] = $arr_post['hide_aju_number['.$i.']'];
			$html[] = $arr_post['hide_document_type['.$i.']'];
			$html[] = $arr_post['hide_document_number['.$i.']'];
			$html[] = $arr_post['hide_document_date['.$i.']'];
			$html[] = '<button type="button" class="btn btn-soft-light btn-sm w-xs waves-effect btn-label waves-light"><i class="bx bx-download label-icon"></i> File</button>';
			$row[]  = $html;
		}

		$return['data'] 			= isset($row) ? $row : array();
		$return['recordsTotal'] 	= $index_data;
		$return['recordsFiltered'] 	= $index_data;
		$return['error'] 			= '';

		unset($row);
		echo json_encode($return);
	}

	public function ska()
	{
		//Tittle
		$tittle['title'] 	= 'Tracking';
		$tittle['li_1'] 	= 'WS Portal';
		$tittle['li_2'] 	= 'Tracking SKA';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/tracking.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$param['data_client'] 	 = $this->Model_master->get_data_client();
		$param['data_partner'] 	 = $this->Model_master->get_data_partner();
		$param['data_end_point'] = $this->Model_master->get_data_end_point();
		$param['tipe'] 			 = 2;

		$data['content']    	= $this->load->view('main/view/tracking_ska',$param,true);
		$this->load->view('main/template',$data);
	}

	function get_draftcoo() 
	{
		$no_aju = $this->input->post('aju');
		$nib = $this->input->post('nib');
		$npwp = $this->input->post('npwp');
		$user_endpoint = $this->input->post('user_endpoint');
		$tipe = $this->input->post('tipe');
		$no_serial = $this->input->post('no_serial');
		
		if($tipe != '') {
			$url = $this->Model_master->get_url_wso2($tipe);

			// if($tipe == 4) {
			// 	$url = 'http://103.191.92.175:8290/getDraftCoo';
			// }

			// if($tipe == 5) {
			// 	$url = 'http://103.191.92.175:8290/getCoo';
			// }

			// if($tipe == 3) {
			// 	$url = 'http://103.191.92.175:8290/submitRequestCoo';
			// }
			
			if($tipe == 3) {
				$array_all = array(
					'username' => $user_endpoint,
					'npwp' => $npwp,
					'nib' => $nib,
					'no_aju' => $no_aju,
					'no_serial' => $no_serial
				);
			} else {
				$array_all = array(
					'username' => $user_endpoint,
					'npwp' => $npwp,
					'nib' => $nib,
					'no_aju' => $no_aju
				);
			}

			$json_data = json_encode($array_all);
			$curl = curl_init();
				curl_setopt_array($curl, array(
				CURLOPT_URL => $url,
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_ENCODING => '',
				CURLOPT_MAXREDIRS => 10,
				CURLOPT_TIMEOUT => 0,
				CURLOPT_FOLLOWLOCATION => true,
				CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
				CURLOPT_CUSTOMREQUEST => 'POST',
				CURLOPT_POSTFIELDS =>$json_data,
				CURLOPT_HTTPHEADER => array(
					'x-Gateway-APIKey: ae5653c9-1ba9-4bbb-8955-7da25cd4fd5b',
					'Content-Type: application/json',
					'Cookie: BIGipServer~k8s-dev~Shared~ingress_eska_eska_be_pengajuan_by_webservice=2791200778.28278.0000'
				),
			));

			$response = curl_exec($curl);
			curl_close($curl);

			if($tipe == 5) {
				$json_decode = json_decode($response);
				$kode = $json_decode->kode;
				if($kode == '200') {
					$co_number = $json_decode->data->co_number;
					$co_date = $json_decode->data->co_date;
					$status = $json_decode->data->status;

					$data_update = $this->Model_tracking->update_coo($no_aju, $co_number, $co_date, $status);
					if($data_update == 1) {
						echo $response;
					} else {
						$arr_err = array(
							'kode' => 400,
							'keterangan' => 'Gagal Update Coo'
						);

						echo json_encode($arr_err);
					}
				} else {
					echo $response;
				}
			} else {
				echo $response;
			}
		}
	}

	function get_data_coo()
	{
		$data['data'] = $this->Model_tracking->get_data_coo();
		$data['refform'] = $this->Model_master->get_data_ref_form(1);
		echo $this->load->view('main/view/v_submit_coo',$data,true);
	}

	public function get_path_document()
    {
        $data['data'] = json_encode($this->Model_master->get_path_document());
        echo $this->load->view('main/view/v_document',$data,true);
    }

}
