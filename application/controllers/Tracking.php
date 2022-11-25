<?php
defined('BASEPATH') OR exit('No direct script access allowed');
class Tracking extends CI_Controller {
	public function __construct()
	{
		parent::__construct();
		$this->load->model('Model_tracking');
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
		$data['addjs'] 		= '<script src="'.base_url().'assets/main/js/tracking.js"></script>';
		$data['title_meta'] = $this->load->view('main/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$param['data_client'] 	 = $this->Model_tracking->get_data_client();
		$param['data_partner'] 	 = $this->Model_tracking->get_data_partner();
		$param['data_end_point'] = $this->Model_tracking->get_data_end_point();
		
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
			$html[] = '<b> Aju Number : <font color="#4549a2">'.$data['no_aju'].'</font><br/> Status : </b>'.$data['status'];
			$json_pretty = json_decode(json_encode($data['message_content']));
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" data-bs-toggle="modal" data-bs-target="#exampleModalScrollable">Message</a></li>
							</ul>
						</div>
						<div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable">
                                <div class="modal-content">
                                    <div class="modal-body" style="text-align: left;">
										<p>Message Id : '.$data["message_id"].'</p>
										<p>Message Type : '.$data["urai_message_type"].'</p>
                                        <p>Message Content : <pre>'.$json_pretty.'</pre></p>
                                    </div>
                                    <div class="modal-footer">
                                        <button type="button" class="btn btn-light" data-bs-dismiss="modal">Close</button>
                                    </div>
                                </div>
                            </div>
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
