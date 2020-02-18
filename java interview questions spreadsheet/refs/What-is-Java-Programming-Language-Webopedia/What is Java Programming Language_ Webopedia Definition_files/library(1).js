/* OneAll - User Integration Platform | Compiled Fri, 16 Aug 2019 14:36:16 +0200]*/
if("undefined"===typeof oneall)throw Error("[OneAll] The base library.js is missing");
var oa_social_sharing=function(){this.counters_date_updated=0;this.page_urls_summed=[];this.update_counter_sums=function(a,d){if(!0===("undefined"===typeof d?!1:d)||-1==this.page_urls_summed.indexOf("["+a+"]"))oneall.tools.include_file(oneall.cfg.get_uri("sharing_counters")+"?page_url="+encodeURIComponent(a)+"&r="+Math.floor(1E5*Math.random()+100001),"js",!0),this.page_urls_summed.push("["+a+"]")};this.is_absolute_uri=function(a){return 0===a.indexOf("//")?!0:-1===a.indexOf("://")||-1===a.indexOf(".")||
-1===a.indexOf("/")||a.indexOf(":")>a.indexOf("/")?!1:a.indexOf("://")<a.indexOf(".")?!0:!1};this.build_absolute_uri=function(a){var d;a=a.replace(/^\s+|\s+$/g,"");if(!this.is_absolute_uri(a)){var b=document.location.href.replace(document.location.search,"");b=b.split("/");b.pop();a=a.replace(/\/{2,}/g,"/");a=a.replace(/^\/+/,"");var c=a.split("/");a=0;for(d=c.length;a<d;a+=1)"."!=c[a]&&(".."==c[a]?3<b.length&&b.pop():b.push(c[a]));a=b.join("/")}return a};this.find_shareable_image=function(a){var d,
b;var c="";if(a&&a.nodeType){var e=a.getElementsByTagName("img");var g=0;for(d=e.length;g<d;g+=1){var f=e[g];if((b=f.getAttribute("src"))&&"string"==typeof b&&0<b.length){var l=f.naturalWidth||f.clientWidth||f.innerWidth||0;f=f.naturalHeight||f.clientHeight||f.innerHeight||0;if(25<l||25<f)return this.build_absolute_uri(b)}}0==c.length&&a.parentNode&&(c=this.find_shareable_image(a.parentNode))}return c};this.update_counters=function(a,d){var b,c,e,g;a=a.replace(/\s+|\/+$/,"");var f=oneall.tools.get_elements_by_class_name("oas_box");
if("object"===typeof f&&0<f.length){var l=0;for(b=f.length;l<b;l+=1){var m=f[l];if("1"!==m.getAttribute("data-processed")){var h=m.getAttribute("data-url");h=h.replace(/\s+|\/+$/,"");h=oneall.tools.add_prot_rel_uri(h);if(h===a){var k=0;this.counters_date_updated=(new Date).getTime();h=0;for(c=d.length;h<c;h+=1){var n=d[h];var p=oneall.tools.get_elements_by_class_name("oas_btn_"+n.key,m);if("object"===typeof p&&0<p.length){var r=0;for(g=p.length;r<g;r+=1){k+=parseInt(n.num_times_used,10);var t=oneall.tools.get_elements_by_class_name("oas_btn_shares",
p[r]);var q=0;for(e=t.length;q<e;q+=1)t[q].innerHTML=oa_social_sharing.short_number(n.num_times_used),t[q].setAttribute("data-count",n.num_times_used)}}}oa_social_sharing.update_counters_labels(m,k);m.setAttribute("data-processed",1)}}}}};this.sharing_methods=function(){this.list=[]};this.sharing_methods.get_method_by_name_key=function(a){var d;a=a.toLowerCase();var b=0;for(d=this.list.length;b<d;b+=1)if(this.list[b].name_key.toLowerCase()===a)return this.list[b];return!1};this.sharing_methods.counter=
function(a,d,b){a.innerHTML='<span class="oas_btn_brd"><span class="oas_btn_txt"><span class="oas_btn_counter_count"><span class="oas_btn_shares_tot oas_btn_counter_count_sum" data-count="0"></span></span> <span class="oas_btn_counter_text"><span class="oas_btn_shares_label oas_btn_counter_text_shares" data-text-singular="Share" data-text-plural="Shares"></span></span></span></span>';return a};this.sharing_methods.twitter_tweet_but=function(a,d,b){d="";!1===b.url_inherited&&(d+=' data-url="'+b.url+
'"');!1===b.title_inherited&&(d+=' data-text="'+b.title+'"');a.innerHTML='<a href="https://twitter.com/share" class="twitter-share-button"'+(d+' data-size="medium" data-count="none">Tweet</a>');"undefined"!==typeof twttr?twttr.widgets.load():oneall.tools.include_file("//platform.twitter.com/widgets.js","js");return a};this.sharing_methods.facebook_like_but=function(a,d,b){b="//www.facebook.com/plugins/like.php?font=arial&show_faces=false&width=90&action=like&href="+encodeURIComponent(b.url);a.innerHTML=
'<iframe src="'+("count_v"==d?b+"&layout=box_count":b+"&layout=button_count")+'" scrolling="no" frameborder="0" style="border:none;overflow:hidden;" allowTransparency="true"></iframe>';return a};this.sharing_methods.google_plus_one_but=function(a,d,b){var c="";var e={};!1===b.url_inherited&&(c+=' data-href="'+b.url+'"',e.href=b.url);"count_v"==d?(c+=' data-size="tall"',e.size="tall"):(c+=' data-size="medium" data-annotation="none"',e.size="medium",e.annotation="none");d="oa_bpk_"+Math.floor(1E4*Math.random()+
1);a.innerHTML='<div id="'+d+'" class="g-plusone"'+c+"></div>";"undefined"!==typeof gapi?gapi.plusone.render(d,e):oneall.tools.include_file("//apis.google.com/js/plusone.js","js",!0);return a};this.sharing_methods.linkedin_share_but=function(a,d,b){var c="";!1===b.url_inherited&&(c+=' data-url="'+b.url+'"');switch(d){case "count_h":c+='data-counter="right"';break;case "count_v":c+='data-counter="top"'}a.innerHTML='<script type="IN/Share"'+c+">\x3c/script>";"undefined"!==typeof IN?IN.parse():oneall.tools.include_file("//platform.linkedin.com/in.js",
"js",!0);return a};this.sharing_methods.vkontakte_share_but=function(a,d,b){function c(){"undefined"===typeof VK?window.setTimeout(c,150):document.getElementById(g).innerHTML=VK.Share.button(!1,e)}var e={text:"Share",eng:1};e.type="count_v"==d?"round":"round_nocount";var g="oa_bpk_"+Math.floor(1E3*Math.random()+1);a.innerHTML='<div id="'+g+'"></div>';oneall.tools.include_file("//vk.com/js/api/share.js","js",!0);c();return a};this.sharing_methods.default_but=function(a,d,b){var c="Share on "+b.caption;
c=a.getAttribute("title");null!==c&&(c=c.replace(/^\s+|\s+$/g,""),0<c.length&&(c=c.replace("%s",b.caption)));var e="";switch(d){case "btns_s":case "btns_m":case "btns_l":e='<span class="oas_btn_ico"></span>';break;case "count_h":e='<span class="oas_btn_brd"><span class="oas_btn_ico"></span><span class="oas_btn_txt">'+b.caption+'</span><span class="oas_btn_count"><span class="oas_btn_count_txt oas_btn_shares">0</span></span></span>';break;case "count_v":e='<span class="oas_btn_count"><span class="oas_btn_count_txt oas_btn_shares">0</span></span><span class="oas_btn_brd"><span class="oas_btn_ico"></span><span class="oas_btn_txt">'+
b.caption+"</span></span>";break;case "btns_lf":case "btns_lfnm":case "btns_lfr":case "btns_lfrr":case "btns_lf_b":case "btns_lfnm_b":case "btns_lfr_b":case "btns_lfrr_b":e='<span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_white"></span></span>';break;case "btns_lf_g":case "btns_lfnm_g":case "btns_lfr_g":case "btns_lfrr_g":e='<span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_black"></span></span>';break;case "btns_lf_count":case "btns_lfrr_count":case "btns_lf_b_count":case "btns_lfrr_b_count":e=
'<span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_white"></span><span class="oas_btn_count"><span class="oas_btn_count_txt oas_btn_shares">0</span></span></span>';break;case "btns_lf_g_count":case "btns_lfrr_g_count":e='<span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_black"></span><span class="oas_btn_count"><span class="oas_btn_count_txt oas_btn_shares">0</span></span></span>';break;case "btns_hf":case "btns_hfrr":e='<span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_white"></span><span class="oas_btn_txt">'+
c+"</span></span>";break;case "btns_hfrr_b":case "btns_hf_b":e='<span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_white"></span><span class="oas_btn_txt">'+c+"</span></span>";break;case "btns_hf_g":case "btns_hfrr_g":e='<span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_black"></span><span class="oas_btn_txt">'+c+"</span></span>";break;case "btns_hf_count":case "btns_hfrr_count":e='<span class="oas_btn_count"><span class="oas_btn_count_txt oas_btn_shares">0</span></span><span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_white"></span><span class="oas_btn_txt">'+
c+"</span></span>";break;case "btns_hf_b_count":case "btns_hfrr_b_count":e='<span class="oas_btn_count"><span class="oas_btn_count_txt oas_btn_shares">0</span></span><span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_white"></span><span class="oas_btn_txt">'+c+"</span></span>";break;case "btns_hf_g_count":case "btns_hfrr_g_count":e='<span class="oas_btn_count"><span class="oas_btn_count_txt oas_btn_shares">0</span></span><span class="oas_btn_brd"><span class="oas_btn_ico oas_icons_black"></span><span class="oas_btn_txt">'+
c+"</span></span>"}a.innerHTML=e;a.onclick=function(a){return function(){var b=this.getAttribute("data-click");var c=(new Date).getTime();var d=!0;"undefined"!==typeof b&&c>=b&&6E4>c-b&&(d=!1);if(d){this.setAttribute("data-click",c);d=oneall.tools.get_elements_by_class_name("oas_btn_shares",this);b=0;for(c=d.length;b<c;b+=1){var e=parseInt(d[b].getAttribute("data-count"),10)+1;d[b].innerHTML=oa_social_sharing.short_number(e);d[b].setAttribute("data-count",e)}oa_social_sharing.update_counters_labels(this.parentNode)}d=
oneall.cfg.get_uri("sharing_bookmark")+"?opts="+encodeURIComponent(oneall.tools.json_stringify(a));if("email"===a.service){var g=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");g.onreadystatechange=function(){4==g.readyState&&200==g.status&&(window.location.href="mailto:?subject="+encodeURIComponent(a.title)+"&body="+encodeURIComponent((0<a.summary.length?a.summary+"\n\n":"")+a.url+"\n"))};g.open("GET",d,!0);g.send()}else window.open(d,"_blank")}}(b);return a};this.get_meta_value=
function(a,d){var b;var c=document.getElementsByTagName("meta");var e=0;for(b=c.length;e<b;e++)if(c[e].hasAttribute(a)&&c[e].getAttribute(a)==d&&c[e].hasAttribute("content"))return c[e].getAttribute("content");return""};this.parse_opts=function(a,d,b){b="undefined"!==typeof b?b:{};var c=a.getAttribute("data-read-og-tags");var e="string"!==typeof c||"false"!==c&&"0"!==c?!0:!1;c=a.getAttribute("data-title");"string"===typeof c?(b.title=c,b.title_inherited=!1):!0===d&&(b.title=e?this.get_meta_value("property",
"og:title"):"",0==b.title.length&&(b.title=document.title),b.title_inherited=!0,a.setAttribute("data-title",b.title));c=a.getAttribute("data-url");"string"===typeof c?(b.url=oneall.tools.add_prot_rel_uri(c),b.url_inherited=!1):!0===d&&(b.url=e?this.get_meta_value("property","og:url"):"",0==b.url.length&&(b.url=document.URL),b.url_inherited=!0,a.setAttribute("data-url",b.url));c=a.getAttribute("data-summary");"string"===typeof c?b.summary=c:!0===d&&(b.summary=e?this.get_meta_value("property","og:description"):
"",0==b.summary.length&&(b.summary=this.get_meta_value("name","description")));c=a.getAttribute("data-images");"string"===typeof c?b.images=c:!0===d&&(e?(b.images=this.get_meta_value("property","og:image"),0==b.images.length&&(b.images=this.get_meta_value("property","twitter:image"))):b.images="",0==b.images.length&&(b.images=this.find_shareable_image(a)));c=a.getAttribute("data-auto-render");"string"===typeof c?b.auto_render="false"===c?!1:!0:!0===d&&(b.auto_render=!0);c=a.getAttribute("data-force-refresh");
"string"===typeof c?b.force_refresh="true"===c?!0:!1:!0===d&&(b.force_refresh=!1);c=a.getAttribute("data-shorten-urls");"string"===typeof c?b.shorten_urls="false"===c?!1:!0:!0===d&&(b.shorten_urls=!0);c=a.getAttribute("data-opt");"string"===typeof c?b.opt=c:!0===d&&(b.opt="");b.xopts={};a=a.attributes;d=0;for(e=a.length;d<e;d+=1)c=a[d].nodeName.match(/data-xopt-([a-z_\-]+)/i),c instanceof Array&&2===c.length&&(b.xopts[c[1]]=a[d].value);return b};this.update_element_count=function(a){};this.setup_element=
function(a,d){var b,c,e;var g=!1;d="undefined"===typeof d?!1:d;var f="btns_s btns_m btns_l count_v count_h btns_lf btns_lf_count btns_lfr btns_lfrr btns_lfrr_count btns_hf btns_hfrr btns_hf_count btns_hfrr_count btns_lf_b btns_lf_b_count btns_lfr_b btns_lfrr_b btns_lfrr_b_count btns_hf_b btns_hfrr_b btns_hf_b_count btns_hfrr_b_count btns_lf_g btns_lf_g_count btns_lfr_g btns_lfrr_g btns_lfrr_g_count btns_hf_g btns_hfrr_g btns_hf_g_count btns_hfrr_g_count btns_lfnm btns_lfnm_b btns_lfnm_g".split(" ");
var l=a.className.split(/\s+/);var m="";for(c=0;c<f.length&&0===m.length;){for(b=0;b<l.length&&0===m.length;)"oas_box_"+f[c]===l[b]&&(m=f[c],oneall.tools.include_file("https://secure.oneallcdn.com/css/api/socialize/sharing/v1/base.css","css",!0),oneall.tools.include_file("https://secure.oneallcdn.com/css/api/socialize/sharing/v1/"+f[c]+".css","css",!0)),b+=1;c+=1}f=this.parse_opts(a,!0);if(!d||f.auto_render){l=oneall.tools.get_elements_by_class_name("oas_btn",a);if("object"===typeof l&&0<l.length)for(-1!==m.search(/count/i)&&(g=!0),b=
0,c=l.length;b<c;b+=1){var h=l[b];var k=h.className.match(/oas_btn_([a-z_]+)/i);if(k instanceof Array&&2===k.length){var n=this.sharing_methods.get_method_by_name_key(k[1]);if(!1!==n){k={};for(e in f)f.hasOwnProperty(e)&&(k[e]=f[e]);k.caption=n.name_button;k.service=n.name_key;k=this.parse_opts(h,!1,k);if(!d||k.auto_render)if(oneall.tools.add_element_class(h,"oas_btn_"+n.type),"counter"==n.type&&(g=!0),"function"===typeof this.sharing_methods[n.name_key])this.sharing_methods[n.name_key](h,m,k);else this.sharing_methods.default_but(h,
m,k)}}}g&&this.update_counter_sums(f.url,f.force_refresh)}};this.do_render_element=function(a,d,b){var c;var e=document.getElementById(a);a=null!==e&&"object"===typeof e?[e]:oneall.tools.get_elements_by_class_name(a);if("object"===typeof a&&0<a.length)for(e=0,c=a.length;e<c;e+=1)this.setup_element(a[e],d,b)};this.do_init=function(){this.do_render_element("oas_box",!0)}};
oa_social_sharing.short_number=function(a){a=parseInt(a,10);if(999<a){if(999999999999<a){a/=1E12;var d="T"}else 999999999<a?(a/=1E9,d="B"):999999<a?(a/=1E6,d="M"):(a/=1E3,d="K");a=+(Math.round(a+"e+2")+"e-2")+d}return a};oa_social_sharing.method=function(a,d,b,c,e){this.id=a;this.type=d;this.name=b;this.name_button=c;this.name_key=e};
oa_social_sharing.update_counters_labels=function(a,d){var b,c;buttons=oneall.tools.get_elements_by_class_name("oas_btn_counter",a);if("object"===typeof buttons&&0<buttons.length){var e=0;for(b=buttons.length;e<b;e+=1){var g=oneall.tools.get_elements_by_class_name("oas_btn_shares_tot",buttons[e]);var f=0;for(c=g.length;f<c;f+=1)"undefined"===typeof d&&(d=parseInt(g[f].getAttribute("data-count"),10)+1),g[f].innerHTML=oa_social_sharing.short_number(d),g[f].setAttribute("data-count",d);g=oneall.tools.get_elements_by_class_name("oas_btn_shares_label",
buttons[e]);f=0;for(c=g.length;f<c;f+=1)g[f].innerHTML=1==d?g[f].getAttribute("data-text-singular"):g[f].getAttribute("data-text-plural")}}};
if("undefined"===typeof _oa_ss){var _oa_ss={instance:null,get_instance:function(){null===this.instance&&(this.instance=new oa_social_sharing,this.instance.sharing_methods.list=[new oa_social_sharing.method(1,'addon','Facebook Like Button','Facebook','facebook_like_but'), new oa_social_sharing.method(3,'service','Facebook','Facebook','facebook'), new oa_social_sharing.method(4,'service','Twitter','Twitter','twitter'), new oa_social_sharing.method(6,'service','LinkedIn','LinkedIn','linkedin'), new oa_social_sharing.method(7,'service','Google Bookmarks','Google','google_bookmarks'), new oa_social_sharing.method(8,'addon','Twitter Tweet Button','Twitter','twitter_tweet_but'), new oa_social_sharing.method(9,'addon','Google +1 Button','Google','google_plus_one_but'), new oa_social_sharing.method(10,'addon','LinkedIn Share Button','LinkedIn','linkedin_share_but'), new oa_social_sharing.method(11,'service','Delicious','Delicious','delicious'), new oa_social_sharing.method(12,'service','Digg','Digg','digg'), new oa_social_sharing.method(14,'service','StumbleUpon','StumbleUpon','stumbleupon'), new oa_social_sharing.method(15,'service','Reddit','Reddit','reddit'), new oa_social_sharing.method(16,'service','Tumblr','Tumblr','tumblr'), new oa_social_sharing.method(18,'service','VKontakte','В Контакте','vkontakte'), new oa_social_sharing.method(20,'addon','VKontakte Share Button','В Контакте','vkontakte_share_but'), new oa_social_sharing.method(22,'service','Pinterest','Pinterest','pinterest'), new oa_social_sharing.method(24,'service','Google Plus','Google','google_plus'), new oa_social_sharing.method(26,'service','Email','Email','email'), new oa_social_sharing.method(27,'service','Odnoklassniki','Odnoklassniki','odnoklassniki'), new oa_social_sharing.method(29,'service','Hackernews','Hackernews','hackernews'), new oa_social_sharing.method(31,'service','Buffer','Buffer','buffer'), new oa_social_sharing.method(33,'service','Evernote','Evernote','evernote'), new oa_social_sharing.method(35,'service','Blogger','Blogger','blogger'), new oa_social_sharing.method(37,'service','Amazon','Amazon','amazon'), new oa_social_sharing.method(39,'service','Renren','Renren','renren'), new oa_social_sharing.method(41,'service','Sina Weibo','Weibo','weibo'), new oa_social_sharing.method(43,'service','Baidu','Baidu','baidu'), new oa_social_sharing.method(45,'service','Draugiem','Draugiem','draugiem'), new oa_social_sharing.method(47,'service','Pocket','Pocket','pocket'), new oa_social_sharing.method(49,'service','Flipboard','Flipboard','flipboard'), new oa_social_sharing.method(51,'service','Livejournal','Livejournal','livejournal'), new oa_social_sharing.method(53,'service','AOL','AOL','aol'), new oa_social_sharing.method(55,'service','Yahoo Mail','Yahoo Mail','yahoomail'), new oa_social_sharing.method(57,'service','Mail.ru','Mail.ru','mailru'), new oa_social_sharing.method(59,'counter','Total Shares','Total Shares','counter'), new oa_social_sharing.method(61,'service','WhatsApp','WhatsApp','whatsapp')]);return this.instance},push:function(){var a,d;var b=this.get_instance();var c=0;for(a=arguments.length;c<a;c+=1)try{var e=arguments[c].shift();if("function"===typeof b[e])b[e].apply(b,arguments[c]);else if("[object Array]"===Object.prototype.toString.call(e)){var g=0;for(d=e.length;g<
d;g+=1)this.push(e[g])}else oneall.console.log("Invalid function social_sharing::"+e)}catch(f){oneall.console.log(f)}}};(function(){var a=window._oneall.social_sharing;window._oneall.social_sharing=_oa_ss;window._oneall.social_sharing.push.apply(window._oneall.social_sharing,a)})()};