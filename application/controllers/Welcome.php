<?php
defined('BASEPATH') or exit('No direct script access allowed');

/**
 * @property CI_DB_query_builder $db2
 * @property CI_URI $uri
 * @property CI_Input $input
 * @property CI_Session $session
 */
class Welcome extends CI_Controller
{

	function __construct()
	{
		parent::__construct();
		//load our second db and put in $db2
		$this->db2 = $this->load->database('second', TRUE);
	}

	/**
	 * Index Page for this controller.
	 *
	 * Maps to the following URL
	 * 		http://example.com/index.php/welcome
	 *	- or -
	 * 		http://example.com/index.php/welcome/index
	 *	- or -
	 * Since this controller is set as the default controller in
	 * config/routes.php, it's displayed at http://example.com/
	 *
	 * So any other public methods not prefixed with an underscore will
	 * map to /index.php/welcome/<method_name>
	 * @see https://codeigniter.com/user_guide/general/urls.html
	 */
	public function index()
	{
		$sql = 'SELECT * FROM test';
		print_r($this->db2->query($sql)->row());
	}
}
