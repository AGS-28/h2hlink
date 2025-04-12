<?php
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * @property CI_DB_query_builder $db
 * @property CI_URI $uri
 * @property CI_Input $input
 * @property CI_Session $session
 * @property Model_user $Model_user
 */
class User extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_user');
		cek_session(array(1, 2, 3), 'main');
	}

	public function index()
	{
		//Tittle
		$tittle['title'] 	= 'User Management';
		$tittle['li_1'] 	= 'AGS-GW Portal';
		$tittle['li_2'] 	= 'User Management';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="' . base_url() . 'assets/main/js/user.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle, true);
		$data['content']    	= $this->load->view('main/view/user', $param, true);
		$this->load->view('main/template', $data);
	}

	public function get_data_user()
	{
		$arrRet 	= $this->Model_user->get_data_user();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		// var_dump($arrData);die();
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

			$html[] = $no;
			$html[] = '<b> Username : <font color="#d75350">' . $data['username'] . '</font> </br>Name : <font color="#4549a2">' . $data['name'] . '</font></br>User Group : <span class="badge rounded-pill bg-info">' . $data['groupname'] . '</span> </br> Status : ' . (isset($data['is_active']) && $data['is_active'] == 't' ? ' <span class="badge rounded-pill bg-success">Active</span> ' : '<span class="badge rounded-pill bg-danger">Non Active</span>') . '</font>';
			$html[] = '<b> Client Name : <font color="#d75350">' . $data['client_name'] . '</font> 
                       </br>NIB : <font color="#4549a2">' . $data['nib'] . '</font> 
                       </br>NPWP : <font color="#4549a2">' . $data['npwp'] . '</font> 
                       </br>Address : <font color="#4549a2">' . $data['address'] . '</font>
                       </br>Telephone : <font color="#4549a2">' . $data['telephone_no'] . ' / ' . $data['handphone_no'] . '</font>';
			$html[] = '<b> Partner Name : <font color="#d75350">' . $data['partner_name'] . '</font>
                       </br>API-KEY : <font color="#4549a2">' . $data['api_key'] . '</font> 
                       </br>Client Key : <font color="#4549a2">' . $data['client_key'] . '</font> ';
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="edit(' . $data['id_user'] . ',0);">Edit</a></li>
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

	public function getselectgroup()
	{
		echo json_encode($this->Model_user->getselectgroup());
	}
	public function getselectclient()
	{
		echo json_encode($this->Model_user->getselectclient());
	}
	public function add_user()
	{
		echo json_encode($this->Model_user->add_user());
	}
	public function get_edit_user()
	{
		echo json_encode($this->Model_user->get_edit_user());
	}
}
