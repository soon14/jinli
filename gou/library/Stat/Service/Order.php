<?php
if (!defined('BASE_PATH')) exit('Access Denied!');

/**
 *
 * Enter desChannelCodeiption here ...
 * @author tiansh
 *
*/
class Stat_Service_Order{

	/**
	 *
	 * Enter getChannelCode
	 */
	public static function get($id) {
		return self::_getDao()->get(intval($id));
	}

	/**
	 *
	 * Enter desChannelCodeiption here ...
	 * @param unknown_type $params
	 * @param unknown_type $page
	 * @param unknown_type $limit
	 */
	public static function getList($page = 1, $limit = 10, $params = array()) {
		$params = self::_cookData($params);
		if ($page < 1) $page = 1;
		$start = ($page - 1) * $limit;
		$ret = self::_getDao()->getList($start, $limit, $params, array('id'=>'DESC'));
		$total = self::_getDao()->count($params);
		return array($total, $ret);
	}

	/**
	 *
	 * Enter description here ...
	 * @param unknown_type $data
	 */
	public static function add($data) {
		if (empty($data)) return false;
		$data = self::_cookData($data);
		return self::_getDao()->insert($data);
	}

	/**
	 *
	 * Enter description here ...
	 * @param unknown_type $data
	 */

	public static function update($data, $id){
		if (empty($data)) return false;
		$data = self::_cookData($data);
		return self::_getDao()->update($data, intval($id));
	}

	/**
	 *
	 * Enter description here ...
	 * @param unknown_type $uid
	 */
	public static function delete($id) {
		return self::_getDao()->delete(intval($id));
	}


	/**
	 * get by
	 */
	public static function getBy($params = array()) {
		if(!is_array($params)) return false;
		return self::_getDao()->getBy($params);
	}

	/**
	 *
	 * @param array $params
	 * @return array
	 */
	public static function getsBy($params, $sort = array()) {
		if (!is_array($params) || !is_array($sort)) return false;
		$ret = self::_getDao()->getsBy($params, $sort);
		$total = self::_getDao()->count($params);
		return array($total, $ret);
	}
	
	/**
	 * get by
	 */
	public static function deleteBy($params = array()) {
	    if(!is_array($params)) return false;
	    return self::_getDao()->deleteBy($params);
	}

	/**
	 *
	 * Enter desChannelCodeiption here ...
	 * @param unknown_type $data
	 */
	private static function _cookData($data) {
		$tmp = array();
		if(isset($data['id'])) $tmp['id'] = $data['id'];
		if(isset($data['channel_id'])) $tmp[channel_id] = $data['channel_id'];
		if(isset($data['order_total'])) $tmp['order_total'] = $data['order_total'];
        if(isset($data['price_total'])) $tmp['price_total'] = $data['price_total'];
        if(isset($data['channel_code'])) $tmp['channel_code'] = $data['channel_code'];
		if(isset($data['channel_id'])) $tmp['channel_id'] = $data['channel_id'];
		if(isset($data['price_slit'])) $tmp['price_slit'] = $data['price_slit'];
        if(isset($data['sure_order_total'])) $tmp['sure_order_total'] = $data['sure_order_total'];
        if(isset($data['sure_price_total'])) $tmp['sure_price_total'] = $data['sure_price_total'];
        if(isset($data['dateline'])) $tmp['dateline'] = $data['dateline'];
		return $tmp;
	}

	/**
	 *
	 * @return Stat_Dao_Order
	 */
	private static function _getDao() {
		return Common::getDao("Stat_Dao_Order");
	}
}