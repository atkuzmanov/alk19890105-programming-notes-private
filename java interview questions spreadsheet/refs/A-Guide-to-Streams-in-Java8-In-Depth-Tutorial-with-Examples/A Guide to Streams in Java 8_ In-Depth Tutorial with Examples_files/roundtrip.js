window.__adroll||(function(){function f(){this.exp=8760;this.eexp=720;this.pv=1E11*Math.random();this.__adc="__ar_v4";this._nad=0;this._lce=null;this._loaded=this._broken=!1;this._url=2E3;this._kwl=300;this._r={};this.cm_urls=[];this._logs=[];this.consent_networks={facebook:"f",linkedin:"linkedin"};for(var a=Array(4),c=0;c<a.length;c++)a[c]=(Math.round(1E11*Math.random()).toString(16)+Array(9).join("0")).substr(0,8);this._set_global("adroll_sid",a.join(""));this.load_experiment_js();this._load_precheck_js()};f.prototype.load_consent_banner=function(){this.add_script_element("s.adroll.com/j/consent.js")};f.prototype.get_consent_params=function(){return this.get("__adroll_consent_params")};f.prototype.set_consent_params=function(a){this.set("__adroll_consent_params",a)};f.prototype.clear_consent_params=function(){this.del("__adroll_consent_params")};f.prototype.handle_null_consent=function(a){a||((a=this.get_consent_params())?this.call_consent_write(a):this.load_consent_banner())};
f.prototype.set_consent=function(a,c,b,d,e,m){if(0===arguments.length){if(!this._has_global("__adroll_consent"))return;a=this._global("__adroll_consent")}this._set_global("__adroll_consent",a);this._set_global("__adroll_consent_is_gdpr",b);this._set_global("__adroll_consent_data",m||{});d&&this._set_global("__adroll_consent_user_country",d);e&&this._set_global("__adroll_consent_adv_country",e);if(null===a)this.handle_null_consent(c);else{c||this.clear_consent_params();if(this._install_cmp)this._install_cmp();
else{var p=this;window.setTimeout(function(){p._install_cmp&&p._install_cmp()},1E3)}!1!==a&&(this.set_first_party_cookie(),this.call_next_tpc())}};f.prototype._load_precheck_js=function(){return this.add_script_element("https://s.adroll.com/j/pre/"+window.adroll_adv_id+"/"+window.adroll_pix_id+"/index.js")};f.prototype.cookieEnabled=function(a){if(this._global("adroll_ext_network")||this._global("adroll_optout")||this._broken)return!1;if(2<=this._nad||a)return this._lce;this.set("_te_","1");return"1"===this.get("_te_")?(this.del("_te_"),0<this._nad&&!this.get(this.__adc)?this._lce=!1:this._lce=!0):this._lce=!1};
f.prototype.get=function(a){var c=window.document.cookie;if(null===c)return this._broken=!0,null;var b;0>c.indexOf(a+"=")?c=null:(a=c.indexOf(a+"=")+a.length+1,b=c.indexOf(";",a),-1===b&&(b=c.length),c=c.substring(a,b),c=""===c?null:window.unescape(c));return c};
f.prototype.set=function(a,c,b){var d;b&&"number"===typeof b?(d=new Date,d.setTime(d.getTime()+36E5*b),b=d.toGMTString(),b="; expires="+b):b="";d="; domain="+window.location.hostname;c=window.escape(c);window.document.cookie=a+"="+c+b+"; path=/"+d+"; samesite=lax"};f.prototype.del=function(a){this.set(a,"",-8760)};
f.prototype.check_cookie=function(a,c){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";for(var b=a.split("|"),d=b.length-1;0<=d;d--)if(b[d]){var e=b[d].split(":");c===e[0]&&(e[2]=""+(parseInt(e[2])+1),b[d]=e.join(":"))}return b.join("|")};f.prototype.handle=function(a){var c=this.get(this.__adc)||"";-1!==c.indexOf(a)?this.set(this.__adc,this.check_cookie(c,a),this.exp):(a=[c,[a,this.get_date(this.eexp),"1"].join(":")].join("|"),this.set(this.__adc,a,this.exp))};
f.prototype.expire_old=function(){if(!this._global("adroll_ext_network")&&!this._global("adroll_optout")){for(var a=this.get_date(!1),c=this.get(this.__adc),c=c?c.split("|"):[""],b=[],d=c.length-1;0<=d;d--)c[d]&&c[d].split(":")[1]>a&&b.push(c[d]);this.set(this.__adc,b.join("|"),this.exp)}};f.prototype.get_date=function(a){var c=new Date;a&&c.setTime(c.getTime()+36E5*a);a=""+c.getUTCFullYear();var b=c.getUTCMonth(),b=10<=b?b:"0"+b,c=c.getUTCDate();return[a,b,10<=c?c:"0"+c].join("")};
f.prototype.consent_allowed=function(a){var c=this._global("__adroll_consent");return"object"===typeof c?c[a]:c};f.prototype.generate_link=function(){return""};f.prototype.view=function(a){var c=new window.Image;c.src=this._srv("/view/"+a);c.setAttribute("width","1");c.setAttribute("height","1");c.setAttribute("border","0");c.setAttribute("alt","");this._head().appendChild(c)};f.prototype.set_cookie=function(){};
f.prototype.reset=function(){this._set_global("adroll_c_id",null);this._set_global("adroll_url_macro","");this._set_global("adroll_c_macro","");this._set_global("adroll_cpm_macro","");this._set_global("adroll_ext_network",null);this._set_global("adroll_subnetwork",null);this._set_global("adroll_ad_payload",null);this._set_global("adroll_win_notif",null)};f.prototype.set_pixel_cookie=function(a,c,b){this._global("adroll_optout")||(this.handle(a),this.handle(c),this.handle(b),this.pixel_loaded())};
f.prototype.add_pixel_load_callback=function(a){this._loaded?a():this._ensure_global("adroll_callbacks",[]).push(a)};f.prototype.pixel_loaded=function(){this._loaded=!0;for(var a=this._ensure_global("adroll_callbacks",[]),c=0;c<a.length;c++)a[c].called||(a[c](),a[c].called=!0)};f.prototype.addLoadEvent=function(a){if(this._has_global("__adroll_loaded")&&this._global("__adroll_loaded")||this._has_global("_adroll_ie")&&this._global("_adroll_ie")||/msie/i.test(window.navigator.userAgent))return a();if(/WebKit/i.test(window.navigator.userAgent)){var c=window.setInterval(function(){/loaded|complete/.test(window.document.readyState)&&window.clearInterval(c);a()},10);return null}var b=window.onload;window.onload=function(){a();b&&b()}};
f.prototype._head=function(){return(window.document.getElementsByTagName("head")||[null])[0]||(window.document.getElementsByTagName("body")||[null])[0]||window.document.getElementsByTagName("script")[0].parentNode};f.prototype.listenToEvent=function(a,c,b){a.addEventListener?a.addEventListener(c,this.wrapException(b),!1):a.attachEvent("on"+c,this.wrapException(b))};f.prototype.runCookieMatch=function(){var a=this.cm_urls.length;if(!(0>=a))for(var c=0;c<=a;c++)this.popAndSend()};
f.prototype.popAndSend=function(){if(!(0>=this.cm_urls.length)){var a=this.cm_urls.shift(),c=new Image;c.src=a;c.setAttribute("alt","")}};f.prototype.add_param_to_url=function(a,c){var b=a.indexOf("?"),d="",e="";-1!==b?(d=a.slice(0,b+1),e="&"+a.slice(b+1)):(b=a.indexOf("#",-1===b?0:b),-1===b?d=a+"?":(d=a.slice(0,b)+"?",e=a.slice(b)));return d+c+e};f.prototype.is_under_experiment=function(a){return window.adroll_exp_list&&0<=window.adroll_exp_list.indexOf(a)};f.prototype.load_experiment_js=function(){var a=window.document.getElementById("adroll_scr_exp");return a?a:this.add_script_element("https://s.adroll.com/j/exp/"+window.adroll_adv_id+"/index.js",{id:"adroll_scr_exp",onError:"window.adroll_exp_list = [];"})};f.prototype.is_experiment_js_loaded=function(){return!!window.adroll_exp_list};
f.prototype.is_test_advertisable=function(){return"ADV_EID"===this._global("adroll_adv_id")};f.prototype.if_under_experiment_js=function(a,c,b,d){var e=this;this.load_experiment_js();this.on_experiment_loaded(function(){e.is_under_experiment(a)?c.call(e):b.call(e)},d)};f.prototype.on_experiment_loaded=function(a,c){function b(){if(e.is_experiment_js_loaded()||e.is_test_advertisable())d=!0;d?a.call(e):window.setTimeout(b,10)}var d=!1,e=this;window.setTimeout(function(){d=!0},c||500);b()};f.prototype.external_data_to_qs=function(a){var c=[],b=this.get_external_data();if(!b)return null;for(var d in b)b.hasOwnProperty(d)&&this._is_defined(b[d])&&null!==b[d]&&c.push(this.normalize_var(window.escape(""+d)+"="+window.escape(""+b[d]),!1));c=c.join("&");a&&(c=window.escape(c));return"adroll_external_data="+c};
f.prototype.replace_external_data=function(a){var c=this.get_external_data(),b=this.get_conversion_value(),d=null,e;if(c)for(e in c)c.hasOwnProperty(e)&&(d=new RegExp("\\["+e+"\\]","gi"),a=a.replace(d,c[e]),d=new RegExp("\\["+e+"_ESC\\]","gi"),a=a.replace(d,window.escape(c[e])));if(b)for(e in b)b.hasOwnProperty(e)&&(d=new RegExp("\\["+e+"\\]","gi"),a=a.replace(d,b[e]),d=new RegExp("\\["+e+"_ESC\\]","gi"),a=a.replace(d,window.escape(b[e])));return a};
f.prototype.get_external_data=function(){if(this._has_global("adroll_custom_data")){var a=this._global("adroll_custom_data"),c={},b;for(b in a)a.hasOwnProperty(b)&&"undefined"!==a[b]&&(c[b.toLowerCase()]=a[b]);return c}return null};
f.prototype.get_conversion_value=function(){var a=this._ensure_global("adroll_currency",null),c=this._ensure_global("adroll_conversion_value",null),b=this._ensure_global("adroll_conversion_value_in_dollars",null);return c?{conv_value:""+c,currency:a}:b?{conv_value:""+parseInt(100*b),currency:"USC"}:null};f.prototype._has_global=function(a){return this._is_defined(this._global(a))};f.prototype._global=function(a){return window[a]};f.prototype._set_global=function(a,c){window[a]=c};f.prototype._unset_global=function(a){delete window[a]};f.prototype._ensure_global=function(a,c){this._has_global(a)||this._set_global(a,c);return this._global(a)};f.prototype.jsonStringify=function(a){this.jsonStringifyFunc||this.initJsonStringify();return this.jsonStringifyFunc(a)};f.prototype.jsonParse=function(a){var c=this._global("JSON");return"function"===typeof c.parse?c.parse(a):eval("("+a+")")};
f.prototype.initJsonStringify=function(){var a=this._global("JSON");this.jsonStringifyFunc=a||a.stringify&&"function"===typeof a.stringify?a.stringify:function(){function a(c){return e[c]||"\\u"+(c.charCodeAt(0)+65536).toString(16).substr(1)}var b=Object.prototype.toString,d=Array.isArray||function(a){return"[object Array]"===b.call(a)},e={'"':'\\"',"\\":"\\\\","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t"},m=/[\\"\u0000-\u001F\u2028\u2029]/g;return function q(k){if(null===k)return"null";
if("number"===typeof k)return isFinite(k)?k.toString():"null";if("boolean"===typeof k)return k.toString();if("object"===typeof k){if("function"===typeof k.toJSON)return q(k.toJSON());if(d(k)){for(var g="[",h=0;h<k.length;h++)g+=(h?", ":"")+q(k[h]);return g+"]"}if("[object Object]"===b.call(k)){g=[];for(h in k)k.hasOwnProperty(h)&&g.push(q(h)+": "+q(k[h]));return"{"+g.join(", ")+"}"}}return'"'+k.toString().replace(m,a)+'"'}}()};f.prototype.macro_values=function(){var a=this._ensure_global("adroll_cpm_macro",null),c=this._ensure_global("adroll_url_macro",null),b=this._ensure_global("adroll_c_macro",null),d=this._ensure_global("adroll_subnetwork",null),e=this._ensure_global("adroll_ad_payload",null),m=this._ensure_global("adroll_win_notif",null),p=this._ensure_global("adroll_rtb_dict",null),q={r:/^\$\{.*\}$/i,g:/^%%.*%%$/i,b:/^\[.*\]$/i,x:/^\$\{.*\}$/i,t:/INSERTCLICKTRACKER/}[this._global("adroll_ext_network")],q=this._is_defined(q)?
q:/CANNOT_MATCH_THIS/,k={};a&&!q.test(a)&&(k.adroll_cpm_macro=a);c&&!q.test(c)&&(k.adroll_url_macro=c);b&&!q.test(b)&&(k.adroll_c_macro=b);d&&!q.test(d)&&(k.adroll_subnetwork=d);e&&!q.test(e)&&(k.adroll_ad_payload=e);m&&!/^[|$]/.test(m)&&(k.adroll_win_notif=m);if(p&&("string"!==typeof p||!/^[|$]/.test(p))){if("string"===typeof p)try{0===p.indexOf("b64:")&&(p=atob(p.substr(4))),p=this.jsonParse(p)}catch(g){this.log("failed to parse: "+g),p={}}"object"===typeof p&&(k.adroll_rtb_dict=p)}return k};
f.prototype.format_macros=function(a,c,b,d){return this.macro_url_params(this.macro_values(),a,c,b,d)};
f.prototype.macro_url_params=function(a,c,b,d,e){e=this._is_defined(e)?e:!1;var m=d?window.escape:function(a){return a},p=a.adroll_cpm_macro,q=a.adroll_url_macro,k=b?a.adroll_c_macro:null,g=[],h=c?this.parseUri(c):null,h=h?this.endswith(h.path,".tp"):!1;!h&&e&&g.push(["desturl",""]);k&&0===k.indexOf("http")?(e=m,"g"===this._global("adroll_ext_network")&&(e=d?function(a){return a}:window.unescape),g.push(["clickurl",e(k)])):h&&e&&g.push(["clickurl",""]);this._global("adroll_ext_network")&&g.push(["adroll_network",
this._global("adroll_ext_network")]);p&&g.push(["cpm",p]);a.adroll_subnetwork&&g.push(["adroll_subnetwork",a.adroll_subnetwork]);a.adroll_ad_payload&&g.push(["adroll_ad_payload",a.adroll_ad_payload]);q&&(a=this.parseUri(window.unescape(q)),g.push(["site_url",m("http://"+a.host)]),b&&(g.push(["adroll_width",m(this._global("adroll_width"))]),g.push(["adroll_height",m(this._global("adroll_height"))])));this.log("Macros found "+this.serialize(g));return c?this.buildurl(c,g):this.serialize(g)};
f.prototype.serialize=function(a){if(a.length){for(var c=[],b=a.length-1;0<=b;b--)c.push(a[b].join("="));return c.join("&")}return""};f.prototype.endswith=function(a,c){return-1!==a.indexOf(c,a.length-c.length)};f.prototype.buildurl=function(a,c){var b=this.serialize(c),d=a.indexOf("?");return b?d===a.length-1?a+b:-1!==d?"&"===a[a.length-1]?a+b:a+"&"+b:a+"?"+b:a};f.prototype.md5=function(){function a(a,c){var b=(a&65535)+(c&65535);return(a>>16)+(c>>16)+(b>>16)<<16|b&65535}function c(c,b,d,h,l,e){b=a(a(b,c),a(h,e));return a(b<<l|b>>>32-l,d)}function b(a,b,d,h,l,e,m){return c(b&d|~b&h,a,b,l,e,m)}function d(a,b,d,h,l,e,m){return c(b&h|d&~h,a,b,l,e,m)}function e(a,b,d,h,e,m,p){return c(d^(b|~h),a,b,e,m,p)}function m(m,k){var g=m[0],h=m[1],l=m[2],n=m[3],g=b(g,h,l,n,k[0],7,-680876936),n=b(n,g,h,l,k[1],12,-389564586),l=b(l,n,g,h,k[2],17,606105819),h=b(h,l,n,g,k[3],
22,-1044525330),g=b(g,h,l,n,k[4],7,-176418897),n=b(n,g,h,l,k[5],12,1200080426),l=b(l,n,g,h,k[6],17,-1473231341),h=b(h,l,n,g,k[7],22,-45705983),g=b(g,h,l,n,k[8],7,1770035416),n=b(n,g,h,l,k[9],12,-1958414417),l=b(l,n,g,h,k[10],17,-42063),h=b(h,l,n,g,k[11],22,-1990404162),g=b(g,h,l,n,k[12],7,1804603682),n=b(n,g,h,l,k[13],12,-40341101),l=b(l,n,g,h,k[14],17,-1502002290),h=b(h,l,n,g,k[15],22,1236535329),g=d(g,h,l,n,k[1],5,-165796510),n=d(n,g,h,l,k[6],9,-1069501632),l=d(l,n,g,h,k[11],14,643717713),h=d(h,
l,n,g,k[0],20,-373897302),g=d(g,h,l,n,k[5],5,-701558691),n=d(n,g,h,l,k[10],9,38016083),l=d(l,n,g,h,k[15],14,-660478335),h=d(h,l,n,g,k[4],20,-405537848),g=d(g,h,l,n,k[9],5,568446438),n=d(n,g,h,l,k[14],9,-1019803690),l=d(l,n,g,h,k[3],14,-187363961),h=d(h,l,n,g,k[8],20,1163531501),g=d(g,h,l,n,k[13],5,-1444681467),n=d(n,g,h,l,k[2],9,-51403784),l=d(l,n,g,h,k[7],14,1735328473),h=d(h,l,n,g,k[12],20,-1926607734),g=c(h^l^n,g,h,k[5],4,-378558),n=c(g^h^l,n,g,k[8],11,-2022574463),l=c(n^g^h,l,n,k[11],16,1839030562),
h=c(l^n^g,h,l,k[14],23,-35309556),g=c(h^l^n,g,h,k[1],4,-1530992060),n=c(g^h^l,n,g,k[4],11,1272893353),l=c(n^g^h,l,n,k[7],16,-155497632),h=c(l^n^g,h,l,k[10],23,-1094730640),g=c(h^l^n,g,h,k[13],4,681279174),n=c(g^h^l,n,g,k[0],11,-358537222),l=c(n^g^h,l,n,k[3],16,-722521979),h=c(l^n^g,h,l,k[6],23,76029189),g=c(h^l^n,g,h,k[9],4,-640364487),n=c(g^h^l,n,g,k[12],11,-421815835),l=c(n^g^h,l,n,k[15],16,530742520),h=c(l^n^g,h,l,k[2],23,-995338651),g=e(g,h,l,n,k[0],6,-198630844),n=e(n,g,h,l,k[7],10,1126891415),
l=e(l,n,g,h,k[14],15,-1416354905),h=e(h,l,n,g,k[5],21,-57434055),g=e(g,h,l,n,k[12],6,1700485571),n=e(n,g,h,l,k[3],10,-1894986606),l=e(l,n,g,h,k[10],15,-1051523),h=e(h,l,n,g,k[1],21,-2054922799),g=e(g,h,l,n,k[8],6,1873313359),n=e(n,g,h,l,k[15],10,-30611744),l=e(l,n,g,h,k[6],15,-1560198380),h=e(h,l,n,g,k[13],21,1309151649),g=e(g,h,l,n,k[4],6,-145523070),n=e(n,g,h,l,k[11],10,-1120210379),l=e(l,n,g,h,k[2],15,718787259),h=e(h,l,n,g,k[9],21,-343485551);m[0]=a(g,m[0]);m[1]=a(h,m[1]);m[2]=a(l,m[2]);m[3]=
a(n,m[3])}var p="0123456789abcdef".split("");return function(a){var c=a;/[\x80-\xFF]/.test(c)&&(c=unescape(encodeURI(c)));var b=c.length;a=[1732584193,-271733879,-1732584194,271733878];var d;for(d=64;d<=c.length;d+=64){for(var e=c.substring(d-64,d),n=[],r=void 0,r=0;64>r;r+=4)n[r>>2]=e.charCodeAt(r)+(e.charCodeAt(r+1)<<8)+(e.charCodeAt(r+2)<<16)+(e.charCodeAt(r+3)<<24);m(a,n)}c=c.substring(d-64);e=[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];for(d=0;d<c.length;d++)e[d>>2]|=c.charCodeAt(d)<<(d%4<<3);e[d>>2]|=
128<<(d%4<<3);if(55<d)for(m(a,e),d=0;16>d;d++)e[d]=0;e[14]=8*b;m(a,e);for(c=0;c<a.length;c++){b=a;d=c;e=a[c];n="";for(r=0;4>r;r++)n+=p[e>>8*r+4&15]+p[e>>8*r&15];b[d]=n}return a.join("")}}();f.prototype._gurl=function(){var a=window.location;return this.normalize_url(a.pathname+a.search)};f.prototype.get_dummy_product_for_facebook=function(a){return{product_id:"adroll_dummy_product",product_group:a,product_action:null,product_category:null}};f.prototype.facebook_dummy_product_enabled=function(){return!0};
f.prototype.extract_pid=function(a,c,b){function d(a){return a?(a=new RegExp(a,"gi"),!!a.exec(k)):null}a||(a={});var e=null,m=null,p=null,q=null,k=this._gurl(),g=this.get_external_data();g&&(m=g.product_id,e=g.product_group,p=g.product_action,q=g.adroll_product_category_id);if(!m&&a.regexp_group&&!("string"===a.regexp_group&&a.regexp_group instanceof String)&&"html"===a.regexp_group.scheme){if(d(a.blacklist_regexp)||!0!==d(a.regexp))return"";m=this.get_product_id_from_dom(a.regexp_group)}else if(!m){if(d(a.blacklist_regexp))return"";
m=this.get_product_id_from_url(k,a.regexp,a.regexp_group)}e||!a.product_group_group||"string"===a.product_group_group&&a.product_group_group instanceof String||"html"!==a.product_group_group.scheme?e||a.product_group_regexp&&(e=this.get_product_id_from_url(k,a.product_group_regexp,a.product_group_group)):e=this.get_product_id_from_dom(a.product_group_group);if(m)a={product_id:m,product_group:e,product_action:p,product_category:q};else if(this.facebook_dummy_product_enabled()&&"facebook"===c)a=this.get_dummy_product_for_facebook(e);
else return null;b&&b(a);return a};
f.prototype.get_pid=function(a){this.extract_pid(a,"adroll",function(a){if(a){var b=a.product_id,d=a.product_group,e=a.product_action,m=a.product_category;a=[];var p;if(b instanceof Array)for(p=0;p<b.length;p++)a.push(["adroll_product_id",this.normalize_var((b[p]+"").toLowerCase(),!0)]);else a.push(["adroll_product_id",this.normalize_var((b+"").toLowerCase(),!0)]);if(m instanceof Array)for(p=0;p<m.length;p++)a.push(["adroll_product_category_id",this.normalize_var((m[p]+"").toLowerCase(),!0)]);else m&&
a.push(["adroll_product_category_id",this.normalize_var((m+"").toLowerCase(),!0)]);d&&a.push(["adroll_product_group",this.normalize_var((d+"").toLowerCase(),!0)]);e&&a.push(["adroll_product_action",this.normalize_var((e+"").toLowerCase(),!0)]);(b=this.external_data_to_qs(!0))&&a.push([b]);b=this._srv(this.buildurl("/p/"+this._global("adroll_adv_id")+"/",a));d=window.document.createElement("img");d.src=b;d.height=d.width=1;d.border=0;d.setAttribute("alt","");this._head().appendChild(d)}}.bind(this))};
f.prototype.get_product_id_from_dom=function(a){var c=null,b;a.path&&(window.jQuery?(b=window.jQuery(a.path),b.length&&(b=b.eq(0),c="text"===a.attribute?b.text():b.attr(a.attribute))):window.Prototype&&window.$$?(b=window.$$(a.path),b.length&&(b=b[0],c="text"===a.attribute?b.innerText&&!window.opera?b.innerText:b.innerHTML.stripScripts().unescapeHTML().replace(/[\n\r\s]+/g," "):b.readAttribute(a.attribute))):window.YUI?(b=window.YUI().use("node"),b.one&&(b=b.one(a.path),c=null,b&&(c="text"===a.attribute?
b.get("text"):b.getAttribute(a.attribute)))):window.$$&&(b=window.$$(a.path),b.length&&(b=b[0],c="text"===a.attribute?b.get("text"):b.getProperty(a.attribute))));if(c&&(c=c.replace(/^\s\s*/,"").replace(/\s\s*$/,""),a.regular_expression&&a.regular_expression_replace))if(b=new RegExp(a.regular_expression,"gi"),c=b.exec(c),null!==c){a=a.regular_expression_replace;for(b=0;b<c.length;b++)a=a.replace(new RegExp("\\\\"+b,"gi"),c[b]||"");c=a}else c="";return c};
f.prototype.get_product_id_from_url=function(a,c,b){var d=null;try{d=parseInt(b)}catch(e){}return null!==d&&!isNaN(d)&&c&&(a=(new RegExp(c,"gi")).exec(a),null!==a&&d in a)?a[d]:null};f.prototype.render_pixel_code=function(a,c){var b=this;b._has_global("adroll_tpc")?b.render_pixel_code_exec(a,c):b.load_adroll_tpc(function(){b.render_pixel_code_exec(a,c)})};
f.prototype.render_pixel_code_exec=function(a,c){this.expire_old();var b=this._srv("/pixel"),d=window.document.createElement("script");d.setAttribute("async","true");d.type="text/javascript";var e=this.get_keywords();this.addLoadEvent(function(m){return function(){var p=[];try{200>=window.document.referrer.length&&p.push("adroll_s_ref="+window.escape(window.document.referrer))}catch(l){}try{p.push("keyw="+window.escape(e))}catch(l){}try{m._has_global("adroll_segments")&&p.push("name="+window.escape(m._global("adroll_segments").toLowerCase()))}catch(l){}try{m._has_global("adroll_p")&&
p.push("adroll_p="+window.escape(m._global("adroll_p")))}catch(l){}try{m._has_global("adroll_u")&&p.push("adroll_u="+window.escape(m._global("adroll_u")))}catch(l){}try{m._has_global("adroll_m")&&m._has_global("adroll_m_type")&&(p.push("adroll_m="+window.escape(m._global("adroll_m"))),p.push("adroll_m_type="+window.escape(m._global("adroll_m_type"))))}catch(l){}try{var q=m.get_conversion_value();q.conv_value&&p.push("conv_value="+q.conv_value);q.currency&&p.push("adroll_currency="+q.currency)}catch(l){}try{if(m._has_user_identifier()){var k=
m._global("adroll_user_identifier"),k=k.replace(/^\s\s*/,"").replace(/\s\s*$/,"");p.push("user_identifier="+window.encodeURIComponent(k))}}catch(l){}try{m._has_global("adroll_shop_id")&&(q={},m._has_global("adroll_custom_data")?q=m._global("adroll_custom_data"):m._set_global("adroll_custom_data",q),"undefined"===typeof q.adroll_shop_id&&(q.adroll_shop_id=m._global("adroll_shop_id")));var g=m.external_data_to_qs(!0);g&&p.push(g)}catch(l){}try{var h=window.location.href.split("#")[0];500>=h.length&&
p.push("arrfrr="+window.encodeURIComponent(h))}catch(l){}p=m.get_base_url(b,a,c,null,"",p);d.src=p;m._head().appendChild(d)}}(this));this.addLoadEvent(function(a){return function(){var c=a._global("adroll");if(c&&"object"===typeof c){c.identify=function(){return a.identify.apply(a,arguments)};c.track=function(){return a.track.apply(a,arguments)};for(var b,d,e=0;e<c.length;e++)b=c[e][0],d=c[e][1],"identify"===b?a.identify.apply(a,d):"track"===b&&a.track.apply(a,d)}}}(this))};
f.prototype.render_ad_code=function(a,c,b,d){d=this._is_defined(d)?d:null;if(!this._is_defined(this._r[c])||d){var e=["width="+this._global("adroll_width"),"height="+this._global("adroll_height"),"x=0","y=0"];if(b)this.log("Rendering test ad "+b+" in space "+c),e.push("test_ad="+b),a=this.get_url(a,c,null,"ad",e);else if(d){this.log("Rendering adgroup "+d);b=this.macro_values();var m=this.macro_url_params(b,!1,!1,!1,!1);e.push(m);this.render_win_notification(b);this.render_extra_script(b);a=this.get_url(a,
c,d,null,e)}else this.log("Rendering ad space "+c),a=this.get_url(a,c,null,"ad",e);this.expire_old();window.document.write('<script src="'+a+'">\x3c/script>');this._nad+=1;this._r[c]=1}};
f.prototype.render_win_notification=function(a){if(a.adroll_cpm_macro&&a.adroll_win_notif){var c=(this._secure()?"https://":"http://")+a.adroll_win_notif+a.adroll_cpm_macro;a.adroll_ad_payload&&(a.adroll_rtb_dict&&a.adroll_rtb_dict.waap||/waap=1&/.test(a.adroll_win_notif)&&!this._is_defined(a.adroll_rtb_dict))&&(c+="&ad_payload="+a.adroll_ad_payload);this.imgRequest(c)}};
f.prototype.render_extra_script=function(a){a.adroll_rtb_dict&&a.adroll_rtb_dict.extra_script_src&&this.add_script_element(a.adroll_rtb_dict.extra_script_src,{})};f.prototype.add_script_element=function(a,c){var b=window.document.createElement("script"),d=this._secure()?"https://":"http://";a.match(/^(\w+:)*\/\//)&&(d="");for(var e in c)c.hasOwnProperty(e)&&"src"!==e&&b.setAttribute(e,c[e]);b.type="text/javascript";b.src=d+a;this._head().appendChild(b);return b};
f.prototype.get_base_url=function(a,c,b,d,e,m){var p=a.split("?");a=p[0]+"/"+c+"/"+b+(d?"/"+d:"")+(e?"/"+e:"");var q="?";p[1]&&(a+="?"+p[1],q="&");var p=q+"no-cookies=1&pv=",k="";this.cookieEnabled(!1)?(k=window.escape(this.get_eids()),a+=q+"pv="+this.pv+"&cookie="+k):a+=p+this.pv;m&&(a+="&"+m.join("&"));a=this.add_tpc_to_url(a);if(a.length>this._url){this.del(this.__adc);if(a.length-k.length>this._url)return a;this.log("Url was too big, shrinking it");return this.get_url(c,b,d,e,m)}this.log("Generated url: "+
a);return a};f.prototype.get_url=function(a,c,b,d,e){var m=b?this._srv("/c"):this._srv("/r");return this.get_base_url(m,a,c,b,d,e)};f.prototype.get_eids=function(){if(this._global("adroll_ext_network")||this._global("adroll_optout"))return"";try{for(var a=this.get(this.__adc),c=a?a.split("|"):"",a=[],b=c.length-1;0<=b;b--)if(c[b]){var d=c[b].split(":");a.push([d[0],d[2]].join(":"))}return a.join("|")}catch(e){return this.del(this.__adc),""}};f.prototype.record_user=function(a){var c="adroll_conversion_value adroll_conversion_value_in_dollars adroll_segments adroll_email adroll_user_identifier adroll_currency".split(" "),b,d;a=a||{};var e={adroll_user_identifier:!0};for(b=0;b<c.length;b++){try{this._unset_global(c[b])}catch(m){}if(c[b]in a){c[b]in e?this._set_global(c[b],window.escape(a[c[b]])):"adroll_email"!==c[b]&&this._set_global(c[b],a[c[b]]);try{delete a[c[b]]}catch(m){}}}try{this._unset_global("adroll_custom_data")}catch(m){}for(d in a)if(a.hasOwnProperty(d)){this._set_global("adroll_custom_data",
a);break}this.render_pixel_code(this._global("adroll_adv_id"),this._global("adroll_pix_id"))};f.prototype.record_adroll_email=function(a){if(this._has_email()){var c=this._global("_adroll_email"),c=c.replace(/^\s+|\s+$/g,""),b,d=c.toLowerCase(),c=this.is_email_valid(c);this.is_already_hashed(d)?b=d:c&&(b=this.md5(d));b="https://d.adroll.com/id/"+this._global("adroll_adv_id")+"/?hashed_email="+b;c&&(d=d.split("@")[1],b+="&email_domain="+window.encodeURIComponent(d));a&&(b+="&idsource="+a);this.imgRequest(b)}};
f.prototype._send_plain_text_identifiers=function(a,c,b){(a||c)&&b&&(b="https://d.adroll.com/id/"+this._global("adroll_adv_id")+"/?idsource="+b,a&&(a=a.replace(/^\s+|\s+$/g,"").toLowerCase(),b+="&email="+window.encodeURIComponent(a)+"&hashed_email="+this.md5(a),a=a.split("@")[1],b+="&email_domain="+window.encodeURIComponent(a)),c&&(b+="&user_identifier="+window.encodeURIComponent(c)),this.imgRequest(b))};f.prototype._has_email=function(){return this._has_global("_adroll_email")};
f.prototype._has_user_identifier=function(){return this._has_global("adroll_user_identifier")&&"example_user_id"!==this._global("adroll_user_identifier")};f.prototype.is_already_hashed=function(a){return/^[a-f0-9]{32}$/.test(a)};f.prototype.is_email_valid=function(a){return/[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/.test(a)};
f.prototype.identify=function(a,c){(a.email||a.userId)&&this._send_plain_text_identifiers(a.email,a.userId,c||"adroll-identify");a.email&&this._set_global("_adroll_email",a.email);var b=this.copyObj(a,["email","userId"]);b&&(b="https://d.adroll.com/uat/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?user_attributes="+window.encodeURIComponent(this.jsonStringify(b)),c&&(b+="&idsource="+c),this.imgRequest(b));this._queueAndCallback("identify",[a,c])};
f.prototype.track=function(a,c){if(a){var b="https://d.adroll.com/uev/"+this._global("adroll_adv_id")+"/"+this._global("adroll_pix_id")+"/?event_name="+window.encodeURIComponent(a),d=this.copyObj(c);d&&(b+="&event_attributes="+window.encodeURIComponent(this.jsonStringify(d)));this.imgRequest(b);this._queueAndCallback("track",[a,c])}};
f.prototype._registerCallback=function(a,c,b){this.callbacks=this.callbacks||{};this.callbackNames=this.callbackNames||[];this.callbacks[a]=this.callbacks[a]||[];if(!("function"!==typeof c||-1<this.callbackNames.indexOf(b))&&(this.callbackNames.push(b),this.callbacks[a].push(c),this.callbackQueues&&this.callbackQueues[a]&&this.callbackQueues[a].length))for(b=0;b<this.callbackQueues[a].length;b++)c.apply(null,this.callbackQueues[a][b])};
f.prototype._queueAndCallback=function(a,c){this.callbackQueues=this.callbackQueues||{};this.callbackQueues[a]=this.callbackQueues[a]||[];this.callbackQueues[a].push(c);if(this.callbacks&&this.callbacks[a]&&this.callbacks[a].length)for(var b=0;b<this.callbacks[a].length;b++)this.callbacks[a][b].apply(null,c)};f.prototype.registerIdentifyCallback=function(a,c){this._registerCallback("identify",a,c)};f.prototype.registerTrackCallback=function(a,c){this._registerCallback("track",a,c)};f.prototype._is_defined=function(a){return"undefined"!==typeof a};f.prototype.normalize_var=function(a,c){if(!a)return"";a=a.toString().substr(0,this._kwl).replace(/,/gi,".");c&&(a=window.escape(a));return a};f.prototype.get_keywords=function(){try{var a=window.document.referrer||"";if(!a)return"";var c=this.parseUri(a);return-1!==c.host.indexOf("www.google.")?c.queryKey.q.substring(0,this._kwl):-1!==c.host.indexOf("bing.com")?c.queryKey.q.substring(0,this._kwl):""}catch(b){return""}};
f.prototype.parseUri=function(a){a=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@]*):?([^:@]*))?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a);for(var c={queryKey:{}},b=14,d="source protocol authority userInfo user password host port relative path directory file query anchor".split(" ");b--;)c[d[b]]=a[b]||"";c[d[12]].replace(/(?:^|&)([^&=]*)=?([^&]*)/g,function(a,b,d){b&&(c.queryKey[b]=d)});return c};
f.prototype._secure=function(){return!0};f.prototype._protocol=function(){return window.document.location.protocol};f.prototype._native=function(){try{return"http"!==this._protocol().slice(0,4)}catch(a){return!0}};f.prototype._srv=function(a){a=this._is_defined(a)?a:"";a=this.add_tpc_to_url("https://d.adroll.com"+a);this._has_global("__adroll_xid_ch")&&(a=this.add_param_to_url(a,"xid_ch="+(1===this._global("__adroll_xid_ch")?"t":"f")));return this.add_fpc_to_url(a)};
f.prototype._cdn=function(a){a=this._is_defined(a)?a:"";return"https://s.adroll.com"+a};f.prototype.log=function(a){this._logs.push(a)};f.prototype.read_log=function(a){return this._logs.join(a?"\n":"<br>\n")};f.prototype.normalize_url=function(a){return a.toLowerCase()};f.prototype.imgRequest=function(a){var c=new window.Image;c.src=this.add_tpc_to_url(a);c.setAttribute("width","1");c.setAttribute("height","1");c.setAttribute("border","0");c.setAttribute("alt","");return this._head().appendChild(c)};
f.prototype.b64toint=function(a){function c(a,b){if(1>b)return"";if(b%2)return c(a,b-1)+a;var d=c(a,b/2);return d+d}var b="",d;a=a.replace("-","+").replace("_","/");for(var e=0;e<a.length;e++)d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a[e]).toString(2),b=b+c("0",6-d.length)+d;return parseInt(b,2)};f.prototype.copyObj=function(a,c){if(!a)return null;var b={},d=0,e;for(e in a)!a.hasOwnProperty(e)||c&&-1!==c.indexOf(e)||(d++,b[e]=a[e]);return d?b:null};
f.prototype.wrapException=function(a){return function(c){try{return a(c)}catch(b){}}};f.prototype.add_tpc_to_url=function(a){var c=this._global("adroll_tpc");if(!a||!c)return a;var b=this.parseUri(a);return b.queryKey.adroll_tpc||"d.adroll.com"!==b.host&&"d.adroll.com"!==b.host+":"+b.port?a:this.add_param_to_url(a,"adroll_tpc="+encodeURIComponent(c))};
f.prototype.add_fpc_to_url=function(a){var c=this.get_first_party_cookie();if(!a||!c)return a;var b=this.parseUri(a);return b.queryKey.adroll_fpc||"d.adroll.com"!==b.host&&"d.adroll.com"!==b.host+":"+b.port?a:this.add_param_to_url(a,"adroll_fpc="+encodeURIComponent(c))};f.prototype.getSafariVersion=function(){var a=/^Mozilla\/5\.0 \([^)]+\) AppleWebKit\/[^ ]+ \(KHTML, like Gecko\) Version\/([^ ]+)( Mobile\/[^ ]+)? Safari\/[^ ]+$/i.exec(navigator.userAgent);return a?a[1]:null};
f.prototype.set_tpc=function(a,c){var b=this.tpc_callback();a&&c&&this._set_global("adroll_tpc",encodeURIComponent(a)+"="+encodeURIComponent(c));b&&b.call(this)};f.prototype.tpc_callback=function(a){var c=window.adroll_tpc_callback;window.adroll_tpc_callback=a;return a||window.adroll_xavier_called||(window.adroll_xavier_called=1,!this.call_xavier(c))?c:null};f.prototype.call_next_tpc=function(a){(a=this.tpc_callback(a))&&a.call(this)};
f.prototype.extract_query_param=function(a,c){for(var b=c.split("&"),d=0;d<b.length;d++){var e=b[d].split("=");if(decodeURIComponent(e[0])===a)return decodeURIComponent(e[1])}return null};f.prototype.get_adroll_sid=function(){var a=this.get_consent_params();return a&&(a=this.extract_query_param("_s",a))?a:this._global("adroll_sid")};f.prototype.call_consent_write=function(a){this.add_script_element(this._srv("/consent/write?"+a))};
f.prototype.call_consent_check=function(){var a=["_s="+this.get_adroll_sid(),"_b=2"];"#_ar_gdpr="===window.location.hash.substr(0,10)&&a.push("dbg="+unescape(window.location.hash.substr(10)));a="https://d.adroll.mgr.consensu.org/consent/iabcheck/"+this._global("adroll_adv_id")+"?"+a.join("&");this.add_script_element(a)};f.prototype.load_adroll_tpc=function(a){this.tpc_callback(a);if(this._consent_checked)return this.set_consent();this._consent_checked=!0;this.call_consent_check()};
f.prototype.get_tpc_decode_timeout=function(){return 1E3};f.prototype.set_first_party_cookie=function(){var a=this.get_first_party_cookie(!1);a?-1===a.indexOf("-s2-")&&(-1===a.indexOf("-")?this.set("__adroll_fpc",a+"-s2-",43800):this.set("__adroll_fpc",a.replace("-","-s2-"),43800)):(a=this.md5((new Date).getTime()+Math.round(1E11*Math.random())+window.navigator.userAgent.toLowerCase()+window.document.referrer)+"-s2-"+Date.now(),this.set("__adroll_fpc",a,43800))};
f.prototype.get_first_party_cookie=function(a){var c=this.get("__adroll_fpc");return c?!1!==a&&-1===c.indexOf("-s2-")?null:c.replace("-s2-","-").replace(/-$/,""):null};
f.prototype.call_xavier=function(a){function c(){window.RetrieveAdID&&(d=!0);if(d)if(window.RetrieveAdID){b.tpc_callback(a);var k=window.setTimeout(function(){b.set_tpc(null)},b.get_tpc_decode_timeout());window.RetrieveAdID(function(a){b._set_global("__adroll_xid_ch",1);window.clearTimeout(k);b.set_tpc(e,a)},function(a){b._set_global("__adroll_xid_ch",1);b.set_tpc(e,a)})}else b._set_global("__adroll_xid_ch",0),a&&a.call(b);else window.setTimeout(function(){c()},10)}var b=this,d=!1,e="xavier",m=navigator.userAgent.toLowerCase();
if("US"!==this._global("__adroll_consent_user_country")||window.location.hostname.match(/(rakuten\.co\.jp|summo\.jp|goo-net\.com|dmm\.com|beforward\.jp)$/))return b._set_global("__adroll_xid_ch",0),!1;if(0<=m.indexOf("(linux; android ")){var e="xaviera",p=m.substr(m.indexOf("linux; android ")+15).split(/\W/),m=parseInt(p[0]),q=parseInt(p[1]),p=parseInt(p[2]);if(isNaN(m)||4>m||4===m&&isNaN(q)||4===m&&0===q&&(isNaN(p)||3>p))return!1}else if(!navigator.userAgent.match(/\b(iPad|iPhone|iPod)\b/)||9>parseInt(m.substr(m.indexOf(") version/")+
10),10))return b._set_global("__adroll_xid_ch",0),!1;window.setTimeout(function(){d=!0},this.get_tpc_decode_timeout());if(this.is_under_experiment("xid_blacklist"))return!1;this.add_script_element("https://s.dca0.com/sdk.v3.3.min.js?1579109953");c();return!0};f.prototype.set_suspended=function(){this._set_global("__adroll_data_suspended",!0)};f.prototype.is_suspended=function(){return this._has_global("__adroll_data_suspended")};window.__adroll=window.__adroll||new f;}());
(function(a){a.adroll_optout=!1;a.adroll_ext_network=null;a.adroll_callbacks="undefined"===typeof a.adroll_callbacks?[]:a.adroll_callbacks;a.__adroll.render_pixel_code(a.adroll_adv_id,a.adroll_pix_id)})(window);
