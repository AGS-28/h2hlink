<?php
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * @property CI_DB_query_builder $db
 * @property CI_URI $uri
 * @property CI_Input $input
 * @property CI_Session $session
 */
class Template extends CI_Controller
{
	public function __construct()
	{
		parent::__construct();
		// $this->load->model('Model_profile');
	}

	public function index()
	{
		$this->load->view('template/template_lib/login');
	}
	public function encrypt()
	{
		echo encryptpassword('Pass123abc.');
	}

	public function user()
	{
		$sql = 'SELECT * from profile.user';
		$ret = $this->db->query($sql);
		echo "<pre>";
		var_dump($ret->result());
	}

	public function dashboard()
	{
		//Tittle
		$tittle['title'] 	= 'Dashboard';
		$tittle['li_1'] 	= 'Minia';
		$tittle['li_2'] 	= 'Dashboard';

		//Teamplate
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="' . base_url() . 'assets/js/pages/dashboard.init.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['page_title'] 	= $this->load->view('template/partials/page-title', $tittle, true);

		$data['content']    	= $this->load->view('template/template_lib/dashboard', $param, true);
		$this->load->view('template/template', $data);
	}
	public function ui_button()
	{
		//Tittle
		$tittle['title'] 	= 'Dashboard';
		$tittle['li_1'] 	= 'Minia';
		$tittle['li_2'] 	= 'Dashboard';

		//Teamplate
		$data['addcss'] 	= '';
		$data['addjs'] 		= '';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['page_title'] 	= $this->load->view('template/partials/page-title', $tittle, true);

		$data['content']    	= $this->load->view('template/template_lib/ui_button', $param, true);
		$this->load->view('template/template', $data);
	}

	public function colored_sidebar()
	{
		//Tittle
		$tittle['title'] 	= 'Dashboard';
		$tittle['li_1'] 	= 'Minia';
		$tittle['li_2'] 	= 'Dashboard';

		//Teamplate
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="' . base_url() . 'assets/js/pages/dashboard.init.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['page_title'] 	= $this->load->view('template/partials/page-title', $tittle, true);

		$data['content']    	= $this->load->view('template/template_lib/layouts-colored-sidebar', $param, true);
		$this->load->view('template/template', $data);
	}

