define("preload-store",["exports","rsvp"],function(t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default={data:{},store:function(t,e){this.data[t]=e},getAndRemove:function(t,r){if(this.data[t]){var e=n.Promise.resolve(this.data[t]);return delete this.data[t],e}return r?new n.Promise(function(e,n){var t=r();t&&t.then?t.then(function(t){return e(t)}).catch(function(t){return n(t)}):e(t)}):n.Promise.resolve(null)},get:function(t){return this.data[t]},remove:function(t){this.data[t]&&delete this.data[t]},reset:function(){this.data={}}}});
//# sourceMappingURL=https://sjc5.discourse-cdn.com/sitepoint/community/assets/preload-store-d32dcf974dddcac742f8a7a6aa7fcd686185920b201029d0ecb2b85527ef9034.js.map