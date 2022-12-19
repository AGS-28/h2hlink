

<div class="page-content">
    <div class="container-fluid">
        <?= $page_title; ?>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header" id="header">
                        <i id="form_tampil" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('header','form_tampil')"></i>
                        <h4 class="card-title"><i class="bx bx-search"></i> Searching</h4>
                        <p class="card-title-desc">Please click the icon at the top right corner to display the search form</p>
                    </div>
                    <div class="card-body p-4 form-horizontal" style="display: none;">
                        <form class="" method="post" action="javascript:void(0)" name="form_rekap_client" id="form_rekap_client" onsubmit="cari_data('form_rekap_client','cari_data');">
                            <div class="row">
                                <div class="col-lg-6 ms-lg-auto">
                                    <div class="mt-4 mt-lg-0">
                                        <p class="card-title-desc"><i class="mdi mdi-information-variant"></i> Please enter input and click search to display data</p>
                                        <br/>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">NIB</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" name="nib" id="nib" title="NIB" multiple>
                                                    <?php foreach($data_client as $client) { ?>
                                                            <option value="<?php echo $client['nib']; ?>"> <?php echo $client['nib']; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Client Name</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" name="client_name" id="client_name" title="Client Name" multiple>
                                                    <?php foreach($data_client as $client) { ?>
                                                            <option value="<?php echo $client['id']; ?>"> <?php echo $client['client_name']; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Show Table</label>
                                            <div class="col-sm-9">
                                                <select class="form-control single-choices" name="show_table" id="show_table" title="Show Table" onchange="change_month_years();">
                                                    <option value="1">Month</option>
                                                    <option value="2">Years</option>
                                                    <option value="3">Date</option>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4" id="div_aju_date" style="display: none;">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Aju Date</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control date-range" id="aju_date" name="aju_date" title="Aju Date" value="<?php echo $aju_date; ?>" onchange="dinamis_column();">
                                            </div>
                                        </div>
                                        <!-- <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Paid Status</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" name="paid_status" id="paid_status" title="Paid Status" multiple>
                                                    <option value="1">Already</option>
                                                    <option value="2">Not Yet</option>
                                                </select>
                                            </div>
                                        </div> -->
                                    </div>
                                </div>
                                <div class="col-lg-6 ms-lg-auto">
                                    <div class="mt-4 mt-lg-0">
                                        <p class="card-title-desc" style="color:white;">Please enter input and click search to display data</p>
                                        <br/>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">NPWP</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" name="npwp" id="npwp" title="NPWP" multiple>
                                                        <?php foreach($data_client as $client) { ?>
                                                            <option value="<?php echo $client['npwp']; ?>"> <?php echo $client['npwp']; ?> </option>
                                                        <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Client Partner</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" name="client_partner" id="client_partner" multiple>
                                                    <?php foreach($data_partner as $partner) { ?>
                                                        <option value="<?php echo $partner['id']; ?>"> <?php echo $partner['partner_name']; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Years</label>
                                            <div class="col-sm-9" id="div_years_single">
                                                <?php $arr_years = get_years(); $years_now = date('Y'); ?>
                                                <select class="form-control single-choices" name="years_single" id="years_single" title="Years" onchange="dinamis_column();">
                                                    <?php foreach($arr_years as $years) { ?>
                                                        <?php $selected = ''; if($years == $years_now) { $selected = 'selected'; } ?>
                                                        <option value="<?php echo $years; ?>" <?php echo $selected; ?>> <?php echo $years; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                            <div class="col-sm-9" id="div_years_multiple" style="display: none;">
                                                <?php $arr_years = get_years(); $years_now = date('Y'); ?>
                                                <select class="form-control" name="years_multiple" id="years_multiple" title="Years" multiple onchange="dinamis_column();">
                                                    <?php foreach($arr_years as $years) { ?>
                                                        <?php $selected = ''; if($years == $years_now) { $selected = 'selected'; } ?>
                                                        <option value="<?php echo $years; ?>" <?php echo $selected; ?>> <?php echo $years; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                            <div class="col-sm-9" id="div_years_disabled" style="display: none;">
                                                <?php $arr_years = get_years(); $years_now = date('Y'); ?>
                                                <select class="form-control" name="years_disabled" id="years_disabled" title="Years" multiple onchange="dinamis_column();">
                                                    <?php foreach($arr_years as $years) { ?>
                                                        <option value="<?php echo $years; ?>"> <?php echo $years; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Month</label>
                                            <div class="col-sm-9" id="div_month_enabled">
                                                <?php $arr_month = get_month(); $month_now = date('m'); ?>
                                                <select class="form-control" name="month_enabled" id="month_enabled" title="Month" multiple onchange="dinamis_column();">
                                                    <?php $i = 1; foreach($arr_month as $month) { ?>
                                                        <?php $selected = ''; if($i == $month_now) { $selected = 'selected'; } ?>
                                                        <option value="<?php echo $i; ?>" <?php echo $selected; ?>> <?php echo $month; ?> </option>
                                                    <?php $i++; } ?>
                                                </select>
                                            </div>
                                            <div class="col-sm-9" id="div_month_disabled" style="display: none;">
                                                <?php $arr_month = get_month(); $month_now = date('m'); ?>
                                                <select class="form-control" name="month_disabled" id="month_disabled" title="Month" multiple>
                                                    <?php $i = 1; foreach($arr_month as $month) { ?>
                                                        <option value="<?php echo $i; ?>"> <?php echo $month; ?> </option>
                                                    <?php $i++; } ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="col-lg-12 ms-lg-auto">
                                    <div class="mt-12 mt-lg-0">
                                        <div class="row mb-12 text-center">
                                            <div>
                                                <input class="form-control" type="hidden" name="tipe" id="tipe" value="<?php echo $tipe; ?>" readonly>
                                                <input class="form-control" type="hidden" name="client_id" id="client_id" readonly>
                                                <input class="form-control" type="hidden" name="partner_id" id="partner_id" readonly>
                                                <input class="form-control" type="hidden" name="month_tracking" id="month_tracking" readonly>
                                                <input class="form-control" type="hidden" name="years_tracking" id="years_tracking" readonly>
                                                <button type="submit" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-check label-icon"></i> Search</button> &nbsp;
                                                <button type="reset" class="btn btn-danger waves-effect btn-label waves-light"><i class="bx bx-rotate-left label-icon"></i> Reset</button>
                                            </div>
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
                                        <h4 class="card-title"><i class="bx bx-data"></i> Data</h4> <p class="card-title-desc"> Please enter input and click icon Search to display data</p>
                                    </div>
                                </div>
                            </div>
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
                                    <div class="modal-body" id="modal_body" style="text-align: center;">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table id="table_data" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
                                <thead style="width:100%">
                                    <tr valign="middle">
                                        <th class="text-center" width="5%" rowspan="2">No</th>
                                        <th class="text-center" rowspan="2">Client Name</th>
                                        <th class="text-center" rowspan="2">Partner Name</th>
                                        <?php 
                                            $years_now = date("Y");
                                        ?>
                                        <th class="text-center" colspan="1"><?php echo $years_now; ?></th>
                                        <th class="text-center" rowspan="2">Total</th>
                                        <!-- <th class="text-center" rowspan="2">Billing</th> -->
                                        <!-- <th class="text-center" rowspan="2" valign="middle">Paid Status</th> -->
                                        <th class="text-center" rowspan="2">Action</th>
                                    </tr>
                                    <tr valign="middle">
                                        <?php 
                                            $month_now = date("m");
                                            $month_now = (int)$month_now - 1;
                                            $arr_month = get_month();
                                        ?>
                                        <th class="text-center"><?php echo $arr_month[$month_now]; ?></th>
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
        <!-- container-fluid -->
    </div>
<!-- End Page-content -->
</div>
