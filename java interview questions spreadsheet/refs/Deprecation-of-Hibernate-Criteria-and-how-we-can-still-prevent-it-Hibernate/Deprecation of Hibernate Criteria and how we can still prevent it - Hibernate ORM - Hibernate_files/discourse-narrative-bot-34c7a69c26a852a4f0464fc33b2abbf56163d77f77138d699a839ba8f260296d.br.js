define("discourse/plugins/discourse-narrative-bot/initializers/new-user-narrative",["exports","discourse/lib/plugin-api"],function(e,t){"use strict";function i(e){var t=e.container.lookup("message-bus:main"),i=e.getCurrentUser(),r=e.container.lookup("service:app-events");e.modifyClass("component:site-header",{didInsertElement:function(){this._super.apply(this,arguments),this.dispatch("header:search-context-trigger","header")}}),e.attachWidgetAction("header","headerSearchContextTrigger",function(){this.site.mobileView?this.state.skipSearchContext=!1:(this.state.contextEnabled=!0,this.state.searchContextType="topic")}),t&&i&&t.subscribe("/new_user_narrative/tutorial_search",function(){r.trigger("header:search-context-trigger")})}Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"new-user-narratve",initialize:function(e){e.lookup("site-settings:main").discourse_narrative_bot_enabled&&(0,t.withPluginApi)("0.8.7",i)}}});
//# sourceMappingURL=https://sjc3.discourse-cdn.com/standard17/assets/plugins/discourse-narrative-bot-34c7a69c26a852a4f0464fc33b2abbf56163d77f77138d699a839ba8f260296d.js.map