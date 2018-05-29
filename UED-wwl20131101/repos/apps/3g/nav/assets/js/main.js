/*!
 * Copyright 2011~2013, ICAT JavaScript Library v1.1.4
 * https://github.com/valleykid/icat
 *
 * Copyright (c) 2013 valleykid
 * Licensed under the MIT license.
 *
 * @Author valleykiddy@gmail.com
 * @Time 2013-03-02 15:30:00
 */
(function(){var n=this,k=document,h={version:"1.1.4"};if(typeof exports!=="undefined"){if(typeof module!=="undefined"&&module.exports){exports=module.exports=h}exports.ICAT=h}else{n.ICAT=h}n.SHIM=n.SHIM||{};h.mix=SHIM.mix||function(a,b,f,c){if(!b||!a){return a}if(!c){c=true}var d,g,e;if(f&&(e=f.length)){for(d=0;d<e;d++){g=f[d];if(g in b){if(c||!(g in a)){a[g]=b[g]}}}}else{for(g in b){if(c||!(g in a)){a[g]=b[g]}}}return a};h.mix(Array.prototype,{contain:function(a){return this.indexOf(a)==-1?false:true},remove:function(a){var b=this;b.forEach(function(d,c){if(d===a){b.splice(c,1)}});return b},unique:function(){var c=this,a={},b=[];c.forEach(function(d){if(!a[d]){b.push(d);a[d]=true}});return b}});var i=location.href;["Function","String","Object","Array","Number","Boolean","Undefined","Null"].forEach(function(a){h["is"+a]=function(b){return Object.prototype.toString.call(b)==="[object "+a+"]"}});h.mix(h,{DebugMode:/debug/i.test(i),DemoMode:/localhost|demo/i.test(i),isEmptyObject:function(a){for(var b in a){return false}return true},isjQueryObject:function(a){return typeof $!=="undefined"&&a instanceof $},foreach:function(f,e,b){var c,a=0,g=f.length,d=g===undefined||h.isString(f)||h.isFunction(f);if(b){if(d){for(c in f){if(e.apply(f[c],b)===false){break}}}else{for(;a<g;){if(e.apply(f[a++],b)===false){break}}}}else{if(d){for(c in f){if(e.call(f[c],c,f[c])===false){break}}}else{for(;a<g;){if(e.call(f[a],a,f[a++])===false){break}}}}},Class:function(){var d=arguments,f=d.length;if(!f){return}if(f===1){if(!h.isObject(d[0])){return}var e=d[0],b=function(){e.Create.apply(this,arguments)};h.foreach(e,function(g,p){if(g!="Create"){b.prototype[g]=p}});return b}else{if(!h.isString(d[0])&&!h.isObject(d[1])){return}var a=d[0],e=d[1],c=d[2]||n,b=function(){e.Create.apply(this,arguments)};h.foreach(e,function(g,p){if(g!="Create"){b.prototype[g]=p}});return c[a]=b}},widget:function(a,b){this.Class(a,b,h.widget)},util:function(b,a){if(h.isString(b)){h.util[b]=a}else{h.mix(h.util,b)}},namespace:function(){var b=arguments,c=b.length,d=null,f,a,e;for(f=0;f<c;++f){e=(""+b[f]).split(".");d=this;for(a=(n[e[0]]===d)?1:0;a<e.length;++a){d=d[e[a]]=d[e[a]]||{}}}return d},app:function(d,a){var c=h.isString(d),b=c?n[d]||{}:d;h.mix(b,h,["namespace"],true);h.mix(b,h.isFunction(a)?a():a);c&&(h.app[d]=n[d]=b);return b},log:function(a){if(k.all){n.console!==undefined&&console.log?console.log(a):alert(a)}else{try{__$abc_ICAT()}catch(b){var c=b.stack.split("\n")[2];c=c.replace(/.*[\(\s]|\).*/g,"").replace(/(.*):(\d+):\d+/g,"$1  line $2:\n");console.log(c,a)}}}});var l=Array.prototype.slice,m=function(a){if(!a||!h.isString(a)){return a}if(/\:[\d\*]+/.test(a)){a=a.trim().replace(/\:([\d\*]+)\s*/g,"|$1|").replace(/\|$/g,"");return a.split("|")}else{return a}},j=function(c,g,d,b,e){var f,a=l.call((e||k).querySelectorAll(c));if(!d){f=g=="*"?a:a[g]}else{if(g=="*"){f=[];a.forEach(function(p){b=="*"?f=f.concat(l.call(p.querySelectorAll(d))):f.push(p.querySelectorAll(d)[b||0])})}else{f=l.call(a[g].querySelectorAll(d));f=b=="*"?f:f[b||0]}}return f};h.util({parentIfText:function(a){return"tagName" in a?a:a.parentNode},matches:SHIM.matches||function(a,e){if(h.isjQueryObject(a)){return a.closest(e).length>0}else{if(!e||a==null||a==k.body.parentNode||a==k){return}var d=k.documentElement.webkitMatchesSelector,b=false;if(h.isString(e)){b=d.call(a,e)}else{for(var c=0;c<e.length;c++){b=d.call(a,e[c]);if(b){break}}}return b}},queryOne:function(a,b){if(!a){return[k][0]}if(h.isString(a)){a=m(a);if(h.isString(a)){return l.call((b||k).querySelectorAll(a))[0]}else{if(a.length>4){return}return j(a[0],a[1],a[2],a[3],b)}}else{return a}},queryAll:function(a,b){if(!a){return[k]}if(h.isString(a)){a=m(a);if(h.isString(a)){return l.call((b||k).querySelectorAll(a))}else{if(a.length>4){return}if(a[2]){a[3]=a[3]||"*"}return j(a[0],a[1],a[2],a[3],b)}}else{return a}},addModsWrap:function(a){if(h.isString(a)){a=a.split("~");var d=h.util.queryOne(a[0]),f=a[1].trim().split("*"),c=f[0],r=f[1]||1,b,g="";b=c.replace(/(\w+)([\.\#\w\-\d]+)/,"<$1$2></$1>").replace(/\.([\.\w\-\d]+)/g,' class="$1"').replace(/\./g," ").replace(/\#([\w\-\d]+)/g,' id="$1"');for(var s=0;s<r;s++){g+=b}d.innerHTML=g}else{var e=arguments.callee;a.forEach(function(o){e(o)})}},waitObj:function(a,d){d=d||100;h.__TIMER_CACHE=h.__TIMER_CACHE||{};var b=0,c="icat_timer"+Math.floor(Math.random()*1000000+1);(function(){var e=arguments.callee;a(c,b);if(b<d&&!h.__TIMER_CACHE[c]){setTimeout(function(){b++;e()},1)}})()},lazyLoad:function(b,c){if(!b){return}b=h.util.queryOne(b);var a=l.call(h.util.queryAll('img[src$="blank.gif"]',b));c=c||500;setTimeout(function(){a.forEach(function(d){var e=d.getAttribute("data-src");h.__IMAGE_CACHE=h.__IMAGE_CACHE||{};if(!e){return}if(!h.__IMAGE_CACHE[e]){var f=new Image();f.src=e;f.onload=function(){d.src=e;h.__IMAGE_CACHE[e]=true;f=null}}else{d.src=e}d.removeAttribute("data-src")})},c)},getCurrentJS:function(){var a=k.getElementsByTagName("script");return a[a.length-1]},fullUrl:function(b,a,c){if(!b){return h.PathConfig.pageRef+"?"+c}b=b.replace(/^\//g,"");if(h.DemoMode){b=b.indexOf("?")<0?(b+".php"):b.replace(/(\?)/g,".php$1")}if(!a){b=b+(b.indexOf("?")<0?"?":"&")+c}b=h.PathConfig.pageRef+b;return b}})}).call(this);(function(h,l,i){h.namespace("Event");var g=h.Event,j=function(a,b,c){a.events=a.events||{};a.types=a.types||[];a.events[b]=c;if(a.types.contain(b)){a.types.push(b)}b=b.replace(/\..*/g,"");if(a.addEventListener){a.addEventListener(b,a.events[b],false)}else{if(a.attachEvent){a.attachEvent("on"+b,g[eventId])}else{a["on"+b]=c}}},k=function(a,b){if(!a.events||!a.types.contain(b)){return}var c=a.events[b];b=b.replace(/\..*/g,"");if(a.removeEventListener){a.removeEventListener(b,c,false)}else{if(a.detachEvent){a.detachEvent("on"+b,c)}else{a["on"+b]=null}}if(isEmptyObject(a.events)){a.events=null}if(!a.types.length){a.types=null}};h.mix(g,{preventDefault:function(a){if(a&&a.preventDefault){a.preventDefault()}else{window.event.returnValue=false}},stopPropagation:function(a){if(window.event){window.event.cancelBubble=true}else{a.stopPropagation()}},bindEvent:function(a,b,c){if(!a){return}a=h.util.queryAll(a);if(h.isjQueryObject(a)){a.bind?a.bind(b,c):arguments.callee(h.util.queryAll(a.selector),b,c)}else{a.length===undefined?j(a,b,c):h.foreach(a,function(d,e){j(e,b,c)})}},removeEvent:function(a,b){if(!a){return}a=h.util.queryAll(a);if(h.isjQueryObject(a)){a.unbind?a.unbind(b):arguments.callee(h.util.queryAll(a.selector),b)}else{a.length===undefined?k(a,b):h.foreach(a,function(c,d){k(d,b)})}},triggerEvent:function(c,b,d,e){if(i.createEventObject){var f=i.createEventObject();c.fireEvent("on"+b,f)}else{var a=i.createEvent("Event");a.initEvent(b,d,e);c.dispatchEvent(a)}},ready:function(){var a=[],b=SHIM._ready||function(c){if(i.readyState){(function(){if(i.readyState!=="loading"){c()}else{setTimeout(arguments.callee,10)}})()}};b(function(){if(!arguments.callee.done){arguments.callee.done=true;for(var c=0;c<a.length;c++){a[c]()}}});return function(c){if(h.isFunction(c)){a[a.length]=c}return c}}(),on:function(a,b,c){g.bindEvent(a,b,c)},off:function(a,b){g.removeEvent(a,b)}});g.ready(function(){var d={},x,c="ontouchstart" in l;var a=c?"touchstart":"mousedown",A=c?"touchmove":"mousemove",B=c?"touchend":"mouseup",w="touchcancel",D=function(o,p,r,n){var m=Math.abs(o-p),q=Math.abs(r-n);return m>=q?(o-p>0?"Left":"Right"):(r-n>0?"Up":"Down")};var e=750,y,f=function(){if(y){clearTimeout(y)}y=null};var v=h.util.queryOne("*[data-pagerole=body]"),z,C,b=function(n,m){h.Controller.__CUR_OBSERVERS=h.Controller.__CUR_OBSERVERS||[];h.Controller.__CUR_OBSERVERS.forEach(function(o){h.Controller[o].execute(n,m)})};if(!v){return}g.on(v,a,function(n){if(n.button&&n.button===2){return}var m=c?n.touches[0]:n;z=Date.now();C=z-(d.last||z);d.el=h.util.parentIfText(n.target);x&&clearTimeout(x);d.x1=m.pageX;d.y1=m.pageY;d.isScrolling=undefined;if(C>0&&C<=250){d.isDoubleTap=true}d.last=z;y=setTimeout(function(){y=null;if(d.last){b("longTap",d.el);d={}}},e);g.stopPropagation(n)});g.on(v,A,function(o){if(o.button&&o.button===2){return}f();var p=c?o.touches[0]:o;d.x2=p.pageX;d.y2=p.pageY;var m=d.x2-d.x1,n=d.y2-d.y1;if(typeof d.isScrolling=="undefined"){d.isScrolling=!!(d.isScrolling||Math.abs(m)<Math.abs(n))}if(!d.isScrolling){g.preventDefault(o);b("swiping",d.el,[d.x1,d.x2,d.y1,d.y2]);g.stopPropagation(o)}});g.on(v,B,function(n){if(n.button&&n.button===2){return}f();if(!d.isScrolling){if(d.isDoubleTap){b("doubleTap",d.el);d={}}else{if("last" in d){b("tap",d.el);x=setTimeout(function(){x=null;b("singleTap",d.el);d={}},250)}else{if((d.x2&&Math.abs(d.x1-d.x2)>30)||(d.y2&&Math.abs(d.y1-d.y2)>30)){var m="swipe"+D(d.x1,d.x2,d.y1,d.y2);b(m,d.el);b(m,d.el);d={}}}}}else{d={}}g.stopPropagation(n)});g.on(v,w,function(m){g.preventDefault(m);g.stopPropagation(m);if(x){clearTimeout(x)}if(y){clearTimeout(y)}y=x=null;d={}});g.on(v,"click",function(o){var m=h.util.parentIfText(o.target),n=h.Controller.__CUR_SELECTORS;if(!m||m==i.body){return}(function(){if(h.util.matches(m,n)){g.preventDefault(o);g.stopPropagation(o)}else{if(m.parentNode!==i.body){m=m.parentNode;arguments.callee()}}})()})})})(ICAT,this,document);(function(i,p,m){var o=Array.prototype.slice,j=function(c,f,d){if(!c){return}var e=i.View.__TMPL_CACHE;if(e[c]){return f?e[c](f):e[c]}else{d=/[\.#]/.test(c)?i.util.queryOne(c).innerHTML:(d||"");d=d.replace(/[\r\t\n]/g,"");if(d===""){return d}var b,a="var __p_fun = [];with(jsonData){__p_fun.push('"+d.replace(/<%=(.*?)%>/g,"',$1,'").replace(/<%(.*?)%>/g,"');$1__p_fun.push('")+"');};return __p_fun.join('');";e[c]=new Function("jsonData",a);return f?e[c](f):e[c]}};function k(a,b){var c=this;c.tempId=a;c._render=function(d,e){i.util.waitObj(function(h){var g=i.util.queryOne(d.parentWrap);if(!g){i.__TIMER_CACHE[h]=false;return}i.__TIMER_CACHE[h]=true;d.parentWrap=g;i.View.render(c.tempId,d);var f=/form/i.test(g.tagName)?g:i.util.queryOne("form",g);if(f){c.getData=function(u){u=u||"string";var t=/json/i.test(u),v=t?{}:"";o.call(f.elements).forEach(function(r){var s=r.getAttribute("name"),q=r.value;if(s){t?v[s]=q:v+="&"+s+"="+q}});return t?v:v.replace(/^&/,"")}}})};if(b){c._render(b)}}k.prototype={addItem:function(a){this._render(a)},setData:function(a){this._render(a,true)},extend:function(a){i.mix(this,a)}};i.View=function(b,a){if(!b){return}if(!i.View[b]){i.View[b]=new k(b)}if(a){i.View[b].setData(a)}return i.View[b]};i.mix(i.View,{render:function(u,f,d){i.__APP_TEMPS=i.__APP_TEMPS||{};var h=i.View.__TMPL_CACHE=i.View.__TMPL_CACHE||{},c=f.parentWrap,e,t=m.createElement("div"),b,a=function(r,q){if(!r||!q){return}r=i.isArray(r)?r:[r];r.forEach(function(y){if(!y){return}if(/\w*~.*/.test(y)){y=y.split("~");q.setAttribute(y[0],y[1])}else{var v=y.replace(/[#\.]([\#\.\w\-]+)/g,"$1"),s=q.className;y.indexOf("#")>=0?q.id=v.replace(/[\#\.].*/g,""):q.className=(s.replace(/\s+/,".")+"."+v).split(".").unique().join(" ")}})};if(i.isEmptyObject(i.__APP_TEMPS)){i.foreach(i.app,function(q,r){if(this.template){i.mix(i.__APP_TEMPS,this.template)}})}if(i.isString(u)){u=u.trim()}if(h[u]){e=h[u](f)}else{if(i.isObject(u)){e=j(u,f,i.isjQueryObject(u)?u.html():u.innerHTML)}else{e=j(u,f,i.__APP_TEMPS[u])}}if(!c){return e}t.innerHTML=e;b=t.childNodes;if(f.hooks){i.foreach(f.hooks,function(q,s){var r=i.util.queryAll(q,t);r.length?r.forEach(function(w){a(s,w)}):a(s,r)})}if(f.pHooks){i.foreach(f.pHooks,function(r,s){if(r.indexOf(".")<0){a(s,c)}else{r=r.replace(/(\.)parents\((\d+)\).*/g,"$1$2").split(".");var q=r[1]==0?c:(function(){var x=c;for(var y=0;y<r[1];y++){x=x.parentNode;if(x===m.body){break}}return x})();a(s,q)}})}if(d){var g=c.childNodes;while(g.length>0){c.removeChild(g[0])}}while(b.length>0){c.appendChild(b[0])}t=null;if(f.callback){f.callback(c)}},destroy:function(a){if(!a){return}a=i.isString(a)?[a]:a;a.forEach(function(b){delete i.View[b]})}});function l(a,b){this.module=a;this.initData=b}l.prototype={getInitData:function(a){return this.initData[a||""]},extend:function(a){i.mix(this,a)}};i.Model=function(b,a){if(!b){return}if(!i.Model[b]){i.Model[b]=new l(b,a)}else{i.Model[b].initData=a||i.Model[b].initData}return i.Model[b]};i.mix(i.Model,{storage:function(){if(!arguments.length||!window.localStorage||!window.sessionStorage){return}var e=window.localStorage,d=window.sessionStorage;if(arguments.length==1){var f=arguments[0];return i.isString(f)?(e.getItem(f)||d.getItem(f)):""}else{var f=arguments[0],b=arguments[1],a=arguments[2];if(i.isString(f)){var c=a?d:e;c.removeItem(f);c.setItem(f,i.isObject(b)?JSON.stringify(b):b)}}},clearStorage:function(a){if(!a||!window.localStorage||!window.sessionStorage){return}var c=window.localStorage,b=window.sessionStorage;if(a==c||a==b){a.clear()}else{if(c[a]){c.removeItem(a)}if(b[a]){b.removeItem(a)}}},cookie:function(){if(!arguments.length){return}if(arguments.length==1){var f=m.cookie;if(f.length<=0){return}var d=arguments[0],c=f.indexOf(d+"=");if(c!=-1){c=c+d.length+1;cEnd=f.indexOf(";",c);if(cEnd==-1){cEnd=f.length}return unescape(f.substring(c,cEnd))}}else{var d=arguments[0],g=arguments[1],a=arguments[2]||60,b=new Date(),e="";b.setTime(b.getTime()+(a*1000));e="; expires="+b.toGMTString();m.cookie=d+"="+escape(g)+e+"; path=/"}},clearCookie:function(a){i.View.cookie(a,"",-1)},destroy:function(a){if(!a){return}a=i.isString(a)?[a]:a;a.forEach(function(b){delete i.Model[b]})}});function n(a){this.selectors=[];this.events={};this.module=a}n.prototype={subscribe:function(a){var b=this;if(!a){return b}a=i.isArray(a)?a:[a];i.foreach(a,function(f,e){e.el=e.el.trim();if(!b.selectors.contain(e.el)){b.selectors.push(e.el)}var c=e.el+"|"+(e.stopDefault?1:0)+"|"+(e.stopBubble?1:0),d=e.eType.trim();switch(d){case"click":d="tap";break;case"longClick":d="longTap";break;case"doubleClick":d="doubleTap";break;case"singleClick":d="singleTap";break;case"moving":d="swiping";break}if(!b.events[d]){b.events[d]={}}if(!b.events[d][c]){b.events[d][c]=e.callback}})},unsubscribe:function(a){var b=this;if(!a){b.events={}}else{a=i.isArray(a)?a:[a];a.forEach(function(c){["|0|0","|0|1","|1|0","|1|1"].forEach(function(d){if(b.events[c.eType.trim()][c.el.trim()+d]){delete b.events[c.eType.trim()][c.el.trim()+d]}})})}},execute:function(g,e,c){var a=this,f,h=a.events[g];if(!h){return}for(f in h){var b=f.split("|"),d=false;(function(s,q){if(i.util.matches(s,b[0])){q.apply(s,c);if(b[1]==0){i.Event.triggerEvent(s,"click",false,true)}d=true}else{if(s&&s.parentNode!==m.body){arguments.callee(s.parentNode,q)}}})(e,h[f]);if(d&&b[2]==1){return}}},addEvents:function(a){this.subscribe(a)},removeEvents:function(a){this.unsubscribe(a)},extend:function(a){i.mix(this,a)}};i.Controller=function(a,b){if(!a){return}if(!i.Controller[a]){i.Controller[a]=new n(a)}if(i.isFunction(b)){b(i.Controller[a])}else{i.Controller[a].subscribe(b)}return i.Controller[a]};i.mix(i.Controller,{addCurrent:function(a){if(!a){return}a=i.isString(a)?[a]:a;i.Controller.__CUR_SELECTORS=i.Controller.__CUR_SELECTORS||[];i.Controller.__CUR_OBSERVERS=i.Controller.__CUR_OBSERVERS||[];a.forEach(function(b){if(!i.Controller.__CUR_OBSERVERS.contain(b)&&i.Controller[b]){i.Controller.__CUR_OBSERVERS.push(b);i.Controller.__CUR_SELECTORS=i.Controller.__CUR_SELECTORS.concat(i.Controller[b].selectors)}})},removeCurrent:function(a){if(!a){return}a=i.isString(a)?[a]:a;i.Controller.__CUR_SELECTORS=i.Controller.__CUR_SELECTORS||[];i.Controller.__CUR_OBSERVERS=i.Controller.__CUR_OBSERVERS||[];a.forEach(function(b){i.Controller.__CUR_OBSERVERS.remove(b);if(i.Controller[b]){i.Controller[b].selectors.forEach(function(c){i.Controller.__CUR_SELECTORS.remove(c)})}})},destroy:function(a){if(!a){return}a=i.isString(a)?[a]:a;i.Controller.__CUR_SELECTORS=i.Controller.__CUR_SELECTORS||[];i.Controller.__CUR_OBSERVERS=i.Controller.__CUR_OBSERVERS||[];a.forEach(function(b){i.Controller.__CUR_OBSERVERS.remove(b);if(i.Controller[b]){i.Controller[b].selectors.forEach(function(c){i.Controller.__CUR_SELECTORS.remove(c)})}delete i.Controller[b]})}})})(ICAT,this,document);(function(p,m,k){p.PathConfig=function(d){var a=p.util.getCurrentJS(),f=a.src;p.PathConfig._isConcat=f.indexOf("??")>=0;if(!p.PathConfig.appRef){var e=a.baseURI,h=p.DemoMode?"(\\w+/)(\\w+)?[^/\\w][\\w\\?\\%\\#\\&\\=]+":"(//[\\w\\.]+/).*",b=new RegExp(h,"g");p.PathConfig.pageRef=e.replace(b,"$1");if(p.PathConfig._isConcat){var c=f.replace(/(\?{2}|\.js(?=\?))/g,"$1|").split("|"),g=c[0].replace(/\?+/g,"");p.PathConfig._webRoot=c[0];p.PathConfig.timestamp=c[2]||"";c[1].split(",").forEach(function(i){if(/\/sys\//i.test(i)){p.PathConfig._sysRef=i.replace(/(\/sys\/).*/ig,"$1")}if(/\/apps\//i.test(i)){p.PathConfig._appRef=i.replace(/(\/)\w+(\.\w+)?\.js/g,"$1")}});p.PathConfig.sysRef=(g+p.PathConfig._sysRef).replace(/([^:])\/{2,}/g,"$1/");p.PathConfig.appRef=(g+p.PathConfig._appRef).replace(/([^:])\/{2,}/g,"$1/")}else{if(d===true){p.PathConfig.sysRef=/\/sys\//i.test(f)?f.replace(/(\/sys\/).*/ig,"$1"):f.replace(/(\/)\w+(\.\w+)?\.js(.*)?/g,"$1");p.PathConfig.timestamp=f.replace(/.*\.js(\?)?/g,"$1")}else{p.PathConfig.appRef=f.replace(/(\/)\w+(\.\w+)?\.js(.*)?/g,"$1");if(!p.PathConfig.timestamp){p.PathConfig.timestamp=f.replace(/.*\.js(\?)?/g,"$1")}}}}if(p.isObject(d)){p.mix(p.PathConfig,d)}};p.PathConfig(true);p.ModsConfig=function(a){if(p.isArray(a)){p.foreach(a,function(b,c){p.ModsConfig[c.modName]=(p.ModsConfig[c.modName]||[]).concat(c.paths)})}else{if(a.modName&&a.paths){p.ModsConfig[a.modName]=(p.ModsConfig[a.modName]||[]).concat(a.paths)}else{p.foreach(a,function(b,c){p.ModsConfig[b]=(p.ModsConfig[b]||[]).concat(c)})}}};var n={},j={},o,q=function(d,a){if(!d.length){return}if(d.length===1){a=true}var b,e=[],c=function(f){var h=f,g=p.PathConfig._isConcat&&!a?"_":"";if(/^\.{1,}\//.test(h)){h=/^\.\//.test(h)?h.replace(/^\.\//g,p.PathConfig[g+"appRef"]):h.replace(/^\.{2}\//g,p.PathConfig[g+"appRef"].replace(/\w+\/$/g,""))}else{if(/^\//.test(h)){h=h.replace(/^\//g,p.PathConfig.pageRef)}else{h=p.PathConfig[g+"sysRef"]+h}}return h};if(p.PathConfig._isConcat&&!a){b="";p.DebugMode?d.forEach(function(f){if(/^(http|ftp|https):\/\//i.test(f)){e.push(f.indexOf("!")>=0?f.replace(/\!/g,""):f.replace(/(\.source)?(\.(js|css))/g,".source$2"))}else{if(/^\//.test(f)){f=c(f);e.push(f.indexOf("!")>=0?f.replace(/\!/g,""):f.replace(/(\.source)?(\.(js|css))/g,".source$2"))}else{f=c(f);b+=(f.indexOf("!")>=0?f.replace(/\!/g,""):f.replace(/(\.source)?(\.(js|css))/g,".source$2"))+","}}}):d.forEach(function(f){f=f.replace(/\!/g,"");if(/^(http|ftp|https):\/\//i.test(f)){e.push(f)}else{if(/^\//.test(f)){e.push(c(f))}else{b+=c(f)+","}}});b=p.PathConfig._webRoot+b.replace(/,$/g,"");return[b].concat(e)}else{b=[];p.DebugMode?d.forEach(function(f){if(/^(http|ftp|https):\/\//i.test(f)){b.push(f.indexOf("!")>=0?f.replace(/\!/g,""):f.replace(/(\.source)?(\.(js|css))/g,".source$2"))}else{f=c(f);b.push(f.indexOf("!")>=0?f.replace(/\!/g,""):f.replace(/(\.source)?(\.(js|css))/g,".source$2"))}}):d.forEach(function(f){f=f.replace(/\!/g,"");if(/^(http|ftp|https):\/\//i.test(f)){b.push(f)}else{b.push(c(f))}});return b}},r=function(g){var a=g,h=a+p.PathConfig.timestamp;if(n[h]){return}var f=a.replace(/.*\./g,""),b=f=="css",c=b?"link":"script",d=b?' type="text/css" rel="stylesheet"':' type="text/javascript"',e=(b?"href":"src")+'="'+h+'"';k.write("<"+c+d+e+(b?"/>":"></"+c+">"));n[a]=true},l=function(b){var d=b.file+p.PathConfig.timestamp;if(n[b.file]){if(b.callback&&p.isFunction(b.callback)){b.callback(b.context||p)}if(b.modName){j[b.modName]=true}return}var a,c=b.file.replace(/.*\./g,"");if(c==="css"){a=k.createElement("link");a.setAttribute("type","text/css");a.setAttribute("rel","stylesheet");a.setAttribute("href",d)}else{if(c==="js"){a=k.createElement("script");a.setAttribute("type","text/javascript");a.setAttribute("src",d);a.setAttribute("async",true)}}if(!a){return}p.util.waitObj(function(f){var e=k.body||k.getElementsByTagName("body")[0];if(!e){p.__TIMER_CACHE[f]=false;return}p.__TIMER_CACHE[f]=true;if(c==="js"){o=SHIM._load||function(h,w,i,v,g,x){g.onload=function(){if(i.callback&&x.isFunction(i.callback)){i.callback(i.context||x)}if(i.modName){h[i.modName]=true}w[i.file]=true};v.appendChild(g)};o(j,n,b,e,a,p)}if(c==="css"){setTimeout(function(){if(b.callback&&_icat.isFunction(b.callback)){b.callback(b.context||_icat)}if(b.modName){j[b.modName]=true}},5);n[b.file]=true;e.appendChild(a)}})};p.mix(p,{inc:function(a){if(!a){return}a=p.isString(a)?[a]:a;p.foreach(q(a),function(b,c){if(!c){return}r(c)})},include:function(){if(!arguments.length){return}if(arguments.length==1){var a=arguments[0];if(p.isString(a)){a={files:a}}if(!p.isObject(a)||!a.files){return}a.files=p.isString(a.files)?q([a.files]):q(a.files,a.isSingle);(function(){if(a.files.length){var b=a.files.shift();b=b}else{return}if(a.files.length){var c=arguments.callee;if(a.isDepend){l({file:b,callback:function(){c(a.files)},context:a.context})}else{l({file:b,context:a.context});c(a.files)}}else{l({file:b,callback:a.callback,context:a.context})}})()}else{arguments.callee({files:arguments[0],callback:arguments[1],isDepend:arguments[2],isSingle:arguments[3],context:arguments[4]})}},require:function(){if(!arguments.length){return}if(arguments.length==1){var a=arguments[0];if(!p.isObject(a)||!(a.files=a.files||p.ModsConfig[a.modName])){return}a.files=p.isString(a.files)?q([a.files]):q(a.files,a.isSingle);if(j[a.modName]){if(a.callback){a.callback(a.context)}}else{(function(){if(a.files.length){var b=a.files.shift();b=b}else{return}if(a.files.length){var c=arguments.callee;l({file:b,callback:function(){c(a.files)},context:a.context,modName:a.modName})}else{l({file:b,callback:a.callback,context:a.context,modName:a.modName})}})()}}else{arguments.callee({modName:arguments[0],files:arguments[1],callback:arguments[2],isSingle:arguments[3],context:arguments[4]})}},use:function(b){if(!arguments.length){return}var c=0,a;if(arguments.length==1){var b=arguments[0];if(!p.isObject(b)){return}p.util.waitObj(function(d,e){if(!j[b.modName]){p.__TIMER_CACHE[d]=false;if(e==50&&p.ModsConfig[b.modName]){p.require({modName:b.modName,files:p.ModsConfig[b.modName],context:b.context})}return}p.__TIMER_CACHE[d]=true;if(b.callback){b.callback(b.context)}})}else{arguments.callee({modName:arguments[0],callback:arguments[1],delay:arguments[2],context:arguments[3]})}}});p.ModsConfig([{modName:"zepto_core",paths:["lib/zepto/src/zepto.js","lib/zepto/src/event.js","lib/zepto/src/ajax.js","lib/zepto/src/fx.js"]},{modName:"app_mvcBase",paths:["./mvc/template.js","./mvc/initdata.js","./mvc/view.js","./mvc/model.js","./mvc/controller.js"]}])})(ICAT,this,document);(function(a){a.PathConfig();a.app("GNnav",function(){return{version:"1.0",fullUrl:function(b,c){if(!b){return a.PathConfig.pageRef}b=b.replace(/^\//g,"");if(a.DemoMode){b=b.indexOf("?")<0?(b+".php"):b.replace(/(\?)/g,".php$1")}if(!c){b=b}b=a.PathConfig.pageRef+b;if(a.isDemoMode){}return b}}});a.include(["./jquery.js"],function(){a.require({modName:"app_mvcBase"})})})(ICAT);