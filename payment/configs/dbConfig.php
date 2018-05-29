<?php
if (!defined('BASE_PATH')) exit('Access Denied!');
$config = array(
	'test' => array(
			'default'=>array(
				'adapter' => 'PDO_MYSQL',
				'host'=>'',
				'username'=>'',
				'password'=>'',
				'dbname'=>'',
				'displayError'=>1
			)
			
	),
	'product' => array(
			'default'=>array(
				'adapter' => 'PDO_MYSQL',
				'host'=>'127.0.0.1',
				'username'=>'localhost',
				'password'=>'123456',
				'dbname'=>'goddness',
				'displayError'=>0
			)
	),
	'develop' => array(
			'default'=>array(
				'adapter' => 'PDO_MYSQL',
				'host'=>'127.0.0.1',
				'username'=>'root',
				'password'=>'123456',
				'dbname'=>'goddness',
				'displayError'=>1
			)
	)
);
return defined('ENV') ? $config[ENV] : $config['product'];