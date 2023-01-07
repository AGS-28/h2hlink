<script>
    $(document).ready(function() {
        $("#table_data_v_document").DataTable({
            searching: false,
            dom: 'Bfrtip',
            buttons: []
        });
    });

    function show_v_document(name_doc, file) {
        $('#exampleModalScrollable1').modal('toggle');
        $('#modal_header1').html('Views Document '+name_doc);
        $('#modal_body1').html('<iframe class="responsive-iframe" src="" id="iframe-pdf"></iframe>');

        const preview = document.querySelector('iframe');
        preview.src = file;
    }
</script>
<div style="text-align: left;">
    <div id="progrss-wizard" class="twitter-bs-wizard">
        <ul class="twitter-bs-wizard-nav nav nav-pills nav-justified">
            <li class="nav-item">
                <a href="#" onclick="progress_bar(1);" class="nav-link" data-toggle="tab">
                    <div class="step-icon btn-light" data-bs-toggle="tooltip" data-bs-placement="top" title="Document" id="btn_1">
                        <i class="bx bx-list-ul"></i>
                    </div>
                </a>
                Document
            </li>
        </ul>
    </div>
    <br/>
    
    <div id="data_1">
        <table id="table_data_v_document" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
            <thead style="width:100%">
                <tr align="center">
                    <th>No</th>
                    <th>Document Type</th>
                    <th>Document Number</th>
                    <th>Document Date</th>
                    <th>KPPBC</th>
                    <th>Value FOB (USD)</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <?php
                    $data_json = '['.$data['arrayReturn'][0]['message_content'].']'; 
                    $array_data = json_decode( $data_json, true );
                ?>
                <?php $i=1; foreach ($array_data[0]['supporting_doc'] as $key => $value) { ?>
                    <tr>
                        <td align="center"><?php echo $i; ?></td>
                        <td><?php echo $arr_refdokumen[$value['doc_type']]; ?></td>
                        <td><?php echo $value['doc_no']; ?></td>
                        <td><?php echo $value['doc_date']; ?></td>
                        <?php 
                            $kppbc = $value['kppbc'];
                            if($kppbc != '') {
                                $kppbc = $arr_refkppbc[$kppbc];
                            }
                        ?>
                        <td><?php echo $kppbc; ?></td>
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
                        <?php $name_doc = "'".$arr_refdokumen[$value['doc_type']]."'"; ?>
                        <?php $file = "'".$value['file']."'"; ?>
                        <td align="center">
                            <div class="dropdown">
                                <button class="btn btn-link font-size-16 shadow-none py-0 text-muted dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    <i class="bx bx-dots-horizontal-rounded"></i>
                                </button>
                                <ul class="dropdown-menu dropdown-menu-end">
                                    <li><a class="dropdown-item" href="#" onclick="show_v_document(<?php  echo $name_doc; ?>, <?php echo $file; ?>)">Views Document</a></li>
                                </ul>
                            </div>
                        </td>
                    </tr>
                <?php $i++; } ?>
            </tbody>
        </table>
    </div>
</div>