
<div class="auth-page">
        <div class="container-fluid p-0">
            <div class="row g-0">
                <div class="col-xxl-3 col-lg-4 col-md-5">
                    <div class="auth-full-page-content d-flex p-sm-5 p-4">
                        <div class="w-100">
                            <div class="d-flex flex-column h-100">
                                <div class="mb-4 mb-md-5 text-center">
                                    <a class="d-block auth-logo">
                                        <img src="<?= base_url(); ?>assets/images/logo-sm.svg" alt="" height="28"> <span class="logo-txt">H2HLink.com</span>
                                    </a>
                                </div>
                                <div class="auth-content my-auto">
                                    <div class="text-center">
                                        <h5 class="mb-0">Selamat Datang !</h5>
                                        <p class="text-muted mt-2">Login untuk masuk ke H2Hlink.com</p>
                                    </div>
                                    <form class="custom-form mt-4 pt-2" action="/">
                                        <div class="mb-3">
                                            <label class="form-label">Username</label>
                                            <input type="text" class="form-control" id="username" name ="username" placeholder="Masukan username anda...">
                                        </div>
                                        <div class="mb-3">
                                            <div class="d-flex align-items-start">
                                                <div class="flex-grow-1">
                                                    <label class="form-label">Password</label>
                                                </div>
                                                <div class="flex-shrink-0">
                                                    <div class="">
                                                        <a href="<?= site_url('auth/lupa_password') ?>" class="text-muted">Lupa Password</a>
                                                    </div>
                                                </div>
                                            </div>
                                            
                                            <div class="input-group auth-pass-inputgroup">
                                                <input type="password" name ="password" id="password" class="form-control" placeholder="Masukan password" aria-label="Password" aria-describedby="password-addon">
                                                <button class="btn btn-light ms-0" type="button" id="password-addon"><i class="mdi mdi-eye-outline"></i></button>
                                            </div>
                                            <input type="hidden" name="sendpassword" id="sendpassword" />
                                        </div>
                                        <div class="mb-3">
                                            <button class="btn btn-primary w-100 waves-effect waves-light" id="btn-login" type="button">Masuk</button>
                                        </div>
                                        <div class="mb-3" style="text-align: right">
                                            <script language="JavaScript" type="text/javascript">
                                                TrustLogo("https://h2hlink.com/assets/images/positivessl_trust_seal_lg_222x54.png", "CL1", "none");
                                            </script>
                                            <a  href="https://www.positivessl.com/" id="comodoTL">Positive SSL</a>
                                        </div>
                                    </form>

                                </div>
                                <div class="mt-4 mt-md-5 text-center">
                                    <p class="mb-0">© <script>document.write(new Date().getFullYear())</script> WS Portal   . Crafted with <i class="mdi mdi-heart text-danger"></i> by AGS</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <!-- end auth full page content -->
                </div>
                <!-- end col -->
                <div class="col-xxl-9 col-lg-8 col-md-7">
                    <div class="auth-bg pt-md-5 p-4 d-flex">
                        <div class="bg-overlay bg-primary"></div>
                        <ul class="bg-bubbles">
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                            <li></li>
                        </ul>
                        <!-- end bubble effect -->
                        <div class="row justify-content-center align-items-center">
                            <div class="col-xl-9">
                                <div class="p-0 p-sm-4 px-xl-0">
                                    <div id="reviewcarouselIndicators" class="carousel slide" data-bs-ride="carousel">
                                        <div class="carousel-indicators carousel-indicators-rounded justify-content-start ms-0 mb-0">
                                            <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                                            <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
                                            <button type="button" data-bs-target="#reviewcarouselIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
                                        </div>
                                        <!-- end carouselIndicators -->
                                        <div class="carousel-inner">
                                            <div class="carousel-item active">
                                                <div class="testi-contain text-white">
                                                    <i class="bx bxs-quote-alt-left text-success display-6"></i>
                                                    <h4 class="mt-4 fw-medium lh-base text-white" style="text-align: justify;">“H2HLink adalah sebuah solusi produk yang dikembangkan oleh PT Akusara Gautama Solution 
                                                        untuk para Eksportir, baik perusahaan maupun perorangan yang memiliki sistem internal (ERP) untuk terhubung ke sistem SKA milik Kemendag.<br/>
                                                        H2HLink menyediakan kemudahan bagi pengirim data untuk dapat menyusun dan mengirimkan data sesuai dengan format dan protokol penerima data, secara sistem
                                                        atau Host to Host (H2H).”
                                                    </h4>
                                                    <div class="mt-4 pt-3 pb-5">
                                                        <div class="d-flex align-items-start">
                                                            <div class="flex-shrink-0">
                                                                <h5 class="font-size-18 text-white">H2HLink</h5>
                                                                <p class="mb-0 text-white-50">Data Integrator and Interchange Solution</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="carousel-item">
                                                <div class="text-white">
                                                    <i class="bx bxs-quote-alt-left text-success display-6"></i>
                                                    <h4 class="mt-4 fw-medium lh-base text-white" style="text-align: justify;">“Mengapa Memilih H2HLink ? <br/><br/>  
                                                    <b>1.</b> Membantu para eksportir yang memiliki transaksi SKA dalam jumlah banyak dan/atau memiliki item barang yang jumlahnya puluhan hingga ratuan item per SKA. <br/>
                                                    <b>2.</b> Menghubungkan sumber file/data eksportir ke tujuan akhir kemendag, seperti file/data ERP: CSV, XLS/XLSX, XML, JSON.<br/>
                                                    <b>3.</b> Memiliki kemampuan translasi data yang cepat, tepat dan akurat sesuai format standar SKA milik kemendag.<br/>
                                                    <b>4.</b> Dengan solusi dari produk H2HLink ini, diharapkan dapat mengurangi kejadian salah input data atau <i>human-error</i> oleh petugas admin eksportir, sehingga kegiatan eksportir dapat berjalan lancar tanpa kendala.”</h4>
                                                    <div class="mt-4 pt-3 pb-5">
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="carousel-item">
                                                <div class="text-white">
                                                    <i class="bx bxs-quote-alt-left text-success display-6"></i>
                                                    <h4 class="mt-4 fw-medium lh-base text-white" style="text-align: justify;">“Dalam kegiatan bisnis, stakeholder diperlukan untuk memberikan bantuan guna mengembangkan sebuah tujuan. Berikut beberapa stakeholder H2HLink :</h4>
                                                    <div class="mt-4 pt-3 pb-5">
                                                        <div class="d-flex align-items-start">
                                                            <div class="flex-shrink-0">
                                                                <h5 class="font-size-18 text-white">Portal Server</h5>
                                                                <p class="mb-0 text-white-50">Dashboard Log & Tracking</p>
                                                                <br/>
                                                                <h5 class="font-size-18 text-white">Api Service</h5>
                                                                <p class="mb-0 text-white-50">Synchronous Data Transfer</p>
                                                            </div>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <div class="flex-shrink-0">
                                                                <h5 class="font-size-18 text-white">SFTP Service</h5>
                                                                <p class="mb-0 text-white-50">Asynchronous Data Transfer</p>
                                                                <br/>
                                                                <h5 class="font-size-18 text-white">Gateway Client</h5>
                                                                <p class="mb-0 text-white-50">Cloud & On-Premises</p>
                                                            </div>
                                                            &nbsp;&nbsp;&nbsp;
                                                            <div class="flex-shrink-0">
                                                                <h5 class="font-size-18 text-white">ETL Service</h5>
                                                                <p class="mb-0 text-white-50">Data Mapper & Converter</p>
                                                                <br/>
                                                                <h5 class="font-size-18 text-white">Data Storage</h5>
                                                                <p class="mb-0 text-white-50">Storage for Audit Trail”</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <!-- end carousel-inner -->
                                    </div>
                                    <!-- end review carousel -->
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- end col -->
            </div>
            <!-- end row -->
        </div>
        <!-- end container fluid -->
</div>