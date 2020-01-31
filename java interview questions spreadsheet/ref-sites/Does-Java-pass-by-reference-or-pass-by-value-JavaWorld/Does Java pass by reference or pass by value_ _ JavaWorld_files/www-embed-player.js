(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var m;function aa(a){var b=0;return function(){return b<a.length?{done:!1,value:a[b++]}:{done:!0}}}
function r(a){var b="undefined"!=typeof Symbol&&Symbol.iterator&&a[Symbol.iterator];return b?b.call(a):{next:aa(a)}}
function ba(a){for(var b,c=[];!(b=a.next()).done;)c.push(b.value);return c}
var ca="function"==typeof Object.create?Object.create:function(a){function b(){}
b.prototype=a;return new b},da;
if("function"==typeof Object.setPrototypeOf)da=Object.setPrototypeOf;else{var ea;a:{var fa={a:!0},ha={};try{ha.__proto__=fa;ea=ha.a;break a}catch(a){}ea=!1}da=ea?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=da;
function t(a,b){a.prototype=ca(b.prototype);a.prototype.constructor=a;if(ia)ia(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c];a.L=b.prototype}
var ja="function"==typeof Object.defineProperties?Object.defineProperty:function(a,b,c){a!=Array.prototype&&a!=Object.prototype&&(a[b]=c.value)};
function ka(a){a=["object"==typeof window&&window,"object"==typeof self&&self,"object"==typeof global&&global,a];for(var b=0;b<a.length;++b){var c=a[b];if(c&&c.Math==Math)return c}return globalThis}
var ma=ka(this);function na(a,b){if(b){for(var c=ma,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function oa(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
na("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=oa(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
na("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=oa(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function pa(){pa=function(){};
ma.Symbol||(ma.Symbol=qa)}
function ra(a,b){this.f=a;ja(this,"description",{configurable:!0,writable:!0,value:b})}
ra.prototype.toString=function(){return this.f};
var qa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new ra("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function sa(){pa();var a=ma.Symbol.iterator;a||(a=ma.Symbol.iterator=ma.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return ta(aa(this))}});
sa=function(){}}
function ta(a){sa();a={next:a};a[ma.Symbol.iterator]=function(){return this};
return a}
function u(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ua="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)u(d,e)&&(a[e]=d[e])}return a};
na("Object.assign",function(a){return a||ua});
na("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=r(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!u(k,g)){var l=new c;ja(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(p){if(p instanceof c)return p;e(p);return l(p)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),p=new a([[k,2],[l,3]]);if(2!=p.get(k)||3!=p.get(l))return!1;p["delete"](k);p.set(l,4);return!p.has(k)&&4==p.get(l)}catch(n){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!u(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&u(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&u(k,g)&&u(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&u(k,g)&&u(k[g],this.f)?delete k[g][this.f]:!1};
return b});
na("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return ta(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var p=h.g[l];if(p&&u(h.g,l))for(var n=0;n<p.length;n++){var v=p[n];if(k!==k&&v.key!==v.key||k===v.key)return{id:l,list:p,index:n,u:v}}return{id:l,list:p,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(r([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),p=l.next();if(p.done||p.value[0]!=h||"s"!=p.value[1])return!1;p=l.next();return p.done||4!=p.value[0].x||"t"!=p.value[1]||!l.next().done?!1:!0}catch(n){return!1}}())return a;
sa();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),p;!(p=l.next()).done;)p=p.value,h.call(k,p[1],p[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
na("Set",function(a){function b(c){this.f=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
sa();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
na("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==oa(this,b,"includes").indexOf(b,c||0)}});
var va=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
na("Reflect.construct",function(){return va});
var w=this||self;function x(a,b,c){a=a.split(".");c=c||w;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var wa=/^[\w+/_-]+[=]{0,2}$/,xa=null;function z(a,b){for(var c=a.split("."),d=b||w,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function ya(){}
function za(a){a.ha=void 0;a.getInstance=function(){return a.ha?a.ha:a.ha=new a}}
function Aa(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Ba(a){return"array"==Aa(a)}
function Ca(a){var b=Aa(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function A(a){return"function"==Aa(a)}
function B(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Da(a){return Object.prototype.hasOwnProperty.call(a,Ea)&&a[Ea]||(a[Ea]=++Fa)}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Ga:C=Ha;return C.apply(null,arguments)}
function Ia(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now||function(){return+new Date};
function Ka(a,b){x(a,b,void 0)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(F,Error);F.prototype.name="CustomError";function La(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;var Ma=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Na=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Oa=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Pa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Qa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Ra(a,b){var c=Ma(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Sa(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Ta(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ca(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;function Ua(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function Va(a,b){var c=Ca(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function Wa(a){var b=Xa,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function Ya(a){for(var b in a)return!1;return!0}
function Za(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function $a(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function ab(a){var b={},c;for(c in a)b[c]=a[c];return b}
function bb(a){var b=Aa(a);if("object"==b||"array"==b){if(A(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=bb(a[c]);return b}return a}
var cb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function db(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<cb.length;f++)c=cb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function eb(a,b){this.f=a===fb&&b||"";this.g=gb}
eb.prototype.J=!0;eb.prototype.I=function(){return this.f};
function hb(){var a=ib;return a instanceof eb&&a.constructor===eb&&a.g===gb?a.f:"type_error:Const"}
var gb={},fb={},ib=new eb(fb,"");function jb(a,b){this.f=a===kb&&b||"";this.g=lb}
jb.prototype.J=!0;jb.prototype.I=function(){return this.f.toString()};
jb.prototype.ga=!0;jb.prototype.da=function(){return 1};
function mb(a){if(a instanceof jb&&a.constructor===jb&&a.g===lb)return a.f;Aa(a);return"type_error:TrustedResourceUrl"}
var lb={},kb={};var nb=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function ob(a,b){if(b)a=a.replace(pb,"&amp;").replace(qb,"&lt;").replace(rb,"&gt;").replace(sb,"&quot;").replace(tb,"&#39;").replace(ub,"&#0;");else{if(!vb.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(pb,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(qb,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(rb,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(sb,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(tb,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace(ub,"&#0;"))}return a}
var pb=/&/g,qb=/</g,rb=/>/g,sb=/"/g,tb=/'/g,ub=/\x00/g,vb=/[\x00&<>"']/;function H(a,b){this.f=a===wb&&b||"";this.g=xb}
H.prototype.J=!0;H.prototype.I=function(){return this.f.toString()};
H.prototype.ga=!0;H.prototype.da=function(){return 1};
function yb(a){if(a instanceof H&&a.constructor===H&&a.g===xb)return a.f;Aa(a);return"type_error:SafeUrl"}
var zb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Ab(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);zb.test(a)||(a="about:invalid#zClosurez");return new H(wb,a)}
var xb={},wb={};var Bb;a:{var Cb=w.navigator;if(Cb){var Db=Cb.userAgent;if(Db){Bb=Db;break a}}Bb=""};function Eb(){this.f="";this.h=Gb;this.g=null}
Eb.prototype.ga=!0;Eb.prototype.da=function(){return this.g};
Eb.prototype.J=!0;Eb.prototype.I=function(){return this.f.toString()};
function Hb(a){if(a instanceof Eb&&a.constructor===Eb&&a.h===Gb)return a.f;Aa(a);return"type_error:SafeHtml"}
var Gb={};function Ib(a,b){var c=new Eb;c.f=a;c.g=b;return c}
Ib("<!DOCTYPE html>",0);var Jb=Ib("",0);Ib("<br>",0);function Kb(a,b){var c=b instanceof H?b:Ab(b);a.href=yb(c)}
function Lb(a,b){a.src=mb(b);if(null===xa)b:{var c=w.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&wa.test(c)){xa=c;break b}xa=""}c=xa;c&&a.setAttribute("nonce",c)}
;function Mb(a){return a=ob(a,void 0)}
function Nb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ob=-1!=Bb.indexOf("Trident")||-1!=Bb.indexOf("MSIE"),Pb;var Qb;if(w.document&&Ob){var Rb=w.document;Qb=Rb?Rb.documentMode:void 0}else Qb=void 0;Pb=Qb;var Sb={},Tb=null;var I=window;function Ub(a){var b=z("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||w.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Vb[b]?b=Vb[b]:(b=String(b),Vb[b]||(c=/function\s+([^\(]+)/m.exec(b),Vb[b]=c?c[1]:"[Anonymous]"),b=Vb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Vb={};function Wb(a){this.f=a||{cookie:""}}
m=Wb.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.tb;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.la}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=nb(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{la:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=nb(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Xb=new Wb("undefined"==typeof document?null:document);var Yb=!Ob||9<=Number(Pb);function Zb(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
m=Zb.prototype;m.clone=function(){return new Zb(this.x,this.y)};
m.equals=function(a){return a instanceof Zb&&(this==a?!0:this&&a?this.x==a.x&&this.y==a.y:!1)};
m.ceil=function(){this.x=Math.ceil(this.x);this.y=Math.ceil(this.y);return this};
m.floor=function(){this.x=Math.floor(this.x);this.y=Math.floor(this.y);return this};
m.round=function(){this.x=Math.round(this.x);this.y=Math.round(this.y);return this};function $b(a,b){this.width=a;this.height=b}
m=$b.prototype;m.clone=function(){return new $b(this.width,this.height)};
m.aspectRatio=function(){return this.width/this.height};
m.isEmpty=function(){return!(this.width*this.height)};
m.ceil=function(){this.width=Math.ceil(this.width);this.height=Math.ceil(this.height);return this};
m.floor=function(){this.width=Math.floor(this.width);this.height=Math.floor(this.height);return this};
m.round=function(){this.width=Math.round(this.width);this.height=Math.round(this.height);return this};function ac(a){var b=document;return"string"===typeof a?b.getElementById(a):a}
function bc(a,b){Ua(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:cc.hasOwnProperty(d)?a.setAttribute(cc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function dc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Yb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Mb(g.name),'"');if(g.type){f.push(' type="',Mb(g.type),'"');var h={};db(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=ec(e,f);g&&("string"===typeof g?f.className=g:Ba(g)?f.className=g.join(" "):bc(f,g));2<d.length&&fc(e,f,d);return f}
function fc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ca(f)||B(f)&&0<f.nodeType?d(f):G(gc(f)?Sa(f):f,d)}}
function ec(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function gc(a){if(a&&"number"==typeof a.length){if(B(a))return"function"==typeof a.item||"string"==typeof a.item;if(A(a))return"function"==typeof a.item}return!1}
function hc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function ic(a){jc();return new jb(kb,a)}
var jc=ya;var kc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a?decodeURI(a):a}
function K(a,b){return b.match(kc)[a]||null}
function lc(a,b,c){if(Ba(b))for(var d=0;d<b.length;d++)lc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function mc(a){var b=[],c;for(c in a)lc(c,a[c],b);return b.join("&")}
function nc(a,b){var c=mc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var oc=/#|$/;function pc(a,b){var c=a.search(oc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function qc(a){var b=rc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function sc(){var a=[];qc(function(b){a.push(b)});
return a}
var rc={Za:"allow-forms",ab:"allow-modals",bb:"allow-orientation-lock",cb:"allow-pointer-lock",eb:"allow-popups",fb:"allow-popups-to-escape-sandbox",gb:"allow-presentation",hb:"allow-same-origin",ib:"allow-scripts",jb:"allow-top-navigation",kb:"allow-top-navigation-by-user-activation"},tc=La(function(){return sc()});
function uc(){var a=ec(document,"IFRAME"),b={};G(tc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function vc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var wc=(new Date).getTime();function xc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function yc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;p=l=0}
function b(n){for(var v=g,q=0;64>q;q+=4)v[q/4]=n[q]<<24|n[q+1]<<16|n[q+2]<<8|n[q+3];for(q=16;80>q;q++)n=v[q-3]^v[q-8]^v[q-14]^v[q-16],v[q]=(n<<1|n>>>31)&4294967295;n=e[0];var y=e[1],U=e[2],la=e[3],Dc=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Ja=la^y&(U^la);var Fb=1518500249}else Ja=y^U^la,Fb=1859775393;else 60>q?(Ja=y&U|la&(y|U),Fb=2400959708):(Ja=y^U^la,Fb=3395469782);Ja=((n<<5|n>>>27)&4294967295)+Ja+Dc+Fb+v[q]&4294967295;Dc=la;la=U;U=(y<<30|y>>>2)&4294967295;y=n;n=Ja}e[0]=e[0]+n&4294967295;e[1]=
e[1]+y&4294967295;e[2]=e[2]+U&4294967295;e[3]=e[3]+la&4294967295;e[4]=e[4]+Dc&4294967295}
function c(n,v){if("string"===typeof n){n=unescape(encodeURIComponent(n));for(var q=[],y=0,U=n.length;y<U;++y)q.push(n.charCodeAt(y));n=q}v||(v=n.length);q=0;if(0==l)for(;q+64<v;)b(n.slice(q,q+64)),q+=64,p+=64;for(;q<v;)if(f[l++]=n[q++],p++,64==l)for(l=0,b(f);q+64<v;)b(n.slice(q,q+64)),q+=64,p+=64}
function d(){var n=[],v=8*p;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=v&255,v>>>=8;b(f);for(q=v=0;5>q;q++)for(var y=24;0<=y;y-=8)n[v++]=e[q]>>y&255;return n}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,p;a();return{reset:a,update:c,digest:d,wa:function(){for(var n=d(),v="",q=0;q<n.length;q++)v+="0123456789ABCDEF".charAt(Math.floor(n[q]/16))+"0123456789ABCDEF".charAt(n[q]%16);return v}}}
;function zc(a,b,c){var d=[],e=[];if(1==(Ba(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),Ac(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=Ac(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ac(a){var b=yc();b.update(a);return b.wa().toLowerCase()}
;function Bc(a){var b=xc(String(w.location.href)),c;(c=w.__SAPISID||w.__APISID||w.__OVERRIDE_SID)?c=!0:(c=new Wb(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?w.__SAPISID:w.__APISID,c||(c=new Wb(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(w.location.href);return d&&c&&b?[b,zc(xc(d),c,a||null)].join(" "):null}return null}
;function Cc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Cc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Ec(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Fc(a){w.setTimeout(function(){throw a;},0)}
var Gc;
function Hc(){var a=w.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==Bb.indexOf("Presto")&&(a=function(){var e=ec(document,"IFRAME");e.style.display="none";e.src=mb(new jb(kb,hb())).toString();document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Hb(Jb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||
k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&-1==Bb.indexOf("Trident")&&-1==Bb.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.ka;c.ka=null;e()}};
return function(e){d.next={ka:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in ec(document,"SCRIPT")?function(e){var f=ec(document,"SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){w.setTimeout(e,0)}}
;function Ic(){this.g=this.f=null}
var Kc=new Cc(function(){return new Jc},function(a){a.reset()});
Ic.prototype.add=function(a,b){var c=Kc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Ic.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Jc(){this.next=this.scope=this.f=null}
Jc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Jc.prototype.reset=function(){this.next=this.scope=this.f=null};function Lc(a,b){Mc||Nc();Oc||(Mc(),Oc=!0);Pc.add(a,b)}
var Mc;function Nc(){if(w.Promise&&w.Promise.resolve){var a=w.Promise.resolve(void 0);Mc=function(){a.then(Qc)}}else Mc=function(){var b=Qc;
!A(w.setImmediate)||w.Window&&w.Window.prototype&&-1==Bb.indexOf("Edge")&&w.Window.prototype.setImmediate==w.setImmediate?(Gc||(Gc=Hc()),Gc(b)):w.setImmediate(b)}}
var Oc=!1,Pc=new Ic;function Qc(){for(var a;a=Pc.remove();){try{a.f.call(a.scope)}catch(b){Fc(b)}Ec(Kc,a)}Oc=!1}
;function L(){this.g=this.g;this.A=this.A}
L.prototype.g=!1;L.prototype.dispose=function(){this.g||(this.g=!0,this.m())};
function Rc(a,b){a.g?b():(a.A||(a.A=[]),a.A.push(b))}
L.prototype.m=function(){if(this.A)for(;this.A.length;)this.A.shift()()};
function Sc(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Tc(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ca(d)?Tc.apply(null,d):Sc(d)}}
;function Uc(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Vc(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Wc(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Uc(a).match(/\S+/g)||[],c=0<=Ma(c,b);return c}
function Xc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Wc(a,"inverted-hdpi")&&Vc(a,Na(a.classList?a.classList:Uc(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Yc="StopIteration"in w?w.StopIteration:{message:"StopIteration",stack:""};function Zc(){}
Zc.prototype.next=function(){throw Yc;};
Zc.prototype.D=function(){return this};
function $c(a){if(a instanceof Zc)return a;if("function"==typeof a.D)return a.D(!1);if(Ca(a)){var b=0,c=new Zc;c.next=function(){for(;;){if(b>=a.length)throw Yc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function ad(a,b){if(Ca(a))try{G(a,b,void 0)}catch(c){if(c!==Yc)throw c;}else{a=$c(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Yc)throw c;}}}
function bd(a){if(Ca(a))return Sa(a);a=$c(a);var b=[];ad(a,function(c){b.push(c)});
return b}
;function cd(a,b){this.h={};this.f=[];this.F=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof cd)for(c=dd(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function dd(a){ed(a);return a.f.concat()}
m=cd.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||fd;ed(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function fd(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.F=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.F++,this.f.length>2*this.g&&ed(this),!0):!1};
function ed(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.F++);this.h[a]=b};
m.forEach=function(a,b){for(var c=dd(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new cd(this)};
m.D=function(a){ed(this);var b=0,c=this.F,d=this,e=new Zc;e.next=function(){if(c!=d.F)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Yc;var f=d.f[b++];return a?f:d.h[f]};
return e};function gd(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function M(a){this.f=0;this.A=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=ya)try{var b=this;a.call(void 0,function(c){hd(b,2,c)},function(c){hd(b,3,c)})}catch(c){hd(this,3,c)}}
function id(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
id.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var jd=new Cc(function(){return new id},function(a){a.reset()});
function kd(a,b,c){var d=jd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function ld(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return md(this,A(a)?a:null,A(b)?b:null,c)};
M.prototype.$goog_Thenable=!0;function nd(a,b){return md(a,null,b,void 0)}
M.prototype.cancel=function(a){if(0==this.f){var b=new od(a);Lc(function(){pd(this,b)},this)}};
function pd(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?pd(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):qd(c),rd(c,e,3,b)))}a.h=null}else hd(a,3,b)}
function sd(a,b){a.g||2!=a.f&&3!=a.f||td(a);a.i?a.i.next=b:a.g=b;a.i=b}
function md(a,b,c,d){var e=kd(null,null,null);e.f=new M(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof od?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;sd(a,e);return e.f}
M.prototype.w=function(a){this.f=0;hd(this,2,a)};
M.prototype.B=function(a){this.f=0;hd(this,3,a)};
function hd(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.w,f=a.B;if(d instanceof M){sd(d,kd(e||ya,f||null,a));var g=!0}else if(gd(d))d.then(e,f,a),g=!0;else{if(B(d))try{var h=d.then;if(A(h)){ud(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.A=c,a.f=b,a.h=null,td(a),3!=b||c instanceof od||vd(a,c))}}
function ud(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function td(a){a.l||(a.l=!0,Lc(a.o,a))}
function qd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.o=function(){for(var a;a=qd(this);)rd(this,a,this.f,this.A);this.l=!1};
function rd(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,wd(b,c,d);else try{b.h?b.g.call(b.context):wd(b,c,d)}catch(e){xd.call(null,e)}Ec(jd,b)}
function wd(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function vd(a,b){a.j=!0;Lc(function(){a.j&&xd.call(null,b)})}
var xd=Fc;function od(a){F.call(this,a)}
E(od,F);od.prototype.name="cancel";function yd(){this.g=[];this.f=-1}
yd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
yd.prototype.get=function(a){return!!this.g[a]};
function zd(a){-1==a.f&&(a.f=Pa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function Ad(){this.g=-1}
;function Bd(){this.g=64;this.f=[];this.l=[];this.A=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(Bd,Ad);Bd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function Cd(a,b,c){c||(c=0);var d=a.A;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
Bd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)Cd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){Cd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){Cd(this,e);f=0;break}}this.h=f;this.j+=b}};
Bd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;Cd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function Dd(a){var b=[];Ed(new Fd,a,b);return b.join("")}
function Fd(){}
function Ed(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Ba(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ed(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Gd(d,c),c.push(":"),Ed(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Gd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Hd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Id=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Gd(a,b){b.push('"',a.replace(Id,function(c){var d=Hd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Hd[c]=d);return d}),'"')}
;function N(a){L.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.o=!!a}
E(N,L);m=N.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Jd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Qa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.N(b)}}
m.N=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=ya):(c&&Ra(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.M=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.o)for(e=0;e<c.length;e++){var g=c[e];Kd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.N(c)}}return 0!=e}return!1};
function Kd(a,b,c){Lc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.N,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.m=function(){N.L.m.call(this);this.clear();this.i.length=0};function Ld(a){this.f=a}
Ld.prototype.set=function(a,b){void 0===b?this.f.remove(a):this.f.set(a,Dd(b))};
Ld.prototype.get=function(a){try{var b=this.f.get(a)}catch(c){return}if(null!==b)try{return JSON.parse(b)}catch(c){throw"Storage: Invalid value was encountered";}};
Ld.prototype.remove=function(a){this.f.remove(a)};function Md(a){this.f=a}
E(Md,Ld);function Nd(a){this.data=a}
function Od(a){return void 0===a||a instanceof Nd?a:new Nd(a)}
Md.prototype.set=function(a,b){Md.L.set.call(this,a,Od(b))};
Md.prototype.g=function(a){a=Md.L.get.call(this,a);if(void 0===a||a instanceof Object)return a;throw"Storage: Invalid value was encountered";};
Md.prototype.get=function(a){if(a=this.g(a)){if(a=a.data,void 0===a)throw"Storage: Invalid value was encountered";}else a=void 0;return a};function Pd(a){this.f=a}
E(Pd,Md);Pd.prototype.set=function(a,b,c){if(b=Od(b)){if(c){if(c<D()){Pd.prototype.remove.call(this,a);return}b.expiration=c}b.creation=D()}Pd.L.set.call(this,a,b)};
Pd.prototype.g=function(a){var b=Pd.L.g.call(this,a);if(b){var c=b.creation,d=b.expiration;if(d&&d<D()||c&&c>D())Pd.prototype.remove.call(this,a);else return b}};function Qd(){}
;function Rd(){}
E(Rd,Qd);Rd.prototype.clear=function(){var a=bd(this.D(!0)),b=this;G(a,function(c){b.remove(c)})};function Sd(a){this.f=a}
E(Sd,Rd);m=Sd.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.D=function(a){var b=0,c=this.f,d=new Zc;d.next=function(){if(b>=c.length)throw Yc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Td(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(Td,Sd);function Ud(a,b){this.g=a;this.f=null;if(Ob&&!(9<=Number(Pb))){Vd||(Vd=new cd);this.f=Vd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Vd.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(Ud,Rd);var Wd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Vd=null;function Xd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Wd[b]})}
m=Ud.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Xd(a),b);Yd(this)};
m.get=function(a){a=this.f.getAttribute(Xd(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Xd(a));Yd(this)};
m.D=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Zc;d.next=function(){if(b>=c.length)throw Yc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Yd(this)};
function Yd(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Zd(a,b){this.g=a;this.f=b+"::"}
E(Zd,Rd);Zd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Zd.prototype.get=function(a){return this.g.get(this.f+a)};
Zd.prototype.remove=function(a){this.g.remove(this.f+a)};
Zd.prototype.D=function(a){var b=this.g.D(!0),c=this,d=new Zc;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function $d(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ae=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};x("yt.config_",ae,void 0);function O(a){$d(ae,arguments)}
function P(a,b){return a in ae?ae[a]:b}
function be(){return P("ERRORS",[])}
function ce(){return P("PLAYER_CONFIG",{})}
;function de(){var a=ee;z("yt.ads.biscotti.getId_")||x("yt.ads.biscotti.getId_",a,void 0)}
function fe(a){x("yt.ads.biscotti.lastId_",a,void 0)}
;var ge=[];function he(a){ge.forEach(function(b){return b(a)})}
function ie(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){je(b),he(b)}}:a}
function je(a){var b=z("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=be(),b.push([a,"ERROR",void 0,void 0,void 0]),O("ERRORS",b))}
function ke(a){var b=z("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=be(),b.push([a,"WARNING",void 0,void 0,void 0]),O("ERRORS",b))}
;function le(a){var b=[];Ua(a,function(c,d){var e=encodeURIComponent(String(d)),f;Ba(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function me(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Ba(b[f])?Ta(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};je(h)}}}return b}
function ne(a,b){return oe(a,b||{},!0)}
function oe(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=me(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return nc(a,e)+d}
;function pe(a){var b=qe;a=void 0===a?z("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(re(b),se(b));b.ca_type="image";a&&(b.bid=a);return b}
function re(a){var b={};b.dt=wc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?I:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(b.u_h=I.screen.height,b.u_w=I.screen.width,b.u_ah=I.screen.availHeight,b.u_aw=I.screen.availWidth,b.u_cd=I.screen.colorDepth);
I.navigator&&I.navigator.plugins&&(b.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(b.u_nmime=I.navigator.mimeTypes.length);return b}
function se(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(n){}try{var e=b.outerWidth;var f=b.outerHeight}catch(n){}try{var g=b.innerWidth;var h=b.innerHeight}catch(n){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var p=(new $b(l.clientWidth,l.clientHeight)).round()}catch(n){p=new $b(-12245933,-12245933)}k=p;p={};l=new yd;w.SVGElement&&
w.document.createElementNS&&l.set(0);c=uc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);w.crypto&&w.crypto.subtle&&l.set(3);w.TextDecoder&&w.TextEncoder&&l.set(4);l=zd(l);p.bc=l;p.bih=k.height;p.biw=k.width;p.brdim=b.join();a=a.g;return p.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,p.wgl=!!I.WebGLRenderingContext,p}
var qe=new function(){var a=window.document;this.f=window;this.g=a};
x("yt.ads_.signals_.getAdSignalsString",function(a){return le(pe(a))},void 0);D();function Q(a){a=te(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ue(a,b){var c=te(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function te(a){var b=P("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:P("EXPERIMENT_FLAGS",{})[a]}
;var ve=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function we(){if(!ve)return null;var a=ve();return"open"in a?a:null}
function xe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function R(a,b){A(a)&&(a=ie(a));return window.setTimeout(a,b)}
function S(a){window.clearTimeout(a)}
;var ye={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ze="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ae=!1;
function Be(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=K(1,a),e=J(K(3,a));d&&e?(d=c,c=a.match(kc),d=d.match(kc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(K(3,c))==e&&(Number(K(4,c))||null)==(Number(K(4,a))||null):!0;d=Q("web_ajax_ignore_global_headers_if_set");for(var f in ye)e=P(ye[f]),!e||!c&&!Ce(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ce(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Ce(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Ce(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=le(pe(void 0));return b}
function De(a){var b=window.location.search,c=J(K(3,a)),d=J(K(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=me(b),f={};G(ze,function(g){e[g]&&(f[g]=e[g])});
return oe(a,f||{},!1)}
function Ce(a,b){var c=P("CORS_HEADER_WHITELIST")||{},d=J(K(3,a));return d?(c=c[d])?0<=Ma(c,b):!1:!0}
function Ee(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Fe(a,b);var d=Ge(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&S(f);var h=g.ok,k=function(l){l=l||{};var p=b.context||w;h?b.onSuccess&&b.onSuccess.call(p,l,g):b.onError&&b.onError.call(p,l,g);b.ia&&b.ia.call(p,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.oa&&0<b.timeout&&(f=R(function(){e||(e=!0,S(f),b.oa.call(b.context||w))},b.timeout))}else He(a,b)}
function He(a,b){var c=b.format||"JSON";a=Fe(a,b);var d=Ge(a,b),e=!1,f,g=Ie(a,function(h){if(!e){e=!0;f&&S(f);var k=xe(h),l=null,p=400<=h.status&&500>h.status,n=500<=h.status&&600>h.status;if(k||p||n)l=Je(c,h,b.ob);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};p=b.context||w;k?b.onSuccess&&b.onSuccess.call(p,h,l):b.onError&&b.onError.call(p,h,l);b.ia&&b.ia.call(p,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.O&&0<b.timeout&&(f=R(function(){e||(e=!0,g.abort(),S(f),b.O.call(b.context||w,g))},b.timeout));
return g}
function Fe(a,b){b.rb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=P("XSRF_FIELD_NAME",void 0),d=b.Ya;d&&(d[c]&&delete d[c],a=ne(a,d));return a}
function Ge(a,b){var c=P("XSRF_FIELD_NAME",void 0),d=P("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=P("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.qb||J(K(3,a))&&!b.withCredentials&&J(K(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=me(e),db(e,f),e=b.qa&&"JSON"==b.qa?JSON.stringify(e):mc(e));f=e||f&&!Ya(f);!Ae&&f&&"POST"!=b.method&&(Ae=!0,je(Error("AJAX request with postData should use POST")));
return e}
function Je(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ke(b):null)d={},G(b.getElementsByTagName("*"),function(e){d[e.tagName]=Le(e)})}c&&Me(d);
return d}
function Me(a){if(B(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ib(a[b],null);a[c]=d}else Me(a[b])}}
function Ke(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Le(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ie(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ie(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=we();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;Q("debug_forward_web_query_parameters")&&(a=De(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Be(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ne={},Oe=0;
function Pe(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=Bb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),zb.test(a)||(a="about:invalid#zClosurez"),a=new H(wb,a)),b=yb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Eb?a=b:(d="object"==typeof b,a=null,d&&b.ga&&(a=b.da()),b=ob(d&&b.J?b.I():String(b)),a=Ib(b,a)),a=Hb(a).toString(),a=encodeURIComponent(String(Dd(a)))),/^[\s\xa0]*$/.test(a)||(a=dc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ie(a,b,"POST",e,d):P("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ie(a,b,"GET","",d):Qe(a,b)||Re(a,b))}
function Qe(a,b){var c=ae.EXPERIMENT_FLAGS;if(!c||!c.web_use_beacon_api_for_ad_click_server_pings)return!1;c=J(K(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===pc(a,"ae")&&"1"===pc(a,"act")?Se(a)?(b&&b(),!0):!1:!1}
function Se(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Re(a,b){var c=new Image,d=""+Oe++;Ne[d]=c;c.onload=c.onerror=function(){b&&Ne[d]&&b();delete Ne[d]};
c.src=a}
;function Te(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ba(r(c)))}
t(Te,Error);var Ue=new Set,Ve=0;function We(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Xe(a,b,c,d,e,f){b=void 0===b?"ERROR":b;f=void 0===f?{}:f;f.name=c||P("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};d=void 0===b?"ERROR":b;d=void 0===d?"ERROR":d;f=window&&window.yterr||!1;if(a&&f&&!(5<=Ve)&&(Q("console_log_js_exceptions")&&(f=[],f.push("Name: "+a.name),f.push("Message: "+a.message),a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params)),f.push("File name: "+a.fileName),f.push("Stacktrace: "+a.stack),
window.console.log(f.join("\n"),a)),0!==a.f)){f=a.g;b=a.columnNumber;if(a.args&&a.args.length)for(var g=0,h=0;h<a.args.length;h++){e=a.args[h];var k="params."+h;g+=k.length;if(e)if(Array.isArray(e))for(var l=c,p=0;p<e.length&&!(e[p]&&(g+=We(p,e[p],k,l),500<g));p++);else if("object"===typeof e)for(l in l=void 0,p=c,e){if(e[l]&&(g+=We(l,e[l],k,p),500<g))break}else c[k]=String(JSON.stringify(e)).substring(0,500),g+=c[k].length;else c[k]=String(JSON.stringify(e)).substring(0,500),g+=c[k].length;if(500<=
g)break}else if(a.hasOwnProperty("params"))if(e=a.params,"object"===typeof a.params)for(h in k=0,e){if(e[h]&&(g="params."+h,l=String(JSON.stringify(e[h])).substr(0,500),c[g]=l,k+=g.length+l.length,500<k))break}else c.params=String(JSON.stringify(e)).substr(0,500);a=Ub(a);(f=f||a.stack)||(f="Not available");h=a.lineNumber.toString();isNaN(h)||!b||isNaN(b)||(h=h+":"+b);window.yterr&&A(window.yterr)&&window.yterr(a);if(!(Ue.has(a.message)||0<=f.indexOf("/YouTubeCenter.js")||0<=f.indexOf("/mytube.js"))){d=
{Ya:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:h,level:d,"client.name":c.name},C:{url:P("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(d["client.version"]=c.version);if(d.C){f&&(d.C.stack=f);f=r(Object.keys(c));for(b=f.next();!b.done;b=f.next())b=b.value,d.C["client."+b]=c[b];if(c=P("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=r(Object.keys(c)),b=f.next();!b.done;b=f.next())b=b.value,d.C[b]=c[b]}He(P("ECATCHER_REPORT_HOST","")+
"/error_204",d);Ue.add(a.message);Ve++}}}
;var Ye=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};x("yt.msgs_",Ye,void 0);function Ze(a){$d(Ye,arguments)}
;function $e(a){a&&(a.dataset?a.dataset[af("loaded")]="true":a.setAttribute("data-loaded","true"))}
function bf(a,b){return a?a.dataset?a.dataset[af(b)]:a.getAttribute("data-"+b):null}
var cf={};function af(a){return cf[a]||(cf[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var df=z("ytPubsubPubsubInstance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.N;N.prototype.publish=N.prototype.M;N.prototype.clear=N.prototype.clear;x("ytPubsubPubsubInstance",df,void 0);var ef=z("ytPubsubPubsubSubscribedKeys")||{};x("ytPubsubPubsubSubscribedKeys",ef,void 0);var ff=z("ytPubsubPubsubTopicToKeys")||{};x("ytPubsubPubsubTopicToKeys",ff,void 0);var gf=z("ytPubsubPubsubIsSynchronous")||{};x("ytPubsubPubsubIsSynchronous",gf,void 0);
function hf(a,b){var c=jf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){ef[d]&&b.apply(window,e)};
try{gf[a]?f():R(f,0)}catch(g){je(g)}},void 0);
ef[d]=!0;ff[a]||(ff[a]=[]);ff[a].push(d);return d}return 0}
function kf(a){var b=jf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete ef[c]}))}
function lf(a,b){var c=jf();c&&c.publish.apply(c,arguments)}
function mf(a){var b=jf();if(b)if(b.clear(a),a)nf(a);else for(var c in ff)nf(c)}
function jf(){return z("ytPubsubPubsubInstance")}
function nf(a){ff[a]&&(a=ff[a],G(a,function(b){ef[b]&&delete ef[b]}),a.length=0)}
;var of=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,pf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function qf(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(of,""),c=c.replace(pf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else rf(a,b,c)}
function rf(a,b,c){c=void 0===c?null:c;var d=sf(a),e=document.getElementById(d),f=e&&bf(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=hf(d,b),b=""+Da(b),tf[b]=f),g||(e=uf(a,d,function(){bf(e,"loaded")||($e(e),lf(d),R(Ia(mf,d),0))},c)))}
function uf(a,b,c,d){d=void 0===d?null:d;var e=ec(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,ic(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function vf(a){a=sf(a);var b=document.getElementById(a);b&&(mf(a),b.parentNode.removeChild(b))}
function wf(a,b){if(a&&b){var c=""+Da(b);(c=tf[c])&&kf(c)}}
function sf(a){var b=document.createElement("a");Kb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Nb(a)}
var tf={};function xf(){}
function yf(a,b){return zf(a,1,b)}
;function Af(){}
t(Af,xf);function zf(a,b,c){isNaN(c)&&(c=void 0);var d=z("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):R(a,c||0)}
Af.prototype.start=function(){var a=z("yt.scheduler.instance.start");a&&a()};
Af.prototype.pause=function(){var a=z("yt.scheduler.instance.pause");a&&a()};
za(Af);Af.getInstance();var Bf=[],Cf=!1;function Df(){if("1"!=Va(ce(),"args","privembed")){var a=function(){Cf=!0;"google_ad_status"in window?O("DCLKSTAT",1):O("DCLKSTAT",2)};
qf("//static.doubleclick.net/instream/ad_status.js",a);Bf.push(yf(function(){Cf||"google_ad_status"in window||(wf("//static.doubleclick.net/instream/ad_status.js",a),Cf=!0,O("DCLKSTAT",3))},5E3))}}
function Ef(){return parseInt(P("DCLKSTAT",0),10)}
;function Ff(){this.g=!1;this.f=null}
Ff.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,qf(b,function(){f.g=!1;if(window.botguard)Gf(f,c,d);else{vf(b);var g=Error("Unable to load Botguard");g.params="from "+b;ke(g)}},e)):a&&(eval(a),window.botguard?Gf(this,c,d):ke(Error("Unable to load Botguard from JS")))};
function Gf(a,b,c){try{a.f=new window.botguard.bg(b)}catch(d){ke(d)}c&&c(b)}
Ff.prototype.dispose=function(){this.f=null};var Hf=window,T=Hf.ytcsi&&Hf.ytcsi.now?Hf.ytcsi.now:Hf.performance&&Hf.performance.timing&&Hf.performance.now?function(){return Hf.performance.timing.navigationStart+Hf.performance.now()}:function(){return(new Date).getTime()};var If=new Ff,Jf=!1,Kf=0,Lf="";function Mf(a){Q("botguard_periodic_refresh")?Kf=T():Q("botguard_always_refresh")&&(Lf=a)}
function Nf(a){if(a){if(If.g)return!1;if(Q("botguard_periodic_refresh"))return 72E5<T()-Kf;if(Q("botguard_always_refresh"))return Lf!=a}else return!1;return!Jf}
function Of(){return!!If.f}
function Pf(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return If.f?If.f.invoke(void 0,void 0,a):null}
;var Qf=0;x("ytDomDomGetNextId",z("ytDomDomGetNextId")||function(){return++Qf},void 0);var Rf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Sf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Rf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function Tf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Sf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Sf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Sf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var Xa=z("ytEventsEventsListeners")||{};x("ytEventsEventsListeners",Xa,void 0);var Uf=z("ytEventsEventsCounter")||{count:0};x("ytEventsEventsCounter",Uf,void 0);
function Vf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return Wa(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=B(e[4])&&B(d)&&$a(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Wf=La(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Vf(a,b,c,d);if(e)return e;e=++Uf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Sf(h);if(!hc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Sf(h);
h.currentTarget=a;return c.call(a,h)};
g=ie(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Wf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);Xa[e]=[a,b,c,g,d];return e}
function Xf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in Xa){var c=Xa[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Wf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete Xa[b]}}))}
;var Yf=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function Zf(a){this.w=a;this.f=null;this.j=0;this.o=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.G=V(window,"mousemove",C(this.H,this));a=C(this.B,this);A(a)&&(a=ie(a));this.K=window.setInterval(a,25)}
E(Zf,L);Zf.prototype.H=function(a){void 0===a.f&&Tf(a);var b=a.f;void 0===a.g&&Tf(a);this.f=new Zb(b,a.g)};
Zf.prototype.B=function(){if(this.f){var a=Yf();if(0!=this.j){var b=this.o,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.w();this.l=d}this.j=a;this.o=this.f;this.i=(this.i+1)%4}};
Zf.prototype.m=function(){window.clearInterval(this.K);Xf(this.G)};var $f={};
function ag(a){var b=void 0===a?{}:a;a=void 0===b.Ba?!0:b.Ba;b=void 0===b.Na?!1:b.Na;if(null==z("_lact",window)){var c=parseInt(P("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;x("_lact",c,window);x("_fact",c,window);-1==c&&bg();V(document,"keydown",bg);V(document,"keyup",bg);V(document,"mousedown",bg);V(document,"mouseup",bg);a&&(b?V(window,"touchmove",function(){cg("touchmove",200)},{passive:!0}):(V(window,"resize",function(){cg("resize",200)}),V(window,"scroll",function(){cg("scroll",200)})));
new Zf(function(){cg("mouse",100)});
V(document,"touchstart",bg,{passive:!0});V(document,"touchend",bg,{passive:!0})}}
function cg(a,b){$f[a]||($f[a]=!0,yf(function(){bg();$f[a]=!1},b))}
function bg(){null==z("_lact",window)&&ag();var a=D();x("_lact",a,window);-1==z("_fact",window)&&x("_fact",a,window);(a=z("ytglobal.ytUtilActivityCallback_"))&&a()}
function dg(){var a=z("_lact",window);return null==a?-1:Math.max(D()-a,0)}
;var eg=ue("initial_gel_batch_timeout",1E3),fg=Math.pow(2,16)-1,gg=null,hg=0,ig={log_event:"events",log_interaction:"interactions"},jg=Object.create(null);jg.log_event="GENERIC_EVENT_LOGGING";jg.log_interaction="INTERACTION_LOGGING";var kg=new Set(["log_event"]),lg={},mg=0,ng=0,og=0,pg=!0,W=z("ytLoggingTransportLogPayloadsQueue_")||{};x("ytLoggingTransportLogPayloadsQueue_",W,void 0);var qg=z("ytLoggingTransportTokensToCttTargetIds_")||{};x("ytLoggingTransportTokensToCttTargetIds_",qg,void 0);
var rg=z("ytLoggingTransportDispatchedStats_")||{};x("ytLoggingTransportDispatchedStats_",rg,void 0);x("ytytLoggingTransportCapturedTime_",z("ytLoggingTransportCapturedTime_")||{},void 0);function sg(){S(mg);S(ng);ng=0;if(!Ya(W)){for(var a in W){var b=lg[a];b&&b.isReady()&&(tg(a,b),delete W[a],pg=!1)}Ya(W)||ug()}}
function ug(){Q("web_gel_timeout_cap")&&!ng&&(ng=R(sg,6E4));S(mg);var a=P("LOGGING_BATCH_TIMEOUT",ue("web_gel_debounce_ms",1E4));Q("shorten_initial_gel_batch_timeout")&&pg&&(a=eg);mg=R(sg,a)}
function vg(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function tg(a,b){var c=ig[a],d=rg[a]||{};rg[a]=d;var e=Math.round(T());for(n in W[a]){var f=bb,g=b.f||wg();g={client:{hl:g.Fa,gl:g.Ea,clientName:g.Da,clientVersion:g.innertubeContextClientVersion,configInfo:g.Ca}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));h=P("EXPERIMENTS_TOKEN","");""!==h&&(g.client.experimentsToken=h);var k=h=void 0,l=[],p=P("EXPERIMENTS_FORCED_FLAGS",{});for(k in p)l.push({key:k,value:String(p[k])});k=P("EXPERIMENT_FLAGS",{});for(h in k)h.startsWith("force_")&&
void 0===p[h]&&l.push({key:h,value:String(k[h])});h=l;0<h.length&&(g.request={internalExperimentFlags:h});P("DELEGATED_SESSION_ID")&&!Q("pageid_as_header_web")&&(g.user={onBehalfOfUser:P("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=vg(a,n);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=qg[n])a:{l=n;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:l,scope:h}]}delete qg[n];f.requestTimeMs=e;Q("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(g=P("EVENT_ID",void 0))h=(P("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>fg&&(h=1),O("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,gg&&hg&&Q("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:gg,roundtripMs:hg}),gg=g,hg=0;xg(b,a,f,{retry:kg.has(a),onSuccess:C(yg,this,T())})}if(d.previousDispatchMs){c=
e-d.previousDispatchMs;var n=d.diffCount||0;d.averageTimeBetweenDispatchesMs=n?(d.averageTimeBetweenDispatchesMs*n+c)/(n+1):c;d.diffCount=n+1}d.previousDispatchMs=e}
function yg(a){hg=Math.round(T()-a)}
;var zg=z("ytLoggingGelSequenceIdObj_")||{};x("ytLoggingGelSequenceIdObj_",zg,void 0);
function Ag(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||T());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:dg())};Q("log_sequence_info_on_gel_web")&&d.P&&(a=e.context,b=d.P,zg[b]=b in zg?zg[b]+1:0,a.sequence={index:zg[b],groupKey:b},d.pb&&delete zg[d.P]);(d=d.ca)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),qg[d.token]=a,d=vg("log_event",d.token)):d=vg("log_event");d.push(e);c&&(lg.log_event=new c);c=ue("web_logging_max_batch")||
100;e=T();d.length>=c?sg():10<=e-og&&(ug(),og=e)}
;function Bg(){return"INNERTUBE_API_KEY"in ae&&"INNERTUBE_API_VERSION"in ae}
function wg(){return{innertubeApiKey:P("INNERTUBE_API_KEY",void 0),innertubeApiVersion:P("INNERTUBE_API_VERSION",void 0),Ca:P("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Da:P("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:P("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Fa:P("INNERTUBE_CONTEXT_HL",void 0),Ea:P("INNERTUBE_CONTEXT_GL",void 0),Ga:P("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ha:!!P("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Cg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||P("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.mb||P("AUTHORIZATION"))||(a?b="Bearer "+z("gapi.auth.getToken")().lb:b=Bc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=P("SESSION_INDEX",0),Q("pageid_as_header_web")&&(d["X-Goog-PageId"]=P("DELEGATED_SESSION_ID")));return d}
function Dg(a){a=Object.assign({},a);delete a.Authorization;var b=Bc();if(b){var c=new Bd;c.update(P("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ca(b);void 0===c&&(c=0);if(!Tb){Tb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Sb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Tb[k]&&(Tb[k]=h)}}}c=Sb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],p=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|p>>4;p=(p&15)<<2|k>>6;k&=63;g||(k=64,f||(p=64));d.push(c[h],c[l],c[p]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Eg(a,b,c,d){Xb.set(""+a,b,{la:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Fg(){var a=new Td;(a=a.isAvailable()?new Zd(a,"yt.innertube"):null)||(a=new Ud("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Pd(a):null;this.g=document.domain||window.location.hostname}
Fg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Dd(b))}catch(f){return}else e=escape(b);Eg(a,e,c,this.g)};
Fg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Xb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Fg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Xb.remove(""+a,"/",void 0===b?"youtube.com":b)};var Gg=new Fg;function Hg(a,b,c,d){if(d)return null;d=Gg.get("nextId",!0)||1;var e=Gg.get("requests",!0)||{};e[d]={method:a,request:b,authState:Dg(c),requestTime:Math.round(T())};Gg.set("nextId",d+1,86400,!0);Gg.set("requests",e,86400,!0);return d}
function Ig(a){var b=Gg.get("requests",!0)||{};delete b[a];Gg.set("requests",b,86400,!0)}
function Jg(a){var b=Gg.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(T())-d.requestTime)){var e=d.authState,f=Dg(Cg(!1));$a(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(T())),xg(a,d.method,e,{}));delete b[c]}}Gg.set("requests",b,86400,!0)}}
;function Kg(a){var b=this;this.f=null;a?this.f=a:Q("delay_gel_until_config_ready")?Bg()&&(this.f=wg()):this.f=wg();zf(function(){Jg(b)},0,5E3)}
Kg.prototype.isReady=function(){!this.f&&Bg()&&(this.f=wg());return!!this.f};
function xg(a,b,c,d){!P("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ke(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,qa:"JSON",O:function(){d.O()},
oa:d.O,onSuccess:function(v,q){if(d.onSuccess)d.onSuccess(q)},
na:function(v){if(d.onSuccess)d.onSuccess(v)},
onError:function(v,q){if(d.onError)d.onError(q)},
sb:function(v){if(d.onError)d.onError(v)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ga;g&&(f=g);g=a.f.Ha||!1;var h=Cg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=ne(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&Q("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Hg(b,c,h,g))){var p=e.onSuccess,n=e.na;e.onSuccess=function(v,q){Ig(l);p(v,q)};
c.na=function(v,q){Ig(l);n(v,q)}}try{Q("use_fetch_for_op_xhr")?Ee(k,e):(e.method="POST",e.C||(e.C={}),He(k,e))}catch(v){if("InvalidAccessError"==v)l&&(Ig(l),l=0),ke(Error("An extension is blocking network request."));
else throw v;}l&&zf(function(){Jg(a)},0,5E3)}
;var Lg=D().toString();
function Mg(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Lg)for(a=1,b=0;b<Lg.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Lg.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Ng=z("ytLoggingTimeDocumentNonce_")||Mg();x("ytLoggingTimeDocumentNonce_",Ng,void 0);function Og(a){this.f=a}
function Pg(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=Pg(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
Og.prototype.toString=function(){return JSON.stringify(Pg(this))};
var Qg=1;function Rg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Sg(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Tg(a){return P(Sg(void 0===a?0:a),void 0)}
x("yt_logging_screen.getRootVeType",Tg,void 0);function Ug(){var a=Tg(0),b;a?b=new Og({veType:a,youtubeData:void 0}):b=null;return b}
function Vg(){var a=P("csn-to-ctt-auth-info");a||(a={},O("csn-to-ctt-auth-info",a));return a}
function Wg(a){a=void 0===a?0:a;var b=P(Rg(a));b||0!=a||(Q("kevlar_client_side_screens")||Q("c3_client_side_screens")?b="UNDEFINED_CSN":b=P("EVENT_ID"));return b?b:null}
x("yt_logging_screen.getCurrentCsn",Wg,void 0);function Xg(a,b,c){var d=Vg();(c=Wg(c))&&delete d[c];b&&(d[a]=b)}
function Yg(a){return Vg()[a]}
x("yt_logging_screen.getCttAuthInfo",Yg,void 0);function Zg(a,b,c,d){c=void 0===c?0:c;if(a!==P(Rg(c))||b!==P(Sg(c)))Xg(a,d,c),O(Rg(c),a),O(Sg(c),b),0==c&&(b=function(){setTimeout(function(){a&&Ag("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Ng,clientScreenNonce:a},Kg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
x("yt_logging_screen.setCurrentScreen",Zg,void 0);function $g(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=P("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=P("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=J(K(3,window.location.href));g&&f.push(g);g=J(K(3,d));if(0<=Ma(f,g)||!g&&0==d.lastIndexOf("/",0))if(Q("autoescape_tempdata_url")&&(f=document.createElement("a"),Kb(f,d),d=f.href),d){g=d.match(kc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:Wg()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Nb(d).toString(36),e=e?mc(e):"",Eg(b,e,k||5))}else k=b,e="ST-"+Nb(d).toString(36),k=k?mc(k):"",Eg(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var p=void 0===p?"":p;var n=void 0===n?window:n;c=n.location;a=nc(a,l)+p;a=a instanceof H?a:Ab(a);c.href=yb(a)}return!0}
;function ah(a,b){this.version=a;this.args=b}
;function bh(a,b){this.topic=a;this.f=b}
bh.prototype.toString=function(){return this.topic};var ch=z("ytPubsub2Pubsub2Instance")||new N;N.prototype.subscribe=N.prototype.subscribe;N.prototype.unsubscribeByKey=N.prototype.N;N.prototype.publish=N.prototype.M;N.prototype.clear=N.prototype.clear;x("ytPubsub2Pubsub2Instance",ch,void 0);var dh=z("ytPubsub2Pubsub2SubscribedKeys")||{};x("ytPubsub2Pubsub2SubscribedKeys",dh,void 0);var eh=z("ytPubsub2Pubsub2TopicToKeys")||{};x("ytPubsub2Pubsub2TopicToKeys",eh,void 0);var fh=z("ytPubsub2Pubsub2IsAsync")||{};x("ytPubsub2Pubsub2IsAsync",fh,void 0);
x("ytPubsub2Pubsub2SkipSubKey",null,void 0);function gh(a,b){var c=hh();c&&c.publish.call(c,a.toString(),a,b)}
function ih(a){var b=jh,c=hh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=z("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(dh[d])try{if(f&&b instanceof bh&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.F){var l=new h;h.F=l.version}var p=h.F}catch(n){}if(!p||k.version!=p)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Sa(k.args))}catch(n){throw n.message="yt.pubsub2.Data.deserialize(): "+n.message,n;}}catch(n){throw n.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+n.message,n;}a.call(window,f)}catch(n){je(n)}},fh[b.toString()]?z("yt.scheduler.instance")?yf(g):R(g,0):g())});
dh[d]=!0;eh[b.toString()]||(eh[b.toString()]=[]);eh[b.toString()].push(d);return d}
function kh(){var a=lh,b=ih(function(c){a.apply(void 0,arguments);mh(b)});
return b}
function mh(a){var b=hh();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete dh[c]}))}
function hh(){return z("ytPubsub2Pubsub2Instance")}
;function nh(a){ah.call(this,1,arguments);this.csn=a}
t(nh,ah);var jh=new bh("screen-created",nh),oh=[],ph=0;function qh(a,b,c){b={csn:a,parentVe:Pg(b),childVes:Oa(c,function(e){return Pg(e)})};
c=r(c);for(var d=c.next();!d.done;d=c.next())d=Pg(d.value),(Ya(d)||!d.trackingParams&&!d.veType)&&Xe(Error("Child VE logged with no data"),"WARNING");c={ca:Yg(a),P:a};"UNDEFINED_CSN"==a?rh("visualElementAttached",b,c):Ag("visualElementAttached",b,Kg,c)}
function rh(a,b,c){oh.push({Ma:a,payload:b,options:c});ph||(ph=kh())}
function lh(a){if(oh){for(var b=r(oh),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Ag(c.Ma,c.payload,null,c.options));oh.length=0}ph=0}
;function sh(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||ab(b);this.assets=a.assets||{};this.attrs=a.attrs||ab(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
sh.prototype.clone=function(){var a=new sh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==Aa(c)?a[b]=ab(c):a[b]=c}return a};function th(){L.call(this);this.f=[]}
t(th,L);th.prototype.m=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.nb)}L.prototype.m.call(this)};var uh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function vh(a){a=a||"";if(window.spf){var b=a.match(uh);spf.style.load(a,b?b[1]:"",void 0)}else wh(a)}
function wh(a){var b=xh(a),c=document.getElementById(b),d=c&&bf(c,"loaded");d||c&&!d||(c=yh(a,b,function(){bf(c,"loaded")||($e(c),lf(b),R(Ia(mf,b),0))}))}
function yh(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ic(a);d.rel="stylesheet";d.href=mb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function xh(a){var b=ec(document,"A");Kb(b,new H(wb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Nb(a)}
;function zh(a,b,c,d){L.call(this);var e=this;this.l=this.X=a;this.U=b;this.w=!1;this.api={};this.V=this.G=null;this.H=new N;Rc(this,Ia(Sc,this.H));this.i={};this.R=this.W=this.h=this.ba=this.f=null;this.K=!1;this.j=this.B=null;this.Y={};this.ta=["onReady"];this.aa=null;this.ja=NaN;this.S={};this.o=d;Ah(this);this.Z("WATCH_LATER_VIDEO_ADDED",this.Ja.bind(this));this.Z("WATCH_LATER_VIDEO_REMOVED",this.Ka.bind(this));this.Z("onAdAnnounce",this.va.bind(this));this.ua=new th(this);Rc(this,Ia(Sc,this.ua));
this.T=0;c?this.T=R(function(){e.loadNewVideoConfig(c)},0):d&&(Bh(this),Ch(this))}
t(zh,L);m=zh.prototype;m.getId=function(){return this.U};
m.loadNewVideoConfig=function(a){if(!this.g){this.T&&(S(this.T),this.T=0);a instanceof sh||(a=new sh(a));this.ba=a;this.f=a.clone();Bh(this);this.W||(this.W=Dh(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=vc(Number(a)||a);if(a=this.f.attrs.height)this.l.style.height=vc(Number(a)||a);Ch(this);this.w&&Eh(this)}};
function Bh(a){var b;a.o?b=a.o.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.U,a.f.attrs.id=a.U);a.l.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
m.ya=function(){return this.ba};
function Eh(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Fh(a){var b=!0,c=Gh(a);c&&a.f&&(a=Hh(a),b=bf(c,"version")===a);return b&&!!z("yt.player.Application.create")}
function Ch(a){if(!a.g&&!a.K){var b=Fh(a);if(b&&"html5"==(Gh(a)?"html5":null))a.R="html5",a.w||Ih(a);else if(Jh(a),a.R="html5",b&&a.j)a.X.appendChild(a.j),Ih(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.B=function(){c=!0;var d=z("yt.player.Application.create"),e=a.f?a.f.clone():void 0;d(a.X,e,a.o);Ih(a)};
a.K=!0;b?a.B():(qf(Hh(a),a.B),vh(a.o?a.o.cssUrl:a.f.assets.css),Kh(a)&&!c&&x("yt.player.Application.create",null,void 0))}}}
function Gh(a){var b=ac(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function Ih(a){if(!a.g){var b=Gh(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||Lh(a)):a.ja=R(function(){Ih(a)},50)}}
function Lh(a){Ah(a);a.w=!0;var b=Gh(a);b.addEventListener&&(a.G=Mh(a,b,"addEventListener"));b.removeEventListener&&(a.V=Mh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Mh(a,b,e))}for(var f in a.i)a.G(f,a.i[f]);Eh(a);a.W&&a.W(a.api);a.H.M("onReady",a.api)}
function Mh(a,b,c){var d=b[c];return function(){try{return a.aa=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.aa=e,ke(e))}}}
function Ah(a){a.w=!1;if(a.V)for(var b in a.i)a.V(b,a.i[b]);for(var c in a.S)S(parseInt(c,10));a.S={};a.G=null;a.V=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Z.bind(a);a.api.removeEventListener=a.Pa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.za.bind(a);a.api.getPlayerType=a.Aa.bind(a);a.api.getCurrentVideoConfig=a.ya.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ia.bind(a)}
m.Ia=function(){return this.w};
m.Z=function(a,b){var c=this,d=Dh(this,b);if(d){if(!(0<=Ma(this.ta,a)||this.i[a])){var e=Nh(this,a);this.G&&this.G(a,e)}this.H.subscribe(a,d);"onReady"==a&&this.w&&R(function(){d(c.api)},0)}};
m.Pa=function(a,b){if(!this.g){var c=Dh(this,b);c&&Jd(this.H,a,c)}};
function Dh(a,b){var c=b;if("string"==typeof b){if(a.Y[b])return a.Y[b];c=function(){var d=z(b);d&&d.apply(w,arguments)};
a.Y[b]=c}return c?c:null}
function Nh(a,b){var c="ytPlayer"+b+a.U;a.i[b]=c;w[c]=function(d){var e=R(function(){if(!a.g){a.H.M(b,d);var f=a.S,g=String(e);g in f&&delete f[g]}},0);
Za(a.S,String(e))};
return c}
m.va=function(a){lf("a11y-announce",a)};
m.Ja=function(a){lf("WATCH_LATER_VIDEO_ADDED",a)};
m.Ka=function(a){lf("WATCH_LATER_VIDEO_REMOVED",a)};
m.Aa=function(){return this.R||(Gh(this)?"html5":null)};
m.za=function(){return this.aa};
function Jh(a){a.cancel();Ah(a);a.R=null;a.f&&(a.f.loaded=!1);var b=Gh(a);b&&(Fh(a)||!Kh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.X;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&wf(Hh(this),this.B);S(this.ja);this.K=!1};
m.m=function(){Jh(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){je(b)}this.Y=null;for(var a in this.i)w[this.i[a]]=null;this.ba=this.f=this.api=null;delete this.X;delete this.l;L.prototype.m.call(this)};
function Kh(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Hh(a){return a.o?a.o.jsUrl:a.f.assets.js}
;var Oh={},Ph="player_uid_"+(1E9*Math.random()>>>0);function Qh(a){delete Oh[a.getId()]}
;var Rh=window,X=Rh.performance||Rh.mozPerformance||Rh.msPerformance||Rh.webkitPerformance||{};function Sh(a,b){ah.call(this,1,arguments)}
t(Sh,ah);function Th(a,b){ah.call(this,1,arguments)}
t(Th,ah);var Uh=new bh("aft-recorded",Sh),Vh=new bh("timing-sent",Th);var Wh=!1;function Xh(){var a=Yh(void 0);if(a.aft)return a.aft;for(var b=P("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function Zh(a){var b;(b=z("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ka("ytcsi."+(a||"")+"data_",b));return b}
function $h(){var a=Zh(void 0);a.info||(a.info={});return a.info}
function Yh(a){a=Zh(a);a.tick||(a.tick={});return a.tick}
function ai(){var a=Zh(void 0).nonce;a||(a=Mg(),Zh(void 0).nonce=a);return a}
function bi(){var a=Yh(""),b=Xh();b&&!Wh&&(gh(Uh,new Sh(Math.round(b-a._start),void 0)),Wh=!0)}
;function ci(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!di(a)||c.some(function(e){return!di(e)}))throw Error("Only objects may be merged.");
c=r(c);for(d=c.next();!d.done;d=c.next())ei(a,d.value);return a}
function ei(a,b){for(var c in b)if(di(b[c])){if(c in a&&!di(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});ei(a[c],b[c])}else if(fi(b[c])){if(c in a&&!fi(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);gi(a[c],b[c])}else a[c]=b[c];return a}
function gi(a,b){for(var c=r(b),d=c.next();!d.done;d=c.next())d=d.value,di(d)?a.push(ei({},d)):fi(d)?a.push(gi([],d)):a.push(d);return a}
function di(a){return"object"===typeof a&&!Array.isArray(a)}
function fi(a){return"object"===typeof a&&Array.isArray(a)}
;function hi(){var a=z("ytcsi.debug");a||(a=[],x("ytcsi.debug",a,void 0),x("ytcsi.reference",{},void 0));return a}
function ii(){var a=z("ytcsi.reference");a||(hi(),a=z("ytcsi.reference"));if(a[""])return a[""];var b={timerName:"",info:{},tick:{}};hi().push(b);return a[""]=b}
;function ji(a,b,c){c=void 0===c?{}:c;var d=Kg;P("ytLoggingEventsDefaultDisabled",!1)&&Kg==Kg&&(d=null);Ag(a,b,d,c)}
;var ki=z("ytLoggingLatencyUsageStats_")||{};x("ytLoggingLatencyUsageStats_",ki,void 0);function li(){this.f=0}
function mi(){li.f||(li.f=new li);return li.f}
li.prototype.tick=function(a,b,c){ni(this,"tick_"+a+"_"+b)||ji("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
li.prototype.info=function(a,b){var c=Object.keys(a).join("");ni(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,ji("latencyActionInfo",a))};
function ni(a,b){ki[b]=ki[b]||{count:0};var c=ki[b];c.count++;c.time=T();a.f||(a.f=zf(a.g,0,5E3));if(5<c.count){if(6===c.count&&1>1E5*Math.random())if(c=new Te("CSI data exceeded logging limit with key"),c.params={key:b},0===b.indexOf("info")){var d=z("yt.logging.errors.log");d?d(c,"WARNING",void 0,void 0,void 0,void 0):(d=be(),d.push([c,"WARNING",void 0,void 0,void 0,void 0]),O("ERRORS",d))}else(d=z("yt.logging.errors.log"))?d(c,"ERROR",void 0,void 0,void 0,void 0):(d=be(),d.push([c,"ERROR",void 0,
void 0,void 0,void 0]),O("ERRORS",d));return!0}return!1}
li.prototype.g=function(){var a=T(),b;for(b in ki)ki[b]&&6E4<a-ki[b].time&&delete ki[b];this&&(this.f=0)};var Y={},oi=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="getHomeRequestId",Y.GetSearch_rid="getSearchRequestId",Y.GetPlayer_rid="getPlayerRequestId",Y.GetWatchNext_rid="getWatchNextRequestId",Y.GetBrowse_rid=
"getBrowseRequestId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.prt=
"playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="mwebInfo.getSettingsRequestId",Y.GetTrending_rid="mwebInfo.getTrendingRequestId",Y),pi=
"isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),qi={},ri=(qi.mver="MEASUREMENT_VERSION_",qi.pis="PLAYER_INITIALIZED_STATE_",qi.yt_pt="LATENCY_PLAYER_",qi.pa="LATENCY_ACTION_",qi.yt_vst="VIDEO_STREAM_TYPE_",qi),si="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function ti(){return!!P("FORCE_CSI_ON_GEL",!1)||Q("csi_on_gel")||!!Zh(void 0).useGel}
function ui(){var a=Zh(void 0);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;C(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||ya,X);function vi(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function wi(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return xi(a)}
function xi(a,b,c){if(B(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function yi(a,b,c,d){if(B(a)&&!Ba(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function zi(a){a=void 0===a?!1:a;L.call(this);this.f=new N(a);Rc(this,Ia(Sc,this.f))}
E(zi,L);zi.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
zi.prototype.j=function(a,b){this.g||this.f.M.apply(this.f,arguments)};function Ai(a,b,c){zi.call(this);this.h=a;this.i=b;this.l=c}
t(Ai,zi);function Bi(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(Dd(a),d.i))}}
Ai.prototype.m=function(){this.i=this.h=null;zi.prototype.m.call(this)};function Ci(a){L.call(this);this.f=a;this.f.subscribe("command",this.ra,this);this.h={};this.j=!1}
t(Ci,L);m=Ci.prototype;m.start=function(){this.j||this.g||(this.j=!0,Bi(this.f,"RECEIVING"))};
m.ra=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.Ra,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Di(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=Ei(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=Fi(a,c))&&this.j&&!this.g&&Bi(this.f,a,c))}}};
m.Ra=function(a,b){this.j&&!this.g&&Bi(this.f,a,this.ea(a,b))};
m.ea=function(a,b){if(null!=b)return{value:b}};
function Di(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.m=function(){var a=this.f;a.g||Jd(a.f,"command",this.ra,this);this.f=null;for(var b in this.h)Di(this,b);L.prototype.m.call(this)};function Gi(a,b){Ci.call(this,b);this.i=a;this.start()}
t(Gi,Ci);Gi.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
Gi.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function Ei(a,b){switch(a){case "loadVideoById":return b=xi(b),[b];case "cueVideoById":return b=xi(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=yi(b),[b];case "cuePlaylist":return b=yi(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Fi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Gi.prototype.ea=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ci.prototype.ea.call(this,a,b)};
Gi.prototype.m=function(){Ci.prototype.m.call(this);delete this.i};function Hi(a,b,c){L.call(this);var d=this;c=c||P("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.w="*";this.i=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.o=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.w=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=Ma(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.o)}
t(Hi,L);Hi.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.w)}catch(e){ke(e)}}};
Hi.prototype.m=function(){window.removeEventListener("message",this.o);L.prototype.m.call(this)};function Ii(){var a=this.g=new Hi(!!P("WIDGET_ID_ENFORCE")),b=C(this.Oa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=P("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=Ii.prototype;m.Oa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,Ji(this,a)),this.j[a]=!0)):this.ma(a,b,c)};
m.ma=function(){};
function Ji(a,b){return C(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.xa=function(){this.l=!0;this.sendMessage("initialDelivery",this.fa());this.sendMessage("onReady");G(this.i,this.sa,this);this.i=[]};
m.fa=function(){return null};
function Ki(a,b){a.sendMessage("infoDelivery",b)}
m.sa=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.sa({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function Li(a){Ii.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.La,this));this.addEventListener("onVideoProgress",C(this.Va,this));this.addEventListener("onVolumeChange",C(this.Wa,this));this.addEventListener("onApiChange",C(this.Qa,this));this.addEventListener("onPlaybackQualityChange",C(this.Sa,this));this.addEventListener("onPlaybackRateChange",C(this.Ta,this));this.addEventListener("onStateChange",C(this.Ua,this));this.addEventListener("onWebglSettingsChanged",C(this.Xa,
this))}
t(Li,Ii);m=Li.prototype;m.ma=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&vi(a)){var d=b;if(B(d[0])&&!Ba(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=xi.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=wi.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=yi.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);vi(a)&&Ki(this,this.fa())}};
m.La=function(){var a=C(this.xa,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.fa=function(){if(!this.f)return null;var a=this.f.getApiInterface();Ra(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0==e.search("get")||0==e.search("is")){var f=0;0==e.search("get")?f=3:0==e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
m.Ua=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Ki(this,a)};
m.Sa=function(a){Ki(this,{playbackQuality:a})};
m.Ta=function(a){Ki(this,{playbackRate:a})};
m.Qa=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Wa=function(){Ki(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Va=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Ki(this,a)};
m.Xa=function(){var a={sphericalProperties:this.f.getSphericalProperties()};Ki(this,a)};
m.dispose=function(){Ii.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function Mi(a,b,c){L.call(this);this.f=a;this.i=c;this.j=V(window,"message",C(this.l,this));this.h=new Ai(this,a,b);Rc(this,Ia(Sc,this.h))}
t(Mi,L);Mi.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
Mi.prototype.m=function(){Xf(this.j);this.f=null;L.prototype.m.call(this)};function Ni(){var a=ab(Oi),b;return nd(new M(function(c,d){a.onSuccess=function(e){xe(e)?c(e):d(new Pi("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Pi("Unknown request error","net.unknown",e))};
a.O=function(e){d(new Pi("Request timed out","net.timeout",e))};
b=He("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof od&&b.abort();
return ld(c)})}
function Pi(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(Pi,F);function Qi(){this.g=0;this.f=null}
Qi.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),gd(a)?a:Ri(a)):2===this.g&&b?(a=b.call(c,this.f),gd(a)?a:Si(a)):this};
Qi.prototype.getValue=function(){return this.f};
Qi.prototype.$goog_Thenable=!0;function Si(a){var b=new Qi;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Ri(a){var b=new Qi;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Ti(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Ui;this.isTimeout=a instanceof Pi&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof od}
t(Ti,F);Ti.prototype.name="BiscottiError";function Ui(){F.call(this,"Biscotti ID is missing from server")}
t(Ui,F);Ui.prototype.name="BiscottiMissingError";var Oi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Vi=null;function ee(){if("1"===Va(ce(),"args","privembed"))return ld(Error("Biscotti ID is not available in private embed mode"));Vi||(Vi=nd(Ni().then(Wi),function(a){return Xi(2,a)}));
return Vi}
function Wi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Ui;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Ui;a=a.id;fe(a);Vi=Ri(a);Yi(18E5,2);return a}
function Xi(a,b){var c=new Ti(b);fe("");Vi=Si(c);0<a&&Yi(12E4,a-1);throw c;}
function Yi(a,b){R(function(){nd(Ni().then(Wi,function(c){return Xi(b,c)}),ya)},a)}
function Zi(){try{var a=z("yt.ads.biscotti.getId_");return a?a():ee()}catch(b){return ld(b)}}
;function $i(a){if("1"!==Va(ce(),"args","privembed")){a&&de();try{Zi().then(function(){},function(){}),R($i,18E5)}catch(b){je(b)}}}
;var Z=z("ytglobal.prefsUserPrefsPrefs_")||{};x("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function aj(){this.f=P("ALT_PREF_COOKIE_NAME","PREF");var a=Xb.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
m=aj.prototype;m.get=function(a,b){bj(a);cj(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){bj(a);cj(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
m.remove=function(a){bj(a);cj(a);delete Z[a]};
m.save=function(){Eg(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Z)delete Z[a]};
m.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function cj(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function bj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function dj(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
za(aj);var ej=null,fj=null,gj=null,hj={};function ij(a){var b=a.id;a=a.ve_type;var c=Qg++;a=new Og({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});hj[b]=a;b=Wg();c=Ug();b&&c&&qh(b,c,[a])}
function jj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(Zg(b,a),a=Ug()))for(var c in hj){var d=hj[c];d&&qh(b,a,[d])}}
function kj(a){hj[a.id]=new Og({trackingParams:a.tracking_params})}
function lj(a){var b=Wg();a=hj[a.id];if(b&&a){a={csn:b,ve:Pg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var c={ca:Yg(b),P:b};"UNDEFINED_CSN"==b?rh("visualElementGestured",a,c):Ag("visualElementGestured",a,Kg,c)}}
function mj(a){a=a.ids;var b=Wg();if(b)for(var c=0;c<a.length;c++){var d=hj[a[c]];if(d){var e=b;d={csn:e,ve:Pg(d),eventType:1};var f={ca:Yg(e),P:e};"UNDEFINED_CSN"==e?rh("visualElementShown",d,f):Ag("visualElementShown",d,Kg,f)}}}
;x("yt.setConfig",O,void 0);x("yt.config.set",O,void 0);x("yt.setMsg",Ze,void 0);x("yt.msgs.set",Ze,void 0);x("yt.logging.errors.log",Xe,void 0);
x("writeEmbed",function(){var a=P("PLAYER_CONFIG",void 0);$i(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=P("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);P("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?ac(b):b;var e=Ph+"_"+Da(b),f=Oh[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new zh(b,e,a,void 0),Oh[e]=f,lf("player-added",f.api),Rc(f,Ia(Qh,f)));a=f.api;ej=a;a.addEventListener("onScreenChanged",jj);a.addEventListener("onLogClientVeCreated",ij);a.addEventListener("onLogServerVeCreated",kj);a.addEventListener("onLogVeClicked",lj);a.addEventListener("onLogVesShown",mj);d=P("POST_MESSAGE_ID","player");P("ENABLE_JS_API")?gj=new Li(a):P("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(fj=new Mi(window.parent,d,c),gj=new Gi(a,fj.h));
c=P("BG_P",void 0);Nf(c)&&(P("BG_I")||P("BG_IU"))&&(Jf=!0,If.initialize(P("BG_I",null),P("BG_IU",null),c,Mf,void 0));Df()},void 0);
x("yt.www.watch.ads.restrictioncookie.spr",function(a){Pe(a+"mac_204?action_fcts=1");return!0},void 0);
var nj=ie(function(){var a=Yh(void 0),b;(b=!Q("use_first_tick"))||(b=!("ol"in Yh(void 0)));if(b&&(b="ol",X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b)),b=T(),a.ol=b,a=ui(),a.gelTicks&&(a.gelTicks.tick_ol=!0),T(),ti()?(ii().tick.ol=T(),a=ai(),mi().tick("ol",a,void 0),bi(),a=!0):a=!1,!a)){if(!z("yt.timing.pingSent_")&&(b=P("TIMING_ACTION",void 0),a=Yh(void 0),z("ytglobal.timingready_")&&b&&a._start&&Xh())){bi();b=!0;var c=P("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in
a)){b=!1;break}if(b&&!ti()){d=Yh(void 0);c=$h();e=d._start;var f=P("CSI_SERVICE_NAME","youtube");b={v:2,s:f,action:P("TIMING_ACTION",void 0)};a=c.srt;void 0!==d.srt&&delete c.srt;if(c.h5jse){var g=window.location.protocol+z("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?c.h5jse=Math.round(c.h5jse-g.responseEnd):delete c.h5jse}d.aft=Xh();var h=Yh(void 0);g=h.pbr;var k=h.vc;h=h.pbs;if(g&&k&&h&&g<k&&k<h&&$h().yt_pvis&&"youtube"==f){$h().yt_lt="hot_bg";if(ti()){f="hot_bg";
g=ui();g.gelInfos?g.gelInfos.info_yt_lt=!0:(k={},g.gelInfos=(k.info_yt_lt=!0,k));if("yt_lt"in oi){g=oi.yt_lt;0<=Ma(pi,g)&&(f=!!f);"yt_lt"in ri&&"string"===typeof f&&(f=ri.yt_lt+f.toUpperCase());g=g.split(".");h=k={};for(var l=0;l<g.length-1;l++){var p=g[l];h[p]={};h=h[p]}h[g[g.length-1]]=f;f=ci({},k)}else 0<=Ma(si,"yt_lt")||(f=new Te("Unknown label logged with GEL CSI"),f.params={label:"yt_lt"},ke(f)),f=void 0;f&&ti()&&(g=ii(),ci(g.info,f),g=ui(),"gelInfos"in g||(g.gelInfos={}),ci(g.gelInfos,f),g=
ai(),mi().info(f,g))}else ii().info.yt_lt="hot_bg";f=d.vc;g=d.pbs;delete d.aft;c.aft=Math.round(g-f)}for(var n in c)"_"!=n.charAt(0)&&(b[n]=c[n]);d.ps=T();n={};f=[];for(var v in d)"_"!=v.charAt(0)&&(g=Math.round(d[v]-e),n[v]=g,f.push(v+"."+g));b.rt=f.join(",");(v=z("ytdebug.logTiming"))&&v(b,n);v=!!c.ap;Q("debug_csi_data")&&(c=z("yt.timing.csiData"),c||(c=[],Ka("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:b}));c="";for(var q in b)b.hasOwnProperty(q)&&(c+="&"+q+"="+b[q]);q=
"/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&v){var y=void 0===y?"":y;Se(q,y)||Pe(q,void 0,void 0,void 0,y)}else Pe(q);x("yt.timing.pingSent_",!0,void 0);gh(Vh,new Th(n.aft+(a||0),void 0))}}ii().tick.ol=T()}y=aj.getInstance();v=!!((dj("f"+(Math.floor(119/31)+1))||0)&67108864);q=1<window.devicePixelRatio;document.body&&Wc(document.body,"exp-invert-logo")&&(q&&!Wc(document.body,"inverted-hdpi")?(n=document.body,n.classList?n.classList.add("inverted-hdpi"):Wc(n,"inverted-hdpi")||
(a=Uc(n),Vc(n,a+(0<a.length?" inverted-hdpi":"inverted-hdpi")))):!q&&Wc(document.body,"inverted-hdpi")&&Xc());v!=q&&(v="f"+(Math.floor(119/31)+1),n=dj(v)||0,n=q?n|67108864:n&-67108865,0==n?delete Z[v]:(q=n.toString(16),Z[v]=q.toString()),y.save())}),oj=ie(function(){var a=ej;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();P("PL_ATT")&&If.dispose();a=0;for(var b=Bf.length;a<b;a++){var c=Bf[a];if(!isNaN(c)){var d=z("yt.scheduler.instance.cancelJob");d?d(c):S(c)}}Bf.length=0;vf("//static.doubleclick.net/instream/ad_status.js");Cf=!1;O("DCLKSTAT",0);Tc(gj,fj);if(a=ej)a.removeEventListener("onScreenChanged",jj),a.removeEventListener("onLogClientVeCreated",ij),a.removeEventListener("onLogServerVeCreated",kj),a.removeEventListener("onLogVeClicked",lj),a.removeEventListener("onLogVesShown",
mj),a.destroy();hj={}});
window.addEventListener?(window.addEventListener("load",nj),window.addEventListener("unload",oj)):window.attachEvent&&(window.attachEvent("onload",nj),window.attachEvent("onunload",oj));Ka("yt.abuse.player.botguardInitialized",z("yt.abuse.player.botguardInitialized")||Of);Ka("yt.abuse.player.invokeBotguard",z("yt.abuse.player.invokeBotguard")||Pf);Ka("yt.abuse.dclkstatus.checkDclkStatus",z("yt.abuse.dclkstatus.checkDclkStatus")||Ef);
Ka("yt.player.exports.navigate",z("yt.player.exports.navigate")||$g);Ka("yt.util.activity.init",z("yt.util.activity.init")||ag);Ka("yt.util.activity.getTimeSinceActive",z("yt.util.activity.getTimeSinceActive")||dg);Ka("yt.util.activity.setTimestamp",z("yt.util.activity.setTimestamp")||bg);}).call(this);
