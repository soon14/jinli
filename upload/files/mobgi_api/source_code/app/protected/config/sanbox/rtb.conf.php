<?php

/**
 * @Encoding      :   UTF-8
 * @Author       :   hunter.fang
 * @Email         :   782802112@qq.com
 * @Time          :   2014-12-3 14:54:38
 * $Id: rtb.conf.php 62100 2014-12-3 14:54:38Z hunter.fang $
 */

$rtbconfig['RTB_ACOUNTING_METHOD']=array("1"=>"CPM","2"=>"CPC");
$rtbconfig['RTB_AD_TYPE']=array("0"=>"插页","1"=>"BANNER");
//RTB模式
$rtbconfig['RTB_MOBER']= array("AMAX", "ADVIEW","WAPS");
//价格倍数
$rtbconfig['RTB_PRICE_DOUBLE']= array("AMAX"=>10000, "ADVIEW"=>10000,"WAPS"=>10000);

//手机品牌映射表
$rtbconfig['MOBILE_MAKE']= array(
    'samsung'=>'三星',	
    'xiaomi'=>'小米',	
    'huawei'=>'华为',	
    'lenovo'=>'联想',	
    'bbk,vivo'=>'步步高',	 
    'coolpad,yulong'=>'酷派',	
    'oppo'=>'OPPO',	
    'htc'=>'HTC',	
    'zte'=>'中兴',	
    'gionee'=>'金立',	
    'sony'=>'索尼',	
    'meizu'=>'魅族',	
    'hisense'=>'海信',	
    'spread,sprd'=>'展讯',	
    'k-touch'=>'天语',	
    'motorola'=>'摩托罗拉',	
    'doov'=>'朵唯',	
    'lg'=>'LG',	
    'nubia'=>'NUBIA',	
    'apple'=>"苹果",
    '其它'=>'其它'	
    );

