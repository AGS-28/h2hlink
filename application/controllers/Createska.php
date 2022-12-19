<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Createska extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_create_ska');
		$this->load->model('Model_master');
		// cek_session(0,'');
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
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/create_ska.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
        $param['data_partner'] 	 = $this->Model_master->get_data_partner();
        $param['data_extention'] = $this->Model_master->get_data_extention();
        $param['data_type_doc']  = $this->Model_master->get_data_ref_document(1);
        $param['data_ipska']  = $this->Model_master->get_data_ref_ipska();
        $param['data_type_form']  = $this->Model_master->get_data_ref_form();
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);

		$data['content']    	= $this->load->view('main/view/upload_draft',$param,true);
		$this->load->view('main/template',$data);
	}
	
    public function upload_draft()
    {
		$arr_message_type = $this->Model_master->get_message_type();
        echo json_encode($this->Model_create_ska->upload_draft($arr_message_type));
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
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/create_ska.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
        $param['ref_document'] 	 = $this->Model_master->get_data_ref_document();
        $param['data_aju'] 	     = $this->Model_master->get_data_aju(1);
        $param['ref_kppbc'] 	 = $this->Model_master->get_data_ref_kppbc();
		
		$data['content']    	= $this->load->view('main/view/upload_document',$param,true);
		$this->load->view('main/template',$data);
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
			$html[] = '<b> Aju Number : <font color="#4549a2">'.$data['no_aju'].'</font><br/> Created Date : </b>'.$data['created_at_message'];
			$html[] = '<b> Name : <font color="#d75350">'.$data['client_name'].'</font></b><br/><b> NIB : </b>'.$data['nib'].'<br/><b> NPWP : </b>'.$data['npwp'];
			$html[] = '<b> Name : <font color="#4549a2">'.$data['partner_name'].'</font><br/> End Point : </b>'.$data['partner_endpoint'];
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="show_modal_document('.$data['id'].','.$title.',0,'.$func_name.')">Views Document</a></li>
								<li><a class="dropdown-item" href="#" onclick="confirm_kirim('.$func_send.','.$data['id'].')">Send Document</a></li>
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
        $data['data'] = json_encode($this->Model_create_ska->get_path_document());
        echo $this->load->view('main/view/v_document',$data,true);
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

			$html[] = $no;
			$html[] = '<b> Draft Number : <font color="#d75350">'.$data['no_draft'].'</font><br/><b> IPSKA : <font color="#4549a2">'.$data['ipska'].'</font><br/><b> Type Form : <font color="#4549a2">'.$data['cotype'].'</font><br/> Invoice Number : <font color="#4549a2">'.$data['invoice_number'].'</font></b><br/><b> Status : <font color="#d75350">'.$data['status_desc'].'</font></b><br/><b> Created Date : </b>'.$data['created_at'];
			$html[] = '<b> Name : <font color="#d75350">'.$data['client_name'].'</font></b><br/><b> NIB : </b>'.$data['nib'].'<br/><b> NPWP : </b>'.$data['npwp'];
			$html[] = '<b> Name : <font color="#4549a2">'.$data['partner_name'].'</font>';
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="show_modal_document('.$data['id'].','.$title.',0,'.$func_name.')">Views Document</a></li>
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
			if($value != '') {
				$exp_value = explode('.', $value);
				if ($exp_value[1]) {
					$jml = strlen($exp_value[1]);
					$value = number_format($value, $jml);
				} else {
					$value = number_format($value);
				}
			}

            $title = "'Views Document ".$data['name']."'";
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
								<li><a class="dropdown-item" href="#" onclick="show_modal_document('.$data['id'].','.$title.',1,'.$func_name.')">Views Document</a></li>
								<li><a class="dropdown-item" href="#" onclick="delete_document('.$data['id'].', '.$id.')">Delete Document</a></li>
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
								<li><a class="dropdown-item" href="'.base_url().$data['path'].'" download>Download Document</a></li>
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
		$id = $this->input->post('id');
		$arrRet = $this->Model_create_ska->get_view_document($id, 1);
		$arrData = $arrRet['arrData'];
		$jmlData = $arrRet['totalRow'];
		
		if($jmlData > 0) {
			$username = $arrData[0]['user_endpoint'];
			$npwp = $arrData[0]['npwp'];
			$nib = $arrData[0]['nib'];
			$no_aju = $arrData[0]['no_aju'];

			$support_doc = array();
			foreach ($arrData as $key => $value) {
				$doc_type = $value['kode'];
				$kppbc = $value['refkppbc_id'];
				if($kppbc == '') {
					$kppbc = '';
				}

				$val = $value['value'];
				if($val == '') {
					$val = '';
				}

				$doc_no = $value['document_number'];
				$doc_date = $value['document_date'];
				$file = base64_encode(file_get_contents($value['path']));
				
				$support_doc[] = array(
					'doc_type' => $doc_type,
					'kppbc' => $kppbc,
					'value' => $val,
					'doc_no' => $doc_no,
					'doc_date' => $doc_date,
					'file' => 'data:application/pdf;base64,'.$file
				);
			}

			$array_all = array(
				'username' => $username,
				'npwp' => $npwp,
				'nib' => $nib,
				'no_aju' => $no_aju,
				'supporting_doc' => $support_doc
			);

			$json_data = json_encode($array_all);
			$curl = curl_init();
				curl_setopt_array($curl, array(
				CURLOPT_URL => 'http://103.191.92.175:8290/uploadFileCoo',
				CURLOPT_RETURNTRANSFER => true,
				CURLOPT_ENCODING => '',
				CURLOPT_MAXREDIRS => 10,
				CURLOPT_TIMEOUT => 0,
				CURLOPT_FOLLOWLOCATION => true,
				CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
				CURLOPT_CUSTOMREQUEST => 'POST',
				CURLOPT_POSTFIELDS =>$json_data,
				CURLOPT_HTTPHEADER => array(
					'x-api-key: 3D6C8028F4D75001B5EE368DDF199FDC24FDF412',
					'Content-Type: application/json',
					'Cookie: BIGipServer~k8s-dev~Shared~ingress_eska_eska_be_pengajuan_by_webservice=2791200778.28278.0000'
				),
			));

			$response = curl_exec($curl);
			curl_close($curl);

			echo $response;
		}
	}
}
