/* OneAll - User Integration Platform | Compiled Thu, 12 Dec 2019 15:17:27 +0100]*/
if("undefined"===typeof oneall)throw Error("[OneAll] The base library.js is missing");oneall.xd.lv={};oneall.xd.lv.listener=function(a,b,c){"undefined"!==typeof b.data&&(b=b.data.split("::"),2===b.length&&b[0]==a&&(b=b[1].split("|"),a=b.shift(),"function"===typeof oneall.xd.lv.func[a]&&(b.push(c),oneall.xd.lv.func[a].apply(document,b))))};oneall.xd.lv.func={};
oneall.xd.lv.func.stp=function(a,b){var c,d;if(c=document.getElementById(a)){for(d=0;c;)d+=c.offsetTop+c.clientTop,c=c.offsetParent;d=parseInt(d,10);b=parseInt(b,10);c=d+b;0>c?oneall.console.log("[LOUDVOICE] Invalid scroll position "+c+" for element "+a+" specified"):window.scrollTo(0,c)}};oneall.xd.lv.func.rta=function(a){window.location.hash=a};
oneall.xd.lv.func.cat=function(a,b,c){var d;if(null!==c.events&&"object"===typeof c.events&&"function"===typeof c.events[a]){b=oneall.tools.json_parse(b);b.event=a;if("undefined"!==typeof b.iframeid){if(d=document.getElementById(b.iframeid))b.widget=d;delete b.iframeid}c.events[a](b)}};oneall.xd.lv.func.art=function(a){alert(a)};oneall.xd.lv.func.prc=function(a,b,c,d,e){e=document.getElementById(e).contentWindow;"undefined"!==typeof e&&confirm(a)&&oneall.xd.postMessage(b+"|"+c,d,e)};
oneall.xd.lv.func.rif=function(a,b,c){if(a=document.getElementById(a))b=0<=b.indexOf("%")?"width:"+b+";":0==b?"width:100%;":"width:"+parseInt(b,10)+"px;",c=0<=c.indexOf("%")?"height:"+c+";":0==c?"":"height:"+parseInt(c,10)+"px;",a.style.cssText="visibility: visible; background-color:transparent; border:0 none; "+c+b,a.setAttribute("data-processed","true")};oneall.xd.lv.func.ast=function(a){_oa_lvq.set_author_session_token(a)};
if("undefined"===typeof _oa_lvq){var _oa_lvq={events:{},args:{placeholder_start_discussion:"@",placeholder_leave_comment:"@",iframeid:null,providers:[],page_title:document.title,page_url:document.location.href,author_session_token:oneall.tools.cookie.read("oa_ast")||"",parent_uri:"https://www.developer.com/java/data/understanding-callable-and-future-interfaces-in-java.html",comment_depth:[5,3],comment_direction:"",custom_css_uri:"",offset_top:0,enable_editor:!1,reference:""},set_providers:function(a){"object"!==typeof a&&(a=a.split(","));a=a.filter(function(a){return a});0<a.length&&
(this.args.providers=a)},set_page_title:function(a){this.args.page_title=a},set_page_url:function(a){this.args.page_url=a},set_reference:function(a){this.args.reference=a},set_author_session_token:function(a){oneall.tools.cookie.write("oa_ast",a,a?1:-1E3);this.args.author_session_token=a},set_page:function(a,b){this.set_page_title(a);this.set_page_url(b)},set_event:function(a,b){"function"==typeof b&&(this.events[a]=b)},set_offset_top:function(a){this.args.offset_top=parseInt(a,10)},set_comment_depth:function(a){this.args.comment_depth=
"object"===typeof a?a:a.toString().split(",")},set_comment_direction:function(a){this.args.comment_direction="asc"==a?"asc":"desc"},set_custom_css_uri:function(a){this.args.custom_css_uri=oneall.tools.add_prot_rel_uri(a)},set_comment_area_placeholders:function(a,b){"undefined"!==typeof a&&(this.args.placeholder_start_discussion=a,this.args.placeholder_leave_comment="undefined"!==typeof b?b:a)},enable_editor:function(a){this.args.enable_editor=1==a?!0:!1},do_render_ui:function(a){var b=this;a=document.getElementById(a);
if(null!==a&&"object"===typeof a)if(!0===oneall.cfg.app.is_suspended||!1===oneall.cfg.is_valid_base_domain){if(!0===oneall.cfg.app.is_suspended){var c="The OneAll site <strong>"+oneall.cfg.app.domain+'</strong> has been suspended. Please <a style="color:#333!important;text-decoration: underline;" target="_blank" href="https://app.oneall.com/applications/application/?applicationid=658062">click here</a> to open the settings of your application and follow the indicated steps to fix this issue.';var d=
"The OneAll site "+oneall.cfg.app.domain+" has been suspended and is currently not available. Please check the settings in your OneAll account."}else c='To enforce the security of our services we require each domain to be whitelisted. Please <a style="color:#333;text-decoration: underline;" target="_blank" href="https://app.oneall.com/applications/application/settings/security/?applicationid=658062">click here</a> to open the security settings of your OneAll site and whitelist the domain <strong>'+document.domain+
"</strong>. Clear your browser cache and reload this page afterwards.",d="The domain "+document.domain+" is not allowed to include this script. Please check your OneAll site security settings.";a.style.cssText="visibility: visible;background-color:#efdfdf;color:#B80C14;padding:20px;line-height:22px;font-size:14px;border: 1px dashed #B80C14;display:block";a.innerHTML=c;oneall.console.log("[LOUDVOICE] "+d)}else a.innerHTML="",b.args.id=1E5+Math.floor(99999*Math.random()+1),b.args.iframeid="oa_loudvoice_frame_"+
b.args.id,oneall.tools.create_iframe(a,{id:b.args.iframeid,name:"OneAll LoudVoice",width:"100%",height:"0",src:oneall.cfg.get_uri("loudvoice_discussion")+"?args="+encodeURIComponent(oneall.tools.json_stringify(b.args))}),oneall.xd.receiveMessage(function(a){oneall.xd.lv.listener(b.args.id,a,b)},oneall.cfg.get_uri("application"))},push:function(){var a,b;var c=0;for(a=arguments.length;c<a;c+=1)try{var d=arguments[c].shift();if("function"===typeof this[d])this[d].apply(this,arguments[c]);else if("[object Array]"===
Object.prototype.toString.call(d)){var e=0;for(b=d.length;e<b;e+=1)this.push(d[e])}else oneall.console.log("[LOUDVOICE] Invalid function "+d+" called")}catch(f){oneall.console.log("[LOUDVOICE] Exception: "+f.message)}}};(function(){var a=window._oneall_lv||[];window._oneall_lv=_oa_lvq;window._oneall_lv.push.apply(window._oneall_lv,a)})()};