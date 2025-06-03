<?php
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * @property CI_Input $input
 * @property Model_master $Model_master
 * @property Model_create_ska $Model_create_ska
 */
class Createska extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_create_ska');
		$this->load->model('Model_master');
		cek_session(array(1, 2, 3), 'main');
		$this->load->library('form_validation');
	}

	public function index()
	{
		//Tittle
		$tittle['title'] 	= 'Upload Draft SKA';
		$tittle['li_1'] 	= 'Create SKA';
		$tittle['li_2'] 	= 'Upload Draft SKA';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="' . base_url() . 'assets/main/js/create_ska.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['data_partner'] 	 = $this->Model_master->get_data_partner();
		$param['data_extention'] = $this->Model_master->get_data_extention();
		$param['data_type_doc']  = $this->Model_master->get_data_ref_document(1);
		$param['data_ipska']  = $this->Model_master->get_data_ref_ipska();
		$param['data_type_form']  = $this->Model_master->get_data_ref_form();
		$param['data_ref_document']  = $this->Model_master->get_data_client_ref_document($this->session->userdata('client_id'));
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle, true);

		$data['content']    	= $this->load->view('main/view/upload_draft', $param, true);
		$this->load->view('main/template', $data);
	}

	public function upload_draft()
	{
		$this->form_validation->set_rules('client_partner', 'Username', 'required');
		$this->form_validation->set_rules('ipska', 'IPSKA', 'required');
		$this->form_validation->set_rules('tipe_form', 'Tipe Form', 'required');
		$this->form_validation->set_rules('pengajuan', 'Tipe Pengajuan', 'required');

		if ($this->form_validation->run() == FALSE) {
			$response = [
				'status' => 'error',
				'messages' => $this->form_validation->error_array()
			];
			echo json_encode($response);
		} else {
			$arr_message_type = $this->Model_master->get_message_type();
			echo json_encode($this->Model_create_ska->upload_draft($arr_message_type));
		}
	}

	public function upload_document()
	{
		//Tittle
		$tittle['title'] 	= 'Upload Document SKA';
		$tittle['li_1'] 	= 'Create SKA';
		$tittle['li_2'] 	= 'Upload Document SKA';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="' . base_url() . 'assets/main/js/create_ska.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle, true);
		$param['ref_document'] 	 = $this->Model_master->get_data_ref_document();
		$param['data_aju'] 	     = $this->Model_master->get_data_aju(1, $this->session->userdata('client_id'));
		$param['ref_kppbc'] 	 = $this->Model_master->get_data_ref_kppbc();

		$data['content']    	= $this->load->view('main/view/upload_document', $param, true);
		$this->load->view('main/template', $data);
	}

	public function save_upload_document()
	{
		echo json_encode($this->Model_create_ska->save_upload_document());
	}

	public function get_data_document()
	{
		$arrRet 	= $this->Model_create_ska->get_data_document();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

			$title = "'Views Document'";
			$func_send = "send_document";
			$func_name = "'get_view_document'";
			$html[] = $no;
			$html[] = '<b> Aju Number : <font color="#4549a2">' . $data['no_aju'] . '</font><br/> Created Date : </b>' . $data['created_at_message'];
			$html[] = '<b> Name : <font color="#d75350">' . $data['client_name'] . '</font></b><br/><b> NIB : </b>' . $data['nib'] . '<br/><b> NPWP : </b>' . $data['npwp'];
			$html[] = '<b> Name : <font color="#4549a2">' . $data['partner_name'] . '</font><br/> End Point : </b>' . $data['partner_endpoint'];
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="show_modal_document(' . $data['id'] . ',' . $title . ',0,' . $func_name . ')">Views Document</a></li>
								<li><a class="dropdown-item" href="#" onclick="confirm_kirim(' . $func_send . ',' . $data['id'] . ')">Send Document</a></li>
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

	public function delete_document()
	{
		echo json_encode($this->Model_create_ska->delete_document());
	}

	public function get_path_document()
	{
		$data['data'] = json_encode($this->Model_master->get_path_document());
		echo $this->load->view('main/view/v_document', $data, true);
	}

	public function get_data_draft()
	{
		$arrRet 	= $this->Model_create_ska->get_data_draft();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;

		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

			$title = "'Views Document'";
			$func_name = "'get_view_draft'";

			$jenis_form = '-';
			if ($data['jenis_form'] == '1') {
				$jenis_form = 'e-form';
			} else if ($data['jenis_form'] == '0') {
				$jenis_form = 'Konvensional';
			}

			$no_serial = $data['no_serial_blanko'];
			if ($no_serial == '') {
				$no_serial = '-';
			}

			$arr_status = array(1, 4, 5);
			$next = '';
			$delete = '';
			$view_draft_ska = '';
			if (in_array($data['status'], $arr_status)) {
				if ($data['status'] == 1) {
					$delete = '<li><a class="dropdown-item" href="#" onclick="confirm_kirim(delete_draft,' . $data['id'] . ');">Delete Draft</a></li>';
				}
				$next = '<li><a class="dropdown-item" href="#" onclick="confirm_kirim(send_draft,' . $data['id'] . ');">Send Draft</a></li>';
			}

			if ($data['status'] == 3 && isset($data['url_draft_ska']) && $data['url_draft_ska'] !== '') {
				$view_draft_ska = '<li><a class="dropdown-item" href="' . $data['url_draft_ska'] . '" target="_blank">View Draft SKA</a></li>';
			}

			$html[] = $no;
			$html[] = '<b> Draft Number : <font color="#d75350">' . $data['no_draft'] . '</font><br/><b> Aju Number : <font color="#d75350">' . $data['no_aju'] . '</font><br/><b> IPSKA : <font color="#4549a2">' . $data['ipska'] . '</font><br/><b> Form : <font color="#4549a2">' . $data['cotype'] . '</font><br/></b><b> Jenis Pengajuan : <font color="#4549a2">' . $jenis_form . '</font></b><br/><b> Nomor Serial Blanko : <font color="#4549a2">' . $no_serial . '</font><br/></b><b> Status : <font color="#d75350">' . $data['status_desc'] . '</font></b><br/><b> Created Date : </b>' . $data['created_at'];
			$html[] = '<b> Name : <font color="#d75350">' . $data['client_name'] . '</font></b><br/><b> NIB : </b>' . $data['nib'] . '<br/><b> NPWP : </b>' . $data['npwp'];
			$html[] = '<b> Name : <font color="#4549a2">' . $data['partner_name'] . '</font>';
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="show_modal_document(' . $data['id'] . ',' . $title . ',0,' . $func_name . ')">Views Draft</a></li>
								' . $view_draft_ska . '
								' . $delete . '
								' . $next . '
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

	public function get_view_document()
	{
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
		$id         = $arrPost['header_id'];

		$arrRet 	= $this->Model_create_ska->get_view_document($id);
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

			$value = $data['value'];
			if ($value != '') {
				if (strpos($value, '.') !== false) {
					$exp_value = explode('.', $value);
					if ($exp_value[1]) {
						$jml = strlen($exp_value[1]);
						$value = number_format($value, $jml);
					} else {
						$value = number_format($value);
					}
				} else {
					$value = number_format($value);
				}
			}

			$title = "'Views Document " . $data['name'] . "'";
			$func_name = "'get_path_document'";
			$html[] = $no;
			$html[] = $data['name'];
			$html[] = $data['document_number'];
			$html[] = $data['document_date'];
			$html[] = $data['kppbc'];
			$html[] = $value;
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="show_modal_document(' . $data['id'] . ',' . $title . ',1,' . $func_name . ')">Views Document</a></li>
								<li><a class="dropdown-item" href="#" onclick="delete_document(' . $data['id'] . ', ' . $id . ')">Delete Document</a></li>
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

	public function get_view_draft()
	{
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
		$id         = $arrPost['header_id'];

		$arrRet 	= $this->Model_create_ska->get_view_draft($id);
		// var_dump($arrRet);die();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

			$html[] = $no;
			$html[] = $data['name'];
			$html[] = $data['message_type'];
			$html[] = $data['file_name'];
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="' . base_url() . $data['path'] . '" download>Download Document</a></li>
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

	public function send_document()
	{
		$url = ENV_API_SKA_STORE.'/api/v1/upload-file-coo';

		$payload = array(
			'id' => $this->input->post('id'),
			'client_id' => $this->session->userdata('client_id'),
		);

		$json_data = json_encode($payload);
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
			CURLOPT_POSTFIELDS => $json_data,
			CURLOPT_HTTPHEADER => array(
				'X-API-KEY: host2host.token',
				'Content-Type: application/json',
			),
		));

		$response = curl_exec($curl);
		$http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
		curl_close($curl);

		if ($http_status != 200) {
			$arr_res = array(
				'kode' => 400,
				'keterangan' => 'Service error, please try again periodically.'
			);

			echo json_encode($arr_res);
		} else {
			$arr_res = array(
				'kode' => 200,
				'keterangan' => 'Process Successfully'
			);

			echo json_encode($arr_res);
		}
	}

	public function cek_document()
	{
		$id = $this->input->post('id');
		$arrRet = $this->Model_create_ska->get_view_document($id, 1);
		$arrData = $arrRet['arrData'];
		$jmlData = $arrRet['totalRow'];
		$arr_dok = array();

		if ($jmlData > 0) {
			foreach ($arrData as $key => $value) {
				if ($value['dok_id'] == '1' or $value['dok_id'] == '6') {
					$arr_dok[] = 1;
				}
			}

			if (COUNT($arr_dok) < 2) {
				echo 0;
			} else {
				echo 1;
			}
		} else {
			echo 0;
		}
	}

	public function send_draft()
	{
		$id = $this->input->post('id');
		// $url = 'http://103.191.92.175:8290/getDraftCoo';
		// $url = $this->Model_master->get_url_wso2(1);
		$url = ENV_API_SKA_STORE.'/api/v1/send-request-ska';
		$data = $this->Model_master->get_data_client_channel($id);

		$array_all = array(
			'idDraft' => $id,
			'idClient' => $data[0]['id_client'],
			'idChannel' => $data[0]['id_channel']
		);

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
			CURLOPT_POSTFIELDS => $json_data,
			CURLOPT_HTTPHEADER => array(
				'X-API-KEY: host2host.token',
				'Content-Type: application/json',
			),
		));

		$response = curl_exec($curl);
		$http_status = curl_getinfo($curl, CURLINFO_HTTP_CODE);
		curl_close($curl);
		// var_dump($response);
		// die;
		if ($http_status != 200) {
			$arr_err = array(
				'kode' => 400,
				'keterangan' => 'Service error, please try again periodically.'
			);

			echo json_encode($arr_err);
		} else {
			$arr_err = array(
				'kode' => 200,
				'keterangan' => 'Process Successfully'
			);

			echo json_encode($arr_err);
		}
	}

	public function v_serial_blanko()
	{
		echo $this->load->view('main/view/v_serial_blanko', '', true);
	}

	public function delete_draft()
	{
		echo json_encode($this->Model_create_ska->delete_draft());
	}
}
