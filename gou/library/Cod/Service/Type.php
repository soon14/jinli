<?php
if (!defined('BASE_PATH')) exit('Access Denied!');
/**
 * 
 * Enter description here ...
 * @author rainkid
 *
 */
class Cod_Service_Type{

	/**
	 * 
	 * Enter description here ...
	 */
	public static function getAllCodType() {
		return array(self::_getDao()->count(), self::_getDao()->getAll());
	}
	
	/**
	 * 
	 * Enter description here ...
	 * @param unknown_type $params
	 * @param unknown_type $page
	 * @param unknown_type $limit
	 */
	public static function getList($page = 1, $limit = 10, $params = array()) {
		$params = self::_cookData($params);
		if ($page < 1) $page = 1; 
		$start = ($page - 1) * $limit;
		$ret = self::_getDao()->getList($start, $limit, $params, array('sort'=>'DESC'));
		$total = self::_getDao()->count($params);
		return array($total, $ret);
	}
	
	/**
	 *
	 * @param unknown_type $page
	 * @param unknown_type $limit
	 * @param unknown_type $params
	 * @return multitype:unknown
	 */
	public static function getCanUseCodTypes($page, $limit, $params = array()) {
		$params = self::_cookData($params);
		if(intval($page) < 1) $page = 1;
		$start = ($page - 1) * $limit;
		$ret = self::_getDao()->getCanUseGuideTypes(intval($start), intval($limit), $params);
		$total = self::_getDao()->getCanUseGuideTypesCount($params);
		return array($total, $ret);
	}
	
	/**
	 * 
	 * Enter description here ...
	 * @param unknown_type $id
	 */
	public static function getCodType($id) {
		if (!intval($id)) return false;
		return self::_getDao()->get(intval($id));
	}
	
	/**
	 * 
	 * Enter description here ...
	 * @param unknown_type $data
	 * @param unknown_type $id
	 */
	public static function updateCodType($data, $id) {
		if (!is_array($data)) return false;
		$data = self::_cookData($data);
		return self::_getDao()->update($data, intval($id));
	}
	
	/**
	 * 
	 * Enter description here ...
	 * @param unknown_type $id
	 */
	public static function deleteCodType($id) {
		return self::_getDao()->delete(intval($id));
	}
	
	/**
	 *
	 * Enter description here ...
	 * @param unknown_type $id
	 */
	public static function updateTJ($id) {
		if (!$id) return false;
		Gou_Service_ClickStat::increment(19, $id);
		return self::_getDao()->increment('hits', array('id'=>intval($id)));
	}
	
	/**
	 * 
	 * Enter description here ...
	 * @param unknown_type $data
	 */
	public static function addCodType($data) {
		if (!is_array($data)) return false;
		$data = self::_cookData($data);
		return self::_getDao()->insert($data);
	}
	
	/**
	 * @param $version_id
	 * @param $value
	 * @return 获取统计的短链接
	 */
	public static function getShortUrl($version_id, $value) {
		list($model_id, $channel_id) = explode('_', $value['module_channel']);
		return Common::tjurl(Stat_Service_Log::URL_CLICK, $version_id, $model_id, $channel_id, $value['id'], $value['url'], $value['title'], $value['channel_code']);
	}

	/**
	 * 
	 * Enter description here ...
	 * @param unknown_type $data
	 */
	private static function _cookData($data) {
		$tmp = array();
		if(isset($data['sort'])) $tmp['sort'] = intval($data['sort']);
		if(isset($data['title'])) $tmp['title'] = $data['title'];
		if(isset($data['descrip'])) $tmp['descrip'] = $data['descrip'];
		if(isset($data['img'])) $tmp['img'] = $data['img'];
		if(isset($data['url'])) $tmp['url'] = $data['url'];
		if(isset($data['color'])) $tmp['color'] = $data['color'];
		if(isset($data['status'])) $tmp['status'] = intval($data['status']);
		if(isset($data['module_id']) && isset($data['cid'])) $tmp['module_channel'] = intval($data['module_id']).'_'.intval($data['cid']);
		if(isset($data['channel_code'])) $tmp['channel_code'] = $data['channel_code'];
		return $tmp;
	}
	
	/**
	 * 
	 * @return Cod_Dao_Type
	 */
	private static function _getDao() {
		return Common::getDao("Cod_Dao_Type");
	}
}