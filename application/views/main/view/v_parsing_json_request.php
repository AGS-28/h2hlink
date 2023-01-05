<div style="text-align: left;">
    <div id="progrss-wizard" class="twitter-bs-wizard">
        <ul class="twitter-bs-wizard-nav nav nav-pills nav-justified">
            <li class="nav-item">
                <a href="#" onclick="progress_bar(1);" class="nav-link" data-toggle="tab">
                    <div class="step-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Header" id="btn_1">
                        <i class="bx bxs-bank"></i>
                    </div>
                </a>
                Header
            </li>
            
            <li class="nav-item">
                <a href="#" onclick="progress_bar(2);" class="nav-link" data-toggle="tab">
                    <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="Detail" id="btn_2">
                        <i class="bx bx-list-ul"></i>
                    </div>
                </a>
                Detail
            </li>
        </ul>
    </div>
    <br/>
    <?php 
        $data_json = '['.$data['arrayReturn'][0]['message_content'].']'; 
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
                    }  else if($key1 == 'jenis_form') {
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
</div>