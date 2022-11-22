<?php //var_dump($menu);exit; ?>
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
                        <img src="<?= base_url(); ?>assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">AGS WS Portal</span>
                    </span>
                </a>

                <a href="/" class="logo logo-light">
                    <span class="logo-sm">
                        <img src="<?= base_url(); ?>assets/images/logo-sm.svg" alt="" height="24">
                    </span>
                    <span class="logo-lg">
                        <img src="<?= base_url(); ?>assets/images/logo-sm.svg" alt="" height="24"> <span class="logo-txt">AGS WS Portal</span>
                    </span>
                </a>
            </div>

            <button type="button" class="btn btn-sm px-3 font-size-16 header-item" id="vertical-menu-btn">
                <i class="fa fa-fw fa-bars"></i>
            </button>

        </div>

        <div class="d-flex">
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

            <div class="dropdown d-inline-block">
                <button type="button" class="btn header-item noti-icon position-relative" id="page-header-notifications-dropdown" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    <i data-feather="bell" class="icon-lg"></i>
                    <span class="badge bg-danger rounded-pill">5</span>
                </button>
                <div class="dropdown-menu dropdown-menu-lg dropdown-menu-end p-0" aria-labelledby="page-header-notifications-dropdown">
                    <div class="p-3">
                        <div class="row align-items-center">
                            <div class="col">
                                <h6 class="m-0"> <?= 'Pemberitahuan' ?> </h6>
                            </div>
                            <div class="col-auto">
                                <a href="#!" class="small text-reset text-decoration-underline"> <?= 'Belum Dibaca' ?> (0)</a>
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
                                    <h6 class="mb-1">Admin</h6>
                                    <div class="font-size-13 text-muted">
                                        <p class="mb-1"><?= 'Files.It_will_seem_like_simplified_English' ?>.</p>
                                        <p class="mb-0"><i class="mdi mdi-clock-outline"></i> <span><?= 'Files.1_hours_ago' ?></span></p>
                                    </div>
                                </div>
                            </div>
                        </a>
                        
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
                    <span class="d-none d-xl-inline-block ms-1 fw-medium"><?= $this->session->userdata('name'); ?></span>
                    <i class="mdi mdi-chevron-down d-none d-xl-inline-block"></i>
                </button>
                <div class="dropdown-menu dropdown-menu-end">
                    <!-- item-->
                    <a class="dropdown-item" href="apps-contacts-profile"><i class="mdi mdi-face-profile font-size-16 align-middle me-1"></i> <?= $this->session->userdata('username') ?></a>
                   <a class="dropdown-item" href="auth-lock-screen"><i class="mdi mdi-lock font-size-16 align-middle me-1"></i> <?= 'Update Password' ?></a>
                    <div class="dropdown-divider"></div>
                    <a class="dropdown-item" href="<?= site_url(); ?>/auth/logout"><i class="mdi mdi-logout font-size-16 align-middle me-1"></i> <?= 'Logout' ?></a>
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
                <li class="menu-title" data-key="t-menu"><?= 'Menu' ?></li>

                <?php 
                    foreach ($menu as $key => $value) { 
                        $addclass = '';
                        $addlink = site_url().$value->link;
                        if($value->is_parent == "t")
                        { 
                            $addclass   = 'class="has-arrow"';
                            $addlink    = "javascript: void(0);";
                        }
                        ?>
                        <li>
                            <a href="<?= $addlink ?>" <?= $addclass ?> >
                                <i data-feather="<?= $value->fa_class ?>"></i>
                                <span ><?= $value->menu_name ?></span>
                            </a>
                            <?php 
                            $dataofParent = getMenu($this->session->userdata('id_groups'),$value->id_menu);
                            if (count($dataofParent) > 0) 
                            { ?>
                                <ul class="sub-menu" aria-expanded="false">
                                    <?php foreach ($dataofParent as $key2 => $valueofParent) { ?>
                                        <li>
                                            <a href="<?= site_url().$valueofParent->link; ?>/template/calendar">
                                                <span data-key="t-calendar"><?=  $valueofParent->menu_name; ?></span>
                                            </a>
                                        </li>
                                    <?php } ?>
                                </ul>
                            <?php 
                            } 
                            
                            ?>
                        </li>
                    
                <?php } ?>
            </ul>
        </div>
        <!-- Sidebar -->
    </div>
</div>
<!-- Left Sidebar End -->