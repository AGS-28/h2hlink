

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
                                        <h4 class="card-title"><i class="bx bx-data"></i> Data File Type</h4> <p class="card-title-desc"> Please enter input and click icon Search to display data</p>
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
                            <button class="btn font-16 btn-primary" id="add-item" ><i class="mdi mdi-plus-circle-outline"></i> Add File Type</button>
                        </div>
                        </div>
                    </div>
                    <div class="card-body">
						<div class="modal fade" id="modal_add" tabindex="-1" role="dialog" aria-labelledby="modal_addTitle" aria-hidden="true">
                            <div class="modal-dialog modal-dialog-scrollable modal-fullscreen">
                                <div class="modal-content">
                                    <div class="modal-header">
                                        <b><div id="modal_header"> Add File Type</div></b>
                                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                    </div>
                                    <div class="modal-body" id="modal_body" style="text-align: center;">
                                        <form class="form-horizontal" method="post" action="javascript:void(0)" name="form-add-item" id="form-add-item"  onsubmit="confirm_kirim(additem,'form-add-item')">
                                            <div class="row">
                                                <div class="col-lg-6 ms-lg-auto">
                                                    <div class="mt-4 mt-lg-0">
                                                        <p class="card-title-desc"><i class="mdi mdi-information-variant"></i> Please enter your input.. </p>
                                                        <br/>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">File Type</label>
                                                            <div class="col-sm-9">
                                                                <input type="text" class="form-control" id="filetype" name="filetype" title="File Type">
                                                            </div>
                                                        </div>
                                                        <div class="row mb-4">
                                                            <label for="horizontal-input" class="col-sm-3 col-form-label">Status</label>
                                                            <div class="col-sm-9">
                                                                <select class="form-control" name="status" id="status" >
                                                                </select>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="col-lg-6 ms-lg-auto">
                                                    <div class="mt-4 mt-lg-0">
                                                        <!-- right input -->
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
                                <thead style="width:100%">
                                    <tr align="center">
                                        <th>No</th>
                                        <th>Role</th>
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
