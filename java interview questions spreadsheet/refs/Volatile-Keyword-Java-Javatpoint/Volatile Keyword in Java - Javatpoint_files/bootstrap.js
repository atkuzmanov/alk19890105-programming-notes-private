(function(g){function F(a){"$ignore"===a&&(e.define=w,w=null)}function G(a,b,c){c||(c=b,b=[]);k=0;z[a]=!0;p(b,function(){m[a]=c.apply(null,arguments)})}function p(){n.push(arguments);A()}function A(){var a,b,c,d,f,e,g,h;if(n.length){a=n;n=[];e={};l=[];for(b=a.length;b--;){d=[];g=!0;for(c=a[b][0].length;c--;)f=a[b][0][c],f in m?d[c]=m[f]:(e[f]||z[f]||(l.push(f),e[f]=!0),g&&(n.push(a[b]),g=!1));if(g){h=!0;try{a[b][1].apply(null,d)}catch(k){q(k,"runtime")}}}h?A():n.length&&!r&&(r=x(B,100))}}function B(){var a,
b,c,d,f=[];r=C(r);if(!k){y=C(y);for(a=l.length;a--;)d=l[a],t[d]?(l.splice(a,1),2>t[d]&&(t[d]++,f.push(d))):t[d]=1;k=l.length;f.length&&q(Error("Modules '"+f.join("', '")+"' failed to load"),"loadFailed");if(k){y=x(H,6E4);try{b=h.createElement("script"),b.src=I+"//s1.adform.net/stoat/620/s1.adform.net/load/v/0.0.184/e/"+m.$env.$hash()+"/i/"+m.$ignore+"/r:"+l.sort().join(":"),c=h.__gEBTN__("script")[0],b.onerror=J,c?c.parentNode.insertBefore(b,c):(h.body||h.head).appendChild(b)}catch(e){q(e,"script_insert")}}}}function J(){u("response_error",
this.src)}function H(){k=0;B()}function u(a,b,c,d){var f=[],e=g.Image;Math.random()<(c||.03)&&(f.push((v&&v.host||"//track.adform.net")+"/serving/jslog/"),f.push("?src="),f.push(encodeURIComponent(a)),f.push("&msg="),f.push(encodeURIComponent(b)),f.push("&level="),f.push(encodeURIComponent(d||"error")),a=e?new e(1,1):h.createElement("img"),a.src=f.join(""))}function q(a,b){var c=""+(a.stack||a);0>c.indexOf(a.message||"")&&(c=a+"\n"+c);x(function(){throw c;},0);u(b,c)}function D(){for(var a=arguments,
b=0,c=a.length,d=[];b<c;b++)K(a[b])||d.push(a[b]);return d.length?E.apply(e,d):e.length}function K(a){function b(b){b.apply(null,a.slice(1))}var c=a[0],d=m[c];d?b(d):p([c],b)}var w,E,r,y,l,e=g._adfq||(g._adfq=[]),h=g.document,x=g.setTimeout,C=g.clearTimeout,v=g.Adform,I=v&&"https:"===(v.shost||"").split("/")[0]||"https:"===g.location.protocol?"https:":"http:",m={require:p,$boot:{window:g,require:p,rethrow:q,log:u,deprecate:function(a,b,c){var d=!1;return function(){d||(u("deprecate",b,c,"info"),d=
!0);return a.apply(this,arguments)}}}},k=0,n=[],z={},t={};h.__gEBTN__=h.getElementsByTagName;(function(){var a;e.define?(w=e.define,e.define=F):(E=e.push,e.define=G,e.push=D,a=e.slice(),e.length=0,D.apply(e,a))})()})(window);
(function(a,h,c,b,e,O,M,N,P,Q,H,J,K,x,z,v,L,I,d){
a(h,[c],function(c){c=c.window;var a=c.Adform||{},d=a.ET||{},b=a.RMB||{},e=b.Content||{};b.Type=b.Type||{};b.Content=e;a.ET=d;a.RMB=b;return c.Adform=a});
a(b,[c],function(ha){function O(f){return f}function P(){function f(){for(var a=1,d=r;a<g.length&&!g[a];a++)d=d.parent;try{return d==d.Function("return window")()}catch(b){}}function v(a,d){var b=d.charAt(0).toUpperCase()+d.slice(1);return k(a,d,"ms"+b,"moz"+b,"webkit"+b)}function k(a){for(var d=arguments,b=d.length;--b;)if(d[b]in a)return d[b]}function c(a,d){return 0<=(""+a).toLowerCase().indexOf(d.toLowerCase())}var a=ha.window,e=a.document,w=e.documentElement,l=a.navigator,r=a.parent,
m=l.vendor,b=l.userAgent,x=a.location||{},y=e.createElement("div"),g=function(a){for(var d,b=100,c=a.top,e=[!0];--b&&a&&a!=c&&a!=a.parent;){try{d=!!(a=a.parent).Image}catch(f){d=!1}e.push(d)}return e}(a),t=a!=r,Q=!t||g[1],n=!t||g[g.length-1],R=t&&f(),N=function(){var b,d=l.plugins,c=l.mimeTypes,e=a.ActiveXObject,f=26,d=d&&d["Shockwave Flash"]&&(!c||!c["application/x-shockwave-flash"]||c["application/x-shockwave-flash"].enabledPlugin)&&(d["Shockwave Flash"].version||d["Shockwave Flash"].description)||
"";if(!d&&e)for(;6<=f--;)try{b=new e("ShockwaveFlash.ShockwaveFlash."+f);6==f&&(b.AllowScriptAccess="always",d="WIN 6.0.21.0");try{d=b.GetVariable("$version").replace(/,/g,".")}catch(g){}break}catch(g){}return parseFloat(d.replace(/^.*?(\d+[\.,].*$)/,"$1").replace(/(^\d+\.)|\./g,"$1"))||0}(),ia=v(e,"hidden"),D=!!ia,z=/MSIE|Trident/i.test(b),ja=z&&("Microsoft Internet Explorer"===l.appName&&/MSIE (\d+[\.\d]*)/i.exec(b)||/rv:(\d+[\.\d]*)/i.exec(b))?parseFloat(RegExp.$1):-1,y=k(y,"addEventListener"),
S=c(b,"Macintosh"),A=c(m,"apple computer"),E=c(b,"ipad"),F=c(b,"iphone"),p=E||F,q;q=p&&(q=/\sos\s(\d+)_\d+/i.exec(b))&&(q=4<q[1]>>0);var G=c(m,"google"),H=!p&&c(b,"android"),T="ontouchstart"in e||"ontouchstart"in a,I=(A||G)&&/(chrome|crios)+\/[\d\.]+\s/i.test(b),O=I&&/[chrome|crios]+\/([\d\.]+)\s/i.exec(b)[1],B=/Firefox\/[\d\.]+/i.test(b),U=c(b,"opera"),m=c(b,"opr")&&c(m,"opera software"),u=!/Chrome|CriOS|Skyfire/i.test(b)&&/Safari+\/[\.\d]+$/i.test(b)&&A,b=z&&(c(b,"IEMobile")||c(b,"WPDesktop")),
V=u&&!("webkitRequestAnimationFrame"in a),W="screenX"in a,X="outerWidth"in a,Y="mozInnerScreenX"in a,w=w.msContentZoomFactor,Z=!(!e.fireEvent||!e.attachEvent),P=v(a,"requestAnimationFrame"),aa=p&&!u&&!l.standalone,ba=k(a,"IntersectionObserver")&&!B,x=!!("srcdoc"in e.createElement("iframe"))&&c(x.href,"adform.com")&&!B,J=p||H,h=n?a.top.omid3p:a.omid3p;if(!h)try{h=a.frames.omid_v1_present||a.top.frames.omid_v1_present}catch(pa){}var h=!!h,e=D&&!h&&!J&&!b&&n&&k(e,"hasFocus"),ca=!n&&11==ja,K,da,C=a.wisp,
ka=C&&C.sdk&&C.sdk.platform,ea=u&&!n,la=a._adform&&a._adform.tagFrame,fa=!!la,ma=function(a){for(var b=g.length,c,e=0;e<b;e++)g[e]&&(c=a.mraid||c),a=a.parent;return c}(a),L=!!ma,M=l.sendBeacon&&!L,ga=!(!a.XMLHttpRequest&&!M||!a.FormData)&&!a.XDomainRequest,oa=function(){for(var b=a,d=r,c=g,e=1,f=c.length;e<f;e++)c[e]&&(b=d),d=d.parent;return b}();if("android"==ka||"ios"==ka)for(var na in C)if(/^adObject.+/i.test(na)){da=C[na].inscreen;K=!!da;break}return{result:[t,Q,n,R,D,z,y,S,A,E,F,p,q,G,H,T,I,
B,U,m,u,b,V,W,X,Y,w,Z,!1,aa,ba,x,J,h,e,ca,K,ea,fa,L,M,ga],exports:{nop:function(){},access:g,frame:t,accParent:Q,accTop:n,isolate:R,flashVersion:N,hidden:ia,hasHidden:D,isIE:z,ieVersion:ja,addEvent:y,isMac:S,isApple:A,isIPad:E,isIPhone:F,isIOS:p,isIOSF:q,isGoogle:G,isAndroid:H,isTouch:T,isChrome:I,chromeVersion:O,isFirefox:B,isOpera:U,isOperaWebkit:m,isSafari:u,isIEMobile:b,isSafari5OrLess:V,screenX:W,outerWidth:X,mozInnerScreenX:Y,msZF:w,ieDomEvents:Z,reqAni:P,isRad:!1,isIOSWebView:aa,intersectionAPI:ba,
hasSrcDoc:x,isIOSOrAndroid:J,isOMID:h,hasFocus:e,IEVisibility:ca,isWisp:K,wisp:da,RAFVisibility:ea,asyncFrame:la,isAsyncFrame:fa,mraid:ma,isMraid:L,hasBeacon:M,usePOST:ga,topAcc:oa,frame:t,accParent:Q,accTop:n,isolate:R,hasHidden:D,isIE:z,addEvent:y,isMac:S,isApple:A,isIPad:E,isIPhone:F,isIOS:p,isIOSF:q,isGoogle:G,isAndroid:H,isTouch:T,isChrome:I,isFirefox:B,isOpera:U,isOperaWebkit:m,isSafari:u,isIEMobile:b,isSafari5OrLess:V,screenX:W,outerWidth:X,mozInnerScreenX:Y,msZF:w,ieDomEvents:Z,isRad:!1,isIOSWebView:aa,
intersectionAPI:ba,hasSrcDoc:x,isIOSOrAndroid:J,isOMID:h,hasFocus:e,IEVisibility:ca,isWisp:K,RAFVisibility:ea,isAsyncFrame:fa,isMraid:L,hasBeacon:M,usePOST:ga}}}var N={$hash:function(){if(!r){for(var f=P(),v=f.result,f=f.exports,k=[],c=0,a=v.length,e=0,a=a+(6-a%6)%6;c<a;c++)e=e<<1|!!v[c],5==c%6&&(k.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789.-".charAt(e)),e=0);for(c in f)N[c]=f[c];r=k.join("")}return r}},r;try{if(!Function("return ("+O+")(1)===1")())throw"Incorrect eval result";
}catch(f){ha.log("function_constructor",f)}return N});
a(e,[c,b],function(n,d){var g=n.window,q=g.document,x=g.setTimeout;d.$hash();return function(a){var c,b,f,l,h,k,y=new Date;b=a.type;var r=a.placeId,z=/\.js(\?|$)/i,A=/\.swf(\?|$)/i,m=d.isIE,t=d.flashVersion,p=m&&10>d.ieVersion,m=!m&&21>t;c="standard"==a.type&&"flash"==a.subtype;var B=d.isSafari&&6.1<=d.safariVersion&&c,C=a.fVer||a.ADFVer||a.version,D=a.ADFPoliteSrc,u=a.sources||a.videoSources,v=["src","ADFFlash","ADFInitFlash","bsrc","ADFBuckup"];b=4==a.behavior?"Slider":b.charAt(0).toUpperCase()+
b.slice(1);c=["AdConstructor","types/"+b];if("Standard"==b){for(b=0;b<v.length;b++)(f=a[v[b]])&&(f.match(A)?l=f:f.match(z)?h=f:k=f);k&&p&&(h=0);k&&p&&(u=0);if(C>t||(k||h)&&(m||B))l=0;l?c.push("contents/FlashTag"):h?c.push("contents/HTML"):u&&c.push("contents/VideoTag");(!l&&!h&&k||D)&&c.push("contents/ImageTag")}n.require(c,function w(b,c){var e,d=b.cbuild;e="function"!==typeof c&&c;r?(e=q.getElementById(r)||e)?(a.placement=e.nextSibling||e.previousSibling,e&&e.parentNode.removeChild(e),d(a)):1E4>
new Date-y?x(function(){p&&(g.inDapMgrIf||g.inDapIF||g.inFIF)?w(b,q.body.firstChild):w(b)},0):n.rethrow("Failed to find placement","noplacement"):d(a)})}});
a(O,[c,h],function(f,g){function e(a){return h(a).random()}function h(a){var e={random:k,int32:function(){var b,a,e=[0,2567483615];if(624<=c)for(a=c=0;624>a;a++)b=d[a]&2147483648|d[(a+1)%624]&2147483647,d[a]=d[(a+397)%624]^b>>>1^e[b&1];b=d[c++];b^=b>>>11;b^=b<<7&2636928640;b^=b<<15&4022730752;return(b^b>>>18)>>>0}},d=[],c;a||(a=Math.round(1E5*((new Date).getTime()+Math.random())));d[0]=a>>>0;for(c=1;a=c-1,624>c;c++)a=d[a]^d[a]>>>30,d[c]=(1812433253*((a&4294901760)>>>16)<<16)+1812433253*
(a&65535)+c,d[c]>>>=0;return e}function k(){return Math.floor(this.int32()/65535)}g.random=f.deprecate(e,"Adform.random is deprecated. Use h/random instead.");return e});
a(M,[c,h],function(e,a){function l(a,c){var f=c?9==c.nodeType?c:c.document:m;0<=a.indexOf('"')&&e.log("xss_detected",a);f.write('<script type="text/javascript" src="'+a+'">\x3c/script>')}function n(e){for(var c=a._prepareBannerDataCB,f={},d="ADFVideoCDN ADFDomainCDN ADFDomain VideoCDN ADFVideoCDNList ADFcmpgnID ADFmembID ADFtagID ADFafbanID ADFBanVer ADFBanVerBak ADFbanID ADFbanPlacID ADFUnloadID ADFClientSiteId ADFGeoData ADFGroupId ADFTemplateVersion ADFTemplateId ADF_ClickEvent".split(" "),
g=d.length-1;0<=g;g--)d[g]in h&&(f[d[g]]=h[d[g]]);var k=a.RMBData={clicktags:""};a._prepareBannerDataCB=function(){for(var b=d.length-1;0<=b;b--)d[b]in f&&(h[d[b]]=f[d[b]]);a.prepareBannerData(e);for(b in k)a.RMBData[b]="clicktags"!=b?k[b]:a.RMBData[b]+k[b];c&&c()};c||l(a.scriptBase+"bootstrap/Adform.BannerData.js?v="+a.cache)}var h=e.window,m=h.document;a.host&&(ADFDynamicDomain=a.host+"/banners/");a.shost&&(ADFTemplateDomain=a.shost+"/banners/");a.ENV={akamaiHost:("https:"==m.location.protocol?
"https://":"http://")+"adformvod-vh.akamaihd.net/i/Banners"};a.Log=a.Log||{sendMessage:e.log};a.loadResource=a.loadResource||l;a.prepareBannerData=a.prepareBannerData||n;return{loadResource:a.loadResource,prepareBannerData:a.prepareBannerData}});
a(N,function(){function f(a){a=a||"";var b=a.split(";oobclicktrack=");b.shift();b.length&&(this.tracks=b);a=a.split("?");this._base=a.shift();this._parts=a.join("?").split(";");this.append=[]}function g(a,b,c){var d=a.length;b+="=";var e,f=b.length;for(c||(b=b.toLowerCase());d--&&(e=a[d].slice(0,f),c||(e=e.toLowerCase()),e!==b););return d}var h=Object.prototype.hasOwnProperty,e=f.prototype;e.copy=function(){var a,b=new f;for(a in this)h.call(this,a)&&(b[a]=this[a]&&this[a].slice?this[a].slice(0):
this[a]);return b};e.get=function(a,b){var c=this._parts,d=g(c,a,b);if(~d)return c[d].slice(a.length+1)};e.set=function(a,b,c){var d=this._parts;c=g(d,a,c);0>c?d.push(a+"="+b):d[c]=d[c].slice(0,a.length+1)+b;return this};e.unset=function(a,b){var c=this._parts,d=g(c,a,b);~d&&c.splice(d,1);return this};e.toString=function(){return this._base+"?"+this._parts.join(";")+this.append.join("")};return f});
a(P,[c,b,M],function(n,c,k){var f=n.window,a=f.document,p=k.loadResource,q=c.isIE&&10>c.ieVersion;return function(c,g){function k(b){b||n.log("dv_not_blocked",g.BN,1,"info")}function r(b){var d=a.createElement("div");d.innerHTML=b;return d.firstChild}function t(b){var d=a.createElement("script");d.src=b;return d}function l(b,a){b.appendChild(a)}var h=a.body,e="_adform_dv_"+ +new Date+"_"+(Math.random()+"").slice(2),m='<script type="text/adtag"><script>'+e+"();</scr+ipt>\x3c/script>";
q&&(m+='<script type="text/passback"><script>'+e+'("P");</scr+ipt>\x3c/script>');f.replaceDocumentWrite&&a.writeln===a.write&&h?(l(h,r(m)),l(h,t(c)),l(h,r("<script>\x3c/script>"))):(a.write(m),p(c),q||a.write("<script>"+e+'("F");\x3c/script>'));f[e]=function(a){f[e]=k;a&&g.set("bsdata",g.BSDATA);p(g.toString())}}});
a(Q,[c,b],function(k,l){function b(a,c){for(var d=[],e,f,b,g=0;g<a.length;g++)if(e=a[g])for(var h=0;h<c.length;h++)f=c[h],((b=e[f])||0==b)&&d.push(b);return d}return function(){if(l.accTop){var a=k.window.top,c=a.document,d=c.documentElement,e=c.body,c=b([a,d,e],["pageYOffset","scrollTop"])[0],f=Math.max.apply(null,b([d,e],["scrollHeight","offsetHeight","clientHeight"])),a=b([a,d,e],["innerHeight","clientHeight"])[0];return f==a&&0==c?1:0}}});
a(H,[c,b,h,e,O,M,N,P,Q],function(z,x,f,V,E,e,W,M,X){function r(){var a,b;if(t)return t;this.banners={};this.compoundBanners={};try{h.body||h.write("<html><body></body></html>")}catch(c){}a=n.browserLanguage||n.language||0;b=this.getWin();this.settings=[escape(n.systemLanguage||a),escape(a),w?w.width+"X"+w.height:0,x.flashVersion,50*Math.round(b.w/50),50*Math.round(b.h/50),w?w.colorDepth:0,8,3,7,this.hasIframeSanbox()].join("|")}
function N(a){function b(b){e(["3rdparty/vendor/Adform"],function(c){c(a,b)})}var c=a.placeId="+ADFP"+a.adfxid,d=a.innerTagId,f=["types/ThirdParty"],e=z.require;h.write('<i id="'+c+'" style="display:none"></i>');d&&(_adform.push([d+".on.setup",b]),f.push("3rdparty/vendor/Adform"));e(f,function(b){b(a)})}function O(a){var b,c,d;if(a=a||f.BannerList&&f.BannerList.shift()||f.RMBData)b=a.type,c=a.behavior,d=a.adfxid||a.ADFid,a._beforeScript=f._beforeScript,f._beforeScript=!1,{standard:1,expanding:1,singleExpanding:1}[b]&&
![0,0,0,1,1][c]&&(a.placeId="+ADFP"+d,b=t.banners[d],h.write('<div id="'+a.placeId+'"'+(b.singleTag?"":' style="width:'+b.width+"px;height:"+b.height+'px;"')+'></div><i style="display:none"></i>')),V(a)}function B(a,b,c){var d=(c=c||h).createElement("div");d.innerHTML='<iframe src="'+a+'" allowtransparency="true" webkitallowfullscreen mozallowfullscreen allowfullscreen marginwidth="0" marginheight="0" hspace="0" vspace="0" frameborder="0" scrolling="no" width="1" height="1" style="'+b+'"></iframe>';
c.body.appendChild(d.removeChild(d.firstChild))}function P(a){var b,c,d,e=/\/adfscript/,A=f.ADFIframe&&{src:g.location.href.replace(/cpjs=2/,"cpjs=0")};if(!A)for(b=h.getElementsByTagName("script"),c=b.length;c--&&!A;)(d=b[c]).src&&d.src.match(e)&&-1<d.src.indexOf(a)&&(A=d);return A||{}}function Y(a){var b,c;c=x.asyncFrame;var d=a;if("undefined"!=typeof a.URL){try{b=g.top.location.href.split("#")[0]}catch(f){b=c||g,b=(c=(c=b.location.ancestorOrigins)&&c[c.length-1])||b.document.referrer}b=b?C(b):a.CREFURL;
d=new W(a.URL);d.append.push("&CREFURL="+b);d.CREFURL=b;d.STUBFILE=a.STUBFILE;d.BSURL=a.BSURL;d.BSDATA=a.BSDATA;d.BN=a.BN;d.ROTSEQ=a.ROTSEQ}return d}function F(a,b){try{if(a){(b=b||[]).push(a);for(var c=0;c<a.frames.length;c++)F(a.frames[c],b);return b}}catch(d){}}function Q(a){return E(a+this.id)}function R(a){try{return a.Adform&&a.Adform.ADFUtilInstance}catch(b){}}function G(){return(new Date).getTime()}function S(a){try{return Z(a)}catch(b){return a}}var t,m,H,I,y,J,g=z.window,aa=g.top,h=g.document,
n=g.navigator,w=g.screen,ba=g.setTimeout,K=g.Image,ca=Object.prototype.hasOwnProperty,D=e.loadResource,C=g.encodeURIComponent,Z=g.decodeURIComponent,T=f.cache,L=[];e=r.prototype;var U={webkitVisibilityState:"webkitvisibilitychange",mozVisibilityState:"mozvisibilitychange",msVisibilityState:"msvisibilitychange",visibilityState:"visibilitychange"};_adform=g._adform||[];if(f.ADFBannerUtils)return f.ADFBannerUtils;for(y in U)y in h&&(H=y,I=U[y]);e.getCompoundBannerInfo=function(a){return this.compoundBanners["c"+
a]||null};e.createBanner=function(a){function b(a){var b=a.url;"stubFileExists"in q||(a.helper&&ba(function(){z.log("StubFileError","Cref: "+u+" > Adfserve: "+l+" > bn: "+v,0,"error")},100),(q.stubFileExists=a.exists)?(b=S(b),B(f.scriptBase+"iframe/recache.html?bv="+T,"position:absolute;width:10px;height:10px;left:-9999px;top:-9999px"),B(b+"#"+T+"#"+P(v).src,"position:absolute;top:0;left:0;width:100%;height:100%",x.asyncFrame)):((c=f.RMB)&&(c=c.AdConstructor)&&(c=c.cbuild)||(f.RMB=f.RMB||{},f.RMB.AdConstructor=
{build:O},f.thirdPartyCB=N),t?M(t,k):D(l)))}var c,d,e,g,l,p=this,m=p.getTagID(),q=p.addNewBanner(m,"undefined"==typeof f.ADFIframe?0:1),k=q.params=Y(a,p);g=k.get("compoundSeqNo");var v=k.BN;a=p.getCompoundBannerInfo(v);var n=p.getPropByBn("smid",v),w=k.ROTSEQ,u=k.CREFURL,r=k.STUBFILE,t=k.BSURL,y;k.tracks&&(q.OOBClickTracks=k.tracks);k.get("singleTag")&&(q.singleTag=!0,g=g||1,k.set("compoundSeqNo",g));q.compoundSeqNo=g;"prerender"==h[H]&&(k.set("hid",2),q.prerender=!0,h.addEventListener(I,function(){"prerender"!=
h[H]&&q.prerender&&(h.removeEventListener(I,arguments.callee,!1),p.registerImpression(q))},!1));g&&(g=p.getRotSeed(),d=g.gen(v),g.compound[v]?e=g.compound[v]:w&&(g.compound[v]=w));k.set("js",1);k.set("adfxid",m);k.set(Math.floor(11E3*Math.random())+";set",p.settings+"|"+X());d&&k.set("rotseed",d);e&&k.set("rotseq",C(e));a&&k.set("rotseqno",a.replace("r",""));n&&k.set("smid",n);f.CDNHost&&k.set("cdnhost",C(f.CDNHost));k.set("fd",x.accTop?""===aa.document.title?"2|2":"0|2":"0|0");l=k.toString();u&&
r&&!f.ADF_STUB&&(u=S(u).replace(/(:\/\/[^\/]+).*/,"$1"),y=r.HOST?u.split("/")[2]===r.HOST&&p.needStubFile(u):p.needStubFile(u));y?(f.stubFile=b,d=f.shost+"/adfstub/?url="+C(u+r.PATH),D(d),D(f.scriptBase+"extra/StubHelper.js?bv="+f.cache)):(f.ADF_STUB&&z.log("adfstub",v+" "+u,1,"info"),(c=f.RMB)&&(c=c.AdConstructor)&&(c=c.cbuild)||(f.RMB=f.RMB||{},f.RMB.AdConstructor={build:O},f.thirdPartyCB=N),t?M(t,k):D(l));return q};e.addNewBanner=function(a,b){return this.banners[a]={id:a,type:b,adfserveLoadTime:G()}};
e.copyBanner=function(a,b){var c,d=this.banners[a];if(d=d&&d.params||null){d=d.copy();for(c in b)ca.call(b,c)&&d.set(c,b[c]);d=this.createBanner(d)}return d};e.wipeOutBanner=function(a){var b=this.banners[a];b&&(m&&(m.id=E(),m.compound&&delete m.compound[b.bn]),delete this.compoundBanners["c"+b.bn],delete this.banners[a])};e.addBannerAttribute=function(a,b,c){(a=this.banners[a])&&(a[b]=c)};e.getTagID=function(){var a=this.getRotSeed();a.xId||(a.xId=0);return++a.xId+"x"};e.getRotSeed=function(){var a,
b,c,d,e;if(!m&&!J){J=!0;try{for(a=F(g.top),b=0,c=a.length;b<c;b++)if(d=a[b],d!=g&&(e=R(d))&&e.getRotSeed){m=e.getRotSeed();break}}catch(f){}m?m.gen=Q:m={compound:{},id:E(),gen:Q}}J=!1;return m};e.getFlashVersion=z.deprecate(function(){return x.flashVersion},"Utils_getFlash");e.getWin=function(){var a=h.documentElement,b=h.body;return{w:g.innerWidth||a&&a.clientWidth||b&&b.clientWidth,h:g.innerHeight||a&&a.clientHeight||b&&b.clientHeight}};e.getSettings=function(){return this.settings};e.firePixel=
function(a){("undefined"==typeof K?h.createElement("img"):new K).src=a};e.fireTargAdPixel=function(a){var b=this.TargAd||{};b[a]||((this.TargAd=b)[a]=!0,a=a.replace("{gmtr}",Math.floor(9999999999*Math.random())).replace("{gmttzd}",(new Date).getTimezoneOffset()),this.firePixel(a))};e.registerImpression=function(a){var b,c;a&&a.prerender&&(b=a.params.copy(),b.set("hid",1),a.rotseqno&&b.set("rotseqno",a.rotseqno),c=h.createElement("script"),c.src=b.toString(),c.type="text/javascript",h.body.appendChild(c),
delete a.prerender)};e.addCompoundBannerInfo=function(a,b){this.compoundBanners["c"+a]="r"+b};e.setBannerRegisteredStatus=function(a){var b,c,d=this.banners[a];if(d){var e=G(),g=e-d.adfserveLoadTime,l=parseInt(d.serverTime,10),h=f.ADFEventsInstance;d._host=f.host;d.adfserveLoadTime=g;l&&(l+=Math.round(.5*g),d.serverTime=l,d.timeDiff=l-e);d.registered=1;this.sendLoadMetrics(a);if(d.singleTag&&1==d.compoundSeqNo)for(b=2,c=d.syncMembersCount;b<=c;b++)this.copyBanner(a,{compoundSeqNo:b,compoundImpr:0});
try{for(h&&h.register(d),b=0,c=L.length;b<c;b++)L[b].call(this)}catch(m){}}};e.onBannerRegisteredStatus=function(a){L.push(a)};e.hasIframeSanbox=function(){var a=this._sandbox;if("number"!=typeof a){a=1;try{g.top.document.getElementById,a=0}catch(b){}this._sandbox=a}return a};e.getPropByBn=function(a,b){var c,d,e=this.banners;for(c in e)if(d=e[c],d.bn==b&&a in d)return d[a]};e.now=G;e.needStubFile=function(a){var b=g.$sf,c=g.parent,d=this._stub,e=x.asyncFrame,f=/^https?:/,l=g.location.protocol;if(null==
d){d=!(g==c||g.inDapMgrIf||g.inDapIF||g.inFIF||b&&b.ext);!d&&e&&(d=!0,c=e.parent);if(d)try{c.document.getElementById,d=!1}catch(h){}d&&(l=l.match(f)?l:null,x.accParent&&!l&&(l=c.location.protocol,l=l.match(f)?l:null),d=a.split("/")[0]===l);this._stub=d}return d};e.getAdfscript=P;e.getUnloadId=function(a){try{for(var b,c,d,e,f=F(g.top),h=f.length;h--;)for(d in b=(c=R(f[h]))&&c.banners,b)if(e=b[d],e.bn==a&&1==e.compoundSeqNo)return e.unloadID}catch(m){}};e.sendLoadMetrics=function(a){a=this.banners[a];
var b=g.ADFGeoData,c=(f.shost||"").split("/")[0]+"//"+"s1.adform.net/stoat/620/s1.adform.net/load".replace("/load","")+"/bootstrap.js",d=g.performance,c=(c=d&&d.getEntriesByName&&d.getEntriesByName(c))&&c[0]&&c[0].duration;!a.metricsSent&&"string"==typeof b&&.1>Math.random()&&(b=b.split(";"),3==b.length&&((new K).src=f.host+"/jsmetrics/?adfserve="+a.adfserveLoadTime+(c?"&asset="+parseInt(c,10):"")+"&sid="+b[2]+"&rid="+b[1]+"&cid="+b[0]));a.metricsSent=!0};e.loadFrame=B;e.loadTrackingIframes=function(a){var b=this.getRotSeed();if(a&&
a.length&&!b.framesLoaded)for(b.framesLoaded=!0,b=a.length;b--;)B(a[b],"display:none")};e.ADFCreateObjectCallback=function(a,b){return function(){b.apply(a,arguments)}};e.eventRegister=function(){};e.getPosition=function(a){for(var b={x:0,y:0};a;)b.x+=a.offsetLeft,b.y+=a.offsetTop,a=a.offsetParent;return b};e.getScrollXY=function(){var a=h.body,b=h.documentElement,c={x:0,y:0};"number"==typeof g.pageYOffset?(c.y=g.pageYOffset,c.x=g.pageXOffset):a&&(a.scrollLeft||a.scrollTop)?(c.y=a.scrollTop,c.x=a.scrollLeft):
b&&(b.scrollLeft||b.scrollTop)&&(c.y=b.scrollTop,c.x=b.scrollLeft);return c};e.getBrowser=function(){try{var a=n.userAgent;return~n.appVersion.indexOf("MSIE")&&0>a.indexOf("Opera")?"MSIE":~a.indexOf("Safari")?"Safari":~a.indexOf("Opera")?"Opera":~a.indexOf("Netscape")?~n.product.indexOf("Gecko")&&(~n.vendor.indexOf("Firefox")||~a.indexOf("Firefox"))?"Firefox":"Netscape":void 0}catch(b){}};f.ADFUtilInstance=t=new r;return f.ADFBannerUtils=r.getInstance=r});
a(J,[c,h,H],function(a,e,c){var l=Object.prototype.hasOwnProperty,m=a.window,n=m.document;a={Initialized:!1,InitTime:(new Date).getTime(),Host:e.host||("https:"==n.location.protocol?"https://":"http://")+"track.adform.net",callbacks:[],sendEvent:function(p,f,a,c,h){var d,g,b,k;g=Math.round(((new Date).getTime()-this.InitTime)/1E3);b=q.banners[p];k=e.adRegister&&e.adRegister[p];try{this.notifyAboutEvent.apply(this,arguments)}catch(l){}if(!b&&k)d=k.sendEvent(f,a,c,h);
else if(b&&b.isEventsEnabled){d=b.bn;!b._imprID&&1<b.compoundSeqNo&&(b._imprID=q.getUnloadId(d)||b.unloadID);g=["bn",d,"event",f,"time",(0>g?0:3600<g?3600:g)+"","baid",b.ban,"innerbanner",b.innerban,"asid",a,"name",c,"imprid",b._imprID||b.unloadID,"icid",b.cookieID,"eData",b.eData,"adxvars",b.adxvars,"rnd",Math.floor(1E9*Math.random())];b=0;for(d=[];b<g.length;b+=2)(k=g[b+1])&&d.push(g[b]+"="+encodeURIComponent(k));d=this.Host+"/Serving/Event/?"+d.join("&")+(h||"");(m.Image?new m.Image(1,1):n.createElement("img")).src=
d}return d},Initialize:a.deprecate(function(){this.Initialized=!0},"initEvents",1),registerCallback:function(a,f){"function"==typeof a&&this.callbacks.push([a,f])},unregisterCallback:function(a){var f=this.callbacks,c=f.length;if("function"==typeof a)for(;c--;)f[c][0]==a&&f.splice(c,1)},notifyAboutEvent:function(){for(var a=this.callbacks.slice(),c=0,e=a.length;c<e;c++)a[c][0].apply(a[c][1]||this,arguments)}};var q=c();if(c=e.Events){for(var h in a)l.call(a,h)&&!l.call(c,h)&&(c[h]=a[h]);c.sendEvent=
a.sendEvent}else c=e.Events=a;e.ADFEvents2||(e.ADFEvents2=c);return a});
a(K,[c,h],function(g,b){function d(c){try{var e=c.URL,d=c.BN,h,a,n,k;c=/\/adfscript/;var l=b.ADFIframe&&{src:r.location.href.replace(/cpjs=2/,"cpjs=0")};if(!l)for(a=m.getElementsByTagName("script"),n=a.length;n--&&!l;)(k=a[n]).src&&k.src.match(c)&&-1<k.src.indexOf(d)&&(l=k);h=l||m.currentScript||{};var f=m.createElement("div");a=h;var p,t,q,u,e=e.split(";");e[0]+=";srctype=6";for(e=e.join(";");a;)p="BODY"==a.nodeName,t="HEAD"==a.nodeName,a=!(p||t)&&a.parentNode;p?(q=h.parentNode,u=
h):q=m.body;f.innerHTML='<a href="'+b.host+"/C/?bn="+d+';C=0"><img src="'+e+'"></a>';q.insertBefore(f.firstChild,u||null);g.log("fallback",d)}catch(v){g.rethrow(v,"fallback_error")}}var f,r=g.window,m=r.document;g.require(["$ignore"],function(){var c=b.ADFBannerParams;f||(b.ADFUtilInstance||(b.ADFUtilInstance={}),b.ADFBanner||(b.ADFBanner=d),d(c&&c.length?c.shift():b.ADFBannerData))});return{cancel:function(){f=!0},write:d}});
a(x,[h],function(l){function g(){}function h(b){b?this._events&&this._events[b]&&delete this._events[b]:delete this._events;return this}function k(b){var a=this._events;a||(this._events=a={});return a[b]||(a[b]=[])}var m=Array.prototype.slice,f=g.prototype;l.RMB.EventEmitter=g;f.emit=function(b){var a,c,d,e=this._events;if(e&&(e=e[b])&&(c=e.length))for(d=m.call(arguments,1),e=e.slice(),a=0;a<c;a++)e[a].apply(this,d);return this};f.on=function(b,a){this.emit("newListener",b,a);k.call(this,
b).push(a);return this};f.once=function(b,a){var c=function(){return a.apply(this.off(b,c),arguments)};c._oncep=a;return this.on(b,c)};f.off=function(b,a){var c,d=(c=this._events)&&c[b];if(d){for(c=d.length;c--;)d[c]!=a&&d[c]._oncep!=a||d.splice(c,1);d.length||h.call(this,b);this.emit("removeListener",b,a)}return this};f.clear=h;f.list=k;return g});
a(z,[c,H],function(t,x){function m(g,l){for(var a in l)l.hasOwnProperty(a)&&("object"==typeof l[a]?("object"!=typeof g[a]&&(g[a]={}),m(g[a],l[a])):g[a]=l[a])}var q=t.window,y=q.parent,r={useClose:"expImage.useClose",overlay:"overlay",wallpaper:"options.wallpaper",x:"options.x",y:"options.y",hidden:"options.hidden",position:"options.position",adNotice:"options._adNotice",fixedBounding:"options.fixedBounding",resizeInFIF:"options.iabResize",panel:"panel",responsive:"options.responsive",
testPlace:"options.testPlace"};return function(g,l){var a,u,h,f,n,c,d,b,v,k;d=g.options;b=d.bn;c=x();var e;try{e=((d.iab?y:q)._adform||[]).slice(0)}catch(w){e=[]}var z=/(?:(\d+x|\d+#\d+|#[-_0-9a-z]+|\d+))?\.?(.*)/i,p={};d.iab&&e.push.apply(e,q._adform||[]);c&&c.getPropByBn&&(c=c.getPropByBn("multiPanel",b))&&e.push.apply(e,c);if(c=(d.userParams||{})._adform)try{if((c=Function("return ("+c+")")())&&"object"==typeof c)(e=e||[]).push([d.xId,c]);else throw Error("_adform from userParams should be an object");
}catch(w){t.rethrow(w,"user_params")}if("[object Array]"==Object.prototype.toString.call(e)&&e.length){d=l||["",b,"#"+d.seqNo,b+"#"+d.seqNo,d.xId];b=0;c=d.length;for(v=e.length;b<c;b++)p[d[b]]={};for(b=0;b<v;b++)if(a=e[b][0].match(z),u=p[a[1]||""]){h=e[b][1];if(a[2]){a=a[2].split(".");for(n=f={};1<a.length;)f=f[a.shift()]={};f[a[0]]=h;h=n}if(a=h.on)for(k in a){if("function"==typeof a[k])g.events.on(k,a[k])}else if(h.init)g.events.on("init",h.init);a={};for(f in h)r[f]&&(a[f]=h[f]);m(u,a)}k=p[d[0]];
for(b=1;b<c;b++)m(k,p[d[b]]);for(b in r)if(b in k){a=r[b].split(".");for(n=f={};1<a.length;)f=f[a.shift()]={};f[a[0]]=k[b];m(g,n)}}}});
a(v,[c,b],function(d,f){return function(a,b){var c=d.window,g=c.navigator,e=c.Image;try{f.hasBeacon?g.sendBeacon(a,""):((new e).src=a,b&&c!=b&&((new b.Image).src=a))}catch(h){(new e).src=a,d.log("beacon_failure",h+"_"+a,.1,"info")}}});
a(L,[c,h,H,x,z,v],function(v,q,z,I,J,K){function t(c){for(var d=0,k=c.length;d<k;d++){var a=c[d],l=void 0,p=void 0,e,h,f,t=q.scriptBase,u=q.cache,b,g,r;f=void 0;h=a.xId;var A=a.externalScripts,B=a.trackingPixelUrls;b=a.banner;var w=b.backup,m=b.type,H=b.innerTagId;g=b.clickUrls;var z=a.visibility.testMode,G=a.trackingIframeUrls;r=a.geoLocation;var n={};e=a.csImpressionUrl;var C=x.banners[h];A&&(l=A.before,p=A.after);l&&(D(l),q._beforeScript=
!0);x.loadTrackingIframes(G);C&&(E(L,a,C),C.isDSPTag="dsp"===a.impressionType,x.setBannerRegisteredStatus(h));if("thirdparty"===m.type){b={bn:b.tagId,xId:h,bannerId:b.id};g={adfxid:h,options:b};H&&(g.innerTagId=H);r=g.events=new I;a=a.banner.script;J(g,[b.bn]);q.thirdPartyCB&&q.thirdPartyCB(g);try{r.emit("setup",g)}catch(F){v.rethrow(F,"setup")}try{(f=b.wrapper)?y.write(M(f,a)):y.write(a)}catch(F){v.rethrow(F,"thirdPartyWrite")}e&&K(e)}else if("standard"!=m.type||"image"!=m.subType&&"flash"!=m.subType&&
"html"!=m.subType)v.log("rollback",b.tagId+" banner not rendered",1,"error");else{f=b.properties;f={type:m.type,subtype:m.subType,landingPageTarget:f.landingTarget,ADFFlash:b.asset&&b.asset.url||b.url,ADFBuckupClickURL:w&&w.clickUrl||a.clickUrl,width:b.size.width,height:b.size.height,ADFid:h,ADFban:b.tagId,bannerAlign:f.align,clicktags:n,flashvars:n,defaultClickTAG:g[0]&&g[0].name,css:t+"assets/css/Adform.RMB.css?bv="+u,quality:f.quality,wmode:f.wMode,fVer:f.flashVersion};w&&(f.ADFBuckup=w.url);e=
0;for(h=g.length;e<h;e++)n[g[e].name]=encodeURIComponent(g[e].url);E(N,a,n);n.domain=encodeURIComponent(a.staticContentUrl);n.bn=b.tagId;n.geo=[r.city.id,r.region.id,r.country.id].join(";");q.RMB.AdConstructor.build(f)}if(B)for(e=0,h=B.length;e<h;e++)x.fireTargAdPixel(B[e]);p&&D(p);z&&D([t+"unload/Adform.Inscreen.js?"+u])}}function u(){G.apply(this,arguments);t(arguments)}function D(c){for(var d=0;d<c.length;d++)y.write('<script src="'+c[d]+'">\x3c/script>')}function E(c,d,k){var a,l;for(a in c)l=
c[a],"string"===typeof l?null!=d[a]&&(k[l]=d[a]):d[a]&&E(l,d[a],k)}function M(c,d){var k=y.createElement("div");k.innerHTML=c;var a=k.firstChild;a.innerHTML=d;return a.firstChild&&1==a.firstChild.nodeType?k.innerHTML:d}var p=v.window,y=p.document,G=Array.prototype.push,x=z(),L={visitor:{cookieId:"cookieID",isMobile:"isMobile"},csImpressionUrl:"csImpressionUrl",eData:"eData",uData:"uData",interactionId:"unloadID",visibility:{sendUnload:"sendUnloadData",area:"visibilityArea",time:"visibilityTime"},
serverTime:"serverTime",banner:{id:"ban",version:"bannerVersion",template:{dcoEngineId:"dcoEngineId"},size:{width:"width",height:"height"},rotationSeqenceNumber:"rotseqno",smId:"smid",tagId:"bn",campaignId:"pm",membershipId:"ms",bannerPlacementId:"bnpl",isEventEnabled:"isEventsEnabled"},isAdNoticeEnabled:"adNotice",publisher:{adxvars:"adxvars",publisherUnloadData:"publisherUnloadData",visibility:{area:"publisherVisibilityArea",time:"publisherVisibilityTime"}},dsp:{inventorySourceId:"rtbInventorySourceId",
requestId:"rtbReqId",rtbdata:"rtbdata",rtbwp:"rtbwp"},disableFlash:"disableFlash"},N={banner:{clientSiteId:"cid",template:{groupId:"gid",version:"tv",id:"tid"},version:"bv",campaignId:"ADFcmpgnID",membershipId:"ADFmembID",id:"ADFbanID",bannerPlacementId:"ADFbanPlacID",properties:{wMode:"wmode"},dynamicAdContent:"dynamicAdContent"},xId:"ADFid",interactionId:"unloadID",trackingSetupId:"trackingSetupId"};return function(){var c=p.adfjsonbanners;c?(c.push=u,t(c)):(c=[],c.push=u,p.adfjsonbanners=c)}});
a(I,[c,h,J,K,H,L],function(g,a,c,f,h,k){function d(){var b=a.ADFBannerParams,e=b&&b.length?b.shift():a.ADFBannerData;if(e)try{h().createBanner(e)}catch(c){g.rethrow(c,"create_banner"),f.write(e)}b&&b.length&&d()}a.ADFBanner||(a.ADFBanner=d,a.ADFBanner());k();c.IE=9;f.cancel();return d});
a(d,function(){return"8IC-4gAAAAKAA"});
})(_adfq.define,"Adform","$boot","$env","$main","h/random","bootstrap/Global","bootstrap/URL","bootstrap/dv","bootstrap/isAppView","bootstrap/Utils","bootstrap/Events","bootstrap/Fallback","common/EventEmitter","api/ARMA","h/beacon","bootstrap/adfjsonbanners","bootstrap/Banner","$ignore");