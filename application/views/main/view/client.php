

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
                                        <h4 class="card-title"><i class="bx bx-data"></i> Client Manajement</h4> <p class="card-title-desc"> Please enter input and click icon Search to display data</p>
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
                            <button class="btn font-16 btn-primary" id="add-item" ><i class="mdi mdi-plus-circle-outline"></i> Add Client</button>
                        </div>
                        </div>
                    </div>
                    <div class="card-body">
                        <!-- Modal ADD -->
						<div class="modal fade" id="modal_add" tabindex="-1" role="dialog" aria-labelledby="modal_addTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <b><div id="modal_header"> Add Client</div></b>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="modal_body" style="text-align: center;">
                                        <form class="form-horizontal" method="post" action="javascript:void(0)" name="form-add-item" id="form-add-item"  onsubmit="confirm_kirim(additem,'form-add-item')">
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h4 class="card-title mb-0">Form Add Client</h4>
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
                                                                            <h5>Profile Client</h5>
                                                                            <p class="card-title-desc">Fill all information below</p>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-lg-6 ms-lg-auto">
                                                                                <div class="mt-4 mt-lg-0">
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_nib" class="col-sm-3 col-form-label">NIB</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="nib" name="nib" title="NIB" >
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_client_name" class="col-sm-3 col-form-label">Client Name</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input class="form-control" name="client_name" id="client_name" title="Client Name" >
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_address" class="col-sm-3 col-form-label">Address</label>
                                                                                        <div class="col-sm-9">
                                                                                            <textarea class="form-control" name="address" id="address" title="End Point" >
                                                                                                
                                                                                            </textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_email" class="col-sm-3 col-form-label">Email Address</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="email" name="email" title="Email Address" >
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_tlp" class="col-sm-3 col-form-label">Telephone Number</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="tlp" name="tlp" title="Telephone" >
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_hp" class="col-sm-3 col-form-label">Handphone Number</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="hp" name="hp" title="Handphone" >
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_authors" class="col-sm-3 col-form-label">Authority Name </label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="authors" name="authors" title="Author" >
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6 ms-lg-auto">
                                                                                <div class="mt-4 mt-lg-0">
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_npwp" class="col-sm-3 col-form-label">NPWP</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input class="form-control" name="npwp" id="npwp" title="NPWP" >
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_user_endpoint" class="col-sm-3 col-form-label">Username Endpoint</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input class="form-control" name="user_endpoint" id="user_endpoint" >
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_package_type" class="col-sm-3 col-form-label">Package Type</label>
                                                                                        <div class="col-sm-9">
                                                                                            <select class="form-control" name="package_type" id="package_type" onchange="getchanel(this.value)">
                                                                                            </select>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_startdate" class="col-sm-3 col-form-label">Start Date</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control datepicker" id="startdate" name="startdate" title="Start Date" >
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_package_type" class="col-sm-3 col-form-label">End Date</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control datepicker" id="enddate" name="enddate" title="End Date" >
                                                                                        </div>
                                                                                    </div>
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
                                                                                <h4 class="card-title"><i class="bx bx-edit-alt"></i> Form Client - Partner</h4>
                                                                                <p class="card-title-desc">Please click the icon at the top right corner to display the add form</p>
                                                                            </div>
                                                                            <div class="card-body p-4 show_card_body">
                                                                                <div class="row">
                                                                                    <table id="tabel-methods" class="table table-bordered dt-responsive nowrap w-100" width="100%">
                                                                                        <thead>
                                                                                            <th width= "20%">
                                                                                                <div class="mb-2">
                                                                                                    <label for="partner-name" class="form-label">Partner Name</label>
                                                                                                    <select class="form-control" name="partner-name" id="partner-name" onchange = "changepartner(this.value);">
                                                                                                    </select>
                                                                                                </div>
                                                                                            </th>
                                                                                            <th width= "30%" >
                                                                                                <div class="mb-2">
                                                                                                    <label for="desc_partner" class="form-label">Description</label>
                                                                                                    <textarea class="form-control" id="desc_partner" disabled></textarea>
                                                                                                </div>
                                                                                            </th>
                                                                                            <th width= "20%">
                                                                                                <div class="mb-2">
                                                                                                    <label for="partner-name" class="form-label">x-API-KEY</label>
                                                                                                    <input type="text" class="form-control" id="xapikey">
                                                                                                </div>
                                                                                            </th>
                                                                                            <th width= "20%">
                                                                                                <div class="mb-2">
                                                                                                    <label for="partner-name" class="form-label">Client Key</label>
                                                                                                    <input type="text" class="form-control" id="clientkey">
                                                                                                </div>
                                                                                            </th>
                                                                                            <th width= "10%">
                                                                                                <div class="mb-2">
                                                                                                    <button type ="button" class="btn btn-primary btn-small" id="btn-add-partner">add</button>
                                                                                                </div>
                                                                                            </th>
                                                                                        </thead>
                                                                                        <tbody id="addrowtablePartner">
                                                                                            
                                                                                        </tbody>
                                                                                    </table>
                                                                                    <input type="hidden" name="arrcekpartner" id="arrcekpartner" value="">
                                                                                </div>
                                                                            </div>
                                                                        </div>

                                                                        <div class="card">
                                                                            <div class="card-header" id="header-method">
                                                                                <i id="form_tampil_method" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('header-method','form_tampil_method','show_card_body_method')"></i>
                                                                                <h4 class="card-title"><i class="bx bx-edit-alt"></i> Method Partner</h4>
                                                                                <p class="card-title-desc">Please click the icon at the top right corner to display the add form</p>
                                                                            </div>
                                                                            <div class="card-body p-4 show_card_body_method">
                                                                                <div class="row">
                                                                                    <table id="tabel-methods" class="table table-bordered dt-responsive nowrap w-100" width="100%">
                                                                                        <thead>
                                                                                            <th>Partner</th>
                                                                                            <th>Method Name</th>
                                                                                            <th>Url Endpoint</th>
                                                                                            <th>Message Type</th>
                                                                                            <!-- <th>Action</th> -->
                                                                                        </thead>
                                                                                        <tbody id="addrowtableMethods">
                                                                                            
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        
                                                                        <div class="card">
                                                                            <div class="card-header" id="header-chanel">
                                                                                <i id="form_tampil_chanel" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('header-chanel','form_tampil_chanel','show_card_body_chanel')"></i>
                                                                                <h4 class="card-title"><i class="bx bx-edit-alt"></i> Chanel</h4>
                                                                                <p class="card-title-desc">Please click the icon at the top right corner to display the add form</p>
                                                                            </div>
                                                                            <div class="card-body p-4 show_card_body_chanel">
                                                                                <div class="row">
                                                                                    <table id="tabel-methods" class="table table-bordered dt-responsive nowrap w-100" width="100%">
                                                                                        <thead>
                                                                                            <th>Package Type</th>
                                                                                            <th>Chanel Active</th>
                                                                                            <th>Message Type</th>
                                                                                        </thead>
                                                                                        <tbody id="addrowtableChanel">
                                                                                            
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
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
                        <!-- Modal view -->
                        <div class="modal fade" id="modal_view" tabindex="-1" role="dialog" aria-labelledby="modal_addTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <b><div id="modal_header"> Detail Client</div></b>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="modal_body" style="text-align: center;">
                                        <form class="form-horizontal" method="post" action="#" name="form-add-item" id="form-add-item"  >
                                            <div class="row">
                                                <div class="col-lg-12">
                                                    <div class="card">
                                                        <div class="card-header">
                                                            <h4 class="card-title mb-0">Client Profile Details</h4>
                                                        </div>
                                                        <div class="card-body">

                                                            <div id="view-wizard" class="twitter-bs-wizard">
                                                                <ul class="twitter-bs-wizard-nav nav nav-pills nav-justified">
                                                                    <li class="nav-item">
                                                                        <a href="#progress-client-detail" class="nav-link" data-toggle="tab" target="_top">
                                                                            <div class="step-icon" data-bs-toggle="tooltip" data-bs-placement="top" title="" data-bs-original-title="Seller Details">
                                                                                <i class="bx bx-list-ul"></i>
                                                                            </div>
                                                                        </a>
                                                                    </li>
                                                                    <li class="nav-item">
                                                                        <a href="#progress-partner-detail" class="nav-link active" data-toggle="tab" target="_top">
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
                                                                    <div class="tab-pane active" id="progress-client-detail">
                                                                        <div class="text-center mb-4">
                                                                            <h5>Profile Client</h5>
                                                                        </div>
                                                                        <div class="row">
                                                                            <div class="col-lg-6 ms-lg-auto">
                                                                                <div class="mt-4 mt-lg-0">
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_nib" class="col-sm-3 col-form-label">NIB</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="view_nib" name="view_nib" title="NIB" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_client_name" class="col-sm-3 col-form-label">Client Name</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input class="form-control" name="view_client_name" id="view_client_name" title="Client Name" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_address" class="col-sm-3 col-form-label">Address</label>
                                                                                        <div class="col-sm-9">
                                                                                            <textarea class="form-control" name="view_address" id="view_address" title="End Point" disabled>
                                                                                                
                                                                                            </textarea>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_email" class="col-sm-3 col-form-label">Email Address</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="view_email" name="view_email" title="Email Address" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_tlp" class="col-sm-3 col-form-label">Telephone Number</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="view_tlp" name="view_tlp" title="Telephone" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_hp" class="col-sm-3 col-form-label">Handphone Number</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="view_hp" name="view_hp" title="Handphone" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_authors" class="col-sm-3 col-form-label">Authority Name </label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="view_authors" name="view_authors" title="Author" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="col-lg-6 ms-lg-auto">
                                                                                <div class="mt-4 mt-lg-0">
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_npwp" class="col-sm-3 col-form-label">NPWP</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input class="form-control" name="view_npwp" id="view_npwp" title="NPWP" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_user_endpoint" class="col-sm-3 col-form-label">Username Endpoint</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input class="form-control" name="view_user_endpoint" id="view_user_endpoint" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_package_type" class="col-sm-3 col-form-label">Package Type</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input class="form-control" name="view_package_type" id="view_package_type" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_startdate" class="col-sm-3 col-form-label">Start Date</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="view_startdate" name="view_startdate" title="End Date" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                    <div class="row mb-4">
                                                                                        <label for="view_package_type" class="col-sm-3 col-form-label">End Date</label>
                                                                                        <div class="col-sm-9">
                                                                                            <input type="text" class="form-control" id="view_enddate" name="view_package_type" title="End Date" disabled>
                                                                                        </div>
                                                                                    </div>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <ul class="pager wizard twitter-bs-wizard-pager-link">
                                                                            <li class="next disabled"><a href="javascript: void(0);" class="btn btn-primary" onclick="nextTab()" target="_top">Next <i class="bx bx-chevron-right ms-1"></i></a></li>
                                                                        </ul>
                                                                    </div>
                                                                    <div class="tab-pane" id="progress-partner-detail">
                                                                        <div class="card">
                                                                            <div class="card-header" id="view_header_chanel">
                                                                                <i id="view_form_tampil" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('view_header_chanel','view_form_tampil','view_chanel_card')"></i>
                                                                                <h4 class="card-title"><i class="bx bx-edit-alt"></i> Client Chanel</h4>
                                                                                <p class="card-title-desc">Please click the icon at the top right corner to display data</p>
                                                                            </div>
                                                                            <div class="card-body p-4 view_chanel_card" style="display: none;">
                                                                                <div class="row">
                                                                                    <table id="viewtabelChanel" class="table table-bordered dt-responsive nowrap w-100">
                                                                                        <thead>
                                                                                            <th>No</th>
                                                                                            <th>Chanel Name</th>
                                                                                            <th>Message Type</th>
                                                                                        </thead>
                                                                                        <tbody id="viewTabelChanel">
                                                                                            
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="card">
                                                                            <div class="card-header" id="view_header_endpoint">
                                                                                <i id="view_endpoint_tampil" class="fa fa-chevron-left" aria-hidden="true" title="Show Form Searching" style="cursor:pointer; position:relative; float:right; margin-right:5px;" onclick="show_hide_form('view_header_chanel','view_endpoint_tampil','view_endpoint_card')"></i>
                                                                                <h4 class="card-title"><i class="bx bx-edit-alt"></i> Client Endpoint</h4>
                                                                                <p class="card-title-desc">Please click the icon at the top right corner to display data</p>
                                                                            </div>
                                                                            <div class="card-body p-4 view_endpoint_card" style="display: none;">
                                                                                <div class="row">
                                                                                    <table id="VtabelEndpoint" class="table table-bordered dt-responsive nowrap w-100" width="100%">
                                                                                        <thead>
                                                                                            <th width = "5%">No</th>
                                                                                            <th>Partner Name</th>
                                                                                            <th>Endpoint Name </th>
                                                                                            <th>Endpoint Address</th>
                                                                                            <th>Client Key</th>
                                                                                            <th>X-api-key</th>
                                                                                            <th>Type</th>
                                                                                            <th>Message Type</th>
                                                                                        </thead>
                                                                                        <tbody id="viewtableEndpoint">
                                                                                            
                                                                                        </tbody>
                                                                                    </table>
                                                                                </div>
                                                                            </div>
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
                                        <th>Client</th>
                                        <th>Information</th>
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
