(function(iCat,$){function notify(){this.sHtml='<div class="msgMode popWrap hide" style="opacity:0;left:'+this.getPos().left+"px;top:"+this.getPos().top+'px;"></div>';this.wrap=$("#page");this.count=1}notify.prototype={construtor:notify,templete:function(){$("#page").append(this.sHtml)},message:function(str,retval){var _msgMode=$(".msgMode");if(this.count==1){this.templete()}this.count++;$(".msgMode").html(str).removeClass("hide").addClass("show").animate({opacity:1},300,"linear");if($(".msgMode").hasClass("show")){setTimeout(function(){$(".msgMode").animate({opacity:0},300,"linear",function(){$(".msgMode").removeClass("show").addClass("hide")})},1500)}return retval},getPos:function(){var w=$(window).width(),h=$(window).height();return{left:w/2-80,top:h/2+100}}};iCat.app("MH",function(){iCat.inc("../tempcore.js");return{version:"1.1",getStyle:function(element,property){var camelize=function(s){return s.replace(/-(\w)/g,function(strMatch,p1){return p1.toUpperCase()})};if(arguments.length!=2){return false}var value=element.style[camelize(property)];if(!value){if(document.defaultView&&document.defaultView.getComputedStyle){var css=document.defaultView.getComputedStyle(element,null);value=css?css.getPropertyValue(property):null}else{if(element.currentStyle){value=element.currentStyle[camelize(property)]}}}return value=="auto"?"":value},scrollLoad:(function(options){var defaults=(arguments.length==0)?{src:"xSrc",time:300}:{src:options.src||"xSrc",time:options.time||300};var _init=function(){var offsetPage=window.pageYOffset?window.pageYOffset:window.document.documentElement.scrollTop,offsetWindow=offsetPage+Number(window.innerHeight?window.innerHeight:document.documentElement.clientHeight),docImg=document.images,_len=docImg.length;if(!_len){return false}for(var i=0;i<_len;i++){var attrSrc=docImg[i].getAttribute(defaults.src),o=docImg[i],tag=o.nodeName.toLowerCase();if(o){postPage=o.getBoundingClientRect().top+window.document.documentElement.scrollTop+window.document.body.scrollTop;postWindow=postPage+Number(MH.getStyle(o,"height").replace("px",""));if((postPage>offsetPage&&postPage<offsetWindow)||(postWindow>offsetPage&&postWindow<offsetWindow)){if(tag==="img"&&attrSrc!==null){o.setAttribute("src",attrSrc);o.removeAttribute("class")}o=null}}}$(window).bind("scroll.lazyload",function(){setTimeout(function(){_init()},defaults.time)})};return _init()}),}});iCat.mix(MH,{init:function(){MH.slidePic();MH.addItem();MH.dialog();MH.waterfall();MH.loginForm();MH.common();MH.linkClick();$("body").delegate("*","click",function(evt){var _this=$(this),el=_this.closest("*[data-link]");if(el.attr("data-link")&&el.attr("data-type")=="url"){window.location.href=el.attr("data-link")}});var backBtn=$("header .back");if(backBtn[0]){backBtn.bind("click",function(evt){evt.preventDefault();window.gnbrowser?window.gnbrowser.goBack():history.back(-1)})}$("a[data-jsonargus]").click(function(){var strJson=this.getAttribute("data-jsonArgus"),data=eval("("+strJson+")"),ret=window.prompt("gn://GNLocalAppData/startApp",strJson);if(!ret){location.href=data.weburl}})},linkClick:function(){$("body").delegate("*","touchStart",function(evt){var _this=$(this),el=_this.closest("*[data-link]");if(el.attr("data-link")&&el.attr("data-type")=="url"){el.addClass("touch-bg-color")}});$("body").delegate("*","touchStart",function(evt){var _this=$(this),el=_this.closest("*[data-link]");if(el.attr("data-link")&&el.attr("data-type")=="url"){el.removeClass("touch-bg-color")}});$("body").delegate("*","touchStart",function(evt){var _this=$(this),el=_this.closest("*[data-link]");if(el.attr("data-link")&&el.attr("data-type")=="url"){el.removeClass("touch-bg-color")}})},slidePic:function(){if(!$(".homeBanner,.banner, .cla-menu .wrap, .pro-slider .in-slider-cont, .pic-show .wrap")[0]){return}iCat.incfile(["/zepto/touchSwipe.js","../slidePic.js"],function(){$(".banner").slidePic({slideItem:".pic>a",circle:true,auto:true,touchSwitch:false});$(".cla-menu .wrap").slidePic({slidePanel:".list",slideItem:".list li",prev:".cla-menu .prevBtn",next:".cla-menu .nextBtn",handleItem:"",fixCurrent:function(){var slideItem=$(".cla-menu .list li"),curIndex=0;$.each(slideItem,function(i,v){var child=$(this).find(".selected");if(child.length){curIndex=i}});return curIndex}});$(".pro-slider .in-slider-cont").slidePic({slidePanel:"ul",slideItem:"ul li",handlePanel:".in-slider-status",handleItem:".in-slider-status span",prev:".in-slider-prev",next:".in-slider-next"});$(".pic-show .wrap").slidePic({slidePanel:".list",slideItem:".list li"})})},addItem:function(){var oWrap=null;if($("#download-app-list")[0]){oWrap=$("#download-app-list")}else{oWrap=$(".J_itemWrap")}var url=oWrap.attr("data-ajaxUrl");var info={curpage:0,hasnext:0,num:1};if(!oWrap[0]){return}info.curpage=$("#curInfo").attr("curpage");info.hasnext=$("#curInfo").attr("hasnext");if(info.hasnext==false){return}$(document).bind("scroll.loaditem",function(){if(info.hasnext==false){return}$.post(url,{page:(+info.curpage)+1,token:token},function(data){var odata=data;if(odata.data.hasnext==false){if(info.num!=1){return}info.num=2;info.curpage=odata.data.curpage;info.hasnext=odata.data.hasnext;oWrap.append(template("J_itemView",odata))}else{if(info.curpage!=odata.data.curpage){info.curpage=odata.data.curpage;info.hasnext=odata.data.hasnext;oWrap.append(template("J_itemView",odata))}}},"json");MH.scrollLoad()})},dialog:function(){var dw=$(window).width(),dh=$(window).height(),box=$(".J_dialogBox"),w,x_pos,flag=false;if(!box[0]){return}if(box.css("display")=="none"){w=box.css({"margin-left":"-4999px"}).show().width();x_pos=(dw-w)/2;box.css({"margin-left":"0"}).hide()}$(window).bind("resize",function(){dw=$(window).width(),dh=$(window).height();w=box.width();x_pos=(dw-w)/2;box.css("left",x_pos+"px")});function F_postAjaxDialog(url,param,paramType){var ajaxurl=url||null,param=param||{token:token},paramType=paramType||"json",rewardUrl=$("#J_reward_btn").attr("data-url"),checkInFlag=0;$.post(ajaxurl,param,function(data){var d=data;if(d.success){if(d.data.type=="redirect"&&d.data.url){location.href=d.data.url;return}if((d.data.maxCheckNum==d.data.hadCheckNum)&&(d.data.picId==param.picId)){$(".J_checkInDialog").addClass("disabled");$(".J_dialogBox .btn").text("\u6211\u77e5\u9053\u4e86");checkInFlag=1}else{$(".cell ul li").each(function(i){if(i<d.data.hadCheckNum){$(this).find("span").not(".done").addClass("done")}});$(".J_checkInDialog").text("\u5df2\u7b7e\u5230").unbind("click");$(".J_dialogBox .btn").text("\u597d\u7684")}flag=true}else{$(".J_checkInDialog").removeClass("disabled");flag=false}box.find("p").html(d.msg);if(d.data.isLogin=="0"){$(".J_checkInDialog").addClass("disabled");$(".J_dialogBox .btn-wrap").html('<span id="J_cancel_btn" class="btn gray w50">\u53d6\u6d88</span><span class="btn gray w50" id="J_login_btn">\u767b\u5f55</span>');box.css("left",x_pos+"px").show();$("#J_cancel_btn").live("click",function(){box.hide();$(".J_checkInDialog").removeClass("disabled")});$("#J_login_btn").live("click",function(){box.hide();$(".J_checkInDialog").removeClass("disabled");location.href=d.data.loginUrl})}else{if(checkInFlag==1){box.find(".btn-wrap").hide();box.find("p").css("border-bottom","none").html("\u60a8\u5df2\u7ecf\u62fc\u5b8c\u6574\u5f20\u7b7e\u5230\u62fc\u56fe\uff0c\u73b0\u5728\u53ef\u4ee5\u53bb\u5151\u5956\u4e86\uff01");box.css("left",x_pos+"px").show();setTimeout(function(){box.hide();$(".JS-dbMask").hide();$("#J_reward_btn").removeClass("disabled").attr("href",rewardUrl);$("#J_reward_btn").bind("click",function(){$(this).addClass("disabled")});$(".cell ul li span").addClass("done")},3000)}else{box.css("left",x_pos+"px").show();$(".J_dialogBox .btn").bind("click",function(evt){box.hide()})}}},paramType)}function F_hiddenDialog(){box.css("left",x_pos+"px").show().find(".btn").bind("click",function(){$(".JS-dbMask").hide();box.hide()})}$(".J_showDialog").click(function(evt){evt.preventDefault();if(this.getAttribute("data-ajaxUrl")){var ajaxurl=this.getAttribute("data-ajaxUrl");F_postAjaxDialog(ajaxurl)}else{$("form input").blur();F_hiddenDialog()}});$(".J_checkInDialog").bind("click",function(evt){evt.preventDefault();if($(this).hasClass("disabled")){return}$(this).addClass("disabled");if(this.getAttribute("data-ajaxUrl")){var ajaxurl=this.getAttribute("data-ajaxUrl"),picId=this.getAttribute("data-picId");F_postAjaxDialog(ajaxurl,{picId:picId,token:token})}else{F_hiddenDialog()}});$("#J_prizeBtn").bind("click",function(evt){evt.preventDefault();if($(this).hasClass("disabled")){return}$(this).addClass("disabled");if($(this).attr("data-ajaxUrl")){var ajaxurl=this.getAttribute("data-ajaxUrl");var oprizeList=$(".prize-list ul li");$.post(ajaxurl,{token:token},function(data){var odata=data;if(odata.success){if(odata.data.prizeId){oprizeList.each(function(i){var localPrizeId=$(this).find("img").attr("data-prizeId");if(localPrizeId==odata.data.prizeId){$(this).find("img").animate({width:"8rem",height:"8rem","box-shadow":"2px 2px 5px rgba(0,0,0,.5)",left:"-0.8rem",top:"-0.8rem","z-index":100},300,"ease-in-out",function(){setTimeout(function(){var str=odata.data.redirectUrl.indexOf("?")>-1?"&":"?";location.href=odata.data.redirectUrl+str+"prize_id="+odata.data.prizeId},2000)},1500)}else{$(this).find("span").css({opacity:0.3,background:"none"})}})}else{box.find("p").html("\u672a\u4e2d\u5956\uff0c\u4e0b\u6b21\u518d\u8bd5\u8bd5\u624b\u6c14\uff01");box.css("left",x_pos+"px").show();$(".J_dialogBox .btn").live("click",function(evt){box.hide()})}}else{box.find("p").html(odata.msg);box.css("left",x_pos+"px").show();$(".J_dialogBox .btn").live("click",function(evt){box.hide()})}},"json")}});$("#J_update_userInfo").bind("click",function(evt){evt.preventDefault();console.log($(this).attr("data-ajaxUrl"));if($(this).attr("data-ajaxUrl")){var ajaxurl=$(this).attr("data-ajaxUrl");var flag=false;var formData={token:token,realname:$("input[name=realname]").val(),mobile:$("input[name=mobile]").val(),qq:$("input[name=qq]").val(),address:$("input[name=address]").val()};$.post(ajaxurl,formData,function(data){var odata=data;console.log(odata);if(odata.success){box.find("p").html(odata.msg);if(odata.data.redirectUrl){flag=true}}else{box.find("p").html(odata.msg);flag=false}box.css("left",x_pos+"px").show();$(".J_dialogBox .btn").live("click",function(evt){if(flag===true){location.href=odata.data.redirectUrl}else{box.hide()}})},"json")}});return this},loginForm:function(){var info=new notify();var oEl={username:document.querySelector("#J_UserNameTxt"),password:document.querySelector("#J_PassWordTxt"),passshow:document.querySelector(".J_showText"),plaintxt:document.querySelector(".J_ctrlShow")};if(oEl.plaintxt){oEl.plaintxt.addEventListener("click",function(){if(this.checked===true){oEl.password.style.display="none";oEl.passshow.style.display="block";oEl.passshow.value=oEl.password.value}else{oEl.password.style.display="block";oEl.passshow.style.display="none";oEl.password.value=oEl.passshow.value}},false)}$("#J_login").submit(function(evt){evt.preventDefault();if(oEl.username.value==""){return info.message("\u8bf7\u8f93\u5165\u624b\u673a\u53f7\uff01",false)}if(oEl.plaintxt){if(oEl.plaintxt.checked){oEl.password.value=oEl.passshow.value}}if(oEl.password.value==""){return info.message("\u8bf7\u8f93\u5165\u5bc6\u7801\uff01",false)}if(oEl.password.value!=""&&oEl.password.value.length<6){return info.message("\u5bc6\u7801\u81f3\u5c116\u4f4d\uff01",false)}oEl.actionUrl=$(this).attr("action");$.post(oEl.actionUrl,{username:oEl.username.value,password:oEl.password.value,token:token},function(data){var d=data;if(d.success==false){return info.message(d.msg,false)}else{if(info.message(d.msg,true)){if(d.data.type=="redirect"&&d.data.url){setTimeout(function(){location.href=d.data.url},2000)}}}},"json")})},waterfall:function(){var oWrap=$(".pic-box"),oLi=[];var info={curpage:0,hasnext:0,num:1};var oFragment=document.createDocumentFragment();var url=$(".pic-box").attr("data-ajaxUrl"),morebtn=$(".chartlet .btn");info.curpage=$("#curInfo").attr("curpage");info.hasnext=$("#curInfo").attr("hasnext");if(!oWrap[0]){return}if(info.hasnext==false){morebtn.show();return}else{morebtn.hide()}$(window).bind("scroll.loaditem",function(){if(info.hasnext==false){console.log(info.curpage);morebtn.show();return}$.post(url,{page:parseInt(info.curpage)+1,token:token},function(data){var odata=data;if(odata.success){if(odata.data.hasnext==false){if(info.num!=1){return}info.num=2;info.curpage=odata.data.curpage;info.hasnext=odata.data.hasnext;$("#curInfo").attr("curpage",odata.data.curpage);$("#curInfo").attr("hasnext",odata.data.hasnext);$(oFragment).append(template("J_picItemView",odata));oLi=oFragment.querySelectorAll("li");for(var i=0,len=oLi.length;i<len;i++){var oLwrap=$(".pic-box .l-wrap ul"),oRwrap=$(".pic-box .r-wrap ul");if(oLwrap.height()>oRwrap.height()){oRwrap.append(oLi[i])}else{oLwrap.append(oLi[i])}}}else{if(info.curpage!=odata.data.curpage){info.curpage=odata.data.curpage;info.hasnext=odata.data.hasnext;$(oFragment).append(template("J_picItemView",odata));oLi=oFragment.querySelectorAll("li");for(var i=0,len=oLi.length;i<len;i++){var oLwrap=$(".pic-box .l-wrap ul"),oRwrap=$(".pic-box .r-wrap ul");if(oLwrap.height()>oRwrap.height()){oRwrap.append(oLi[i])}else{oLwrap.append(oLi[i])}}}}}},"json");MH.scrollLoad()})},common:function(){var oloadMore=$("#J_load_more"),oexpand=$("#J_box_expand"),ocollapse=$("#J_box_collapse"),ospan=oloadMore.find("span");oloadMore.bind("click",function(){if(ospan.hasClass("expend")){ospan.removeClass("expend");ospan.html("\u5c55\u5f00<i>&gt;&gt;</i>");ocollapse.show();oexpand.hide()}else{ospan.addClass("expend");ospan.html("\u6536\u8d77<i>&gt;&gt;</i>");oexpand.show();ocollapse.hide()}})}});$(function(){MH.init()})})(ICAT,Zepto);