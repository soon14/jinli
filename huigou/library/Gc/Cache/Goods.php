<?php
if (!defined('BASE_PATH')) exit('Access Denied!');
/**
 * 
 * Gc_Dao_Ad
 * @author rainkid
 *
 */
class Gc_Cache_Goods extends Cache_Base{
	
	public $expire = 60;
	/**
	 *
	 */
	public function getNomalGoods($start, $limit, $params) {
		$args = func_get_args();
		return $this->_cacheData(__FUNCTION__, $args, $this->expire);
	}
}