/*
 * Copyright 2011, ICAT JavaScript Library final version
 * MIT Licensed
 * @Author jndream221@gmail.com
 * @Time 2012-05-25 23:30:00
 */
(function(a,b){if(b[a]===undefined){b[a]={}}a=b[a];var e=navigator.userAgent,d=function(f){return !f?false:f.constructor===Function},c={browser:{safari:/webkit/i.test(e),opera:/opera/i.test(e),msie:/msie/i.test(e)&&!/opera/i.test(e),mozilla:/mozilla/i.test(e)&&!/(compatible|webkit)/i.test(e)},foreach:function(m,f,j){var h,k=0,l=m.length,g=l===undefined||d(m);if(j){if(g){for(h in m){if(f.apply(m[h],j)===false){break}}}else{for(;k<l;){if(f.apply(m[k++],j)===false){break}}}}else{if(g){for(h in m){if(f.call(m[h],h,m[h])===false){break}}}else{for(;k<l;){if(f.call(m[k],k,m[k++])===false){break}}}}},mix:function(l,j,n,h){if(!j||!l){return l}if(h===undefined){h=true}var g,m,f,k=function(t,q,o,i){if(i||!(t in q)){q[t]=o[t]}};if(n&&(f=n.length)){for(g=0;g<f;g++){m=n[g];if(m in j){k(m,l,j,h)}}}else{for(m in j){k(m,l,j,h)}}return l}};c.mix(a,c);delete c;a.mix(a,{version:"maxVersion",isIE:a.browser.msie,ieVersion:a.browser.msie?e.match(/MSIE(\s)?\d+/i)[0].replace(/MSIE(\s)?/i,""):-1,isDebug:/debug/i.test(window.location.href)?true:false,__APP_MEMBERS:["namespace"],__APP_INIT_METHODS:["__init"],__init:function(){var f=this,g=(function(){var k=[],i=/\w*(\.source)?\.(js|css)/g,h=document.getElementsByTagName("script"),n;for(var l=0,m;m=h[l++];){n=!!document.querySelector?m.src:m.getAttribute("src",4);if(n&&/tccat(\.source)?\.js/i.test(n)){a.refFile=a.refFile||m;k.push(m.getAttribute("data-appRef"));k.push(n.substring(0,n.indexOf("/tccat/")));break}}return k})();f.widget={};f.util={};f.sysRef=f.sysRef||g[1];f.sysPlugin=f.sysRef+"/icat/plugin/";f.appRef=f.appRef||g[0];f.appPlugin=f.appRef+"/assets/plugin/";f.loadContainer=f.loadContainer||{};f.modContainer={};f.mods={}},isFunction:d,isString:function(f){return !f?false:typeof f==="string"},isArray:function(f){return !f?false:f.constructor===Array},namespace:function(){var g=arguments,f=g.length,n=null,k,h,m;for(k=0;k<f;++k){m=(""+g[k]).split(".");n=this;for(h=(b[m[0]]===n)?1:0;h<m.length;++h){n=n[m[h]]=n[m[h]]||{}}}return n},app:function(g,j){var f=this,h=f.isString(g),i=h?b[g]||{}:g;f.mix(i,f,f.__APP_MEMBERS,true);f.mix(i,f.isFunction(j)?j():j);h&&(b[g]=i);return i},log:function(f){if(!this.isDebug){return}if(this.isIE){alert(f)}else{if(b.console!==undefined&&console.log){console.log(f)}}}});a.__init()})("ICAT",this);(function(b){var g=document,a=g.head||g.getElementsByTagName("head")[0]||g.documentElement,d=b.refFile,c=b.loadContainer,j=b.modContainer,e=function(l){if(!l){return}var k=l.replace(/\s/g,"");if(!k){return}k=/\.js|\.css/i.test(k)?k:k+".js";if(b.isDebug){k=/\.source/i.test(k)?k:k.replace(/\.js|\.css/g,/\.css/i.test(k)?".source.css":".source.js")}if(/\w?:\/\//.test(k)){return k}else{if(/\.\/(~)?/.test(k)){if(/\.\/\w+/.test(k)){k=k.replace(/\.\//g,b.appRef+"/")}if(/\.\/~/.test(k)){k=k.replace(/\.\/~/g,b.appPlugin)}}else{if(/~\w+/.test(k)){k=k.replace(/~/g,b.sysPlugin)}else{k=b.sysRef+"/"+k}}}return k};function h(k,m,l){this.loadQueue=k;this.callback=m||function(){};this.mod=l}h.prototype={start:function(){var k=this;if(k.loadQueue.length==0){return}var l=k.loadQueue[0],m=l.replace(/[\?#].*/,""),q=function(s,r){if(s.loadQueue.length>0){s.next()}else{if(s.callback&&b.isFunction(s.callback)){s.callback(r)}if(s.mod){j[s.mod]=true}}};k.loadQueue.shift();if(c[m]){q(k,b);return this}var o,n=n||m.replace(/.*\./g,"");if(n==="css"){o=g.createElement("link");o.setAttribute("type","text/css");o.setAttribute("rel","stylesheet");o.setAttribute("href",l)}else{if(n==="js"){o=g.createElement("script");o.setAttribute("type","text/javascript");o.setAttribute("src",l);o.setAttribute("async",true)}}if(!o){return}if(b.isIE){var p=setInterval(function(){try{document.documentElement.doScroll("left")}catch(r){return}clearInterval(p);if(n==="js"&&o.readyState){o.onreadystatechange=function(){if(o.readyState=="loaded"||o.readyState=="complete"){o.onreadystatechange=null;q(k,b);c[m]=true}}}a.appendChild(o)},1)}else{if(n==="js"){o.onload=function(){q(k,b);c[m]=true}}a.appendChild(o)}if(n==="css"){q(k,b);c[m]=true}},next:function(){var k=this;if(k.loadQueue.length>0){k.start(k.loadQueue[0])}}};b.mix(b,{include:function(n,m){if(!n||!n.length){return}var l=[],m=b.isString(n)||n.length==1?m:undefined;if(b.isString(n)){l.push(e(n))}else{if(b.isArray(n)){b.foreach(n,function(){l.push(e(this))})}else{return}}var k=new h(l,m).start();delete k},require:function(o,p,n){if(!o&&!p){return}if(j[o]){n(b)}else{var l=[];if(b.isString(p)){l.push(e(p))}else{if(b.isArray(p)){b.foreach(p,function(){l.push(e(this))})}}var k=new h(l,n,o).start();delete k}},use:function(l,k,p){var o=0,n=this,p=p||500,q=setInterval(function(){o+=5;if(o>=p){clearInterval(q);n.require(l,b.mods[l],k);return}if(!j[l]){return}clearInterval(q);k(b)},5)}});b.mix(b.mods,{linkage:["~linkage/dataIndustry.js","~linkage/dataArea.js","~linkage/core"],jqueryui:["~jqueryui/uicore.css","~jqueryui/bgiframe.js","~jqueryui/core"],validform:["~validform/vfskin.css","~validform/core"],highcharts:["~highcharts/hc"]});var i=b.refFile,f=i.getAttribute("main");if(f){f=f.indexOf("/")===-1?"./assets/js/"+f:"./"+f;b.include(f)}})(ICAT);