(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{124:function(e,n,t){"use strict";function i(e,n,t){var i;return function(){var s=this,o=arguments,u=function(){i=null,t||e.apply(s,o)},m=t&&!i;clearTimeout(i),i=setTimeout(u,n),m&&e.apply(s,o)}}t.d(n,"a",(function(){return i}))},93:function(e,n,t){"use strict";t.r(n),t.d(n,"StaticElements",(function(){return o}));t(55);var i=t(15),s=t(124);class o{constructor(){this._onResize=this._onResize.bind(this),this.elementsInitialized=!1,this.elementsReady=this.fetchElements(),this.menuItems=[],window.addEventListener("resize",Object(s.a)(this._onResize,300),!1)}init(){this.elementsReady.then(e=>{this.elementsInitialized||this.initializeElements(e),this.cookiesManager.init()})}menuItemsUpdate(){this.menuItems.forEach(e=>e.onLeave())}fetchElements(){return Promise.all([Object(i.a)(["CookiesManager"]).from(t.e(14).then(t.bind(null,154))),Object(i.a)(["StickyMenu"]).from(t.e(74).then(t.bind(null,155))),Object(i.a)(["MobileMenuOpen"]).from(t.e(29).then(t.bind(null,156))),Object(i.a)(["MenuItem"]).from(Promise.all([t.e(1),t.e(28)]).then(t.bind(null,157))),Object(i.a)(["SubMenu"]).from(t.e(75).then(t.bind(null,158)))])}initializeElements([{CookiesManager:e},{StickyMenu:n},{MobileMenuOpen:t},{MenuItem:i},{SubMenu:s}]){this.cookiesManager=new e,this.stickyMenu=new n(document.querySelector(".page__header")),this.mobileMenu=new t(document.querySelector(".main-menu")),this.menuItems=Array.from(document.querySelectorAll(".main-menu__item")).map(e=>new i(e,"main-menu")),Array.from(document.querySelectorAll(".social-menu__item")).forEach(e=>new i(e,"social-menu")),Array.from(document.querySelectorAll(".main-menu .sub-menu")).forEach(e=>new s(e))}mobileMenuClose(){this.elementsReady.then(()=>{this.mobileMenu.close()})}_onResize(){this.menuItems.forEach(e=>e.onLeave())}}}}]);