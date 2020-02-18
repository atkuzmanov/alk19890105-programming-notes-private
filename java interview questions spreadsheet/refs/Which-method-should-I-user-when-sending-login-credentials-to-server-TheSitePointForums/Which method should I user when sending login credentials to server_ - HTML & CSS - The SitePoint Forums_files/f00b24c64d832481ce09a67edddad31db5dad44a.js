(function () {
    if ('Discourse' in window && typeof Discourse._registerPluginCode === 'function') {
        var __theme_name__ = "SitePoint Crawler links";
        var settings = Discourse.__container__.lookup("service:theme-settings").getObjectForTheme(496);
        var themePrefix = function themePrefix(key) {
            return 'theme_translations.496.' + key;
        };

        Discourse._registerPluginCode('0.8', function (api) {
            try {

                var adContainer = '';
                var adIndex = 1;
                var getCommunityTags = function getCommunityTags() {
                    var post = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

                    try {
                        if (post) {
                            if (adIndex === 1) {
                                propertag.cmd.push(function () {
                                    proper_display('sitepoint_community_1');
                                });
                            } else {
                                propertag.cmd.push(function () {
                                    proper_display('sitepoint_community_1-' + adIndex);
                                });
                            }
                            adIndex++;
                        }
                    } catch (error) {
                        console.log('error: ');console.dir(error);
                    }
                };

                // Add Community tags to first post in a post thread
                api.modifyClass('component:scrolling-post-stream', {
                    scrolled: function scrolled() {
                        this._super();
                        setTimeout(function () {
                            if (!document.querySelectorAll('#post_1 .topic-body .proper-ad-unit').length) {
                                var postContainer = document.querySelector('#post_1').parentNode;
                                var post = document.querySelector('#post_1 .topic-body');
                                var communityTag = document.createElement("div");

                                communityTag.setAttribute('class', 'proper-ad-unit');
                                if (adIndex === 1) {
                                    communityTag.innerHTML = "<div id='proper-ad-sitepoint_community_1'></div>";
                                } else {
                                    communityTag.innerHTML = "<div id='proper-ad-sitepoint_community_1-" + adIndex + "'></div>";
                                }

                                if (!!post) {
                                    post.appendChild(communityTag);
                                    getCommunityTags(true);
                                    postContainer.setAttribute('style', '');
                                }
                            }
                        }, 100);
                    }
                });
            } catch (err) {
                var rescue = require("discourse/lib/utilities").rescueThemeError;
                rescue(__theme_name__, err, api);
            }
        });
    }
})();
window._atrk_opts = { atrk_acct:"3/2Rk1ao6C526C", domain:"sitepoint.com",dynamic: true};
(function() { var as = document.createElement('script'); as.type = 'text/javascript'; as.async = true; as.src = "https://d31qbv1cthcecs.cloudfront.net/atrk.js"; var s = document.getElementsByTagName('script')[0];s.parentNode.insertBefore(as, s); })();

