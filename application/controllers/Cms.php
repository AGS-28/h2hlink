<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Cms extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_cms');
	}

	public function role()
	{
		//Tittle
		$tittle['title'] 	= 'Master Role';
		$tittle['li_1'] 	= 'CMS';
		$tittle['li_2'] 	= 'Master Role';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/role.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$data['content']    	= $this->load->view('main/view/role',$param,true);
		$this->load->view('main/template',$data);
	}
	public function file()
	{
		//Tittle
		$tittle['title'] 	= 'File';
		$tittle['li_1'] 	= 'CMS';
		$tittle['li_2'] 	= 'File';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/file.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$data['content']    	= $this->load->view('main/view/file',$param,true);
		$this->load->view('main/template',$data);
	}
	public function chanel()
	{
		//Tittle
		$tittle['title'] 	= 'Chanel';
		$tittle['li_1'] 	= 'CMS';
		$tittle['li_2'] 	= 'Chanel';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/chanel.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$data['content']    	= $this->load->view('main/view/chanel',$param,true);
		$this->load->view('main/template',$data);
	}
	public function partner()
	{
		//Tittle
		$tittle['title'] 	= 'Partner Management';
		$tittle['li_1'] 	= 'CMS';
		$tittle['li_2'] 	= 'Partner Management';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/partner.js"></script>';
		$data['addjs'] 		.= '<script src="'.base_url().'assets/js/pages/form-wizard.init.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$data['content']    	= $this->load->view('main/view/partner',$param,true);
		$this->load->view('main/template',$data);
	}
	public function client()
	{
		//Tittle
		$tittle['title'] 	= 'Client Management';
		$tittle['li_1'] 	= 'CMS';
		$tittle['li_2'] 	= 'Client Management';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/client.js"></script>';
		$data['addjs'] 		.= '<script src="'.base_url().'assets/js/pages/form-wizard.init.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$data['content']    	= $this->load->view('main/view/client',$param,true);
		$this->load->view('main/template',$data);
	}

	public function get_data_role()
	{
		$arrRet 	= $this->Model_cms->get_data_role();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		// var_dump($arrData);die();
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

            $html[] = $no;
			$html[] = '<b> Code : <font color="#d75350">'.$data['id'].'</font> </br></br> Group Name : <font color="#4549a2">'.$data['groupname'].'</font>';
			$html[] = '<b> User Create : <font color="#d75350">'.$data['created_by'].'</font> </br></br>Date Create<font color="#4549a2">'.$data['created_by'].'</font> </br></br> Status : '.(isset($data['is_active']) && $data['is_active'] == 't' ? '<font color="#4549a2"> Active</font>' : '<font color="#d75350"> Non Active</font>').'</font>';
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="edit('.$data['id'].',0);">Edit</a></li>
								<li><a class="dropdown-item" href="#" onclick="confirm_delete('.$this->db->escape("Are you sure ?").',hapus,'.$this->db->escape($data['id']).');">Delete</a></li>
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
	public function get_data_file()
	{
		$arrRet 	= $this->Model_cms->get_data_file();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		// var_dump($arrData);die();
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

            $html[] = $no;
			$html[] = '<b> Code : <font color="#d75350">'.$data['id'].'</font> </br></br> File Type : <font color="#4549a2">'.$data['message_type'].'</font>';
			$html[] = '<b> User Create : <font color="#d75350">'.$data['created_by'].'</font> </br></br>Date Create<font color="#4549a2">'.$data['created_by'].'</font> </br></br> Status : '.(isset($data['is_active']) && $data['is_active'] == 't' ? '<font color="#4549a2"> Active</font>' : '<font color="#d75350"> Non Active</font>').'</font>';
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="edit('.$data['id'].',0);">Edit</a></li>
								<li><a class="dropdown-item" href="#" onclick="confirm_delete('.$this->db->escape("Are you sure ?").',hapus,'.$this->db->escape($data['id']).');">Delete</a></li>
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
	public function get_data_chanel()
	{
		$arrRet 	= $this->Model_cms->get_data_chanel();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		// var_dump($arrData);die();
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

            $html[] = $no;
			$html[] = '<b> Code : <font color="#d75350">'.$data['id'].'</font> </br></br> Group Name : <font color="#4549a2">'.$data['name'].'</font>';
			$html[] = '<b> User Create : <font color="#d75350">'.$data['created_by'].'</font> </br></br>Date Create<font color="#4549a2">'.$data['created_by'].'</font> </br></br> Status : '.(isset($data['is_active']) && $data['is_active'] == 't' ? '<font color="#4549a2"> Active</font>' : '<font color="#d75350"> Non Active</font>').'</font>';
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="edit('.$data['id'].',0);">Edit</a></li>
								<li><a class="dropdown-item" href="#" onclick="confirm_delete('.$this->db->escape("Are you sure ?").',hapus,'.$this->db->escape($data['id']).');">Delete</a></li>
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
	public function get_data_partner()
	{
		$arrRet 	= $this->Model_cms->get_data_partner();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		// var_dump($arrData);die();
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

            $html[] = $no;
			$html[] = '<b> Code : <font color="#d75350">'.$data['id'].'</font> </br></br> Group Name : <font color="#4549a2">'.$data['partner_name'].'</font>';
			$html[] = $this->Model_cms->get_endpoint($data['id']);
			$html[] = '<b> User Create : <font color="#d75350">'.$data['created_by'].'</font> </br></br>Date Create<font color="#4549a2">'.$data['created_by'].'</font> </br></br> Status : '.(isset($data['is_active']) && $data['is_active'] == 't' ? '<font color="#4549a2"> Active</font>' : '<font color="#d75350"> Non Active</font>').'</font>';
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="edit('.$data['id'].',0);">Edit</a></li>
								<li><a class="dropdown-item" href="#" onclick="confirm_delete('.$this->db->escape("Are you sure ?").',hapus,'.$this->db->escape($data['id']).');">Delete</a></li>
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
	public function get_data_client()
	{
		$arrRet 	= $this->Model_cms->get_data_client();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		// var_dump($arrData);die();
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

            $html[] = $no;
			$html[] = '<b> Name : <font color="#d75350">'.$data['client_name'].'</font></br> NIB : <font color="#4549a2">'.$data['nib'].'</font></br> NPWP : <font color="#4549a2">'.$data['npwp'].'</font></br>User Endpoint : <span class="badge rounded-pill bg-success">'.$data['user_endpoint'].'</span>';
			$html[] = '<b> Address : <font color="#d75350">'.$data['address'].'</font></br> Handphone : <font color="#4549a2">'.$data['handphone_no'].'</font></br> Telephone : <font color="#4549a2">'.$data['telephone_no'].'</font></br>Author : <span class="badge rounded-pill bg-success">'.$data['authority_name'].'</span>';
			$html[] = '<b> Start Date : <font color="#d75350">'.$data['validate'].'</font> </br>End Date : <font color="#4549a2">'.$data['valid_until'].'</font> </br> Status : '.(isset($data['is_active']) && $data['is_active'] == 't' ? '<font color="#4549a2"> Active</font>' : '<font color="#d75350"> Non Active</font>').'</font></br>Package Type : <span class="badge rounded-pill bg-success">'.$data['package_name'].'</span>';
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="view('.$data['id'].',0);">Detail</a></li>
								<li><a class="dropdown-item" href="#" onclick="edit('.$data['id'].',0);">Edit</a></li>
								<li><a class="dropdown-item" href="#" onclick="confirm_delete('.$this->db->escape("Are you sure ?").',hapus,'.$this->db->escape($data['id']).');">Delete</a></li>
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

    public function hapus_role()
    {
        $id = $this->input->post('id');
        echo json_encode($this->Model_cms->hapus_role($id));
    }
    public function hapus_chanel()
    {
        $id = $this->input->post('id');
        echo json_encode($this->Model_cms->hapus_chanel($id));
    }
    public function hapus_file()
    {
        $id = $this->input->post('id');
        echo json_encode($this->Model_cms->hapus_file($id));
    }
    public function add_item()
    {
        echo json_encode($this->Model_cms->add_role_item());
    }
    public function add_item_partner()
    {
		echo json_encode($this->Model_cms->add_item_partner());
    }
    public function get_edit_role()
    {
        echo json_encode($this->Model_cms->get_edit_role());
    }
    public function get_edit_chanel()
    {
        echo json_encode($this->Model_cms->get_edit_chanel());
    }
    public function get_edit_file()
    {
        echo json_encode($this->Model_cms->get_edit_file());
    }

	public function get_message_respons()
	{
		$data['data'] = $this->Model_tracking->get_message_respons();
		echo $this->load->view('main/view/modal_tracking',$data,true);
	}

    public function add_item_chanel()
    {
        echo json_encode($this->Model_cms->add_chanel_item());
    }
    public function add_item_file()
    {
        echo json_encode($this->Model_cms->add_file_item());
    }

	public function get_view_client()
    {
        echo json_encode($this->Model_cms->get_view_client());
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

	public function getmessagetype()
	{
		echo json_encode($this->Model_cms->getmessagetype());
	}

}