//导量配置设置　应用类型
$CAT_APP = array(
    0=>array(
        60001=>'图书与工具书',
        60002=>'商务',
        60003=>'动漫',
        60004=>'通讯',
        60005=>'教育',
        60006=>'娱乐',
        60007=>'财务',
        60008=>'游戏',
        60009=>'健康与健身',
        60010=>'软件与演示',
        60011=>'生活时尚',
        60012=>'动态壁纸',
        60013=>'媒体与视频',
        60014=>'医药',
        60015=>'音乐与音频',
        60016=>'新闻杂志',
        60017=>'个性化',
        60018=>'摄影',
        60019=>'效率',
        60020=>'购物',
        60021=>'社交',
        60022=>'体育',
        60023=>'工具',
        60024=>'交通运输',
        60025=>'旅游与本地出行',
        60026=>'天气',
        60027=>'小部件',
        60028=>'游戏/街机与动作',
        60029=>'游戏/解谜问答',
        60030=>'游戏/纸牌与赌场',
        60031=>'游戏分类—休闲游戏',
        60032=>'游戏/动态壁纸',
        60033=>'游戏/竞速',
        60034=>'游戏/体育',
        60035=>'游戏/小部件'
    ),
    1=>array(
        '应用'=>array(
            '影音图像'=>array(
                10101=>'音乐播放',
                10102=>'拍照视频',
                10103=>'美化',
                10104=>'影音编辑',
                10105=>'图像编辑',
                10106=>'视频播放器',
                10107=>'在线视频',
                10108=>'k歌',
                10109=>'录音',
                10110=>'电台',
                10111=>'电视',
                10100=>'其它',
            ),
            '办公理财'=>array(
                10201=>'办公',
                10202=>'商务',
                10203=>'名片',
                10204=>'理财',
                10205=>'证券',
                10206=>'银行',
                10207=>'彩票',
                10208=>'记账',
                10200=>'其它',
            ),
            '系统软件'=>array(
                10301=>'性能检测',
                10302=>'系统',
                10303=>'插件',
                10304=>'输入法',
                10300=>'其它',

            ),
            '实用软件'=>array(
                10401=>'工具',
                10402=>'无线流量',
                10403=>'穿戴设备',
                10404=>'手电筒',
                10405=>'备份',
                10400=>'其它',
            ),
            '通讯辅助'=>array(
                10501=>'通讯',
                10502=>'聊天',
                10503=>'婚恋',
                10504=>'交友',
                10505=>'社交',
                10506=>'短信',
                10507=>'拨号',
                10508=>'邮箱',
                10500=>'其它',
            ),
            '网络应用'=>array(
                10601=>'浏览器',
                10602=>'WEB工具',
                10603=>'网盘',
                10604=>'微博工具',
                10605=>'论坛访问',
                10600=>'其它',
            ),
            '安全软件'=>array(
                10701=>'安全防护',
                10702=>'监控',
                10700=>'其它',
            ),
            '阅读图书'=>array(
                10801=>'阅读器',
                10802=>'有声读物',
                10803=>'图册',
                10804=>'漫画',
                10805=>'杂志',
                10806=>'新闻',
                10807=>'资讯',
                10808=>'报纸',
                10800=>'其它',
            ),
            '生活购物'=>array(
                10901=>'天气',
                10902=>'幽默',
                10903=>'优惠',
                10904=>'美食',
                10905=>'二维码',
                10906=>'日历',
                10907=>'购物',
                10908=>'支付比价',
                10909=>'时钟',
                10910=>'便民',
                10911=>'时尚',
                10912=>'电影票',
                10913=>'演唱会',
                10914=>'美容',
                10900=>'其它',
            ),
            '旅行地图'=>array(
                11001=>'地图',
                11002=>'导航',
                11003=>'出行',
                11004=>'旅游',
                11005=>'酒店',
                11006=>'票务',
                11007=>'火车票',
                11008=>'地铁',
                11009=>'公交',
                11010=>'机票',
                11000=>'其它',
            ),
            '学习教育'=>array(
                11101=>'翻译',
                11102=>'字典',
                11103=>'教育',
                11104=>'参考',
                11105=>'学习',
                11106=>'英文',
                11107=>'外语',
                11108=>'课程记事',
                11109=>'日程',
                11100=>'其它',
            ),
            '主题个性'=>array(
                11201=>'铃声',
                11202=>'来电',
                11203=>'锁屏',
                11204=>'主题',
                11205=>'壁纸',
                11206=>'桌面',
                11207=>'字体',
                11208=>'表情',
                11200=>'其它',
            ),
            '医疗健康'=>array(
                11301=>'健康',
                11302=>'医疗',
                11303=>'母婴',
                11304=>'养生',
                11305=>'运动',
                11300=>'其它',

            ),
            '其它'=>array(
                10000=>'其它',
            ),
        ),
        '游戏'=>array(
            '角色扮演'=>array(
                20101=>'RPG',
                20102=>'角色扮演',
                20103=>'RPG网游',
                20104=>'中国风',
                20105=>'日韩系',
                20106=>'冒险',
                20107=>'欧美系',
                20108=>'精美3D',
                20109=>'仙侠',
                20100=>'其它',
            ),
            '动作格斗'=>array(
                20201=>'格斗',
                20202=>'横版',
                20203=>'街机',
                20204=>'躲避',
                20200=>'其它',
            ),
            '体育竞技'=>array(
                20301=>'运动',
                20302=>'跑酷',
                20303=>'跳跃',
                20304=>'赛车',
                20305=>'摩托',
                20306=>'足球',
                20307=>'篮球',
                20308=>'台球',
                20309=>'极限',
                20300=>'其它',
            ),
            '射击飞行'=>array(
                20401=>'射击',
                20402=>'狙击',
                20403=>'坦克',
                20404=>'战争',
                20405=>'太空',
                20406=>'打飞机',
                20407=>'直升机',
                20400=>'其它',
            ),
            '策略回合'=>array(
                20501=>'策略',
                20502=>'经营',
                20503=>'养成',
                20504=>'三国',
                20505=>'防守',
                20506=>'塔防',
                20507=>'开罗',
                20500=>'其它',
            ),
            '冒险模拟'=>array(
                20601=>'冒险',
                20602=>'逃脱',
                20603=>'飞行模拟',
                20604=>'模拟经营',
                20600=>'其它',
            ),
            '休闲趣味'=>array(
                20701=>'休闲',
                20702=>'消除',
                20703=>'解密',
                20704=>'音乐',
                20705=>'物理',
                20706=>'捕鱼',
                20707=>'会说话',
                20700=>'其它',
            ),
            '棋牌益智'=>array(
                20801=>'麻将',
                20802=>'桌游',
                20803=>'棋类',
                20804=>'益智',
                20805=>'斗地主',
                20806=>'纸牌',
                20807=>'德州扑克',
                20809=>'网络卡牌',
                20800=>'其它',
            ),
            '其它'=>array(
                20000=>'其它',
            ),
        ),
        
    ),
    2=>array(
        1=>'美女两性',
        2=>'影音媒体',
        3=>'桌面美化',
        4=>'新闻阅读',
        5=>'图片漫画',
        6=>'生活服务',
        7=>'系统工具',
        8=>'虚拟定位',
        9=>'办公学习',
        10=>'积分兑换',
        11=>'角色扮演',
        12=>'动作街机',
        13=>'飞行射击',
        14=>'体育竞技',
        15=>'棋牌竞猜',
        16=>'经营策略',
        17=>'休闲益智',
        18=>'网络游戏'
    ),
);

