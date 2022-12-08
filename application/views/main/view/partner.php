

<div class="page-content">
    <div class="container-fluid">
        <?= $page_title; ?>
        <div class="row">
            <div class="col-lg-12">
                <div class="card">
                    <div class="card-header">
                        <div class="row">
                            <div class="col-lg-6">
                                <div>
                                    <div class="row mb-4">
                                        <h4 class="card-title"><i class="bx bx-data"></i> Partner Manajement</h4> <p class="card-title-desc"> Please enter input and click icon Search to display data</p>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6 ms-lg-auto">
                                <div class="mt-6 mt-lg-0">
                                    <div class="row mb-4">
                                        <form class="row gx-3 gy-2 align-items-center" method="post" action="javascript:void(0)" name="form-search" id="form-search">
                                            <div class="col-sm-5">
                                                <div class="input-group">
                                                    <!-- <input type="text" class="form-control" title="aju number" id="no_aju" name="no_aju" placeholder="aju number"> -->
                                                </div>
                                            </div>
                                            <div class="col-sm-7">
                                                <div class="input-group">
                                                    <input type="text" class="form-control" title="searchkey" id="searchkey" name="searchkey" placeholder="Search..." >
                                                    <button class="btn btn-primary" type="button" onclick="get_data_all('form_table');"><i class="bx bx-search-alt align-middle"></i></button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-lg-4">
                            <!-- <button type="button" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-add label-icon"></i> </button> -->
                            <button class="btn font-16 btn-primary" id="add-item" ><i class="mdi mdi-plus-circle-outline"></i> Add Partner</button>
                        </div>
                        </div>
                    </div>
                    <div class="card-body">
						<div class="modal fade" id="modal_add" tabindex="-1" role="dialog" aria-labelledby="modal_addTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <b><div id="modal_header"> Add Partner</div></b>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="modal_body" style="text-align: center;">
                                        <form class="form-horizontal" method="post" action="javascript:void(0)" name="form-add-item" id="form-add-item"  onsubmit="confirm_kirim(additem,'form-add-item')">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h4 class="card-title mb-0">Form Add Partner</h4>
                                                        </div>
                                                        <div class="card-body">

                                                            <div id="progrss-wizard" class="twitter-bs-wizard">
                                                                <ul class="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                                    <li class="nav-item">
                                                                        <a href="#progress-seller-details" class="nav-link" data-toggle="tab" target="_top">
                                                                            <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Seller Details">
                                                                                <i class="bx bx-list-ul"></i>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a href="#progress-bank-detail" class="nav-link active" data-toggle="tab" target="_top">
                                                                            <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Bank Details">
                                                                                <i class="bx bxs-bank"></i>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                </ul>
                                                                <!-- wizard-nav -->

                                                                <div id="bar" class="progress mt-4">
                                                                    <div class="progress-bar bg-success progress-bar-striped progress-bar-animated" style="width: 100%;"></div>
                                                                </div>
                                                                <div class="tab-content twitter-bs-wizard-tab-content">
                                                                    <div class="tab-pane" id="progress-seller-details">
                                                                        <div class="text-center mb-4">
                                                                            <h5>Profile Partner</h5>
                                                                            <p class="card-title-desc">Fill all information below</p>
                                                                        </div>
                                                                            <div class="row">
                                                                                <div class="col-lg-6">
                                                                                    <div class="mb-3">
                                                                                        <label for="partner-name">Partner Name</label>
                                                                                        <input type="text" class="form-control" id="partner-name" name="partner-name">
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="row">
                                                                                <div class="col-lg-6">
                                                                                    <div class="mb-3">
                                                                                        <label for="parner-detail">Parner Details</label>
                                                                                        <textarea class="form-control" id="parner-detail" name="parner-detail"></textarea>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        <ul class="pager wizard twitter-bs-wizard-pager-link">
                                                                            <li class="next disabled"><a href="javascript: void(0);" class="btn btn-primary" onclick="nextTab()" target="_top">Next <i class="bx bx-chevron-right ms-1"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="tab-pane active" id="progress-bank-detail">
                                                                        <div class="card">
                                                                            <div class="card-header" id="header">
                                                                                <i id="form_tampil" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('header','form_tampil','show_card_body')"></i>
                                                                                <h4 class="card-title"><i class="bx bx-edit-alt"></i> Form Add Methods</h4>
                                                                                <p class="card-title-desc">Please click the icon at the top right corner to display the add form</p>
                                                                            </div>
                                                                            <div class="card-body p-4 show_card_body" style="display: none;">
                                                                                <div class="row">
                                                                                    <div class="col-lg-6">
                                                                                        <div class="mb-3">
                                                                                            <label for="method-name" class="form-label">Method Name</label>
                                                                                            <input type="text" class="form-control" id="method-name">
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-lg-6">
                                                                                        <div class="mb-3">
                                                                                            <label for="endpoint" class="form-label">End Point</label>
                                                                                            <input type="text" class="form-control" id="endpoint">
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-lg-6">
                                                                                        <div class="mb-3">
                                                                                            <label class="form-label">Message Type</label>
                                                                                            <select class="form-control" name="message_type" id="message_type" >
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="col-lg-6">
                                                                                        <div class="mb-3">
                                                                                            <label class="form-label">Method</label>
                                                                                            <select class="form-control" name="method" id="method" >
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <div class="col-lg-6">
                                                                                        <div class="mb-3">
                                                                                            <label class="form-label">Status</label>
                                                                                            <select class="form-control" name="status" id="status" >
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                                <div class="row">
                                                                                    <hr>
                                                                                    <div class="col-lg-12 ms-lg-auto">
                                                                                        <div class="mt-12 mt-lg-0">
                                                                                            <div class="row mb-12 text-center">
                                                                                                <div>
                                                                                                    <button type="button" class="btn btn-success waves-effect btn-label btn-sm waves-light" onclick="add_method()"><i class="bx bxs-add-to-queue label-icon"></i> Add</button> &nbsp;
                                                                                                    <button type="reset" class="btn btn-danger waves-effect btn-label btn-sm waves-light"><i class="bx bx-rotate-left label-icon"></i> Reset</button>
                                                                                                </div>
                                                                                            </div>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="row">
                                                                            <table id="tabel-methods" class="table table-bordered dt-responsive nowrap w-100" width="100%">
                                                                                <thead>
                                                                                    <th>Method Name</th>
                                                                                    <th>Type</th>
                                                                                    <th>Endpoint</th>
                                                                                    <th>Message Type</th>
                                                                                    <th>Action</th>
                                                                                </thead>
                                                                                <tbody id="addrowtableMethods">
                                                                                    
                                                                                </tbody>
                                                                            </table>
                                                                        </div>
                                                                        <div>
                                                                            <ul class="pager wizard twitter-bs-wizard-pager-link">
                                                                                <li class="previous"><a href="javascript: void(0);" class="btn btn-primary" onclick="nextTab()" target="_top"><i class="bx bx-chevron-left me-1"></i> Previous</a></li>
                                                                                <!-- <li class="float-end"><a href="javascript: void(0);" class="btn btn-primary" data-bs-toggle="modal" data-bs-target=".confirmModal" target="_top">Save
                                                                                        Changes</a></li> -->
                                                                                <button type="submit"  id="add-item-modal" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-check label-icon"></i> Save</button>
                                                                            </ul>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <!-- end card body -->
                                                    </div>
                                                    <!-- end card -->
                                                </div>
                                            <!-- end col -->
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="table-responsive">
                            <table id="table_data" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
                                <thead style="width:100%">
                                    <tr align="center">
                                        <th>No</th>
                                        <th>Partner</th>
                                        <th>Endpoint</th>
                                        <th>Status</th>
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
        <!-- container-fluid -->
    </div>
<!-- End Page-content -->
</div>
