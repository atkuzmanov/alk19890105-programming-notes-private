(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[36],{Bnyi:function(e,t,n){e.exports={container:"container__lsiRDsWqU__w6gfCuXy4Y",containerBordered:"containerBordered__1SZyKjN2VMcqaen4d9EwsD",containerFullWidth:"containerFullWidth__1_BLb-Za5gkFmANlRSYzkm",content:"content__S43Ltl6cjaG8SoBsv_3LA",closeButton:"closeButton__1Ya_Kkcd6MFKNbdsr5Ucui"}},DJCp:function(e,t,n){"use strict";var r=n("q1tI"),i=n("Z29Q");t.a=function(e,t,n){if(!i.a)return[t,function(){}];var o=Object(r.useState)(function(){try{var r=sessionStorage.getItem(e);return"string"!=typeof r?(sessionStorage.setItem(e,n?String(t):JSON.stringify(t)),t):n?r:JSON.parse(r||"null")}catch(e){return t}}),a=o[0],c=o[1];return Object(r.useEffect)(function(){try{var t=n?String(a):JSON.stringify(a);sessionStorage.setItem(e,t)}catch(e){}}),[a,c]}},LuEV:function(e,t,n){"use strict";n.d(t,"a",function(){return i});var r,i,o=n("TSYQ"),a=n.n(o),c=n("q1tI"),s=n.n(c),l=n("Bnyi"),u=n.n(l),d=n("QqFe"),_=n("3tzU");function _defineProperty(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}!function(e){e.BorderBottom="border-bottom",e.FullWidth="full-width"}(i||(i={}));var f=(_defineProperty(r={},i.BorderBottom,u.a.containerBordered),_defineProperty(r,i.FullWidth,u.a.containerFullWidth),r);t.b=function Banner(e){var t=e.children,n=e.classNames,r=void 0===n?{}:n,o=e.displayStyle,c=void 0===o?i.FullWidth:o,l=e.isClosed,m=void 0!==l&&l,B=e.onClose,S=e.icon;return m?null:s.a.createElement("div",{className:a()(u.a.container,r.container,f[c])},S&&s.a.createElement("div",{"data-testid":"icon-id"},S),s.a.createElement("div",{className:a()(u.a.content,r.content)},t),s.a.createElement(d.a,{onClick:B,className:u.a.closeButton},s.a.createElement(_.a,{"aria-label":"dismiss"})))}}}]);
//# sourceMappingURL=36.64f712e92518a67bb5d5.chunk.js.map