<div style="text-align: left;">
    <div id="progrss-wizard" class="twitter-bs-wizard">
        <ul class="twitter-bs-wizard-nav nav nav-pills nav-justified">
            <li class="nav-item">
                <a href="#" onclick="progress_bar(1,1);" class="nav-link" data-toggle="tab">
                    <div class="step-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Header" id="btn_1">
                        <i class="bx bxs-bank"></i>
                    </div>
                </a>
                Header
            </li>
            
            <li class="nav-item">
                <a href="#" onclick="progress_bar(2,1);" class="nav-link" data-toggle="tab">
                    <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Detail" id="btn_2">
                        <i class="bx bx-list-ul"></i>
                    </div>
                </a>
                Detail
            </li>

            <li class="nav-item">
                <a href="#" onclick="progress_bar(3,1);" class="nav-link" data-toggle="tab">
                    <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Document" id="btn_3">
                        <i class="bx bxs-file"></i>
                    </div>
                </a>
                Document
            </li>

            <?php  
                $no_aju = "'".$data['arrayPost']['no_aju']."'";
                $nib = "'".$data['arrayPost']['nib']."'";
                $npwp = "'".$data['arrayPost']['npwp']."'";
                $user_endpoint = "'".$data['arrayPost']['user_endpoint']."'";
                $tipe = "'".$data['arrayPost']['tipe']."'";
            ?>
            
            <li class="nav-item">
                <a href="#" onclick="submit_coo(<?php echo $no_aju; ?>, <?php echo $nib; ?>, <?php echo $npwp; ?>, <?php echo $user_endpoint; ?>, <?php echo $tipe; ?>);" class="nav-link" data-toggle="tab">
                    <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Document" id="btn_4">
                        <i class="bx bx-check"></i>
                    </div>
                </a>
                Submit
            </li>
        </ul>
    </div>
    <br/>
    <?php 
        $data_json = '['.$data['arrayHeaderDetail'][0]['message_content'].']'; 
        $array_data = json_decode( $data_json, true );
        $header = '<table class="table dt-responsive nowrap w-100 table-bordered" width="100%">
                    <tr style="vertical-align: top; text-align: center;">
                        <td><b>No</b></td>
                        <td colspan="2"><b>Element</b></td>
                    </tr>';
        
        foreach ($array_data as $key => $value) {
            $i = 1;
            foreach ($value['header'] as $key1 => $value1) {
                $sisa = $i % 2;
                if($sisa == 0) {
                    // $warna = '#D1D0CE';
                    $warna = '#fff';
                } else {
                    $warna = '#fff';
                }
                
                $header .= '<tr bgcolor="'.$warna.'" style="vertical-align: top;">';
                $header .= '<td width="2%" align="center">'.$i.'.</td>';
                $header .= '<td>'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key1)).'</td>';

                if(is_array($value1)) {
                    $header_sambung = '<table class="table dt-responsive nowrap w-100" width="100%">';
                    $arr_cekcok = array();
                    $arr_cekcok1 = array();
                    foreach ($value1 as $key2 => $value2) {
                        if(is_array($value2)) {
                            foreach ($value2 as $key3 => $value3) {
                                if(COUNT($value2) > 1) {
                                    $cekcok1 = true;
                                } else {
                                    if($key3 != '') {
                                        $cekcok1 = true;
                                    } else {
                                        $cekcok1 = false;
                                    }
                                }

                                if($cekcok1) {
                                    $arr_cekcok1[] = 1;
                                    $header_sambung .= '<tr style="vertical-align: top;">';
                                    $header_sambung .= '<td width="25%">'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key3)).'</td>';
                                    $header_sambung .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value3.'" readonly style="cursor: not-allowed;"></td>';
                                    $header_sambung .= '</tr>';
                                } else {
                                    $header .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value3.'" readonly style="cursor: not-allowed;"></td>';
                                }
                            }
                        } else {
                            if(COUNT($value1) > 1) {
                                $cekcok = true;
                            } else {
                                if($key2 != '') {
                                    $cekcok = true;
                                } else {
                                    $cekcok = false;
                                }
                            }

                            if($cekcok) {
                                $arr_cekcok[] = 1;
                                $header_sambung .= '<tr style="vertical-align: top;">';
                                $header_sambung .= '<td width="25%">'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key2)).'</td>';
                                $header_sambung .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value2.'" readonly style="cursor: not-allowed;"></td>';
                                $header_sambung .= '</tr>';
                            } else {
                                // $header .= '<td>'.$value2.'</td>';
                                $header .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value2.'" readonly style="cursor: not-allowed;"></td>';
                            }
                        }
                    }
                    $header_sambung .= '</table>';
                    if(in_array(1, $arr_cekcok)) {
                        $header .= '<td>'.$header_sambung.'</td>';
                    }

                    if(in_array(1, $arr_cekcok1)) {
                        $header .= '<td>'.$header_sambung.'</td>';
                    }
                } else {
                    if($key1 == 'co_type') {
                        $header .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$refform[$value1].'" readonly style="cursor: not-allowed;"></td>';
                    } else if($key1 == 'jenis_form') {
                        if($value1 == '1') {
                            $jenis_form = 'e-Form';
                        } else if($value1 == '0') {
                            $jenis_form = 'Konvensional';
                        } else {
                            $jenis_form = '-';
                        }

                        $header .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$jenis_form.'" readonly style="cursor: not-allowed;"></td>';
                    } else {
                        $header .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value1.'" readonly style="cursor: not-allowed;"></td>';
                    }
                }

                $header .= '</tr>';

                if($key1 == 'jenis_form') {
                    $i++;
                    
                    $header .= '<tr bgcolor="'.$warna.'" style="vertical-align: top;">';
                    $header .= '<td width="2%" align="center">'.$i.'.</td>';
                    $header .= '<td>Nomor Serial Blanko</td>';
                    $header .= '<td><textarea class="form-control form-control-sm" id="no_serial" name="no_serial" readonly style="cursor: not-allowed; height: 150px;">'.$data['arrayHeaderDetail'][0]['no_serial_blanko'].'</textarea></td>';
                    $header .= '</tr>';
                }

                $i++;
            }
        }
        
        $header .= '</table>';


        $invoice = '<table class="table dt-responsive nowrap w-100 table-bordered" width="100%">
                    <tr style="vertical-align: top; text-align: center;">
                        <td><b>No</b></td>
                        <td colspan="2"><b>Element</b></td>
                    </tr>';
        foreach ($array_data as $key => $value) {
            $j = 1;
            foreach ($value['invoice'] as $key1 => $value1) {
                $sisa = $i % 2;
                if($sisa == 0) {
                    // $warna = '#D1D0CE';
                    $warna = '#fff';
                } else {
                    $warna = '#fff';
                }
                
                $invoice .= '<tr bgcolor="'.$warna.'" style="vertical-align: top;">';
                $invoice .= '<td width="2%" align="center">'.$j.'.</td>';
                $invoice .= '<td>';
                
                $invoice_sambung = '';
                $invoice_sambung2 = '';
                if(is_array($value1)) {
                    $invoice_sambung = '<table class="table dt-responsive nowrap w-100" width="100%">';
                    foreach ($value1 as $key2 => $value2) {
                        if(is_array($value2)) {
                            $invoice_sambung2 = '<table class="table dt-responsive nowrap w-100" width="100%">';
                            foreach ($value2 as $key3 => $value3) {
                                if(is_array($value3)) {
                                    $invoice_sambung3 = '';
                                    foreach ($value3 as $key4 => $value4) {
                                        $invoice_sambung3 .= '<tr style="vertical-align: top;">';
                                        $invoice_sambung3 .= '<td width="25%">'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key4)).'</td>';
                                        
                                        if(is_array($value4)) {
                                            $invoice_sambung4 = '<td><table class="table dt-responsive nowrap w-100" width="100%">';
                                            foreach ($value4 as $key5 => $value5) {
                                                if(is_array($value5)) {
                                                    $invoice_sambung4 .= '<tr style="vertical-align: top;">';
                                                    $invoice_sambung4 .= '<td width="25%">'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key5)).'</td>';

                                                    $invoice_sambung5 = '<td><table class="table dt-responsive nowrap w-100" width="100%">';
                                                    $invoice_sambung6 = '';
                                                    $goods = '';
                                                    foreach ($value5 as $key6 => $value6) {
                                                        if(is_array($value6)) {
                                                            $invoice_sambung6 = '';
                                                            foreach ($value6 as $key7 => $value7) {
                                                                $invoice_sambung6 .= '<tr style="vertical-align: top;">';
                                                                $invoice_sambung6 .= '<td width="25%">'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key7)).'</td>';
                                                                $invoice_sambung6 .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value7.'" readonly style="cursor: not-allowed;"></td>';
                                                                $invoice_sambung6 .= '</tr>';
                                                            }
                                                        } else {
                                                            $invoice_sambung5 .= '<tr style="vertical-align: top;">';
                                                            $invoice_sambung5 .= '<td width="25%">'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key6)).'</td>';
                                                            $invoice_sambung5 .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value6.'" readonly style="cursor: not-allowed;"></td>';
                                                            $invoice_sambung5 .= '</tr>';
                                                        }

                                                        $goods .= '<tr><td><table class="table dt-responsive nowrap w-100" width="100%">'.$invoice_sambung6.'</table></tr></td>';
                                                    }

                                                    $invoice_sambung5 .= $goods.'</table></td>';
                                                    $invoice_sambung4 .= $invoice_sambung5;

                                                } else {
                                                    $invoice_sambung4 .= '<tr style="vertical-align: top;">';
                                                    $invoice_sambung4 .= '<td width="25%">'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key5)).'</td>';
                                                    $invoice_sambung4 .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value5.'" readonly style="cursor: not-allowed;"></td>';
                                                    $invoice_sambung4 .= '</tr>';
                                                }
                                            }

                                            $invoice_sambung4 .= '</table></td>';
                                            $invoice_sambung3 .= $invoice_sambung4;

                                        } else {
                                            if($key4 == 'goods_description') {
                                                $breaks = array("<br />","<br>","<br/>");  
                                                $text = str_ireplace($breaks, "\r\n", $value4); 
                                                $invoice_sambung3 .= '<td><textarea class="form-control form-control-sm" id="form-sm-input" readonly style="cursor: not-allowed; height: 150px;">'.$text.'</textarea></td>';
                                            } else {
                                                $invoice_sambung3 .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value4.'" readonly style="cursor: not-allowed;"></td>';
                                            }

                                        }
                                        
                                        $invoice_sambung3 .= '</tr>';
                                    }

                                    $invoice_sambung2 .= $invoice_sambung3;
                                } else {
                                    $invoice_sambung2 .= '<tr style="vertical-align: top;">';
                                    $invoice_sambung2 .= '<td width="25%">'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key3)).'</td>';
                                    $invoice_sambung2 .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value3.'" readonly style="cursor: not-allowed;"></td>';
                                    $invoice_sambung2 .= '</tr>';
                                }
                            }

                            $invoice_sambung2 .= '</table>';
                        } else {
                            $invoice_sambung .= '<tr style="vertical-align: top;">';
                            $invoice_sambung .= '<td width="25%">'.ucwords(preg_replace("~[\\\\/:*?<>|_]~", " ", $key2)).'</td>';
                            $invoice_sambung .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value2.'" readonly style="cursor: not-allowed;"></td>';
                            $invoice_sambung .= '</tr>';
                        }
                    }

                    $invoice_sambung .= '</table>';
                    $invoice .= $invoice_sambung;
                }
                
                $invoice .= '</td>';
                $invoice .= '<td>'.$invoice_sambung2.'</td>';
                $invoice .= '</tr>';

                $j++;
            }
        }
        
        $invoice .= '</table>';
    ?>
    <div id="data_1"><?php echo $header; ?></div>
    <div id="data_2" style="display: none;"><?php echo $invoice; ?></div>
    <div id="data_3" style="display: none;">
        <table id="table_data_v_document" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
            <thead style="width:100%">
                <tr align="center">
                    <th>No</th>
                    <th>Document Type</th>
                    <th>Document Number</th>
                    <th>Document Date</th>
                    <th>KPPBC</th>
                    <th>Value</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php $i=1; foreach ($data['arrayHeaderDoc'] as $key => $value) { ?>
                    <tr>
                        <td align="center"><?php echo $i; ?></td>
                        <td><?php echo $value['urai_dok']; ?></td>
                        <td><?php echo $value['document_number']; ?></td>
                        <td><?php echo $value['document_date']; ?></td>
                        <td><?php echo $value['urai_kppbc']; ?></td>
                        <td align="right">
                            <?php 
                                $val = $value['value'];
                                if($val != '') {
                                    if(strpos($val, '.') !== false) {
                                        $exp_value = explode('.', $val);
                                        if ($exp_value[1]) {
                                            $jml = strlen($exp_value[1]);
                                            $val = number_format($val, $jml);
                                        } else {
                                            $val = number_format($val);
                                        }
                                    } else {
                                        $val = number_format($val);
                                    }
                                }
                                
                                echo $val;
                                ?>
                        </td>
                        <?php $name_doc = "'".$value['urai_dok']."'"; ?>
                        <?php $file = "'".$value['path']."'"; ?>
                        <td align="center">
                            <div class="dropdown">
                                <button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-horizontal-rounded"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#" onclick="show_v_document(<?php echo $value['id']; ?>, <?php  echo $name_doc; ?>)">Views Document</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                <?php $i++; } ?>
            </tbody>
        </table>
    </div>
    <!-- <div id="data_4" style="display: none;">
        <table class="table dt-responsive w-100" width="100%">
            <tr style="vertical-align: top; text-align: center;">
                <td><h5><b>Input Serial Blangko Yang Akan Digunakan Pada SKA</h5></b></td>
            </tr>
            <tr style="vertical-align: top; text-align: justify;">
                <td>
                    Pastikan serial blangko yang di input benar karena akan dilakukan validasi pada sistem eform. Pastikan nomor serial yang di input sesuai dengan form yang dimohonkan. Pastikan status nomor serial yang anda masukkan pada permohonan ska berlaku pada menu "Rekapitulasi Blangko" di sistem e-form (<a href="http://e-form.kemendag.go.id" target="_blank">http://e-form.kemendag.go.id</a>). Dan tipe form nya sesuai dengan SKA yang diajukan.
                </td>
            </tr>
            <tr style="vertical-align: top; text-align: justify;">
                <td>
                    <b>Gunakan garis lurus ( | ) untuk input serial yang berurutan.</b><br/>
                    <b>Contoh</b> : A-XYZ-0001|0020 (Untuk input seri A-XYZ-0001,A-XYZ-0002,A-XYZ-0003, dst.. s/d , A-XYZ-0020)
                </td>
            </tr>
            <tr style="vertical-align: top; text-align: justify;">
                <td>
                    <b>Gunakan titik koma ( ; ) sebagai pemisah data serial.</b><br/>
                    <b>Contoh</b> : A-ABC-0025;A-ABC-0100;A-XXX-0020
                </td>
            </tr>
            <tr style="vertical-align: top; text-align: justify;">
                <td>
                    <b>Input kombinasi.</b><br/>
                    <b>Contoh</b> : A-XYZ-0001|0020;A-ABC-0025;A-ABC-0100;A-XXX-0020;
                </td>
            </tr>
            <tr style="vertical-align: top; text-align: justify;">
                <td>
                    <b>Pengajuan.</b><br/>
                    <input type="radio" id="btn_radio" name="btn_radio" value="0" onchange="changeradiobtn(this);"> e-form &nbsp;&nbsp;&nbsp; 
                    <input type="radio" id="btn_radio" name="btn_radio" value="1" onchange="changeradiobtn(this);"> non e-form
                </td>
            </tr>
            <tr style="vertical-align: top; text-align: justify; display: none;" id="input_serial">
                <td>
                    <b>Nomor Serial.</b><br/>
                    <textarea id="no_serial" name="no_serial" style="width: 600px; height: 150px;"></textarea>
                </td>
            </tr>
        </table>
        
        <div class="text-end">
            <input type="hidden" class="form-control" id="pengajuan" name="pengajuan" readonly>
            <button type="button" onclick="submit_coo(<?php //echo $no_aju; ?>, <?php //echo $nib; ?>, <?php //echo $npwp; ?>, <?php //echo $user_endpoint; ?>, <?php //echo $tipe; ?>);" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-check label-icon"></i> Submit Coo</button>
        </div>
    </div> -->
</div>