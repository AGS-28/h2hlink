<header id="page-topbar">
    <div class="navbar-header">
        <div class="d-flex">
            <!-- LOGO -->
            <div class="navbar-brand-box">
                <a href="/" class="logo logo-dark">
                    <span class="logo-sm">
                        <img src="<?= base_url(); ?>assets/images/logo-sm.svg" alt="" height="24">
                    </span>
                    <span class="logo-lg">
                        <img src="<?= base_url(); ?>assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">Minia</span>
                    </span>
                </a>

                <a href="/" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="<?= base_url(); ?>assets/images/logo-sm.svg" alt="" height="24">
                    </span>
                    <span class="logo-lg">
                        <img src="<?= base_url(); ?>assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">Minia</span>
                    </span>
                </a>
            </div>

            <button type="button" class="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                <i class="fa fa-fw fa-bars"></i>
            </button>

            <!-- App Search-->
            <form class="app-search d-none d-lg-block">
                <div class="position-relative">
                    <input type="text" class="form-control" placeholder=" Search ...">
                    <button class="btn btn-primary" type="button"><i class="bx bx-search-alt align-middle"></i></button>
                </div>
            </form>
        </div>

        <div class="d-flex">

            <div class="dropdown d-inline-block d-lg-none ms-2">
                <button type="button" class="btn header-item" id="page-header-search-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i data-feather="search" class="icon-lg"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-search-dropdown">

                    <form class="p-3">
                        <div class="form-group m-0">
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="Search ..." aria-label="Search Result">

                                <button class="btn btn-primary" type="submit"><i class="mdi mdi-magnify"></i></button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>

            <div class="dropdown d-none d-sm-inline-block">
                <button type="button" class="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <?php
                    // $session = \Config\Services::session();
                    // $lang = $session->get('lang');
                    $lang = 'en';
                    switch ($lang) {
                        case 'en':
                            echo '<img src="'.base_url().'assets/images/flags/us.jpg" alt="Header Language" height="16">';
                            break;
                        case 'es':
                            echo '<img src="'.base_url().'assets/images/flags/spain.jpg" alt="Header Language" height="16">';
                            break;
                        case 'de':
                            echo '<img src="'.base_url().'assets/images/flags/germany.jpg" alt="Header Language" height="16">';
                            break;
                        case 'it':
                            echo '<img src="'.base_url().'assets/images/flags/italy.jpg" alt="Header Language" height="16">';
                            break;
                        case 'ru':
                            echo '<img src="'.base_url().'assets/images/flags/russia.jpg" alt="Header Language" height="16">';
                            break;
                        default:
                            echo '<img src="'.base_url().'assets/images/flags/us.jpg" alt="Header Language" height="16">';
                    }
                    ?>
                </button>
                <div class="dropdown-menu dropdown-menu-end">

                    <!-- item-->
                    
                        <a href="<?= base_url('lang/en'); ?>" class="dropdown-item notify-item language" data-lang="en">
                            <img src="<?= base_url(); ?>assets/images/flags/us.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">English</span>
                        </a>
                   
                        <a href="<?= base_url('lang/es'); ?>" class="dropdown-item notify-item language" data-lang="sp">
                            <img src="<?= base_url(); ?>assets/images/flags/spain.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">Spanish</span>
                        </a>
                    
                        <a href="<?= base_url('lang/de'); ?>" class="dropdown-item notify-item language" data-lang="gr">
                            <img src="<?= base_url(); ?>assets/images/flags/germany.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">German</span>
                        </a>
                    
                        <a href="<?= base_url('lang/it'); ?>" class="dropdown-item notify-item language" data-lang="it">
                            <img src="<?= base_url(); ?>assets/images/flags/italy.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">Italian</span>
                        </a>
                    
                        <a href="<?= base_url('lang/ru'); ?>" class="dropdown-item notify-item language" data-lang="ru">
                            <img src="<?= base_url(); ?>assets/images/flags/russia.jpg" alt="user-image" class="me-1" height="12"> <span class="align-middle">Russian</span>
                        </a>

                </div>
            </div>

            <div class="dropdown d-none d-sm-inline-block">
                <button type="button" class="btn header-item" id="mode-setting-btn">
                    <i data-feather="moon" class="icon-lg layout-mode-dark"></i>
                    <i data-feather="sun" class="icon-lg layout-mode-light"></i>
                </button>
            </div>

            <div class="dropdown d-none d-lg-inline-block ms-1">
                <button type="button" class="btn header-item" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i data-feather="grid" class="icon-lg"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end">
                    <div class="p-2">
                        <div class="row g-0">
                            <div class="col">
                                <a class="dropdown-icon-item" href="#">
                                    <img src="<?= base_url(); ?>assets/images/brands/github.png" alt="Github">
                                    <span>GitHub</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="#">
                                    <img src="<?= base_url(); ?>assets/images/brands/bitbucket.png" alt="bitbucket">
                                    <span>Bitbucket</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="#">
                                    <img src="<?= base_url(); ?>assets/images/brands/dribbble.png" alt="dribbble">
                                    <span>Dribbble</span>
                                </a>
                            </div>
                        </div>

                        <div class="row g-0">
                            <div class="col">
                                <a class="dropdown-icon-item" href="#">
                                    <img src="<?= base_url(); ?>assets/images/brands/dropbox.png" alt="dropbox">
                                    <span>Dropbox</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="#">
                                    <img src="<?= base_url(); ?>assets/images/brands/mail_chimp.png" alt="mail_chimp">
                                    <span>Mail Chimp</span>
                                </a>
                            </div>
                            <div class="col">
                                <a class="dropdown-icon-item" href="#">
                                    <img src="<?= base_url(); ?>assets/images/brands/slack.png" alt="slack">
                                    <span>Slack</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item noti-icon position-relative" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i data-feather="bell" class="icon-lg"></i>
                    <span class="badge bg-danger rounded-pill">5</span>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div class="p-3">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="m-0"> <?= 'Files.Notifications' ?> </h6>
                            </div>
                            <div class="col-auto">
                                <a href="#!" class="small text-reset text-decoration-underline"> <?= 'Files.Unread' ?> (3)</a>
                            </div>
                        </div>
                    </div>
                    <div data-simplebar style="max-height: 230px;">
                        <a href="#!" class="text-reset notification-item">
                            <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                    <img src="<?= base_url(); ?>assets/images/users/avatar-3.jpg" class="rounded-circle avatar-sm" alt="user-pic">
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="mb-1"><?= 'Files.James_Lemire' ?></h6>
                                    <div class="font-size-13 text-muted">
                                        <p class="mb-1"><?= 'Files.It_will_seem_like_simplified_English' ?>.</p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span><?= 'Files.1_hours_ago' ?></span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#!" class="text-reset notification-item">
                            <div class="d-flex">
                                <div class="flex-shrink-0 avatar-sm me-3">
                                    <span class="avatar-title bg-primary rounded-circle font-size-16">
                                        <i class="bx bx-cart"></i>
                                    </span>
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="mb-1"><?= 'Files.Your_order_is_placed' ?></h6>
                                    <div class="font-size-13 text-muted">
                                        <p class="mb-1"><?= 'Files.If_several_languages_coalesce_the_grammar' ?></p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span><?= 'Files.3_min_ago' ?></span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        <a href="#!" class="text-reset notification-item">
                            <div class="d-flex">
                                <div class="flex-shrink-0 avatar-sm me-3">
                                    <span class="avatar-title bg-success rounded-circle font-size-16">
                                        <i class="bx bx-badge-check"></i>
                                    </span>
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="mb-1"><?= 'Files.Your_item_is_shipped' ?></h6>
                                    <div class="font-size-13 text-muted">
                                        <p class="mb-1"><?= 'Files.If_several_languages_coalesce_the_grammar' ?></p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span><?= 'Files.3_min_ago' ?></span></p>
                                    </div>
                                </div>
                            </div>
                        </a>

                        <a href="#!" class="text-reset notification-item">
                            <div class="d-flex">
                                <div class="flex-shrink-0 me-3">
                                    <img src="<?= base_url(); ?>assets/images/users/avatar-6.jpg" class="rounded-circle avatar-sm" alt="user-pic">
                                </div>
                                <div class="flex-grow-1">
                                    <h6 class="mb-1"><?= 'Files.Salena_Layfield' ?></h6>
                                    <div class="font-size-13 text-muted">
                                        <p class="mb-1"><?= 'Files.As_a_skeptical_Cambridge_friend_of_mine_occidental' ?>.</p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span><?= 'Files.1_hours_ago' ?></span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    </div>
                    <div class="p-2 border-top d-grid">
                        <a class="btn btn-sm btn-link font-size-14 text-center" href="javascript:void(0)">
                            <i class="mdi mdi-arrow-right-circle me-1"></i> <span><?= 'Files.View_More' ?>..</span>
                        </a>
                    </div>
                </div>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item right-bar-toggle me-2">
                    <i data-feather="settings" class="icon-lg"></i>
                </button>
            </div>

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item bg-soft-light border-start border-end" id="page-header-user-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <img class="rounded-circle header-profile-user" src="<?= base_url(); ?>assets/images/users/avatar-1.jpg" alt="Header Avatar">
                    <span class="d-none d-xl-inline-block ms-1 fw-medium">Shawn L.</span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                    <!-- item-->
                    <a class="dropdown-item" href="apps-contacts-profile"><i class="mdi mdi-face-profile font-size-16 align-middle me-1"></i> <?= 'Files.Profile' ?></a>
                   <a class="dropdown-item" href="auth-lock-screen"><i class="mdi mdi-lock font-size-16 align-middle me-1"></i> <?= 'Files.Lock_screen' ?></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="auth-login"><i class="mdi mdi-logout font-size-16 align-middle me-1"></i> <?= 'Files.Logout' ?></a>
                </div>
            </div>

        </div>
    </div>
