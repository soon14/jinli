<?php
if (!defined('BASE_PATH')) exit('Access Denied!');
/**
 * 
 * Enter description here ...
 * @author lichanghau
 *
 */
class Freedl_Service_Users{

	/**
	 * 
	 * Enter description here ...
	 */
	public static function getAll() {
		return array(self::_getDao()->count(), self::_getDao()->getAll());
	}
	
	/**
	 * 
	 * Enter description here ...
	 * @param unknown_type $params
	 * @param unknown_type $page
	 * @param unknown_type $limit
	 */
	public static function getList($page = 1, $limit = 10, $params = array(), $orderBy = array('id'=>'DESC','create_time'=>'DESC')) {
		if ($page < 1) $page = 1; 
		$start = ($page - 1) * $limit;
		$ret = self::_getDao()->getList($start, $limit, $params, $orderBy);
		$total = self::_getDao()->count($params);
		return array($total, $ret);
	}
	
	
	public static function getUsersList($page = 1, $limit = 10, $params = array(), $orderBy = array('id'=>'DESC','create_time'=>'DESC')) {
		if ($page < 1) $page = 1;
		$start = ($page - 1) * $limit;
		$ret = self::_getDao()->getUsersList($start, $limit, $params, $orderBy);
		$total = self::_getDao()->getUsersCount($params);
		return array($total, $ret);
	}
	
	
	public static function getCount($params = array()) {
		return self::_getDao()->getCount($params);
	}
	
	public static function getBy($params, $orderBy=array()) {
		if(!is_array($params)) return false;
		return self::_getDao()->getBy($params,$orderBy);
	}
	
	public static function updateBy($data, $params){
		if (!is_array($data) || !is_array($params)) return false;
		$data = self::_cookData($data);
		return self::_getDao()->updateBy($data, $params);
	}
	
	public static function insert($data){
		if(!is_array($data)) return false;
		$data = self::_cookData($data);
		return self::_getDao()->insert($data);
	}
	
	/**
	 * 
	 * Enter description here ...
	 * @param unknown_type $data
	 */
	private static function _cookData($data) {
		$tmp = array();
		if(isset($data['id'])) $tmp['id'] = intval($data['id']);
		if(isset($data['operator'])) $tmp['operator'] = $data['operator'];
		if(isset($data['region'])) $tmp['region'] = $data['region'];
		if(isset($data['uuid'])) $tmp['uuid'] = $data['uuid'];
		if(isset($data['uname'])) $tmp['uname'] = $data['uname'];
		if(isset($data['imsi'])) $tmp['imsi'] = $data['imsi'];
		if(isset($data['create_time'])) $tmp['create_time'] = $data['create_time'];
		return $tmp;
	}
	
	/**
	 * 
	 * @return Freedl_Dao_Users
	 */
	private static function _getDao() {
		return Common::getDao("Freedl_Dao_Users");
	}
}