	public function layouts_boxed()
	{

		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Dashboard']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Dashboard', 'li_1' => 'Minia', 'li_2' => 'Dashboard'])
		];

		return $this->load->view('layouts-boxed', $data);
	}

	public function compact_sidebar()
	{

		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Dashboard']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Dashboard', 'li_1' => 'Minia', 'li_2' => 'Dashboard'])
		];

		return $this->load->view('layouts-compact-sidebar', $data);
	}

	public function dark_sidebar()
	{

		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Dashboard']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Dashboard', 'li_1' => 'Minia', 'li_2' => 'Dashboard'])
		];

		return $this->load->view('layouts-dark-sidebar', $data);
	}

	public function icon_sidebar()
	{

		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Dashboard']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Dashboard', 'li_1' => 'Minia', 'li_2' => 'Dashboard'])
		];

		return $this->load->view('layouts-icon-sidebar', $data);
	}

	public function layouts_scrollable()
	{

		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Dashboard']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Dashboard', 'li_1' => 'Minia', 'li_2' => 'Dashboard'])
		];

		return $this->load->view('layouts-scrollable', $data);
	}

	public function calendar()
	{
		//Tittle
		$tittle['title'] 	= 'Calendar';
		$tittle['li_1'] 	= 'Apps';
		$tittle['li_2'] 	= 'Calendar';

		//Teamplate
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="' . base_url() . 'assets/js/main.js"></script>';
		$data['addjs'] 		.= '<script src="' . base_url() . 'assets/js/pages/calendar.init.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['page_title'] 	= $this->load->view('template/partials/page-title', $tittle, true);

		$data['content']    	= $this->load->view('template/template_lib/apps-calendar', $param, true);
		$this->load->view('template/template', $data);
	}

	public function chat()
	{
		//Tittle
		$tittle['title'] 	= 'Chat';
		$tittle['li_1'] 	= 'Apps';
		$tittle['li_2'] 	= 'Chat';

		//Teamplate
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="' . base_url() . 'assets/js/main.js"></script>';
		$data['addjs'] 		.= '<script src="' . base_url() . 'assets/js/pages/calendar.init.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['page_title'] 	= $this->load->view('template/partials/page-title', $tittle, true);

		$data['content']    	= $this->load->view('template/template_lib/apps-chat', $param, true);
		$this->load->view('template/template', $data);
	}

	public function email_inbox()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Inbox']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Inbox', 'li_1' => 'Email', 'li_2' => 'Inbox'])
		];
		return $this->load->view('apps-email-inbox', $data);
	}

	public function email_read()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Read_Email']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Read_Email', 'li_1' => 'Email', 'li_2' => 'Email Read'])
		];
		return $this->load->view('apps-email-read', $data);
	}

	public function invoices_list()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Invoice_List']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Invoice_List', 'li_1' => 'Invoices', 'li_2' => 'Invoice List'])
		];
		return $this->load->view('apps-invoices-list', $data);
	}

	public function invoices_detail()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Invoice_Detail']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Invoice_Detail', 'li_1' => 'Invoices', 'li_2' => 'Invoice Detail'])
		];
		return $this->load->view('apps-invoices-detail', $data);
	}
	public function contacts_grid()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'User_Grid']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'User_Grid', 'li_1' => 'Contacts', 'li_2' => 'User Grid'])
		];
		return $this->load->view('apps-contacts-grid', $data);
	}

	public function contacts_list()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'User_List']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'User_List', 'li_1' => 'Contacts', 'li_2' => 'User List'])
		];
		return $this->load->view('apps-contacts-list', $data);
	}

	public function contacts_profile()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Profile']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Profile', 'li_1' => 'Contacts', 'li_2' => 'Profile'])
		];
		return $this->load->view('apps-contacts-profile', $data);
	}

	// // Horizontal Layout Pages Routes
	public function layouts_horizontal()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Horizontal']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Horizontal', 'li_1' => 'Layouts', 'li_2' => 'Horizontal'])
		];
		return $this->load->view('layouts-horizontal', $data);
	}

	public function layouts_horizontal_boxed()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Horizontal']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Horizontal', 'li_1' => 'Layouts', 'li_2' => 'Horizontal'])
		];
		return $this->load->view('layouts-horizontal-boxed', $data);
	}

	public function layouts_horizontal_dark()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Horizontal']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Horizontal', 'li_1' => 'Layouts', 'li_2' => 'Horizontal'])
		];
		return $this->load->view('layouts-horizontal-dark', $data);
	}

	public function layouts_horizontal_rtl()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Horizontal']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Horizontal', 'li_1' => 'Layouts', 'li_2' => 'Horizontal'])
		];
		return $this->load->view('layouts-horizontal-rtl', $data);
	}

	public function layouts_horizontal_scrollable()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Horizontal']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Horizontal', 'li_1' => 'Layouts', 'li_2' => 'Horizontal'])
		];
		return $this->load->view('layouts-horizontal-scrollable', $data);
	}

	public function layouts_dark_topbar()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Horizontal']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Horizontal', 'li_1' => 'Layouts', 'li_2' => 'Horizontal'])
		];
		return $this->load->view('layouts-horizontal-dark-topbar', $data);
	}

	// Pages
	public function auth_login()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Login'])
		];
		return $this->load->view('auth-login', $data);
	}
	public function auth_register()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Register'])
		];
		return $this->load->view('auth-register', $data);
	}
	public function auth_recoverpw()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Recover_Password'])
		];
		return $this->load->view('auth-recoverpw', $data);
	}
	public function auth_lock_screen()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Lock_Screen'])
		];
		return $this->load->view('auth-lock-screen', $data);
	}
	public function auth_confirm_mail()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Confirm_Mail'])
		];
		return $this->load->view('auth-confirm-mail', $data);
	}
	public function auth_email_verification()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Email_Verification'])
		];
		return $this->load->view('auth-email-verification', $data);
	}
	public function auth_two_step_verification()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Two_Step_Verification'])
		];
		return $this->load->view('auth-two-step-verification', $data);
	}

	public function pages_starter()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Starter_Page']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Starter_Page', 'li_1' => 'Pages', 'li_2' => 'Starter Page'])
		];
		return $this->load->view('pages-starter', $data);
	}
	public function pages_invoice()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Invoice']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Invoice', 'li_1' => 'Pages', 'li_2' => 'Invoice'])
		];
		return $this->load->view('pages-invoice', $data);
	}
	public function pages_profile()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Profile']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Profile', 'li_1' => 'Pages', 'li_2' => 'Profile'])
		];
		return $this->load->view('pages-profile', $data);
	}
	public function pages_maintenance()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Maintenance'])
		];
		return $this->load->view('pages-maintenance', $data);
	}
	public function pages_comingsoon()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Coming_Soon'])
		];
		return $this->load->view('pages-comingsoon', $data);
	}
	public function pages_timeline()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Timeline']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Timeline', 'li_1' => 'Pages', 'li_2' => 'Timeline'])
		];
		return $this->load->view('pages-timeline', $data);
	}
	public function pages_faqs()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'FAQs']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'FAQs', 'li_1' => 'Pages', 'li_2' => 'FAQs'])
		];
		return $this->load->view('pages-faqs', $data);
	}
	public function pages_pricing()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Pricing']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Pricing', 'li_1' => 'Pages', 'li_2' => 'Pricing'])
		];
		return $this->load->view('pages-pricing', $data);
	}
	public function pages_404()
	{
		$this->load->view('template/template_lib/pages-404');
	}
	public function pages_500()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Error_500'])
		];
		return $this->load->view('pages-500', $data);
	}
	public function ui_offcanvas()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Offcanvas']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Offcanvas', 'li_1' => 'Components', 'li_2' => 'Offcanvas'])
		];
		return $this->load->view('ui-offcanvas', $data);
	}

	// UI Elements
	public function ui_alerts()
	{
		$tittle['title'] 	= 'Alerts';
		$tittle['li_1'] 	= 'Components';
		$tittle['li_2'] 	= 'Alerts';

		//Teamplate
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="' . base_url() . 'assets/js/main.js"></script>';
		$data['addjs'] 		.= '<script src="' . base_url() . 'assets/js/pages/calendar.init.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['page_title'] 	= $this->load->view('template/partials/page-title', $tittle, true);

		$data['content']    	= $this->load->view('template/template_lib/ui-alerts', $param, true);
		$this->load->view('template/template', $data);
	}
	public function ui_buttons()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Buttons']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Buttons', 'li_1' => 'Components', 'li_2' => 'Buttons'])
		];
		return $this->load->view('ui-buttons', $data);
	}
	public function ui_cards()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Cards']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Cards', 'li_1' => 'Components', 'li_2' => 'Cards'])
		];
		return $this->load->view('ui-cards', $data);
	}
	public function ui_carousel()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Carousel']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Carousel', 'li_1' => 'Components', 'li_2' => 'Carousel'])
		];
		return $this->load->view('ui-carousel', $data);
	}
	public function ui_dropdowns()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Dropdowns']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Dropdowns', 'li_1' => 'Components', 'li_2' => 'Dropdowns'])
		];
		return $this->load->view('ui-dropdowns', $data);
	}
	public function ui_grid()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Grid']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Grid', 'li_1' => 'Components', 'li_2' => 'Grid'])
		];
		return $this->load->view('ui-grid', $data);
	}
	public function ui_images()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Images']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Images', 'li_1' => 'Components', 'li_2' => 'Images'])
		];
		return $this->load->view('ui-images', $data);
	}
	public function ui_modals()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Modals']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Modals', 'li_1' => 'Components', 'li_2' => 'Modals'])
		];
		return $this->load->view('ui-modals', $data);
	}

	public function ui_progressbars()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Progress_Bars']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Progress_Bars', 'li_1' => 'Components', 'li_2' => 'Progress Bars'])
		];
		return $this->load->view('ui-progressbars', $data);
	}

	public function ui_tabs_accordions()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Tabs_n_Accordions']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Tabs_n_Accordions', 'li_1' => 'Components', 'li_2' => 'Tabs & Accordions'])
		];
		return $this->load->view('ui-tabs-accordions', $data);
	}
	public function ui_typography()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Typography']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Typography', 'li_1' => 'Components', 'li_2' => 'Typography'])
		];
		return $this->load->view('ui-typography', $data);
	}
	public function ui_video()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Video']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Video', 'li_1' => 'Components', 'li_2' => 'Video'])
		];
		return $this->load->view('ui-video', $data);
	}
	public function ui_general()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'General']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'General', 'li_1' => 'Components', 'li_2' => 'General'])
		];
		return $this->load->view('ui-general', $data);
	}
	public function ui_colors()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Colors']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Colors', 'li_1' => 'Components', 'li_2' => 'Colors'])
		];
		return $this->load->view('ui-colors', $data);
	}

	//Extended
	public function extended_lightbox()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Lightbox']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Lightbox', 'li_1' => 'Extended', 'li_2' => 'Lightbox'])
		];
		return $this->load->view('extended-lightbox', $data);
	}

	public function extended_rangeslider()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Range_Slider']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Range_Slider', 'li_1' => 'Extended', 'li_2' => 'Range Slider'])
		];
		return $this->load->view('extended-rangeslider', $data);
	}
	public function extended_session_timeout()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Session_Timeout']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Session_Timeout', 'li_1' => 'Extended', 'li_2' => 'Session Timeout'])
		];
		return $this->load->view('extended-session-timeout', $data);
	}
	public function extended_sweet_alert()
	{
		$tittle['title'] 	= 'SweetAlert_2';
		$tittle['li_1'] 	= 'Extended';
		$tittle['li_2'] 	= 'SweetAlert_2';

		//Teamplate
		$data['addcss'] 	= '';
		$data['addjs'] 		= '<script src="' . base_url() . 'assets/js/pages/sweetalert.init.js">';
		// $data['addjs'] 		.= '<script src="'.base_url().'assets/js/pages/calendar.init.js"></script>';
		$data['title_meta'] = $this->load->view('template/partials/title-meta', $tittle, true);

		//Page Data Content
		$param['page_title'] 	= $this->load->view('template/partials/page-title', $tittle, true);

		$data['content']    	= $this->load->view('template/template_lib/extended-sweet-alert', $param, true);
		$this->load->view('template/template', $data);
	}
	public function extended_rating()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Rating']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Rating', 'li_1' => 'Extended', 'li_2' => 'Rating'])
		];
		return $this->load->view('extended-rating', $data);
	}
	public function extended_notification()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Notifications']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Notifications', 'li_1' => 'Extended', 'li_2' => 'Notifications'])
		];
		return $this->load->view('extended-notifications', $data);
	}

	// Forms
	public function form_elements()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Basic_Elements']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Basic_Elements', 'li_1' => 'Forms', 'li_2' => 'Basic Elements'])
		];
		return $this->load->view('form-elements', $data);
	}
	public function form_validation()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Validation']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Validation', 'li_1' => 'Forms', 'li_2' => 'Validation'])
		];
		return $this->load->view('form-validation', $data);
	}
	public function form_advanced()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Advanced_Plugins']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Advanced_Plugins', 'li_1' => 'Forms', 'li_2' => 'Advanced Plugins'])
		];
		return $this->load->view('form-advanced', $data);
	}
	public function form_editors()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Editors']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Editors', 'li_1' => 'Forms', 'li_2' => 'Editors'])
		];
		return $this->load->view('form-editors', $data);
	}
	public function form_uploads()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'File_Upload']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'File_Upload', 'li_1' => 'Forms', 'li_2' => 'File Upload'])
		];
		return $this->load->view('form-uploads', $data);
	}

	public function form_wizard()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Wizard']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Wizard', 'li_1' => 'Forms', 'li_2' => 'Wizard'])
		];
		return $this->load->view('form-wizard', $data);
	}
	public function form_mask()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Mask']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Mask', 'li_1' => 'Forms', 'li_2' => 'Mask'])
		];
		return $this->load->view('form-mask', $data);
	}

	// Tables
	public function tables_basic()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Bootstrap_Basic']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Bootstrap_Basic', 'li_1' => 'Tables', 'li_2' => 'Bootstrap Basic'])
		];
		return $this->load->view('tables-basic', $data);
	}
	public function tables_datatable()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'DataTables']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'DataTables', 'li_1' => 'Tables', 'li_2' => 'DataTables'])
		];
		return $this->load->view('tables-datatable', $data);
	}
	public function tables_responsive()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Responsive']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Responsive', 'li_1' => 'Tables', 'li_2' => 'Responsive'])
		];
		return $this->load->view('tables-responsive', $data);
	}
	public function tables_editable()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Editable']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Editable', 'li_1' => 'Tables', 'li_2' => 'Editable'])
		];
		return $this->load->view('tables-editable', $data);
	}

	// Charts
	public function charts_apex()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Apexcharts']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Apexcharts', 'li_1' => 'Charts', 'li_2' => 'Apexcharts'])
		];
		return $this->load->view('charts-apex', $data);
	}
	public function charts_chartjs()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Chartjs']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Chartjs', 'li_1' => 'Charts', 'li_2' => 'Chartjs'])
		];
		return $this->load->view('charts-chartjs', $data);
	}
	public function charts_echart()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Echarts']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Echarts', 'li_1' => 'Charts', 'li_2' => 'Echarts'])
		];
		return $this->load->view('charts-echart', $data);
	}
	public function charts_knob()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Jquery_Knob']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Jquery_Knob', 'li_1' => 'Charts', 'li_2' => 'Jquery Knob'])
		];
		return $this->load->view('charts-knob', $data);
	}
	public function charts_sparkline()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Sparkline']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Sparkline', 'li_1' => 'Charts', 'li_2' => 'Sparkline'])
		];
		return $this->load->view('charts-sparkline', $data);
	}

	// Icons
	public function icons_boxicons()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Boxicons']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Boxicons', 'li_1' => 'Icons', 'li_2' => 'Boxicons'])
		];
		return $this->load->view('icons-boxicons', $data);
	}
	public function icons_materialdesign()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Material_Design']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Material_Design', 'li_1' => 'Icons', 'li_2' => 'Material Design'])
		];
		return $this->load->view('icons-materialdesign', $data);
	}
	public function icons_dripicons()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Dripicons']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Dripicons', 'li_1' => 'Icons', 'li_2' => 'Dripicons'])
		];
		return $this->load->view('icons-dripicons', $data);
	}
	public function icons_fontawesome()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Font_Awesome_5']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Font_Awesome_5', 'li_1' => 'Icons', 'li_2' => 'Font Awesome 5'])
		];
		return $this->load->view('icons-fontawesome', $data);
	}

	// Maps
	public function maps_google()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Google']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Google', 'li_1' => 'Maps', 'li_2' => 'Google'])
		];
		return $this->load->view('maps-google', $data);
	}
	public function maps_vector()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Vector']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Vector', 'li_1' => 'Maps', 'li_2' => 'Vector'])
		];
		return $this->load->view('maps-vector', $data);
	}
	public function maps_leaflet()
	{
		$data = [
			'title_meta' => $this->load->view('partials/title-meta', ['title' => 'Leaflet']),
			'page_title' => $this->load->view('partials/page-title', ['title' => 'Leaflet', 'li_1' => 'Maps', 'li_2' => 'Leaflet'])
		];
		return $this->load->view('maps-vector', $data);
	}

	public function logout()
	{
		$this->session->sess_destroy();
		redirect('auth', 'refresh');
	}
}
