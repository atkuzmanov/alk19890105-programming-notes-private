!function a(b,c,d){function e(g,h){if(!c[g]){if(!b[g]){var i="function"==typeof require&&require;if(!h&&i)return i(g,!0);if(f)return f(g,!0);var j=new Error("Cannot find module '"+g+"'");throw j.code="MODULE_NOT_FOUND",j}var k=c[g]={exports:{}};b[g][0].call(k.exports,function(a){var c=b[g][1][a];return e(c||a)},k,k.exports,a,b,c,d)}return c[g].exports}for(var f="function"==typeof require&&require,g=0;g<d.length;g++)e(d[g]);return e}({1:[function(a,b,c){b.exports={ver:1,feedbackUrl:"//feedback.adrecover.com/ARWebService/feedback",frameDomain:"//delivery.adrecover.com",frameUrl:"/recover.html",xpathWaitTimeout:5e3,domain:"",previewSetupStr:"previewSetup",previewComplianceStr:"previewCompliance",adTextHeightAboveAd:14,heartBeatInterval:3e4,heartBeatStartDelay:2e3,noAdLabelSiteList:[21094,21273,21554,27796,27525],textAdLabelSiteList:[14199],customLabelTextSiteList:[21874,21873,21871,21870,21869,21868,21867,21866,21786,21785,21784,21777,21776,21775,21774,21773,21772,21770,21768,21767,21765,21764,21682,21333,21273,21185,21184,21183,21182,21181,20844,15899],noAdvertiserLinkSites:[21874,21873,21871,21870,21869,21868,21867,21866,21786,21785,21784,21777,21776,21775,21774,21773,21772,21770,21768,21767,21765,21764,21682,21333,21273,21185,21184,21183,21182,21181,20844,15899,27525]}},{}],2:[function(a,b,c){var d=window.jqAlias,e={criteoHostName:"cas.criteo.com",globalPassbackEventListenerAdded:!1,passbackEventListener:{},setupPassbackEventListener:function(a,b,c){var e=b.zoneId,f=this;this.globalPassbackEventListenerAdded||(this.globalPassbackEventListenerAdded=!0,window.addEventListener("message",function(a){if(-1!=a.origin.indexOf(f.criteoHostName)){var b=a.data.cb;if(b&&d('iframe[id*="crt-"][src*="cb='+b+'&"]')){var c=d('iframe[id*="crt-"][src*="cb='+b+'&"]'),e=c.parents("._adr_abp_iframe")[0].id;e&&f.passbackEventListener[e].zoneId===a.data.zoneId&&f.passbackEventListener[e].callback.call(null)}}},!1)),this.passbackEventListener[a]={zoneId:e,callback:c}},get:function(a,b){var c=b.zoneId,d=document.createElement("div"),e=document.createDocumentFragment(),f="crt-"+c+Math.floor(1e4*Math.random()),g=document.createElement("script"),h=function(){Criteo.DisplayAcceptableAdIfAdblocked({zoneid:c,containerid:f,overrideZoneFloor:!1})};return g.type="text/javascript",g.src="//static.criteo.net/js/ld/publishertag.js","object"==typeof document.attachEvent?g.onreadystatechange=function(){"loaded"!==g.readyState&&"complete"!==g.readyState||(g.onreadystatechange=null,h())}:g.onload=function(){h()},e.appendChild(g),d.id=f,d.style.height="100%",e.appendChild(d),e}},f={createHeadScript:function(){var a=document.createElement("script");return a.type="text/javascript",a.async=1,a.src="//pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",a},createInsTag:function(a,b,c,d,e){var f=document.createElement("ins");return-1==d.indexOf("pub")&&(d="pub-"+d),f.className="adsbygoogle",f.style="display:inline-block;width:"+a+"px;height:"+b+"px",f.setAttribute("data-ad-client",d),f.setAttribute("data-ad-slot",e),f.setAttribute("data-override-format","true"),f.setAttribute("data-page-url",decodeURIComponent(c)),f},get:function(a,b,c,d){if(d.adSlot&&d.pubId){var e=(document.getElementById("ad-container"),document.createElement("script")),f=document.createDocumentFragment();return f.appendChild(this.createHeadScript()),f.appendChild(this.createInsTag(b,c,a,d.pubId,d.adSlot)),e.text="(adsbygoogle = window.adsbygoogle || []).push({});",f.appendChild(e),f}return resolve(!1)}};b.exports={getNonIframeNetworkCode:function(a,b,c,d,g,h){return"criteo"==g.name&&g.zoneId?(e.setupPassbackEventListener(a,g,h),e.get(b,g)):0==g.name.indexOf("vCommission")&&g.adSlot&&g.pubId&&g.isEnabled?f.get(b,c,d,g):""}}},{}],3:[function(a,b,c){var d=window,e=(document,a("./utils.js")),f=a("./nodeWatcher.js"),g=a("./adCodeGenerator.js"),h=a("./editor.js"),l=a("./ensureCompliance.js"),m=(new Date,function(){var a=window.location.search,b={};return a.replace(new RegExp("([^?=&]+)(=([^&]*))?","g"),function(a,c,d,e){b[c]=e}),b}()),n={init:function(){var a=this.config,b=this.abpConfig;if(a.pageUrl||(a.pageUrl=encodeURIComponent(window.location.href)),a.pageReferrer||(a.pageReferrer=encodeURIComponent(document.referrer)),a.pageGroup=a.pageGroup.toUpperCase(),b.blocklist&&b.blocklist instanceof Array)for(i=0,j=b.blocklist,k=j[i];i<j.length;k=j[++i])if(d.location.href.match(new RegExp(k,"i"))){this.disable=!0;break}m[a.previewComplianceStr]?this.createAdRecoverAdsAsync():1===b.mode&&!this.disable&&this.createAdRecoverAdsAsync()},createAdRecoverAdsAsync:function(){function a(a){if(d&&(d--,a.feedback.success&&l.placeAd(a.container,a.ad)),!d&&!n){n=1;var b,c,f=0,g=0,h=0;for(f=0,b=m,c=b[f];f<b.length;c=b[++f])c.success?g++:h++;if(g){if(o.impression=!0,e.sendFeedback(o),"undefined"!=typeof customJs&&"string"==typeof customJs.afterAp){var i=e.base64Decode(customJs.afterAp);l.runScript(i)}l.runComplienceMode()}else o.impression=!1,e.sendFeedback(o)}}var b,c,d,f,g,h,i,j=this.config,k=this.abpConfig,l=this,m=[],n=0,o={xpathMiss:[],complianceFail:[],screen:document.documentElement.clientWidth+"x"+document.documentElement.clientHeight};for(b=k.ads[j.pageGroup].ads,customJs=k.ads[j.pageGroup].customJs,b=this.getAdSet(b,j),c=b.length,d=c,"undefined"!=typeof customJs&&"string"==typeof customJs.beforeAp&&(script=e.base64Decode(customJs.beforeAp),this.runScript(script)),g=0,h=b,i=h[g];g<Math.min(h.length,c);i=h[++g])f={success:0,reason:0},f.ad=i,this.getAdContainer(i,g+1,f).done(function(b){b.feedback.success=1,a.call(l,b)}).fail(function(b){b.feedback.ad.sectionMd5;b.complianceFailed?o.complianceFail.push(b.feedback.ad.sectionMd5):(o.xpathMiss.push(b.feedback.ad.sectionMd5),b.feedback.reason=1),a.call(l,b)}).always(function(a){m.push(a.feedback)})},getAdContainer:function(a,b,c){var d=this.$.Deferred(),e=this;return f.watch(a.xpath,this.abpConfig.xpathWaitTimeout).done(function(f,g){c.method=g;var h=e.getContainer(a,b);h?d.resolve({ad:a,feedback:c,container:h}):d.reject({ad:a,feedback:c,container:null,complianceFailed:!0})}).fail(function(b,e){c.method=e,c.xpathMiss=1,d.reject({ad:a,feedback:c,container:null})}),d.promise()},getContainer:function(a,b){var c=this.$(a.xpath),d=this.$("<div/>").css(this.$.extend({display:"block",clear:"both",width:a.width+"px",height:a.height+n.config.adTextHeightAboveAd+"px"},a.css)).attr({id:"_adr_abp_iframe_"+b,"data-variation":a.variationName,"data-section":a.sectionMd5,class:"_adr_abp_iframe"});switch(a.operation){case"Append":c.append(d);break;case"Prepend":c.prepend(d);break;case"Insert Before":c.before(d);break;default:c.after(d)}return l(d)?d:(d.remove(),null)},getAdSet:function(a,b){var c=0,d=a.length;return d>1&&(c=m[b.previewSetupStr],(c=c||Math.floor(Math.random()*d)+1)>d-1&&(c=d-1)),b.pageGroup=b.pageGroup+"_"+c,a[c]},getAdLabel:function(a,b,c,d){var e=document.createElement("div"),f=this.config.noAdvertiserLinkSites;return c>200&&-1==f.indexOf(a)&&!d&&e.appendChild(this.getAdvertiseHereLink(b,c)),e.appendChild(this.getAdLabelLink(a,b,c,d)),e.style.fontFamily="Arial, Helvetica, Sans-serif",e.style.fontSize="9px",e.style.textTransform="uppercase",e.style.color="#80818f",e.style.backgroundColor="rgba(255, 255, 255, 0.3)",e.style.lineHeight="10px",e.style.padding="2px 4px",e.style.width="98%",e.style.height="8px",e},getAdvertiseHereLink:function(a,b){var c=this.getDomain(decodeURIComponent(a)).split("."),d="http://adrecover.com/advertisers/?utm_campaign=ByAdRecover&utm_source="+this.getDomain(decodeURIComponent(a))+"&utm_medium=ByAdRecover-"+b,e=document.createElement("a");return e.style.borderBottom="1px solid #80818f",e.style.float="right",e.style.fontSize="9px",e.style.textDecoration="none",e.style.color="#a0a0a0",e.target="_blank",e.href=d,e.className="pull-right advertise-here",e.innerHTML="Advertise On <strong>"+("www"===c[0].toLowerCase()?c[1]:c[0])+"</strong>",e},getAdLabelLink:function(a,b,c,d){var e,f,g="Advertisement By AdRecover",h=this.config.textAdLabelSiteList,i=this.config.customLabelTextSiteList;return c<=300&&(g="ads By AdRecover"),(c<=125||d)&&(g="Advertisement"),h.indexOf(parseInt(a))>-1||d?f=document.createElement("span"):(f=document.createElement("a"),e="http://adrecover.com/?utm_campaign=ByAdRecover&utm_source="+this.getDomain(decodeURIComponent(b))+"&utm_medium=ByAdRecover-"+c,i.indexOf(parseInt(a))>-1&&(g="Ad by Sibbo Ventures",e="http://sibboventures.com/herramientas-para-publishers/"),f.target="_blank",f.href=e),f.textContent=g,f.style.float="left",f.style.fontSize="9px",f.style.textDecoration="none",f.style.color="#a0a0a0",f},getDomain:function(a){var b=document.createElement("a");return b.href=a,b.hostname},postMessageToRecoverIframe:function(a,b){a.postMessage(JSON.stringify(b),window.location.protocol+this.config.frameDomain)},getIframeContainer:function(a){var b=document.createElement("iframe");b.style.width="100%",b.style.height=a.height+"px",b.id="iframe-ad-container-"+a.sectionMd5,b.style.margin=0,b.style.padding=0,b.style.border="none",b.style.display="none";var c=window.location.search.indexOf("pbjs_debug")>0?"?pbjs_debug=true":"";return b.src=window.location.protocol+this.config.frameDomain+this.config.frameUrl+c+"#packetId="+this.config.packetId+"&url="+this.config.pageUrl+"&siteId="+this.config.siteId+"&pageGroup="+this.config.pageGroup+"&removeStaticAds="+this.config.removeStaticAds+"&isByod="+this.config.isByod+"&height="+a.height+"&width="+a.width+"&networkProps="+JSON.stringify(a.networkProps)+"&referrer="+this.config.pageReferrer+"&pubEmailMd5="+(this.abpConfig.pubEmailMd5||""),b.frameborder="0",b.scrolling="no",b.marginheight="0",b.marginwidth="0",b.topmargin="0",b.leftmargin="0",b.allowtransparency="true",b},getNonIframeContainer:function(a){var b=document.createElement("div");return b.id="ad-container-"+a.sectionMd5,b.style.height=a.height+"px",b.style.width="100%",b.style.margin="0 auto",b.style.textAlign="center",b.style.display="none",b},placeAd:function(a,b){var c,d=a[0].id,e=this.getNonIframeContainer(b),f=this.getIframeContainer(b),h=!1,i=this,j=function(a){m(++a)},k=function(a,c){e.style.display="block",f.style.display="none";var h=g.getNonIframeNetworkCode(d,i.config.pageUrl,b.width,b.height,a,j.bind(this,c));h?e.appendChild(h):m(++c)},l=function(a,b){e.style.display="none",f.style.display="block",h?i.postMessageToRecoverIframe(c,{action:"start",containerId:d,index:b}):f.onload=function(){h=!0,i.postMessageToRecoverIframe(c,{action:"start",containerId:d,index:b})}},m=function(a){if(!(a>=b.networkProps.length)){var c=b.networkProps[a];!0===c.isEnabled?c.isInIframe?l(c,a):k(c,a):m(++a)}},n=function(a){for(var b=!1,c=0;c<a.length;c++)if(-1!=a[c].name.indexOf("vCommission")){b=!0;break}return b};return a.append(this.getAdLabel(this.config.siteId,this.config.pageUrl,b.width,this.config.isByod||n(b.networkProps))),a.append(e),f.onload=function(){h=!0},a.append(f),c=f.contentWindow,this.setupPostMessageListnerFromIframe(d,m),m(0),!0},setupPostMessageListnerFromIframe:function(){var a={},b=!1;return b||(b=!0,window.addEventListener("message",function(b){if(-1!==b.origin.indexOf("adrecover.com")){var c=JSON.parse(b.data);void 0!==c.index&&"resume"===c.action&&adRecover.ap.$("#"+c.containerId)&&a[c.containerId](1+parseInt(c.index,10))}})),function(b,c){a[b]=c}}(),runScript:function(a){var b=document.createElement("script");b.type="text/javascript",b.text=a,b.html=a,(document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]).appendChild(b)},runComplienceMode:function(){m[n.config.previewComplianceStr]&&h()}};b.exports=n},{"./adCodeGenerator.js":2,"./editor.js":5,"./ensureCompliance.js":6,"./nodeWatcher.js":7,"./utils.js":8}],4:[function(a,b,c){var d=window.jqAlias,e={name:"other",$pingEl:null,pageVisibility:{supported:!1,type:null,vendorPrefix:null,visibilityStateKey:"visibilityState",visibilitychangeEventName:"visibilitychange"},dataSendingMethod:null,unloadMethod:null,trackerSupported:!1};!function(){var a=navigator.userAgent;try{(window.opera||a.indexOf(" OPR/")>=0)&&-1===a.indexOf("Opera Mini")?e.name="opera":-1!==a.indexOf("Edge")?e.name="edge":"undefined"!=typeof InstallTrigger?e.name="firefox":/Android/i.test(a)&&void 0!==navigator.vendor&&navigator.vendor.indexOf("Google")>-1&&/ Version\/[^ ]+ Chrome/i.test(a)?e.name="chrome-wv":-1!==a.indexOf(" CriOS/")?e.name="safari-chrome":window.chrome&&a.match(/chrome/i)?e.name="chrome":document.documentMode?e.name="ie":Object.prototype.toString.call(window.HTMLElement).indexOf("Constructor")>0&&/AppleWebKit/i.test(a)&&(/(iPhone|iPod|iPad)/i.test(a)&&-1!==a.indexOf("Safari")&&-1!==a.indexOf("Version")?e.name="safari-mobile":-1!==a.indexOf("Safari")&&-1!==a.indexOf("Version")?e.name="safari":e.name="safari-wv"),"chrome"!==e.name&&(e.name="other")}catch(b){}}(),function(){var a,b=e.pageVisibility;b.supported=!0,b.type="standard",void 0!==document.visibilityState?a="":void 0!==document.webkitVisibilityState?a="webkit":void 0!==document.mozVisibilityState?a="moz":void 0!==document.msVisibilityState?a="ms":void 0!==document.hasFocus?b.type="blur":(b.type=null,b.supported=!1),b.vendorPrefix=a,b.visibilityStateKey=a?a+"VisibilityState":"visibilityState",b.visibilitychangeEventName=a?a+"visibilitychange":"visibilitychange"}(),function(){navigator&&"function"==typeof navigator.sendBeacon?e.dataSendingMethod="sendBeacon":(e.name.match(/^safari*/)||e.name.match(/chrome*/)||"opera"===e.name)&&void 0!==document.createElement("a").ping&&(e.dataSendingMethod="ping")}(),function(){e.unloadMethod=e.name.match("safari*")?"pagehide":"beforeunload"}(),function(){"ping"===e.dataSendingMethod&&d(function(){d("body").append('<a id="_ap_ping_tracker" href="javascript::void(0)" style="display:none" ping="">ping</a>'),e.$pingEl=d("#_ap_ping_tracker"),e.$pingEl.click(function(a){a.stopPropagation(),a.stopImmediatePropagation()})})}(),function(){e.trackerSupported=!("other"===e.name||!e.pageVisibility.supported||("safari-mobile"===e.name||"safari-wv"===e.name)&&"function"!=typeof window.requestAnimationFrame)}(),e.pageVisibility.isPageVisible=function(){var a=e.pageVisibility;return a.supported?"standard"===a.type?"visible"===document[a.visibilityStateKey]:document.hasFocus():-1},e.pageVisibility.getVisiblityState=function(){var a=e.pageVisibility;return!!a.supported&&("standard"===a.type?document[a.visibilityStateKey]:document.hasFocus()?"visible":"hidden")},e.pageVisibility.onChange=function(a,b){function c(c){var e,f={focus:"visible",pageshow:"visible",blur:"hidden",pagehide:"hidden"},g=c||window.event,h=g.type;e=function(c){window.currentState!==c&&(window.currentState=c,"hidden"===c?a():b())},this[d.vendorPrefix+"hidden"]?e("hidden",g.type):e("visible",g.type),"visible"===f[h]?e("visible",g.type):setTimeout(function(){document.hasFocus()||e("hidden",h)},1e3)}var d=e.pageVisibility;window.currentState=e.pageVisibility.getVisiblityState(),"standard"===d.type?document.addEventListener(d.visibilitychangeEventName,c):window.onpageshow=window.onpagehide=window.onfocus=window.onblur=c},b.exports=e},{}],5:[function(a,b,c){function d(){var a=j(window);return{left:a.scrollLeft(),top:a.scrollTop(),right:a.scrollLeft()+(window.innerWidth||a.width()),bottom:a.scrollTop()+(window.innerHeight||a.height())}}function e(a){var b,c,e=j(a),f=e.offset().top,g=d(),h=f+e.height();return k?h+=40:h-=14,b=f-g.top,c=g.bottom-h,b>0&&c>0?e.height():b<0&&c>0?e.height()+b:b>0&&c<0&&e.height()+c}function f(){var a=[],b="._adr_abp_iframe";return k&&(b="[data-apid^='_adbox_selector_']"),j(b).each(function(b,c){var d=e(c);d>0&&a.push({el:c,visibleArea:d*(k?j(c).find("._APD_highlighter").width():j(c).width())})}),a}function g(){var a=f(),b=0,c=window.innerWidth||j(window).width(),d=window.innerHeight||j(window).height();a.forEach(function(a){b+=a.visibleArea}),l&&l.length||h(),l.html(Math.floor(b/(c*d)*100)+"% area in ads.<br>VP:"+c+"X"+d)}function h(){if(j("#percInfoBox").length)return l=j("#percInfoBox"),!0;j("<div/>",{text:"",id:"percInfoBox",css:{position:"fixed",width:"120px",right:"60px",bottom:"100px",padding:"10px 0",color:"#fff","font-size":"12px","background-color":"#a94442","background-color":"rgba(205, 16, 16, 0.76)","text-align":"center","line-height":"20px",border:"1px solid #333","border-radius":"5px"}}).appendTo("body"),l=j("#percInfoBox")}function i(){j(window).on("DOMContentLoaded load resize scroll click blur focus mousemove",function(){g()}),l=null,h()}var j=window.jqAlias,k=!!window.location.href.match(window.location.href.match(/app.adpushup.com\/proxy/)),l=null;b.exports=i},{}],6:[function(a,b,c){function d(a){for(var b=h(a),c=h(document).height(),d=b.offset().top,j=d+b.height(),k=0,l=0,m=0,n=0,p=!0;k<c&&(l=k+i,m=g(k,l,d,j),m&&(n=m*b.width()+f(b[0],k,l),p=p&&e(k,n)),p);)k+=o;return p}function e(a,b){var c=a>0?m:l;return Math.floor(100*b/k)<c}function f(a,b,c){var d=0;return h(n).not(a).each(function(){var a=h(this),e=a.offset().top,f=e+a.height(),i=g(b,c,e,f);d+=i*a.width()}),d}function g(a,b,c,d){var e=0;return a<c&&b>d&&(e=d-c),a<c&&b<d&&b>c&&(e=c-b),a>c&&a<d&&b>d&&(e=a-d),Math.abs(e)}var h=window.jqAlias,i=window.innerHeight||document.documentElement.clientHeight,j=window.innerWidth||document.documentElement.clientWidth,k=i*j,l=15,m=25,n="._adr_abp_iframe",o=100;b.exports=d},{}],7:[function(a,b,c){"use strict";function d(a,b,c){function d(){e&&(document.head.removeChild(e),e=null),document.removeEventListener("animationstart",g),document.removeEventListener("MSAnimationStart",g),document.removeEventListener("webkitAnimationStart",g)}var e,f="insQ_"+l++,g=function(b){b.animationName!==f&&b[n]!==f||k.call(b.target,a)&&(c.resolve(i(b.target),2),d())};e=document.createElement("style"),e.innerHTML="@"+o+"keyframes "+f+" {  from {  opacity: 0.99;  } to {  opacity: 1; }  }\n"+a+" { animation-duration: 0.001s; animation-name: "+f+"; "+o+"animation-duration: 0.001s; "+o+"animation-name: "+f+";  } ",document.head.appendChild(e),document.addEventListener("animationstart",g,!1),document.addEventListener("MSAnimationStart",g,!1),document.addEventListener("webkitAnimationStart",g,!1),i(function(){"pending"===c.state()&&setTimeout(function(){if("pending"!==c.state())return!1;d(),c.reject(a,2)},b||1e4)})}function e(a,b,c){var d,e=i(a),f=500,g=1,h=(b||1e4)/f;e.length?c.resolve(e,1):d=setInterval(function(){e=i(a),e.length?(clearInterval(d),c.resolve(e,1)):p&&g>=h&&(clearInterval(d),c.reject(a,1)),g++},f)}function f(a){try{return"function"==typeof document.querySelector&&(document.querySelector(a),!0)}catch(b){return!1}}function g(a,b){var c=i.Deferred();return m=!1,m&&f(a)?d(a,b,c):e(a,b,c),c.promise()}var h,i=window.jqAlias,j=window.document.documentElement,k=j.matches||j.matchesSelector||j.webkitMatchesSelector||j.mozMatchesSelector||j.msMatchesSelector||j.oMatchesSelector,l=100,m=!1,n="animationName",o="",p=!1,q="Webkit Moz O ms Khtml".split(" "),r="",s=document.createElement("div");if(i(function(){p=!0}),"function"==typeof document.addEventListener&&(s.style.animationName&&(m=!0),!1===m))for(h=0;h<q.length;h++)if(void 0!==s.style[q[h]+"AnimationName"]){r=q[h],n=r+"AnimationName",o="-"+r.toLowerCase()+"-",m=!0;break}b.exports={watch:g}},{}],8:[function(a,b,c){var d=a("./browserConfig.js"),e=document,f=window.jqAlias;b.exports={uniqueId:function(a){var b,c=+new Date,d=!a||"number"==typeof a&&a<0?Number(1).toString(16):Number(a).toString(16);return(d=("0000000".substr(0,8-d.length)+d).toUpperCase())+"-xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(a){return b=((c=Math.floor(c/16))+16*Math.random())%16|0,("x"===a?b:3&b|8).toString(16)})},loadScript:function(a,b,c){var d=e.createElement("script");d.src=a,d.type="text/javascript",d.async=!0,d.onerror=function(){"function"==typeof c&&c.call()},"object"==typeof e.attachEvent?d.onreadystatechange=function(){("loaded"===d.readyState||"complete"===d.readyState)&&(d.onreadystatechange=null)}:d.onload=function(){"function"==typeof b&&b.call()},(e.getElementsByTagName("head")[0]||e.getElementsByTagName("body")[0]).appendChild(d)},loadImage:function(a,b,c){var d=window.Image?new Image:document.createElement("img");d.onload=function(){b&&"function"==typeof b&&b()},d.onerror=function(a){c&&"function"==typeof c&&c()},d.src=a},sendFeedback:function(a){var b=window.adRecover.ap;return this.sendBeacon(b.config.feedbackUrl,a,{method:"image"})},requestServer:function(a,b,c,d,e){return f.support.cors=!0,f.ajax({url:a,data:b,timeout:c,type:d||"GET",beforeSend:e,dataType:"jsonp",jsonpCallback:"apCallback",crossDomain:!0})},sendBeacon:function(a,b,c){if("string"!=typeof a||"object"!=typeof b)return!1;var e,f,g,h=window.adRecover.ap.config;if(b.packetId=h.packetId,b.siteId=h.siteId,b.pageGroup=h.pageGroup,b.url=h.pageUrl,c=c||{},b=this.objToUrl(b),e=a+"?ts="+ +new Date+b,"image"===c.method)return(new Image).src=e,!0;switch(d.dataSendingMethod){case"sendBeacon":f=navigator.sendBeacon(e),!f&&((new Image).src=e);break;case"ping":if("undefined"!==document.createEvent)try{g=document.createEvent("MouseEvent"),g.initMouseEvent("click",!0,!0,window,0,0,0,0,0,!1,!1,!1,!1,0,null),d.$pingEl.attr("ping",e).get(0).dispatchEvent(g)}catch(i){}else(new Image).src=e;break;default:(new Image).src=e}return!0},objToUrl:function(a){if("object"!=typeof a)return!1;var b,c="";for(b in a)a.hasOwnProperty(b)&&(c+="&"+b+"="+a[b]);return c},base64Decode:function(a){if(window.atob)return window.atob(a);var b,c,d,e,f,g,h,i,j="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",k=0,l=0,m="",n=[];if(!a)return a;a+="";do{e=j.indexOf(a.charAt(k++)),f=j.indexOf(a.charAt(k++)),g=j.indexOf(a.charAt(k++)),h=j.indexOf(a.charAt(k++)),i=e<<18|f<<12|g<<6|h,b=i>>16&255,c=i>>8&255,d=255&i,n[l++]=64===g?String.fromCharCode(b):64===h?String.fromCharCode(b,c):String.fromCharCode(b,c,d)}while(k<a.length);return m=n.join(""),decodeURIComponent(escape(m.replace(/\0+$/,"")))}},function(){Function.prototype.bind||(Function.prototype.bind=function(a){if("function"!=typeof this)throw new TypeError("Function.prototype.bind - what is trying to be bound is not callable");var b=Array.prototype.slice.call(arguments,1),c=this,d=function(){},e=function(){return c.apply(this instanceof d?this:a,b.concat(Array.prototype.slice.call(arguments)))};return d.prototype=this.prototype,e.prototype=new d,e})}()},{"./browserConfig.js":4}],9:[function(a,b,c){function d(b){var c=a("./config/config.js"),d=a("./libs/custom/ap.js"),g=a("./libs/custom/utils.js"),h=window,i=document,j=function(a){var b=i.createElement("script");-1===a.indexOf("ca-pub-")&&(a="ca-pub-"+a),b.setAttribute("data-ad-client",a),b.async=!0,b.src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js",i.head.appendChild(b)};e.ap=d,d.$=b,d.config=c,b("div[id^=_adr_abp_iframe_]").remove(),d.config.siteId=parseInt(18107,10),d.config.logAdBlockMeasures=true,d.config.samplePercentage=5,d.config.removeStaticAds=false,d.config.removeAdsByAdrecover=true,d.config.removeVcommVerificationCode=true,d.config.isByod=false,d.abpConfig={"mode":1,"pageGroupPattern":[{"PHP":"tutorialspoint.com\\/.*?.php"},{"SEARCH":"tutorialspoint.com\\/.*?.htm"}],"blocklist":[],"xpathWaitTimeout":5000,"vcommPubId":"ca-pub-3191894791526522","pubEmailMd5":"a2bce8406d77402b228155025648aee0","ads":{"POST_ADRECOVER":{"customJs":{"beforeAp":null,"afterAp":null},"ads":[[{"xpath":".space-top","sectionMd5":"d47066cfa2d09389fab6ab4261a04706","operation":"Prepend","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":"0px","margin-bottom":"10px","clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]},{"xpath":".mui-col-md-3 > div:eq(1)","sectionMd5":"4d7daead351b3a5a3d3430a53ef18a5b","operation":"Prepend","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":0,"margin-bottom":0,"clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]},{"xpath":".google-bottom-ads","sectionMd5":"f575aa306db7b42696e824e036ad9603","operation":"Append","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":0,"margin-bottom":0,"clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]},{"xpath":".space-top","sectionMd5":"0434e1eb5d8d5612af3149b6bbe5831d","operation":"Insert After","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":0,"margin-bottom":0,"clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]}]]},"QUESTIONS_ADRECOVER":{"customJs":{"beforeAp":null,"afterAp":null},"ads":[[]]},"SEARCH_ADRECOVER":{"customJs":{"beforeAp":null,"afterAp":null},"ads":[[{"xpath":".google-bottom-ads","sectionMd5":"fee7792ac38de35ba76d18ce65a196e9","operation":"Append","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":0,"margin-bottom":0,"clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]},{"xpath":".space-top","sectionMd5":"d44f300a0c3b51404b3aabb2fba19f04","operation":"Append","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":"0px","margin-bottom":"10px","clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]},{"xpath":".space-top","sectionMd5":"ea74549340d550a66ea0e5571fba1027","operation":"Insert After","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":0,"margin-bottom":0,"clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]},{"xpath":".mui-col-md-3 > div:eq(1)","sectionMd5":"1c01c0744357ffb76525419d504c0a82","operation":"Append","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":0,"margin-bottom":0,"clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]}]]},"PHP_ADRECOVER":{"customJs":{"beforeAp":null,"afterAp":null},"ads":[[{"xpath":".space-top","sectionMd5":"1f86627d3123e12aca07e9a760fa8e99","operation":"Prepend","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":0,"margin-bottom":0,"clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]},{"xpath":".mui-col-md-3 > div:eq(1)","sectionMd5":"1569e4b5f1b141045d4a4923577e35c1","operation":"Append","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":0,"margin-bottom":0,"clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]},{"xpath":".google-bottom-ads","sectionMd5":"bf08f1330afc7b8cf601143a0ed66f24","operation":"Append","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":0,"margin-bottom":0,"clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]},{"xpath":".space-top","sectionMd5":"e9e155f9919ae548094d975ab52dfce9","operation":"Insert After","width":300,"height":250,"css":{"margin-left":"auto","margin-right":"auto","margin-top":"20px","margin-bottom":"0px","clear":"both"},"networkProps":[{"isInIframe":true,"name":"headerBidding","floorPrice":"0.15","isEnabled":true,"criteo":{"name":"criteo","zoneId":"1416526"},"adpushup":{"name":"adpushup","blockAnimation":"true","impType":"native"},"oftmedia":{"name":"oftmedia","placementId":"17719636"},"ix":{"name":"ix","siteId":"427968"},"rubicon":{"name":"rubicon","accountId":"20616","zoneId":"1485030","siteId":"294892"},"pubmatic":{"name":"pubmatic","publisherId":"158261","adSlot":"2477879"},"sovrn":{"name":"sovrn","tagid":"658573"},"adsolut":{"name":"adsolut","host":"cpm.adsolut.in","zoneId":"80013"}},{"isInIframe":true,"adSlot":"1790434483","name":"vCommission","pubId":"ca-pub-3191894791526522","isEnabled":true}]}]]}}},d.handleSpaPageTransition=false,d.config.initVersion=.2,d.config.apRun=!1,d.config.packetId=g.uniqueId(this.siteId),d.config.pageUrl=encodeURIComponent(h.location.href),d.config.pageReferrer=i.referrer?encodeURIComponent(i.referrer):null,d.config.samplePercentage=d.config.samplePercentage||100,d.err=[],d.abpConfig.vcommPubId&&!d.config.removeVcommVerificationCode&&j(d.abpConfig.vcommPubId),d.handleSpaPageTransition&&f(),function(a,b){function c(b){var c,e,f=!1,g=a.location.href;for(e=0;e<b.length;e++){for(c in b[e])g.match(new RegExp(b[e][c],"i"))&&(f=!0,d.config.pageGroup=c+"_ADRECOVER");if(f)break}}function e(a){g.loadImage("//delivery.adrecover.com/block.jpg?ts="+ +new Date,function(){a(!1)},function(){g.loadImage("//delivery.adrecover.com/allow.jpg?ts="+ +new Date,function(){a(!0)},function(){a(!1)})})}function f(a){var b=Math.random();e(function(c){void 0!==c&&b<a.samplePercentage/100&&a.logAdBlockMeasures&&g.sendFeedback({adBlockedAA:c}),c&&(a.ABP=!0,h())})}function h(){!d.config.apRun&&d.config.siteId&&d.config.pageGroup&&d.config.packetId&&d.config.ABP&&(d.config.apRun=!0,d.init())}c(d.abpConfig.pageGroupPattern),f(d.config)}(window,document)}var e=window.adRecover={},f=function(){var a=window.location.href,b=!1,c=function(){requestAnimationFrame(function(){a!==window.location.href&&requestAnimationFrame(function(){var a=window.adRecover;a&&a.initializeMain&&window.jqAlias&&a.initializeMain(jqAlias)}),a=location.href})};return function(){b||(document.body.addEventListener("click",c,!0),window.addEventListener("popstate",c)),b=!0}}();!function(){function a(a,b){var d=c.createElement("script");d.type="text/javascript",d.async=!0,d.addEventListener("load",function(){"function"==typeof b&&b.call()}),d.src=a,(c.getElementsByTagName("head")[0]||c.getElementsByTagName("body")[0]).appendChild(d)}var b=window,c=document;if(e.initializeMain=d,b.jQuery&&b.jQuery.fn){var f=b.jQuery.fn.jquery.replace(/\.(\d)/g,".0$1").replace(/\.0(\d{2})/g,".$1");if(f>="1.08"&&f<"2")return b.jqAlias=b.jQuery,void d(b.jqAlias)}a("//ajax.googleapis.com/ajax/libs/jquery/1.11.2/jquery.min.js",function(){b.jqAlias=b.jQuery.noConflict(!0),setTimeout(function(){d(b.jqAlias)},0)})}()},{"./config/config.js":1,"./libs/custom/ap.js":3,"./libs/custom/utils.js":8}]},{},[9]);