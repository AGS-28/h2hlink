<?php 
    $style = 'style="display: none;"';
    $icon = 'fa fa-chevron-left';
    $tipe_txt = '';
?>

<div class="page-content">
    <div class="container-fluid">
        <?= $page_title; ?>

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header" id="header">
                        <i id="form_tampil" class="<?php echo $icon; ?>" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('header','form_tampil')"></i>
                        <h4 class="card-title"><i class="bx bx-search"></i> Searching</h4>
                        <p class="card-title-desc">Please click the icon at the top right corner to display the search form</p>
                    </div>
                    <div class="card-body p-4 form-horizontal" <?php echo $style; ?>>
                        <form class="" method="post" action="javascript:void(0)" name="form_tracking" id="form_tracking" onsubmit="cari_data('form_tracking');">
                            <div class="row">
                                <div class="col-lg-6 ms-lg-auto">
                                    <div class="mt-4 mt-lg-0">
                                        <p class="card-title-desc"><i class="mdi mdi-information-variant"></i> Please enter input and click search to display data</p>
                                        <br/>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">NIB</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" name="nib<?php echo $tipe_txt; ?>" id="nib<?php echo $tipe_txt; ?>" title="NIB" multiple>
                                                    <?php foreach($data_client as $client) { ?>
                                                        <?php 
                                                            $selected = '';
                                                            if($tipe == 1) {
                                                                if($client['nib'] == $data_client_byid[0]['nib']) {
                                                                    $selected = 'selected';
                                                                }
                                                            }
                                                        ?>
                                                        <option value="<?php echo $client['nib']; ?>" <?php echo $selected; ?>> <?php echo $client['nib']; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Client Name</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" name="client_name<?php echo $tipe_txt; ?>" id="client_name<?php echo $tipe_txt; ?>" title="Client Name" multiple>
                                                    <?php foreach($data_client as $client) { ?>
                                                        <?php 
                                                            $selected = '';
                                                            if($tipe == 1) {
                                                                if($client['id'] == $data_client_byid[0]['id']) {
                                                                    $selected = 'selected';
                                                                }
                                                            }
                                                        ?>
                                                        <option value="<?php echo $client['id']; ?>" <?php echo $selected; ?>> <?php echo $client['client_name']; ?> </option>
                                                    <?php } ?>
                                                </select>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 ms-lg-auto">
                                    <div class="mt-4 mt-lg-0">
                                        <p class="card-title-desc" style="color:white;">Please enter input and click search to display data</p>
                                        <br/>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">NPWP</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" name="npwp<?php echo $tipe_txt; ?>" id="npwp<?php echo $tipe_txt; ?>" title="NPWP" multiple>
                                                        <?php foreach($data_client as $client) { ?>
                                                            <?php 
                                                                $selected = '';
                                                                if($tipe == 1) {
                                                                    if($client['npwp'] == $data_client_byid[0]['npwp']) {
                                                                        $selected = 'selected';
                                                                    }
                                                                }
                                                            ?>
                                                            <option value="<?php echo $client['npwp']; ?>" <?php echo $selected; ?>> <?php echo $client['npwp']; ?> </option>
                                                        <?php } ?>
                                                </select>
                                                <!-- <input type="text" class="form-control" id="npwp" name="npwp" title="NPWP" onkeypress="return event.charCode >= 48 && event.charCode <= 57"> -->
                                            </div>
                                        </div>
                                        <div class="row mb-4">
                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Client Partner</label>
                                            <div class="col-sm-9">
                                                <select class="form-control" name="client_partner<?php echo $tipe_txt; ?>" id="client_partner<?php echo $tipe_txt; ?>" multiple>
                                                    <?php foreach($data_partner as $partner) { ?>
                                                        <?php 
                                                            $selected = '';
                                                            if($tipe == 1) {
                                                                if($partner['id'] == $partner_id) {
                                                                    $selected = 'selected';
                                                                }
                                                            }
                                                        ?>
                                                        <option value="<?php echo $partner['id']; ?>" <?php echo $selected; ?>> <?php echo $partner['partner_name']; ?> </option>
                                                    <?php } ?>
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
                            <div class="col-lg-6 ms-lg-auto">
                                <div class="mt-6 mt-lg-0">
                                    <div class="row mb-4">
                                        <form class="row gx-3 gy-2 align-items-center" method="post" action="javascript:void(0)" name="form_table" id="form_table">
                                            <div class="col-sm-5">
                                                <div class="input-group">
                                                    <!-- <input type="text" class="form-control" title="aju number" id="no_aju" name="no_aju" placeholder="aju number"> -->
                                                </div>
                                            </div>
                                            <div class="col-sm-7">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" title="aju number" id="no_aju" name="no_aju" placeholder="Aju number...">
                                                    <button class="btn btn-primary" type="button" onclick="cari_data('form_table',true);"><i class="bx bx-search-alt align-middle"></i></button>
                                                    <!-- <div class="input-group-text" onclick="cari_data('form_table');" style="cursor: pointer;"><i class="bx bx-search"></i></div> -->
                                                </div>
                                            </div>
                                        </form>
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
                                    <tr align="center">
                                        <th>No</th>
                                        <th>Client</th>
                                        <th>Partner</th>
                                        <th>Transaction</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                </tbody>
                            </table>
                        <div>
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
