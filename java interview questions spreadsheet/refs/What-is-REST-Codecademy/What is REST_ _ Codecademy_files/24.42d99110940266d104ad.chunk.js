(window.__LOADABLE_LOADED_CHUNKS__=window.__LOADABLE_LOADED_CHUNKS__||[]).push([[24],{fcc1:function(t,e,r){"use strict";var n=r("q1tI"),o=r.n(n),u=r("QqFe"),a=r("yc2H"),i=r("NkHZ"),p=r("fLhW"),c=r("gtj7"),l=r("b0K7"),f=r("izqJ");function _typeof(t){return(_typeof="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function _typeof(t){return typeof t}:function _typeof(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function _extends(){return(_extends=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}function _defineProperties(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function _possibleConstructorReturn(t,e){return!e||"object"!==_typeof(e)&&"function"!=typeof e?function _assertThisInitialized(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function _getPrototypeOf(t){return(_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function _setPrototypeOf(t,e){return(_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(t,e){return t.__proto__=e,t})(t,e)}var s=function(t){function ProButton(){var t,e;!function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,ProButton);for(var r=arguments.length,n=new Array(r),s=0;s<r;s++)n[s]=arguments[s];return(e=_possibleConstructorReturn(this,(t=_getPrototypeOf(ProButton)).call.apply(t,[this].concat(n)))).getButtonStyleProps=function(){return"dark"===e.props.theme?{outline:!0,theme:"white"}:{theme:"brand-purple"}},e.getButtonText=function(){return e.props.showTrialCTA?f.tryProForFree:f.upgradePro},e.getButtonHref=function(){var t=e.props,r=t.location,n=t.showTrialCTA,o=t.fromTrialUpsell;return n?Object(l.S)({redirectUrl:Object(c.e)(r),fromTrialUpsell:o}):l.U},e.onButtonClick=function(t){var r=e.props,n=r.handleClick,o={ad_name:r.adName};Object(p.b)("ad","click",o),n?(n(),t.preventDefault()):window.location.href=e.getButtonHref()},e.renderUpgradeButton=function(){var t=e.props,r=t.openUpgradeLinkInNewTab,n=t.buttonProps,p={ad_name:e.props.adName};return o.a.createElement(i.a,null,o.a.createElement(a.a,{payload:p},o.a.createElement(u.a,_extends({},e.getButtonStyleProps(),{round:!0,href:e.getButtonHref(),"data-testid":"upgrade-link","data-cxlid":"upgrade-link",target:r?"_blank":"_self",rel:"noopener noreferrer",onClick:e.onButtonClick},n),e.getButtonText())))},e.renderUnpauseButton=function(){return o.a.createElement(u.a,_extends({},e.getButtonStyleProps(),{href:Object(l.f)(),"data-testid":"unpause-link",onClick:function onClick(){return Object(p.b)("user","click",{target:"header_unpause"})}},e.props.buttonStyles),f.unpauseNow)},e}return function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&_setPrototypeOf(t,e)}(ProButton,n["Component"]),function _createClass(t,e,r){return e&&_defineProperties(t.prototype,e),r&&_defineProperties(t,r),t}(ProButton,[{key:"render",value:function render(){var t=this.props,e=t.isPro;return t.isProPaused?this.renderUnpauseButton():e?null:this.renderUpgradeButton()}}]),ProButton}();s.defaultProps={adName:"upgrade_cta_topnav_v1",openUpgradeLinkInNewTab:!1,theme:"light"},e.a=s}}]);
//# sourceMappingURL=24.42d99110940266d104ad.chunk.js.map