//运营商
$CARRIEROPERATOR = array(
    0=>array(
        '46000,46002,46007'=>'移动',
        '46001,46006'=>'联通',
        '46003,46005'=>'电信',
        '46004,46020'=>'其它',
    ),
    1=>array(
        '46000,46002,46007'=>'移动',
        '46001,46006'=>'联通',
        '46003,46005'=>'电信',
        '46004,46020'=>'其它',
    ),
);

//网络环境
$NETWORK_ENVIRONMENT = array(
    0=>array(
        1 =>'WIFI网络',
        3 =>'2G',
        4 =>'3G',
        5 =>'4G',
        '0,2' =>'未知',
    //    2 =>'蜂窝数据网络 - 未知', //汇总到未知
    ),
    1=>array(
        2 =>'WIFI网络',
        4 =>'2G',
        5 =>'3G',
        6 =>'4G',
        '0,1,3' =>'未知',
    //    2 =>'蜂窝数据网络 - 未知', //汇总到未知
    )
);

//屏幕方向 
$SCREEN_ORIENTATION  = array(
    0=>array(
        '1'=>'竖屏',
        '2'=>'横屏',
    ),
    1=>array(
        '0'=>'竖屏',
        '1'=>'横屏',
    ),
);


$rtbconfig['STANDARD_1']['CAT_APP'] = $CAT_APP[0];
$rtbconfig['STANDARD_1']['CARRIEROPERATOR'] = $CARRIEROPERATOR[0];
$rtbconfig['STANDARD_1']['NETWORK_ENVIRONMENT'] = $NETWORK_ENVIRONMENT[0];
$rtbconfig['STANDARD_1']['SCREEN_ORIENTATION'] = $SCREEN_ORIENTATION[0];

$rtbconfig['STANDARD_2']['CAT_APP'] = $CAT_APP[1];
$rtbconfig['STANDARD_2']['CARRIEROPERATOR'] = $CARRIEROPERATOR[1];
$rtbconfig['STANDARD_2']['NETWORK_ENVIRONMENT'] = $NETWORK_ENVIRONMENT[1];
$rtbconfig['STANDARD_2']['SCREEN_ORIENTATION'] = $SCREEN_ORIENTATION[1];

$rtbconfig['STANDARD_3']['CAT_APP'] = $CAT_APP[2];
$rtbconfig['STANDARD_3']['CARRIEROPERATOR'] = $CARRIEROPERATOR[1];
$rtbconfig['STANDARD_3']['NETWORK_ENVIRONMENT'] = $NETWORK_ENVIRONMENT[1];
$rtbconfig['STANDARD_3']['SCREEN_ORIENTATION'] = $SCREEN_ORIENTATION[1];

//标准
$rtbconfig["RTBCHANNEL"]['Android_AMAX'] ="MJ0S0N30002";
$rtbconfig["RTBCHANNEL"]['Android_ADVIEW'] ="MJ0S0N40002";
$rtbconfig["RTBCHANNEL"]['Android_WAPS'] ="MJ0S0N50001";
$rtbconfig["RTBCHANNEL"]['IOS_AMAX'] ="";
$rtbconfig["RTBCHANNEL"]['IOS_ADVIEW'] ="";
$rtbconfig["RTBCHANNEL"]['IOS_WAPS'] ="MJ0S0N50101";

//标准
$rtbconfig['STANDARD'] = array(
    "AMAX"=>array(
        "IOS"=>"STANDARD_1", 
        "Android"=>"STANDARD_1"
        ),
    "ADVIEW"=>array(
        "IOS"=>"STANDARD_2", 
        "Android"=>"STANDARD_2"
        ),
    "WAPS"=>array(
        "IOS"=>"STANDARD_3", 
        "Android"=>"STANDARD_3"
        ),
);

//屏幕方向 
$rtbconfig['SCREEN_ORIENTATION']= array(
    '1'=>'竖屏',
    '2'=>'横屏',
    );

//地理位置 
$rtbconfig['GEOGRAPHICAL_POSITION']= array(
        '北京市','天津市','重庆市','上海市','河北省','山西省','辽宁省','吉林省','黑龙江省','江苏省',
        '浙江省','安徽省','福建省','江西省','山东省','河南省','湖北省','湖南省','广东省','海南省',
        '四川省','贵州省','云南省','陕西省','甘肃省','青海省','台湾省',
        '内蒙古','广西','宁夏','新疆','西藏',
        '香港特别行政区','澳门特别行政区',
        '其它'
    );


