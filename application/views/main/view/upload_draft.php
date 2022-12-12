<div class="page-content">
    <div class="container-fluid">
        <?= $page_title; ?>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header" id="header">
                        <i id="form_tampil" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('header','form_tampil')"></i>
                        <h4 class="card-title"><i class="bx bx-upload "></i> Upload Draft</h4>
                        <p class="card-title-desc">Please click the icon at the top right corner to display the upload draft</p>
                    </div>
                    <div class="card-body p-4 form-horizontal" style="display: none;">
                        <div class="row mb-4">
                            <label for="horizontal-input" class="col-sm-3 col-form-label">Client Partner</label>
                            <div class="col-sm-9">
                                <select class="form-control single-choices" name="client_partner" id="client_partner">
                                    <?php foreach($data_partner as $partner) { ?>
                                        <option value="<?php echo $partner['id']; ?>"> <?php echo $partner['partner_name']; ?> </option>
                                    <?php } ?>
                                </select>
                            </div>
                        </div>
                        <div class="row mb-4">
                            <label for="horizontal-input" class="col-sm-3 col-form-label">Invoice Number</label>
                            <div class="col-sm-9">
                                <input type="text" class="form-control" title="Invoice Number" id="invoice_number" name="invoice_number">
                            </div>
                        </div>
                        <div class="row mb-4">
                            <label for="horizontal-input" class="col-sm-3 col-form-label">File</label>
                            <div class="col-sm-9">
                                <form action="#" class="dropzone" id="myDropzone" name="myDropzone">
                                    <div class="fallback">
                                        <input name="file" type="file" multiple="multiple">
                                    </div>
                                    <div class="dz-message needsclick">
                                        <div class="mb-3">
                                            <i class="display-4 text-muted bx bx-cloud-upload"></i>
                                        </div>

                                        <h5>Drop files here or click to upload.</h5>
                                    </div>
                                </form>
                            </div>
                        </div>
                        <div class="text-end mt-4">
                            <input class="form-control" type="hidden" id="tipe" name="tipe" value="0" readonly>
                            <button type="submit" onclick="confirm_upload_draft();" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-check label-icon"></i> Send Files</button>
                        </div>
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
                                        <h4 class="card-title"><i class="bx bx-data"></i> Data</h4> <p class="card-title-desc"> Please enter input and click icon Search to display data</p>
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
                                                    <input type="text" class="form-control" title="Draft Number" id="no_draft" name="no_draft" placeholder="Draft Number...">
                                                    <button class="btn btn-primary" type="button" onclick="cari_data('form_table',true,'get_data_draft');"><i class="bx bx-search-alt align-middle"></i></button>
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
                        <div>
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
                                                    <th>Document Name</th>
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
                </div>
            </div>
        </div>
        <!-- container-fluid -->
    </div>
<!-- End Page-content -->
</div>
