<div class="page-content">
    <div class="container-fluid">
        <?= $page_title; ?>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header" id="header">
                        <i id="form_tampil" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('header','form_tampil')"></i>
                        <h4 class="card-title"><i class="bx bx-upload "></i> Upload Document</h4>
                        <p class="card-title-desc">Please click the icon at the top right corner to display the upload document</p>
                    </div>
                    <div class="card-body p-4 form-horizontal" style="display: none;">
                        <form class="" method="post" action="javascript:void(0)" name="form_upload" id="form_upload">
                            <div class="row">
                                <div class="col-lg-6 ms-lg-auto">
                                    <div class="mt-4 mt-lg-0">
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Aju Number</label>
                                            <div class="col-sm-9">
                                                <select class="form-control single-choices" name="aju_number" id="aju_number" title="Aju Number">
                                                    <?php foreach($data_aju as $aju) { ?>
                                                        <option value="<?php echo $aju['id']; ?>"> <?php echo $aju['no_aju']; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Document Number</label>
                                            <div class="col-sm-9">
                                                <input class="form-control" type="text" id="document_number" name="document_number" title="Document Number">
                                            </div>
                                        </div>
                                        <div class="row mb-4" id="div_kppbc" style="display: none;">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">KPPBC</label>
                                            <div class="col-sm-9">
                                                <select class="form-control single-choices" name="kppbc" id="kppbc" title="KPPBC">
                                                    <?php foreach($ref_kppbc as $kppbc) { ?>
                                                        <option value="<?php echo $kppbc['code']; ?>"> <?php echo $kppbc['name']; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 ms-lg-auto">
                                    <div class="mt-4 mt-lg-0">
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Document Type</label>
                                            <div class="col-sm-9">
                                                <select class="form-control single-choices" name="document_type" id="document_type" title="Document Type" onchange="show_hide_input();">
                                                    <?php foreach($ref_document as $document) { ?>
                                                        <option value="<?php echo $document['id']; ?>"> <?php echo $document['name']; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Document Date</label>
                                            <div class="col-sm-9">
                                                <input class="form-control" type="text" id="document_date" name="document_date" title="Document Date">
                                            </div>
                                        </div>
                                        <div class="row mb-4" id="div_value" style="display: none;">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Value</label>
                                            <div class="col-sm-9">
                                                <input class="form-control" type="text" id="value" name="value" title="Value">
                                                <p style="color: red; font-style: italic;">Gunakan titik (.) untuk bilangan decimal</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="col-lg-12 ms-lg-auto">
                                    <div class="mt-12 mt-lg-0">
                                        <div class="row mb-12 text-center">
                                            <div>
                                                <input type="file" class="btn_upload_input" name="file_upload" id="file_upload" hidden="enabled" accept="application/pdf">
                                                <label class="btn_upload" id="file_upload_show" for="file_upload"><b>Upload File</b></label>
                                            </div>
                                            <div>
                                                <input type="hidden" class="form-control" name="index_data" id="index_data" value="0" readonly>
                                                <div id="hide_input"></div>    
                                            </div>
                                            <input class="form-control" type="hidden" id="tipe" name="tipe" value="1" readonly>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-lg-6">
                                <div>
                                    <div class="row mb-4">
                                        <h4 class="card-title"><i class="bx bx-data"></i> Data</h4> <p class="card-title-desc"> Please upload the document on the upload form to display the data in the table</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 ms-lg-auto">
                                <div class="mt-6 mt-lg-0">
                                    <div class="row mb-4">
                                        <form class="row gx-3 gy-2 align-items-center" method="post" action="javascript:void(0)" name="form_table" id="form_table">
                                            <div class="col-sm-5">
                                                <div class="input-group">
                                                </div>
                                            </div>
                                            <div class="col-sm-7">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" title="aju number" id="no_aju" name="no_aju" placeholder="Aju number...">
                                                    <button class="btn btn-primary" type="button" onclick="cari_data('form_table',true,'get_data_document');"><i class="bx bx-search-alt align-middle"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table id="table_data" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
                                <thead style="width:100%">
                                    <tr align="center">
                                        <th>No</th>
                                        <th>Transaction</th>
                                        <th>Client</th>
                                        <th>Partner</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="modal fade" id="exampleModalScrollable" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <b><div id="modal_header"></div></b>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="modal_body" style="text-align: left;">
                                        <div id="modal_loading"  style="text-align: center;"></div>
                                        <form class="" method="post" action="javascript:void(0)" name="form_v_document" id="form_v_document">
                                            <input type="hidden" id="header_id" name="header_id" readonly>   
                                        </form>
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
                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <div class="modal fade" id="exampleModalScrollable1" tabindex="-1" role="dialog" aria-labelledby="exampleModalScrollableTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <b><div id="modal_header1"></div></b>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="modal_body1" style="text-align: center;">
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- container-fluid -->
    </div>
<!-- End Page-content -->
</div>
