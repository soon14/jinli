<?php
if (!defined('BASE_PATH')) exit('Access Denied!');
/**
 * 
 * Enter description here ...
 * @author rainkid
 *
 */
class Games_Service_Config{
	
	/**
	 * 
	 * get all configs
	 */
	public static function getAllConfig() {
		$ret = self::_getDao()->getAll();
		$temp = array();
		foreach($ret as $key=>$value) {
			$temp[$value['g_key']] = $value['g_value'];
		}
		return $temp;
	}

	/**
	 * 
	 * @param unknown_type $key
	 * @return mixed
	 */
	public static function getValue($key) {
		$ret = self::_getDao()->where(array('g_key'=>$key));
		return $ret['g_value'];
	}

	/**
	 * 
	 * @param unknown_type $key
	 * @param unknown_type $value
	 */
	public static function setValue($key, $value) {
		if (!$key) return false;
		return self::_getDao()->updateByKey($key, $value);
	}
	
	/**
	 * 
	 * @return Gou_Dao_Config
	 */
	private static function _getDao() {
		return Common::getDao("Games_Dao_Config");
	}
}
