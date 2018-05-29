<?php
if (!defined('BASE_PATH')) exit('Access Denied!');
/**
 * 
 * Enter description here ...
 * @author lichanghua
 *
 */
class CategoryController extends Admin_BaseController {
	
	public $actions = array(
		'listUrl' => '/Admin/Category/index',
		'addUrl' => '/Admin/Category/add',
		'addPostUrl' => '/Admin/Category/add_post',
		'editUrl' => '/Admin/Category/edit',
		'editPostUrl' => '/Admin/Category/edit_post',
		'deleteUrl' => '/Admin/Category/delete',
		'uploadUrl' => '/Admin/Category/upload',
		'uploadPostUrl' => '/Admin/Category/upload_post',
		'uploadImgUrl' => '/Admin/Category/uploadImg',
	);
	
	public $perpage = 20;
	/**
	 * 
	 * Enter description here ...
	 */
	public function indexAction() {
		$page = intval($this->getInput('page'));
		$perpage = $this->perpage;
		list($total, $sorts) = Gc_Service_Category::getList($page, $perpage);
		$this->assign('sorts', $sorts);
		$this->assign('pager', Common::getPages($total, $page, $perpage, $this->actions['listUrl']));
	}
	
	/**
	 * 
	 * edit an Category
	 */
	public function editAction() {
		$id = $this->getInput('id');
		$info = Gc_Service_Category::getCategory(intval($id));
		$this->assign('info', $info);
	}
	
	/**
	 * get an subjct by Category_id
	 */
	public function getAction() {
		$id = $this->getInput('id');
		$info = Gc_Service_Category::getCategory(intval($id));
		if(!$info) $this->output(-1, '操作失败.');
		$this->output(0, '', $info);
	}
	
	/**
	 * 
	 * Enter description here ...
	 */
	public function addAction() {
	}
	
	/**
	 * 
	 * Enter description here ...
	 */
	public function add_postAction() {
		$info = $this->getPost(array('sort', 'title', 'img'));
		$info = $this->_cookData($info);
		$result = Gc_Service_Category::addCategory($info);
		if (!$result) $this->output(-1, '操作失败');
		$this->output(0, '操作成功');
	}
	
	/**
	 * 
	 * Enter description here ...
	 */
	public function edit_postAction() {
		$info = $this->getPost(array('id', 'sort', 'title','img'));
		$info = $this->_cookData($info);
		$ret = Gc_Service_Category::updateCategory($info, intval($info['id']));
		if (!$ret) $this->output(-1, '操作失败');
		$this->output(0, '操作成功.'); 		
	}

	/**
	 * 
	 * Enter description here ...
	 */
	private function _cookData($info) {
		if(!$info['title']) $this->output(-1, '名称不能为空.'); 
		if(!$info['img']) $this->output(-1, '图标不能为空.'); 
		return $info;
	}
		
	/**
	 * 
	 * Enter description here ...
	 */
	public function deleteAction() {
		$id = $this->getInput('id');
		$info = Gc_Service_Category::getCategory($id);
		if ($info && $info['id'] == 0) $this->output(-1, '无法删除');
		Util_File::del(Common::getConfig('siteConfig', 'attachPath') . $info['img']);
		$result = Gc_Service_Category::deleteCategory($id);
		if (!$result) $this->output(-1, '操作失败');
		$this->output(0, '操作成功');
	}

	/**
	 * 
	 * Enter description here ...
	 */
	public function uploadAction() {
		$imgId = $this->getInput('imgId');
		$this->assign('imgId', $imgId);
		$this->getView()->display('common/upload.phtml');
		exit;
	}
	
	/**
	 * 
	 */
	public function uploadImgAction() {
		$ret = Common::upload('imgFile', 'sort');
		$webroot = Yaf_Application::app()->getConfig()->webroot;
		if ($ret['code'] != 0) die(json_encode(array('error' => 1, 'message' => '上传失败！')));
		exit(json_encode(array('error' => 0, 'url' => $webroot . '/attachs/' .$ret['data'])));
	}

	/**
	 * 
	 * Enter description here ...
	 */
	public function upload_postAction() {
		$ret = Common::upload('img', 'sort');
		$imgId = $this->getPost('imgId');
		$this->assign('code' , $ret['data']);
		$this->assign('msg' , $ret['msg']);
		$this->assign('data', $ret['data']);
		$this->assign('imgId', $imgId);
		$this->getView()->display('common/upload.phtml');
		exit;
    }
}