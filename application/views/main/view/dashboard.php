

<div class="page-content">
    <div class="container-fluid">

        <?= $page_title; ?>

        <div class="row">
            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-h-100">
                    <!-- card body -->
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <span class="text-muted mb-3 lh-1 d-block text-truncate">Total Client</span>
                                <h4 class="mb-3">
                                    <span class="counter-value" data-target="<?php echo COUNT($data_client); ?>">0</span>
                                </h4>
                            </div>

                            <div class="col-6">
                                <div id="mini-chart1" data-colors='["#5156be"]' class="apex-charts mb-2"></div>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->

            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-h-100">
                    <!-- card body -->
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <span class="text-muted mb-3 lh-1 d-block text-truncate">Total Draft</span>
                                <h4 class="mb-3">
                                    <span class="counter-value" data-target="<?php echo COUNT($data_draft); ?>">0</span>
                                </h4>
                            </div>
                            <div class="col-6">
                                <div id="mini-chart2" data-colors='["#5156be"]' class="apex-charts mb-2"></div>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col-->

            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-h-100">
                    <!-- card body -->
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <span class="text-muted mb-3 lh-1 d-block text-truncate">Total Nomor Aju</span>
                                <h4 class="mb-3">
                                    <span class="counter-value" data-target="<?php echo COUNT($data_aju); ?>">0</span>
                                </h4>
                            </div>
                            <div class="col-6">
                                <div id="mini-chart3" data-colors='["#5156be"]' class="apex-charts mb-2"></div>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->

            <div class="col-xl-3 col-md-6">
                <!-- card -->
                <div class="card card-h-100">
                    <!-- card body -->
                    <div class="card-body">
                        <div class="row align-items-center">
                            <div class="col-6">
                                <span class="text-muted mb-3 lh-1 d-block text-truncate">Total SKA Terbit</span>
                                <h4 class="mb-3">
                                    <span class="counter-value" data-target="<?php echo COUNT($data_penerbitan); ?>">0</span>
                                </h4>
                            </div>
                            <div class="col-6">
                                <div id="mini-chart4" data-colors='["#5156be"]' class="apex-charts mb-2"></div>
                            </div>
                        </div>
                    </div><!-- end card body -->
                </div><!-- end card -->
            </div><!-- end col -->
        </div><!-- end row-->

        <div class="row">
            <div class="col-xl-6">
                <!-- card -->
                <div class="card card-h-100">
                    <!-- card body -->
                    <div class="card-body">
                        <div class="d-flex flex-wrap align-items-center mb-4">
                            <h5 class="card-title me-2">Total Hit Method</h5>
                            <div class="ms-auto">
                                <div>
                                    <button type="button" class="btn btn-soft-secondary btn-sm">
                                        ALL
                                    </button>
                                    <button type="button" class="btn btn-soft-primary btn-sm">
                                        1M
                                    </button>
                                    <button type="button" class="btn btn-soft-secondary btn-sm">
                                        6M
                                    </button>
                                    <button type="button" class="btn btn-soft-secondary btn-sm active">
                                        1Y
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="row align-items-center">
                            <div class="col-sm align-self-center">
                                <div class="mt-6 mt-sm-0">
                                    <?php 
                                        $urai_end_point = ''; 
                                        $jml_end_point = ''; 
                                        foreach ($data_end_point as $key => $value) { 
                                    ?>
                                            <div>
                                                <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i> <?php echo $value['method_name']; ?> : <b> <?php echo $value['jml']; ?> </b></p>
                                            </div>
                                    <?php 
                                        $jml_end_point .= $value['jml'].',';
                                        $urai_end_point .= $value['method_name'].',';
                                        } 
                                    ?>    
                                    <input type="hidden" id="urai_end_point" name="urai_end_point" value="<?php echo $urai_end_point; ?>">                                
                                    <input type="hidden" id="jml_end_point" name="jml_end_point" value="<?php echo $jml_end_point; ?>">                                
                                </div>
                            </div>
                            <div class="col-sm">
                                <div id="wallet-balance" data-colors='["#777aca", "#5156be", "#a8aada"]' class="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->

            <div class="col-xl-6">
                <!-- card -->
                <div class="card card-h-100">
                    <!-- card body -->
                    <div class="card-body">
                        <div class="d-flex flex-wrap align-items-center mb-4">
                            <h5 class="card-title me-2">Total Draft Status</h5>
                            <div class="ms-auto">
                                <div>
                                    <button type="button" class="btn btn-soft-secondary btn-sm">
                                        ALL
                                    </button>
                                    <button type="button" class="btn btn-soft-primary btn-sm">
                                        1M
                                    </button>
                                    <button type="button" class="btn btn-soft-secondary btn-sm">
                                        6M
                                    </button>
                                    <button type="button" class="btn btn-soft-secondary btn-sm active">
                                        1Y
                                    </button>
                                </div>
                            </div>
                        </div>

                        <div class="row align-items-center">
                            <div class="col-sm align-self-center">
                                <div class="mt-6 mt-sm-0">
                                    <?php 
                                        $urai_draft_status = ''; 
                                        $jml_draft_status = ''; 
                                        foreach ($data_draft_status as $key => $value) { 
                                    ?>
                                            <div>
                                                <p class="mb-2"><i class="mdi mdi-circle align-middle font-size-10 me-2 text-success"></i> <?php echo $value['status']; ?> : <b> <?php echo $value['jml']; ?> </b></p>
                                            </div>
                                    <?php 
                                        $jml_draft_status .= $value['jml'].',';
                                        $urai_draft_status .= $value['status'].',';
                                        } 
                                    ?>    
                                    <input type="hidden" id="urai_draft_status" name="urai_draft_status" value="<?php echo $urai_draft_status; ?>">                                
                                    <input type="hidden" id="jml_draft_status" name="jml_draft_status" value="<?php echo $jml_draft_status; ?>">   
                                </div>
                            </div>
                            <div class="col-sm">
                                <div id="wallet-balance1" data-colors='["#777aca", "#5156be", "#a8aada"]' class="apex-charts"></div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div> <!-- end row-->
        
        <div class="row">
            <div class="col-xl-12">
                <div class="card">
                    <div class="card-header align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">50 Data Pengajuan Terakhir Berdasarkan Eksportir</h4>
                        <div class="flex-shrink-0">
                            <select class="form-select form-select-sm mb-0 my-n1">
                                <option value="Today" selected="">Today</option>
                                <option value="Yesterday">Yesterday</option>
                                <option value="Week">Last Week</option>
                                <option value="Month">Last Month</option>
                            </select>
                        </div>
                    </div><!-- end card header -->

                    <div class="card-body px-0">
                        <div class="tab-content">
                            <div class="tab-pane active" id="transactions-all-tab" role="tabpanel">
                                <div class="table-responsive px-3" data-simplebar style="max-height: 352px;">
                                    <div id="div_transaction" align="center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end tab content -->
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div> <!-- end row-->

        <div class="row">
            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">Total Pengajuan Berdasarkan Eksportir</h4>
                        <div class="flex-shrink-0">
                            <select class="form-select form-select-sm mb-0 my-n1">
                                <option value="Today" selected="">Today</option>
                                <option value="Yesterday">Yesterday</option>
                                <option value="Week">Last Week</option>
                                <option value="Month">Last Month</option>
                            </select>
                        </div>
                    </div><!-- end card header -->

                    <div class="card-body px-0">
                        <div class="tab-content">
                            <div class="tab-pane active" id="transactions-all-tab" role="tabpanel">
                                <div class="table-responsive px-3" data-simplebar style="max-height: 352px;">
                                    <div id="div_pengajuan" align="center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end tab content -->
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->

            <div class="col-xl-6">
                <div class="card">
                    <div class="card-header align-items-center d-flex">
                        <h4 class="card-title mb-0 flex-grow-1">Total Penerbitan Berdasarkan Eksportir</h4>
                        <div class="flex-shrink-0">
                            <select class="form-select form-select-sm mb-0 my-n1">
                                <option value="Today" selected="">Today</option>
                                <option value="Yesterday">Yesterday</option>
                                <option value="Week">Last Week</option>
                                <option value="Month">Last Month</option>
                            </select>
                        </div>
                    </div><!-- end card header -->

                    <div class="card-body px-0">
                        <div class="tab-content">
                            <div class="tab-pane active" id="transactions-all-tab" role="tabpanel">
                                <div class="table-responsive px-3" data-simplebar style="max-height: 352px;">
                                    <div id="div_penerbitan" align="center">
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- end tab content -->
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
            <!-- end col -->
        </div> <!-- end row-->

        <div class="row">
            <div class="col-xl-12">
                <!-- card -->
                <div class="card bg-primary text-white shadow-primary card-h-100">
                    <!-- card body -->
                    <div class="card-body p-0">
                        <div id="carouselExampleCaptions" class="carousel slide text-center widget-carousel" data-bs-ride="carousel">
                            <div class="carousel-inner">
                                <div class="carousel-item active">
                                    <div class="text-center p-4">
                                        <i class="mdi mdi-newspaper-variant-multiple widget-box-1-icon"></i>
                                        <div class="avatar-md m-auto">
                                            <span class="avatar-title rounded-circle bg-soft-light text-white font-size-24">
                                                <i class="mdi mdi-newspaper-variant-multiple"></i>
                                            </span>
                                        </div>
                                        <h4 class="mt-3 lh-base fw-normal text-white"><b>AGS</b> News</h4>
                                        <p class="text-white-50 font-size-13">Update News </p>
                                        <button type="button" class="btn btn-light btn-sm">View details <i class="mdi mdi-arrow-right ms-1"></i></button>
                                    </div>
                                </div>
                                <!-- end carousel-item -->
                                <div class="carousel-item">
                                    <div class="text-center p-4">
                                        <i class="mdi mdi-newspaper-variant-multiple widget-box-1-icon"></i>
                                        <div class="avatar-md m-auto">
                                            <span class="avatar-title rounded-circle bg-soft-light text-white font-size-24">
                                                <i class="mdi mdi-newspaper-variant-multiple"></i>
                                            </span>
                                        </div>
                                        <h4 class="mt-3 lh-base fw-normal text-white"><b>AGS</b> News</h4>
                                        <p class="text-white-50 font-size-13">Update News </p>
                                        <button type="button" class="btn btn-light btn-sm">View details <i class="mdi mdi-arrow-right ms-1"></i></button>
                                    </div>
                                </div>
                                <!-- end carousel-item -->
                            </div>
                            <!-- end carousel-inner -->

                            <div class="carousel-indicators carousel-indicators-rounded">
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            </div>
                            <!-- end carousel-indicators -->
                        </div>
                        <!-- end carousel -->
                    </div>
                    <!-- end card body -->
                </div>
                <!-- end card -->
            </div>
        </div>
        <!-- end row-->
    </div>
    <!-- container-fluid -->
</div>
<!-- End Page-content -->
</div>
