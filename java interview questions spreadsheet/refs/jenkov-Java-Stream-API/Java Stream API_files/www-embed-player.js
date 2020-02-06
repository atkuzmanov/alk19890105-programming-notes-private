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
var la=ka(this);function v(a,b){if(b){for(var c=la,d=a.split("."),e=0;e<d.length-1;e++){var f=d[e];f in c||(c[f]={});c=c[f]}d=d[d.length-1];e=c[d];f=b(e);f!=e&&null!=f&&ja(c,d,{configurable:!0,writable:!0,value:f})}}
function na(a,b,c){if(null==a)throw new TypeError("The 'this' value for String.prototype."+c+" must not be null or undefined");if(b instanceof RegExp)throw new TypeError("First argument to String.prototype."+c+" must not be a regular expression");return a+""}
v("String.prototype.endsWith",function(a){return a?a:function(b,c){var d=na(this,b,"endsWith");b+="";void 0===c&&(c=d.length);for(var e=Math.max(0,Math.min(c|0,d.length)),f=b.length;0<f&&0<e;)if(d[--e]!=b[--f])return!1;return 0>=f}});
v("String.prototype.startsWith",function(a){return a?a:function(b,c){var d=na(this,b,"startsWith");b+="";for(var e=d.length,f=b.length,g=Math.max(0,Math.min(c|0,d.length)),h=0;h<f&&g<e;)if(d[g++]!=b[h++])return!1;return h>=f}});
function oa(){oa=function(){};
la.Symbol||(la.Symbol=pa)}
function qa(a,b){this.f=a;ja(this,"description",{configurable:!0,writable:!0,value:b})}
qa.prototype.toString=function(){return this.f};
var pa=function(){function a(c){if(this instanceof a)throw new TypeError("Symbol is not a constructor");return new qa("jscomp_symbol_"+(c||"")+"_"+b++,c)}
var b=0;return a}();
function ra(){oa();var a=la.Symbol.iterator;a||(a=la.Symbol.iterator=la.Symbol("Symbol.iterator"));"function"!=typeof Array.prototype[a]&&ja(Array.prototype,a,{configurable:!0,writable:!0,value:function(){return sa(aa(this))}});
ra=function(){}}
function sa(a){ra();a={next:a};a[la.Symbol.iterator]=function(){return this};
return a}
function w(a,b){return Object.prototype.hasOwnProperty.call(a,b)}
var ta="function"==typeof Object.assign?Object.assign:function(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(d)for(var e in d)w(d,e)&&(a[e]=d[e])}return a};
v("Object.assign",function(a){return a||ta});
v("WeakMap",function(a){function b(k){this.f=(h+=Math.random()+1).toString();if(k){k=r(k);for(var l;!(l=k.next()).done;)l=l.value,this.set(l[0],l[1])}}
function c(){}
function d(k){var l=typeof k;return"object"===l&&null!==k||"function"===l}
function e(k){if(!w(k,g)){var l=new c;ja(k,g,{value:l})}}
function f(k){var l=Object[k];l&&(Object[k]=function(n){if(n instanceof c)return n;e(n);return l(n)})}
if(function(){if(!a||!Object.seal)return!1;try{var k=Object.seal({}),l=Object.seal({}),n=new a([[k,2],[l,3]]);if(2!=n.get(k)||3!=n.get(l))return!1;n["delete"](k);n.set(l,4);return!n.has(k)&&4==n.get(l)}catch(p){return!1}}())return a;
var g="$jscomp_hidden_"+Math.random();f("freeze");f("preventExtensions");f("seal");var h=0;b.prototype.set=function(k,l){if(!d(k))throw Error("Invalid WeakMap key");e(k);if(!w(k,g))throw Error("WeakMap key fail: "+k);k[g][this.f]=l;return this};
b.prototype.get=function(k){return d(k)&&w(k,g)?k[g][this.f]:void 0};
b.prototype.has=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)};
b.prototype["delete"]=function(k){return d(k)&&w(k,g)&&w(k[g],this.f)?delete k[g][this.f]:!1};
return b});
v("Map",function(a){function b(){var h={};return h.previous=h.next=h.head=h}
function c(h,k){var l=h.f;return sa(function(){if(l){for(;l.head!=h.f;)l=l.previous;for(;l.next!=l.head;)return l=l.next,{done:!1,value:k(l)};l=null}return{done:!0,value:void 0}})}
function d(h,k){var l=k&&typeof k;"object"==l||"function"==l?f.has(k)?l=f.get(k):(l=""+ ++g,f.set(k,l)):l="p_"+k;var n=h.g[l];if(n&&w(h.g,l))for(var p=0;p<n.length;p++){var u=n[p];if(k!==k&&u.key!==u.key||k===u.key)return{id:l,list:n,index:p,u:u}}return{id:l,list:n,index:-1,u:void 0}}
function e(h){this.g={};this.f=b();this.size=0;if(h){h=r(h);for(var k;!(k=h.next()).done;)k=k.value,this.set(k[0],k[1])}}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var h=Object.seal({x:4}),k=new a(r([[h,"s"]]));if("s"!=k.get(h)||1!=k.size||k.get({x:4})||k.set({x:4},"t")!=k||2!=k.size)return!1;var l=k.entries(),n=l.next();if(n.done||n.value[0]!=h||"s"!=n.value[1])return!1;n=l.next();return n.done||4!=n.value[0].x||"t"!=n.value[1]||!l.next().done?!1:!0}catch(p){return!1}}())return a;
ra();var f=new WeakMap;e.prototype.set=function(h,k){h=0===h?0:h;var l=d(this,h);l.list||(l.list=this.g[l.id]=[]);l.u?l.u.value=k:(l.u={next:this.f,previous:this.f.previous,head:this.f,key:h,value:k},l.list.push(l.u),this.f.previous.next=l.u,this.f.previous=l.u,this.size++);return this};
e.prototype["delete"]=function(h){h=d(this,h);return h.u&&h.list?(h.list.splice(h.index,1),h.list.length||delete this.g[h.id],h.u.previous.next=h.u.next,h.u.next.previous=h.u.previous,h.u.head=null,this.size--,!0):!1};
e.prototype.clear=function(){this.g={};this.f=this.f.previous=b();this.size=0};
e.prototype.has=function(h){return!!d(this,h).u};
e.prototype.get=function(h){return(h=d(this,h).u)&&h.value};
e.prototype.entries=function(){return c(this,function(h){return[h.key,h.value]})};
e.prototype.keys=function(){return c(this,function(h){return h.key})};
e.prototype.values=function(){return c(this,function(h){return h.value})};
e.prototype.forEach=function(h,k){for(var l=this.entries(),n;!(n=l.next()).done;)n=n.value,h.call(k,n[1],n[0],this)};
e.prototype[Symbol.iterator]=e.prototype.entries;var g=0;return e});
v("Set",function(a){function b(c){this.f=new Map;if(c){c=r(c);for(var d;!(d=c.next()).done;)this.add(d.value)}this.size=this.f.size}
if(function(){if(!a||"function"!=typeof a||!a.prototype.entries||"function"!=typeof Object.seal)return!1;try{var c=Object.seal({x:4}),d=new a(r([c]));if(!d.has(c)||1!=d.size||d.add(c)!=d||1!=d.size||d.add({x:4})!=d||2!=d.size)return!1;var e=d.entries(),f=e.next();if(f.done||f.value[0]!=c||f.value[1]!=c)return!1;f=e.next();return f.done||f.value[0]==c||4!=f.value[0].x||f.value[1]!=f.value[0]?!1:e.next().done}catch(g){return!1}}())return a;
ra();b.prototype.add=function(c){c=0===c?0:c;this.f.set(c,c);this.size=this.f.size;return this};
b.prototype["delete"]=function(c){c=this.f["delete"](c);this.size=this.f.size;return c};
b.prototype.clear=function(){this.f.clear();this.size=0};
b.prototype.has=function(c){return this.f.has(c)};
b.prototype.entries=function(){return this.f.entries()};
b.prototype.values=function(){return this.f.values()};
b.prototype.keys=b.prototype.values;b.prototype[Symbol.iterator]=b.prototype.values;b.prototype.forEach=function(c,d){var e=this;this.f.forEach(function(f){return c.call(d,f,f,e)})};
return b});
v("Promise",function(a){function b(g){this.g=0;this.h=void 0;this.f=[];var h=this.i();try{g(h.resolve,h.reject)}catch(k){h.reject(k)}}
function c(){this.f=null}
function d(g){return g instanceof b?g:new b(function(h){h(g)})}
if(a)return a;c.prototype.g=function(g){if(null==this.f){this.f=[];var h=this;this.h(function(){h.j()})}this.f.push(g)};
var e=la.setTimeout;c.prototype.h=function(g){e(g,0)};
c.prototype.j=function(){for(;this.f&&this.f.length;){var g=this.f;this.f=[];for(var h=0;h<g.length;++h){var k=g[h];g[h]=null;try{k()}catch(l){this.i(l)}}}this.f=null};
c.prototype.i=function(g){this.h(function(){throw g;})};
b.prototype.i=function(){function g(l){return function(n){k||(k=!0,l.call(h,n))}}
var h=this,k=!1;return{resolve:g(this.B),reject:g(this.j)}};
b.prototype.B=function(g){if(g===this)this.j(new TypeError("A Promise cannot resolve to itself"));else if(g instanceof b)this.D(g);else{a:switch(typeof g){case "object":var h=null!=g;break a;case "function":h=!0;break a;default:h=!1}h?this.A(g):this.l(g)}};
b.prototype.A=function(g){var h=void 0;try{h=g.then}catch(k){this.j(k);return}"function"==typeof h?this.F(h,g):this.l(g)};
b.prototype.j=function(g){this.w(2,g)};
b.prototype.l=function(g){this.w(1,g)};
b.prototype.w=function(g,h){if(0!=this.g)throw Error("Cannot settle("+g+", "+h+"): Promise already settled in state"+this.g);this.g=g;this.h=h;this.m()};
b.prototype.m=function(){if(null!=this.f){for(var g=0;g<this.f.length;++g)f.g(this.f[g]);this.f=null}};
var f=new c;b.prototype.D=function(g){var h=this.i();g.aa(h.resolve,h.reject)};
b.prototype.F=function(g,h){var k=this.i();try{g.call(h,k.resolve,k.reject)}catch(l){k.reject(l)}};
b.prototype.then=function(g,h){function k(u,q){return"function"==typeof u?function(y){try{l(u(y))}catch(K){n(K)}}:q}
var l,n,p=new b(function(u,q){l=u;n=q});
this.aa(k(g,l),k(h,n));return p};
b.prototype["catch"]=function(g){return this.then(void 0,g)};
b.prototype.aa=function(g,h){function k(){switch(l.g){case 1:g(l.h);break;case 2:h(l.h);break;default:throw Error("Unexpected state: "+l.g);}}
var l=this;null==this.f?f.g(k):this.f.push(k)};
b.resolve=d;b.reject=function(g){return new b(function(h,k){k(g)})};
b.race=function(g){return new b(function(h,k){for(var l=r(g),n=l.next();!n.done;n=l.next())d(n.value).aa(h,k)})};
b.all=function(g){var h=r(g),k=h.next();return k.done?d([]):new b(function(l,n){function p(y){return function(K){u[y]=K;q--;0==q&&l(u)}}
var u=[],q=0;do u.push(void 0),q++,d(k.value).aa(p(u.length-1),n),k=h.next();while(!k.done)})};
return b});
v("String.prototype.includes",function(a){return a?a:function(b,c){return-1!==na(this,b,"includes").indexOf(b,c||0)}});
var ua=function(){function a(){function c(){}
new c;Reflect.construct(c,[],function(){});
return new c instanceof c}
if("undefined"!=typeof Reflect&&Reflect.construct){if(a())return Reflect.construct;var b=Reflect.construct;return function(c,d,e){c=b(c,d);e&&Reflect.setPrototypeOf(c,e.prototype);return c}}return function(c,d,e){void 0===e&&(e=c);
e=ca(e.prototype||Object.prototype);return Function.prototype.apply.call(c,e,d)||e}}();
v("Reflect.construct",function(){return ua});
var x=this||self;function z(a,b,c){a=a.split(".");c=c||x;a[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+a[0]);for(var d;a.length&&(d=a.shift());)a.length||void 0===b?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=b}
var va=/^[\w+/_-]+[=]{0,2}$/,wa=null;function A(a,b){for(var c=a.split("."),d=b||x,e=0;e<c.length;e++)if(d=d[c[e]],null==d)return null;return d}
function xa(){}
function ya(a){a.ia=void 0;a.getInstance=function(){return a.ia?a.ia:a.ia=new a}}
function za(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}
function Aa(a){return"array"==za(a)}
function Ba(a){var b=za(a);return"array"==b||"object"==b&&"number"==typeof a.length}
function B(a){return"function"==za(a)}
function Ca(a){var b=typeof a;return"object"==b&&null!=a||"function"==b}
function Da(a){return Object.prototype.hasOwnProperty.call(a,Ea)&&a[Ea]||(a[Ea]=++Fa)}
var Ea="closure_uid_"+(1E9*Math.random()>>>0),Fa=0;function Ga(a,b,c){return a.call.apply(a.bind,arguments)}
function Ha(a,b,c){if(!a)throw Error();if(2<arguments.length){var d=Array.prototype.slice.call(arguments,2);return function(){var e=Array.prototype.slice.call(arguments);Array.prototype.unshift.apply(e,d);return a.apply(b,e)}}return function(){return a.apply(b,arguments)}}
function C(a,b,c){Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?C=Ga:C=Ha;return C.apply(null,arguments)}
function Ja(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var d=c.slice();d.push.apply(d,arguments);return a.apply(this,d)}}
var D=Date.now||function(){return+new Date};
function Ka(a,b){z(a,b,void 0)}
function E(a,b){function c(){}
c.prototype=b.prototype;a.L=b.prototype;a.prototype=new c;a.prototype.constructor=a}
;function F(a){if(Error.captureStackTrace)Error.captureStackTrace(this,F);else{var b=Error().stack;b&&(this.stack=b)}a&&(this.message=String(a))}
E(F,Error);F.prototype.name="CustomError";var La=Array.prototype.indexOf?function(a,b){return Array.prototype.indexOf.call(a,b,void 0)}:function(a,b){if("string"===typeof a)return"string"!==typeof b||1!=b.length?-1:a.indexOf(b,0);
for(var c=0;c<a.length;c++)if(c in a&&a[c]===b)return c;return-1},G=Array.prototype.forEach?function(a,b,c){Array.prototype.forEach.call(a,b,c)}:function(a,b,c){for(var d=a.length,e="string"===typeof a?a.split(""):a,f=0;f<d;f++)f in e&&b.call(c,e[f],f,a)},Ma=Array.prototype.filter?function(a,b){return Array.prototype.filter.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=[],e=0,f="string"===typeof a?a.split(""):a,g=0;g<c;g++)if(g in f){var h=f[g];
b.call(void 0,h,g,a)&&(d[e++]=h)}return d},Na=Array.prototype.map?function(a,b){return Array.prototype.map.call(a,b,void 0)}:function(a,b){for(var c=a.length,d=Array(c),e="string"===typeof a?a.split(""):a,f=0;f<c;f++)f in e&&(d[f]=b.call(void 0,e[f],f,a));
return d},Oa=Array.prototype.reduce?function(a,b,c){return Array.prototype.reduce.call(a,b,c)}:function(a,b,c){var d=c;
G(a,function(e,f){d=b.call(void 0,d,e,f,a)});
return d};
function Pa(a,b){a:{var c=a.length;for(var d="string"===typeof a?a.split(""):a,e=0;e<c;e++)if(e in d&&b.call(void 0,d[e],e,a)){c=e;break a}c=-1}return 0>c?null:"string"===typeof a?a.charAt(c):a[c]}
function Qa(a,b){var c=La(a,b);0<=c&&Array.prototype.splice.call(a,c,1)}
function Ra(a){var b=a.length;if(0<b){for(var c=Array(b),d=0;d<b;d++)c[d]=a[d];return c}return[]}
function Sa(a,b){for(var c=1;c<arguments.length;c++){var d=arguments[c];if(Ba(d)){var e=a.length||0,f=d.length||0;a.length=e+f;for(var g=0;g<f;g++)a[e+g]=d[g]}else a.push(d)}}
;var Ta=String.prototype.trim?function(a){return a.trim()}:function(a){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(a)[1]};
function Ua(a,b){if(b)a=a.replace(Va,"&amp;").replace(Wa,"&lt;").replace(Xa,"&gt;").replace(Ya,"&quot;").replace(Za,"&#39;").replace($a,"&#0;");else{if(!ab.test(a))return a;-1!=a.indexOf("&")&&(a=a.replace(Va,"&amp;"));-1!=a.indexOf("<")&&(a=a.replace(Wa,"&lt;"));-1!=a.indexOf(">")&&(a=a.replace(Xa,"&gt;"));-1!=a.indexOf('"')&&(a=a.replace(Ya,"&quot;"));-1!=a.indexOf("'")&&(a=a.replace(Za,"&#39;"));-1!=a.indexOf("\x00")&&(a=a.replace($a,"&#0;"))}return a}
var Va=/&/g,Wa=/</g,Xa=/>/g,Ya=/"/g,Za=/'/g,$a=/\x00/g,ab=/[\x00&<>"']/;var bb;a:{var cb=x.navigator;if(cb){var db=cb.userAgent;if(db){bb=db;break a}}bb=""};function eb(a,b){for(var c in a)b.call(void 0,a[c],c,a)}
function fb(a,b){var c=Ba(b),d=c?b:arguments;for(c=c?0:1;c<d.length;c++){if(null==a)return;a=a[d[c]]}return a}
function gb(a){var b=hb,c;for(c in b)if(a.call(void 0,b[c],c,b))return c}
function ib(a){for(var b in a)return!1;return!0}
function jb(a,b){if(null!==a&&b in a)throw Error('The object already contains the key "'+b+'"');a[b]=!0}
function kb(a,b){for(var c in a)if(!(c in b)||a[c]!==b[c])return!1;for(var d in b)if(!(d in a))return!1;return!0}
function lb(a){var b={},c;for(c in a)b[c]=a[c];return b}
function mb(a){var b=za(a);if("object"==b||"array"==b){if(B(a.clone))return a.clone();b="array"==b?[]:{};for(var c in a)b[c]=mb(a[c]);return b}return a}
var nb="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ob(a,b){for(var c,d,e=1;e<arguments.length;e++){d=arguments[e];for(c in d)a[c]=d[c];for(var f=0;f<nb.length;f++)c=nb[f],Object.prototype.hasOwnProperty.call(d,c)&&(a[c]=d[c])}}
;function pb(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}
;function qb(a,b){this.f=a===rb&&b||"";this.g=sb}
qb.prototype.J=!0;qb.prototype.I=function(){return this.f};
function tb(){var a=ub;return a instanceof qb&&a.constructor===qb&&a.g===sb?a.f:"type_error:Const"}
var sb={},rb={},ub=new qb(rb,"");function vb(a,b){this.f=a===wb&&b||"";this.g=xb}
vb.prototype.J=!0;vb.prototype.I=function(){return this.f.toString()};
vb.prototype.ha=!0;vb.prototype.ea=function(){return 1};
function yb(a){if(a instanceof vb&&a.constructor===vb&&a.g===xb)return a.f;za(a);return"type_error:TrustedResourceUrl"}
var xb={},wb={};function H(a,b){this.f=a===zb&&b||"";this.g=Ab}
H.prototype.J=!0;H.prototype.I=function(){return this.f.toString()};
H.prototype.ha=!0;H.prototype.ea=function(){return 1};
function Bb(a){if(a instanceof H&&a.constructor===H&&a.g===Ab)return a.f;za(a);return"type_error:SafeUrl"}
var Cb=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;function Db(a){if(a instanceof H)return a;a="object"==typeof a&&a.J?a.I():String(a);Cb.test(a)||(a="about:invalid#zClosurez");return new H(zb,a)}
var Ab={},zb={};function Eb(){this.f="";this.h=Gb;this.g=null}
Eb.prototype.ha=!0;Eb.prototype.ea=function(){return this.g};
Eb.prototype.J=!0;Eb.prototype.I=function(){return this.f.toString()};
function Hb(a){if(a instanceof Eb&&a.constructor===Eb&&a.h===Gb)return a.f;za(a);return"type_error:SafeHtml"}
var Gb={};function Ib(a,b){var c=new Eb;c.f=a;c.g=b;return c}
Ib("<!DOCTYPE html>",0);var Jb=Ib("",0);Ib("<br>",0);function Kb(a,b){var c=b instanceof H?b:Db(b);a.href=Bb(c)}
function Lb(a,b){a.src=yb(b);if(null===wa)b:{var c=x.document;if((c=c.querySelector&&c.querySelector("script[nonce]"))&&(c=c.nonce||c.getAttribute("nonce"))&&va.test(c)){wa=c;break b}wa=""}c=wa;c&&a.setAttribute("nonce",c)}
;function Mb(a){return a=Ua(a,void 0)}
function Nb(a){for(var b=0,c=0;c<a.length;++c)b=31*b+a.charCodeAt(c)>>>0;return b}
;var Ob=-1!=bb.indexOf("Trident")||-1!=bb.indexOf("MSIE"),Pb;var Qb;if(x.document&&Ob){var Rb=x.document;Qb=Rb?Rb.documentMode:void 0}else Qb=void 0;Pb=Qb;var Sb={},Tb=null;var I=window;function Ub(a){this.f=a||{cookie:""}}
m=Ub.prototype;m.isEnabled=function(){return navigator.cookieEnabled};
m.set=function(a,b,c){var d=!1;if("object"===typeof c){var e=c.ub;d=c.secure||!1;var f=c.domain||void 0;var g=c.path||void 0;var h=c.ma}if(/[;=\s]/.test(a))throw Error('Invalid cookie name "'+a+'"');if(/[;\r\n]/.test(b))throw Error('Invalid cookie value "'+b+'"');void 0===h&&(h=-1);c=f?";domain="+f:"";g=g?";path="+g:"";d=d?";secure":"";h=0>h?"":0==h?";expires="+(new Date(1970,1,1)).toUTCString():";expires="+(new Date(D()+1E3*h)).toUTCString();this.f.cookie=a+"="+b+c+g+h+d+(null!=e?";samesite="+e:
"")};
m.get=function(a,b){for(var c=a+"=",d=(this.f.cookie||"").split(";"),e=0,f;e<d.length;e++){f=Ta(d[e]);if(0==f.lastIndexOf(c,0))return f.substr(c.length);if(f==a)return""}return b};
m.remove=function(a,b,c){var d=void 0!==this.get(a);this.set(a,"",{ma:0,path:b,domain:c});return d};
m.isEmpty=function(){return!this.f.cookie};
m.clear=function(){for(var a=(this.f.cookie||"").split(";"),b=[],c=[],d,e,f=0;f<a.length;f++)e=Ta(a[f]),d=e.indexOf("="),-1==d?(b.push(""),c.push(e)):(b.push(e.substring(0,d)),c.push(e.substring(d+1)));for(a=b.length-1;0<=a;a--)this.remove(b[a])};
var Vb=new Ub("undefined"==typeof document?null:document);function Wb(a){var b=A("window.location.href");null==a&&(a='Unknown Error of type "null/undefined"');if("string"===typeof a)return{message:a,name:"Unknown error",lineNumber:"Not available",fileName:b,stack:"Not available"};var c=!1;try{var d=a.lineNumber||a.line||"Not available"}catch(f){d="Not available",c=!0}try{var e=a.fileName||a.filename||a.sourceURL||x.$googDebugFname||b}catch(f){e="Not available",c=!0}return!c&&a.lineNumber&&a.fileName&&a.stack&&a.message&&a.name?a:(b=a.message,null==b&&(a.constructor&&
a.constructor instanceof Function?(a.constructor.name?b=a.constructor.name:(b=a.constructor,Xb[b]?b=Xb[b]:(b=String(b),Xb[b]||(c=/function\s+([^\(]+)/m.exec(b),Xb[b]=c?c[1]:"[Anonymous]"),b=Xb[b])),b='Unknown Error of type "'+b+'"'):b="Unknown Error of unknown type"),{message:b,name:a.name||"UnknownError",lineNumber:d,fileName:e,stack:a.stack||"Not available"})}
var Xb={};var Yb=!Ob||9<=Number(Pb);function Zb(a,b){this.x=void 0!==a?a:0;this.y=void 0!==b?b:0}
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
function bc(a,b){eb(b,function(c,d){c&&"object"==typeof c&&c.J&&(c=c.I());"style"==d?a.style.cssText=c:"class"==d?a.className=c:"for"==d?a.htmlFor=c:cc.hasOwnProperty(d)?a.setAttribute(cc[d],c):0==d.lastIndexOf("aria-",0)||0==d.lastIndexOf("data-",0)?a.setAttribute(d,c):a[d]=c})}
var cc={cellpadding:"cellPadding",cellspacing:"cellSpacing",colspan:"colSpan",frameborder:"frameBorder",height:"height",maxlength:"maxLength",nonce:"nonce",role:"role",rowspan:"rowSpan",type:"type",usemap:"useMap",valign:"vAlign",width:"width"};
function dc(a,b,c){var d=arguments,e=document,f=String(d[0]),g=d[1];if(!Yb&&g&&(g.name||g.type)){f=["<",f];g.name&&f.push(' name="',Mb(g.name),'"');if(g.type){f.push(' type="',Mb(g.type),'"');var h={};ob(h,g);delete h.type;g=h}f.push(">");f=f.join("")}f=ec(e,f);g&&("string"===typeof g?f.className=g:Aa(g)?f.className=g.join(" "):bc(f,g));2<d.length&&fc(e,f,d);return f}
function fc(a,b,c){function d(g){g&&b.appendChild("string"===typeof g?a.createTextNode(g):g)}
for(var e=2;e<c.length;e++){var f=c[e];!Ba(f)||Ca(f)&&0<f.nodeType?d(f):G(gc(f)?Ra(f):f,d)}}
function ec(a,b){b=String(b);"application/xhtml+xml"===a.contentType&&(b=b.toLowerCase());return a.createElement(b)}
function gc(a){if(a&&"number"==typeof a.length){if(Ca(a))return"function"==typeof a.item||"string"==typeof a.item;if(B(a))return"function"==typeof a.item}return!1}
function hc(a,b){for(var c=0;a;){if(b(a))return a;a=a.parentNode;c++}return null}
;function ic(a){jc();return new vb(wb,a)}
var jc=xa;var kc=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^/?#]*)@)?([^/#?]*?)(?::([0-9]+))?(?=[/\\#?]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function J(a){return a?decodeURI(a):a}
function L(a,b){return b.match(kc)[a]||null}
function lc(a,b,c){if(Aa(b))for(var d=0;d<b.length;d++)lc(a,String(b[d]),c);else null!=b&&c.push(a+(""===b?"":"="+encodeURIComponent(String(b))))}
function mc(a){var b=[],c;for(c in a)lc(c,a[c],b);return b.join("&")}
function nc(a,b){var c=mc(b);if(c){var d=a.indexOf("#");0>d&&(d=a.length);var e=a.indexOf("?");if(0>e||e>d){e=d;var f=""}else f=a.substring(e+1,d);d=[a.substr(0,e),f,a.substr(d)];e=d[1];d[1]=c?e?e+"&"+c:c:e;c=d[0]+(d[1]?"?"+d[1]:"")+d[2]}else c=a;return c}
var oc=/#|$/;function pc(a,b){var c=a.search(oc);a:{var d=0;for(var e=b.length;0<=(d=a.indexOf(b,d))&&d<c;){var f=a.charCodeAt(d-1);if(38==f||63==f)if(f=a.charCodeAt(d+e),!f||61==f||38==f||35==f)break a;d+=e+1}d=-1}if(0>d)return null;e=a.indexOf("&",d);if(0>e||e>c)e=c;d+=b.length+1;return decodeURIComponent(a.substr(d,e-d).replace(/\+/g," "))}
;function qc(a){var b=rc;if(b)for(var c in b)Object.prototype.hasOwnProperty.call(b,c)&&a.call(void 0,b[c],c,b)}
function sc(){var a=[];qc(function(b){a.push(b)});
return a}
var rc={ab:"allow-forms",bb:"allow-modals",cb:"allow-orientation-lock",eb:"allow-pointer-lock",fb:"allow-popups",gb:"allow-popups-to-escape-sandbox",hb:"allow-presentation",ib:"allow-same-origin",jb:"allow-scripts",kb:"allow-top-navigation",lb:"allow-top-navigation-by-user-activation"},tc=pb(function(){return sc()});
function uc(){var a=ec(document,"IFRAME"),b={};G(tc(),function(c){a.sandbox&&a.sandbox.supports&&a.sandbox.supports(c)&&(b[c]=!0)});
return b}
;function vc(a){"number"==typeof a&&(a=Math.round(a)+"px");return a}
;var wc=(new Date).getTime();function xc(a){if(!a)return"";a=a.split("#")[0].split("?")[0];a=a.toLowerCase();0==a.indexOf("//")&&(a=window.location.protocol+a);/^[\w\-]*:\/\//.test(a)||(a=window.location.href);var b=a.substring(a.indexOf("://")+3),c=b.indexOf("/");-1!=c&&(b=b.substring(0,c));a=a.substring(0,a.indexOf("://"));if("http"!==a&&"https"!==a&&"chrome-extension"!==a&&"file"!==a&&"android-app"!==a&&"chrome-search"!==a&&"app"!==a)throw Error("Invalid URI scheme in origin: "+a);c="";var d=b.indexOf(":");if(-1!=d){var e=
b.substring(d+1);b=b.substring(0,d);if("http"===a&&"80"!==e||"https"===a&&"443"!==e)c=":"+e}return a+"://"+b+c}
;function yc(){function a(){e[0]=1732584193;e[1]=4023233417;e[2]=2562383102;e[3]=271733878;e[4]=3285377520;n=l=0}
function b(p){for(var u=g,q=0;64>q;q+=4)u[q/4]=p[q]<<24|p[q+1]<<16|p[q+2]<<8|p[q+3];for(q=16;80>q;q++)p=u[q-3]^u[q-8]^u[q-14]^u[q-16],u[q]=(p<<1|p>>>31)&4294967295;p=e[0];var y=e[1],K=e[2],ma=e[3],Dc=e[4];for(q=0;80>q;q++){if(40>q)if(20>q){var Ia=ma^y&(K^ma);var Fb=1518500249}else Ia=y^K^ma,Fb=1859775393;else 60>q?(Ia=y&K|ma&(y|K),Fb=2400959708):(Ia=y^K^ma,Fb=3395469782);Ia=((p<<5|p>>>27)&4294967295)+Ia+Dc+Fb+u[q]&4294967295;Dc=ma;ma=K;K=(y<<30|y>>>2)&4294967295;y=p;p=Ia}e[0]=e[0]+p&4294967295;e[1]=
e[1]+y&4294967295;e[2]=e[2]+K&4294967295;e[3]=e[3]+ma&4294967295;e[4]=e[4]+Dc&4294967295}
function c(p,u){if("string"===typeof p){p=unescape(encodeURIComponent(p));for(var q=[],y=0,K=p.length;y<K;++y)q.push(p.charCodeAt(y));p=q}u||(u=p.length);q=0;if(0==l)for(;q+64<u;)b(p.slice(q,q+64)),q+=64,n+=64;for(;q<u;)if(f[l++]=p[q++],n++,64==l)for(l=0,b(f);q+64<u;)b(p.slice(q,q+64)),q+=64,n+=64}
function d(){var p=[],u=8*n;56>l?c(h,56-l):c(h,64-(l-56));for(var q=63;56<=q;q--)f[q]=u&255,u>>>=8;b(f);for(q=u=0;5>q;q++)for(var y=24;0<=y;y-=8)p[u++]=e[q]>>y&255;return p}
for(var e=[],f=[],g=[],h=[128],k=1;64>k;++k)h[k]=0;var l,n;a();return{reset:a,update:c,digest:d,xa:function(){for(var p=d(),u="",q=0;q<p.length;q++)u+="0123456789ABCDEF".charAt(Math.floor(p[q]/16))+"0123456789ABCDEF".charAt(p[q]%16);return u}}}
;function zc(a,b,c){var d=[],e=[];if(1==(Aa(c)?2:1))return e=[b,a],G(d,function(h){e.push(h)}),Ac(e.join(" "));
var f=[],g=[];G(c,function(h){g.push(h.key);f.push(h.value)});
c=Math.floor((new Date).getTime()/1E3);e=0==f.length?[c,b,a]:[f.join(":"),c,b,a];G(d,function(h){e.push(h)});
a=Ac(e.join(" "));a=[c,a];0==g.length||a.push(g.join(""));return a.join("_")}
function Ac(a){var b=yc();b.update(a);return b.xa().toLowerCase()}
;function Bc(a){var b=xc(String(x.location.href)),c;(c=x.__SAPISID||x.__APISID||x.__OVERRIDE_SID)?c=!0:(c=new Ub(document),c=c.get("SAPISID")||c.get("APISID")||c.get("__Secure-3PAPISID")||c.get("SID"),c=!!c);if(c&&(c=(b=0==b.indexOf("https:")||0==b.indexOf("chrome-extension:"))?x.__SAPISID:x.__APISID,c||(c=new Ub(document),c=c.get(b?"SAPISID":"APISID")||c.get("__Secure-3PAPISID")),c)){b=b?"SAPISIDHASH":"APISIDHASH";var d=String(x.location.href);return d&&c&&b?[b,zc(xc(d),c,a||null)].join(" "):null}return null}
;function Cc(a){return"string"==typeof a.className?a.className:a.getAttribute&&a.getAttribute("class")||""}
function Ec(a,b){"string"==typeof a.className?a.className=b:a.setAttribute&&a.setAttribute("class",b)}
function Fc(a,b){if(a.classList)var c=a.classList.contains(b);else c=a.classList?a.classList:Cc(a).match(/\S+/g)||[],c=0<=La(c,b);return c}
function Gc(){var a=document.body;a.classList?a.classList.remove("inverted-hdpi"):Fc(a,"inverted-hdpi")&&Ec(a,Ma(a.classList?a.classList:Cc(a).match(/\S+/g)||[],function(b){return"inverted-hdpi"!=b}).join(" "))}
;var Hc="StopIteration"in x?x.StopIteration:{message:"StopIteration",stack:""};function Ic(){}
Ic.prototype.next=function(){throw Hc;};
Ic.prototype.G=function(){return this};
function Jc(a){if(a instanceof Ic)return a;if("function"==typeof a.G)return a.G(!1);if(Ba(a)){var b=0,c=new Ic;c.next=function(){for(;;){if(b>=a.length)throw Hc;if(b in a)return a[b++];b++}};
return c}throw Error("Not implemented");}
function Kc(a,b){if(Ba(a))try{G(a,b,void 0)}catch(c){if(c!==Hc)throw c;}else{a=Jc(a);try{for(;;)b.call(void 0,a.next(),void 0,a)}catch(c){if(c!==Hc)throw c;}}}
function Lc(a){if(Ba(a))return Ra(a);a=Jc(a);var b=[];Kc(a,function(c){b.push(c)});
return b}
;function Mc(a,b){this.h={};this.f=[];this.H=this.g=0;var c=arguments.length;if(1<c){if(c%2)throw Error("Uneven number of arguments");for(var d=0;d<c;d+=2)this.set(arguments[d],arguments[d+1])}else if(a)if(a instanceof Mc)for(c=Nc(a),d=0;d<c.length;d++)this.set(c[d],a.get(c[d]));else for(d in a)this.set(d,a[d])}
function Nc(a){Oc(a);return a.f.concat()}
m=Mc.prototype;m.equals=function(a,b){if(this===a)return!0;if(this.g!=a.g)return!1;var c=b||Pc;Oc(this);for(var d,e=0;d=this.f[e];e++)if(!c(this.get(d),a.get(d)))return!1;return!0};
function Pc(a,b){return a===b}
m.isEmpty=function(){return 0==this.g};
m.clear=function(){this.h={};this.H=this.g=this.f.length=0};
m.remove=function(a){return Object.prototype.hasOwnProperty.call(this.h,a)?(delete this.h[a],this.g--,this.H++,this.f.length>2*this.g&&Oc(this),!0):!1};
function Oc(a){if(a.g!=a.f.length){for(var b=0,c=0;b<a.f.length;){var d=a.f[b];Object.prototype.hasOwnProperty.call(a.h,d)&&(a.f[c++]=d);b++}a.f.length=c}if(a.g!=a.f.length){var e={};for(c=b=0;b<a.f.length;)d=a.f[b],Object.prototype.hasOwnProperty.call(e,d)||(a.f[c++]=d,e[d]=1),b++;a.f.length=c}}
m.get=function(a,b){return Object.prototype.hasOwnProperty.call(this.h,a)?this.h[a]:b};
m.set=function(a,b){Object.prototype.hasOwnProperty.call(this.h,a)||(this.g++,this.f.push(a),this.H++);this.h[a]=b};
m.forEach=function(a,b){for(var c=Nc(this),d=0;d<c.length;d++){var e=c[d],f=this.get(e);a.call(b,f,e,this)}};
m.clone=function(){return new Mc(this)};
m.G=function(a){Oc(this);var b=0,c=this.H,d=this,e=new Ic;e.next=function(){if(c!=d.H)throw Error("The map has changed since the iterator was created");if(b>=d.f.length)throw Hc;var f=d.f[b++];return a?f:d.h[f]};
return e};function Qc(a){if(!a)return!1;try{return!!a.$goog_Thenable}catch(b){return!1}}
;function Rc(a,b){this.h=a;this.i=b;this.g=0;this.f=null}
Rc.prototype.get=function(){if(0<this.g){this.g--;var a=this.f;this.f=a.next;a.next=null}else a=this.h();return a};
function Sc(a,b){a.i(b);100>a.g&&(a.g++,b.next=a.f,a.f=b)}
;function Tc(a){x.setTimeout(function(){throw a;},0)}
var Uc;
function Vc(){var a=x.MessageChannel;"undefined"===typeof a&&"undefined"!==typeof window&&window.postMessage&&window.addEventListener&&-1==bb.indexOf("Presto")&&(a=function(){var e=ec(document,"IFRAME");e.style.display="none";e.src=yb(new vb(wb,tb())).toString();document.documentElement.appendChild(e);var f=e.contentWindow;e=f.document;e.open();e.write(Hb(Jb));e.close();var g="callImmediate"+Math.random(),h="file:"==f.location.protocol?"*":f.location.protocol+"//"+f.location.host;e=C(function(k){if(("*"==h||
k.origin==h)&&k.data==g)this.port1.onmessage()},this);
f.addEventListener("message",e,!1);this.port1={};this.port2={postMessage:function(){f.postMessage(g,h)}}});
if("undefined"!==typeof a&&-1==bb.indexOf("Trident")&&-1==bb.indexOf("MSIE")){var b=new a,c={},d=c;b.port1.onmessage=function(){if(void 0!==c.next){c=c.next;var e=c.la;c.la=null;e()}};
return function(e){d.next={la:e};d=d.next;b.port2.postMessage(0)}}return"undefined"!==typeof document&&"onreadystatechange"in ec(document,"SCRIPT")?function(e){var f=ec(document,"SCRIPT");
f.onreadystatechange=function(){f.onreadystatechange=null;f.parentNode.removeChild(f);f=null;e();e=null};
document.documentElement.appendChild(f)}:function(e){x.setTimeout(e,0)}}
;function Wc(){this.g=this.f=null}
var Yc=new Rc(function(){return new Xc},function(a){a.reset()});
Wc.prototype.add=function(a,b){var c=Yc.get();c.set(a,b);this.g?this.g.next=c:this.f=c;this.g=c};
Wc.prototype.remove=function(){var a=null;this.f&&(a=this.f,this.f=this.f.next,this.f||(this.g=null),a.next=null);return a};
function Xc(){this.next=this.scope=this.f=null}
Xc.prototype.set=function(a,b){this.f=a;this.scope=b;this.next=null};
Xc.prototype.reset=function(){this.next=this.scope=this.f=null};function Zc(a,b){$c||ad();bd||($c(),bd=!0);cd.add(a,b)}
var $c;function ad(){if(x.Promise&&x.Promise.resolve){var a=x.Promise.resolve(void 0);$c=function(){a.then(dd)}}else $c=function(){var b=dd;
!B(x.setImmediate)||x.Window&&x.Window.prototype&&-1==bb.indexOf("Edge")&&x.Window.prototype.setImmediate==x.setImmediate?(Uc||(Uc=Vc()),Uc(b)):x.setImmediate(b)}}
var bd=!1,cd=new Wc;function dd(){for(var a;a=cd.remove();){try{a.f.call(a.scope)}catch(b){Tc(b)}Sc(Yc,a)}bd=!1}
;function M(a){this.f=0;this.w=void 0;this.i=this.g=this.h=null;this.j=this.l=!1;if(a!=xa)try{var b=this;a.call(void 0,function(c){ed(b,2,c)},function(c){ed(b,3,c)})}catch(c){ed(this,3,c)}}
function fd(){this.next=this.context=this.onRejected=this.g=this.f=null;this.h=!1}
fd.prototype.reset=function(){this.context=this.onRejected=this.g=this.f=null;this.h=!1};
var gd=new Rc(function(){return new fd},function(a){a.reset()});
function hd(a,b,c){var d=gd.get();d.g=a;d.onRejected=b;d.context=c;return d}
function id(a){return new M(function(b,c){c(a)})}
M.prototype.then=function(a,b,c){return jd(this,B(a)?a:null,B(b)?b:null,c)};
M.prototype.$goog_Thenable=!0;function kd(a,b){return jd(a,null,b,void 0)}
M.prototype.cancel=function(a){if(0==this.f){var b=new ld(a);Zc(function(){md(this,b)},this)}};
function md(a,b){if(0==a.f)if(a.h){var c=a.h;if(c.g){for(var d=0,e=null,f=null,g=c.g;g&&(g.h||(d++,g.f==a&&(e=g),!(e&&1<d)));g=g.next)e||(f=g);e&&(0==c.f&&1==d?md(c,b):(f?(d=f,d.next==c.i&&(c.i=d),d.next=d.next.next):nd(c),od(c,e,3,b)))}a.h=null}else ed(a,3,b)}
function pd(a,b){a.g||2!=a.f&&3!=a.f||qd(a);a.i?a.i.next=b:a.g=b;a.i=b}
function jd(a,b,c,d){var e=hd(null,null,null);e.f=new M(function(f,g){e.g=b?function(h){try{var k=b.call(d,h);f(k)}catch(l){g(l)}}:f;
e.onRejected=c?function(h){try{var k=c.call(d,h);void 0===k&&h instanceof ld?g(h):f(k)}catch(l){g(l)}}:g});
e.f.h=a;pd(a,e);return e.f}
M.prototype.A=function(a){this.f=0;ed(this,2,a)};
M.prototype.B=function(a){this.f=0;ed(this,3,a)};
function ed(a,b,c){if(0==a.f){a===c&&(b=3,c=new TypeError("Promise cannot resolve to itself"));a.f=1;a:{var d=c,e=a.A,f=a.B;if(d instanceof M){pd(d,hd(e||xa,f||null,a));var g=!0}else if(Qc(d))d.then(e,f,a),g=!0;else{if(Ca(d))try{var h=d.then;if(B(h)){rd(d,h,e,f,a);g=!0;break a}}catch(k){f.call(a,k);g=!0;break a}g=!1}}g||(a.w=c,a.f=b,a.h=null,qd(a),3!=b||c instanceof ld||sd(a,c))}}
function rd(a,b,c,d,e){function f(k){h||(h=!0,d.call(e,k))}
function g(k){h||(h=!0,c.call(e,k))}
var h=!1;try{b.call(a,g,f)}catch(k){f(k)}}
function qd(a){a.l||(a.l=!0,Zc(a.m,a))}
function nd(a){var b=null;a.g&&(b=a.g,a.g=b.next,b.next=null);a.g||(a.i=null);return b}
M.prototype.m=function(){for(var a;a=nd(this);)od(this,a,this.f,this.w);this.l=!1};
function od(a,b,c,d){if(3==c&&b.onRejected&&!b.h)for(;a&&a.j;a=a.h)a.j=!1;if(b.f)b.f.h=null,td(b,c,d);else try{b.h?b.g.call(b.context):td(b,c,d)}catch(e){ud.call(null,e)}Sc(gd,b)}
function td(a,b,c){2==b?a.g.call(a.context,c):a.onRejected&&a.onRejected.call(a.context,c)}
function sd(a,b){a.j=!0;Zc(function(){a.j&&ud.call(null,b)})}
var ud=Tc;function ld(a){F.call(this,a)}
E(ld,F);ld.prototype.name="cancel";function vd(){this.g=[];this.f=-1}
vd.prototype.set=function(a,b){b=void 0===b?!0:b;0<=a&&52>a&&0===a%1&&this.g[a]!=b&&(this.g[a]=b,this.f=-1)};
vd.prototype.get=function(a){return!!this.g[a]};
function wd(a){-1==a.f&&(a.f=Oa(a.g,function(b,c,d){return c?b+Math.pow(2,d):b},0));
return a.f}
;function xd(){this.g=-1}
;function yd(){this.g=64;this.f=[];this.l=[];this.w=[];this.i=[];this.i[0]=128;for(var a=1;a<this.g;++a)this.i[a]=0;this.j=this.h=0;this.reset()}
E(yd,xd);yd.prototype.reset=function(){this.f[0]=1732584193;this.f[1]=4023233417;this.f[2]=2562383102;this.f[3]=271733878;this.f[4]=3285377520;this.j=this.h=0};
function zd(a,b,c){c||(c=0);var d=a.w;if("string"===typeof b)for(var e=0;16>e;e++)d[e]=b.charCodeAt(c)<<24|b.charCodeAt(c+1)<<16|b.charCodeAt(c+2)<<8|b.charCodeAt(c+3),c+=4;else for(e=0;16>e;e++)d[e]=b[c]<<24|b[c+1]<<16|b[c+2]<<8|b[c+3],c+=4;for(e=16;80>e;e++){var f=d[e-3]^d[e-8]^d[e-14]^d[e-16];d[e]=(f<<1|f>>>31)&4294967295}b=a.f[0];c=a.f[1];var g=a.f[2],h=a.f[3],k=a.f[4];for(e=0;80>e;e++){if(40>e)if(20>e){f=h^c&(g^h);var l=1518500249}else f=c^g^h,l=1859775393;else 60>e?(f=c&g|h&(c|g),l=2400959708):
(f=c^g^h,l=3395469782);f=(b<<5|b>>>27)+f+k+l+d[e]&4294967295;k=h;h=g;g=(c<<30|c>>>2)&4294967295;c=b;b=f}a.f[0]=a.f[0]+b&4294967295;a.f[1]=a.f[1]+c&4294967295;a.f[2]=a.f[2]+g&4294967295;a.f[3]=a.f[3]+h&4294967295;a.f[4]=a.f[4]+k&4294967295}
yd.prototype.update=function(a,b){if(null!=a){void 0===b&&(b=a.length);for(var c=b-this.g,d=0,e=this.l,f=this.h;d<b;){if(0==f)for(;d<=c;)zd(this,a,d),d+=this.g;if("string"===typeof a)for(;d<b;){if(e[f]=a.charCodeAt(d),++f,++d,f==this.g){zd(this,e);f=0;break}}else for(;d<b;)if(e[f]=a[d],++f,++d,f==this.g){zd(this,e);f=0;break}}this.h=f;this.j+=b}};
yd.prototype.digest=function(){var a=[],b=8*this.j;56>this.h?this.update(this.i,56-this.h):this.update(this.i,this.g-(this.h-56));for(var c=this.g-1;56<=c;c--)this.l[c]=b&255,b/=256;zd(this,this.l);for(c=b=0;5>c;c++)for(var d=24;0<=d;d-=8)a[b]=this.f[c]>>d&255,++b;return a};function N(){this.g=this.g;this.w=this.w}
N.prototype.g=!1;N.prototype.dispose=function(){this.g||(this.g=!0,this.o())};
function Ad(a,b){a.g?b():(a.w||(a.w=[]),a.w.push(b))}
N.prototype.o=function(){if(this.w)for(;this.w.length;)this.w.shift()()};
function Bd(a){a&&"function"==typeof a.dispose&&a.dispose()}
function Cd(a){for(var b=0,c=arguments.length;b<c;++b){var d=arguments[b];Ba(d)?Cd.apply(null,d):Bd(d)}}
;function Dd(a){var b=[];Ed(new Fd,a,b);return b.join("")}
function Fd(){}
function Ed(a,b,c){if(null==b)c.push("null");else{if("object"==typeof b){if(Aa(b)){var d=b;b=d.length;c.push("[");for(var e="",f=0;f<b;f++)c.push(e),Ed(a,d[f],c),e=",";c.push("]");return}if(b instanceof String||b instanceof Number||b instanceof Boolean)b=b.valueOf();else{c.push("{");e="";for(d in b)Object.prototype.hasOwnProperty.call(b,d)&&(f=b[d],"function"!=typeof f&&(c.push(e),Gd(d,c),c.push(":"),Ed(a,f,c),e=","));c.push("}");return}}switch(typeof b){case "string":Gd(b,c);break;case "number":c.push(isFinite(b)&&
!isNaN(b)?String(b):"null");break;case "boolean":c.push(String(b));break;case "function":c.push("null");break;default:throw Error("Unknown type: "+typeof b);}}}
var Hd={'"':'\\"',"\\":"\\\\","/":"\\/","\b":"\\b","\f":"\\f","\n":"\\n","\r":"\\r","\t":"\\t","\x0B":"\\u000b"},Id=/\uffff/.test("\uffff")?/[\\"\x00-\x1f\x7f-\uffff]/g:/[\\"\x00-\x1f\x7f-\xff]/g;function Gd(a,b){b.push('"',a.replace(Id,function(c){var d=Hd[c];d||(d="\\u"+(c.charCodeAt(0)|65536).toString(16).substr(1),Hd[c]=d);return d}),'"')}
;function O(a){N.call(this);this.l=1;this.i=[];this.j=0;this.f=[];this.h={};this.m=!!a}
E(O,N);m=O.prototype;m.subscribe=function(a,b,c){var d=this.h[a];d||(d=this.h[a]=[]);var e=this.l;this.f[e]=a;this.f[e+1]=b;this.f[e+2]=c;this.l=e+3;d.push(e);return e};
function Jd(a,b,c,d){if(b=a.h[b]){var e=a.f;(b=Pa(b,function(f){return e[f+1]==c&&e[f+2]==d}))&&a.N(b)}}
m.N=function(a){var b=this.f[a];if(b){var c=this.h[b];0!=this.j?(this.i.push(a),this.f[a+1]=xa):(c&&Qa(c,a),delete this.f[a],delete this.f[a+1],delete this.f[a+2])}return!!b};
m.M=function(a,b){var c=this.h[a];if(c){for(var d=Array(arguments.length-1),e=1,f=arguments.length;e<f;e++)d[e-1]=arguments[e];if(this.m)for(e=0;e<c.length;e++){var g=c[e];Kd(this.f[g+1],this.f[g+2],d)}else{this.j++;try{for(e=0,f=c.length;e<f;e++)g=c[e],this.f[g+1].apply(this.f[g+2],d)}finally{if(this.j--,0<this.i.length&&0==this.j)for(;c=this.i.pop();)this.N(c)}}return 0!=e}return!1};
function Kd(a,b,c){Zc(function(){a.apply(b,c)})}
m.clear=function(a){if(a){var b=this.h[a];b&&(G(b,this.N,this),delete this.h[a])}else this.f.length=0,this.h={}};
m.o=function(){O.L.o.call(this);this.clear();this.i.length=0};function Ld(a){this.f=a}
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
E(Rd,Qd);Rd.prototype.clear=function(){var a=Lc(this.G(!0)),b=this;G(a,function(c){b.remove(c)})};function Sd(a){this.f=a}
E(Sd,Rd);m=Sd.prototype;m.isAvailable=function(){if(!this.f)return!1;try{return this.f.setItem("__sak","1"),this.f.removeItem("__sak"),!0}catch(a){return!1}};
m.set=function(a,b){try{this.f.setItem(a,b)}catch(c){if(0==this.f.length)throw"Storage mechanism: Storage disabled";throw"Storage mechanism: Quota exceeded";}};
m.get=function(a){a=this.f.getItem(a);if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeItem(a)};
m.G=function(a){var b=0,c=this.f,d=new Ic;d.next=function(){if(b>=c.length)throw Hc;var e=c.key(b++);if(a)return e;e=c.getItem(e);if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){this.f.clear()};
m.key=function(a){return this.f.key(a)};function Td(){var a=null;try{a=window.localStorage||null}catch(b){}this.f=a}
E(Td,Sd);function Ud(a,b){this.g=a;this.f=null;if(Ob&&!(9<=Number(Pb))){Vd||(Vd=new Mc);this.f=Vd.get(a);this.f||(b?this.f=document.getElementById(b):(this.f=document.createElement("userdata"),this.f.addBehavior("#default#userData"),document.body.appendChild(this.f)),Vd.set(a,this.f));try{this.f.load(this.g)}catch(c){this.f=null}}}
E(Ud,Rd);var Wd={".":".2E","!":".21","~":".7E","*":".2A","'":".27","(":".28",")":".29","%":"."},Vd=null;function Xd(a){return"_"+encodeURIComponent(a).replace(/[.!~*'()%]/g,function(b){return Wd[b]})}
m=Ud.prototype;m.isAvailable=function(){return!!this.f};
m.set=function(a,b){this.f.setAttribute(Xd(a),b);Yd(this)};
m.get=function(a){a=this.f.getAttribute(Xd(a));if("string"!==typeof a&&null!==a)throw"Storage mechanism: Invalid value was encountered";return a};
m.remove=function(a){this.f.removeAttribute(Xd(a));Yd(this)};
m.G=function(a){var b=0,c=this.f.XMLDocument.documentElement.attributes,d=new Ic;d.next=function(){if(b>=c.length)throw Hc;var e=c[b++];if(a)return decodeURIComponent(e.nodeName.replace(/\./g,"%")).substr(1);e=e.nodeValue;if("string"!==typeof e)throw"Storage mechanism: Invalid value was encountered";return e};
return d};
m.clear=function(){for(var a=this.f.XMLDocument.documentElement,b=a.attributes.length;0<b;b--)a.removeAttribute(a.attributes[b-1].nodeName);Yd(this)};
function Yd(a){try{a.f.save(a.g)}catch(b){throw"Storage mechanism: Quota exceeded";}}
;function Zd(a,b){this.g=a;this.f=b+"::"}
E(Zd,Rd);Zd.prototype.set=function(a,b){this.g.set(this.f+a,b)};
Zd.prototype.get=function(a){return this.g.get(this.f+a)};
Zd.prototype.remove=function(a){this.g.remove(this.f+a)};
Zd.prototype.G=function(a){var b=this.g.G(!0),c=this,d=new Ic;d.next=function(){for(var e=b.next();e.substr(0,c.f.length)!=c.f;)e=b.next();return a?e.substr(c.f.length):c.g.get(e)};
return d};function $d(a,b){1<b.length?a[b[0]]=b[1]:1===b.length&&Object.assign(a,b[0])}
;var ae=window.yt&&window.yt.config_||window.ytcfg&&window.ytcfg.data_||{};z("yt.config_",ae,void 0);function P(a){$d(ae,arguments)}
function Q(a,b){return a in ae?ae[a]:b}
function be(){return Q("ERRORS",[])}
function ce(){return Q("PLAYER_CONFIG",{})}
;function de(){var a=ee;A("yt.ads.biscotti.getId_")||z("yt.ads.biscotti.getId_",a,void 0)}
function fe(a){z("yt.ads.biscotti.lastId_",a,void 0)}
;var ge=[];function he(a){ge.forEach(function(b){return b(a)})}
function ie(a){return a&&window.yterr?function(){try{return a.apply(this,arguments)}catch(b){je(b),he(b)}}:a}
function je(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0):(b=be(),b.push([a,"ERROR",void 0,void 0,void 0]),P("ERRORS",b))}
function ke(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0):(b=be(),b.push([a,"WARNING",void 0,void 0,void 0]),P("ERRORS",b))}
;function le(a){var b=[];eb(a,function(c,d){var e=encodeURIComponent(String(d)),f;Aa(c)?f=c:f=[c];G(f,function(g){""==g?b.push(e):b.push(e+"="+encodeURIComponent(String(g)))})});
return b.join("&")}
function me(a){"?"==a.charAt(0)&&(a=a.substr(1));a=a.split("&");for(var b={},c=0,d=a.length;c<d;c++){var e=a[c].split("=");if(1==e.length&&e[0]||2==e.length)try{var f=decodeURIComponent((e[0]||"").replace(/\+/g," ")),g=decodeURIComponent((e[1]||"").replace(/\+/g," "));f in b?Aa(b[f])?Sa(b[f],g):b[f]=[b[f],g]:b[f]=g}catch(k){if("q"!=e[0]){var h=Error("Error decoding URL component");h.params={key:e[0],value:e[1]};je(h)}}}return b}
function ne(a,b){return oe(a,b||{},!0)}
function oe(a,b,c){var d=a.split("#",2);a=d[0];d=1<d.length?"#"+d[1]:"";var e=a.split("?",2);a=e[0];e=me(e[1]||"");for(var f in b)!c&&null!==e&&f in e||(e[f]=b[f]);return nc(a,e)+d}
;function pe(a){var b=qe;a=void 0===a?A("yt.ads.biscotti.lastId_")||"":a;b=Object.assign(re(b),se(b));b.ca_type="image";a&&(b.bid=a);return b}
function re(a){var b={};b.dt=wc;b.flash="0";a:{try{var c=a.f.top.location.href}catch(f){a=2;break a}a=c?c===a.g.location.href?0:1:2}b=(b.frm=a,b);b.u_tz=-(new Date).getTimezoneOffset();var d=void 0===d?I:d;try{var e=d.history.length}catch(f){e=0}b.u_his=e;b.u_java=!!I.navigator&&"unknown"!==typeof I.navigator.javaEnabled&&!!I.navigator.javaEnabled&&I.navigator.javaEnabled();I.screen&&(b.u_h=I.screen.height,b.u_w=I.screen.width,b.u_ah=I.screen.availHeight,b.u_aw=I.screen.availWidth,b.u_cd=I.screen.colorDepth);
I.navigator&&I.navigator.plugins&&(b.u_nplug=I.navigator.plugins.length);I.navigator&&I.navigator.mimeTypes&&(b.u_nmime=I.navigator.mimeTypes.length);return b}
function se(a){var b=a.f;try{var c=b.screenX;var d=b.screenY}catch(p){}try{var e=b.outerWidth;var f=b.outerHeight}catch(p){}try{var g=b.innerWidth;var h=b.innerHeight}catch(p){}b=[b.screenLeft,b.screenTop,c,d,b.screen?b.screen.availWidth:void 0,b.screen?b.screen.availTop:void 0,e,f,g,h];c=a.f.top;try{var k=(c||window).document,l="CSS1Compat"==k.compatMode?k.documentElement:k.body;var n=(new $b(l.clientWidth,l.clientHeight)).round()}catch(p){n=new $b(-12245933,-12245933)}k=n;n={};l=new vd;x.SVGElement&&
x.document.createElementNS&&l.set(0);c=uc();c["allow-top-navigation-by-user-activation"]&&l.set(1);c["allow-popups-to-escape-sandbox"]&&l.set(2);x.crypto&&x.crypto.subtle&&l.set(3);x.TextDecoder&&x.TextEncoder&&l.set(4);l=wd(l);n.bc=l;n.bih=k.height;n.biw=k.width;n.brdim=b.join();a=a.g;return n.vis={visible:1,hidden:2,prerender:3,preview:4,unloaded:5}[a.visibilityState||a.webkitVisibilityState||a.mozVisibilityState||""]||0,n.wgl=!!I.WebGLRenderingContext,n}
var qe=new function(){var a=window.document;this.f=window;this.g=a};
z("yt.ads_.signals_.getAdSignalsString",function(a){return le(pe(a))},void 0);D();function R(a){a=te(a);return"string"===typeof a&&"false"===a?!1:!!a}
function ue(a,b){var c=te(a);return void 0===c&&void 0!==b?b:Number(c||0)}
function te(a){var b=Q("EXPERIMENTS_FORCED_FLAGS",{});return void 0!==b[a]?b[a]:Q("EXPERIMENT_FLAGS",{})[a]}
;var ve=void 0!==XMLHttpRequest?function(){return new XMLHttpRequest}:void 0!==ActiveXObject?function(){return new ActiveXObject("Microsoft.XMLHTTP")}:null;
function we(){if(!ve)return null;var a=ve();return"open"in a?a:null}
function xe(a){switch(a&&"status"in a?a.status:-1){case 200:case 201:case 202:case 203:case 204:case 205:case 206:case 304:return!0;default:return!1}}
;function S(a,b){B(a)&&(a=ie(a));return window.setTimeout(a,b)}
function T(a){window.clearTimeout(a)}
;var ye={Authorization:"AUTHORIZATION","X-Goog-Visitor-Id":"SANDBOXED_VISITOR_ID","X-YouTube-Client-Name":"INNERTUBE_CONTEXT_CLIENT_NAME","X-YouTube-Client-Version":"INNERTUBE_CONTEXT_CLIENT_VERSION","X-YouTube-Device":"DEVICE","X-Youtube-Identity-Token":"ID_TOKEN","X-YouTube-Page-CL":"PAGE_CL","X-YouTube-Page-Label":"PAGE_BUILD_LABEL","X-YouTube-Variants-Checksum":"VARIANTS_CHECKSUM"},ze="app debugcss debugjs expflag force_ad_params force_viral_ad_response_params forced_experiments innertube_snapshots innertube_goldens internalcountrycode internalipoverride absolute_experiments conditional_experiments sbb sr_bns_address".split(" "),
Ae=!1;
function Be(a,b){b=void 0===b?{}:b;if(!c)var c=window.location.href;var d=L(1,a),e=J(L(3,a));d&&e?(d=c,c=a.match(kc),d=d.match(kc),c=c[3]==d[3]&&c[1]==d[1]&&c[4]==d[4]):c=e?J(L(3,c))==e&&(Number(L(4,c))||null)==(Number(L(4,a))||null):!0;d=R("web_ajax_ignore_global_headers_if_set");for(var f in ye)e=Q(ye[f]),!e||!c&&!Ce(a,f)||d&&void 0!==b[f]||(b[f]=e);if(c||Ce(a,"X-YouTube-Utc-Offset"))b["X-YouTube-Utc-Offset"]=String(-(new Date).getTimezoneOffset());(c||Ce(a,"X-YouTube-Time-Zone"))&&(f="undefined"!=typeof Intl?
(new Intl.DateTimeFormat).resolvedOptions().timeZone:null)&&(b["X-YouTube-Time-Zone"]=f);if(c||Ce(a,"X-YouTube-Ad-Signals"))b["X-YouTube-Ad-Signals"]=le(pe(void 0));return b}
function De(a){var b=window.location.search,c=J(L(3,a)),d=J(L(5,a));d=(c=c&&(c.endsWith("youtube.com")||c.endsWith("youtube-nocookie.com")))&&d&&d.startsWith("/api/");if(!c||d)return a;var e=me(b),f={};G(ze,function(g){e[g]&&(f[g]=e[g])});
return oe(a,f||{},!1)}
function Ce(a,b){var c=Q("CORS_HEADER_WHITELIST")||{},d=J(L(3,a));return d?(c=c[d])?0<=La(c,b):!1:!0}
function Ee(a,b){if(window.fetch&&"XML"!=b.format){var c={method:b.method||"GET",credentials:"same-origin"};b.headers&&(c.headers=b.headers);a=Fe(a,b);var d=Ge(a,b);d&&(c.body=d);b.withCredentials&&(c.credentials="include");var e=!1,f;fetch(a,c).then(function(g){if(!e){e=!0;f&&T(f);var h=g.ok,k=function(l){l=l||{};var n=b.context||x;h?b.onSuccess&&b.onSuccess.call(n,l,g):b.onError&&b.onError.call(n,l,g);b.ja&&b.ja.call(n,l,g)};
"JSON"==(b.format||"JSON")&&(h||400<=g.status&&500>g.status)?g.json().then(k,function(){k(null)}):k(null)}});
b.qa&&0<b.timeout&&(f=S(function(){e||(e=!0,T(f),b.qa.call(b.context||x))},b.timeout))}else He(a,b)}
function He(a,b){var c=b.format||"JSON";a=Fe(a,b);var d=Ge(a,b),e=!1,f,g=Ie(a,function(h){if(!e){e=!0;f&&T(f);var k=xe(h),l=null,n=400<=h.status&&500>h.status,p=500<=h.status&&600>h.status;if(k||n||p)l=Je(c,h,b.pb);if(k)a:if(h&&204==h.status)k=!0;else{switch(c){case "XML":k=0==parseInt(l&&l.return_code,10);break a;case "RAW":k=!0;break a}k=!!l}l=l||{};n=b.context||x;k?b.onSuccess&&b.onSuccess.call(n,h,l):b.onError&&b.onError.call(n,h,l);b.ja&&b.ja.call(n,h,l)}},b.method,d,b.headers,b.responseType,
b.withCredentials);
b.O&&0<b.timeout&&(f=S(function(){e||(e=!0,g.abort(),T(f),b.O.call(b.context||x,g))},b.timeout));
return g}
function Fe(a,b){b.sb&&(a=document.location.protocol+"//"+document.location.hostname+(document.location.port?":"+document.location.port:"")+a);var c=Q("XSRF_FIELD_NAME",void 0),d=b.Za;d&&(d[c]&&delete d[c],a=ne(a,d));return a}
function Ge(a,b){var c=Q("XSRF_FIELD_NAME",void 0),d=Q("XSRF_TOKEN",void 0),e=b.postBody||"",f=b.C,g=Q("XSRF_FIELD_NAME",void 0),h;b.headers&&(h=b.headers["Content-Type"]);b.rb||J(L(3,a))&&!b.withCredentials&&J(L(3,a))!=document.location.hostname||"POST"!=b.method||h&&"application/x-www-form-urlencoded"!=h||b.C&&b.C[g]||(f||(f={}),f[c]=d);f&&"string"===typeof e&&(e=me(e),ob(e,f),e=b.ra&&"JSON"==b.ra?JSON.stringify(e):mc(e));f=e||f&&!ib(f);!Ae&&f&&"POST"!=b.method&&(Ae=!0,je(Error("AJAX request with postData should use POST")));
return e}
function Je(a,b,c){var d=null;switch(a){case "JSON":a=b.responseText;b=b.getResponseHeader("Content-Type")||"";a&&0<=b.indexOf("json")&&(d=JSON.parse(a));break;case "XML":if(b=(b=b.responseXML)?Ke(b):null)d={},G(b.getElementsByTagName("*"),function(e){d[e.tagName]=Le(e)})}c&&Me(d);
return d}
function Me(a){if(Ca(a))for(var b in a){var c;(c="html_content"==b)||(c=b.length-5,c=0<=c&&b.indexOf("_html",c)==c);if(c){c=b;var d=Ib(a[b],null);a[c]=d}else Me(a[b])}}
function Ke(a){return a?(a=("responseXML"in a?a.responseXML:a).getElementsByTagName("root"))&&0<a.length?a[0]:null:null}
function Le(a){var b="";G(a.childNodes,function(c){b+=c.nodeValue});
return b}
function Ie(a,b,c,d,e,f,g){function h(){4==(k&&"readyState"in k?k.readyState:0)&&b&&ie(b)(k)}
c=void 0===c?"GET":c;d=void 0===d?"":d;var k=we();if(!k)return null;"onloadend"in k?k.addEventListener("loadend",h,!1):k.onreadystatechange=h;R("debug_forward_web_query_parameters")&&(a=De(a));k.open(c,a,!0);f&&(k.responseType=f);g&&(k.withCredentials=!0);c="POST"==c&&(void 0===window.FormData||!(d instanceof FormData));if(e=Be(a,e))for(var l in e)k.setRequestHeader(l,e[l]),"content-type"==l.toLowerCase()&&(c=!1);c&&k.setRequestHeader("Content-Type","application/x-www-form-urlencoded");k.send(d);
return k}
;var Ne={},Oe=0;
function Pe(a,b,c,d,e){e=void 0===e?"":e;a&&(c&&(c=bb,c=!(c&&0<=c.toLowerCase().indexOf("cobalt"))),c?a&&(a instanceof H||(a="object"==typeof a&&a.J?a.I():String(a),Cb.test(a)||(a="about:invalid#zClosurez"),a=new H(zb,a)),b=Bb(a),"about:invalid#zClosurez"===b?a="":(b instanceof Eb?a=b:(d="object"==typeof b,a=null,d&&b.ha&&(a=b.ea()),b=Ua(d&&b.J?b.I():String(b)),a=Ib(b,a)),a=Hb(a).toString(),a=encodeURIComponent(String(Dd(a)))),/^[\s\xa0]*$/.test(a)||(a=dc("IFRAME",{src:'javascript:"<body><img src=\\""+'+a+
'+"\\"></body>"',style:"display:none"}),(9==a.nodeType?a:a.ownerDocument||a.document).body.appendChild(a))):e?Ie(a,b,"POST",e,d):Q("USE_NET_AJAX_FOR_PING_TRANSPORT",!1)||d?Ie(a,b,"GET","",d):Qe(a,b)||Re(a,b))}
function Qe(a,b){var c=ae.EXPERIMENT_FLAGS;if(!c||!c.web_use_beacon_api_for_ad_click_server_pings)return!1;c=J(L(5,a));return c&&-1!=c.indexOf("/aclk")&&"1"===pc(a,"ae")&&"1"===pc(a,"act")?Se(a)?(b&&b(),!0):!1:!1}
function Se(a,b){try{if(window.navigator&&window.navigator.sendBeacon&&window.navigator.sendBeacon(a,void 0===b?"":b))return!0}catch(c){}return!1}
function Re(a,b){var c=new Image,d=""+Oe++;Ne[d]=c;c.onload=c.onerror=function(){b&&Ne[d]&&b();delete Ne[d]};
c.src=a}
;function Te(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];d=Error.call(this,a);this.message=d.message;"stack"in d&&(this.stack=d.stack);this.args=[].concat(c instanceof Array?c:ba(r(c)))}
t(Te,Error);var Ue=new Set,Ve=0;function We(a){var b=A("yt.logging.errors.log");b?b(a,"ERROR",void 0,void 0,void 0,void 0):(b=be(),b.push([a,"ERROR",void 0,void 0,void 0,void 0]),P("ERRORS",b))}
function Xe(a){var b=A("yt.logging.errors.log");b?b(a,"WARNING",void 0,void 0,void 0,void 0):(b=be(),b.push([a,"WARNING",void 0,void 0,void 0,void 0]),P("ERRORS",b))}
function Ye(a,b,c,d){c+="."+a;a=String(JSON.stringify(b)).substr(0,500);d[c]=a;return c.length+a.length}
;function Ze(a,b,c,d,e,f){b=void 0===b?"ERROR":b;f=void 0===f?{}:f;f.name=c||Q("INNERTUBE_CONTEXT_CLIENT_NAME",1);f.version=d||Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0);c=f||{};d=void 0===b?"ERROR":b;d=void 0===d?"ERROR":d;f=window&&window.yterr||!1;if(a&&f&&!(5<=Ve)&&(R("console_log_js_exceptions")&&(f=[],f.push("Name: "+a.name),f.push("Message: "+a.message),a.hasOwnProperty("params")&&f.push("Error Params: "+JSON.stringify(a.params)),f.push("File name: "+a.fileName),f.push("Stacktrace: "+a.stack),
window.console.log(f.join("\n"),a)),0!==a.f)){f=a.g;b=a.columnNumber;if(a.args&&a.args.length)for(var g=0,h=0;h<a.args.length;h++){e=a.args[h];var k="params."+h;g+=k.length;if(e)if(Array.isArray(e))for(var l=c,n=0;n<e.length&&!(e[n]&&(g+=Ye(n,e[n],k,l),500<g));n++);else if("object"===typeof e)for(l in l=void 0,n=c,e){if(e[l]&&(g+=Ye(l,e[l],k,n),500<g))break}else c[k]=String(JSON.stringify(e)).substring(0,500),g+=c[k].length;else c[k]=String(JSON.stringify(e)).substring(0,500),g+=c[k].length;if(500<=
g)break}else if(a.hasOwnProperty("params"))if(e=a.params,"object"===typeof a.params)for(h in k=0,e){if(e[h]&&(g="params."+h,l=String(JSON.stringify(e[h])).substr(0,500),c[g]=l,k+=g.length+l.length,500<k))break}else c.params=String(JSON.stringify(e)).substr(0,500);a=Wb(a);(f=f||a.stack)||(f="Not available");h=a.lineNumber.toString();isNaN(h)||!b||isNaN(b)||(h=h+":"+b);window.yterr&&B(window.yterr)&&window.yterr(a);if(!(Ue.has(a.message)||0<=f.indexOf("/YouTubeCenter.js")||0<=f.indexOf("/mytube.js"))){d=
{Za:{a:"logerror",t:"jserror",type:a.name,msg:a.message.substr(0,250),line:h,level:d,"client.name":c.name},C:{url:Q("PAGE_NAME",window.location.href),file:a.fileName},method:"POST"};c.version&&(d["client.version"]=c.version);if(d.C){f&&(d.C.stack=f);f=r(Object.keys(c));for(b=f.next();!b.done;b=f.next())b=b.value,d.C["client."+b]=c[b];if(c=Q("LATEST_ECATCHER_SERVICE_TRACKING_PARAMS",void 0))for(f=r(Object.keys(c)),b=f.next();!b.done;b=f.next())b=b.value,d.C[b]=c[b]}He(Q("ECATCHER_REPORT_HOST","")+
"/error_204",d);Ue.add(a.message);Ve++}}}
;var $e=window.yt&&window.yt.msgs_||window.ytcfg&&window.ytcfg.msgs||{};z("yt.msgs_",$e,void 0);function af(a){$d($e,arguments)}
;function bf(a){a&&(a.dataset?a.dataset[cf("loaded")]="true":a.setAttribute("data-loaded","true"))}
function df(a,b){return a?a.dataset?a.dataset[cf(b)]:a.getAttribute("data-"+b):null}
var ef={};function cf(a){return ef[a]||(ef[a]=String(a).replace(/\-([a-z])/g,function(b,c){return c.toUpperCase()}))}
;var ff=A("ytPubsubPubsubInstance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.N;O.prototype.publish=O.prototype.M;O.prototype.clear=O.prototype.clear;z("ytPubsubPubsubInstance",ff,void 0);var gf=A("ytPubsubPubsubSubscribedKeys")||{};z("ytPubsubPubsubSubscribedKeys",gf,void 0);var hf=A("ytPubsubPubsubTopicToKeys")||{};z("ytPubsubPubsubTopicToKeys",hf,void 0);var jf=A("ytPubsubPubsubIsSynchronous")||{};z("ytPubsubPubsubIsSynchronous",jf,void 0);
function kf(a,b){var c=lf();if(c){var d=c.subscribe(a,function(){var e=arguments;var f=function(){gf[d]&&b.apply(window,e)};
try{jf[a]?f():S(f,0)}catch(g){je(g)}},void 0);
gf[d]=!0;hf[a]||(hf[a]=[]);hf[a].push(d);return d}return 0}
function mf(a){var b=lf();b&&("number"===typeof a?a=[a]:"string"===typeof a&&(a=[parseInt(a,10)]),G(a,function(c){b.unsubscribeByKey(c);delete gf[c]}))}
function nf(a,b){var c=lf();c&&c.publish.apply(c,arguments)}
function of(a){var b=lf();if(b)if(b.clear(a),a)pf(a);else for(var c in hf)pf(c)}
function lf(){return A("ytPubsubPubsubInstance")}
function pf(a){hf[a]&&(a=hf[a],G(a,function(b){gf[b]&&delete gf[b]}),a.length=0)}
;var qf=/\.vflset|-vfl[a-zA-Z0-9_+=-]+/,rf=/-[a-zA-Z]{2,3}_[a-zA-Z]{2,3}(?=(\/|$))/;function sf(a,b,c){c=void 0===c?null:c;if(window.spf&&spf.script){c="";if(a){var d=a.indexOf("jsbin/"),e=a.lastIndexOf(".js"),f=d+6;-1<d&&-1<e&&e>f&&(c=a.substring(f,e),c=c.replace(qf,""),c=c.replace(rf,""),c=c.replace("debug-",""),c=c.replace("tracing-",""))}spf.script.load(a,c,b)}else tf(a,b,c)}
function tf(a,b,c){c=void 0===c?null:c;var d=uf(a),e=document.getElementById(d),f=e&&df(e,"loaded"),g=e&&!f;f?b&&b():(b&&(f=kf(d,b),b=""+Da(b),vf[b]=f),g||(e=wf(a,d,function(){df(e,"loaded")||(bf(e),nf(d),S(Ja(of,d),0))},c)))}
function wf(a,b,c,d){d=void 0===d?null:d;var e=ec(document,"SCRIPT");e.id=b;e.onload=function(){c&&setTimeout(c,0)};
e.onreadystatechange=function(){switch(e.readyState){case "loaded":case "complete":e.onload()}};
d&&e.setAttribute("nonce",d);Lb(e,ic(a));a=document.getElementsByTagName("head")[0]||document.body;a.insertBefore(e,a.firstChild);return e}
function xf(a){a=uf(a);var b=document.getElementById(a);b&&(of(a),b.parentNode.removeChild(b))}
function yf(a,b){if(a&&b){var c=""+Da(b);(c=vf[c])&&mf(c)}}
function uf(a){var b=document.createElement("a");Kb(b,a);a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"js-"+Nb(a)}
var vf={};function zf(){}
function Af(a,b){return Bf(a,1,b)}
;function Cf(){}
t(Cf,zf);function Bf(a,b,c){isNaN(c)&&(c=void 0);var d=A("yt.scheduler.instance.addJob");return d?d(a,b,c):void 0===c?(a(),NaN):S(a,c||0)}
Cf.prototype.start=function(){var a=A("yt.scheduler.instance.start");a&&a()};
Cf.prototype.pause=function(){var a=A("yt.scheduler.instance.pause");a&&a()};
ya(Cf);Cf.getInstance();var Df=[],Ef=!1;function Ff(){if("1"!=fb(ce(),"args","privembed")){var a=function(){Ef=!0;"google_ad_status"in window?P("DCLKSTAT",1):P("DCLKSTAT",2)};
sf("//static.doubleclick.net/instream/ad_status.js",a);Df.push(Af(function(){Ef||"google_ad_status"in window||(yf("//static.doubleclick.net/instream/ad_status.js",a),Ef=!0,P("DCLKSTAT",3))},5E3))}}
function Gf(){return parseInt(Q("DCLKSTAT",0),10)}
;function Hf(){this.g=!1;this.f=null}
Hf.prototype.initialize=function(a,b,c,d,e){var f=this;b?(this.g=!0,sf(b,function(){f.g=!1;if(window.botguard)If(f,c,d);else{xf(b);var g=Error("Unable to load Botguard");g.params="from "+b;ke(g)}},e)):a&&(eval(a),window.botguard?If(this,c,d):ke(Error("Unable to load Botguard from JS")))};
function If(a,b,c){try{a.f=new window.botguard.bg(b,c?function(){return c(b)}:xa)}catch(d){ke(d)}}
Hf.prototype.dispose=function(){this.f=null};var Jf=window,U=Jf.ytcsi&&Jf.ytcsi.now?Jf.ytcsi.now:Jf.performance&&Jf.performance.timing&&Jf.performance.now?function(){return Jf.performance.timing.navigationStart+Jf.performance.now()}:function(){return(new Date).getTime()};var Kf=new Hf,Lf=!1,Mf=0,Nf="";function Of(a){R("botguard_periodic_refresh")?Mf=U():R("botguard_always_refresh")&&(Nf=a)}
function Pf(a){if(a){if(Kf.g)return!1;if(R("botguard_periodic_refresh"))return 72E5<U()-Mf;if(R("botguard_always_refresh"))return Nf!=a}else return!1;return!Lf}
function Qf(){return!!Kf.f}
function Rf(a){a=void 0===a?{}:a;a=void 0===a?{}:a;return Kf.f?Kf.f.invoke(void 0,void 0,a):null}
;var Sf=0;z("ytDomDomGetNextId",A("ytDomDomGetNextId")||function(){return++Sf},void 0);var Tf={stopImmediatePropagation:1,stopPropagation:1,preventMouseEvent:1,preventManipulation:1,preventDefault:1,layerX:1,layerY:1,screenX:1,screenY:1,scale:1,rotation:1,webkitMovementX:1,webkitMovementY:1};
function Uf(a){this.type="";this.state=this.source=this.data=this.currentTarget=this.relatedTarget=this.target=null;this.charCode=this.keyCode=0;this.metaKey=this.shiftKey=this.ctrlKey=this.altKey=!1;this.clientY=this.clientX=0;this.changedTouches=this.touches=null;try{if(a=a||window.event){this.event=a;for(var b in a)b in Tf||(this[b]=a[b]);var c=a.target||a.srcElement;c&&3==c.nodeType&&(c=c.parentNode);this.target=c;var d=a.relatedTarget;if(d)try{d=d.nodeName?d:null}catch(e){d=null}else"mouseover"==
this.type?d=a.fromElement:"mouseout"==this.type&&(d=a.toElement);this.relatedTarget=d;this.clientX=void 0!=a.clientX?a.clientX:a.pageX;this.clientY=void 0!=a.clientY?a.clientY:a.pageY;this.keyCode=a.keyCode?a.keyCode:a.which;this.charCode=a.charCode||("keypress"==this.type?this.keyCode:0);this.altKey=a.altKey;this.ctrlKey=a.ctrlKey;this.shiftKey=a.shiftKey;this.metaKey=a.metaKey;this.f=a.pageX;this.g=a.pageY}}catch(e){}}
function Vf(a){if(document.body&&document.documentElement){var b=document.body.scrollTop+document.documentElement.scrollTop;a.f=a.clientX+(document.body.scrollLeft+document.documentElement.scrollLeft);a.g=a.clientY+b}}
Uf.prototype.preventDefault=function(){this.event&&(this.event.returnValue=!1,this.event.preventDefault&&this.event.preventDefault())};
Uf.prototype.stopPropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopPropagation&&this.event.stopPropagation())};
Uf.prototype.stopImmediatePropagation=function(){this.event&&(this.event.cancelBubble=!0,this.event.stopImmediatePropagation&&this.event.stopImmediatePropagation())};var hb=A("ytEventsEventsListeners")||{};z("ytEventsEventsListeners",hb,void 0);var Wf=A("ytEventsEventsCounter")||{count:0};z("ytEventsEventsCounter",Wf,void 0);
function Xf(a,b,c,d){d=void 0===d?{}:d;a.addEventListener&&("mouseenter"!=b||"onmouseenter"in document?"mouseleave"!=b||"onmouseenter"in document?"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"):b="mouseout":b="mouseover");return gb(function(e){var f="boolean"===typeof e[4]&&e[4]==!!d,g=Ca(e[4])&&Ca(d)&&kb(e[4],d);return!!e.length&&e[0]==a&&e[1]==b&&e[2]==c&&(f||g)})}
var Yf=pb(function(){var a=!1;try{var b=Object.defineProperty({},"capture",{get:function(){a=!0}});
window.addEventListener("test",null,b)}catch(c){}return a});
function V(a,b,c,d){d=void 0===d?{}:d;if(!a||!a.addEventListener&&!a.attachEvent)return"";var e=Xf(a,b,c,d);if(e)return e;e=++Wf.count+"";var f=!("mouseenter"!=b&&"mouseleave"!=b||!a.addEventListener||"onmouseenter"in document);var g=f?function(h){h=new Uf(h);if(!hc(h.relatedTarget,function(k){return k==a}))return h.currentTarget=a,h.type=b,c.call(a,h)}:function(h){h=new Uf(h);
h.currentTarget=a;return c.call(a,h)};
g=ie(g);a.addEventListener?("mouseenter"==b&&f?b="mouseover":"mouseleave"==b&&f?b="mouseout":"mousewheel"==b&&"MozBoxSizing"in document.documentElement.style&&(b="MozMousePixelScroll"),Yf()||"boolean"===typeof d?a.addEventListener(b,g,d):a.addEventListener(b,g,!!d.capture)):a.attachEvent("on"+b,g);hb[e]=[a,b,c,g,d];return e}
function Zf(a){a&&("string"==typeof a&&(a=[a]),G(a,function(b){if(b in hb){var c=hb[b],d=c[0],e=c[1],f=c[3];c=c[4];d.removeEventListener?Yf()||"boolean"===typeof c?d.removeEventListener(e,f,c):d.removeEventListener(e,f,!!c.capture):d.detachEvent&&d.detachEvent("on"+e,f);delete hb[b]}}))}
;var $f=window.ytcsi&&window.ytcsi.now?window.ytcsi.now:window.performance&&window.performance.timing&&window.performance.now&&window.performance.timing.navigationStart?function(){return window.performance.timing.navigationStart+window.performance.now()}:function(){return(new Date).getTime()};function ag(a){this.A=a;this.f=null;this.j=0;this.m=null;this.l=0;this.h=[];for(a=0;4>a;a++)this.h.push(0);this.i=0;this.D=V(window,"mousemove",C(this.F,this));a=C(this.B,this);B(a)&&(a=ie(a));this.K=window.setInterval(a,25)}
E(ag,N);ag.prototype.F=function(a){void 0===a.f&&Vf(a);var b=a.f;void 0===a.g&&Vf(a);this.f=new Zb(b,a.g)};
ag.prototype.B=function(){if(this.f){var a=$f();if(0!=this.j){var b=this.m,c=this.f,d=b.x-c.x;b=b.y-c.y;d=Math.sqrt(d*d+b*b)/(a-this.j);this.h[this.i]=.5<Math.abs((d-this.l)/this.l)?1:0;for(c=b=0;4>c;c++)b+=this.h[c]||0;3<=b&&this.A();this.l=d}this.j=a;this.m=this.f;this.i=(this.i+1)%4}};
ag.prototype.o=function(){window.clearInterval(this.K);Zf(this.D)};var bg={};
function cg(a){var b=void 0===a?{}:a;a=void 0===b.Ca?!0:b.Ca;b=void 0===b.Oa?!1:b.Oa;if(null==A("_lact",window)){var c=parseInt(Q("LACT"),10);c=isFinite(c)?D()-Math.max(c,0):-1;z("_lact",c,window);z("_fact",c,window);-1==c&&dg();V(document,"keydown",dg);V(document,"keyup",dg);V(document,"mousedown",dg);V(document,"mouseup",dg);a&&(b?V(window,"touchmove",function(){eg("touchmove",200)},{passive:!0}):(V(window,"resize",function(){eg("resize",200)}),V(window,"scroll",function(){eg("scroll",200)})));
new ag(function(){eg("mouse",100)});
V(document,"touchstart",dg,{passive:!0});V(document,"touchend",dg,{passive:!0})}}
function eg(a,b){bg[a]||(bg[a]=!0,Af(function(){dg();bg[a]=!1},b))}
function dg(){null==A("_lact",window)&&cg();var a=D();z("_lact",a,window);-1==A("_fact",window)&&z("_fact",a,window);(a=A("ytglobal.ytUtilActivityCallback_"))&&a()}
function fg(){var a=A("_lact",window);return null==a?-1:Math.max(D()-a,0)}
;var gg=ue("initial_gel_batch_timeout",1E3),hg=Math.pow(2,16)-1,ig=null,jg=0,kg={log_event:"events",log_interaction:"interactions"},lg=Object.create(null);lg.log_event="GENERIC_EVENT_LOGGING";lg.log_interaction="INTERACTION_LOGGING";var mg=new Set(["log_event"]),ng={},og=0,pg=0,qg=0,rg=!0,W=A("ytLoggingTransportLogPayloadsQueue_")||{};z("ytLoggingTransportLogPayloadsQueue_",W,void 0);var sg=A("ytLoggingTransportTokensToCttTargetIds_")||{};z("ytLoggingTransportTokensToCttTargetIds_",sg,void 0);
var tg=A("ytLoggingTransportDispatchedStats_")||{};z("ytLoggingTransportDispatchedStats_",tg,void 0);z("ytytLoggingTransportCapturedTime_",A("ytLoggingTransportCapturedTime_")||{},void 0);function ug(){T(og);T(pg);pg=0;if(!ib(W)){for(var a in W){var b=ng[a];b&&b.isReady()&&(vg(a,b),delete W[a],rg=!1)}ib(W)||wg()}}
function wg(){R("web_gel_timeout_cap")&&!pg&&(pg=S(ug,6E4));T(og);var a=Q("LOGGING_BATCH_TIMEOUT",ue("web_gel_debounce_ms",1E4));R("shorten_initial_gel_batch_timeout")&&rg&&(a=gg);og=S(ug,a)}
function xg(a,b){b=void 0===b?"":b;W[a]=W[a]||{};W[a][b]=W[a][b]||[];return W[a][b]}
function vg(a,b){var c=kg[a],d=tg[a]||{};tg[a]=d;var e=Math.round(U());for(p in W[a]){var f=mb,g=b.f||yg();g={client:{hl:g.Ga,gl:g.Fa,clientName:g.Ea,clientVersion:g.innertubeContextClientVersion,configInfo:g.Da}};var h=window.devicePixelRatio;h&&1!=h&&(g.client.screenDensityFloat=String(h));h=Q("EXPERIMENTS_TOKEN","");""!==h&&(g.client.experimentsToken=h);var k=h=void 0,l=[],n=Q("EXPERIMENTS_FORCED_FLAGS",{});for(k in n)l.push({key:k,value:String(n[k])});k=Q("EXPERIMENT_FLAGS",{});for(h in k)h.startsWith("force_")&&
void 0===n[h]&&l.push({key:h,value:String(k[h])});h=l;0<h.length&&(g.request={internalExperimentFlags:h});Q("DELEGATED_SESSION_ID")&&!R("pageid_as_header_web")&&(g.user={onBehalfOfUser:Q("DELEGATED_SESSION_ID")});f=f({context:g});f[c]=xg(a,p);d.dispatchedEventCount=d.dispatchedEventCount||0;d.dispatchedEventCount+=f[c].length;if(g=sg[p])a:{l=p;if(g.videoId)h="VIDEO";else if(g.playlistId)h="PLAYLIST";else break a;f.credentialTransferTokenTargetId=g;f.context=f.context||{};f.context.user=f.context.user||
{};f.context.user.credentialTransferTokens=[{token:l,scope:h}]}delete sg[p];f.requestTimeMs=e;R("unsplit_gel_payloads_in_logs")&&(f.unsplitGelPayloadsInLogs=!0);if(g=Q("EVENT_ID",void 0))h=(Q("BATCH_CLIENT_COUNTER",void 0)||0)+1,h>hg&&(h=1),P("BATCH_CLIENT_COUNTER",h),g={serializedEventId:g,clientCounter:h},f.serializedClientEventId=g,ig&&jg&&R("log_gel_rtt_web")&&(f.previousBatchInfo={serializedClientEventId:ig,roundtripMs:jg}),ig=g,jg=0;zg(b,a,f,{retry:mg.has(a),onSuccess:C(Ag,this,U())})}if(d.previousDispatchMs){c=
e-d.previousDispatchMs;var p=d.diffCount||0;d.averageTimeBetweenDispatchesMs=p?(d.averageTimeBetweenDispatchesMs*p+c)/(p+1):c;d.diffCount=p+1}d.previousDispatchMs=e}
function Ag(a){jg=Math.round(U()-a)}
;var Bg=A("ytLoggingGelSequenceIdObj_")||{};z("ytLoggingGelSequenceIdObj_",Bg,void 0);
function Cg(a,b,c,d){d=void 0===d?{}:d;var e={};e.eventTimeMs=Math.round(d.timestamp||U());e[a]=b;e.context={lastActivityMs:String(d.timestamp?-1:fg())};R("log_sequence_info_on_gel_web")&&d.P&&(a=e.context,b=d.P,Bg[b]=b in Bg?Bg[b]+1:0,a.sequence={index:Bg[b],groupKey:b},d.qb&&delete Bg[d.P]);(d=d.da)?(a={},d.videoId?a.videoId=d.videoId:d.playlistId&&(a.playlistId=d.playlistId),sg[d.token]=a,d=xg("log_event",d.token)):d=xg("log_event");d.push(e);c&&(ng.log_event=new c);c=ue("web_logging_max_batch")||
100;e=U();d.length>=c?ug():10<=e-qg&&(wg(),qg=e)}
;function Dg(){return"INNERTUBE_API_KEY"in ae&&"INNERTUBE_API_VERSION"in ae}
function yg(){return{innertubeApiKey:Q("INNERTUBE_API_KEY",void 0),innertubeApiVersion:Q("INNERTUBE_API_VERSION",void 0),Da:Q("INNERTUBE_CONTEXT_CLIENT_CONFIG_INFO"),Ea:Q("INNERTUBE_CONTEXT_CLIENT_NAME","WEB"),innertubeContextClientVersion:Q("INNERTUBE_CONTEXT_CLIENT_VERSION",void 0),Ga:Q("INNERTUBE_CONTEXT_HL",void 0),Fa:Q("INNERTUBE_CONTEXT_GL",void 0),Ha:Q("INNERTUBE_HOST_OVERRIDE",void 0)||"",Ia:!!Q("INNERTUBE_USE_THIRD_PARTY_AUTH",!1)}}
function Eg(a,b,c){c=void 0===c?{}:c;var d={"X-Goog-Visitor-Id":c.visitorData||Q("VISITOR_DATA","")};if(b&&b.includes("www.youtube-nocookie.com"))return d;(b=c.nb||Q("AUTHORIZATION"))||(a?b="Bearer "+A("gapi.auth.getToken")().mb:b=Bc([]));b&&(d.Authorization=b,d["X-Goog-AuthUser"]=Q("SESSION_INDEX",0),R("pageid_as_header_web")&&(d["X-Goog-PageId"]=Q("DELEGATED_SESSION_ID")));return d}
function Fg(a){a=Object.assign({},a);delete a.Authorization;var b=Bc();if(b){var c=new yd;c.update(Q("INNERTUBE_API_KEY",void 0));c.update(b);b=c.digest();c=3;Ba(b);void 0===c&&(c=0);if(!Tb){Tb={};for(var d="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789".split(""),e=["+/=","+/","-_=","-_.","-_"],f=0;5>f;f++){var g=d.concat(e[f].split(""));Sb[f]=g;for(var h=0;h<g.length;h++){var k=g[h];void 0===Tb[k]&&(Tb[k]=h)}}}c=Sb[c];d=[];for(e=0;e<b.length;e+=3){var l=b[e],n=(f=e+1<b.length)?
b[e+1]:0;k=(g=e+2<b.length)?b[e+2]:0;h=l>>2;l=(l&3)<<4|n>>4;n=(n&15)<<2|k>>6;k&=63;g||(k=64,f||(n=64));d.push(c[h],c[l],c[n]||"",c[k]||"")}a.hash=d.join("")}return a}
;function Gg(a,b,c,d){Vb.set(""+a,b,{ma:c,path:"/",domain:void 0===d?"youtube.com":d,secure:!1})}
;function Hg(){var a=new Td;(a=a.isAvailable()?new Zd(a,"yt.innertube"):null)||(a=new Ud("yt.innertube"),a=a.isAvailable()?a:null);this.f=a?new Pd(a):null;this.g=document.domain||window.location.hostname}
Hg.prototype.set=function(a,b,c,d){c=c||31104E3;this.remove(a);if(this.f)try{this.f.set(a,b,D()+1E3*c);return}catch(f){}var e="";if(d)try{e=escape(Dd(b))}catch(f){return}else e=escape(b);Gg(a,e,c,this.g)};
Hg.prototype.get=function(a,b){var c=void 0,d=!this.f;if(!d)try{c=this.f.get(a)}catch(e){d=!0}if(d&&(c=Vb.get(""+a,void 0))&&(c=unescape(c),b))try{c=JSON.parse(c)}catch(e){this.remove(a),c=void 0}return c};
Hg.prototype.remove=function(a){this.f&&this.f.remove(a);var b=this.g;Vb.remove(""+a,"/",void 0===b?"youtube.com":b)};var Ig=new Hg;function Jg(a,b,c,d){if(d)return null;d=Ig.get("nextId",!0)||1;var e=Ig.get("requests",!0)||{};e[d]={method:a,request:b,authState:Fg(c),requestTime:Math.round(U())};Ig.set("nextId",d+1,86400,!0);Ig.set("requests",e,86400,!0);return d}
function Kg(a){var b=Ig.get("requests",!0)||{};delete b[a];Ig.set("requests",b,86400,!0)}
function Lg(a){var b=Ig.get("requests",!0);if(b){for(var c in b){var d=b[c];if(!(6E4>Math.round(U())-d.requestTime)){var e=d.authState,f=Fg(Eg(!1));kb(e,f)&&(e=d.request,"requestTimeMs"in e&&(e.requestTimeMs=Math.round(U())),zg(a,d.method,e,{}));delete b[c]}}Ig.set("requests",b,86400,!0)}}
;function Mg(a){var b=this;this.f=null;a?this.f=a:R("delay_gel_until_config_ready")?Dg()&&(this.f=yg()):this.f=yg();Bf(function(){Lg(b)},0,5E3)}
Mg.prototype.isReady=function(){!this.f&&Dg()&&(this.f=yg());return!!this.f};
function zg(a,b,c,d){!Q("VISITOR_DATA")&&"visitor_id"!==b&&.01>Math.random()&&ke(Error("Missing VISITOR_DATA when sending innertube request."));var e={headers:{"Content-Type":"application/json"},method:"POST",C:c,ra:"JSON",O:function(){d.O()},
qa:d.O,onSuccess:function(u,q){if(d.onSuccess)d.onSuccess(q)},
oa:function(u){if(d.onSuccess)d.onSuccess(u)},
onError:function(u,q){if(d.onError)d.onError(q)},
tb:function(u){if(d.onError)d.onError(u)},
timeout:d.timeout,withCredentials:!0},f="",g=a.f.Ha;g&&(f=g);g=a.f.Ia||!1;var h=Eg(g,f,d);Object.assign(e.headers,h);e.headers.Authorization&&!f&&(e.headers["x-origin"]=window.location.origin);var k=ne(""+f+("/youtubei/"+a.f.innertubeApiVersion+"/"+b),{alt:"json",key:a.f.innertubeApiKey}),l;if(d.retry&&R("retry_web_logging_batches")&&"www.youtube-nocookie.com"!=f&&(l=Jg(b,c,h,g))){var n=e.onSuccess,p=e.oa;e.onSuccess=function(u,q){Kg(l);n(u,q)};
c.oa=function(u,q){Kg(l);p(u,q)}}try{R("use_fetch_for_op_xhr")?Ee(k,e):(e.method="POST",e.C||(e.C={}),He(k,e))}catch(u){if("InvalidAccessError"==u)l&&(Kg(l),l=0),ke(Error("An extension is blocking network request."));
else throw u;}l&&Bf(function(){Lg(a)},0,5E3)}
;var Ng=D().toString();
function Og(){a:{if(window.crypto&&window.crypto.getRandomValues)try{var a=Array(16),b=new Uint8Array(16);window.crypto.getRandomValues(b);for(var c=0;c<a.length;c++)a[c]=b[c];var d=a;break a}catch(e){}d=Array(16);for(a=0;16>a;a++){b=D();for(c=0;c<b%23;c++)d[a]=Math.random();d[a]=Math.floor(256*Math.random())}if(Ng)for(a=1,b=0;b<Ng.length;b++)d[a%16]=d[a%16]^d[(a-1)%16]/4^Ng.charCodeAt(b),a++}a=[];for(b=0;b<d.length;b++)a.push("ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(d[b]&63));
return a.join("")}
;var Pg=A("ytLoggingTimeDocumentNonce_")||Og();z("ytLoggingTimeDocumentNonce_",Pg,void 0);function Qg(a){this.f=a}
function Rg(a){var b={};void 0!==a.f.trackingParams?b.trackingParams=a.f.trackingParams:(b.veType=a.f.veType,null!=a.f.veCounter&&(b.veCounter=a.f.veCounter),null!=a.f.elementIndex&&(b.elementIndex=a.f.elementIndex));void 0!==a.f.dataElement&&(b.dataElement=Rg(a.f.dataElement));void 0!==a.f.youtubeData&&(b.youtubeData=a.f.youtubeData);return b}
Qg.prototype.toString=function(){return JSON.stringify(Rg(this))};
var Sg=1;function Tg(a){a=void 0===a?0:a;return 0==a?"client-screen-nonce":"client-screen-nonce."+a}
function Ug(a){a=void 0===a?0:a;return 0==a?"ROOT_VE_TYPE":"ROOT_VE_TYPE."+a}
function Vg(a){return Q(Ug(void 0===a?0:a),void 0)}
z("yt_logging_screen.getRootVeType",Vg,void 0);function Wg(){var a=Vg(0),b;a?b=new Qg({veType:a,youtubeData:void 0}):b=null;return b}
function Xg(){var a=Q("csn-to-ctt-auth-info");a||(a={},P("csn-to-ctt-auth-info",a));return a}
function Yg(a){a=void 0===a?0:a;var b=Q(Tg(a));b||0!=a||(R("kevlar_client_side_screens")||R("c3_client_side_screens")?b="UNDEFINED_CSN":b=Q("EVENT_ID"));return b?b:null}
z("yt_logging_screen.getCurrentCsn",Yg,void 0);function Zg(a,b,c){var d=Xg();(c=Yg(c))&&delete d[c];b&&(d[a]=b)}
function $g(a){return Xg()[a]}
z("yt_logging_screen.getCttAuthInfo",$g,void 0);function ah(a,b,c,d){c=void 0===c?0:c;if(a!==Q(Tg(c))||b!==Q(Ug(c)))Zg(a,d,c),P(Tg(c),a),P(Ug(c),b),0==c&&(b=function(){setTimeout(function(){a&&Cg("foregroundHeartbeatScreenAssociated",{clientDocumentNonce:Pg,clientScreenNonce:a},Mg)},0)},"requestAnimationFrame"in window?window.requestAnimationFrame(b):b())}
z("yt_logging_screen.setCurrentScreen",ah,void 0);function bh(a,b,c){b=void 0===b?{}:b;c=void 0===c?!1:c;var d=Q("EVENT_ID");d&&(b.ei||(b.ei=d));if(b){d=a;var e=void 0===e?!0:e;var f=Q("VALID_SESSION_TEMPDATA_DOMAINS",[]),g=J(L(3,window.location.href));g&&f.push(g);g=J(L(3,d));if(0<=La(f,g)||!g&&0==d.lastIndexOf("/",0))if(R("autoescape_tempdata_url")&&(f=document.createElement("a"),Kb(f,d),d=f.href),d){g=d.match(kc);d=g[5];f=g[6];g=g[7];var h="";d&&(h+=d);f&&(h+="?"+f);g&&(h+="#"+g);d=h;f=d.indexOf("#");if(d=0>f?d:d.substr(0,f))if(e&&!b.csn&&(b.itct||
b.ved)&&(b=Object.assign({csn:Yg()},b)),k){var k=parseInt(k,10);isFinite(k)&&0<k&&(e=b,b="ST-"+Nb(d).toString(36),e=e?mc(e):"",Gg(b,e,k||5))}else k=b,e="ST-"+Nb(d).toString(36),k=k?mc(k):"",Gg(e,k,5)}}if(c)return!1;if((window.ytspf||{}).enabled)spf.navigate(a);else{var l=void 0===l?{}:l;var n=void 0===n?"":n;var p=void 0===p?window:p;c=p.location;a=nc(a,l)+n;a=a instanceof H?a:Db(a);c.href=Bb(a)}return!0}
;function ch(a,b){this.version=a;this.args=b}
;function dh(a,b){this.topic=a;this.f=b}
dh.prototype.toString=function(){return this.topic};var eh=A("ytPubsub2Pubsub2Instance")||new O;O.prototype.subscribe=O.prototype.subscribe;O.prototype.unsubscribeByKey=O.prototype.N;O.prototype.publish=O.prototype.M;O.prototype.clear=O.prototype.clear;z("ytPubsub2Pubsub2Instance",eh,void 0);var fh=A("ytPubsub2Pubsub2SubscribedKeys")||{};z("ytPubsub2Pubsub2SubscribedKeys",fh,void 0);var gh=A("ytPubsub2Pubsub2TopicToKeys")||{};z("ytPubsub2Pubsub2TopicToKeys",gh,void 0);var hh=A("ytPubsub2Pubsub2IsAsync")||{};z("ytPubsub2Pubsub2IsAsync",hh,void 0);
z("ytPubsub2Pubsub2SkipSubKey",null,void 0);function ih(a,b){var c=jh();c&&c.publish.call(c,a.toString(),a,b)}
function kh(a){var b=lh,c=jh();if(!c)return 0;var d=c.subscribe(b.toString(),function(e,f){var g=A("ytPubsub2Pubsub2SkipSubKey");g&&g==d||(g=function(){if(fh[d])try{if(f&&b instanceof dh&&b!=e)try{var h=b.f,k=f;if(!k.args||!k.version)throw Error("yt.pubsub2.Data.deserialize(): serializedData is incomplete.");try{if(!h.H){var l=new h;h.H=l.version}var n=h.H}catch(p){}if(!n||k.version!=n)throw Error("yt.pubsub2.Data.deserialize(): serializedData version is incompatible.");try{f=Reflect.construct(h,
Ra(k.args))}catch(p){throw p.message="yt.pubsub2.Data.deserialize(): "+p.message,p;}}catch(p){throw p.message="yt.pubsub2.pubsub2 cross-binary conversion error for "+b.toString()+": "+p.message,p;}a.call(window,f)}catch(p){je(p)}},hh[b.toString()]?A("yt.scheduler.instance")?Af(g):S(g,0):g())});
fh[d]=!0;gh[b.toString()]||(gh[b.toString()]=[]);gh[b.toString()].push(d);return d}
function mh(){var a=nh,b=kh(function(c){a.apply(void 0,arguments);oh(b)});
return b}
function oh(a){var b=jh();b&&("number"===typeof a&&(a=[a]),G(a,function(c){b.unsubscribeByKey(c);delete fh[c]}))}
function jh(){return A("ytPubsub2Pubsub2Instance")}
;function ph(a){ch.call(this,1,arguments);this.csn=a}
t(ph,ch);var lh=new dh("screen-created",ph),qh=[],rh=0;function sh(a,b,c){b={csn:a,parentVe:Rg(b),childVes:Na(c,function(e){return Rg(e)})};
c=r(c);for(var d=c.next();!d.done;d=c.next())d=Rg(d.value),(ib(d)||!d.trackingParams&&!d.veType)&&Ze(Error("Child VE logged with no data"),"WARNING");c={da:$g(a),P:a};"UNDEFINED_CSN"==a?th("visualElementAttached",b,c):Cg("visualElementAttached",b,Mg,c)}
function th(a,b,c){qh.push({Na:a,payload:b,options:c});rh||(rh=mh())}
function nh(a){if(qh){for(var b=r(qh),c=b.next();!c.done;c=b.next())c=c.value,c.payload&&(c.payload.csn=a.csn,Cg(c.Na,c.payload,null,c.options));qh.length=0}rh=0}
;function uh(a){a=a||{};var b={},c={};this.url=a.url||"";this.args=a.args||lb(b);this.assets=a.assets||{};this.attrs=a.attrs||lb(c);this.fallback=a.fallback||null;this.fallbackMessage=a.fallbackMessage||null;this.html5=!!a.html5;this.disable=a.disable||{};this.loaded=!!a.loaded;this.messages=a.messages||{}}
uh.prototype.clone=function(){var a=new uh,b;for(b in this)if(this.hasOwnProperty(b)){var c=this[b];"object"==za(c)?a[b]=lb(c):a[b]=c}return a};function vh(){N.call(this);this.f=[]}
t(vh,N);vh.prototype.o=function(){for(;this.f.length;){var a=this.f.pop();a.target.removeEventListener(a.name,a.ob)}N.prototype.o.call(this)};var wh=/cssbin\/(?:debug-)?([a-zA-Z0-9_-]+?)(?:-2x|-web|-rtl|-vfl|.css)/;function xh(a){a=a||"";if(window.spf){var b=a.match(wh);spf.style.load(a,b?b[1]:"",void 0)}else yh(a)}
function yh(a){var b=zh(a),c=document.getElementById(b),d=c&&df(c,"loaded");d||c&&!d||(c=Ah(a,b,function(){df(c,"loaded")||(bf(c),nf(b),S(Ja(of,b),0))}))}
function Ah(a,b,c){var d=document.createElement("link");d.id=b;d.onload=function(){c&&setTimeout(c,0)};
a=ic(a);d.rel="stylesheet";d.href=yb(a).toString();(document.getElementsByTagName("head")[0]||document.body).appendChild(d);return d}
function zh(a){var b=ec(document,"A");Kb(b,new H(zb,a));a=b.href.replace(/^[a-zA-Z]+:\/\//,"//");return"css-"+Nb(a)}
;function Bh(a,b,c,d){N.call(this);var e=this;this.l=this.X=a;this.U=b;this.A=!1;this.api={};this.V=this.D=null;this.F=new O;Ad(this,Ja(Bd,this.F));this.i={};this.R=this.W=this.h=this.ca=this.f=null;this.K=!1;this.j=this.B=null;this.Y={};this.ua=["onReady"];this.ba=null;this.ka=NaN;this.S={};this.m=d;Ch(this);this.Z("WATCH_LATER_VIDEO_ADDED",this.Ka.bind(this));this.Z("WATCH_LATER_VIDEO_REMOVED",this.La.bind(this));this.Z("onAdAnnounce",this.wa.bind(this));this.va=new vh(this);Ad(this,Ja(Bd,this.va));
this.T=0;c?this.T=S(function(){e.loadNewVideoConfig(c)},0):d&&(Dh(this),Eh(this))}
t(Bh,N);m=Bh.prototype;m.getId=function(){return this.U};
m.loadNewVideoConfig=function(a){if(!this.g){this.T&&(T(this.T),this.T=0);a instanceof uh||(a=new uh(a));this.ca=a;this.f=a.clone();Dh(this);this.W||(this.W=Fh(this,this.f.args.jsapicallback||"onYouTubePlayerReady"));this.f.args.jsapicallback=null;if(a=this.f.attrs.width)this.l.style.width=vc(Number(a)||a);if(a=this.f.attrs.height)this.l.style.height=vc(Number(a)||a);Eh(this);this.A&&Gh(this)}};
function Dh(a){var b;a.m?b=a.m.rootElementId:b=a.f.attrs.id;a.h=b||a.h;"video-player"==a.h&&(a.h=a.U,a.f.attrs.id=a.U);a.l.id==a.h&&(a.h+="-player",a.f.attrs.id=a.h)}
m.za=function(){return this.ca};
function Gh(a){a.f&&!a.f.loaded&&(a.f.loaded=!0,"0"!=a.f.args.autoplay?a.api.loadVideoByPlayerVars(a.f.args):a.api.cueVideoByPlayerVars(a.f.args))}
function Hh(a){var b=!0,c=Ih(a);c&&a.f&&(a=Jh(a),b=df(c,"version")===a);return b&&!!A("yt.player.Application.create")}
function Eh(a){if(!a.g&&!a.K){var b=Hh(a);if(b&&"html5"==(Ih(a)?"html5":null))a.R="html5",a.A||Kh(a);else if(Lh(a),a.R="html5",b&&a.j)a.X.appendChild(a.j),Kh(a);else{a.f&&(a.f.loaded=!0);var c=!1;a.B=function(){c=!0;var d=A("yt.player.Application.create"),e=a.f?a.f.clone():void 0;d(a.X,e,a.m);Kh(a)};
a.K=!0;b?a.B():(sf(Jh(a),a.B),xh(a.m?a.m.cssUrl:a.f.assets.css),Mh(a)&&!c&&z("yt.player.Application.create",null,void 0))}}}
function Ih(a){var b=ac(a.h);!b&&a.l&&a.l.querySelector&&(b=a.l.querySelector("#"+a.h));return b}
function Kh(a){if(!a.g){var b=Ih(a),c=!1;b&&b.getApiInterface&&b.getApiInterface()&&(c=!0);c?(a.K=!1,b.isNotServable&&a.f&&b.isNotServable(a.f.args.video_id)||Nh(a)):a.ka=S(function(){Kh(a)},50)}}
function Nh(a){Ch(a);a.A=!0;var b=Ih(a);b.addEventListener&&(a.D=Oh(a,b,"addEventListener"));b.removeEventListener&&(a.V=Oh(a,b,"removeEventListener"));var c=b.getApiInterface();c=c.concat(b.getInternalApiInterface());for(var d=0;d<c.length;d++){var e=c[d];a.api[e]||(a.api[e]=Oh(a,b,e))}for(var f in a.i)a.D(f,a.i[f]);Gh(a);a.W&&a.W(a.api);a.F.M("onReady",a.api)}
function Oh(a,b,c){var d=b[c];return function(){try{return a.ba=null,d.apply(b,arguments)}catch(e){"sendAbandonmentPing"!=c&&(e.params=c,a.ba=e,ke(e))}}}
function Ch(a){a.A=!1;if(a.V)for(var b in a.i)a.V(b,a.i[b]);for(var c in a.S)T(parseInt(c,10));a.S={};a.D=null;a.V=null;for(var d in a.api)a.api[d]=null;a.api.addEventListener=a.Z.bind(a);a.api.removeEventListener=a.Qa.bind(a);a.api.destroy=a.dispose.bind(a);a.api.getLastError=a.Aa.bind(a);a.api.getPlayerType=a.Ba.bind(a);a.api.getCurrentVideoConfig=a.za.bind(a);a.api.loadNewVideoConfig=a.loadNewVideoConfig.bind(a);a.api.isReady=a.Ja.bind(a)}
m.Ja=function(){return this.A};
m.Z=function(a,b){var c=this,d=Fh(this,b);if(d){if(!(0<=La(this.ua,a)||this.i[a])){var e=Ph(this,a);this.D&&this.D(a,e)}this.F.subscribe(a,d);"onReady"==a&&this.A&&S(function(){d(c.api)},0)}};
m.Qa=function(a,b){if(!this.g){var c=Fh(this,b);c&&Jd(this.F,a,c)}};
function Fh(a,b){var c=b;if("string"==typeof b){if(a.Y[b])return a.Y[b];c=function(){var d=A(b);d&&d.apply(x,arguments)};
a.Y[b]=c}return c?c:null}
function Ph(a,b){var c="ytPlayer"+b+a.U;a.i[b]=c;x[c]=function(d){var e=S(function(){if(!a.g){a.F.M(b,d);var f=a.S,g=String(e);g in f&&delete f[g]}},0);
jb(a.S,String(e))};
return c}
m.wa=function(a){nf("a11y-announce",a)};
m.Ka=function(a){nf("WATCH_LATER_VIDEO_ADDED",a)};
m.La=function(a){nf("WATCH_LATER_VIDEO_REMOVED",a)};
m.Ba=function(){return this.R||(Ih(this)?"html5":null)};
m.Aa=function(){return this.ba};
function Lh(a){a.cancel();Ch(a);a.R=null;a.f&&(a.f.loaded=!1);var b=Ih(a);b&&(Hh(a)||!Mh(a)?a.j=b:(b&&b.destroy&&b.destroy(),a.j=null));for(a=a.X;b=a.firstChild;)a.removeChild(b)}
m.cancel=function(){this.B&&yf(Jh(this),this.B);T(this.ka);this.K=!1};
m.o=function(){Lh(this);if(this.j&&this.f&&this.j.destroy)try{this.j.destroy()}catch(b){je(b)}this.Y=null;for(var a in this.i)x[this.i[a]]=null;this.ca=this.f=this.api=null;delete this.X;delete this.l;N.prototype.o.call(this)};
function Mh(a){return a.f&&a.f.args&&a.f.args.fflags?-1!=a.f.args.fflags.indexOf("player_destroy_old_version=true"):!1}
function Jh(a){return a.m?a.m.jsUrl:a.f.assets.js}
;var Qh={},Rh="player_uid_"+(1E9*Math.random()>>>0);function Sh(a){delete Qh[a.getId()]}
;var Th=window,X=Th.performance||Th.mozPerformance||Th.msPerformance||Th.webkitPerformance||{};function Uh(a,b){ch.call(this,1,arguments)}
t(Uh,ch);function Vh(a,b){ch.call(this,1,arguments)}
t(Vh,ch);var Wh=new dh("aft-recorded",Uh),Xh=new dh("timing-sent",Vh);var Yh=!1;function Zh(){var a=$h(void 0);if(a.aft)return a.aft;for(var b=Q("TIMING_AFT_KEYS",["ol"]),c=b.length,d=0;d<c;d++){var e=a[b[d]];if(e)return e}return NaN}
function ai(a){var b;(b=A("ytcsi."+(a||"")+"data_"))||(b={tick:{},info:{}},Ka("ytcsi."+(a||"")+"data_",b));return b}
function bi(){var a=ai(void 0);a.info||(a.info={});return a.info}
function $h(a){a=ai(a);a.tick||(a.tick={});return a.tick}
function ci(){var a=ai(void 0).nonce;a||(a=Og(),ai(void 0).nonce=a);return a}
function di(){var a=$h(""),b=Zh();b&&!Yh&&(ih(Wh,new Uh(Math.round(b-a._start),void 0)),Yh=!0)}
;function ei(a,b){for(var c=[],d=1;d<arguments.length;++d)c[d-1]=arguments[d];if(!fi(a)||c.some(function(e){return!fi(e)}))throw Error("Only objects may be merged.");
c=r(c);for(d=c.next();!d.done;d=c.next())gi(a,d.value);return a}
function gi(a,b){for(var c in b)if(fi(b[c])){if(c in a&&!fi(a[c]))throw Error("Cannot merge an object into a non-object.");c in a||(a[c]={});gi(a[c],b[c])}else if(hi(b[c])){if(c in a&&!hi(a[c]))throw Error("Cannot merge an array into a non-array.");c in a||(a[c]=[]);ii(a[c],b[c])}else a[c]=b[c];return a}
function ii(a,b){for(var c=r(b),d=c.next();!d.done;d=c.next())d=d.value,fi(d)?a.push(gi({},d)):hi(d)?a.push(ii([],d)):a.push(d);return a}
function fi(a){return"object"===typeof a&&!Array.isArray(a)}
function hi(a){return"object"===typeof a&&Array.isArray(a)}
;function ji(){var a=A("ytcsi.debug");a||(a=[],z("ytcsi.debug",a,void 0),z("ytcsi.reference",{},void 0));return a}
function ki(){var a=A("ytcsi.reference");a||(ji(),a=A("ytcsi.reference"));if(a[""])return a[""];var b={timerName:"",info:{},tick:{}};ji().push(b);return a[""]=b}
;function li(a,b,c){c=void 0===c?{}:c;var d=Mg;Q("ytLoggingEventsDefaultDisabled",!1)&&Mg==Mg&&(d=null);Cg(a,b,d,c)}
;var mi=A("ytLoggingLatencyUsageStats_")||{};z("ytLoggingLatencyUsageStats_",mi,void 0);function ni(){this.f=0}
function oi(){ni.f||(ni.f=new ni);return ni.f}
ni.prototype.tick=function(a,b,c){pi(this,"tick_"+a+"_"+b)||li("latencyActionTicked",{tickName:a,clientActionNonce:b},{timestamp:c})};
ni.prototype.info=function(a,b){var c=Object.keys(a).join("");pi(this,"info_"+c+"_"+b)||(a.clientActionNonce=b,li("latencyActionInfo",a))};
function pi(a,b){mi[b]=mi[b]||{count:0};var c=mi[b];c.count++;c.time=U();a.f||(a.f=Bf(function(){var d=U(),e;for(e in mi)mi[e]&&6E4<d-mi[e].time&&delete mi[e];a&&(a.f=0)},0,5E3));
return 5<c.count?(6===c.count&&1>1E5*Math.random()&&(c=new Te("CSI data exceeded logging limit with key"),c.params={key:b},0===b.indexOf("info")?Xe(c):We(c)),!0):!1}
;var Y={},qi=(Y.ad_allowed="adTypesAllowed",Y.yt_abt="adBreakType",Y.ad_cpn="adClientPlaybackNonce",Y.ad_docid="adVideoId",Y.yt_ad_an="adNetworks",Y.ad_at="adType",Y.browse_id="browseId",Y.p="httpProtocol",Y.t="transportProtocol",Y.cpn="clientPlaybackNonce",Y.cseg="creatorInfo.creatorSegment",Y.csn="clientScreenNonce",Y.docid="videoId",Y.GetHome_rid="getHomeRequestId",Y.GetSearch_rid="getSearchRequestId",Y.GetPlayer_rid="getPlayerRequestId",Y.GetWatchNext_rid="getWatchNextRequestId",Y.GetBrowse_rid=
"getBrowseRequestId",Y.is_continuation="isContinuation",Y.is_nav="isNavigation",Y.b_p="kabukiInfo.browseParams",Y.is_prefetch="kabukiInfo.isPrefetch",Y.is_secondary_nav="kabukiInfo.isSecondaryNav",Y.prev_browse_id="kabukiInfo.prevBrowseId",Y.query_source="kabukiInfo.querySource",Y.voz_type="kabukiInfo.vozType",Y.yt_lt="loadType",Y.mver="creatorInfo.measurementVersion",Y.yt_ad="isMonetized",Y.nr="webInfo.navigationReason",Y.nrsu="navigationRequestedSameUrl",Y.ncnp="webInfo.nonPreloadedNodeCount",Y.prt=
"playbackRequiresTap",Y.plt="playerInfo.playbackType",Y.pis="playerInfo.playerInitializedState",Y.paused="playerInfo.isPausedOnLoad",Y.yt_pt="playerType",Y.fmt="playerInfo.itag",Y.yt_pl="watchInfo.isPlaylist",Y.yt_pre="playerInfo.preloadType",Y.yt_ad_pr="prerollAllowed",Y.pa="previousAction",Y.yt_red="isRedSubscriber",Y.rce="mwebInfo.responseContentEncoding",Y.scrh="screenHeight",Y.scrw="screenWidth",Y.st="serverTimeMs",Y.aq="tvInfo.appQuality",Y.br_trs="tvInfo.bedrockTriggerState",Y.kebqat="kabukiInfo.earlyBrowseRequestInfo.abandonmentType",
Y.kebqa="kabukiInfo.earlyBrowseRequestInfo.adopted",Y.label="tvInfo.label",Y.is_mdx="tvInfo.isMdx",Y.preloaded="tvInfo.isPreloaded",Y.upg_player_vis="playerInfo.visibilityState",Y.query="unpluggedInfo.query",Y.upg_chip_ids_string="unpluggedInfo.upgChipIdsString",Y.yt_vst="videoStreamType",Y.vph="viewportHeight",Y.vpw="viewportWidth",Y.yt_vis="isVisible",Y.rcl="mwebInfo.responseContentLength",Y.GetSettings_rid="mwebInfo.getSettingsRequestId",Y.GetTrending_rid="mwebInfo.getTrendingRequestId",Y),ri=
"isContinuation isNavigation kabukiInfo.earlyBrowseRequestInfo.adopted kabukiInfo.isPrefetch kabukiInfo.isSecondaryNav isMonetized playerInfo.isPausedOnLoad prerollAllowed isRedSubscriber tvInfo.isMdx tvInfo.isPreloaded isVisible watchInfo.isPlaylist playbackRequiresTap".split(" "),si={},ti=(si.mver="MEASUREMENT_VERSION_",si.pis="PLAYER_INITIALIZED_STATE_",si.yt_pt="LATENCY_PLAYER_",si.pa="LATENCY_ACTION_",si.yt_vst="VIDEO_STREAM_TYPE_",si),ui="all_vc ap c cver cbrand cmodel cplatform ctheme ei l_an l_mm plid srt yt_fss yt_li vpst vpni2 vpil2 icrc icrt pa GetAccountOverview_rid GetHistory_rid cmt d_vpct d_vpnfi d_vpni nsru pc pfa pfeh pftr pnc prerender psc rc start tcrt tcrc ssr vpr vps yt_abt yt_fn yt_fs yt_pft yt_pre yt_pt yt_pvis ytu_pvis yt_ref yt_sts tds".split(" ");
function vi(){return!!Q("FORCE_CSI_ON_GEL",!1)||R("csi_on_gel")||!!ai(void 0).useGel}
function wi(){var a=ai(void 0);if(!("gel"in a))a.gel={gelTicks:{},gelInfos:{}};else if(a.gel){var b=a.gel;b.gelInfos||(b.gelInfos={});b.gelTicks||(b.gelTicks={})}return a.gel}
;C(X.clearResourceTimings||X.webkitClearResourceTimings||X.mozClearResourceTimings||X.msClearResourceTimings||X.oClearResourceTimings||xa,X);function xi(a){return(0==a.search("cue")||0==a.search("load"))&&"loadModule"!=a}
function yi(a,b,c){"string"===typeof a&&(a={mediaContentUrl:a,startSeconds:b,suggestedQuality:c});b=/\/([ve]|embed)\/([^#?]+)/.exec(a.mediaContentUrl);a.videoId=b&&b[2]?b[2]:null;return zi(a)}
function zi(a,b,c){if(Ca(a)){b=["endSeconds","startSeconds","mediaContentUrl","suggestedQuality","videoId"];c={};for(var d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}return{videoId:a,startSeconds:b,suggestedQuality:c}}
function Ai(a,b,c,d){if(Ca(a)&&!Aa(a)){b="playlist list listType index startSeconds suggestedQuality".split(" ");c={};for(d=0;d<b.length;d++){var e=b[d];a[e]&&(c[e]=a[e])}return c}b={index:b,startSeconds:c,suggestedQuality:d};"string"===typeof a&&16==a.length?b.list="PL"+a:b.playlist=a;return b}
;function Bi(a){a=void 0===a?!1:a;N.call(this);this.f=new O(a);Ad(this,Ja(Bd,this.f))}
E(Bi,N);Bi.prototype.subscribe=function(a,b,c){return this.g?0:this.f.subscribe(a,b,c)};
Bi.prototype.j=function(a,b){this.g||this.f.M.apply(this.f,arguments)};function Ci(a,b,c){Bi.call(this);this.h=a;this.i=b;this.l=c}
t(Ci,Bi);function Di(a,b,c){if(!a.g){var d=a.h;d.g||a.i!=d.f||(a={id:a.l,command:b},c&&(a.data=c),d.f.postMessage(Dd(a),d.i))}}
Ci.prototype.o=function(){this.i=this.h=null;Bi.prototype.o.call(this)};function Ei(a){N.call(this);this.f=a;this.f.subscribe("command",this.sa,this);this.h={};this.j=!1}
t(Ei,N);m=Ei.prototype;m.start=function(){this.j||this.g||(this.j=!0,Di(this.f,"RECEIVING"))};
m.sa=function(a,b,c){if(this.j&&!this.g){var d=b||{};switch(a){case "addEventListener":"string"===typeof d.event&&(a=d.event,a in this.h||(c=C(this.Sa,this,a),this.h[a]=c,this.addEventListener(a,c)));break;case "removeEventListener":"string"===typeof d.event&&Fi(this,d.event);break;default:this.i.isReady()&&this.i.isExternalMethodAvailable(a,c||null)&&(b=Gi(a,b||{}),c=this.i.handleExternalCall(a,b,c||null),(c=Hi(a,c))&&this.j&&!this.g&&Di(this.f,a,c))}}};
m.Sa=function(a,b){this.j&&!this.g&&Di(this.f,a,this.fa(a,b))};
m.fa=function(a,b){if(null!=b)return{value:b}};
function Fi(a,b){b in a.h&&(a.removeEventListener(b,a.h[b]),delete a.h[b])}
m.o=function(){var a=this.f;a.g||Jd(a.f,"command",this.sa,this);this.f=null;for(var b in this.h)Fi(this,b);N.prototype.o.call(this)};function Ii(a,b){Ei.call(this,b);this.i=a;this.start()}
t(Ii,Ei);Ii.prototype.addEventListener=function(a,b){this.i.addEventListener(a,b)};
Ii.prototype.removeEventListener=function(a,b){this.i.removeEventListener(a,b)};
function Gi(a,b){switch(a){case "loadVideoById":return b=zi(b),[b];case "cueVideoById":return b=zi(b),[b];case "loadVideoByPlayerVars":return[b];case "cueVideoByPlayerVars":return[b];case "loadPlaylist":return b=Ai(b),[b];case "cuePlaylist":return b=Ai(b),[b];case "seekTo":return[b.seconds,b.allowSeekAhead];case "playVideoAt":return[b.index];case "setVolume":return[b.volume];case "setPlaybackQuality":return[b.suggestedQuality];case "setPlaybackRate":return[b.suggestedRate];case "setLoop":return[b.loopPlaylists];
case "setShuffle":return[b.shufflePlaylist];case "getOptions":return[b.module];case "getOption":return[b.module,b.option];case "setOption":return[b.module,b.option,b.value];case "handleGlobalKeyDown":return[b.keyCode,b.shiftKey,b.ctrlKey,b.altKey,b.metaKey,b.key,b.code]}return[]}
function Hi(a,b){switch(a){case "isMuted":return{muted:b};case "getVolume":return{volume:b};case "getPlaybackRate":return{playbackRate:b};case "getAvailablePlaybackRates":return{availablePlaybackRates:b};case "getVideoLoadedFraction":return{videoLoadedFraction:b};case "getPlayerState":return{playerState:b};case "getCurrentTime":return{currentTime:b};case "getPlaybackQuality":return{playbackQuality:b};case "getAvailableQualityLevels":return{availableQualityLevels:b};case "getDuration":return{duration:b};
case "getVideoUrl":return{videoUrl:b};case "getVideoEmbedCode":return{videoEmbedCode:b};case "getPlaylist":return{playlist:b};case "getPlaylistIndex":return{playlistIndex:b};case "getOptions":return{options:b};case "getOption":return{option:b}}}
Ii.prototype.fa=function(a,b){switch(a){case "onReady":return;case "onStateChange":return{playerState:b};case "onPlaybackQualityChange":return{playbackQuality:b};case "onPlaybackRateChange":return{playbackRate:b};case "onError":return{errorCode:b}}return Ei.prototype.fa.call(this,a,b)};
Ii.prototype.o=function(){Ei.prototype.o.call(this);delete this.i};function Ji(a,b,c){N.call(this);var d=this;c=c||Q("POST_MESSAGE_ORIGIN",void 0)||window.document.location.protocol+"//"+window.document.location.hostname;this.h=b||null;this.A="*";this.i=c;this.sessionId=null;this.channel="widget";this.B=!!a;this.m=function(e){a:if(!("*"!=d.i&&e.origin!=d.i||d.h&&e.source!=d.h||"string"!==typeof e.data)){try{var f=JSON.parse(e.data)}catch(g){break a}if(!(null==f||d.B&&(d.sessionId&&d.sessionId!=f.id||d.channel&&d.channel!=f.channel))&&f)switch(f.event){case "listening":"null"!=
e.origin&&(d.i=d.A=e.origin);d.h=e.source;d.sessionId=f.id;d.f&&(d.f(),d.f=null);break;case "command":d.j&&(!d.l||0<=La(d.l,f.func))&&d.j(f.func,f.args,e.origin)}}};
this.l=this.f=this.j=null;window.addEventListener("message",this.m)}
t(Ji,N);Ji.prototype.sendMessage=function(a,b){var c=b||this.h;if(c){this.sessionId&&(a.id=this.sessionId);this.channel&&(a.channel=this.channel);try{var d=JSON.stringify(a);c.postMessage(d,this.A)}catch(e){ke(e)}}};
Ji.prototype.o=function(){window.removeEventListener("message",this.m);N.prototype.o.call(this)};function Ki(){var a=this.g=new Ji(!!Q("WIDGET_ID_ENFORCE")),b=C(this.Pa,this);a.j=b;a.l=null;this.g.channel="widget";if(a=Q("WIDGET_ID"))this.g.sessionId=a;this.i=[];this.l=!1;this.j={}}
m=Ki.prototype;m.Pa=function(a,b,c){"addEventListener"==a&&b?(a=b[0],this.j[a]||"onReady"==a||(this.addEventListener(a,Li(this,a)),this.j[a]=!0)):this.na(a,b,c)};
m.na=function(){};
function Li(a,b){return C(function(c){this.sendMessage(b,c)},a)}
m.addEventListener=function(){};
m.ya=function(){this.l=!0;this.sendMessage("initialDelivery",this.ga());this.sendMessage("onReady");G(this.i,this.ta,this);this.i=[]};
m.ga=function(){return null};
function Mi(a,b){a.sendMessage("infoDelivery",b)}
m.ta=function(a){this.l?this.g.sendMessage(a):this.i.push(a)};
m.sendMessage=function(a,b){this.ta({event:a,info:void 0==b?null:b})};
m.dispose=function(){this.g=null};function Ni(a){Ki.call(this);this.f=a;this.h=[];this.addEventListener("onReady",C(this.Ma,this));this.addEventListener("onVideoProgress",C(this.Wa,this));this.addEventListener("onVolumeChange",C(this.Xa,this));this.addEventListener("onApiChange",C(this.Ra,this));this.addEventListener("onPlaybackQualityChange",C(this.Ta,this));this.addEventListener("onPlaybackRateChange",C(this.Ua,this));this.addEventListener("onStateChange",C(this.Va,this));this.addEventListener("onWebglSettingsChanged",C(this.Ya,
this))}
t(Ni,Ki);m=Ni.prototype;m.na=function(a,b,c){if(this.f.isExternalMethodAvailable(a,c)){b=b||[];if(0<b.length&&xi(a)){var d=b;if(Ca(d[0])&&!Aa(d[0]))d=d[0];else{var e={};switch(a){case "loadVideoById":case "cueVideoById":e=zi.apply(window,d);break;case "loadVideoByUrl":case "cueVideoByUrl":e=yi.apply(window,d);break;case "loadPlaylist":case "cuePlaylist":e=Ai.apply(window,d)}d=e}b.length=1;b[0]=d}this.f.handleExternalCall(a,b,c);xi(a)&&Mi(this,this.ga())}};
m.Ma=function(){var a=C(this.ya,this);this.g.f=a};
m.addEventListener=function(a,b){this.h.push({eventType:a,listener:b});this.f.addEventListener(a,b)};
m.ga=function(){if(!this.f)return null;var a=this.f.getApiInterface();Qa(a,"getVideoData");for(var b={apiInterface:a},c=0,d=a.length;c<d;c++){var e=a[c];if(0==e.search("get")||0==e.search("is")){var f=0;0==e.search("get")?f=3:0==e.search("is")&&(f=2);f=e.charAt(f).toLowerCase()+e.substr(f+1);try{var g=this.f[e]();b[f]=g}catch(h){}}}b.videoData=this.f.getVideoData();b.currentTimeLastUpdated_=D()/1E3;return b};
m.Va=function(a){a={playerState:a,currentTime:this.f.getCurrentTime(),duration:this.f.getDuration(),videoData:this.f.getVideoData(),videoStartBytes:0,videoBytesTotal:this.f.getVideoBytesTotal(),videoLoadedFraction:this.f.getVideoLoadedFraction(),playbackQuality:this.f.getPlaybackQuality(),availableQualityLevels:this.f.getAvailableQualityLevels(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getVideoUrl&&(a.videoUrl=
this.f.getVideoUrl());this.f.getVideoContentRect&&(a.videoContentRect=this.f.getVideoContentRect());this.f.getProgressState&&(a.progressState=this.f.getProgressState());this.f.getPlaylist&&(a.playlist=this.f.getPlaylist());this.f.getPlaylistIndex&&(a.playlistIndex=this.f.getPlaylistIndex());this.f.getStoryboardFormat&&(a.storyboardFormat=this.f.getStoryboardFormat());Mi(this,a)};
m.Ta=function(a){Mi(this,{playbackQuality:a})};
m.Ua=function(a){Mi(this,{playbackRate:a})};
m.Ra=function(){for(var a=this.f.getOptions(),b={namespaces:a},c=0,d=a.length;c<d;c++){var e=a[c],f=this.f.getOptions(e);b[e]={options:f};for(var g=0,h=f.length;g<h;g++){var k=f[g],l=this.f.getOption(e,k);b[e][k]=l}}this.sendMessage("apiInfoDelivery",b)};
m.Xa=function(){Mi(this,{muted:this.f.isMuted(),volume:this.f.getVolume()})};
m.Wa=function(a){a={currentTime:a,videoBytesLoaded:this.f.getVideoBytesLoaded(),videoLoadedFraction:this.f.getVideoLoadedFraction(),currentTimeLastUpdated_:D()/1E3,playbackRate:this.f.getPlaybackRate(),mediaReferenceTime:this.f.getMediaReferenceTime()};this.f.getProgressState&&(a.progressState=this.f.getProgressState());Mi(this,a)};
m.Ya=function(){var a={sphericalProperties:this.f.getSphericalProperties()};Mi(this,a)};
m.dispose=function(){Ki.prototype.dispose.call(this);for(var a=0;a<this.h.length;a++){var b=this.h[a];this.f.removeEventListener(b.eventType,b.listener)}this.h=[]};function Oi(a,b,c){N.call(this);this.f=a;this.i=c;this.j=V(window,"message",C(this.l,this));this.h=new Ci(this,a,b);Ad(this,Ja(Bd,this.h))}
t(Oi,N);Oi.prototype.l=function(a){var b;if(b=!this.g)if(b=a.origin==this.i)a:{b=this.f;do{b:{var c=a.source;do{if(c==b){c=!0;break b}if(c==c.parent)break;c=c.parent}while(null!=c);c=!1}if(c){b=!0;break a}b=b.opener}while(null!=b);b=!1}if(b&&(b=a.data,"string"===typeof b)){try{b=JSON.parse(b)}catch(d){return}b.command&&(c=this.h,c.g||c.j("command",b.command,b.data,a.origin))}};
Oi.prototype.o=function(){Zf(this.j);this.f=null;N.prototype.o.call(this)};function Pi(){var a=lb(Qi),b;return kd(new M(function(c,d){a.onSuccess=function(e){xe(e)?c(e):d(new Ri("Request failed, status="+(e&&"status"in e?e.status:-1),"net.badstatus",e))};
a.onError=function(e){d(new Ri("Unknown request error","net.unknown",e))};
a.O=function(e){d(new Ri("Request timed out","net.timeout",e))};
b=He("//googleads.g.doubleclick.net/pagead/id",a)}),function(c){c instanceof ld&&b.abort();
return id(c)})}
function Ri(a,b){F.call(this,a+", errorCode="+b);this.errorCode=b;this.name="PromiseAjaxError"}
t(Ri,F);function Si(){this.g=0;this.f=null}
Si.prototype.then=function(a,b,c){return 1===this.g&&a?(a=a.call(c,this.f),Qc(a)?a:Ti(a)):2===this.g&&b?(a=b.call(c,this.f),Qc(a)?a:Ui(a)):this};
Si.prototype.getValue=function(){return this.f};
Si.prototype.$goog_Thenable=!0;function Ui(a){var b=new Si;a=void 0===a?null:a;b.g=2;b.f=void 0===a?null:a;return b}
function Ti(a){var b=new Si;a=void 0===a?null:a;b.g=1;b.f=void 0===a?null:a;return b}
;function Vi(a){F.call(this,a.message||a.description||a.name);this.isMissing=a instanceof Wi;this.isTimeout=a instanceof Ri&&"net.timeout"==a.errorCode;this.isCanceled=a instanceof ld}
t(Vi,F);Vi.prototype.name="BiscottiError";function Wi(){F.call(this,"Biscotti ID is missing from server")}
t(Wi,F);Wi.prototype.name="BiscottiMissingError";var Qi={format:"RAW",method:"GET",timeout:5E3,withCredentials:!0},Xi=null;function ee(){if("1"===fb(ce(),"args","privembed"))return id(Error("Biscotti ID is not available in private embed mode"));Xi||(Xi=kd(Pi().then(Yi),function(a){return Zi(2,a)}));
return Xi}
function Yi(a){a=a.responseText;if(0!=a.lastIndexOf(")]}'",0))throw new Wi;a=JSON.parse(a.substr(4));if(1<(a.type||1))throw new Wi;a=a.id;fe(a);Xi=Ti(a);$i(18E5,2);return a}
function Zi(a,b){var c=new Vi(b);fe("");Xi=Ui(c);0<a&&$i(12E4,a-1);throw c;}
function $i(a,b){S(function(){kd(Pi().then(Yi,function(c){return Zi(b,c)}),xa)},a)}
function aj(){try{var a=A("yt.ads.biscotti.getId_");return a?a():ee()}catch(b){return id(b)}}
;function bj(a){if("1"!==fb(ce(),"args","privembed")){a&&de();try{aj().then(function(){},function(){}),S(bj,18E5)}catch(b){je(b)}}}
;var Z=A("ytglobal.prefsUserPrefsPrefs_")||{};z("ytglobal.prefsUserPrefsPrefs_",Z,void 0);function cj(){this.f=Q("ALT_PREF_COOKIE_NAME","PREF");var a=Vb.get(""+this.f,void 0);if(a){a=decodeURIComponent(a).split("&");for(var b=0;b<a.length;b++){var c=a[b].split("="),d=c[0];(c=c[1])&&(Z[d]=c.toString())}}}
m=cj.prototype;m.get=function(a,b){dj(a);ej(a);var c=void 0!==Z[a]?Z[a].toString():null;return null!=c?c:b?b:""};
m.set=function(a,b){dj(a);ej(a);if(null==b)throw Error("ExpectedNotNull");Z[a]=b.toString()};
m.remove=function(a){dj(a);ej(a);delete Z[a]};
m.save=function(){Gg(this.f,this.dump(),63072E3)};
m.clear=function(){for(var a in Z)delete Z[a]};
m.dump=function(){var a=[],b;for(b in Z)a.push(b+"="+encodeURIComponent(String(Z[b])));return a.join("&")};
function ej(a){if(/^f([1-9][0-9]*)$/.test(a))throw Error("ExpectedRegexMatch: "+a);}
function dj(a){if(!/^\w+$/.test(a))throw Error("ExpectedRegexMismatch: "+a);}
function fj(a){a=void 0!==Z[a]?Z[a].toString():null;return null!=a&&/^[A-Fa-f0-9]+$/.test(a)?parseInt(a,16):null}
ya(cj);var gj=null,hj=null,ij=null,jj={};function kj(a){var b=a.id;a=a.ve_type;var c=Sg++;a=new Qg({veType:a,veCounter:c,elementIndex:void 0,dataElement:void 0,youtubeData:void 0});jj[b]=a;b=Yg();c=Wg();b&&c&&sh(b,c,[a])}
function lj(a){var b=a.csn;a=a.root_ve_type;if(b&&a&&(ah(b,a),a=Wg()))for(var c in jj){var d=jj[c];d&&sh(b,a,[d])}}
function mj(a){jj[a.id]=new Qg({trackingParams:a.tracking_params})}
function nj(a){var b=Yg();a=jj[a.id];if(b&&a){a={csn:b,ve:Rg(a),gestureType:"INTERACTION_LOGGING_GESTURE_TYPE_GENERIC_CLICK"};var c={da:$g(b),P:b};"UNDEFINED_CSN"==b?th("visualElementGestured",a,c):Cg("visualElementGestured",a,Mg,c)}}
function oj(a){a=a.ids;var b=Yg();if(b)for(var c=0;c<a.length;c++){var d=jj[a[c]];if(d){var e=b;d={csn:e,ve:Rg(d),eventType:1};var f={da:$g(e),P:e};"UNDEFINED_CSN"==e?th("visualElementShown",d,f):Cg("visualElementShown",d,Mg,f)}}}
;z("yt.setConfig",P,void 0);z("yt.config.set",P,void 0);z("yt.setMsg",af,void 0);z("yt.msgs.set",af,void 0);z("yt.logging.errors.log",Ze,void 0);
z("writeEmbed",function(){var a=Q("PLAYER_CONFIG",void 0);bj(!0);"gvn"==a.args.ps&&(document.body.style.backgroundColor="transparent");var b=document.referrer,c=Q("POST_MESSAGE_ORIGIN");window!=window.top&&b&&b!=document.URL&&(a.args.loaderUrl=b);Q("LIGHTWEIGHT_AUTOPLAY")&&(a.args.autoplay="1");b="player";var d=void 0===d?!0:d;b="string"===typeof b?ac(b):b;var e=Rh+"_"+Da(b),f=Qh[e];f&&d?a&&a.args&&a.args.fflags&&a.args.fflags.includes("web_player_remove_playerproxy=true")?f.api.loadVideoByPlayerVars(a.args||
null):f.loadNewVideoConfig(a):(f=new Bh(b,e,a,void 0),Qh[e]=f,nf("player-added",f.api),Ad(f,Ja(Sh,f)));a=f.api;gj=a;a.addEventListener("onScreenChanged",lj);a.addEventListener("onLogClientVeCreated",kj);a.addEventListener("onLogServerVeCreated",mj);a.addEventListener("onLogVeClicked",nj);a.addEventListener("onLogVesShown",oj);d=Q("POST_MESSAGE_ID","player");Q("ENABLE_JS_API")?ij=new Ni(a):Q("ENABLE_POST_API")&&"string"===typeof d&&"string"===typeof c&&(hj=new Oi(window.parent,d,c),ij=new Ii(a,hj.h));
c=Q("BG_P",void 0);Pf(c)&&(Q("BG_I")||Q("BG_IU"))&&(Lf=!0,Kf.initialize(Q("BG_I",null),Q("BG_IU",null),c,Of,void 0));Ff()},void 0);
z("yt.www.watch.ads.restrictioncookie.spr",function(a){Pe(a+"mac_204?action_fcts=1");return!0},void 0);
var pj=ie(function(){var a=$h(void 0),b;(b=!R("use_first_tick"))||(b=!("ol"in $h(void 0)));if(b&&(b="ol",X.mark&&(0==b.lastIndexOf("mark_",0)||(b="mark_"+b),X.mark(b)),b=U(),a.ol=b,a=wi(),a.gelTicks&&(a.gelTicks.tick_ol=!0),U(),vi()?(ki().tick.ol=U(),a=ci(),oi().tick("ol",a,void 0),di(),a=!0):a=!1,!a)){if(!A("yt.timing.pingSent_")&&(b=Q("TIMING_ACTION",void 0),a=$h(void 0),A("ytglobal.timingready_")&&b&&a._start&&Zh())){di();b=!0;var c=Q("TIMING_WAIT",[]);if(c.length)for(var d=0,e=c.length;d<e;++d)if(!(c[d]in
a)){b=!1;break}if(b&&!vi()){d=$h(void 0);c=bi();e=d._start;var f=Q("CSI_SERVICE_NAME","youtube");b={v:2,s:f,action:Q("TIMING_ACTION",void 0)};a=c.srt;void 0!==d.srt&&delete c.srt;if(c.h5jse){var g=window.location.protocol+A("ytplayer.config.assets.js");(g=X.getEntriesByName?X.getEntriesByName(g)[0]:null)?c.h5jse=Math.round(c.h5jse-g.responseEnd):delete c.h5jse}d.aft=Zh();var h=$h(void 0);g=h.pbr;var k=h.vc;h=h.pbs;if(g&&k&&h&&g<k&&k<h&&bi().yt_pvis&&"youtube"==f){bi().yt_lt="hot_bg";if(vi()){f="hot_bg";
g=wi();g.gelInfos?g.gelInfos.info_yt_lt=!0:(k={},g.gelInfos=(k.info_yt_lt=!0,k));if("yt_lt"in qi){g=qi.yt_lt;0<=La(ri,g)&&(f=!!f);"yt_lt"in ti&&"string"===typeof f&&(f=ti.yt_lt+f.toUpperCase());g=g.split(".");h=k={};for(var l=0;l<g.length-1;l++){var n=g[l];h[n]={};h=h[n]}h[g[g.length-1]]=f;f=ei({},k)}else 0<=La(ui,"yt_lt")||(f=new Te("Unknown label logged with GEL CSI"),f.params={label:"yt_lt"},ke(f)),f=void 0;f&&vi()&&(g=ki(),ei(g.info,f),g=wi(),"gelInfos"in g||(g.gelInfos={}),ei(g.gelInfos,f),g=
ci(),oi().info(f,g))}else ki().info.yt_lt="hot_bg";f=d.vc;g=d.pbs;delete d.aft;c.aft=Math.round(g-f)}for(var p in c)"_"!=p.charAt(0)&&(b[p]=c[p]);d.ps=U();p={};f=[];for(var u in d)"_"!=u.charAt(0)&&(g=Math.round(d[u]-e),p[u]=g,f.push(u+"."+g));b.rt=f.join(",");(u=A("ytdebug.logTiming"))&&u(b,p);u=!!c.ap;R("debug_csi_data")&&(c=A("yt.timing.csiData"),c||(c=[],Ka("yt.timing.csiData",c)),c.push({page:location.href,time:new Date,args:b}));c="";for(var q in b)b.hasOwnProperty(q)&&(c+="&"+q+"="+b[q]);q=
"/csi_204?"+c.substring(1);if(window.navigator&&window.navigator.sendBeacon&&u){var y=void 0===y?"":y;Se(q,y)||Pe(q,void 0,void 0,void 0,y)}else Pe(q);z("yt.timing.pingSent_",!0,void 0);ih(Xh,new Vh(p.aft+(a||0),void 0))}}ki().tick.ol=U()}y=cj.getInstance();u=!!((fj("f"+(Math.floor(119/31)+1))||0)&67108864);q=1<window.devicePixelRatio;document.body&&Fc(document.body,"exp-invert-logo")&&(q&&!Fc(document.body,"inverted-hdpi")?(p=document.body,p.classList?p.classList.add("inverted-hdpi"):Fc(p,"inverted-hdpi")||
(a=Cc(p),Ec(p,a+(0<a.length?" inverted-hdpi":"inverted-hdpi")))):!q&&Fc(document.body,"inverted-hdpi")&&Gc());u!=q&&(u="f"+(Math.floor(119/31)+1),p=fj(u)||0,p=q?p|67108864:p&-67108865,0==p?delete Z[u]:(q=p.toString(16),Z[u]=q.toString()),y.save())}),qj=ie(function(){var a=gj;
a&&a.sendAbandonmentPing&&a.sendAbandonmentPing();Q("PL_ATT")&&Kf.dispose();a=0;for(var b=Df.length;a<b;a++){var c=Df[a];if(!isNaN(c)){var d=A("yt.scheduler.instance.cancelJob");d?d(c):T(c)}}Df.length=0;xf("//static.doubleclick.net/instream/ad_status.js");Ef=!1;P("DCLKSTAT",0);Cd(ij,hj);if(a=gj)a.removeEventListener("onScreenChanged",lj),a.removeEventListener("onLogClientVeCreated",kj),a.removeEventListener("onLogServerVeCreated",mj),a.removeEventListener("onLogVeClicked",nj),a.removeEventListener("onLogVesShown",
oj),a.destroy();jj={}});
window.addEventListener?(window.addEventListener("load",pj),window.addEventListener("unload",qj)):window.attachEvent&&(window.attachEvent("onload",pj),window.attachEvent("onunload",qj));Ka("yt.abuse.player.botguardInitialized",A("yt.abuse.player.botguardInitialized")||Qf);Ka("yt.abuse.player.invokeBotguard",A("yt.abuse.player.invokeBotguard")||Rf);Ka("yt.abuse.dclkstatus.checkDclkStatus",A("yt.abuse.dclkstatus.checkDclkStatus")||Gf);
Ka("yt.player.exports.navigate",A("yt.player.exports.navigate")||bh);Ka("yt.util.activity.init",A("yt.util.activity.init")||cg);Ka("yt.util.activity.getTimeSinceActive",A("yt.util.activity.getTimeSinceActive")||fg);Ka("yt.util.activity.setTimestamp",A("yt.util.activity.setTimestamp")||dg);}).call(this);
