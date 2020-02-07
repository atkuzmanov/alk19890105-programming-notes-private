var currentMonetizationSiteName = window.location.hostname;
var siteNameMonetizationArray = currentMonetizationSiteName.split(".");
var monetizationSiteName = getFullSiteName(siteNameMonetizationArray);
//alert(monetizationSiteName);
function getFullSiteName(siteArr) {
    for (var i = 0; i <= siteArr.length; i++) {
        if (siteArr[i] === "com") {
            return siteArr[i - 1];
        }
    }
}
fallbackMiddlecss = '/hqb2b/css/qmp/articleMiddlePosition_b.css';
fallbackMiddlejs = '/hqb2b/js/articleMiddlePosition_b.js';

fallbackbottomcss = '/hqb2b/css/qmp/articleBottomPosition_b.css';
fallbackbottomjs = '/hqb2b/js/articleBottomPosition_b.js';

fallbackrightcss = '/hqb2b/css/qmp/articleRightPosition_a.css';  

var templatesPostions = [];
jQuery(document).ready(function($){
    $.getScript("/hqb2b/script/monetizationQuadConfig.json");
    if ($('#olal-container').length){
    $.ajax({
    type: "POST",
            url: "/hqb2b/script/middle_asset.php",
            data: {"SiteName": monetizationSiteName, "currentURL": window.location.pathname},
            dataType: "json",
            async: true,
            success: function(msg) {
            if (msg) {
                $.each(msg, function(key, val) {
                    if ($('#olal-container').length)
                    {
                    var script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.src = val.nodeurl;
                            //$("#olal-container").append( script );
                            $("#olal-container").addClass(val.template);
                            $("#olal-container")[0].appendChild(script);
                            templatename = 'two_wp_test';
                            addTemplate(templatename);
                    }
                    });
                    }
            }
        });
    }
    if ($('#whitepaper-listing').length) {
       $.ajax({
            type: "POST",
            url: "/hqb2b/script/right_asset.php",
            data: {"SiteName": monetizationSiteName, "currentURL": window.location.pathname},
            dataType: "json",
            async: true,
            success: function(msg) {
            if (msg) {
                $.each(msg, function(key, val) {
                    if ($('#whitepaper-listing').length)
                    {
                    var script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.src = val.nodeurl;
                            //$("#olal-container").append( script );
                            $("#whitepaper-listing").addClass(val.template);
                            $("#whitepaper-listing")[0].appendChild(script);
                            templatename = 'b2b_sl_widget_article_right_a';
                            addTemplate(templatename);
                    }
                    });
                    }
            }
        }); 
    }
    if ($('#bottom-container').length) {
       $.ajax({
            type: "POST",
            url: "/hqb2b/script/bottom_asset.php",
            data: {"SiteName": monetizationSiteName, "currentURL": window.location.pathname},
            dataType: "json",
            async: true,
            success: function(msg) {
            if (msg) {
                $.each(msg, function(key, val) {
                    if ($('#bottom-container').length)
                    {
                    var script = document.createElement('script');
                            script.type = 'text/javascript';
                            script.src = val.nodeurl;
                            //$("#olal-container").append( script );
                            $("#bottom-container").addClass(val.template);
                            $("#bottom-container")[0].appendChild(script);
                            templatename = 'b2b_sl_widget_article_bottom_b';
                            addTemplate(templatename);
                    }
                    });
                    }
            }
        }); 
    }
    if ( $('#nodeSearchWidget').length) {
        $.ajax({
            type: "POST",
            url: "/splittest/post_split",
            data: {"currentURL": window.location.pathname},
            dataType: "json",
            async: true,
            success: function(msg) {
                if (msg) {
                    //var templatesPostions = [];
                    $.each( msg, function( key, val ) {
                        if (val.position == 'searchwidget') {
                            if (val.template == "False") {
                                $("#nodeSearchWidget").hide();
                                templatename = 'b2b_search_widget_hide';
                                addTemplate(templatename);
                             } else {
                                $("#nodeSearchWidget").show();
                                templatename = 'b2b_search_widget_show';
                                addTemplate(templatename);
                            }
                        }
                    });
                    
                } 
            }
        });
    }
 
   
});


jQuery( document ).ajaxStop(function($) {
   if(typeof templatesPostions !== 'undefined' && templatesPostions.length > 0){
       slTemplatePosition = templatesPostions.join(',');
    if (typeof dcsMultiTrack !== 'undefined')
       dcsMultiTrack('WT.qs_recipe', slTemplatePosition, 'WT.dl', 28);
    } 
});

function addTemplate(templatename){
    templatesPostions.push(templatename);
}
   
