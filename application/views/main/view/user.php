

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
                                        <h4 class="card-title"><i class="bx bx-data"></i> User Management</h4> <p class="card-title-desc"> Please enter input and click icon Search to display data</p>
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
                                <button class="btn font-16 btn-primary" id="add-item" ><i class="mdi mdi-plus-circle-outline"></i> Add User</button>
                            </div>
                        </div>
                    </div>
                    <div class="card-body">
						<div class="modal fade" id="modal_add" tabindex="-1" role="dialog" aria-labelledby="modal_addTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <b><div id="modal_header"> Add User</div></b>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="modal_body" style="text-align: center;">
                                        <form class="form-horizontal" method="post" action="javascript:void(0)" name="form-add-item" id="form-add-item"  onsubmit="confirm_kirim(additem,'form-add-item')">
                                            <div class="row">
                                                <div class="col-lg-6 ms-lg-auto">
                                                    <div class="mt-4 mt-lg-0">
                                                        
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Username</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" id="username" name="username" title="Role Name">
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">User Email</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" id="email" name="email" title="Role Name">
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Name</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" id="name" name="name" title="Role Name">
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Password</label>
                                                            <div class="col-sm-9">
                                                                <div class="input-group auth-pass-inputgroup">
                                                                    <input type="password" name ="password" id="password" class="form-control" placeholder="Insert Password" aria-label="Password" aria-describedby="password-addon">
                                                                    <button class="btn btn-light ms-0" type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Retype Password</label>
                                                            <div class="col-sm-9">
                                                                <div class="input-group auth-pass-inputgroup">
                                                                    <input type="password" name ="retpassword" id="retpassword" class="form-control" placeholder="Retype Password" aria-label="Retype Password" aria-describedby="password-addon2">
                                                                    <button class="btn btn-light ms-0" type="button" id="password-addon2"><i class="mdi mdi-eye-outline"></i></button>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 ms-lg-auto">
                                                    <div class="mt-4 mt-lg-0">
                                                        <!-- right input -->
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Address</label>
                                                            <div class="col-sm-9">
                                                                <textarea name="address" id="address" class="form-control"></textarea>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Phone Number</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" name="hp" id="hp" class="form-control">
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">User Type</label>
                                                            <div class="col-sm-9">
                                                                <select class="form-control" name="groupid" id="groupid" onchange="chekrole(this.value)">
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label inputclient">Client</label>
                                                            <div class="col-sm-9 inputclient">
                                                                <select class="form-control " name="clientid" id="clientid" >
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Status</label>
                                                            <div class="col-sm-9">
                                                                <select class="form-control" name="status" id="status" >
                                                                </select>
                                                            </div>
                                                        </div>
                                                        <input type="hidden" name="updated" id ="updated" value="0">
                                                        <input type="hidden" name="idnya" id ="idnya" value="0">
                                                    </div>
                                                </div>
                                                <hr>
                                                <div class="col-lg-12 ms-lg-auto">
                                                    <div class="mt-12 mt-lg-0">
                                                        <div class="row mb-12 text-center">
                                                            <div>
                                                                <button type="submit"  id="add-item-modal" class="btn btn-primary waves-effect btn-label waves-light"><i class="bx bx-check label-icon"></i> Save</button> &nbsp;
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
                        <div class="table-responsive">
                            <table id="table_data" class="table_data table table-bordered dt-responsive nowrap w-100" width="100%">
                                <thead>
                                    <tr>
                                        <th>No</th>
                                        <th>User</th>
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
                </div>
            </div>
        </div>
        <!-- container-fluid -->
    </div>
<!-- End Page-content -->
</div>
