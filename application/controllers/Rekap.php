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
		$param['tipe'] 	 		 = 0;

		$month = date('m');
		$year = date('Y');
		$end_date = '';

		for($d = 1; $d <= 31; $d++) {
			$time = mktime(12, 0, 0, $month, $d, $year);          
			if (date('m', $time) == $month) {
				$end_date = $d;
			}
		}

		$param['aju_date'] = $year.'-'.$month.'-01 to '.$year.'-'.$month.'-'.$end_date;
		
		$data['content']    	= $this->load->view('main/view/rekap_client',$param,true);
		$this->load->view('main/template',$data);
	}

	public function partner()
	{
		//Tittle
		$tittle['title'] 	= 'Rekap';
		$tittle['li_1'] 	= 'Minia';
		$tittle['li_2'] 	= 'Rekap Partner';

		//Teamplate
		$data['addmenu'] 	= true;
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="'.base_url().'assets/js/pages/pass-addon.init.js"></script>';
		$data['addjs'] 		.= '<script src="'.base_url().'assets/main/js/rekap.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle,true);
		
		//Page Data Content
		$param['page_title'] 	 = $this->load->view('main/partials/page-title', $tittle,true);
		$param['data_partner'] 	 = $this->Model_master->get_data_partner();
		$param['tipe'] 	 		 = 1;
		
		$data['content']    	= $this->load->view('main/view/rekap_partner',$param,true);
		$this->load->view('main/template',$data);
	}

	public function cari_data()
	{
		$post 		= $this->input->post('formdata');
        $arrPost 	= postajax_toarray($post);

        $arrRet 	= $this->Model_rekap->cari_data();
		$arrData 	= $arrRet['arrData'];
		$no 		= $this->input->post('start') + 1;
		foreach ($arrData as $key => $data) {
			if (isset($html)) {
				unset($html);
			}

			$html[] = $no;
			if($arrPost['tipe'] == '0') {
				$html[] = $data['client_name'];
			}
			$html[] = $data['partner_name'];

			if($arrPost['show_table'] == '1') {
				$arr_years = array($arrPost['years_single']);

				if(isset($arrPost['month_enabled'])) {
					if(is_array($arrPost['month_enabled'])) {
						$arr_month = $arrPost['month_enabled'];
					} else {
						$month = $arrPost['month_enabled'];
						$arr_month = array($month);
					}

					sort($arr_month);
				} else {
					$arr_month = get_month();
				}
			}
        
			if($arrPost['show_table'] == '2') {
				if(isset($arrPost['years_multiple'])) {
					if(is_array($arrPost['years_multiple'])) {
						$arr_years = $arrPost['years_multiple'];
					} else {
						$arr_years = array($arrPost['years_multiple']);
					}
				} else {
					$arr_years = get_years();
				}
				$arr_month = get_month();
			}

			sort($arr_years);
			foreach ($arr_years as $key => $value) {
				foreach ($arr_month as $key1 => $value1) {
					if(isset($arrPost['month_enabled']) and $arrPost['show_table'] == '1') {
						$html[] = $data['tot_'.$value.'_'.$value1];
					} else {
						$index_month = (int)$key1 + 1;
						$html[] = $data['tot_'.$value.'_'.$index_month];
					}
				}

				if($arrPost['show_table'] == '2' AND COUNT($arr_years) > 1) {
					$html[] = $data['tot_'.$value];
				}
			}

			$html[] = $data['total'];
			$html[] = '
						<div class="dropdown">
							<button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
								<i class="bx bx-dots-horizontal-rounded"></i>
							</button>
							<ul class="dropdown-menu dropdown-menu-end">
								<li><a class="dropdown-item" href="#" onclick="view_detail('.$data['id'].','.$data['partner_id'].')">Views Detail</a></li>
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

	public function exp_excel()
	{
		$post 		= $this->input->post('formdata');
        $arrPost 	= postajax_toarray($post);

		$this->load->library('PHPExcel');
        $excel = new PHPExcel();

		$style_col = array(
			'font' => array('bold' => true),
			'alignment' => array(
							'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER,
							'vertical' => PHPExcel_Style_Alignment::VERTICAL_CENTER
						),
			'borders' => array(
							'top' => array('style' => PHPExcel_Style_Border::BORDER_THIN),
							'right' => array('style' => PHPExcel_Style_Border::BORDER_THIN),
							'bottom' => array('style' => PHPExcel_Style_Border::BORDER_THIN),
							'left' => array('style' => PHPExcel_Style_Border::BORDER_THIN)
								
						)
		);

		$style_row = array(
			'alignment' => array(
							'vertical' => PHPExcel_Style_Alignment::VERTICAL_CENTER,
							'horizontal' => PHPExcel_Style_Alignment::HORIZONTAL_CENTER
						),
			'borders' => array(
							'top' => array('style' => PHPExcel_Style_Border::BORDER_THIN),
							'right' => array('style' => PHPExcel_Style_Border::BORDER_THIN),
							'bottom' => array('style' => PHPExcel_Style_Border::BORDER_THIN),
							'left' => array('style' => PHPExcel_Style_Border::BORDER_THIN)
						)
		);

		$style_border = array(
			'borders' => array(
							'top' => array('style' => PHPExcel_Style_Border::BORDER_THIN),
							'right' => array('style' => PHPExcel_Style_Border::BORDER_THIN),
							'bottom' => array('style' => PHPExcel_Style_Border::BORDER_THIN),
							'left' => array('style' => PHPExcel_Style_Border::BORDER_THIN)
				)
			);

		if($arrPost['show_table'] == '1') {
			$arr_years = array($arrPost['years_single']);

			if(isset($arrPost['month_enabled'])) {
				if(is_array($arrPost['month_enabled'])) {
					$arr_month = $arrPost['month_enabled'];
				} else {
					$month = $arrPost['month_enabled'];
					$arr_month = array($month);
				}

				sort($arr_month);
			} else {
				$arr_month = get_month();
			}
		}
	
		if($arrPost['show_table'] == '2') {
			if(isset($arrPost['years_multiple'])) {
				if(is_array($arrPost['years_multiple'])) {
					$arr_years = $arrPost['years_multiple'];
				} else {
					$arr_years = array($arrPost['years_multiple']);
				}
			} else {
				$arr_years = get_years();
			}
			$arr_month = get_month();
		}

		sort($arr_years);
		if($arrPost['tipe'] == '0') {
			$column1 = 3;
			$column2 = 3;
			$column_row3 = 3;
			$array_column = array('A'=>'No','B'=>'Client Name','C'=>'Partner Name');
			$array_column3 = array('B'=>'client_name','C'=>'partner_name');
		} else {
			$column1 = 2;
			$column2 = 2;
			$column_row3 = 2;
			$array_column = array('A'=>'No','B'=>'Partner Name');
			$array_column3 = array('B'=>'partner_name');
		}

		foreach ($array_column as $key => $value) {
			$excel->getActiveSheet()->getStyle($key.'3:'.$key.'4')->getFont()->setBold(TRUE);
			$excel->getActiveSheet()->getStyle($key.'3:'.$key.'4')->getFont()->setSize(10);
			$excel->getActiveSheet()->getStyle($key.'3:'.$key.'4')->applyFromArray($style_row)->getAlignment();
			$excel->setActiveSheetIndex(0)->mergeCells($key.'3:'.$key.'4');
			$excel->setActiveSheetIndex(0)->setCellValue($key.'3', $value);
		}

		$jml_month = COUNT($arr_month);
		$jml_years = COUNT($arr_years);
		$get_bulan = get_month();
		foreach ($arr_years as $key => $value) {
			$alfabet = $this->Model_master->getNameFromNumber($column1);
			$column_akhir = $column1 + $jml_month - 1;
			$alfabet_merge = $this->Model_master->getNameFromNumber($column_akhir);

			$excel->getActiveSheet()->getStyle($alfabet.'3:'.$alfabet_merge.'3')->getFont()->setBold(TRUE);
			$excel->getActiveSheet()->getStyle($alfabet.'3:'.$alfabet_merge.'3')->getFont()->setSize(10);
			$excel->getActiveSheet()->getStyle($alfabet.'3:'.$alfabet_merge.'3')->applyFromArray($style_row)->getAlignment();
			$excel->setActiveSheetIndex(0)->mergeCells($alfabet.'3:'.$alfabet_merge.'3');
			$excel->setActiveSheetIndex(0)->setCellValue($alfabet.'3', $value);

			foreach ($arr_month as $key1 => $value1) {
				$alfabet2 = $this->Model_master->getNameFromNumber($column2);
				$excel->getActiveSheet()->getStyle($alfabet2.'4:'.$alfabet2.'4')->getFont()->setBold(TRUE);
				$excel->getActiveSheet()->getStyle($alfabet2.'4:'.$alfabet2.'4')->getFont()->setSize(10);
				$excel->getActiveSheet()->getStyle($alfabet2.'4:'.$alfabet2.'4')->applyFromArray($style_row)->getAlignment();
				$excel->setActiveSheetIndex(0)->mergeCells($alfabet2.'4:'.$alfabet2.'4');
				
				if(is_numeric($value1)) {
					$nama_bulan = $get_bulan[$value1 - 1];
				} else {
					$nama_bulan = $value1;
				}

				$excel->setActiveSheetIndex(0)->setCellValue($alfabet2.'4', $nama_bulan);
				
				$column2++;
			}

			if($jml_years > 1) {
				$alfabet_Sub = $this->Model_master->getNameFromNumber($column2);
				$excel->getActiveSheet()->getStyle($alfabet_Sub.'3:'.$alfabet_Sub.'4')->getFont()->setBold(TRUE);
				$excel->getActiveSheet()->getStyle($alfabet_Sub.'3:'.$alfabet_Sub.'4')->getFont()->setSize(10);
				$excel->getActiveSheet()->getStyle($alfabet_Sub.'3:'.$alfabet_Sub.'4')->applyFromArray($style_row)->getAlignment();
				$excel->setActiveSheetIndex(0)->mergeCells($alfabet_Sub.'3:'.$alfabet_Sub.'4');
				$excel->setActiveSheetIndex(0)->setCellValue($alfabet_Sub.'3', 'Sub Total');
				
				$column2 = $column2 + 1;
			}

			$column1 = $column2;
		}

		$alfabet = $this->Model_master->getNameFromNumber($column2);
		$excel->getActiveSheet()->getStyle($alfabet.'3:'.$alfabet.'4')->getFont()->setBold(TRUE);
		$excel->getActiveSheet()->getStyle($alfabet.'3:'.$alfabet.'4')->getFont()->setSize(10);
		$excel->getActiveSheet()->getStyle($alfabet.'3:'.$alfabet.'4')->applyFromArray($style_row)->getAlignment();
		$excel->setActiveSheetIndex(0)->mergeCells($alfabet.'3:'.$alfabet.'4');
		$excel->setActiveSheetIndex(0)->setCellValue($alfabet.'3', 'Total');

		$arrRet 	= $this->Model_rekap->cari_data(1);
		$arrData 	= $arrRet['arrData'];
		
		$no = 1;
		$column = 5;
		$nama_title = array();
		foreach ($arrData as $key => $val_data) {
			if($arrPost['tipe'] == '0') {
				$nama_title[] = $val_data['client_name'];
			} else {
				$nama_title[] = $val_data['partner_name'];
			}
			$excel->setActiveSheetIndex(0)->setCellValue('A'.$column, $no);
			$excel->getActiveSheet()->getStyle('A'.$column)->getFont()->setSize(10);
			$excel->getActiveSheet()->getStyle('A'.$column)->applyFromArray($style_row)->getAlignment();

			foreach ($array_column3 as $key => $val_column) {
				$excel->setActiveSheetIndex(0)->setCellValue($key.$column, $val_data[$val_column]);
				$excel->getActiveSheet()->getStyle($key.$column)->getFont()->setSize(10);
				$excel->getActiveSheet()->getStyle($key.$column)->applyFromArray($style_border)->getAlignment();
			}

			foreach ($arr_years as $key => $value) {
				foreach ($arr_month as $key1 => $value1) {
					$alfabet = $this->Model_master->getNameFromNumber($column_row3);

					if(isset($arrPost['month_enabled']) and $arrPost['show_table'] == '1') {
						$nilai = $val_data['tot_'.$value.'_'.$value1];
					} else {
						$index_month = (int)$key1 + 1;
						$nilai = $val_data['tot_'.$value.'_'.$index_month];
					}

					$excel->setActiveSheetIndex(0)->setCellValue($alfabet.$column, $nilai);
					$excel->getActiveSheet()->getStyle($alfabet.$column)->getFont()->setSize(10);
					$excel->getActiveSheet()->getStyle($alfabet.$column)->applyFromArray($style_border)->getAlignment();

					$column_row3++;
				}

				if($arrPost['show_table'] == '2' AND $jml_years > 1) {
					$nilai = $val_data['tot_'.$value];
					$alfabet = $this->Model_master->getNameFromNumber($column_row3);
					$excel->setActiveSheetIndex(0)->setCellValue($alfabet.$column, $nilai);
					$excel->getActiveSheet()->getStyle($alfabet.$column)->getFont()->setSize(10);
					$excel->getActiveSheet()->getStyle($alfabet.$column)->applyFromArray($style_border)->getAlignment();

					$column_row3 = $column_row3 + 1;
				}
			}

			$nilai = $val_data['total'];
			$alfabet = $this->Model_master->getNameFromNumber($column_row3);
			$excel->setActiveSheetIndex(0)->setCellValue($alfabet.$column, $nilai);
			$excel->getActiveSheet()->getStyle($alfabet.$column)->getFont()->setSize(10);
			$excel->getActiveSheet()->getStyle($alfabet.$column)->applyFromArray($style_border)->getAlignment();
			
			$no++;
			$column++;
		}
					
		$excel->getActiveSheet()->getDefaultRowDimension()->setRowHeight(-1);
        $excel->getActiveSheet()->getPageSetup()->setOrientation(PHPExcel_Worksheet_PageSetup::ORIENTATION_LANDSCAPE);
        $excel->getActiveSheet(0)->setTitle("Sheet1");
        $excel->setActiveSheetIndex(0);

		if($arrPost['tipe'] == '0') {
			$nama = 'Client Name';
		} else {
			$nama = 'Partner Name';
		}
		
		$uniq_nama = implode(', ', array_unique($nama_title));
		$excel->getActiveSheet()->getStyle('A1:A1')->getFont()->setBold(TRUE);
		$excel->getActiveSheet()->getStyle('A1:A1')->getFont()->setSize(10);
		$excel->getActiveSheet()->getStyle('A1:A1')->getAlignment();
		$excel->setActiveSheetIndex(0)->setCellValue('A1', $nama.' : '.$uniq_nama);

		$excel->getActiveSheet()->getStyle('A1:A2')->getFont()->setBold(TRUE);
		$excel->getActiveSheet()->getStyle('A1:A2')->getFont()->setSize(10);
		$excel->getActiveSheet()->getStyle('A1:A2')->getAlignment();
		$excel->setActiveSheetIndex(0)->setCellValue('A2', 'Print Date : '.date("d M Y H:i:s"));

        ob_start();
        $write = PHPExcel_IOFactory::createWriter($excel, 'Excel2007');
        $write->save('php://output');
        $xlsData = ob_get_contents();
        ob_end_clean();
        $response =  array(
            'status' => TRUE,
            'file' => "data:application/vnd.ms-excel;base64,".base64_encode($xlsData)
        );
    
        die(json_encode($response));
	}
}
