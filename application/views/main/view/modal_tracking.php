<style type="text/css">
    .btn_upload{
        display: inline-block;
        background-color: #022133;
        color: white;
        padding: 0.5rem;
        font-family: sans-serif;
        border-radius: 0.3rem;
        cursor: pointer;
        /*margin-top: 1rem;*/
    }

    .file-chosen{
        margin-left: 0.3rem;
        font-family: sans-serif;
    }

    .responsive-iframe {
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        width: 100%;
        height: 100%;
    }
</style>
<script>
    $(document).ready(function() {
        flatpickr('#document_date', {});
        
        const singleNoSorting = new Choices('#aju_number', {
            shouldSort: true,
        });
        
        const singleNoSorting = new Choices('#document_type', {
            shouldSort: true,
        });
        
        const document_type = set_id_file();
        const file_upload = document.getElementById('file_upload_'+document_type);
        file_upload.addEventListener('change', function(){
            add_file(this);
        });

        $("#table_upload").DataTable({
            searching: false,
            dom: 'Bfrtip',
            buttons: []
        });
    }); 

    function set_id_file() {
        const document_type = $('#document_type').val();
        $(".btn_upload_input").attr({ id: 'file_upload_'+document_type, name:'file_upload_'+document_type }); 
        $(".btn_upload").attr('for', 'file_upload_'+document_type); 

        return document_type;
    }

    function progress_bar(tipe, width, title, align) {
        $('#title').attr('align', align);
        $('#title').html(title);
        $('#progress_bar').css('width', width+'%');
        
        var id_btn = [1,2,3];
        $.each(id_btn, function( index, value ) {
            if(parseInt(value) <= parseInt(tipe)) {
                $('#btn_'+value).removeClass('btn-secondary');
                $('#btn_'+value).addClass('btn-primary');
            } else {
                $('#btn_'+value).removeClass('btn-primary');
                $('#btn_'+value).addClass('btn-secondary');
            }

            if(value == tipe) {
                $('#data_'+value).show();
            } else {
                $('#data_'+value).hide();
            }
        });
    }

    function add_file(file) {
        var errorString = "Please complete the following data : <br\>";
        var panjangAwal = errorString.length;
        var obj = {};
        var arr_txt = ['document_number','document_date'];

        $('#form_upload').find('input[type="text"],select,textarea').each(function() {
            if(this.title != '' && this.value == '') {
                errorString += "- "+this.title+"  <br\>";
            }
        });

        var panjangAkhir = errorString.length;
        panjangAkhir = errorString.length;
        if (panjangAwal == panjangAkhir) {
            var html = "";
            var html2 = "";
            var val_document_type = '';
            var index_data = $('#index_data').val();
            var no = parseInt(index_data) + 1;
            
            html2 += '<tr id="tr_'+index_data+'">';
            html2 += '<td align="center">' + no +'</td>';
            $('#form_upload').find('input[type="text"],select,textarea').each(function() {
                if(this.title != '' && this.value != '') {
                    html += '<input type="hidden" name="hide_' + this.id + '[' + index_data + ']" id="hide_' + this.id  + '[' + index_data + ']" value="' + this.value + '" readonly>'; 
                    if(this.id == 'aju_number' || this.id == 'document_type') {
                        var urai = $('#'+this.id+' option:selected').text();
                    } else {
                        var urai = this.value;
                    }

                    if(this.id == 'document_type') {
                        val_document_type = this.value;
                    }
                    html2 += '<td>' + urai +'</td>';
                }
            });
            html2 += '<td align="center"><button type="button" onclick="show_file('+val_document_type+')" class="btn btn-soft-light btn-sm w-xs waves-effect btn-label waves-light"><i class="bx bx-download label-icon"></i> File</button></td>';
            html2 += '</tr>';
            
            if(index_data == 0) {
                $("#table_upload").DataTable();      
                $(".dataTables_empty").parents('tbody').empty();

                $('#btn_save_doc').show();
            }
            
            $('#hide_input').append(html);
            $('#hide_input').append(file);
            $('#table_upload tbody').append(html2);
            var next_index = parseInt(index_data) + 1;
            $('#index_data').val(next_index);
            $('#no').val(no);
        } else {
            swal.fire({
                title: "Warning!",
                html: errorString,
                icon: "warning",
                button: "Close",
            });
        }
    }

    function show_file(document_type) {
        $('#exampleModalScrollable1').modal('toggle');
        
        const preview = document.querySelector('iframe');
        const file = $('#file_upload_'+document_type).prop('files')[0];
        const reader = new FileReader();

        reader.addEventListener("load", function () {
            preview.src = reader.result;
        }, false);

        if (file) {
            reader.readAsDataURL(file);
        }
    }
