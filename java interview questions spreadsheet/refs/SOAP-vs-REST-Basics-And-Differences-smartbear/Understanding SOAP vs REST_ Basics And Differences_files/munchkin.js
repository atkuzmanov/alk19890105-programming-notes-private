/*
 * Copyright (c) 2007-2018, Marketo, Inc. All rights reserved.
 * See https://developers.marketo.com/MunchkinLicense.pdf for license terms
 * Marketo marketing automation web activity tracking script
 * Version: 157 r760
 */
 (function(n){if(!n.MunchkinTracker){var k=n.document,q=k.location,B=encodeURIComponent,C=null,D=[],r=function(b,a,d,c){try{var e=function(){try{d.apply(this,arguments)}catch(a){}};b.addEventListener?b.addEventListener(a,e,c||!1):b.attachEvent&&b.attachEvent("on"+a,e);D.push([b,a,e,c])}catch(h){}},R=function(b,a,d,c){try{b.removeEventListener?b.removeEventListener(a,d,c||!1):b.detachEvent&&b.detachEvent("on"+a,d)}catch(e){}},e=function(b){return"undefined"!==typeof b&&null!==b},E=function(b,a){return b.className.match(RegExp("(\\s|^)"+
a+"(\\s|$)"))},S=e(n.XMLHttpRequest)&&e((new n.XMLHttpRequest).withCredentials),t=function(b){var a=null,d;if(e(b))if(0===b.length)a="";else try{a=decodeURIComponent(b)}catch(c){d=b.indexOf("?");if(-1!==d)try{a=decodeURIComponent(b.substr(0,d))+b.substr(d)}catch(g){}e(a)||(a=String(b))}return a},F=function(b,a){var d={},c=e(a)?a:"=",g=b.split("&"),h=g.length,f,l,m;for(f=0;f<h;f+=1)l=g[f].split(c),e(l)&&1<l.length&&(m=l.shift(),l=l.join(c),d[t(m)]=t(l));return d},G=function(b){try{var a=k.createElement("a");
a.href=b;return F(a.search.substr(1))}catch(d){return null}},H=function(b,a){var d=null,c=[];if(e(b))for(d in b)b.hasOwnProperty(d)&&"function"!==typeof b[d]&&null!==b[d]&&c.push(B(d)+(e(a)?a:"=")+B(b[d]));return c.join("&")},I=function(b,a){var d=null;if(e(a)&&e(b))for(d in b)b.hasOwnProperty(d)&&e(a[d])&&(b[d]=a[d])},M=function(b,a,d){var c=b.split("."),g=c.length,h=2;if(e(a))h=a;else if(e(d)&&d)"com"!==c[g-1]&&(a=RegExp("^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$"),
4===g&&a.test(b)?h=4:2===c[g-1].length&&1<g&&"co"===c[g-2]&&(h=3));else if(2<c[g-1].length)h=2;else if(2===c[g-1].length)h=3;else return b;for(;c.length>h&&2<c.length;)c.shift();return c.join(".")},w=function(b){var a=k.cookie,d,c,g={id:null,token:null};b=B(b);g.store=function(a,c,d,e){var g=b+"="+H(this,":"),f=new Date;0<a?f.setTime(f.getTime()+864E5*a):f.setTime(f.getTime()-1);g+="; expires="+f.toGMTString();c&&(g+="; path="+c);d&&-1!==d.indexOf(".")&&(g+="; domain="+d);e&&(g+="; secure");k.cookie=
g};if(""!==a)for(a=a.split(";"),d=0;d<a.length;d+=1)if(c=a[d].replace(/^\s+|\s+$/g,""),0===c.indexOf(b+"=")){a=c.substring(b.length+1);d=F(a);e(d.id)&&e(d.token)?I(g,d):I(g,F(a,":"));break}return g},f={customName:null,notifyPrefix:null,wsInfo:null,altIds:[],visitorToken:null,cookieLifeDays:730,clickTime:350,cookieAnon:!0,mkt_tok:null,domainLevel:null,domainSelectorV2:!1,replayDetectLimit:5E3,httpsOnly:!1,asyncOnly:!1,anonymizeIP:!1,apiOnly:!1,externalSource:null,orgId:null,_ecid:null},x=null,s=null,
T=n.navigator.cookieEnabled||k.hasOwnProperty("cookie")&&(0<k.cookie.length||-1<(k.cookie="testcookie=test; max-age=10000").indexOf.call(k.cookie,"testcookie=test;")),z=!1,A=[],J=null,U=function(b,a,d){var c=new n.XMLHttpRequest;c.open("GET",b,!0!==a);c.onreadystatechange=function(){2<=c.readyState&&c.abort()};if(a)try{c.timeout=d}catch(e){}try{c.send()}catch(f){}},N=function(b,a,d,c,e){b=b+a+"&"+H(d)+"&"+H(c);d=(new Date).getTime();e=!e&&!f.asyncOnly;0===a.indexOf("webevents/visitWebPage?")&&(e=
!1);S?U(b,e,f.clickTime):(new n.Image(1,1)).src=b;J=d+f.clickTime},V=function(){var b;return function(a,d){var c={x:a.clientX,y:a.clientY,el:d,time:(new Date).getTime()};if(e(b)&&c.x===b.x&&c.y===b.y&&c.el===b.el&&c.time<b.time+f.replayDetectLimit)return!0;b=c;return!1}}(),O=function(){var b=k.getElementsByName("_mkt_trk"),a=0,d="";e(s)&&(d="id:"+s.id+"&token:"+s.token);for(a=0;a<b.length;a+=1)"hidden"===b[a].type&&(b[a].value=d)},v=function(b,a,d,c){var g=null,h;h=q.hostname;var k=q.protocol,l="webevents/"+
b;if(z){var m;if(m=window.navigator)a:{m=window.navigator.userAgent;if("string"===typeof m&&m){if(0<=m.indexOf("AdsBot")||0<=m.indexOf("Wget")||0<=m.indexOf("msnbot")){m=!0;break a}if(0<=m.indexOf("Mozilla")&&(0<=m.indexOf("slurp")||0<=m.indexOf("bot"))){m=!0;break a}}m=!1}if(!m&&e(s)&&(a._mchId=s.id,a._mchTk=s.token,e(f.mkt_tok)&&(a.mkt_tok=f.mkt_tok),e(f.wsInfo)&&(a._mchWs=f.wsInfo),"clickLink"===b&&(a._mchCn=e(f.customName)?f.customName:""),a._mchHo=h,a._mchPo=q.port,e(a._mchRu)||(a._mchRu=t(q.pathname)),
a._mchPc=k,a._mchVr="157",e(h)&&0!==h.length&&"file:"!==k))for(g in f.anonymizeIP&&(a.aip=1),e(f.externalSource)&&(a._mchEs=f.externalSource),e(C)&&(a._mchEcid=C),l+="?_mchNc="+(new Date).getTime(),N(f.notifyPrefix,l,a,d,c),f.altIds)f.altIds.hasOwnProperty(g)&&(h=f.altIds[g],a._mchId=h,N(f.notifyPrefix.replace(/\w{3}\-\w{3}\-\w{3}\.mktoresp\.com/i,h+".mktoresp.com"),l,a,d,c))}else A.push(["post",arguments])},P=function(b){var a=b||n.event,d=a.target||a.srcElement,c={},g;g=a.which;var f=a.button;g=
e(g)&&(1===g||2===g)||e(f)&&(0===f||1===f||4===f)?!0:!1;if(g&&!a._mchDone){a._mchDone=!0;a=d;g=q.href||q;for(-1<g.indexOf("#")&&(g=g.substring(0,g.indexOf("#")));"A"!==a.tagName&&"AREA"!==a.tagName&&e(a.parentNode);)a=a.parentNode;a===k||a===n||"A"!==a.tagName&&"AREA"!==a.tagName?a=null:(d=a.href.replace(/^\s+|\s+$/g,""),a=e(d)&&0<d.length&&0!==d.indexOf("#")&&0!==d.indexOf(g+"#")&&0!==d.indexOf("javascript")&&0!==d.indexOf("mailto")&&!E(a,"mchNoDecorate")?a:null);e(a)&&!V(b,a)&&(c._mchHr=t(a.href),
v("clickLink",c))}},y=function(b){if(z){if(null!==s)return s;var a=M(q.hostname,f.domainLevel,f.domainSelectorV2),d=w("_mkto_trk"),c=!1!==f.httpsOnly;if(e(d.id)||f.cookieAnon||b){if(d.id=x,e(d.token)||(e(f.visitorToken)&&"VISITOR_MKTTOK_REPLACE"!==f.visitorToken?d.token=f.visitorToken:d.token="_mch-"+a+"-"+(new Date).getTime()+"-"+(Math.floor(9E4*Math.random())+1E4)),d.store(f.cookieLifeDays,"/",a,c),c&&(d=w("_mkto_trk")),!c||e(d.id))return s=d,O(),d}else return null}else A.push(["createTrackingCookie",
arguments])},Q=function(){y(!0)},W=function(b){var a=b.onclick;b.onclick="function"===typeof a?function(){Q.apply(b,arguments);return a.apply(b,arguments)}:Q},K=function(b){var a=M(q.hostname,f.domainLevel,f.domainSelectorV2),d=w("mkto_opt_out"),c=!1!==f.httpsOnly;b?(d.id=!0,d.store(730,"/",a,c),b=w("_mkto_trk"),b.id&&b.store(0,"/",a,c)):d.store(0,"/",a,c)},L={ASSOCIATE_LEAD:"associateLead",CLICK_LINK:"clickLink",VISIT_WEB_PAGE:"visitWebPage",init:function(b,a){if(T&&e(b)&&0!==b.length){x=b;x=x.toUpperCase();
var d="",c,g,h;c=G(n.location.toString());var p=null;f.notifyPrefix=q.protocol+"//"+x+".mktoresp.com/";e(a)&&(window.console.debug('Munchkin.init("%s") options:',b,a),I(f,a));e(c)&&(e(c.mkt_tok)&&(f.mkt_tok=c.mkt_tok),e(c.lpview)&&(d=c.lpview),e(c.marketo_opt_out)&&(p=c.marketo_opt_out));if(!e(f.mkt_tok))if(c=G(k.referrer),e(c.mkt_tok))f.mkt_tok=c.mkt_tok;else if(e(c.enid)&&e(c.type))for(h in c)c.hasOwnProperty(h)&&"enid"!==h&&"type"!==h&&(-1<h.indexOf("mkt_tok")||-1<c[h].indexOf("mkt_tok"))&&(g=
G(h+"="+c[h]),e(g.mkt_tok)&&(f.mkt_tok=g.mkt_tok));if("preview"!==d||!/\/lpeditor\/preview$/.test(q.pathname)){if(null===p){if(d=w("mkto_opt_out"),e(d.id)){K(!0);return}}else{if("true"===p){K(!0);return}"false"===p&&K(!1)}if(!z){z=!0;var d=y(e(f.mkt_tok)),l;h={};for(p={};0<A.length;)switch(c=A.shift(),c[0]){case "createTrackingCookie":d=y.apply(k,c[1]);break;case "post":v.apply(k,c[1])}if(e(f._ecid))l=f._ecid;else b:{c=f.orgId;if(e(window.Visitor)&&e(c))try{var m=window.Visitor.getInstance(c);if(e(m)){l=
c+":"+m.getLocationHint()+":"+m.getMarketingCloudVisitorID();break b}}catch(s){}l=RegExp("AMCV_([A-Za-z0-9]+%40AdobeOrg)=([^;]+)","g");for(var u,m=[];null!==(u=l.exec(k.cookie));){g=decodeURIComponent(u[1]);var r;e(c)&&g!==c||null===(r=/MCMID%7C([^%]+)/.exec(u[2]))||(u=/MCAAMLH-[^%]+%7C([0-9]+)/.exec(u[2]),m.push(g+":"+(e(u)?u[1]:"")+":"+r[1]))}l=m.join(";")}C=l;if(e(d))f.apiOnly||(h._mchCn=e(f.customName)?f.customName:"",p._mchHa=t(q.hash),p._mchRe=t(k.referrer),p._mchQp=t(q.search.substr(1).replace(/&/g,
"__-__")),v("visitWebPage",h,p,!0));else if(!(f.cookieAnon||e(n.Mkto)&&e(n.Mkto.formSubmit))){r=[];l=k.forms;m=l.length;for(d=0;d<m;d+=1)if(E(l[d],"lpeRegForm"))for(p=l[d].elements,c=p.length,h=0;h<c;h+=1)"submit"!==p[h].type||E(p[h],"mchNoDecorate")||r.push(p[h]);for(l=0;l<r.length;l+=1)W(r[l])}}}}},munchkinFunction:function(b,a,d){var c={},f={},h=null;e(d)&&(c._mchKy=d);switch(b){case "associateLead":for(h in a)a.hasOwnProperty(h)&&(c["_mchAt"+h]=a[h]);y(!0);v("associateLead",c);break;case "clickLink":e(a.href)&&
(c._mchHr=c._mchLr=a.href,v("clickLink",c));break;case "visitWebPage":e(a.url)&&(c._mchRu=a.url),e(a.params)&&(c._mchQp=a.params),e(a.name)&&(c._mchCn=a.name),f._mchRe=q.href,v("visitWebPage",c,f)}},createTrackingCookie:function(b){y(b)}};Date.prototype.getTimeAlias=Date.prototype.getTime;r(n,"beforeunload",function(){for(var b;0<D.length;)b=D.shift(),R.apply(this,b);if(e(J)){do b=new Date;while(b.getTimeAlias()<J)}});r(k,"click",P,!0);(function(b){var a=!1,d=!0,c=k.documentElement,e=function(c){"readystatechange"===
c.type&&"complete"!==k.readyState||a||(a=!0,b.call(n,c.type||c))},f=null,f=function(){try{c.doScroll("left")}catch(a){n.setTimeout(f,50);return}e("poll")};if("complete"===k.readyState)b.call(n,"lazy");else{if(k.createEventObject&&c.doScroll){try{d=!n.frameElement}catch(p){}d&&f()}r(k,"DOMContentLoaded",e);r(k,"readystatechange",e);r(n,"load",e)}})(function(){O();var b=0;if(e(k.links))for(b=0;b<k.links.length;b+=1)r(k.links[b],"click",P,!0)});n.MunchkinTracker=n.Munchkin=L;n.mktoMunchkin=L.init;n.mktoMunchkinFunction=
L.munchkinFunction}})(window);
