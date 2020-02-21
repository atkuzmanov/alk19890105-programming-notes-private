(function(){/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
'use strict';var aa="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},f;if("function"==typeof Object.setPrototypeOf)f=Object.setPrototypeOf;else{var g;a:{var ba={h:!0},h={};try{h.__proto__=ba;g=h.h;break a}catch(a){}g=!1}f=g?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var k=f;
function l(a,b){a.prototype=aa(b.prototype);a.prototype.constructor=a;if(k)k(a,b);else for(var c in b)if("prototype"!=c)if(Object.defineProperties){var d=Object.getOwnPropertyDescriptor(b,c);d&&Object.defineProperty(a,c,d)}else a[c]=b[c]}var m=this||self;
function n(a){var b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b}var fa=Date.now||function(){return+new Date};function ha(a){var b=["mys","design","init"],c=m;b[0]in c||"undefined"==typeof c.execScript||c.execScript("var "+b[0]);for(var d;b.length&&(d=b.shift());)b.length||void 0===a?c[d]&&c[d]!==Object.prototype[d]?c=c[d]:c=c[d]={}:c[d]=a}function q(a,b){function c(){}c.prototype=b.prototype;a.prototype=new c;a.prototype.constructor=a};var ia=Array.prototype.forEach?function(a,b){Array.prototype.forEach.call(a,b,void 0)}:function(a,b){for(var c=a.length,d="string"===typeof a?a.split(""):a,e=0;e<c;e++)e in d&&b.call(void 0,d[e],e,a)};function r(a){r[" "](a);return a}r[" "]=function(){};function t(){}var ka="function"==typeof Uint8Array;function u(a,b,c){a.b=null;b||(b=[]);a.j=void 0;a.f=-1;a.a=b;a:{if(b=a.a.length){--b;var d=a.a[b];if(null!==d&&"object"==typeof d&&"array"!=n(d)&&!(ka&&d instanceof Uint8Array)){a.g=b-a.f;a.c=d;break a}}a.g=Number.MAX_VALUE}a.i={};if(c)for(b=0;b<c.length;b++)if(d=c[b],d<a.g)d+=a.f,a.a[d]=a.a[d]||v;else{var e=a.g+a.f;a.a[e]||(a.c=a.a[e]={});a.c[d]=a.c[d]||v}}var v=[];
function w(a,b){if(b<a.g){b+=a.f;var c=a.a[b];return c===v?a.a[b]=[]:c}if(a.c)return c=a.c[b],c===v?a.c[b]=[]:c}function x(a){a=w(a,2);return null==a?0:a}function y(a,b){a=w(a,b);a=null==a?a:!!a;return null==a?!1:a}function z(a,b,c){a.b||(a.b={});if(!a.b[c]){var d=w(a,c);d&&(a.b[c]=new b(d))}return a.b[c]}function A(a){if(a.b)for(var b in a.b){var c=a.b[b];if("array"==n(c))for(var d=0;d<c.length;d++)c[d]&&B(c[d]);else c&&B(c)}}function B(a){A(a);return a.a}
function C(a){return new D(a?JSON.parse(a):null)}t.prototype.toString=function(){A(this);return this.a.toString()};function E(a){u(this,a,la)}q(E,t);var la=[17];function F(a){u(this,a,ma)}q(F,t);var ma=[27];function D(a){u(this,a,na)}q(D,t);var na=[8];var G=document;function H(){var a=I;try{var b;if(b=!!a&&null!=a.location.href)a:{try{r(a.foo);b=!0;break a}catch(c){}b=!1}return b}catch(c){return!1}};var J=!!window.google_async_iframe_id,I=J&&window.parent||window;var K=null;function oa(a,b,c){this.label=a;this.type=b;this.value=c;this.duration=0;this.uniqueId=Math.random();this.slotId=void 0};var L=m.performance,pa=!!(L&&L.mark&&L.measure&&L.clearMarks),M=function(a){var b=!1,c;return function(){b||(c=a(),b=!0);return c}}(function(){var a;if(a=pa){var b;if(null===K){K="";try{a="";try{a=m.top.location.hash}catch(c){a=m.location.hash}a&&(K=(b=a.match(/\bdeid=([\d,]+)/))?b[1]:"")}catch(c){}}b=K;a=!!b.indexOf&&0<=b.indexOf("1337")}return a});
function N(){var a=O;this.a=[];this.c=a||m;var b=null;a&&(a.google_js_reporting_queue=a.google_js_reporting_queue||[],this.a=a.google_js_reporting_queue,b=a.google_measure_js_timing);this.b=M()||(null!=b?b:1>Math.random())}function qa(a){a&&L&&M()&&(L.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_start"),L.clearMarks("goog_"+a.label+"_"+a.uniqueId+"_end"))}
N.prototype.start=function(a,b){if(!this.b)return null;var c=void 0===c?m:c;c=c.performance;(c=c&&c.now?c.now():null)||(c=(c=m.performance)&&c.now&&c.timing?Math.floor(c.now()+c.timing.navigationStart):fa());a=new oa(a,b,c);b="goog_"+a.label+"_"+a.uniqueId+"_start";L&&M()&&L.mark(b);return a};if(J&&!H()){var P="."+G.domain;try{for(;2<P.split(".").length&&!H();)G.domain=P=P.substr(P.indexOf(".")+1),I=window.parent}catch(a){}H()||(I=window)}var O=I,Q=new N;function R(){O.google_measure_js_timing||(Q.b=!1,Q.a!=Q.c.google_js_reporting_queue&&(M()&&ia(Q.a,qa),Q.a.length=0))}"number"!==typeof O.google_srt&&(O.google_srt=Math.random());if("complete"==O.document.readyState)R();else if(Q.b){var ra=function(){R()},S=O;S.addEventListener&&S.addEventListener("load",ra,!1)};function sa(){};function T(a,b){a=a.getElementsByTagName("META");for(var c=0;c<a.length;++c)if(a[c].getAttribute("name")===b)return a[c].getAttribute("content");return""}function U(a,b,c){for(var d=a.getElementsByTagName("META"),e=0;e<d.length;++e)if(d[e].getAttribute("name")===b){d[e].setAttribute("content",c);return}d=document.createElement("META");d.setAttribute("name",b);d.setAttribute("content",c);a.appendChild(d)};function V(a,b){this.b=a;this.a=b;a=T(b,"namespace");a||(a="ns-"+Math.random().toString(36).substr(2,5),U(b,"namespace",a))}V.prototype.dispatchEvent=function(a,b){a=null==b?new CustomEvent(a):new CustomEvent(a,{detail:b});this.a.dispatchEvent(a)};function W(){this.a={};this.b={};this.c={}}W.prototype.set=function(a,b){this.a[a]=b};W.prototype.get=function(a){return this.a[a]};function ta(a,b){if(b){b=JSON.parse(b);for(var c in b)a.set(c,b[c])}};function X(a){this.context=a;this.a=new W}l(X,sa);function ua(a,b){this.b=a;this.a=b}function va(a){if(!mys.Engine)throw Error("MysidiaJsError[2] ");var b=a.a.b,c=a.a.a;ta(a.b.a,T(c,"runtime_data"));var d=T(c,"render_config");if(!d)throw Error("MysidiaJsError[35] ");var e=C(d),p=mys.Engine.create(b,c,B(e)),ca=0;c.addEventListener("browserRender",function(){++ca;if(1==ca)a.a.dispatchEvent("overallStart"),wa(a,e),p.enable().then(function(){a.a.dispatchEvent("overallQuiet")});else{var da=c.clientWidth,ea=c.clientHeight;da&&ea&&p.enable(da,ea)}})}
function wa(a,b){if(!(2==x(b)||z(z(b,F,1),E,10)&&y(z(z(b,F,1),E,10),16))){var c=a.a.a;c.addEventListener("browserStart",function(){if(z(z(b,F,1),E,10)&&y(z(z(b,F,1),E,10),15)){var d=a.b.a;for(var e in d.c)d.a.hasOwnProperty(e)||d.set(e,JSON.stringify(d.c[e]));for(var p in d.b)d.a.hasOwnProperty(p)||d.set(p,JSON.stringify(d.b[p]));(d=(d=JSON.stringify(d.a))&&"{}"!=d?d:"")&&U(c,"runtime_data",d)}});c.addEventListener("browserReady",function(){});c.addEventListener("browserQuiet",function(){})}}
function xa(a,b){2==x(b)||z(z(b,F,1),E,10)&&y(z(z(b,F,1),E,10),16)||(b=0,mys.engine&&(b=mys.engine.stage()),a=a.a.a,0==(b&1)&&a.addEventListener("overallStart",function(){}),a.addEventListener("browserStart",function(){}),a.addEventListener("browserReady",function(){}),a.addEventListener("browserQuiet",function(){}))};function Y(a){X.call(this,a)}l(Y,X);function Z(){Y.apply(this,arguments)}l(Z,Y);function ya(){Z.apply(this,arguments)}l(ya,Z);(function(a){var b=document.getElementById("mys-content");if(b){b=new V(document.head,b);var c=a(b);c=new ua(c,b);ta(c.b.a,T(b.a,"runtime_data"));if("true"===c.b.a.get("EXP_async_load_design")){b=C(T(b.a,"render_config")||"[]");xa(c,b);return}}ha(function(d,e){d=new V(d,e);e=a(d);va(new ua(e,d))})})(function(a){return new ya(a)});}).call(this);
