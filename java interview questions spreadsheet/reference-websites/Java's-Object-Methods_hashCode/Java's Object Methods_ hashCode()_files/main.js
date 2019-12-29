/*====================================================
  TABLE OF CONTENT
  1. function declearetion
  2. Initialization
====================================================*/

/*===========================
 1. function declearetion
 ==========================*/
var themeApp = {
    featuredMedia: function(){
        $(".post").each(function() {
            var thiseliment = $(this);
            var media_wrapper = $(this).find('featured');
            var media_content_image = media_wrapper.find($('img'));
            var media_content_embeded = media_wrapper.find('iframe');
            if (media_content_image.length > 0) {
                $(media_content_image).insertAfter(thiseliment.find('.post-head')).wrap("<div class='featured-media'></div>");
                thiseliment.addClass('post-type-image');
                media_wrapper.remove();
            }
            else if (media_content_embeded.length > 0) {
                $(media_content_embeded).insertAfter(thiseliment.find('.post-head')).wrap("<div class='featured-media'></div>");
                thiseliment.addClass('post-type-embeded');
            }
        });
    },
    // responsiveIframe: function() {
    //     $('.post').fitVids();
    // },
    sidebarConfig:function() {
        if(sidebar_left == true) {
            $('.main-content').addClass('col-md-push-4');
            $('.sidebar').addClass('col-md-pull-8');
        }
    },
    facebook:function() {

        // var fb_page = '<iframe src="//www.facebook.com/plugins/likebox.php?href='+facebook_page_url+'&amp;width=262&amp;colorscheme=light&amp;show_faces=true&amp;stream=false&amp;header=false&amp;height=300&amp;show-border=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; width:100%; height:300px;" allowTransparency="true"></iframe>';
        var fb_page = '<iframe src="//www.facebook.com/plugins/likebox.php?href='+facebook_page_url+'&amp;width&amp;height=258&amp;colorscheme=light&amp;show_faces=true&amp;header=false&amp;stream=false&amp;show_border=false" scrolling="no" frameborder="0" style="border:none; overflow:hidden; height:258px; width:100%;" allowTransparency="true"></iframe>';
        $('.fb').append(fb_page);
        $(".fb").fitVids();
    },
    twitter: function() {
        var twitter_block = '<a class="twitter-timeline" href="'+twitter_url+'" data-widget-id="'+twitter_widget_id+'" data-link-color="#0062CC" data-chrome="nofooter noscrollbar" data-tweet-limit="'+number_of_tweet+'">Tweets</a>';
        twitter_block += "<script>!function(d,s,id){var js,fjs=d.getElementsByTagName(s)[0],p=/^http:/.test(d.location)?'http':'https';if(!d.getElementById(id)){js=d.createElement(s);js.id=id;js.src=p+\"://platform.twitter.com/widgets.js\";fjs.parentNode.insertBefore(js,fjs);}}(document,\"script\",\"twitter-wjs\");</script>";
        $('.twitter').append(twitter_block);
    },
    googlePlus:function() {
        if(badge_type !== "" && google_plus_url !== "") {
            $('body').append('<script src="https://apis.google.com/js/platform.js" async defer></script>');
            var container = $('.google-plus');
            var width = container.width();
            var google_plus_code = '<div class="g-'+badge_type+'" data-width="'+width+'" data-href="'+google_plus_url+'" data-rel="publisher"></div>';
            container.append(google_plus_code);
        }
    },
    mailchimp:function() {
        var form = $('#mc-embedded-subscribe-form');
        form.attr("action", mailchimp_form_url);
        var message = $('#message');
        var submit_button = $('mc-embedded-subscribe');
        function IsEmail(email) {
            var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
            return regex.test(email);
        }
        /*form.submit(function(e){
            e.preventDefault();
            $('#mc-embedded-subscribe').attr('disabled','disabled');
            if($('#mce-EMAIL').val() != '' && IsEmail($('#mce-EMAIL').val())) {
                message.html('please wait...').fadeIn(1000);
                var url=form.attr('action');
                if(url=='' || url=='YOUR_MAILCHIMP_WEB_FORM_URL_HERE') {
                    alert('Please config your mailchimp form url for this widget');
                    return false;
                }
                else{
                    url=url.replace('?u=', '/post-json?u=').concat('&c=?');
                    console.log(url);
                    var data = {};
                    var dataArray = form.serializeArray();
                    $.each(dataArray, function (index, item) {
                    data[item.name] = item.value;
                    });
                    $.ajax({
                        url: url,
                        type: "POST",
                        data: data,
                        success: function(response, text){
                            if (response.result === 'success') {
                                message.html(success_message).delay(10000).fadeOut(500);
                                $('#mc-embedded-subscribe').removeAttr('disabled');
                                $('#mce-EMAIL').val('');
                            }
                            else{
                                message.html(response.result).delay(10000).fadeOut(500);
                                $('#mc-embedded-subscribe').removeAttr('disabled');
                                $('#mce-EMAIL').focus().select();
                            }
                        },
                        dataType: 'jsonp',
                        error: function (response, text) {
                            console.log('mailchimp ajax submit error: ' + text);
                            $('#mc-embedded-subscribe').removeAttr('disabled');
                            $('#mce-EMAIL').focus().select();
                        }
                    });
                    return false;
                }
            }
            else {
                message.html('Please provide valid email').fadeIn(1000);
                $('#mc-embedded-subscribe').removeAttr('disabled');
                $('#mce-EMAIL').focus().select();
            }
        });*/
    },
    flickr:function() {
        $('.flkr-widget').jflickrfeed({
            limit: 8,
            qstrings: {
                id: flickr_id
            },
            itemTemplate: 
            '<li>' +
                '<a href="{{link}}" title="{{title}}" target="_blank"><img src="{{image_s}}" alt="{{title}}" /></a>' +
            '</li>'
        });
    },
    highlighter: function() {
        $('pre code').each(function(i, block) {
            hljs.highlightBlock(block);
        });
    },
    zrJobs:function(ip, location) {
        var tags = [];
        if ($('.tag-list').length === 1) {
            $('.tag-list a').each(function(t) {
                tags.push($(this).text());
            });
        }

        var query = '';

        if (tags.length === 0) {
            query = 'remote python';
        } else {
            if ($.inArray('node', tags) > -1) { query = 'remote node.js'; }
            else if ($.inArray('python', tags) > -1) { query = 'remote python'; }
            else if ($.inArray('java', tags) > -1) { query = 'remote java'; }
            else if ($.inArray('machine learning', tags) > -1) { query = 'remote machine learning'; }
            else { query = 'remote programming'; }
        }

        var cityRegion;
        if (location && location.city && location.region_name) {
            cityRegion = location.city + ', ' + location.region_name;
        }

        var params = {
            search: query,
            location: cityRegion,
            radius_miles: cityRegion ? 150 : undefined,
            days_ago: 30,
            jobs_per_page: 3,
            page: 1
        };

        $.ajax({
            url: 'https://api-proxy.stackabuse.com/jobs/zr',
            dataType: 'jsonp',
            type: 'GET',
            data: params,
            success: function(search_response) {
                var code = '';

                search_response.jobs.forEach(function(listing, i) {
                    var name = listing.name;
                    if (name.length > 45) {
                        name = name.substring(0, 45) + '...';
                    }

                    code += '<li><a rel="nofollow" target="_blank" href="' + listing.url + '"' +
                        'ga-on="click"' +
                        'ga-event-category="Jobs" ' + 
                        'ga-event-action="Click" ' +
                        'ga-event-label="ZR-Listing"' +
                        '>';
                    code += name;
                    code += '<br />';
                    code += '<span class="job-company">' + listing.hiring_company.name + '</span>' + 
                        '&nbsp;<span class="job-posted-at">' + listing.posted_time_friendly + '</span>';
                    // code += '<div class="job-location" title="' + listing.location + '">' + listing.location + '</div>';
                    code += '<div class="job-pay">$' + 
                        (listing.salary_min_annual/1000).toFixed(0) + 'K - $' +
                        (listing.salary_max_annual/1000).toFixed(0) + 'K</div>';
                    if (search_response.jobs.length === (i+1)) {
                        code += '</a></li>';
                    } else {
                        code += '</a><hr></li>';
                    }
                });
                $(".jobs ul").append(code).hide().fadeIn();
            }
        });
    },
    hrJobs:function() {
        var tags = [];
        if ($('.tag-list').length === 1) {
            $('.tag-list a').each(function(t) {
                tags.push($(this).text());
            });
        }

        var tagQuery = '';

        if (tags.length === 0) {
            tagQuery = 'python';
        } else {
            if ($.inArray('node', tags) > -1) { tagQuery = 'node-js'; }
            else if ($.inArray('python', tags) > -1) { tagQuery = 'python'; }
            else if ($.inArray('java', tags) > -1) { tagQuery = 'java'; }
            else if ($.inArray('machine learning', tags) > -1) { tagQuery = 'machine learning'; }
            else { tagQuery = undefined; }
        }

        var params = {
            tag: tagQuery,
            limit: 3,
        };

        $.ajax({
            url: 'https://api-proxy.stackabuse.com/jobs/hr',
            dataType: 'jsonp',
            type: 'GET',
            data: params,
            success: function(search_response) {
                var code = '';

                search_response.jobs.forEach(function(listing, i) {
                    var title = listing.title;
                    if (title.length > 45) {
                        title = title.substring(0, 45) + '...';
                    }

                    code += '<li><a rel="nofollow" target="_blank" href="' + listing.url + '"' +
                        'ga-on="click"' +
                        'ga-event-category="Jobs" ' + 
                        'ga-event-action="Click" ' +
                        'ga-event-label="HR-Job-Link"' +
                        '>';
                    code += title;
                    code += '<br />';
                    code += '<span class="job-company">' + listing.company + '</span>' + 
                        '&nbsp;<span class="job-posted-at">' + moment(listing.date).fromNow() + '</span>';
                    // code += '<div class="job-location" title="' + listing.location + '">' + listing.location + '</div>';
                    if (listing.pay_min && listing.pay_max) {
                        code += '<div class="job-pay">$' + 
                            (listing.pay_min/1000).toFixed(0) + 'K - $' +
                            (listing.pay_max/1000).toFixed(0) + 'K</div>';
                    }
                    if (listing.tags) code += '<div>';
                    listing.tags.slice(0,4).forEach(function(t) {
                        code += '<a rel="nofollow" target="_blank"' +
                            'ga-on="click"' +
                            'ga-event-category="Jobs" ' + 
                            'ga-event-action="Click" ' +
                            'ga-event-label="HR-Tag-Link"' +
                            'href="https://hireremote.io/remote-' + t.replace(/\s+/g, '-') + '-jobs">';
                        code += '<span class="job-tag">' + t + '</span>';
                        code += '</a>';
                    });
                    if (listing.tags) code += '</div>';
                    if (search_response.jobs.length === (i+1)) {
                        code += '</a></li>';
                    } else {
                        code += '</a><hr></li>';
                    }
                });
                $(".jobs ul").append(code).hide().fadeIn();
            }
        });
    },
    indeedJobs:function(ip, postal) {
        var tags = [];
        if ($('.tag-list').length === 1) {
            $('.tag-list a').each(function(t) {
                tags.push($(this).text());
            });
        }

        var query = '';

        if (tags.length === 0) {
            query = 'programming';
        } else {
            if ($.inArray('node', tags) > -1) { query = 'node.js'; }
            else if ($.inArray('python', tags) > -1) { query = 'python'; }
            else if ($.inArray('java', tags) > -1) { query = 'java'; }
            else { query = 'programming'; }
        }

        var code = '';
        var indeed_client = new Indeed("4838297301202088");
        indeed_client.search({
            q: query,
            l: postal || '',
            sort: 'relevance',
            radius: '150',
            jt: '',
            co: '',
            start: 0,
            limit: 4,
            chnl: 'stackabuse',
            userip: String(ip),
            useragent: navigator.userAgent,
        }, function(search_response){
            search_response.results.forEach(function(listing, i) {
                code += '<li><a rel="nofollow" target="_blank" href="' + listing.url + '" onmousedown="' + listing.onmousedown + '"' +
                    'ga-on="click"' +
                    'ga-event-category="Ads" ' + 
                    'ga-event-action="Click" ' +
                    'ga-event-label="Indeed-Listing"' +
                    '>';
                code += listing.jobtitle;
                code += '<br />';
                code += '<div class="job-company">' + listing.company + '</div>';
                code += '<div class="job-location" title="' + listing.formattedLocation + '">' + listing.formattedLocation + '</div>';
                if (search_response.results.length === (i+1)) {
                    code += '</a></li>';
                } else {
                    code += '</a><hr></li>';
                }
            });
            $(".jobs ul").append(code).hide().fadeIn();
        });
    },
    trackAffiliateClicks: function() {
        // Wait 2.5 seconds to add GA tracking to Udemy
        // links. This is because code may still be running
        // to determine which Udemy links to show
        setTimeout(function() {
            $('.udemy-link').attr('ga-on', 'click');
            $('.udemy-link').attr('ga-event-category', 'Affiliate');
            $('.udemy-link').attr('ga-event-action', 'Click');
            $('.udemy-link').attr('ga-event-label', 'Udemy-Link');

            $('.amazon-link').attr('ga-on', 'click');
            $('.amazon-link').attr('ga-event-category', 'Affiliate');
            $('.amazon-link').attr('ga-event-action', 'Click');
            $('.amazon-link').attr('ga-event-label', 'Amazon-Link');

            $('.dcp-link').attr('ga-on', 'click');
            $('.dcp-link').attr('ga-event-category', 'Affiliate');
            $('.dcp-link').attr('ga-event-action', 'Click');
            $('.dcp-link').attr('ga-event-label', 'DCP-Link');

            $('.bos-link').attr('ga-on', 'click');
            $('.bos-link').attr('ga-event-category', 'Affiliate');
            $('.bos-link').attr('ga-event-action', 'Click');
            $('.bos-link').attr('ga-event-label', 'Bos-Link');

            $('.bsa-link').attr('ga-on', 'click');
            $('.bsa-link').attr('ga-event-category', 'Ad');
            $('.bsa-link').attr('ga-event-action', 'Click');
            $('.bsa-link').attr('ga-event-label', 'BSA-Link');

            $('.scraper-link').attr('ga-on', 'click');
            $('.scraper-link').attr('ga-event-category', 'Affiliate');
            $('.scraper-link').attr('ga-event-action', 'Click');
            $('.scraper-link').attr('ga-event-label', 'Scraper-Link');

            $('.hr-link').attr('ga-on', 'click');
            $('.hr-link').attr('ga-event-category', 'Affiliate');
            $('.hr-link').attr('ga-event-action', 'Click');
            $('.hr-link').attr('ga-event-label', 'HR-Link');

            $('.tb-link').attr('ga-on', 'click');
            $('.tb-link').attr('ga-event-category', 'Affiliate');
            $('.tb-link').attr('ga-event-action', 'Click');
            $('.tb-link').attr('ga-event-label', 'TB-Link');

            $('.do-link').attr('ga-on', 'click');
            $('.do-link').attr('ga-event-category', 'Sponsorship');
            $('.do-link').attr('ga-event-action', 'Click');
            $('.do-link').attr('ga-event-label', 'DO-Link');

            $('.eio-link').attr('ga-on', 'click');
            $('.eio-link').attr('ga-event-category', 'Sponsorship');
            $('.eio-link').attr('ga-event-action', 'Click');
            $('.eio-link').attr('ga-event-label', 'EIO-Link');
        }, 2500);

        // Add LS signature tracking to Udemy links
        $('.udemy-link').click(function(e) {
            e.preventDefault();

            // Create slug from URL
            // - Extract URL path
            // - Replace '/', '_', and '.' with dashes
            // - Prefix 'sa' to ID domain
            // - Add to HREF with correct query param separator
            var href = $(this).attr('href');
            var sig = 'sa-' + window.location.pathname.replace(/(^\/|\/$)/g, '').replace(/\/|_|\./g, '-');
            var sep = (href.indexOf('?') != -1) ? '&' : '?';

            window.location.href = href + sep + 'u1=' + sig;
        });
    },
    widgetSticky: function() {
        var getTopSpacing = function(elem) {
            return parseFloat(elem.css('marginTop').replace(/auto/, 0));
        };
        var getBottomSpacing = function(elem) {
            return parseFloat(elem.css('marginBottom').replace(/auto/, 0));
        };
        var getTopPadding = function(elem) {
            return parseFloat(elem.css('paddingTop').replace(/auto/, 0));
        };
        var getTopPosition = function(elem) {
            return elem.offset().top;
        };
        var getWidth = function(elem) {
            return elem.width();
        };

        var content = $('.main-content');
        var widget = $('.widget-sticky');
        var footer = $('.main-footer');

        var state = 'none';

        if (!widget || !widget.offset()) {
            return;
        }

        // The space between the top of the window and the stickied widget
        var topScreenMargin = 10;
        var widgetTopSpacing = getTopSpacing(widget);
        var widgetInitialTop = getTopPosition(widget) - getTopSpacing(widget);
        var widgetHeight = widget.outerHeight() + getTopSpacing(widget);
        var widgetWidth = getWidth(widget);
        var footerTop = getTopPosition(footer);

        $(window).scroll(function(event) {
            if (!widget || !widget.offset()) {
                return;
            }

            // Only sticky the widget if the screen is big enough
            if ($(window).width() < 992) {
                widget.css('position','static').css('top', '0px');
                return;
            }

            // Update widget position in case ads are still
            // loading. But only update position if its
            // position already isn't being set by us.
            if (state === 'static-top') {
                widgetInitialTop = getTopPosition(widget) - getTopSpacing(widget);
            }

            // Update widget width to be consistent during
            // transition between sticky/non-sticky
            widget.width(widgetWidth);

            var y = $(this).scrollTop();
            var widgetStaticBottomPosition = footerTop - widget.outerHeight();
            var marginAdjustedY = y + topScreenMargin;

            // Check position of window against sticky
            // widget and footer
            if (marginAdjustedY >= widgetInitialTop) {
                // Remeasure widgetHeight since images probably loaded
                // and changed its height since initial measurement
                widgetHeight = widget.outerHeight() + getTopSpacing(widget);
                
                var widgetAdjustedY = marginAdjustedY + widgetHeight;
                if (widgetAdjustedY <= footerTop) {
                    // FOLLOW SCREEN
                    state = 'stickied';
                    widget.css('position','fixed').css('top', topScreenMargin + 'px');
                } else {
                    // STAY ABOVE FOOTER
                    state = 'static-bottom';
                    // widget.css('position','absolute').css('top', widgetStaticBottomPosition + 'px');

                    //
                    // HACK
                    //
                    // Couldn't get "position:absolute" to work exactly right, so we'll
                    // just keep the widget "position:fixed" and adjust its 
                    // topScreenMargin as we scroll past the footerTop
                    var adjustedTopScreenMargin = (footerTop + topScreenMargin) - widgetAdjustedY;
                    widget.css('position','fixed').css('top', adjustedTopScreenMargin + 'px');
                }
            } else {
                // STAY BELOW WIDGETS
                state = 'static-top';
                widget.css('position','static').css('top', '0px');
            }
        });
    },
    dynamicallyInsertAdsenseAds: function() {
        // - Content must have minimum 20 sections
        //   + A sections could be: <p>, <table>, <ul>, <img>, or <pre> tag within post
        // - Content must have minimum of 1000 words to do this
        // - View must be a post, not a static page
        // - (NOT DONE) Ad must not be inserted directly after h1/h2/h3/h4/h5 tag
        // - Ad must be inserted right before user scrolls to that section
        // - Use adsenseLoader.js: https://github.com/osvaldasvalutis/adsenseLoader.js

        var AD_SPACING = 20;    // in "sections", as defined below

        var sectionTags = ['p', 'table', 'ul', 'img', 'pre'];
        var sectionTagsStr = sectionTags.join(', ');
        var postContent = $('.post-content');

        // Verify we're in an article, not static page
        if ($('.post-meta').length < 1) return;

        // Verify article has enough sections
        var numSections = postContent.find(sectionTagsStr).length;
        if (numSections < AD_SPACING) return;

        // Verify article has enough words
        var numWords = postContent.text().split(' ').length;
        if (numWords < 1000) return;

        var adHtml = '<div class="adsense">' +
                         '<ins data-ad-client="ca-pub-5704119028142803" data-ad-slot="7177772785"></ins>' +
                         '<p class="adsense__loading"><span>Loading&hellip;</span></p>' +
                     '</div>';

        postContent.find(sectionTagsStr).filter(':nth-child(' + AD_SPACING + 'n)').after(adHtml);

        // Call adsenseLoader.js to handle dynamic Adsense insertion
        $('.adsense').adsenseLoader({
            laziness: 2,
            onLoad: function($ad) {
                $ad.addClass('adsense--loaded');
            }
        });
    },
    dynamicallyInsertNeworMediaAds: function() {
        // - Content must have minimum 20 sections
        //   + A sections could be: <p>, <table>, <ul>, <img>, or <pre> tag within post
        // - Content must have minimum of 1000 words to do this
        // - View must be a post, not a static page

        var MIN_SECTIONS = 20;    // in "sections", as defined below

        var sectionTags = ['p', 'table', 'ul', 'img', 'pre'];
        var sectionTagsStr = sectionTags.join(', ');
        var postContent = $('.post-content');

        // Verify we're in an article, not static page
        if ($('.post-meta').length < 1) return;

        // Verify article has enough sections
        var numSections = postContent.find(sectionTagsStr).length;
        if (numSections < MIN_SECTIONS) return;

        // Verify article has enough words
        var numWords = postContent.text().split(' ').length;
        if (numWords < 1000) return;

        var ad1Location = Math.floor(numSections / 3);
        var ad2Location = Math.floor((numSections / 3) * 2);

        var adHtml1 = '<div><!-- 728x90/300x250/320x50 -->' +
                      '<div id="waldo-tag-3880"></div></div>';
        var adHtml2 = '<div><!-- 728x90/300x250/320x50 -->' +
                      '<div id="waldo-tag-3884"></div></div>';

        postContent.children(sectionTagsStr).filter(':eq(' + ad1Location + ')').after(adHtml1);
        postContent.children(sectionTagsStr).filter(':eq(' + ad2Location + ')').after(adHtml2);
    },
    cleanAuthorBio: function() {
        $('.about-author .bio').attr('rel', 'nofollow');
        $('.about-author .bio').attr('target', '_blank');
    },
    backToTop: function() {
        $(window).scroll(function(){
            if ($(this).scrollTop() > 100) {
                $('#back-to-top').fadeIn();
            } else {
                $('#back-to-top').fadeOut();
            }
        });
        $('#back-to-top').on('click', function(e){
            e.preventDefault();
            $('html, body').animate({scrollTop : 0},1000);
            return false;
        });
    },
    addAdsenseChannels: function() {
        var channels = [];
        var tagToChannelName = adsense_tag_to_channel_name || {};
        var authorToChannelName = adsense_author_to_channel_name || {};
        var channelNameToId = adsense_channel_name_to_id || {};

        // Don't apply channels if we're not
        // viewing a particular post
        if ($('article').length > 1) {
            return;
        }

        //
        // Add channel for author
        //
        var author = $.trim($('.about-author .author a').text());
        var authorChannelName = authorToChannelName[author];
        if (authorChannelName) {
            channels.push(channelNameToId[authorChannelName]);
        }

        //
        // Add channels for tags
        //
        var tags = [];
        if ($('.tag-list').length === 1) {
            $('.tag-list a').each(function(t) {
                tags.push($.trim($(this).text()));
            });
        }
        channels = tags.map(function(t) {
            var topicChannelName = tagToChannelName[t];
            if (topicChannelName) {
                return channelNameToId[topicChannelName];
            }
            return '';
        }).filter(function(cn) {
            return cn !== '';
        }).concat(channels);

        //
        // Dynamically add channels asynchronously
        //
        (adsbygoogle = window.adsbygoogle || []).push({
            params: { google_ad_channel: channels.join(', ')}
        });
    },
    newsletter: function() {
        // - Content must have minimum 30 sections
        //   + A sections could be: <p>, <table>, <ul>, <img>, or <pre> tag within post
        // - Content must have minimum of 1000 words to do this
        // - View must be a post, not a static page

        var MIN_SECTIONS = 30;    // in "sections", as defined below

        var sectionTags = ['p', 'table', 'ul', 'img', 'pre'];
        var sectionTagsStr = sectionTags.join(', ');
        var postContent = $('.post-content');

        var numSections = postContent.children(sectionTagsStr).length;
        var numWords = postContent.text().split(' ').length;

        // Verify the following to insert newsletter signup:
        // - We're in an article, not static page
        // - Article has enough sections
        // - Article has enough words
        if ($('.post-meta').length > 0 &&
            numSections >= MIN_SECTIONS &&
            numWords >= 1000) {

            var template = $('#newsletter-template').html();
            var targetSectionIndex = Math.floor(numSections / 2);
            postContent.children(sectionTagsStr).filter(':eq(' + targetSectionIndex + ')').after(template);
        }

        // Add handler for email submission
        $('.newsletter form').submit(function(event) {
            var that = this;
            event.preventDefault();

            var email = $(this).find('input').val();

            let submitBtn = $('.newsletter form').find('button[type=submit]');
            submitBtn.find('i').show();

            $.ajax({
                url: 'https://api-proxy.stackabuse.com/emaillist',
                dataType: 'jsonp',
                type: 'GET',
                data: {
                    email: email
                },
                success: function(res) {
                    submitBtn.find('i').hide();

                    if (res.status === 'success') {
                        $(that).next('.message').addClass('text-success');
                    } else {
                        $(that).next('.message').addClass('text-danger');
                    }
                    $(that).next('.message').text(res.message);
                },
                error: function(res) {
                    submitBtn.find('i').hide();

                    $(that).next('.message').text('Something went wrong...');
                    $(that).next('.message').addClass('text-danger');
                    
                }
            });
        });
    },
    init: function() {
        themeApp.featuredMedia();
        // themeApp.responsiveIframe();
        themeApp.sidebarConfig();
        // themeApp.facebook();
        // themeApp.twitter();
        // themeApp.googlePlus();
        // themeApp.flickr();
        themeApp.highlighter();
        // themeApp.mailchimp();
        themeApp.trackAffiliateClicks();
        themeApp.widgetSticky();
        // themeApp.dynamicallyInsertAdsenseAds();
        themeApp.dynamicallyInsertNeworMediaAds();
        themeApp.cleanAuthorBio();
        themeApp.backToTop();
        // themeApp.addAdsenseChannels();
        // themeApp.zrJobs(null, null);
        themeApp.hrJobs();
        themeApp.newsletter();

        // $.getJSON('https://freegeoip.net/json/', function(data, status) {
        //     data = data || {};
        //     themeApp.zrJobs(data.ip, data);
        // }, 'jsonp')
        // .error(function() {
        //     themeApp.zrJobs(null, null);
        // });
    }
};

/*===========================
2. Initialization
==========================*/
$(document).ready(function(){
  themeApp.init();
});