<?php
if (!defined('BASE_PATH')) exit('Access Denied!');
/**
 *
 * 游戏大厅 1.4.8 版本 开始使用
 * API V2
 * @author lichanghua
 *
 */
class Kingstone_IndexiController extends Api_BaseController {
	
	public $perpage = 10;
	public $cacheKey = 'Kingstone_Index_index';
    
    /**
     * 置顶广告
     */
    public function turnAction() {
    	list(, $ads) = Client_Service_Ad::getCanUseNormalAds(1, 4, array('ad_type'=>1, 'status'=>1, 'hits'=>1));
		$i = 1;
		foreach($ads as $key=>$value) {
			$info = Client_Service_IndexAdI::cookAd($value, "ad1", $i++);
			$info['img'] = $value['img'];
			$ads[$key] = array_merge($ads[$key], $info);
		}
        return $this->_jsonData($ads, 'ad1', $page, $hasnext);
    }
    
    /**
     * 广告位1
     */
    public function newAction() {
    	//最新游戏
    	list(, $games) = Client_Service_Ad::getCanUseNormalAds(1, 6, array('ad_type'=>2,'status'=>1));
    	$i = 1;
    	foreach($games as $key=>$value) {
    		$games[$key] = array_merge($games[$key], Client_Service_IndexAdI::cookAd($value, "ad2", $i++));
    	}
    	return $this->_jsonData($games, 'ad2', $page, $hasnext);
    }
    
    /**
     * 广告位2
     */
    public function bannelAction() {
    	//首页bannel
    	list(, $bannels) = Client_Service_Ad::getCanUseNormalAds(1, 4, array('ad_type'=>5,'status'=>1));
    	$i = 1;
    	foreach($bannels as $key=>$value) {
    		$bannels[$key] = array_merge($bannels[$key], Client_Service_IndexAdI::cookAd($value, "ad3", $i++));
    	}
    	return $this->_jsonData($bannels, 'ad3', $page, $hasnext);
    }
    
    /**
     * 广告位1(外链)
     */
    public function channelAction() {
    	//首页channel
    	$page = intval($this->getInput('page'));
    	if ($page < 1 || !$page) $page = 1;
    	list(, $channels) = Client_Service_Ad::getCanUseNormalAds(1, 4, array('ad_type'=>7,'status'=>1));
    	$i = 1;
    	foreach($channels as $key=>$value) {
    		$channels[$key] = array_merge($channels[$key], Client_Service_IndexAdI::cookAd($value, "ad2", $i++));
    	}
    	return $this->_jsonData($channels, 'ad2',$page, $hasnext);
    }
    
    /**
     * 广告位3
     */
    public function recommendAction() {
    	//推荐专题
    	$page = intval($this->getInput('page'));
    	if ($page < 1) $page = 1;
    	$params =  array();
    	$params['ad_type'] = 3;
    	$params['status'] = 1;
    	//$params['not_ids'] = $this->havePackage();
    	list($total, $subjects) = Client_Service_Ad::getCanUseApiAds($page, $this->perpage, $params);
    	$hasnext = (ceil((int) $total / $this->perpage) - ($page)) > 0 ? true : false;
    	$i = 1;
    	foreach($subjects as $key=>$value) {
    		$subject_games[$key] = array_merge($subjects[$key], Client_Service_IndexAdI::cookAd($value, "ad4", (($page - 1) * $this->perpage)+ $i++));
    	}
    	return $this->_jsonData($subject_games, 'ad4' ,$page, $hasnext);
    	
    }
    
    /**
     * 活动公告
     */
    public function announceAction() {
    	$params = $tmp = array();
    	$params['ad_type'] = 8;
    	list(, $announce) = Client_Service_Ad::getCanUseNormalAds(1, 1, $params);
    	if($announce){
    		$tmp['img'] = Common::getAttachPath().$announce[0]['img'];
    		$tmp['title'] = $announce[0]['title'];
    		$tmp['data-infpage'] = $announce[0]['link'];
    		$this->cache(array($announce[0]['img']), 'gonggao');
    	}
    	$this->output(0, '', $tmp);
    }
    
    /**
     * 游戏分享接口
     */
    public function shareAction(){
    	$id = $this->getInput('id');
    	$tmp = array();
    	//统一使用游戏大厅域名
    	$webroot = Yaf_Application::app()->getConfig()->webroot;
    	$game = Resource_Service_Games::getGameAllInfo(array('id'=>$id));
    	if(!$id || !$game)  $this->output(0, '', $tmp);
    	$tmp['sign'] = 'GioneeGameHall';
    	$tmp['content'] = '游戏大厅的'.'"'.$game['name'].'"'.'很好玩哦'.','.$webroot.'/index/detail/?id='.$id.'&intersrc=shareH5&t_bi='.self::getSource();
    	$this->output(0, '', $tmp);
    }
    
    public function _havePackageAction() {
    	/*
    	$info = $this->getInput(array('apk_package', 'imei'));
    	$tmp = array();
    	$tmp['id'] = '';
    	$tmp['m_id'] =  crc32($info['imei']);
    	$tmp['imei'] =  $info['imei'];
    	$tmp['package'] =  $info['apk_package'];
    	$ret = Client_Service_Imei::replaceImei($tmp);
    	*/
    }
    
    /**
     * 广告位3过滤已经安装的APK
     */
    private function havePackage() {
    	//推荐专题
    	$game_ids = $params = array();
    	$imei = Util_Cookie::get('imei', true);
    	$info = Client_Service_Imei::getImeiByImei(crc32($imei));
    	$packages = explode('|',$info['package']);
    	$params['package'] = array("IN", $packages);
    	//get resource games
    	list($total, $games) = Resource_Service_Games::getList(1, 100, $params);
    	
    	$games = Common::resetKey($games, 'id');
    	$game_ids = array_unique(array_keys($games));
    	return $game_ids;
    }
    
    private  function _jsonData($ads, $name, $page, $hasnext) {
    	$attachPath = Common::getAttachPath();
    	$data = $imgs=  array();
    	$i= 0;
    	foreach ($ads as $key=>$value) {
    		if($value['data-Info']){   //如果没有数据不显示
	    		$data[$i]['img']  = $attachPath . $value['img'];
	    		if($value['icon']){
	    			$data[$i]['icon']  = $attachPath . $value['icon'];
	    			$imgs[] = $value['icon'];
	    		}
	    		if($value['title']){
	    			$data[$i]['title']  = $value['title'];
	    		}
	    		$data[$i]['data-infpage'] =  $value['data-Info'];
	    		if($value['resume']){
	    			$data[$i]['resume'] =  $value['resume'];
	    			$data[$i]['name'] =  $value['name'];
	    			$data[$i]['size'] =  $value['size']."M";
	    			$data[$i]['category'] =  $value['category'];
	    			$data[$i]['hot'] =  $value['hot'];
	    		}
	    		$data[$i]['data-type'] =  $value['data-type'];
	    		$data[$i]['attach'] =  $value['attach'];
	    		$data[$i]['device'] = $value['device'];
	    		$i++;
	    		$imgs[] = $value['img'];
    		}
    	}
    	$this->cache($imgs, $name);
    	if($name != 'ad4'){
    		$this->output(0, '', $data);
    	} else {
    		$this->output(0, '', array('list'=>$data, 'hasnext'=>$hasnext, 'curpage'=>$page));
    	}
    	
    }
}