</script>
<div style="text-align: left;">
    <?php if($data['tipe'] == 0) { ?>
            <?php $json_pretty = json_decode(json_encode($data['arrayReturn'][0]['message_content'])); ?>
            <p>Request Created : <?php echo $data['arrayReturn'][0]['created_at_message'] ?></p>
            <p>Request Id : <?php echo $data['arrayReturn'][0]['message_id'] ?></p>
            <p>Request Type : <?php echo $data['arrayReturn'][0]['urai_message_type'] ?></p>
            <p>Request Content : <pre> <?php echo $json_pretty; ?> </pre></p>
    <?php } else if($data['tipe'] == 1) { ?>
            <?php $json_pretty = json_decode(json_encode($data['arrayReturn'][0]['result_responses'])); ?>
            <p>Respons Created : <?php echo $data['arrayReturn'][0]['created_at_responses'] ?></p>
            <p>Respons Code : <?php echo $data['arrayReturn'][0]['result_code'] ?></p>
            <p>Respons Type : <?php echo $data['arrayReturn'][0]['urai_message_type'] ?></p>
            <p>Respons Content : <?php echo pretty_print($json_pretty); ?></p>
    <?php } else if($data['tipe'] == 2) { ?>
            <div class="position-relative m-4">
                <div class="progress" style="height: 1px;">
                    <div id="progress_bar" class="progress-bar" role="progressbar" style="width: 0%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                </div>
                <button type="button" id="btn_1" class="position-absolute top-0 start-0 translate-middle btn btn-sm btn-primary rounded-pill" style="width: 2rem; height:2rem;" onclick="progress_bar(1,0,'Header','left');">1</button>
                <button type="button" id="btn_2" class="position-absolute top-0 start-50 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;" onclick="progress_bar(2,50,'Invoice','center');">2</button>
                <?php if($data[0]['partner_endpoint_id'] == 2) { ?>
                    <button type="button" id="btn_3" class="position-absolute top-0 start-100 translate-middle btn btn-sm btn-secondary rounded-pill" style="width: 2rem; height:2rem;" onclick="progress_bar(3,100,'Document','right');">3</button>
                <?php } ?>
            </div>
            <div id="title">Header</div>
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
                                        $header .= '<td>'.$value2.'</td>';
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
                            $header .= '<td><input class="form-control form-control-sm" type="text" id="form-sm-input" value="'.$value1.'" readonly style="cursor: not-allowed;"></td>';
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
            <div id="data_3" style="display: none;">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="card">
                            <div class="card-header">
                                <h4 class="card-title"><i class="bx bx-file-blank"></i> Document</h4>
                                <p class="card-title-desc">Please enter input and click upload to add document</p>
                                <br/>
                                <form class="form-horizontal" method="post" action="javascript:void(0)" name="form_upload" id="form_upload" onsubmit="upload_file('form_tracking');">
                                    <div class="row">
                                        <div class="col-lg-5 ms-lg-auto">
                                            <div class="mt-4 mt-lg-0">
                                                <div class="row mb-4">
                                                    <label for="horizontal-input" class="col-sm-5 col-form-label">Aju Number</label>
                                                    <div class="col-sm-5">
                                                        <select class="form-control" name="aju_number" id="aju_number" title="Aju Number">
                                                            <option value="1">aaaaa</option>
                                                            <option value="2">bbbbb</option>
                                                            <option value="3">ccccc</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 ms-lg-auto">
                                            <div class="mt-4 mt-lg-0">
                                                <div class="row mb-4">
                                                    <label for="horizontal-input" class="col-sm-5 col-form-label">Document Type</label>
                                                    <div class="col-sm-5">
                                                        <select class="form-control" name="document_type" id="document_type" title="Document Type" onchange="set_id_file();">
                                                            <option value="1">aaaaaaa</option>
                                                            <option value="2">bbbbbbb</option>
                                                            <option value="3">ccccccc</option>
                                                        </select>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 ms-lg-auto">
                                            <div class="mt-4 mt-lg-0">
                                                <div class="row mb-4">
                                                    <div class="col-sm-12">
                                                        <input type="hidden" class="form-control" name="index_data" id="index_data" value="0" readonly>
                                                        <input type="hidden" class="form-control" name="no" id="no" value="0" readonly>
                                                        <div id="hide_input"></div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        <div class="col-lg-5 ms-lg-auto">
                                            <div class="mt-4 mt-lg-0">
                                                <div class="row mb-4">
                                                    <label for="horizontal-input" class="col-sm-5 col-form-label">Document Number</label>
                                                    <div class="col-sm-5">
                                                        <input class="form-control" type="text" id="document_number" name="document_number" title="Document Number">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-5 ms-lg-auto">
                                            <div class="mt-4 mt-lg-0">
                                                <div class="row mb-4">
                                                    <label for="horizontal-input" class="col-sm-5 col-form-label">Document Date</label>
                                                    <div class="col-sm-5">
                                                        <input class="form-control" type="text" id="document_date" name="document_date" title="Document Date">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="col-lg-2 ms-lg-auto">
                                            <div class="mt-4 mt-lg-0">
                                                <div class="row mb-4">
                                                    <div class="col-sm-12">
                                                        <input type="file" class="btn_upload_input" name="file_upload" id="file_upload" hidden="enabled" accept="application/pdf">
                                                        <label class="btn_upload" id="file_upload_show" for="file_upload"><b>Upload File</b></label>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div class="card-body">
                                <div class="modal fade" id="exampleModalScrollable1" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                                    <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
                                        <div class="modal-content">
                                            <div class="modal-header">
                                                <b><div id="modal_header"></div></b>
                                                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                            </div>
                                            <div class="modal-body" id="modal_body" style="text-align: center;">
                                                <iframe class="responsive-iframe" src="" id="iframe-pdf"></iframe>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="table-responsive">
                                    <button type="button" id="btn_save_doc" onclick="save();" class="btn btn-primary waves-effect btn-label waves-light" style="display: none;"><i class="bx bx-check label-icon"></i> Save</button>
                                    <table id="table_upload" class="table table-bordered dt-responsive nowrap w-100" width="100%">
                                        <thead style="width:100%">
                                            <tr align="center">
                                                <th>No</th>
                                                <th>Aju Number</th>
                                                <th>Document Type</th>
                                                <th>Document Number</th>
                                                <th>Document Date</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                        </tbody>
                                    </table>
                                <div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    <?php } ?>
</div>