(function(a,b){a.app("Store",function(){a.mix(a.mods,{jm:[a.sysRef+"/lib/jquerymobile/jm.css",a.sysRef+"/lib/jquerymobile/jm.js"]});return{version:"0.6"}});a.mix(Store,{scrollPic:function(){if(!b("#mainfocus")[0]){return this}a.include([a.sysRef+"/lib/jtouchSwipe/jtouchSwipe.js","./~slideImg.js"],function(){b("#mainfocus").SlideImg({auto:true,loop:true})});return this},showMore:function(){var c=b(".JS-readMore");if(!c[0]){return this}c.find(".link").toggle(function(d){d.preventDefault();b(this).find("span").html("\u6536\u8d77<i>&gt;&gt;</i>");c.prev(".JS-hide").show().prev("p").hide()},function(d){d.preventDefault();b(this).find("span").html("\u5c55\u5f00<i>&gt;&gt;</i>");c.prev(".JS-hide").hide().prev("p").show()});return this},swapPic:function(){var f=b(".JS-swapPic");if(!f[0]){return this}var d=f.find("ul"),c=f.find("li").length,h=f.find("li").width(),e=0,g=c;d.width(h*c);a.use("jm",function(){f.find("#J_handle").change(function(){console.log(this.value)});d.bind("swipeleft",function(){h=f.find("li").width();d.width(h*c);var j=f.find(".pic-wrap").width(),i=h*c-j;g=Math.ceil(i/h);if(i<=0){g=0;d.animate({left:-h+"px"},500,function(){d.animate({left:0},500)});return}if(e==g){return}e++;d.animate({left:-(e*h)+"px"},500)});d.bind("swiperight",function(){h=f.find("li").width();d.width(h*c);var j=f.find(".pic-wrap").width(),i=h*c-j;g=Math.ceil(i/h);if(i<=0){g=0;d.animate({left:h+"px"},500,function(){d.animate({left:0},500)});return}if(e==0){return}e--;d.animate({left:-(e*h)+"px"},500)});b(window).bind("orientationchange",function(i){f.toggleClass("turn")})});return this},loadMore:function(){var d=b("#J_loadMore");if(!d[0]){return this}var c=2;d.click(function(e){e.preventDefault();if(d.hasClass("disable")){return}else{var f=d.attr("dt-ajaxUrl");d.addClass("disable").find("em").html('<img src="'+a.appRef+'/pic/load.gif" alt="" />');b.get(f,{page:c},function(i){var g=b.parseJSON(i),h="";c=g.data.curpage+1;a.foreach(g.data.list,function(k,j){h+='<li><a tj-cr="true" href="'+j.alink+'" class="intro clearfix"><div class="pic"><img src="'+j.img+'" alt="" /></div><div class="desc"><h2><strong>'+j.name+"</strong></h2><p><span>"+j.resume+'</span></p></div></a><a href="'+j.link+'" class="download"><span>\u4e0b\u8f7d</span></a></li>'});d.prev("ul").append(h);d.removeClass("disable").find("em").html("<span>\u70b9\u51fb\u52a0\u8f7d\u66f4\u591a</span>");if(!g.data.hasnext){d.addClass("disable")}})}});return this}});b(function(){Store.scrollPic().loadMore();Store.showMore();Store.swapPic();var c=b.trim(b("body").attr("dt-cr"));if(c){b("a[tj-cr=true]").live("click",function(d){d.preventDefault();location.href=c+"?url="+encodeURIComponent(this.href)});b("a[tj-cr=ajax]").live("click",function(d){b.ajax({url:c+"?url="+encodeURIComponent(this.href),dataType:"jsonp"})})}})})(ICAT,jQuery);