<?php
class Model_cms extends CI_Model {

    function get_data_role()
    {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
        $addSql     = '';
        
        if(isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id AS VARCHAR(3))) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(a.groupname) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').'))';
        }
        
        $sql_total 	= ' SELECT * FROM users.groups a
                        WHERE 1=1 '.$addSql.' AND a.is_deleted = '.$this->db->escape('f').';';
        
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){
			$sql = 'SELECT * FROM users.groups a
                    WHERE 1=1 '.$addSql.' AND a.is_deleted = '.$this->db->escape('f').' 
                    order by a.id ASC 
                    LIMIT '.$length.' OFFSET '.$start.';';
			$result 		= $this->db->query($sql);
			$arrayReturn 	= $result->result_array();

			$return['totalRow'] = $banyak;
			$return['arrData'] 	= $arrayReturn;
		}else{
			$return['totalRow'] = 0;
			$return['arrData'] 	= array();
		}		

		return $return;
    }
    function get_data_file()
    {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
        $addSql     = '';
        
        if(isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id AS VARCHAR(3))) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(a.message_type) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').'))';
        }
        
        $sql_total 	= ' SELECT * FROM referensi.message_type a
                        WHERE 1=1 '.$addSql.' AND a.is_deleted = '.$this->db->escape('f').';';
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){
			$sql = 'SELECT * FROM referensi.message_type a
                    WHERE 1=1 '.$addSql.' AND a.is_deleted = '.$this->db->escape('f').' 
                    order by a.id ASC 
                    LIMIT '.$length.' OFFSET '.$start.';';
			$result 		= $this->db->query($sql);
			$arrayReturn 	= $result->result_array();

			$return['totalRow'] = $banyak;
			$return['arrData'] 	= $arrayReturn;
		}else{
			$return['totalRow'] = 0;
			$return['arrData'] 	= array();
		}		

		return $return;
    }
    function get_data_chanel()
    {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
        $addSql     = '';
        
        if(isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id AS VARCHAR(3))) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(a.name) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').'))';
        }
        
        $sql_total 	= ' SELECT * FROM referensi.chanel a
                        WHERE 1=1 '.$addSql.' AND a.is_deleted = '.$this->db->escape('f').';';
        
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){
			$sql = 'SELECT * FROM referensi.chanel a
                    WHERE 1=1 '.$addSql.' AND a.is_deleted = '.$this->db->escape('f').' 
                    order by a.id ASC 
                    LIMIT '.$length.' OFFSET '.$start.';';
			$result 		= $this->db->query($sql);
			$arrayReturn 	= $result->result_array();

			$return['totalRow'] = $banyak;
			$return['arrData'] 	= $arrayReturn;
		}else{
			$return['totalRow'] = 0;
			$return['arrData'] 	= array();
		}		

		return $return;
    }
    function get_data_partner()
    {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
        $addSql     = '';
        
        if(isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id AS VARCHAR(3))) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(a.partner_name) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').'))';
        }
        
        $sql_total 	= ' SELECT * FROM profile.partners a
                        WHERE 1=1 '.$addSql.' AND a.is_deleted = '.$this->db->escape('f').';';
        
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){
			$sql = 'SELECT * FROM profile.partners a
                    WHERE 1=1 '.$addSql.' AND a.is_deleted = '.$this->db->escape('f').' 
                    order by a.id ASC 
                    LIMIT '.$length.' OFFSET '.$start.';';
			$result 		= $this->db->query($sql);
			$arrayReturn 	= $result->result_array();

			$return['totalRow'] = $banyak;
			$return['arrData'] 	= $arrayReturn;
		}else{
			$return['totalRow'] = 0;
			$return['arrData'] 	= array();
		}		

		return $return;
    }
    
    function get_endpoint($id)
    {
        $addSql = " AND a.partner_id = ".$this->db->escape($id);
        $html   = '';
        $sql    = "SELECT * FROM profile.partner_endpoints a 
                    WHERE 1=1 ".$addSql." AND a.is_deleted  = ".$this->db->escape('f')." 
                    order by a.id ASC ";
        // echo $sql;exit;
        $result = $this->db->query($sql);

        if ($result->num_rows() > 0) 
        {
            foreach ($result->result() as $key => $value) {
                if ($value->is_active == 't') {
                    $html .= '<span class="badge rounded-pill bg-success">'.$value->method_name.'</span>';
                }
                else 
                {
                    $html .= '<span class="badge rounded-pill bg-danger">'.$value->method_name.'</span>';
                }
            }
        }
        else 
        {
            $html   = '<div class="external-event fc-event text-dark bg-soft-dark" data-class="bg-dark">
                        <i class="mdi mdi-checkbox-blank-circle font-size-11 me-2"></i>None
                    </div>';
        }

        return $html;
    }

    function hapus_role($id)
    {
        $data = 0;
        $DataUpdate = array('is_deleted' => 't' );
        $this->db->where('id',$id);
        $this->db->update('users.groups',$DataUpdate);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }
    function hapus_chanel($id)
    {
        $data = 0;
        $DataUpdate = array('is_deleted' => 't' );
        $this->db->where('id',$id);
        $this->db->update('referensi.chanel',$DataUpdate);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }
    function hapus_file($id)
    {
        $data = 0;
        $DataUpdate = array('is_deleted' => 't' );
        $this->db->where('id',$id);
        $this->db->update('referensi.message_type',$DataUpdate);

        if ($this->db->affected_rows() > 0) {
            $data = 1;
        }

        return $data;
    }


    public function add_role_item()
    {
        $post 		= $this->input->post('postdata');
		$arrPost 	= postajax_toarray($post);

        $rolename   = $arrPost['rolename'];
        $status     = $arrPost['status'];
        $updated    = $arrPost['updated'];
        $data       = 0;
        
        $arrayInsert = array(
            'groupname' => $rolename, 
            'is_active' => $status, 
            'is_deleted' => 'f', 
            'created_by' => $this->session->userdata('username'), 
            'created_at' => date('Y-m-d H:i:s'), 
            );
        if ($updated == "1") {
            $idnya = $arrPost['idnya'];
            $arrayInsert = array(
                'groupname' => $rolename, 
                'is_active' => $status, 
                'updated_by' => $this->session->userdata('username'), 
                'updated_at' => date('Y-m-d H:i:s'), 
                );
            $this->db->where('id',$idnya);
            $this->db->update('users.groups',$arrayInsert);
        }
        else {
            $this->db->insert('users.groups',$arrayInsert);
        }
        
        
        if ($this->db->affected_rows() > 0 ) {
            $data = 1;
        }

        return $data;

    }
    public function add_file_item()
    {
        $post 		= $this->input->post('postdata');
		$arrPost 	= postajax_toarray($post);

        $filetype   = $arrPost['filetype'];
        $status     = $arrPost['status'];
        $updated    = $arrPost['updated'];
        $data       = 0;
        
        $arrayInsert = array(
            'message_type' => $filetype, 
            'is_active' => $status, 
            'is_deleted' => 'f', 
            'created_by' => $this->session->userdata('username'), 
            'created_at' => date('Y-m-d H:i:s'), 
            );
        if ($updated == "1") {
            $idnya = $arrPost['idnya'];
            $arrayInsert = array(
                'message_type' => $filetype, 
                'is_active' => $status, 
                'updated_by' => $this->session->userdata('username'), 
                'updated_at' => date('Y-m-d H:i:s'), 
                );
            $this->db->where('id',$idnya);
            $this->db->update('referensi.message_type',$arrayInsert);
        }
        else {
            $this->db->insert('referensi.message_type',$arrayInsert);
        }
        
        
        if ($this->db->affected_rows() > 0 ) {
            $data = 1;
        }

        return $data;

    }
    public function add_chanel_item()
    {
        $post 		= $this->input->post('postdata');
		$arrPost 	= postajax_toarray($post);

        $name       = $arrPost['name'];
        $status     = $arrPost['status'];
        $updated    = $arrPost['updated'];
        $data       = 0;
        
        $arrayInsert = array(
            'name' => $name, 
            'is_active' => $status, 
            'is_deleted' => 'f', 
            'created_by' => $this->session->userdata('username'), 
            'created_at' => date('Y-m-d H:i:s'), 
            );
        if ($updated == "1") {
            $idnya = $arrPost['idnya'];
            $arrayInsert = array(
                'name' => $name, 
                'is_active' => $status, 
                'updated_by' => $this->session->userdata('username'), 
                'updated_at' => date('Y-m-d H:i:s'), 
                );
            $this->db->where('id',$idnya);
            $this->db->update('referensi.chanel',$arrayInsert);
        }
        else {
            $this->db->insert('referensi.chanel',$arrayInsert);
        }
        
        
        if ($this->db->affected_rows() > 0 ) {
            $data = 1;
        }

        return $data;

    }
    public function add_item_partner()
    {
        $post 		= $this->input->post('postdata');
		$arrPost 	= postajax_toarray($post);

        $partnerName       = $arrPost['partner-name'];
        $partnerDetail     = $arrPost['parner-detail'];
        $arrmethodname     = $arrPost['arrmethodname[]'];
        $arrType           = $arrPost['arrType[]'];
        $arrendpoint       = $arrPost['arrendpoint[]'];
        $arrstatus         = $arrPost['arrstatus[]'];
        $arrmessageType    = $arrPost['arrmessageType[]'];
        $data              = 0;
        $idhdr             = 0;
        $updated           = 99;
        
        $arrayInsertHeader = array(
            'partner_name' => $partnerName,
            'desc_partner' => $partnerDetail,
            'is_active' => 't', 
            'is_deleted' => 'f', 
            'created_by' => $this->session->userdata('username'), 
            'created_at' => date('Y-m-d H:i:s'), 
            );
        if ($updated == "1") {
            $idnya = $arrPost['idnya'];
            $arrayInsert = array(
                'name' => $name, 
                'is_active' => $status, 
                'updated_by' => $this->session->userdata('username'), 
                'updated_at' => date('Y-m-d H:i:s'), 
                );
            $this->db->where('id',$idnya);
            $this->db->update('referensi.chanel',$arrayInsertHeader);
        }
        else {
            $this->db->insert('profile.partners',$arrayInsertHeader);
            $idhdr = $this->db->insert_id();

            if ($idhdr != '0') {
                if (is_array($arrmethodname)) {
                    foreach ($arrmethodname as $key => $value) {
                        $insertMethod = array(
                                                'method_name'           => $value, 
                                                'partner_method_type'   => $arrType[$key], 
                                                'partner_id'            => $idhdr, 
                                                'partner_endpoint'      => $arrendpoint[$key], 
                                                'message_id'            => $arrmessageType[$key], 
                                                'is_active'             => $arrstatus[$key], 
                                                'is_deleted'            => 'f', 
                                                'created_at'            => date('Y-m-d H:i:s'), 
                                                'created_by'            => $this->session->userdata('username'), 
                                            );
                        $this->db->insert('profile.partner_endpoints',$insertMethod);
                    }
                }
                else {
                    $insertMethod = array(
                        'method_name'           => $arrmethodname, 
                        'partner_method_type'   => $arrType, 
                        'partner_id'            => $idhdr, 
                        'partner_endpoint'      => $arrendpoint, 
                        'message_id'            => $arrmessageType, 
                        'is_active'             => $arrstatus, 
                        'is_deleted'            => 'f', 
                        'created_at'            => date('Y-m-d H:i:s'), 
                        'created_by'            => $this->session->userdata('username'), 
                    );
                    $this->db->insert('profile.partner_endpoints',$insertMethod);
                }
                // var_dump($insertMethod);exit;
            }
        }
        
        
        if ($this->db->affected_rows() > 0 ) {
            $data = 1;
        }

        return $data;

    }
    public function get_edit_role()
    {
        $id 		= $this->input->post('id');
        $data       = array();
        $status     = 0;

        $sql        = "SELECT * FROM users.groups a WHERE a.id = ".$this->db->escape($id);
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) 
        {
            $returnData = $result->row();
            $status     = 1;
        }
        $data = array(
                    'thisdata' => $returnData, 
                    'status' => $status, 
                );

        return $data;

    }
    public function get_edit_chanel()
    {
        $id 		= $this->input->post('id');
        $data       = array();
        $status     = 0;

        $sql        = "SELECT * FROM referensi.chanel a WHERE a.id = ".$this->db->escape($id);
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) 
        {
            $returnData = $result->row();
            $status     = 1;
        }
        $data = array(
                    'thisdata' => $returnData, 
                    'status' => $status, 
                );

        return $data;

    }
    public function get_edit_file()
    {
        $id 		= $this->input->post('id');
        $data       = array();
        $status     = 0;

        $sql        = "SELECT * FROM referensi.message_type a WHERE a.id = ".$this->db->escape($id);
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) 
        {
            $returnData = $result->row();
            $status     = 1;
        }
        $data = array(
                    'thisdata' => $returnData, 
                    'status' => $status, 
                );

        return $data;

    }
    public function getmessagetype()
    {
        $id 		= $this->input->post('id');
        $data       = array();
        $status     = 0;
        $addSql     ="";

        if ($id != '') {
            $addSql = " WHERE a.id = ".$this->db->escape($id);
        }

        $sql        = "SELECT a.id as value,a.message_type as label FROM referensi.message_type a ".$addSql;
        $result     = $this->db->query($sql);
        $banyak     = $result->num_rows();
        if ($banyak > 0) 
        {
            $returnData = $result->result_array();
            $status     = 1;
        }
        $data = array(
                    'thisdata' => $returnData, 
                    'status' => $status, 
                );

        return $data;

    }

}
