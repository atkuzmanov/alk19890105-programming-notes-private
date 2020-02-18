define("discourse/plugins/discourse-presence/discourse/components/composer-presence-display",["exports","@ember/runloop","@ember/component","discourse/lib/ajax","ember-addons/ember-computed-decorators"],function(e,t,s,r,n){"use strict";function i(t,r,e,s,n){var i={};return Object.keys(s).forEach(function(e){i[e]=s[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,s){return s(t,r,e)||e},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,r,i),i=null),i}var a,c,o,l,u,p,d;Object.defineProperty(e,"__esModule",{value:!0}),e.bufferTime=e.keepAliveDuration=void 0;var m=e.keepAliveDuration=1e4,b=e.bufferTime=3e3;e.default=s.default.extend((a=(0,n.on)("didInsertElement"),c=(0,n.observes)("action","post.id","topic.id"),o=(0,n.observes)("reply","title"),l=(0,n.on)("willDestroyElement"),u=(0,n.observes)("currentState"),p=(0,n.default)("presenceUsers","currentUser.id"),i(d={action:null,post:null,topic:null,reply:null,title:null,previousState:null,currentState:null,presenceUsers:null,channel:null,composerOpened:function(){this._lastPublish=new Date,(0,t.once)(this,"updateState")},composerStateChanged:function(){(0,t.once)(this,"updateState")},typing:function(){new Date-this._lastPublish>m&&this.publish({current:this.currentState})},composerClosing:function(){this.publish({previous:this.currentState}),(0,t.cancel)(this._pingTimer),(0,t.cancel)(this._clearTimer)},updateState:function(){var e=null,s=this.action;"reply"!==s&&"edit"!==s||(e={action:s},"reply"===s&&(e.topic_id=this.get("topic.id")),"edit"===s&&(e.post_id=this.get("post.id"))),this.set("previousState",this.currentState),this.set("currentState",e)},currentStateChanged:function(){var s=this;this.channel&&(this.messageBus.unsubscribe(this.channel),this.set("channel",null)),this.clear(),["reply","edit"].includes(this.action)&&this.publish({response_needed:!0,previous:this.previousState,current:this.currentState}).then(function(e){s.isDestroyed||(s.set("presenceUsers",e.users),s.set("channel",e.messagebus_channel),e.messagebus_channel&&s.messageBus.subscribe(e.messagebus_channel,function(e){s.isDestroyed||s.set("presenceUsers",e.users),s._clearTimer=(0,t.debounce)(s,"clear",m+b)},e.messagebus_id))})},clear:function(){this.isDestroyed||this.set("presenceUsers",[])},publish:function(e){return this._lastPublish=new Date,this.currentUser.hide_profile_and_presence?Ember.RSVP.Promise.resolve():(0,r.ajax)("/presence/publish",{type:"POST",data:e})},users:function(e,s){return(e||[]).filter(function(e){return e.id!==s})},isReply:Ember.computed.equal("action","reply"),shouldDisplay:Ember.computed.gt("users.length",0)},"composerOpened",[a],Object.getOwnPropertyDescriptor(d,"composerOpened"),d),i(d,"composerStateChanged",[c],Object.getOwnPropertyDescriptor(d,"composerStateChanged"),d),i(d,"typing",[o],Object.getOwnPropertyDescriptor(d,"typing"),d),i(d,"composerClosing",[l],Object.getOwnPropertyDescriptor(d,"composerClosing"),d),i(d,"currentStateChanged",[u],Object.getOwnPropertyDescriptor(d,"currentStateChanged"),d),i(d,"users",[p],Object.getOwnPropertyDescriptor(d,"users"),d),d))}),define("discourse/plugins/discourse-presence/discourse/components/topic-presence-display",["exports","@ember/runloop","@ember/component","ember-addons/ember-computed-decorators","discourse/plugins/discourse-presence/discourse/components/composer-presence-display"],function(e,t,s,r,n){"use strict";function i(t,r,e,s,n){var i={};return Object.keys(s).forEach(function(e){i[e]=s[e]}),i.enumerable=!!i.enumerable,i.configurable=!!i.configurable,("value"in i||i.initializer)&&(i.writable=!0),i=e.slice().reverse().reduce(function(e,s){return s(t,r,e)||e},i),n&&void 0!==i.initializer&&(i.value=i.initializer?i.initializer.call(n):void 0,i.initializer=void 0),void 0===i.initializer&&(Object.defineProperty(t,r,i),i=null),i}var a,c,o,l,u;Object.defineProperty(e,"__esModule",{value:!0});e.default=s.default.extend((a=(0,r.on)("didInsertElement"),c=(0,r.on)("willDestroyElement"),o=(0,r.default)("topicId"),l=(0,r.default)("presenceUsers","currentUser.{id,ignored_users}"),i(u={topicId:null,presenceUsers:null,clear:function(){this.isDestroyed||this.set("presenceUsers",[])},_inserted:function(){var s=this;this.clear(),this.messageBus.subscribe(this.channel,function(e){s.isDestroyed||s.set("presenceUsers",e.users),s._clearTimer=(0,t.debounce)(s,"clear",n.keepAliveDuration+n.bufferTime)},-2)},_destroyed:function(){(0,t.cancel)(this._clearTimer),this.messageBus.unsubscribe(this.channel)},channel:function(e){return"/presence/topic/"+e},users:function(e,s){var t=s.ignored_users||[];return(e||[]).filter(function(e){return e.id!==s.id&&!t.includes(e.username)})},shouldDisplay:Ember.computed.gt("users.length",0)},"_inserted",[a],Object.getOwnPropertyDescriptor(u,"_inserted"),u),i(u,"_destroyed",[c],Object.getOwnPropertyDescriptor(u,"_destroyed"),u),i(u,"channel",[o],Object.getOwnPropertyDescriptor(u,"channel"),u),i(u,"users",[l],Object.getOwnPropertyDescriptor(u,"users"),u),u))}),Ember.TEMPLATES["javascripts/components/topic-presence-display"]=Ember.HTMLBars.template({id:null,block:'{"symbols":["user"],"statements":[[4,"if",[[25,["shouldDisplay"]]],null,{"statements":[[0,"  "],[7,"div"],[11,"class","presence-users"],[9],[0,"\\n    "],[7,"div"],[11,"class","presence-avatars"],[9],[0,"\\n"],[4,"each",[[25,["users"]]],null,{"statements":[[0,"        "],[1,[29,"avatar",[[24,1,[]]],[["avatarTemplatePath","usernamePath","imageSize"],["avatar_template","username","small"]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[10],[0,"\\n    "],[7,"span"],[11,"class","presence-text"],[9],[0,"\\n      "],[7,"span"],[11,"class","description"],[9],[1,[29,"i18n",["presence.replying_to_topic"],[["count"],[[25,["users","length"]]]]],false],[10],[7,"span"],[11,"class","wave"],[9],[7,"span"],[11,"class","dot"],[9],[0,"."],[10],[7,"span"],[11,"class","dot"],[9],[0,"."],[10],[7,"span"],[11,"class","dot"],[9],[0,"."],[10],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/components/topic-presence-display"}}),Ember.TEMPLATES["javascripts/components/composer-presence-display"]=Ember.HTMLBars.template({id:null,block:'{"symbols":["user"],"statements":[[4,"if",[[25,["shouldDisplay"]]],null,{"statements":[[0,"  "],[7,"div"],[11,"class","presence-users"],[9],[0,"\\n    "],[7,"div"],[11,"class","presence-avatars"],[9],[0,"\\n"],[4,"each",[[25,["users"]]],null,{"statements":[[0,"        "],[1,[29,"avatar",[[24,1,[]]],[["avatarTemplatePath","usernamePath","imageSize"],["avatar_template","username","small"]]],false],[0,"\\n"]],"parameters":[1]},null],[0,"    "],[10],[0,"\\n    "],[7,"span"],[11,"class","presence-text"],[9],[0,"\\n      "],[7,"span"],[11,"class","description"],[9],[0,"\\n"],[4,"if",[[25,["isReply"]]],null,{"statements":[[1,[29,"i18n",["presence.replying"],null],false]],"parameters":[]},{"statements":[[1,[29,"i18n",["presence.editing"],null],false]],"parameters":[]}],[10],[10],[7,"span"],[11,"class","wave"],[9],[7,"span"],[11,"class","dot"],[9],[0,"."],[10],[7,"span"],[11,"class","dot"],[9],[0,"."],[10],[7,"span"],[11,"class","dot"],[9],[0,"."],[10],[0,"\\n    "],[10],[0,"\\n  "],[10],[0,"\\n"]],"parameters":[]},null]],"hasEval":false}',meta:{moduleName:"javascripts/components/composer-presence-display"}}),define("discourse/plugins/discourse-presence/discourse/templates/connectors/composer-fields/presence",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={shouldRender:function(e,s){return s.siteSettings.presence_enabled}}}),Ember.TEMPLATES["javascripts/connectors/composer-fields/presence"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[1,[29,"composer-presence-display",null,[["action","post","topic","reply","title"],[[25,["model","action"]],[25,["model","post"]],[25,["model","topic"]],[25,["model","reply"]],[25,["model","title"]]]]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/connectors/composer-fields/presence"}}),define("discourse/plugins/discourse-presence/discourse/templates/connectors/topic-above-footer-buttons/presence",["exports"],function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={shouldRender:function(e,s){return s.siteSettings.presence_enabled}}}),Ember.TEMPLATES["javascripts/connectors/topic-above-footer-buttons/presence"]=Ember.HTMLBars.template({id:null,block:'{"symbols":[],"statements":[[1,[29,"topic-presence-display",null,[["topicId"],[[25,["model","id"]]]]],false],[0,"\\n"]],"hasEval":false}',meta:{moduleName:"javascripts/connectors/topic-above-footer-buttons/presence"}});
//# sourceMappingURL=https://sjc5.discourse-cdn.com/sitepoint/community/assets/plugins/discourse-presence-88ec3222f52f7bfb72d7ea54444b9ffd24b66e1b94d262e0e01ab02e228cf613.js.map