!function(e,i){var t=function(e){var t,i=e.createElement("details");if(!("open"in i))return!1;var n,s=e.body||(n=e.documentElement,t=!0,n.insertBefore(e.createElement("body"),n.firstElementChild||n.firstChild));i.innerHTML="<summary>a</summary>b",i.style.display="block",s.appendChild(i);var o=i.offsetHeight;return i.open=!0,o=o!==i.offsetHeight,s.removeChild(i),t&&s.parentNode.removeChild(s),o}(e);function n(e){e.toggleClass("open")}i.fn.details=function(){return t?this:this.each(function(){var t=i(this),e=i("summary",t).first();e.prop("tabIndex",0),e.on("keydown",function(e){if(32===e.keyCode||13===e.keyCode)return n(t),!1}),e.on("click",function(){e.focus(),n(t)})})}}(document,jQuery),define("discourse/plugins/discourse-details/initializers/apply-details",["exports","discourse/lib/plugin-api"],function(e,t){"use strict";function i(e){e.decorateCooked(function(e){return $("details",e).details()},{id:"discourse-details"}),e.addToolbarPopupMenuOptionsCallback(function(){return{action:"insertDetails",icon:"caret-right",label:"details.title"}}),e.modifyClass("controller:composer",{actions:{insertDetails:function(){this.toolbarEvent.applySurround('\n[details="'+I18n.t("composer.details_title")+'"]\n',"\n[/details]\n","details_text",{multiline:!1})}}})}Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"apply-details",initialize:function(){(0,t.withPluginApi)("0.8.7",i)}}}),define("discourse/plugins/discourse-details/lib/discourse-markdown/details",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setup=function(e){e.whiteList(["summary","summary[title]","details","details[open]","details.elided"]),e.registerPlugin(function(e){e.block.bbcode.ruler.push("details",t)})};var t={tag:"details",before:function(e,t){var i=t.attrs;e.push("bbcode_open","details",1),e.push("bbcode_open","summary",1),e.push("text","",0).content=i._default||"",e.push("bbcode_close","summary",-1)},after:function(e){e.push("bbcode_close","details",-1)}}});
//# sourceMappingURL=https://sjc2.discourse-cdn.com/standard17/assets/plugins/discourse-details-a0eaecee5c192d6eda793b1c7a5f5e31c14360b171a1718d76eb4eef66f1ee9f.js.map