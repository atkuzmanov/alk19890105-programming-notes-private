(function(){/* 
 
 Copyright The Closure Library Authors. 
 SPDX-License-Identifier: Apache-2.0 
*/ 
var b=document;function g(){for(var d=b.head,e=d.querySelectorAll("link[data-reload-stylesheet][as=style][rel=preload]"),c=0;c<e.length;c++){var k=e[c],a="link",f=document;a=String(a);"application/xhtml+xml"===f.contentType&&(a=a.toLowerCase());a=f.createElement(a);a.setAttribute("rel","stylesheet");a.setAttribute("href",k.getAttribute("href"));d.appendChild(a)}};function h(){new g}"complete"===b.readyState||"interactive"===b.readyState?h():b.addEventListener("DOMContentLoaded",h);}).call(this);
