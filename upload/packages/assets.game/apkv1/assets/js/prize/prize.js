var lottery={index:-1,count:0,timer:0,speed:180,times:0,cycle:30,prize:-1,callBack:function(){},init:function(a){if($("#"+a).find("li.prize-unit").length>0){$lottery=$("#"+a);
$units=$lottery.find(".prize-unit");this.obj=$lottery;this.count=$units.length;}},roll:function(){var a=this.index;var c=this.count;var b=this.obj;$(b).find("#prize-grid"+a).removeClass("active");
a+=1;if(a>c-1){a=0;}$(b).find("#prize-grid"+a).addClass("active");this.index=a;return false;},setPrize:function(a){this.prize=a;},getPrize:function(){if(this.prize==-1){return undefined;
}else{return this.prize;}},stop:function(){this.callBack();},reset:function(){clearTimeout(this.timer);$("#prize-btn").removeClass("prize-btn-active");
$("#prize_wrap").find("#prize-grid"+this.index).removeClass("active");click=false;this.speed=180;this.index=-1;this.prize=-1;}};function roll(){lottery.times+=1;
lottery.roll();if(lottery.times>lottery.cycle+10&&lottery.prize==lottery.index){clearTimeout(lottery.timer);lottery.stop();lottery.prize=-1;lottery.times=0;
click=false;}else{if(lottery.times==lottery.cycle){if(lottery.getPrize()==undefined){lottery.cycle+=10;}}lottery.timer=setTimeout(roll,lottery.speed);}return false;
}var click=false;(function(){var c={networkError:"网络异常，请稍候重试",notLogin:"未登录，请先登录",underPoints:"您的积分不足",nameError:"收货人不能为空",phoneError:"请输入合法的联系电话",addressError:"收货地址不能为空",postSuccess:"提交成功",timeOut:"请求超时",postError:"请求异常，请刷新重试"};
var b={network:"gamehall.hasnetwork",alert:"gamehall.alert",logout:"gamehall.clearlogin",finish:"gamehall.finish",islogin:"gamehall.islogin",getPoint:"gamehall.daily.task",login:"gamehall.account",statis:"gamehall.sendstatis",boradcast:"gamehall.money.change",};
var a={intervalId:null,getUrlParam:function(d){var e=new RegExp("(^|&)"+d+"=([^&]*)(&|$)");var f=window.location.search.substr(1).match(e);if(f!=null){return unescape(f[2]);
}return"";},initPrizeScroll:function(){lottery.init("prize_wrap");var l=location.search,g=$("#acoin").attr("data-infpage").split(","),e=g[1]+l;$("#acoin").attr("data-infpage",g[0]+","+e);
var i=a.getUrlParam("uname"),f=a.getUrlParam("puuid"),d=a.getUrlParam("sp");$(".btn-points").click(function(){a.onEventAction(b.getPoint,{});});$("#prize-btn").click(function(){if(click||$(this).hasClass("prize-btn-active")){return;
}var n=$("#prize-totalPoints"),m=parseInt($("#prize-consumePoints").html(),10);if(parseInt(n.html(),10)<m){a.onEventAction(b.alert,{alertStr:c.underPoints});
return;}roll();click=true;$(this).addClass("prize-btn-active");var p={action:"lottery",object:"lottery"+prizeId};a.onEventAction(b.statis,p);var o=$(this).attr("data-ajaxUrl");
$.ajax({type:"POST",url:o,dataType:"json",timeout:5000,data:{token:token,puuid:f,uname:i,prizeId:prizeId,sp:d},success:function(s){if(!s||(typeof s=="string")||(!s.success)){lottery.reset();
var u=c.postError;if(s&&s.msg){u=s.msg;}a.onEventAction(b.alert,{alertStr:u});return;}var t=s.data;if(t.isLogin!=undefined&&t.isLogin==false){lottery.reset();
a.onEventAction(b.finish,{});a.onEventAction(b.logout,{});a.onEventAction(b.login,{});return;}if(t.underPoints&&t.underPoints==false){lottery.reset();a.onEventAction(b.alert,{alertStr:c.underPoints});
return;}if(t.prizeType!=undefined){a.onEventAction(b.boradcast,{});var v={action:"visit",object:"lotterypop",intersrc:"prize"+t.configId},q;if(t.prizeType==0){v={action:"visit",object:"lotterypop",intersrc:"lose"};
q=".J_noPrize";}else{if(t.prizeType==1){q=".J_entity";$("#name").val(t.receivingName);$("#phone").val(t.receivingPhone);$("#address").val(t.receivingAddress);
$("#submit").attr("data-ticket",t.ticket);$("#submit").attr("data-logId",t.logId);}else{if(t.prizeType==2){q=".J_acoin";$("#indate").html(t.indate+"天");
}else{if(t.prizeType==3){q=".J_points";}}}}var r=$(q);r.find("img").attr("src",t.prizeImg);r.find("#prizeName").html(t.prizeName);lottery.setPrize(parseInt(t.prizeIndex,10)-1);
lottery.callBack=function(){a.getBillboard();n.html(t.totalPoints);k(r);a.onEventAction(b.statis,v);};}},error:function(r,s){var q=c.networkError;if(s=="timeout"){q=c.timeOut;
}lottery.reset();a.onEventAction(b.alert,{alertStr:c.networkError});}});});$("body").delegate("#close","click",function(){var m=$(this).parent("div").parent("div");
h(m);lottery.reset();});$("body").delegate("#acoin","click",function(){var m=$(this).parent("div").parent("div");h(m);lottery.reset();});$("body").delegate("#continue","click",function(){var m=$(this).parent("div").parent("div");
h(m);setTimeout(function(){lottery.reset();$("#prize-btn").trigger("click");},300);});$("body").delegate("#submit","click",function(){var p=$("#name").val().trim(),n=$("#phone").val().trim(),m=$("#address").val().trim(),s=$(this).attr("data-ajaxUrl"),r=$(this).attr("data-ticket"),o=$(this).attr("data-logId");
if($.isEmptyObject(p)){a.onEventAction(b.alert,{alertStr:c.nameError});return;}var q=/^1[34578]{1}[0-9]{9}$/;if(!q.test(n)){a.onEventAction(b.alert,{alertStr:c.phoneError});
return;}if($.isEmptyObject(m)){a.onEventAction(b.alert,{alertStr:c.addressError});return;}$(this).addClass("hidden");$(".loading-btn").removeClass("hidden");
$.ajax({type:"POST",url:s,dataType:"json",data:{token:token,name:p,phone:n,address:m,ticket:r,logId:o},success:function(u){if(u.success){a.onEventAction(b.alert,{alertStr:c.postSuccess});
var t=$(".J_entity");h(t);}else{a.onEventAction(b.alert,{alertStr:c.networkError});}lottery.reset();$("#submit").removeClass("hidden");$(".loading-btn").addClass("hidden");
},error:function(){lottery.reset();a.onEventAction(b.alert,{alertStr:c.networkError});$("#submit").removeClass("hidden");$(".loading-btn").addClass("hidden");
}});});function j(m){m.preventDefault();}function k(m){$("body").bind("touchmove",j,false);var n=(3-document.body.scrollTop)+"px";m.show().animate({display:"block",bottom:n,},300,function(){$(".J_dialog").removeClass("invisible");
});}function h(n){$("body").unbind("touchmove");var m=n.height();n.animate({display:"block",bottom:-m,},300,function(){$(this).hide();$(".J_dialog").addClass("invisible");
});}},getBillboard:function(){var d=$("#rolling").attr("data-ajaxUrl");$.ajax({type:"POST",url:d,dataType:"json",data:{prizeId:prizeId,token:token},success:function(j){var h=j.data.list;
if(h&&h.length>0){var g="<ul>";for(var f=0,e=h.length;f<e;f++){g+='<li class="roll">'+h[f]+"</li>";}g+="</ul>";$("#rolling").html(g);$("#rolling").removeClass("invisible");
a.marquee();}}});},marquee:function(){var f=$("#rolling");var d=500;var e=3500;function g(){$(f).find("ul:first").animate({marginTop:"-32px"},d,function(){$(this).css({marginTop:"0px"}).find("li:first").appendTo(this);
});}if(a.intervalId!=null){clearInterval(a.intervalId);}a.intervalId=setInterval(g,e);},setDialogHeight:function(){$(".J_dialog").height($(document).height());
var f=[".J_noPrize",".J_points",".J_acoin",".J_entity"];for(var e=0,d=f.length;e<d;e++){var g=$(f[e]);g.css("bottom",-g.height());g.removeClass("invisible").hide();
}},openPageByViewType:function(){$("body").delegate("[data-infpage]","click",function(){var g=$(this).attr("data-infpage").split(",");if(!(window.gamehall||navigator.gamehall)){location.href=g[1];
return;}var k=$(this).attr("data-type"),h=$(this).attr("data-viewType"),d=$(this).attr("data-source")||"",e=g[1],l=g[0];var j={};j.args={},j.type="list";
j.args.newArgs={viewType:h,param:{url:e,title:l,source:d}};var f=errCal=function(){},i=window.gamehall?window.gamehall:navigator.gamehall;i.startlistactivity(f,errCal,JSON.stringify(j.args));
});},onEventAction:function(f,e){if(window.gamehall){var d=window.gamehall.onEvent(f,JSON.stringify(e));}else{if(f=="gamehall.alert"){alert(e.alertStr);
}}},getValueAction:function(f,e){if(window.gamehall){var d=window.gamehall.getValue(f,JSON.stringify(e));d=JSON.parse(d);return d;}},checkLoginStatus:function(){if(typeof isLogin=="undefined"){return;
}if(isLogin!=undefined&&(isLogin=="false"||isLogin==false)){this.onEventAction(b.finish,{});this.onEventAction(b.logout,{});this.onEventAction(b.login,{});
}},init:function(){this.checkLoginStatus();this.setDialogHeight();this.initPrizeScroll();this.getBillboard();this.openPageByViewType();}};$(function(){FastClick.attach(document.body);
a.init();});})();