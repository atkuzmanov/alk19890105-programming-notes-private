/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
/*! jQuery v3.3.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";var n=[],r=e.document,i=Object.getPrototypeOf,o=n.slice,a=n.concat,s=n.push,u=n.indexOf,l={},c=l.toString,f=l.hasOwnProperty,p=f.toString,d=p.call(Object),h={},g=function e(t){return"function"==typeof t&&"number"!=typeof t.nodeType},y=function e(t){return null!=t&&t===t.window},v={type:!0,src:!0,noModule:!0};function m(e,t,n){var i,o=(t=t||r).createElement("script");if(o.text=e,n)for(i in v)n[i]&&(o[i]=n[i]);t.head.appendChild(o).parentNode.removeChild(o)}function x(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?l[c.call(e)]||"object":typeof e}var b="3.3.1",w=function(e,t){return new w.fn.init(e,t)},T=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;w.fn=w.prototype={jquery:"3.3.1",constructor:w,length:0,toArray:function(){return o.call(this)},get:function(e){return null==e?o.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=w.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return w.each(this,e)},map:function(e){return this.pushStack(w.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(o.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:s,sort:n.sort,splice:n.splice},w.extend=w.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||g(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)n=a[t],a!==(r=e[t])&&(l&&r&&(w.isPlainObject(r)||(i=Array.isArray(r)))?(i?(i=!1,o=n&&Array.isArray(n)?n:[]):o=n&&w.isPlainObject(n)?n:{},a[t]=w.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},w.extend({expando:"jQuery"+("3.3.1"+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==c.call(e))&&(!(t=i(e))||"function"==typeof(n=f.call(t,"constructor")&&t.constructor)&&p.call(n)===d)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e){m(e)},each:function(e,t){var n,r=0;if(C(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},trim:function(e){return null==e?"":(e+"").replace(T,"")},makeArray:function(e,t){var n=t||[];return null!=e&&(C(Object(e))?w.merge(n,"string"==typeof e?[e]:e):s.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:u.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r,i=[],o=0,a=e.length,s=!n;o<a;o++)(r=!t(e[o],o))!==s&&i.push(e[o]);return i},map:function(e,t,n){var r,i,o=0,s=[];if(C(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&s.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&s.push(i);return a.apply([],s)},guid:1,support:h}),"function"==typeof Symbol&&(w.fn[Symbol.iterator]=n[Symbol.iterator]),w.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){l["[object "+t+"]"]=t.toLowerCase()});function C(e){var t=!!e&&"length"in e&&e.length,n=x(e);return!g(e)&&!y(e)&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var E=function(e){var t,n,r,i,o,a,s,u,l,c,f,p,d,h,g,y,v,m,x,b="sizzle"+1*new Date,w=e.document,T=0,C=0,E=ae(),k=ae(),S=ae(),D=function(e,t){return e===t&&(f=!0),0},N={}.hasOwnProperty,A=[],j=A.pop,q=A.push,L=A.push,H=A.slice,O=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},P="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",R="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",I="\\["+M+"*("+R+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+R+"))|)"+M+"*\\]",W=":("+R+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+I+")*)|.*)\\)|)",$=new RegExp(M+"+","g"),B=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),F=new RegExp("^"+M+"*,"+M+"*"),_=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),z=new RegExp("="+M+"*([^\\]'\"]*?)"+M+"*\\]","g"),X=new RegExp(W),U=new RegExp("^"+R+"$"),V={ID:new RegExp("^#("+R+")"),CLASS:new RegExp("^\\.("+R+")"),TAG:new RegExp("^("+R+"|[*])"),ATTR:new RegExp("^"+I),PSEUDO:new RegExp("^"+W),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+P+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},G=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Q=/^[^{]+\{\s*\[native \w/,J=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,K=/[+~]/,Z=new RegExp("\\\\([\\da-f]{1,6}"+M+"?|("+M+")|.)","ig"),ee=function(e,t,n){var r="0x"+t-65536;return r!==r||n?t:r<0?String.fromCharCode(r+65536):String.fromCharCode(r>>10|55296,1023&r|56320)},te=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ne=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},re=function(){p()},ie=me(function(e){return!0===e.disabled&&("form"in e||"label"in e)},{dir:"parentNode",next:"legend"});try{L.apply(A=H.call(w.childNodes),w.childNodes),A[w.childNodes.length].nodeType}catch(e){L={apply:A.length?function(e,t){q.apply(e,H.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function oe(e,t,r,i){var o,s,l,c,f,h,v,m=t&&t.ownerDocument,T=t?t.nodeType:9;if(r=r||[],"string"!=typeof e||!e||1!==T&&9!==T&&11!==T)return r;if(!i&&((t?t.ownerDocument||t:w)!==d&&p(t),t=t||d,g)){if(11!==T&&(f=J.exec(e)))if(o=f[1]){if(9===T){if(!(l=t.getElementById(o)))return r;if(l.id===o)return r.push(l),r}else if(m&&(l=m.getElementById(o))&&x(t,l)&&l.id===o)return r.push(l),r}else{if(f[2])return L.apply(r,t.getElementsByTagName(e)),r;if((o=f[3])&&n.getElementsByClassName&&t.getElementsByClassName)return L.apply(r,t.getElementsByClassName(o)),r}if(n.qsa&&!S[e+" "]&&(!y||!y.test(e))){if(1!==T)m=t,v=e;else if("object"!==t.nodeName.toLowerCase()){(c=t.getAttribute("id"))?c=c.replace(te,ne):t.setAttribute("id",c=b),s=(h=a(e)).length;while(s--)h[s]="#"+c+" "+ve(h[s]);v=h.join(","),m=K.test(e)&&ge(t.parentNode)||t}if(v)try{return L.apply(r,m.querySelectorAll(v)),r}catch(e){}finally{c===b&&t.removeAttribute("id")}}}return u(e.replace(B,"$1"),t,r,i)}function ae(){var e=[];function t(n,i){return e.push(n+" ")>r.cacheLength&&delete t[e.shift()],t[n+" "]=i}return t}function se(e){return e[b]=!0,e}function ue(e){var t=d.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function le(e,t){var n=e.split("|"),i=n.length;while(i--)r.attrHandle[n[i]]=t}function ce(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function fe(e){return function(t){return"input"===t.nodeName.toLowerCase()&&t.type===e}}function pe(e){return function(t){var n=t.nodeName.toLowerCase();return("input"===n||"button"===n)&&t.type===e}}function de(e){return function(t){return"form"in t?t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||t.isDisabled!==!e&&ie(t)===e:t.disabled===e:"label"in t&&t.disabled===e}}function he(e){return se(function(t){return t=+t,se(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function ge(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}n=oe.support={},o=oe.isXML=function(e){var t=e&&(e.ownerDocument||e).documentElement;return!!t&&"HTML"!==t.nodeName},p=oe.setDocument=function(e){var t,i,a=e?e.ownerDocument||e:w;return a!==d&&9===a.nodeType&&a.documentElement?(d=a,h=d.documentElement,g=!o(d),w!==d&&(i=d.defaultView)&&i.top!==i&&(i.addEventListener?i.addEventListener("unload",re,!1):i.attachEvent&&i.attachEvent("onunload",re)),n.attributes=ue(function(e){return e.className="i",!e.getAttribute("className")}),n.getElementsByTagName=ue(function(e){return e.appendChild(d.createComment("")),!e.getElementsByTagName("*").length}),n.getElementsByClassName=Q.test(d.getElementsByClassName),n.getById=ue(function(e){return h.appendChild(e).id=b,!d.getElementsByName||!d.getElementsByName(b).length}),n.getById?(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){return e.getAttribute("id")===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n=t.getElementById(e);return n?[n]:[]}}):(r.filter.ID=function(e){var t=e.replace(Z,ee);return function(e){var n="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return n&&n.value===t}},r.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&g){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),r.find.TAG=n.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):n.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},r.find.CLASS=n.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&g)return t.getElementsByClassName(e)},v=[],y=[],(n.qsa=Q.test(d.querySelectorAll))&&(ue(function(e){h.appendChild(e).innerHTML="<a id='"+b+"'></a><select id='"+b+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&y.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||y.push("\\["+M+"*(?:value|"+P+")"),e.querySelectorAll("[id~="+b+"-]").length||y.push("~="),e.querySelectorAll(":checked").length||y.push(":checked"),e.querySelectorAll("a#"+b+"+*").length||y.push(".#.+[+~]")}),ue(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=d.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&y.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&y.push(":enabled",":disabled"),h.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&y.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),y.push(",.*:")})),(n.matchesSelector=Q.test(m=h.matches||h.webkitMatchesSelector||h.mozMatchesSelector||h.oMatchesSelector||h.msMatchesSelector))&&ue(function(e){n.disconnectedMatch=m.call(e,"*"),m.call(e,"[s!='']:x"),v.push("!=",W)}),y=y.length&&new RegExp(y.join("|")),v=v.length&&new RegExp(v.join("|")),t=Q.test(h.compareDocumentPosition),x=t||Q.test(h.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},D=t?function(e,t){if(e===t)return f=!0,0;var r=!e.compareDocumentPosition-!t.compareDocumentPosition;return r||(1&(r=(e.ownerDocument||e)===(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!n.sortDetached&&t.compareDocumentPosition(e)===r?e===d||e.ownerDocument===w&&x(w,e)?-1:t===d||t.ownerDocument===w&&x(w,t)?1:c?O(c,e)-O(c,t):0:4&r?-1:1)}:function(e,t){if(e===t)return f=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e===d?-1:t===d?1:i?-1:o?1:c?O(c,e)-O(c,t):0;if(i===o)return ce(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?ce(a[r],s[r]):a[r]===w?-1:s[r]===w?1:0},d):d},oe.matches=function(e,t){return oe(e,null,null,t)},oe.matchesSelector=function(e,t){if((e.ownerDocument||e)!==d&&p(e),t=t.replace(z,"='$1']"),n.matchesSelector&&g&&!S[t+" "]&&(!v||!v.test(t))&&(!y||!y.test(t)))try{var r=m.call(e,t);if(r||n.disconnectedMatch||e.document&&11!==e.document.nodeType)return r}catch(e){}return oe(t,d,null,[e]).length>0},oe.contains=function(e,t){return(e.ownerDocument||e)!==d&&p(e),x(e,t)},oe.attr=function(e,t){(e.ownerDocument||e)!==d&&p(e);var i=r.attrHandle[t.toLowerCase()],o=i&&N.call(r.attrHandle,t.toLowerCase())?i(e,t,!g):void 0;return void 0!==o?o:n.attributes||!g?e.getAttribute(t):(o=e.getAttributeNode(t))&&o.specified?o.value:null},oe.escape=function(e){return(e+"").replace(te,ne)},oe.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},oe.uniqueSort=function(e){var t,r=[],i=0,o=0;if(f=!n.detectDuplicates,c=!n.sortStable&&e.slice(0),e.sort(D),f){while(t=e[o++])t===e[o]&&(i=r.push(o));while(i--)e.splice(r[i],1)}return c=null,e},i=oe.getText=function(e){var t,n="",r=0,o=e.nodeType;if(o){if(1===o||9===o||11===o){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=i(e)}else if(3===o||4===o)return e.nodeValue}else while(t=e[r++])n+=i(t);return n},(r=oe.selectors={cacheLength:50,createPseudo:se,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(Z,ee),e[3]=(e[3]||e[4]||e[5]||"").replace(Z,ee),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||oe.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&oe.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return V.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=a(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(Z,ee).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=E[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&E(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(e,t,n){return function(r){var i=oe.attr(r,e);return null==i?"!="===t:!t||(i+="","="===t?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace($," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h,g=o!==a?"nextSibling":"previousSibling",y=t.parentNode,v=s&&t.nodeName.toLowerCase(),m=!u&&!s,x=!1;if(y){if(o){while(g){p=t;while(p=p[g])if(s?p.nodeName.toLowerCase()===v:1===p.nodeType)return!1;h=g="only"===e&&!h&&"nextSibling"}return!0}if(h=[a?y.firstChild:y.lastChild],a&&m){x=(d=(l=(c=(f=(p=y)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1])&&l[2],p=d&&y.childNodes[d];while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if(1===p.nodeType&&++x&&p===t){c[e]=[T,d,x];break}}else if(m&&(x=d=(l=(c=(f=(p=t)[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]||[])[0]===T&&l[1]),!1===x)while(p=++d&&p&&p[g]||(x=d=0)||h.pop())if((s?p.nodeName.toLowerCase()===v:1===p.nodeType)&&++x&&(m&&((c=(f=p[b]||(p[b]={}))[p.uniqueID]||(f[p.uniqueID]={}))[e]=[T,x]),p===t))break;return(x-=i)===r||x%r==0&&x/r>=0}}},PSEUDO:function(e,t){var n,i=r.pseudos[e]||r.setFilters[e.toLowerCase()]||oe.error("unsupported pseudo: "+e);return i[b]?i(t):i.length>1?(n=[e,e,"",t],r.setFilters.hasOwnProperty(e.toLowerCase())?se(function(e,n){var r,o=i(e,t),a=o.length;while(a--)e[r=O(e,o[a])]=!(n[r]=o[a])}):function(e){return i(e,0,n)}):i}},pseudos:{not:se(function(e){var t=[],n=[],r=s(e.replace(B,"$1"));return r[b]?se(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:se(function(e){return function(t){return oe(e,t).length>0}}),contains:se(function(e){return e=e.replace(Z,ee),function(t){return(t.textContent||t.innerText||i(t)).indexOf(e)>-1}}),lang:se(function(e){return U.test(e||"")||oe.error("unsupported lang: "+e),e=e.replace(Z,ee).toLowerCase(),function(t){var n;do{if(n=g?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-")}while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===h},focus:function(e){return e===d.activeElement&&(!d.hasFocus||d.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:de(!1),disabled:de(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!r.pseudos.empty(e)},header:function(e){return Y.test(e.nodeName)},input:function(e){return G.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:he(function(){return[0]}),last:he(function(e,t){return[t-1]}),eq:he(function(e,t,n){return[n<0?n+t:n]}),even:he(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:he(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:he(function(e,t,n){for(var r=n<0?n+t:n;--r>=0;)e.push(r);return e}),gt:he(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=r.pseudos.eq;for(t in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})r.pseudos[t]=fe(t);for(t in{submit:!0,reset:!0})r.pseudos[t]=pe(t);function ye(){}ye.prototype=r.filters=r.pseudos,r.setFilters=new ye,a=oe.tokenize=function(e,t){var n,i,o,a,s,u,l,c=k[e+" "];if(c)return t?0:c.slice(0);s=e,u=[],l=r.preFilter;while(s){n&&!(i=F.exec(s))||(i&&(s=s.slice(i[0].length)||s),u.push(o=[])),n=!1,(i=_.exec(s))&&(n=i.shift(),o.push({value:n,type:i[0].replace(B," ")}),s=s.slice(n.length));for(a in r.filter)!(i=V[a].exec(s))||l[a]&&!(i=l[a](i))||(n=i.shift(),o.push({value:n,type:a,matches:i}),s=s.slice(n.length));if(!n)break}return t?s.length:s?oe.error(e):k(e,u).slice(0)};function ve(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function me(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=C++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f,p=[T,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a)if(f=t[b]||(t[b]={}),c=f[t.uniqueID]||(f[t.uniqueID]={}),i&&i===t.nodeName.toLowerCase())t=t[r]||t;else{if((l=c[o])&&l[0]===T&&l[1]===s)return p[2]=l[2];if(c[o]=p,p[2]=e(t,n,u))return!0}return!1}}function xe(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function be(e,t,n){for(var r=0,i=t.length;r<i;r++)oe(e,t[r],n);return n}function we(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Te(e,t,n,r,i,o){return r&&!r[b]&&(r=Te(r)),i&&!i[b]&&(i=Te(i,o)),se(function(o,a,s,u){var l,c,f,p=[],d=[],h=a.length,g=o||be(t||"*",s.nodeType?[s]:s,[]),y=!e||!o&&t?g:we(g,p,e,s,u),v=n?i||(o?e:h||r)?[]:a:y;if(n&&n(y,v,s,u),r){l=we(v,d),r(l,[],s,u),c=l.length;while(c--)(f=l[c])&&(v[d[c]]=!(y[d[c]]=f))}if(o){if(i||e){if(i){l=[],c=v.length;while(c--)(f=v[c])&&l.push(y[c]=f);i(null,v=[],l,u)}c=v.length;while(c--)(f=v[c])&&(l=i?O(o,f):p[c])>-1&&(o[l]=!(a[l]=f))}}else v=we(v===a?v.splice(h,v.length):v),i?i(null,a,v,u):L.apply(a,v)})}function Ce(e){for(var t,n,i,o=e.length,a=r.relative[e[0].type],s=a||r.relative[" "],u=a?1:0,c=me(function(e){return e===t},s,!0),f=me(function(e){return O(t,e)>-1},s,!0),p=[function(e,n,r){var i=!a&&(r||n!==l)||((t=n).nodeType?c(e,n,r):f(e,n,r));return t=null,i}];u<o;u++)if(n=r.relative[e[u].type])p=[me(xe(p),n)];else{if((n=r.filter[e[u].type].apply(null,e[u].matches))[b]){for(i=++u;i<o;i++)if(r.relative[e[i].type])break;return Te(u>1&&xe(p),u>1&&ve(e.slice(0,u-1).concat({value:" "===e[u-2].type?"*":""})).replace(B,"$1"),n,u<i&&Ce(e.slice(u,i)),i<o&&Ce(e=e.slice(i)),i<o&&ve(e))}p.push(n)}return xe(p)}function Ee(e,t){var n=t.length>0,i=e.length>0,o=function(o,a,s,u,c){var f,h,y,v=0,m="0",x=o&&[],b=[],w=l,C=o||i&&r.find.TAG("*",c),E=T+=null==w?1:Math.random()||.1,k=C.length;for(c&&(l=a===d||a||c);m!==k&&null!=(f=C[m]);m++){if(i&&f){h=0,a||f.ownerDocument===d||(p(f),s=!g);while(y=e[h++])if(y(f,a||d,s)){u.push(f);break}c&&(T=E)}n&&((f=!y&&f)&&v--,o&&x.push(f))}if(v+=m,n&&m!==v){h=0;while(y=t[h++])y(x,b,a,s);if(o){if(v>0)while(m--)x[m]||b[m]||(b[m]=j.call(u));b=we(b)}L.apply(u,b),c&&!o&&b.length>0&&v+t.length>1&&oe.uniqueSort(u)}return c&&(T=E,l=w),x};return n?se(o):o}return s=oe.compile=function(e,t){var n,r=[],i=[],o=S[e+" "];if(!o){t||(t=a(e)),n=t.length;while(n--)(o=Ce(t[n]))[b]?r.push(o):i.push(o);(o=S(e,Ee(i,r))).selector=e}return o},u=oe.select=function(e,t,n,i){var o,u,l,c,f,p="function"==typeof e&&e,d=!i&&a(e=p.selector||e);if(n=n||[],1===d.length){if((u=d[0]=d[0].slice(0)).length>2&&"ID"===(l=u[0]).type&&9===t.nodeType&&g&&r.relative[u[1].type]){if(!(t=(r.find.ID(l.matches[0].replace(Z,ee),t)||[])[0]))return n;p&&(t=t.parentNode),e=e.slice(u.shift().value.length)}o=V.needsContext.test(e)?0:u.length;while(o--){if(l=u[o],r.relative[c=l.type])break;if((f=r.find[c])&&(i=f(l.matches[0].replace(Z,ee),K.test(u[0].type)&&ge(t.parentNode)||t))){if(u.splice(o,1),!(e=i.length&&ve(u)))return L.apply(n,i),n;break}}}return(p||s(e,d))(i,t,!g,n,!t||K.test(e)&&ge(t.parentNode)||t),n},n.sortStable=b.split("").sort(D).join("")===b,n.detectDuplicates=!!f,p(),n.sortDetached=ue(function(e){return 1&e.compareDocumentPosition(d.createElement("fieldset"))}),ue(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||le("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),n.attributes&&ue(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||le("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ue(function(e){return null==e.getAttribute("disabled")})||le(P,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),oe}(e);w.find=E,w.expr=E.selectors,w.expr[":"]=w.expr.pseudos,w.uniqueSort=w.unique=E.uniqueSort,w.text=E.getText,w.isXMLDoc=E.isXML,w.contains=E.contains,w.escapeSelector=E.escape;var k=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&w(e).is(n))break;r.push(e)}return r},S=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},D=w.expr.match.needsContext;function N(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var A=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,t,n){return g(t)?w.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?w.grep(e,function(e){return e===t!==n}):"string"!=typeof t?w.grep(e,function(e){return u.call(t,e)>-1!==n}):w.filter(t,e,n)}w.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?w.find.matchesSelector(r,e)?[r]:[]:w.find.matches(e,w.grep(t,function(e){return 1===e.nodeType}))},w.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(w(e).filter(function(){for(t=0;t<r;t++)if(w.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)w.find(e,i[t],n);return r>1?w.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&D.test(e)?w(e):e||[],!1).length}});var q,L=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(w.fn.init=function(e,t,n){var i,o;if(!e)return this;if(n=n||q,"string"==typeof e){if(!(i="<"===e[0]&&">"===e[e.length-1]&&e.length>=3?[null,e,null]:L.exec(e))||!i[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(i[1]){if(t=t instanceof w?t[0]:t,w.merge(this,w.parseHTML(i[1],t&&t.nodeType?t.ownerDocument||t:r,!0)),A.test(i[1])&&w.isPlainObject(t))for(i in t)g(this[i])?this[i](t[i]):this.attr(i,t[i]);return this}return(o=r.getElementById(i[2]))&&(this[0]=o,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):g(e)?void 0!==n.ready?n.ready(e):e(w):w.makeArray(e,this)}).prototype=w.fn,q=w(r);var H=/^(?:parents|prev(?:Until|All))/,O={children:!0,contents:!0,next:!0,prev:!0};w.fn.extend({has:function(e){var t=w(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(w.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&w(e);if(!D.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&w.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(o.length>1?w.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?u.call(w(e),this[0]):u.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(w.uniqueSort(w.merge(this.get(),w(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}});function P(e,t){while((e=e[t])&&1!==e.nodeType);return e}w.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return k(e,"parentNode")},parentsUntil:function(e,t,n){return k(e,"parentNode",n)},next:function(e){return P(e,"nextSibling")},prev:function(e){return P(e,"previousSibling")},nextAll:function(e){return k(e,"nextSibling")},prevAll:function(e){return k(e,"previousSibling")},nextUntil:function(e,t,n){return k(e,"nextSibling",n)},prevUntil:function(e,t,n){return k(e,"previousSibling",n)},siblings:function(e){return S((e.parentNode||{}).firstChild,e)},children:function(e){return S(e.firstChild)},contents:function(e){return N(e,"iframe")?e.contentDocument:(N(e,"template")&&(e=e.content||e),w.merge([],e.childNodes))}},function(e,t){w.fn[e]=function(n,r){var i=w.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=w.filter(r,i)),this.length>1&&(O[e]||w.uniqueSort(i),H.test(e)&&i.reverse()),this.pushStack(i)}});var M=/[^\x20\t\r\n\f]+/g;function R(e){var t={};return w.each(e.match(M)||[],function(e,n){t[n]=!0}),t}w.Callbacks=function(e){e="string"==typeof e?R(e):w.extend({},e);var t,n,r,i,o=[],a=[],s=-1,u=function(){for(i=i||e.once,r=t=!0;a.length;s=-1){n=a.shift();while(++s<o.length)!1===o[s].apply(n[0],n[1])&&e.stopOnFalse&&(s=o.length,n=!1)}e.memory||(n=!1),t=!1,i&&(o=n?[]:"")},l={add:function(){return o&&(n&&!t&&(s=o.length-1,a.push(n)),function t(n){w.each(n,function(n,r){g(r)?e.unique&&l.has(r)||o.push(r):r&&r.length&&"string"!==x(r)&&t(r)})}(arguments),n&&!t&&u()),this},remove:function(){return w.each(arguments,function(e,t){var n;while((n=w.inArray(t,o,n))>-1)o.splice(n,1),n<=s&&s--}),this},has:function(e){return e?w.inArray(e,o)>-1:o.length>0},empty:function(){return o&&(o=[]),this},disable:function(){return i=a=[],o=n="",this},disabled:function(){return!o},lock:function(){return i=a=[],n||t||(o=n=""),this},locked:function(){return!!i},fireWith:function(e,n){return i||(n=[e,(n=n||[]).slice?n.slice():n],a.push(n),t||u()),this},fire:function(){return l.fireWith(this,arguments),this},fired:function(){return!!r}};return l};function I(e){return e}function W(e){throw e}function $(e,t,n,r){var i;try{e&&g(i=e.promise)?i.call(e).done(t).fail(n):e&&g(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}w.extend({Deferred:function(t){var n=[["notify","progress",w.Callbacks("memory"),w.Callbacks("memory"),2],["resolve","done",w.Callbacks("once memory"),w.Callbacks("once memory"),0,"resolved"],["reject","fail",w.Callbacks("once memory"),w.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},"catch":function(e){return i.then(null,e)},pipe:function(){var e=arguments;return w.Deferred(function(t){w.each(n,function(n,r){var i=g(e[r[4]])&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&g(e.promise)?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw new TypeError("Thenable self-resolution");l=e&&("object"==typeof e||"function"==typeof e)&&e.then,g(l)?i?l.call(e,a(o,n,I,i),a(o,n,W,i)):(o++,l.call(e,a(o,n,I,i),a(o,n,W,i),a(o,n,I,n.notifyWith))):(r!==I&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){w.Deferred.exceptionHook&&w.Deferred.exceptionHook(e,c.stackTrace),t+1>=o&&(r!==W&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(w.Deferred.getStackHook&&(c.stackTrace=w.Deferred.getStackHook()),e.setTimeout(c))}}return w.Deferred(function(e){n[0][3].add(a(0,e,g(i)?i:I,e.notifyWith)),n[1][3].add(a(0,e,g(t)?t:I)),n[2][3].add(a(0,e,g(r)?r:W))}).promise()},promise:function(e){return null!=e?w.extend(e,i):i}},o={};return w.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),i=o.call(arguments),a=w.Deferred(),s=function(e){return function(n){r[e]=this,i[e]=arguments.length>1?o.call(arguments):n,--t||a.resolveWith(r,i)}};if(t<=1&&($(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||g(i[n]&&i[n].then)))return a.then();while(n--)$(i[n],s(n),a.reject);return a.promise()}});var B=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;w.Deferred.exceptionHook=function(t,n){e.console&&e.console.warn&&t&&B.test(t.name)&&e.console.warn("jQuery.Deferred exception: "+t.message,t.stack,n)},w.readyException=function(t){e.setTimeout(function(){throw t})};var F=w.Deferred();w.fn.ready=function(e){return F.then(e)["catch"](function(e){w.readyException(e)}),this},w.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--w.readyWait:w.isReady)||(w.isReady=!0,!0!==e&&--w.readyWait>0||F.resolveWith(r,[w]))}}),w.ready.then=F.then;function _(){r.removeEventListener("DOMContentLoaded",_),e.removeEventListener("load",_),w.ready()}"complete"===r.readyState||"loading"!==r.readyState&&!r.documentElement.doScroll?e.setTimeout(w.ready):(r.addEventListener("DOMContentLoaded",_),e.addEventListener("load",_));var z=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===x(n)){i=!0;for(s in n)z(e,t,s,n[s],!0,o,a)}else if(void 0!==r&&(i=!0,g(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(w(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},X=/^-ms-/,U=/-([a-z])/g;function V(e,t){return t.toUpperCase()}function G(e){return e.replace(X,"ms-").replace(U,V)}var Y=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function Q(){this.expando=w.expando+Q.uid++}Q.uid=1,Q.prototype={cache:function(e){var t=e[this.expando];return t||(t={},Y(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[G(t)]=n;else for(r in t)i[G(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][G(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(G):(t=G(t))in r?[t]:t.match(M)||[]).length;while(n--)delete r[t[n]]}(void 0===t||w.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!w.isEmptyObject(t)}};var J=new Q,K=new Q,Z=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,ee=/[A-Z]/g;function te(e){return"true"===e||"false"!==e&&("null"===e?null:e===+e+""?+e:Z.test(e)?JSON.parse(e):e)}function ne(e,t,n){var r;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(ee,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n=te(n)}catch(e){}K.set(e,t,n)}else n=void 0;return n}w.extend({hasData:function(e){return K.hasData(e)||J.hasData(e)},data:function(e,t,n){return K.access(e,t,n)},removeData:function(e,t){K.remove(e,t)},_data:function(e,t,n){return J.access(e,t,n)},_removeData:function(e,t){J.remove(e,t)}}),w.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=K.get(o),1===o.nodeType&&!J.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&(r=G(r.slice(5)),ne(o,r,i[r]));J.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){K.set(this,e)}):z(this,function(t){var n;if(o&&void 0===t){if(void 0!==(n=K.get(o,e)))return n;if(void 0!==(n=ne(o,e)))return n}else this.each(function(){K.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){K.remove(this,e)})}}),w.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=J.get(e,t),n&&(!r||Array.isArray(n)?r=J.access(e,t,w.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=w.queue(e,t),r=n.length,i=n.shift(),o=w._queueHooks(e,t),a=function(){w.dequeue(e,t)};"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,a,o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return J.get(e,n)||J.access(e,n,{empty:w.Callbacks("once memory").add(function(){J.remove(e,[t+"queue",n])})})}}),w.fn.extend({queue:function(e,t){var n=2;return"string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n?w.queue(this[0],e):void 0===t?this:this.each(function(){var n=w.queue(this,e,t);w._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&w.dequeue(this,e)})},dequeue:function(e){return this.each(function(){w.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=w.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=J.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var re=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ie=new RegExp("^(?:([+-])=|)("+re+")([a-z%]*)$","i"),oe=["Top","Right","Bottom","Left"],ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&w.contains(e.ownerDocument,e)&&"none"===w.css(e,"display")},se=function(e,t,n,r){var i,o,a={};for(o in t)a[o]=e.style[o],e.style[o]=t[o];i=n.apply(e,r||[]);for(o in t)e.style[o]=a[o];return i};function ue(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return w.css(e,t,"")},u=s(),l=n&&n[3]||(w.cssNumber[t]?"":"px"),c=(w.cssNumber[t]||"px"!==l&&+u)&&ie.exec(w.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)w.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,w.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var le={};function ce(e){var t,n=e.ownerDocument,r=e.nodeName,i=le[r];return i||(t=n.body.appendChild(n.createElement(r)),i=w.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),le[r]=i,i)}function fe(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"===n&&(i[o]=J.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&ae(r)&&(i[o]=ce(r))):"none"!==n&&(i[o]="none",J.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}w.fn.extend({show:function(){return fe(this,!0)},hide:function(){return fe(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?w(this).show():w(this).hide()})}});var pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,he=/^$|^module$|\/(?:java|ecma)script/i,ge={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ge.optgroup=ge.option,ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td;function ye(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&N(e,t)?w.merge([e],n):n}function ve(e,t){for(var n=0,r=e.length;n<r;n++)J.set(e[n],"globalEval",!t||J.get(t[n],"globalEval"))}var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===x(o))w.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+w.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;w.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&w.inArray(o,r)>-1)i&&i.push(o);else if(l=w.contains(o.ownerDocument,o),a=ye(f.appendChild(o),"script"),l&&ve(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}!function(){var e=r.createDocumentFragment().appendChild(r.createElement("div")),t=r.createElement("input");t.setAttribute("type","radio"),t.setAttribute("checked","checked"),t.setAttribute("name","t"),e.appendChild(t),h.checkClone=e.cloneNode(!0).cloneNode(!0).lastChild.checked,e.innerHTML="<textarea>x</textarea>",h.noCloneChecked=!!e.cloneNode(!0).lastChild.defaultValue}();var be=r.documentElement,we=/^key/,Te=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,Ce=/^([^.]*)(?:\.(.+)|)/;function Ee(){return!0}function ke(){return!1}function Se(){try{return r.activeElement}catch(e){}}function De(e,t,n,r,i,o){var a,s;if("object"==typeof t){"string"!=typeof n&&(r=r||n,n=void 0);for(s in t)De(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=ke;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return w().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=w.guid++)),e.each(function(){w.event.add(this,t,i,r,n)})}w.event={global:{},add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.get(e);if(y){n.handler&&(n=(o=n).handler,i=o.selector),i&&w.find.matchesSelector(be,i),n.guid||(n.guid=w.guid++),(u=y.events)||(u=y.events={}),(a=y.handle)||(a=y.handle=function(t){return"undefined"!=typeof w&&w.event.triggered!==t.type?w.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(M)||[""]).length;while(l--)d=g=(s=Ce.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=w.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=w.event.special[d]||{},c=w.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&w.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(e,r,h,a)||e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),w.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,y=J.hasData(e)&&J.get(e);if(y&&(u=y.events)){l=(t=(t||"").match(M)||[""]).length;while(l--)if(s=Ce.exec(t[l])||[],d=g=s[1],h=(s[2]||"").split(".").sort(),d){f=w.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,y.handle)||w.removeEvent(e,d,y.handle),delete u[d])}else for(d in u)w.event.remove(e,d+t[l],n,r,!0);w.isEmptyObject(u)&&J.remove(e,"handle events")}},dispatch:function(e){var t=w.event.fix(e),n,r,i,o,a,s,u=new Array(arguments.length),l=(J.get(this,"events")||{})[t.type]||[],c=w.event.special[t.type]||{};for(u[0]=t,n=1;n<arguments.length;n++)u[n]=arguments[n];if(t.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,t)){s=w.event.handlers.call(this,t,l),n=0;while((o=s[n++])&&!t.isPropagationStopped()){t.currentTarget=o.elem,r=0;while((a=o.handlers[r++])&&!t.isImmediatePropagationStopped())t.rnamespace&&!t.rnamespace.test(a.namespace)||(t.handleObj=a,t.data=a.data,void 0!==(i=((w.event.special[a.origType]||{}).handle||a.handler).apply(o.elem,u))&&!1===(t.result=i)&&(t.preventDefault(),t.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,t),t.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&e.button>=1))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?w(i,this).index(l)>-1:w.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(w.Event.prototype,e,{enumerable:!0,configurable:!0,get:g(t)?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[w.expando]?e:new w.Event(e)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==Se()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===Se()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&N(this,"input"))return this.click(),!1},_default:function(e){return N(e.target,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},w.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},w.Event=function(e,t){if(!(this instanceof w.Event))return new w.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?Ee:ke,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&w.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[w.expando]=!0},w.Event.prototype={constructor:w.Event,isDefaultPrevented:ke,isPropagationStopped:ke,isImmediatePropagationStopped:ke,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=Ee,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=Ee,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=Ee,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},w.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(e){var t=e.button;return null==e.which&&we.test(e.type)?null!=e.charCode?e.charCode:e.keyCode:!e.which&&void 0!==t&&Te.test(e.type)?1&t?1:2&t?3:4&t?2:0:e.which}},w.event.addProp),w.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){w.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=this,i=e.relatedTarget,o=e.handleObj;return i&&(i===r||w.contains(r,i))||(e.type=o.origType,n=o.handler.apply(this,arguments),e.type=t),n}}}),w.fn.extend({on:function(e,t,n,r){return De(this,e,t,n,r)},one:function(e,t,n,r){return De(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,w(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=ke),this.each(function(){w.event.remove(this,e,n,t)})}});var Ne=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Ae=/<script|<style|<link/i,je=/checked\s*(?:[^=]|=\s*.checked.)/i,qe=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Le(e,t){return N(e,"table")&&N(11!==t.nodeType?t:t.firstChild,"tr")?w(e).children("tbody")[0]||e:e}function He(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function Oe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Pe(e,t){var n,r,i,o,a,s,u,l;if(1===t.nodeType){if(J.hasData(e)&&(o=J.access(e),a=J.set(t,o),l=o.events)){delete a.handle,a.events={};for(i in l)for(n=0,r=l[i].length;n<r;n++)w.event.add(t,i,l[i][n])}K.hasData(e)&&(s=K.access(e),u=w.extend({},s),K.set(t,u))}}function Me(e,t){var n=t.nodeName.toLowerCase();"input"===n&&pe.test(e.type)?t.checked=e.checked:"input"!==n&&"textarea"!==n||(t.defaultValue=e.defaultValue)}function Re(e,t,n,r){t=a.apply([],t);var i,o,s,u,l,c,f=0,p=e.length,d=p-1,y=t[0],v=g(y);if(v||p>1&&"string"==typeof y&&!h.checkClone&&je.test(y))return e.each(function(i){var o=e.eq(i);v&&(t[0]=y.call(this,i,o.html())),Re(o,t,n,r)});if(p&&(i=xe(t,e[0].ownerDocument,!1,e,r),o=i.firstChild,1===i.childNodes.length&&(i=o),o||r)){for(u=(s=w.map(ye(i,"script"),He)).length;f<p;f++)l=i,f!==d&&(l=w.clone(l,!0,!0),u&&w.merge(s,ye(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,w.map(s,Oe),f=0;f<u;f++)l=s[f],he.test(l.type||"")&&!J.access(l,"globalEval")&&w.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?w._evalUrl&&w._evalUrl(l.src):m(l.textContent.replace(qe,""),c,l))}return e}function Ie(e,t,n){for(var r,i=t?w.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||w.cleanData(ye(r)),r.parentNode&&(n&&w.contains(r.ownerDocument,r)&&ve(ye(r,"script")),r.parentNode.removeChild(r));return e}w.extend({htmlPrefilter:function(e){return e.replace(Ne,"<$1></$2>")},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=w.contains(e.ownerDocument,e);if(!(h.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||w.isXMLDoc(e)))for(a=ye(s),r=0,i=(o=ye(e)).length;r<i;r++)Me(o[r],a[r]);if(t)if(n)for(o=o||ye(e),a=a||ye(s),r=0,i=o.length;r<i;r++)Pe(o[r],a[r]);else Pe(e,s);return(a=ye(s,"script")).length>0&&ve(a,!u&&ye(e,"script")),s},cleanData:function(e){for(var t,n,r,i=w.event.special,o=0;void 0!==(n=e[o]);o++)if(Y(n)){if(t=n[J.expando]){if(t.events)for(r in t.events)i[r]?w.event.remove(n,r):w.removeEvent(n,r,t.handle);n[J.expando]=void 0}n[K.expando]&&(n[K.expando]=void 0)}}}),w.fn.extend({detach:function(e){return Ie(this,e,!0)},remove:function(e){return Ie(this,e)},text:function(e){return z(this,function(e){return void 0===e?w.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return Re(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||Le(this,e).appendChild(e)})},prepend:function(){return Re(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=Le(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return Re(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(w.cleanData(ye(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return w.clone(this,e,t)})},html:function(e){return z(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!Ae.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=w.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(w.cleanData(ye(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return Re(this,arguments,function(t){var n=this.parentNode;w.inArray(this,e)<0&&(w.cleanData(ye(this)),n&&n.replaceChild(t,this))},e)}}),w.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){w.fn[e]=function(e){for(var n,r=[],i=w(e),o=i.length-1,a=0;a<=o;a++)n=a===o?this:this.clone(!0),w(i[a])[t](n),s.apply(r,n.get());return this.pushStack(r)}});var We=new RegExp("^("+re+")(?!px)[a-z%]+$","i"),$e=function(t){var n=t.ownerDocument.defaultView;return n&&n.opener||(n=e),n.getComputedStyle(t)},Be=new RegExp(oe.join("|"),"i");!function(){function t(){if(c){l.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",c.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",be.appendChild(l).appendChild(c);var t=e.getComputedStyle(c);i="1%"!==t.top,u=12===n(t.marginLeft),c.style.right="60%",s=36===n(t.right),o=36===n(t.width),c.style.position="absolute",a=36===c.offsetWidth||"absolute",be.removeChild(l),c=null}}function n(e){return Math.round(parseFloat(e))}var i,o,a,s,u,l=r.createElement("div"),c=r.createElement("div");c.style&&(c.style.backgroundClip="content-box",c.cloneNode(!0).style.backgroundClip="",h.clearCloneStyle="content-box"===c.style.backgroundClip,w.extend(h,{boxSizingReliable:function(){return t(),o},pixelBoxStyles:function(){return t(),s},pixelPosition:function(){return t(),i},reliableMarginLeft:function(){return t(),u},scrollboxSize:function(){return t(),a}}))}();function Fe(e,t,n){var r,i,o,a,s=e.style;return(n=n||$e(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||w.contains(e.ownerDocument,e)||(a=w.style(e,t)),!h.pixelBoxStyles()&&We.test(a)&&Be.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function _e(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}var ze=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ue={position:"absolute",visibility:"hidden",display:"block"},Ve={letterSpacing:"0",fontWeight:"400"},Ge=["Webkit","Moz","ms"],Ye=r.createElement("div").style;function Qe(e){if(e in Ye)return e;var t=e[0].toUpperCase()+e.slice(1),n=Ge.length;while(n--)if((e=Ge[n]+t)in Ye)return e}function Je(e){var t=w.cssProps[e];return t||(t=w.cssProps[e]=Qe(e)||e),t}function Ke(e,t,n){var r=ie.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Ze(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=w.css(e,n+oe[a],!0,i)),r?("content"===n&&(u-=w.css(e,"padding"+oe[a],!0,i)),"margin"!==n&&(u-=w.css(e,"border"+oe[a]+"Width",!0,i))):(u+=w.css(e,"padding"+oe[a],!0,i),"padding"!==n?u+=w.css(e,"border"+oe[a]+"Width",!0,i):s+=w.css(e,"border"+oe[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))),u}function et(e,t,n){var r=$e(e),i=Fe(e,t,r),o="border-box"===w.css(e,"boxSizing",!1,r),a=o;if(We.test(i)){if(!n)return i;i="auto"}return a=a&&(h.boxSizingReliable()||i===e.style[t]),("auto"===i||!parseFloat(i)&&"inline"===w.css(e,"display",!1,r))&&(i=e["offset"+t[0].toUpperCase()+t.slice(1)],a=!0),(i=parseFloat(i)||0)+Ze(e,t,n||(o?"border":"content"),a,r,i)+"px"}w.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=Fe(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=G(t),u=Xe.test(t),l=e.style;if(u||(t=Je(s)),a=w.cssHooks[t]||w.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=ie.exec(n))&&i[1]&&(n=ue(e,t,i),o="number"),null!=n&&n===n&&("number"===o&&(n+=i&&i[3]||(w.cssNumber[s]?"":"px")),h.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=G(t);return Xe.test(t)||(t=Je(s)),(a=w.cssHooks[t]||w.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=Fe(e,t,r)),"normal"===i&&t in Ve&&(i=Ve[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),w.each(["height","width"],function(e,t){w.cssHooks[t]={get:function(e,n,r){if(n)return!ze.test(w.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?et(e,t,r):se(e,Ue,function(){return et(e,t,r)})},set:function(e,n,r){var i,o=$e(e),a="border-box"===w.css(e,"boxSizing",!1,o),s=r&&Ze(e,t,r,a,o);return a&&h.scrollboxSize()===o.position&&(s-=Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-parseFloat(o[t])-Ze(e,t,"border",!1,o)-.5)),s&&(i=ie.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=w.css(e,t)),Ke(e,n,s)}}}),w.cssHooks.marginLeft=_e(h.reliableMarginLeft,function(e,t){if(t)return(parseFloat(Fe(e,"marginLeft"))||e.getBoundingClientRect().left-se(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),w.each({margin:"",padding:"",border:"Width"},function(e,t){w.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+oe[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(w.cssHooks[e+t].set=Ke)}),w.fn.extend({css:function(e,t){return z(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=$e(e),i=t.length;a<i;a++)o[t[a]]=w.css(e,t[a],!1,r);return o}return void 0!==n?w.style(e,t,n):w.css(e,t)},e,t,arguments.length>1)}});function tt(e,t,n,r,i){return new tt.prototype.init(e,t,n,r,i)}w.Tween=tt,tt.prototype={constructor:tt,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||w.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(w.cssNumber[n]?"":"px")},cur:function(){var e=tt.propHooks[this.prop];return e&&e.get?e.get(this):tt.propHooks._default.get(this)},run:function(e){var t,n=tt.propHooks[this.prop];return this.options.duration?this.pos=t=w.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):tt.propHooks._default.set(this),this}},tt.prototype.init.prototype=tt.prototype,tt.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=w.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){w.fx.step[e.prop]?w.fx.step[e.prop](e):1!==e.elem.nodeType||null==e.elem.style[w.cssProps[e.prop]]&&!w.cssHooks[e.prop]?e.elem[e.prop]=e.now:w.style(e.elem,e.prop,e.now+e.unit)}}},tt.propHooks.scrollTop=tt.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},w.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},w.fx=tt.prototype.init,w.fx.step={};var nt,rt,it=/^(?:toggle|show|hide)$/,ot=/queueHooks$/;function at(){rt&&(!1===r.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(at):e.setTimeout(at,w.fx.interval),w.fx.tick())}function st(){return e.setTimeout(function(){nt=void 0}),nt=Date.now()}function ut(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=oe[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function lt(e,t,n){for(var r,i=(pt.tweeners[t]||[]).concat(pt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function ct(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),y=J.get(e,"fxshow");n.queue||(null==(a=w._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,w.queue(e,"fx").length||a.empty.fire()})}));for(r in t)if(i=t[r],it.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!y||void 0===y[r])continue;g=!0}d[r]=y&&y[r]||w.style(e,r)}if((u=!w.isEmptyObject(t))||!w.isEmptyObject(d)){f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=y&&y.display)&&(l=J.get(e,"display")),"none"===(c=w.css(e,"display"))&&(l?c=l:(fe([e],!0),l=e.style.display||l,c=w.css(e,"display"),fe([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===w.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1;for(r in d)u||(y?"hidden"in y&&(g=y.hidden):y=J.access(e,"fxshow",{display:l}),o&&(y.hidden=!g),g&&fe([e],!0),p.done(function(){g||fe([e]),J.remove(e,"fxshow");for(r in d)w.style(e,r,d[r])})),u=lt(g?y[r]:0,r,p),r in y||(y[r]=u.start,g&&(u.end=u.start,u.start=0))}}function ft(e,t){var n,r,i,o,a;for(n in e)if(r=G(n),i=t[r],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=w.cssHooks[r])&&"expand"in a){o=a.expand(o),delete e[r];for(n in o)n in e||(e[n]=o[n],t[n]=i)}else t[r]=i}function pt(e,t,n){var r,i,o=0,a=pt.prefilters.length,s=w.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=nt||st(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return s.notifyWith(e,[l,r,n]),r<1&&a?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:w.extend({},t),opts:w.extend(!0,{specialEasing:{},easing:w.easing._default},n),originalProperties:t,originalOptions:n,startTime:nt||st(),duration:n.duration,tweens:[],createTween:function(t,n){var r=w.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(ft(c,l.opts.specialEasing);o<a;o++)if(r=pt.prefilters[o].call(l,e,c,l.opts))return g(r.stop)&&(w._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return w.map(c,lt,l),g(l.opts.start)&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),w.fx.timer(w.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}w.Animation=w.extend(pt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return ue(n.elem,e,ie.exec(t),n),n}]},tweener:function(e,t){g(e)?(t=e,e=["*"]):e=e.match(M);for(var n,r=0,i=e.length;r<i;r++)n=e[r],pt.tweeners[n]=pt.tweeners[n]||[],pt.tweeners[n].unshift(t)},prefilters:[ct],prefilter:function(e,t){t?pt.prefilters.unshift(e):pt.prefilters.push(e)}}),w.speed=function(e,t,n){var r=e&&"object"==typeof e?w.extend({},e):{complete:n||!n&&t||g(e)&&e,duration:e,easing:n&&t||t&&!g(t)&&t};return w.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in w.fx.speeds?r.duration=w.fx.speeds[r.duration]:r.duration=w.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){g(r.old)&&r.old.call(this),r.queue&&w.dequeue(this,r.queue)},r},w.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=w.isEmptyObject(e),o=w.speed(t,n,r),a=function(){var t=pt(this,w.extend({},e),o);(i||J.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&!1!==e&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=w.timers,a=J.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&ot.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem!==this||null!=e&&o[i].queue!==e||(o[i].anim.stop(n),t=!1,o.splice(i,1));!t&&n||w.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=J.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=w.timers,a=r?r.length:0;for(n.finish=!0,w.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),w.each(["toggle","show","hide"],function(e,t){var n=w.fn[t];w.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(ut(t,!0),e,r,i)}}),w.each({slideDown:ut("show"),slideUp:ut("hide"),slideToggle:ut("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){w.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),w.timers=[],w.fx.tick=function(){var e,t=0,n=w.timers;for(nt=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||w.fx.stop(),nt=void 0},w.fx.timer=function(e){w.timers.push(e),w.fx.start()},w.fx.interval=13,w.fx.start=function(){rt||(rt=!0,at())},w.fx.stop=function(){rt=null},w.fx.speeds={slow:600,fast:200,_default:400},w.fn.delay=function(t,n){return t=w.fx?w.fx.speeds[t]||t:t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})},function(){var e=r.createElement("input"),t=r.createElement("select").appendChild(r.createElement("option"));e.type="checkbox",h.checkOn=""!==e.value,h.optSelected=t.selected,(e=r.createElement("input")).value="t",e.type="radio",h.radioValue="t"===e.value}();var dt,ht=w.expr.attrHandle;w.fn.extend({attr:function(e,t){return z(this,w.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){w.removeAttr(this,e)})}}),w.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?w.prop(e,t,n):(1===o&&w.isXMLDoc(e)||(i=w.attrHooks[t.toLowerCase()]||(w.expr.match.bool.test(t)?dt:void 0)),void 0!==n?null===n?void w.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=w.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!h.radioValue&&"radio"===t&&N(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(M);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),dt={set:function(e,t,n){return!1===t?w.removeAttr(e,n):e.setAttribute(n,n),n}},w.each(w.expr.match.bool.source.match(/\w+/g),function(e,t){var n=ht[t]||w.find.attr;ht[t]=function(e,t,r){var i,o,a=t.toLowerCase();return r||(o=ht[a],ht[a]=i,i=null!=n(e,t,r)?a:null,ht[a]=o),i}});var gt=/^(?:input|select|textarea|button)$/i,yt=/^(?:a|area)$/i;w.fn.extend({prop:function(e,t){return z(this,w.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[w.propFix[e]||e]})}}),w.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&w.isXMLDoc(e)||(t=w.propFix[t]||t,i=w.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=w.find.attr(e,"tabindex");return t?parseInt(t,10):gt.test(e.nodeName)||yt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),h.optSelected||(w.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),w.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){w.propFix[this.toLowerCase()]=this});function vt(e){return(e.match(M)||[]).join(" ")}function mt(e){return e.getAttribute&&e.getAttribute("class")||""}function xt(e){return Array.isArray(e)?e:"string"==typeof e?e.match(M)||[]:[]}w.fn.extend({addClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).addClass(e.call(this,t,mt(this)))});if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},removeClass:function(e){var t,n,r,i,o,a,s,u=0;if(g(e))return this.each(function(t){w(this).removeClass(e.call(this,t,mt(this)))});if(!arguments.length)return this.attr("class","");if((t=xt(e)).length)while(n=this[u++])if(i=mt(n),r=1===n.nodeType&&" "+vt(i)+" "){a=0;while(o=t[a++])while(r.indexOf(" "+o+" ")>-1)r=r.replace(" "+o+" "," ");i!==(s=vt(r))&&n.setAttribute("class",s)}return this},toggleClass:function(e,t){var n=typeof e,r="string"===n||Array.isArray(e);return"boolean"==typeof t&&r?t?this.addClass(e):this.removeClass(e):g(e)?this.each(function(n){w(this).toggleClass(e.call(this,n,mt(this),t),t)}):this.each(function(){var t,i,o,a;if(r){i=0,o=w(this),a=xt(e);while(t=a[i++])o.hasClass(t)?o.removeClass(t):o.addClass(t)}else void 0!==e&&"boolean"!==n||((t=mt(this))&&J.set(this,"__className__",t),this.setAttribute&&this.setAttribute("class",t||!1===e?"":J.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+vt(mt(n))+" ").indexOf(t)>-1)return!0;return!1}});var bt=/\r/g;w.fn.extend({val:function(e){var t,n,r,i=this[0];{if(arguments.length)return r=g(e),this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,w(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=w.map(i,function(e){return null==e?"":e+""})),(t=w.valHooks[this.type]||w.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))});if(i)return(t=w.valHooks[i.type]||w.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:"string"==typeof(n=i.value)?n.replace(bt,""):null==n?"":n}}}),w.extend({valHooks:{option:{get:function(e){var t=w.find.attr(e,"value");return null!=t?t:vt(w.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!N(n.parentNode,"optgroup"))){if(t=w(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=w.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=w.inArray(w.valHooks.option.get(r),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),w.each(["radio","checkbox"],function(){w.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=w.inArray(w(e).val(),t)>-1}},h.checkOn||(w.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),h.focusin="onfocusin"in e;var wt=/^(?:focusinfocus|focusoutblur)$/,Tt=function(e){e.stopPropagation()};w.extend(w.event,{trigger:function(t,n,i,o){var a,s,u,l,c,p,d,h,v=[i||r],m=f.call(t,"type")?t.type:t,x=f.call(t,"namespace")?t.namespace.split("."):[];if(s=h=u=i=i||r,3!==i.nodeType&&8!==i.nodeType&&!wt.test(m+w.event.triggered)&&(m.indexOf(".")>-1&&(m=(x=m.split(".")).shift(),x.sort()),c=m.indexOf(":")<0&&"on"+m,t=t[w.expando]?t:new w.Event(m,"object"==typeof t&&t),t.isTrigger=o?2:3,t.namespace=x.join("."),t.rnamespace=t.namespace?new RegExp("(^|\\.)"+x.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=i),n=null==n?[t]:w.makeArray(n,[t]),d=w.event.special[m]||{},o||!d.trigger||!1!==d.trigger.apply(i,n))){if(!o&&!d.noBubble&&!y(i)){for(l=d.delegateType||m,wt.test(l+m)||(s=s.parentNode);s;s=s.parentNode)v.push(s),u=s;u===(i.ownerDocument||r)&&v.push(u.defaultView||u.parentWindow||e)}a=0;while((s=v[a++])&&!t.isPropagationStopped())h=s,t.type=a>1?l:d.bindType||m,(p=(J.get(s,"events")||{})[t.type]&&J.get(s,"handle"))&&p.apply(s,n),(p=c&&s[c])&&p.apply&&Y(s)&&(t.result=p.apply(s,n),!1===t.result&&t.preventDefault());return t.type=m,o||t.isDefaultPrevented()||d._default&&!1!==d._default.apply(v.pop(),n)||!Y(i)||c&&g(i[m])&&!y(i)&&((u=i[c])&&(i[c]=null),w.event.triggered=m,t.isPropagationStopped()&&h.addEventListener(m,Tt),i[m](),t.isPropagationStopped()&&h.removeEventListener(m,Tt),w.event.triggered=void 0,u&&(i[c]=u)),t.result}},simulate:function(e,t,n){var r=w.extend(new w.Event,n,{type:e,isSimulated:!0});w.event.trigger(r,null,t)}}),w.fn.extend({trigger:function(e,t){return this.each(function(){w.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return w.event.trigger(e,t,n,!0)}}),h.focusin||w.each({focus:"focusin",blur:"focusout"},function(e,t){var n=function(e){w.event.simulate(t,e.target,w.event.fix(e))};w.event.special[t]={setup:function(){var r=this.ownerDocument||this,i=J.access(r,t);i||r.addEventListener(e,n,!0),J.access(r,t,(i||0)+1)},teardown:function(){var r=this.ownerDocument||this,i=J.access(r,t)-1;i?J.access(r,t,i):(r.removeEventListener(e,n,!0),J.remove(r,t))}}});var Ct=e.location,Et=Date.now(),kt=/\?/;w.parseXML=function(t){var n;if(!t||"string"!=typeof t)return null;try{n=(new e.DOMParser).parseFromString(t,"text/xml")}catch(e){n=void 0}return n&&!n.getElementsByTagName("parsererror").length||w.error("Invalid XML: "+t),n};var St=/\[\]$/,Dt=/\r?\n/g,Nt=/^(?:submit|button|image|reset|file)$/i,At=/^(?:input|select|textarea|keygen)/i;function jt(e,t,n,r){var i;if(Array.isArray(t))w.each(t,function(t,i){n||St.test(e)?r(e,i):jt(e+"["+("object"==typeof i&&null!=i?t:"")+"]",i,n,r)});else if(n||"object"!==x(t))r(e,t);else for(i in t)jt(e+"["+i+"]",t[i],n,r)}w.param=function(e,t){var n,r=[],i=function(e,t){var n=g(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(Array.isArray(e)||e.jquery&&!w.isPlainObject(e))w.each(e,function(){i(this.name,this.value)});else for(n in e)jt(n,e[n],t,i);return r.join("&")},w.fn.extend({serialize:function(){return w.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=w.prop(this,"elements");return e?w.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!w(this).is(":disabled")&&At.test(this.nodeName)&&!Nt.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=w(this).val();return null==n?null:Array.isArray(n)?w.map(n,function(e){return{name:t.name,value:e.replace(Dt,"\r\n")}}):{name:t.name,value:n.replace(Dt,"\r\n")}}).get()}});var qt=/%20/g,Lt=/#.*$/,Ht=/([?&])_=[^&]*/,Ot=/^(.*?):[ \t]*([^\r\n]*)$/gm,Pt=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Mt=/^(?:GET|HEAD)$/,Rt=/^\/\//,It={},Wt={},$t="*/".concat("*"),Bt=r.createElement("a");Bt.href=Ct.href;function Ft(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(M)||[];if(g(n))while(r=o[i++])"+"===r[0]?(r=r.slice(1)||"*",(e[r]=e[r]||[]).unshift(n)):(e[r]=e[r]||[]).push(n)}}function _t(e,t,n,r){var i={},o=e===Wt;function a(s){var u;return i[s]=!0,w.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function zt(e,t){var n,r,i=w.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&w.extend(!0,e,r),e}function Xt(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}function Ut(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}w.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:Ct.href,type:"GET",isLocal:Pt.test(Ct.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":$t,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":w.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?zt(zt(e,w.ajaxSettings),t):zt(w.ajaxSettings,e)},ajaxPrefilter:Ft(It),ajaxTransport:Ft(Wt),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var i,o,a,s,u,l,c,f,p,d,h=w.ajaxSetup({},n),g=h.context||h,y=h.context&&(g.nodeType||g.jquery)?w(g):w.event,v=w.Deferred(),m=w.Callbacks("once memory"),x=h.statusCode||{},b={},T={},C="canceled",E={readyState:0,getResponseHeader:function(e){var t;if(c){if(!s){s={};while(t=Ot.exec(a))s[t[1].toLowerCase()]=t[2]}t=s[e.toLowerCase()]}return null==t?null:t},getAllResponseHeaders:function(){return c?a:null},setRequestHeader:function(e,t){return null==c&&(e=T[e.toLowerCase()]=T[e.toLowerCase()]||e,b[e]=t),this},overrideMimeType:function(e){return null==c&&(h.mimeType=e),this},statusCode:function(e){var t;if(e)if(c)E.always(e[E.status]);else for(t in e)x[t]=[x[t],e[t]];return this},abort:function(e){var t=e||C;return i&&i.abort(t),k(0,t),this}};if(v.promise(E),h.url=((t||h.url||Ct.href)+"").replace(Rt,Ct.protocol+"//"),h.type=n.method||n.type||h.method||h.type,h.dataTypes=(h.dataType||"*").toLowerCase().match(M)||[""],null==h.crossDomain){l=r.createElement("a");try{l.href=h.url,l.href=l.href,h.crossDomain=Bt.protocol+"//"+Bt.host!=l.protocol+"//"+l.host}catch(e){h.crossDomain=!0}}if(h.data&&h.processData&&"string"!=typeof h.data&&(h.data=w.param(h.data,h.traditional)),_t(It,h,n,E),c)return E;(f=w.event&&h.global)&&0==w.active++&&w.event.trigger("ajaxStart"),h.type=h.type.toUpperCase(),h.hasContent=!Mt.test(h.type),o=h.url.replace(Lt,""),h.hasContent?h.data&&h.processData&&0===(h.contentType||"").indexOf("application/x-www-form-urlencoded")&&(h.data=h.data.replace(qt,"+")):(d=h.url.slice(o.length),h.data&&(h.processData||"string"==typeof h.data)&&(o+=(kt.test(o)?"&":"?")+h.data,delete h.data),!1===h.cache&&(o=o.replace(Ht,"$1"),d=(kt.test(o)?"&":"?")+"_="+Et+++d),h.url=o+d),h.ifModified&&(w.lastModified[o]&&E.setRequestHeader("If-Modified-Since",w.lastModified[o]),w.etag[o]&&E.setRequestHeader("If-None-Match",w.etag[o])),(h.data&&h.hasContent&&!1!==h.contentType||n.contentType)&&E.setRequestHeader("Content-Type",h.contentType),E.setRequestHeader("Accept",h.dataTypes[0]&&h.accepts[h.dataTypes[0]]?h.accepts[h.dataTypes[0]]+("*"!==h.dataTypes[0]?", "+$t+"; q=0.01":""):h.accepts["*"]);for(p in h.headers)E.setRequestHeader(p,h.headers[p]);if(h.beforeSend&&(!1===h.beforeSend.call(g,E,h)||c))return E.abort();if(C="abort",m.add(h.complete),E.done(h.success),E.fail(h.error),i=_t(Wt,h,n,E)){if(E.readyState=1,f&&y.trigger("ajaxSend",[E,h]),c)return E;h.async&&h.timeout>0&&(u=e.setTimeout(function(){E.abort("timeout")},h.timeout));try{c=!1,i.send(b,k)}catch(e){if(c)throw e;k(-1,e)}}else k(-1,"No Transport");function k(t,n,r,s){var l,p,d,b,T,C=n;c||(c=!0,u&&e.clearTimeout(u),i=void 0,a=s||"",E.readyState=t>0?4:0,l=t>=200&&t<300||304===t,r&&(b=Xt(h,E,r)),b=Ut(h,b,E,l),l?(h.ifModified&&((T=E.getResponseHeader("Last-Modified"))&&(w.lastModified[o]=T),(T=E.getResponseHeader("etag"))&&(w.etag[o]=T)),204===t||"HEAD"===h.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,l=!(d=b.error))):(d=C,!t&&C||(C="error",t<0&&(t=0))),E.status=t,E.statusText=(n||C)+"",l?v.resolveWith(g,[p,C,E]):v.rejectWith(g,[E,C,d]),E.statusCode(x),x=void 0,f&&y.trigger(l?"ajaxSuccess":"ajaxError",[E,h,l?p:d]),m.fireWith(g,[E,C]),f&&(y.trigger("ajaxComplete",[E,h]),--w.active||w.event.trigger("ajaxStop")))}return E},getJSON:function(e,t,n){return w.get(e,t,n,"json")},getScript:function(e,t){return w.get(e,void 0,t,"script")}}),w.each(["get","post"],function(e,t){w[t]=function(e,n,r,i){return g(n)&&(i=i||r,r=n,n=void 0),w.ajax(w.extend({url:e,type:t,dataType:i,data:n,success:r},w.isPlainObject(e)&&e))}}),w._evalUrl=function(e){return w.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},w.fn.extend({wrapAll:function(e){var t;return this[0]&&(g(e)&&(e=e.call(this[0])),t=w(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return g(e)?this.each(function(t){w(this).wrapInner(e.call(this,t))}):this.each(function(){var t=w(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t=g(e);return this.each(function(n){w(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){w(this).replaceWith(this.childNodes)}),this}}),w.expr.pseudos.hidden=function(e){return!w.expr.pseudos.visible(e)},w.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},w.ajaxSettings.xhr=function(){try{return new e.XMLHttpRequest}catch(e){}};var Vt={0:200,1223:204},Gt=w.ajaxSettings.xhr();h.cors=!!Gt&&"withCredentials"in Gt,h.ajax=Gt=!!Gt,w.ajaxTransport(function(t){var n,r;if(h.cors||Gt&&!t.crossDomain)return{send:function(i,o){var a,s=t.xhr();if(s.open(t.type,t.url,t.async,t.username,t.password),t.xhrFields)for(a in t.xhrFields)s[a]=t.xhrFields[a];t.mimeType&&s.overrideMimeType&&s.overrideMimeType(t.mimeType),t.crossDomain||i["X-Requested-With"]||(i["X-Requested-With"]="XMLHttpRequest");for(a in i)s.setRequestHeader(a,i[a]);n=function(e){return function(){n&&(n=r=s.onload=s.onerror=s.onabort=s.ontimeout=s.onreadystatechange=null,"abort"===e?s.abort():"error"===e?"number"!=typeof s.status?o(0,"error"):o(s.status,s.statusText):o(Vt[s.status]||s.status,s.statusText,"text"!==(s.responseType||"text")||"string"!=typeof s.responseText?{binary:s.response}:{text:s.responseText},s.getAllResponseHeaders()))}},s.onload=n(),r=s.onerror=s.ontimeout=n("error"),void 0!==s.onabort?s.onabort=r:s.onreadystatechange=function(){4===s.readyState&&e.setTimeout(function(){n&&r()})},n=n("abort");try{s.send(t.hasContent&&t.data||null)}catch(e){if(n)throw e}},abort:function(){n&&n()}}}),w.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),w.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return w.globalEval(e),e}}}),w.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),w.ajaxTransport("script",function(e){if(e.crossDomain){var t,n;return{send:function(i,o){t=w("<script>").prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&o("error"===e.type?404:200,e.type)}),r.head.appendChild(t[0])},abort:function(){n&&n()}}}});var Yt=[],Qt=/(=)\?(?=&|$)|\?\?/;w.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=Yt.pop()||w.expando+"_"+Et++;return this[e]=!0,e}}),w.ajaxPrefilter("json jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(Qt.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&Qt.test(t.data)&&"data");if(s||"jsonp"===t.dataTypes[0])return i=t.jsonpCallback=g(t.jsonpCallback)?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(Qt,"$1"+i):!1!==t.jsonp&&(t.url+=(kt.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||w.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?w(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,Yt.push(i)),a&&g(o)&&o(a[0]),a=o=void 0}),"script"}),h.createHTMLDocument=function(){var e=r.implementation.createHTMLDocument("").body;return e.innerHTML="<form></form><form></form>",2===e.childNodes.length}(),w.parseHTML=function(e,t,n){if("string"!=typeof e)return[];"boolean"==typeof t&&(n=t,t=!1);var i,o,a;return t||(h.createHTMLDocument?((i=(t=r.implementation.createHTMLDocument("")).createElement("base")).href=r.location.href,t.head.appendChild(i)):t=r),o=A.exec(e),a=!n&&[],o?[t.createElement(o[1])]:(o=xe([e],t,a),a&&a.length&&w(a).remove(),w.merge([],o.childNodes))},w.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=vt(e.slice(s)),e=e.slice(0,s)),g(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&w.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?w("<div>").append(w.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},w.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){w.fn[t]=function(e){return this.on(t,e)}}),w.expr.pseudos.animated=function(e){return w.grep(w.timers,function(t){return e===t.elem}).length},w.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l,c=w.css(e,"position"),f=w(e),p={};"static"===c&&(e.style.position="relative"),s=f.offset(),o=w.css(e,"top"),u=w.css(e,"left"),(l=("absolute"===c||"fixed"===c)&&(o+u).indexOf("auto")>-1)?(a=(r=f.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),g(t)&&(t=t.call(e,n,w.extend({},s))),null!=t.top&&(p.top=t.top-s.top+a),null!=t.left&&(p.left=t.left-s.left+i),"using"in t?t.using.call(e,p):f.css(p)}},w.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){w.offset.setOffset(this,e,t)});var t,n,r=this[0];if(r)return r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===w.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===w.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=w(e).offset()).top+=w.css(e,"borderTopWidth",!0),i.left+=w.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-w.css(r,"marginTop",!0),left:t.left-i.left-w.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===w.css(e,"position"))e=e.offsetParent;return e||be})}}),w.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;w.fn[e]=function(r){return z(this,function(e,r,i){var o;if(y(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),w.each(["top","left"],function(e,t){w.cssHooks[t]=_e(h.pixelPosition,function(e,n){if(n)return n=Fe(e,t),We.test(n)?w(e).position()[t]+"px":n})}),w.each({Height:"height",Width:"width"},function(e,t){w.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){w.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return z(this,function(t,n,i){var o;return y(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?w.css(t,n,s):w.style(t,n,i,s)},t,a?i:void 0,a)}})}),w.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){w.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),w.fn.extend({hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),w.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)}}),w.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),g(e))return r=o.call(arguments,2),i=function(){return e.apply(t||this,r.concat(o.call(arguments)))},i.guid=e.guid=e.guid||w.guid++,i},w.holdReady=function(e){e?w.readyWait++:w.ready(!0)},w.isArray=Array.isArray,w.parseJSON=JSON.parse,w.nodeName=N,w.isFunction=g,w.isWindow=y,w.camelCase=G,w.type=x,w.now=Date.now,w.isNumeric=function(e){var t=w.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},"function"==typeof define&&define.amd&&define("jquery",[],function(){return w});var Jt=e.jQuery,Kt=e.$;return w.noConflict=function(t){return e.$===w&&(e.$=Kt),t&&e.jQuery===w&&(e.jQuery=Jt),w},t||(e.jQuery=e.$=w),w});

wCssClassesToAddGlobal = {'.pageNaviList > .next > a > span:after, .pageNaviList > .last > a > span:after, .pageNaviList .pageNaviNextLink > span:after' : ['wglReader'], 'body' : ['wglAddScrollTop'], '.clickable' : ['wglClickable'], '.elementBoxIfVisible_var21' : ['wglAnimateIfVisible'], '.elementBoxIfVisible_var50' : ['wglAnimateIfVisible'], '.elementHeadline_var230 > h1, .elementHeadline_var230 > h2, .elementHeadline_var230 > h3, .elementHeadline_var230 > h4, .elementHeadline_var230 > h5, .elementHeadline_var230 > h6' : ['wglCountUp'], '.elementNavigationSections_var0' : ['wglKeepInsideTopOnScroll'], '.elementTabContainer_var0 .tabs' : ['wglCheckBreakChildren'], '.elementTabContainer_var10 .tabs' : ['wglCheckBreakChildren'], '.elementTabContainer_var10000 .tabs' : ['wglCheckBreakChildren'], '.elementVideoExternal' : ['isLightBackground'], '.elementSectionObjectBlogpost .linkDetails' : ['next'], '.elementSectionObjectBlogpostAzubi .linkDetails' : ['next'], '.elementSectionObjectInterview .linkDetails' : ['next'], '.elementSectionObjectNews .linkDetails' : ['next'], '.listBannerSlider_var400 .listEntries .listEntriesInner > div' : ['wglAdjustHeightMax'], '.listBannerSlider_var401 .listEntries .listEntriesInner > div' : ['wglAdjustHeightMax'], '.listBannerSlider_var402 .listEntries .listEntriesInner > div' : ['wglAdjustHeightMax'], '.listDefault_var80' : ['wglAccordion'], '.listDefault_var10 .listEntryInner' : ['isLightBackground'], '.listDefault_var10001 .listEntryInner' : ['isLightBackground'], '.listDefault_var23910 .listEntryInner' : ['isLightBackground'], '.listDefault_var23990' : ['isLightBackground'], '.listDefault_var20000 .listEntryInner' : ['isLightBackground'], '.listDefault_var24900 .listEntryInner' : ['isLightBackground'], '.listDefaultCols_var2' : ['wglAdjustHeightMax'], '.listDefaultCols_var3' : ['wglAdjustHeightMax'], '.listDefaultCols_var4' : ['wglAdjustHeightMax'], '.listDefaultBorder_var20 .listEntry .listEntryInner' : ['isLightBackground'], '.listPictureGallery_var0 .listEntries .listEntryDescription' : ['text-sub'], '.listPictureGallery_var10000 .listEntries .listEntryDescription' : ['text-sub']};
wCssDataToAddGlobal = {'html' : ['widthnavigationmainmenumax=1200px', 'megadropdownopentype=mouseenter', 'offsetScrolledTop=96'], '#blockHeader #blockHeaderMain #navigationMain > nav > ul' : ['adaptlayer=1'], '#blockHeader #blockHeaderMain #navigationMain > nav > ul > li .ulWrapperL1 .ulWrapperL1Inner ul' : ['wislayer=1'], '.elementHeadline_var230 > h1, .elementHeadline_var230 > h2, .elementHeadline_var230 > h3, .elementHeadline_var230 > h4, .elementHeadline_var230 > h5, .elementHeadline_var230 > h6' : ['countupDuration=2.5', 'countupInitdelay=1000'], '.elementNavigationSections_var0 a' : ['scrollsmoothtotargetduration=400'], '.elementTabContainer_var0 .tabs' : ['targetbreakchildrenclass=closest(.elementTabContainer)'], '.listDefault_var80' : ['collapsible=1', 'multiple=0']};
wCssEventsToAddGlobal = {'.elementNavigationSections_var0 a' : ['onclick=wScrollSmoothToTarget'], '.azNaviList a' : ['onclick=wScrollSmoothToTarget']};
wCssJQuery = {'.linkButton, .listDefaultLink_var21 .listEntryLink a, .listDefaultLink_var21 .listEntryLink span, .listLoaderMore > a, .listLoaderMore .elementLink > a, .listLoaderMore .elementObjectEvent .elementObjectEventMap > a, .listLoaderMore .elementObjectEvent .elementObjectEventMultiMap > a, .listLoaderMore .elementObjectEventMulti .elementObjectEventMap > a, .listLoaderMore .elementObjectEventMulti .elementObjectEventMultiMap > a, .listLoaderMore .elementObjectEvent .elementObjectEventIcal > a, .listLoaderMore .elementObjectEvent .elementObjectEventMultiIcal > a, .listLoaderMore .elementObjectEventMulti .elementObjectEventIcal > a, .listLoaderMore .elementObjectEventMulti .elementObjectEventMultiIcal > a, .listLoaderMore .elementObjectContactPerson .elementObjectContactPersonData .elementObjectContactPersonVcard > a, .listBannerSliderInfolayer_var10 .listEntry .listEntryInfoLayerInner .listEntryLink > *, .elementSectionObjectNews .linkDetails, .elementSectionObjectInterview .linkDetails, .elementSectionObjectBlogpostAzubi .linkDetails, .elementSectionObjectBlogpost .linkDetails, .elementLink_varLinkedin > a, .elementLink_varXing > a, .elementLink_var10 > a, .listDefaultLink_var21 .listEntryLink a > a, .listDefaultLink_var21 .listEntryLink span > a, .listDefaultLink_var41 .listEntryLink a > a, .listDefaultLink_var41 .listEntryLink span > a, .elementObjectContactPerson .elementObjectContactPersonData .elementObjectContactPersonVcard > a' : {'jQuery' : 'jQuery(this).parent().addClass(\'isInverseBackground\')', 'event' : 'document.ready'}, '.linkButtonWhite, .listDefaultLink_var41 .listEntryLink a, .listDefaultLink_var41 .listEntryLink span, .elementLink_var11 > a' : {'jQuery' : 'jQuery(this).parent().addClass(\'isLightBackground\')', 'event' : 'document.ready'}, '.linkButtonBlack, .elementLink_var40000 > a' : {'jQuery' : 'jQuery(this).parent().addClass(\'isInverseBackground\')', 'event' : 'document.ready'}, '.linkButtonGhostWhite, .listBannerSliderInfolayer_var20 .listEntry .listEntryInfoLayerInner .listEntryLink > *,.listBannerSliderInfolayer_var402.listBannerSlider_var402 .listEntries .listEntry .listEntryInfoLayer .listEntryLink > *,.listBannerSliderInfolayer_var402.listBannerSlider_var401 .listEntries .listEntry .listEntryInfoLayer .listEntryLink > *,.listBannerSliderInfolayer_var402.listBannerSlider_var400 .listEntries .listEntry .listEntryInfoLayer .listEntryLink > *, .elementLink_var51 > a' : {'jQuery' : 'jQuery(this).parent().addClass(\'isDarkBackground\')', 'event' : 'document.ready'}, '.linkButtonImportant, .elementLink_var12 > a' : {'jQuery' : 'jQuery(this).parent().addClass(\'isInverseBackground\')', 'event' : 'document.ready'}, '.elementNavigationSections_var0 li' : {'jQuery' : 'jQuery(this).on(\'click\', function(){jQuery(this).parent().removeClass(\'open\').prev().removeClass(\'open\')})', 'event' : 'document.ready'}, '.elementNavigationSections_var0 .navigationSectionToggler' : {'jQuery' : 'jQuery(this).on(\'click\', function(){jQuery(this).toggleClass(\'open\').next().animate({\'height\' : \'toggle\'}, function(){if(jQuery(this).css(\'display\') == \'block\'){jQuery(this).addClass(\'open\').removeAttr(\'style\')}else{jQuery(this).removeClass(\'open\').removeAttr(\'style\')}})})', 'event' : 'document.ready'}, '.elementSection_var20000 > .backgroundContainer' : {'jQuery' : 'jQuery(this).append(\'<div class="backgroundGradient"></div>\')', 'event' : 'document.ready'}, '.elementSection_var50000 > .backgroundContainer' : {'jQuery' : 'jQuery(this).append(\'<div class="backgroundGradient"></div>\')', 'event' : 'document.ready'}, '.wEditorObjectConfiguration' : {'jQuery' : 'jQuery(this).addClass(\'isLightBackground\')', 'event' : 'document.ready'}, '.listDefault_var10001 .listEntryInner .listEntryDescription' : {'jQuery' : 'jQuery(this).prev().addClass(\'hasDescription\')', 'event' : 'document.ready'}};
wMediaqueriesToAddGlobal = {'xxl_min' : {}, 'xxl_max' : {}, 'xl_min' : {}, 'xl_max' : {}, 'l_min' : {}, 'l_max' : {}, 'm_min' : {}, 'm_max' : {}, 's_min' : {}, 's_max' : {}, 'xs_min' : {}, 'xs_max' : {}};
/*
////////////////////////////////////////////////////////////////
//
// UI JavaScript Funktionen
//
// Weblication CMS
// erstellt durch Scholl Communications AG, 77694 Kehl, www.scholl.de
// erstellt mit Weblication Content Management System, www.weblication.de
//
////////////////////////////////////////////////////////////////

////////////////////////////////////////////////////////////////
//                                                            //
//                   BITTE NICHT ANPASSEN!                    //
//           JS-Anpassungen können in der design.js           //
//                    durchgeführt werden.                    //
//                                                            //
////////////////////////////////////////////////////////////////
*/

wUiVersion='1.1.12';wAllowMinimize=true;wUiTmp={};var scriptTags=document.getElementsByTagName('script');try{for(i=0; i < scriptTags.length; i++){if(scriptTags[i].getAttribute('src')&&scriptTags[i].getAttribute('src').indexOf('/optimized/')!=-1){wUiTmp['wGlobalProjectPath']=scriptTags[i].getAttribute('src').replace(/^(\/[^\/]*)[^\?]*/, '$1').replace(/\?[\s\S]*$/, '');}}}catch(e){}devicePixelRatio=window.devicePixelRatio||1;hdLimitDpr=2;wOffsetScrolledTopDefault=0;wCssClassesToAddGlobal=typeof(wCssClassesToAddGlobal)!='undefined'?wCssClassesToAddGlobal:{};wCssDataToAddGlobal=typeof(wCssDataToAddGlobal)!='undefined'?wCssDataToAddGlobal:{};wCssEventsToAddGlobal=typeof(wCssEventsToAddGlobal)!='undefined'?wCssEventsToAddGlobal:{};wCssJQuery=typeof(wCssJQuery)!='undefined'?wCssJQuery:{};wCssDOM=typeof(wCssDOM)!='undefined'?wCssDOM:{};wMediaqueriesToAddGlobal=typeof(wMediaqueriesToAddGlobal)!='undefined'?wMediaqueriesToAddGlobal:{};if(document.documentElement){document.documentElement.className=document.documentElement.className + (!/MSIE (6|7|8)/.test(navigator.appVersion)?' pagestatus-uiloaded':'');}jQuery(document).ready(function(){wUiTmp['documentReady']=true;var htmlAdditionalClasses='';if(parent!=self){if(location.href.indexOf('viewmode=blank')!=-1){htmlAdditionalClasses +=' isInLightbox';}}if(navigator.appVersion.match(/MSIE (\d+\..)/)){htmlAdditionalClasses +=' ie' + String(navigator.appVersion.match(/MSIE (\d+\..)/)[1]).replace(/\..*/, '');}else if(navigator.userAgent.match(/Trident\/7/)){htmlAdditionalClasses +=' ie11';}if(/mobile/i.test(navigator.userAgent)) htmlAdditionalClasses +=' mobile';if(/iPad/i.test(navigator.userAgent)) htmlAdditionalClasses +=' ipad';if(/iPhone/i.test(navigator.userAgent)) htmlAdditionalClasses +=' iphone';if(/iPod/i.test(navigator.userAgent)) htmlAdditionalClasses +=' ipod';if(/(iPod|iPhone|iPad)/i.test(navigator.userAgent)){htmlAdditionalClasses +=' ios';wUiTmp['isIOS']=true;if(/CriOs/i.test(navigator.userAgent)){htmlAdditionalClasses +=' crios';}else if(/Safari/i.test(navigator.userAgent)){wUiTmp['isSafari']=true;htmlAdditionalClasses +=' saios';}}htmlAdditionalClasses +=' viewmode-' + (/viewmode=([^&]+)/.test(location.href)?RegExp.$1:'default');htmlAdditionalClasses +=(/targetPreview=embed/.test(location.href)?' wpreview':'');htmlAdditionalClasses +=(('ontouchstart' in window)||navigator.msMaxTouchPoints||window.DocumentTouch&&document instanceof DocumentTouch?' touch':' no-touch');htmlAdditionalClasses +=(jQuery(window).scrollTop() <=wOffsetScrolledTopDefault&&jQuery(window).scrollTop() >=0)&&document.documentElement.className.indexOf(' scrolled-top')==-1?' scrolled-top':'';if(document.cookie.indexOf('websitezoom=l')!=-1){htmlAdditionalClasses +=' zoom-l';}if(document.cookie.indexOf('websitecontrast=1')!=-1){htmlAdditionalClasses +=' contrast-height';}if(document.documentElement){if(document.documentElement.getAttribute('lang')){htmlAdditionalClasses +=' lang-' + document.documentElement.getAttribute('lang');}var documentElementClassName=document.documentElement.className;if(jQuery(window).scrollTop() > wOffsetScrolledTopDefault&&jQuery(window).scrollTop() < 0){documentElementClassName=documentElementClassName.replace(' scrolled-top', '');}documentElementClassName=(documentElementClassName.replace('no-js', 'js') + htmlAdditionalClasses).replace(/^\s+/, '');if(typeof(wEditor)=='undefined'){documentElementClassName=documentElementClassName.replace(' weditor', ' no-weditor');}else{documentElementClassName=documentElementClassName.replace(' no-weditor', ' weditor');}documentElementClassName=documentElementClassName + (!/MSIE (6|7|8)/.test(navigator.appVersion)?' pagestatus-ready':'');if(/MSIE (6|7|8)/.test(navigator.appVersion)){documentElementClassName=documentElementClassName.replace(/pagestatus-\w+/g, '');}document.documentElement.className=documentElementClassName;}for(var addClassSelector in wCssClassesToAddGlobal){jQuery(addClassSelector).each(function(index){var classesToAdd=wCssClassesToAddGlobal[addClassSelector];for(var i=0, arrayLength=classesToAdd.length; i < arrayLength; i++){var classData=classesToAdd[i].split('=');if(classData.length==2){var selector=jQuery.trim(classData[0]);if(selector=='.'){jQuery(this).addClass(jQuery.trim(classData[1]));}else if(selector=='parent'){jQuery(this).parent().addClass(jQuery.trim(classData[1]));}else{jQuery(this).find(selector).addClass(jQuery.trim(classData[1]));}}else{jQuery(this).addClass(jQuery.trim(classData[0]));}}});}for(var addDataSelector in wCssDataToAddGlobal){jQuery(addDataSelector).each(function(index){var dataToAdd=wCssDataToAddGlobal[addDataSelector];for(var i=0, arrayLength=dataToAdd.length; i < arrayLength; i++){var data=dataToAdd[i].split('=');jQuery(this).attr('data-' + jQuery.trim(data[0]), jQuery.trim(data[1]));}});}jQuery('*[data-w-addclasses]').each(function(index){var classesToAdd=jQuery(this).data('w-addclasses').split(',');jQuery(this).removeAttr('data-w-addclasses');for(var i=0, arrayLength=classesToAdd.length; i < arrayLength; i++){var classData=classesToAdd[i].split('=');var selector=jQuery.trim(classData[0]);if(selector=='.'){jQuery(this).addClass(jQuery.trim(classData[1]));}else{jQuery(this).find(selector).addClass(jQuery.trim(classData[1]));}}});for(var addEventSelector in wCssEventsToAddGlobal){jQuery(addEventSelector).each(function(index){var eventsToAdd=wCssEventsToAddGlobal[addEventSelector];for(var i=0, arrayLength=eventsToAdd.length; i < arrayLength; i++){var eventData=eventsToAdd[i].split('=');if(eventData.length==2){var eventType=jQuery.trim(eventData[0]).replace(/^on/, '');var eventFunction=jQuery.trim(eventData[1]);jQuery(this).on(eventType, (new Function('event', eventFunction + '(this, event.originalEvent);')));}}});}for(var wCssJQueryEntry in wCssJQuery){jQuery(wCssJQueryEntry).each(function(index){if(!wCssJQuery[wCssJQueryEntry]['event']||wCssJQuery[wCssJQueryEntry]['event']=='document.ready'){eval(wCssJQuery[wCssJQueryEntry]['jQuery']);}});}for(var wCssDOMEntry in wCssDOM){jQuery(wCssDOMEntry).each(function(index){domActions={'prependto':'prependTo', 'appendto':'appendTo', 'insertbefore':'insertBefore', 'insertafter':'insertAfter'};if(/^(\w+)\(/.test(wCssDOM[wCssDOMEntry]['path'])){eval('jQuery(this).' + domActions[wCssDOM[wCssDOMEntry]['action'].toLowerCase()] + '(jQuery(this).' + wCssDOM[wCssDOMEntry]['path'].replace(/\*\/$/, '') + ');');}else{if(wCssDOM[wCssDOMEntry]['action']=='prependto'){jQuery(this).prependTo(wCssDOM[wCssDOMEntry]['path']);}else if(wCssDOM[wCssDOMEntry]['action']=='appendto'){jQuery(this).appendTo(wCssDOM[wCssDOMEntry]['path']);}else if(wCssDOM[wCssDOMEntry]['action']=='insertbefore'){jQuery(this).insertBefore(wCssDOM[wCssDOMEntry]['path']);}else if(wCssDOM[wCssDOMEntry]['action']=='insertafter'){jQuery(this).insertAfter(wCssDOM[wCssDOMEntry]['path']);}}});}var mediaQueriesTmpToAdd='<div id="wMediaqueriesTmp">';for(var wMediaqueryToAddGlobal in wMediaqueriesToAddGlobal){mediaQueriesTmpToAdd +='<div id="wMediaqueryTmp_' + wMediaqueryToAddGlobal + '"/>';}mediaQueriesTmpToAdd +='</div>';if(typeof(wEditor)!='undefined'||document.cookie.indexOf('hideCookieNotice=1')!=-1|| /bot|search|slurp|spider|crawler|mediapartners/i.test(navigator.userAgent)){jQuery('#cookieNotice').hide();}else{jQuery('#cookieNotice').show();}wOffsetScrolledTopSet=typeof(wOffsetScrolledTop)!='undefined'?wOffsetScrolledTop:(document.documentElement.getAttribute('data-offsetscrolledtop')&&document.documentElement.getAttribute('data-offsetscrolledtop')!=''?document.documentElement.getAttribute('data-offsetscrolledtop'):0);wOffsetBottomChangeScrollStatusSet=typeof(wOffsetBottomChangeScrollStatus)!='undefined'?wOffsetBottomChangeScrollStatus:(document.documentElement.getAttribute('data-offsetscrolledtop')&&document.documentElement.getAttribute('data-offsetbottomchangescrollstatus')!=''?document.documentElement.getAttribute('data-offsetbottomchangescrollstatus'):0);if(wOffsetScrolledTopSet!=wOffsetScrolledTopDefault){wOffsetScrolledTopDefault=wOffsetScrolledTopSet;if(jQuery(window).scrollTop() > wOffsetScrolledTopDefault&&jQuery(window).scrollTop() < 0){documentElementClassName=documentElementClassName.replace(' scrolled-top', '');}else if(document.documentElement.className.indexOf(' scrolled-top')==-1){document.documentElement.className +=' scrolled-top';}}jQuery('body').append(mediaQueriesTmpToAdd);jQuery('.wglTabcontainer').wTabcontainer();jQuery('.wglAccordion').wAccordion();jQuery('.wglBannerSlider').wBannerSlider();jQuery('.wglPictureGallery').wPictureGallery();jQuery('.wglLightbox').wLightbox();jQuery('.wglMaximizer').wMaximizer();jQuery('.wglDatepicker').wDatepicker();jQuery('.wglTicker').wTicker();jQuery('.wglSearchSuggest').wSearchSuggest();jQuery('textarea[data-autoheight="1"]').wAutoheight();var labels=jQuery('#blockBody').length > 0?jQuery('#blockBody label, #blockFooter label'):jQuery('label');labels.each(function(index){var nameFor=jQuery(this).attr('for');if(nameFor&&nameFor!=''){var currentForm=jQuery(this).closest('form').get(0);if(currentForm){var elementFor=currentForm.elements[nameFor];if(elementFor&&elementFor.length){elementFor=elementFor[0];}if(!elementFor){elementFor=jQuery(this).closest('form').find('#' + nameFor).get(0);}if(elementFor&&typeof(elementFor.getAttribute('placeholder'))=='string'&&(elementFor.className.indexOf('wglIsInvalid')==-1||elementFor.value=='')){if(elementFor.getAttribute('data-showlabelifhasplaceholder')!='1'&&typeof(elementFor.placeholder)!='undefined'){jQuery(this).css({'display':'none'});}}}}});wPrepareHTML();if(window.matchMedia){window.matchMedia('print').addListener(function(){wUiTmp['isMediaPrint']=true;jQuery(window).trigger('resize');});}else{window.onbeforeprint=function(event){wUiTmp['isMediaPrint']=true;jQuery(window).trigger('resize');};}if(/viewmode=print/.test(location.search)){wUiTmp['isViewmodePrint']=true;}window.setTimeout(function(event){wAdaptParallax(event);}, 320);wAdaptConditionalFormData();jQuery('.wglAddScrollProgress').each(function(index){var cE=jQuery(this);cE.append('<progress id="scrollProgress" max="1000" value="0"><div></div></progress');wUiTmp['elementScrollProgress']=jQuery('#scrollProgress');jQuery(window).on('resize scroll', function(){var winScrollTop=jQuery(window).scrollTop();var winHeight=jQuery(window).height();var documentHeight=jQuery(document).height();var scrollPercentage=Math.round(1000 * winScrollTop / (documentHeight-winHeight));wUiTmp['elementScrollProgress'].attr('value', scrollPercentage)
});});jQuery('.wglAddScrollTop').each(function(index){var cE=jQuery(this);if(cE.get(0).nodeName.toLowerCase()=='body'){cE.append('<div id="scrollTopOuter"><div id="scrollTop"><div class="scrollTopInner"></div></div></div');}else{cE.after('<div id="scrollTopOuter"><div id="scrollTop"><div class="scrollTopInner"></div></div></div');}jQuery('#scrollTop').on('mousedown touchstart', function (event){event.preventDefault();jQuery('body, html').animate({scrollTop:0});});jQuery(window).on('scroll', function(){var scrollTop=jQuery(this).scrollTop();if(scrollTop > 200){jQuery('#scrollTop').fadeIn();}else{jQuery('#scrollTop').fadeOut();}});});jQuery('.wglShrinkToMinWidthWithoutBreak').each(function(index){var cE=jQuery(this);var textAlignBefore=cE.css('text-align');cE.css({'text-align':'left'});var lastElementInner=cE.children('*:last');var offsetRightLastElementInner=Math.ceil(lastElementInner.get(0).offsetLeft + lastElementInner.outerWidth() + parseInt(lastElementInner.css('margin-right')));cE.css({'text-align':textAlignBefore, 'width':String(offsetRightLastElementInner) + 'px'});});jQuery('.wglAdjustWidthEqual').each(function(index){var cE=jQuery(this);var nE=0;cE.children('*').each(function(index){if(jQuery(this).css('display')!='none'){nE++;}});var widthPerEntry=String(100 / nE) + '%';cE.children('*').each(function(index){if(jQuery(this).css('display')!='none'){jQuery(this).css({'width':widthPerEntry});}});});jQuery('.wglRemoveOnClick').each(function(index){jQuery(this).attr('onclick', '').off('click');});if(typeof(wEditor)=='undefined'){jQuery('.wglAnimateAfterTime').each(function(index){var cE=jQuery(this);var ti=typeof(cE.data('animateaftertime'))!='undefined'?cE.data('animateaftertime') * 1000:0;window.setTimeout(function(){cE.addClass('isAfterTime' + (typeof(cE.data('classtoaddaftertime'))!='undefined'?' ' + cE.data('classtoaddaftertime'):''));cE.removeClass(typeof(cE.data('classtoremoveaftertime'))!='undefined'?' ' + cE.data('classtoremoveaftertime'):'');}, ti);});}if(typeof(wEditor)=='undefined'){jQuery('.wglLightbox').each(function(index){var cE=jQuery(this);if(cE.get(0).nodeName=='IMG'){var wrapElement=cE.parent().attr('class')=='listEntryThumbnailOuter'?cE.parent():cE;var srcLightbox=cE.attr('src');if(cE.attr('data-src')&&cE.attr('data-src')!=''){srcLightbox=cE.attr('data-src');}else{if(/\-/.test(srcLightbox.replace(/[\s\S]+\//, ''))){srcLightbox=srcLightbox.replace(/\/weblication\/wThumbnails/, '').replace(/-[^-]+(\.\w+)$/, '$1');}else if(cE.attr('data-src2x')&&cE.attr('data-src2x')!=''){srcLightbox=cE.attr('data-src2x');}}var closestList=cE.closest('.elementList');var relId='';if(closestList.length==1){relId=closestList.attr('id');}wrapElement.wrap('<a rel="' + relId + '" onclick="event&&event.stopPropagation?event.stopPropagation():event.cancelBubble=true;" title="' + cE.get(0).alt + '" class="boxPictureOnly" href="' + srcLightbox + '"/>');}});}jQuery('form[data-inlinevalidation="onblur"]').each(function(){wUiTmp['formPos']=wUiTmp['formPos']?wUiTmp['formPos'] + 1:1;jQuery(this).attr('data-formpos', wUiTmp['formPos']);if(jQuery(this).attr('action').indexOf('/weblication/grid5/tmpHTTP/wForm-')!=-1){jQuery(this).find('input, textarea, select').each(function(){if(jQuery(this).attr('name')=='captchaInput'){return true;}if(location.search.indexOf('wFormStatus=failed')!=-1&&jQuery(this).find('#wFormErrorMessages').length > 0){wglValidateElementInline(jQuery(this).get(0), {'onInit':true});}var eventsToValidate='blur';if(jQuery(this).attr('type')=='radio'){eventsToValidate='click';}else if(jQuery(this).attr('type')=='file'||jQuery(this).attr('type')=='checkbox'||jQuery(this).prop("tagName")=='SELECT'|| jQuery(this).hasClass('hasDatepicker')){eventsToValidate='change';}jQuery(this).on(eventsToValidate, function(){wglValidateElementInline(jQuery(this).get(0), {});});});}});jQuery('.wglTimeLeft[data-init!="1"]').each(function(index){var cO=jQuery(this);var cE=cO.get(0);if(typeof(wEditor)!='undefined'){cO.attr('data-init', '1');return false;}cO.attr('data-init', '1');var now=new Date();var nowYear=now.getUTCFullYear();var dateTimeStr=cE.getAttribute('data-time').trim();if(dateTimeStr){dateTimeStr=dateTimeStr.replace('Y', now.getUTCFullYear());dateTimeStr=dateTimeStr.replace('m', now.getMonth() + 1);}if(/^(\d+)-(\d+)-(\d+)$/.test(dateTimeStr)){dateTimeStr +=' 00:00:00';}if(/(\d+)-(\d+)-(\d+) (\d+)\:(\d+)\:(\d+)/.test(dateTimeStr)){var dateTime=new Date(RegExp.$1, RegExp.$2-1, RegExp.$3, RegExp.$4, RegExp.$5, RegExp.$6);var diffSeconds=parseInt(dateTime.getTime() / 1000)-parseInt(now.getTime() / 1000);if(diffSeconds > 0){var remainingDays=parseInt(diffSeconds / 86400);var html=cE.innerHTML;html=html.replace('%days', remainingDays==1?'1 Tag':remainingDays + ' Tage');cE.innerHTML=html;}else{cO.parent().addClass('hasReachedTime');}}});if(/Android/i.test(navigator.userAgent)){jQuery('a').each(function(){var cE=jQuery(this);var hrefCurrent=cE.attr('href');if(/\.pdf$/.test(hrefCurrent)&&!/accessDocument\.php/.test(hrefCurrent)&&!/^https?\:\/\//.test(hrefCurrent)){if(cE.attr('data-pathPrepend')){hrefCurrent=cE.attr('data-pathPrepend') + hrefCurrent;}cE.attr('href', wUiTmp['wGlobalProjectPath'] + '/wGlobal/scripts/accessDocument.php?forceDownload=' + (cE.hasClass('download')?'1':'0') + '&document=' + encodeURIComponent(hrefCurrent));}});}jQuery(window).trigger('resize');if(typeof(wDoNotFireOnLoadBeforeReady)!='undefined'&&wDoNotFireOnLoadBeforeReady&&wUiTmp['windowLoadAfterReady']){wWindowOnLoad();}});jQuery(window).on('load', function(){if(typeof(wDoNotFireOnLoadBeforeReady)!='undefined'&&wDoNotFireOnLoadBeforeReady){if(wUiTmp['documentReady']&&!wUiTmp['windowLoad']){wWindowOnLoad();}else{wUiTmp['windowLoadAfterReady']=true;}}else{wWindowOnLoad();}});wWindowOnLoad=function(){wUiTmp['windowLoad']=true;for(var wCssJQueryEntry in wCssJQuery){jQuery(wCssJQueryEntry).each(function(index){if(wCssJQuery[wCssJQueryEntry]['event']&&wCssJQuery[wCssJQueryEntry]['event']=='window.load'){eval(wCssJQuery[wCssJQueryEntry]['jQuery']);}});}jQuery("img[data-srchover]").each(function(){var cE=jQuery(this);var hoverTriggerElement=cE;var hoverTriggerPath=cE.data('hovertrigger');if(hoverTriggerPath){eval('hoverTriggerElement=hoverTriggerElement.' + hoverTriggerPath);}hoverTriggerElement.on('mouseover', function (event){cE.data('srcbeforehover', cE.attr('src'));if(cE.data('ishd')=='1'){cE.attr('src', cE.data('srchover2x'));}else{cE.attr('src', cE.data('srchover'));}});hoverTriggerElement.on('mouseout', function (event){cE.attr('src', cE.data('srcbeforehover'));});});window.setTimeout(function(){if(location.hash!=''){wAdaptOnChangeHash({'event':'load'});}}, 120);if(document.documentElement){window.setTimeout(function(){document.documentElement.className=document.documentElement.className + ' pagestatus-loaded';}, 800);}jQuery('.wglImageMap').wImageMap();jQuery('.wglMagnifier').wMagnifier();jQuery('.wglOverflowXTouch').each(function(index){var cE=jQuery(this);var widthOuter=cE.width();var widthInner=cE.children('*').outerWidth();if(!cE.is(":visible")||widthInner <=widthOuter){return false;}else{var lastElementInner=cE.children('*').children('*:last');var offsetRightLastElementInner=lastElementInner.get(0).offsetLeft + lastElementInner.outerWidth() + parseInt(lastElementInner.css('margin-right'));cE.children('*').children('*').each(function(index){jQuery(this).css('width', jQuery(this).width());});lastElementInner.parent().css({'width':String(offsetRightLastElementInner) + 'px'});}jQuery(this).find('img').attr('unselectable', 'on');jQuery('body').on('touchstart mousedown', function(event){if(jQuery(event.target).closest(cE).length!=0){event.preventDefault();}});jQuery('body').on("touchmove mousemove", function(event){if(jQuery('body').data('wtouchelement')){var mouseXDiff=(event.originalEvent.touches?event.originalEvent.touches[0].pageX:event.pageX)-jQuery('body').data('wtouchmousex');var mouseYDiff=(event.originalEvent.touches?event.originalEvent.touches[0].pageY:event.pageY)-jQuery('body').data('wtouchmousey');jQuery('body').data('wtouchmousex', event.originalEvent.touches?event.originalEvent.touches[0].pageX:event.pageX);jQuery('body').data('wtouchmousey', event.originalEvent.touches?event.originalEvent.touches[0].pageY:event.pageY);jQuery('body').data('wtouchlastdiffx', mouseXDiff);jQuery('body').data('wtouchlastdiffy', mouseYDiff);var milliseconds=(new Date()).getTime();var timeDiff=milliseconds-jQuery('body').data('timestamplast');jQuery('body').data('timestampbefore', jQuery('body').data('timestamplast'));jQuery('body').data('timestamplast', milliseconds);var speedX=Math.round(100 * (mouseXDiff > 0?mouseXDiff:-mouseXDiff) / timeDiff) + 1;jQuery('body').data('wtouchspeedX', speedX);var touchDiffX=jQuery('body').data('wtouchmousex')-jQuery('body').data('wtouchstartmousex');jQuery('body').data('wtouchdiffx', touchDiffX);var widthOuter=parseInt(jQuery('body').data('wtouchelement').width());var left=parseInt(jQuery('body').data('wtouchelement').children('*').css('margin-left'));left=isNaN(left)?0:left;var right=parseInt(jQuery('body').data('wtouchelement').width())-parseInt(jQuery('body').data('wtouchelement').children('*').css('margin-left'))-jQuery('body').data('wtouchelement').children('*').width();right=isNaN(right)?0:right;if(left > 32){jQuery('body').data('wtouchelement').children('*').animate({'margin-left':0});jQuery('body').removeData('wtouchelement');return false;}else if(right > 32){jQuery('body').data('wtouchelement').children('*').animate({'margin-left':String(parseInt(jQuery('body').data('wtouchelement').width())-parseInt(jQuery('body').data('wtouchelement').children('*').width())) + 'px'});jQuery('body').removeData('wtouchelement');return false;}if(jQuery('body').data('wtouchelement').data('wtouchstartmarginleft') + touchDiffX < 0){jQuery('body').data('wtouchelement').children('*').css({'margin-left':String(jQuery('body').data('wtouchelement').data('wtouchstartmarginleft') + touchDiffX) + 'px'});}else{jQuery('body').data('wtouchelement').children('*').css({'margin-left':String(jQuery('body').data('wtouchelement').data('wtouchstartmarginleft') + touchDiffX) + 'px'});}}});jQuery(this).on('touchstart mousedown', function(event){jQuery(this).children('*').stop();jQuery('body').data('wtouchelement', jQuery(this));jQuery(this).data('wtouchstartmarginleft', parseInt(jQuery(this).children('*').css('margin-left')));jQuery(this).data('wtouchstartmargintop', parseInt(jQuery(this).children('*').css('margin-top')));jQuery('body').data('wtouchstartmousex', event.originalEvent.touches?event.originalEvent.touches[0].pageX:event.pageX);jQuery('body').data('wtouchstartmousey', event.originalEvent.touches?event.originalEvent.touches[0].pageY:event.pageY);});jQuery('body').on("touchend mouseup", function(event){if(jQuery('body').data('wtouchelement')){var milliseconds=(new Date()).getTime();var timeDiff=milliseconds-jQuery('body').data('timestamplast');var touchDiffX=jQuery('body').data('wtouchdiffx');var lastDiffX=jQuery('body').data('wtouchlastdiffx');var lastDiffXn=lastDiffX >=0?lastDiffX:-lastDiffX;if(lastDiffXn > 1){var speedX=(Math.round((lastDiffXn > 0?lastDiffXn:-lastDiffXn) / timeDiff) + 1) * 5;if(speedX > 200){speedX=200;}var movingWidth=Math.round(touchDiffX * 2 * (1 + speedX / 100));if(jQuery('body').data('wtouchdiffx') < 0){var right=parseInt(jQuery('body').data('wtouchelement').width())-parseInt(jQuery('body').data('wtouchelement').children('*').css('margin-left'))-jQuery('body').data('wtouchelement').children('*').width();if(movingWidth < right){movingWidth=right;}var duration=(movingWidth > 0?movingWidth:-movingWidth) * 1.5 + Math.round(100 / speedX);jQuery('body').data('wtouchelement').children('*').animate({'margin-left':'+=' + String(movingWidth)}, {'duration':duration, 'easing':'wEaseOut'});}else{var left=parseInt(jQuery('body').data('wtouchelement').children('*').css('margin-left'));if(-movingWidth < left){movingWidth=-left;}var duration=(movingWidth > 0?movingWidth:-movingWidth) * 1.5 + Math.round(100 / speedX);jQuery('body').data('wtouchelement').children('*').animate({'margin-left':'+=' + String(movingWidth)}, {'duration':duration, 'easing':'wEaseOut'});}}jQuery('body').removeData('wtouchelement');}});});if(typeof(wHighlightBlockRoot)=='undefined'){wHighlightBlockRoot='blockContentInner';}if(wHighlightBlockRoot!='none'&&/highlight=([^&]+)/.test(decodeURIComponent(location.search.replace('+', ' ')))){highlightTexts=RegExp.$1;window.setTimeout(function(){var highlightTextsArray=highlightTexts.split(/\s+/);var elementRoot=jQuery('#' + wHighlightBlockRoot);for(var j=0; j < highlightTextsArray.length; j++){var highlightText=highlightTextsArray[j];var regExpWord=new RegExp('^(?:[\\w\\W]*\\W+|)(' + highlightText.replace('+', '\\+').replace(/(\w) /, '$1\\w* +') + '\\w*)([\\w\\W]*|)$', 'gim');elementRoot.find('div, p, h1, h2, h3, h4, h5, h6, li').each(function(){var nodeCurrent=jQuery(this).get(0);if(nodeCurrent.tagName!='DIV'){nodeCurrent.innerHTML=nodeCurrent.innerHTML.replace(/[\n\r\s\t]+/g, ' ');}for(var j=0; j < 6; j++){var childNodes=nodeCurrent.childNodes;var childNodesLength=childNodes.length;for(var i=childNodesLength-1; i >=0; i--){if(childNodes[i].nodeType==3&&childNodes[i].nodeValue.trim()!=''){if(regExpWord.test(childNodes[i].nodeValue)){var splitedNode=childNodes[i].splitText(childNodes[i].nodeValue.length-RegExp.$1.length-RegExp.$2.length);splitedNode.nodeValue=splitedNode.nodeValue.substr(RegExp.$1.length);var highlightNode=document.createElement('span');highlightNode.className='wglHighlightWord';highlightNode.appendChild(document.createTextNode(RegExp.$1));splitedNode.parentNode.insertBefore(highlightNode, splitedNode);}}}}});elementRoot.find('span, strong, td, li, a').each(function(){var nodeCurrent=jQuery(this).get(0);if(nodeCurrent.className!='wglHighlightWord'){if(nodeCurrent.tagName!='DIV'){nodeCurrent.innerHTML=nodeCurrent.innerHTML.replace(/[\n\r\s\t]+/g, ' ');}for(var j=0; j < 6; j++){var childNodes=nodeCurrent.childNodes;var childNodesLength=childNodes.length;for(var i=childNodesLength-1; i >=0; i--){if(childNodes[i].nodeType==3&&childNodes[i].nodeValue.trim()!=''){if(regExpWord.test(childNodes[i].nodeValue)){var splitedNode=childNodes[i].splitText(childNodes[i].nodeValue.length-RegExp.$1.length-RegExp.$2.length);splitedNode.nodeValue=splitedNode.nodeValue.substr(RegExp.$1.length);var highlightNode=document.createElement('span');highlightNode.className='wglHighlightWord';highlightNode.appendChild(document.createTextNode(RegExp.$1));splitedNode.parentNode.insertBefore(highlightNode, splitedNode);}}}}}});}}, 160);}jQuery(window).trigger('resize');window.setTimeout(function(){wProcessWglAdjustHeightMax();}, 500);if(typeof(wUiTmp['callbackAfterLoad'])!='undefined'&&wUiTmp['callbackAfterLoad'].length&&wUiTmp['callbackAfterLoad'].length > 0){for(var i=0; i < wUiTmp['callbackAfterLoad'].length; i++){wUiTmp['callbackAfterLoad'][i]();}}};jQuery(window).on('resize', function(){wOptimizePictureSizes();var hasChangedMediaQuery=false;jQuery('#wMediaqueriesTmp > div').each(function(index){if(window.getComputedStyle){try{var computedStyle=window.getComputedStyle(jQuery(this).get(0));var fontFamily=computedStyle.fontFamily.replace(/"/g, '');var lastMediaQuery=jQuery(this).data('lastmediaquery')||'';if(fontFamily!=lastMediaQuery){if(fontFamily.indexOf('mediaquery_')==0){eval('if(typeof(' + fontFamily + '_onactivate)==\'function\'){' + fontFamily + '_onactivate();}');}else if(lastMediaQuery.indexOf('mediaquery_')==0){eval('if(typeof(' + lastMediaQuery + '_ondeactivate)==\'function\'){' + lastMediaQuery + '_ondeactivate();}');}jQuery(this).data('lastmediaquery', fontFamily);hasChangedMediaQuery=true;}}catch(e){};}});if(hasChangedMediaQuery){jQuery("img[data-srcmin]").each(function(){var currentImg=jQuery(this);var widthOrig=parseInt(typeof(currentImg.attr('widthorig'))!='undefined'?currentImg.attr('data-widthorig'):currentImg.attr('width'));var srcMin=currentImg.data('srcmin')?currentImg.data('srcmin'):'';var widthCurrent=parseInt(currentImg.width());var attrWidthCur=parseInt(typeof(currentImg.attr('width'))!='undefined'?currentImg.attr('width'):0);var widthMin=parseInt(srcMin.replace(/.*@min/, '').replace(/\..*/, ''));var widthOuter=parseInt(currentImg.parent().width());var diffWidthFrame=0;if(currentImg.parent().parent().parent().parent().hasClass('picture')){diffWidthFrame=currentImg.parent().parent().parent().parent().outerWidth()-widthCurrent;}else if(currentImg.parent().parent().hasClass('picture')){diffWidthFrame=currentImg.parent().parent().outerWidth()-widthCurrent;}if(widthCurrent > widthOrig&&widthOuter > widthOrig + diffWidthFrame + 1&&widthMin > widthOrig){currentImg.attr('src', srcMin);if(typeof(currentImg.attr('width'))!='undefined'&&currentImg.attr('width')!=''){currentImg.attr('data-widthorig', currentImg.attr('width')).removeAttr('width').attr('height', 'auto');}}});}jQuery('.wglExpandToHeighestChild').each(function(index){var cE=jQuery(this);var maxHeight=0;cE.children('*').each(function(index){if(jQuery(this).attr('data-adjusttoheighestchild')!='no'&&jQuery(this).outerHeight(true) > maxHeight){maxHeight=jQuery(this).outerHeight(true);}});if(maxHeight > 0){cE.css('height', String(maxHeight) + 'px');}});jQuery('.wglCheckWidthParent').each(function(index){var cE=jQuery(this);var widthSelf=cE.attr('data-width-init')||cE.outerWidth();var widthParent=cE.parent().width();if(cE.parent().hasClass('isToSmall')&&cE.parent().is(":visible")){cE.parent().removeClass('isToSmall');widthParent=cE.parent().width();}if(!cE.attr('data-width-init')){cE.attr('data-width-init', widthSelf);}if(widthParent >=widthSelf){cE.parent().removeClass('isToSmall');}else{cE.parent().addClass('isToSmall');}});jQuery('.wglCheckBreakChildren').each(function(index){if(typeof(wEditor)!='undefined'){return false;}var cE=jQuery(this);var widthSelf=cE.attr('data-width-init')||cE.outerWidth();var widthParent=cE.parent().width();var offsetTop=0;var offsetTopFirst=0;var breakChildren=false;var targetBreakChildrenClass=cE.data('targetbreakchildrenclass');var targetToSetClass=cE.parent();if(targetBreakChildrenClass&&/closest\(([^\)]+)\)/.test(targetBreakChildrenClass)){targetToSetClass=cE.closest(RegExp.$1);if(targetToSetClass.length==0){targetToSetClass=cE.parent();}}if(targetToSetClass.hasClass('breakChildren')&&cE.parent().is(":visible")){targetToSetClass.removeClass('breakChildren');cE.children('*').each(function(index){offsetTop=jQuery(this).offset().top;if(index==0){offsetTopFirst=offsetTop;}else if(offsetTop > offsetTopFirst + 1){breakChildren=true;return false;}});}else{cE.children('*').each(function(index){offsetTop=jQuery(this).offset().top;if(index==0){offsetTopFirst=offsetTop;}else if(offsetTop > offsetTopFirst + 1){breakChildren=true;return false;}});}if(!cE.attr('data-width-init')){cE.attr('data-width-init', widthSelf);}if(breakChildren){targetToSetClass.addClass('breakChildren');}else{targetToSetClass.removeClass('isToSmall');}});wProcessWglExpandToParent();wProcessWglAdjustHeightMax();});jQuery(window).on('resize scroll', function(event){if(typeof(wUiTmp['lastWindowHeight'])=='undefined'||event.type=='load'||event.type=='resize'){wUiTmp['lastWindowHeight']=jQuery(window).height();wUiTmp['lastDocumentHeight']=jQuery(document).height();}wUiTmp['lastScrollTimes']=new Date().getTime();var winScrollTop=jQuery(window).scrollTop();var canChange=winScrollTop >=0&&(winScrollTop + wUiTmp['lastWindowHeight']-wUiTmp['lastDocumentHeight']) < 0?true:false;if(typeof(wOffsetBottomChangeScrollStatusSet)!='undefined'){if((wUiTmp['lastWindowHeight'] + winScrollTop) > (wUiTmp['lastDocumentHeight']-wOffsetBottomChangeScrollStatusSet)){canChange=false;}}if(typeof(wBlockChangeScrollstatus)!='undefined'&&wBlockChangeScrollstatus){canChange=false;}if(typeof(wUiTmp['lastScrollTop'])=='undefined'){wUiTmp['lastScrollTop']=wOffsetScrolledTopDefault-1;}var changeScrollstatusOnAutoscrolling=false;if(typeof(wChangeScrollstatusOnAutoscrolling)!='undefined'&&wChangeScrollstatusOnAutoscrolling){changeScrollstatusOnAutoscrolling=true;}if((!wUiTmp['scrollingAuto']|| changeScrollstatusOnAutoscrolling)&&canChange){if(winScrollTop <=wOffsetScrolledTopDefault){if(wUiTmp['lastScrollStatus']!='top'){document.documentElement.className=document.documentElement.className.replace(' scrolled-top', '').replace(' scrolldirection-down', '').replace(' scrolldirection-up', '') + ' scrolled-top';}wUiTmp['lastScrollStatus']='top';}else if(winScrollTop < wUiTmp['lastScrollTop']){if(wUiTmp['lastScrollStatus']!='scrollup'){document.documentElement.className=document.documentElement.className.replace(' scrolled-top', '').replace(' scrolldirection-down', '') + ' scrolldirection-up';}wUiTmp['lastScrollStatus']='scrollup';}else if(winScrollTop > wUiTmp['lastScrollTop']){if(wUiTmp['lastScrollStatus']!='scrolldown'){document.documentElement.className=document.documentElement.className.replace(' scrolled-top', '').replace(' scrolldirection-up', '') + ' scrolldirection-down';}wUiTmp['lastScrollStatus']='scrolldown';}}wUiTmp['lastScrollTop']=winScrollTop;wLazyLoading();var winHeight=jQuery(window).height();jQuery("[data-doifbecomevisible]").each(function(index){var cE=jQuery(this);var isVisibleState=cE.data('isvisible');var offsetTop=parseInt(cE.offset().top);if(offsetTop < winScrollTop + winHeight||location.href.indexOf('viewmode=print')!=-1){if(!isVisibleState){cE.data('isvisible', true);eval(cE.data('doifbecomevisible'));}}else if(isVisibleState){cE.data('isvisible', false);}});if(typeof(wEditor)=='undefined'){jQuery('.wglReader[data-init!="1"]').each(function(index){if(window.speechSynthesis){var cE=jQuery(this);var textToRead=cE.get(0).innerText;if(textToRead!=''){var eTa='nextSibling';if(cE.data('readertarget')=='prepend'){eTa='parentNode';}cE.before('<div class="wReaderPanelEmbed"><div class="wButtonStartReading" onclick="wStartReadingText(this.parentNode.' + eTa + ', this.parentNode)"></div><div class="wButtonPauseReading" onclick="wPauseReadingText(this.parentNode.' + eTa + ', this.parentNode)"></div><div class="wButtonStopReading" onclick="wStopReadingText(this.parentNode.' + eTa + ', this.parentNode)"></div></div>');}cE.attr('data-init', '1');}});jQuery('.wglCountUp[data-init!="1"]').each(function(index){var cE=jQuery(this);var nodeName=cE.get(0).nodeName;if(typeof(wEditor)!='undefined'){cE.attr('data-init', '1');return false;}var offsetTop=parseInt(cE.offset().top);if(offsetTop > winScrollTop + winHeight){return false;}cE.attr('data-init', '1');var currentDataOrig=cE.data();var currentData={};for(key in currentDataOrig){currentData[key.toLowerCase()]=currentDataOrig[key];}currentData['countupFrom']=currentData['countupfrom']||0;currentData['countupTo']=currentData['countupto']||cE.html();currentData['countupDecimals']=currentData['countupdecimals']||0;currentData['countupDuration']=currentData['countupduration']||2;currentData['countupInitdelay']=currentData['countupinitdelay']||1000;currentData['countupPrefix']=currentData['countupprefix']||'';currentData['countupSuffix']=currentData['countupsuffix']||'';if(/^([^\d\,\.]*)([\d\,\.]+)([^\d\,\.]*)$/.test(currentData['countupTo'])){currentData['countupPrefix']=RegExp.$1;currentData['countupTo']=RegExp.$2;currentData['countupSuffix']=RegExp.$3;}currentData['countupSeperator']='';if(/^\d+\.\d\d\d/.test(currentData['countupFrom'])|| /^\d+\.\d\d\d/.test(currentData['countupTo'])){currentData['countupSeperator']=true;}if(currentData['countupSeperator']!=''){currentData['countupFrom']=String(currentData['countupFrom']).replace(/^(\d+)\.(\d\d\d)/, '$1$2').replace(/^(\d+)\.(\d\d\d)/, '$1$2').replace(/^(\d+)\.(\d\d\d)/, '$1$2');currentData['countupTo']=String(currentData['countupTo']).replace(/^(\d+)\.(\d\d\d)/, '$1$2').replace(/^(\d+)\.(\d\d\d)/, '$1$2').replace(/^(\d+)\.(\d\d\d)/, '$1$2');}valueToSet=String(currentData['countupFrom']);currentData['countupTo']=currentData['countupTo'].replace(',', '.');if(currentData['countupTo']){if(/^\d+\.(\d+)$/.test(currentData['countupTo'])){currentData['countupDecimals']=RegExp.$1.length;}else if(/^([\d\,\.]+)$/.test(currentData['countupTo'])){}else{return false;}}else{return false;}if(currentData['countupDecimals'] > 0){valueToSet=parseFloat(valueToSet).toFixed(currentData['countupDecimals']).replace('.', ',');}else{valueToSet=String(Math.ceil(valueToSet));if(currentData['countupSeperator']!=''){valueToSet=valueToSet.replace(/(\d)(\d{3})$/, '$1.$2').replace(/(\d)(\d{3})\./, '$1.$2.').replace(/(\d)(\d{3})\./, '$1.$2.');}}if(nodeName=='text'){cE.get(0).textContent=currentData['countupPrefix'] + valueToSet + currentData['countupSuffix'];}else{cE.html(currentData['countupPrefix'] + valueToSet + currentData['countupSuffix']);}var timeoutInit=25;var timeout=timeoutInit;window.setTimeout(function(){var intervalCountup=window.setInterval(function(){if(timeout < 0.5){timeout-=0.02;}else if(timeout < 2){timeout-=0.05;}else if(timeout < 3){timeout-=0.14;}else if(timeout < 4){timeout-=0.4;}else{timeout--;}var valueToSet=(currentData['countupTo']-currentData['countupFrom']) / timeoutInit * (timeoutInit-timeout) + parseFloat(currentData['countupFrom']);if(timeout <=0.1){window.clearInterval(intervalCountup);valueToSet=currentData['countupTo'];}if(currentData['countupDecimals'] > 0){valueToSet=String(parseFloat(valueToSet).toFixed(currentData['countupDecimals']).replace('.', ','));if(currentData['countupSeperator']!=''){if(/(\d+)\,(\d+)/.test(valueToSet)){var valueToSetBefore=RegExp.$1;var valueToSetAfter=RegExp.$2;valueToSetBefore=valueToSetBefore.replace(/(\d)(\d{3})$/, '$1.$2').replace(/(\d)(\d{3})\./, '$1.$2.').replace(/(\d)(\d{3})\./, '$1.$2.');valueToSet=valueToSetBefore + ',' + valueToSetAfter;}}}else{valueToSet=String(Math.ceil(valueToSet));if(currentData['countupSeperator']!=''){valueToSet=valueToSet.replace(/(\d)(\d{3})$/, '$1.$2').replace(/(\d)(\d{3})\./, '$1.$2.').replace(/(\d)(\d{3})\./, '$1.$2.');}}if(nodeName=='text'){cE.get(0).textContent=currentData['countupPrefix'] + valueToSet + currentData['countupSuffix'];}else{cE.html(currentData['countupPrefix'] + valueToSet + currentData['countupSuffix']);}}, parseInt(currentData['countupDuration'] * 500 / timeoutInit));}, currentData['countupInitdelay']);});}jQuery('.wglAnimateIfVisibleOnce').each(function(index){var cE=jQuery(this);if(parseInt(cE.offset().top) < winScrollTop + winHeight||location.href.indexOf('viewmode=print')!=-1){cE.addClass('wglAnimateIfVisibleOnceVisible').removeClass('wglAnimateIfVisibleOnce');}});jQuery('.wglAnimateIfVisible').each(function(index){var cE=jQuery(this);var offsetTop=parseInt(cE.offset().top);var offsetHeight=parseInt(cE.outerHeight());if((offsetTop < winScrollTop + winHeight&&offsetTop + offsetHeight > winScrollTop)||location.href.indexOf('viewmode=print')!=-1){cE.addClass('isVisibleOnce isVisible').removeClass('isInvisible');}else{cE.addClass('isInvisible').removeClass('isVisible');}});wKeepInsideTopOnScroll();var idTopSection='', titleSection='', cE, nearestPositionTop=100000, elementPositionTop=0;var offsetTopFixed=jQuery('.wglContainerInsideTopOnScroll').length > 0?jQuery('.wglContainerInsideTopOnScroll').outerHeight():0;jQuery('.elementSection').each(function(index){cE=jQuery(this);elementPositionTop=parseInt(cE.offset().top)-winScrollTop-offsetTopFixed;if(elementPositionTop < winHeight-128&&(elementPositionTop >=0&&elementPositionTop < nearestPositionTop||elementPositionTop < 0&&elementPositionTop *-1 < nearestPositionTop)){if(cE.height() > 8){nearestPositionTop=(elementPositionTop >=0?elementPositionTop:-elementPositionTop);titleSection=cE.attr('id')?cE.attr('id'):'';}}});if(titleSection!=''&&titleSection!=wUiTmp['lastSectionSelected']){if(typeof(wKeepNavigationSectionsIfNoTitle)!='undefined'&&wKeepNavigationSectionsIfNoTitle){if(jQuery(".elementNavigationSections li > a[href='#" + titleSection + "']").length!=0){jQuery(".elementNavigationSections li").removeClass('selected');jQuery(".elementNavigationSections li > a[href='#" + titleSection + "']").parent().addClass('selected');wUiTmp['lastSectionSelected']=titleSection;}}else{jQuery(".elementNavigationSections li").removeClass('selected');jQuery(".elementNavigationSections li > a[href='#" + titleSection + "']").parent().addClass('selected');wUiTmp['lastSectionSelected']=titleSection;}}wUiTmp['hasToAdaptParallax']=true;if(!wUiTmp['adaptParallax']){window.requestAnimationFrame(wAdaptParallax);wUiTmp['adaptParallax']=true;}});jQuery('body').on("touchmove", function(event){wAdaptParallax(event);});jQuery(window).on("touchend", function(event){wAdaptParallax(event);});jQuery(window).on('mousewheel DOMMouseScroll', function (event){jQuery('body, html').stop(true, true);});wLazyLoading=function(){var winHeight=jQuery(window).height();var winScrollTop=jQuery(window).scrollTop();wUiTmp['widthOfRwids']={};jQuery('video.wglLazyLoadInit').each(function(index){var currentVideo=jQuery(this);var widthCurrent=currentVideo.width();var poster=currentVideo.attr('poster');var srcSet=currentVideo.data('srcset');if(poster&&srcSet){var maxSizePosterAlt=0;var srcAlt='';var postersAlt=srcSet.trim().split(/\s*,\s*/);for(var i=0; i < postersAlt.length; i++){posterAltData=postersAlt[i].split(/ +/);posterAltData[1]=parseInt(posterAltData[1].replace(/^w/, ''));if(posterAltData[1] >=widthCurrent){if(maxSizePosterAlt==0){maxSizePosterAlt=posterAltData[1];srcAlt=posterAltData[0];}else if(posterAltData[1] < maxSizePosterAlt){maxSizePosterAlt=posterAltData[1];srcAlt=posterAltData[0];}}}}currentVideo.attr('poster', srcAlt);currentVideo.removeClass('wglLazyLoadInit');});jQuery('img.wglLazyLoadInit').each(function(index){var currentImg=jQuery(this);var offsetTop=parseInt(currentImg.offset().top);var srcMin=currentImg.data('srcmin')?currentImg.data('srcmin'):'';var widthCurrent=parseInt(currentImg.width());var attrWidthCur=parseInt(typeof(currentImg.attr('width'))!='undefined'?currentImg.attr('width'):0);var widthMin=parseInt(srcMin.replace(/.*@min/, '').replace(/\..*/, ''));var isVisibleComponent=true;if(currentImg.attr('data-maxwidthifinvisible')&&currentImg.attr('data-maxwidthifinvisible') > widthCurrent){widthCurrent=currentImg.attr('data-maxwidthifinvisible');}if(!currentImg.is(':visible')){isVisibleComponent=false;closestElement=currentImg.closest('.elementList');if(closestElement.length > 0&&closestElement.is(':visible')){if(closestElement.find("div[data-lazyloadifvisibleentry='1']").length > 0){}else if(closestElement.offset().top < winScrollTop + winHeight){isVisibleComponent=true;}}}if(isVisibleComponent){if(currentImg.parent().prop('tagName')=='PICTURE'){if(widthCurrent > 0){wUiTmp['widthOfRwids'][currentImg.parent().attr('data-rwid')]=widthCurrent;}else if(wUiTmp['widthOfRwids'][currentImg.parent().attr('data-rwid')]){widthCurrent=wUiTmp['widthOfRwids'][currentImg.parent().attr('data-rwid')];}}}if(isVisibleComponent||wUiTmp['isMediaPrint']||wUiTmp['isViewmodePrint']){if((offsetTop < winScrollTop + winHeight )||wUiTmp['isMediaPrint']||wUiTmp['isViewmodePrint']){if(devicePixelRatio >=hdLimitDpr&&typeof(currentImg.attr('data-src2x'))!='undefined'&&currentImg.attr('data-src2x')!=''&&attrWidthCur < widthCurrent * 2&&currentImg.attr('data-ishd')!='1'){currentImg.attr('src', currentImg.data('src2x')).attr('data-ishd', '1');}else if(typeof(currentImg.attr('data-srcmin'))!='undefined'&&currentImg.attr('data-srcmin')!=''&&widthCurrent < widthMin&&widthMin < attrWidthCur&&currentImg.attr('data-ismin')!='1'&&currentImg.attr('data-ishd')!='1'&&currentImg.attr('data-isld')!='1'){currentImg.attr('src', currentImg.data('srcmin')).attr('data-ismin', '1');}else if(typeof(currentImg.attr('data-src'))!='undefined'&&currentImg.attr('data-src')!=''&&currentImg.attr('data-ishd')!='1'&&currentImg.attr('data-isld')!='1'){if(currentImg.data('src').indexOf('@px')!=-1){try{if(currentImg.get(0).getBoundingClientRect()['width']-widthCurrent==-0.5){currentImg.get(0).style.width='calc(100% + 0.5px)';currentImg.get(0).style.maxWidth='calc(100% + 0.5px)';}}catch(e){console.log(e)}currentImg.attr('src', currentImg.data('src').replace('@px', '@' + (devicePixelRatio >=hdLimitDpr?widthCurrent * 2:widthCurrent) + 'px'));}else if(currentImg.data('src').indexOf('@ll')!=-1){try{if(currentImg.get(0).getBoundingClientRect()['width']-widthCurrent==-0.5){currentImg.get(0).style.width='calc(100% + 0.5px)';currentImg.get(0).style.maxWidth='calc(100% + 0.5px)';}}catch(e){console.log(e)}currentImg.attr('src', currentImg.data('src').replace('@ll', '@' + (devicePixelRatio >=hdLimitDpr?widthCurrent * 2:widthCurrent) + 'll'));}else{currentImg.attr('src', currentImg.data('src'));}currentImg.attr('data-isld', '1');}if(currentImg.parent().prop('tagName')=='PICTURE'){currentImg.parent().children('source').each(function(){if(jQuery(this).attr('data-src')){var currentImgElement=jQuery(this).parent().find('img').get(0);currentImgElement.setAttribute('data-widthbefore', currentImgElement.style.width);if(currentImgElement.offsetWidth > 0){currentImgElement.style.width=String(currentImgElement.offsetWidth) + 'px';}else{currentImgElement.style.width='100%';}jQuery(this).attr('srcset', jQuery(this).data('src')).removeData('src');var xi=0;if(jQuery(this).parent().attr('data-lazywaitcompleted')!='1'){jQuery(this).parent().attr('data-lazywaitcompleted', 1);var intervalLazyWaitCompleted=window.setInterval(function(){if(currentImgElement.complete|| xi > 200){currentImgElement.style.width=currentImgElement.getAttribute('data-widthbefore');currentImgElement.removeAttribute('data-widthbefore');jQuery(this).parent().removeAttr('data-lazywaitcompleted');currentImg.removeClass('wglLazyLoadInit');wProcessWglAdjustHeightMax();if(typeof(wOnAfterLazyLoading)=='function'){wOnAfterLazyLoading(currentImg);}window.clearInterval(intervalLazyWaitCompleted);}xi++;}, 100);}else{currentImgElement.style.width=currentImgElement.getAttribute('data-widthbefore');currentImgElement.removeAttribute('data-widthbefore');}}jQuery(this).attr('media', jQuery(this).attr('media').replace(/(\:\s*)999?9?\./, '$1'));});}if(jQuery(this).parent().attr('data-lazywaitcompleted')!='1'){currentImg.removeClass('wglLazyLoadInit');wProcessWglAdjustHeightMax();if(typeof(wOnAfterLazyLoading)=='function'){wOnAfterLazyLoading(currentImg);}}}}});};wKeepInsideTopOnScroll=function(){var winScrollTop=jQuery(window).scrollTop();jQuery('.wglKeepInsideTopOnScroll').each(function(index){var cE=jQuery(this);var elementMoved=null;var offsetTop=parseInt(cE.offset().top);var scrollTopDiff=wGetScrollTopDiff({'considerWglContainerInsideTopOnScroll':false});var diffTop=offsetTop-winScrollTop-scrollTopDiff;var moveID='';var container=cE.data('container');window.clearInterval(wUiTmp['scrollStack']);if(container=='parent'){if(diffTop < 0){var hasInit=false;if(cE.attr('data-hasmoved')!='1'){cE.css({'transition':'none'});cE.css({'transform':'translateY(0)'});cE.attr('data-offsettopinit', offsetTop);cE.attr('data-scrolltopinit', winScrollTop);cE.attr('data-movemax', cE.parent().height()-cE.outerHeight());cE.attr('data-hasmoved', '1');hasInit=true;}offsetTop=cE.attr('data-offsettopinit');diffTop=offsetTop-winScrollTop-scrollTopDiff;diffTop=-diffTop > cE.attr('data-movemax')?-cE.attr('data-movemax'):diffTop;if(hasInit){cE.attr('data-movetopinit',-diffTop);}cE.css({'transform':'translateY(' + String(-diffTop) + 'px)'});if(hasInit){cE.css({'transition':''});}}else if(cE.attr('data-hasmoved')=='1'){if(winScrollTop < cE.attr('data-scrolltopinit')-cE.attr('data-movetopinit')){cE.attr('data-offsettopinit', '');cE.attr('data-hasmoved', '');cE.css({'transform':'translateY(0)'});}else {offsetTop=cE.data('offsettopinit');diffTop=offsetTop-winScrollTop-scrollTopDiff;diffTop=-diffTop > cE.attr('data-movemax')?-cE.attr('data-movemax'):diffTop;cE.css({'transform':'translateY(' + String(-diffTop) + 'px)'});}}}else{if(diffTop < 0){if(cE.attr('data-hasmoved')!='1'){if(!jQuery('.wglContainerInsideTopOnScroll').length){jQuery('body').prepend('<div class="wglContainerInsideTopOnScroll"></div>');}cE.attr('data-hasmoved', '1');moveID=String(parseInt(Math.random() * 1000000));if(typeof(cE.attr('data-moveidsource'))=='undefined'){cE.attr('data-moveidsource', moveID);}else{moveID=cE.attr('data-moveidsource');}cE.before('<div id="moveidsource-' + moveID + '" class="wglKeepInsideTopOnScroll" data-hasmoved="1" data-moveidsource="' + moveID + '"></div>');cE.removeAttr('data-moveidsource').attr('data-moveidtarget', moveID).attr('data-moveidtarget', moveID).appendTo('.wglContainerInsideTopOnScroll').addClass('moved-init').removeClass('wglKeepInsideTopOnScroll').removeClass('restored-init').removeClass('restored-ready');window.setTimeout(function(){cE.removeClass('moved-init').addClass('moved-ready');}, 10);height=cE.height();jQuery('#' + 'moveidsource-' + moveID).css('height', String(height) + 'px');}else{height=jQuery(".wglContainerInsideTopOnScroll *[data-moveidtarget='" + cE.attr('data-moveidsource') + "']").height();cE.css('height', String(height) + 'px');}jQuery('.wglContainerInsideTopOnScroll').css({'top':String(scrollTopDiff) + 'px'});}else if(cE.attr('data-hasmoved')=='1'){moveID=cE.attr('data-moveidsource');elementMoved=jQuery(".wglContainerInsideTopOnScroll *[data-moveidtarget='" + moveID + "']");cE.before(elementMoved.addClass('wglKeepInsideTopOnScroll').removeClass('moved-init').removeClass('moved-ready').addClass('restored-init').removeAttr('data-hasmoved'));window.setTimeout(function(){if(cE.html()==''){cE.remove();}elementMoved.removeClass('restored-init').addClass('restored-ready');}, 10);}}var currentTime=new Date().getTime();if(currentTime-(wUiTmp['lastScrollTimes']) > 1000){window.clearInterval(wUiTmp['scrollStack']);}else{wUiTmp['scrollStack']=window.setTimeout(function(){wKeepInsideTopOnScroll();}, 10);}});};wglValidateElementInline=function(currentInputElement, options){var currentInput=jQuery(currentInputElement);var formPos=currentInput.closest('form').attr('data-formpos');var formAction=currentInput.closest('form').attr('action');var elementName=currentInput.attr('name');elementName=elementName.replace('[]', '');var elementValue=currentInput.val();if(currentInput.attr('type')=='checkbox'){elementValue='';currentInput.parent().parent().find('input').each(function(){elementValue +=(jQuery(this).get(0).checked?jQuery(this).val():'');});}else if(currentInput.attr('type')=='radio'){elementValue='';currentInput.parent().parent().find('input').each(function(){elementValue +=(jQuery(this).get(0).checked?jQuery(this).val():'');});}else if(currentInput.prop("tagName")=='SELECT'&&currentInput.attr('multiple')=='multiple'){elementValue='';currentInput.children().each(function(){elementValue +=(jQuery(this).get(0).selected?jQuery(this).val():'');});}if(elementValue==null){elementValue='';}var urlValidation=formAction + '?action=ve&en=' + elementName + '&ev=' + encodeURIComponent(elementValue);jQuery.ajax({type:"GET", async:true, dataType:"json", url:urlValidation,success:function(result){elementsWithValidationClass=currentInput;var validationID=formPos + (elementsWithValidationClass.attr('id')?elementsWithValidationClass.attr('id'):'');if(currentInput.attr('type')=='checkbox'||currentInput.attr('type')=='radio'){validationID=formPos + (elementsWithValidationClass.attr('name').replace('[]', '')?elementsWithValidationClass.attr('name').replace('[]', ''):'');elementsWithValidationClass=elementsWithValidationClass.parent().parent().children();}var elementToAddError=elementsWithValidationClass.parent();if(elementsWithValidationClass.parent().prev('dt').length!=0){elementToAddError=elementsWithValidationClass.parent().prev('dt');}else if(elementsWithValidationClass.parent().prev('div').length!=0){elementToAddError=elementsWithValidationClass.parent().prev('div');}var elementToAddOK=elementsWithValidationClass.parent();if(elementsWithValidationClass.attr('name')&&elementsWithValidationClass.closest('form').find('label[for="' + elementsWithValidationClass.attr('name').replace('[]', '') + '"]')){elementToAddOK=elementsWithValidationClass.closest('form').find('label[for="' + elementsWithValidationClass.attr('name').replace('[]', '') + '"]');}else if(elementsWithValidationClass.parent().prev('dt').length!=0&&elementsWithValidationClass.parent().prev('dt').find('label')){elementToAddOK=elementsWithValidationClass.parent().prev('dt').find('label');}else if(elementsWithValidationClass.parent().prev('div').length!=0&&elementsWithValidationClass.parent().prev('div').find('label')){elementToAddOK=elementsWithValidationClass.parent().prev('div').find('label');}if(result['isValid']==false){elementsWithValidationClass.addClass('wglIsInvalid');elementsWithValidationClass.removeClass('wglIsValid');jQuery('#validationStatus_' + validationID).remove();if(result['errorMessage']!=''){if(jQuery('#errorMessage_' + validationID).length==0){elementToAddError.addClass('wglContainsErrorMessageInline').append('<div class="wglErrorMessageInline" id="errorMessage_' + validationID + '"><div>' + result['errorMessage'] + '</div></div>');if(elementToAddError.addClass('wglContainsErrorMessageInline').find('label').length==2){if(currentInput.attr('id')==elementToAddError.addClass('wglContainsErrorMessageInline').find('label').attr('for')){jQuery('#errorMessage_' + validationID).css({'right':String(Math.round(elementToAddError.addClass('wglContainsErrorMessageInline').width()-elementToAddError.addClass('wglContainsErrorMessageInline').find('label').width())) + 'px'});}}(function(validationID){window.setTimeout(function(){jQuery('#errorMessage_' + validationID).addClass("loaded");}, 32);})(validationID);}}}else if(result['isValid']==true){elementsWithValidationClass.removeClass('wglIsInvalid');elementsWithValidationClass.addClass('wglIsValid');jQuery('#errorMessage_' + validationID).remove();if(elementToAddError.find('.wglErrorMessageInline').length==0){elementToAddError.removeClass('wglContainsErrorMessageInline');elementToAddError.find('.wglErrorMessageInline').remove();}if(jQuery('#validationStatus_' + validationID).length==0){elementToAddOK.addClass('wglContainsValidationStatusInline').append('<div class="wglValidationStatusOK" id="validationStatus_' + validationID + '"><div></div></div>');(function(validationID){window.setTimeout(function(){jQuery('#validationStatus_' + validationID).addClass("loaded");}, 32);})(validationID);}}}});};wPrepareHTML=function(root){var i, j, k;if(!root){root=jQuery('body');}jQuery("a[data-ajaxurl]").each(function(){var cE=jQuery(this);var ajaxURL=cE.data('ajaxurl');var ajaxAddMode=cE.data('ajaxaddmode');var ajaxTarget=cE.data('ajaxtarget');var ajaxCallback=cE.data('ajaxcallback');cE.on('click', function (event){jQuery.ajax({type:"GET", url:ajaxURL, async:false, success:function(result){var elementTarget=cE.parent().parent();if(ajaxTarget&&/^\.\.\/\.\.\/$/.test(ajaxTarget)){elementTarget=cE.parent().parent();}if(ajaxTarget&&/^\.\.\/$/.test(ajaxTarget)){elementTarget=cE.parent().find(RegExp.$1);}if(ajaxTarget&&/^\.\.\/(\w+)/.test(ajaxTarget)){elementTarget=cE.parent().find(RegExp.$1);}if(ajaxTarget&&/^\.\.\/\.\.\/(\w+)/.test(ajaxTarget)){elementTarget=cE.parent().parent().find(RegExp.$1);}if(typeof(window[ajaxCallback])=='function'){window[ajaxCallback](elementTarget, result);return;}elementTarget.fadeTo(0, 0);if(ajaxAddMode=='append'){elementTarget.html(elementTarget.html() + result);}else{elementTarget.html(result);}history.pushState({page:cE.attr('href')}, '', cE.attr('href'));wPrepareHTML(elementTarget.get(0));elementTarget.fadeTo(600, 1);wScrollSmoothToElement(elementTarget.get(0), {'targetPos':'top'});for(var addClassSelector in wCssClassesToAddGlobal){jQuery(addClassSelector).each(function(index){var classesToAdd=wCssClassesToAddGlobal[addClassSelector];for(var i=0, arrayLength=classesToAdd.length; i < arrayLength; i++){var classData=classesToAdd[i].split('=');if(classData.length==2){var selector=jQuery.trim(classData[0]);if(selector=='.'){jQuery(this).addClass(jQuery.trim(classData[1]));}else if(selector=='parent'){jQuery(this).parent().addClass(jQuery.trim(classData[1]));}else{jQuery(this).find(selector).addClass(jQuery.trim(classData[1]));}}else{jQuery(this).addClass(jQuery.trim(classData[0]));}}});}if(typeof(wOnAfterReloadElementByAjaxUrl)=='function'){wOnAfterReloadElementByAjaxUrl(elementTarget);}window.setTimeout(function(){jQuery(window).trigger('resize');}, 100);window.setTimeout(function(){jQuery(window).trigger('resize');}, 500);window.setTimeout(function(){jQuery(window).trigger('resize');}, 1000);}});return false;});});jQuery('.elementForm .formElementInput input, .elementForm .formElementInput select, .elementForm .formElementInput textarea').each(function(){if(jQuery(this).prop('tagName')=='SELECT'&&!jQuery(this).attr('multiple')&&jQuery(this).val()==''||jQuery(this).prop('tagName')!='SELECT'&&jQuery(this).val()==''&&jQuery(this).text()==''){jQuery(this).closest('.formElementInput').addClass('empty');}else{jQuery(this).closest('.formElementInput').removeClass('empty');}});jQuery('.elementForm .formElementInput input, .elementForm .formElementInput select, .elementForm .formElementInput textarea').on('change', function(){if(jQuery(this).prop('tagName')=='SELECT'&&!jQuery(this).attr('multiple')&&jQuery(this).val()==''||jQuery(this).prop('tagName')!='SELECT'&&jQuery(this).val()==''&&jQuery(this).text()==''){jQuery(this).closest('.formElementInput').addClass('empty');}else{jQuery(this).closest('.formElementInput').removeClass('empty');}});jQuery('.elementForm .formElementInput input, .elementForm .formElementInput textarea').on('focus', function(){jQuery(this).closest('.formElementInput').addClass('focus');});jQuery('.elementForm .formElementInput input, .elementForm .formElementInput textarea').on('blur', function(){jQuery(this).closest('.formElementInput').removeClass('focus');});};jQuery.extend(jQuery.easing, {wEaseOut:function(x, t, b, c, d){return b-c * (t /=d) * (t-2);},wEaseOutExpo:function(x, t, b, c, d){return (t==d)?b + c:b + c * (-Math.pow(2,-10 * t / d) + 1);},wEaseIn:function(x, t, b, c, d){return b + c * (t /=d) * t;}});jQuery.fn.wAddAnalytics=function(viewmode){jQuery.each($(this), function(){jQuery(this).click(function(){ga('send', {'hitType':'pageview', 'page':jQuery(this).attr('href'), 'title':jQuery(this).attr('title')})});});};jQuery.fn.wSetViewmode=function(viewmode){jQuery.each(jQuery(this), function(){var hrefNew=this.getAttribute('href')||'';var anchor='';if(/#[^#]+$/.test(hrefNew)){anchor=hrefNew.replace(/.*#/, '');hrefNew=hrefNew.replace(/#.*/, '');}hrefNew=hrefNew.indexOf('?')!=-1?hrefNew + '&viewmode=' + viewmode:hrefNew + '?viewmode=' + viewmode;if(anchor!=''){hrefNew +='#' + anchor;}if(this.className.indexOf('boxOnly')==-1&&this.innerHTML.indexOf('<img ')!=-1){this.style.background='none';this.style.paddingLeft='none';}this.setAttribute('href', hrefNew);});};wOpenPrintPreview=function(width, height, name){var name=name||'printpreview';var url=location.href.indexOf('?')==-1?location.href.replace(/#.*/, '') + '?viewmode=print':location.href.replace(/#.*/, '') + '&viewmode=print';options=',location=no,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=no';wOpenPopupURL(url, width, height, name, options);};wOpenURL=function(url, target, element){target=typeof(target)!='undefined'&&target?target:'';if(location.pathname.indexOf('/weblication/grid5/')!=0){if(/Android/i.test(navigator.userAgent)){var cE=jQuery(element);var hrefCurrent=cE.attr('href')?cE.attr('href'):url;if(/\.pdf$/.test(url)&&!/accessDocument\.php/.test(url)&&!/^https?\:\/\//.test(url)){url=wUiTmp['wGlobalProjectPath'] + '/wGlobal/scripts/accessDocument.php?forceDownload=' + (cE.hasClass('download')?'1':'0') + '&document=' + encodeURIComponent(hrefCurrent);}}if(target=='_blank'){var windowOpen=window.open(url);if(!/^\/\w+/.test(url)){windowOpen.opener=null;windowOpen.location=url;}}else if(target=='_top'){top.location.href=url;}else if(target.indexOf('embedListNextRow')!==-1){var options={};if(element.nodeName=='LI'){options['embedRoot']=element.getAttribute('data-embedroot')?element.getAttribute('data-embedroot'):(element.parentNode.getAttribute('data-embedroot')?element.parentNode.getAttribute('data-embedroot'):'');options['embedClass']=element.getAttribute('data-embedclass')?element.getAttribute('data-embedclass'):(element.parentNode.getAttribute('data-embedclass')?element.parentNode.getAttribute('data-embedclass'):'');if(element.parentNode.getAttribute('data-scrolltopoffsetifnotvisibleembed')=='listEntryHeight'){options['scrollTopOffset']=element.offsetHeight;}}wEmbedPage(url, 'listNextRow', element, options);}else if(target.indexOf('embedBody')!==-1){var options={};options['embedRoot']=element.getAttribute('data-embedroot')?element.getAttribute('data-embedroot'):(element.parentNode.getAttribute('data-embedroot')?element.parentNode.getAttribute('data-embedroot'):'');options['embedClass']=element.getAttribute('data-embedclass')?element.getAttribute('data-embedclass'):(element.parentNode.getAttribute('data-embedclass')?element.parentNode.getAttribute('data-embedclass'):'');wEmbedPage(url, 'body', element, options);}else if(target.indexOf('box')!==-1){wLightbox({"variant":target, "href":url});}else{if(url.indexOf('#')==0){wScrollSmoothToElement(url);}else {location.href=url;}}}};wSetParameterAndReload=function(name, value){var url=location.href;var paramReg=new RegExp('([\?|\&])' + name + '=([^\&]+)');if(paramReg.test(location.search)){url=url.replace(paramReg, RegExp.$1 + name + '=' + value);}else if(url.indexOf('?')!=-1){url +='&' + name + '=' + value;}else{url +='?' + name + '=' + value;}location.href=url;};wEmbedPage=function(url, target, element, options){options=options||{};options['type']=options['type']||'ajax';options['embedRoot']=options['embedRoot']||'';options['scrollTopOffset']=options['scrollTopOffset']||0;var id='wEmbededPage-' + String(parseInt(Math.random() * 100000));var elementToAppend=element;var rootSameEmbed=jQuery('body');if(target=='listNextRow'){if(url==wUiTmp['wEmbePageCurrentURL']){wUiTmp['wEmbePageCurrentURL']='';wEmbedPageClose();return false;}wUiTmp['wEmbePageCurrentURL']=url;rootSameEmbed=jQuery(element).closest('ul').length==1?jQuery(element).closest('ul'):rootSameEmbed;elementToAppend=jQuery(element).parent().children().last().get(0);var offsetTopCurrent=element.offsetTop;jQuery(element).nextAll().each(function(){if(jQuery(this).get(0).offsetTop > offsetTopCurrent){elementToAppend=jQuery(this).prev().get(0);return false;}});if(elementToAppend!=wUiTmp['wEmbePagecEToAppend']){rootSameEmbed.find('.wEmbededPage-' + target).remove();}if(rootSameEmbed.find('.wEmbededPage-' + target).length==0){jQuery('<li id="' + id + '" class="wEmbededPage wEmbededPage-' + target + ' wEmbededPage-' + options['type'] + '" data-embedpagetarget="' + target + '" data-src="' + url + '"><div class="wEmbededPageInner"></div><div class="wEmbededPageCloser" onclick="wEmbedPageClose(event)"></div></li>').insertAfter(elementToAppend);}else{rootSameEmbed.find('.wEmbededPage-' + target).attr('id', id);}}else{if(url==wUiTmp['wEmbePageCurrentURL']){wUiTmp['wEmbePageCurrentURL']='';wEmbedPageClose();return false;}wUiTmp['wEmbePageCurrentURL']=url;elementToAppend=rootSameEmbed;var offsetTopCurrent=element.offsetTop;if(rootSameEmbed.find('.wEmbededPage-' + target).length==0){var embedClass=options['embedClass']&&options['embedClass']!=''?' wEmbededPage-' + options['embedClass']:'';jQuery('<div id="' + id + '" class="wEmbededPage wEmbededPage-' + target + ' wEmbededPage-' + options['type'] + embedClass + '" data-embedpagetarget="' + target + '" data-src="' + url + '"><div class="wEmbededPageInner"></div><div class="wEmbededPageCloser" onclick="wEmbedPageClose(event)"></div></div>').appendTo(elementToAppend);}else{rootSameEmbed.find('.wEmbededPage-' + target).attr('id', id);}}rootSameEmbed.find('.wEmbededPage-' + target).addClass('loading');wUiTmp['wEmbePagecEToAppend']=elementToAppend;jQuery(element).siblings().removeClass('listEntrySelected');jQuery(element).addClass('listEntrySelected');jQuery('html').addClass('embedpage-loading');jQuery('html').addClass('embedpage-open');jQuery('html').addClass('embedpage-' + target + '-open');jQuery.ajax({type:"GET", url:url, success:function(result){htmlToEmbed=result.replace(/^[\s\S]*<body[^>]*>/, '').replace(/<\/body[^>]*>[\s\S]*$/, '');var htmlToEmbedElement=document.createElement('div');htmlToEmbedElement.innerHTML=htmlToEmbed;if(typeof(wKeepIDsInEmbededPage)=='undefined'||!wKeepIDsInEmbededPage){htmlToEmbed=htmlToEmbed.replace(/ id="([^"]*)"/g, ' id="embed_$1"');htmlToEmbed=htmlToEmbed.replace(/ id="embed_(tab|accordion|container|pictureGallery|bannerSlider|listEntries)/g, ' id="$1');}var scriptsToEmbed=[];if(/<script[^>]*src="([^"]+\/pictureGallery.js)/.test(htmlToEmbed)){scriptsToEmbed.push(RegExp.$1);}if(/<script[^>]*src="([^"]+\/bannerSlider.js)/.test(htmlToEmbed)){scriptsToEmbed.push(RegExp.$1);}htmlToEmbed=htmlToEmbed.replace(/<script[^>]+src="[^>]+>([\s\n\r\t]*<\/script>)?/g, '');htmlToEmbed=htmlToEmbed.replace('<div id="cookieNotice"', '<div style="display:none"');for(var i=0; i < scriptsToEmbed.length; i++){var scriptElement=document.createElement('script');scriptElement.setAttribute('type', 'text/javascript');scriptElement.setAttribute('src', scriptsToEmbed[i]);if(typeof(callbackOnLoad)=='function'){scriptElement.wAddEvent('load', callbackOnLoad);}document.body.appendChild(scriptElement);}if(options['embedRoot']&&options['embedRoot']!=''){if(typeof(wKeepIDsInEmbededPage)=='undefined'||!wKeepIDsInEmbededPage){options['embedRoot']=options['embedRoot'].replace('#', '#embed_');}var tmpFragment=document.createElement('DIV');tmpFragment.innerHTML=htmlToEmbed;var resultNode=tmpFragment.querySelector(options['embedRoot']);if(resultNode){htmlToEmbed=resultNode.innerHTML;}}var tmp='';var jsStr='';var strArray=htmlToEmbed.split(/<script[^>]*>/);tmp +=strArray[0];for(var i=1; i < strArray.length; i++){strArray[i]=strArray[i].replace(/^([\s\S]*)<\/script[^>]*>/m, '');jsStr +=RegExp.$1.replace(/;?[\n\r\t\s]*$/, ';').replace(/;+$/, ';');tmp +=strArray[i];}htmlToEmbed=tmp;jQuery('#' + id).find('.wEmbededPageInner').html(htmlToEmbed);jQuery('#' + id).find('.wEmbededPageInner .wglBannerSlider').wBannerSlider();jQuery('#' + id).find('.wEmbededPageInner .wglPictureGallery').wPictureGallery();if(typeof(wExecuteJsInEmbededPage)!='undefined'&&wExecuteJsInEmbededPage){try{eval(jsStr);}catch(e){console.log(e)}}jQuery('#' + id).on('scroll', function(){jQuery(window).trigger('scroll');});jQuery('#' + id).find('.wEmbededPageInner .wglTabcontainer').wTabcontainer();jQuery('#' + id).find('.wEmbededPageInner .wglAccordion').wAccordion();window.setTimeout(function(){wLazyLoading();window.setTimeout(function(){wLazyLoading();}, 720);}, 160);jQuery('html').removeClass('embedpage-loading');rootSameEmbed.find('.wEmbededPage-' + target).removeClass('loading');if(target=='listNextRow'){wScrollSmoothToElement(jQuery('#' + id).find('.wEmbededPageInner').get(0), {'targetPos':'top', 'scrollTopOffset':options['scrollTopOffset']});}if(typeof(wSimulateBreakpointsInEmbededPage)!='undefined'&&wSimulateBreakpointsInEmbededPage){window.setTimeout(function(){if(typeof(wSimulateBreakpointsIfNeccessary)!='undefined'){wSimulateBreakpointsIfNeccessary({root:jQuery('#' + id).find('.wEmbededPageInner').get(0), urlToSimulate:url});}}, 1000);}}});};wEmbedPageClose=function(event){var rootSameEmbed=jQuery('body');if(typeof(event)!='undefined'&&jQuery(event.target).closest('li[data-embedpagetarget="listNextRow"]').length==1){rootSameEmbed=jQuery(event.target).closest('ul')
}document.documentElement.className=document.documentElement.className.replace(/embedpage-\w+-open/, '');jQuery('html').removeClass('embedpage-open');rootSameEmbed.find('.wEmbededPage').siblings().removeClass('listEntrySelected');rootSameEmbed.find('.wEmbededPage').remove();};wOpenPopupURL=function(url, width, height, name, options){var name=name||'';if(width==''||width==' '||typeof(width)=='undefined'){width=786;}if(height==''||height==' '||typeof(height)=='undefined'){height=677;}url=url.replace(/&/g, '&');options=options||',location=no,menubar=no,toolbar=no,resizable=yes,scrollbars=yes,status=no';var width=parseInt(width);var height=parseInt(height);var posLeft=(screen.width / 2)-(width  / 2);var posTop=(screen.height / 2)-(height / 2);var windowOpen=window.open(url, name, 'top='+posTop+',left='+posLeft+',width='+width+',height='+height+',' + options);if(!/^\/\w+/.test(url)){windowOpen.opener=null;windowOpen.location=url;}};wDisableAnalytics=function(){document.cookie='disableGoogleAnalytics=1; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';if(window['gaId']){window['ga-disable-' + window['gaId']]=true;}else if(typeof(gaOptout)!='undefined'){gaOptout();}};wSendMailNospam=function(data){top.location.href='mailto:' + data.replace('|', '@');};wAdaptConditionalFormData=function(){jQuery("*[data-conditionalformdata]").each(function(){var cE=jQuery(this);var conditionalformdata=cE.data('conditionalformdata');var type='showIf';var dyndisplayOperator='and';if(/type:(showIf|hideIf)/.test(conditionalformdata)){type=RegExp.$1;}if(/operator:(and|or)/.test(conditionalformdata)){dyndisplayOperator=RegExp.$1;}if(/conditions:(.*)/.test(conditionalformdata)){conditionalformdata=RegExp.$1;}var conditionalFormDatas=conditionalformdata.split(',');var isActive=dyndisplayOperator=='or'?false:true;var isActiveCurrent=false;for(var i=0; i < conditionalFormDatas.length; i++){conditionalFormDatas[i]=conditionalFormDatas[i].replace("\\'", 'WBSAP');/^([\w\-]+)(\=\=|\!\=|<\=|<|>|>\=)\'([^\']*)\'/.test(conditionalFormDatas[i]);var elementToObserveName=RegExp.$1;var operator=RegExp.$2;var condition=RegExp.$3.replace('WBSAP', "'");var elementToObserve=cE.closest('form').find("*[name='" + elementToObserveName + "'], *[name='" + elementToObserveName + "[]']");var elementToObserveValue=elementToObserve;var value=elementToObserveValue.val();if(elementToObserve.attr('type')=='radio'){elementToObserveValue=cE.closest('form').find("input[name='" + elementToObserveName + "']:checked, input[name='" + elementToObserveName + "[]:checked']");value=elementToObserveValue.val();}else if(elementToObserve.attr('type')=='checkbox'){value=new Array();elementToObserve.each(function(){if(jQuery(this).is(':checked')){value.push(jQuery(this).val());}});}if(!elementToObserve.data('hasaddedobserver')){elementToObserve.data('hasaddedobserver', true);elementToObserve.on('change keyup', function(){wAdaptConditionalFormData();});}isActiveCurrent=false;if(operator=='<'||operator=='<='||operator=='>='||operator=='>'){value=isNaN(parseFloat(value))?0:parseFloat(value);}if(Array.isArray(value)&&condition==''){if(operator=='!='&&value.length!=0|| operator=='=='&&value.length==0){if(dyndisplayOperator=='or'){isActive=true;break;}}else{if(dyndisplayOperator=='and'){isActive=false;break;}}}else if(Array.isArray(value)&&condition.indexOf('|')==-1){if(operator=='!='&&value.indexOf(condition)==-1|| operator=='=='&&value.indexOf(condition)!=-1){if(dyndisplayOperator=='or'){isActive=true;break;}}else{if(dyndisplayOperator=='and'){isActive=false;break;}}}else if(Array.isArray(value)){var conditions=condition.split('|');isActiveCurrent=false;for(var j=0; j < conditions.length; j++){if(operator=='!='&&value.indexOf(conditions[j])==-1|| operator=='=='&&value.indexOf(conditions[j])!=-1){isActiveCurrent=true;break;}}if(isActiveCurrent){if(dyndisplayOperator=='or'){isActive=true;break;}}else{if(dyndisplayOperator=='and'){isActive=false;break;}}}else if(operator=='!='&&value!=condition|| operator=='=='&&value==condition|| operator=='<'&&value < condition|| operator=='<='&&value <=condition|| operator=='>='&&value >=condition|| operator=='>'&&value > condition){if(dyndisplayOperator=='or'){isActive=true;break;}}else{if(dyndisplayOperator=='and'){isActive=false;break;}}}if(type=='showIf'&&!isActive|| type=='hideIf'&&isActive){cE.addClass('wglConditionalFormdata');cE.addClass('wglHideConditionalFormdata');cE.removeClass('wglShowConditionalFormdata');cE.find('input, textarea, select').each(function(index){if(jQuery(this).attr('tabindex')&&jQuery(this).attr('tabindex')!=-1){jQuery(this).attr('data-tabindex', jQuery(this).attr('tabindex'));}if(typeof(wResetConditionalFormdataOnHide)!='undefined'&&wResetConditionalFormdataOnHide){if(typeof(jQuery(this).data('valueinit'))=='undefined'){if(jQuery(this).attr('type')=='checkbox'|| jQuery(this).attr('type')=='radio'){jQuery(this).data('valueinit', jQuery(this).prop('checked')?'checked':'unchecked');}else{jQuery(this).data('valueinit', jQuery(this).val());}if(jQuery(this).attr('type')=='hidden'){jQuery(this).val('');}}else{if(jQuery(this).attr('type')=='checkbox'|| jQuery(this).attr('type')=='radio'){jQuery(this).prop('checked', jQuery(this).data('valueinit')=='checked'?true:false);}else{jQuery(this).val(jQuery(this).data('valueinit'));}}}if(jQuery(this).attr('type')=='hidden'){jQuery(this).val('');}jQuery(this).attr('tabindex',-1);});}else{cE.addClass('wglConditionalFormdata');cE.removeClass('wglHideConditionalFormdata');cE.addClass('wglShowConditionalFormdata');cE.find('input').each(function(index){if(jQuery(this).attr('data-tabindex')){jQuery(this).attr('tabindex', jQuery(this).attr('data-tabindex'));}else{jQuery(this).removeAttr('tabindex');}if(jQuery(this).attr('type')=='hidden'&&typeof(jQuery(this).data('valueinit'))!='undefined'){jQuery(this).val(jQuery(this).data('valueinit'));}});}});};wAdaptParallax=function(event){var winScrollTop=jQuery(window).scrollTop();var winHeight=jQuery(window).height();wUiTmp['lastEventType']=event?event.type:'';if(winScrollTop==window['lastScrollTop']){return;}wUiTmp['elements-wglParallaxBackground']=wUiTmp['elements-wglParallaxBackground']?wUiTmp['elements-wglParallaxBackground']:jQuery('.wglParallaxBackground');wUiTmp['elements-wglParallaxContent']=wUiTmp['elements-wglParallaxContent']?wUiTmp['elements-wglParallaxContent']:jQuery('.wglParallaxContent');if(typeof(wEditor)=='undefined'){wUiTmp['elements-wglParallaxBackground'].each(function(index){var cE=jQuery(this);if(wUiTmp['lastEventType']!='resize'&&cE.data('disableParallax')=='1'){wUiTmp['adaptParallax']=false;return false;}var offsetTop=parseInt(cE.offset().top);var offsetTopInit=0;var offsetHeight=parseInt(cE.outerHeight());var offsetWidth=parseInt(cE.outerWidth());var posInsideTop=winScrollTop + winHeight-offsetTop;var posInsideBottom=offsetTop + offsetHeight-winScrollTop;var posTopInside=winScrollTop-offsetTop;var useEdgeOnInit=cE.data('useedgeoninit')=='1'?true:false;var moveMax=offsetHeight + winHeight;var backgroundHeight=offsetHeight;if(posInsideTop > 0&&posInsideBottom > 0){var posTopPercentage=posInsideTop / moveMax;var posTopPercentageBottom=posTopInside / (winHeight-offsetHeight);var backgroundPositionTop=0;var direction=(cE.data('parallaxbackgrounddirection')?cE.data('parallaxbackgrounddirection').toLowerCase():'bottom');var factor=(cE.data('parallaxbackgroundfactor')?cE.data('parallaxbackgroundfactor'):0.25);var offset=(cE.data('parallaxbackgroundoffset')?parseFloat(cE.data('parallaxbackgroundoffset')):0);var parallaxSizeMode=(cE.data('parallaxbackgroundsizemode')?cE.data('parallaxbackgroundsizemode'):'');var parallaxElement=(cE.data('parallaxbackgroundelement')?document.getElementById(cE.data('parallaxbackgroundelement')):null);if((direction.indexOf('top')!=-1||direction.indexOf('bottom')!=-1)&&(!cE.data('backgroundHeight')||wUiTmp['hasToAdaptParallax'])){var hasBackgroundContainer=true;var elementBackgroundImageContainer=cE.find('.backgroundContainer > *');if(elementBackgroundImageContainer.length >=1){backgroundHeight=(1 + factor) * elementBackgroundImageContainer.parent().height();if(elementBackgroundImageContainer.parent().is(":visible")){if(parallaxSizeMode!='original'){elementBackgroundImageContainer.first().css({'height':String(backgroundHeight) + 'px'});}cE.data('backgroundHeight', backgroundHeight);}}}backgroundHeight=cE.data('backgroundHeight')?cE.data('backgroundHeight'):backgroundHeight;if(direction.indexOf('top')!=-1){posBase=(backgroundHeight-offsetHeight) * (0.5);posBaseOffset=(backgroundHeight-offsetHeight) * (0.5 + offset);posDiff=(backgroundHeight-offsetHeight) * posTopPercentage-posBase;posDiff=posDiff * (offset==0?1:(0.5-offset) * 2);pos=posBaseOffset + posDiff;backgroundPositionTop='-' + String(Math.round(pos));}else if(direction.indexOf('bottom')!=-1||direction==''){posBase=(backgroundHeight-offsetHeight) * (0.5-1);posBaseOffset=(backgroundHeight-offsetHeight) * (0.5-1 + offset);posDiff=(backgroundHeight-offsetHeight) * (posTopPercentage-1)-posBase;posDiff=posDiff * (offset==0?1:(0.5-offset) * 2);pos=posBaseOffset + posDiff;backgroundPositionTop='' + String(Math.round(pos));}parallaxElement=cE.find('.backgroundContainer > div');if(parallaxElement.length >=1){parallaxElement.first().css({'transform':'translate3d(0, ' + String(backgroundPositionTop) + 'px, 0)'});}}});wUiTmp['elements-wglParallaxContent'].each(function(index){var cE=jQuery(this);if(wUiTmp['lastEventType']!='resize'&&cE.data('disableParallax')=='1'){wUiTmp['adaptParallax']=false;return false;}var minWidth=(cE.data('parallaxcontentminwidth')&&!isNaN(cE.data('parallaxcontentminwidth'))?parseInt(cE.data('parallaxcontentminwidth')):0);var winWidth=window.innerWidth?window.innerWidth:document.body.clientWidth;if(winWidth < minWidth){return false;}var offsetTop=parseInt(cE.parent().offset().top);var offsetTopInit=0;var offsetHeight=parseInt(cE.outerHeight());var offsetWidth=parseInt(cE.outerWidth());var posInsideTop=winScrollTop + winHeight-offsetTop;var posInsideBottom=offsetTop + offsetHeight-winScrollTop;var posTopInside=winScrollTop-offsetTop;var useEdgeOnInit=cE.data('useedgeoninit')=='1'?true:false;var moveMax=offsetHeight + winHeight;var backgroundHeight=offsetHeight;var elementHeight=offsetHeight;if(offsetHeight==0){return false;}if(posInsideTop > 0&&posInsideBottom > 0){var posTopPercentage=posInsideTop / moveMax;var posTopPercentageBottom=posTopInside / (winHeight-offsetHeight);var contentPositionTop=0;var direction=(cE.data('parallaxcontentdirection')?cE.data('parallaxcontentdirection').toLowerCase():'bottom');var factor=(cE.data('parallaxcontentfactor')?cE.data('parallaxcontentfactor') * 2:0.5);var start=(cE.data('parallaxcontentstart')?cE.data('parallaxcontentstart'):0);var end=(cE.data('parallaxcontentend')?cE.data('parallaxcontentend'):1);var timingfunction=(cE.data('parallaxcontenttiminfunction')?cE.data('parallaxcontenttiminfunction'):'');backgroundHeight=offsetHeight * 2;if(posTopPercentage >=start&&posTopPercentage <=end){var posTopPercentageRel=posTopPercentage-0.5;posTopPercentageRel=(1 + posTopPercentageRel * 1 + posTopPercentageRel)-1;posTopPercentageRelOrig=posTopPercentageRel
expo=0;if(timingfunction!=''&&timingfunction!='linear'){if(timingfunction=='easeInExpo'){expo=1 + 0.5;}else if(timingfunction=='easeOutExpo'){expo=1 / (1 + 0.5);}else if(/expo\(([^\)]*)\)/.test(timingfunction)){expo=RegExp.$1;if(expo < 0){expo=1 / (1-expo);}}}if(expo > 0){if(posTopPercentageRel < 0){posTopPercentageRel=-Math.pow(-posTopPercentageRel, expo);}else{posTopPercentageRel=Math.pow(posTopPercentageRel, expo);}}posDiff=elementHeight * posTopPercentageRel * factor;pos=posDiff;if(direction.indexOf('top')!=-1){contentPositionTop=-Math.round(pos);}else if(direction.indexOf('bottom')!=-1||direction==''){contentPositionTop=Math.round(pos);}cE.css({'transform':'translate(0, ' + String(contentPositionTop) + 'px)'});}else if(cE.length >=1){cE.css({'transform':'translate(0, ' + String(0) + 'px)'});}}});}wUiTmp['hasInitParallax']=true;wUiTmp['adaptParallax']=false;};wGetScrollTopDiff=function(options){var offsetTopFixed=0;if(typeof(getOffsetTopFixed)=='function'){offsetTopFixed=getOffsetTopFixed(options);if(isNaN(offsetTopFixed)){if(jQuery('#blockHeader').length > 0&&jQuery('#blockHeader').css('position')=='fixed'){offsetTopFixed=jQuery('#blockHeader').height() + jQuery('#blockHeader').offset().top-jQuery(window).scrollTop();}else{offsetTopFixed=0;}}}else if(jQuery('#blockHeader').length > 0&&jQuery('#blockHeader').css('position')=='fixed'){offsetTopFixed=jQuery('#blockHeader').height() + jQuery('#blockHeader').offset().top-jQuery(window).scrollTop();}return offsetTopFixed;};wScrollSmoothToTarget=function(element, event){var id, offsetTopFixed=0, targetName, elementTarget, scrollTop;var href=element.getAttribute('href');if(!href||href=='#'|| href=='#wEmpty'){return false;}else if(element.href&&element.href.replace&&element.href.replace(/#[\S\s]*$/, '')!=location.href.replace(/#[\S\s]*$/, '')){return true;}else if(/(#.*)/.test(href)){targetName=RegExp.$1;targetSelector=targetName.replace(/\./, '\\.');elementTarget=jQuery(targetSelector);if(elementTarget.length==0){targetSelector="a[name='" + targetName.replace('#', '') + "']";elementTarget=jQuery(targetSelector);}if(elementTarget.length==0){return;}if(jQuery('.fullpage-wrapper').length!=0){var currentSection=jQuery(elementTarget).closest('.fp-section');if(currentSection.length!=0){event.stopPropagation();event.preventDefault();var anchorLink='fpa-' + String(currentSection.prevAll('.fp-section').length);currentSection.attr('data-anchor', anchorLink);jQuery.fn.fullpage.moveTo(anchorLink);jQuery(window).trigger('resize');return false;}}var currentTimestamp=new Date().getTime();if(elementTarget.length > 0&&!element.getAttribute('data-lct')||element.getAttribute('data-lct') < currentTimestamp-320){element.setAttribute('data-lct', currentTimestamp);event.preventDefault();jQuery(element).parent().parent().find('li').removeClass('selected');jQuery(element).parent().addClass('selected');try{jQuery('body, html').stop(true, true);scrollDuration=parseInt(element.getAttribute('data-scrollsmoothtotargetduration')?element.getAttribute('data-scrollsmoothtotargetduration'):400);window.setTimeout(function(){var scrollTopDiff=wGetScrollTopDiff();var hasContainerInsideTopOnScroll=jQuery('.wglContainerInsideTopOnScroll *').length;wUiTmp['scrollingAuto']=element.getAttribute('data-scrollingauto')=='no'?false:true;jQuery('body, html').animate({scrollTop:elementTarget.offset().top-scrollTopDiff}, {duration:scrollDuration, complete:function(){if(hasContainerInsideTopOnScroll!=jQuery('.wglContainerInsideTopOnScroll *').length){var scrollTopDiff=wGetScrollTopDiff();jQuery('body, html').animate({scrollTop:elementTarget.offset().top-scrollTopDiff}, {duration:scrollDuration, complete:function(){window.setTimeout(function(){wUiTmp['scrollingAuto']=false;if(!(element.getAttribute('data-preventpushstate')=='1')){history.pushState(null, null, targetName);}jQuery(window).trigger('resize');}, 10);}});}else{window.setTimeout(function(){wUiTmp['scrollingAuto']=false;if(!(element.getAttribute('data-preventpushstate')=='1')){history.pushState(null, null, targetName);}jQuery(window).trigger('resize');}, 16);}}});}, 10);return false;}catch(e){}}}};wScrollSmoothToElement=function(elementTarget, options){var id, offsetTopFixed, scrollTop;options=options||{};elementTarget=jQuery(elementTarget);if(jQuery('.fullpage-wrapper').length!=0){var currentSection=jQuery(elementTarget).closest('.fp-section');if(currentSection.length!=0){event.stopPropagation();event.preventDefault();var anchorLink='fpa-' + String(currentSection.prevAll('.fp-section').length);currentSection.attr('data-anchor', anchorLink);jQuery.fn.fullpage.moveTo(anchorLink);jQuery(window).trigger('resize');return false;}}var currentTimestamp=new Date().getTime();if(elementTarget.length > 0&&!elementTarget.attr('data-lct')||elementTarget.attr('data-lct') < currentTimestamp-320){elementTarget.attr('data-lct', currentTimestamp);try{jQuery('body, html').stop(true, true);scrollDuration=parseInt(elementTarget.attr('data-scrollsmoothtotargetduration')?elementTarget.attr('data-scrollsmoothtotargetduration'):400);var scrollTopDiff=typeof(options['scrollTopDiff'])!='undefined'?options['scrollTopDiff']:wGetScrollTopDiff();scrollTopDiff +=typeof(options['scrollTopOffset'])!='undefined'?options['scrollTopOffset']:0;var visibleMin=document.body.scrollTop + scrollTopDiff;var visibleMax=document.body.scrollTop + jQuery(window).height();var posTopElement=elementTarget.offset().top;if((typeof(wScrollSmoothToElementForceScroll)=='undefined'||!wScrollSmoothToElementForceScroll)&&(typeof(options['forceScroll'])=='undefined'||!options['forceScroll'])&&posTopElement > visibleMin&&posTopElement < visibleMax){return true;}wUiTmp['scrollingAuto']=typeof(options['scrollingAuto'])!='undefined'?options['scrollingAuto']:true;jQuery('body, html').animate({scrollTop:elementTarget.offset().top-scrollTopDiff}, {duration:scrollDuration, 'easing':typeof(wScrollSmoothToElementEasing)!='undefined'&&wScrollSmoothToElementEasing!=''?wScrollSmoothToElementEasing:'swing', complete:function(){window.setTimeout(function(){wUiTmp['scrollingAuto']=false;jQuery(window).trigger('resize');}, 16);}});return false;}catch(e){console.log(e)}}};wAddIsOnDarkBackground=function(element){if(jQuery(element).hasClass('isLightBackground')){jQuery(element).data('wasLightBackground', '1');jQuery(element).removeClass('isLightBackground');}jQuery(element).addClass('isDarkBackground');};wRemoveIsOnDarkBackground=function(element){if(jQuery(element).data('wasLightBackground')=='1'){jQuery(element).addClass('isLightBackground')
}jQuery(element).removeClass('isDarkBackground');};wAddIsOnLightBackground=function(element){if(jQuery(element).hasClass('isDarkBackground')){jQuery(element).data('wasDarkBackground', '1');jQuery(element).removeClass('isDarkBackground');}jQuery(element).addClass('isLightBackground');};wRemoveIsOnLightBackground=function(element){if(jQuery(element).data('wasDarkBackground')=='1'){jQuery(element).addClass('isDarkBackground')
}jQuery(element).removeClass('isLightBackground');};wHasWebpSupport=function(callback){if(wUiTmp['hasWebpSupport']){return wUiTmp['hasWebpSupport']=='y';}var im=new Image();im.onload=function(){wUiTmp['hasWebpSupport']=(im.width==1?'y':'n');};im.onerror=function(){wUiTmp['hasWebpSupport']='n';};im.src='data:image/webp;base64,UklGRiQAAABXRUJQVlA4IBgAAAAwAQCdASoBAAEAAwA0JaQAA3AA/vuUAAA=';if(typeof(callback)=='function'){window.setTimeout(function(){callback();}, 32);}return false;};wOptimizePictureSizes=function(){if(!wUiTmp['hasWebpSupport']){wHasWebpSupport(wOptimizePictureSizes);return false;}jQuery("div[data-responsivebackground]").each(function(){var cE=jQuery(this);if(wHasWebpSupport()&&cE.data('backgroundimagewebp')&&wHasWebpSupport()){cE.data('backgroundimage', cE.data('backgroundimagewebp'));}if(wHasWebpSupport()&&cE.data('backgroundimagewebpmin')&&wHasWebpSupport()){cE.data('backgroundimagemin', cE.data('backgroundimagewebpmin'));}var cEWidth=cE.width();var responsiveBackgroundMinWidth=cE.data('responsivebackgroundminwidth')?cE.data('responsivebackgroundminwidth'):768;var minwidthVisible=cE.data('minwidthvisible')?cE.data('minwidthvisible'):0;if(cEWidth > minwidthVisible&&cE.data('backgroundimage')&&cEWidth >=responsiveBackgroundMinWidth){cE.css({'background-image':'url("' + cE.data('backgroundimage') + '")'});}else if(cEWidth > minwidthVisible&&cE.data('backgroundimagemin')){cE.css({'background-image':'url("' + cE.data('backgroundimagemin') + '")'});}});jQuery("img[data-src2x]:not(.wglLazyLoadInit), img.wglLazyLoad:not(.wglLazyLoadInit)").each(function(){var currentImg=jQuery(this);var offsetTop=parseInt(currentImg.offset().top);var srcMin=currentImg.data('srcmin')?currentImg.data('srcmin'):'';var widthCurrent=parseInt(currentImg.width());var attrWidthCur=parseInt(typeof(currentImg.attr('width'))!='undefined'?currentImg.attr('width'):0);var widthMin=parseInt(srcMin.replace(/.*@min/, '').replace(/\..*/, ''));if(currentImg.attr('data-maxwidthifinvisible')&&currentImg.attr('data-maxwidthifinvisible') > widthCurrent){widthCurrent=currentImg.attr('data-maxwidthifinvisible');}if(devicePixelRatio >=hdLimitDpr&&typeof(currentImg.attr('data-src2x'))!='undefined'&&currentImg.attr('data-src2x')!=''&&attrWidthCur < widthCurrent * 2&&currentImg.attr('data-ishd')!='1'){currentImg.attr('src', currentImg.data('src2x')).attr('data-ishd', '1');}else if(typeof(currentImg.attr('data-src2x'))!='undefined'&&currentImg.attr('data-src2x')!=''&&attrWidthCur < widthCurrent&&currentImg.attr('data-ishd')!='1'){currentImg.attr('src', currentImg.data('src2x')).attr('data-ishd', '1');}else if(typeof(currentImg.attr('data-srcmin'))!='undefined'&&currentImg.attr('data-srcmin')!=''&&widthCurrent < widthMin&&widthMin < attrWidthCur&&currentImg.attr('data-ishd')!='1'&&currentImg.attr('data-isld')!='1'){if(typeof(currentImg.attr('src'))!='undefined'&&currentImg.attr('src').indexOf('data:image')==0&&currentImg.attr('data-ismin')!='1'){currentImg.attr('src', currentImg.data('srcmin')).attr('data-ismin', '1');}}else if(typeof(currentImg.attr('data-src'))!='undefined'&&currentImg.attr('data-src')!=''&&currentImg.attr('data-ishd')!='1'&&currentImg.attr('data-isld')!='1'){currentImg.attr('src', currentImg.data('src')).attr('data-isld', '1');}});};wProcessWglExpandToParent=function(){jQuery('.wglExpandToParent').each(function(index){var cE=jQuery(this);cE.css('height', '');});jQuery('.wglExpandToParent').each(function(index){var cE=jQuery(this);var height=cE.parent().height();cE.css('height', String(height) + 'px');});};wProcessWglAdjustHeightMax=function(){jQuery('.wglAdjustHeightMax').each(function(index){var cE=jQuery(this);var offsetLeft=0;var offsetLeftLast=0;var maxHeight=0;var adjust=true;var positionCol=0;var childsToAdapt=new Array();var numberChilds=0;var subElement=null;var elementHeight=0;cE.children('*').each(function(index){var className=jQuery(this).attr('class')||'';if(className.toLowerCase().indexOf('clear')==-1&&className.toLowerCase().indexOf('editor')==-1&&className.toLowerCase().indexOf('listentryquickfilterinvisible')==-1){numberChilds++;}});cE.children('*').each(function(index){subElement=jQuery(this);var className=jQuery(this).attr('class')||'';if(className.toLowerCase().indexOf('clear')==-1&&className.toLowerCase().indexOf('editor')==-1&&className.toLowerCase().indexOf('listentryquickfilterinvisible')==-1){if(jQuery(this).data('wHasSetHeightToAjustHeightMax')=='1'){jQuery(this).css({'height':''});}offsetLeft=jQuery(this).get(0).offsetLeft-(jQuery(this).parent().css('position')=='relative'?0:jQuery(this).get(0).parentNode.offsetLeft);if(index > 0&&(offsetLeft==0||offsetLeft <=offsetLeftLast)&&jQuery(this).css('position')!='absolute'){if(positionCol==1){childsToAdapt=new Array();maxHeight=0;}positionCol=0;if(offsetLeft <=offsetLeftLast){offsetLeft=0;}}positionCol++;elementHeight=subElement.css('box-sizing')=='border-box'?subElement.outerHeight():subElement.height();if(index + 1==numberChilds&&positionCol > 1){maxHeight=elementHeight > maxHeight?elementHeight:maxHeight;childsToAdapt.push(jQuery(this));}if(childsToAdapt.length > 1&&(index > 0&&positionCol==1||index + 1==numberChilds)){for(i=0; i < childsToAdapt.length; i++){childToAdapt=childsToAdapt[i];var className=childToAdapt.attr('class')||'';if(className.toLowerCase().indexOf('clear')==-1&&className.toLowerCase().indexOf('editor')==-1&&className.toLowerCase().indexOf('listentryquickfilterinvisible')==-1){childToAdapt.css({'height':maxHeight});childToAdapt.data('wHasSetHeightToAjustHeightMax', '1');}}childsToAdapt=new Array();if(index + 1==numberChilds){childToAdapt=subElement;var className=childToAdapt.attr('class')||'';if(className.toLowerCase().indexOf('clear')==-1&&className.toLowerCase().indexOf('editor')==-1&&className.toLowerCase().indexOf('listentryquickfilterinvisible')==-1){childToAdapt.css({'height':(positionCol==1?elementHeight:maxHeight)});childToAdapt.data('wHasSetHeightToAjustHeightMax', '1');}}maxHeight=0;}offsetLeftLast=offsetLeft;maxHeight=elementHeight > maxHeight?elementHeight:maxHeight;childsToAdapt.push(jQuery(this));}});});};jQuery.fn.wDatepicker=function(){jQuery.each(jQuery(this), function(){var projectLang=document.documentElement.getAttribute('lang')?document.documentElement.getAttribute('lang'):'de';jQuery.datepicker.setDefaults(jQuery.datepicker.regional[projectLang]);var attrDateMin=jQuery(this).data('datemin');var attrDateMax=jQuery(this).data('datemax');var changeYear=jQuery(this).data('changeyear')=='0'?false:true;var changeMonth=jQuery(this).data('changemonth')=='1'?true:false;var attrLimitSelectedDays=jQuery(this).data('limitselecteddays');var attrExcludeSelectedDays=jQuery(this).data('excludselecteddays');var minDate=null;var maxDate=null;if(!attrDateMin){}else if(attrDateMin.indexOf('today')!=-1){if(/today\s*\+\s*(\d+)/.test(attrDateMin)){minDate=new Date((new Date()).getTime() + parseInt(RegExp.$1) * 86400 * 1000);}else if(/today\s*\-\s*(\d+)/.test(attrDateMin)){minDate=new Date((new Date()).getTime()-parseInt(RegExp.$1) * 86400 * 1000)
}else{minDate=new Date();}}else if(/^callback:(.+)/.test(attrDateMin)){eval('if(typeof('+RegExp.$1+')!=\'undefined\')minDate='+RegExp.$1+'()');}else if(/(>|<|>=|<=)\s*\$?(\w+)/.test(attrDateMin)){var operator=RegExp.$1;var elementName=RegExp.$2;jQuery(this).mousedown(function(){var elementRelation=jQuery('#' + elementName);if(elementRelation.length==1){var elementRelationVal=elementRelation.val();var tmpDateObject=new Date();var hasDate=false;if(/(\d\d)\.(\d\d)\.(\d\d\d\d)/.test(elementRelationVal)){tmpDateObject.setDate(RegExp.$1);tmpDateObject.setMonth(RegExp.$2-1);tmpDateObject.setFullYear(RegExp.$3);hasDate=true;}else if(/(\d\d\d\d)-(\d\d)-(\d\d)/.test(elementRelationVal)){tmpDateObject.setDate(RegExp.$1);tmpDateObject.setMonth(RegExp.$2-1);tmpDateObject.setFullYear(RegExp.$3);hasDate=true;}if(hasDate){if(operator=='>'){tmpDateObject=new Date(tmpDateObject.getTime() + 86400000);}else if(operator=='<'){tmpDateObject=new Date(tmpDateObject.getTime()-86400000);}jQuery(this).datepicker("option", (operator=='<'?"maxDate":"minDate"), tmpDateObject);}}});}else{minDate=new Date(attrDateMin);}if(!attrDateMax){}else if(attrDateMax.indexOf('today')!=-1){if(/today\s*\+\s*(\d+)/.test(attrDateMax)){maxDate=new Date((new Date()).getTime() + parseInt(RegExp.$1) * 86400 * 1000);}else if(/today\s*\-\s*(\d+)/.test(attrDateMax)){maxDate=new Date((new Date()).getTime()-parseInt(RegExp.$1) * 86400 * 1000)
}else{maxDate=new Date();}}else if(/^callback:(.+)/.test(attrDateMin)){eval('if(typeof('+RegExp.$1+')!=\'undefined\')maxDate='+RegExp.$1+'()');}else if(/(>|<|>=|<=)\s*\$(\w+)/.test(attrDateMax)){var operator=RegExp.$1;var elementName=RegExp.$2;jQuery(this).mousedown(function(){var elementRelation=jQuery('#' + elementName);if(elementRelation.length==1){var elementRelationVal=elementRelation.val();var tmpDateObject=new Date();var hasDate=false;if(/(\d\d)\.(\d\d)\.(\d\d\d\d)/.test(elementRelationVal)){tmpDateObject.setDate(RegExp.$1);tmpDateObject.setMonth(RegExp.$2-1);tmpDateObject.setFullYear(RegExp.$3);hasDate=true;}else if(/(\d\d\d\d)-(\d\d)-(\d\d)/.test(elementRelationVal)){tmpDateObject.setDate(RegExp.$1);tmpDateObject.setMonth(RegExp.$2-1);tmpDateObject.setFullYear(RegExp.$3);hasDate=true;}if(hasDate){if(operator=='>'){tmpDateObject=new Date(tmpDateObject.getTime() + 86400000);}else if(operator=='<'){tmpDateObject=new Date(tmpDateObject.getTime()-86400000);}jQuery(this).datepicker("option", (operator=='<'?"maxDate":"minDate"), tmpDateObject);}}});}else{maxDate=new Date(attrDateMax);}var callbackLimitSelectedDays=function(day){return [true, '']};if(attrLimitSelectedDays=='workingDays'){callbackLimitSelectedDays=function(day){return [!(day.getDay()==6|| day.getDay()==0), ''];};}var yearCurrent=(new Date()).getFullYear();var excludedDays=attrExcludeSelectedDays?attrExcludeSelectedDays.replace(/YYYY/g, yearCurrent):'';if(attrExcludeSelectedDays&&attrExcludeSelectedDays!=''){callbackLimitSelectedDays=function(day){var allowDay=true;var dateStr=day.getFullYear() + '-' + (day.getMonth() < 9?'0' + String(day.getMonth() + 1):String(day.getMonth() + 1)) + '-' + (day.getDate() < 10?'0' + String(day.getDate()):String(day.getDate()));var daysToExclude=excludedDays.split(',');for(var i=0; i < daysToExclude.length; i++){if(dateStr==daysToExclude[i].trim()){return [false, ''];}}if(attrLimitSelectedDays=='workingDays'){return [!(day.getDay()==6|| day.getDay()==0), ''];}else{return [true, ''];}};}jQuery(this).datepicker({'beforeShowDay':callbackLimitSelectedDays, 'changeYear':changeYear, 'changeMonth':changeMonth, 'minDate':minDate, 'maxDate':maxDate, 'dateFormat':jQuery(this).data('dateformat'), 'onClose':function(){jQuery(this).data('haschanged', 1);var onchange=jQuery(this).data('onchange');if(/adaptInputToThisDate\('([^']+)',\s*(\d+)\)/.test(onchange)){inputToAdaptId=RegExp.$1;valueToAdapt=RegExp.$2;if(jQuery('#' + inputToAdaptId).length!=0){inputToAdapt=jQuery('#' + inputToAdaptId);if(inputToAdapt.data('haschanged')!='1'){if(/(\w+),\s*(\d\d)\.(\d\d)\.(\d\d\d\d)/.test(jQuery(this).val())){var dateObj=new Date(RegExp.$4, parseInt(RegExp.$3)-1, RegExp.$2);if(valueToAdapt > 0){dateObj.setDate(dateObj.getDate() + parseInt(valueToAdapt));}var dateStr=(dateObj.getDate() < 10?'0' + String(dateObj.getDate()):String(dateObj.getDate())) + '.' + (dateObj.getMonth() < 9?'0' + String(dateObj.getMonth() + 1):String(dateObj.getMonth() + 1)) + '.' + dateObj.getFullYear();var daysOfWeek=['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];var weekDay=daysOfWeek[dateObj.getDay()];if(jQuery.datepicker.regional['de']){weekDay=jQuery.datepicker.regional['de']['dayNamesMin'][dateObj.getDay()];}inputToAdapt.val(weekDay + ', ' + dateStr);jQuery(inputToAdapt).trigger('change');}else if(/(\d\d)\.(\d\d)\.(\d\d\d\d)/.test(jQuery(this).val())){var dateObj=new Date(RegExp.$3, parseInt(RegExp.$2)-1, RegExp.$1);if(valueToAdapt > 0){dateObj.setDate(dateObj.getDate() + parseInt(valueToAdapt));}var dateStr=(dateObj.getDate() < 10?'0' + String(dateObj.getDate()):String(dateObj.getDate())) + '.' + (dateObj.getMonth() < 9?'0' + String(dateObj.getMonth() + 1):String(dateObj.getMonth() + 1)) + '.' + dateObj.getFullYear();inputToAdapt.val(dateStr);jQuery(inputToAdapt).trigger('change');}else if(/(\d\d\d\d)-(\d\d)-(\d\d)/.test(jQuery(this).val())){var dateObj=new Date(RegExp.$1, parseInt(RegExp.$2)-1, RegExp.$3);if(valueToAdapt > 0){dateObj.setDate(dateObj.getDate() + parseInt(valueToAdapt));}var dateStr=dateObj.getFullYear() + '-' + (dateObj.getMonth() + 1 < 10?'0' + String(dateObj.getMonth() + 1):String(dateObj.getMonth() + 1))  + '-' + (dateObj.getDate() < 10?'0' + String(dateObj.getDate()):String(dateObj.getDate()));inputToAdapt.val(dateStr);jQuery(inputToAdapt).trigger('change');}}}}}});if(minDate){if(maxDate){jQuery(this).datepicker("option", "yearRange", String(minDate.getYear() + 1900) + ':' + String(maxDate.getYear() + 1900));}else{jQuery(this).datepicker("option", "yearRange", String(minDate.getYear() + 1900) + ':+10');}}else if(maxDate){jQuery(this).datepicker("option", "yearRange", '1970:' + String(maxDate.getYear() + 1900));}});};hasNotYetLoadedAllCss=function(){var divTmp=document.getElementById('deferred-styles-dyn');if(!divTmp|| divTmp&&window.getComputedStyle(divTmp).display=='none'){return false;}return true;};jQuery.fn.wPictureGallery=function(options){var options=options||{};options['timeout']=options['timeout']?options['timeout']:8;var hasGalleriesToInitLater=false;jQuery.each(jQuery(this), function(){var pictureGalleryCurrent=jQuery(this);if(pictureGalleryCurrent.is(":visible")&&!pictureGalleryCurrent.data('wasinit')&&typeof(initGallery)=='function'&&!hasNotYetLoadedAllCss()){var pictureGalleryCurrentId=pictureGalleryCurrent.attr('id').replace(/pictureGallery_/, '');eval('selectEntry_' + pictureGalleryCurrentId + '=function (position){selectListEntryGallery(pictureGalleryCurrentId, position);}');initGallery(pictureGalleryCurrentId);}else{hasGalleriesToInitLater=true;}});if(hasGalleriesToInitLater&&options['timeout'] > 1){window.setTimeout(function(){jQuery('.wglPictureGallery').wPictureGallery({'timeout':options['timeout']-1});}, 320);}};jQuery.fn.wBannerSlider=function(options){var options=options||{};options['timeout']=options['timeout']?options['timeout']:8;var hasBannerSlidersToInitLater=false;jQuery.each(jQuery(this), function(){var bannerSliderCurrent=jQuery(this);if(bannerSliderCurrent.is(":visible")&&bannerSliderCurrent.attr('data-wasinit')!='1'&&typeof(initBannerSlider)=='function'&&!hasNotYetLoadedAllCss()){var bannerSliderCurrentId=bannerSliderCurrent.attr('id').replace(/bannerSlider_/, '');var options={};options['initOn']=options['initon']||jQuery(this).data('initon');options['initOpen']=options['initopen']||jQuery(this).data('initopen');options['initDelay']=options['initDelay']||jQuery(this).data('initdelay');if(options['initDelay']==''){options['initDelay']=0;}else{options['initDelay'] *=1000;}eval('selectEntry_' + bannerSliderCurrentId + '=function (position){selectListEntryBannerSlider(bannerSliderCurrentId, position);}');var bannerSliderInit=function(){window.setTimeout(function(){try{initBannerSlider(bannerSliderCurrentId);bannerSliderCurrent.attr('data-wasinit', 1);if(typeof(options['initOpen'])!='undefined'&&options['initOpen']!=''){window.bannerSliderObjects[bannerSliderCurrentId]={};selectListEntryBannerSlider(bannerSliderCurrentId, parseInt(options['initOpen']), {'animation':'none'});}}catch(e){}}, options['initDelay']);};if(options['initOn']=='load'){if(wUiTmp['windowLoad']){bannerSliderInit();}else{if(typeof(wUiTmp['callbackAfterLoad'])=='undefined'){wUiTmp['callbackAfterLoad']=[];}wUiTmp['callbackAfterLoad'].push(bannerSliderInit);}}else{bannerSliderInit();}}else{hasBannerSlidersToInitLater=true;}});if(hasBannerSlidersToInitLater&&options['timeout'] > 1){window.setTimeout(function(){jQuery('.wglBannerSlider').wBannerSlider({'timeout':options['timeout']-1});}, 320);}};jQuery.fn.wTicker=function(){jQuery.each(jQuery(this), function(options){var options=options||{};options['delayStart']=jQuery(this).data('delaystart')?parseInt(jQuery(this).data('delaystart')):0;options['speed']=jQuery(this).data('speed')?parseFloat(jQuery(this).data('speed')):5;options['delimiter']=jQuery(this).data('delimiter')?jQuery(this).data('delimiter'):'';options['repeatMode']=jQuery(this).data('repeatmode')?jQuery(this).data('repeatmode'):'continue';var containerId=String(parseInt(Math.random() * 1000));var tickerData=new Array();jQuery.each(jQuery(this).children(), function(){tickerData.push(jQuery(this).children()[0]);});var multi=4;if(tickerData.length==1){multi=12;}else if(tickerData.length==2){multi=6;}else if(tickerData.length==3){multi=4;}jQuery('<div class="listTicker ' + jQuery(this).attr('class') + '" id="' + containerId + '"><div class="listTickerInner" id="' + containerId + '_inner"></div></div>').replaceAll(jQuery(this));if(options['repeatMode']=='continue'){for(var j=0; j < multi; j++){for(var i=0; i!=tickerData.length; i++){jQuery('#' + containerId + '_inner').append(options['delimiter']);jQuery('#' + containerId + '_inner').append(tickerData[i].cloneNode(true));}}jQuery('#' + containerId + '_inner').css('margin-left', '0');}else{for(var i=0; i!=tickerData.length; i++){if(i!=0){jQuery('#' + containerId + '_inner').append(options['delimiter']);}jQuery('#' + containerId + '_inner').append(tickerData[i].cloneNode(true));}jQuery('#' + containerId + '_inner').css('margin-left', jQuery('#' + containerId).width() + 'px');}jQuery('#' + containerId + '_inner').data('hasFinishedLoop', '1');window.setTimeout(function(){var widthContainerInner=document.getElementById('' + containerId + '_inner').offsetWidth;var duration=400 * widthContainerInner / (multi * options['speed']);if(options['repeatMode']=='continue'){window.setInterval(function(){if(jQuery('#' + containerId + '_inner').data('hasFinishedLoop')=='1'){jQuery('#' + containerId + '_inner').data('hasFinishedLoop', '0').css('margin-left', '0').animate({'marginLeft':'-' + String(widthContainerInner) / multi}, duration / (2 * multi), 'linear', function(){jQuery('#' + containerId + '_inner').data('hasFinishedLoop', '1');});}}, 10);}else if(options['repeatMode']=='loop'){window.setInterval(function(){if(jQuery('#' + containerId + '_inner').data('hasFinishedLoop')=='1'){jQuery('#' + containerId + '_inner').data('hasFinishedLoop', '0').css('margin-left', String(jQuery('#' + containerId).width()) + 'px').animate({'marginLeft':'-' + String(widthContainerInner)}, duration, 'linear', function(){jQuery('#' + containerId + '_inner').data('hasFinishedLoop', '1');});}}, 100);}else{jQuery('#' + containerId + '_inner').animate({'marginLeft':'-' + String(widthContainerInner)}, duration, 'linear');}}, parseInt(options['delayStart']) * 1000);});};jQuery.fn.wImageMap=function(){if(jQuery('.imageMap[data-object-fit="height"]')){jQuery(window).on('resize', function(){jQuery('.imageMap[data-object-fit="height"]').each(function(options){var computedStyle=window.getComputedStyle(jQuery(this).get(0));var widthImage=parseInt(computedStyle.width);var heightImage=parseInt(computedStyle.height);var computedStyleParent=window.getComputedStyle(jQuery(this).parent().get(0));var widthParent=parseInt(computedStyleParent.width);if(widthImage > widthParent + 1){jQuery(this).css({'margin-left':String((widthParent-widthImage) / 2) + 'px'});}else{jQuery(this).css({'margin-left':'auto'});}});});}jQuery.each(jQuery(this), function(options){if(jQuery(this).data('hasInit')!='1'){var iMi=jQuery(this).find('.imageMap');var iMl=jQuery(this).find('.imageMapLabels');jQuery(this).find('.mapEntry').on('mouseenter', function(event){jQuery(this).addClass('mouseover');var iMim=jQuery(this).find('.mapEntryIcon > img')
if(iMim.length==1){iMim.data('srcorig', iMim.attr('src'));iMim.attr('src', iMim.data('imgmo'));}iMl.find('.mapLabel').addClass('no-mouseoverEntry');iMl.find('.mapLabel[data-id="' + jQuery(this).data('id') + '"]').removeClass('no-mouseoverEntry').addClass('mouseoverEntry');});jQuery(this).find('.mapEntry').on('mouseleave', function(event){jQuery(this).removeClass('mouseover');var iMim=jQuery(this).find('.mapEntryIcon > img')
if(iMim.length==1&&iMim.data('srcorig')){iMim.attr('src', iMim.data('srcorig'));}iMl.find('.mapLabel').removeClass('no-mouseoverEntry');iMl.find('.mapLabel[data-id="' + jQuery(this).data('id') + '"]').removeClass('mouseoverEntry');});jQuery(this).find('.mapEntry').on('click', function(event){jQuery(this).siblings('.mapEntry').removeClass('clicked');jQuery(this).toggleClass('clicked');iMl.find('.mapLabel[data-id="' + jQuery(this).data('id') + '"]').siblings('.mapLabel').removeClass('clickedEntry');iMl.find('.mapLabel[data-id="' + jQuery(this).data('id') + '"]').toggleClass('clickedEntry');});jQuery(this).find('.mapLabel').on('mouseenter', function(event){jQuery(this).addClass('mouseover');iMi.find('.mapEntry').addClass('no-mouseoverLabel');iMi.find('.mapEntry[data-id="' + jQuery(this).data('id') + '"]').removeClass('no-mouseoverLabel').addClass('mouseoverLabel');var iMim=iMi.find('.mapEntry[data-id="' + jQuery(this).data('id') + '"]').find('.mapEntryIcon > img')
if(iMim.length==1){iMim.data('srcorig', iMim.attr('src'));iMim.attr('src', iMim.data('imgmo'));}});jQuery(this).find('.mapLabel').on('mouseleave', function(event){jQuery(this).removeClass('mouseover');iMi.find('.mapEntry').removeClass('no-mouseoverLabel');iMi.find('.mapEntry[data-id="' + jQuery(this).data('id') + '"]').removeClass('mouseoverLabel');var iMim=iMi.find('.mapEntry[data-id="' + jQuery(this).data('id') + '"]').find('.mapEntryIcon > img')
if(iMim.length==1&&iMim.data('srcorig')){iMim.attr('src', iMim.data('srcorig'));}});jQuery(this).find('.mapLabel').on('click', function(event){jQuery(this).siblings('.mapLabel').removeClass('clicked');jQuery(this).toggleClass('clicked');iMi.find('.mapEntry[data-id="' + jQuery(this).data('id') + '"]').siblings('.mapEntry').removeClass('clickedLabel');iMi.find('.mapEntry[data-id="' + jQuery(this).data('id') + '"]').toggleClass('clickedLabel');});}jQuery(this).data('hasInit', '1');jQuery(this).find('.mapEntry').each(function(options){var connectorMarker=jQuery(this).find('.mapEntryConnectorMarker');var connectorInfobox=jQuery(this).find('.mapEntryConnectorInfo');var infobox=jQuery(this).find('.mapEntryInfo');if(connectorMarker.length&&connectorInfobox.length){var computedStyleConnectorMarker=window.getComputedStyle(connectorMarker.get(0));var computedStyleConnectorInfobox=window.getComputedStyle(connectorInfobox.get(0));var lm=parseFloat(connectorMarker[0].style.left);var tm=parseFloat(connectorMarker[0].style.top);var li=parseFloat(connectorInfobox[0].style.left);var ti=parseFloat(connectorInfobox[0].style.top);var wi=infobox.outerWidth();var hi=infobox.outerWidth();var mlm=computedStyleConnectorMarker['margin-left'];var mtm=computedStyleConnectorMarker['margin-top'];var mli=computedStyleConnectorInfobox['margin-left'];var mti=computedStyleConnectorInfobox['margin-top'];var line1=jQuery(this).find('.mapEntryLine-1');var line2=jQuery(this).find('.mapEntryLine-2');var line3=jQuery(this).find('.mapEntryLine-3');var lineWidth=1;if(ti <=tm&&li >=lm&&parseFloat(mtm) < 0){line1.css({'left':'calc(' + String(lm) + '% + ' + mlm + ')', 'top':'calc(' + String(ti + (tm-ti) / 2) + '% + ' + mtm + ')', 'width':String(lineWidth) + 'px', 'height':String((tm-ti) / 2) + '%'});line2.css({'left':'calc(' + String(lm) + '% + ' + mlm + ')', 'top':'calc(' + String(ti + (tm-ti) / 2) + '% + ' + mtm + ')', 'width':'calc(' + String(li-lm) + '% ' + '-' + ' ' + mlm + ' + ' + lineWidth + 'px)', 'height':String(lineWidth) + 'px'});line3.css({'left':'calc(' + String(li) + '% + ' + mli + ')', 'top':String(ti) + '%', 'width':String(lineWidth) + 'px', 'height':'calc(' + String((tm-ti) / 2) + '% + ' + mtm + ')'});}else if(ti <=tm&&li <=lm&&parseFloat(mtm) < 0){line1.css({'left':'calc(' + String(lm) + '% + ' + mlm + ')', 'top':'calc(' + String(ti + (tm-ti) / 2) + '% + ' + mtm + ')', 'width':String(lineWidth) + 'px', 'height':String((tm-ti) / 2) + '%'});line2.css({'left':'calc(' + String(li) + '% + ' + mli + ')', 'top':'calc(' + String(ti + (tm-ti) / 2) + '% + ' + mtm + ')', 'width':'calc(' + String(lm-li) + '% ' + '-' + ' ' + mli + ' + ' + lineWidth + 'px)', 'height':String(lineWidth) + 'px'});line3.css({'left':'calc(' + String(li) + '% + ' + mli + ')', 'top':String(ti) + '%', 'width':String(lineWidth) + 'px', 'height':'calc(' + String((tm-ti) / 2) + '% + ' + mtm + ')'});}else if(ti > tm&&li > lm&&parseFloat(mtm) > 0){line1.css({'left':'calc(' + String(lm) + '% + ' + mlm + ')', 'top':'calc(' + String(tm) + '% + ' + mtm + ')', 'width':String(lineWidth) + 'px', 'height':String((ti-tm) / 2) + '%'});line2.css({'left':'calc(' + String(lm) + '% + ' + mlm + ')', 'top':'calc(' + String(ti + (tm-ti) / 2) + '% + ' + mtm + ')', 'width':'calc(' + String(li-lm) + '% ' + '-' + ' ' + mlm + ' + ' + lineWidth + 'px)', 'height':String(lineWidth) + 'px'});line3.css({'left':'calc(' + String(li) + '% + ' + mli + ')', 'top':'calc(' + String(tm + (ti-tm) / 2) + '% + ' + mtm + ')', 'width':String(lineWidth) + 'px', 'height':'calc(' + String((ti-tm) / 2) + '% ' + '-' + ' ' + mtm + ')'});}else if(ti > tm&&li < lm&&parseFloat(mtm) > 0){line1.css({'left':'calc(' + String(lm) + '% + ' + mlm + ')', 'top':'calc(' + String(tm) + '% + ' + mtm + ')', 'width':String(lineWidth) + 'px', 'height':String((ti-tm) / 2) + '%'});line2.css({'left':'calc(' + String(li) + '% + ' + mli + ')', 'top':'calc(' + String(tm + (ti-tm) / 2) + '% + ' + mtm + ')', 'width':'calc(' + String(lm-li) + '% ' + '-' + ' ' + mlm + ' + ' + lineWidth + 'px)', 'height':String(lineWidth) + 'px'});line3.css({'left':'calc(' + String(li) + '% + ' + mli + ')', 'top':'calc(' + String(tm + (ti-tm) / 2) + '% + ' + mtm + ')', 'width':String(lineWidth) + 'px', 'height':'calc(' + String((ti-tm) / 2) + '% ' + '-' + ' ' + mtm + ')'});}else if(li >=lm&&ti >=tm){line1.css({'left':'calc(' + String(lm) + '% + ' + mlm + ')', 'top':'calc(' + String(tm) + '% + ' + mtm + ')', 'width':'calc(' + String((li-lm) / 2) + '% ' + '-' + ' ' + mlm + ')', 'height':String(lineWidth) + 'px'});line2.css({'left':'calc(' + String(lm + (li-lm) / 2) + '%)', 'top':'calc(' + String(tm) + '% + ' + mtm + ')', 'width':String(lineWidth) + 'px', 'height':'calc(' + String(ti-tm) + '% ' + '-' + ' ' + mtm + ' + ' + lineWidth + 'px)'});line3.css({'left':'calc(' + String(lm + (li-lm) / 2) + '%)', 'top':'calc(' + String(ti) + '% + ' + mti + ')', 'width':String((li-lm) / 2) + '%', 'height':String(lineWidth) + 'px'});}else if(li >=lm&&ti <=tm){line1.css({'left':'calc(' + String(lm) + '% + ' + mlm + ')', 'top':'calc(' + String(tm) + '% + ' + mtm + ')', 'width':'calc(' + String((li-lm) / 2) + '% ' + '-' + ' ' + mlm + ')', 'height':String(lineWidth) + 'px'});line2.css({'left':'calc(' + String(lm + (li-lm) / 2) + '%)', 'top':'calc(' + String(ti) + '% + ' + mti + ')', 'width':String(lineWidth) + 'px', 'height':'calc(' + String(tm-ti) + '% ' + '-' + ' ' + mti + ' + ' + lineWidth + 'px)'});line3.css({'left':'calc(' + String(lm + (li-lm) / 2) + '%)', 'top':'calc(' + String(ti) + '% + ' + mti + ')', 'width':String((li-lm) / 2) + '%', 'height':String(lineWidth) + 'px'});}else if(li < lm&&ti > tm){line1.css({'left':'calc(' + String(li + (lm-li) / 2) + '% + ' + 0 + 'px)', 'top':'calc(' + String(tm) + '% + ' + mtm + ')', 'width':'calc(' + String((lm-li) / 2) + '% + ' + mlm + ')', 'height':String(lineWidth) + 'px'});line2.css({'left':'calc(' + String(lm + (li-lm) / 2) + '%)', 'top':'calc(' + String(tm) + '% + ' + mtm + ')', 'width':String(lineWidth) + 'px', 'height':'calc(' + String(ti-tm) + '% ' + '-' + ' ' + mtm + ' + ' + lineWidth + 'px)'});line3.css({'left':'calc(' + String(li) + '% + ' + 0 + 'px)', 'top':'calc(' + String(ti) + '% + ' + mti + ')', 'width':'calc(' + String((lm-li) / 2) + '% + 0px)', 'height':String(lineWidth) + 'px'});}else if(li < lm&&ti < tm){line1.css({'left':'calc(' + String(li + (lm-li) / 2) + '% + ' + 0 + 'px)', 'top':'calc(' + String(tm) + '% + ' + mtm + ')', 'width':'calc(' + String((lm-li) / 2) + '% + ' + mlm + ')', 'height':String(lineWidth) + 'px'});line2.css({'left':'calc(' + String(lm + (li-lm) / 2) + '%)', 'top':'calc(' + String(ti) + '% + ' + mti + ')', 'width':String(lineWidth) + 'px', 'height':'calc(' + String(tm-ti) + '% ' + '-' + ' ' + mti + ' + ' + lineWidth + 'px)'});line3.css({'left':'calc(' + String(li) + '% + ' + 0 + 'px)', 'top':'calc(' + String(ti) + '% + ' + mti + ')', 'width':'calc(' + String((lm-li) / 2) + '% + 0px)', 'height':String(lineWidth) + 'px'});}}});});};jQuery.fn.wSearchSuggest=function(){jQuery.each(jQuery(this), function(index){var cE=jQuery(this);cE.attr('autocomplete', 'off');cE.on('keydown', function(event){if(event.keyCode==27){jQuery('#searchSuggestOuter').remove();}else if(event.keyCode==40||event.keyCode==38){event.preventDefault();if(event.target.value==''){return false;}var positionSuggestSelected=0;if(event.target.getAttribute('data-positionsuggestedselected')){positionSuggestSelected=positionSuggestSelected + parseInt(event.target.getAttribute('data-positionsuggestedselected'));}positionSuggestSelected=event.keyCode==40?positionSuggestSelected + 1:positionSuggestSelected-1;if(positionSuggestSelected > jQuery('#searchSuggestOuter .searchSuggestEntry').length){positionSuggestSelected=jQuery('#searchSuggestOuter .searchSuggestEntry').length;}else if(positionSuggestSelected < 1){positionSuggestSelected=1;}if(jQuery('#searchSuggestOuter .searchSuggestEntry:nth-child(' + positionSuggestSelected + ')').data('word')){event.target.value=jQuery('#searchSuggestOuter .searchSuggestEntry:nth-child(' + positionSuggestSelected + ')').data('word');event.target.setAttribute('data-positionsuggestedselected', positionSuggestSelected);}jQuery('#searchSuggestOuter .searchSuggestEntry').removeClass('selected');jQuery('#searchSuggestOuter .searchSuggestEntry:nth-child(' + positionSuggestSelected + ')').addClass('selected');}});cE.on('keyup', function(event){event.preventDefault();var searchTerm=jQuery(this).val();if(typeof(wUiTmp['searchTermNumberResults'])=='undefined'){wUiTmp['searchTermNumberResults']={};}if(searchTerm!=''&&searchTerm!=wUiTmp['lastSearchTerm']){if(event.keyCode==40||event.keyCode==38){event.preventDefault();return;}if(wUiTmp['lastSearchTerm']&&searchTerm.indexOf(wUiTmp['lastSearchTerm'])==0&&wUiTmp['lastSearchTermNumberResults']==0){return;}if(wUiTmp['searchTermNumberResults'][searchTerm]&&wUiTmp['searchTermNumberResults'][searchTerm]==0){return;}var project=location.pathname.replace(/[^\/]*$/, '').replace(/^(\/[^\/]*)[^\?]*/, '$1');if(cE.data('project-search')){projectSearch=cE.data('project-search');if(project=='/'){project=projectSearch;}else if(projectSearch.indexOf('!important')!=-1){project=projectSearch.replace(/\s*\!important/, '');}}var projectGlobal=wUiTmp['wGlobalProjectPath'];var search='default';if(cE.data('id-search')){search=cE.data('id-search');}var url=projectGlobal + '/wGlobal/scripts/php/wSearchSuggest.php?searchTerm=' + encodeURIComponent(searchTerm) + '&project=' + project + '&search=' + search;if(cE.data('usecache')=='1'){url=project + '/weblication/wSearchSuggest/searchTerm=' + encodeURIComponent(searchTerm).replace(/~/g, '_WT-IL_').replace(/%/g, '~').toLowerCase() + '.html';}jQuery.ajax({type:"GET", url:url, dataType:'json', success:function(resultData){var numberResults=0;var innerHTMLSuggest='<div id="searchSuggestOuter"><div id="searchSuggestInner">';for(word in resultData){innerHTMLSuggest +='<div class="searchSuggestEntry" data-word="' + word + '">' + word + '</div>';numberResults++;}wUiTmp['lastSearchTermNumberResults']=numberResults;wUiTmp['searchTermNumberResults'][searchTerm]=numberResults;innerHTMLSuggest +='</div></div>';jQuery('#searchSuggestOuter').remove();if(numberResults > 0){cE.after(innerHTMLSuggest);jQuery('.searchSuggestEntry').on('mousedown', function(){jQuery(this).closest('#searchSuggestOuter').prev('input').val(jQuery(this).data('word'));jQuery(this).closest('form').submit();jQuery('#searchSuggestOuter').remove();});}}});}else if(searchTerm!=wUiTmp['lastSearchTerm']){jQuery('#searchSuggestOuter').remove();}wUiTmp['lastSearchTerm']=searchTerm;});});};jQuery.fn.wTabcontainer=function(){var maxHeightContent=0;jQuery.each(jQuery(this), function(){var tabcontainerCurrent=jQuery(this);var tabcontainerID=tabcontainerCurrent.get(0).id.replace(/tabContainer_/, '');var tabcontainerTabs=tabcontainerCurrent.find('> .tabsSmall, > .tabsSelectbox, > .tabs, > div > .tabs, > div > div > .tabs, > div > div > div > .tabs, > .containers, > div > .containers, > div > div > .containers');var options={};options['initOpen']=options['initOpen']||jQuery(this).data('initopen');options['rememberSelected']=options['rememberSelected']||jQuery(this).data('rememberselected');var activeContent=options['initOpen']||0;if(/^\d+$/.test(activeContent)){activeContent=parseInt(activeContent)-1;}if(options['rememberSelected']=='1'||typeof(wEditor)!='undefined'){var checkCookieRegExp=new RegExp('registerTab_' + tabcontainerID + '=(\\d+)');if(checkCookieRegExp.test(document.cookie)){activeContent=RegExp.$1-1;}}var jQueryHashId=location.hash.replace(/\:/g, '\\:').replace(/\./g, '\\.').replace('open_', 'anchor_');if(jQueryHashId!=''&&jQuery(this).find(jQueryHashId).length > 0){if(/_(\d+)$/.test(jQuery(jQueryHashId).attr('id'))){activeContent=RegExp.$1-1;}else{var containerIndex=jQuery(jQueryHashId).parents('.container, .containerInvisible').index();if(containerIndex >=0){activeContent=containerIndex;}}}if(!activeContent||activeContent==''||activeContent < 0){activeContent=0;}if(typeof(wEditor)=='undefined'){tabcontainerCurrent.find('> .tabsOuter > .tabs > .tabSelected,> .tabs > .tabSelected').removeClass('tabSelected');tabcontainerCurrent.find('> .tabsOuter > .tabs > .tab,> .tabs > .tab').eq(activeContent).addClass('tabSelected');tabcontainerCurrent.find('> .containers > .containerTab,> div > .containers > .containerTab,> div > div > .containers > .activeContent').removeClass('containerTabSelected');tabcontainerCurrent.find('> .containers > .containerTab,> div > .containers > .containerTab,> div > div > .containers > .activeContent').eq(activeContent).addClass('containerTabSelected');tabcontainerCurrent.find('> .containers > .container,> div > .containers > .container,> div > div > .containers > .container').addClass('containerInvisible');tabcontainerCurrent.find('> .containers > .container,> div > .containers > .container,> div > div > .containers > .container').eq(activeContent).removeClass('containerInvisible').addClass('containerSelected').addClass('containerSelectedAfterInit');}else{tabcontainerCurrent.find('> div > div > .tabsOuter > .tabs > .tabSelected,> div > div > .tabs > .tabSelected').removeClass('tabSelected');tabcontainerCurrent.find('> div > div > .tabsOuter > .tabs > .tab,> div > div > .tabs > .tab').eq(activeContent).addClass('tabSelected');tabcontainerCurrent.find('> div > div > .containers > .containerTab,> div > div > div > .containers > .containerTab,> div > div > div > div > .containers > .activeContent').removeClass('containerTabSelected');tabcontainerCurrent.find('> div > div > .containers > .containerTab,> div > div > div > .containers > .containerTab,> div > div > div > div > .containers > .activeContent').eq(activeContent).addClass('containerTabSelected');tabcontainerCurrent.find('> div > div > .containers > .container,> div > div > div > .containers > .container,> div > div > div > div > .containers > .container').addClass('containerInvisible');tabcontainerCurrent.find('> div > div > .containers > .container,> div > div > div > .containers > .container,> div > div > div > div > .containers > .container').eq(activeContent).removeClass('containerInvisible').addClass('containerSelected').addClass('containerSelectedAfterInit');}var eventsOpen='click';if(tabcontainerTabs.data('selecttabonmouseover')=='1'){eventsOpen='click mouseover';}tabcontainerTabs.children('.tab, .containerTab').on(eventsOpen, function(event){event.preventDefault();var eventType=event.type;var headerSelected=jQuery(this);var tabcontainerSelected=headerSelected.get(0).id.replace(/.*_/, '');var displayAccordeon=tabcontainerCurrent.hasClass('breakChildren');var numberClicks=tabcontainerCurrent.attr('data-numberclicks');tabcontainerCurrent.attr('data-numberclicks', tabcontainerCurrent.attr('data-numberclicks')?parseInt(tabcontainerCurrent.attr('data-numberclicks')) + 1:1);if(eventType=='mouseover'&&headerSelected.get(0).className.indexOf('containerTab')!=-1){return false;}if(eventType!='mouseover'&&headerSelected.attr('id')&&headerSelected.parent().data('pushstateonselect')=='1'){history.pushState({page:'#' + headerSelected.attr('id')}, '', '#' + headerSelected.attr('id'));}var containers=jQuery(this).parent().parent().get(0).className.indexOf('tabsOuter')==0?jQuery(this).parent().parent().parent().find('> .containers,> div > .containers,> div > div > .containers'):jQuery(this).parent().parent().find('> .containers,> div > .containers,> div > div > .containers');if(typeof(wOnBeforeClickTabcontainer)=='function'){var rtcEvent=wOnBeforeClickTabcontainer(headerSelected);if(rtcEvent===false){return false;}}containers.children('.containerTab').each(function(){var currentContainerTab=this;(function(currentContainerTab){if(currentContainerTab.id=='containerTab_' + tabcontainerID + '_' + tabcontainerSelected){if(displayAccordeon&&numberClicks!=0&&currentContainerTab.className.indexOf('containerTabSelected')!=-1&&currentContainerTab.className.indexOf('containerTabUnselectedAccordeon')==-1){currentContainerTab.className='containerTab containerTabUnselectedAccordeon';}else{currentContainerTab.className='containerTab containerTabSelected';}}else{currentContainerTab.className='containerTab';}})(currentContainerTab);});containers.children('.container, .containerSelected, .containerInvisible').each(function(){var currentContainer=this;(function(currentContainer){if(currentContainer.id=='container_' + tabcontainerID + '_' + tabcontainerSelected){if(displayAccordeon&&numberClicks!=0&&currentContainer.className.indexOf('containerSelected')!=-1&&currentContainer.className.indexOf('containerInvisibleAccordeon')==-1){currentContainer.className='container containerInvisibleAccordeon';}else{currentContainer.className='container containerSelected';window.setTimeout(function(){jQuery(currentContainer).addClass('containerSelectedAfterInit')}, 32);}}else{currentContainer.className='container containerInvisible';window.setTimeout(function(){jQuery(currentContainer).addClass('containerInvisibleAfterInit')}, 32);}})(currentContainer);});var tabsOuter=jQuery(this).parent().parent();if(tabsOuter.hasClass('containersOuter')){tabsOuter=tabsOuter.parent().find('.tabsOuter');}tabsOuter.find('> .tabsSmall, > .tabsSelectbox, > .tabs, > div > .tabs, > div > div > .tabs, > div > div > div > .tabs').children('.tab').each(function(){if(this.id=='tab_' + tabcontainerID + '_' + tabcontainerSelected){this.className='tab tabSelected';}else{this.className='tab';}});if(typeof(wEditor)!='undefined'||options['rememberSelected']=='1'){document.cookie='registerTab_' + tabcontainerID + '=' + tabcontainerSelected;}if(typeof(wOnAfterClickTabcontainer)=='function'){var rtcEvent=wOnAfterClickTabcontainer(headerSelected);if(rtcEvent===false){return false;}}if(eventType!='mouseover'){jQuery(window).trigger('resize');}jQuery('.wglBannerSlider').wBannerSlider();jQuery('.wglPictureGallery').wPictureGallery();});if(typeof(wEditor)=='undefined'){jQuery(this).find('.container, .containerSelected, .containerInvisible').each(function(index){if(jQuery(this).html()==''){tabcontainerCurrent.find('> .tabs > div:nth-child(' + (index + 1) + ')').remove();}});}});};jQuery.fn.wAccordion=function(){var maxHeightContent=0;jQuery.each(jQuery(this), function(){var options={};options['initOpen']=options['initOpen']||jQuery(this).data('initopen');options['multiple']=options['multiple']||jQuery(this).data('multiple');options['expandAll']=options['expandAll']||jQuery(this).data('expandall');options['collapsible']=options['collapsible']||jQuery(this).data('collapsible');options['rememberSelected']=options['rememberSelected']||jQuery(this).data('rememberselected');var accordionID=jQuery(this).get(0).id.replace(/accordion_/, '');var activeContent=options['initOpen'];if(/^\d+$/.test(activeContent)){activeContent=parseInt(activeContent)-1;}if(options['rememberSelected']=='1'){var checkCookieRegExp=new RegExp('accordionTab_' + accordionID + '=Accordion-(\\d+)');if(checkCookieRegExp.test(document.cookie)){activeContent=RegExp.$1-1;}else{var checkCookieRegExp=new RegExp('accordionTab_' + accordionID + '=(\\d+)');if(checkCookieRegExp.test(document.cookie)){activeContent=RegExp.$1-1;}}}var jQueryHashId=location.hash.replace(/\./g, '\\.').replace(/\:/g, '\\:').replace('open_', 'anchor_');options['active']=options['active']||activeContent;jQuery(this).children('.accordionContent').each(function(index){var heightContent=jQuery(this).height();if(heightContent > maxHeightContent){maxHeightContent=heightContent;}});var lastOpenedEntry=null;jQuery(this).find('> .listEntry > .listEntryInner > .accordionHeader, > .accordionHeader, > h1, > h2, > h3, > h4').each(function(index){var openCurrent=false;if(jQueryHashId!=''&&'#' + jQuery(this).attr('id')==jQueryHashId||jQuery(this).next('.accordionContent').find(jQueryHashId).length > 0){if(/_Accordion-/.test(jQuery(jQueryHashId).attr('id'))){options['active']=index;if(!options['multiple']&&lastOpenedEntry){lastOpenedEntry.addClass('accordionHeaderHidden').removeClass('accordionHeaderVisible');lastOpenedEntry.next('.accordionContent').addClass('accordionContentHidden').removeClass('accordionContentVisible').hide();lastOpenedEntry=null;}openCurrent=true;}else if(jQuery(jQueryHashId).parents('.accordionContent').length > 0){options['active']=index;}}else{jQueryHashIdAlt=jQueryHashId.replace(/_Accordion-\d+/, '_Accordion');if(jQueryHashIdAlt!=''&&'#' + jQuery(this).attr('id')==jQueryHashIdAlt||jQuery(this).next('.accordionContent').find(jQueryHashIdAlt).length > 0){if(/_Accordion-/.test(jQuery(jQueryHashIdAlt).attr('id'))){options['active']=index;if(!options['multiple']&&lastOpenedEntry){lastOpenedEntry.addClass('accordionHeaderHidden').removeClass('accordionHeaderVisible');lastOpenedEntry.next('.accordionContent').addClass('accordionContentHidden').removeClass('accordionContentVisible').hide();lastOpenedEntry=null;}openCurrent=true;}else if(jQuery(jQueryHashIdAlt).parents('.accordionContent').length > 0){options['active']=index;}}}if(options['collapsible']){jQuery(this).addClass('accordionHeaderCollapsible').removeClass('accordionHeaderNoneCollapsible');}else{jQuery(this).addClass('accordionHeaderNoneCollapsible').removeClass('accordionHeaderCollapsible');}if(options['expandAll']||typeof(options['active'])=='number'&&options['active']==index){lastOpenedEntry=jQuery(this);jQuery(this).addClass('accordionHeaderVisible').removeClass('accordionHeaderHidden');jQuery(this).next('.accordionContent').addClass('accordionContentVisible').removeClass('accordionContentHidden').show();}else{jQuery(this).addClass('accordionHeaderHidden').removeClass('accordionHeaderVisible');jQuery(this).next('.accordionContent').addClass('accordionContentHidden').removeClass('accordionContentVisible').hide();}if(options['heightStyle']=='auto'){jQuery(this).next('.accordionContent').css({'height':maxHeightContent});}jQuery(this).on('click', function(event, forceOpen){event.preventDefault();var isList=jQuery(this).parent().parent().parent().prop('nodeName')=='UL'?true:false;var headerSelected=jQuery(this);forceOpen=typeof(forceOpen)!='undefined'?forceOpen:false;if(headerSelected.attr('id')&&headerSelected.parent().data('pushstateonselect')=='1'){history.pushState({page:'#' + headerSelected.attr('id')}, '', '#' + headerSelected.attr('id'));}var contentSelected=jQuery(this).next('.accordionContent');var accordionContents=isList?jQuery(this).parent().parent().parent().find('> .listEntry > .listEntryInner > .accordionContent'):jQuery(this).parent().children('.accordionContent');var hasEntryVisible=false, hasEntryInvisible=false;if(typeof(wOnBeforeClickAccordeon)=='function'){var rtcEvent=wOnBeforeClickAccordeon(headerSelected);if(rtcEvent===false){return false;}}accordionContents.each(function(index){if(jQuery(this).get(0)==contentSelected.get(0)){if(jQuery(this).hasClass('accordionContentVisible')){hasEntryInvisible=true;}else{hasEntryVisible=true;}if(jQuery(this).hasClass('accordionContentVisible')&&!forceOpen){if(options['collapsible']){jQuery(this).parent().trigger('accordionbeforeactivate', {'newHeader':contentSelected});jQuery(this).prev('.accordionHeader').addClass('accordionHeaderHidden').removeClass('accordionHeaderVisible');jQuery(this).removeClass('accordionContentVisible').slideUp('normal', function(){jQuery(this).addClass('accordionContentHidden');jQuery(this).parent().trigger('accordionchange', {'newHeader':headerSelected});});}}else{jQuery(this).prev('.accordionHeader').addClass('accordionHeaderVisible').removeClass('accordionHeaderHidden');if(options['collapsible']){jQuery(this).prev('.accordionHeader').addClass('accordionHeaderCollapsible').removeClass('accordionHeaderNoneCollapsible');}else{jQuery(this).prev('.accordionHeader').addClass('accordionHeaderNoneCollapsible').removeClass('accordionHeaderCollapsible');}jQuery(this).removeClass('accordionContentHidden').slideDown('normal', function(){jQuery(this).addClass('accordionContentVisible')
jQuery(this).parent().trigger('accordionchange', {'newHeader':headerSelected});jQuery(this).parent().trigger('accordionactivate', {'newHeader':headerSelected});});}}else {if(options['multiple']==true){}else{jQuery(this).prev('.accordionHeader').addClass('accordionHeaderHidden').removeClass('accordionHeaderVisible');jQuery(this).removeClass('accordionContentVisible').slideUp('normal', function(){jQuery(this).addClass('accordionContentHidden');});}if(jQuery(this).hasClass('accordionContentVisible')){hasEntryVisible=true;}else{hasEntryInvisible=true;}}});if(hasEntryInvisible){jQuery('#accordionOpener' + accordionID).show();jQuery('#accordionCloser' + accordionID).hide();}else{jQuery('#accordionOpener' + accordionID).hide();jQuery('#accordionCloser' + accordionID).show();}if(typeof(wOnAfterClickAccordeon)=='function'){wOnAfterClickAccordeon(headerSelected);}jQuery(window).trigger('resize');jQuery('.wglBannerSlider').wBannerSlider();jQuery('.wglPictureGallery').wPictureGallery();});});jQuery(this).on('accordionactivate', function(event, ui){try{var currentHeader=ui.newHeader;var offsetTopCurrentHeader=(currentHeader.offset())['top'];var windowScrollTop=jQuery(window).scrollTop();var scrollTopMax=offsetTopCurrentHeader-wGetScrollTopDiff();if(offsetTopCurrentHeader < windowScrollTop){var scrollTopDiff=wGetScrollTopDiff();jQuery('body, html').animate({scrollTop:offsetTopCurrentHeader-scrollTopDiff});}else{var offsetBottomCurrentContent=(jQuery(currentHeader).next('.accordionContent').offset())['top'] + jQuery(currentHeader).next('.accordionContent').outerHeight();var windowBottom=windowScrollTop + jQuery(window).height();if(offsetBottomCurrentContent > windowBottom){var scrollTopToFullvisibility=offsetBottomCurrentContent-windowBottom;var scrollTopAdapt=windowScrollTop + scrollTopToFullvisibility;scrollTopAdapt=scrollTopAdapt > scrollTopMax?scrollTopMax:scrollTopAdapt;jQuery('body, html').animate({scrollTop:scrollTopAdapt});}}}catch(e){}});jQuery(this).on('accordionchange', function(event, ui){var eventTarget=event.target||event.srcElement;var id=eventTarget.id.replace(/accordion_/, '');if(options['rememberSelected']=='1'){if(ui.newHeader[0]){if(ui.newHeader[0].className.indexOf('accordionHeaderHidden')!=-1){document.cookie='accordionTab_' + id + '=';}else{document.cookie='accordionTab_' + id + '=' + (ui.newHeader[0].getAttribute('data-index')?ui.newHeader[0].getAttribute('data-index'):ui.newHeader[0].id.replace(/.*_/, ''));}}}jQuery(window).trigger('resize');jQuery('.wglBannerSlider').wBannerSlider();jQuery('.wglPictureGallery').wPictureGallery();});});};jQuery(window).on('hashchange', function(){window.setTimeout(function(){wAdaptOnChangeHash({});}, 10);});wAdaptOnChangeHash=function(options){var jQueryHashId=decodeURIComponent(location.hash.replace(/\./g, '\\.').replace('open_', 'anchor_').replace('&', '').replace('=', ''));if(jQueryHashId!=''&&jQuery(jQueryHashId).length > 0){try{if(/#anchor/.test(jQueryHashId)&&jQuery(jQueryHashId).parent().attr('id').indexOf('tab_')==0){document.location.hash=jQuery(jQueryHashId).parent().attr('id');jQueryHashId='#' + jQuery(jQueryHashId).parent().attr('id');}}catch(e){}if(/#tab_/.test(jQueryHashId)){if(/tab_/.test(jQuery(jQueryHashId).attr('id'))){jQuery(jQueryHashId).trigger('click', [true]);}else{var containerIndex=jQuery(jQueryHashId).parents('.containerInvisible').index();if(containerIndex >=0){jQuery(jQueryHashId).parents('.containerInvisible').parent().parent().find('> .tabs > .tab:nth-child(' + (containerIndex + 1) + ')').trigger('click', [true]);}}}else if(/_Accordion-/.test(jQuery(jQueryHashId).attr('id'))){jQuery(jQueryHashId).trigger('click', [true]);var containerIndex=jQuery(jQueryHashId).parents('.containerInvisible').index();if(containerIndex >=0){jQuery(jQueryHashId).parents('.containerInvisible').parent().parent().find('> .tabs > .tab:nth-child(' + (containerIndex + 1) + ')').trigger('click', [true]);}}else{var containerIndex=jQuery(jQueryHashId).parents('.containerInvisible').index();if(containerIndex >=0){jQuery(jQueryHashId).parents('.containerInvisible').parent().parent().find('> .tabs > .tab:nth-child(' + (containerIndex + 1) + ')').trigger('click', [true]);}jQuery(jQueryHashId).parents('.accordionContent').prev('.accordionHeader').trigger('click', [true]);}}window.setTimeout(function(){if(jQueryHashId!=''&&/#(wFormErrorMessages|anchor_|tab_|_Accordion-)/.test(jQueryHashId)||jQuery(jQueryHashId).hasClass('elementSection')){var anchor=jQuery(jQueryHashId.replace(/\./, '\\.'));if(anchor.length > 0){wScrollSmoothToElement(anchor);}}}, 120);};wOpenAllAccordions=function(id){jQuery('#accordion_' + id + ' .accordionContent').removeClass('accordionContentHidden').slideDown('normal', function(){jQuery(this).addClass('accordionContentVisible')
jQuery(window).trigger('resize');});jQuery('#accordion_' + id + ' .accordionHeader').addClass('ui-state-active').addClass('ui-accordion-header-active').addClass('accordionHeaderVisible').removeClass('accordionHeaderHidden');jQuery('#accordion_' + id + ' .accordionHeader span').addClass('ui-icon-triangle-1-s').removeClass('ui-icon-triangle-1-e');jQuery('#accordionOpener' + id).hide();jQuery('#accordionCloser' + id).show();jQuery(window).trigger('resize');jQuery('.wglBannerSlider').wBannerSlider();jQuery('.wglPictureGallery').wPictureGallery();};wCloseAllAccordions=function(id){jQuery('#accordion_' + id + ' .accordionContent').removeClass('accordionContentVisible').slideUp('normal', function(){jQuery(this).addClass('accordionContentHidden');jQuery(window).trigger('resize');});jQuery('#accordion_' + id + ' .accordionHeader').removeClass('ui-state-active').removeClass('ui-accordion-header-active').removeClass('accordionHeaderVisible').addClass('accordionHeaderHidden');jQuery('#accordion_' + id + ' .accordionHeader span').addClass('ui-icon-triangle-1-e').removeClass('ui-icon-triangle-1-s');jQuery('#accordionCloser' + id).hide();jQuery('#accordionOpener' + id).show();};wsmn=function(ml){var mln='';for(var i=0;i<ml.length/3;i++){mln=ml.substr(i*3+1,1)+mln;}var pms='';if(/(\?.*)/.test(mln)){pms=RegExp.$1;mln=mln.replace(/(\?.*)/, '');}mln='m'+'a'+'ilt'+'o'+':'+mln.replace(/a/g, '@').replace(/e/g, '.').replace(/\*/g, 'a').replace(/;/g, 'e').replace(/:/g, 'o').replace(/,/g, 'u').replace(/\!/g, 'i');mln +=pms;top.location.href=mln;};var wMagnifierElement=null;var wMagnifierImageElement=null;jQuery.fn.wMagnifier=function(options){if(typeof(wEditor)!='undefined'){return false;}jQuery.each(jQuery(this), function(){jQuery(this).on('mouseover', function(event){var srcMagnifier=jQuery(this).attr('data-src2x')?jQuery(this).attr('data-src2x'):jQuery(this).get(0).currentSrc;var isPicture=false;if(jQuery(this).prop('tagName')=='PICTURE'){isPicture=true;srcMagnifier=jQuery(this).find('source').attr('srcset').replace(/^[\w\W]*,\s*/, '').replace(/ [\w\W]*/, '');}else if(jQuery(this).parent().prop('tagName')=='PICTURE'){srcMagnifier=srcMagnifier.replace(/(\d+)(w(?:2x)?\.\w+)$/, function(matches, width, post){return String(width * 2) + post});}jQuery('.wMagnifier').remove();jQuery('.wMagnifierMovingArea').remove();var objectCurrent=jQuery(this);objectCurrent.parent().css({'position':'relative', 'display':jQuery(this).css('display')=='inline-block'?'inline-block':'block'});objectCurrent.parent().append('<div id="wMagnifierMovingArea" class="wMagnifierMovingArea" style="z-index:1000;cursor:none;position:absolute;top:0;left:0;width:100%;height:100%"></div>');objectCurrent.parent().append('<div id="wMagnifier" class="wMagnifier"></div>');wMagnifierElement=jQuery('#wMagnifier');wMagnifierMovingAreaElement=jQuery('#wMagnifierMovingArea');wMagnifierImageElement=objectCurrent;var offset=objectCurrent.offset();objectCurrent.data('offsetLeft', parseInt(offset.left));objectCurrent.data('offsetTop', parseInt(offset.top));objectCurrent.data('zoomerWidth', wMagnifierElement.width());objectCurrent.data('zoomerHeight', wMagnifierElement.height());objectCurrent.data('imageWidth',  isPicture?objectCurrent.find('img').width():objectCurrent.width());objectCurrent.data('borderLeftWidth', parseInt(wMagnifierElement.css('border-left-width')));objectCurrent.data('borderTopWidth', parseInt(wMagnifierElement.css('border-top-width')));var scale=(isPicture?objectCurrent.find('img').width():objectCurrent.width()) / (typeof(objectCurrent.attr('width'))!='undefined'?objectCurrent.attr('width'):objectCurrent.attr('data-widthorig'));var ratio=2 / (scale?scale:1);var posX=parseInt(typeof(event.pageX!=='undefined')?event.pageX:(event.clientX + document.documentElement.scrollLeft))-wMagnifierImageElement.data('offsetLeft');var posY=parseInt(typeof(event.pageY!=='undefined')?event.pageY:(event.clientY + document.documentElement.scrollTop))-wMagnifierImageElement.data('offsetTop');wMagnifierElement.css({'left':posX-wMagnifierImageElement.data('borderLeftWidth')-wMagnifierImageElement.data('zoomerWidth') / 2, 'top':posY-wMagnifierImageElement.data('borderTopWidth')-wMagnifierImageElement.data('zoomerHeight') / 2, 'background-position':String(-posX * ratio + wMagnifierImageElement.data('zoomerWidth') / 2) + 'px ' +  String(-posY * ratio + wMagnifierImageElement.data('zoomerHeight') / 2) + 'px'});wMagnifierElement.css({'background-image':'url(' + srcMagnifier + ')', 'background-repeat':'no-repeat'});wMagnifierElement.css({'background-size':String((isPicture?objectCurrent.find('img').width():objectCurrent.width()) * 2) + 'px'});wMagnifierMovingAreaElement.on('mousemove', function(event){var posX=parseInt(typeof(event.pageX!=='undefined')?event.pageX:(event.clientX + document.documentElement.scrollLeft))-wMagnifierImageElement.data('offsetLeft');var posY=parseInt(typeof(event.pageY!=='undefined')?event.pageY:(event.clientY + document.documentElement.scrollTop))-wMagnifierImageElement.data('offsetTop');wMagnifierElement.css({'left':posX-wMagnifierImageElement.data('borderLeftWidth')-wMagnifierImageElement.data('zoomerWidth') / 2, 'top':posY-wMagnifierImageElement.data('borderTopWidth')-wMagnifierImageElement.data('zoomerHeight') / 2, 'background-position':String(-posX * ratio + wMagnifierImageElement.data('zoomerWidth') / 2) + 'px ' +  String(-posY * ratio + wMagnifierImageElement.data('zoomerHeight') / 2) + 'px'});});wMagnifierMovingAreaElement.on('mouseout click', function(event){jQuery('.wMagnifier').remove();jQuery('.wMagnifierMovingArea').remove();});});});};jQuery.fn.wMaximizer=function(options){jQuery.each(jQuery(this), function(){jQuery(this).click(function(){var objectCurrent=jQuery(this);return wMaximizer(objectCurrent, options);});});};wMaximizer=function(objectCurrent, options){var objectToMaximize=objectCurrent.parent();var widthMaximized=objectToMaximize.parent().width();if(objectToMaximize.hasClass('wglMaximized')){objectToMaximize.animate({'max-width':String(objectToMaximize.data('widthDefault')) + 'px'}, 600, function(){objectToMaximize.removeClass('wglMaximized');});}else{objectToMaximize.data('widthDefault', objectToMaximize.width());objectToMaximize.animate({'max-width':String(widthMaximized) + 'px'}, 600, function(){objectToMaximize.addClass('wglMaximized');});}};jQuery.fn.wAutoheight=function(){jQuery.each(jQuery(this), function(index){var ta=jQuery(this);var height=ta.height();var scrollHeight=ta.prop('scrollHeight');var diffHeight=Math.ceil(parseFloat(ta.css('paddingTop')) + parseFloat(ta.css('paddingBottom')));if(ta.prop('scrollHeight') > Math.ceil(ta.height()) + diffHeight){ta.height(ta.prop('scrollHeight'));}ta.on('keyup change', function(){var ta=jQuery(this);var height=ta.height();var scrollHeight=ta.prop('scrollHeight');var diffHeight=Math.ceil(parseFloat(ta.css('paddingTop')) + parseFloat(ta.css('paddingBottom')));if(ta.prop('scrollHeight') > Math.ceil(ta.height()) + diffHeight){ta.height(ta.prop('scrollHeight'));}});});};jQuery.fn.wLightbox=function(optionsLightbox){jQuery.each(jQuery(this), function(){jQuery(this).on('click', function(){return wLightbox(jQuery(this), typeof(optionsLightbox)!='undefined'?optionsLightbox:{});});jQuery(this).on('submit', function(){return wLightbox(jQuery(this), typeof(optionsLightbox)!='undefined'?optionsLightbox:{});});});};wLightbox=function(objectCurrent, options){if(typeof(wEditor)!='undefined'){return false;}var elementCurrent, src, queryString='', srcOrig, rel, optionsInit=options;options=options||{};options['objectCurrent']=objectCurrent;if(typeof(objectCurrent.jquery)=='undefined'){options=typeof(optionsInit)!='undefined'?options:objectCurrent;}if(typeof(wLightboxVariants)!='undefined'){if(!options['variant']){if(objectCurrent.attr('data-variant')){options['variant']=objectCurrent.attr('data-variant');}else if(objectCurrent.prop('tagName')=='A'&&objectCurrent.attr('target')&&objectCurrent.attr('target').indexOf('box')!=-1){options['variant']=objectCurrent.attr('target');}else if(objectCurrent.prop('tagName')=='FORM'&&objectCurrent.attr('data-target')&&objectCurrent.attr('data-target').indexOf('box')!=-1){options['variant']=objectCurrent.attr('data-target');}else if(objectCurrent.prop('tagName')=='PICTURE'||objectCurrent.attr('class')&&objectCurrent.attr('class').indexOf('picture')!=-1){options['variant']='boxPicture';}else {options['variant']='box';}if(/(box\w+)/.test(objectCurrent.get(0).className)){options['variant']=RegExp.$1;}}if(typeof(objectCurrent.jquery)!='undefined'&&objectCurrent.attr('data-copyright-lightbox')){options['copyrightText']=objectCurrent.attr('data-copyright-lightbox');}if(wLightboxVariants[options['variant']]){if(wLightboxVariants[options['variant']]['class']&&!options['class']){options['class']=wLightboxVariants[options['variant']]['class'];}if(wLightboxVariants[options['variant']]['width']&&!options['width']){options['width']=wLightboxVariants[options['variant']]['width'];}if(wLightboxVariants[options['variant']]['height']&&!options['height']){options['height']=wLightboxVariants[options['variant']]['height'];}if(wLightboxVariants[options['variant']]['postfix']&&!options['postfix']){options['postfix']=wLightboxVariants[options['variant']]['postfix'];}if(wLightboxVariants[options['variant']]['scrollIfToHeight']&&!options['scrollIfToHeight']){options['scrollIfToHeight']=wLightboxVariants[options['variant']]['scrollIfToHeight'];}if(wLightboxVariants[options['variant']]['limitSizeIfPicture']&&!options['limitSizeIfPicture']){options['limitSizeIfPicture']=wLightboxVariants[options['variant']]['limitSizeIfPicture'];}}}if(typeof(objectCurrent.jquery)=='undefined'){src=options['href']?options['href']:objectCurrent;rel='';objectCurrent=jQuery('<a href="' + src + '" target=""></a>');}else{elementCurrent=objectCurrent.get(0);if(objectCurrent.prop('tagName')=='FORM'){src=objectCurrent.attr('action');objectCurrent.find('input').each(function(){queryString +=(queryString==''?'?':'&') + jQuery(this).attr('name') + '=' + encodeURIComponent(jQuery(this).attr('value'));});src +=queryString;}else{src=objectCurrent.attr('data-href')?objectCurrent.attr('data-href'):objectCurrent.attr('href');if(!src){currentImage=objectCurrent.find('img');rel=objectCurrent.attr('rel');if(currentImage){if(currentImage.parent().prop('tagName')=='PICTURE'&&objectCurrent.parent().attr('data-src')){src=objectCurrent.parent().attr('data-src');if(objectCurrent.parent().attr('data-rel')){rel=objectCurrent.parent().attr('data-rel');}}else if(currentImage.parent().prop('tagName')=='PICTURE'){src=objectCurrent.attr('data-src');}else{src=objectCurrent.find('img').attr('src');}}}if(options['limitSizeIfPicture']&&objectCurrent.find('source').length!=0){var srcs=[], srcToCheck='', widthSrcToCheck=0, srcToUse='', widthSrcToUse=10000, windowWidth=parseInt(jQuery(window).width());objectCurrent.find('source').each(function(){try{srcs=jQuery(this).attr('srcset').split(',');for(var i=0; i < srcs.length; i++){srcToCheck=srcs[i].replace(/\s+\w+/, '').trim();if(/@(\d+)w/.test(srcToCheck)){widthSrcToCheck=RegExp.$1;if(widthSrcToCheck >=windowWidth * devicePixelRatio&&widthSrcToCheck < widthSrcToUse){src=srcToCheck;widthSrcToUse=widthSrcToCheck;}}}}catch(e){}});}}if(!rel){rel=objectCurrent.attr('data-rel');}}srcOrig=src;if(options['postfix']){if(/(.*)(#.*)$/.test(src)){src=RegExp.$1;src +=/\?/.test(src)?'&' + options['postfix']:'?' + options['postfix'] + RegExp.$2;}else{src +=/\?/.test(src)?'&' + options['postfix']:'?' + options['postfix'];}}if(/^https?\:\/\/([^\/]+)/.test(src)&&!/\.(png|jpe?g|gif|webp)$/i.test(src)){if(RegExp.$1!=location.host){src=src.replace('viewmode=blank', '').replace('linkback=no', '');src=src.replace(/[\?\&]+$/, '');}}if(/youtu\.be\/([^\&\?]+)/.test(src)|| /youtube\.com\/watch\?v=([^\&\?]+)/.test(src)){options['class']='youtube';var vu='https://www.youtube-nocookie.com/embed/' + RegExp.$1;var vqs='';if(/(start=\d+)/.test(src)){vqs +=(vqs==''?'?':'&') + RegExp.$1;}if(/(end=\d+)/.test(src)){vqs +=(vqs==''?'?':'&') + RegExp.$1;}src=vu + vqs;}else if(/vimeo.com\/(?:video\/)?([\w]+)/.test(src)){options['class']='youtube';var vu='https://player.vimeo.com/video/' + RegExp.$1;var vqs='';if(/(start=\d+)/.test(src)){vqs +=(vqs==''?'?':'&') + RegExp.$1;}if(/(end=\d+)/.test(src)){vqs +=(vqs==''?'?':'&') + RegExp.$1;}src=vu + vqs;}var lightboxClassName='wLightbox-' + (options['class']?options['class']:'default');var contentWidth=0;var contentHeight=0;var elementsRel=jQuery("*[data-rel='" + rel + "']");var numberRel=elementsRel.length;var positionRel=1;for(i=0; i < numberRel; i++){if(elementCurrent&&elementsRel[i]==elementCurrent){positionRel=i + 1;break;}}var classPrev='wLightboxMoverBack' + (numberRel > 1&&positionRel > 1?' wLightboxMoverBackAvailable':'');var classNext='wLightboxMoverForward' + (numberRel > 1&&positionRel < numberRel?' wLightboxMoverForwardAvailable':'');var boxWasOpened=true;var lightboxType='iframe';var titleInnerHTML='';if(options['type']=='inline'||objectCurrent&&objectCurrent.attr('data-lightboxtype')=='inline'){lightboxType='inline';}else if(options['type']=='ajax'||objectCurrent&&objectCurrent.attr('data-lightboxtype')=='ajax'){lightboxType='inline';options['type']='ajax';}else if(/\.(jpe?g|gif|webp|png|svg)$/i.test(src.replace(/\?.*/, ''))||options['type']=='image'||objectCurrent&&objectCurrent.attr('data-lightboxtype')=='image'){lightboxType='image';}else if(/\.(mpeg|mp4|m4v)(\?[^\/]*)*$/i.test(src)||options['type']=='video'||objectCurrent&&objectCurrent.attr('data-lightboxtype')=='video'){lightboxType='video';}if(typeof(wOnBeforeOpenLightbox)=='function'){if(wOnBeforeOpenLightbox(src, options)==false){return false;}}if(jQuery('.wLightbox').length==0){if(lightboxType=='inline'){options['content']=options['content']||'';options['allowTouchStart']=typeof(options['allowTouchStart'])!='undefined'?options['allowTouchStart']:false;jQuery('<div id="wLightbox" data-type="' + lightboxType + '" class="wLightbox wLightbox-' + options['type'] + ' ' + lightboxClassName + '" data-src="' + src + '"><div class="wLightboxBackground"></div><div class="wLightboxOuter"><div class="wLightboxInner" ' + (!options['allowTouchStart']?' ontouchstart="event.preventDefault();"':'') + ' onmousedown="event.preventDefault();"><div class="wLightboxCloser"></div>' + options['content'] + '<div class="wLightboxTitle"></div></div></div></div>').appendTo('body');}else if(lightboxType=='image'){jQuery('<div id="wLightbox" data-type="' + lightboxType + '" class="wLightbox wLightbox-image ' + lightboxClassName + '" data-src="' + src + '"><div class="wLightboxBackground"></div><div class="wLightboxOuter"><div class="wLightboxInner"><div class="wLightboxCloser"><span></span><span></span></div><div class="' + classPrev + '"><span></span><span></span></div><div class="' + classNext + '"><span></span><span></span></div><div class="wLightboxImageOuter"><img class="wLightboxImage" src="' + src + '"/>' + (wLightboxVariants[options['variant']]['addCopyrightElement']&&options['copyrightText']?'<div class="wLightboxCopyright">' + options['copyrightText'] + '</div>':'') + '</div><div class="wLightboxFooter"><div class="wLightboxTitle">' + titleInnerHTML + '</div><div class="wLightboxDescription">' + titleInnerHTML + '</div></div></div></div></div>').appendTo('body');}else if(lightboxType=='video'){var mimeTypeVideo='video/mp4';jQuery('<div id="wLightbox" data-type="' + lightboxType + '" class="wLightbox wLightbox-video ' + lightboxClassName + '" data-src="' + src + '"><div class="wLightboxBackground"></div><div class="wLightboxOuter"><div class="wLightboxInner" ontouchstart="event.preventDefault();" onmousedown="event.preventDefault();"><div class="wLightboxCloser"></div><div class="' + classPrev + '"><span></span><span></span></div><div class="' + classNext + '"><span></span><span></span></div><video controls="controls" autoplay="autoplay" style="max-width:100%;width:auto;height:auto;"><source src="' + src + '" type="' + mimeTypeVideo + '" /></video><div class="wLightboxFooter"><div class="wLightboxTitle">' + titleInnerHTML + '</div></div></div></div></div>').appendTo('body');}else{jQuery('<div id="wLightbox" data-type="' + lightboxType + '" class="wLightbox wLightbox-iframe ' + lightboxClassName + '" data-src="' + src + '"><div class="wLightboxBackground"></div><div class="wLightboxOuter"><div class="wLightboxInner"><div class="wLightboxCloser"></div><div class="' + classPrev + '"><span></span><span></span></div><div class="' + classNext + '"><span></span><span></span></div><iframe id="wLightboxIframe" class="wLightboxIframe" allowfullscreen="true" src="' + src + '"></iframe><div class="wLightboxTitle"></div></div></div></div>').appendTo('body');}jQuery('.wLightboxCloser, .wLightboxBackground').on('click', function(){wLightboxClose(event)});jQuery(document).on('keydown', function(event){if(event.keyCode==27){wLightboxClose(event);}else if(event.keyCode==37){jQuery(elementsRel[parseInt(jQuery('.wLightboxMoverBack').data('entry'))]).trigger('click');}else if(event.keyCode==39){jQuery(elementsRel[parseInt(jQuery('.wLightboxMoverForward').data('entry'))]).trigger('click');}});boxWasOpened=false;jQuery('.wLightbox').addClass('wLightboxStatusLoading');}else if(lightboxType!=jQuery('.wLightbox').data('type')){if(lightboxType=='inline'){options['content']=options['content']||'';jQuery('.wLightbox').data('type', lightboxType);jQuery('.wLightbox').data('src', src);jQuery('.wLightbox').attr('class', 'wLightbox wLightbox-' + options['type'] + ' ' + lightboxClassName);jQuery('.wLightbox').html('<div class="wLightboxBackground"></div><div class="wLightboxOuter"><div class="wLightboxInner" touchstart="event.preventDefault();" mousedown="event.preventDefault();"><div class="wLightboxCloser"></div>' + options['content'] + '<div class="wLightboxTitle"></div></div></div></div>');}else if(lightboxType=='image'){jQuery('.wLightbox').data('type', lightboxType);jQuery('.wLightbox').data('src', src);jQuery('.wLightbox').attr('class', 'wLightbox wLightbox-image ' + lightboxClassName);jQuery('.wLightbox').html('<div class="wLightboxBackground"></div><div class="wLightboxOuter"><div class="wLightboxInner"><div class="wLightboxCloser"><span></span><span></span></div><div class="' + classPrev + '"><span></span><span></span></div><div class="' + classNext + '"><span></span><span></span></div><div class="wLightboxImageOuter"><img class="wLightboxImage" src="' + src + '"/>' + (wLightboxVariants[options['variant']]['addCopyrightElement']&&options['copyrightText']?'<div class="wLightboxCopyright">' + options['copyrightText'] + '</div>':'') + '</div><div class="wLightboxFooter"><div class="wLightboxTitle">' + titleInnerHTML + '</div><div class="wLightboxDescription">' + titleInnerHTML + '</div></div></div></div></div>');}else if(lightboxType=='video'){var mimeTypeVideo='video/mp4';jQuery('.wLightbox').data('type', lightboxType);jQuery('.wLightbox').data('src', src);jQuery('.wLightbox').attr('class', 'wLightbox wLightbox-video ' + lightboxClassName);jQuery('.wLightbox').html('<div class="wLightboxBackground"></div><div class="wLightboxOuter"><div class="wLightboxInner" ontouchstart="event.preventDefault();" onmousedown="event.preventDefault();"><div class="wLightboxCloser"></div><div class="' + classPrev + '"><span></span><span></span></div><div class="' + classNext + '"><span></span><span></span></div><video controls="controls" autoplay="autoplay" style="max-width:100%;width:auto;height:auto;"><source src="' + src + '" type="' + mimeTypeVideo + '" /></video><div class="wLightboxFooter"><div class="wLightboxTitle">' + titleInnerHTML + '</div></div></div></div></div>');}else{jQuery('.wLightbox').data('type', lightboxType);jQuery('.wLightbox').data('src', src);jQuery('.wLightbox').attr('class', 'wLightbox wLightbox-iframe ' + lightboxClassName);jQuery('.wLightbox').html('<div class="wLightboxBackground"></div><div class="wLightboxOuter"><div class="wLightboxInner"><div class="wLightboxCloser"></div><div class="' + classPrev + '"><span></span><span></span></div><div class="' + classNext + '"><span></span><span></span></div><iframe id="wLightboxIframe" class="wLightboxIframe" allowfullscreen="true" src="' + src + '"></iframe><div class="wLightboxTitle"></div></div></div></div>');}boxWasOpened=false;jQuery('.wLightboxCloser, .wLightboxBackground').on('click', function(){wLightboxClose(event)});jQuery('.wLightbox').removeClass('wLightboxStatusLoaded').addClass('wLightboxStatusChanging').addClass('wLightboxStatusChanging');}else{jQuery('.wLightbox').removeClass('wLightboxStatusLoaded').addClass('wLightboxStatusChanging').addClass('wLightboxStatusChanging');}if(lightboxType=='inline'){if(options['type']=='ajax'){if(!options['width']){options['width']='content';}if(!options['height']){options['height']='content';}}var heightTitle=0;if(elementCurrent&&elementCurrent.getAttribute('title')&&elementCurrent.getAttribute('title')!=''){jQuery('.wLightboxTitle').show().html(elementCurrent.getAttribute('title'));}else{jQuery('.wLightboxTitle').hide();}heightTitle=jQuery('.wLightboxTitle').outerHeight();var maxWidthBox=(window.innerWidth?window.innerWidth:(document.documentElement?document.documentElement.offsetWidth:document.body.clientWidth))-(parseInt(jQuery('.wLightboxOuter').css('padding-left')) + parseInt(jQuery('.wLightboxInner').css('border-left-width'))) * 2;var maxHeightBox=(window.innerHeight?window.innerHeight:(document.documentElement?document.documentElement.offsetHeight:document.body.clientHeight))-(parseInt(jQuery('.wLightboxOuter').css('padding-top')) + parseInt(jQuery('.wLightboxInner').css('border-top-width'))) * 2-heightTitle;if(/^(\d+)px$/.test(options['width'])){maxWidthBox=parseInt(RegExp.$1);}else if(/^(\d+)%$/.test(options['width'])){maxWidthBox=parseInt(jQuery(window).width()) * RegExp.$1 / 100;}if(/^(\d+)px$/.test(options['height'])){maxHeightBox=parseInt(RegExp.$1);}else if(/^(\d+)%$/.test(options['height'])){maxHeightBox=parseInt(jQuery(window).height()) * RegExp.$1 / 100;}if(options&&options['width']&&/^\d+(.\d+)?$/.test(options['width'])){contentWidth=options['width'];}else{contentWidth=maxWidthBox;}if(options&&options['height']&&/^\d+(.\d+)?$/.test(options['height'])){contentHeight=options['height'];}else{contentHeight=maxHeightBox;}var pageRatio=maxWidthBox / maxHeightBox;var contentRatio=contentWidth / contentHeight;var lightboxWidth=contentWidth;var lightboxHeight=contentHeight + heightTitle;if(contentWidth > maxWidthBox||contentHeight > maxHeightBox){if(contentRatio > pageRatio){lightboxWidth=maxWidthBox;lightboxHeight=Math.round(maxWidthBox / contentRatio) + heightTitle;}else{lightboxWidth=Math.round(maxHeightBox * contentRatio);lightboxHeight=maxHeightBox + heightTitle;}}widthAttrib=String(lightboxWidth) + 'px';heightAttrib=String(lightboxHeight) + 'px';if(options['height']=='content'){jQuery('.wLightboxOuter').css({'max-height':'100%'});}else{jQuery('.wLightboxOuter').css({'height':heightAttrib});}if(options['width']=='content'){jQuery('.wLightboxInner').css({'max-width':'100%'});}else{jQuery('.wLightboxInner').css({'width':widthAttrib});}jQuery('.wLightboxPrev').data('entry', positionRel-2);jQuery('.wLightboxNext').data('entry', positionRel);if(boxWasOpened){jQuery('.wLightboxMoverBack').attr('class', classPrev);jQuery('.wLightboxMoverForward').attr('class', classNext);jQuery('.wLightbox').addClass('wLightboxStatusLoaded').removeClass('wLightboxStatusLoading');}else{jQuery('.wLightbox').addClass('wLightboxStatusLoaded').removeClass('wLightboxStatusLoading');jQuery('.wLightboxInner').on('click', function(event){event.stopPropagation();});jQuery('.wLightboxOuter, .wLightboxCloser').on('click', function(event){wLightboxClose(event);});jQuery('.wLightboxMoverBack, .wLightboxMoverForward').on('click', function(event){jQuery('.wLightbox').removeClass('wLightboxStatusLoaded').addClass('wLightboxStatusLoading');jQuery(elementsRel[jQuery(this).data('entry')]).trigger('click');event.stopPropagation();});}if(options['type']=='ajax'){jQuery.ajax({type:"GET", url:src, success:function(result){jQuery('.wLightboxCloser').after('<div class="wLightboxContent">' + result + '</div>');if(options['height']=='content'){jQuery('.wLightboxContent').css({'max-height':String(lightboxHeight) + 'px'});}}});}if(typeof(wOnAfterInitLightbox)=='function'){wOnAfterInitLightbox();}}else if(lightboxType=='image'){var image=new Image();image.onload=function(){if(false&&/\.(svg)$/i.test(srcOrig)){}else{var imageRatio=image.width / image.height;var lightboxWidth=image.width;var lightboxHeight=image.height;jQuery('.wLightboxInner').css({'width':'auto', 'height':'auto', 'max-height':'none'});var widthArea=jQuery('.wLightboxOuter').width();var heightArea=jQuery('.wLightboxOuter').height();if(/^(\d+)px$/.test(options['width'])){widthArea=widthArea < parseInt(RegExp.$1)?widthArea:parseInt(RegExp.$1);}else if(/^(\d+)%$/.test(options['width'])){widthArea=widthArea < parseInt(jQuery(window).width()) * RegExp.$1 / 100?widthArea:parseInt(jQuery(window).width()) * RegExp.$1 / 100;}var computedStyle=window.getComputedStyle(jQuery('.wLightboxInner').get(0));if(parseInt(computedStyle['max-width']) < widthArea){widthArea=parseInt(computedStyle['max-width']);}if(parseInt(computedStyle['max-height']) < heightArea){heightArea=parseInt(computedStyle['max-height']);}widthArea-=(jQuery('.wLightboxInner').outerWidth()-jQuery('.wLightboxInner').width());heightArea-=(jQuery('.wLightboxInner').outerHeight()-jQuery('.wLightboxInner').height());var areaRatio=widthArea / heightArea;if(elementCurrent&&elementCurrent.getAttribute('data-title')&&elementCurrent.getAttribute('data-title')!=''){jQuery('.wLightboxTitle').show().html(elementCurrent.getAttribute('data-title'));}else if(elementCurrent&&elementCurrent.getAttribute('title')&&elementCurrent.getAttribute('title')!=''){jQuery('.wLightboxTitle').show().html(elementCurrent.getAttribute('title'));}else{jQuery('.wLightboxTitle').hide();}if(elementCurrent&&elementCurrent.getAttribute('data-description')!=''){jQuery('.wLightboxDescription').show();var diffWidthDescription=parseInt(jQuery('.wLightboxInner').width()-jQuery('.wLightboxDescription').width());jQuery('.wLightboxDescription').css({'width':widthArea-diffWidthDescription, 'visibility':'hidden'}).show().html(elementCurrent.getAttribute('data-description'));}else{jQuery('.wLightboxDescription').hide();}if(objectCurrent&&objectCurrent.attr('data-lightboxdownloadable')=='1'){jQuery('.wLightboxDownload').remove();var srcDownload=src;if(objectCurrent.attr('data-srcdownload')){srcDownload=objectCurrent.attr('data-srcdownload');}jQuery('.wLightboxFooter').addClass('wLightboxFooterHasDownload').append('<div class="wLightboxDownload" data-src="' + srcDownload + '" title="Download"></div>');jQuery('.wLightboxDownload').on('click', function (event){window.open(jQuery(this).data('src'));});}else{jQuery('.wLightboxFooter').removeClass('wLightboxFooterHasDownload');}jQuery('.wLightboxDescription').css({'width':'', 'height':'', 'max-height':'', 'visibility':''});heightFooter=jQuery('.wLightboxFooter').outerHeight();diffHeight=jQuery('.wLightboxInner').outerHeight()-jQuery('.wLightboxInner').height();if(image.width > widthArea||image.height > heightArea){if(imageRatio > areaRatio){lightboxWidth=widthArea;lightboxHeight=Math.round(widthArea / imageRatio) + heightFooter;}else{lightboxWidth=Math.round((heightArea-heightFooter) * imageRatio);lightboxHeight=heightArea;}jQuery('.wLightboxInner').css({'width':String(lightboxWidth) + 'px', 'height':String(lightboxHeight) + 'px', 'max-height':String(lightboxHeight + diffHeight) + 'px'});}else{lightboxWidth=image.width;lightboxHeight=image.height + heightFooter;jQuery('.wLightboxInner').css({'width':String(lightboxWidth) + 'px', 'height':String(lightboxHeight) + 'px', 'max-height':String(lightboxHeight + diffHeight) + 'px'});}heightFooter=jQuery('.wLightboxFooter').outerHeight();var widthArea=jQuery('.wLightboxOuter').width();var heightArea=jQuery('.wLightboxOuter').height();if(/^(\d+)px$/.test(options['width'])){widthArea=widthArea < parseInt(RegExp.$1)?widthArea:parseInt(RegExp.$1);}else if(/^(\d+)%$/.test(options['width'])){widthArea=widthArea < parseInt(jQuery(window).width()) * RegExp.$1 / 100?widthArea:parseInt(jQuery(window).width()) * RegExp.$1 / 100;}var computedStyle=window.getComputedStyle(jQuery('.wLightboxInner').get(0));if(parseInt(computedStyle['max-width']) < widthArea){widthArea=parseInt(computedStyle['max-width']);}if(parseInt(computedStyle['max-height']) < heightArea){heightArea=parseInt(computedStyle['max-height']);}widthArea-=(jQuery('.wLightboxInner').outerWidth()-jQuery('.wLightboxInner').width());heightArea-=(jQuery('.wLightboxInner').outerHeight()-jQuery('.wLightboxInner').height());var areaRatio=widthArea / heightArea;if(image.width > widthArea||image.height > heightArea){if(imageRatio > areaRatio){lightboxWidth=widthArea;lightboxHeight=Math.round(widthArea / imageRatio) + heightFooter;}else{lightboxWidth=Math.round((heightArea-heightFooter) * imageRatio);lightboxHeight=heightArea;}jQuery('.wLightboxInner').css({'width':String(lightboxWidth) + 'px', 'height':String(lightboxHeight) + 'px', 'max-height':String(lightboxHeight + diffHeight) + 'px'});}else{lightboxHeight=image.height + heightFooter;}jQuery('.wLightboxMoverBack').data('entry', positionRel-2);jQuery('.wLightboxMoverForward').data('entry', positionRel);jQuery('.wLightboxInner').on('transitionend', function(event){if(jQuery('.wLightboxInner').data('transisionended')!='1'){jQuery('.wLightboxInner').data('transisionended', '1');heightFooter=jQuery('.wLightboxFooter').outerHeight();var widthArea=jQuery('.wLightboxOuter').width();var heightArea=jQuery('.wLightboxOuter').height();if(/^(\d+)px$/.test(options['width'])){widthArea=widthArea < parseInt(RegExp.$1)?widthArea:parseInt(RegExp.$1);}else if(/^(\d+)%$/.test(options['width'])){widthArea=widthArea < parseInt(jQuery(window).width()) * RegExp.$1 / 100?widthArea:parseInt(jQuery(window).width()) * RegExp.$1 / 100;}var computedStyle=window.getComputedStyle(jQuery('.wLightboxInner').get(0));if(parseInt(computedStyle['max-width']) < widthArea){widthArea=parseInt(computedStyle['max-width']);}if(parseInt(computedStyle['max-height']) < heightArea){heightArea=parseInt(computedStyle['max-height']);}widthArea-=(jQuery('.wLightboxInner').outerWidth()-jQuery('.wLightboxInner').width());heightArea-=(jQuery('.wLightboxInner').outerHeight()-jQuery('.wLightboxInner').height());var areaRatio=widthArea / heightArea;if(image.width > widthArea||image.height > heightArea){if(imageRatio > areaRatio){lightboxWidth=widthArea;lightboxHeight=Math.round(widthArea / imageRatio) + heightFooter;}else{lightboxWidth=Math.round((heightArea-heightFooter) * imageRatio);lightboxHeight=heightArea;}jQuery('.wLightboxInner').css({'width':String(lightboxWidth) + 'px', 'height':String(lightboxHeight) + 'px', 'max-height':String(lightboxHeight + diffHeight) + 'px'});}else{lightboxHeight=image.height + heightFooter;}}});}if(boxWasOpened){jQuery('.wLightboxMoverBack').attr('class', classPrev);jQuery('.wLightboxMoverForward').attr('class', classNext);jQuery('.wLightboxImage').attr('src', src);}else{jQuery('.wLightboxOuter, .wLightboxBackground').on('click', function(event){wLightboxClose(event);});jQuery('.wLightboxMoverBack, .wLightboxMoverForward').on('click', function(event){jQuery('.wLightbox').removeClass('wLightboxStatusLoaded').addClass('wLightboxStatusLoading');jQuery(elementsRel[jQuery(this).data('entry')]).trigger('click');event.stopPropagation();});}jQuery('.wLightbox').addClass('wLightboxStatusLoaded').removeClass('wLightboxStatusLoading').removeClass('wLightboxStatusChanging');if(typeof(wOnAfterInitLightbox)=='function'){wOnAfterInitLightbox();}};image.src=src;}else if(lightboxType=='video'){var videoWidth=0, videoHeight=0, videoRatio=0;if(elementCurrent&&elementCurrent.getAttribute('title')&&elementCurrent.getAttribute('title')!=''){jQuery('.wLightboxTitle').show().html(elementCurrent.getAttribute('title'));}else{jQuery('.wLightboxTitle').hide();}if(objectCurrent&&objectCurrent.attr('data-lightboxdownloadable')=='1'){jQuery('.wLightboxDownload').remove();jQuery('.wLightboxFooter').addClass('wLightboxFooterHasDownload').append('<div class="wLightboxDownload" data-src="' + src + '" title="Download"></div>');jQuery('.wLightboxDownload').on('click', function (event){window.open(jQuery(this).data('src'));});}else{jQuery('.wLightboxFooter').removeClass('wLightboxFooterHasDownload');}var heightFooter=jQuery('.wLightboxFooter').outerHeight();var maxWidthBox=(window.innerWidth?window.innerWidth:(document.documentElement?document.documentElement.offsetWidth:document.body.clientWidth))-(parseInt(jQuery('.wLightboxOuter').css('padding-left')) + parseInt(jQuery('.wLightboxInner').css('border-left-width'))) * 2;var maxHeightBox=(window.innerHeight?window.innerHeight:(document.documentElement?document.documentElement.offsetHeight:document.body.clientHeight))-(parseInt(jQuery('.wLightboxOuter').css('padding-top')) + parseInt(jQuery('.wLightboxInner').css('border-top-width'))) * 2-heightFooter;if(/^(\d+)px$/.test(options['width'])){maxWidthBox=parseInt(RegExp.$1);}else if(/^(\d+)%$/.test(options['width'])){maxWidthBox=parseInt(jQuery(window).width()) * RegExp.$1 / 100;}var pageRatio=maxWidthBox / maxHeightBox;if(boxWasOpened){jQuery('.wLightbox source').attr('src', src);jQuery('.wLightbox video').get(0).load();}jQuery('.wLightbox video').on('loadedmetadata', function(event){videoWidth=jQuery(this).get(0).videoWidth;videoHeight=jQuery(this).get(0).videoHeight;videoRatio=videoWidth / videoHeight;lightboxWidth=videoWidth;lightboxHeight=videoHeight;if(videoWidth > maxWidthBox||videoHeight > maxHeightBox){if(videoRatio > pageRatio){lightboxWidth=maxWidthBox;lightboxHeight=Math.round(maxWidthBox / videoRatio) + heightFooter;}else{lightboxWidth=Math.round(maxHeightBox * videoRatio);lightboxHeight=maxHeightBox + heightFooter;}}else{lightboxHeight=lightboxHeight + heightFooter;}widthAttrib=String(lightboxWidth)  + 'px';heightAttrib=String(lightboxHeight) + 'px';jQuery('.wLightboxInner').css({'height':heightAttrib});jQuery('.wLightboxInner').css({'width':widthAttrib});jQuery('.wLightboxMoverBack').data('entry', positionRel-2);jQuery('.wLightboxMoverForward').data('entry', positionRel);if(boxWasOpened){jQuery('.wLightboxMoverBack').attr('class', classPrev);jQuery('.wLightboxMoverForward').attr('class', classNext);jQuery('.wLightbox').addClass('wLightboxStatusLoaded').removeClass('wLightboxStatusLoading');}else{jQuery('.wLightbox').addClass('wLightboxStatusLoaded').removeClass('wLightboxStatusLoading');jQuery('.wLightboxOuter, .wLightboxBackground').on('click', function(event){wLightboxClose(event);});jQuery('.wLightboxMoverBack, .wLightboxMoverForward').on('click', function(event){console.log(elementsRel[jQuery(this).data('entry')]);jQuery('.wLightbox').removeClass('wLightboxStatusLoaded').addClass('wLightboxStatusLoading');jQuery(elementsRel[jQuery(this).data('entry')]).trigger('click');event.stopPropagation();});}});if(typeof(wOnAfterInitLightbox)=='function'){wOnAfterInitLightbox();}}else{var heightTitle=0;if(elementCurrent&&elementCurrent.getAttribute('title')!=''){jQuery('.wLightboxTitle').show().html(elementCurrent.getAttribute('title'));}else{jQuery('.wLightboxTitle').hide();}heightTitle=jQuery('.wLightboxTitle').outerHeight();var setSize=false;var maxWidthBox=(window.innerWidth?window.innerWidth:(document.documentElement?document.documentElement.offsetWidth:document.body.clientWidth))-(parseInt(jQuery('.wLightboxOuter').css('padding-left')) + parseInt(jQuery('.wLightboxInner').css('border-left-width'))) * 2;var maxHeightBox=(window.innerHeight?window.innerHeight:(document.documentElement?document.documentElement.offsetHeight:document.body.clientHeight))-(parseInt(jQuery('.wLightboxOuter').css('padding-top')) + parseInt(jQuery('.wLightboxInner').css('border-top-width'))) * 2-heightTitle;if(/^(\d+)px$/.test(options['width'])){maxWidthBox=parseInt(RegExp.$1);setSize=true;}else if(/^(\d+)%$/.test(options['width'])){maxWidthBox=parseInt(jQuery(window).width()) * RegExp.$1 / 100;setSize=true;}if(/^(\d+)px$/.test(options['height'])){maxHeightBox=parseInt(RegExp.$1);setSize=true;}else if(/^(\d+)%$/.test(options['height'])){maxHeightBox=parseInt(jQuery(window).height()) * RegExp.$1 / 100;setSize=true;}if(options['width']&&/^\d+(.\d+)?$/.test(options['width'])){contentWidth=options['width'];setSize=true;}else{contentWidth=maxWidthBox;}if(options['height']&&/^\d+(.\d+)?$/.test(options['height'])){contentHeight=options['height'];setSize=true;}else{contentHeight=maxHeightBox;}if(setSize){var pageRatio=maxWidthBox / maxHeightBox;var contentRatio=contentWidth / contentHeight;var lightboxWidth=contentWidth;var lightboxHeight=contentHeight + heightTitle;if(contentWidth > maxWidthBox||contentHeight > maxHeightBox){if(contentRatio > pageRatio){lightboxWidth=maxWidthBox;lightboxHeight=Math.round(maxWidthBox / contentRatio) + heightTitle;}else{lightboxWidth=Math.round(maxHeightBox * contentRatio);lightboxHeight=maxHeightBox + heightTitle;}}widthAttrib=String(lightboxWidth) + 'px';heightAttrib=String(lightboxHeight) + 'px';jQuery('.wLightboxInner').css({'height':heightAttrib});jQuery('.wLightboxInner').css({'width':widthAttrib});}jQuery('.wLightboxMoverBack').data('entry', positionRel-2);jQuery('.wLightboxMoverForward').data('entry', positionRel);if(boxWasOpened){jQuery('.wLightboxMoverBack').attr('class', classPrev);jQuery('.wLightboxMoverForward').attr('class', classNext);jQuery('.wLightboxIframe').attr('src', src);}else{jQuery('.wLightboxOuter, .wLightboxBackground').on('click', function(event){wLightboxClose(event);});jQuery('.wLightboxMoverBack, .wLightboxMoverForward').on('click', function(event){jQuery('.wLightbox').removeClass('wLightboxStatusLoaded').addClass('wLightboxStatusLoading');jQuery(elementsRel[jQuery(this).data('entry')]).trigger('click');event.stopPropagation();});}jQuery('.wLightbox').addClass('wLightboxStatusLoaded').removeClass('wLightboxStatusLoading').removeClass('wLightboxStatusChanging');if(typeof(wOnAfterInitLightbox)=='function'){wOnAfterInitLightbox();}}jQuery('html').addClass('wglBox');jQuery('body').addClass('wglBox');return false;};wLightboxClose=function(closer){if(typeof(wOnBeforeCloseLightbox)=='function'){if(wOnBeforeCloseLightbox(closer)==false) {return;}}jQuery('.wLightbox').remove();jQuery('html').removeClass('wglBox');jQuery('body').removeClass('wglBox');jQuery(document).off('keydown');if(typeof(wOnAfterCloseLightbox)=='function'){wOnAfterCloseLightbox(closer);}};wStartReadingText=function(element, readerPanelEmbed){var tmp='';if(readerPanelEmbed&&readerPanelEmbed.className.indexOf('wReaderPanelEmbed')!=-1){readerPanelEmbed.className='wReaderPanelEmbed isReading';}var elementToRead=element;var textOfElementToRead=elementToRead.innerText;if(true){var elementsToReadAll=elementToRead.querySelectorAll('*');for(var i=elementsToReadAll.length-1; i >=0; i--){tmp=elementsToReadAll[i];if(!(tmp.offsetWidth||tmp.offsetHeight||tmp.getClientRects().length)){tmp.setAttribute('data-ignoreinreader', '1');}}elementToRead=elementToRead.cloneNode(true);elementsToReadAll=elementToRead.querySelectorAll('*');for(var i=elementsToReadAll.length-1; i >=0; i--){tmp=elementsToReadAll[i];if(tmp.getAttribute('data-ignoreinreader')=='1'){tmp.parentNode.removeChild(tmp);}}textOfElementToRead=elementToRead.innerHTML;tmp='';var strArray=textOfElementToRead.split(/<script[^>]*>/);for(var i=0; i < strArray.length; i++){strArray[i]=strArray[i].replace(/[\s\S]*<\/script[^>]*>/m, '');tmp +=strArray[i];}textOfElementToRead=tmp;textOfElementToRead=textOfElementToRead.replace(/<img[^>]*alt="([^"]+)"[^>]*>/gi, "<p>\n$1\n</p>");textOfElementToRead=textOfElementToRead.replace(/\n/gi, " ");textOfElementToRead=textOfElementToRead.replace(/&(nbsp|lt|gt|amp|quot|apos);/gi, " ");textOfElementToRead=textOfElementToRead.replace(/ +/gi, " ");textOfElementToRead=textOfElementToRead.replace(/<\/p>/gi, "\n\n");textOfElementToRead=textOfElementToRead.replace(/(<div[^>]*class="element)/gi, "\n$1");textOfElementToRead=textOfElementToRead.replace(/<\/div>/gi, "\n");textOfElementToRead=textOfElementToRead.replace(/<[^>]*>/g, " ");textOfElementToRead=textOfElementToRead.replace(/ +/gi, " ");textOfElementToRead=textOfElementToRead.replace(/\n\s+\n/gi, "\n\n");textOfElementToRead=textOfElementToRead.replace(/\n +/gi, "\n");}var textToRead=(elementToRead.getAttribute('data-readertextpre')?elementToRead.getAttribute('data-readertextpre'):'') + textOfElementToRead;if(window.speechSynthesis){if(!window.speechSynthesis.speaking){var textToSpeak=new SpeechSynthesisUtterance(textToRead);var documentLang=document.documentElement.lang;if(documentLang!=''){documentLang=/^\w+$/.test(documentLang)?documentLang + '-' + documentLang:documentLang.toLowerCase();documentLang=documentLang.replace('en-en', 'en-us');var synth=window.speechSynthesis;var voices=synth.getVoices();for(var i=0; i < voices.length; i++){if(documentLang==voices[i].lang.toLowerCase()){textToSpeak.lang=voices[i].lang;break;}}}window.speechSynthesis.speak(textToSpeak);}else if(window.speechSynthesis.paused){window.speechSynthesis.resume();}}};wPauseReadingText=function(element, readerPanelEmbed){if(readerPanelEmbed&&readerPanelEmbed.className.indexOf('wReaderPanelEmbed')!=-1){readerPanelEmbed.className='wReaderPanelEmbed';}window.speechSynthesis.pause();};wStopReadingText=function(element, readerPanelEmbed){if(readerPanelEmbed&&readerPanelEmbed.className.indexOf('wReaderPanelEmbed')!=-1){readerPanelEmbed.className='wReaderPanelEmbed';}if(window.speechSynthesis.speaking){window.speechSynthesis.cancel();}};var rwids={};jQuery(window).on('load', function(){if(typeof(wBrowseEditMode)=='undefined'){var elementSizesStr='';var simulationWidth=0;var winWidth=window.innerWidth?window.innerWidth:document.body.clientWidth;jQuery('*[data-htgr="1"]').each(function(){var i, sources=[], url='', pathCSS='', cssTags=null, minWidthMedia=0, minHeight='', element=jQuery(this).get(0), rwid='', elementWidth=0, elementHeight=0, pictureRatio=0, outerElement=null, outerWidth=0;try{rwid=element.getAttribute('data-rwid');if(!rwids[rwid]){rwids[rwid]=true;sources=element.getElementsByTagName('source');for(i=0; i < sources.length; i++){if(sources[i].getAttribute('data-sp')&&/min-width\:\s*(\d+)px/.test(sources[i].getAttribute('media'))){minWidthMedia=RegExp.$1;if(winWidth >=minWidthMedia){simulationWidth=sources[i].getAttribute('data-sp');document.documentElement.style.maxWidth='none';document.documentElement.style.width=String(simulationWidth) + 'px';if(element.nodeName=='PICTURE'){elementWidth=(element.getElementsByTagName('img'))[0].offsetWidth;elementHeight=(element.getElementsByTagName('img'))[0].offsetHeight;outerElement=element.parentNode;if((element.getElementsByTagName('img'))[0].currentSrc){if(document.defaultView.getComputedStyle((element.getElementsByTagName('img'))[0], null).getPropertyValue('object-fit')=='cover'){minHeight=elementHeight;}}}else{elementWidth=element.offsetWidth;elementHeight=element.offsetHeight;outerElement=element.parentNode.parentNode;}if(outerElement.offsetWidth > elementWidth){pictureRatio=elementWidth / elementHeight;elementWidth=outerElement.offsetWidth;elementHeight=elementWidth / pictureRatio;}if(elementWidth > 0&&elementHeight > 0){elementSizesStr +=(elementSizesStr==''?'':';') + rwid + ':w' + elementWidth + ',h' + elementHeight + (minHeight!=''&&!isNaN(minHeight)?',mh' + minHeight:'');document.documentElement.style.maxWidth='';document.documentElement.style.width='';document.documentElement.style.maxWidth='';document.documentElement.style.width='';return;}document.documentElement.style.maxWidth='';document.documentElement.style.width='';}}}}}catch(e){document.documentElement.style.maxWidth='';document.documentElement.style.width='';}});if(elementSizesStr!=''){cssTags=jQuery("link[href*='/optimized/']");if(cssTags.length > 0){pathCSS=cssTags.get(0).getAttribute('href').replace(/\/optimized\/.*/, '') + '/design.css';var variantCSS=jQuery('picture[data-htgr="1"]').attr('data-csn');if(variantCSS&&/^\w+$/.test(variantCSS)){pathCSS=pathCSS.replace(/\.css$/, '_var' + variantCSS + '.css');}url='/jobs/weblication/grid5/scripts/wImage.php?path=' + pathCSS + '&referrer=' + encodeURIComponent(location.href.replace(/[\?\&]createImageRaster=1/, '')) + '&action=feedbackImageSizes&sw=' + simulationWidth + '&vw=' + winWidth + '&sizes=' + elementSizesStr;jQuery.ajax({type:"GET", url:url, dataType:'json', success:function(resultData){}});}}}});
/*
////////////////////////////////////////////////////////////////
//
// Allgemeine JavaScript Funktionen
//
// Weblication CMS BASE
// erstellt durch Scholl Communications AG, 77694 Kehl, www.scholl.de
// erstellt mit Weblication Content Management Server, www.weblication.de
//
////////////////////////////////////////////////////////////////
*/

wAllowMinimize=true;wLightboxVariants={};wLightboxVariants['box']={'class':'default', 'postfix':'viewmode=blank&linkback=no'};wLightboxVariants['boxPicture']={'class':'image', 'scrollIfToHeight':false};wLightboxVariants['boxVideo']={'class':'video'};wLightboxVariants['boxYoutube']={'class':'youtube'};wLightboxVariants['boxContent']={'class':'content', 'postfix':'viewmode=blank&linkback=no'};wLightboxVariants['boxForm']={'class':'form', 'postfix':'viewmode=blank&linkback=no'};wLightboxVariants['boxCard']={'class':'card', 'postfix':'viewmode=blank&linkback=no'};wChangeScrollstatusOnAutoscrolling=false;wScrollSmoothToElementForceScroll=false;wResetConditionalFormdataOnHide=true;wKeepNavigationSectionsIfNoTitle=true;wHightlightBlockRoot='blockContentInner';var resize=0;var wrapperPositioned=0;var leftOffset=0;var offsetWrapper=0;var offsetSearchlayer=0;var offsetLoginlayer=0;timeoutAjax=4000;jQuery(document).ready(function(){if(typeof(wInitBrowseEdit)=='function'){wInitBrowseEdit();}if(typeof(wEditor)=='undefined'){if(!jQuery('html').hasClass('isInLightbox')){jQuery("a.box, a.boxOnly, a.boxPicture, a.boxPictureOnly, a.boxVideo, a.boxVideoOnly, a[target='wLightbox'], a[target='box'], a[target='boxContent'], a[target='boxForm'], a[target='boxCard'], a[target='boxPicture'], a[target='boxVideo']").wLightbox();}else{jQuery("a.box, a.boxOnly, a.boxPicture, a.boxPictureOnly, a.boxVideo, a.boxVideoOnly, a[target='wLightbox'], a[target='box'], a[target='boxContent'], a[target='boxForm'], a[target='boxCard'], a[target='boxPicture'], a[target='boxVideo']").attr('target', '_self').wSetViewmode('blank');}if(typeof(ga)!='undefined'){jQuery("a.pdf, a.download").wAddAnalytics();}if(typeof(wEditor)!='undefined'||document.cookie.indexOf('hideCookieNotice=1')!=-1){}else{jQuery('html').addClass("cookienotice");}}if(setTracking==1&&pathCur.match(/\/technology\/ueberblick\//)){jQuery('body').click(function(e){ttd_dom_ready( function() {if (typeof TTDUniversalPixelApi==='function') {console.log("click");var universalPixelApi=new TTDUniversalPixelApi();universalPixelApi.init("qjco6ge", ["mvr9wkx"], "https://insight.adsrvr.org/track/up");}});});jQuery('.elementVideoExternal iframe').iframeTracker(function(event) {ttd_dom_ready( function() {if (typeof TTDUniversalPixelApi==='function') {console.log("clickIframe");var universalPixelApi=new TTDUniversalPixelApi();universalPixelApi.init("qjco6ge", ["mvr9wkx"], "https://insight.adsrvr.org/track/up");}});});}jQuery('#btnChatbot').click(function(e){e.preventDefault();if(jQuery(this).attr('data-status')=='init'){jQuery('.chatbotContainer').addClass('loading');jQuery.getScript( "https://cdn.botframework.com/botframework-webchat/master/webchat-es5.js", function( data, textStatus, jqxhr ) {var store=window.WebChat.createStore({}, function (_ref) {var dispatch=_ref.dispatch;return function (next) {return function (action) {if (action.type==='DIRECT_LINE/CONNECT_FULFILLED') {dispatch({type:'WEB_CHAT/SEND_EVENT',payload:{name:'webchat/join',value:{language:window.navigator.language
}}});}return next(action);};};});window.WebChat.renderWebChat({directLine:window.WebChat.createDirectLine({token:'Rz9lm24B-oI.cBL5y1jkbZlnyx4vhHUdTbS59a6VuMfdz8FWgbF5g_w'
}),store:store,locale:'de-DE',styleOptions:{rootHeight:'100%',hideUploadButton:true,primaryFont:"'OTTOSans', Arial, sans-serif",bubbleBackground:'#D2001E',bubbleBorderColor:'#D2001E',bubbleBorderStyle:'none',bubbleBorderWidth:0,bubbleBorderRadius:20,bubbleTextColor:'#FFFFFF',bubbleFromUserBackground:'#F2F2F2',bubbleFromUserBorderColor:'#F2F2F2',bubbleFromUserBorderRadius:20,bubbleFromUserBorderWidth:0,bubbleFromUserTextColor:'#202020',bubbleMaxWidth:250
}},document.getElementById('webchat')
);document.querySelector('#webchat > *').focus();jQuery('.chatbotContainer').toggleClass('active');jQuery('.chatbotContainer').removeClass('loading');jQuery('#btnChatbot').attr('data-status', '');});}else{jQuery('.chatbotContainer').toggleClass('active');jQuery('.chatbotContainer').removeClass('loading');}});jQuery('#chatbotClose').click(function(e){jQuery('.chatbotContainer').toggleClass('active');jQuery('.chatbotContainer').removeClass('loading');});$(function() {var $el=$('html:not(.touch) > body');var $elTouch=$('html.touch > body');$(window).on('scroll', function () {if ($(document).scrollTop() > 50) {var scroll=$(document).scrollTop()-50;var scrollTouch=$(document).scrollTop() + 50;$el.css({'background-position':'0 '+(-.8*scroll)+'px'
});$elTouch.css({'background-attachment':'local','background-position':'0 '+(+.4*scroll)+'px'
});}if ($(document).scrollTop() < 50) {$el.css({'background-position':'0 0'
});$elTouch.css({'background-attachment':'scroll','background-position':'0 0'
});}});})
if(jQuery(".elementForm_var0 form select").length){jQuery(".elementForm_var0 form select").select2({minimumResultsForSearch:-1
});}resize=0;resizeSearchLayer();positionWrapper();jQuery('#formLogin').submit(function(e) {e.preventDefault();var email=jQuery(this).find('#email').val();var password=jQuery(this).find('#password').val();document.cookie="testcookie=1";var cookieEnabled=(document.cookie.indexOf("testcookie")!=-1)?true:false;if(!cookieEnabled||navigator.cookieEnabled!=true) {jQuery('#formFailure').children().hide();jQuery('#formFailure').children('.failureCookie').show();jQuery('#formFailure').fadeIn();jQuery('#formLogin input').addClass('wglIsInvalid');}else{wsLogin(function(statusLoginWs){if(statusLoginWs.status=='S'){var redirectPath=pathRoot + wProjectPath + '/login/index.php?status=p&username='+encodeURIComponent(email)+'&failure=system';location.href=redirectPath;}else if(statusLoginWs.status!=1){jQuery('#formFailure').children().hide();jQuery('#formFailure').children('.failure'+statusLoginWs.status).show();jQuery('#formFailure').fadeIn();jQuery('#formLogin input').addClass('wglIsInvalid');}else{location.href=statusLoginWs.redirect;}}, email, password, 'page');}});jQuery('a.show').click(function(e){e.preventDefault();var input=jQuery(this).parent().next().find('input');togglePasswordVisibility(input);});$(document).click(function(e){$('.elementLinkShare > a').next('.smIcons').hide();});$('.elementLinkShare > a').click(function(e){e.stopPropagation();$(this).next('.smIcons').toggle();});$('#elementEditProfileImportInfo').click(function(e){});$('#elementEditProfileImportInfo').bind({mouseenter:function(e) {$('#elementEditProfileImportInfolayer').show();},mouseleave:function(e) {$('#elementEditProfileImportInfolayer').hide();}});if( $('#imageProfile').length ) {resizeProfileLayer();}if( $('#loginProfile').length ) {resizeLoginLayer();}$('.searchBoxContainer').on("mouseenter", function() {$('#navLayerAux').stop().fadeTo(120, 1);$('#searchBox').addClass('focused');$('#searchBox .searchBoxElement').stop().fadeTo(110, 1);resizeSearchLayer();});$('.searchBoxContainer').on("mouseleave", function() {$('#searchBox').removeClass('focused');$('#searchBox .searchBoxElement').stop().fadeTo(110, 0, function() {$(this).hide();});$('#navLayerAux').stop().fadeTo(120, 0, function() {$(this).hide();});});$('#searchBox .searchBoxLabel .closeLayer').on("mouseenter", function() {});$('#elementSearchSelect').bind({mouseleave:function(e) {e.stopPropagation();}});$('#blockMain').bind({mouseenter:function(e) {$('#searchBox').removeClass('focused');jQuery('html').removeClass('navActive headerActive');}});$('#linkProfile').bind({mouseenter:function(e) {resizeProfileLayer();jQuery('#searchBox').removeClass('focused');jQuery('#searchBox .searchBoxElement').stop().fadeTo(110, 0, function() {$(this).hide();});}});$('#loginProfile').bind({mouseenter:function(e) {resizeLoginLayer();jQuery('#searchBox').removeClass('focused');jQuery('#searchBox .searchBoxElement').stop().fadeTo(110, 0, function() {$(this).hide();});}});$(window).on('touchstart', function(e){if ($('#layerLoginProfile').css('visibility')=='visible'&&e.target.id!='loginProfile'&&$(e.target).parents('#loginProfile').length==0) {jQuery('#layerLoginProfile').css('visibility', 'hidden');jQuery('#layerLoginProfile #layerLoginProfileInner').css('visibility', 'hidden');jQuery('html').removeClass('navActive');jQuery('#navLayerAux').stop().delay(120).fadeTo(120,0, function() {$(this).hide();});}if ($('#layerProfile').css('visibility')=='visible'&&e.target.id!='layerProfile'&&e.target.id!='imageProfile'&&$(e.target).parents('#imageProfile').length==0) {jQuery('#layerProfile').css('visibility', 'hidden');jQuery('#layerProfile #layerProfileInner').css('visibility', 'hidden');jQuery('html').removeClass('navActive');jQuery('#navLayerAux').stop().delay(120).fadeTo(120,0, function() {$(this).hide();});}});$('#loginProfile').on('touchstart', function(e){jQuery('#layerLoginProfile').css('visibility', 'visible');jQuery('#layerLoginProfile #layerLoginProfileInner').css('visibility', 'visible');jQuery('html').addClass('navActive');jQuery('#navLayerAux').stop().fadeTo(120,1);});$('#imageProfile').on('touchstart', function(e){jQuery('#layerProfile').css('visibility', 'visible');jQuery('#layerProfile #layerProfileInner').css('visibility', 'visible');jQuery('html').addClass('navActive');jQuery('#navLayerAux').stop().fadeTo(120,1);});$("#loginProfile").bind({mouseenter:function(e) {jQuery('#navLayerAux').stop().fadeTo(120,1);},mouseleave:function(e) {jQuery('#navLayerAux').stop().fadeTo(120,0, function() {$(this).hide();});}});$('#imageProfile').bind({mouseenter:function(e) {jQuery('#navLayerAux').stop().fadeTo(120,1);},mouseleave:function(e) {jQuery('#navLayerAux').stop().fadeTo(120,0, function() {$(this).hide();});}});$("html.no-touch #blockHeader").hover(function( event ) {jQuery('html').toggleClass('navActive');jQuery('html').toggleClass('headerActive');});$("html.no-touch #blockHeader").mouseleave(function( event ) {jQuery('html').removeClass('navActive');jQuery('html').removeClass('headerActive');});$("html.no-touch #blockHeader").mousemove(function( event ) {jQuery('html').addClass('navActive');jQuery('html').addClass('headerActive');});jQuery('#frmSearch, #frmSearchNav').submit(function(e){e.preventDefault();var type=jQuery(this).find('.elementSearchSelect > select option:selected').val();var valueSearch=jQuery(this).find('input.searchTerm').val();if(type=='infos'){var linkSearch=jQuery(this).data('pathfulltext') + '?searchTerm=' + encodeURIComponent(valueSearch);location.href=linkSearch;}else{var valueSearchEncode=encodeURIComponent(valueSearch);var linkSearch=jQuery(this).data('pathjobsearch') + valueSearchEncode + '/index.php';jQuery(this).find('input, button').attr("disabled", true);wsJobsResetFilter(function(){wsJobsSetText(function(){wsJobsCreateHash(function(hash){jQuery.ajax({url:"/jobs/wLayout-karriere/wGlobal/scripts/php/search/hashUrl.php",data:"type=set&path="+valueSearchEncode+"&hash="+hash,success:function(res){location.href=linkSearch;}});});}, valueSearch);});}})
jQuery('#jobsearchStartButton').click(function(e){e.preventDefault();jQuery(this).attr("disabled", true);jQuery('#jobsearchStartInput').attr("disabled", true);var valueSearch=jQuery('#jobsearchStartInput').val();var valueSearchEncode=encodeURIComponent(valueSearch);var valueSearchEncodeUrl='/' + encodeURIComponent(valueSearch);var linkSearch=jQuery(this).closest('.jobsearchStart').data('dirjobsearch') + valueSearchEncodeUrl + '/index.php';jQuery(this).addClass('clicked').next('.loader').show();wsJobsResetFilter(function(){var dataInit={ConsumerId:"'"+consumerId+"'", hash:"''", langu:"'D'", mediumId:"'"+mediumWebservice+"'", sttag:"'20160223'"};wsJobsCreate(function(){wsJobsSetText(function(){wsJobsCreateHash(function(hash){jQuery.ajax({url:"/jobs/wLayout-karriere/wGlobal/scripts/php/search/hashUrl.php",data:"type=set&path="+valueSearchEncodeUrl+"&hash="+hash,success:function(res){location.href=linkSearch;}});});}, valueSearch);}, dataInit);});});jQuery('#jobsearchStartInput').keyup(function(e){if(e.keyCode==13){jQuery('#jobsearchStartButton').trigger('click');}});$(document).on('DOMNodeInserted', function(e) {if ( $(e.target).hasClass('select2-container') ) {$('.select2-container--default .select2-results > .select2-results__options').on('scroll', function() {if($(this).scrollTop() + $(this).innerHeight() >=$(this)[0].scrollHeight) {$(this).parent().parent().removeClass('overflow');}else {$(this).parent().parent().addClass('overflow');}});}});adjust_container_element_height();});positionWrapper=function(options) {$('.ulWrapperL1').each(function( index ) {$(this).css('width', $('body').innerWidth());$(this).css("left", 0);offsetWrapper=leftOffset-$(this).offset().left;$(this).css("left", offsetWrapper);});};resizeSearchLayer=function(options){jQuery('#searchBox .searchBoxElement').css("width", $("body").innerWidth());jQuery('#searchBox .searchBoxElement').css("left", 0);offsetWrapper=leftOffset-jQuery('#searchBox .searchBoxElement').offset().left;jQuery('#searchBox .searchBoxElement').css("left", offsetWrapper);};resizeLoginLayer=function(options){jQuery('#layerLoginProfile').css("width", $("body").innerWidth());jQuery('#layerLoginProfile').css("left", 0);offsetWrapper=leftOffset-jQuery('#layerLoginProfile').offset().left;jQuery('#layerLoginProfile').css("left", offsetWrapper);};resizeProfileLayer=function(options){jQuery('#layerProfile').css("width", $("body").innerWidth());jQuery('#layerProfile').css("left", 0);offsetWrapper=leftOffset-jQuery('#layerProfile').offset().left;jQuery('#layerProfile').css("left", offsetWrapper);};var headerActive=0;activateHeader=function(options){headerActive=1;$(".isDesktop #blockHeader #blockHeaderMain #navigationMain > nav > ul").on("mouseenter mousemove", function() {positionWrapper();jQuery('html').addClass('navActive headerActive');jQuery('#navLayerAux').stop().fadeTo(120, 1);jQuery('#searchBox').removeClass('focused');jQuery('#searchBox .searchBoxElement').stop().fadeOut(110);});$(".isDesktop #blockHeader #blockHeaderMain #navigationMain > nav > ul").on("mouseleave", function() {jQuery('html').removeClass('navActive headerActive');jQuery('#navLayerAux').stop().fadeTo(120, 0, function() {$(this).hide();});});$(".isDesktop #blockHeader #blockHeaderMain #navigationMain > nav > ul > li").on("mouseenter mousemove", function() {jQuery(this).find('.ulWrapperL1').css({'visibility':'visible'});jQuery(this).find('.ulWrapperL1').stop().fadeTo(110, 1);jQuery(this).find('.ulWrapperL1Inner > *').css({'visibility':'visible'});});$(".isDesktop #blockHeader #blockHeaderMain #navigationMain > nav > ul > li").on("mouseleave", function() {jQuery(this).find('.ulWrapperL1').stop().fadeTo(110, 0, function() {jQuery(this).css({'visibility':'hidden'});jQuery(this).find('.ulWrapperL1Inner > *').css({'visibility':'hidden'});});});};deActivateHeader=function(options){headerActive=0;};function setUserDataProfile(userdata){var email=userdata.Email;jQuery('#profileEditEmail').text(email);}function togglePasswordVisibility(input){if (input.attr("type")=="password") {input.attr("type", "text");} else {input.attr("type", "password");}}function adjust_container_element_height(){$('.listBannerSlider_var160').each(function(){var $slider=$(this).find('.listInner .listEntries');var $entries=$(this).find('.listEntries .listEntry');var tallestEntry=0;$slider.removeAttr("style");$entries.each(function () {var ph=$(this).height();if (ph > tallestEntry){tallestEntry=ph;}});if($(window).width() < 992)  {$slider.height(tallestEntry);}else {$slider.removeAttr("style");}});}getOffsetTopFixed=function(options){options=options||{};var offsetTopFixed=0;if(jQuery('#blockHeader').length > 0&&jQuery('#blockHeader').css('position')=='fixed'){offsetTopFixed=jQuery('#blockHeader').height() + jQuery('#blockHeader').offset().top-jQuery(window).scrollTop();}if(options['considerWglContainerInsideTopOnScroll']!==false){jQuery('.wglContainerInsideTopOnScroll').each(function(){offsetTopFixed +=jQuery(this).height();});}return offsetTopFixed;};jQuery(window).on('load', function(){});jQuery(window).on('resize', function(){if( $('#imageProfile').length ) {resizeProfileLayer();}if( $('#loginProfile').length ) {resizeLoginLayer();}positionWrapper();$('.tabsOuter.breakChildren').parent(':not(.breakChildrenTabContainer)').addClass('breakChildrenTabContainer');$('.tabsOuter:not(.breakChildren)').parent('.breakChildrenTabContainer').removeClass('breakChildrenTabContainer');adjust_container_element_height();});jQuery(window).on('scroll', function(){});wOnAfterSelectListEntryBannerSlider=function(listId){};wOnBeforeClickAccordeon=function(headerClicked){};wOnAfterClickAccordeon=function(headerClicked){};wOnBeforeClickTabcontainer=function(headerClicked){};wOnAfterClickTabcontainer=function(headerClicked){};wOnAfterInitLightbox=function(){};function scrollToAnchor(aid){var aTag=$("a[name='"+ aid +"']");$('html,body').animate({scrollTop:aTag.offset().top},'slow');}function textAreaAdjust(e) {if(e.scrollHeight < 150){e.style.height="1px";e.style.height=(e.scrollHeight)+"px";}}$('.listPictureGallery_var10000 .listEntriesPreview .listEntry ').click(function(e){stopVideo('.listPictureGallery_var10000');});$('.listPictureGallery_var10000 .listEntryYoutube').parent().prev('.listEntryImage').addClass('hidden');$('.listPictureGallery_var10000 .listEntryYoutube .elementVideo').each(function(){$(this).parent().parent().prev('.listEntryImage').prepend(this);});function declineCookie(){document.cookie='declineCookie=1;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT';document.cookie='hideCookieNotice=1;path=/;expires=Fri, 31 Dec 9999 23:59:59 GMT';document.cookie='disableGoogleAnalytics=1; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';if(window['gaId']){window['ga-disable-' + window['gaId']]=true;}else if(typeof(gaOptout)!='undefined'){document.cookie=disableStr + '=true; expires=Thu, 31 Dec 2099 23:59:59 UTC; path=/';window[disableStr]=true;}}function stopVideo(el) {$(el + " iframe").each(function() {var src=$(this).attr('src');$(this).attr('src',src);});};mediaquery_viewport_xs_min_onactivate=function(){};mediaquery_viewport_xs_min_ondeactivate=function(){};mediaquery_viewport_xs_max_onactivate=function(){};mediaquery_viewport_xs_max_ondeactivate=function(){};mediaquery_viewport_s_min_onactivate=function(){};mediaquery_viewport_s_min_ondeactivate=function(){};mediaquery_viewport_s_max_onactivate=function(){if(jQuery('.footerNavigationToggler').hasClass('open')){jQuery('.footerNavigationToggler').toggleClass('open');}jQuery('.footerNavigationToggler').parent().next('.firstLevel').css({'display':'none'});jQuery('.submapNavigationToggler').parent().next('.firstLevel').css({'display':'none'});};mediaquery_viewport_s_max_ondeactivate=function(){jQuery('.footerNavigationToggler').parent().next('.firstLevel').css({'display':'block'});jQuery('.submapNavigationToggler').parent().next('.firstLevel').css({'display':'block'});};mediaquery_viewport_m_min_onactivate=function(){};mediaquery_viewport_m_min_ondeactivate=function(){};mediaquery_viewport_m_max_onactivate=function(){jQuery('#blockContentInner .navigationAccountContent').css({'display':'none'});if(jQuery('.navigationAccountNavigationOpener').hasClass('open')){jQuery('.navigationAccountNavigationOpener').toggleClass('open');}jQuery('#listApRight li:first-child').prependTo('#listAp');};mediaquery_viewport_m_max_ondeactivate=function(){jQuery('#blockContentInner .navigationAccountContent').css({'display':'block'});jQuery('#listAp li:first-child').prependTo('#listApRight');};mediaquery_viewport_l_min_onactivate=function(){};mediaquery_viewport_l_min_ondeactivate=function(){};mediaquery_viewport_l_max_onactivate=function(){};mediaquery_viewport_l_max_ondeactivate=function(){};mediaquery_viewport_xl_min_onactivate=function(){console.log('mediaquery_viewport_xl_min_onactivate');jQuery('html').addClass('isDesktop');activateHeader();};mediaquery_viewport_xl_min_ondeactivate=function(){console.log('mediaquery_viewport_xl_min_ondeactivate');$(".isDesktop #blockHeader #blockHeaderMain #navigationMain > nav > ul").off('mouseenter mousemove mouseleave');$(".isDesktop #blockHeader #blockHeaderMain #navigationMain > nav > ul > li").off('mouseenter mousemove mouseleave');jQuery('html').removeClass('isDesktop');deActivateHeader();};mediaquery_viewport_xl_max_onactivate=function(){};mediaquery_viewport_xl_max_ondeactivate=function(){};

// Session-Abgleich -> Alternative zu Server2Server-Kommunikation
jQuery(document).ready(function(){
  userFirstname = '';
  userLastname = '';
  userEmail = '';
  isTalent = '';
  talentType = '';
	var loginSap = loginWeblication = false;
	var userEdit = jQuery('body').hasClass('userEdit');
	var curDomain = window.location.href;
	if (curDomain.match(/otto\.de\/jobs\//g)) {
    jQuery.ajax({
	    url: pathWebservice + '/OR2_PROFILE_SRV/ProfileSet%28%27'+consumerId+'%27%29',
	    method: 'GET',
	    dataType: 'json',
	    timeout: timeoutAjax,
	    contentType: "application/json; charset=utf-8",
	    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
	    success: function(result){
          talentType = 'intern';
          if(result.d.IsInternal == false){
            talentType = 'extern';
          }
          isTalent = result.d.IsTalent;
          userFirstname = result.d.FirstName;
          userLastname = result.d.LastName;
          userEmail = result.d.Email;
          userId = result.d.UserId;
          usertype = null;
          if(isTalent){
            usertype = 'talent';
          }
		      if(result.d.Email != ''){
		      	loginSap = true;
            // User-Daten im Header setzen
            if(result.d.ProfilePicUrl){
              jQuery('#imageProfilePicture').attr('src', result.d.ProfilePicUrl).show();
              jQuery('#imageProfile').css('background-color','#FFFFFF');
            }
            else{
              var profileFirstChr = result.d.FirstName.charAt(0);
              jQuery('#profileFirstChr').text(profileFirstChr).css('display','flex');
            }
		      }

          // Wenn DSE noch bestätigt werden muss -> Layer einblenden
          if(isTalent && result.d.WaitForDse == true && isPageDatenschutz != 1){
            jQuery.ajax({
        		  url: pathRoot + '/wLayout-karriere/wGlobal/scripts/php/showLayerDSE.php',
        		  method: 'GET',
        		  success: function(result){
                jQuery('body').append(result);
                jQuery('#layerInteressiertBackground, #layerInteressiert').show();
              }
            });
          }
          // Benutzerdaten in Session speichern (für Header-User-Info)
          /*
          var dataSession = {usertype : usertype, firstname: result.d.FirstName};
          jQuery.ajax({
      		  url: pathRoot + '/wLayout-karriere/wGlobal/scripts/php/setUserdataSession.php',
            data: 'data='+JSON.stringify(dataSession),
      		  method: 'GET',
      		  dataType: 'json',
      		  success: function(result){
            }
          });
          */

          // Email in Jobalert-Formular eintragen
          if(jQuery("#jobalertEmail").length){
            jQuery('#jobalertEmail').val(result.d.Email);
          }

          // Profil-Bearbeitung voreintragen
          if(jQuery("#frmProfileEdit").length){
            setProfileDataForm(result.d);
          }


          // Login-Prüfung
          jQuery.ajax({
      		  url: pathRoot + '/wLayout-karriere/wGlobal/scripts/php/checkLoginWeblication.php',
      		  method: 'GET',
      		  success: function(result){
      		  	loginWeblication = result;

              if(userEdit){}
          		else if(loginSap == true && loginWeblication != true){
          			wsLoginWeblication(function(status){
                  if(status.status != 0){
            			  location.reload();
            			}
                }, null, usertype);

          		}
          		else if(loginSap == false && loginWeblication == true){
          			var redirect = '/jobs' + wProjectPath;
          		  location.href = '/jobs/weblication/grid5/scripts/wSystem.php?action=logout&redirect=' + redirect;
          		}

      		  }
      		})
	    },
      error: function(err){
        jQuery.ajax({
          url: pathRoot + '/wLayout-karriere/wGlobal/scripts/php/checkLoginWeblication.php',
          method: 'GET',
          success: function(result){
            loginWeblication = result;

            if(userEdit){}
            else if(loginWeblication == true){
              var redirect = '/jobs' + wProjectPath;
              location.href = '/jobs/weblication/grid5/scripts/wSystem.php?action=logout&redirect=' + redirect;
            }
          }
        })
      }
	  });
	}

  jQuery('body').on('submit', '#formAcceptDse', function(e){
    e.preventDefault();
    if(jQuery('#formAcceptDse #checkboxDS').is(':checked')){
      wsUserAcceptDSE(function(result){
        if(result.d.Success == true){
          jQuery('#layerInteressiertBackground').hide();
          jQuery('#layerInteressiert').hide();
        }
        else{
        }
      });
    }
    else{
      alert("Bitte bestätige die Datenschutzerklärung.");
    }
  });

  jQuery('body').on('submit', '#formAcceptDseRegister', function(e){
    e.preventDefault();
    if(jQuery('#formAcceptDseRegister #checkboxDSLayer').is(':checked')){
      confirmationToken = String(jQuery('#formRegister').data('token'));
      wsConfirmationAcceptDSE(function(data){
        jQuery('#layerInteressiertBackground').hide();
        jQuery('#layerInteressiert').hide();
      }, confirmationToken);
    }
    else{
      alert("Bitte bestätige die Datenschutzerklärung.");
    }
  });


  // Klick auf Favoriten
  jQuery('#blockHeaderMainInner').on('click', '#infoSaved', function(e){
    e.preventDefault();
    var path = jQuery(this).data('path');
    location.href = path;
  });
  // Favoriten holen
  wsFavoritesGetList(function(result){
    var count = 0;
    if(result){
      count = result.d.results.length;
      if(count > 0){
        jQuery('#infoSavedNumber').html(count).show();
      }
    }
  });

})




// Webservice - Login
function wsLogin(callback, email, password, type){
  if(type == ''){
    type = getUrlParameter('type');
  }
  var redirect = getUrlParameter('redirect');
	var data = {UserId : email, Password: password, ConsumerId: consumerId};
  try {
    sendback = null;
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV/sign_in',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'Content-Type': 'application/json', 'Accept': 'application/json'},
      beforeSend: function() {
      	jQuery('#formLogin button.buttonSubmit').addClass('send').prop("disabled",true);
		  },
		  complete: function(){
      	jQuery('#formLogin button.buttonSubmit').removeClass('send').prop("disabled",false);
		  },
      success: function(result){
        wsGetUserdata(function(data){
          var isTalent = data.IsTalent;
          var usertype = 'jobProfile';
          var isInternal = false;
          if(isTalent){
            usertype = 'talent';
            isInternal = data.IsInternal;
          }
          // Login Weblication
          wsLoginWeblication(function(statusLoginWeblication){
            if(statusLoginWeblication.status == 1){
              sendback = {status: 1, redirect: statusLoginWeblication.redirect};
            }
            else{
   	          sendback = {status: 'S'};
            }
            callback(sendback);
          }, type, usertype, isInternal, redirect);
        });

      },
      error: function(err){
        if(typeof err.responseJSON == 'undefined'){
          sendback = {status: 'Wrong'};
        }
        else{
        	var code = err.responseJSON.error.innererror.errordetails[1].code;
        	//console.log(code);
        	if(code == '/OTTO/CX_OR2USR_NOT_CONFIRMED'){
        		sendback = {status: 'Confirm'};
        	}
        	else if(code == '/OTTO/CX_OR2USR_FAILED_SIGNIN'){
        		sendback = {status: 'Wrong'};
        	}
        	else if(code == '/OTTO/CX_OR2_REG_ERROR'){
        		sendback = {status: 'Wrong'};
        	}
        	else if(code == '/OTTO/CX_OR2USR_ACCOUNT_LOCKED'){
        		sendback = {status: 'Locked'};
        	}
        	else{
        	  sendback = {status: 'S'};
        	}
        }
        callback(sendback);
      }
    });
  } catch (e) {console.log(e)};
}

//Social Login
function socialLogin(type){
	var child = window.open("/or/otto/oauth_redirect?providerid="+type, "", "height=720,width=560,status=yes,toolbar=yes,location=yes");
}


// Weblication - Login
function wsLoginWeblication(callback, type, usertype, isInternal, redirect){
	type = typeof type !== 'undefined' ? type : '';
  usertype = typeof usertype !== 'undefined' ? usertype : '';
  isInternal = typeof isInternal !== 'undefined' ? isInternal : false;
  redirect = typeof redirect !== 'undefined' ? redirect : '';
	var sendback = 0;
	jQuery.ajax({
		  data: 'type='+type+'&usertype='+usertype+'&isInternal='+isInternal+'&redirect='+redirect,
      url: pathRoot + '/wLayout-karriere/wGlobal/scripts/php/loginUserPublic.php',
      method: 'GET',
      timeout: timeoutAjax,
      dataType: 'json',
      success: function(result){
      	callback(result);
      }
   });
}

// Webservice - Passwort vergessen - Sicherheitsfrage-ID holen (Userspezifisch)
function wsPwGetQuestion(callback, userId){
	var data = {ConsumerId: consumerId, UserId: "'"+userId+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV/get_user_question',
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Passwort vergessen - Anfrage zurücksetzen des PW
function wsPwRequestReset(callback, data){
	try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV/request_reset_password',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Passwort vergessen - Bestätigung des PW-Vergessen Tokens
function wsPwForgetConfirmationToken(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV/confirmation_reset',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
      	if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	if (callback && typeof(callback) === 'function') {
		      callback(err);
		    }
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Passwort vergessen - Neues Passwort setzen
function wsPwChangePassword(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV/set_new_password',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
      	if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	if (callback && typeof(callback) === 'function') {
		      callback(err);
		    }
      }
    });
  } catch (e) {console.log(e)};
}





//Webservice - Sicherheitsfragen holen
function wsGetSecurityQuestions(callback){
  var data = {ConsumerId: consumerId};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV/get_security_questions',
      method: 'GET',
      data: 'ConsumerId='+consumerId,
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
      	if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      }
    });
  } catch (e) {console.log(e)};
}


// Webservice - Registrierung
function wsSignUp(data, links, type){
  dataSend = data;
  try {
    var pathWs = '/sign_up';
    if(type == 'talentInit'){
      pathWs = '/trust_confirmation';
      var dataSend = {
        ConfirmationToken: String(jQuery('#formRegister').data('token')),
        Password: jQuery('#formRegister #password').val(),
        QuestionId:  jQuery('#formRegister #registerSafetyquestion').val(),
        SecurityAnswer:  jQuery('#formRegister #safetyquestionanswer').val()
      };
    }
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV' + pathWs,
      method: 'POST',
      data: JSON.stringify(dataSend),
      dataType: 'json',
      timeout: timeoutAjax,
      processData: false,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'Content-Type': 'application/json'},
      success: function(result){
        if(type == 'talentInit'){
          wsLogin(function(resultI){
            location.href = links.success;
          }, data.UserId, data.Password)
        }
        else{
          location.href = links.success;
        }
      },
      error: function(err){
      	var code = err.responseJSON.error.innererror.errordetails[1].code;
        var msg = err.responseJSON.error.innererror.errordetails[1].message;
      	if(code == '/OTTO/CX_OMF_OBJECT_NOT_SAVED' || msg.includes('Die eMail-Adresse wird')){
      		location.href = links.failureUser;
      	}
      	else{
      	  location.href = links.failure;
      	}
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Registrierung bestätigen
function wsSignUpConfirm(token){
	var data = {ConfirmationToken: token};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV/confirmation',
      method: 'POST',
      async: false,
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         sendback = 1;
      },
      error: function(err){
      	sendback = 0;
      }
    });
    return sendback;
  } catch (e) {console.log(e)};
}

// Webservice - prüfen ob intern Talent
function wsCheckInternalByToken(callback, token){
	var data = {ConfirmationToken: "'"+token+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/CheckInternalByToken',
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
         callback(result);
       }
      },
      error: function(err){
        if (callback && typeof(callback) === 'function') {
		      callback(0);
		    }
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Bestätigt die DSE für externe
function wsConfirmationAcceptDSE(callback, token){
  var data = {ConfirmationToken: "'"+token+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ConfirmationAcceptDSE',
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
         callback(result);
       }
      },
      error: function(err){
        if (callback && typeof(callback) === 'function') {
		      callback(0);
		    }
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Bestätigt die DSE für externe
function wsUserAcceptDSE(callback, token){
  var data = {ConsumerId: "'"+consumerId+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/UserAcceptDSE',
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
         callback(result);
       }
      },
      error: function(err){
        if (callback && typeof(callback) === 'function') {
		      callback(0);
		    }
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Profil Passwort ändern
function wsSetProfilePassword(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV/reset_password',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Benutzerdaten
function wsGetUserdata(callback, async){
	async = typeof async !== 'undefined' ? async : true;
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ProfileSet%28%27'+consumerId+'%27%29',
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      }
    });
  } catch (e) {console.log(e)};
}

// Logout
function wsLogout(){
	var data = {ConsumerId: consumerId};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_USER_SRV/sign_out',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
      	var redirect = '/jobs/profil/erfolgreich-abgemeldet.php';
        location.href = '/jobs/weblication/grid5/scripts/wSystem.php?action=logout&redirect=' + redirect;
      },
      error: function(err){
      }
    });
  } catch (e) {console.log(e)};
}


// Jobalert: Anmeldung abschicken
function wsJobalertRegister(data, links){
	try {
    jQuery.ajax({
      url: pathWebservice + '/or2_jobalert_srv/RegistrationSet',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         location.href = links.success;
      },
      error: function(err){
      	var code = err.responseJSON.error.innererror.errordetails[0].code;
      	if(code == '/IWBEP/CX_MGW_BUSI_EXCEPTION'){
      	  jQuery('#formJobalertRegister #vorname, #formJobalertRegister #nachname, #formJobalertRegister #freitext').addClass('wglIsInvalid');
  		    jQuery('#formJobalertRegister #vorname').prev('.errorMessage').fadeIn();
  		  }
  		  else{
      	  location.href = links.failure;
        }
      }
    });
  } catch (e) {console.log(e)};
}

// Jobalert: Abmeldung
function wsJobalertDelete(callback, hash){
	var data = {Hashcode: "'"+hash+"'"};
	try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_JA_REGISTRATION_SRV/Unregister',
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(result);
      },
      error: function(err){
      	callback('error');
      }
    });
  } catch (e) {console.log(e)};
}

// Profil updaten
function wsUpdateProfile(callback, data, dataSkills){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ProfileSet%28%27'+consumerId+'%27%29',
      method: 'PUT',
      data: JSON.stringify(data),
      dataType: 'json',
      processData: false,
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        var i = 1;
        jQuery.each(dataSkills, function(val, dataSkill) {
          var skillGroupId = '00'+i;
          wsUpdateSkills(function(resSkills){
            //callback(1);
          }, dataSkill, skillGroupId);
          i++;
        });
        /*

        */
        callback(1);
      },
      error: function(err){
      	callback(0);
      }
    });
  } catch (e) {console.log(e)};
}

// Profil löschen
function wsDeleteProfile(callback){
  var data = {ConsumerId: ''+consumerId, IsExtension: false, IsDeletion: true};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ProfileExtensionSet',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(result);
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Skills holen
function wsGetSkills(callback){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/SkillGroupSet?$filter=ConsumerId%20eq%20%27'+consumerId+'%27',
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(result);
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Skills speichern
function wsUpdateSkills(callbackSkills, data, skillGroupId){
  if(data.length > 0){
    var skillArr = new Array();
    jQuery.each(data, function(val, dataSkill) {
      var skillVal = jQuery(dataSkill).val();
      skillArr.push(skillVal);
    });
    var strSkills = skillArr.join(',');
    try {
      var data = {SkillId: '', UserId: '', SkillGroupId: skillGroupId, Skills: strSkills, ConsumerId: ''+consumerId, Name: ''};
      jQuery.ajax({
        url: pathWebservice + '/OR2_PROFILE_SRV/SkillGroupSet%28ConsumerId=%27'+consumerId+'%27,SkillGroupId=%27'+skillGroupId+'%27%29',
        method: 'PUT',
        dataType: 'json',
        data: JSON.stringify(data),
        timeout: timeoutAjax,
        contentType: "application/json; charset=utf-8",
        headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
        success: function(result){
           callbackSkills(1);
        },
        error: function(err){
        	callbackSkills(0);
        }
      });
    } catch (e) {console.log(e)};
  }
  callbackSkills(1);
}

// Webservice - Upload anmelden (Unterlagen nachreichen)
function wsPrepareUploadUnterlagen(callback, hashId){
	var data = {ConsumerId: "'"+consumerId+"'", Hashcode: "'"+hashId+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2_STATE_SRV/PrepareUpload",
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Upload-URL erhalten (Unterlagen nachreichen)
function wsGetUploadUrlUnterlagen(callback, hash160){
	var data = {ConsumerId: "'"+consumerId+"'", Hash160: "'"+hash160+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2_STATE_SRV/GetUploadUrl",
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      async: false,
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Upload-Liste erhalten
function wsGetListUpload(callback, hash160){
	var data = {ConsumerId: "'"+consumerId+"'", Hash160: "'"+hash160+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2_STATE_SRV/GetFilelist",
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Webservice - Upload löschen
function wsDeleteUpload(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2_STATE_SRV/DeleteFile",
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}


// Upload
function wsGetUploadUrl1(callback, type){
  if(typeof(type) == 'undefined'){
    type = 'data';
  }
  switch(type){
    case 'profilePicture':
      var serviceUrl = 'ProfilePictureUploadUrlSet%28%27'+consumerId+'%27%29';
      break;
    case 'cv':
      var serviceUrl = 'FileUploadUrlSet%28%27'+consumerId+'%27%29';
      break;
    case 'data':
      var serviceUrl = 'FileUploadUrlSet%28%27'+consumerId+'%27%29';
      break;
  }

  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/'+serviceUrl,
      method: 'GET',
      dataType: 'json',
      processData: false,
      timeout: timeoutAjax,
      //contentType: "application/json; charset=utf-8",
      //headers: {'dataserviceversion': '2.0'},
      success: function(result, textStatus, request){
         callback(result);
      },
      error: function(err){
      	callback(0);
      }
    });
  } catch (e) {console.log(e)};
}

function wsGetUploadUrl2(callback, prepareUrl){
  try {
    var fileGroupHash = getUrlParameter('file-group-hash', prepareUrl);
    var fileHash = getUrlParameter('file-hash', prepareUrl);
    var url = prepareUrl;
    var curDomain = window.location.href;
    if (curDomain.match(/develop\.otto\.de\/jobs\//g)) {
      url = 'https://develop.otto.de/or/otto/file/get_upload_url/TPS_PROFILE?file-group-hash='+fileGroupHash+'&file-hash='+fileHash;
    }
    jQuery.ajax({
      //url: uploadDomain + '/otto/file/get_upload_url/TPS_PROFILE?file-group-hash='+fileGroupHash+'&file-hash='+fileHash,
      //url: prepareUrl,
      url: url,
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      xhrFields: { withCredentials: true },
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result, textStatus, request){
        var sessionId = request.getResponseHeader('x-ops_basis_file_uploader_session_id');
        result.sessionId = sessionId;
        callback(result);
      },
      error: function(err){
      	callback(0);
      }
    });
  } catch (e) {console.log(e)};
}


// Profil: List Uploads
function wsProfileListUploads(callback){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/FileSet?$filter=ConsumerId%20eq%20%27'+consumerId+'%27',
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(result);
      },
      error: function(err){
      	callback(0);
      }
    });
  } catch (e) {console.log(e)};
}

// Profil: Delete Uploads
function wsProfileDeleteUpload(callback, filehash){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/FileSet%28ConsumerId=%27'+consumerId+'%27,FileHash=%27'+filehash+'%27%29',
      method: 'DELETE',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(1);
      },
      error: function(err){
      	callback(0);
      }
    });
  } catch (e) {console.log(e)};
}

// Profil: List Projects
function wsProfileListProjects(callback){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ProjectSet?$filter=ConsumerId%20eq%20%27'+consumerId+'%27',
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(result);
      },
      error: function(err){
      	callback(0);
      }
    });
  } catch (e) {console.log(e)};
}

// Projekt erstellen
function wsProfileSetProject(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ProjectSet',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(1);
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Projekt updaten
function wsProfileUpdateProject(callback, data, id){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ProjectSet%28ConsumerId=%27'+consumerId+'%27,ProjectId=%27'+id+'%27%29',
      method: 'PUT',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(1);
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Projekt löschen
function wsProfileDeleteProject(callback, id){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ProjectSet%28ConsumerId=%27'+consumerId+'%27,ProjectId=%27'+id+'%27%29',
      method: 'DELETE',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(1);
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// Projekt lesen
function wsProfileReadProject(callback, id){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ProjectSet%28ConsumerId=%27'+consumerId+'%27,ProjectId=%27'+id+'%27%29',
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
         callback(result);
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}


// Webservice - Favoriten auslesen
function wsFavoritesGetList(callback){
	var data = {$filter: "consumer_id eq '"+consumerId+"'"};
  jQuery.ajax({
    url: pathWebservice + "/OR2_JOBFAVORITEN_SRV/JobfavoritesSet",
    method: 'GET',
    dataType: 'json',
    cache: false,
    data: jQuery.param(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(res){
		  callback(res);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Webservice - Favorit hinzufügen
function wsFavoritesAdd(callback, offid){
	var data = {consumer_id: ''+consumerId, offer_id: offid};
  jQuery.ajax({
    url: pathWebservice + "/OR2_JOBFAVORITEN_SRV/JobfavoritesSet",
    method: 'POST',
    dataType: 'json',
    data: JSON.stringify(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(res){
		  callback(true);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Webservice - Favorit löschen
function wsFavoritesDelete(callback, offid){
	var data = {consumer_id: ''+consumerId, offer_id: offid};
	var strDelete = "(consumer_id='" + consumerId + "',offer_id='"+offid+"')";
  jQuery.ajax({
    url: pathWebservice + "/OR2_JOBFAVORITEN_SRV/JobfavoritesSet"+strDelete,
    method: 'DELETE',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(res){
		  callback(true);
    },
    error: function(err){
    	callback(false);
    }
  });
}


// Webservice - gespeicherte Bewerbungen auslesen
function wsAppSavedGetList(callback){
	var data = {ConsumerId: "'"+consumerId+"'"};
  jQuery.ajax({
    url: pathWebservice + "/OR2OBB_SRV/GetSavedOnbids",
    method: 'GET',
    dataType: 'json',
    cache: false,
    data: jQuery.param(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(res){
		  callback(res);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Webservice - Liste empfohlene Jobs
function wsJobsRecGetList(callback){
	var data = {$filter: "ConsumerId eq '"+consumerId+"'"};
  jQuery.ajax({
    url: pathWebservice + "/OR2_PROFILE_SRV/JobRecommendationSet",
    method: 'GET',
    dataType: 'json',
    cache: false,
    data: jQuery.param(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(res){
		  callback(res);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Webservice - Jobbörse Initialisieren
function wsJobsCreate(callback, data){
	jQuery.ajax({
    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/create',
    method: 'GET',
    dataType: 'json',
    data: data,
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
      callback(true);
    },
    error: function(err){
      callback(false);
    }
  });
}

// Webservice - Jobbörse Liste holen
function wsJobsGetList(callback){
	var data = {$filter: "ConsumerId eq '"+consumerId+"'"};
  jQuery.ajax({
    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/AusschreibungSet',
    method: 'GET',
    dataType: 'json',
    data: data,
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
      callback(data.d);
    	// aktuelle Seite holen
      /*
    	jQuery.ajax({
        url: pathRoot + "/wLayout-karriere/wGlobal/scripts/php/search/saveCurPage.php",
        data: "action=get",
        success: function(page){
        	data.d.page = page;
		      callback(data.d);
        }
      });
      */
    },
    error: function(err){
    }
  });
}

// Webservice - Jobbörse Filter holen
function wsJobsGetFilter(callback){
  var dataParam = {$filter: "ConsumerId eq '"+consumerId+"'"};
  //Anstellungsart - all
  jQuery.ajax({
    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/FO_ANSTARTSet',
    method: 'GET',
    dataType: 'json',
    data:jQuery.param(dataParam),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
			var result = {};
			result.anstart = {};
	    result.anstart.all = data.d.results;
			//Anstellungsart - selected
		  jQuery.ajax({
		    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/SL_ANSTARTSet',
		    method: 'GET',
		    dataType: 'json',
		    data:jQuery.param(dataParam),
		    timeout: timeoutAjax,
		    contentType: "application/json; charset=utf-8",
		    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
		    success: function(data){
		      result.anstart.selected = data.d.results;
		      callback(result);
		    },
		    error: function(err){
		    }
		  });
    },
    error: function(err){
    }
  });
  // RubrikGruppe
  jQuery.ajax({
    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/FO_RUBRIKGRUPPESet',
    method: 'GET',
    dataType: 'json',
    data:jQuery.param(dataParam),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
			var result = {};
			result.rubrikGruppe = {};
	    result.rubrikGruppe.all = data.d.results;
			//Anstellungsart - selected
		  jQuery.ajax({
		    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/SL_RUBRIKGRUPPESet',
		    method: 'GET',
		    dataType: 'json',
		    data:jQuery.param(dataParam),
		    timeout: timeoutAjax,
		    contentType: "application/json; charset=utf-8",
		    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
		    success: function(data){
		      result.rubrikGruppe.selected = data.d.results;
		      callback(result);
		    },
		    error: function(err){
		    }
		  });
    },
    error: function(err){
    }
  });
  // Rubrik
  jQuery.ajax({
    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/FO_RUBRIKSet',
    method: 'GET',
    dataType: 'json',
    data:jQuery.param(dataParam),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
			var result = {};
			result.rubrik = {};
	    result.rubrik.all = data.d.results;
			//Anstellungsart - selected
		  jQuery.ajax({
		    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/SL_RUBRIKSet',
		    method: 'GET',
		    dataType: 'json',
		    data:jQuery.param(dataParam),
		    timeout: timeoutAjax,
		    contentType: "application/json; charset=utf-8",
		    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
		    success: function(data){
		      result.rubrik.selected = data.d.results;
		      callback(result);
		    },
		    error: function(err){
		    }
		  });
    },
    error: function(err){
    }
  });
}

// Webservice - Jobbörse Filter setzen/ entfernen
function wsJobsSetFilter(callback, data){
	var filter = data.filter;
	var type = data.type;
	var value = data.value;
	var text = data.text;
	var dataPost = {Key: value, Value: text, ConsumerId: ""+consumerId};
	var method = 'POST';
	var strDelete = '';
	if(type == false){
		// DELETE
		method = 'DELETE';
		strDelete = "(Key='" + value + "',ConsumerId='"+consumerId+"')";
		dataPost = {};
	}
  jQuery.ajax({
    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/SL_'+filter.toUpperCase()+'Set' + strDelete,
    method: method,
    dataType: 'json',
    async: false,
    data: JSON.stringify(dataPost),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(result){
		  jQuery.ajax({
        url: pathRoot + "/wLayout-karriere/wGlobal/scripts/php/search/saveCurPage.php",
        data: "action=set&page=1",
        success: function(page){
        	callback(result);
        }
      });

    },
    error: function(err){
    }
  });
}

// Webservice - Jobbörse Freitext holen
function wsJobsGetText(callback){
	jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/S_DYNPROFELDSSet(ConsumerId='9814723',Id='1')",
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data.d.Suchtext);
    },
    error: function(err){
    }
  });
}

// Webservice - Jobbörse Freitext setzen
function wsJobsSetText(callback, text){
	var data = {Suchtext: text, ConsumerId: ""+consumerId};
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/S_DYNPROFELDSSet(ConsumerId='9814723',Id='1')",
    method: 'PUT',
    dataType: 'json',
    data: JSON.stringify(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(){
		  jQuery.ajax({
        url: pathRoot + "/wLayout-karriere/wGlobal/scripts/php/search/saveCurPage.php",
        data: "action=set&page=1",
        success: function(page){
        	callback();
        }
      });
    },
    error: function(err){
    }
  });
}

// Webservice - Jobbörse Liste holen
function wsJobsResetFilter(callback){
	var data = {ConsumerId: "''"+consumerId+"''"};
  jQuery.ajax({
    url: pathWebservice + '/OR2JB_SCONTEXT_SRV/clear_filters',
    method: 'GET',
    dataType: 'json',
    data: jQuery.param(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(){
    	jQuery.ajax({
        url: pathRoot + "/wLayout-karriere/wGlobal/scripts/php/search/saveCurPage.php",
        data: "action=set&page=1",
        success: function(page){
        	callback();
        }
      });
    },
    error: function(err){
    }
  });
}

// Webservice - Hashlink holen
function wsJobsCreateHash(callback){
	var data = {ConsumerId: "'"+consumerId+"'"};
	jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/create_hashlink",
    method: 'GET',
    dataType: 'json',
    data: jQuery.param(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data.d.create_hashlink.URL_HASH);
    },
    error: function(err){
    }
  });
}

// OBB: Get Fachbereich
function wsObbGetTargetGroup(callback, bid){
	var dataParam = {$filter: "Bid eq '"+bid+"'"};
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/DropDownTargetGroupSet',
      method: 'GET',
      dataType: 'json',
      data: jQuery.param(dataParam),
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}


// OBB: Get Announcement
function wsObbGetAnnouncement(callback, onbid, async){
  async = typeof async !== 'undefined' ? async : true;
	var dataParam = {$filter: "ConsumerId eq '"+consumerId+"' and Onbid eq '"+onbid+"'"};
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/AnnouncementSet',
      method: 'GET',
      dataType: 'json',
      //async: async,
      data: jQuery.param(dataParam),
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Get Anrede
function wsObbGetAnrede(callback, bid){
	var dataParam = {$orderby: "Anrlt"};
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/DropDownSalutationSet',
      method: 'GET',
      dataType: 'json',
      data: jQuery.param(dataParam),
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Get Art Praktikum
function wsObbGetArtPraktikum(callback){
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/DropDownKindInternshipSet',
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Get Schulabschluss
function wsObbGetSchulabschluss(callback){
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/DropDownGraduationSet',
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Get Motivation
function wsObbGetQuestions(callback, bid, onbid, async){
  async = typeof async !== 'undefined' ? async : true;
	//var dataParam = {$filter: "Bid eq '"+bid+"'"};
	var dataParam = {$filter: "Bid eq '"+bid+"' and OnBid eq '"+onbid+"'"};
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/QuestionAnswerSet',
      method: 'GET',
      dataType: 'json',
      async: async,
      data: jQuery.param(dataParam),
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Set Motivation
function wsObbSetQuestions(callback, bid, onbid, id, text, checked){
	//console.log(id, text, checked);
	var dataParam = "(Bid='"+bid+"',Sprsl='D',Qid='"+id+"',OnBid='"+onbid+"')";
	var dataParamBody = {Bid: ""+bid, OnBid: ""+onbid, Qid: ""+id, QSelected: checked, Answer: text, Sprsl: 'D'};
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/QuestionAnswerSet' + dataParam,
      method: 'PUT',
      dataType: 'json',
      async: false,
      data: JSON.stringify(dataParamBody),
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(true);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Delete Motivation
function wsObbDeleteQuestions(callback, bid, onbid, id, text, checked){
	//console.log(id, text, checked);
	var dataParam = "(Bid='"+bid+"',Sprsl='D',Qid='"+id+"',OnBid='"+onbid+"')";
	var dataParamBody = {Bid: ""+bid, OnBid: ""+onbid, Qid: ""+id, QSelected: checked, Answer: text, Sprsl: 'D'};
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/QuestionAnswerSet' + dataParam,
      method: 'DELETE',
      dataType: 'json',
      async: false,
      //data: JSON.stringify(dataParamBody),
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(true);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Set Impulse
function wsObbSetAttention(callback, onbid, id, checked, text){
	//var dataParam = "(Onbid='"+onbid+"',Aufm='"+id+"')";
	var dataParamBody = {Onbid: onbid, Aufm: id, Checked: checked, Text: text};
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/ObAttentionSet',
      method: 'POST',
      dataType: 'json',
      data: JSON.stringify(dataParamBody),
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(true);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Get Impulse
function wsObbGetAttentionSelected(callback,  onbid){
	var dataParam = {$filter: "Onbid eq '"+onbid+"'"};
	try{
		jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/ObAttentionSet',
      method: 'GET',
      dataType: 'json',
      data: jQuery.param(dataParam),
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
        if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Get Upload-Url
function wsObbGetUploadUrl(callback, onbid){
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/Get_upload_url?Onbid='"+onbid+"'&ConsumerId='"+consumerId+"'",
      method: 'POST',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Get SessionToken
function wsObbGetSessionToken(callback, onbid){
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/GetSessionToken?Onbid='"+onbid+"'&ConsumerId='"+consumerId+"'",
      method: 'POST',
      dataType: 'json',
      async: false,
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Post Cloud-Upload
function wsObbPostCloudUpload(callback, appl, url, hash, sessionToken){
  var data = {Appl: appl, Url: url, Hash160: hash, SessionToken: sessionToken};
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/CloudFileSet",
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Upload-Liste erhalten
function wsObbGetListUpload(callback, onbid){
	var data = {Onbid: "'"+onbid+"'",ConsumerId: "'"+consumerId+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/Get_files",
      method: 'GET',
      cache: false,
      data: jQuery.param(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Upload löschen
function wsObbDeleteUpload(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/Delete_file?Onbid='"+data.onbid+"'&Index='"+data.index+"'"+"'&ConsumerId='"+consumerId+"'",
      method: 'POST',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}




// Webservice - Jobdetail holen
function wsGetJobDetailTalents(callback, pubId){
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/PublicationSet(PublicationId='"+pubId+"')",
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data.d);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Location holen
function wsGetJobDetailTalentsLocation(callback, pubId){
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/PublicationSet(PublicationId='"+pubId+"')/Location",
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data.d);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Benefits holen
function wsGetJobDetailBenefits(callback, pubId){
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/PublicationSet(PublicationId='"+pubId+"')/BenefitSet",
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data.d);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Benefits holen
function wsGetJobDetailMetadata(callback, pubId){
  jQuery.ajax({
    url: "/or/otto/or_publication/google-jobs/json/" + pubId,
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data);
    },
    error: function(err){
    	callback(false);
    }
  });
}

function wsGetJobDetailTalentsJoblevel(callback, pubId){
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/PublicationSet(PublicationId='"+pubId+"')/PublicationJoblevelSet",
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data.d);
    },
    error: function(err){
    	callback(false);
    }
  });
}


function wsGetJobDetailTalentsTexts(callback, pubId){
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/PublicationSet(PublicationId='"+pubId+"')/TextSet",
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data.d);
    },
    error: function(err){
    	callback(false);
    }
  });
}

function wsGetJobDetailContact(callback, pubId){
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/PublicationSet(PublicationId='"+pubId+"')/Contact",
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data.d);
    },
    error: function(err){
    	callback(false);
    }
  });
}

function wsGetJobDetailLink(callback, pubId){
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/PublicationSet(PublicationId='"+pubId+"')/LinkSet",
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(data){
		  callback(data.d);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Webservice - Empfohlene Jobs
function wsGetRecommendedJobs(callback){
	var data = {$filter: "Medium eq '"+mediumWebservice+"' and ConsumerId eq '"+consumerId+"'"};
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/RecommendedAdvertismentSet",
    method: 'GET',
    dataType: 'json',
    data: jQuery.param(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(res){
		  callback(res);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Webservice - Ähnliche Jobs (auf Jobdetailseite)
function wsGetSimilarJobs(callback, offid){
	var data = {$filter: "Medium eq '"+mediumWebservice+"' and ConsumerId eq '"+consumerId+"' and Offid eq '"+offid+"'"};
  jQuery.ajax({
    url: pathWebservice + "/OR2JB_SCONTEXT_SRV/RecommendedAdvOffidSet",
    method: 'GET',
    dataType: 'json',
    data: jQuery.param(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(res){
		  callback(res);
    },
    error: function(err){
    	callback(false);
    }
  });
}


// Webservice - Status einer Bewerbung
function wsAppGetStatus(callback, hash){
  jQuery.ajax({
    url: pathWebservice + "/OR2_STATE_SRV/ApplStatHashSet(Hashcode='"+hash+"')",
    method: 'GET',
    dataType: 'json',
    cache: false,
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(res){
		  callback(res);
    },
    error: function(err){
    	callback(false);
    }
  });
}

// Webservice - gespeicherte Bewerbungen auslesen
function wsAppGetList(callback){
	var data = {$filter: "ConsumerId eq '"+consumerId+"'"};
  jQuery.ajax({
    url: pathWebservice + "/OR2_STATE_SRV/StatusSet",
    method: 'GET',
    dataType: 'json',
    cache: false,
    data: jQuery.param(data),
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(res){
		  callback(res);
    },
    error: function(err){
    	callback(false);
    }
  });
}


// Webservice - AP Details
function wsGetAPDetails(callback){
  jQuery.ajax({
    url: pathWebservice + '/OR2_PROFILE_SRV/ContactRecruiterSet%28%27'+consumerId+'%27%29',
    method: 'GET',
    dataType: 'json',
    timeout: timeoutAjax,
    contentType: "application/json; charset=utf-8",
    headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
    success: function(result){
      callback(result);
    },
    error: function(err){
    	callback(false);
    }
  });
}


//Webservice - Liste aller Ansprechpartner holen
function wsGetAnsprechpartner(callback){
  var data = {$filter: "ConsumerId eq '"+consumerId+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ContactAllRecruiterSet',
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
      	if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      }
    });
  } catch (e) {console.log(e)};
}

//Webservice - Sprechzeiten zu einem Ansprechpartner holen
function wsGetAnsprechpartnerSprechzeiten(callback, id){
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2_PROFILE_SRV/ContactAllRecruiterSet(ContactId='"+id+"',ConsumerId='"+consumerId+"')/ToConsultationTime",
      method: 'GET',
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
      	if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      }
    });
  } catch (e) {console.log(e)};
}

//Webservice - AP Sprechzeiten
function wsGetAPSprechzeiten(callback){
  var data = {$filter: "ConsumerId eq '"+consumerId+"'"};
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_PROFILE_SRV/ContactConsultationTimeSet',
      method: 'GET',
      data: jQuery.param(data),
      dataType: 'json',
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
      	if (callback && typeof(callback) === 'function') {
          callback(result.d.results);
		    }
      },
      error: function(err){
      }
    });
  } catch (e) {console.log(e)};
}


// Webservice - Gespeicherte Bewerbung löschen
function wsDeleteSavedApp(callback, onbid){
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/DeleteOnbid?Onbid='"+onbid+"'&ConsumerId='"+consumerId+"'",
      method: 'POST',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(true);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}


// OBB: Init
function wsObbInit(callback, data){
	try {
		var offid = data.offid;
		var bid = data.bid;
		var onbid = data.onbid;
		var typeInit = data.typeInit;
    var singleToken = data.singleToken;
		var type = 'CreateNew';
		var param = '';

    // Falls Favoriten BIDs holen
    if(typeInit == 'fav'){
      bid = getUrlParameter('bid');
      /*
      bidArr = new Array();
      wsFavoritesGetList(function(result){
      	if(result){
      	  var count = result.d.results.length;
          if(count > 0){
            jQuery.each(result.d.results, function(i, data) {
            	var offid = data.offer_id;
            	wsGetJobDetailTalents(function(data){
            		var bid = data.Bid;
                bidArr.push(bid);
            	}, offid, false);
            });
          }
        }
      }, false);
      if(jQuery.inArray('950003', bidArr) !== -1){
        bid = 950003;
      }
      else if(jQuery.inArray('950004', bidArr) !== -1){
        bid = 950004;
      }
      else{
        bid = 950006;
      }
      */
    }

    var headers = {'X-Requested-With': 'X', 'dataserviceversion': '2.0'};

		if(typeof typeInit !== 'undefined' && typeInit == 'fav'){
			type = 'CreateNewFavorites';
			param = {Bid: "'"+bid+"'", ConsumerId: "'"+consumerId+"'"};
		}
    else if (typeof onbid !== 'undefined'){
			type = 'OpenOnbid';
			param = {Onbid: "'"+onbid+"'", ConsumerId: "'"+consumerId+"'"};
		}
		else if(typeof offid !== 'undefined'){
			type = 'CreateNewOffid';
			param = {Offid: "'"+offid+"'", Bid: "'"+bid+"'", ConsumerId: "'"+consumerId+"'"};
      if(singleToken != ''){
        headers = {'X-Requested-With': 'X', 'dataserviceversion': '2.0', 'single-token': singleToken};
      }
		}
		else{
			type = 'CreateNewInit';
			param = {Bid: "'"+bid+"'", ConsumerId: "'"+consumerId+"'"};
		}
    jQuery.ajax({
      url: pathWebservice + '/OR2OBB_SRV/'+type+'?'+jQuery.param(param),
      method: 'POST',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: headers,
      success: function(result, textStatus, xhr){
        if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Get Data Form
function wsObbGetData(callback, onbid){
	try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/FormFieldsSet(Onbid='"+onbid+"',ConsumerId='"+consumerId+"')",
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result.d);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Set Data Form
function wsObbSetData(callback, data, onbid){
	try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/FormFieldsSet(Onbid='"+onbid+"',ConsumerId='"+consumerId+"')",
      method: 'PUT',
      dataType: 'json',
      data: JSON.stringify(data),
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(true);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Speichern
function wsObbSave(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/Save?Onbid='"+data.onbid+"'&ConsumerId='"+consumerId+"'",
      method: 'POST',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(true);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Validieren
function wsObbValidate(callback, onbid){
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/Validate?Onbid='"+onbid+"'&ConsumerId='"+consumerId+"'",
      method: 'POST',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}

// OBB: Absenden
function wsObbSend(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + "/OR2OBB_SRV/Send?Onbid='"+data.onbid+"'&ConsumerId='"+consumerId+"'",
      method: 'POST',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result);
		    }
      },
      error: function(err){
      	callback(err);
      }
    });
  } catch (e) {console.log(e)};
}


function getLinkInterview(callback, id){
  if(id != 0){
    jQuery.ajax({
      url: pathRoot + '/wLayout-karriere/wGlobal/scripts/php/getApLinkInterview.php?id='+id,
      method: 'GET',
      contentType: "application/json; charset=utf-8",
      success: function(result){
        callback(result);
      },
      error: function(err){
      	callback(false);
      }
    });
  }
  else{
    callback(false);
  }
}

function getImageContact(callback, id){
  if(id != 0){
    jQuery.ajax({
      url: pathRoot + '/wLayout-karriere/wGlobal/scripts/php/getImageContact.php?id='+id,
      method: 'GET',
      contentType: "application/json; charset=utf-8",
      success: function(result){
        callback(result);
      },
      error: function(err){
      	callback(false);
      }
    });
  }
  else{
    callback(false);
  }
}


// MESSAGES
// Auflistung Topics
function wsTopicsList(callback){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_MAILING_SRV/TopicSet?$filter=ConsumerId%20eq%20%27'+consumerId+'%27',
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}
// Auflistung aller Messages
function wsMessagesList(callback){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_MAILING_SRV/PostingSet?$filter=ConsumerId%20eq%20%27'+consumerId+'%27',
      method: 'GET',
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}

// CreateTopic
function wsMessageCreateTopic(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_MAILING_SRV/TopicSet',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}

// CreateTopic
function wsMessageCreateMessage(callback, data){
  try {
    jQuery.ajax({
      url: pathWebservice + '/OR2_MAILING_SRV/PostingSet',
      method: 'POST',
      data: JSON.stringify(data),
      dataType: 'json',
      timeout: timeoutAjax,
      contentType: "application/json; charset=utf-8",
      headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
      success: function(result){
				if (callback && typeof(callback) === 'function') {
		      callback(result);
		    }
      },
      error: function(err){
      	callback(false);
      }
    });
  } catch (e) {console.log(e)};
}


// Pfad/ Hashwert in Datei speichern
function saveHashUrl(path, hash){
  jQuery.ajax({
    url: "/jobs/wLayout-karriere/wGlobal/scripts/php/search/hashUrl.php",
    data: "type=set&path="+path+"&hash="+hash,
    success: function(res){
    }
  });
}


// HILFSFUNKIONEN
// URL-Parameter auslesen
function getUrlParameter(sParam, sPageURL) {
  var sPageURLDef = window.location.search.substring(1);
  sPageURL = typeof sPageURL !== 'undefined' ? sPageURL.split('?')[1] : sPageURLDef;
  sPageURL = decodeURIComponent(sPageURL);
        var sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

function setUrlParameter_20191108(url, parameter, value){
  var url = new URL(url);
  var query_string = url.search;
  var search_params = new URLSearchParams(query_string);
  // new value of "id" is set to "101"
  search_params.set(parameter, value);
  // change the search property of the main url
  url.search = search_params.toString();
  // the new url string
  var new_url = url.toString();
  return new_url;
}

function setUrlParameter(url, param, value) {
   param = encodeURIComponent(param);
   var r = "([&?]|&amp;)" + param + "\\b(?:=(?:[^&#]*))*";
   var a = document.createElement('a');
   var regex = new RegExp(r);
   var str = param + (value ? "=" + encodeURIComponent(value) : "");
   a.href = url;
   var q = a.search.replace(regex, "$1"+str);
   if (q === a.search) {
      a.search += (a.search ? "&" : "") + str;
   } else {
      a.search = q;
   }
   return a.href;
}


function calculatePasswordStrength(password) {
	var checks = {};

	checks.upperCase = new passwordCheckCharCount(password, /[A-Z]/g, 1, 1);
	checks.lowerCase = new passwordCheckCharCount(password, /[a-z]/g, 1, 1);
	checks.numbers = new passwordCheckCharCount(password, /[0-9]/g, 1, 1);
	checks.specialChars = new passwordCheckCharCount(password, /[^A-Za-z0-9]/g, 1, 1);
	checks.totalChars = new passwordCheckCharCount(password, /./g, 8, 2);

	var ratingSum = 0;
	var weightSum = 0;

	$.each (checks, function(tmp, check) {
		ratingSum += check.weightedRating;
		weightSum += check.weight;
	});

	var ratingFinal = Math.round((ratingSum / weightSum) * 100); // in %

	return ratingFinal;
}

function passwordCheckCharCount(password, regExp, target, weight) {
	this.password       = password;
	this.regExp         = regExp;
	this.target         = target;
	this.weight         = weight;
	var matches         = password.match(regExp);
	this.count          = matches ? matches.length : 0;
	this.rating         = Math.min(1, (this.count / target));
	this.weightedRating = this.weight * this.rating;
}

function formatJsonDate(jsonDt){
  if(typeof(jsonDt) != 'undefined' && jsonDt != null){
    var MIN_DATE = -62135578800000; // const
    var date = new Date(parseInt(jsonDt.substr(6, jsonDt.length-8)));
    if(wLanguage == 'de'){
    	var dateFormat = date.getDate() + "." + (date.getMonth() + 1) +  "." + date.getFullYear();
    }
    else{
    	var dateFormat = (date.getMonth() + 1) + "/" + date.getDate() + "/" + date.getFullYear()
    }
    return date.toString() == new Date(MIN_DATE).toString() ? "" : dateFormat;
  }
  else{
    return null;
  }
}

// Gibt aus einem json-Date ein JS-Date-Objekt zruück
function json2Date(jsonDt){
  if(jsonDt != null){
    return new Date(parseInt(jsonDt.substr(6, jsonDt.length-8)));
  }
  else{
    return '';
  }
}

// Gibt aus einem deutschen Datum ein Date-Objekt zurück
function str2Date(input) {
  if(!input){
    return false;
  }
  var parts = input.match(/(\d+)/g);
  if(parts.length == 3){
    return new Date(parts[2], parts[1]-1, parts[0]);
  }
  else{
  	return new Date();
  }
}

// Formatiert ein Datum, so wie es der Webservice benötigt
function date2Webservice(date){
  if(!date){
    return false;
  }
	return date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate() + 'T00:00';
}

// Prüft ob ein Wert in einem Object enthalten ist (in Jobbörse verwendet)
function checkObjectHasValue(obj, key, value) {
    return obj.hasOwnProperty(key) && obj[key] === value;
}



// VALIDIERUNG REGISTRIERUNG
function checkMail(email){
	var expression = /^(\w|[.\-_])+@(\w|[.\-_])+\.\w{2,}$/;
	var isValid = expression.test(email);
	return isValid;
}

// Passwort-Stärke prüfen
function checkPasswordStrength(minPassStrength, field) {
	var limits;
	var password = field.val();
	var passwordStrength = calculatePasswordStrength(password);
	var errorIsPart = (minPassStrength >= 25);
	var classes = ['error', 'weak', 'medium', 'strong', 'best'];
	if (errorIsPart) {
		limits = [25, 50, 75, 100];
	} else {
		limits = [minPassStrength];
		var additionalLimits = classes.length - limits.length - 1;
		var step = (100 - minPassStrength) / additionalLimits;
		for (var i = 0; i < additionalLimits; i++) {
			limits.push(limits[i] + step);
		}
	}
	for (var i = 0; i < classes.length; i++) {
		field.removeClass(classes[i]);
	}
	var newLevel = classes.length - 1;
	for (var i = 0; i < limits.length; i++) {
		if (passwordStrength < limits[i]) {
			newLevel = i;
			break;
		}
	}
	field.addClass(classes[newLevel]);
	var strongEnough = (passwordStrength >= minPassStrength);
	return strongEnough;
}

// Passwort-Gleichheit prüfen
function checkPasswordsEqual(pw1, pw2) {
	var passwordsEqual = (pw1 == pw2);
	return passwordsEqual;
}

function openInNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}

function getStrFromIsoDate(date){
  var arrHour = date.match(/\d+H/g);
  var strHour = arrHour[0].replace('H', '');
  var arrMin = date.match(/\d+M/g);
  var strMin = arrMin[0].replace('M', '');
  return strHour + ':' + strMin;
}

function escapeRegExp(str) {
    return str.replace(/([.*+?^=!:${}()|\[\]\/\\])/g, "\\$1");
}
function replaceAll(str, find, replace) {
    return str.replace(new RegExp(escapeRegExp(find), 'g'), replace);
}

function strip_tags(str){
  return str.replace(/(<([^>]+)>)/ig,"");
}

// Ersetzt Sonderzeichen
function replaceSpecialChars(value){
  value = value.toLowerCase();
  value = value.replace(/ä/g, 'ae');
  value = value.replace(/ö/g, 'oe');
  value = value.replace(/ü/g, 'ue');
  value = value.replace(/ß/g, 'ss');
  value = value.replace(/ /g, '-');
  value = value.replace(/\//g, '-');
  value = value.replace(/\./g, '-');
  value = value.replace(/,/g, '-');
  value = value.replace(/\(/g, '-');
  value = value.replace(/\)/g, '-');
  value = value.replace(/--+/g, '-');
  value = encodeURIComponent(value);
  return value;
}

function replaceSpecialCharsJson(value){
  value = value.replace(/ä/g, 'ae');
  value = value.replace(/ö/g, 'oe');
  value = value.replace(/ü/g, 'ue');
  value = value.replace(/ß/g, 'ss');
  value = value.replace(/ /g, '-');
  value = value.replace(/\//g, ' ');
  value = value.replace(/\./g, '-');
  value = value.replace(/,/g, '-');
  value = value.replace(/\(/g, '-');
  value = value.replace(/\)/g, '-');
  value = value.replace(/--+/g, '-');
  value = encodeURIComponent(value);
  return value;
}

// String kürzen (ganze Wörter)
function truncate( n, useWordBoundary ){
  if (this.length <= n) { return this; }
  var subString = this.substr(0, n-1);
  return (useWordBoundary
     ? subString.substr(0, subString.lastIndexOf(' '))
     : subString) + "&hellip;";
};

// Sortierung von Arrays
function dynamicSort(property) {
    var sortOrder = 1;
    if(property[0] === "-") {
        sortOrder = -1;
        property = property.substr(1);
    }
    return function (a,b) {
        var result = (a[property] < b[property]) ? -1 : (a[property] > b[property]) ? 1 : 0;
        return result * sortOrder;
    }
}

function replaceQueryParam(param, newval, search) {
  var regex = new RegExp("([?;&])" + param + "[^&;]*[;&]?");
  var query = search.replace(regex, "$1").replace(/&$/, '');
  return (query.length > 2 ? query + "&" : "?") + (newval ? param + "=" + newval : '');
}

function addTarget2Links(text){
  text = text.replace(/(<a [^>]*)(target="[^"]*")([^>]*>)/gi, '$1$3');
  text = text.replace(/(<a [^>]*)(>)/gi, '$1 target="_blank"$2');
  return text;
}

/*
////////////////////////////////////////////////////////////////
//
// JavaScript Funktionen für die Navigation
//
// Weblication CMS BASE
// erstellt durch Scholl Communications AG, 77694 Kehl, www.scholl.de
// erstellt mit Weblication Content Management Server, www.weblication.de
//
////////////////////////////////////////////////////////////////
*/

wAllowMinimize=true;jQuery(document).ready(function(){if(typeof(wEditor)=='object'){return false;}maxSizeNavigationmenu=jQuery('html').data('widthnavigationmainmenumax')?jQuery('html').data('widthnavigationmainmenumax').replace(/px/, ''):2560;jQuery('a[data-previewlink]').each(function(){var id=jQuery(this).attr('id').replace(/navpoint_/, '');var embedMode=jQuery(this).closest('ul[data-embedmode]').attr('data-embedmode');jQuery(this).parent().addClass('hasMegaDropdown');var megaDropdownOpenType=jQuery('html').data('megadropdownopentype')?jQuery('html').data('megadropdownopentype'):'mouseenter';if(megaDropdownOpenType=='click'){jQuery(this).on('click touchstart', function(event){event.preventDefault();if(!jQuery('html').hasClass('megadropdown-open')){openMegaDropdown(id, jQuery(this).attr('data-previewlink'), {'mode':embedMode});}else{closeMegaDropdown(id);}return false;});jQuery(this).get(0).addEventListener("MSHoldVisual", function(e){e.preventDefault()}, false);jQuery(this).get(0).addEventListener("contextmenu", function(e){if(e.which!=3) e.preventDefault()}, false);}else{jQuery(this).on('mouseenter', function(){openMegaDropdown(id, jQuery(this).attr('data-previewlink'), {'mode':embedMode});});}openMegaDropdown(id, jQuery(this).attr('data-previewlink'), {'mode':embedMode, 'initToPreload':true});});jQuery('#navigationMain li > a').each(function(){jQuery(this).get(0).addEventListener("MSHoldVisual", function(e){e.preventDefault()}, false);jQuery(this).get(0).addEventListener("contextmenu", function(e){if(e.which!=3) e.preventDefault()}, false);});jQuery('#navigationMain li > a').each(function(){if(jQuery(this).siblings('ul, div').length > 0){jQuery(this).attr('aria-haspopup', 'true');}});jQuery('#navigationMainToggler').on('click', function(){navigationToggler_onclick(this);});jQuery('.navpointToggler').on('click', function(){navpointToggler_onclick(this);});jQuery('.navpointToggler:visible').prev('span').on('click', function(){navpointToggler_onclick(jQuery(this).next('.navpointToggler'));});jQuery('.footerNavigationToggler').on('click', function(){jQuery(this).toggleClass('open');jQuery(this).parent().next('.footerNavigationContent').animate({'height':'toggle'});});jQuery('.submapNavigationToggler').on('click', function(){jQuery(this).toggleClass('open');jQuery(this).parent().next('.firstLevel').animate({'height':'toggle'});});jQuery('#navigationAccount .navigationAccountNavigationOpener').on('click', function(){jQuery(this).toggleClass('open');jQuery(this).next('.navigationAccountContent').animate({'height':'toggle'});});jQuery('#navigationApplicationNavigationOpener').on('click', function(){jQuery(this).toggleClass('open');jQuery(this).next('#elementListStatusApplication').animate({'height':'toggle'});jQuery(this).next('#elementListFormApplication').animate({'height':'toggle'});});jQuery('body').click(function(event) {if(!$(event.target).is('#navigationApplicationNavigationOpener')&&$('#navigationApplicationNavigationOpener').has(event.target).length===0) {if ($('#elementListStatusApplication').is(':visible')||$('#elementListFormApplication').is(':visible')) {if ((!$(event.target).is('#elementListStatusApplication')&&$('#elementListStatusApplication').has(event.target).length===0)
&&(!$(event.target).is('#elementListFormApplication')&&$('#elementListFormApplication').has(event.target).length===0)
&&(!$(event.target).is('#elementFormApplicationNavigation')&&$('#elementFormApplicationNavigation').has(event.target).length===0) ) {jQuery('#navigationApplicationNavigationOpener').toggleClass('open');jQuery('#elementListStatusApplication').animate({'height':'toggle'});if(window.innerWidth <=768) {jQuery('#elementListFormApplication').animate({'height':'toggle'});}}}}});jQuery('#navigationMain li > a').on('click touchstart', function(event){navpoint_onclick(this, jQuery(this).parent().parent().data('navlevel'), event);});jQuery('#navigationMain li').on('mouseenter', function(event){navpoint_onmouseenter(this, jQuery(this).parent().data('navlevel'), event);});jQuery('#navigationMain li').on('mouseleave', function(event){navpoint_onmouseleave(this, jQuery(this).parent().data('navlevel'), event);});jQuery('body').on('click touchstart', function(event){if(window['wglTouchStartedNavlayers']){var timeTouchstartBody=new Date().getTime();var timeDiffTouch=timeTouchstartBody-window['wglTouchStartedNavlayers'];if(timeDiffTouch > 100){jQuery('a[data-has-already-touched="1"]').attr('data-has-already-touched', '');}}});jQuery('body').append('<div id="navlayer-background"/>');});openMegaDropdown=function(id, url, options){var windowWidth=jQuery(window).width();if(windowWidth < maxSizeNavigationmenu){return false;}var mode=options['mode'];var initToPreload=options['initToPreload'];var navPoint=jQuery('#navpoint_' + id);if(navPoint.data('hasLoaded')=='1'){megadropdown_onopen(id);}else if(mode!='iframe'){var elementToAppend=navPoint.parent();elementToAppend.append('<div class="navLevelEmbed" id="navEmbed_' + id + '"></div>');elementToAppend.addClass('hasMegaDropdown');url +=(url.indexOf('?')==-1?'?':'&') + 'viewmode=embed';if(typeof(wNavidStandard)!='undefined'&&wNavidStandard!=''){url +='&navid=' + wNavidStandard;}url=url.replace('[URL]', location.pathname + location.search);jQuery.ajax({type:"GET",url:url,async:true,success:function(result){result=result.replace(/\n/g, '_wNL-');result=result.replace(/(\s+id=")([^"]+)(")/gi, function(matches, p1, p2, p3){if(!document.getElementById(p2)){return p1 + p2 + p3;}return '';});result=result.replace(/^.*<!--\s*CONTENT:START\s*-->/im, '');result=result.replace(/<!--\s*CONTENT:STOP\s*-->.*$/im, '');result=result.replace(/_wNL-/g, "\n");elementToAppend.find('.navLevelEmbed').html(result);navPoint.data('hasLoaded', '1');if(!initToPreload){megadropdown_onopen(id);}}});}else{var elementToAppend=navPoint.parent();elementToAppend.append('<div class="navLevelEmbed" id="navEmbed_' + id + '"></div>');elementToAppend.addClass('hasMegaDropdown');url=url.indexOf('?')==-1?url + '?parentIframeId=navEmbedIframe_'+id:url + '&parentIframeId=navEmbedIframe_'+id;url=url.indexOf('dropdown')==-1?url + '&viewmode=blank':url;url=url.replace('[URL]', location.pathname + location.search);navPoint.data('hasLoaded', '1');var iframeEmbed=document.createElement('iframe');iframeEmbed.id='navEmbedIframe_' + id;iframeEmbed.className='navLevel1Embed';iframeEmbed.frameBorder='0';iframeEmbed.scrolling='no';iframeEmbed.src=url;elementToAppend.find('.navLevelEmbed').append(iframeEmbed);navPoint.data('hasLoaded', '1');if(!initToPreload){megadropdown_onopen(id);}}};closeMegaDropdown=function(id){jQuery('#navEmbed_' + id).hide({'duration':0, 'queue':false});megadropdown_onclose(id);};closeNavigationMenu=function(){jQuery('html').removeClass('navmenu-open');jQuery(wUiTmp['elementNavigationToggler']).removeClass('open');};navigationToggler_onclick=function(element){wUiTmp['elementNavigationToggler']=element;jQuery(element).toggleClass('open');if(jQuery('#navlayer-background').length==0){jQuery('body').append('<div id="navlayer-background"/>');}if(!jQuery('html').hasClass('navmenu-open')){jQuery('html').addClass('navmenu-open');}else{jQuery('html').removeClass('navmenu-open');jQuery('nav li.displaySub').removeClass('displaySub');}if(!wUiTmp['hasAddEventToRestoreNavigationToggler']){jQuery(window).on('resize', function(event){if(event.isTrigger&&jQuery('html').hasClass('navmenu-open')){var windowWidth=jQuery(window).width();try{if(windowWidth >=maxSizeNavigationmenu&&wDocument.element('#navigationMainToggler')&&window.getComputedStyle(wDocument.element('#navigationMainToggler')).getPropertyValue('display')=='none'){closeNavigationMenu();}}catch(e){}}});wUiTmp['hasAddEventToRestoreNavigationToggler']=true;}};navpointToggler_onclick=function(element){jQuery('.navpointToggler.open').not(element).next('.ulWrapperL1').animate({'height':'toggle'});jQuery('.navpointToggler.open').not(element).removeClass('open');jQuery(element).toggleClass('open');if(jQuery(element).data('ontoggle')=='toggleClassNavpoint'){jQuery(element).parent().toggleClass('displaySub');}else{jQuery(element).next('.ulWrapperL1').animate({'height':'toggle'});jQuery(element).next('.ulWrapperL1').css({'visibility':'visible'});jQuery(element).next('.ulWrapperL1 > ulWrapperL1Inner > ul').css({'visibility':'visible'});}};navpoint_onclick=function(element, level, event){var navPoint=jQuery(element).parent();adjustNavlayer(navPoint);var windowWidth=jQuery(window).width();var preventedClick=false;if(windowWidth >=maxSizeNavigationmenu){if(jQuery(element).parent('.open, .openSelected, .openDescendantSelected').find('> .ulWrapperL1').length > 0){if(event.type=='touchstart'){window['wglTouchStartedNavlayers']=new Date().getTime();if(jQuery(element).attr('data-has-already-touched')!='1'){jQuery(element).attr('data-has-just-touched', '1');window.setTimeout(function(){jQuery(element).attr('data-has-just-touched', '0');}, 300);jQuery(element).parent().parent().find('> li > a').attr('data-has-already-touched', '');jQuery(element).attr('data-has-already-touched', '1');preventedClick=true;}}else{if(jQuery(element).attr('data-has-already-touched')=='1'){if(jQuery(element).attr('data-has-just-touched')=='1'){event.preventDefault();return false;}}return false;}}}if(!preventedClick&&jQuery('html').hasClass('navmenu-open')){if(event.type!='touchstart'){window.setTimeout(function(){closeNavigationMenu();}, 320);}}};navpoint_onmouseenter=function(element, level){var navPoint=jQuery(element);adjustNavlayer(navPoint);if(!jQuery('html').hasClass('navmenu-open')){var layersSub=navPoint.find('> ul');if(layersSub.length!=0&&level==1){jQuery('html').addClass('navlayer-open');}}};navpoint_onmouseleave=function(element, level){var navPoint=jQuery(element);var layersSub=navPoint.find('> ul');if(level==1){jQuery('html').removeClass('navlayer-open');}};megadropdown_onopen=function(id){if(jQuery('html').hasClass('navmenu-open')){return false;}var navPoint=jQuery('#navpoint_' + id);jQuery('#navEmbed_' + id).fadeIn({'duration':0, 'queue':false});if(jQuery('#navlayer-background').length==0){jQuery('body').append('<div id="navlayer-background"/>');}jQuery('html').addClass('megadropdown-open');if(navPoint.data('hasEvents')!='1'){jQuery('#navEmbed_' + id).on('mouseenter', function(event){jQuery('#navEmbed_' + id).fadeIn({'duration':0, 'queue':false});jQuery('html').addClass('megadropdown-open');});jQuery('#navEmbed_' + id).parent().on('mouseleave', function(event){closeMegaDropdown(id);});jQuery('.wglBannerSlider').wBannerSlider();jQuery('.wglPictureGallery').wPictureGallery();navPoint.data('hasEvents', '1');}jQuery(window).trigger('resize');};megadropdown_onclose=function(id){jQuery('html').removeClass('megadropdown-open');};adjustNavlayer=function(navPoint){var windowWidth=jQuery(window).width();if(windowWidth >=maxSizeNavigationmenu){if(navPoint.closest('ul[data-adaptlayer="1"]').length!=0){if(navPoint.find('> ul').length > 0){if(navPoint.parent().data('navlevel')=='1'){widthMain=Math.round(navPoint[0].getBoundingClientRect().width * 2) / 2;widthSub=navPoint.find('ul').width();if(widthSub <=widthMain){navPoint.find('> ul').css({'width':String(widthMain) + 'px'});}var limitNavigationArea=jQuery(window).width();if(navPoint.closest('.wglNavigationLayerLimitArea').length > 0){limitNavigationArea=navPoint.closest('.wglNavigationLayerLimitArea').offset().left + navPoint.closest('.wglNavigationLayerLimitArea').width();}var diffWidthLayer=limitNavigationArea-navPoint.find('ul').offset().left-navPoint.find('ul').outerWidth();var diffWidthLayerSub=navPoint.find('ul').outerWidth();if(diffWidthLayer < 0){navPoint.find('> ul').css({'margin-left':diffWidthLayer});navPoint.find('> ul').addClass('subleftside');}else if(diffWidthLayer < diffWidthLayerSub){navPoint.find('> ul').addClass('subleftside');}else{navPoint.find('> ul').addClass('subrightside');}}else{if(jQuery(window).width()-navPoint.offset().left-navPoint.width() * 3-4 < 0){navPoint.find('> ul').css({'margin-left':diffWidthLayer});navPoint.find('> ul').addClass('subleftside');}else{navPoint.find('> ul').addClass('subrightside');}var diffTop=navPoint.offset().top-jQuery(window).scrollTop();var diffBottom=jQuery(window).height() + jQuery(window).scrollTop()-navPoint.offset().top-navPoint.find('ul').height();if(diffBottom < 20){var diffMargin=(-diffBottom > diffTop?-diffTop + 20:diffBottom-20);navPoint.find('> ul').css({'margin-top':String(diffMargin) + 'px'});}}}}}};
/*
////////////////////////////////////////////////////////////////
//
// JavaScript Funktionen für Listen
//
// Weblication CMS BASE
// erstellt durch Scholl Communications AG, 77694 Kehl, www.scholl.de
// erstellt mit Weblication Content Management Server, www.weblication.de
//
////////////////////////////////////////////////////////////////
*/

wAllowMinimize=true;appendEntriesToList=function(listId, options){if(typeof(wEditor)!='undefined'){return;}if(typeof(options)=='undefined'|| !options['querystring']){options['querystring']='&' + location.search.substr(1);}var url=pathRoot + '/weblication/grid5/scripts/wList.php?action=createListAjaxOfData&listId=' + listId + '&project=' + options['project'] + '&data=' + options['ajaxId'] + '&pageId=' + options['pageId'] + options['querystring'];if(jQuery('#list_' + listId).length){jQuery('html').addClass('appendLoading');jQuery('#list_' + listId).addClass('appendLoading');jQuery('#list_' + listId).find('ul').addClass('appendLoading');}jQuery.ajax({type:"GET", url:url, dataType:'html', success:function(resultHTML){var domain=window.location.hostname;if(domain.match(/otto\.de/i)){resultHTML=resultHTML.replace(/\/media-karriere\//g, '/jobs/media-karriere/');}if(jQuery('#list_' + listId).length){jQuery('html').removeClass('appendLoading');jQuery('#list_' + listId).removeClass('appendLoading').addClass('appendLoaded');jQuery('#list_' + listId).find('ul').removeClass('appendLoading').addClass('appendLoaded');}var parsedHTML=jQuery(resultHTML);var listElement=jQuery('#list_' + listId);parsedHTML.find("li").each(function(index){var entryToAppend=jQuery(this);listElement.find('ul').append(entryToAppend);entryToAppend.addClass('append').addClass('appendInit').addClass('appendInitDelay');window.setTimeout(function(){entryToAppend.removeClass('appendInit');}, 10);window.setTimeout(function(){entryToAppend.removeClass('appendInitDelay');}, 10 + 100 * index);});listElement.find(".listLoaderMore").replaceWith(parsedHTML.filter(".listLoaderMore"));wPrepareHTML();window.setTimeout(function(){jQuery(window).trigger('resize');}, 100);window.setTimeout(function(){jQuery(window).trigger('resize');}, 500);window.setTimeout(function(){jQuery(window).trigger('resize');}, 1000);var regExpCurrentLoadId=new RegExp('&?moreId' + listId + '=\\d+');var newLocationSearch=location.search.replace(regExpCurrentLoadId, '');newLocationSearch +=(newLocationSearch.indexOf('?')==-1?'?':'&') + 'moreId' + listId + '=' + options['pageId'];newLocationSearch=newLocationSearch.replace('?&', '?');history.pushState({page:location.pathname + newLocationSearch + location.hash}, '', location.pathname + newLocationSearch + location.hash);}});};filterCategory=function(category, categoryName){var regExpReplace=new RegExp(categoryName + '(\\[\\])?=\\w+');location.href=location.pathname + (location.search.replace(regExpReplace, '') + (location.search.indexOf('?')==-1?'?':'&') + categoryName + '[]=' + category).replace(/\&+/, '&').replace(/\?\&/, '?') + location.hash;};
/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
/*!
 * skrollr core
 *
 * Alexander Prinzhorn - https://github.com/Prinzhorn/skrollr
 *
 * Free to use under terms of MIT license
 */
(function(window, document, undefined) {
	'use strict';

	/*
	 * Global api.
	 */
	var skrollr = window.skrollr = {
		get: function() {
			return _instance;
		},
		//Main entry point.
		init: function(options) {
			return _instance || new Skrollr(options);
		},
		VERSION: '0.6.21'
	};

	//Minify optimization.
	var hasProp = Object.prototype.hasOwnProperty;
	var Math = window.Math;
	var getStyle = window.getComputedStyle;

	//They will be filled when skrollr gets initialized.
	var documentElement;
	var body;

	var EVENT_TOUCHSTART = 'touchstart';
	var EVENT_TOUCHMOVE = 'touchmove';
	var EVENT_TOUCHCANCEL = 'touchcancel';
	var EVENT_TOUCHEND = 'touchend';

	var SKROLLABLE_CLASS = 'skrollable';
	var SKROLLABLE_BEFORE_CLASS = SKROLLABLE_CLASS + '-before';
	var SKROLLABLE_BETWEEN_CLASS = SKROLLABLE_CLASS + '-between';
	var SKROLLABLE_AFTER_CLASS = SKROLLABLE_CLASS + '-after';

	var SKROLLR_CLASS = 'skrollr';
	var NO_SKROLLR_CLASS = 'no-' + SKROLLR_CLASS;
	var SKROLLR_DESKTOP_CLASS = SKROLLR_CLASS + '-desktop';
	var SKROLLR_MOBILE_CLASS = SKROLLR_CLASS + '-mobile';

	var DEFAULT_EASING = 'linear';
	var DEFAULT_DURATION = 1000;//ms
	var DEFAULT_MOBILE_DECELERATION = 0.004;//pixel/ms²

	var DEFAULT_SMOOTH_SCROLLING_DURATION = 200;//ms

	var ANCHOR_START = 'start';
	var ANCHOR_END = 'end';
	var ANCHOR_CENTER = 'center';
	var ANCHOR_BOTTOM = 'bottom';

	//The property which will be added to the DOM element to hold the ID of the skrollable.
	var SKROLLABLE_ID_DOM_PROPERTY = '___skrollable_id';

	var rxTouchIgnoreTags = /^(?:input|textarea|button|select)$/i;

	var rxTrim = /^\s+|\s+$/g;

	//Find all data-attributes. data-[_constant]-[offset]-[anchor]-[anchor].
	var rxKeyframeAttribute = /^data(?:-(_\w+))?(?:-?(-?\d*\.?\d+p?))?(?:-?(start|end|top|center|bottom))?(?:-?(top|center|bottom))?$/;

	var rxPropValue = /\s*([\w\-\[\]]+)\s*:\s*(.+?)\s*(?:;|$)/gi;

	//Easing function names follow the property in square brackets.
	var rxPropEasing = /^([a-z\-]+)\[(\w+)\]$/;

	var rxCamelCase = /-([a-z])/g;
	var rxCamelCaseFn = function(str, letter) {
		return letter.toUpperCase();
	};

	//Numeric values with optional sign.
	var rxNumericValue = /[\-+]?[\d]*\.?[\d]+/g;

	//Used to replace occurences of {?} with a number.
	var rxInterpolateString = /\{\?\}/g;

	//Finds rgb(a) colors, which don't use the percentage notation.
	var rxRGBAIntegerColor = /rgba?\(\s*-?\d+\s*,\s*-?\d+\s*,\s*-?\d+/g;

	//Finds all gradients.
	var rxGradient = /[a-z\-]+-gradient/g;

	//Vendor prefix. Will be set once skrollr gets initialized.
	var theCSSPrefix = '';
	var theDashedCSSPrefix = '';

	//Will be called once (when skrollr gets initialized).
	var detectCSSPrefix = function() {
		//Only relevant prefixes. May be extended.
		//Could be dangerous if there will ever be a CSS property which actually starts with "ms". Don't hope so.
		var rxPrefixes = /^(?:O|Moz|webkit|ms)|(?:-(?:o|moz|webkit|ms)-)/;

		//Detect prefix for current browser by finding the first property using a prefix.
		if(!getStyle) {
			return;
		}

		var style = getStyle(body, null);

		for(var k in style) {
			//We check the key and if the key is a number, we check the value as well, because safari's getComputedStyle returns some weird array-like thingy.
			theCSSPrefix = (k.match(rxPrefixes) || (+k == k && style[k].match(rxPrefixes)));

			if(theCSSPrefix) {
				break;
			}
		}

		//Did we even detect a prefix?
		if(!theCSSPrefix) {
			theCSSPrefix = theDashedCSSPrefix = '';

			return;
		}

		theCSSPrefix = theCSSPrefix[0];

		//We could have detected either a dashed prefix or this camelCaseish-inconsistent stuff.
		if(theCSSPrefix.slice(0,1) === '-') {
			theDashedCSSPrefix = theCSSPrefix;

			//There's no logic behind these. Need a look up.
			theCSSPrefix = ({
				'-webkit-': 'webkit',
				'-moz-': 'Moz',
				'-ms-': 'ms',
				'-o-': 'O'
			})[theCSSPrefix];
		} else {
			theDashedCSSPrefix = '-' + theCSSPrefix.toLowerCase() + '-';
		}
	};

	var polyfillRAF = function() {
		var requestAnimFrame = window.requestAnimationFrame || window[theCSSPrefix.toLowerCase() + 'RequestAnimationFrame'];

		var lastTime = _now();

		if(_isMobile || !requestAnimFrame) {
			requestAnimFrame = function(callback) {
				//How long did it take to render?
				var deltaTime = _now() - lastTime;
				var delay = Math.max(0, 1000 / 60 - deltaTime);

				return window.setTimeout(function() {
					lastTime = _now();
					callback();
				}, delay);
			};
		}

		return requestAnimFrame;
	};

	var polyfillCAF = function() {
		var cancelAnimFrame = window.cancelAnimationFrame || window[theCSSPrefix.toLowerCase() + 'CancelAnimationFrame'];

		if(_isMobile || !cancelAnimFrame) {
			cancelAnimFrame = function(timeout) {
				return window.clearTimeout(timeout);
			};
		}

		return cancelAnimFrame;
	};

	//Built-in easing functions.
	var easings = {
		begin: function() {
			return 0;
		},
		end: function() {
			return 1;
		},
		linear: function(p) {
			return p;
		},
		quadratic: function(p) {
			return p * p;
		},
		cubic: function(p) {
			return p * p * p;
		},
		swing: function(p) {
			return (-Math.cos(p * Math.PI) / 2) + 0.5;
		},
		sqrt: function(p) {
			return Math.sqrt(p);
		},
		outCubic: function(p) {
			return (Math.pow((p - 1), 3) + 1);
		},
		//see https://www.desmos.com/calculator/tbr20s8vd2 for how I did this
		bounce: function(p) {
			var a;

			if(p <= 0.5083) {
				a = 3;
			} else if(p <= 0.8489) {
				a = 9;
			} else if(p <= 0.96208) {
				a = 27;
			} else if(p <= 0.99981) {
				a = 91;
			} else {
				return 1;
			}

			return 1 - Math.abs(3 * Math.cos(p * a * 1.028) / a);
		}
	};

	/**
	 * Constructor.
	 */
	function Skrollr(options) {
		documentElement = document.documentElement;
		body = document.body;

		detectCSSPrefix();

		_instance = this;

		options = options || {};

		_constants = options.constants || {};

		//We allow defining custom easings or overwrite existing.
		if(options.easing) {
			for(var e in options.easing) {
				easings[e] = options.easing[e];
			}
		}

		_edgeStrategy = options.edgeStrategy || 'set';

		_listeners = {
			//Function to be called right before rendering.
			beforerender: options.beforerender,

			//Function to be called right after finishing rendering.
			render: options.render
		};

		//forceHeight is true by default
		_forceHeight = options.forceHeight !== false;

		if(_forceHeight) {
			_scale = options.scale || 1;
		}

		_mobileDeceleration = options.mobileDeceleration || DEFAULT_MOBILE_DECELERATION;

		_smoothScrollingEnabled = options.smoothScrolling !== false;
		_smoothScrollingDuration = options.smoothScrollingDuration || DEFAULT_SMOOTH_SCROLLING_DURATION;

		//Dummy object. Will be overwritten in the _render method when smooth scrolling is calculated.
		_smoothScrolling = {
			targetTop: _instance.getScrollTop()
		};

		//A custom check function may be passed.
		_isMobile = ((options.mobileCheck || function() {
			return (/Android|iPhone|iPad|iPod|BlackBerry/i).test(navigator.userAgent || navigator.vendor || window.opera);
		})());

		if(_isMobile) {
			_skrollrBody = document.getElementById('skrollr-body');

			//Detect 3d transform if there's a skrollr-body (only needed for #skrollr-body).
			if(_skrollrBody) {
				_detect3DTransforms();
			}

			_initMobile();
			_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_MOBILE_CLASS], [NO_SKROLLR_CLASS]);
		} else {
			_updateClass(documentElement, [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS], [NO_SKROLLR_CLASS]);
		}

		//Triggers parsing of elements and a first reflow.
		_instance.refresh();

		_addEvent(window, 'resize orientationchange', function() {
			var width = documentElement.clientWidth;
			var height = documentElement.clientHeight;

			//Only reflow if the size actually changed (#271).
			if(height !== _lastViewportHeight || width !== _lastViewportWidth) {
				_lastViewportHeight = height;
				_lastViewportWidth = width;

				_requestReflow = true;
			}
		});

		var requestAnimFrame = polyfillRAF();

		//Let's go.
		(function animloop(){
			_render();
			_animFrame = requestAnimFrame(animloop);
		}());

		return _instance;
	}

	/**
	 * (Re)parses some or all elements.
	 */
	Skrollr.prototype.refresh = function(elements) {
		var elementIndex;
		var elementsLength;
		var ignoreID = false;

		//Completely reparse anything without argument.
		if(elements === undefined) {
			//Ignore that some elements may already have a skrollable ID.
			ignoreID = true;

			_skrollables = [];
			_skrollableIdCounter = 0;

			elements = document.getElementsByTagName('*');
		} else {
			//We accept a single element or an array of elements.
			elements = [].concat(elements);
		}

		elementIndex = 0;
		elementsLength = elements.length;

		for(; elementIndex < elementsLength; elementIndex++) {
			var el = elements[elementIndex];
			var anchorTarget = el;
			var keyFrames = [];

			//If this particular element should be smooth scrolled.
			var smoothScrollThis = _smoothScrollingEnabled;

			//The edge strategy for this particular element.
			var edgeStrategy = _edgeStrategy;

			if(!el.attributes) {
				continue;
			}

			//Iterate over all attributes and search for key frame attributes.
			var attributeIndex = 0;
			var attributesLength = el.attributes.length;

			for (; attributeIndex < attributesLength; attributeIndex++) {
				var attr = el.attributes[attributeIndex];

				if(attr.name === 'data-anchor-target') {
					anchorTarget = document.querySelector(attr.value);

					if(anchorTarget === null) {
						throw 'Unable to find anchor target "' + attr.value + '"';
					}

					continue;
				}

				//Global smooth scrolling can be overridden by the element attribute.
				if(attr.name === 'data-smooth-scrolling') {
					smoothScrollThis = attr.value !== 'off';

					continue;
				}

				//Global edge strategy can be overridden by the element attribute.
				if(attr.name === 'data-edge-strategy') {
					edgeStrategy = attr.value;

					continue;
				}

				var match = attr.name.match(rxKeyframeAttribute);

				if(match === null) {
					continue;
				}

				var kf = {
					props: attr.value,
					//Point back to the element as well.
					element: el
				};

				keyFrames.push(kf);

				var constant = match[1];

				if(constant) {
					//Strip the underscore prefix.
					kf.constant = constant.substr(1);
				}

				//Get the key frame offset.
				var offset = match[2];

				//Is it a percentage offset?
				if(/p$/.test(offset)) {
					kf.isPercentage = true;
					kf.offset = (offset.slice(0, -1) | 0) / 100;
				} else {
					kf.offset = (offset | 0);
				}

				var anchor1 = match[3];

				//If second anchor is not set, the first will be taken for both.
				var anchor2 = match[4] || anchor1;

				//"absolute" (or "classic") mode, where numbers mean absolute scroll offset.
				if(!anchor1 || anchor1 === ANCHOR_START || anchor1 === ANCHOR_END) {
					kf.mode = 'absolute';

					//data-end needs to be calculated after all key frames are known.
					if(anchor1 === ANCHOR_END) {
						kf.isEnd = true;
					} else if(!kf.isPercentage) {
						//For data-start we can already set the key frame w/o calculations.
						//#59: "scale" options should only affect absolute mode.
						kf.offset = kf.offset * _scale;
					}
				}
				//"relative" mode, where numbers are relative to anchors.
				else {
					kf.mode = 'relative';
					kf.anchors = [anchor1, anchor2];
				}
			}

			//Does this element have key frames?
			if(!keyFrames.length) {
				continue;
			}

			//Will hold the original style and class attributes before we controlled the element (see #80).
			var styleAttr, classAttr;

			var id;

			if(!ignoreID && SKROLLABLE_ID_DOM_PROPERTY in el) {
				//We already have this element under control. Grab the corresponding skrollable id.
				id = el[SKROLLABLE_ID_DOM_PROPERTY];
				styleAttr = _skrollables[id].styleAttr;
				classAttr = _skrollables[id].classAttr;
			} else {
				//It's an unknown element. Asign it a new skrollable id.
				id = (el[SKROLLABLE_ID_DOM_PROPERTY] = _skrollableIdCounter++);
				styleAttr = el.style.cssText;
				classAttr = _getClass(el);
			}

			_skrollables[id] = {
				element: el,
				styleAttr: styleAttr,
				classAttr: classAttr,
				anchorTarget: anchorTarget,
				keyFrames: keyFrames,
				smoothScrolling: smoothScrollThis,
				edgeStrategy: edgeStrategy
			};

			_updateClass(el, [SKROLLABLE_CLASS], []);
		}

		//Reflow for the first time.
		_reflow();

		//Now that we got all key frame numbers right, actually parse the properties.
		elementIndex = 0;
		elementsLength = elements.length;

		for(; elementIndex < elementsLength; elementIndex++) {
			var sk = _skrollables[elements[elementIndex][SKROLLABLE_ID_DOM_PROPERTY]];

			if(sk === undefined) {
				continue;
			}

			//Parse the property string to objects
			_parseProps(sk);

			//Fill key frames with missing properties from left and right
			_fillProps(sk);
		}

		return _instance;
	};

	/**
	 * Transform "relative" mode to "absolute" mode.
	 * That is, calculate anchor position and offset of element.
	 */
	Skrollr.prototype.relativeToAbsolute = function(element, viewportAnchor, elementAnchor) {
		var viewportHeight = documentElement.clientHeight;
		var box = element.getBoundingClientRect();
		var absolute = box.top;

		//#100: IE doesn't supply "height" with getBoundingClientRect.
		var boxHeight = box.bottom - box.top;

		if(viewportAnchor === ANCHOR_BOTTOM) {
			absolute -= viewportHeight;
		} else if(viewportAnchor === ANCHOR_CENTER) {
			absolute -= viewportHeight / 2;
		}

		if(elementAnchor === ANCHOR_BOTTOM) {
			absolute += boxHeight;
		} else if(elementAnchor === ANCHOR_CENTER) {
			absolute += boxHeight / 2;
		}

		//Compensate scrolling since getBoundingClientRect is relative to viewport.
		absolute += _instance.getScrollTop();

		return (absolute + 0.5) | 0;
	};

	/**
	 * Animates scroll top to new position.
	 */
	Skrollr.prototype.animateTo = function(top, options) {
		options = options || {};

		var now = _now();
		var scrollTop = _instance.getScrollTop();

		//Setting this to a new value will automatically cause the current animation to stop, if any.
		_scrollAnimation = {
			startTop: scrollTop,
			topDiff: top - scrollTop,
			targetTop: top,
			duration: options.duration || DEFAULT_DURATION,
			startTime: now,
			endTime: now + (options.duration || DEFAULT_DURATION),
			easing: easings[options.easing || DEFAULT_EASING],
			done: options.done
		};

		//Don't queue the animation if there's nothing to animate.
		if(!_scrollAnimation.topDiff) {
			if(_scrollAnimation.done) {
				_scrollAnimation.done.call(_instance, false);
			}

			_scrollAnimation = undefined;
		}

		return _instance;
	};

	/**
	 * Stops animateTo animation.
	 */
	Skrollr.prototype.stopAnimateTo = function() {
		if(_scrollAnimation && _scrollAnimation.done) {
			_scrollAnimation.done.call(_instance, true);
		}

		_scrollAnimation = undefined;
	};

	/**
	 * Returns if an animation caused by animateTo is currently running.
	 */
	Skrollr.prototype.isAnimatingTo = function() {
		return !!_scrollAnimation;
	};

	Skrollr.prototype.setScrollTop = function(top, force) {
		_forceRender = (force === true);

		if(_isMobile) {
			_mobileOffset = Math.min(Math.max(top, 0), _maxKeyFrame);
		} else {
			window.scrollTo(0, top);
		}

		return _instance;
	};

	Skrollr.prototype.getScrollTop = function() {
		if(_isMobile) {
			return _mobileOffset;
		} else {
			return window.pageYOffset || documentElement.scrollTop || body.scrollTop || 0;
		}
	};

	Skrollr.prototype.getMaxScrollTop = function() {
		return _maxKeyFrame;
	};

	Skrollr.prototype.on = function(name, fn) {
		_listeners[name] = fn;

		return _instance;
	};

	Skrollr.prototype.off = function(name) {
		delete _listeners[name];

		return _instance;
	};

	Skrollr.prototype.destroy = function() {
		var cancelAnimFrame = polyfillCAF();
		cancelAnimFrame(_animFrame);
		_removeAllEvents();

		_updateClass(documentElement, [NO_SKROLLR_CLASS], [SKROLLR_CLASS, SKROLLR_DESKTOP_CLASS, SKROLLR_MOBILE_CLASS]);

		var skrollableIndex = 0;
		var skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			_reset(_skrollables[skrollableIndex].element);
		}

		documentElement.style.overflow = body.style.overflow = 'auto';
		documentElement.style.height = body.style.height = 'auto';

		if(_skrollrBody) {
			skrollr.setStyle(_skrollrBody, 'transform', 'none');
		}

		_instance = undefined;
		_skrollrBody = undefined;
		_listeners = undefined;
		_forceHeight = undefined;
		_maxKeyFrame = 0;
		_scale = 1;
		_constants = undefined;
		_mobileDeceleration = undefined;
		_direction = 'down';
		_lastTop = -1;
		_lastViewportWidth = 0;
		_lastViewportHeight = 0;
		_requestReflow = false;
		_scrollAnimation = undefined;
		_smoothScrollingEnabled = undefined;
		_smoothScrollingDuration = undefined;
		_smoothScrolling = undefined;
		_forceRender = undefined;
		_skrollableIdCounter = 0;
		_edgeStrategy = undefined;
		_isMobile = false;
		_mobileOffset = 0;
		_translateZ = undefined;
	};

	/*
		Private methods.
	*/

	var _initMobile = function() {
		var initialElement;
		var initialTouchY;
		var initialTouchX;
		var currentElement;
		var currentTouchY;
		var currentTouchX;
		var lastTouchY;
		var deltaY;

		var initialTouchTime;
		var currentTouchTime;
		var lastTouchTime;
		var deltaTime;

		_addEvent(documentElement, [EVENT_TOUCHSTART, EVENT_TOUCHMOVE, EVENT_TOUCHCANCEL, EVENT_TOUCHEND].join(' '), function(e) {
			var touch = e.changedTouches[0];

			currentElement = e.target;

			//We don't want text nodes.
			while(currentElement.nodeType === 3) {
				currentElement = currentElement.parentNode;
			}

			currentTouchY = touch.clientY;
			currentTouchX = touch.clientX;
			currentTouchTime = e.timeStamp;

			if(!rxTouchIgnoreTags.test(currentElement.tagName) && e.type !== EVENT_TOUCHSTART) {
				e.preventDefault();
			}

			switch(e.type) {
				case EVENT_TOUCHSTART:
					//The last element we tapped on.
					if(initialElement) {
						initialElement.blur();
					}

					_instance.stopAnimateTo();

					initialElement = currentElement;

					initialTouchY = lastTouchY = currentTouchY;
					initialTouchX = currentTouchX;
					initialTouchTime = currentTouchTime;

					break;
				case EVENT_TOUCHMOVE:
					//Prevent default event on touchIgnore elements in case they don't have focus yet.
					if(rxTouchIgnoreTags.test(currentElement.tagName) && document.activeElement !== currentElement) {
						e.preventDefault();
					}

					deltaY = currentTouchY - lastTouchY;
					deltaTime = currentTouchTime - lastTouchTime;

					_instance.setScrollTop(_mobileOffset - deltaY, true);

					lastTouchY = currentTouchY;
					lastTouchTime = currentTouchTime;
					break;
				default:
				case EVENT_TOUCHCANCEL:
				case EVENT_TOUCHEND:
					var distanceY = initialTouchY - currentTouchY;
					var distanceX = initialTouchX - currentTouchX;
					var distance2 = distanceX * distanceX + distanceY * distanceY;

					//Check if it was more like a tap (moved less than 7px).
					if(distance2 < 49) {
						if(!rxTouchIgnoreTags.test(initialElement.tagName)) {
							initialElement.focus();

							//It was a tap, click the element.
							var clickEvent = document.createEvent('MouseEvents');
							clickEvent.initMouseEvent('click', true, true, e.view, 1, touch.screenX, touch.screenY, touch.clientX, touch.clientY, e.ctrlKey, e.altKey, e.shiftKey, e.metaKey, 0, null);
							initialElement.dispatchEvent(clickEvent);
						}

						return;
					}

					initialElement = undefined;

					var speed = deltaY / deltaTime;

					//Cap speed at 3 pixel/ms.
					speed = Math.max(Math.min(speed, 3), -3);

					var duration = Math.abs(speed / _mobileDeceleration);
					var targetOffset = speed * duration + 0.5 * _mobileDeceleration * duration * duration;
					var targetTop = _instance.getScrollTop() - targetOffset;

					//Relative duration change for when scrolling above bounds.
					var targetRatio = 0;

					//Change duration proportionally when scrolling would leave bounds.
					if(targetTop > _maxKeyFrame) {
						targetRatio = (_maxKeyFrame - targetTop) / targetOffset;

						targetTop = _maxKeyFrame;
					} else if(targetTop < 0) {
						targetRatio = -targetTop / targetOffset;

						targetTop = 0;
					}

					duration = duration * (1 - targetRatio);

					_instance.animateTo((targetTop + 0.5) | 0, {easing: 'outCubic', duration: duration});
					break;
			}
		});

		//Just in case there has already been some native scrolling, reset it.
		window.scrollTo(0, 0);
		documentElement.style.overflow = body.style.overflow = 'hidden';
	};

	/**
	 * Updates key frames which depend on others / need to be updated on resize.
	 * That is "end" in "absolute" mode and all key frames in "relative" mode.
	 * Also handles constants, because they may change on resize.
	 */
	var _updateDependentKeyFrames = function() {
		var viewportHeight = documentElement.clientHeight;
		var processedConstants = _processConstants();
		var skrollable;
		var element;
		var anchorTarget;
		var keyFrames;
		var keyFrameIndex;
		var keyFramesLength;
		var kf;
		var skrollableIndex;
		var skrollablesLength;
		var offset;
		var constantValue;

		//First process all relative-mode elements and find the max key frame.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			element = skrollable.element;
			anchorTarget = skrollable.anchorTarget;
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				offset = kf.offset;
				constantValue = processedConstants[kf.constant] || 0;

				kf.frame = offset;

				if(kf.isPercentage) {
					//Convert the offset to percentage of the viewport height.
					offset = offset * viewportHeight;

					//Absolute + percentage mode.
					kf.frame = offset;
				}

				if(kf.mode === 'relative') {
					_reset(element);

					kf.frame = _instance.relativeToAbsolute(anchorTarget, kf.anchors[0], kf.anchors[1]) - offset;

					_reset(element, true);
				}

				kf.frame += constantValue;

				//Only search for max key frame when forceHeight is enabled.
				if(_forceHeight) {
					//Find the max key frame, but don't use one of the data-end ones for comparison.
					if(!kf.isEnd && kf.frame > _maxKeyFrame) {
						_maxKeyFrame = kf.frame;
					}
				}
			}
		}

		//#133: The document can be larger than the maxKeyFrame we found.
		_maxKeyFrame = Math.max(_maxKeyFrame, _getDocumentHeight());

		//Now process all data-end keyframes.
		skrollableIndex = 0;
		skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			skrollable = _skrollables[skrollableIndex];
			keyFrames = skrollable.keyFrames;

			keyFrameIndex = 0;
			keyFramesLength = keyFrames.length;

			for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
				kf = keyFrames[keyFrameIndex];

				constantValue = processedConstants[kf.constant] || 0;

				if(kf.isEnd) {
					kf.frame = _maxKeyFrame - kf.offset + constantValue;
				}
			}

			skrollable.keyFrames.sort(_keyFrameComparator);
		}
	};

	/**
	 * Calculates and sets the style properties for the element at the given frame.
	 * @param fakeFrame The frame to render at when smooth scrolling is enabled.
	 * @param actualFrame The actual frame we are at.
	 */
	var _calcSteps = function(fakeFrame, actualFrame) {
		//Iterate over all skrollables.
		var skrollableIndex = 0;
		var skrollablesLength = _skrollables.length;

		for(; skrollableIndex < skrollablesLength; skrollableIndex++) {
			var skrollable = _skrollables[skrollableIndex];
			var element = skrollable.element;
			var frame = skrollable.smoothScrolling ? fakeFrame : actualFrame;
			var frames = skrollable.keyFrames;
			var firstFrame = frames[0].frame;
			var lastFrame = frames[frames.length - 1].frame;
			var beforeFirst = frame < firstFrame;
			var afterLast = frame > lastFrame;
			var firstOrLastFrame = frames[beforeFirst ? 0 : frames.length - 1];
			var key;
			var value;

			//If we are before/after the first/last frame, set the styles according to the given edge strategy.
			if(beforeFirst || afterLast) {
				//Check if we already handled this edge case last time.
				//Note: using setScrollTop it's possible that we jumped from one edge to the other.
				if(beforeFirst && skrollable.edge === -1 || afterLast && skrollable.edge === 1) {
					continue;
				}

				//Add the skrollr-before or -after class.
				_updateClass(element, [beforeFirst ? SKROLLABLE_BEFORE_CLASS : SKROLLABLE_AFTER_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_BETWEEN_CLASS, SKROLLABLE_AFTER_CLASS]);

				//Remember that we handled the edge case (before/after the first/last keyframe).
				skrollable.edge = beforeFirst ? -1 : 1;

				switch(skrollable.edgeStrategy) {
					case 'reset':
						_reset(element);
						continue;
					case 'ease':
						//Handle this case like it would be exactly at first/last keyframe and just pass it on.
						frame = firstOrLastFrame.frame;
						break;
					default:
					case 'set':
						var props = firstOrLastFrame.props;

						for(key in props) {
							if(hasProp.call(props, key)) {
								value = _interpolateString(props[key].value);

								skrollr.setStyle(element, key, value);
							}
						}

						continue;
				}
			} else {
				//Did we handle an edge last time?
				if(skrollable.edge !== 0) {
					_updateClass(element, [SKROLLABLE_CLASS, SKROLLABLE_BETWEEN_CLASS], [SKROLLABLE_BEFORE_CLASS, SKROLLABLE_AFTER_CLASS]);
					skrollable.edge = 0;
				}
			}

			//Find out between which two key frames we are right now.
			var keyFrameIndex = 0;
			var framesLength = frames.length - 1;

			for(; keyFrameIndex < framesLength; keyFrameIndex++) {
				if(frame >= frames[keyFrameIndex].frame && frame <= frames[keyFrameIndex + 1].frame) {
					var left = frames[keyFrameIndex];
					var right = frames[keyFrameIndex + 1];

					for(key in left.props) {
						if(hasProp.call(left.props, key)) {
							var progress = (frame - left.frame) / (right.frame - left.frame);

							//Transform the current progress using the given easing function.
							progress = left.props[key].easing(progress);

							//Interpolate between the two values
							value = _calcInterpolation(left.props[key].value, right.props[key].value, progress);

							value = _interpolateString(value);

							skrollr.setStyle(element, key, value);
						}
					}

					break;
				}
			}
		}
	};

	/**
	 * Renders all elements.
	 */
	var _render = function() {
		if(_requestReflow) {
			_requestReflow = false;
			_reflow();
		}

		//We may render something else than the actual scrollbar position.
		var renderTop = _instance.getScrollTop();

		//If there's an animation, which ends in current render call, call the callback after rendering.
		var afterAnimationCallback;
		var now = _now();
		var progress;

		//Before actually rendering handle the scroll animation, if any.
		if(_scrollAnimation) {
			//It's over
			if(now >= _scrollAnimation.endTime) {
				renderTop = _scrollAnimation.targetTop;
				afterAnimationCallback = _scrollAnimation.done;
				_scrollAnimation = undefined;
			} else {
				//Map the current progress to the new progress using given easing function.
				progress = _scrollAnimation.easing((now - _scrollAnimation.startTime) / _scrollAnimation.duration);

				renderTop = (_scrollAnimation.startTop + progress * _scrollAnimation.topDiff) | 0;
			}

			_instance.setScrollTop(renderTop, true);
		}
		//Smooth scrolling only if there's no animation running and if we're not forcing the rendering.
		else if(!_forceRender) {
			var smoothScrollingDiff = _smoothScrolling.targetTop - renderTop;

			//The user scrolled, start new smooth scrolling.
			if(smoothScrollingDiff) {
				_smoothScrolling = {
					startTop: _lastTop,
					topDiff: renderTop - _lastTop,
					targetTop: renderTop,
					startTime: _lastRenderCall,
					endTime: _lastRenderCall + _smoothScrollingDuration
				};
			}

			//Interpolate the internal scroll position (not the actual scrollbar).
			if(now <= _smoothScrolling.endTime) {
				//Map the current progress to the new progress using easing function.
				progress = easings.sqrt((now - _smoothScrolling.startTime) / _smoothScrollingDuration);

				renderTop = (_smoothScrolling.startTop + progress * _smoothScrolling.topDiff) | 0;
			}
		}

		//That's were we actually "scroll" on mobile.
		if(_isMobile && _skrollrBody) {
			//Set the transform ("scroll it").
			skrollr.setStyle(_skrollrBody, 'transform', 'translate(0, ' + -(_mobileOffset) + 'px) ' + _translateZ);
		}

		//Did the scroll position even change?
		if(_forceRender || _lastTop !== renderTop) {
			//Remember in which direction are we scrolling?
			_direction = (renderTop > _lastTop) ? 'down' : (renderTop < _lastTop ? 'up' : _direction);

			_forceRender = false;

			var listenerParams = {
				curTop: renderTop,
				lastTop: _lastTop,
				maxTop: _maxKeyFrame,
				direction: _direction
			};

			//Tell the listener we are about to render.
			var continueRendering = _listeners.beforerender && _listeners.beforerender.call(_instance, listenerParams);

			//The beforerender listener function is able the cancel rendering.
			if(continueRendering !== false) {
				//Now actually interpolate all the styles.
				_calcSteps(renderTop, _instance.getScrollTop());

				//Remember when we last rendered.
				_lastTop = renderTop;

				if(_listeners.render) {
					_listeners.render.call(_instance, listenerParams);
				}
			}

			if(afterAnimationCallback) {
				afterAnimationCallback.call(_instance, false);
			}
		}

		_lastRenderCall = now;
	};

	/**
	 * Parses the properties for each key frame of the given skrollable.
	 */
	var _parseProps = function(skrollable) {
		//Iterate over all key frames
		var keyFrameIndex = 0;
		var keyFramesLength = skrollable.keyFrames.length;

		for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			var frame = skrollable.keyFrames[keyFrameIndex];
			var easing;
			var value;
			var prop;
			var props = {};

			var match;

			while((match = rxPropValue.exec(frame.props)) !== null) {
				prop = match[1];
				value = match[2];

				easing = prop.match(rxPropEasing);

				//Is there an easing specified for this prop?
				if(easing !== null) {
					prop = easing[1];
					easing = easing[2];
				} else {
					easing = DEFAULT_EASING;
				}

				//Exclamation point at first position forces the value to be taken literal.
				value = value.indexOf('!') ? _parseProp(value) : [value.slice(1)];

				//Save the prop for this key frame with his value and easing function
				props[prop] = {
					value: value,
					easing: easings[easing]
				};
			}

			frame.props = props;
		}
	};

	/**
	 * Parses a value extracting numeric values and generating a format string
	 * for later interpolation of the new values in old string.
	 *
	 * @param val The CSS value to be parsed.
	 * @return Something like ["rgba(?%,?%, ?%,?)", 100, 50, 0, .7]
	 * where the first element is the format string later used
	 * and all following elements are the numeric value.
	 */
	var _parseProp = function(val) {
		var numbers = [];

		//One special case, where floats don't work.
		//We replace all occurences of rgba colors
		//which don't use percentage notation with the percentage notation.
		rxRGBAIntegerColor.lastIndex = 0;
		val = val.replace(rxRGBAIntegerColor, function(rgba) {
			return rgba.replace(rxNumericValue, function(n) {
				return n / 255 * 100 + '%';
			});
		});

		//Handle prefixing of "gradient" values.
		//For now only the prefixed value will be set. Unprefixed isn't supported anyway.
		if(theDashedCSSPrefix) {
			rxGradient.lastIndex = 0;
			val = val.replace(rxGradient, function(s) {
				return theDashedCSSPrefix + s;
			});
		}

		//Now parse ANY number inside this string and create a format string.
		val = val.replace(rxNumericValue, function(n) {
			numbers.push(+n);
			return '{?}';
		});

		//Add the formatstring as first value.
		numbers.unshift(val);

		return numbers;
	};

	/**
	 * Fills the key frames with missing left and right hand properties.
	 * If key frame 1 has property X and key frame 2 is missing X,
	 * but key frame 3 has X again, then we need to assign X to key frame 2 too.
	 *
	 * @param sk A skrollable.
	 */
	var _fillProps = function(sk) {
		//Will collect the properties key frame by key frame
		var propList = {};
		var keyFrameIndex;
		var keyFramesLength;

		//Iterate over all key frames from left to right
		keyFrameIndex = 0;
		keyFramesLength = sk.keyFrames.length;

		for(; keyFrameIndex < keyFramesLength; keyFrameIndex++) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}

		//Now do the same from right to fill the last gaps

		propList = {};

		//Iterate over all key frames from right to left
		keyFrameIndex = sk.keyFrames.length - 1;

		for(; keyFrameIndex >= 0; keyFrameIndex--) {
			_fillPropForFrame(sk.keyFrames[keyFrameIndex], propList);
		}
	};

	var _fillPropForFrame = function(frame, propList) {
		var key;

		//For each key frame iterate over all right hand properties and assign them,
		//but only if the current key frame doesn't have the property by itself
		for(key in propList) {
			//The current frame misses this property, so assign it.
			if(!hasProp.call(frame.props, key)) {
				frame.props[key] = propList[key];
			}
		}

		//Iterate over all props of the current frame and collect them
		for(key in frame.props) {
			propList[key] = frame.props[key];
		}
	};

	/**
	 * Calculates the new values for two given values array.
	 */
	var _calcInterpolation = function(val1, val2, progress) {
		var valueIndex;
		var val1Length = val1.length;

		//They both need to have the same length
		if(val1Length !== val2.length) {
			throw 'Can\'t interpolate between "' + val1[0] + '" and "' + val2[0] + '"';
		}

		//Add the format string as first element.
		var interpolated = [val1[0]];

		valueIndex = 1;

		for(; valueIndex < val1Length; valueIndex++) {
			//That's the line where the two numbers are actually interpolated.
			interpolated[valueIndex] = val1[valueIndex] + ((val2[valueIndex] - val1[valueIndex]) * progress);
		}

		return interpolated;
	};

	/**
	 * Interpolates the numeric values into the format string.
	 */
	var _interpolateString = function(val) {
		var valueIndex = 1;

		rxInterpolateString.lastIndex = 0;

		return val[0].replace(rxInterpolateString, function() {
			return val[valueIndex++];
		});
	};

	/**
	 * Resets the class and style attribute to what it was before skrollr manipulated the element.
	 * Also remembers the values it had before reseting, in order to undo the reset.
	 */
	var _reset = function(elements, undo) {
		//We accept a single element or an array of elements.
		elements = [].concat(elements);

		var skrollable;
		var element;
		var elementsIndex = 0;
		var elementsLength = elements.length;

		for(; elementsIndex < elementsLength; elementsIndex++) {
			element = elements[elementsIndex];
			skrollable = _skrollables[element[SKROLLABLE_ID_DOM_PROPERTY]];

			//Couldn't find the skrollable for this DOM element.
			if(!skrollable) {
				continue;
			}

			if(undo) {
				//Reset class and style to the "dirty" (set by skrollr) values.
				element.style.cssText = skrollable.dirtyStyleAttr;
				_updateClass(element, skrollable.dirtyClassAttr);
			} else {
				//Remember the "dirty" (set by skrollr) class and style.
				skrollable.dirtyStyleAttr = element.style.cssText;
				skrollable.dirtyClassAttr = _getClass(element);

				//Reset class and style to what it originally was.
				element.style.cssText = skrollable.styleAttr;
				_updateClass(element, skrollable.classAttr);
			}
		}
	};

	/**
	 * Detects support for 3d transforms by applying it to the skrollr-body.
	 */
	var _detect3DTransforms = function() {
		_translateZ = 'translateZ(0)';
		skrollr.setStyle(_skrollrBody, 'transform', _translateZ);

		var computedStyle = getStyle(_skrollrBody);
		var computedTransform = computedStyle.getPropertyValue('transform');
		var computedTransformWithPrefix = computedStyle.getPropertyValue(theDashedCSSPrefix + 'transform');
		var has3D = (computedTransform && computedTransform !== 'none') || (computedTransformWithPrefix && computedTransformWithPrefix !== 'none');

		if(!has3D) {
			_translateZ = '';
		}
	};

	/**
	 * Set the CSS property on the given element. Sets prefixed properties as well.
	 */
	skrollr.setStyle = function(el, prop, val) {
		var style = el.style;

		//Camel case.
		prop = prop.replace(rxCamelCase, rxCamelCaseFn).replace('-', '');

		//Make sure z-index gets a <integer>.
		//This is the only <integer> case we need to handle.
		if(prop === 'zIndex') {
			if(isNaN(val)) {
				//If it's not a number, don't touch it.
				//It could for example be "auto" (#351).
				style[prop] = val;
			} else {
				//Floor the number.
				style[prop] = '' + (val | 0);
			}
		}
		//#64: "float" can't be set across browsers. Needs to use "cssFloat" for all except IE.
		else if(prop === 'float') {
			style.styleFloat = style.cssFloat = val;
		}
		else {
			//Need try-catch for old IE.
			try {
				//Set prefixed property if there's a prefix.
				if(theCSSPrefix) {
					style[theCSSPrefix + prop.slice(0,1).toUpperCase() + prop.slice(1)] = val;
				}

				//Set unprefixed.
				style[prop] = val;
			} catch(ignore) {}
		}
	};

	/**
	 * Cross browser event handling.
	 */
	var _addEvent = skrollr.addEvent = function(element, names, callback) {
		var intermediate = function(e) {
			//Normalize IE event stuff.
			e = e || window.event;

			if(!e.target) {
				e.target = e.srcElement;
			}

			if(!e.preventDefault) {
				e.preventDefault = function() {
					e.returnValue = false;
				};
			}

			return callback.call(this, e);
		};

		names = names.split(' ');

		var name;
		var nameCounter = 0;
		var namesLength = names.length;

		for(; nameCounter < namesLength; nameCounter++) {
			name = names[nameCounter];

			if(element.addEventListener) {
				element.addEventListener(name, callback, false);
			} else {
				element.attachEvent('on' + name, intermediate);
			}

			//Remember the events to be able to flush them later.
			_registeredEvents.push({
				element: element,
				name: name,
				listener: callback
			});
		}
	};

	var _removeEvent = skrollr.removeEvent = function(element, names, callback) {
		names = names.split(' ');

		var nameCounter = 0;
		var namesLength = names.length;

		for(; nameCounter < namesLength; nameCounter++) {
			if(element.removeEventListener) {
				element.removeEventListener(names[nameCounter], callback, false);
			} else {
				element.detachEvent('on' + names[nameCounter], callback);
			}
		}
	};

	var _removeAllEvents = function() {
		var eventData;
		var eventCounter = 0;
		var eventsLength = _registeredEvents.length;

		for(; eventCounter < eventsLength; eventCounter++) {
			eventData = _registeredEvents[eventCounter];

			_removeEvent(eventData.element, eventData.name, eventData.listener);
		}

		_registeredEvents = [];
	};

	var _reflow = function() {
		var pos = _instance.getScrollTop();

		//Will be recalculated by _updateDependentKeyFrames.
		_maxKeyFrame = 0;

		if(_forceHeight && !_isMobile) {
			//un-"force" the height to not mess with the calculations in _updateDependentKeyFrames (#216).
			body.style.height = 'auto';
		}

		_updateDependentKeyFrames();

		if(_forceHeight && !_isMobile) {
			//"force" the height.
			body.style.height = (_maxKeyFrame + documentElement.clientHeight) + 'px';
		}

		//The scroll offset may now be larger than needed (on desktop the browser/os prevents scrolling farther than the bottom).
		if(_isMobile) {
			_instance.setScrollTop(Math.min(_instance.getScrollTop(), _maxKeyFrame));
		} else {
			//Remember and reset the scroll pos (#217).
			_instance.setScrollTop(pos, true);
		}

		_forceRender = true;
	};

	/*
	 * Returns a copy of the constants object where all functions and strings have been evaluated.
	 */
	var _processConstants = function() {
		var viewportHeight = documentElement.clientHeight;
		var copy = {};
		var prop;
		var value;

		for(prop in _constants) {
			value = _constants[prop];

			if(typeof value === 'function') {
				value = value.call(_instance);
			}
			//Percentage offset.
			else if((/p$/).test(value)) {
				value = (value.slice(0, -1) / 100) * viewportHeight;
			}

			copy[prop] = value;
		}

		return copy;
	};

	/*
	 * Returns the height of the document.
	 */
	var _getDocumentHeight = function() {
		var skrollrBodyHeight = (_skrollrBody && _skrollrBody.offsetHeight || 0);
		var bodyHeight = Math.max(skrollrBodyHeight, body.scrollHeight, body.offsetHeight, documentElement.scrollHeight, documentElement.offsetHeight, documentElement.clientHeight);

		return bodyHeight - documentElement.clientHeight;
	};

	/**
	 * Returns a string of space separated classnames for the current element.
	 * Works with SVG as well.
	 */
	var _getClass = function(element) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		return element[prop];
	};

	/**
	 * Adds and removes a CSS classes.
	 * Works with SVG as well.
	 * add and remove are arrays of strings,
	 * or if remove is ommited add is a string and overwrites all classes.
	 */
	var _updateClass = function(element, add, remove) {
		var prop = 'className';

		//SVG support by using className.baseVal instead of just className.
		if(window.SVGElement && element instanceof window.SVGElement) {
			element = element[prop];
			prop = 'baseVal';
		}

		//When remove is ommited, we want to overwrite/set the classes.
		if(remove === undefined) {
			element[prop] = add;
			return;
		}

		//Cache current classes. We will work on a string before passing back to DOM.
		var val = element[prop];

		//All classes to be removed.
		var classRemoveIndex = 0;
		var removeLength = remove.length;

		for(; classRemoveIndex < removeLength; classRemoveIndex++) {
			val = _untrim(val).replace(_untrim(remove[classRemoveIndex]), ' ');
		}

		val = _trim(val);

		//All classes to be added.
		var classAddIndex = 0;
		var addLength = add.length;

		for(; classAddIndex < addLength; classAddIndex++) {
			//Only add if el not already has class.
			if(_untrim(val).indexOf(_untrim(add[classAddIndex])) === -1) {
				val += ' ' + add[classAddIndex];
			}
		}

		element[prop] = _trim(val);
	};

	var _trim = function(a) {
		return a.replace(rxTrim, '');
	};

	/**
	 * Adds a space before and after the string.
	 */
	var _untrim = function(a) {
		return ' ' + a + ' ';
	};

	var _now = Date.now || function() {
		return +new Date();
	};

	var _keyFrameComparator = function(a, b) {
		return a.frame - b.frame;
	};

	/*
	 * Private variables.
	 */

	//Singleton
	var _instance;

	/*
		A list of all elements which should be animated associated with their the metadata.
		Exmaple skrollable with two key frames animating from 100px width to 20px:

		skrollable = {
			element: <the DOM element>,
			styleAttr: <style attribute of the element before skrollr>,
			classAttr: <class attribute of the element before skrollr>,
			keyFrames: [
				{
					frame: 100,
					props: {
						width: {
							value: ['{?}px', 100],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				},
				{
					frame: 200,
					props: {
						width: {
							value: ['{?}px', 20],
							easing: <reference to easing function>
						}
					},
					mode: "absolute"
				}
			]
		};
	*/
	var _skrollables;

	var _skrollrBody;

	var _listeners;
	var _forceHeight;
	var _maxKeyFrame = 0;

	var _scale = 1;
	var _constants;

	var _mobileDeceleration;

	//Current direction (up/down).
	var _direction = 'down';

	//The last top offset value. Needed to determine direction.
	var _lastTop = -1;

	//The last time we called the render method (doesn't mean we rendered!).
	var _lastRenderCall = _now();

	//For detecting if it actually resized (#271).
	var _lastViewportWidth = 0;
	var _lastViewportHeight = 0;

	var _requestReflow = false;

	//Will contain data about a running scrollbar animation, if any.
	var _scrollAnimation;

	var _smoothScrollingEnabled;

	var _smoothScrollingDuration;

	//Will contain settins for smooth scrolling if enabled.
	var _smoothScrolling;

	//Can be set by any operation/event to force rendering even if the scrollbar didn't move.
	var _forceRender;

	//Each skrollable gets an unique ID incremented for each skrollable.
	//The ID is the index in the _skrollables array.
	var _skrollableIdCounter = 0;

	var _edgeStrategy;


	//Mobile specific vars. Will be stripped by UglifyJS when not in use.
	var _isMobile = false;

	//The virtual scroll offset when using mobile scrolling.
	var _mobileOffset = 0;

	//If the browser supports 3d transforms, this will be filled with 'translateZ(0)' (empty string otherwise).
	var _translateZ;

	//Will contain data about registered events by skrollr.
	var _registeredEvents = [];

	//Animation frame id returned by RequestAnimationFrame (or timeout when RAF is not supported).
	var _animFrame;
}(window, document));
/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.6.1
  @link https://github.com/dollarshaveclub/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
/**
  stickybits - Stickybits is a lightweight alternative to `position: sticky` polyfills
  @version v3.6.1
  @link https://github.com/dollarshaveclub/stickybits#readme
  @author Jeff Wainwright <yowainwright@gmail.com> (https://jeffry.in)
  @license MIT
**/
!function(t,s){"object"==typeof exports&&"undefined"!=typeof module?module.exports=s():"function"==typeof define&&define.amd?define(s):(t=t||self).stickybits=s()}(this,function(){"use strict";var e=function(){function t(t,s){var e=void 0!==s?s:{};this.version="3.6.1",this.userAgent=window.navigator.userAgent||"no `userAgent` provided by the browser",this.props={customStickyChangeNumber:e.customStickyChangeNumber||null,noStyles:e.noStyles||!1,stickyBitStickyOffset:e.stickyBitStickyOffset||0,parentClass:e.parentClass||"js-stickybit-parent",scrollEl:"string"==typeof e.scrollEl?document.querySelector(e.scrollEl):e.scrollEl||window,stickyClass:e.stickyClass||"js-is-sticky",stuckClass:e.stuckClass||"js-is-stuck",stickyChangeClass:e.stickyChangeClass||"js-is-sticky--change",useStickyClasses:e.useStickyClasses||!1,useFixed:e.useFixed||!1,useGetBoundingClientRect:e.useGetBoundingClientRect||!1,verticalPosition:e.verticalPosition||"top"},this.props.positionVal=this.definePosition()||"fixed",this.instances=[];var i=this.props,n=i.positionVal,o=i.verticalPosition,r=i.noStyles,a=i.stickyBitStickyOffset,l=i.useStickyClasses,c="top"!==o||r?"":a+"px",u="fixed"!==n?n:"";this.els="string"==typeof t?document.querySelectorAll(t):t,"length"in this.els||(this.els=[this.els]);for(var f=0;f<this.els.length;f++){var p=this.els[f];if(p.style[o]=c,p.style.position=u,"fixed"===n||l){var h=this.addInstance(p,this.props);this.instances.push(h)}}}var s=t.prototype;return s.definePosition=function(){var t;if(this.props.useFixed)t="fixed";else{for(var s=["","-o-","-webkit-","-moz-","-ms-"],e=document.head.style,i=0;i<s.length;i+=1)e.position=s[i]+"sticky";t=e.position?e.position:"fixed",e.position=""}return t},s.addInstance=function(t,s){var e=this,i={el:t,parent:t.parentNode,props:s};this.isWin=this.props.scrollEl===window;var n=this.isWin?window:this.getClosestParent(i.el,i.props.scrollEl);return this.computeScrollOffsets(i),i.parent.className+=" "+s.parentClass,i.state="default",i.stateContainer=function(){return e.manageState(i)},n.addEventListener("scroll",i.stateContainer),i},s.getClosestParent=function(t,s){var e=s,i=t;if(i.parentElement===e)return e;for(;i.parentElement!==e;)i=i.parentElement;return e},s.getTopPosition=function(t){if(this.props.useGetBoundingClientRect)return t.getBoundingClientRect().top+(this.props.scrollEl.pageYOffset||document.documentElement.scrollTop);for(var s=0;s=t.offsetTop+s,t=t.offsetParent;);return s},s.computeScrollOffsets=function(t){var s=t,e=s.props,i=s.el,n=s.parent,o=!this.isWin&&"fixed"===e.positionVal,r="bottom"!==e.verticalPosition,a=o?this.getTopPosition(e.scrollEl):0,l=o?this.getTopPosition(n)-a:this.getTopPosition(n),c=null!==e.customStickyChangeNumber?e.customStickyChangeNumber:i.offsetHeight,u=l+n.offsetHeight;return s.offset=a+e.stickyBitStickyOffset,s.stickyStart=r?l-s.offset:0,s.stickyChange=s.stickyStart+c,s.stickyStop=r?u-(i.offsetHeight+s.offset):u-window.innerHeight,s},s.toggleClasses=function(t,s,e){var i=t,n=i.className.split(" ");e&&-1===n.indexOf(e)&&n.push(e);var o=n.indexOf(s);-1!==o&&n.splice(o,1),i.className=n.join(" ")},s.manageState=function(t){var s=t,e=s.el,i=s.props,n=s.state,o=s.stickyStart,r=s.stickyChange,a=s.stickyStop,l=e.style,c=i.noStyles,u=i.positionVal,f=i.scrollEl,p=i.stickyClass,h=i.stickyChangeClass,d=i.stuckClass,y=i.verticalPosition,k="bottom"!==y,m=function(t){t()},g=this.isWin&&(window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame)||m,v=this.toggleClasses,C=this.isWin?window.scrollY||window.pageYOffset:f.scrollTop,S=k&&C<=o&&("sticky"===n||"stuck"===n),w=a<=C&&"sticky"===n;o<C&&C<a&&("default"===n||"stuck"===n)?(s.state="sticky",g(function(){v(e,d,p),l.position=u,c||(l.bottom="",l[y]=i.stickyBitStickyOffset+"px")})):S?(s.state="default",g(function(){v(e,p),v(e,d),"fixed"===u&&(l.position="")})):w&&(s.state="stuck",g(function(){v(e,p,d),"fixed"!==u||c||(l.top="",l.bottom="0",l.position="absolute")}));var b=r<=C&&C<=a;return C<r/2||a<C?g(function(){v(e,h)}):b&&g(function(){v(e,"stub",h)}),s},s.update=function(t){void 0===t&&(t=null);for(var s=0;s<this.instances.length;s+=1){var e=this.instances[s];if(this.computeScrollOffsets(e),t)for(var i in t)e.props[i]=t[i]}return this},s.removeInstance=function(t){var s=t.el,e=t.props,i=this.toggleClasses;s.style.position="",s.style[e.verticalPosition]="",i(s,e.stickyClass),i(s,e.stuckClass),i(s.parentNode,e.parentClass)},s.cleanup=function(){for(var t=0;t<this.instances.length;t+=1){var s=this.instances[t];s.props.scrollEl.removeEventListener("scroll",s.stateContainer),this.removeInstance(s)}this.manageState=!1,this.instances=[]},t}();return function(t,s){return new e(t,s)}});
/*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md *//*! Select2 4.0.5 | https://github.com/select2/select2/blob/master/LICENSE.md */!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):"object"==typeof module&&module.exports?module.exports=function(b,c){return void 0===c&&(c="undefined"!=typeof window?require("jquery"):require("jquery")(b)),a(c),c}:a(jQuery)}(function(a){var b=function(){if(a&&a.fn&&a.fn.select2&&a.fn.select2.amd)var b=a.fn.select2.amd;var b;return function(){if(!b||!b.requirejs){b?c=b:b={};var a,c,d;!function(b){function e(a,b){return v.call(a,b)}function f(a,b){var c,d,e,f,g,h,i,j,k,l,m,n,o=b&&b.split("/"),p=t.map,q=p&&p["*"]||{};if(a){for(a=a.split("/"),g=a.length-1,t.nodeIdCompat&&x.test(a[g])&&(a[g]=a[g].replace(x,"")),"."===a[0].charAt(0)&&o&&(n=o.slice(0,o.length-1),a=n.concat(a)),k=0;k<a.length;k++)if("."===(m=a[k]))a.splice(k,1),k-=1;else if(".."===m){if(0===k||1===k&&".."===a[2]||".."===a[k-1])continue;k>0&&(a.splice(k-1,2),k-=2)}a=a.join("/")}if((o||q)&&p){for(c=a.split("/"),k=c.length;k>0;k-=1){if(d=c.slice(0,k).join("/"),o)for(l=o.length;l>0;l-=1)if((e=p[o.slice(0,l).join("/")])&&(e=e[d])){f=e,h=k;break}if(f)break;!i&&q&&q[d]&&(i=q[d],j=k)}!f&&i&&(f=i,h=j),f&&(c.splice(0,h,f),a=c.join("/"))}return a}function g(a,c){return function(){var d=w.call(arguments,0);return"string"!=typeof d[0]&&1===d.length&&d.push(null),o.apply(b,d.concat([a,c]))}}function h(a){return function(b){return f(b,a)}}function i(a){return function(b){r[a]=b}}function j(a){if(e(s,a)){var c=s[a];delete s[a],u[a]=!0,n.apply(b,c)}if(!e(r,a)&&!e(u,a))throw new Error("No "+a);return r[a]}function k(a){var b,c=a?a.indexOf("!"):-1;return c>-1&&(b=a.substring(0,c),a=a.substring(c+1,a.length)),[b,a]}function l(a){return a?k(a):[]}function m(a){return function(){return t&&t.config&&t.config[a]||{}}}var n,o,p,q,r={},s={},t={},u={},v=Object.prototype.hasOwnProperty,w=[].slice,x=/\.js$/;p=function(a,b){var c,d=k(a),e=d[0],g=b[1];return a=d[1],e&&(e=f(e,g),c=j(e)),e?a=c&&c.normalize?c.normalize(a,h(g)):f(a,g):(a=f(a,g),d=k(a),e=d[0],a=d[1],e&&(c=j(e))),{f:e?e+"!"+a:a,n:a,pr:e,p:c}},q={require:function(a){return g(a)},exports:function(a){var b=r[a];return void 0!==b?b:r[a]={}},module:function(a){return{id:a,uri:"",exports:r[a],config:m(a)}}},n=function(a,c,d,f){var h,k,m,n,o,t,v,w=[],x=typeof d;if(f=f||a,t=l(f),"undefined"===x||"function"===x){for(c=!c.length&&d.length?["require","exports","module"]:c,o=0;o<c.length;o+=1)if(n=p(c[o],t),"require"===(k=n.f))w[o]=q.require(a);else if("exports"===k)w[o]=q.exports(a),v=!0;else if("module"===k)h=w[o]=q.module(a);else if(e(r,k)||e(s,k)||e(u,k))w[o]=j(k);else{if(!n.p)throw new Error(a+" missing "+k);n.p.load(n.n,g(f,!0),i(k),{}),w[o]=r[k]}m=d?d.apply(r[a],w):void 0,a&&(h&&h.exports!==b&&h.exports!==r[a]?r[a]=h.exports:m===b&&v||(r[a]=m))}else a&&(r[a]=d)},a=c=o=function(a,c,d,e,f){if("string"==typeof a)return q[a]?q[a](c):j(p(a,l(c)).f);if(!a.splice){if(t=a,t.deps&&o(t.deps,t.callback),!c)return;c.splice?(a=c,c=d,d=null):a=b}return c=c||function(){},"function"==typeof d&&(d=e,e=f),e?n(b,a,c,d):setTimeout(function(){n(b,a,c,d)},4),o},o.config=function(a){return o(a)},a._defined=r,d=function(a,b,c){if("string"!=typeof a)throw new Error("See almond README: incorrect module build, no module name");b.splice||(c=b,b=[]),e(r,a)||e(s,a)||(s[a]=[a,b,c])},d.amd={jQuery:!0}}(),b.requirejs=a,b.require=c,b.define=d}}(),b.define("almond",function(){}),b.define("jquery",[],function(){var b=a||$;return null==b&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),b}),b.define("select2/utils",["jquery"],function(a){function b(a){var b=a.prototype,c=[];for(var d in b){"function"==typeof b[d]&&("constructor"!==d&&c.push(d))}return c}var c={};c.Extend=function(a,b){function c(){this.constructor=a}var d={}.hasOwnProperty;for(var e in b)d.call(b,e)&&(a[e]=b[e]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},c.Decorate=function(a,c){function d(){var b=Array.prototype.unshift,d=c.prototype.constructor.length,e=a.prototype.constructor;d>0&&(b.call(arguments,a.prototype.constructor),e=c.prototype.constructor),e.apply(this,arguments)}function e(){this.constructor=d}var f=b(c),g=b(a);c.displayName=a.displayName,d.prototype=new e;for(var h=0;h<g.length;h++){var i=g[h];d.prototype[i]=a.prototype[i]}for(var j=(function(a){var b=function(){};a in d.prototype&&(b=d.prototype[a]);var e=c.prototype[a];return function(){return Array.prototype.unshift.call(arguments,b),e.apply(this,arguments)}}),k=0;k<f.length;k++){var l=f[k];d.prototype[l]=j(l)}return d};var d=function(){this.listeners={}};return d.prototype.on=function(a,b){this.listeners=this.listeners||{},a in this.listeners?this.listeners[a].push(b):this.listeners[a]=[b]},d.prototype.trigger=function(a){var b=Array.prototype.slice,c=b.call(arguments,1);this.listeners=this.listeners||{},null==c&&(c=[]),0===c.length&&c.push({}),c[0]._type=a,a in this.listeners&&this.invoke(this.listeners[a],b.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},d.prototype.invoke=function(a,b){for(var c=0,d=a.length;c<d;c++)a[c].apply(this,b)},c.Observable=d,c.generateChars=function(a){for(var b="",c=0;c<a;c++){b+=Math.floor(36*Math.random()).toString(36)}return b},c.bind=function(a,b){return function(){a.apply(b,arguments)}},c._convertData=function(a){for(var b in a){var c=b.split("-"),d=a;if(1!==c.length){for(var e=0;e<c.length;e++){var f=c[e];f=f.substring(0,1).toLowerCase()+f.substring(1),f in d||(d[f]={}),e==c.length-1&&(d[f]=a[b]),d=d[f]}delete a[b]}}return a},c.hasScroll=function(b,c){var d=a(c),e=c.style.overflowX,f=c.style.overflowY;return(e!==f||"hidden"!==f&&"visible"!==f)&&("scroll"===e||"scroll"===f||(d.innerHeight()<c.scrollHeight||d.innerWidth()<c.scrollWidth))},c.escapeMarkup=function(a){var b={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof a?a:String(a).replace(/[&<>"'\/\\]/g,function(a){return b[a]})},c.appendMany=function(b,c){if("1.7"===a.fn.jquery.substr(0,3)){var d=a();a.map(c,function(a){d=d.add(a)}),c=d}b.append(c)},c}),b.define("select2/results",["jquery","./utils"],function(a,b){function c(a,b,d){this.$element=a,this.data=d,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&b.attr("aria-multiselectable","true"),this.$results=b,b},c.prototype.clear=function(){this.$results.empty()},c.prototype.displayMessage=function(b){var c=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var d=a('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),e=this.options.get("translations").get(b.message);d.append(c(e(b.args))),d[0].className+=" select2-results__message",this.$results.append(d)},c.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},c.prototype.append=function(a){this.hideLoading();var b=[];if(null==a.results||0===a.results.length)return void(0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"}));a.results=this.sort(a.results);for(var c=0;c<a.results.length;c++){var d=a.results[c],e=this.option(d);b.push(e)}this.$results.append(b)},c.prototype.position=function(a,b){b.find(".select2-results").append(a)},c.prototype.sort=function(a){return this.options.get("sorter")(a)},c.prototype.highlightFirstItem=function(){var a=this.$results.find(".select2-results__option[aria-selected]"),b=a.filter("[aria-selected=true]");b.length>0?b.first().trigger("mouseenter"):a.first().trigger("mouseenter"),this.ensureHighlightVisible()},c.prototype.setClasses=function(){var b=this;this.data.current(function(c){var d=a.map(c,function(a){return a.id.toString()});b.$results.find(".select2-results__option[aria-selected]").each(function(){var b=a(this),c=a.data(this,"data"),e=""+c.id;null!=c.element&&c.element.selected||null==c.element&&a.inArray(e,d)>-1?b.attr("aria-selected","true"):b.attr("aria-selected","false")})})},c.prototype.showLoading=function(a){this.hideLoading();var b=this.options.get("translations").get("searching"),c={disabled:!0,loading:!0,text:b(a)},d=this.option(c);d.className+=" loading-results",this.$results.prepend(d)},c.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},c.prototype.option=function(b){var c=document.createElement("li");c.className="select2-results__option";var d={role:"treeitem","aria-selected":"false"};b.disabled&&(delete d["aria-selected"],d["aria-disabled"]="true"),null==b.id&&delete d["aria-selected"],null!=b._resultId&&(c.id=b._resultId),b.title&&(c.title=b.title),b.children&&(d.role="group",d["aria-label"]=b.text,delete d["aria-selected"]);for(var e in d){var f=d[e];c.setAttribute(e,f)}if(b.children){var g=a(c),h=document.createElement("strong");h.className="select2-results__group";a(h);this.template(b,h);for(var i=[],j=0;j<b.children.length;j++){var k=b.children[j],l=this.option(k);i.push(l)}var m=a("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});m.append(i),g.append(h),g.append(m)}else this.template(b,c);return a.data(c,"data",b),c},c.prototype.bind=function(b,c){var d=this,e=b.id+"-results";this.$results.attr("id",e),b.on("results:all",function(a){d.clear(),d.append(a.data),b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("results:append",function(a){d.append(a.data),b.isOpen()&&d.setClasses()}),b.on("query",function(a){d.hideMessages(),d.showLoading(a)}),b.on("select",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("unselect",function(){b.isOpen()&&(d.setClasses(),d.highlightFirstItem())}),b.on("open",function(){d.$results.attr("aria-expanded","true"),d.$results.attr("aria-hidden","false"),d.setClasses(),d.ensureHighlightVisible()}),b.on("close",function(){d.$results.attr("aria-expanded","false"),d.$results.attr("aria-hidden","true"),d.$results.removeAttr("aria-activedescendant")}),b.on("results:toggle",function(){var a=d.getHighlightedResults();0!==a.length&&a.trigger("mouseup")}),b.on("results:select",function(){var a=d.getHighlightedResults();if(0!==a.length){var b=a.data("data");"true"==a.attr("aria-selected")?d.trigger("close",{}):d.trigger("select",{data:b})}}),b.on("results:previous",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a);if(0!==c){var e=c-1;0===a.length&&(e=0);var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top,h=f.offset().top,i=d.$results.scrollTop()+(h-g);0===e?d.$results.scrollTop(0):h-g<0&&d.$results.scrollTop(i)}}),b.on("results:next",function(){var a=d.getHighlightedResults(),b=d.$results.find("[aria-selected]"),c=b.index(a),e=c+1;if(!(e>=b.length)){var f=b.eq(e);f.trigger("mouseenter");var g=d.$results.offset().top+d.$results.outerHeight(!1),h=f.offset().top+f.outerHeight(!1),i=d.$results.scrollTop()+h-g;0===e?d.$results.scrollTop(0):h>g&&d.$results.scrollTop(i)}}),b.on("results:focus",function(a){a.element.addClass("select2-results__option--highlighted")}),b.on("results:message",function(a){d.displayMessage(a)}),a.fn.mousewheel&&this.$results.on("mousewheel",function(a){var b=d.$results.scrollTop(),c=d.$results.get(0).scrollHeight-b+a.deltaY,e=a.deltaY>0&&b-a.deltaY<=0,f=a.deltaY<0&&c<=d.$results.height();e?(d.$results.scrollTop(0),a.preventDefault(),a.stopPropagation()):f&&(d.$results.scrollTop(d.$results.get(0).scrollHeight-d.$results.height()),a.preventDefault(),a.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(b){var c=a(this),e=c.data("data");if("true"===c.attr("aria-selected"))return void(d.options.get("multiple")?d.trigger("unselect",{originalEvent:b,data:e}):d.trigger("close",{}));d.trigger("select",{originalEvent:b,data:e})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(b){var c=a(this).data("data");d.getHighlightedResults().removeClass("select2-results__option--highlighted"),d.trigger("results:focus",{data:c,element:a(this)})})},c.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},c.prototype.destroy=function(){this.$results.remove()},c.prototype.ensureHighlightVisible=function(){var a=this.getHighlightedResults();if(0!==a.length){var b=this.$results.find("[aria-selected]"),c=b.index(a),d=this.$results.offset().top,e=a.offset().top,f=this.$results.scrollTop()+(e-d),g=e-d;f-=2*a.outerHeight(!1),c<=2?this.$results.scrollTop(0):(g>this.$results.outerHeight()||g<0)&&this.$results.scrollTop(f)}},c.prototype.template=function(b,c){var d=this.options.get("templateResult"),e=this.options.get("escapeMarkup"),f=d(b,c);null==f?c.style.display="none":"string"==typeof f?c.innerHTML=e(f):a(c).append(f)},c}),b.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),b.define("select2/selection/base",["jquery","../utils","../keys"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,b.Observable),d.prototype.render=function(){var b=a('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=this.$element.data("old-tabindex")?this._tabindex=this.$element.data("old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),b.attr("title",this.$element.attr("title")),b.attr("tabindex",this._tabindex),this.$selection=b,b},d.prototype.bind=function(a,b){var d=this,e=(a.id,a.id+"-results");this.container=a,this.$selection.on("focus",function(a){d.trigger("focus",a)}),this.$selection.on("blur",function(a){d._handleBlur(a)}),this.$selection.on("keydown",function(a){d.trigger("keypress",a),a.which===c.SPACE&&a.preventDefault()}),a.on("results:focus",function(a){d.$selection.attr("aria-activedescendant",a.data._resultId)}),a.on("selection:update",function(a){d.update(a.data)}),a.on("open",function(){d.$selection.attr("aria-expanded","true"),d.$selection.attr("aria-owns",e),d._attachCloseHandler(a)}),a.on("close",function(){d.$selection.attr("aria-expanded","false"),d.$selection.removeAttr("aria-activedescendant"),d.$selection.removeAttr("aria-owns"),d.$selection.focus(),d._detachCloseHandler(a)}),a.on("enable",function(){d.$selection.attr("tabindex",d._tabindex)}),a.on("disable",function(){d.$selection.attr("tabindex","-1")})},d.prototype._handleBlur=function(b){var c=this;window.setTimeout(function(){document.activeElement==c.$selection[0]||a.contains(c.$selection[0],document.activeElement)||c.trigger("blur",b)},1)},d.prototype._attachCloseHandler=function(b){a(document.body).on("mousedown.select2."+b.id,function(b){var c=a(b.target),d=c.closest(".select2");a(".select2.select2-container--open").each(function(){var b=a(this);this!=d[0]&&b.data("element").select2("close")})})},d.prototype._detachCloseHandler=function(b){a(document.body).off("mousedown.select2."+b.id)},d.prototype.position=function(a,b){b.find(".selection").append(a)},d.prototype.destroy=function(){this._detachCloseHandler(this.container)},d.prototype.update=function(a){throw new Error("The `update` method must be defined in child classes.")},d}),b.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(a,b,c,d){function e(){e.__super__.constructor.apply(this,arguments)}return c.Extend(e,b),e.prototype.render=function(){var a=e.__super__.render.call(this);return a.addClass("select2-selection--single"),a.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),a},e.prototype.bind=function(a,b){var c=this;e.__super__.bind.apply(this,arguments);var d=a.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",d),this.$selection.attr("aria-labelledby",d),this.$selection.on("mousedown",function(a){1===a.which&&c.trigger("toggle",{originalEvent:a})}),this.$selection.on("focus",function(a){}),this.$selection.on("blur",function(a){}),a.on("focus",function(b){a.isOpen()||c.$selection.focus()}),a.on("selection:update",function(a){c.update(a.data)})},e.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},e.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},e.prototype.selectionContainer=function(){return a("<span></span>")},e.prototype.update=function(a){if(0===a.length)return void this.clear();var b=a[0],c=this.$selection.find(".select2-selection__rendered"),d=this.display(b,c);c.empty().append(d),c.prop("title",b.title||b.text)},e}),b.define("select2/selection/multiple",["jquery","./base","../utils"],function(a,b,c){function d(a,b){d.__super__.constructor.apply(this,arguments)}return c.Extend(d,b),d.prototype.render=function(){var a=d.__super__.render.call(this);return a.addClass("select2-selection--multiple"),a.html('<ul class="select2-selection__rendered"></ul>'),a},d.prototype.bind=function(b,c){var e=this;d.__super__.bind.apply(this,arguments),this.$selection.on("click",function(a){e.trigger("toggle",{originalEvent:a})}),this.$selection.on("click",".select2-selection__choice__remove",function(b){if(!e.options.get("disabled")){var c=a(this),d=c.parent(),f=d.data("data");e.trigger("unselect",{originalEvent:b,data:f})}})},d.prototype.clear=function(){this.$selection.find(".select2-selection__rendered").empty()},d.prototype.display=function(a,b){var c=this.options.get("templateSelection");return this.options.get("escapeMarkup")(c(a,b))},d.prototype.selectionContainer=function(){return a('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},d.prototype.update=function(a){if(this.clear(),0!==a.length){for(var b=[],d=0;d<a.length;d++){var e=a[d],f=this.selectionContainer(),g=this.display(e,f);f.append(g),f.prop("title",e.title||e.text),f.data("data",e),b.push(f)}var h=this.$selection.find(".select2-selection__rendered");c.appendMany(h,b)}},d}),b.define("select2/selection/placeholder",["../utils"],function(a){function b(a,b,c){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c)}return b.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},b.prototype.createPlaceholder=function(a,b){var c=this.selectionContainer();return c.html(this.display(b)),c.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),c},b.prototype.update=function(a,b){var c=1==b.length&&b[0].id!=this.placeholder.id;if(b.length>1||c)return a.call(this,b);this.clear();var d=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(d)},b}),b.define("select2/selection/allowClear",["jquery","../keys"],function(a,b){function c(){}return c.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(a){d._handleClear(a)}),b.on("keypress",function(a){d._handleKeyboardClear(a,b)})},c.prototype._handleClear=function(a,b){if(!this.options.get("disabled")){var c=this.$selection.find(".select2-selection__clear");if(0!==c.length){b.stopPropagation();for(var d=c.data("data"),e=0;e<d.length;e++){var f={data:d[e]};if(this.trigger("unselect",f),f.prevented)return}this.$element.val(this.placeholder.id).trigger("change"),this.trigger("toggle",{})}}},c.prototype._handleKeyboardClear=function(a,c,d){d.isOpen()||c.which!=b.DELETE&&c.which!=b.BACKSPACE||this._handleClear(c)},c.prototype.update=function(b,c){if(b.call(this,c),!(this.$selection.find(".select2-selection__placeholder").length>0||0===c.length)){var d=a('<span class="select2-selection__clear">&times;</span>');d.data("data",c),this.$selection.find(".select2-selection__rendered").prepend(d)}},c}),b.define("select2/selection/search",["jquery","../utils","../keys"],function(a,b,c){function d(a,b,c){a.call(this,b,c)}return d.prototype.render=function(b){var c=a('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=c,this.$search=c.find("input");var d=b.call(this);return this._transferTabIndex(),d},d.prototype.bind=function(a,b,d){var e=this;a.call(this,b,d),b.on("open",function(){e.$search.trigger("focus")}),b.on("close",function(){e.$search.val(""),e.$search.removeAttr("aria-activedescendant"),e.$search.trigger("focus")}),b.on("enable",function(){e.$search.prop("disabled",!1),e._transferTabIndex()}),b.on("disable",function(){e.$search.prop("disabled",!0)}),b.on("focus",function(a){e.$search.trigger("focus")}),b.on("results:focus",function(a){e.$search.attr("aria-activedescendant",a.id)}),this.$selection.on("focusin",".select2-search--inline",function(a){e.trigger("focus",a)}),this.$selection.on("focusout",".select2-search--inline",function(a){e._handleBlur(a)}),this.$selection.on("keydown",".select2-search--inline",function(a){if(a.stopPropagation(),e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented(),a.which===c.BACKSPACE&&""===e.$search.val()){var b=e.$searchContainer.prev(".select2-selection__choice");if(b.length>0){var d=b.data("data");e.searchRemoveChoice(d),a.preventDefault()}}});var f=document.documentMode,g=f&&f<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(a){if(g)return void e.$selection.off("input.search input.searchcheck");e.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(a){if(g&&"input"===a.type)return void e.$selection.off("input.search input.searchcheck");var b=a.which;b!=c.SHIFT&&b!=c.CTRL&&b!=c.ALT&&b!=c.TAB&&e.handleSearch(a)})},d.prototype._transferTabIndex=function(a){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},d.prototype.createPlaceholder=function(a,b){this.$search.attr("placeholder",b.text)},d.prototype.update=function(a,b){var c=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),a.call(this,b),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),c&&this.$search.focus()},d.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var a=this.$search.val();this.trigger("query",{term:a})}this._keyUpPrevented=!1},d.prototype.searchRemoveChoice=function(a,b){this.trigger("unselect",{data:b}),this.$search.val(b.text),this.handleSearch()},d.prototype.resizeSearch=function(){this.$search.css("width","25px");var a="";if(""!==this.$search.attr("placeholder"))a=this.$selection.find(".select2-selection__rendered").innerWidth();else{a=.75*(this.$search.val().length+1)+"em"}this.$search.css("width",a)},d}),b.define("select2/selection/eventRelay",["jquery"],function(a){function b(){}return b.prototype.bind=function(b,c,d){var e=this,f=["open","opening","close","closing","select","selecting","unselect","unselecting"],g=["opening","closing","selecting","unselecting"];b.call(this,c,d),c.on("*",function(b,c){if(-1!==a.inArray(b,f)){c=c||{};var d=a.Event("select2:"+b,{params:c});e.$element.trigger(d),-1!==a.inArray(b,g)&&(c.prevented=d.isDefaultPrevented())}})},b}),b.define("select2/translation",["jquery","require"],function(a,b){function c(a){this.dict=a||{}}return c.prototype.all=function(){return this.dict},c.prototype.get=function(a){return this.dict[a]},c.prototype.extend=function(b){this.dict=a.extend({},b.all(),this.dict)},c._cache={},c.loadPath=function(a){if(!(a in c._cache)){var d=b(a);c._cache[a]=d}return new c(c._cache[a])},c}),b.define("select2/diacritics",[],function(){return{"â’¶":"A","ï¼¡":"A","Ã€":"A","Ã":"A","Ã‚":"A","áº¦":"A","áº¤":"A","áºª":"A","áº¨":"A","Ãƒ":"A","Ä€":"A","Ä‚":"A","áº°":"A","áº®":"A","áº´":"A","áº²":"A","È¦":"A","Ç ":"A","Ã„":"A","Çž":"A","áº¢":"A","Ã…":"A","Çº":"A","Ç":"A","È€":"A","È‚":"A","áº ":"A","áº¬":"A","áº¶":"A","á¸€":"A","Ä„":"A","Èº":"A","â±¯":"A","êœ²":"AA","Ã†":"AE","Ç¼":"AE","Ç¢":"AE","êœ´":"AO","êœ¶":"AU","êœ¸":"AV","êœº":"AV","êœ¼":"AY","â’·":"B","ï¼¢":"B","á¸‚":"B","á¸„":"B","á¸†":"B","Éƒ":"B","Æ‚":"B","Æ":"B","â’¸":"C","ï¼£":"C","Ä†":"C","Äˆ":"C","ÄŠ":"C","ÄŒ":"C","Ã‡":"C","á¸ˆ":"C","Æ‡":"C","È»":"C","êœ¾":"C","â’¹":"D","ï¼¤":"D","á¸Š":"D","ÄŽ":"D","á¸Œ":"D","á¸":"D","á¸’":"D","á¸Ž":"D","Ä":"D","Æ‹":"D","ÆŠ":"D","Æ‰":"D","ê¹":"D","Ç±":"DZ","Ç„":"DZ","Ç²":"Dz","Ç…":"Dz","â’º":"E","ï¼¥":"E","Ãˆ":"E","Ã‰":"E","ÃŠ":"E","á»€":"E","áº¾":"E","á»„":"E","á»‚":"E","áº¼":"E","Ä’":"E","á¸”":"E","á¸–":"E","Ä”":"E","Ä–":"E","Ã‹":"E","áºº":"E","Äš":"E","È„":"E","È†":"E","áº¸":"E","á»†":"E","È¨":"E","á¸œ":"E","Ä˜":"E","á¸˜":"E","á¸š":"E","Æ":"E","ÆŽ":"E","â’»":"F","ï¼¦":"F","á¸ž":"F","Æ‘":"F","ê»":"F","â’¼":"G","ï¼§":"G","Ç´":"G","Äœ":"G","á¸ ":"G","Äž":"G","Ä ":"G","Ç¦":"G","Ä¢":"G","Ç¤":"G","Æ“":"G","êž ":"G","ê½":"G","ê¾":"G","â’½":"H","ï¼¨":"H","Ä¤":"H","á¸¢":"H","á¸¦":"H","Èž":"H","á¸¤":"H","á¸¨":"H","á¸ª":"H","Ä¦":"H","â±§":"H","â±µ":"H","êž":"H","â’¾":"I","ï¼©":"I","ÃŒ":"I","Ã":"I","ÃŽ":"I","Ä¨":"I","Äª":"I","Ä¬":"I","Ä°":"I","Ã":"I","á¸®":"I","á»ˆ":"I","Ç":"I","Èˆ":"I","ÈŠ":"I","á»Š":"I","Ä®":"I","á¸¬":"I","Æ—":"I","â’¿":"J","ï¼ª":"J","Ä´":"J","Éˆ":"J","â“€":"K","ï¼«":"K","á¸°":"K","Ç¨":"K","á¸²":"K","Ä¶":"K","á¸´":"K","Æ˜":"K","â±©":"K","ê€":"K","ê‚":"K","ê„":"K","êž¢":"K","â“":"L","ï¼¬":"L","Ä¿":"L","Ä¹":"L","Ä½":"L","á¸¶":"L","á¸¸":"L","Ä»":"L","á¸¼":"L","á¸º":"L","Å":"L","È½":"L","â±¢":"L","â± ":"L","êˆ":"L","ê†":"L","êž€":"L","Ç‡":"LJ","Çˆ":"Lj","â“‚":"M","ï¼­":"M","á¸¾":"M","á¹€":"M","á¹‚":"M","â±®":"M","Æœ":"M","â“ƒ":"N","ï¼®":"N","Ç¸":"N","Åƒ":"N","Ã‘":"N","á¹„":"N","Å‡":"N","á¹†":"N","Å…":"N","á¹Š":"N","á¹ˆ":"N","È ":"N","Æ":"N","êž":"N","êž¤":"N","ÇŠ":"NJ","Ç‹":"Nj","â“„":"O","ï¼¯":"O","Ã’":"O","Ã“":"O","Ã”":"O","á»’":"O","á»":"O","á»–":"O","á»”":"O","Ã•":"O","á¹Œ":"O","È¬":"O","á¹Ž":"O","ÅŒ":"O","á¹":"O","á¹’":"O","ÅŽ":"O","È®":"O","È°":"O","Ã–":"O","Èª":"O","á»Ž":"O","Å":"O","Ç‘":"O","ÈŒ":"O","ÈŽ":"O","Æ ":"O","á»œ":"O","á»š":"O","á» ":"O","á»ž":"O","á»¢":"O","á»Œ":"O","á»˜":"O","Çª":"O","Ç¬":"O","Ã˜":"O","Ç¾":"O","Æ†":"O","ÆŸ":"O","êŠ":"O","êŒ":"O","Æ¢":"OI","êŽ":"OO","È¢":"OU","â“…":"P","ï¼°":"P","á¹”":"P","á¹–":"P","Æ¤":"P","â±£":"P","ê":"P","ê’":"P","ê”":"P","â“†":"Q","ï¼±":"Q","ê–":"Q","ê˜":"Q","ÉŠ":"Q","â“‡":"R","ï¼²":"R","Å”":"R","á¹˜":"R","Å˜":"R","È":"R","È’":"R","á¹š":"R","á¹œ":"R","Å–":"R","á¹ž":"R","ÉŒ":"R","â±¤":"R","êš":"R","êž¦":"R","êž‚":"R","â“ˆ":"S","ï¼³":"S","áºž":"S","Åš":"S","á¹¤":"S","Åœ":"S","á¹ ":"S","Å ":"S","á¹¦":"S","á¹¢":"S","á¹¨":"S","È˜":"S","Åž":"S","â±¾":"S","êž¨":"S","êž„":"S","â“‰":"T","ï¼´":"T","á¹ª":"T","Å¤":"T","á¹¬":"T","Èš":"T","Å¢":"T","á¹°":"T","á¹®":"T","Å¦":"T","Æ¬":"T","Æ®":"T","È¾":"T","êž†":"T","êœ¨":"TZ","â“Š":"U","ï¼µ":"U","Ã™":"U","Ãš":"U","Ã›":"U","Å¨":"U","á¹¸":"U","Åª":"U","á¹º":"U","Å¬":"U","Ãœ":"U","Ç›":"U","Ç—":"U","Ç•":"U","Ç™":"U","á»¦":"U","Å®":"U","Å°":"U","Ç“":"U","È”":"U","È–":"U","Æ¯":"U","á»ª":"U","á»¨":"U","á»®":"U","á»¬":"U","á»°":"U","á»¤":"U","á¹²":"U","Å²":"U","á¹¶":"U","á¹´":"U","É„":"U","â“‹":"V","ï¼¶":"V","á¹¼":"V","á¹¾":"V","Æ²":"V","êž":"V","É…":"V","ê ":"VY","â“Œ":"W","ï¼·":"W","áº€":"W","áº‚":"W","Å´":"W","áº†":"W","áº„":"W","áºˆ":"W","â±²":"W","â“":"X","ï¼¸":"X","áºŠ":"X","áºŒ":"X","â“Ž":"Y","ï¼¹":"Y","á»²":"Y","Ã":"Y","Å¶":"Y","á»¸":"Y","È²":"Y","áºŽ":"Y","Å¸":"Y","á»¶":"Y","á»´":"Y","Æ³":"Y","ÉŽ":"Y","á»¾":"Y","â“":"Z","ï¼º":"Z","Å¹":"Z","áº":"Z","Å»":"Z","Å½":"Z","áº’":"Z","áº”":"Z","Æµ":"Z","È¤":"Z","â±¿":"Z","â±«":"Z","ê¢":"Z","â“":"a","ï½":"a","áºš":"a","Ã ":"a","Ã¡":"a","Ã¢":"a","áº§":"a","áº¥":"a","áº«":"a","áº©":"a","Ã£":"a","Ä":"a","Äƒ":"a","áº±":"a","áº¯":"a","áºµ":"a","áº³":"a","È§":"a","Ç¡":"a","Ã¤":"a","ÇŸ":"a","áº£":"a","Ã¥":"a","Ç»":"a","ÇŽ":"a","È":"a","Èƒ":"a","áº¡":"a","áº­":"a","áº·":"a","á¸":"a","Ä…":"a","â±¥":"a","É":"a","êœ³":"aa","Ã¦":"ae","Ç½":"ae","Ç£":"ae","êœµ":"ao","êœ·":"au","êœ¹":"av","êœ»":"av","êœ½":"ay","â“‘":"b","ï½‚":"b","á¸ƒ":"b","á¸…":"b","á¸‡":"b","Æ€":"b","Æƒ":"b","É“":"b","â“’":"c","ï½ƒ":"c","Ä‡":"c","Ä‰":"c","Ä‹":"c","Ä":"c","Ã§":"c","á¸‰":"c","Æˆ":"c","È¼":"c","êœ¿":"c","â†„":"c","â““":"d","ï½„":"d","á¸‹":"d","Ä":"d","á¸":"d","á¸‘":"d","á¸“":"d","á¸":"d","Ä‘":"d","ÆŒ":"d","É–":"d","É—":"d","êº":"d","Ç³":"dz","Ç†":"dz","â“”":"e","ï½…":"e","Ã¨":"e","Ã©":"e","Ãª":"e","á»":"e","áº¿":"e","á»…":"e","á»ƒ":"e","áº½":"e","Ä“":"e","á¸•":"e","á¸—":"e","Ä•":"e","Ä—":"e","Ã«":"e","áº»":"e","Ä›":"e","È…":"e","È‡":"e","áº¹":"e","á»‡":"e","È©":"e","á¸":"e","Ä™":"e","á¸™":"e","á¸›":"e","É‡":"e","É›":"e","Ç":"e","â“•":"f","ï½†":"f","á¸Ÿ":"f","Æ’":"f","ê¼":"f","â“–":"g","ï½‡":"g","Çµ":"g","Ä":"g","á¸¡":"g","ÄŸ":"g","Ä¡":"g","Ç§":"g","Ä£":"g","Ç¥":"g","É ":"g","êž¡":"g","áµ¹":"g","ê¿":"g","â“—":"h","ï½ˆ":"h","Ä¥":"h","á¸£":"h","á¸§":"h","ÈŸ":"h","á¸¥":"h","á¸©":"h","á¸«":"h","áº–":"h","Ä§":"h","â±¨":"h","â±¶":"h","É¥":"h","Æ•":"hv","â“˜":"i","ï½‰":"i","Ã¬":"i","Ã­":"i","Ã®":"i","Ä©":"i","Ä«":"i","Ä­":"i","Ã¯":"i","á¸¯":"i","á»‰":"i","Ç":"i","È‰":"i","È‹":"i","á»‹":"i","Ä¯":"i","á¸­":"i","É¨":"i","Ä±":"i","â“™":"j","ï½Š":"j","Äµ":"j","Ç°":"j","É‰":"j","â“š":"k","ï½‹":"k","á¸±":"k","Ç©":"k","á¸³":"k","Ä·":"k","á¸µ":"k","Æ™":"k","â±ª":"k","ê":"k","êƒ":"k","ê…":"k","êž£":"k","â“›":"l","ï½Œ":"l","Å€":"l","Äº":"l","Ä¾":"l","á¸·":"l","á¸¹":"l","Ä¼":"l","á¸½":"l","á¸»":"l","Å¿":"l","Å‚":"l","Æš":"l","É«":"l","â±¡":"l","ê‰":"l","êž":"l","ê‡":"l","Ç‰":"lj","â“œ":"m","ï½":"m","á¸¿":"m","á¹":"m","á¹ƒ":"m","É±":"m","É¯":"m","â“":"n","ï½Ž":"n","Ç¹":"n","Å„":"n","Ã±":"n","á¹…":"n","Åˆ":"n","á¹‡":"n","Å†":"n","á¹‹":"n","á¹‰":"n","Æž":"n","É²":"n","Å‰":"n","êž‘":"n","êž¥":"n","ÇŒ":"nj","â“ž":"o","ï½":"o","Ã²":"o","Ã³":"o","Ã´":"o","á»“":"o","á»‘":"o","á»—":"o","á»•":"o","Ãµ":"o","á¹":"o","È­":"o","á¹":"o","Å":"o","á¹‘":"o","á¹“":"o","Å":"o","È¯":"o","È±":"o","Ã¶":"o","È«":"o","á»":"o","Å‘":"o","Ç’":"o","È":"o","È":"o","Æ¡":"o","á»":"o","á»›":"o","á»¡":"o","á»Ÿ":"o","á»£":"o","á»":"o","á»™":"o","Ç«":"o","Ç­":"o","Ã¸":"o","Ç¿":"o","É”":"o","ê‹":"o","ê":"o","Éµ":"o","Æ£":"oi","È£":"ou","ê":"oo","â“Ÿ":"p","ï½":"p","á¹•":"p","á¹—":"p","Æ¥":"p","áµ½":"p","ê‘":"p","ê“":"p","ê•":"p","â“ ":"q","ï½‘":"q","É‹":"q","ê—":"q","ê™":"q","â“¡":"r","ï½’":"r","Å•":"r","á¹™":"r","Å™":"r","È‘":"r","È“":"r","á¹›":"r","á¹":"r","Å—":"r","á¹Ÿ":"r","É":"r","É½":"r","ê›":"r","êž§":"r","êžƒ":"r","â“¢":"s","ï½“":"s","ÃŸ":"s","Å›":"s","á¹¥":"s","Å":"s","á¹¡":"s","Å¡":"s","á¹§":"s","á¹£":"s","á¹©":"s","È™":"s","ÅŸ":"s","È¿":"s","êž©":"s","êž…":"s","áº›":"s","â“£":"t","ï½”":"t","á¹«":"t","áº—":"t","Å¥":"t","á¹­":"t","È›":"t","Å£":"t","á¹±":"t","á¹¯":"t","Å§":"t","Æ­":"t","Êˆ":"t","â±¦":"t","êž‡":"t","êœ©":"tz","â“¤":"u","ï½•":"u","Ã¹":"u","Ãº":"u","Ã»":"u","Å©":"u","á¹¹":"u","Å«":"u","á¹»":"u","Å­":"u","Ã¼":"u","Çœ":"u","Ç˜":"u","Ç–":"u","Çš":"u","á»§":"u","Å¯":"u","Å±":"u","Ç”":"u","È•":"u","È—":"u","Æ°":"u","á»«":"u","á»©":"u","á»¯":"u","á»­":"u","á»±":"u","á»¥":"u","á¹³":"u","Å³":"u","á¹·":"u","á¹µ":"u","Ê‰":"u","â“¥":"v","ï½–":"v","á¹½":"v","á¹¿":"v","Ê‹":"v","êŸ":"v","ÊŒ":"v","ê¡":"vy","â“¦":"w","ï½—":"w","áº":"w","áºƒ":"w","Åµ":"w","áº‡":"w","áº…":"w","áº˜":"w","áº‰":"w","â±³":"w","â“§":"x","ï½˜":"x","áº‹":"x","áº":"x","â“¨":"y","ï½™":"y","á»³":"y","Ã½":"y","Å·":"y","á»¹":"y","È³":"y","áº":"y","Ã¿":"y","á»·":"y","áº™":"y","á»µ":"y","Æ´":"y","É":"y","á»¿":"y","â“©":"z","ï½š":"z","Åº":"z","áº‘":"z","Å¼":"z","Å¾":"z","áº“":"z","áº•":"z","Æ¶":"z","È¥":"z","É€":"z","â±¬":"z","ê£":"z","Î†":"Î‘","Îˆ":"Î•","Î‰":"Î—","ÎŠ":"Î™","Îª":"Î™","ÎŒ":"ÎŸ","ÎŽ":"Î¥","Î«":"Î¥","Î":"Î©","Î¬":"Î±","Î­":"Îµ","Î®":"Î·","Î¯":"Î¹","ÏŠ":"Î¹","Î":"Î¹","ÏŒ":"Î¿","Ï":"Ï…","Ï‹":"Ï…","Î°":"Ï…","Ï‰":"Ï‰","Ï‚":"Ïƒ"}}),b.define("select2/data/base",["../utils"],function(a){function b(a,c){b.__super__.constructor.call(this)}return a.Extend(b,a.Observable),b.prototype.current=function(a){throw new Error("The `current` method must be defined in child classes.")},b.prototype.query=function(a,b){throw new Error("The `query` method must be defined in child classes.")},b.prototype.bind=function(a,b){},b.prototype.destroy=function(){},b.prototype.generateResultId=function(b,c){var d=b.id+"-result-";return d+=a.generateChars(4),null!=c.id?d+="-"+c.id.toString():d+="-"+a.generateChars(4),d},b}),b.define("select2/data/select",["./base","../utils","jquery"],function(a,b,c){function d(a,b){this.$element=a,this.options=b,d.__super__.constructor.call(this)}return b.Extend(d,a),d.prototype.current=function(a){var b=[],d=this;this.$element.find(":selected").each(function(){var a=c(this),e=d.item(a);b.push(e)}),a(b)},d.prototype.select=function(a){var b=this;if(a.selected=!0,c(a.element).is("option"))return a.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(d){var e=[];a=[a],a.push.apply(a,d);for(var f=0;f<a.length;f++){var g=a[f].id;-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")});else{var d=a.id;this.$element.val(d),this.$element.trigger("change")}},d.prototype.unselect=function(a){var b=this;if(this.$element.prop("multiple")){if(a.selected=!1,c(a.element).is("option"))return a.element.selected=!1,void this.$element.trigger("change");this.current(function(d){for(var e=[],f=0;f<d.length;f++){var g=d[f].id;g!==a.id&&-1===c.inArray(g,e)&&e.push(g)}b.$element.val(e),b.$element.trigger("change")})}},d.prototype.bind=function(a,b){var c=this;this.container=a,a.on("select",function(a){c.select(a.data)}),a.on("unselect",function(a){c.unselect(a.data)})},d.prototype.destroy=function(){this.$element.find("*").each(function(){c.removeData(this,"data")})},d.prototype.query=function(a,b){var d=[],e=this;this.$element.children().each(function(){var b=c(this);if(b.is("option")||b.is("optgroup")){var f=e.item(b),g=e.matches(a,f);null!==g&&d.push(g)}}),b({results:d})},d.prototype.addOptions=function(a){b.appendMany(this.$element,a)},d.prototype.option=function(a){var b;a.children?(b=document.createElement("optgroup"),b.label=a.text):(b=document.createElement("option"),void 0!==b.textContent?b.textContent=a.text:b.innerText=a.text),void 0!==a.id&&(b.value=a.id),a.disabled&&(b.disabled=!0),a.selected&&(b.selected=!0),a.title&&(b.title=a.title);var d=c(b),e=this._normalizeItem(a);return e.element=b,c.data(b,"data",e),d},d.prototype.item=function(a){var b={};if(null!=(b=c.data(a[0],"data")))return b;if(a.is("option"))b={id:a.val(),text:a.text(),disabled:a.prop("disabled"),selected:a.prop("selected"),title:a.prop("title")};else if(a.is("optgroup")){b={text:a.prop("label"),children:[],title:a.prop("title")};for(var d=a.children("option"),e=[],f=0;f<d.length;f++){var g=c(d[f]),h=this.item(g);e.push(h)}b.children=e}return b=this._normalizeItem(b),b.element=a[0],c.data(a[0],"data",b),b},d.prototype._normalizeItem=function(a){c.isPlainObject(a)||(a={id:a,text:a}),a=c.extend({},{text:""},a);var b={selected:!1,disabled:!1};return null!=a.id&&(a.id=a.id.toString()),null!=a.text&&(a.text=a.text.toString()),null==a._resultId&&a.id&&null!=this.container&&(a._resultId=this.generateResultId(this.container,a)),c.extend({},b,a)},d.prototype.matches=function(a,b){return this.options.get("matcher")(a,b)},d}),b.define("select2/data/array",["./select","../utils","jquery"],function(a,b,c){function d(a,b){var c=b.get("data")||[];d.__super__.constructor.call(this,a,b),this.addOptions(this.convertToOptions(c))}return b.Extend(d,a),d.prototype.select=function(a){var b=this.$element.find("option").filter(function(b,c){return c.value==a.id.toString()});0===b.length&&(b=this.option(a),this.addOptions(b)),d.__super__.select.call(this,a)},d.prototype.convertToOptions=function(a){function d(a){return function(){return c(this).val()==a.id}}for(var e=this,f=this.$element.find("option"),g=f.map(function(){return e.item(c(this)).id}).get(),h=[],i=0;i<a.length;i++){var j=this._normalizeItem(a[i]);if(c.inArray(j.id,g)>=0){var k=f.filter(d(j)),l=this.item(k),m=c.extend(!0,{},j,l),n=this.option(m);k.replaceWith(n)}else{var o=this.option(j);if(j.children){var p=this.convertToOptions(j.children);b.appendMany(o,p)}h.push(o)}}return h},d}),b.define("select2/data/ajax",["./array","../utils","jquery"],function(a,b,c){function d(a,b){this.ajaxOptions=this._applyDefaults(b.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),d.__super__.constructor.call(this,a,b)}return b.Extend(d,a),d.prototype._applyDefaults=function(a){var b={data:function(a){return c.extend({},a,{q:a.term})},transport:function(a,b,d){var e=c.ajax(a);return e.then(b),e.fail(d),e}};return c.extend({},b,a,!0)},d.prototype.processResults=function(a){return a},d.prototype.query=function(a,b){function d(){var d=f.transport(f,function(d){var f=e.processResults(d,a);e.options.get("debug")&&window.console&&console.error&&(f&&f.results&&c.isArray(f.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),b(f)},function(){d.status&&"0"===d.status||e.trigger("results:message",{message:"errorLoading"})});e._request=d}var e=this;null!=this._request&&(c.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var f=c.extend({type:"GET"},this.ajaxOptions);"function"==typeof f.url&&(f.url=f.url.call(this.$element,a)),"function"==typeof f.data&&(f.data=f.data.call(this.$element,a)),this.ajaxOptions.delay&&null!=a.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(d,this.ajaxOptions.delay)):d()},d}),b.define("select2/data/tags",["jquery"],function(a){function b(b,c,d){var e=d.get("tags"),f=d.get("createTag");void 0!==f&&(this.createTag=f);var g=d.get("insertTag");if(void 0!==g&&(this.insertTag=g),b.call(this,c,d),a.isArray(e))for(var h=0;h<e.length;h++){var i=e[h],j=this._normalizeItem(i),k=this.option(j);this.$element.append(k)}}return b.prototype.query=function(a,b,c){function d(a,f){for(var g=a.results,h=0;h<g.length;h++){var i=g[h],j=null!=i.children&&!d({results:i.children},!0);if((i.text||"").toUpperCase()===(b.term||"").toUpperCase()||j)return!f&&(a.data=g,void c(a))}if(f)return!0;var k=e.createTag(b);if(null!=k){var l=e.option(k);l.attr("data-select2-tag",!0),e.addOptions([l]),e.insertTag(g,k)}a.results=g,c(a)}var e=this;if(this._removeOldTags(),null==b.term||null!=b.page)return void a.call(this,b,c);a.call(this,b,d)},b.prototype.createTag=function(b,c){var d=a.trim(c.term);return""===d?null:{id:d,text:d}},b.prototype.insertTag=function(a,b,c){b.unshift(c)},b.prototype._removeOldTags=function(b){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||a(this).remove()})},b}),b.define("select2/data/tokenizer",["jquery"],function(a){function b(a,b,c){var d=c.get("tokenizer");void 0!==d&&(this.tokenizer=d),a.call(this,b,c)}return b.prototype.bind=function(a,b,c){a.call(this,b,c),this.$search=b.dropdown.$search||b.selection.$search||c.find(".select2-search__field")},b.prototype.query=function(b,c,d){function e(b){var c=g._normalizeItem(b);if(!g.$element.find("option").filter(function(){return a(this).val()===c.id}).length){var d=g.option(c);d.attr("data-select2-tag",!0),g._removeOldTags(),g.addOptions([d])}f(c)}function f(a){g.trigger("select",{data:a})}var g=this;c.term=c.term||"";var h=this.tokenizer(c,this.options,e);h.term!==c.term&&(this.$search.length&&(this.$search.val(h.term),this.$search.focus()),c.term=h.term),b.call(this,c,d)},b.prototype.tokenizer=function(b,c,d,e){for(var f=d.get("tokenSeparators")||[],g=c.term,h=0,i=this.createTag||function(a){return{id:a.term,text:a.term}};h<g.length;){var j=g[h];if(-1!==a.inArray(j,f)){var k=g.substr(0,h),l=a.extend({},c,{term:k}),m=i(l);null!=m?(e(m),g=g.substr(h+1)||"",h=0):h++}else h++}return{term:g}},b}),b.define("select2/data/minimumInputLength",[],function(){function a(a,b,c){this.minimumInputLength=c.get("minimumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",b.term.length<this.minimumInputLength)return void this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumInputLength",[],function(){function a(a,b,c){this.maximumInputLength=c.get("maximumInputLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){if(b.term=b.term||"",this.maximumInputLength>0&&b.term.length>this.maximumInputLength)return void this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:b.term,params:b}});a.call(this,b,c)},a}),b.define("select2/data/maximumSelectionLength",[],function(){function a(a,b,c){this.maximumSelectionLength=c.get("maximumSelectionLength"),a.call(this,b,c)}return a.prototype.query=function(a,b,c){var d=this;this.current(function(e){var f=null!=e?e.length:0;if(d.maximumSelectionLength>0&&f>=d.maximumSelectionLength)return void d.trigger("results:message",{message:"maximumSelected",args:{maximum:d.maximumSelectionLength}});a.call(d,b,c)})},a}),b.define("select2/dropdown",["jquery","./utils"],function(a,b){function c(a,b){this.$element=a,this.options=b,c.__super__.constructor.call(this)}return b.Extend(c,b.Observable),c.prototype.render=function(){var b=a('<span class="select2-dropdown"><span class="select2-results"></span></span>');return b.attr("dir",this.options.get("dir")),this.$dropdown=b,b},c.prototype.bind=function(){},c.prototype.position=function(a,b){},c.prototype.destroy=function(){this.$dropdown.remove()},c}),b.define("select2/dropdown/search",["jquery","../utils"],function(a,b){function c(){}return c.prototype.render=function(b){var c=b.call(this),d=a('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=d,this.$search=d.find("input"),c.prepend(d),c},c.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),this.$search.on("keydown",function(a){e.trigger("keypress",a),e._keyUpPrevented=a.isDefaultPrevented()}),this.$search.on("input",function(b){a(this).off("keyup")}),this.$search.on("keyup input",function(a){e.handleSearch(a)}),c.on("open",function(){e.$search.attr("tabindex",0),e.$search.focus(),window.setTimeout(function(){e.$search.focus()},0)}),c.on("close",function(){e.$search.attr("tabindex",-1),e.$search.val("")}),c.on("focus",function(){c.isOpen()||e.$search.focus()}),c.on("results:all",function(a){if(null==a.query.term||""===a.query.term){e.showSearch(a)?e.$searchContainer.removeClass("select2-search--hide"):e.$searchContainer.addClass("select2-search--hide")}})},c.prototype.handleSearch=function(a){if(!this._keyUpPrevented){var b=this.$search.val();this.trigger("query",{term:b})}this._keyUpPrevented=!1},c.prototype.showSearch=function(a,b){return!0},c}),b.define("select2/dropdown/hidePlaceholder",[],function(){function a(a,b,c,d){this.placeholder=this.normalizePlaceholder(c.get("placeholder")),a.call(this,b,c,d)}return a.prototype.append=function(a,b){b.results=this.removePlaceholder(b.results),a.call(this,b)},a.prototype.normalizePlaceholder=function(a,b){return"string"==typeof b&&(b={id:"",text:b}),b},a.prototype.removePlaceholder=function(a,b){for(var c=b.slice(0),d=b.length-1;d>=0;d--){var e=b[d];this.placeholder.id===e.id&&c.splice(d,1)}return c},a}),b.define("select2/dropdown/infiniteScroll",["jquery"],function(a){function b(a,b,c,d){this.lastParams={},a.call(this,b,c,d),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return b.prototype.append=function(a,b){this.$loadingMore.remove(),this.loading=!1,a.call(this,b),this.showLoadingMore(b)&&this.$results.append(this.$loadingMore)},b.prototype.bind=function(b,c,d){var e=this;b.call(this,c,d),c.on("query",function(a){e.lastParams=a,e.loading=!0}),c.on("query:append",function(a){e.lastParams=a,e.loading=!0}),this.$results.on("scroll",function(){var b=a.contains(document.documentElement,e.$loadingMore[0]);if(!e.loading&&b){e.$results.offset().top+e.$results.outerHeight(!1)+50>=e.$loadingMore.offset().top+e.$loadingMore.outerHeight(!1)&&e.loadMore()}})},b.prototype.loadMore=function(){this.loading=!0;var b=a.extend({},{page:1},this.lastParams);b.page++,this.trigger("query:append",b)},b.prototype.showLoadingMore=function(a,b){return b.pagination&&b.pagination.more},b.prototype.createLoadingMore=function(){var b=a('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),c=this.options.get("translations").get("loadingMore");return b.html(c(this.lastParams)),b},b}),b.define("select2/dropdown/attachBody",["jquery","../utils"],function(a,b){function c(b,c,d){this.$dropdownParent=d.get("dropdownParent")||a(document.body),b.call(this,c,d)}return c.prototype.bind=function(a,b,c){var d=this,e=!1;a.call(this,b,c),b.on("open",function(){d._showDropdown(),d._attachPositioningHandler(b),e||(e=!0,b.on("results:all",function(){d._positionDropdown(),d._resizeDropdown()}),b.on("results:append",function(){d._positionDropdown(),d._resizeDropdown()}))}),b.on("close",function(){d._hideDropdown(),d._detachPositioningHandler(b)}),this.$dropdownContainer.on("mousedown",function(a){a.stopPropagation()})},c.prototype.destroy=function(a){a.call(this),this.$dropdownContainer.remove()},c.prototype.position=function(a,b,c){b.attr("class",c.attr("class")),b.removeClass("select2"),b.addClass("select2-container--open"),b.css({position:"absolute",top:-999999}),this.$container=c},c.prototype.render=function(b){var c=a("<span></span>"),d=b.call(this);return c.append(d),this.$dropdownContainer=c,c},c.prototype._hideDropdown=function(a){this.$dropdownContainer.detach()},c.prototype._attachPositioningHandler=function(c,d){var e=this,f="scroll.select2."+d.id,g="resize.select2."+d.id,h="orientationchange.select2."+d.id,i=this.$container.parents().filter(b.hasScroll);i.each(function(){a(this).data("select2-scroll-position",{x:a(this).scrollLeft(),y:a(this).scrollTop()})}),i.on(f,function(b){var c=a(this).data("select2-scroll-position");a(this).scrollTop(c.y)}),a(window).on(f+" "+g+" "+h,function(a){e._positionDropdown(),e._resizeDropdown()})},c.prototype._detachPositioningHandler=function(c,d){var e="scroll.select2."+d.id,f="resize.select2."+d.id,g="orientationchange.select2."+d.id;this.$container.parents().filter(b.hasScroll).off(e),a(window).off(e+" "+f+" "+g)},c.prototype._positionDropdown=function(){var b=a(window),c=this.$dropdown.hasClass("select2-dropdown--above"),d=this.$dropdown.hasClass("select2-dropdown--below"),e=null,f=this.$container.offset();f.bottom=f.top+this.$container.outerHeight(!1);var g={height:this.$container.outerHeight(!1)};g.top=f.top,g.bottom=f.top+g.height;var h={height:this.$dropdown.outerHeight(!1)},i={top:b.scrollTop(),bottom:b.scrollTop()+b.height()},j=i.top<f.top-h.height,k=i.bottom>f.bottom+h.height,l={left:f.left,top:g.bottom},m=this.$dropdownParent;"static"===m.css("position")&&(m=m.offsetParent());var n=m.offset();l.top-=n.top,l.left-=n.left,c||d||(e="below"),k||!j||c?!j&&k&&c&&(e="below"):e="above",("above"==e||c&&"below"!==e)&&(l.top=g.top-n.top-h.height),null!=e&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+e),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+e)),this.$dropdownContainer.css(l)},c.prototype._resizeDropdown=function(){var a={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(a.minWidth=a.width,a.position="relative",a.width="auto"),this.$dropdown.css(a)},c.prototype._showDropdown=function(a){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},c}),b.define("select2/dropdown/minimumResultsForSearch",[],function(){function a(b){for(var c=0,d=0;d<b.length;d++){var e=b[d];e.children?c+=a(e.children):c++}return c}function b(a,b,c,d){this.minimumResultsForSearch=c.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),a.call(this,b,c,d)}return b.prototype.showSearch=function(b,c){return!(a(c.data.results)<this.minimumResultsForSearch)&&b.call(this,c)},b}),b.define("select2/dropdown/selectOnClose",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("close",function(a){d._handleSelectOnClose(a)})},a.prototype._handleSelectOnClose=function(a,b){if(b&&null!=b.originalSelect2Event){var c=b.originalSelect2Event;if("select"===c._type||"unselect"===c._type)return}var d=this.getHighlightedResults();if(!(d.length<1)){var e=d.data("data");null!=e.element&&e.element.selected||null==e.element&&e.selected||this.trigger("select",{data:e})}},a}),b.define("select2/dropdown/closeOnSelect",[],function(){function a(){}return a.prototype.bind=function(a,b,c){var d=this;a.call(this,b,c),b.on("select",function(a){d._selectTriggered(a)}),b.on("unselect",function(a){d._selectTriggered(a)})},a.prototype._selectTriggered=function(a,b){var c=b.originalEvent;c&&c.ctrlKey||this.trigger("close",{originalEvent:c,originalSelect2Event:b})},a}),b.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(a){var b=a.input.length-a.maximum,c="Please delete "+b+" character";return 1!=b&&(c+="s"),c},inputTooShort:function(a){return"Please enter "+(a.minimum-a.input.length)+" or more characters"},loadingMore:function(){return"Loading more resultsâ€¦"},maximumSelected:function(a){var b="You can only select "+a.maximum+" item";return 1!=a.maximum&&(b+="s"),b},noResults:function(){return"No results found"},searching:function(){return"Searchingâ€¦"}}}),b.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){function D(){this.reset()}return D.prototype.apply=function(l){if(l=a.extend(!0,{},this.defaults,l),null==l.dataAdapter){if(null!=l.ajax?l.dataAdapter=o:null!=l.data?l.dataAdapter=n:l.dataAdapter=m,l.minimumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,r)),l.maximumInputLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,s)),l.maximumSelectionLength>0&&(l.dataAdapter=j.Decorate(l.dataAdapter,t)),l.tags&&(l.dataAdapter=j.Decorate(l.dataAdapter,p)),null==l.tokenSeparators&&null==l.tokenizer||(l.dataAdapter=j.Decorate(l.dataAdapter,q)),null!=l.query){var C=b(l.amdBase+"compat/query");l.dataAdapter=j.Decorate(l.dataAdapter,C)}if(null!=l.initSelection){var D=b(l.amdBase+"compat/initSelection");l.dataAdapter=j.Decorate(l.dataAdapter,D)}}if(null==l.resultsAdapter&&(l.resultsAdapter=c,null!=l.ajax&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,x)),null!=l.placeholder&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,w)),l.selectOnClose&&(l.resultsAdapter=j.Decorate(l.resultsAdapter,A))),null==l.dropdownAdapter){if(l.multiple)l.dropdownAdapter=u;else{var E=j.Decorate(u,v);l.dropdownAdapter=E}if(0!==l.minimumResultsForSearch&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,z)),l.closeOnSelect&&(l.dropdownAdapter=j.Decorate(l.dropdownAdapter,B)),null!=l.dropdownCssClass||null!=l.dropdownCss||null!=l.adaptDropdownCssClass){var F=b(l.amdBase+"compat/dropdownCss");l.dropdownAdapter=j.Decorate(l.dropdownAdapter,F)}l.dropdownAdapter=j.Decorate(l.dropdownAdapter,y)}if(null==l.selectionAdapter){if(l.multiple?l.selectionAdapter=e:l.selectionAdapter=d,null!=l.placeholder&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,f)),l.allowClear&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,g)),l.multiple&&(l.selectionAdapter=j.Decorate(l.selectionAdapter,h)),null!=l.containerCssClass||null!=l.containerCss||null!=l.adaptContainerCssClass){var G=b(l.amdBase+"compat/containerCss");l.selectionAdapter=j.Decorate(l.selectionAdapter,G)}l.selectionAdapter=j.Decorate(l.selectionAdapter,i)}if("string"==typeof l.language)if(l.language.indexOf("-")>0){var H=l.language.split("-"),I=H[0];l.language=[l.language,I]}else l.language=[l.language];if(a.isArray(l.language)){var J=new k;l.language.push("en");for(var K=l.language,L=0;L<K.length;L++){var M=K[L],N={};try{N=k.loadPath(M)}catch(a){try{M=this.defaults.amdLanguageBase+M,N=k.loadPath(M)}catch(a){l.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+M+'" could not be automatically loaded. A fallback will be used instead.');continue}}J.extend(N)}l.translations=J}else{var O=k.loadPath(this.defaults.amdLanguageBase+"en"),P=new k(l.language);P.extend(O),l.translations=P}return l},D.prototype.reset=function(){function b(a){function b(a){return l[a]||a}return a.replace(/[^\u0000-\u007E]/g,b)}function c(d,e){if(""===a.trim(d.term))return e;if(e.children&&e.children.length>0){for(var f=a.extend(!0,{},e),g=e.children.length-1;g>=0;g--){null==c(d,e.children[g])&&f.children.splice(g,1)}return f.children.length>0?f:c(d,f)}var h=b(e.text).toUpperCase(),i=b(d.term).toUpperCase();return h.indexOf(i)>-1?e:null}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:j.escapeMarkup,language:C,matcher:c,minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,sorter:function(a){return a},templateResult:function(a){return a.text},templateSelection:function(a){return a.text},theme:"default",width:"resolve"}},D.prototype.set=function(b,c){var d=a.camelCase(b),e={};e[d]=c;var f=j._convertData(e);a.extend(this.defaults,f)},new D}),b.define("select2/options",["require","jquery","./defaults","./utils"],function(a,b,c,d){function e(b,e){if(this.options=b,null!=e&&this.fromElement(e),this.options=c.apply(this.options),e&&e.is("input")){var f=a(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=d.Decorate(this.options.dataAdapter,f)}}return e.prototype.fromElement=function(a){var c=["select2"];null==this.options.multiple&&(this.options.multiple=a.prop("multiple")),null==this.options.disabled&&(this.options.disabled=a.prop("disabled")),null==this.options.language&&(a.prop("lang")?this.options.language=a.prop("lang").toLowerCase():a.closest("[lang]").prop("lang")&&(this.options.language=a.closest("[lang]").prop("lang"))),null==this.options.dir&&(a.prop("dir")?this.options.dir=a.prop("dir"):a.closest("[dir]").prop("dir")?this.options.dir=a.closest("[dir]").prop("dir"):this.options.dir="ltr"),a.prop("disabled",this.options.disabled),a.prop("multiple",this.options.multiple),a.data("select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),a.data("data",a.data("select2Tags")),a.data("tags",!0)),a.data("ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),a.attr("ajax--url",a.data("ajaxUrl")),a.data("ajax--url",a.data("ajaxUrl")));var e={};e=b.fn.jquery&&"1."==b.fn.jquery.substr(0,2)&&a[0].dataset?b.extend(!0,{},a[0].dataset,a.data()):a.data();var f=b.extend(!0,{},e);f=d._convertData(f);for(var g in f)b.inArray(g,c)>-1||(b.isPlainObject(this.options[g])?b.extend(this.options[g],f[g]):this.options[g]=f[g]);return this},e.prototype.get=function(a){return this.options[a]},e.prototype.set=function(a,b){this.options[a]=b},e}),b.define("select2/core",["jquery","./options","./utils","./keys"],function(a,b,c,d){var e=function(a,c){null!=a.data("select2")&&a.data("select2").destroy(),this.$element=a,this.id=this._generateId(a),c=c||{},this.options=new b(c,a),e.__super__.constructor.call(this);var d=a.attr("tabindex")||0;a.data("old-tabindex",d),a.attr("tabindex","-1");var f=this.options.get("dataAdapter");this.dataAdapter=new f(a,this.options);var g=this.render();this._placeContainer(g);var h=this.options.get("selectionAdapter");this.selection=new h(a,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,g);var i=this.options.get("dropdownAdapter");this.dropdown=new i(a,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,g);var j=this.options.get("resultsAdapter");this.results=new j(a,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var k=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(a){k.trigger("selection:update",{data:a})}),a.addClass("select2-hidden-accessible"),a.attr("aria-hidden","true"),this._syncAttributes(),a.data("select2",this)};return c.Extend(e,c.Observable),e.prototype._generateId=function(a){var b="";return b=null!=a.attr("id")?a.attr("id"):null!=a.attr("name")?a.attr("name")+"-"+c.generateChars(2):c.generateChars(4),b=b.replace(/(:|\.|\[|\]|,)/g,""),b="select2-"+b},e.prototype._placeContainer=function(a){a.insertAfter(this.$element);var b=this._resolveWidth(this.$element,this.options.get("width"));null!=b&&a.css("width",b)},e.prototype._resolveWidth=function(a,b){var c=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==b){var d=this._resolveWidth(a,"style");return null!=d?d:this._resolveWidth(a,"element")}if("element"==b){var e=a.outerWidth(!1);return e<=0?"auto":e+"px"}if("style"==b){var f=a.attr("style");if("string"!=typeof f)return null;for(var g=f.split(";"),h=0,i=g.length;h<i;h+=1){var j=g[h].replace(/\s/g,""),k=j.match(c);if(null!==k&&k.length>=1)return k[1]}return null}return b},e.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},e.prototype._registerDomEvents=function(){var b=this;this.$element.on("change.select2",function(){b.dataAdapter.current(function(a){b.trigger("selection:update",{data:a})})}),this.$element.on("focus.select2",function(a){b.trigger("focus",a)}),this._syncA=c.bind(this._syncAttributes,this),this._syncS=c.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var d=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=d?(this._observer=new d(function(c){a.each(c,b._syncA),a.each(c,b._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",b._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",b._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",b._syncS,!1))},e.prototype._registerDataEvents=function(){var a=this;this.dataAdapter.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerSelectionEvents=function(){var b=this,c=["toggle","focus"];this.selection.on("toggle",function(){b.toggleDropdown()}),this.selection.on("focus",function(a){b.focus(a)}),this.selection.on("*",function(d,e){-1===a.inArray(d,c)&&b.trigger(d,e)})},e.prototype._registerDropdownEvents=function(){var a=this;this.dropdown.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerResultsEvents=function(){var a=this;this.results.on("*",function(b,c){a.trigger(b,c)})},e.prototype._registerEvents=function(){var a=this;this.on("open",function(){a.$container.addClass("select2-container--open")}),this.on("close",function(){a.$container.removeClass("select2-container--open")}),this.on("enable",function(){a.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){a.$container.addClass("select2-container--disabled")}),this.on("blur",function(){a.$container.removeClass("select2-container--focus")}),this.on("query",function(b){a.isOpen()||a.trigger("open",{}),this.dataAdapter.query(b,function(c){a.trigger("results:all",{data:c,query:b})})}),this.on("query:append",function(b){this.dataAdapter.query(b,function(c){a.trigger("results:append",{data:c,query:b})})}),this.on("keypress",function(b){var c=b.which;a.isOpen()?c===d.ESC||c===d.TAB||c===d.UP&&b.altKey?(a.close(),b.preventDefault()):c===d.ENTER?(a.trigger("results:select",{}),b.preventDefault()):c===d.SPACE&&b.ctrlKey?(a.trigger("results:toggle",{}),b.preventDefault()):c===d.UP?(a.trigger("results:previous",{}),b.preventDefault()):c===d.DOWN&&(a.trigger("results:next",{}),b.preventDefault()):(c===d.ENTER||c===d.SPACE||c===d.DOWN&&b.altKey)&&(a.open(),b.preventDefault())})},e.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},e.prototype._syncSubtree=function(a,b){var c=!1,d=this;if(!a||!a.target||"OPTION"===a.target.nodeName||"OPTGROUP"===a.target.nodeName){if(b)if(b.addedNodes&&b.addedNodes.length>0)for(var e=0;e<b.addedNodes.length;e++){var f=b.addedNodes[e];f.selected&&(c=!0)}else b.removedNodes&&b.removedNodes.length>0&&(c=!0);else c=!0;c&&this.dataAdapter.current(function(a){d.trigger("selection:update",{data:a})})}},e.prototype.trigger=function(a,b){var c=e.__super__.trigger,d={open:"opening",close:"closing",select:"selecting",unselect:"unselecting"};if(void 0===b&&(b={}),a in d){var f=d[a],g={prevented:!1,name:a,args:b};if(c.call(this,f,g),g.prevented)return void(b.prevented=!0)}c.call(this,a,b)},e.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},e.prototype.open=function(){this.isOpen()||this.trigger("query",{})},e.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},e.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},e.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},e.prototype.focus=function(a){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},e.prototype.enable=function(a){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=a&&0!==a.length||(a=[!0]);var b=!a[0];this.$element.prop("disabled",b)},e.prototype.data=function(){this.options.get("debug")&&arguments.length>0&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var a=[];return this.dataAdapter.current(function(b){a=b}),a},e.prototype.val=function(b){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==b||0===b.length)return this.$element.val();var c=b[0];a.isArray(c)&&(c=a.map(c,function(a){return a.toString()})),this.$element.val(c).trigger("change")},e.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",this.$element.data("old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},e.prototype.render=function(){var b=a('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return b.attr("dir",this.options.get("dir")),this.$container=b,this.$container.addClass("select2-container--"+this.options.get("theme")),b.data("element",this.$element),b},e}),b.define("jquery-mousewheel",["jquery"],function(a){return a}),b.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults"],function(a,b,c,d){if(null==a.fn.select2){var e=["open","close","destroy"];a.fn.select2=function(b){if("object"==typeof(b=b||{}))return this.each(function(){var d=a.extend(!0,{},b);new c(a(this),d)}),this;if("string"==typeof b){var d,f=Array.prototype.slice.call(arguments,1);return this.each(function(){var c=a(this).data("select2");null==c&&window.console&&console.error&&console.error("The select2('"+b+"') method was called on an element that is not using Select2."),d=c[b].apply(c,f)}),a.inArray(b,e)>-1?this:d}throw new Error("Invalid arguments for Select2: "+b)}}return null==a.fn.select2.defaults&&(a.fn.select2.defaults=d),c}),{define:b.define,require:b.require}}(),c=b.require("jquery.select2");return a.fn.select2.amd=b,c});


jQuery(document).ready(function(){

  jQuery("#jobalertArea").select2({
    minimumResultsForSearch: -1
  });
  jQuery("#jobalertCareerlevel").select2({
    minimumResultsForSearch: -1
  });

  $('#jobalertArea + .select2').click(function(){
    if($(this).hasClass('wglIsInvalid')){
      $('#jobalertArea').data('select2').$dropdown.addClass('wglIsInvalid');
    }
  });

  $('#jobalertCareerlevel + .select2').click(function(){
    if($(this).hasClass('wglIsInvalid')){
      $('#jobalertCareerlevel').data('select2').$dropdown.addClass('wglIsInvalid');
    }
  });

   var data = {$filter: "Langu eq '"+wLanguageU+"' and RubrikenModif eq '90'"};
   jQuery.ajax({
     url: pathWebservice + '/or2_jobalert_srv/DepartmentSet',
     method: 'GET',
     data: jQuery.param(data),
     dataType: 'json',
     contentType: "application/json; charset=utf-8",
     headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
     success: function(result){
       var selectArr = new Array();
       jQuery.each(result.d.results, function(i, data){
       	if(data.Rubrik != '0000'){
          var valueToPush = { };
          valueToPush.id = data.Rubrik;
          valueToPush.text = data.Rtext;
          selectArr.push(valueToPush);
 				}
       });
       jQuery("#jobalertArea").select2({
        data: selectArr,
        minimumResultsForSearch: -1,
        dropdownAutoWidth : true
      });
     },
     error: function(err){}
   });
   // Anstellungsart
   var data = {$filter: "Langu eq '"+wLanguageU+"'"};
   jQuery.ajax({
     url: pathWebservice + '/or2_jobalert_srv/EmploymentTypeSet',
     method: 'GET',
     data: jQuery.param(data),
     dataType: 'json',
     contentType: "application/json; charset=utf-8",
     headers: {'X-Requested-With': 'X', 'dataserviceversion': '2.0'},
     success: function(result){
       var selectArr = new Array();
       jQuery.each(result.d.results, function(i, data){
       	if(data.Anstart != '0000'){
          var valueToPush = { };
          valueToPush.id = data.Anstart;
          valueToPush.text = data.Ansttext;
          selectArr.push(valueToPush);
 				}
       });
       jQuery("#jobalertCareerlevel").select2({
        data: selectArr,
        minimumResultsForSearch: -1,
        dropdownAutoWidth : true
      });
     },
     error: function(err){}
   });


   jQuery('#formJobalertRegister').submit(function(e){
  	e.preventDefault();

  	jQuery(this).removeClass('wglFormStatusSubmited');
    jQuery(this).removeClass('wglIsInvalid');
    jQuery('#formJobalertRegister').find('.errorMessage').hide();
   	var validForm = true;
  	// Email
  	var valid = checkMail(jQuery('#formJobalertRegister #jobalertEmail').val());
  	if(!valid){
  		jQuery('#formJobalertRegister #jobalertEmail').addClass('wglIsInvalid');
  		jQuery('#formJobalertRegister #jobalertEmail').next('.errorMessage').fadeIn();
  		validForm = false;
  	}
    if(jQuery('#formJobalertRegister #jobalertArea').val() == '' && jQuery('#formJobalertRegister #jobalertCareerlevel').val() == ''){
      jQuery('#formJobalertRegister #jobalertArea, #formJobalertRegister #jobalertCareerlevel').addClass('wglIsInvalid');
  		jQuery('#formJobalertRegister #jobalertArea').nextAll('.errorMessage').fadeIn();
  		validForm = false;
    }

  	// Absenden
  	if(validForm){
  		var data = {
				JobagentId: '00000001',
				Email: jQuery('#formJobalertRegister #jobalertEmail').val(),
				Salutation: '',
				FirstName: '',
				LastName: '',
				SearchText: '',
				SearchCountry: '',
				SearchCompany: '',
				SearchRubrik: jQuery('#formJobalertRegister #jobalertArea').val(),
				SearchAnstart: jQuery('#formJobalertRegister #jobalertCareerlevel').val()
		  };
		  var links = {success: '/jobs/karriere/jobticker/registrierung-erfolgreich.php', failure: '/jobs/karriere/jobticker/registrierung-fehler.php'};
  		wsJobalertRegister(data, links);
  	}

  });



});

