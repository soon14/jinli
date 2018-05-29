(function(a){a.fn.document=function(){var c=this.get(0);if(c.nodeName.toLowerCase()=="iframe"){return c.contentWindow.document}return this};a.fn.documentSelection=function(){var c=this.get(0);if(c.contentWindow.document.selection){return c.contentWindow.document.selection.createRange().text}else{return c.contentWindow.getSelection().toString()}};a.fn.wysiwyg=function(d){if(arguments.length>0&&arguments[0].constructor==String){var f=arguments[0].toString();var h=[];for(var e=1;e<arguments.length;e++){h[e-1]=arguments[e]}if(f in b){return this.each(function(){a.data(this,"wysiwyg").designMode();b[f].apply(this,h)})}else{return this}}var c={};if(d&&d.controls){var c=d.controls;delete d.controls}d=a.extend({html:'<?xml version="1.0" encoding="UTF-8"?><!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Strict//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-strict.dtd"><html xmlns="http://www.w3.org/1999/xhtml" xml:lang="en"><head><meta http-equiv="Content-Type" content="text/html; charset=UTF-8">STYLE_SHEET</head><body style="margin: 0px;">INITIAL_CONTENT</body></html>',css:{},debug:false,autoSave:true,rmUnwantedBr:true,brIE:true,controls:{},messages:{}},d);d.messages=a.extend(true,d.messages,b.MSGS_EN);d.controls=a.extend(true,d.controls,b.TOOLBAR);for(var g in c){if(g in d.controls){a.extend(d.controls[g],c[g])}else{d.controls[g]=c[g]}}return this.each(function(){b(this,d)})};function b(d,c){return this instanceof b?this.init(d,c):new b(d,c)}a.extend(b,{insertImage:function(f,e){var d=a.data(this,"wysiwyg");if(d.constructor==b&&f&&f.length>0){if(a.browser.msie){d.focus()}if(e){d.editorDoc.execCommand("insertImage",false,"#jwysiwyg#");var c=d.getElementByAttributeValue("img","src","#jwysiwyg#");if(c){c.src=f;for(var g in e){c.setAttribute(g,e[g])}}}else{d.editorDoc.execCommand("insertImage",false,f)}}},createLink:function(e){var c=a.data(this,"wysiwyg");if(c.constructor==b&&e&&e.length>0){var d=a(c.editor).documentSelection();if(d.length>0){if(a.browser.msie){c.focus()}c.editorDoc.execCommand("unlink",false,[]);c.editorDoc.execCommand("createLink",false,e)}else{if(c.options.messages.nonSelection){alert(c.options.messages.nonSelection)}}}},insertHtml:function(c){var e=a.data(this,"wysiwyg");if(e.constructor==b&&c&&c.length>0){if(a.browser.msie){e.focus();e.editorDoc.execCommand("insertImage",false,"#jwysiwyg#");var d=e.getElementByAttributeValue("img","src","#jwysiwyg#");if(d){a(d).replaceWith(c)}}else{e.editorDoc.execCommand("insertHTML",false,c)}}},setContent:function(c){var d=a.data(this,"wysiwyg");d.setContent(c);d.saveContent()},clear:function(){var c=a.data(this,"wysiwyg");c.setContent("");c.saveContent()},MSGS_EN:{nonSelection:"select the text you wish to link"},TOOLBAR:{bold:{visible:true,tags:["b","strong"],css:{fontWeight:"bold"},tooltip:"\u52a0\u7c97"},italic:{visible:true,tags:["i","em"],css:{fontStyle:"italic"},tooltip:"\u503e\u659c"},strikeThrough:{visible:true,tags:["s","strike"],css:{textDecoration:"line-through"},tooltip:"\u5220\u9664\u7ebf"},underline:{visible:true,tags:["u"],css:{textDecoration:"underline"},tooltip:"\u4e0b\u5212\u7ebf"},separator00:{visible:true,separator:true},justifyLeft:{visible:true,css:{textAlign:"left"},tooltip:"\u5de6\u5bf9\u9f50"},justifyCenter:{visible:true,tags:["center"],css:{textAlign:"center"},tooltip:"\u5c45\u4e2d\u5bf9\u9f50"},justifyRight:{visible:true,css:{textAlign:"right"},tooltip:"\u53f3\u5bf9\u9f50"},justifyFull:{visible:true,css:{textAlign:"justify"},tooltip:"\u4e24\u7aef\u5bf9\u9f50"},separator01:{visible:true,separator:true},indent:{visible:true,tooltip:"\u5411\u91cc\u7f29\u8fdb"},outdent:{visible:true,tooltip:"\u5411\u5916\u7f29\u8fdb"},separator02:{visible:false,separator:true},subscript:{visible:true,tags:["sub"],tooltip:"\u4e0b\u6807"},superscript:{visible:true,tags:["sup"],tooltip:"\u4e0a\u6807"},separator03:{visible:true,separator:true},undo:{visible:true,tooltip:"\u64a4\u9500"},redo:{visible:true,tooltip:"\u91cd\u505a"},separator04:{visible:true,separator:true},insertOrderedList:{visible:true,tags:["ol"],tooltip:"\u7f16\u53f7\u5217\u8868"},insertUnorderedList:{visible:true,tags:["ul"],tooltip:"\u7b26\u53f7\u5217\u8868"},insertHorizontalRule:{visible:true,tags:["hr"],tooltip:"\u5206\u5272\u7ebf"},separator05:{separator:true},createLink:{visible:true,exec:function(){var d=a(this.editor).documentSelection();if(d.length>0){if(a.browser.msie){this.focus();this.editorDoc.execCommand("createLink",true,null)}else{var c=prompt("URL","http://");if(c&&c.length>0){this.editorDoc.execCommand("unlink",false,[]);this.editorDoc.execCommand("createLink",false,c)}}}else{if(this.options.messages.nonSelection){alert(this.options.messages.nonSelection)}}},tags:["a"],tooltip:"\u63d2\u5165\u94fe\u63a5"},insertImage:{visible:true,exec:function(){if(a.browser.msie){this.focus();this.editorDoc.execCommand("insertImage",true,null)}else{var c=prompt("URL","http://");if(c&&c.length>0){this.editorDoc.execCommand("insertImage",false,c)}}},tags:["img"],tooltip:"\u63d2\u5165\u56fe\u7247"},separator06:{separator:true},h1mozilla:{visible:true&&a.browser.mozilla,className:"h1",command:"heading",arguments:["h1"],tags:["h1"],tooltip:"\u6807\u9898 1"},h2mozilla:{visible:true&&a.browser.mozilla,className:"h2",command:"heading",arguments:["h2"],tags:["h2"],tooltip:"\u6807\u9898 2"},h3mozilla:{visible:true&&a.browser.mozilla,className:"h3",command:"heading",arguments:["h3"],tags:["h3"],tooltip:"\u6807\u9898 3"},h1:{visible:true&&!(a.browser.mozilla),className:"h1",command:"formatBlock",arguments:["<H1>"],tags:["h1"],tooltip:"\u6807\u9898 1"},h2:{visible:true&&!(a.browser.mozilla),className:"h2",command:"formatBlock",arguments:["<H2>"],tags:["h2"],tooltip:"\u6807\u9898 2"},h3:{visible:true&&!(a.browser.mozilla),className:"h3",command:"formatBlock",arguments:["<H3>"],tags:["h3"],tooltip:"\u6807\u9898 3"},separator07:{visible:false,separator:true},cut:{visible:false,tooltip:"\u526a\u5207"},copy:{visible:false,tooltip:"\u590d\u5236"},paste:{visible:false,tooltip:"\u7c98\u8d34"},separator08:{separator:false&&!(a.browser.msie)},increaseFontSize:{visible:false&&!(a.browser.msie),tags:["big"],tooltip:"\u589e\u5927\u5b57\u4f53"},decreaseFontSize:{visible:false&&!(a.browser.msie),tags:["small"],tooltip:"\u51cf\u5c0f\u5b57\u4f53"},separator09:{separator:true},html:{visible:false,exec:function(){if(this.viewHTML){this.setContent(a(this.original).val());a(this.original).hide()}else{this.saveContent();a(this.original).show()}this.viewHTML=!(this.viewHTML)},tooltip:"\u67e5\u770b\u6e90\u7801"},removeFormat:{visible:true,exec:function(){if(a.browser.msie){this.focus()}this.editorDoc.execCommand("removeFormat",false,[]);this.editorDoc.execCommand("unlink",false,[])},tooltip:"\u53bb\u6389\u5df2\u6709\u683c\u5f0f"}}});a.extend(b.prototype,{original:null,options:{},element:null,editor:null,focus:function(){a(this.editorDoc.body).focus()},init:function(f,e){var d=this;this.editor=f;this.options=e||{};a.data(f,"wysiwyg",this);var j=f.width||f.clientWidth;var i=f.height||f.clientHeight;if(f.nodeName.toLowerCase()=="textarea"){this.original=f;if(j==0&&f.cols){j=(f.cols*8)+21}if(i==0&&f.rows){i=(f.rows*16)+16}var g=this.editor=a('<iframe src="javascript:false;"></iframe>').css({minHeight:(i-6).toString()+"px",width:(j-8).toString()+"px"}).attr("id",a(f).attr("id")+"IFrame").attr("frameborder","0");this.editor.attr("tabindex",a(f).attr("tabindex"));if(a.browser.msie){this.editor.css("height",(i).toString()+"px")}}var c=this.panel=a('<ul role="menu" class="panel"></ul>');this.appendControls();this.element=a("<div></div>").css({width:(j>0)?(j).toString()+"px":"100%"}).addClass("wysiwyg").append(c).append(a("<div><!-- --></div>").css({clear:"both"})).append(g);a(f).hide().before(this.element);this.viewHTML=false;this.initialHeight=i-8;this.initialContent=a(f).val();this.initFrame();if(this.initialContent.length==0){this.setContent("")}var h=a(f).closest("form");if(this.options.autoSave){h.submit(function(){d.saveContent()})}h.bind("reset",function(){d.setContent(d.initialContent);d.saveContent()})},initFrame:function(){var c=this;var d="";if(this.options.css&&this.options.css.constructor==String){d='<link rel="stylesheet" type="text/css" media="screen" href="'+this.options.css+'" />'}this.editorDoc=a(this.editor).document();this.editorDoc_designMode=false;try{this.editorDoc.designMode="on";this.editorDoc_designMode=true}catch(f){a(this.editorDoc).focus(function(){c.designMode()})}this.editorDoc.open();this.editorDoc.write(this.options.html.replace(/INITIAL_CONTENT/,function(){return c.initialContent}).replace(/STYLE_SHEET/,function(){return d}));this.editorDoc.close();this.editorDoc.contentEditable="true";if(a.browser.msie){setTimeout(function(){a(c.editorDoc.body).css("border","none")},0)}a(this.editorDoc).click(function(e){c.checkTargets(e.target?e.target:e.srcElement)});a(this.original).focus(function(){if(!a.browser.msie){c.focus()}});if(this.options.autoSave){a(this.editorDoc).keydown(function(){c.saveContent()}).keyup(function(){c.saveContent()}).mousedown(function(){c.saveContent()})}if(this.options.css){setTimeout(function(){if(c.options.css.constructor==String){}else{a(c.editorDoc).find("body").css(c.options.css)}},0)}a(this.editorDoc).keydown(function(g){if(a.browser.msie&&c.options.brIE&&g.keyCode==13){var e=c.getRange();e.pasteHTML("<br />");e.collapse(false);e.select();return false}return true})},designMode:function(){if(!(this.editorDoc_designMode)){try{this.editorDoc.designMode="on";this.editorDoc_designMode=true}catch(c){}}},getSelection:function(){return(window.getSelection)?window.getSelection():document.selection},getRange:function(){var c=this.getSelection();if(!(c)){return null}return(c.rangeCount>0)?c.getRangeAt(0):c.createRange()},getContent:function(){return a(a(this.editor).document()).find("body").html()},setContent:function(c){a(a(this.editor).document()).find("body").html(c)},saveContent:function(){if(this.original){var c=this.getContent();if(this.options.rmUnwantedBr){c=(c.substr(-4)=="<br>")?c.substr(0,c.length-4):c}a(this.original).val(c)}},withoutCss:function(){if(a.browser.mozilla){try{this.editorDoc.execCommand("styleWithCSS",false,false)}catch(c){try{this.editorDoc.execCommand("useCSS",false,true)}catch(c){}}}},appendMenu:function(h,d,f,e,g){var c=this;d=d||[];a("<li></li>").append(a('<a role="menuitem" tabindex="-1" href="javascript:;">'+(f||h)+"</a>").addClass(f||h).attr("title",g)).click(function(){if(e){e.apply(c)}else{c.withoutCss();c.editorDoc.execCommand(h,false,d)}if(c.options.autoSave){c.saveContent()}}).appendTo(this.panel)},appendMenuSeparator:function(){a('<li role="separator" class="separator"></li>').appendTo(this.panel)},appendControls:function(){for(var c in this.options.controls){var d=this.options.controls[c];if(d.separator){if(d.visible!==false){this.appendMenuSeparator()}}else{if(d.visible){this.appendMenu(d.command||c,d.arguments||[],d.className||d.command||c||"empty",d.exec,d.tooltip||d.command||c||"")}}}},checkTargets:function(e){for(var d in this.options.controls){var g=this.options.controls[d];var f=g.className||g.command||d||"empty";a("."+f,this.panel).removeClass("active");if(g.tags){var h=e;do{if(h.nodeType!=1){break}if(a.inArray(h.tagName.toLowerCase(),g.tags)!=-1){a("."+f,this.panel).addClass("active")}}while((h=h.parentNode))}if(g.css){var h=a(e);do{if(h[0].nodeType!=1){break}for(var c in g.css){if(h.css(c).toString().toLowerCase()==g.css[c]){a("."+f,this.panel).addClass("active")}}}while((h=h.parent()))}}},getElementByAttributeValue:function(e,c,f){var h=this.editorDoc.getElementsByTagName(e);for(var d=0;d<h.length;d++){var g=h[d].getAttribute(c);if(a.browser.msie){g=g.substr(g.length-f.length)}if(g==f){return h[d]}}return false}})})(jQuery);