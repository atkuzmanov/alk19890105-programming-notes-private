function setClass(e,t){var l=t.replace(/\s{2,}/g," ").replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");e.className=""===l?" ":l}function bindEvent(e,t,l){e.addEventListener?e.addEventListener(t,l,!1):e.attachEvent&&e.attachEvent("on"+t,l)}function unbindEvent(e,t,l){e.removeEventListener?e.removeEventListener(t,l,!1):e.detachEvent&&e.detachEvent("on"+t,l)}function postAjax(e,t,l){var n="";if("string"==typeof t)n=t;else for(var a in t)""!==n&&(n+="&"),n+=encodeURIComponent(a)+"="+encodeURIComponent(t[a]);var s=window.XMLHttpRequest?new XMLHttpRequest:new ActiveXObject("Microsoft.XMLHTTP");return s.open("POST",e),s.onreadystatechange=function(){s.readyState>3&&200===s.status&&null!==l&&l(s.responseText)},s.setRequestHeader("X-Requested-With","XMLHttpRequest"),s.setRequestHeader("Content-Type","application/x-www-form-urlencoded"),s.send(n),s}Object.defineProperty&&Object.getOwnPropertyDescriptor&&Object.getOwnPropertyDescriptor(Element.prototype,"textContent")&&!Object.getOwnPropertyDescriptor(Element.prototype,"textContent").get&&function(){var e=Object.getOwnPropertyDescriptor(Element.prototype,"innerText");Object.defineProperty(Element.prototype,"textContent",{get:function(){return e.get.call(this)},set:function(t){return e.set.call(this,t)}})}(),Element.prototype.hasClass||(Element.prototype.hasClass=function(e){return-1!==(" "+this.className+" ").indexOf(" "+e+" ")}),Element.prototype.addClass||(Element.prototype.addClass=function(e){this.hasClass(e)||setClass(this,this.className+" "+e)}),Element.prototype.removeClass||(Element.prototype.removeClass=function(e){this.hasClass(e)&&setClass(this,this.className.replace(new RegExp("(\\s|^)"+e+"(\\s|$)")," "))}),Element.prototype.toggleClass||(Element.prototype.toggleClass=function(e){this.hasClass(e)?this.removeClass(e):this.addClass(e)}),function(e,t){function l(l){if("complete"===t.readyState)return l();e.addEventListener?e.addEventListener("load",l,!1):e.attachEvent?e.attachEvent("onload",l):e.onload=l}function n(){var e,l=t.getElementById("collapsible").getElementsByTagName("div"),n=t.getElementById("collapsible_filter").value.toUpperCase();if(0===n.length)a();else for(var s=0,o=l.length;s<o;s++)for(var r=l[s].getElementsByTagName("UL"),i=0,d=r.length;i<d;i++){for(var c=!1,g=r[i].getElementsByTagName("LI"),p=0,m=g.length;p<m;p++){var u;-1!==g[p].textContent.toUpperCase().indexOf(n)?(g[p].removeClass("hidden"),c=!0):g[p].addClass("hidden")}if(c){for(l[s].removeClass("expandable"),l[s].addClass("expanded"),l[s].removeClass("hidden"),r[i].removeClass("hidden"),e=l[s].firstChild;null!==e&&"IMG"!==e.nodeName.toUpperCase();)e=e.nextSibling;null!==e&&(e.src="/images/caret_down.png",e.alt="down caret")}else{for(l[s].removeClass("expanded"),l[s].addClass("expandable"),l[s].addClass("hidden"),r[i].addClass("hidden"),e=l[s].firstChild;null!==e&&"IMG"!==e.nodeName.toUpperCase();)e=e.nextSibling;null!==e&&(e.src="/images/caret_right.png",e.alt="right caret")}}}function a(){var e,l=t.getElementById("collapsible").getElementsByTagName("div"),n=!0;t.getElementById("collapsible_filter").value="";for(var a=0,s=l.length;a<s;a++)for(var o=l[a].getElementsByTagName("UL"),r=0,i=o.length;r<i;r++){for(var d=!1,c=o[r].getElementsByTagName("LI"),g=0,p=c.length;g<p;g++)c[g].hasClass("active_page")&&(d=!0,n=!1),c[g].removeClass("hidden");if(l[a].removeClass("hidden"),d){for(l[a].removeClass("expandable"),l[a].addClass("expanded"),o[r].removeClass("hidden"),e=l[a].firstChild;null!==e&&"IMG"!==e.nodeName.toUpperCase();)e=e.nextSibling;null!==e&&(e.src="/images/caret_down.png",e.alt="down caret")}else{for(l[a].removeClass("expanded"),l[a].addClass("expandable"),o[r].addClass("hidden"),e=l[a].firstChild;null!==e&&"IMG"!==e.nodeName.toUpperCase();)e=e.nextSibling;null!==e&&(e.src="/images/caret_right.png",e.alt="right caret")}}if(n&&l.length){l[0].removeClass("expandable"),l[0].addClass("expanded");var m=l[0].getElementsByTagName("UL");for(m.length&&m[0].removeClass("hidden"),e=l[0].firstChild;null!==e&&"IMG"!==e.nodeName.toUpperCase();)e=e.nextSibling;null!==e&&(e.src="/images/caret_down.png",e.alt="down caret")}}function s(){var l,n;if(0===t.getElementById("collapsible_filter").value.length){for(var a=t.getElementById("collapsible").getElementsByTagName("div"),s=0,o=a.length;s<o;s++){for(a[s]!==this?(a[s].addClass("expandable"),a[s].removeClass("expanded")):(a[s].removeClass("expandable"),a[s].addClass("expanded")),l=a[s].firstChild;null!==l&&"IMG"!==l.nodeName.toUpperCase();)l=l.nextSibling;for(null!==l&&(l.src="/images/caret_right.png",l.alt="right caret"),l=a[s].firstChild;null!==l&&"UL"!==l.nodeName.toUpperCase();)l=l.nextSibling;null!==l&&l.addClass("hidden")}for(l=this.firstChild;null!==l&&"IMG"!==l.nodeName.toUpperCase();)l=l.nextSibling;for(null!==l&&(l.src="/images/caret_down.png",l.alt="down caret"),l=this.firstChild;null!==l&&"UL"!==l.nodeName.toUpperCase();)l=l.nextSibling;null!==l&&l.removeClass("hidden"),e.scrollTo(0,0)}}function o(e,t,l){t=t.toUpperCase();do{if(e.nodeName===t&&(null===l||e.hasClass(l)))return e}while(null!==(e=e.parentNode));return null}function r(t){var l,n,a=(t=t||e.event).target||t.srcElement,s=a.getAttribute("data-tab"),r=o(a,"DIV","nav_tab");if(null!==r){var i=r.getElementsByTagName("li");for(l=0;l<i.length;l++)null!==(n=i[l].getAttribute("data-tab"))&&(n===s?i[l].addClass("active"):i[l].removeClass("active"));var d=r.getElementsByTagName("div");for(l=0;l<d.length;l++)null!==(n=d[l].getAttribute("data-tab"))&&(n===s?d[l].addClass("active"):d[l].removeClass("active"))}}function i(){var l=null===e.getCookie("ccpa_opt_out"),n=t.getElementById("change_privacy");null!==n&&(n.innerHTML=l?"Opt-out of tailored ads":'<span class="text-success">Support us by allowing tailored ads</span>')}function d(t){t.preventDefault();var l=null===e.getCookie("ccpa_opt_out");l?e.setCookie("ccpa_opt_out",1,8760):e.setCookie("ccpa_opt_out",0,-1),postAjax("/php-system/log_consent.php",{legislation:"CCPA",consent:l},null),i()}e.ll={images:[],active:!1,hasObserver:!1,initialize:function(){var l=t.querySelectorAll(".b-lazy");if(l.length>0){for(var n=l.length;n--;e.ll.images.unshift(l[n]));if("IntersectionObserver"in e){e.ll.hasObserver=!0;for(var a=new e.IntersectionObserver((function(t){for(var l=0;l<t.length;l++)t[l].isIntersecting&&(e.ll.swap(t[l].target),a.unobserve(t[l].target))}),{rootMargin:"200px 0px 200px 0px"}),s=0;s<e.ll.images.length;s++)a.observe(e.ll.images[s])}else bindEvent(e,"scroll",e.ll.load),bindEvent(e,"touchmove",e.ll.load),bindEvent(e,"resize",e.ll.load),e.ll.load()}},swap:function(e){e.src=e.getAttribute("data-src"),"function"==typeof e.removeAttribute&&e.removeAttribute("data-src"),e.removeClass("b-lazy")},load:function(){!e.ll.hasObserver&&!1===e.ll.active&&e.ll.images.length>0&&(e.ll.active=!0,setTimeout((function(){for(var l=e.innerHeight||t.documentElement.clientHeight,n=e.ll.images.length;n--;){var a=e.ll.images[n].getBoundingClientRect();0!==a.top&&0!==a.bottom&&a.top<l+200&&a.bottom>-200&&(e.ll.swap(e.ll.images[n]),e.ll.images.splice(n,1))}0===e.ll.images.length&&(unbindEvent(e,"scroll",e.ll.load),unbindEvent(e,"touchmove",e.ll.load),unbindEvent(e,"resize",e.ll.load)),e.ll.active=!1}),200))}},e.fh={state:!1,active:!1,height:0,header:null,initialize:function(){this.height=t.getElementById("pre_header").offsetHeight,this.header=t.getElementById("header"),bindEvent(e,"scroll",e.fh.handler),bindEvent(e,"touchmove",e.fh.handler),e.fh.scroll()},scroll:function(){var l,n=(void 0!==e.pageXOffset?e.pageYOffset:"CSS1Compat"===(t.compatMode||"")?t.documentElement.scrollTop:t.body.scrollTop)>=e.fh.height;n!==e.fh.state&&(n?e.fh.header.addClass("fixed"):e.fh.header.removeClass("fixed"),e.fh.state=n)},handler:function(){!1===e.fh.active&&(e.fh.active=!0,setTimeout((function(){e.fh.scroll(),e.fh.active=!1}),30),e.fh.scroll())}},e.ll.initialize(),e.fh.initialize();for(var c=t.getElementsByTagName("li"),g=0;g<c.length;g++)null!==c[g].getAttribute("data-tab")&&(c[g].onclick=r);var p=t.getElementById("main"),m=t.getElementById("menu_link"),u=t.getElementById("totop");m.onclick=function(){p.toggleClass("active"),e.scrollTo(0,0)},u.onclick=function(){e.scrollTo(0,0)};var h=t.getElementById("collapsible_filter");null!==h&&(h.onkeyup=n);var v=t.getElementById("clear_filter");null!==v&&(v.onclick=a);var f=t.getElementById("collapsible");if(null!==f)for(var C=f.getElementsByTagName("div"),b=C.length,E=0;E<b;E++)C[E].onclick=s;var y=t.getElementById("feedback_frm");null!==y&&(y.onsubmit=function(){if(void 0!==e.adblk){var l=t.getElementById("feedback_frm"),n;if(null!==l)l.elements.ab.value=e.adblk?"yes":"no"}return!0}),i();var x=t.getElementById("change_privacy");null!==x&&(x.onclick=d),l((function(){var e,l;for(e=t.querySelectorAll(".youtube"),l=0;l<e.length;l++)e[l].hasAttribute("data-video-id")&&(e[l].innerHTML='<div><iframe src="https://www.youtube.com/embed/'+e[l].getAttribute("data-video-id")+'?rel=0" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe></div>')}))}(this,this.document);