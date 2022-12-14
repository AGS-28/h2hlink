<?php
class Model_user extends CI_Model {
	function get_data_user()
    {
        $start 		= $this->input->post('start');
		$length 	= $this->input->post('length');
		$post 		= $this->input->post('formdata');
		$arrPost 	= postajax_toarray($post);
        $addSql     = '';
        
        if(isset($arrPost['searchkey']) && $arrPost['searchkey'] != '') {
            $addSql .= ' AND (lower(CAST(id_user AS VARCHAR(3))) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(a.username) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(a.email) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(a.name) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(b.groupname) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(c.client_name) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(c.npwp) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(c.npwp) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').')';
            $addSql .= ' OR lower(c.address) LIKE lower('.$this->db->escape('%'.$arrPost['searchkey'].'%').'))';
        }
        
        $sql_total 	= 'select a.id_user,a.username ,a.email ,a.name,a.createdate ,a.lastupdate ,a.userupdate ,a.is_active ,a.user_tipe ,a.address,
                            a.phone_number ,a.profile_picture ,b.groupname ,c.client_name ,c.npwp ,c.nib ,c.address ,c.id as id_client,
                            c.handphone_no ,c.telephone_no,c."validate" ,c.valid_until,a.client_id,a.id_groups
                        from users."user" a 
                        left join users."groups" b on a.id_groups = b.id 
                        left join profile.clients c on c.id = a.client_id 
                        where 1=1 '.$addSql.'
                        order by a.createdate desc;';
        
		$result_total 	= $this->db->query($sql_total);
		$banyak 		= $result_total->num_rows();

		if($banyak > 0){
			$sql = 'select a.id_user,a.username ,a.email ,a.name,a.createdate ,a.lastupdate ,a.userupdate ,a.is_active ,a.user_tipe ,a.address,
                        a.phone_number ,a.profile_picture ,b.groupname ,c.client_name ,c.npwp ,c.nib ,c.address ,c.id as id_client,
                        c.handphone_no ,c.telephone_no,c."validate" ,c.valid_until,a.client_id,a.id_groups,d.client_key ,d.api_key,e.partner_name ,e.desc_partner 
                    from users."user" a 
                    left join users."groups" b on a.id_groups = b.id 
                    left join profile.clients c on c.id = a.client_id
                    left join profile.client_partners d on d.client_id = c.id 
	                left join profile.partners e on e.id = d.partner_id  
                    where 1=1 '.$addSql.' 
                    order by a.createdate desc 
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



}
