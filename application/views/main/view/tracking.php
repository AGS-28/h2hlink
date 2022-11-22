

<div class="page-content">
    <div class="container-fluid">
        <?= $page_title; ?>
        <!-- <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header" id="header">
                        <i id="form_tampil" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('header','form_tampil')"></i>
                        <h5 class="card-title"><i class="feather icon-search"></i> Form Searching</h5>
                        <p class="card-title-desc">Please click the icon at the top right corner to display the search form</p>
                    </div>
                    <div class="card-body p-4">
                        <form class="form-horizontal" method="post" action="javascript:void(0)" name="form_tracking" id="form_tracking" style="display: none;">
                        
                    </div>
                </div>
            </div>
        </div> -->

        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header" id="header">
                        <i id="form_tampil" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('header','form_tampil')"></i>
                        <h4 class="card-title"><i class="mdi mdi-selection-search"></i> Form Searching</h4>
                        <p class="card-title-desc">Please click the icon at the top right corner to display the search form</p>
                    </div>
                    <div class="card-body p-4">
                        <form class="form-horizontal" method="post" action="javascript:void(0)" name="form_tracking" id="form_tracking" style="display: none;">
                            <div class="row">
                                <div class="col-lg-5">
                                    <div>
                                        <p class="card-title-desc"><i class="mdi mdi-information-outline"></i> Please enter input and click search to display data</p>
                                        <br/>
                                        <div class="row mb-4">
                                            <label for="horizontal-firstname-input" class="col-sm-3 col-form-label">First name</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="horizontal-firstname-input">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-lg-6 ms-lg-auto">
                                    <div class="mt-4 mt-lg-0">
                                        <p class="card-title-desc" style="color:white;">Please enter input and click search to display data</p>
                                        <br/>
                                        <div class="row mb-4">
                                            <label for="horizontal-firstname-input" class="col-sm-3 col-form-label">First name</label>
                                            <div class="col-sm-9">
                                                <input type="text" class="form-control" id="horizontal-firstname-input">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr>
                                <div class="col-lg-12 ms-lg-auto">
                                    <div class="mt-12 mt-lg-0">
                                        <div class="row mb-12 text-center">
                                            <div>
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
                                        <h4 class="card-title"><i class="mdi mdi-database-settings-outline"></i> Data</h4> <p class="card-title-desc"> Please enter input and click Search to display data</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 ms-lg-auto">
                                <div class="mt-6 mt-lg-0">
                                    <div class="row mb-4">
                                        <form class="row gx-3 gy-2 align-items-center" method="post" action="javascript:void(0)" name="form_table" id="form_table" onsubmit="cari_data('form_table');">
                                            <div class="col-sm-5">
                                                <input type="text" class="form-control" title="npwp" id="npwp" name="npwp" placeholder="npwp" maxlength="15">
                                            </div>
                                            <div class="col-sm-5">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" title="aju number" id="no_aju" name="no_aju" placeholder="aju number">
                                                </div>
                                            </div>
                                            <div class="col-sm-2">
                                                <button type="submit" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-check label-icon"></i> Search</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="card-body p-12">
                        <table id="table_data" class="table table-bordered dt-responsive nowrap w-100">
                            <thead>
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
                    </div>
                </div>
            </div>
        </div>
        <!-- container-fluid -->
    </div>
<!-- End Page-content -->
</div>
