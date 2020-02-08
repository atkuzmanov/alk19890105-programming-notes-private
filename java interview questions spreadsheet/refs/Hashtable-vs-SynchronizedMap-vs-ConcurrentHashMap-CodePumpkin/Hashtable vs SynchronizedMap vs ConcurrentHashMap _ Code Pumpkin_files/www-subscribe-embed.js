(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function ba(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var fa;a:{var ha={a:!0},ia={};try{ia.__proto__=ha;fa=ia.a;break a}catch(a){}fa=!1}da=fa?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ja=da,ka="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function la(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var ma=la(this);function na(a,b){if(b){for(var c=ma,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ka(c,d,{configurable:!0,writable:!0,value:f})}}
function oa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
na("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=oa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
na("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=oa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,h=Math.max(0,Math.min(c|0,d.length)),g=0;g<f&&h<e;)if(d[h++]!=b[g++])return!1;return g>=f}});
function pa(){pa=function(){};
ma.Symbol||(ma.Symbol=qa)}
function ra(a,b){this.f=a;ka(this,"description",{configurable:!0,writable:!0,value:b})}
ra.prototype.toString=function(){return this.f};
var qa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ra("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function sa(){pa();var a=ma.Symbol.iterator;a||(a=ma.Symbol.iterator=ma.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ka(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ta(aa(this))}});
sa=function(){}}
function ta(a){sa();a={next:a};a[ma.Symbol.iterator]=function(){return this};
return a}
function ua(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var va="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)ua(d,e)&&(a[e]=d[e])}return a};
na("Object.assign",function(a){return a||va});
var wa=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
na("Reflect.construct",function(){return wa});
na("WeakMap",function(a){function b(k){this.f=(g+=Math.random()+1).toString();if(k){k=ba(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!ua(k,h)){var l=new c;ka(k,h,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof c)return p;e(p);return l(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p["delete"](k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(q){return!1}}())return a;
var h="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var g=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!ua(k,h))throw Error("WeakMap key fail: "+k);k[h][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&ua(k,h)?k[h][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&ua(k,h)&&ua(k[h],this.f)};
b.prototype["delete"]=function(k){return d(k)&&ua(k,h)&&ua(k[h],this.f)?delete k[h][this.f]:!1};
return b});
na("Map",function(a){function b(){var g={};return g.previous=g.next=g.head=g}
function c(g,k){var l=g.f;return ta(function(){if(l){for(;l.head!=g.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(g,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++h,f.set(k,l)):l="p_"+k;var p=g.g[l];if(p&&ua(g.g,l))for(var q=0;q<p.length;q++){var t=p[q];if(k!==k&&t.key!==t.key||k===t.key)return{id:l,list:p,index:q,C:t}}return{id:l,list:p,index:-1,C:void 0}}
function e(g){this.g={};this.f=b();this.size=0;if(g){g=ba(g);for(var k;!(k=g.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var g=Object.seal({x:4}),k=new a(ba([[g,"s"]]));if("s"!=k.get(g)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=g||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(q){return!1}}())return a;
sa();var f=new WeakMap;e.prototype.set=function(g,k){g=0===g?0:g;var l=d(this,g);l.list||(l.list=this.g[l.id]=[]);l.C?l.C.value=k:(l.C={next:this.f,previous:this.f.previous,head:this.f,key:g,value:k},l.list.push(l.C),this.f.previous.next=l.C,this.f.previous=l.C,this.size++);return this};
e.prototype["delete"]=function(g){g=d(this,g);return g.C&&g.list?(g.list.splice(g.index,1),g.list.length||delete this.g[g.id],g.C.previous.next=g.C.next,g.C.next.previous=g.C.previous,g.C.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(g){return!!d(this,g).C};
e.prototype.get=function(g){return(g=d(this,g).C)&&g.value};
e.prototype.entries=function(){return c(this,function(g){return[g.key,g.value]})};
e.prototype.keys=function(){return c(this,function(g){return g.key})};
e.prototype.values=function(){return c(this,function(g){return g.value})};
e.prototype.forEach=function(g,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,g.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var h=0;return e});
na("Set",function(a){function b(c){this.f=new Map;if(c){c=ba(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(ba([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(h){return!1}}())return a;
sa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
na("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==oa(this,b,"includes").indexOf(b,c||0)}});
var n=this||self;function v(a,b){for(var c=a.split("."),d=b||n,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function za(a){a.ca=void 0;a.w=function(){return a.ca?a.ca:a.ca=new a}}
function Aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ba(a){return"array"==Aa(a)}
function Ca(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function Da(a){return"function"==Aa(a)}
function Ea(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Fa(a){return Object.prototype.hasOwnProperty.call(a,Ga)&&a[Ga]||(a[Ga]=++Ha)}
var Ga="closure_uid_"+(1E9*Math.random()>>>0),Ha=0;function Ia(a,b,c){return a.call.apply(a.bind,arguments)}
function Ja(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function w(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?w=Ia:w=Ja;return w.apply(null,arguments)}
function Ka(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var La=Date.now||function(){return+new Date};
function x(a,b){var c=a.split("."),d=n;c[0]in d||"undefined"==typeof d.execScript||d.execScript("var "+c[0]);for(var e;c.length&&(e=c.shift());)c.length||void 0===b?d[e]&&d[e]!==Object.prototype[e]?d=d[e]:d=d[e]={}:d[e]=b}
function y(a,b){function c(){}
c.prototype=b.prototype;a.A=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;var Ma;function Na(a){if(Error.captureStackTrace)Error.captureStackTrace(this,Na);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
y(Na,Error);Na.prototype.name="CustomError";var Oa=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},z=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Pa=Array.prototype.filter?function(a,b,c){return Array.prototype.filter.call(a,b,c)}:function(a,b,c){for(var d=a.length,e=[],f=0,h="string"===typeof a?a.split(""):a,g=0;g<d;g++)if(g in h){var k=h[g];
b.call(c,k,g,a)&&(e[f++]=k)}return e},Qa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Ra=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
z(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d},Sa=Array.prototype.some?function(a,b){return Array.prototype.some.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a))return!0;
return!1};
function Ta(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ua(a,b){return 0<=Oa(a,b)}
function Va(a){return Array.prototype.concat.apply([],arguments)}
function Xa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ya(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var h=0;h<f;h++)a[e+h]=d[h]}else a.push(d)}}
function Za(a,b,c,d){return Array.prototype.splice.apply(a,$a(arguments,1))}
function $a(a,b,c){return 2>=arguments.length?Array.prototype.slice.call(a,b):Array.prototype.slice.call(a,b,c)}
function ab(a){for(var b=[],c=0;c<arguments.length;c++){var d=arguments[c];if(Ba(d))for(var e=0;e<d.length;e+=8192)for(var f=ab.apply(null,$a(d,e,e+8192)),h=0;h<f.length;h++)b.push(f[h]);else b.push(d)}return b}
;var bb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function cb(a,b){for(var c=0,d=bb(String(a)).split("."),e=bb(String(b)).split("."),f=Math.max(d.length,e.length),h=0;0==c&&h<f;h++){var g=d[h]||"",k=e[h]||"";do{g=/(\d*)(\D*)(.*)/.exec(g)||["","","",""];k=/(\d*)(\D*)(.*)/.exec(k)||["","","",""];if(0==g[0].length&&0==k[0].length)break;c=db(0==g[1].length?0:parseInt(g[1],10),0==k[1].length?0:parseInt(k[1],10))||db(0==g[2].length,0==k[2].length)||db(g[2],k[2]);g=g[3];k=k[3]}while(0==c)}return c}
function db(a,b){return a<b?-1:a>b?1:0}
;var eb;a:{var fb=n.navigator;if(fb){var gb=fb.userAgent;if(gb){eb=gb;break a}}eb=""}function A(a){return-1!=eb.indexOf(a)}
;function hb(a,b,c){for(var d in a)b.call(c,a[d],d,a)}
function ib(a){var b=[],c=0,d;for(d in a)b[c++]=a[d];return b}
function jb(a){var b=kb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function lb(a){for(var b in a)return!1;return!0}
function mb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function nb(a){var b=Aa(a);if("object"==b||"array"==b){if(Da(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=nb(a[c]);return b}return a}
var ob="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function pb(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<ob.length;f++)c=ob[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function qb(){return A("Firefox")||A("FxiOS")}
function rb(){return A("Safari")&&!(sb()||A("Coast")||A("Opera")||A("Edge")||A("Edg/")||A("OPR")||qb()||A("Silk")||A("Android"))}
function sb(){return(A("Chrome")||A("CriOS"))&&!A("Edge")}
function tb(){return A("Android")&&!(sb()||qb()||A("Opera")||A("Silk"))}
;function ub(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function vb(a,b){this.f=a===wb&&b||"";this.g=xb}
vb.prototype.T=!0;vb.prototype.S=function(){return this.f};
var xb={},wb={},yb=new vb(wb,"");function zb(a,b){this.f=a===Ab&&b||"";this.g=Bb}
zb.prototype.T=!0;zb.prototype.S=function(){return this.f.toString()};
var Bb={},Ab={};function Cb(a,b){this.f=a===Db&&b||"";this.g=Eb}
Cb.prototype.T=!0;Cb.prototype.S=function(){return this.f.toString()};
var Fb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i,Eb={},Db={};function Gb(){this.f="";this.g=Hb}
Gb.prototype.T=!0;Gb.prototype.S=function(){return this.f.toString()};
function Ib(a){return a instanceof Gb&&a.constructor===Gb&&a.g===Hb?a.f:"type_error:SafeHtml"}
var Hb={};function Jb(a){var b=new Gb;b.f=a;return b}
Jb("<!DOCTYPE html>");var Kb=Jb("");Jb("<br>");var Lb=ub(function(){var a=document.createElement("div"),b=document.createElement("div");b.appendChild(document.createElement("div"));a.appendChild(b);b=a.firstChild.firstChild;a.innerHTML=Ib(Kb);return!b.parentElement});
function Mb(a,b){if(Lb())for(;a.lastChild;)a.removeChild(a.lastChild);a.innerHTML=Ib(b)}
function Nb(a){var b=new zb(Ab,yb instanceof vb&&yb.constructor===vb&&yb.g===xb?yb.f:"type_error:Const");a.src=(b instanceof zb&&b.constructor===zb&&b.g===Bb?b.f:"type_error:TrustedResourceUrl").toString()}
;function Ob(a){return String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()})}
function Pb(a){return a.replace(RegExp("(^|[\\s]+)([a-z])","g"),function(b,c,d){return c+d.toUpperCase()})}
;function Qb(){return A("iPhone")&&!A("iPod")&&!A("iPad")}
function Rb(){return Qb()||A("iPad")||A("iPod")}
;function Sb(a){Sb[" "](a);return a}
Sb[" "]=xa;function Tb(a,b){var c=Ub;return Object.prototype.hasOwnProperty.call(c,a)?c[a]:c[a]=b(a)}
;var Vb=A("Opera"),B=A("Trident")||A("MSIE"),Wb=A("Edge"),Xb=Wb||B,Yb=A("Gecko")&&!(-1!=eb.toLowerCase().indexOf("webkit")&&!A("Edge"))&&!(A("Trident")||A("MSIE"))&&!A("Edge"),Zb=-1!=eb.toLowerCase().indexOf("webkit")&&!A("Edge"),$b=A("Macintosh"),ac=A("Windows"),bc=A("Android"),cc=Qb(),dc=A("iPad"),ec=A("iPod"),fc=Rb();function gc(){var a=n.document;return a?a.documentMode:void 0}
var hc;a:{var ic="",kc=function(){var a=eb;if(Yb)return/rv:([^\);]+)(\)|;)/.exec(a);if(Wb)return/Edge\/([\d\.]+)/.exec(a);if(B)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(Zb)return/WebKit\/(\S+)/.exec(a);if(Vb)return/(?:Version)[ \/]?(\S+)/.exec(a)}();
kc&&(ic=kc?kc[1]:"");if(B){var lc=gc();if(null!=lc&&lc>parseFloat(ic)){hc=String(lc);break a}}hc=ic}var mc=hc,Ub={};function nc(a){return Tb(a,function(){return 0<=cb(mc,a)})}
var oc;oc=n.document&&B?gc():void 0;var pc=qb(),qc=Qb()||A("iPod"),rc=A("iPad"),sc=tb(),tc=sb(),uc=rb()&&!Rb();var vc={},wc=null;var C=window;function xc(a){this.f=a||{cookie:""}}
m=xc.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.Vb;d=c.secure||!1;var f=c.domain||void 0;var h=c.path||void 0;var g=c.sa}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===g&&(g=-1);c=f?";domain="+f:"";h=h?";path="+h:"";d=d?";secure":"";g=0>g?"":0==g?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(La()+1E3*g)).toUTCString();this.f.cookie=a+"="+b+c+h+g+d+(null!=e?";samesite="+e:
"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=bb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{sa:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=bb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var yc=new xc("undefined"==typeof document?null:document);var zc=!Yb&&!B||B&&9<=Number(oc)||Yb&&nc("1.9.1"),Ac=B&&!nc("9");function D(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=D.prototype;m.clone=function(){return new D(this.x,this.y)};
m.equals=function(a){return a instanceof D&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
function Bc(a,b){return new D(a.x-b.x,a.y-b.y)}
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function Cc(a,b){this.width=a;this.height=b}
m=Cc.prototype;m.clone=function(){return new Cc(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function Dc(a){return a?new Ec(Fc(a)):Ma||(Ma=new Ec)}
function E(a){return"string"===typeof a?document.getElementById(a):a}
function Gc(a,b){var c=b||document;return c.querySelectorAll&&c.querySelector?c.querySelectorAll("."+a):Hc(document,"*",a,b)}
function G(a,b){var c=b||document;if(c.getElementsByClassName)c=c.getElementsByClassName(a)[0];else{c=document;var d=b||c;c=d.querySelectorAll&&d.querySelector&&a?d.querySelector(a?"."+a:""):Hc(c,"*",a,b)[0]||null}return c||null}
function Hc(a,b,c,d){a=d||a;b=b&&"*"!=b?String(b).toUpperCase():"";if(a.querySelectorAll&&a.querySelector&&(b||c))return a.querySelectorAll(b+(c?"."+c:""));if(c&&a.getElementsByClassName){a=a.getElementsByClassName(c);if(b){d={};for(var e=0,f=0,h;h=a[f];f++)b==h.nodeName&&(d[e++]=h);d.length=e;return d}return a}a=a.getElementsByTagName(b||"*");if(c){d={};for(f=e=0;h=a[f];f++)b=h.className,"function"==typeof b.split&&Ua(b.split(/\s+/),c)&&(d[e++]=h);d.length=e;return d}return a}
function Ic(a,b){hb(b,function(c,d){c&&"object"==typeof c&&c.T&&(c=c.S());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:Jc.hasOwnProperty(d)?a.setAttribute(Jc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var Jc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};function Kc(a){a=a.document;a=Lc(a)?a.documentElement:a.body;return new Cc(a.clientWidth,a.clientHeight)}
function Mc(a){var b=Nc(a);a=Oc(a);return B&&nc("10")&&a.pageYOffset!=b.scrollTop?new D(b.scrollLeft,b.scrollTop):new D(a.pageXOffset||b.scrollLeft,a.pageYOffset||b.scrollTop)}
function Nc(a){return a.scrollingElement?a.scrollingElement:!Zb&&Lc(a)?a.documentElement:a.body||a.documentElement}
function Oc(a){return a.parentWindow||a.defaultView}
function Pc(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function Lc(a){return"CSS1Compat"==a.compatMode}
function Qc(a){a&&a.parentNode&&a.parentNode.removeChild(a)}
function Rc(a){return zc&&void 0!=a.children?a.children:Pa(a.childNodes,function(b){return 1==b.nodeType})}
function Sc(a){return Ea(a)&&1==a.nodeType}
function Tc(a,b){if(!a||!b)return!1;if(a.contains&&1==b.nodeType)return a==b||a.contains(b);if("undefined"!=typeof a.compareDocumentPosition)return a==b||!!(a.compareDocumentPosition(b)&16);for(;b&&a!=b;)b=b.parentNode;return b==a}
function Fc(a){return 9==a.nodeType?a:a.ownerDocument||a.document}
function Uc(a,b){if("textContent"in a)a.textContent=b;else if(3==a.nodeType)a.data=String(b);else if(a.firstChild&&3==a.firstChild.nodeType){for(;a.lastChild!=a.firstChild;)a.removeChild(a.lastChild);a.firstChild.data=String(b)}else{for(var c;c=a.firstChild;)a.removeChild(c);a.appendChild(Fc(a).createTextNode(String(b)))}}
function Vc(a,b){var c=[];return Wc(a,b,c,!0)?c[0]:void 0}
function Wc(a,b,c,d){if(null!=a)for(a=a.firstChild;a;){if(b(a)&&(c.push(a),d)||Wc(a,b,c,d))return!0;a=a.nextSibling}return!1}
var Xc={SCRIPT:1,STYLE:1,HEAD:1,IFRAME:1,OBJECT:1},Yc={IMG:" ",BR:"\n"};function $c(a){var b;if((b="A"==a.tagName&&a.hasAttribute("href")||"INPUT"==a.tagName||"TEXTAREA"==a.tagName||"SELECT"==a.tagName||"BUTTON"==a.tagName?!a.disabled&&(!ad(a)||bd(a)):ad(a)&&bd(a))&&B){var c;!Da(a.getBoundingClientRect)||B&&null==a.parentElement?c={height:a.offsetHeight,width:a.offsetWidth}:c=a.getBoundingClientRect();a=null!=c&&0<c.height&&0<c.width}else a=b;return a}
function ad(a){return B&&!nc("9")?(a=a.getAttributeNode("tabindex"),null!=a&&a.specified):a.hasAttribute("tabindex")}
function bd(a){a=a.tabIndex;return"number"===typeof a&&0<=a&&32768>a}
function cd(a){if(Ac&&null!==a&&"innerText"in a)a=a.innerText.replace(/(\r\n|\r|\n)/g,"\n");else{var b=[];dd(a,b,!0);a=b.join("")}a=a.replace(/ \xAD /g," ").replace(/\xAD/g,"");a=a.replace(/\u200B/g,"");Ac||(a=a.replace(/ +/g," "));" "!=a&&(a=a.replace(/^\s*/,""));return a}
function dd(a,b,c){if(!(a.nodeName in Xc))if(3==a.nodeType)c?b.push(String(a.nodeValue).replace(/(\r\n|\r|\n)/g,"")):b.push(a.nodeValue);else if(a.nodeName in Yc)b.push(Yc[a.nodeName]);else for(a=a.firstChild;a;)dd(a,b,c),a=a.nextSibling}
function ed(a,b,c,d){if(!b&&!c)return null;var e=b?String(b).toUpperCase():null;return fd(a,function(f){return(!e||f.nodeName==e)&&(!c||"string"===typeof f.className&&Ua(f.className.split(/\s+/),c))},!0,d)}
function H(a,b){return ed(a,null,b,void 0)}
function fd(a,b,c,d){a&&!c&&(a=a.parentNode);for(c=0;a&&(null==d||c<=d);){if(b(a))return a;a=a.parentNode;c++}return null}
function Ec(a){this.f=a||n.document||document}
Ec.prototype.getElementsByTagName=function(a,b){return(b||this.f).getElementsByTagName(String(a))};
Ec.prototype.createElement=function(a){return Pc(this.f,a)};
Ec.prototype.appendChild=function(a,b){a.appendChild(b)};
Ec.prototype.isElement=Sc;var gd=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function hd(a){return a.match(gd)}
function id(a){return a?decodeURI(a):a}
function jd(a,b){if(!b)return a;var c=a.indexOf("#");0>c&&(c=a.length);var d=a.indexOf("?");if(0>d||d>c){d=c;var e=""}else e=a.substring(d+1,c);c=[a.substr(0,d),e,a.substr(c)];d=c[1];c[1]=b?d?d+"&"+b:b:d;return c[0]+(c[1]?"?"+c[1]:"")+c[2]}
function kd(a,b,c){if(Ba(b))for(var d=0;d<b.length;d++)kd(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function ld(a,b){for(var c=[],d=b||0;d<a.length;d+=2)kd(a[d],a[d+1],c);return c.join("&")}
function md(a){var b=[],c;for(c in a)kd(c,a[c],b);return b.join("&")}
function nd(a,b){var c=2==arguments.length?ld(arguments[1],0):ld(arguments,1);return jd(a,c)}
function od(a,b){var c=md(b);return jd(a,c)}
;function pd(a){var b=qd;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function rd(){var a=[];pd(function(b){a.push(b)});
return a}
var qd={Ab:"allow-forms",Bb:"allow-modals",Cb:"allow-orientation-lock",Db:"allow-pointer-lock",Eb:"allow-popups",Fb:"allow-popups-to-escape-sandbox",Gb:"allow-presentation",Hb:"allow-same-origin",Ib:"allow-scripts",Jb:"allow-top-navigation",Kb:"allow-top-navigation-by-user-activation"},sd=ub(function(){return rd()});
function td(){var a=Pc(document,"IFRAME"),b={};z(sd(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function ud(a,b,c,d){this.top=a;this.right=b;this.bottom=c;this.left=d}
m=ud.prototype;m.getHeight=function(){return this.bottom-this.top};
m.clone=function(){return new ud(this.top,this.right,this.bottom,this.left)};
m.ceil=function(){this.top=Math.ceil(this.top);this.right=Math.ceil(this.right);this.bottom=Math.ceil(this.bottom);this.left=Math.ceil(this.left);return this};
m.floor=function(){this.top=Math.floor(this.top);this.right=Math.floor(this.right);this.bottom=Math.floor(this.bottom);this.left=Math.floor(this.left);return this};
m.round=function(){this.top=Math.round(this.top);this.right=Math.round(this.right);this.bottom=Math.round(this.bottom);this.left=Math.round(this.left);return this};function vd(a,b,c,d){this.left=a;this.top=b;this.width=c;this.height=d}
vd.prototype.clone=function(){return new vd(this.left,this.top,this.width,this.height)};
vd.prototype.ceil=function(){this.left=Math.ceil(this.left);this.top=Math.ceil(this.top);this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
vd.prototype.floor=function(){this.left=Math.floor(this.left);this.top=Math.floor(this.top);this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
vd.prototype.round=function(){this.left=Math.round(this.left);this.top=Math.round(this.top);this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function wd(a,b,c){if("string"===typeof b)(b=xd(a,b))&&(a.style[b]=c);else for(var d in b){c=a;var e=b[d],f=xd(c,d);f&&(c.style[f]=e)}}
var yd={};function xd(a,b){var c=yd[b];if(!c){var d=Ob(b);c=d;void 0===a.style[d]&&(d=(Zb?"Webkit":Yb?"Moz":B?"ms":Vb?"O":null)+Pb(d),void 0!==a.style[d]&&(c=d));yd[b]=c}return c}
function zd(a,b){var c=Fc(a);return c.defaultView&&c.defaultView.getComputedStyle&&(c=c.defaultView.getComputedStyle(a,null))?c[b]||c.getPropertyValue(b)||"":""}
function Ad(a,b){return zd(a,b)||(a.currentStyle?a.currentStyle[b]:null)||a.style&&a.style[b]}
function Bd(a){try{var b=a.getBoundingClientRect()}catch(c){return{left:0,top:0,right:0,bottom:0}}B&&a.ownerDocument.body&&(a=a.ownerDocument,b.left-=a.documentElement.clientLeft+a.body.clientLeft,b.top-=a.documentElement.clientTop+a.body.clientTop);return b}
function Cd(a){if(B&&!(8<=Number(oc)))return a.offsetParent;var b=Fc(a),c=Ad(a,"position"),d="fixed"==c||"absolute"==c;for(a=a.parentNode;a&&a!=b;a=a.parentNode)if(11==a.nodeType&&a.host&&(a=a.host),c=Ad(a,"position"),d=d&&"static"==c&&a!=b.documentElement&&a!=b.body,!d&&(a.scrollWidth>a.clientWidth||a.scrollHeight>a.clientHeight||"fixed"==c||"absolute"==c||"relative"==c))return a;return null}
function Dd(a){for(var b=new ud(0,Infinity,Infinity,0),c=Dc(a),d=c.f.body,e=c.f.documentElement,f=Nc(c.f);a=Cd(a);)if(!(B&&0==a.clientWidth||Zb&&0==a.clientHeight&&a==d)&&a!=d&&a!=e&&"visible"!=Ad(a,"overflow")){var h=Ed(a),g=new D(a.clientLeft,a.clientTop);h.x+=g.x;h.y+=g.y;b.top=Math.max(b.top,h.y);b.right=Math.min(b.right,h.x+a.clientWidth);b.bottom=Math.min(b.bottom,h.y+a.clientHeight);b.left=Math.max(b.left,h.x)}d=f.scrollLeft;f=f.scrollTop;b.left=Math.max(b.left,d);b.top=Math.max(b.top,f);c=
Kc(Oc(c.f)||window);b.right=Math.min(b.right,d+c.width);b.bottom=Math.min(b.bottom,f+c.height);return 0<=b.top&&0<=b.left&&b.bottom>b.top&&b.right>b.left?b:null}
function Ed(a){var b=Fc(a),c=new D(0,0);var d=b?Fc(b):document;d=!B||9<=Number(oc)||Lc(Dc(d).f)?d.documentElement:d.body;if(a==d)return c;a=Bd(a);b=Mc(Dc(b).f);c.x=a.left+b.x;c.y=a.top+b.y;return c}
function Fd(a){a=Bd(a);return new D(a.left,a.top)}
function Gd(a,b){"number"==typeof a&&(a=(b?Math.round(a):a)+"px");return a}
function Hd(a){var b=Id;if("none"!=Ad(a,"display"))return b(a);var c=a.style,d=c.display,e=c.visibility,f=c.position;c.visibility="hidden";c.position="absolute";c.display="inline";a=b(a);c.display=d;c.position=f;c.visibility=e;return a}
function Id(a){var b=a.offsetWidth,c=a.offsetHeight,d=Zb&&!b&&!c;return(void 0===b||d)&&a.getBoundingClientRect?(a=Bd(a),new Cc(a.right-a.left,a.bottom-a.top)):new Cc(b,c)}
function Jd(a){var b=Ed(a);a=Hd(a);return new vd(b.x,b.y,a.width,a.height)}
function Kd(a){return"rtl"==Ad(a,"direction")}
function Ld(a,b){if(/^\d+px?$/.test(b))return parseInt(b,10);var c=a.style.left,d=a.runtimeStyle.left;a.runtimeStyle.left=a.currentStyle.left;a.style.left=b;var e=a.style.pixelLeft;a.style.left=c;a.runtimeStyle.left=d;return+e}
function Md(a,b){var c=a.currentStyle?a.currentStyle[b]:null;return c?Ld(a,c):0}
var Nd={thin:2,medium:4,thick:6};function Od(a,b){if("none"==(a.currentStyle?a.currentStyle[b+"Style"]:null))return 0;var c=a.currentStyle?a.currentStyle[b+"Width"]:null;return c in Nd?Nd[c]:Ld(a,c)}
;var Pd=(new Date).getTime();function Qd(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;/*
 gapi.loader.OBJECT_CREATE_TEST_OVERRIDE &&*/
var Rd=window,Sd=document,Td=Rd.location;function Ud(){}
var Vd=/\[native code\]/;function I(a,b,c){return a[b]=a[b]||c}
function Wd(a){a=a.sort();for(var b=[],c=void 0,d=0;d<a.length;d++){var e=a[d];e!=c&&b.push(e);c=e}return b}
function Xd(){var a;if((a=Object.create)&&Vd.test(a))a=a(null);else{a={};for(var b in a)a[b]=void 0}return a}
var Yd=I(Rd,"gapi",{});var J;J=I(Rd,"___jsl",Xd());I(J,"I",0);I(J,"hel",10);function Zd(){var a=Td.href;if(J.dpo)var b=J.h;else{b=J.h;var c=RegExp("([#].*&|[#])jsh=([^&#]*)","g"),d=RegExp("([?#].*&|[?#])jsh=([^&#]*)","g");if(a=a&&(c.exec(a)||d.exec(a)))try{b=decodeURIComponent(a[2])}catch(e){}}return b}
function $d(a){var b=I(J,"PQ",[]);J.PQ=[];var c=b.length;if(0===c)a();else for(var d=0,e=function(){++d===c&&a()},f=0;f<c;f++)b[f](e)}
function ae(a){return I(I(J,"H",Xd()),a,Xd())}
;function be(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(q){for(var t=h,r=0;64>r;r+=4)t[r/4]=q[r]<<24|q[r+1]<<16|q[r+2]<<8|q[r+3];for(r=16;80>r;r++)q=t[r-3]^t[r-8]^t[r-14]^t[r-16],t[r]=(q<<1|q>>>31)&4294967295;q=e[0];var u=e[1],Q=e[2],F=e[3],Wa=e[4];for(r=0;80>r;r++){if(40>r)if(20>r){var ea=F^u&(Q^F);var ya=1518500249}else ea=u^Q^F,ya=1859775393;else 60>r?(ea=u&Q|F&(u|Q),ya=2400959708):(ea=u^Q^F,ya=3395469782);ea=((q<<5|q>>>27)&4294967295)+ea+Wa+ya+t[r]&4294967295;Wa=F;F=Q;Q=(u<<30|u>>>2)&4294967295;u=q;q=ea}e[0]=e[0]+q&4294967295;e[1]=e[1]+
u&4294967295;e[2]=e[2]+Q&4294967295;e[3]=e[3]+F&4294967295;e[4]=e[4]+Wa&4294967295}
function c(q,t){if("string"===typeof q){q=unescape(encodeURIComponent(q));for(var r=[],u=0,Q=q.length;u<Q;++u)r.push(q.charCodeAt(u));q=r}t||(t=q.length);r=0;if(0==l)for(;r+64<t;)b(q.slice(r,r+64)),r+=64,p+=64;for(;r<t;)if(f[l++]=q[r++],p++,64==l)for(l=0,b(f);r+64<t;)b(q.slice(r,r+64)),r+=64,p+=64}
function d(){var q=[],t=8*p;56>l?c(g,56-l):c(g,64-(l-56));for(var r=63;56<=r;r--)f[r]=t&255,t>>>=8;b(f);for(r=t=0;5>r;r++)for(var u=24;0<=u;u-=8)q[t++]=e[r]>>u&255;return q}
for(var e=[],f=[],h=[],g=[128],k=1;64>k;++k)g[k]=0;var l,p;a();return{reset:a,update:c,digest:d,Ua:function(){for(var q=d(),t="",r=0;r<q.length;r++)t+="0123456789ABCDEF".charAt(Math.floor(q[r]/16))+"0123456789ABCDEF".charAt(q[r]%16);return t}}}
;function ce(a,b,c){var d=[],e=[];if(1==(Ba(c)?2:1))return e=[b,a],z(d,function(g){e.push(g)}),de(e.join(" "));
var f=[],h=[];z(c,function(g){h.push(g.key);f.push(g.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];z(d,function(g){e.push(g)});
a=de(e.join(" "));a=[c,a];0==h.length||a.push(h.join(""));return a.join("_")}
function de(a){var b=be();b.update(a);return b.Ua().toLowerCase()}
;function ee(a){var b=Qd(String(n.location.href)),c;(c=n.__SAPISID||n.__APISID||n.__OVERRIDE_SID)?c=!0:(c=new xc(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?n.__SAPISID:n.__APISID,c||(c=new xc(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(n.location.href);return d&&c&&b?[b,ce(Qd(d),c,a||null)].join(" "):null}return null}
;var fe=I(J,"perf",Xd());I(fe,"g",Xd());var ge=I(fe,"i",Xd());I(fe,"r",[]);Xd();Xd();function he(a,b,c){b&&0<b.length&&(b=ie(b),c&&0<c.length&&(b+="___"+ie(c)),28<b.length&&(b=b.substr(0,28)+(b.length-28)),c=b,b=I(ge,"_p",Xd()),I(b,c,Xd())[a]=(new Date).getTime(),b=fe.r,"function"===typeof b?b(a,"_p",c):b.push([a,"_p",c]))}
function ie(a){return a.join("__").replace(/\./g,"_").replace(/\-/g,"_").replace(/,/g,"_")}
;var je=Xd(),ke=[];function le(a){throw Error("Bad hint"+(a?": "+a:""));}
ke.push(["jsl",function(a){for(var b in a)if(Object.prototype.hasOwnProperty.call(a,b)){var c=a[b];"object"==typeof c?J[b]=I(J,b,[]).concat(c):I(J,b,c)}if(b=a.u)a=I(J,"us",[]),a.push(b),(b=/^https:(.*)$/.exec(b))&&a.push("http:"+b[1])}]);
var me=/^(\/[a-zA-Z0-9_\-]+)+$/,ne=[/\/amp\//,/\/amp$/,/^\/amp$/],oe=/^[a-zA-Z0-9\-_\.,!]+$/,pe=/^gapi\.loaded_[0-9]+$/,qe=/^[a-zA-Z0-9,._-]+$/;function re(a,b,c,d){var e=a.split(";"),f=e.shift(),h=je[f],g=null;h?g=h(e,b,c,d):le("no hint processor for: "+f);g||le("failed to generate load url");b=g;c=b.match(se);(d=b.match(te))&&1===d.length&&ue.test(b)&&c&&1===c.length||le("failed sanity: "+a);return g}
function ve(a,b,c,d){function e(f){return encodeURIComponent(f).replace(/%2C/g,",")}
a=we(a);pe.test(c)||le("invalid_callback");b=xe(b);d=d&&d.length?xe(d):null;return[encodeURIComponent(a.pathPrefix).replace(/%2C/g,",").replace(/%2F/g,"/"),"/k=",e(a.version),"/m=",e(b),d?"/exm="+e(d):"","/rt=j/sv=1/d=1/ed=1",a.ga?"/am="+e(a.ga):"",a.Ea?"/rs="+e(a.Ea):"",a.Oa?"/t="+e(a.Oa):"","/cb=",e(c)].join("")}
function we(a){"/"!==a.charAt(0)&&le("relative path");for(var b=a.substring(1).split("/"),c=[];b.length;){a=b.shift();if(!a.length||0==a.indexOf("."))le("empty/relative directory");else if(0<a.indexOf("=")){b.unshift(a);break}c.push(a)}a={};for(var d=0,e=b.length;d<e;++d){var f=b[d].split("="),h=decodeURIComponent(f[0]),g=decodeURIComponent(f[1]);2==f.length&&h&&g&&(a[h]=a[h]||g)}b="/"+c.join("/");me.test(b)||le("invalid_prefix");c=0;for(d=ne.length;c<d;++c)ne[c].test(b)&&le("invalid_prefix");c=ye(a,
"k",!0);d=ye(a,"am");e=ye(a,"rs");a=ye(a,"t");return{pathPrefix:b,version:c,ga:d,Ea:e,Oa:a}}
function xe(a){for(var b=[],c=0,d=a.length;c<d;++c){var e=a[c].replace(/\./g,"_").replace(/-/g,"_");qe.test(e)&&b.push(e)}return b.join(",")}
function ye(a,b,c){a=a[b];!a&&c&&le("missing: "+b);if(a){if(oe.test(a))return a;le("invalid: "+b)}return null}
var ue=/^https?:\/\/[a-z0-9_.-]+\.google(rs)?\.com(:\d+)?\/[a-zA-Z0-9_.,!=\-\/]+$/,te=/\/cb=/g,se=/\/\//g;function ze(){var a=Zd();if(!a)throw Error("Bad hint");return a}
je.m=function(a,b,c,d){(a=a[0])||le("missing_hint");return"https://apis.google.com"+ve(a,b,c,d)};
var Ae=decodeURI("%73cript"),Be=/^[-+_0-9\/A-Za-z]+={0,2}$/;function Ce(a,b){for(var c=[],d=0;d<a.length;++d){var e=a[d],f;if(f=e){a:{for(f=0;f<b.length;f++)if(b[f]===e)break a;f=-1}f=0>f}f&&c.push(e)}return c}
function De(){var a=J.nonce;return void 0!==a?a&&a===String(a)&&a.match(Be)?a:J.nonce=null:Sd.querySelector?(a=Sd.querySelector("script[nonce]"))?(a=a.nonce||a.getAttribute("nonce")||"",a&&a===String(a)&&a.match(Be)?J.nonce=a:J.nonce=null):null:null}
function Ee(a){if("loading"!=Sd.readyState)Fe(a);else{var b=De(),c="";null!==b&&(c=' nonce="'+b+'"');a="<"+Ae+' src="'+encodeURI(a)+'"'+c+"></"+Ae+">";Sd.write(a)}}
function Fe(a){var b=Sd.createElement(Ae);b.setAttribute("src",a);a=De();null!==a&&b.setAttribute("nonce",a);b.async="true";(a=Sd.getElementsByTagName(Ae)[0])?a.parentNode.insertBefore(b,a):(Sd.head||Sd.body||Sd.documentElement).appendChild(b)}
function Ge(a,b){var c=b&&b._c;if(c)for(var d=0;d<ke.length;d++){var e=ke[d][0],f=ke[d][1];f&&Object.prototype.hasOwnProperty.call(c,e)&&f(c[e],a,b)}}
function He(a,b,c){Ie(function(){var d=b===Zd()?I(Yd,"_",Xd()):Xd();d=I(ae(b),"_",d);a(d)},c)}
function Je(a,b){var c=b||{};"function"==typeof b&&(c={},c.callback=b);Ge(a,c);var d=a?a.split(":"):[],e=c.h||ze(),f=I(J,"ah",Xd());if(f["::"]&&d.length){for(var h=[],g=null;g=d.shift();){var k=g.split(".");k=f[g]||f[k[1]&&"ns:"+k[0]||""]||e;var l=h.length&&h[h.length-1]||null,p=l;l&&l.hint==k||(p={hint:k,features:[]},h.push(p));p.features.push(g)}var q=h.length;if(1<q){var t=c.callback;t&&(c.callback=function(){0==--q&&t()})}for(;d=h.shift();)Ke(d.features,c,d.hint)}else Ke(d||[],c,e)}
function Ke(a,b,c){function d(ea,ya){if(q)return 0;Rd.clearTimeout(p);t.push.apply(t,u);var jc=((Yd||{}).config||{}).update;jc?jc(f):f&&I(J,"cu",[]).push(f);if(ya){he("me0",ea,r);try{He(ya,c,l)}finally{he("me1",ea,r)}}return 1}
a=Wd(a)||[];var e=b.callback,f=b.config,h=b.timeout,g=b.ontimeout,k=b.onerror,l=void 0;"function"==typeof k&&(l=k);var p=null,q=!1;if(h&&!g||!h&&g)throw"Timeout requires both the timeout parameter and ontimeout parameter to be set";k=I(ae(c),"r",[]).sort();var t=I(ae(c),"L",[]).sort(),r=[].concat(k);0<h&&(p=Rd.setTimeout(function(){q=!0;g()},h));
var u=Ce(a,t);if(u.length){u=Ce(a,k);var Q=I(J,"CP",[]),F=Q.length;Q[F]=function(ea){function ya(){var Zc=Q[F+1];Zc&&Zc()}
function jc(Zc){Q[F]=null;d(u,ea)&&$d(function(){e&&e();Zc()})}
if(!ea)return 0;he("ml1",u,r);0<F&&Q[F-1]?Q[F]=function(){jc(ya)}:jc(ya)};
if(u.length){var Wa="loaded_"+J.I++;Yd[Wa]=function(ea){Q[F](ea);Yd[Wa]=null};
a=re(c,u,"gapi."+Wa,k);k.push.apply(k,u);he("ml0",u,r);b.sync||Rd.___gapisync?Ee(a):Fe(a)}else Q[F](Ud)}else d(u)&&e&&e()}
function Ie(a,b){if(J.hee&&0<J.hel)try{return a()}catch(c){b&&b(c),J.hel--,Je("debug_error",function(){try{window.___jsl.hefn(c)}catch(d){throw c;}})}else try{return a()}catch(c){throw b&&b(c),c;
}}
Yd.load=function(a,b){return Ie(function(){return Je(a,b)})};function Le(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Me(a){return a.classList?a.classList:Le(a).match(/\S+/g)||[]}
function Ne(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function K(a,b){return a.classList?a.classList.contains(b):Ua(Me(a),b)}
function L(a,b){if(a.classList)a.classList.add(b);else if(!K(a,b)){var c=Le(a);Ne(a,c+(0<c.length?" "+b:b))}}
function Oe(a,b){if(a.classList)z(b,function(f){L(a,f)});
else{var c={};z(Me(a),function(f){c[f]=!0});
z(b,function(f){c[f]=!0});
var d="",e;for(e in c)d+=0<d.length?" "+e:e;Ne(a,d)}}
function M(a,b){a.classList?a.classList.remove(b):K(a,b)&&Ne(a,Pa(Me(a),function(c){return c!=b}).join(" "))}
function Pe(a,b){a.classList?z(b,function(c){M(a,c)}):Ne(a,Pa(Me(a),function(c){return!Ua(b,c)}).join(" "))}
function Qe(a,b,c){c?L(a,b):M(a,b)}
function Re(a,b,c){K(a,b)&&(M(a,b),L(a,c))}
function Se(a,b){var c=!K(a,b);Qe(a,b,c)}
;var Te=!B&&!rb();function Ue(a,b){if(/-[a-z]/.test(b))return null;if(Te&&a.dataset){if(tb()&&!(b in a.dataset))return null;var c=a.dataset[b];return void 0===c?null:c}return a.getAttribute("data-"+String(b).replace(/([A-Z])/g,"-$1").toLowerCase())}
;var Ve="StopIteration"in n?n.StopIteration:{message:"StopIteration",stack:""};function We(){}
We.prototype.next=function(){throw Ve;};
We.prototype.L=function(){return this};
function Xe(a){if(a instanceof We)return a;if("function"==typeof a.L)return a.L(!1);if(Ca(a)){var b=0,c=new We;c.next=function(){for(;;){if(b>=a.length)throw Ve;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Ye(a,b){if(Ca(a))try{z(a,b,void 0)}catch(c){if(c!==Ve)throw c;}else{a=Xe(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Ve)throw c;}}}
function Ze(a){if(Ca(a))return Xa(a);a=Xe(a);var b=[];Ye(a,function(c){b.push(c)});
return b}
;function $e(a,b){this.i={};this.f=[];this.M=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof $e)for(c=af(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function af(a){bf(a);return a.f.concat()}
m=$e.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||cf;bf(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function cf(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.i={};this.M=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.i,a)?(delete this.i[a],this.g--,this.M++,this.f.length>2*this.g&&bf(this),!0):!1};
function bf(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.i,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.i,a)?this.i[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.i,a)||(this.g++,this.f.push(a),this.M++);this.i[a]=b};
m.forEach=function(a,b){for(var c=af(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new $e(this)};
m.L=function(a){bf(this);var b=0,c=this.M,d=this,e=new We;e.next=function(){if(c!=d.M)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Ve;var f=d.f[b++];return a?f:d.i[f]};
return e};function df(a,b){this.i=a;this.l=b;this.g=0;this.f=null}
df.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.i();return a};
function ef(a,b){a.l(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function ff(a){n.setTimeout(function(){throw a;},0)}
var gf;
function hf(){var a=n.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&!A("Presto")&&(a=function(){var e=Pc(document,"IFRAME");e.style.display="none";Nb(e);document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Ib(Kb));e.close();var h="callImmediate"+Math.random(),g="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=w(function(k){if(("*"==g||k.origin==g)&&k.data==h)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(h,g)}}});
if("undefined"!==typeof a&&!A("Trident")&&!A("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ia;c.ia=null;e()}};
return function(e){d.next={ia:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in Pc(document,"SCRIPT")?function(e){var f=Pc(document,"SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){n.setTimeout(e,0)}}
;function jf(){this.g=this.f=null}
var lf=new df(function(){return new kf},function(a){a.reset()});
jf.prototype.add=function(a,b){var c=lf.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
jf.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function kf(){this.next=this.scope=this.f=null}
kf.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
kf.prototype.reset=function(){this.next=this.scope=this.f=null};function mf(a,b){nf||of();pf||(nf(),pf=!0);qf.add(a,b)}
var nf;function of(){if(n.Promise&&n.Promise.resolve){var a=n.Promise.resolve(void 0);nf=function(){a.then(rf)}}else nf=function(){var b=rf;
!Da(n.setImmediate)||n.Window&&n.Window.prototype&&!A("Edge")&&n.Window.prototype.setImmediate==n.setImmediate?(gf||(gf=hf()),gf(b)):n.setImmediate(b)}}
var pf=!1,qf=new jf;function rf(){for(var a;a=qf.remove();){try{a.f.call(a.scope)}catch(b){ff(b)}ef(lf,a)}pf=!1}
;function sf(a){this.f=0;this.B=void 0;this.l=this.g=this.i=null;this.o=this.v=!1;if(a!=xa)try{var b=this;a.call(void 0,function(c){tf(b,2,c)},function(c){tf(b,3,c)})}catch(c){tf(this,3,c)}}
function uf(){this.next=this.context=this.onRejected=this.g=this.f=null;this.i=!1}
uf.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.i=!1};
var vf=new df(function(){return new uf},function(a){a.reset()});
function wf(a,b,c){var d=vf.get();d.g=a;d.onRejected=b;d.context=c;return d}
sf.prototype.then=function(a,b,c){return xf(this,Da(a)?a:null,Da(b)?b:null,c)};
sf.prototype.$goog_Thenable=!0;sf.prototype.cancel=function(a){if(0==this.f){var b=new yf(a);mf(function(){zf(this,b)},this)}};
function zf(a,b){if(0==a.f)if(a.i){var c=a.i;if(c.g){for(var d=0,e=null,f=null,h=c.g;h&&(h.i||(d++,h.f==a&&(e=h),!(e&&1<d)));h=h.next)e||(f=h);e&&(0==c.f&&1==d?zf(c,b):(f?(d=f,d.next==c.l&&(c.l=d),d.next=d.next.next):Af(c),Bf(c,e,3,b)))}a.i=null}else tf(a,3,b)}
function Cf(a,b){a.g||2!=a.f&&3!=a.f||Df(a);a.l?a.l.next=b:a.g=b;a.l=b}
function xf(a,b,c,d){var e=wf(null,null,null);e.f=new sf(function(f,h){e.g=b?function(g){try{var k=b.call(d,g);f(k)}catch(l){h(l)}}:f;
e.onRejected=c?function(g){try{var k=c.call(d,g);void 0===k&&g instanceof yf?h(g):f(k)}catch(l){h(l)}}:h});
e.f.i=a;Cf(a,e);return e.f}
sf.prototype.K=function(a){this.f=0;tf(this,2,a)};
sf.prototype.V=function(a){this.f=0;tf(this,3,a)};
function tf(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.K,f=a.V;if(d instanceof sf){Cf(d,wf(e||xa,f||null,a));var h=!0}else{if(d)try{var g=!!d.$goog_Thenable}catch(l){g=!1}else g=!1;if(g)d.then(e,f,a),h=!0;else{if(Ea(d))try{var k=d.then;if(Da(k)){Ef(d,k,e,f,a);h=!0;break a}}catch(l){f.call(a,l);h=!0;break a}h=!1}}}h||(a.B=c,a.f=b,a.i=null,Df(a),3!=b||c instanceof yf||Ff(a,c))}}
function Ef(a,b,c,d,e){function f(k){g||(g=!0,d.call(e,k))}
function h(k){g||(g=!0,c.call(e,k))}
var g=!1;try{b.call(a,h,f)}catch(k){f(k)}}
function Df(a){a.v||(a.v=!0,mf(a.F,a))}
function Af(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.l=null);return b}
sf.prototype.F=function(){for(var a;a=Af(this);)Bf(this,a,this.f,this.B);this.v=!1};
function Bf(a,b,c,d){if(3==c&&b.onRejected&&!b.i)for(;a&&a.o;a=a.i)a.o=!1;if(b.f)b.f.i=null,Gf(b,c,d);else try{b.i?b.g.call(b.context):Gf(b,c,d)}catch(e){Hf.call(null,e)}ef(vf,b)}
function Gf(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function Ff(a,b){a.o=!0;mf(function(){a.o&&Hf.call(null,b)})}
var Hf=ff;function yf(a){Na.call(this,a)}
y(yf,Na);yf.prototype.name="cancel";var If=function(){if(ac){var a=/Windows NT ([0-9.]+)/;return(a=a.exec(eb))?a[1]:"0"}return $b?(a=/10[_.][0-9_.]+/,(a=a.exec(eb))?a[0].replace(/_/g,"."):"10"):bc?(a=/Android\s+([^\);]+)(\)|;)/,(a=a.exec(eb))?a[1]:""):cc||dc||ec?(a=/(?:iPhone|CPU)\s+OS\s+(\S+)/,(a=a.exec(eb))?a[1].replace(/_/g,"."):""):""}();function Jf(a){return(a=a.exec(eb))?a[1]:""}
var Kf=function(){if(pc)return Jf(/Firefox\/([0-9.]+)/);if(B||Wb||Vb)return mc;if(tc)return Rb()?Jf(/CriOS\/([0-9.]+)/):Jf(/Chrome\/([0-9.]+)/);if(uc&&!Rb())return Jf(/Version\/([0-9.]+)/);if(qc||rc){var a=/Version\/(\S+).*Mobile\/(\S+)/.exec(eb);if(a)return a[1]+"."+a[2]}else if(sc)return(a=Jf(/Android\s+([0-9.]+)/))?a:Jf(/Version\/([0-9.]+)/);return""}();function Lf(){this.g=[];this.f=-1}
Lf.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
Lf.prototype.get=function(a){return!!this.g[a]};
function Mf(a){-1==a.f&&(a.f=Ra(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Nf(){this.g=-1}
;function Of(){this.g=64;this.f=[];this.v=[];this.B=[];this.l=[];this.l[0]=128;for(var a=1;a<this.g;++a)this.l[a]=0;this.o=this.i=0;this.reset()}
y(Of,Nf);Of.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.o=this.i=0};
function Pf(a,b,c){c||(c=0);var d=a.B;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var h=a.f[2],g=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=g^c&(h^g);var l=1518500249}else f=c^h^g,l=1859775393;else 60>e?(f=c&h|g&(c|h),l=2400959708):
(f=c^h^g,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=g;g=h;h=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+h&4294967295;a.f[3]=a.f[3]+g&4294967295;a.f[4]=a.f[4]+k&4294967295}
Of.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.v,f=this.i;d<b;){if(0==f)for(;d<=c;)Pf(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Pf(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Pf(this,e);f=0;break}}this.i=f;this.o+=b}};
Of.prototype.digest=function(){var a=[],b=8*this.o;56>this.i?this.update(this.l,56-this.i):this.update(this.l,this.g-(this.i-56));for(var c=this.g-1;56<=c;c--)this.v[c]=b&255,b/=256;Pf(this,this.v);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Qf(){this.i=this.i;this.l=this.l}
Qf.prototype.i=!1;Qf.prototype.X=function(){return this.i};
Qf.prototype.dispose=function(){this.i||(this.i=!0,this.ba())};
Qf.prototype.ba=function(){if(this.l)for(;this.l.length;)this.l.shift()()};
function Rf(a){a&&"function"==typeof a.dispose&&a.dispose()}
;function Sf(a){var b=[];Tf(new Uf,a,b);return b.join("")}
function Uf(){}
function Tf(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Ba(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Tf(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Vf(d,c),c.push(":"),Tf(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Vf(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Wf={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Xf=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Vf(a,b){b.push('"',a.replace(Xf,function(c){var d=Wf[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Wf[c]=d);return d}),'"')}
;function Yf(a,b,c,d,e,f,h){var g;if(g=c.offsetParent){var k="HTML"==g.tagName||"BODY"==g.tagName;if(!k||"static"!=Ad(g,"position")){var l=Ed(g);if(!k){k=Kd(g);var p;if(p=k){if(p=uc)p=0<=cb(Kf,10);var q;if(q=fc)q=0<=cb(If,10);p=Yb||p||q}k=p?-g.scrollLeft:!k||Xb&&nc("8")||"visible"==Ad(g,"overflowX")?g.scrollLeft:g.scrollWidth-g.clientWidth-g.scrollLeft;l=Bc(l,new D(k,g.scrollTop))}}}g=l||new D;l=Jd(a);if(k=Dd(a)){var t=new vd(k.left,k.top,k.right-k.left,k.bottom-k.top);k=Math.max(l.left,t.left);p=
Math.min(l.left+l.width,t.left+t.width);k<=p&&(q=Math.max(l.top,t.top),t=Math.min(l.top+l.height,t.top+t.height),q<=t&&(l.left=k,l.top=q,l.width=p-k,l.height=t-q))}k=Dc(a);q=Dc(c);if(k.f!=q.f){p=k.f.body;q=Oc(q.f);t=new D(0,0);var r=(r=Fc(p))?Oc(r):window;b:{try{Sb(r.parent);var u=!0;break b}catch(Wa){}u=!1}if(u){u=p;do{var Q=r==q?Ed(u):Fd(u);t.x+=Q.x;t.y+=Q.y}while(r&&r!=q&&r!=r.parent&&(u=r.frameElement)&&(r=r.parent))}u=Bc(t,Ed(p));!B||9<=Number(oc)||Lc(k.f)||(u=Bc(u,Mc(k.f)));l.left+=u.x;l.top+=
u.y}a=Zf(a,b);b=l.left;a&4?b+=l.width:a&2&&(b+=l.width/2);b=new D(b,l.top+(a&1?l.height:0));b=Bc(b,g);e&&(b.x+=(a&4?-1:1)*e.x,b.y+=(a&1?-1:1)*e.y);var F;h&&(F=Dd(c))&&(F.top-=g.y,F.right-=g.x,F.bottom-=g.y,F.left-=g.x);return $f(b,c,d,f,F,h,void 0)}
function $f(a,b,c,d,e,f,h){a=a.clone();var g=Zf(b,c);c=Hd(b);h=h?h.clone():c.clone();a=a.clone();h=h.clone();var k=0;if(d||0!=g)g&4?a.x-=h.width+(d?d.right:0):g&2?a.x-=h.width/2:d&&(a.x+=d.left),g&1?a.y-=h.height+(d?d.bottom:0):d&&(a.y+=d.top);if(f){if(e){d=a;g=h;k=0;65==(f&65)&&(d.x<e.left||d.x>=e.right)&&(f&=-2);132==(f&132)&&(d.y<e.top||d.y>=e.bottom)&&(f&=-5);d.x<e.left&&f&1&&(d.x=e.left,k|=1);if(f&16){var l=d.x;d.x<e.left&&(d.x=e.left,k|=4);d.x+g.width>e.right&&(g.width=Math.min(e.right-d.x,
l+g.width-e.left),g.width=Math.max(g.width,0),k|=4)}d.x+g.width>e.right&&f&1&&(d.x=Math.max(e.right-g.width,e.left),k|=1);f&2&&(k|=(d.x<e.left?16:0)|(d.x+g.width>e.right?32:0));d.y<e.top&&f&4&&(d.y=e.top,k|=2);f&32&&(l=d.y,d.y<e.top&&(d.y=e.top,k|=8),d.y+g.height>e.bottom&&(g.height=Math.min(e.bottom-d.y,l+g.height-e.top),g.height=Math.max(g.height,0),k|=8));d.y+g.height>e.bottom&&f&4&&(d.y=Math.max(e.bottom-g.height,e.top),k|=2);f&8&&(k|=(d.y<e.top?64:0)|(d.y+g.height>e.bottom?128:0));e=k}else e=
256;k=e}f=new vd(0,0,0,0);f.left=a.x;f.top=a.y;f.width=h.width;f.height=h.height;e=k;if(e&496)return e;a=new D(f.left,f.top);a instanceof D?(h=a.x,a=a.y):(h=a,a=void 0);b.style.left=Gd(h,!1);b.style.top=Gd(a,!1);h=new Cc(f.width,f.height);c==h||c&&h&&c.width==h.width&&c.height==h.height||(c=h,a=Lc(Dc(Fc(b)).f),!B||nc("10")||a&&nc("8")?(b=b.style,Yb?b.MozBoxSizing="border-box":Zb?b.WebkitBoxSizing="border-box":b.boxSizing="border-box",b.width=Math.max(c.width,0)+"px",b.height=Math.max(c.height,0)+
"px"):(h=b.style,a?(B?(a=Md(b,"paddingLeft"),f=Md(b,"paddingRight"),d=Md(b,"paddingTop"),g=Md(b,"paddingBottom"),a=new ud(d,f,g,a)):(a=zd(b,"paddingLeft"),f=zd(b,"paddingRight"),d=zd(b,"paddingTop"),g=zd(b,"paddingBottom"),a=new ud(parseFloat(d),parseFloat(f),parseFloat(g),parseFloat(a))),!B||9<=Number(oc)?(f=zd(b,"borderLeftWidth"),d=zd(b,"borderRightWidth"),g=zd(b,"borderTopWidth"),b=zd(b,"borderBottomWidth"),b=new ud(parseFloat(g),parseFloat(d),parseFloat(b),parseFloat(f))):(f=Od(b,"borderLeft"),
d=Od(b,"borderRight"),g=Od(b,"borderTop"),b=Od(b,"borderBottom"),b=new ud(g,d,b,f)),h.pixelWidth=c.width-b.left-a.left-a.right-b.right,h.pixelHeight=c.height-b.top-a.top-a.bottom-b.bottom):(h.pixelWidth=c.width,h.pixelHeight=c.height)));return e}
function Zf(a,b){return(b&8&&Kd(a)?b^4:b)&-9}
;function N(a){Qf.call(this);this.B=1;this.o=[];this.v=0;this.f=[];this.g={};this.F=!!a}
y(N,Qf);m=N.prototype;m.subscribe=function(a,b,c){var d=this.g[a];d||(d=this.g[a]=[]);var e=this.B;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.B=e+3;d.push(e);return e};
function ag(a,b){var c=!1,d=a.subscribe("ROOT_MENU_REMOVED",function(e){c||(c=!0,this.R(d),b.apply(void 0,arguments))},a)}
function bg(a,b,c){if(b=a.g[b]){var d=a.f;(b=Ta(b,function(e){return d[e+1]==c&&void 0==d[e+2]}))&&a.R(b)}}
m.R=function(a){var b=this.f[a];if(b){var c=this.g[b];if(0!=this.v)this.o.push(a),this.f[a+1]=xa;else{if(c){var d=Oa(c,a);0<=d&&Array.prototype.splice.call(c,d,1)}delete this.f[a];delete this.f[a+1];delete this.f[a+2]}}return!!b};
m.J=function(a,b){var c=this.g[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.F)for(e=0;e<c.length;e++){var h=c[e];cg(this.f[h+1],this.f[h+2],d)}else{this.v++;try{for(e=0,f=c.length;e<f;e++)h=c[e],this.f[h+1].apply(this.f[h+2],d)}finally{if(this.v--,0<this.o.length&&0==this.v)for(;c=this.o.pop();)this.R(c)}}return 0!=e}return!1};
function cg(a,b,c){mf(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.g[a];b&&(z(b,this.R,this),delete this.g[a])}else this.f.length=0,this.g={}};
function dg(a,b){if(b){var c=a.g[b];return c?c.length:0}c=0;for(var d in a.g)c+=dg(a,d);return c}
m.ba=function(){N.A.ba.call(this);this.clear();this.o.length=0};function eg(a){this.f=a}
eg.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Sf(b))};
eg.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
eg.prototype.remove=function(a){this.f.remove(a)};function fg(a){this.f=a}
y(fg,eg);function gg(a){this.data=a}
function hg(a){return void 0===a||a instanceof gg?a:new gg(a)}
fg.prototype.set=function(a,b){fg.A.set.call(this,a,hg(b))};
fg.prototype.g=function(a){a=fg.A.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
fg.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function ig(a){this.f=a}
y(ig,fg);ig.prototype.set=function(a,b,c){if(b=hg(b)){if(c){if(c<La()){ig.prototype.remove.call(this,a);return}b.expiration=c}b.creation=La()}ig.A.set.call(this,a,b)};
ig.prototype.g=function(a){var b=ig.A.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<La()||c&&c>La())ig.prototype.remove.call(this,a);else return b}};function jg(){}
;function kg(){}
y(kg,jg);kg.prototype.clear=function(){var a=Ze(this.L(!0)),b=this;z(a,function(c){b.remove(c)})};function lg(a){this.f=a}
y(lg,kg);m=lg.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.L=function(a){var b=0,c=this.f,d=new We;d.next=function(){if(b>=c.length)throw Ve;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function mg(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
y(mg,lg);function ng(a,b){this.g=a;this.f=null;if(B&&!(9<=Number(oc))){og||(og=new $e);this.f=og.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),og.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
y(ng,kg);var pg={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},og=null;function qg(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return pg[b]})}
m=ng.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(qg(a),b);rg(this)};
m.get=function(a){a=this.f.getAttribute(qg(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(qg(a));rg(this)};
m.L=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new We;d.next=function(){if(b>=c.length)throw Ve;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);rg(this)};
function rg(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function sg(a,b){this.g=a;this.f=b+"::"}
y(sg,kg);sg.prototype.set=function(a,b){this.g.set(this.f+a,b)};
sg.prototype.get=function(a){return this.g.get(this.f+a)};
sg.prototype.remove=function(a){this.g.remove(this.f+a)};
sg.prototype.L=function(a){var b=this.g.L(!0),c=this,d=new We;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};var tg=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",tg);function ug(a){var b=arguments;1<b.length?tg[b[0]]=b[1]:1===b.length&&Object.assign(tg,b[0])}
function O(a,b){return a in tg?tg[a]:b}
function vg(a){return O(a,void 0)}
;var wg=[];function xg(a){wg.forEach(function(b){return b(a)})}
function yg(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){zg(b),xg(b)}}:a}
function zg(a){var b=v("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"ERROR",void 0,void 0,void 0]),ug("ERRORS",b))}
function Ag(a){var b=v("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=O("ERRORS",[]),b.push([a,"WARNING",void 0,void 0,void 0]),ug("ERRORS",b))}
;function P(a,b){Da(a)&&(a=yg(a));return window.setTimeout(a,b)}
function Bg(a){window.clearTimeout(a)}
;var Cg=v("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.R;N.prototype.publish=N.prototype.J;N.prototype.clear=N.prototype.clear;x("ytPubsubPubsubInstance",Cg);var Dg=v("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",Dg);var Eg=v("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",Eg);var Fg=v("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",Fg);
function Gg(a,b,c){var d=Hg();if(d){var e=d.subscribe(a,function(){var f=arguments;var h=function(){Dg[e]&&b.apply(c||window,f)};
try{Fg[a]?h():P(h,0)}catch(g){zg(g)}},c);
Dg[e]=!0;Eg[a]||(Eg[a]=[]);Eg[a].push(e);return e}return 0}
function Ig(a){var b=Hg();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),z(a,function(c){b.unsubscribeByKey(c);delete Dg[c]}))}
function R(a,b){var c=Hg();return c?c.publish.apply(c,arguments):!1}
function Jg(a,b){Fg[a]=!0;var c=Hg();c&&c.publish.apply(c,arguments);Fg[a]=!1}
function Hg(){return v("ytPubsubPubsubInstance")}
;function Kg(a,b,c){a&&(a.dataset?a.dataset[Lg(b)]=String(c):a.setAttribute("data-"+b,c))}
function Mg(a,b){return a?a.dataset?a.dataset[Lg(b)]:a.getAttribute("data-"+b):null}
function Ng(a,b){a&&(a.dataset?delete a.dataset[Lg(b)]:a.removeAttribute("data-"+b))}
var Og={};function Lg(a){return Og[a]||(Og[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;function S(a,b){this.version=a;this.args=b}
;function T(a,b){this.topic=a;this.f=b}
T.prototype.toString=function(){return this.topic};function Pg(){}
function Qg(){}
Pg.prototype=ca(Qg.prototype);Pg.prototype.constructor=Pg;if(ja)ja(Pg,Qg);else for(var Rg in Qg)if("prototype"!=Rg)if(Object.defineProperties){var Sg=Object.getOwnPropertyDescriptor(Qg,Rg);Sg&&Object.defineProperty(Pg,Rg,Sg)}else Pg[Rg]=Qg[Rg];Pg.A=Qg.prototype;function Tg(a,b,c){isNaN(c)&&(c=void 0);var d=v("yt.scheduler.instance.addJob");d?d(a,b,c):void 0===c?a():P(a,c||0)}
Pg.prototype.start=function(){var a=v("yt.scheduler.instance.start");a&&a()};
za(Pg);Pg.w();var Ug=v("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.R;N.prototype.publish=N.prototype.J;N.prototype.clear=N.prototype.clear;x("ytPubsub2Pubsub2Instance",Ug);var Vg=v("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",Vg);var Wg=v("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",Wg);var Xg=v("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",Xg);
x("ytPubsub2Pubsub2SkipSubKey",null);function U(a,b){var c=Yg();c&&c.publish.call(c,a.toString(),a,b)}
function Zg(a,b,c){var d=Yg();if(!d)return 0;var e=d.subscribe(a.toString(),function(f,h){var g=v("ytPubsub2Pubsub2SkipSubKey");g&&g==e||(g=function(){if(Vg[e])try{if(h&&a instanceof T&&a!=f)try{var k=a.f,l=h;if(!l.args||!l.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!k.M){var p=new k;k.M=p.version}var q=k.M}catch(t){}if(!q||l.version!=q)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{h=Reflect.construct(k,Xa(l.args))}catch(t){throw t.message=
"yt.pubsub2.Data.deserialize(): "+t.message,t;}}catch(t){throw t.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+a.toString()+": "+t.message,t;}b.call(c||window,h)}catch(t){zg(t)}},Xg[a.toString()]?v("yt.scheduler.instance")?Tg(g,1,void 0):P(g,0):g())});
Vg[e]=!0;Wg[a.toString()]||(Wg[a.toString()]=[]);Wg[a.toString()].push(e);return e}
function $g(a){var b=Yg();b&&("number"===typeof a&&(a=[a]),z(a,function(c){b.unsubscribeByKey(c);delete Vg[c]}))}
function Yg(){return v("ytPubsub2Pubsub2Instance")}
;var ah=0;function bh(a){var b=a.__yt_uid_key;b||(b=ch(),a.__yt_uid_key=b);return b}
function dh(a,b){a=E(a);b=E(b);return!!fd(a,function(c){return c===b},!0,void 0)}
function eh(a,b){var c=Hc(document,a,null,b);return c.length?c[0]:null}
function fh(){var a=document,b;Sa(["fullscreenElement","webkitFullscreenElement","mozFullScreenElement","msFullscreenElement"],function(c){b=a[c];return!!b});
return b}
function gh(){Qe(document.body,"hide-players",!1);z(Gc("preserve-players"),function(a){M(a,"preserve-players")})}
var ch=v("ytDomDomGetNextId")||function(){return++ah};
x("ytDomDomGetNextId",ch);var hh={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function ih(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in hh||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey}}catch(e){}}
ih.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
ih.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
ih.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var kb=v("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",kb);var jh=v("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",jh);
function kh(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return jb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,h=Ea(e[4])&&Ea(d)&&mb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||h)})}
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=kh(a,b,c,d);if(e)return e;e=++jh.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var h=f?function(g){g=new ih(g);if(!fd(g.relatedTarget,function(k){return k==a},!0))return g.currentTarget=a,g.type=b,c.call(a,g)}:function(g){g=new ih(g);
g.currentTarget=a;return c.call(a,g)};
h=yg(h);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),lh()||"boolean"===typeof d?a.addEventListener(b,h,d):a.addEventListener(b,h,!!d.capture)):a.attachEvent("on"+b,h);kb[e]=[a,b,c,h,d];return e}
function mh(a,b,c){var d=a||document;return V(d,"click",function(e){var f=fd(e.target,function(h){return h===d||c(h)},!0);
f&&f!==d&&!f.disabled&&(e.currentTarget=f,b.call(f,e))})}
function nh(a){a=a||window.event;a=a.target||a.srcElement;3==a.nodeType&&(a=a.parentNode);return a}
var lh=ub(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function oh(a,b,c){return mh(a,b,function(d){return K(d,c)})}
function ph(a){if(document.createEvent){var b=document.createEvent("HTMLEvents");b.initEvent("click",!0,!0);a.dispatchEvent(b)}else b=document.createEventObject(),a.fireEvent("onclick",b)}
function W(a){a&&("string"==typeof a&&(a=[a]),z(a,function(b){if(b in kb){var c=kb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?lh()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete kb[b]}}))}
;var qh={},rh="ontouchstart"in document;function sh(a,b,c){switch(a){case "mouseover":case "mouseout":var d=3;break;case "mouseenter":case "mouseleave":d=9}return fd(c,function(e){return K(e,b)},!0,d)}
function th(a){var b="mouseover"==a.type&&"mouseenter"in qh||"mouseout"==a.type&&"mouseleave"in qh,c=a.type in qh||b;if("HTML"!=a.target.tagName&&c){if(b){b="mouseover"==a.type?"mouseenter":"mouseleave";c=qh[b];for(var d in c.g){var e=sh(b,d,a.target);e&&!fd(a.relatedTarget,function(f){return f==e},!0)&&c.J(d,e,b,a)}}if(b=qh[a.type])for(d in b.g)(e=sh(a.type,d,a.target))&&b.J(d,e,a.type,a)}}
V(document,"blur",th,!0);V(document,"change",th,!0);V(document,"click",th);V(document,"focus",th,!0);V(document,"mouseover",th);V(document,"mouseout",th);V(document,"mousedown",th);V(document,"keydown",th);V(document,"keyup",th);V(document,"keypress",th);V(document,"cut",th);V(document,"paste",th);rh&&(V(document,"touchstart",th),V(document,"touchend",th),V(document,"touchcancel",th));function uh(a){this.o=a;this.B={};this.K=[];this.F=[]}
m=uh.prototype;m.D=function(a){return H(a,X(this))};
function X(a,b){return"yt-uix"+(a.o?"-"+a.o:"")+(b?"-"+b:"")}
m.unregister=function(){Ig(this.K);this.K.length=0;$g(this.F);this.F.length=0};
m.init=xa;m.dispose=xa;function vh(a,b,c){a.K.push(Gg(b,c,a))}
function wh(a,b,c){a.F.push(Zg(b,c,a))}
function Y(a,b,c,d){d=X(a,d);var e=w(c,a);b in qh||(qh[b]=new N);qh[b].subscribe(d,e);a.B[c]=e}
function Z(a,b,c,d){if(b in qh){var e=qh[b];bg(e,X(a,d),a.B[c]);0>=dg(e)&&(e.dispose(),delete qh[b])}delete a.B[c]}
m.P=function(a,b,c){var d=this.j(a,b);if(d&&(d=v(d))){var e=$a(arguments,2);Za(e,0,0,a);d.apply(null,e)}};
m.j=function(a,b){return Mg(a,b)};
function xh(a,b){Kg(a,"tooltip-text",b)}
;var yh=window.yt&&window.yt.uix&&window.yt.uix.widgets_||{};x("yt.uix.widgets_",yh);function zh(a){var b=[];hb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Ba(c)?f=c:f=[c];z(f,function(h){""==h?b.push(e):b.push(e+"="+encodeURIComponent(String(h)))})});
return b.join("&")}
function Ah(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),h=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Ba(b[f])?Ya(b[f],h):b[f]=[b[f],h]:b[f]=h}catch(k){if("q"!=e[0]){var g=Error("Error decoding URL component");g.params={key:e[0],value:e[1]};zg(g)}}}return b}
function Bh(a,b){return Ch(a,b||{},!0)}
function Ch(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=Ah(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return od(a,e)+d}
;function Dh(a){a=void 0===a?{}:a;Da(a)&&(a={callback:a});if(a.gapiHintOverride||O("GAPI_HINT_OVERRIDE")){var b=document.location.href;-1!=b.indexOf("?")?(b=(b||"").split("#")[0],b=b.split("?",2),b=Ah(1<b.length?b[1]:b[0])):b={};(b=b.gapi_jsh)&&pb(a,{_c:{jsl:{h:b}}})}Je("gapi.iframes:gapi.iframes.style.common",a)}
;function Eh(){return v("gapi.iframes.getContext")()}
;function Fh(a){S.call(this,1,arguments);this.f=a}
y(Fh,S);function Gh(a){S.call(this,1,arguments);this.f=a}
y(Gh,S);function Hh(a,b,c){S.call(this,3,arguments);this.i=a;this.g=b;this.f=null!=c?!!c:null}
y(Hh,S);function Ih(a,b,c,d,e,f){S.call(this,2,arguments);this.g=a;this.f=b;this.l=c||null;this.i=d||null;this.source=e||null;this.params=f||null}
y(Ih,S);function Jh(a,b,c){S.call(this,1,arguments);this.f=a;this.g=b}
y(Jh,S);function Kh(a,b,c,d,e,f,h){S.call(this,1,arguments);this.g=a;this.o=b;this.f=c;this.v=d||null;this.l=e||null;this.i=f||null;this.source=h||null}
y(Kh,S);
var Lh=new T("subscription-batch-subscribe",Fh),Mh=new T("subscription-batch-unsubscribe",Fh),Nh=new T("subscription-subscribe",Ih),Oh=new T("subscription-subscribe-loading",Gh),Ph=new T("subscription-subscribe-loaded",Gh),Qh=new T("subscription-subscribe-success",Jh),Rh=new T("subscription-subscribe-external",Ih),Sh=new T("subscription-unsubscribe",Kh),Th=new T("subscription-unsubscirbe-loading",Gh),Uh=new T("subscription-unsubscribe-loaded",Gh),Vh=new T("subscription-unsubscribe-success",Gh),Wh=
new T("subscription-external-unsubscribe",Kh),Xh=new T("subscription-enable-ypc",Gh),Yh=new T("subscription-disable-ypc",Gh),Zh=new T("subscription-prefs",Hh),$h=new T("subscription-prefs-success",Hh),ai=new T("subscription-prefs-failure",Hh);function bi(){var a=void 0===a?!1:a;var b=fh();if(a)for(;b&&b.shadowRoot;)b=b.shadowRoot.fullscreenElement;return b?b:null}
;function ci(a,b){(a=E(a))&&a.style&&(a.style.display=b?"":"none",Qe(a,"hid",!b))}
function di(a){return(a=E(a))?"none"!=a.style.display&&!K(a,"hid"):!1}
function ei(a){z(arguments,function(b){!Ca(b)||b instanceof Element?ci(b,!0):z(b,function(c){ei(c)})})}
function fi(a){z(arguments,function(b){!Ca(b)||b instanceof Element?ci(b,!1):z(b,function(c){fi(c)})})}
;function gi(){uh.call(this,"tooltip");this.f=0;this.g={}}
y(gi,uh);za(gi);m=gi.prototype;m.register=function(){Y(this,"mouseover",this.Y);Y(this,"mouseout",this.N);Y(this,"focus",this.ma);Y(this,"blur",this.ha);Y(this,"click",this.N);Y(this,"touchstart",this.Ia);Y(this,"touchend",this.Z);Y(this,"touchcancel",this.Z)};
m.unregister=function(){Z(this,"mouseover",this.Y);Z(this,"mouseout",this.N);Z(this,"focus",this.ma);Z(this,"blur",this.ha);Z(this,"click",this.N);Z(this,"touchstart",this.Ia);Z(this,"touchend",this.Z);Z(this,"touchcancel",this.Z);this.dispose();gi.A.unregister.call(this)};
m.dispose=function(){for(var a in this.g)this.N(this.g[a]);this.g={}};
m.Y=function(a){if(!(this.f&&1E3>La()-this.f)){var b=parseInt(this.j(a,"tooltip-hide-timer"),10);b&&(Ng(a,"tooltip-hide-timer"),Bg(b));b=w(function(){hi(this,a);Ng(a,"tooltip-show-timer")},this);
var c=parseInt(this.j(a,"tooltip-show-delay"),10)||0;b=P(b,c);Kg(a,"tooltip-show-timer",b.toString());a.title&&(xh(a,ii(this,a)),a.title="");b=Fa(a).toString();this.g[b]=a}};
m.N=function(a){var b=parseInt(this.j(a,"tooltip-show-timer"),10);b&&(Bg(b),Ng(a,"tooltip-show-timer"));b=w(function(){if(a){var c=E(ji(this,a));c&&(ki(c),Qc(c),Ng(a,"content-id"));c=E(ji(this,a,"arialabel"));Qc(c)}Ng(a,"tooltip-hide-timer")},this);
b=P(b,50);Kg(a,"tooltip-hide-timer",b.toString());if(b=this.j(a,"tooltip-text"))a.title=b;b=Fa(a).toString();delete this.g[b]};
m.ma=function(a,b){this.f=0;this.Y(a,b)};
m.ha=function(a){this.f=0;this.N(a)};
m.Ia=function(a,b,c){c.changedTouches&&(this.f=0,(a=sh(b,X(this),c.changedTouches[0].target))&&this.Y(a,b))};
m.Z=function(a,b,c){c.changedTouches&&(this.f=La(),(a=sh(b,X(this),c.changedTouches[0].target))&&this.N(a))};
function li(a,b,c){xh(b,c);a=a.j(b,"content-id");(a=E(a))&&Uc(a,c)}
function ii(a,b){return a.j(b,"tooltip-text")||b.title}
function hi(a,b){if(b){var c=ii(a,b);if(c){var d=E(ji(a,b));if(!d){d=document.createElement("div");d.id=ji(a,b);Ne(d,X(a,"tip"));var e=document.createElement("div");Ne(e,X(a,"tip-body"));var f=document.createElement("div");Ne(f,X(a,"tip-arrow"));var h=document.createElement("div");h.setAttribute("aria-hidden","true");Ne(h,X(a,"tip-content"));var g=mi(a,b),k=ji(a,b,"content");h.id=k;Kg(b,"content-id",k);e.appendChild(h);g&&d.appendChild(g);d.appendChild(e);d.appendChild(f);var l=cd(b);k=ji(a,b,"arialabel");
f=document.createElement("div");L(f,X(a,"arialabel"));f.id=k;l=b.hasAttribute("aria-label")?b.getAttribute("aria-label"):"rtl"==document.body.getAttribute("dir")?c+" "+l:l+" "+c;Uc(f,l);b.setAttribute("aria-labelledby",k);k=bi()||document.body;k.appendChild(f);k.appendChild(d);li(a,b,c);(c=parseInt(a.j(b,"tooltip-max-width"),10))&&e.offsetWidth>c&&(e.style.width=c+"px",L(h,X(a,"normal-wrap")));h=K(b,X(a,"reverse"));ni(a,b,d,e,g,h)||ni(a,b,d,e,g,!h);var p=X(a,"tip-visible");P(function(){L(d,p)},0)}}}}
function ni(a,b,c,d,e,f){Qe(c,X(a,"tip-reverse"),f);var h=0;f&&(h=1);var g=Hd(b);f=new D((g.width-10)/2,f?g.height:0);var k=Ed(b);$f(new D(k.x+f.x,k.y+f.y),c,h);f=Kc(window);if(1==c.nodeType)var l=Fd(c);else c=c.changedTouches?c.changedTouches[0]:c,l=new D(c.clientX,c.clientY);c=Hd(d);var p=Math.floor(c.width/2);h=!!(f.height<l.y+g.height);g=!!(l.y<g.height);k=!!(l.x<p);f=!!(f.width<l.x+p);l=(c.width+3)/-2- -5;a=a.j(b,"force-tooltip-direction");if("left"==a||k)l=-5;else if("right"==a||f)l=20-c.width-
3;a=Math.floor(l)+"px";d.style.left=a;e&&(e.style.left=a,e.style.height=c.height+"px",e.style.width=c.width+"px");return!(h||g)}
function ji(a,b,c){a=X(a)+bh(b);c&&(a+="-"+c);return a}
function mi(a,b){var c=null;ac&&K(b,X(a,"masked"))&&((c=E("yt-uix-tooltip-shared-mask"))?(c.parentNode.removeChild(c),ei(c)):(c=Pc(document,"IFRAME"),c.src='javascript:""',c.id="yt-uix-tooltip-shared-mask",Ne(c,X(a,"tip-mask"))));return c}
function ki(a){var b=E("yt-uix-tooltip-shared-mask"),c=b&&fd(b,function(d){return d==a},!1,2);
b&&c&&(b.parentNode.removeChild(b),fi(b),document.body.appendChild(b))}
;function oi(a){var b=pi();if(b=window.open(b,"loginPopup","width=375,height=440,resizable=yes,scrollbars=yes",!0)){var c=Gg("LOGGED_IN",function(d){Ig(O("LOGGED_IN_PUBSUB_KEY",void 0));ug("LOGGED_IN",!0);a(d)});
ug("LOGGED_IN_PUBSUB_KEY",c);b.moveTo((screen.width-375)/2,(screen.height-440)/2)}}
function pi(){var a=document.location.protocol+"//"+document.domain+"/post_login";a=nd(a,"mode","subscribe");a=nd("/signin?context=popup","next",a);return a=nd(a,"feature","sub_button")}
x("yt.pubsub.publish",R);function qi(a){a=ri(a);return"string"===typeof a&&"false"===a?!1:!!a}
function si(a,b){var c=ri(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function ri(a){var b=O("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:O("EXPERIMENT_FLAGS",{})[a]}
;var ti=window,ui=ti.ytcsi&&ti.ytcsi.now?ti.ytcsi.now:ti.performance&&ti.performance.timing&&ti.performance.now?function(){return ti.performance.timing.navigationStart+ti.performance.now()}:function(){return(new Date).getTime()};var vi=si("initial_gel_batch_timeout",1E3),wi=Math.pow(2,16)-1,xi=null,yi=0,zi={log_event:"events",log_interaction:"interactions"},Ai=Object.create(null);Ai.log_event="GENERIC_EVENT_LOGGING";Ai.log_interaction="INTERACTION_LOGGING";var Bi=new Set(["log_event"]),Ci={},Di=0,Ei=0,Fi=0,Gi=!0,Hi=v("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",Hi);var Ii=v("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",Ii);
var Ji=v("ytLoggingTransportDispatchedStats_")||{};x("ytLoggingTransportDispatchedStats_",Ji);x("ytytLoggingTransportCapturedTime_",v("ytLoggingTransportCapturedTime_")||{});function Ki(){Bg(Di);Bg(Ei);Ei=0;if(!lb(Hi)){for(var a in Hi){var b=Ci[a];b&&b.isReady()&&(Li(a,b),delete Hi[a],Gi=!1)}lb(Hi)||Mi()}}
function Mi(){qi("web_gel_timeout_cap")&&!Ei&&(Ei=P(Ki,6E4));Bg(Di);var a=O("LOGGING_BATCH_TIMEOUT",si("web_gel_debounce_ms",1E4));qi("shorten_initial_gel_batch_timeout")&&Gi&&(a=vi);Di=P(Ki,a)}
function Ni(a,b){b=void 0===b?"":b;Hi[a]=Hi[a]||{};Hi[a][b]=Hi[a][b]||[];return Hi[a][b]}
function Li(a,b){var c=zi[a],d=Ji[a]||{};Ji[a]=d;var e=Math.round(ui());for(q in Hi[a]){var f=nb,h=b.f||Oi();h={client:{hl:h.hb,gl:h.gb,clientName:h.fb,clientVersion:h.innertubeContextClientVersion,configInfo:h.eb}};var g=window.devicePixelRatio;g&&1!=g&&(h.client.screenDensityFloat=String(g));g=O("EXPERIMENTS_TOKEN","");""!==g&&(h.client.experimentsToken=g);var k=g=void 0,l=[],p=O("EXPERIMENTS_FORCED_FLAGS",{});for(k in p)l.push({key:k,value:String(p[k])});k=O("EXPERIMENT_FLAGS",{});for(g in k)g.startsWith("force_")&&
void 0===p[g]&&l.push({key:g,value:String(k[g])});g=l;0<g.length&&(h.request={internalExperimentFlags:g});O("DELEGATED_SESSION_ID")&&!qi("pageid_as_header_web")&&(h.user={onBehalfOfUser:O("DELEGATED_SESSION_ID")});f=f({context:h});f[c]=Ni(a,q);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(h=Ii[q])a:{l=q;if(h.videoId)g="VIDEO";else if(h.playlistId)g="PLAYLIST";else break a;f.credentialTransferTokenTargetId=h;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:l,scope:g}]}delete Ii[q];f.requestTimeMs=e;qi("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(h=vg("EVENT_ID"))g=O("BATCH_CLIENT_COUNTER",void 0)||0,!g&&qi("web_client_counter_random_seed")&&(g=Math.floor(Math.random()*wi/2)),g++,g>wi&&(g=1),ug("BATCH_CLIENT_COUNTER",g),h={serializedEventId:h,clientCounter:g},f.serializedClientEventId=h,xi&&yi&&qi("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:xi,roundtripMs:yi}),
xi=h,yi=0;Pi(b,a,f,{retry:Bi.has(a),onSuccess:w(Qi,this,ui())})}if(d.previousDispatchMs){c=e-d.previousDispatchMs;var q=d.diffCount||0;d.averageTimeBetweenDispatchesMs=q?(d.averageTimeBetweenDispatchesMs*q+c)/(q+1):c;d.diffCount=q+1}d.previousDispatchMs=e}
function Qi(a){yi=Math.round(ui()-a)}
;var Ri=v("ytLoggingGelSequenceIdObj_")||{};x("ytLoggingGelSequenceIdObj_",Ri);function Si(a){var b=Ti;a=void 0===a?v("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(Ui(b),Vi(b));b.ca_type="image";a&&(b.bid=a);return b}
function Ui(a){var b={};b.dt=Pd;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?C:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!C.navigator&&"unknown"!==typeof C.navigator.javaEnabled&&!!C.navigator.javaEnabled&&C.navigator.javaEnabled();C.screen&&(b.u_h=C.screen.height,b.u_w=C.screen.width,b.u_ah=C.screen.availHeight,b.u_aw=C.screen.availWidth,b.u_cd=C.screen.colorDepth);
C.navigator&&C.navigator.plugins&&(b.u_nplug=C.navigator.plugins.length);C.navigator&&C.navigator.mimeTypes&&(b.u_nmime=C.navigator.mimeTypes.length);return b}
function Vi(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(l){}try{var e=b.outerWidth;var f=b.outerHeight}catch(l){}try{var h=b.innerWidth;var g=b.innerHeight}catch(l){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,h,g];c=a.f.top;try{var k=Kc(c||window).round()}catch(l){k=new Cc(-12245933,-12245933)}c=k;k={};d=new Lf;n.SVGElement&&n.document.createElementNS&&d.set(0);e=td();e["allow-top-navigation-by-user-activation"]&&d.set(1);e["allow-popups-to-escape-sandbox"]&&
d.set(2);n.crypto&&n.crypto.subtle&&d.set(3);n.TextDecoder&&n.TextEncoder&&d.set(4);d=Mf(d);k.bc=d;k.bih=c.height;k.biw=c.width;k.brdim=b.join();a=a.g;return k.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,k.wgl=!!C.WebGLRenderingContext,k}
var Ti=new function(){var a=window.document;this.f=window;this.g=a};
x("yt.ads_.signals_.getAdSignalsString",function(a){return zh(Si(a))});La();var Wi=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function Xi(){if(!Wi)return null;var a=Wi();return"open"in a?a:null}
;var Yi={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},Zi="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
$i=!1;
function aj(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=hd(a)[1]||null,e=id(hd(a)[3]||null);d&&e?(d=c,c=hd(a),d=hd(d),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?id(hd(c)[3]||null)==e&&(Number(hd(c)[4]||null)||null)==(Number(hd(a)[4]||null)||null):!0;d=qi("web_ajax_ignore_global_headers_if_set");for(var f in Yi)e=O(Yi[f]),!e||!c&&!bj(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||bj(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||bj(a,"X-YouTube-Time-Zone"))&&
(f="undefined"!=typeof Intl?(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||bj(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=zh(Si(void 0));return b}
function cj(a){var b=window.location.search,c=id(hd(a)[3]||null),d=id(hd(a)[5]||null);d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=Ah(b),f={};z(Zi,function(h){e[h]&&(f[h]=e[h])});
return Ch(a,f||{},!1)}
function bj(a,b){var c=O("CORS_HEADER_WHITELIST")||{},d=id(hd(a)[3]||null);return d?(c=c[d])?Ua(c,b):!1:!0}
function dj(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=ej(a,b);var d=fj(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(h){if(!e){e=!0;f&&Bg(f);var g=h.ok,k=function(l){l=l||{};var p=b.context||n;g?b.onSuccess&&b.onSuccess.call(p,l,h):b.onError&&b.onError.call(p,l,h);b.U&&b.U.call(p,l,h)};
"JSON"==(b.format||"JSON")&&(g||400<=h.status&&500>h.status)?h.json().then(k,function(){k(null)}):k(null)}});
b.tb&&0<b.timeout&&(f=P(function(){e||(e=!0,Bg(f))},b.timeout))}else gj(a,b)}
function gj(a,b){var c=b.format||"JSON";a=ej(a,b);var d=fj(a,b),e=!1,f,h=hj(a,function(g){if(!e){e=!0;f&&Bg(f);a:switch(g&&"status"in g?g.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:var k=!0;break a;default:k=!1}var l=null,p=400<=g.status&&500>g.status,q=500<=g.status&&600>g.status;if(k||p||q)l=ij(c,g,b.Pb);if(k)a:if(g&&204==g.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};p=b.context||n;
k?b.onSuccess&&b.onSuccess.call(p,g,l):b.onError&&b.onError.call(p,g,l);b.U&&b.U.call(p,g,l)}},b.method,d,b.headers,b.responseType,b.withCredentials);
b.Ca&&0<b.timeout&&(f=P(function(){e||(e=!0,h.abort(),Bg(f))},b.timeout))}
function ej(a,b){b.Tb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=vg("XSRF_FIELD_NAME"),d=b.Ja;d&&(d[c]&&delete d[c],a=Bh(a,d));return a}
function fj(a,b){var c=vg("XSRF_FIELD_NAME"),d=vg("XSRF_TOKEN"),e=b.postBody||"",f=b.H,h=vg("XSRF_FIELD_NAME"),g;b.headers&&(g=b.headers["Content-Type"]);b.Sb||id(hd(a)[3]||null)&&!b.withCredentials&&id(hd(a)[3]||null)!=document.location.hostname||"POST"!=b.method||g&&"application/x-www-form-urlencoded"!=g||b.H&&b.H[h]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=Ah(e),pb(e,f),e=b.Da&&"JSON"==b.Da?JSON.stringify(e):md(e));f=e||f&&!lb(f);!$i&&f&&"POST"!=b.method&&($i=!0,zg(Error("AJAX request with postData should use POST")));
return e}
function ij(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?jj(b):null)d={},z(b.getElementsByTagName("*"),function(e){d[e.tagName]=kj(e)})}c&&lj(d);
return d}
function lj(a){if(Ea(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Jb(a[b]);a[c]=d}else lj(a[b])}}
function jj(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function kj(a){var b="";z(a.childNodes,function(c){b+=c.nodeValue});
return b}
function hj(a,b,c,d,e,f,h){function g(){4==(k&&"readyState"in k?k.readyState:0)&&b&&yg(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=Xi();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",g,!1):k.onreadystatechange=g;qi("debug_forward_web_query_parameters")&&(a=cj(a));k.open(c,a,!0);f&&(k.responseType=f);h&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=aj(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;function mj(){return"INNERTUBE_API_KEY"in tg&&"INNERTUBE_API_VERSION"in tg}
function Oi(){return{innertubeApiKey:vg("INNERTUBE_API_KEY"),innertubeApiVersion:vg("INNERTUBE_API_VERSION"),eb:O("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),fb:O("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:vg("INNERTUBE_CONTEXT_CLIENT_VERSION"),hb:vg("INNERTUBE_CONTEXT_HL"),gb:vg("INNERTUBE_CONTEXT_GL"),ib:vg("INNERTUBE_HOST_OVERRIDE")||"",jb:!!O("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function nj(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||O("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.Ob||O("AUTHORIZATION"))||(a?b="Bearer "+v("gapi.auth.getToken")().Nb:b=ee([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=O("SESSION_INDEX",0),qi("pageid_as_header_web")&&(d["X-Goog-PageId"]=O("DELEGATED_SESSION_ID")));return d}
function oj(a){a=Object.assign({},a);delete a.Authorization;var b=ee();if(b){var c=new Of;c.update(vg("INNERTUBE_API_KEY"));c.update(b);b=c.digest();c=3;void 0===c&&(c=0);if(!wc){wc={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var h=d.concat(e[f].split(""));vc[f]=h;for(var g=0;g<h.length;g++){var k=h[g];void 0===wc[k]&&(wc[k]=g)}}}c=vc[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],p=(f=e+1<b.length)?b[e+1]:0;k=(h=
e+2<b.length)?b[e+2]:0;g=l>>2;l=(l&3)<<4|p>>4;p=(p&15)<<2|k>>6;k&=63;h||(k=64,f||(p=64));d.push(c[g],c[l],c[p]||"",c[k]||"")}a.hash=d.join("")}return a}
;function pj(){var a=new mg;(a=a.isAvailable()?new sg(a,"yt.innertube"):null)||(a=new ng("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new ig(a):null;this.g=document.domain||window.location.hostname}
pj.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,La()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Sf(b))}catch(f){return}else e=escape(b);b=this.g;yc.set(""+a,e,{sa:c,path:"/",domain:void 0===b?"youtube.com":b,secure:!1})};
pj.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=yc.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
pj.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;yc.remove(""+a,"/",void 0===b?"youtube.com":b)};var qj=new pj;function rj(a,b,c,d){if(d)return null;d=qj.get("nextId",!0)||1;var e=qj.get("requests",!0)||{};e[d]={method:a,request:b,authState:oj(c),requestTime:Math.round(ui())};qj.set("nextId",d+1,86400,!0);qj.set("requests",e,86400,!0);return d}
function sj(a){var b=qj.get("requests",!0)||{};delete b[a];qj.set("requests",b,86400,!0)}
function tj(a){var b=qj.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(ui())-d.requestTime)){var e=d.authState,f=oj(nj(!1));mb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(ui())),Pi(a,d.method,e,{}));delete b[c]}}qj.set("requests",b,86400,!0)}}
;function uj(a){var b=this;this.f=null;a?this.f=a:qi("delay_gel_until_config_ready")?mj()&&(this.f=Oi()):this.f=Oi();Tg(function(){tj(b)},0,5E3)}
uj.prototype.isReady=function(){!this.f&&mj()&&(this.f=Oi());return!!this.f};
function Pi(a,b,c,d){!O("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&Ag(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",H:c,Da:"JSON",Ca:function(){},
tb:d.Ca,onSuccess:function(t,r){if(d.onSuccess)d.onSuccess(r)},
za:function(t){if(d.onSuccess)d.onSuccess(t)},
onError:function(t,r){if(d.onError)d.onError(r)},
Ub:function(t){if(d.onError)d.onError(t)},
timeout:d.timeout,withCredentials:!0},f="",h=a.f.ib;h&&(f=h);h=a.f.jb||!1;var g=nj(h,f,d);Object.assign(e.headers,g);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=Bh(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&qi("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=rj(b,c,g,h))){var p=e.onSuccess,q=e.za;e.onSuccess=function(t,r){sj(l);p(t,r)};
c.za=function(t,r){sj(l);q(t,r)}}try{qi("use_fetch_for_op_xhr")?dj(k,e):(e.method="POST",e.H||(e.H={}),gj(k,e))}catch(t){if("InvalidAccessError"==t)l&&(sj(l),l=0),Ag(Error("An extension is blocking network request."));
else throw t;}l&&Tg(function(){tj(a)},0,5E3)}
;var vj=La().toString();var wj;
if(!(wj=v("ytLoggingTimeDocumentNonce_"))){var xj;a:{if(window.crypto&&window.crypto.getRandomValues)try{var yj=Array(16),zj=new Uint8Array(16);window.crypto.getRandomValues(zj);for(var Aj=0;Aj<yj.length;Aj++)yj[Aj]=zj[Aj];xj=yj;break a}catch(a){}for(var Bj=Array(16),Cj=0;16>Cj;Cj++){for(var Dj=La(),Ej=0;Ej<Dj%23;Ej++)Bj[Cj]=Math.random();Bj[Cj]=Math.floor(256*Math.random())}if(vj)for(var Fj=1,Gj=0;Gj<vj.length;Gj++)Bj[Fj%16]=Bj[Fj%16]^Bj[(Fj-1)%16]/4^vj.charCodeAt(Gj),Fj++;xj=Bj}for(var Hj=xj,Ij=
[],Jj=0;Jj<Hj.length;Jj++)Ij.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(Hj[Jj]&63));wj=Ij.join("")}var Kj=wj;x("ytLoggingTimeDocumentNonce_",Kj);function Lj(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Mj(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
x("yt_logging_screen.getRootVeType",function(a){return O(Mj(void 0===a?0:a),void 0)});
function Nj(){var a=O("csn-to-ctt-auth-info");a||(a={},ug("csn-to-ctt-auth-info",a));return a}
function Oj(a){a=void 0===a?0:a;var b=O(Lj(a));b||0!=a||(qi("kevlar_client_side_screens")||qi("c3_client_side_screens")?b="UNDEFINED_CSN":b=O("EVENT_ID"));return b?b:null}
x("yt_logging_screen.getCurrentCsn",Oj);function Pj(a,b,c){var d=Nj();(c=Oj(c))&&delete d[c];b&&(d[a]=b)}
x("yt_logging_screen.getCttAuthInfo",function(a){return Nj()[a]});
x("yt_logging_screen.setCurrentScreen",function(a,b,c,d){c=void 0===c?0:c;if(a!==O(Lj(c))||b!==O(Mj(c)))Pj(a,d,c),ug(Lj(c),a),ug(Mj(c),b),0==c&&(b=function(){setTimeout(function(){if(a){var e={clientDocumentNonce:Kj,clientScreenNonce:a};var f=void 0===f?{}:f;var h={};h.eventTimeMs=Math.round(f.timestamp||ui());h.foregroundHeartbeatScreenAssociated=e;e=String;if(f.timestamp)var g=-1;else g=v("_lact",window),g=null==g?-1:Math.max(La()-g,0);h.context={lastActivityMs:e(g)};qi("log_sequence_info_on_gel_web")&&
f.Fa&&(e=h.context,g=f.Fa,Ri[g]=g in Ri?Ri[g]+1:0,e.sequence={index:Ri[g],groupKey:g},f.Rb&&delete Ri[f.Fa]);(f=f.Qb)?(e={},f.videoId?e.videoId=f.videoId:f.playlistId&&(e.playlistId=f.playlistId),Ii[f.token]=e,f=Ni("log_event",f.token)):f=Ni("log_event");f.push(h);uj&&(Ci.log_event=new uj);h=si("web_logging_max_batch")||100;e=ui();f.length>=h?Ki():10<=e-Fi&&(Mi(),Fi=e)}},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())});function Qj(){uh.call(this,"button");this.f=null;this.i=[];this.g={}}
y(Qj,uh);za(Qj);m=Qj.prototype;m.register=function(){Y(this,"click",this.Ka);Y(this,"keydown",this.qa);Y(this,"keypress",this.ra);vh(this,"page-scroll",this.ab)};
m.unregister=function(){Z(this,"click",this.Ka);Z(this,"keydown",this.qa);Z(this,"keypress",this.ra);Rj(this);this.g={};Qj.A.unregister.call(this)};
m.Ka=function(a){a&&!a.disabled&&(this.toggle(a),this.click(a))};
m.qa=function(a,b,c){if(!(c.altKey||c.ctrlKey||c.shiftKey||c.metaKey)&&(b=Sj(this,a))){var d=function(h){var g="";h.tagName&&(g=h.tagName.toLowerCase());return"ul"==g||"table"==g},e;
d(b)?e=b:e=Vc(b,d);if(e){e=e.tagName.toLowerCase();if("ul"==e)var f=this.ob;else"table"==e&&(f=this.nb);f&&Tj(this,a,b,c,w(f,this))}}};
m.ab=function(){var a=this.g,b=0;for(d in a)b++;if(0!=b)for(var c in a){b=a[c];var d=H(b.activeButtonNode||b.parentNode,X(this));if(void 0==d||void 0==b)break;Uj(this,d,b,!0)}};
function Tj(a,b,c,d,e){var f=di(c),h=9==d.keyCode;if(h||32==d.keyCode||13==d.keyCode)if(d=Vj(a,c)){if(void 0!==d.firstElementChild)b=d.firstElementChild;else for(b=d.firstChild;b&&1!=b.nodeType;)b=b.nextSibling;if("a"==b.tagName.toLowerCase()){var g=void 0===g?{}:g;var k=void 0===k?"":k;var l=void 0===l?window:l;l=l.location;g=od(b.href,g)+k;g instanceof Cb||g instanceof Cb||(g="object"==typeof g&&g.T?g.S():String(g),Fb.test(g)||(g="about:invalid#zClosurez"),g=new Cb(Db,g));l.href=g instanceof Cb&&
g.constructor===Cb&&g.g===Eb?g.f:"type_error:SafeUrl"}else ph(b)}else h&&Wj(a,b);else f?27==d.keyCode?(Vj(a,c),Wj(a,b)):e(b,c,d):(g=K(b,X(a,"reverse"))?38:40,d.keyCode==g&&(ph(b),d.preventDefault()))}
m.ra=function(a,b,c){c.altKey||c.ctrlKey||c.shiftKey||c.metaKey||(a=Sj(this,a),di(a)&&c.preventDefault())};
function Vj(a,b){var c=X(a,"menu-item-highlight"),d=G(c,b);d&&M(d,c);return d}
function Xj(a,b,c){L(c,X(a,"menu-item-highlight"));var d=c.getAttribute("id");d||(d=X(a,"item-id-"+Fa(c)),c.setAttribute("id",d));b.setAttribute("aria-activedescendant",d)}
m.nb=function(a,b,c){var d=Vj(this,b),e=eh("table",b);b=Hc(document,"td",null,e);d=Yj(d,b,Hc(document,"td",null,eh("tr",e)).length,c);-1!=d&&(Xj(this,a,b[d]),c.preventDefault())};
m.ob=function(a,b,c){if(40==c.keyCode||38==c.keyCode){var d=Vj(this,b);b=Pa(Hc(document,"li",null,b),di);Xj(this,a,b[Yj(d,b,1,c)]);c.preventDefault()}};
function Yj(a,b,c,d){var e=b.length;a=Oa(b,a);if(-1==a)if(38==d.keyCode)a=e-c;else{if(37==d.keyCode||38==d.keyCode||40==d.keyCode)a=0}else 39==d.keyCode?(a%c==c-1&&(a-=c),a+=1):37==d.keyCode?(0==a%c&&(a+=c),--a):38==d.keyCode?(a<c&&(a+=e),a-=c):40==d.keyCode&&(a>=e-c&&(a-=e),a+=c);return a}
function Zj(a,b){var c=b.iframeMask;c||(c=Pc(document,"IFRAME"),c.src='javascript:""',Ne(c,X(a,"menu-mask")),fi(c),b.iframeMask=c);return c}
function Uj(a,b,c,d){var e=H(b,X(a,"group")),f=!!a.j(b,"button-menu-ignore-group");e=e&&!f?e:b;f=9;var h=8,g=Jd(b);if(K(b,X(a,"reverse"))){f=8;h=9;g=g.top+"px";try{c.style.maxHeight=g}catch(p){}}K(b,"flip")&&(K(b,X(a,"reverse"))?(f=12,h=13):(f=13,h=12));var k;a.j(b,"button-has-sibling-menu")?k=Cd(e):a.j(b,"button-menu-root-container")&&(k=ak(a,b));B&&!nc("8")&&(k=null);if(k){var l=Jd(k);l=new ud(-l.top,l.left,l.top,-l.left)}k=new D(0,1);K(b,X(a,"center-menu"))&&(k.x-=Math.round((Hd(c).width-Hd(b).width)/
2));d&&(k.y+=Mc(document).y);if(a=Zj(a,b))b=Hd(c),a.style.width=b.width+"px",a.style.height=b.height+"px",Yf(e,f,a,h,k,l,197),d&&wd(a,"position","fixed");Yf(e,f,c,h,k,l,197)}
function ak(a,b){if(a.j(b,"button-menu-root-container")){var c=a.j(b,"button-menu-root-container");return H(b,c)}return document.body}
m.Ma=function(a){if(a){var b=Sj(this,a);if(b){a.setAttribute("aria-pressed","true");a.setAttribute("aria-expanded","true");b.originalParentNode=b.parentNode;b.activeButtonNode=a;b.parentNode.removeChild(b);var c;this.j(a,"button-has-sibling-menu")?c=a.parentNode:c=ak(this,a);c.appendChild(b);b.style.minWidth=a.offsetWidth-2+"px";var d=Zj(this,a);d&&c.appendChild(d);(c=!!this.j(a,"button-menu-fixed"))&&(this.g[bh(a).toString()]=b);Uj(this,a,b,c);Jg("yt-uix-button-menu-before-show",a,b);ei(b);d&&ei(d);
this.P(a,"button-menu-action",!0);L(a,X(this,"active"));b=w(this.La,this,a,!1);d=w(this.La,this,a,!0);c=w(this.yb,this,a,void 0);this.f&&Sj(this,this.f)==Sj(this,a)||Rj(this);R("yt-uix-button-menu-show",a);W(this.i);this.i=[V(document,"click",d),V(document,"contextmenu",b),V(window,"resize",c)];this.f=a}}};
function Wj(a,b){if(b){var c=Sj(a,b);if(c){a.f=null;b.setAttribute("aria-pressed","false");b.setAttribute("aria-expanded","false");b.removeAttribute("aria-activedescendant");fi(c);a.P(b,"button-menu-action",!1);var d=Zj(a,b),e=bh(c).toString();delete a.g[e];P(function(){d&&d.parentNode&&(fi(d),d.parentNode.removeChild(d));c.originalParentNode&&(c.parentNode.removeChild(c),c.originalParentNode.appendChild(c),c.originalParentNode=null,c.activeButtonNode=null)},1)}e=H(b,X(a,"group"));
var f=[X(a,"active")];e&&f.push(X(a,"group-active"));Pe(b,f);R("yt-uix-button-menu-hide",b);W(a.i);a.i.length=0}}
m.yb=function(a,b){var c=Sj(this,a);if(c){b&&(b instanceof Gb?Mb(c,b):Uc(c,b));var d=!!this.j(a,"button-menu-fixed");Uj(this,a,c,d)}};
m.La=function(a,b,c){c=nh(c);var d=H(c,X(this));if(d){d=Sj(this,d);var e=Sj(this,a);if(d==e)return}d=H(c,X(this,"menu"));e=d==Sj(this,a);var f=K(c,X(this,"menu-item")),h=K(c,X(this,"menu-close"));if(!d||e&&(f||h))Wj(this,a),d&&b&&this.j(a,"button-menu-indicate-selected")&&((a=G(X(this,"content"),a))&&Uc(a,cd(c)),bk(this,d,c))};
function bk(a,b,c){var d=X(a,"menu-item-selected");z(Gc(d,b),function(e){M(e,d)});
L(c.parentNode,d)}
function Sj(a,b){if(!b.widgetMenu){var c=a.j(b,"button-menu-id");c=c&&E(c);var d=X(a,"menu");c?Oe(c,[d,X(a,"menu-external")]):c=G(d,b);b.widgetMenu=c}return b.widgetMenu}
m.isToggled=function(a){return K(a,X(this,"toggled"))};
m.toggle=function(a){if(this.j(a,"button-toggle")){var b=H(a,X(this,"group")),c=X(this,"toggled"),d=K(a,c);if(b&&this.j(b,"button-toggle-group")){var e=this.j(b,"button-toggle-group");z(Gc(X(this),b),function(f){f!=a||"optional"==e&&d?(M(f,c),f.removeAttribute("aria-pressed")):(L(a,c),f.setAttribute("aria-pressed","true"))})}else d?a.removeAttribute("aria-pressed"):a.setAttribute("aria-pressed","true"),Se(a,c)}};
m.click=function(a){if(Sj(this,a)){var b=Sj(this,a);if(b){var c=H(b.activeButtonNode||b.parentNode,X(this));c&&c!=a?(Wj(this,c),P(w(this.Ma,this,a),1)):di(b)?Wj(this,a):this.Ma(a)}a.focus()}this.P(a,"button-action")};
function Rj(a){a.f&&Wj(a,a.f)}
;function ck(a){uh.call(this,a);this.i=null}
y(ck,uh);m=ck.prototype;m.D=function(a){var b=uh.prototype.D.call(this,a);return b?b:a};
m.register=function(){vh(this,"yt-uix-kbd-nav-move-out-done",this.hide)};
m.dispose=function(){dk(this);ck.A.dispose.call(this)};
m.j=function(a,b){var c=ck.A.j.call(this,a,b);return c?c:(c=ck.A.j.call(this,a,"card-config"))&&(c=v(c))&&c[b]?c[b]:null};
m.show=function(a){var b=this.D(a);if(b){L(b,X(this,"active"));var c=ek(this,a,b);if(c){c.cardTargetNode=a;c.cardRootNode=b;fk(this,a,c);var d=X(this,"card-visible"),e=this.j(a,"card-delegate-show")&&this.j(b,"card-action");this.P(b,"card-action",a);this.i=a;fi(c);P(w(function(){e||(ei(c),R("yt-uix-card-show",b,a,c));gk(c);L(c,d);R("yt-uix-kbd-nav-move-in-to",c)},this),10)}}};
function ek(a,b,c){var d=c||b,e=X(a,"card");c=hk(a,d);var f=E(X(a,"card")+bh(d));if(f)return a=G(X(a,"card-body"),f),Tc(a,c)||(Qc(c),a.appendChild(c)),f;f=document.createElement("div");f.id=X(a,"card")+bh(d);Ne(f,e);(d=a.j(d,"card-class"))&&Oe(f,d.split(/\s+/));d=document.createElement("div");d.className=X(a,"card-border");b=a.j(b,"orientation")||"horizontal";e=document.createElement("div");e.className="yt-uix-card-border-arrow yt-uix-card-border-arrow-"+b;var h=document.createElement("div");h.className=
X(a,"card-body");a=document.createElement("div");a.className="yt-uix-card-body-arrow yt-uix-card-body-arrow-"+b;Qc(c);h.appendChild(c);d.appendChild(a);d.appendChild(h);f.appendChild(e);f.appendChild(d);document.body.appendChild(f);return f}
function fk(a,b,c){var d=a.j(b,"orientation")||"horizontal",e=G(X(a,"anchor"),b)||b,f=a.j(b,"position"),h=!!a.j(b,"force-position"),g=a.j(b,"position-fixed");d="horizontal"==d;var k="bottomright"==f||"bottomleft"==f,l="topright"==f||"bottomright"==f;if(l&&k){var p=13;var q=8}else l&&!k?(p=12,q=9):!l&&k?(p=9,q=12):(p=8,q=13);var t=Kd(document.body);f=Kd(b);t!=f&&(p^=4);if(d){f=b.offsetHeight/2-12;var r=new D(-12,b.offsetHeight+6)}else f=b.offsetWidth/2-6,r=new D(b.offsetWidth+6,-12);var u=Hd(c);f=
Math.min(f,(d?u.height:u.width)-24-6);6>f&&(f=6,d?r.y+=12-b.offsetHeight/2:r.x+=12-b.offsetWidth/2);u=null;h||(u=10);b=X(a,"card-flip");a=X(a,"card-reverse");Qe(c,b,l);Qe(c,a,k);u=Yf(e,p,c,q,r,null,u);!h&&u&&(u&48&&(l=!l,p^=4,q^=4),u&192&&(k=!k,p^=1,q^=1),Qe(c,b,l),Qe(c,a,k),Yf(e,p,c,q,r));g&&(e=parseInt(c.style.top,10),h=Mc(document).y,wd(c,"position","fixed"),wd(c,"top",e-h+"px"));t&&(c.style.right="",e=Jd(c),e.left=e.left||parseInt(c.style.left,10),h=Kc(window),c.style.left="",c.style.right=h.width-
e.left-e.width+"px");e=G("yt-uix-card-body-arrow",c);h=G("yt-uix-card-border-arrow",c);d=d?k?"top":"bottom":!t&&l||t&&!l?"left":"right";e.setAttribute("style","");h.setAttribute("style","");e.style[d]=f+"px";h.style[d]=f+"px";k=G("yt-uix-card-arrow",c);l=G("yt-uix-card-arrow-background",c);k&&l&&(c="right"==d?Hd(c).width-f-13:f+11,f=c/Math.sqrt(2),k.style.left=c+"px",k.style.marginLeft="1px",l.style.marginLeft=-f+"px",l.style.marginTop=f+"px")}
m.hide=function(a){if(a=this.D(a)){var b=E(X(this,"card")+bh(a));b&&(M(a,X(this,"active")),M(b,X(this,"card-visible")),fi(b),this.i=null,b.cardTargetNode=null,b.cardRootNode=null,b.cardMask&&(Qc(b.cardMask),b.cardMask=null))}};
function dk(a){a.i&&a.hide(a.i)}
m.xb=function(a,b){var c=this.D(a);if(c){if(b){var d=hk(this,c);if(!d)return;b instanceof Gb?Mb(d,b):Uc(d,b)}K(c,X(this,"active"))&&(c=ek(this,a,c),fk(this,a,c),ei(c),gk(c))}};
m.isActive=function(a){return(a=this.D(a))?K(a,X(this,"active")):!1};
function hk(a,b){var c=b.cardContentNode;if(!c){var d=X(a,"content"),e=X(a,"card-content");(c=(c=a.j(b,"card-id"))?E(c):G(d,b))||(c=document.createElement("div"));var f=c;M(f,d);L(f,e);b.cardContentNode=c}return c}
function gk(a){var b=a.cardMask;b||(b=Pc(document,"IFRAME"),b.src='javascript:""',Oe(b,["yt-uix-card-iframe-mask"]),a.cardMask=b);b.style.position=a.style.position;b.style.top=a.style.top;b.style.left=a.offsetLeft+"px";b.style.height=a.clientHeight+"px";b.style.width=a.clientWidth+"px";document.body.appendChild(b)}
;function ik(){uh.call(this,"kbd-nav")}
var jk;y(ik,uh);za(ik);m=ik.prototype;m.register=function(){Y(this,"keydown",this.oa);vh(this,"yt-uix-kbd-nav-move-in",this.xa);vh(this,"yt-uix-kbd-nav-move-in-to",this.pb);vh(this,"yt-uix-kbd-move-next",this.ya);vh(this,"yt-uix-kbd-nav-move-to",this.W)};
m.unregister=function(){Z(this,"keydown",this.oa);W(jk)};
m.oa=function(a,b,c){var d=c.keyCode;if(a=H(a,X(this)))switch(d){case 13:case 32:this.xa(a);break;case 27:c.preventDefault();c.stopImmediatePropagation();a:{for(c=Ue(a,"kbdNavMoveOut");!c;){c=H(a.parentElement,X(this));if(!c)break a;c=Ue(c,"kbdNavMoveOut")}c=E(c);this.W(c);R("yt-uix-kbd-nav-move-out-done",c)}break;case 40:case 38:if((b=c.target)&&K(a,X(this,"list")))switch(d){case 40:this.ya(b,a);break;case 38:d=document.activeElement==a,a=kk(a),b=a.indexOf(b),0>b&&!d||(b=d?a.length-1:(a.length+b-
1)%a.length,a[b].focus(),lk(this,a[b]))}c.preventDefault()}};
m.xa=function(a){var b=Ue(a,"kbdNavMoveIn");b=E(b);mk(this,a,b);this.W(b)};
m.pb=function(a){var b=document;try{var c=b&&b.activeElement;var d=c&&c.nodeName?c:null}catch(e){d=null}mk(this,d,a);this.W(a)};
m.W=function(a){if(a)if($c(a))a.focus();else{var b=Vc(a,function(c){return Sc(c)?$c(c):!1});
b?b.focus():(a.setAttribute("tabindex","-1"),a.focus())}};
function mk(a,b,c){if(b&&c)if(L(c,X(a)),a=b.id,a||(a="kbd-nav-"+Math.floor(1E6*Math.random()+1),b.id=a),b=a,Te&&c.dataset)c.dataset.kbdNavMoveOut=b;else{if(/-[a-z]/.test("kbdNavMoveOut"))throw Error("");c.setAttribute("data-"+"kbdNavMoveOut".replace(/([A-Z])/g,"-$1").toLowerCase(),b)}}
m.ya=function(a,b){var c=document.activeElement==b,d=kk(b),e=d.indexOf(a);0>e&&!c||(c=c?0:(e+1)%d.length,d[c].focus(),lk(this,d[c]))};
function lk(a,b){if(b){var c=ed(b,"LI");c&&(L(c,X(a,"highlight")),jk=V(b,"blur",w(function(d){M(d,X(this,"highlight"));W(jk)},a,c)))}}
function kk(a){if("UL"!=a.tagName.toUpperCase())return[];a=Pa(Rc(a),function(b){return"LI"==b.tagName.toUpperCase()});
return Pa(Qa(a,function(b){return di(b)?Vc(b,function(c){return Sc(c)?$c(c):!1}):!1}),function(b){return!!b})}
;function nk(){uh.call(this,"menu");this.g=this.f=null;this.i={};this.v={};this.l=null}
y(nk,uh);za(nk);function ok(a){var b=nk.w();if(K(a,X(b)))return a;var c=b.D(a);return c?c:H(a,X(b,"content"))==b.f?b.g:null}
m=nk.prototype;m.register=function(){Y(this,"click",this.na);Y(this,"mouseenter",this.Ya);vh(this,"page-scroll",this.bb);vh(this,"yt-uix-kbd-nav-move-out-done",function(a){a=this.D(a);pk(this,a)});
this.l=new N};
m.unregister=function(){Z(this,"click",this.na);this.g=this.f=null;W(ab(ib(this.i)));this.i={};hb(this.v,function(a){Qc(a)},this);
this.v={};Rf(this.l);this.l=null;nk.A.unregister.call(this)};
m.na=function(a,b,c){a&&(b=qk(this,a),!b.disabled&&dh(c.target,b)&&rk(this,a))};
m.Ya=function(a,b,c){a&&K(a,X(this,"hover"))&&dh(c.target,qk(this,a))&&rk(this,a,!0)};
m.bb=function(){this.f&&this.g&&sk(this,this.g,this.f)};
function sk(a,b,c){var d=tk(a,b);if(d){var e=Hd(c);if(e instanceof Cc){var f=e.height;e=e.width}else throw Error("missing height argument");d.style.width=Gd(e,!0);d.style.height=Gd(f,!0)}c==a.f&&(e=9,f=8,K(b,X(a,"reversed"))&&(e^=1,f^=1),K(b,X(a,"flipped"))&&(e^=4,f^=4),a=new D(0,1),d&&Yf(b,e,d,f,a,null,197),Yf(b,e,c,f,a,null,197))}
function rk(a,b,c){uk(a,b)&&!c?pk(a,b):(vk(a,b),!a.f||dh(b,a.f)?a.Na(b):ag(a.l,w(a.Na,a,b)))}
m.Na=function(a){if(a){var b=wk(this,a);if(b){Jg("yt-uix-menu-before-show",a,b);this.f?dh(a,this.f)||pk(this,this.g):(this.g=a,this.f=b,K(a,X(this,"sibling-content"))||(Qc(b),document.body.appendChild(b)),b.style.minWidth=qk(this,a).offsetWidth-2+"px");var c=tk(this,a);c&&b.parentNode&&b.parentNode.insertBefore(c,b.nextSibling);M(b,X(this,"content-hidden"));sk(this,a,b);Oe(qk(this,a),[X(this,"trigger-selected"),"yt-uix-button-toggled"]);R("yt-uix-menu-show",a);xk(b);yk(this,a);R("yt-uix-kbd-nav-move-in-to",
b);var d=w(this.zb,this,a),e=w(this.lb,this,a);c=Fa(a).toString();this.i[c]=[V(b,"click",e),V(document,"click",d)];K(a,X(this,"indicate-selected"))&&(d=w(this.mb,this,a),this.i[c].push(V(b,"click",d)));K(a,X(this,"hover"))&&(a=w(this.Za,this,a),this.i[c].push(V(document,"mousemove",a)))}}};
m.Za=function(a,b){var c=nh(b);c&&(dh(c,qk(this,a))||zk(this,c)||Ak(this,a))};
m.zb=function(a,b){var c=nh(b);if(c){if(zk(this,c)){var d=H(c,X(this,"content")),e=ed(c,"LI");e&&d&&Tc(d,e)&&Jg("yt-uix-menu-item-clicked",c);c=H(c,X(this,"close-on-select"));if(!c)return;d=ok(c)}pk(this,d||a)}};
function vk(a,b){if(b){var c=H(b,X(a,"content"));c&&z(Gc(X(a),c),function(d){!dh(d,b)&&uk(this,d)&&Ak(this,d)},a)}}
function pk(a,b){if(b){var c=[];c.push(b);var d=wk(a,b);d&&(d=Gc(X(a),d),d=Xa(d),c=c.concat(d),z(c,function(e){uk(this,e)&&Ak(this,e)},a))}}
function Ak(a,b){if(b){var c=wk(a,b);Pe(qk(a,b),[X(a,"trigger-selected"),"yt-uix-button-toggled"]);L(c,X(a,"content-hidden"));var d=wk(a,b);d&&Ic(d,{"aria-expanded":"false"});(d=tk(a,b))&&d.parentNode&&Qc(d);c&&c==a.f&&(a.g.appendChild(c),a.f=null,a.g=null,a.l&&a.l.J("ROOT_MENU_REMOVED"));R("yt-uix-menu-hide",b);c=Fa(b).toString();W(a.i[c]);delete a.i[c]}}
m.lb=function(a,b){var c=nh(b);c&&Bk(this,a,c)};
m.mb=function(a,b){var c=nh(b);if(c){var d=qk(this,a);if(d&&(c=ed(c,"LI")))if(c=cd(c).trim(),d.hasChildNodes()){var e=Qj.w();(d=G(X(e,"content"),d))&&Uc(d,c)}else Uc(d,c)}};
function yk(a,b){var c=wk(a,b);if(c){z(c.children,function(e){"LI"==e.tagName&&Ic(e,{role:"menuitem"})});
Ic(c,{"aria-expanded":"true"});var d=c.id;d||(d="aria-menu-id-"+Fa(c),c.id=d);(c=qk(a,b))&&Ic(c,{"aria-controls":d})}}
function Bk(a,b,c){var d=wk(a,b);d&&K(b,X(a,"checked"))&&(a=ed(c,"LI"))&&(a=G("yt-ui-menu-item-checked-hid",a))&&(z(Gc("yt-ui-menu-item-checked",d),function(e){Re(e,"yt-ui-menu-item-checked","yt-ui-menu-item-checked-hid")}),Re(a,"yt-ui-menu-item-checked-hid","yt-ui-menu-item-checked"))}
function uk(a,b){var c=wk(a,b);return c?!K(c,X(a,"content-hidden")):!1}
function xk(a){z(Hc(document,"UL",null,a),function(b){b.tabIndex=0;var c=ik.w();Oe(b,[X(c),X(c,"list")])})}
function wk(a,b){var c=Mg(b,"menu-content-id");return c&&(c=E(c))?(Oe(c,[X(a,"content"),X(a,"content-external")]),c):b==a.g?a.f:G(X(a,"content"),b)}
function tk(a,b){var c=Fa(b).toString(),d=a.v[c];if(!d){d=Pc(document,"IFRAME");d.src='javascript:""';var e=[X(a,"mask")];z(Me(b),function(f){e.push(f+"-mask")});
Oe(d,e);a.v[c]=d}return d||null}
function qk(a,b){return G(X(a,"trigger"),b)}
function zk(a,b){return dh(b,a.f)||dh(b,a.g)}
;function Ck(){ck.call(this,"clickcard");this.f={};this.g={}}
y(Ck,ck);za(Ck);m=Ck.prototype;m.register=function(){Ck.A.register.call(this);Y(this,"click",this.ka,"target");Y(this,"click",this.ja,"close")};
m.unregister=function(){Ck.A.unregister.call(this);Z(this,"click",this.ka,"target");Z(this,"click",this.ja,"close");for(var a in this.f)W(this.f[a]);this.f={};for(a in this.g)W(this.g[a]);this.g={}};
m.ka=function(a,b,c){c.preventDefault();b=ed(c.target,"button");if(!b||!b.disabled){if(b=this.j(a,"card-target"))a=document,a="string"===typeof b?a.getElementById(b):b;b=this.D(a);this.j(b,"disabled")||(K(b,X(this,"active"))?(this.hide(a),M(b,X(this,"active"))):(this.show(a),L(b,X(this,"active"))))}};
m.show=function(a){Ck.A.show.call(this,a);var b=this.D(a),c=Fa(a).toString();if(!Mg(b,"click-outside-persists")){if(this.f[c])return;b=V(document,"click",w(this.la,this,a));var d=V(window,"blur",w(this.la,this,a));this.f[c]=[b,d]}a=V(window,"resize",w(this.xb,this,a,void 0));this.g[c]=a};
m.hide=function(a){Ck.A.hide.call(this,a);a=Fa(a).toString();var b=this.f[a];b&&(W(b),this.f[a]=null);if(b=this.g[a])W(b),delete this.g[a]};
m.la=function(a,b){var c="yt-uix"+(this.o?"-"+this.o:"")+"-card",d=null;b.target&&(d=H(b.target,c)||H(ok(b.target),c));(d=d||H(document.activeElement,c)||(document.activeElement?H(ok(document.activeElement),c):null))||this.hide(a)};
m.ja=function(a){(a=H(a,X(this,"card")))&&(a=a.cardTargetNode)&&this.hide(a)};function Dk(){ck.call(this,"hovercard")}
y(Dk,ck);za(Dk);m=Dk.prototype;m.register=function(){Y(this,"mouseenter",this.ta,"target");Y(this,"mouseleave",this.va,"target");Y(this,"mouseenter",this.ua,"card");Y(this,"mouseleave",this.wa,"card")};
m.unregister=function(){Z(this,"mouseenter",this.ta,"target");Z(this,"mouseleave",this.va,"target");Z(this,"mouseenter",this.ua,"card");Z(this,"mouseleave",this.wa,"card")};
m.ta=function(a){if(Ek!=a){Ek&&(this.hide(Ek),Ek=null);var b=w(this.show,this,a),c=parseInt(this.j(a,"delay-show"),10);b=P(b,-1<c?c:200);Kg(a,"card-timer",b.toString());Ek=a;a.alt&&(Kg(a,"card-alt",a.alt),a.alt="");a.title&&(Kg(a,"card-title",a.title),a.title="")}};
m.va=function(a){var b=parseInt(this.j(a,"card-timer"),10);Bg(b);this.D(a).isCardHidable=!0;b=parseInt(this.j(a,"delay-hide"),10);b=-1<b?b:200;P(w(this.cb,this,a),b);if(b=this.j(a,"card-alt"))a.alt=b;if(b=this.j(a,"card-title"))a.title=b};
m.cb=function(a){this.D(a).isCardHidable&&(this.hide(a),Ek=null)};
m.ua=function(a){a&&(a.cardRootNode.isCardHidable=!1)};
m.wa=function(a){a&&this.hide(a.cardTargetNode)};
var Ek=null;function Fk(a,b,c,d,e,f){this.f=a;this.B=null;this.i=G("yt-dialog-fg",this.f)||this.f;if(a=G("yt-dialog-title",this.i)){var h="yt-dialog-title-"+Fa(this.i);a.setAttribute("id",h);this.i.setAttribute("aria-labelledby",h)}this.i.setAttribute("tabindex","-1");this.V=G("yt-dialog-focus-trap",this.f);this.fa=!1;this.l=new N;this.F=[];this.F.push(oh(this.f,w(this.qb,this),"yt-dialog-dismiss"));this.F.push(V(this.V,"focus",w(this.Xa,this),!0));Gk(this);this.Pa=b;this.Ra=c;this.Qa=d;this.K=e;this.Sa=f;this.v=
this.o=null}
var Hk={LOADING:"loading",Lb:"content",Mb:"working"};function Ik(a,b){a.X()||a.l.subscribe("post-all",b)}
function Gk(a){a=G("yt-dialog-fg-content",a.f);var b=[];hb(Hk,function(c){b.push("yt-dialog-show-"+c)});
Pe(a,b);L(a,"yt-dialog-show-content")}
m=Fk.prototype;
m.show=function(){if(!this.X()){this.B=document.activeElement;if(!this.Qa){this.g||(this.g=E("yt-dialog-bg"),this.g||(this.g=Pc(document,"div"),this.g.id="yt-dialog-bg",Ne(this.g,"yt-dialog-bg"),document.body.appendChild(this.g)));var a=window,b=a.document;var c=0;if(b){c=b.body;var d=b.documentElement;if(d&&c)if(a=Kc(a).height,Lc(b)&&d.scrollHeight)c=d.scrollHeight!=a?d.scrollHeight:d.offsetHeight;else{b=d.scrollHeight;var e=d.offsetHeight;d.clientHeight!=e&&(b=c.scrollHeight,e=c.offsetHeight);c=
b>a?b>e?b:e:b<e?b:e}else c=0}this.g.style.height=c+"px";ei(this.g)}this.pa();c=Jk(this);Kk(c);this.o=V(document,"keydown",w(this.kb,this));c=this.f;d=Gg("player-added",this.pa,this);Kg(c,"player-ready-pubsub-key",d);this.Ra&&(this.v=V(document,"click",w(this.wb,this)));ei(this.f);this.i.setAttribute("tabindex","0");Lk(this);this.K||L(document.body,"yt-dialog-active");Rj(Qj.w());dk(Ck.w());dk(Dk.w());R("yt-ui-dialog-show-complete",this)}};
function Mk(){return Sa(Gc("yt-dialog"),function(a){return di(a)})}
m.pa=function(){if(!this.Sa){var a=this.f;Qe(document.body,"hide-players",!0);a&&Qe(a,"preserve-players",!0)}};
function Jk(a){var b=Hc(document,"iframe",null,a.f);z(b,function(c){var d=Mg(c,"onload");d&&(d=v(d))&&V(c,"load",d);if(d=Mg(c,"src"))c.src=d},a);
return Xa(b)}
function Kk(a){z(document.getElementsByTagName("iframe"),function(b){-1==Oa(a,b)&&L(b,"iframe-hid")})}
function Nk(){z(Gc("iframe-hid"),function(a){M(a,"iframe-hid")})}
m.qb=function(a){a=a.currentTarget;a.disabled||(a=Mg(a,"action")||"",this.dismiss(a))};
m.dismiss=function(a){if(!this.X()){this.l.J("pre-all");this.l.J("pre-"+a);fi(this.f);dk(Ck.w());dk(Dk.w());this.i.setAttribute("tabindex","-1");Mk()||(fi(this.g),this.K||M(document.body,"yt-dialog-active"),gh(),Nk());this.o&&(W(this.o),this.o=null);this.v&&(W(this.v),this.v=null);var b=this.f;if(b){var c=Mg(b,"player-ready-pubsub-key");c&&(Ig(c),Ng(b,"player-ready-pubsub-key"))}this.l.J("post-all");R("yt-ui-dialog-hide-complete",this);"cancel"==a&&R("yt-ui-dialog-cancelled",this);this.l&&this.l.J("post-"+
a);this.B&&this.B.focus()}};
m.setTitle=function(a){Uc(G("yt-dialog-title",this.f),a)};
m.kb=function(a){P(w(function(){this.Pa||27!=a.keyCode||this.dismiss("cancel")},this),0);
9==a.keyCode&&a.shiftKey&&K(document.activeElement,"yt-dialog-fg")&&a.preventDefault()};
m.wb=function(a){"yt-dialog-base"==a.target.className&&this.dismiss("cancel")};
m.X=function(){return this.fa};
m.dispose=function(){di(this.f)&&this.dismiss("dispose");W(this.F);this.F.length=0;P(w(function(){this.B=null},this),0);
this.V=this.i=null;this.l.dispose();this.l=null;this.fa=!0};
m.Xa=function(a){a.stopPropagation();Lk(this)};
function Lk(a){P(w(function(){this.i&&this.i.focus()},a),0)}
x("yt.ui.Dialog",Fk);function Ok(){uh.call(this,"overlay");this.l=this.g=this.i=this.f=null}
y(Ok,uh);za(Ok);m=Ok.prototype;m.register=function(){Y(this,"click",this.da,"target");Y(this,"click",this.hide,"close");Pk(this)};
m.unregister=function(){Ok.A.unregister.call(this);Z(this,"click",this.da,"target");Z(this,"click",this.hide,"close");this.l&&(Ig(this.l),this.l=null);this.g&&(W(this.g),this.g=null)};
m.da=function(a){if(!this.f||!di(this.f.f)){var b=this.D(a);a=Qk(b,a);b||(b=a?a.overlayParentNode:null);if(b&&a){var c=!!this.j(b,"disable-shortcuts")||!1,d=!!this.j(b,"disable-outside-click-dismiss")||!1;this.f=new Fk(a,c);this.i=b;var e=G("yt-dialog-fg",a);if(e){var f=this.j(b,"overlay-class")||"",h=this.j(b,"overlay-style")||"default",g=this.j(b,"overlay-shape")||"default";f=f?f.split(" "):[];f.push(X(this,h));f.push(X(this,g));Oe(e,f)}this.f.show();R("yt-uix-kbd-nav-move-to",e||a);Pk(this);c||
d||(c=w(function(k){K(k.target,"yt-dialog-base")&&Rk(this)},this),this.g=V(G("yt-dialog-base",a),"click",c));
this.P(b,"overlay-shown");R("yt-uix-overlay-shown",b)}}};
function Pk(a){a.l||(a.l=Gg("yt-uix-overlay-hide",Sk));a.f&&Ik(a.f,function(){var b=Ok.w();b.i=null;b.f.dispose();b.f=null})}
function Rk(a){if(a.f){var b=a.i;a.f.dismiss("overlayhide");b&&a.P(b,"overlay-hidden");a.i=null;a.g&&(W(a.g),a.g=null);a.f=null}}
function Qk(a,b){var c;if(a)if(c=G("yt-dialog",a)){var d=E("body-container");d&&(d.appendChild(c),a.overlayContentNode=c,c.overlayParentNode=a)}else c=a.overlayContentNode;else b&&(c=H(b,"yt-dialog"));return c}
function Tk(){var a=Ok.w();if(a.i)a=G("yt-dialog-fg-content",a.i.overlayContentNode);else a:{if(a=Gc("yt-dialog-fg-content"))for(var b=0;b<a.length;b++){var c=H(a[b],"yt-dialog");if(di(c)){a=a[b];break a}}a=null}return a}
m.hide=function(a){a&&a.disabled||R("yt-uix-overlay-hide")};
function Sk(){Rk(Ok.w())}
m.show=function(a){this.da(a)};var Uk={},Vk=[];function Wk(a){a=H(a,"yt-uix-button-subscription-container");return G("yt-dialog",G("unsubscribe-confirmation-overlay-container",a))}
function Xk(a,b){W(Vk);Vk.length=0;Uk[b]||(Uk[b]=Wk(a));Ok.w().show(Uk[b]);var c=Tk();return new sf(function(d){Vk.push(oh(c,function(){d()},"overlay-confirmation-unsubscribe-button"))})}
;function Yk(){var a=O("PLAYER_CONFIG");return a&&a.args&&void 0!==a.args.authuser?!0:!(!O("SESSION_INDEX")&&!O("LOGGED_IN"))}
;function Zk(){uh.call(this,"subscription-button")}
y(Zk,uh);za(Zk);m=Zk.prototype;m.register=function(){Y(this,"click",this.ea);wh(this,Oh,this.Ba);wh(this,Ph,this.Aa);wh(this,Qh,this.ub);wh(this,Th,this.Ba);wh(this,Uh,this.Aa);wh(this,Vh,this.vb);wh(this,Xh,this.sb);wh(this,Yh,this.rb)};
m.unregister=function(){Z(this,"click",this.ea);Zk.A.unregister.call(this)};
m.isSubscribed=function(a){return!!this.j(a,"is-subscribed")};
m.ea=function(a){var b=this.j(a,"href"),c=this.j(a,"insecure");if(b)a=this.j(a,"target")||"_self",window.open(b,a);else if(!c)if(Yk()){b=this.j(a,"channel-external-id");c=this.j(a,"clicktracking");var d=$k(this,a),e=this.j(a,"parent-url");if(this.j(a,"is-subscribed")){var f=this.j(a,"subscription-id"),h=new Kh(b,f,d,a,c,e);this.j(a,"show-unsub-confirm-dialog")?Xk(a,b).then(function(){U(Sh,h)}):U(Sh,h)}else a=this.j(a,"params"),U(Nh,new Ih(b,d,c,e,void 0,a))}else al(this,a)};
m.Ba=function(a){this.O(a.f,this.Ga,!0)};
m.Aa=function(a){this.O(a.f,this.Ga,!1)};
m.ub=function(a){this.O(a.f,this.Ha,!0,a.g)};
m.vb=function(a){this.O(a.f,this.Ha,!1)};
m.sb=function(a){this.O(a.f,this.Wa)};
m.rb=function(a){this.O(a.f,this.Va)};
m.Ha=function(a,b,c){b?(Kg(a,"is-subscribed","true"),c&&Kg(a,"subscription-id",c)):(Ng(a,"is-subscribed"),Ng(a,"subscription-id"));bl(this,a)};
function $k(a,b){if(!a.j(b,"ypc-enabled"))return null;var c=a.j(b,"ypc-item-type"),d=a.j(b,"ypc-item-id");return{itemType:c,itemId:d,subscriptionElement:b}}
m.Ga=function(a,b){var c=H(a,"yt-uix-button-subscription-container");Qe(c,"yt-subscription-button-disabled-mask-container",b);a.setAttribute("aria-busy",b?"true":"false");a.disabled=b};
function bl(a,b){var c=a.j(b,"style-type"),d=!!a.j(b,"is-subscribed");c="-"+c;var e="yt-uix-button-subscribed"+c;Qe(b,"yt-uix-button-subscribe"+c,!d);Qe(b,e,d);a.j(b,"subscriber-count-tooltip")&&!a.j(b,"subscriber-count-show-when-subscribed")&&(c=X(gi.w()),Qe(b,c,!d),b.title=d?"":a.j(b,"subscriber-count-title"));d?P(function(){L(b,"hover-enabled")},1E3):M(b,"hover-enabled")}
m.Wa=function(a){var b=!!this.j(a,"ypc-item-type"),c=!!this.j(a,"ypc-item-id");!this.j(a,"ypc-enabled")&&b&&c&&(L(a,"ypc-enabled"),Kg(a,"ypc-enabled","true"))};
m.Va=function(a){this.j(a,"ypc-enabled")&&(M(a,"ypc-enabled"),Ng(a,"ypc-enabled"))};
function cl(a,b){return Pa(Gc(X(a)),function(c){return b==this.j(c,"channel-external-id")},a)}
m.Ta=function(a,b,c){var d=$a(arguments,2);z(a,function(e){b.apply(this,Va(e,d))},this)};
m.O=function(a,b,c){var d=cl(this,a);this.Ta.apply(this,Va([d],$a(arguments,1)))};
function al(a,b){var c=w(function(d){d.discoverable_subscriptions&&ug("SUBSCRIBE_EMBED_DISCOVERABLE_SUBSCRIPTIONS",d.discoverable_subscriptions);this.ea(b)},a);
oi(c)}
;function dl(a){this.f=a;this.G=null;O("SUBSCRIBE_EMBED_HOVERCARD_URL")&&(el(this),V(this.f,"mouseover",w(this.l,this)),V(this.f,"mouseout",w(this.aa,this)),V(this.f,"click",w(this.aa,this)),Zg(Qh,Ka(this.g,!0),this),Zg(Vh,Ka(this.g,!1),this),fl(this))}
function el(a){var b={url:O("SUBSCRIBE_EMBED_HOVERCARD_URL"),style:"bubble",hideClickDetection:!0,show:!1,anchor:a.f,relayOpen:"-1"};a=w(a.i,a);Eh().open(b,a)}
function fl(a){Yk()||Gg("LOGGED_IN",function(){this.G&&(this.aa(),this.G.close(),this.G=null,el(this))},a)}
dl.prototype.i=function(a){this.G=a;a=Zk.w().isSubscribed(this.f);this.g(a)};
dl.prototype.l=function(){this.G&&this.G.restyle({show:!0})};
dl.prototype.aa=function(){this.G&&this.G.restyle({show:!1})};
dl.prototype.g=function(a){if(this.G){a={isSubscribed:a};try{this.G.send("msg-hovercard-subscription",a,void 0,v("gapi.iframes.SAME_ORIGIN_IFRAMES_FILTER"))}catch(b){}}};function gl(){Dh(function(){var a=Hd(E("yt-subscribe"));a={width:a.width,height:a.height};var b=hl;Eh().ready(a,null,b)})}
function hl(a){if(a.length&&a[a.length-1]){a=a[a.length-1].eurl;var b=E("yt-subscribe"),c=Zk.w();if(b=G(X(c),b))a&&(Zk.w(),Kg(b,"parent-url",a)),new dl(b)}}
;function il(a){S.call(this,1,arguments);this.f=a}
y(il,S);function jl(a,b){S.call(this,2,arguments);this.g=a;this.f=b}
y(jl,S);function kl(a,b,c,d){S.call(this,1,arguments);this.f=b;this.itemType=c||null;this.itemId=d||null}
y(kl,S);function ll(a,b){S.call(this,1,arguments);this.g=a;this.f=b||null}
y(ll,S);function ml(a){S.call(this,1,arguments)}
y(ml,S);var nl=new T("ypc-core-load",il),ol=new T("ypc-guide-sync-success",jl),pl=new T("ypc-purchase-success",kl),ql=new T("ypc-subscription-cancel",ml),rl=new T("ypc-subscription-cancel-success",ll),sl=new T("ypc-init-subscription",ml);var tl=!1,ul=[];function vl(a){a.f?tl?U(Rh,a):U(nl,new il(function(){U(sl,new ml(a.f))})):wl(a.g,a.l,a.i,a.source,a.params)}
function xl(a){a.f?tl?U(Wh,a):U(nl,new il(function(){U(ql,new ml(a.f))})):yl(a.g,a.o,a.l,a.i,a.source)}
function zl(a){Al(Xa(a.f))}
function Bl(a){Cl(Xa(a.f))}
function Dl(a){El(a.i,a.g,a.f)}
function Fl(a){var b=a.itemId,c=a.f.subscriptionId;b&&c&&U(Qh,new Jh(b,c,a.f.channelInfo))}
function Gl(a){var b=a.f;hb(a.g,function(c,d){U(Qh,new Jh(d,c,b[d]))})}
function Hl(a){U(Vh,new Gh(a.g.itemId));a.f&&a.f.length&&(Il(a.f,Vh),Il(a.f,Xh))}
function wl(a,b,c,d,e){var f=new Gh(a);U(Oh,f);var h={};h.c=a;c&&(h.eurl=c);d&&(h.source=d);c={};(d=O("PLAYBACK_ID"))&&(c.plid=d);(d=O("EVENT_ID"))&&(c.ei=d);e&&(c.params=e);b&&Jl(b,c);gj("/subscription_ajax?action_create_subscription_to_channel=1",{method:"POST",Ja:h,H:c,onSuccess:function(g,k){var l=k.response;U(Qh,new Jh(a,l.id,l.channel_info));l.show_feed_privacy_dialog&&R("SHOW-FEED-PRIVACY-SUBSCRIBE-DIALOG",a)},
U:function(){U(Ph,f)}})}
function yl(a,b,c,d,e){var f=new Gh(a);U(Th,f);var h={};h.c=a;d&&(h.eurl=d);e&&(h.source=e);d={};d.c=a;d.s=b;(a=O("PLAYBACK_ID"))&&(d.plid=a);(a=O("EVENT_ID"))&&(d.ei=a);c&&Jl(c,d);gj("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",Ja:h,H:d,onSuccess:function(){U(Vh,f)},
U:function(){U(Uh,f)}})}
function El(a,b,c){if(a){var d={};d.channel_id=a;switch(b){case "receive-all-updates":d.receive_all_updates=!0;break;case "receive-no-updates":d.receive_no_updates=!0;d.receive_post_updates=!1;break;case "receive-highlight-updates":d.receive_all_updates=!1;d.receive_no_updates=!1;break;default:return}null===c||d.receive_no_updates||(d.receive_post_updates=c);var e=new Hh(a,b,c);gj("/subscription_ajax?action_update_subscription_preferences=1",{method:"POST",H:d,onError:function(){U(ai,e)},
onSuccess:function(){U($h,e)}})}}
function Al(a){if(a.length){var b=Za(a,0,40);U("subscription-batch-subscribe-loading");Il(b,Oh);var c={};c.a=b.join(",");var d=function(){U("subscription-batch-subscribe-loaded");Il(b,Ph)};
gj("/subscription_ajax?action_create_subscription_to_all=1",{method:"POST",H:c,onSuccess:function(e,f){d();var h=f.response,g=h.id;if(Ba(g)&&g.length==b.length){var k=h.channel_info_map;z(g,function(l,p){var q=b[p];U(Qh,new Jh(q,l,k[q]))});
a.length?Al(a):U("subscription-batch-subscribe-finished")}},
onError:function(){d();U("subscription-batch-subscribe-failure")}})}}
function Cl(a){if(a.length){var b=Za(a,0,40);U("subscription-batch-unsubscribe-loading");Il(b,Th);var c={};c.c=b.join(",");var d=function(){U("subscription-batch-unsubscribe-loaded");Il(b,Uh)};
gj("/subscription_ajax?action_remove_subscriptions=1",{method:"POST",H:c,onSuccess:function(){d();Il(b,Vh);a.length&&Cl(a)},
onError:function(){d()}})}}
function Il(a,b){z(a,function(c){U(b,new Gh(c))})}
function Jl(a,b){var c=Ah(a),d;for(d in c)b[d]=c[d]}
;x("yt.setConfig",ug);x("yt.config.set",ug);x("ytbin.www.subscribeembed.init",function(){tl=!0;ul.push(Zg(Nh,vl),Zg(Sh,xl));tl||ul.push(Zg(Rh,vl),Zg(Wh,xl),Zg(Lh,zl),Zg(Mh,Bl),Zg(Zh,Dl),Zg(pl,Fl),Zg(rl,Hl),Zg(ol,Gl));var a=Zk.w(),b=X(a);b in yh||(a.register(),vh(a,"yt-uix-init-"+b,a.init),vh(a,"yt-uix-dispose-"+b,a.dispose),yh[b]=a);gl()});}).call(this);