/* Middle Widget Fallback Assets */
function fallbackfuncMiddleVariation()
{
    var articleMiddlePosition_test_B = '<link rel="stylesheet" href="' + fallbackMiddlecss + '"/><script src="' + fallbackMiddlejs + '" type="text/javascript"></script><div id="asset-middle-b"><div class="section group"><div class="asset-col span_2_of_3 inner-content"><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadMiddleUrlA + '" class="asset_title_link" target="_blank" rel="noindex, nofollow"> The Challenges of Cloud Integration </a></div><div class="asset-col span_1_of_3"><div id="btn-clip-wrapper"><div id="clip-div"><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadMiddleUrlA + '" class="asset_image" target="_blank" rel="noindex, nofollow"><img src="/hqb2b/img/ClipDoc.png"></a></div><div id="read-more-btn-div"><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadMiddleUrlA + '" class="asset_button" target="_blank" rel="noindex, nofollow" id="read-more-btn">Download</a></div></div></div></div></div><div id="asset-middle-b"><div class="section group"><div class="asset-col span_2_of_3 inner-content"><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadMiddleUrlB + '" class="asset_title_link" target="_blank" rel="noindex, nofollow"> Preparing for the Internet of Things: What You Need to Know </a></div><div class="asset-col span_1_of_3"><div id="btn-clip-wrapper"><div id="clip-div"><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadMiddleUrlB + '" class="asset_image" target="_blank" rel="noindex, nofollow"><img src="/hqb2b/img/ClipDoc.png"></a></div><div id="read-more-btn-div"><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadMiddleUrlB + '" class="asset_button" target="_blank" rel="noindex, nofollow" id="read-more-btn">Download</a></div></div></div></div></div>';
    $("#olal-container").html(articleMiddlePosition_test_B);
    $("#olal-container").addClass('qs-listings');
}
/* Bottom Widget Fallback Asset */
function fallbackfuncBottomVariation()
{
    var articleBottomPosition_B = '<link rel="stylesheet" href="' + fallbackbottomcss + '"/><script src="' + fallbackbottomjs + '" type="text/javascript"></script><div id="asset-bottom-b"><div class="bottom-section group inner-content"><div class="bottom-olal-title show-on-desktop">Related White Papers and Webcasts</div><div class="asset-col show-on-desktop span_1_of_3"><div id="btn-clip-wrapper"><div id="clip-div" ><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadBottomUrl + '" class="asset_image" target="_blank"><img height="153px" width="115px" src="/imagesvr_ce/3373/okta-0115-Modernizing_Enterprise_IT-_Motivators_and_Challenges-230.gif" ></a></div></div></div><div class="asset-col span_asset"><div class="show-on-mob mobile-title"><strong> Sponsored content</strong></div><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadBottomUrl + '" class="asset_title_link" target="_blank" rel="noindex, nofollow">Modernizing Enterprise IT: Motivators and Challenges</a><div id="Sponsored_by" class="show-on-desktop">By Okta <br/><div id="date"></div></div><div class="description show-on-desktop ">Many organizations are embracing an approach to modernizing IT. And the benefits of replacing legacy infrastructure are clear, including reduced costs and increased business agility. But modernizing IT can mean different things to different IT leaders, and the reasons behind it can vary from business to business. <a class="continue-link" href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadBottomUrl + '" target="_blank"> Continue reading...</a></div><div class="description show-on-mob ">Many organizations are embracing an approach to modernizing IT. And the benefits of replacing legacy infrastructure are clear, including reduced costs and increased business agility.<a class="continue-link" target="_blank" href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadBottomUrl + '"> Continue reading...</a></div><div class="show-on-mob sponser-name">Sponsored by Okta</div></div></div></div>';
    $("#bottom-container").html(articleBottomPosition_B);
    $("#bottom-container").addClass('qs-listings');
}

/* Right Widget Fallback Asset */

function fallbackfuncRightVariation()
{
    var articleRightPosition_A = '<link rel="stylesheet" href="' + fallbackrightcss + '"/><div id="whitepaper-listing"><div id="right-widget"><div id="right-widget-header">Related White Papers and Webcasts</div><div id="right-widget-first" class="right-widget-blocks"><div class="whitepaper-title"><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadRightUrlA + '" class="asset_title_link" target="_blank" rel="noindex, nofollow">Its Time to Rethink CRM</a></div><div class="whitepaper-content"><div class="col-md-6"><div class="whitepaper-blrub"><p>Todays CRM systems have the ability to deliver more than just lead generation. If leveraged correctly, they can be major drivers in loyalty and relationship management. But many companies have yet to unlock their true potential. Learn how you can use CRM to facilitate better communications and grow your business....<a class="continue-link" href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadRightUrlA + '"> Continue Reading...</a></p></div></div><div class="col-md-6"><div class="whitepaper-image"><img src="/imagesvr_ce/7635/quinstreet-0162-its_time_to_rethink_crm-100.gif"></div><div class="read-more"><div class="read-more-btn"><a class="asset_button" href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadRightUrlA + '">Download</a></div></div></div></div></div></div><div id="right-widget"><div id="right-widget-first" class="right-widget-blocks"><div class="whitepaper-title"><a href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadRightUrlB + '" class="asset_title_link" target="_blank" rel="noindex, nofollow">Ready Your Enterprise for the API Revolution</a></div><div class="whitepaper-content"><div class="col-md-6"><div class="whitepaper-blrub"><p>APIs are changing more than just software architectures. From planning through implementation and beyond, an API-driven business model brings a host of new challenges and opportunities to organizations. Download this eBook to learn how to get the most benefit from these agents of change....<a class="continue-link" href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadRightUrlB + '"> Continue Reading...</a></p></div></div><div class="col-md-6"><div class="whitepaper-image"><img src="/imagesvr_ce/9137/quinstreet-house-assets-0165-Ready_Your_Enterprise_for_the_API_Revolution-100.gif"></div><div class="read-more"><div class="read-more-btn"><a class="asset_button" href="' + allMonetizationSiteConfig[monetizationSiteName].fallbackQuadRightUrlB + '">Download</a></div></div></div></div></div></div></div>';
    $("#whitepaper-listing").html(articleRightPosition_A);
    $("#whitepaper-listing").addClass('qs-listings');
}