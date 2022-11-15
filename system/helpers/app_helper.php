<?php
if (!function_exists('reverseDate'))
{
	function reverseDate($strdate = '',$separator='-'){
		$return = '';
		$strdatecek = Check1970($strdate);
		if(strlen(trim($strdate)) == 10 && $strdatecek != '')
		{
			$arrStr = explode('-', $strdate);
			//$return = $arrStr[2].$arrStr[1].$arrStr[0];
			$return = $arrStr[2].$separator.$arrStr[1].$separator.$arrStr[0];
		}
		return $return;
	}
}

if (!function_exists('FormatNPWP'))
{
	function FormatNPWP($varnpwp){
		$varresult = '';
		$varresult = substr($varnpwp,0,2).".".substr($varnpwp,2,3).".".substr($varnpwp,5,3).".".substr($varnpwp,8,1)."-".substr($varnpwp,9,3).".".substr($varnpwp,12,3);
		return $varresult;
	}
}

if ( ! function_exists('postajax_toarray'))
{
	function postajax_toarray($arrpost)
	{
		$arrdata = json_decode($arrpost);
		foreach ($arrdata as $key => $val)
		{
			if( isset($result[$val->name]) ){
				$tmp_val = $result[$val->name];
				$result[$val->name] = (array) $tmp_val;
				array_push($result[$val->name],$val->value);
			}
			else
				$result[$val->name] = $val->value;
		}
		return $result;
	}
}

if(!function_exists('clear_hs'))
{
	function clear_hs($str)
	{
		$returnText = trim($str);
		$returnText = str_replace('.', '', $returnText);
		$returnText = str_replace(',', '', $returnText);
		return $returnText;
	}
}

if (!function_exists('format_date_bulan'))
{
	function format_date_bulan($strtgl){
		$arrayBulan = array("", "Januari", "Februari", "Maret", "April", "Mei", "Juni", "Juli", "Agustus", "September", "Oktober", "November", "Desember");
		$arrayTgl = explode('-', $strtgl);
		$bulan = $arrayTgl[1]+0;
		$namaBulan = $arrayBulan[$bulan];
		return $arrayTgl[2].' '.$namaBulan.' '.$arrayTgl[0];
	}
}

if ( ! function_exists('encryptpassword'))
{
	function encryptpassword($param)
	{
		$CI =& get_instance();
		$CI->encryption->initialize(
			array(
				'driver' => 'openssl',
                'cipher' => 'aes-256',
                'mode' => 'ctr',
                'key' => md5(hash('whirlpool', 'muhammadafifpratama'))
        	)
		);
		$encrpypted = $CI->encryption->encrypt($param);
		//$encrpypted = rawurlencode(base64_encode($encrpypted));
		//$encrpypted = base64_encode($encrpypted);
		return $encrpypted;
	}
}

if ( ! function_exists('decryptpassword'))
{
	function decryptpassword($encryptedparam)
	{
		$CI =& get_instance();
		$CI->encryption->initialize(
			array(
				'driver' => 'openssl',
                'cipher' => 'aes-256',
                'mode' => 'ctr',
                'key' => md5(hash('whirlpool', 'muhammadafifpratama'))
        	)
		);
		$decrypted = base64_decode($encryptedparam);
		return $CI->encryption->decrypt($encryptedparam);
	}
}

if ( ! function_exists('encryptid'))
{
	function encryptid($param)
	{
		$CI =& get_instance();
		$encrpypted = $CI->encryption->encrypt($param);
		$encrpypted = rawurlencode(base64_encode($encrpypted));
		return $encrpypted;
	}
}

if ( ! function_exists('decryptid'))
{
	function decryptid($encryptedparam)
	{
		$CI =& get_instance();
		$decrypted = base64_decode(rawurldecode($encryptedparam));
		return $CI->encryption->decrypt($decrypted);
	}
}

if ( ! function_exists('cek_session'))
{
	function cek_session($arrRole)
	{
		$CI =& get_instance();
		if(!in_array($CI->session->userdata('sess_roleid'), $arrRole))
		{
			$url = base_url().'index.php/auth/logout';
			header('Location: '.$url);
		}
	}
}

if(!function_exists('NumberDB'))
{
	function NumberDB($angka='')
	{
		$angka = str_replace('.', '', $angka);
		$angka = str_replace(',', '.', $angka);
		return $angka;
	}
}

if (!function_exists('FormatHS'))
{
	function FormatHS($varnohs)
	{
		$varnohs = $varnohs;
		$digit = strlen(trim($varnohs));
		if (!is_null($varnohs) && $digit == 10)
		{
			$varresult = '';
			$varresult = substr($varnohs,0,4).".".substr($varnohs,4,2).".".substr($varnohs,6,2).".".substr($varnohs,8,2);
			return $varresult;
		}
		elseif (!is_null($varnohs) && $digit == 8){
			$varresult = '';
			$varresult = substr($varnohs,0,4).".".substr($varnohs,4,2).".".substr($varnohs,6,2);
			return $varresult;
		}
		else
		{
			return 'HS Tidak Valid';
		}
	}
}

if(!function_exists('NumberForm'))
{
	function NumberForm($angka='')
	{
		$angka = trim($angka);
		$arrAngka = explode('.', $angka);
		$angka1 = number_format($arrAngka[0],0,',','.');
		if(trim($arrAngka[1]) != '')
			$ret = $angka1.','.$arrAngka[1];
		else
			$ret = $angka1;
		return $ret;
	}
}

if(!function_exists('Check1970'))
{
	function Check1970($string = '')
	{
		$arrSplit = explode('-', $string);
		if(trim($string) == '' || $arrSplit[0] == '1970' || $arrSplit[2] == '1970' || $arrSplit[0] == '0000' || $arrSplit[2] == '0000')
			$ret = '';
		else
			$ret = date("d-m-Y", strtotime($string));
		return $ret;
	}
}

if(!function_exists('cek_spasi'))
{
	function cek_spasi($string = '')
	{
		
	}
}


?>
