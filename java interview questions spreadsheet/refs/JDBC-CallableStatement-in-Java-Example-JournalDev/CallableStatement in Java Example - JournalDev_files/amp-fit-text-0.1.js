(self.AMP=self.AMP||[]).push({n:"amp-fit-text",v:"2001281851410",f:(function(AMP,_){
var c="function"==typeof Object.create?Object.create:function(a){function b(){}b.prototype=a;return new b},k;if("function"==typeof Object.setPrototypeOf)k=Object.setPrototypeOf;else{var m;a:{var n={a:!0},p={};try{p.__proto__=n;m=p.a;break a}catch(a){}m=!1}k=m?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var q=k;self.__AMP_LOG=self.__AMP_LOG||{user:null,dev:null,userForEmbed:null};var r,t="Webkit webkit Moz moz ms O o".split(" ");function u(a,b,d){var f;var e=a.style;if(2>b.length||0!=b.lastIndexOf("--",0)){r||(r=Object.create(null));var g=r[b];if(!g){g=b;if(void 0===e[b]){var h=b.charAt(0).toUpperCase()+b.slice(1);b:{for(var l=0;l<t.length;l++){var x=t[l]+h;if(void 0!==e[x]){h=x;break b}}h=""}void 0!==e[h]&&(g=h)}r[b]=g}b=g}b&&(a.style[b]=f?d+f:d)}function v(a,b){for(var d in b)u(a,d,b[d])};function w(a){var b=parseFloat(a);a=b;return"number"===typeof a&&isFinite(a)?b:void 0};function y(a){a=AMP.BaseElement.call(this,a)||this;a.h=null;a.c=null;a.j=null;a.m=-1;a.l=-1;return a}var z=AMP.BaseElement;y.prototype=c(z.prototype);y.prototype.constructor=y;if(q)q(y,z);else for(var A in z)if("prototype"!=A)if(Object.defineProperties){var B=Object.getOwnPropertyDescriptor(z,A);B&&Object.defineProperty(y,A,B)}else y[A]=z[A];y.o=z.prototype;
y.prototype.isLayoutSupported=function(a){return"fixed"==a||"fixed-height"==a||"responsive"==a||"fill"==a||"flex-item"==a||"fluid"==a||"intrinsic"==a};
y.prototype.buildCallback=function(){var a=this;this.h=this.element.ownerDocument.createElement("div");this.applyFillContent(this.h);this.h.classList.add("i-amphtml-fit-text-content");v(this.h,{zIndex:2});this.c=this.element.ownerDocument.createElement("div");v(this.c,{lineHeight:"1.15em"});this.h.appendChild(this.c);this.j=this.element.ownerDocument.createElement("div");v(this.j,{position:"absolute",top:0,left:0,zIndex:1,visibility:"hidden",lineHeight:"1.15em"});this.getRealChildNodes().forEach(function(b){a.c.appendChild(b)});
this.j.innerHTML=this.c.innerHTML;this.element.appendChild(this.h);this.element.appendChild(this.j);this.m=w(this.element.getAttribute("min-font-size"))||6;this.l=w(this.element.getAttribute("max-font-size"))||72};y.prototype.prerenderAllowed=function(){return!0};y.prototype.isRelayoutNeeded=function(){return!0};
y.prototype.layoutCallback=function(){var a=this;return this.mutateElement(function(){var b=a.element.offsetHeight,d=a.j,f=a.element.offsetWidth;var e=a.m;var g=a.l;for(g++;1<g-e;){var h=Math.floor((e+g)/2);u(d,"fontSize",h+"px");var l=d.offsetWidth;d.offsetHeight>b||l>f?g=h:e=h}u(a.c,"fontSize",e+"px");d=a.c;f=a.j;u(f,"fontSize",e+"px");f=f.offsetHeight>b;e*=1.15;b=Math.floor(b/e);d.classList.toggle("i-amphtml-fit-text-content-overflown",f);v(d,{lineClamp:f?b:"",maxHeight:f?e*b+"px":""})})};
(function(a){a.registerElement("amp-fit-text",y,".i-amphtml-fit-text-content,.i-amphtml-fit-text-content.i-amphtml-fill-content{display:block;display:-ms-flexbox;display:flex;-ms-flex-direction:column;flex-direction:column;-ms-flex-wrap:nowrap;flex-wrap:nowrap;-ms-flex-pack:center;justify-content:center}.i-amphtml-fit-text-content-overflown{display:block;display:-webkit-box;-webkit-box-orient:vertical;overflow:hidden}\n/*# sourceURL=/extensions/amp-fit-text/0.1/amp-fit-text.css*/")})(self.AMP);
})});

//# sourceMappingURL=amp-fit-text-0.1.js.map