</header>

<!-- ========== Left Sidebar Start ========== -->
<div class="vertical-menu">

    <div data-simplebar class="h-100">

        <!--- Sidemenu -->
        <div id="sidebar-menu">
            <!-- Left Menu Start -->
            <ul class="metismenu list-unstyled" id="side-menu">
                <li class="menu-title" data-key="t-menu"><?= 'Files.Menu' ?></li>

                <li>
                    <a href="<?= site_url()?>/template/dashboard">
                        <i data-feather="home"></i>
                        <span data-key="t-dashboard"><?= 'Dashboard' ?></span>
                    </a>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="grid"></i>
                        <span data-key="t-apps"><?= 'Apps' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li>
                            <a href="<?= site_url(); ?>/template/calendar">
                                <span data-key="t-calendar"><?= 'Calendar' ?></span>
                            </a>
                        </li>
        
                        <li>
                            <a href="<?= site_url(); ?>/template/chat">
                                <span data-key="t-chat"><?= 'Chat' ?></span>
                            </a>
                        </li>
        
                        <li>
                            <a href="javascript: void(0);" class="has-arrow">
                                <span data-key="t-email"><?= 'Files.Email' ?></span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="apps-email-inbox" data-key="t-inbox"><?= 'Files.Inbox' ?></a></li>
                                <li><a href="apps-email-read" data-key="t-read-email"><?= 'Files.Read_Email' ?></a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow">
                                <span data-key="t-invoices"><?= 'Files.Invoices' ?></span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="apps-invoices-list" data-key="t-invoice-list"><?= 'Files.Invoice_List' ?></a></li>
                                <li><a href="apps-invoices-detail" data-key="t-invoice-detail"><?= 'Files.Invoice_Detail' ?></a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow">
                                <span data-key="t-contacts"><?= 'Files.Contacts' ?></span>
                            </a>
                            <ul class="sub-menu" aria-expanded="false">
                                <li><a href="apps-contacts-grid" data-key="t-user-grid"><?= 'Files.User_Grid' ?></a></li>
                                <li><a href="apps-contacts-list" data-key="t-user-list"><?= 'Files.User_List' ?></a></li>
                                <li><a href="apps-contacts-profile" data-key="t-profile"><?= 'Files.Profile' ?></a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="users"></i>
                        <span data-key="t-authentication"><?= 'Files.Authentication' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="auth-login" data-key="t-login"><?= 'Files.Login' ?></a></li>
                        <li><a href="auth-register" data-key="t-register"><?= 'Files.Register' ?></a></li>
                        <li><a href="auth-recoverpw" data-key="t-recover-password"><?= 'Files.Recover_Password' ?></a></li>
                        <li><a href="auth-lock-screen" data-key="t-lock-screen"><?= 'Files.Lock_Screen' ?> </a></li>
                        <li><a href="auth-confirm-mail" data-key="t-confirm-mail"><?= 'Files.Confirm_Mail' ?></a></li>
                        <li><a href="auth-email-verification" data-key="t-email-verification"><?= 'Files.Email_Verification' ?></a></li>
                        <li><a href="auth-two-step-verification" data-key="t-two-step-verification"><?= 'Files.Two_Step_Verification' ?></a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="file-text"></i>
                        <span data-key="t-pages"><?= 'Files.Pages' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="pages-starter" data-key="t-starter-page"><?= 'Files.Starter_Page' ?></a></li>
                        <li><a href="pages-maintenance" data-key="t-maintenance"><?= 'Files.Maintenance' ?></a></li>
                        <li><a href="pages-comingsoon" data-key="t-coming-soon"><?= 'Files.Coming_Soon'?></a></li>
                        <li><a href="pages-timeline" data-key="t-timeline"><?= 'Files.Timeline' ?></a></li>
                        <li><a href="pages-faqs" data-key="t-faqs"><?= 'Files.FAQs' ?></a></li>
                        <li><a href="pages-pricing" data-key="t-pricing"><?= 'Files.Pricing' ?></a></li>
                        <li><a href="pages-404" data-key="t-error-404"><?= 'Files.Error_404' ?></a></li>
                        <li><a href="pages-500" data-key="t-error-500"><?= 'Files.Error_500' ?></a></li>
                    </ul>
                </li>

                <li>
                    <a href="layouts-horizontal">
                        <i data-feather="layout"></i>
                        <span data-key="t-horizontal"><?= 'Files.Horizontal' ?></span>
                    </a>
                </li>

                <li class="menu-title mt-2" data-key="t-components"><?= 'Files.Elements' ?></li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="briefcase"></i>
                        <span data-key="t-components"><?= 'Files.Components' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="ui-alerts" data-key="t-alerts"><?= 'Files.Alerts' ?></a></li>
                        <li><a href="ui-buttons" data-key="t-buttons"><?= 'Files.Buttons' ?></a></li>
                        <li><a href="ui-cards" data-key="t-cards"><?= 'Files.Cards' ?></a></li>
                        <li><a href="ui-carousel" data-key="t-carousel"><?= 'Files.Carousel' ?></a></li>
                        <li><a href="ui-dropdowns" data-key="t-dropdowns"><?= 'Files.Dropdowns' ?></a></li>
                        <li><a href="ui-grid" data-key="t-grid"><?= 'Files.Grid' ?></a></li>
                        <li><a href="ui-images" data-key="t-images"><?= 'Files.Images' ?></a></li>
                        <li><a href="ui-modals" data-key="t-modals"><?= 'Files.Modals' ?></a></li>
                        <li><a href="ui-offcanvas" data-key="t-offcanvas"><?= 'Files.Offcanvas' ?></a></li>
                        <li><a href="ui-progressbars" data-key="t-progress-bars"><?= 'Files.Progress_Bars' ?></a></li>
                        <li><a href="ui-tabs-accordions" data-key="t-tabs-accordions"><?= 'Files.Tabs_n_Accordions' ?></a></li>
                        <li><a href="ui-typography" data-key="t-typography"><?= 'Files.Typography' ?></a></li>
                        <li><a href="ui-video" data-key="t-video"><?= 'Files.Video' ?></a></li>
                        <li><a href="ui-general" data-key="t-general"><?= 'Files.General' ?></a></li>
                        <li><a href="ui-colors" data-key="t-colors"><?= 'Files.Colors' ?></a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="gift"></i>
                        <span data-key="t-ui-elements"><?= 'Files.Extended' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="extended-lightbox" data-key="t-lightbox"><?= 'Files.Lightbox' ?></a></li>
                        <li><a href="extended-rangeslider" data-key="t-range-slider"><?= 'Files.Range_Slider' ?></a></li>
                        <li><a href="extended-sweet-alert" data-key="t-sweet-alert"><?= 'Files.SweetAlert_2' ?></a></li>
                        <li><a href="extended-session-timeout" data-key="t-session-timeout"><?= 'Files.Session_Timeout' ?></a></li>
                        <li><a href="extended-rating" data-key="t-rating"><?= 'Files.Rating' ?></a></li>
                        <li><a href="extended-notifications" data-key="t-notifications"><?= 'Files.Notifications' ?></a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);">
                        <i data-feather="box"></i>
                        <span class="badge rounded-pill bg-soft-danger text-danger float-end">7</span>
                        <span data-key="t-forms"><?= 'Files.Forms' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="form-elements" data-key="t-form-elements"><?= 'Files.Basic_Elements' ?></a></li>
                        <li><a href="form-validation" data-key="t-form-validation"><?= 'Files.Validation' ?></a></li>
                        <li><a href="form-advanced" data-key="t-form-advanced"><?= 'Files.Advanced_Plugins' ?></a></li>
                        <li><a href="form-editors" data-key="t-form-editors"><?= 'Files.Editors' ?></a></li>
                        <li><a href="form-uploads" data-key="t-form-upload"><?= 'Files.File_Upload' ?></a></li>
                        <li><a href="form-wizard" data-key="t-form-wizard"><?= 'Files.Wizard' ?></a></li>
                        <li><a href="form-mask" data-key="t-form-mask"><?= 'Files.Mask' ?></a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="sliders"></i>
                        <span data-key="t-tables"><?= 'Files.Tables' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="tables-basic" data-key="t-basic-tables"><?= 'Files.Bootstrap_Basic' ?></a></li>
                        <li><a href="tables-datatable" data-key="t-data-tables"><?= 'Files.DataTables' ?></a></li>
                        <li><a href="tables-responsive" data-key="t-responsive-table"><?= 'Files.Responsive' ?></a></li>
                        <li><a href="tables-editable" data-key="t-editable-table"><?= 'Files.Editable' ?></a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="pie-chart"></i>
                        <span data-key="t-charts"><?= 'Files.Charts' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="charts-apex" data-key="t-apex-charts"><?= 'Files.Apexcharts' ?></a></li>
                        <li><a href="charts-echart" data-key="t-e-charts"><?= 'Files.Echarts' ?></a></li>
                        <li><a href="charts-chartjs" data-key="t-chartjs-charts"><?= 'Files.Chartjs' ?></a></li>
                        <li><a href="charts-knob" data-key="t-knob-charts"><?= 'Files.Jquery_Knob' ?></a></li>
                        <li><a href="charts-sparkline" data-key="t-sparkline-charts"><?= 'Files.Sparkline' ?></a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="cpu"></i>
                        <span data-key="t-icons"><?= 'Files.Icons' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="icons-boxicons" data-key="t-boxicons"><?= 'Files.Boxicons' ?></a></li>
                        <li><a href="icons-materialdesign" data-key="t-material-design"><?= 'Files.Material_Design' ?></a></li>
                        <li><a href="icons-dripicons" data-key="t-dripicons"><?= 'Files.Dripicons' ?></a></li>
                        <li><a href="icons-fontawesome" data-key="t-font-awesome"><?= 'Files.Font_Awesome_5' ?></a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="map"></i>
                        <span data-key="t-maps"><?= 'Files.Maps' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="false">
                        <li><a href="maps-google" data-key="t-g-maps"><?= 'Files.Google' ?></a></li>
                        <li><a href="maps-vector" data-key="t-v-maps"><?= 'Files.Vector' ?></a></li>
                        <li><a href="maps-leaflet" data-key="t-l-maps"><?= 'Files.Leaflet' ?></a></li>
                    </ul>
                </li>

                <li>
                    <a href="javascript: void(0);" class="has-arrow">
                        <i data-feather="share-2"></i>
                        <span data-key="t-multi-level"><?= 'Files.Multi_Level' ?></span>
                    </a>
                    <ul class="sub-menu" aria-expanded="true">
                        <li><a href="javascript: void(0);" data-key="t-level-1-1"><?= 'Files.Level_1_1' ?></a></li>
                        <li>
                            <a href="javascript: void(0);" class="has-arrow" data-key="t-level-1-2"><?= 'Files.Level_1_2' ?></a>
                            <ul class="sub-menu" aria-expanded="true">
                                <li><a href="javascript: void(0);" data-key="t-level-2-1"><?= 'Files.Level_2_1' ?></a></li>
                                <li><a href="javascript: void(0);" data-key="t-level-2-2"><?= 'Files.Level_2_2' ?></a></li>
                            </ul>
                        </li>
                    </ul>
                </li>

            </ul>

            <div class="card sidebar-alert border-0 text-center mx-4 mb-0 mt-5">
                <div class="card-body">
                    <img src="<?= base_url(); ?>assets/images/giftbox.png" alt="">
                    <div class="mt-4">
                        <h5 class="alertcard-title font-size-16"><?= 'Files.Unlimited_Access' ?></h5>
                        <p class="font-size-13"><?= "Files.Upgrade_your_plan_from_a_Free_trial,_to_select_‘Business_Plan’" ?>.</p>
                        <a href="#!" class="btn btn-primary mt-2"><?= 'Files.Upgrade_Now' ?></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sidebar -->
    </div>
</div>
<!-- Left Sidebar End -->