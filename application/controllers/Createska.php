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
								<li><a class="dropdown-item" href="#" onclick="">Send Document</a></li>
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
			$html[] = '<b> Draft Number : <font color="#4549a2">'.$data['no_draft'].'</font><br/> Invoice Number : <font color="#4549a2">'.$data['invoice_number'].'</font></b><br/><b> Status : <font color="#d75350">'.$data['status_desc'].'</font></b><br/><b> Created Date : </b>'.$data['created_at'];
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

            $title = "'Views Document ".$data['name']."'";
            $func_name = "'get_path_document'";
			$html[] = $no;
			$html[] = $data['name'];
			$html[] = $data['document_number'];
			$html[] = $data['document_date'];
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
			$html[] = $data['message_type'];
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
}
