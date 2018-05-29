<?php
error_reporting(E_ALL && ~E_NOTICE);
define("BASE_PATH", dirname(__FILE__) . "/../../");
define("APP_PATH", BASE_PATH . "application/");
define("CRON_SUCCESS", date('Y-m-d H:i:s') . '__CRON_SUCCESS' . "\r\n");
define("ENV", get_cfg_var('GIONEE_ENV'));
$app = new Yaf_Application(BASE_PATH . "configs/application.ini", ENV);
$response = $app->bootstrap();