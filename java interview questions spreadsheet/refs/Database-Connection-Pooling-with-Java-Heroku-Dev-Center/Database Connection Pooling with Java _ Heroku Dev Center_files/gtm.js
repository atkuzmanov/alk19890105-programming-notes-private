
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"325",
  
  "macros":[{
      "function":"__u",
      "vtp_component":"FRAGMENT",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",0],8,16],"?\"#\"+",["escape",["macro",0],8,16],":\"\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementsByClassName(\"gtm_signup_register_form\").length})();"]
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\/(.*)\\.heroku\\.com\/.exec(",["escape",["macro",3],8,16],")[1]})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"vimeo.com\/video\",b=document.getElementsByTagName(\"iframe\"),a;for(a=0;a\u003Cb.length;a++)if(-1\u003Cb[a].getAttribute(\"src\").indexOf(c))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var c=\"play.vidyard.com\",b=document.getElementsByTagName(\"iframe\"),a;for(a=0;a\u003Cb.length;a++)if(-1\u003Cb[a].getAttribute(\"src\").indexOf(c))return!0;return!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return window.location.pathname+window.location.search+window.location.hash})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.oldUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.newUrlFragment",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",8],8,16],"===",["escape",["macro",9],8,16],"?!1:!0})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return document.getElementById(\"list_93478\").checked?\"checked\":\"unchecked\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(0\u003CjQuery(\".gs-no-results-result\").length|\"block\"==jQuery(\".js-search-no-results\").css(\"display\"))var a=\"No Result\";else 0\u003CjQuery(\".gsc-result-info\").length?(a=jQuery(\".gsc-result-info\").text(),a=a.match(\/\\s(.+ results)\/g)[0].trim()):a=0\u003CjQuery(\".js-search-results \\x3e li\").length?jQuery(\".js-search-results \\x3e li\").length+\" results\":0\u003CjQuery(\".addon.search-total-count \\x3e a \\x3e span \\x3e span\").length?\"[Elements] Add-on results: \"+jQuery(\".addon.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText+\n\", Button results: \"+jQuery(\".button.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText+\", Buildpack results: \"+jQuery(\".buildpack.search-total-count \\x3e a \\x3e span \\x3e span\")[0].innerText:void 0;return a})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(f){var g=[{name:\"EMAILPATH\",regex:\/(^.*?(?=\\\/[a-z0-9._-]+@)\\\/)(?:[a-z0-9._-]+?@[a-z0-9._-]+\\.[a-z0-9._-]{2,4})(.*?$)\/ig},{name:\"EMAILSEARCH\",regex:\/q=([a-z0-9._-]+?@[a-z0-9._-]+\\.[a-z0-9._-]{2,4})\u0026?\/ig},{name:\"EMAILADDRESS\",regex:\/email([\\-_])?Address=(.*@([^\u0026\\s]*))\u0026?\/ig},{name:\"EMAIL\",regex:\/email=(.*@([^\u0026\\s]+))\u0026?\/ig},{name:\"FIRSTNAME\",regex:\/first([\\-_])?Name=([^\u0026\\s]*)\u0026?\/ig},{name:\"LASTNAME\",regex:\/last([\\-_])?Name=([^\u0026\\s]*)\u0026?\/ig},{name:\"NAME\",regex:\/name=([^\u0026\\s]*)\u0026?\/ig},\n{name:\"ADDRESS\",regex:\/address([1-2])?=([^\u0026\\s]*)\u0026?\/ig},{name:\"PHONENUMBER\",regex:\/phone([\\-_])?number=([^\u0026\\s]*)\u0026?\/ig},{name:\"PHONE\",regex:\/phone=([^\u0026\\s]*)\u0026?\/ig},{name:\"CONFIRM([-_])?PASSWORD\",regex:\/confirmPassword=([^\u0026\\s]*)\u0026?\/ig},{name:\"PASSWORD\",regex:\/password=([^\u0026\\s]*)\u0026?\/ig},{name:\"EHASH\",regex:\/ehash=([^\u0026\\s]*)\u0026?\/ig},{name:\"EMAIL_ID\",regex:\/email_id=([^\u0026\\s]*)\u0026?\/ig},{name:\"AUTHUSER\",regex:\/authuser=([^\u0026\\s]*)\u0026?\/ig}],h=f.get(\"sendHitTask\"),a,c,d,b;f.set(\"sendHitTask\",function(e){c=e.get(\"hitPayload\").split(\"\\x26\");\nfor(a=0;a\u003Cc.length;a++){d=c[a].split(\"\\x3d\");try{b=decodeURIComponent(decodeURIComponent(d[1]))}catch(k){b=decodeURIComponent(d[1])}g.forEach(function(a){b=\"EMAILPATH\"==a.name?b.replace(a.regex,\"$1[PII REMOVED]$2\"):b.replace(a.regex,\"\")});d[1]=encodeURIComponent(b);c[a]=d.join(\"\\x3d\")}e.set(\"hitPayload\",c.join(\"\\x26\"),!0);h(e)})}})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return jQuery(document).height()\u003EjQuery(window).height()?\"true\":\"false\"})();"]
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__e"
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__c",
      "vtp_value":"auto"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"heroku_session"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",20],
      "vtp_defaultValue":"NotLoggedIn",
      "vtp_map":["list",["map","key","1","value","LoggedIn"]]
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"c",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"blogChannel"
    },{
      "function":"__c",
      "vtp_value":"UA-39697570-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventCat"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventValue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"button-impressions"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"button-clicks"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","devcenter","value","UA-39697570-3"],["map","key","www","value","UA-39697570-4"],["map","key","dashboard","value","UA-39697570-5"],["map","key","id","value","UA-39697570-6"],["map","key","addons","value","UA-39697570-7"],["map","key","beta","value","UA-39697570-11"],["map","key","blog","value","UA-39697570-12"],["map","key","dataclips","value","UA-39697570-13"],["map","key","discussion","value","UA-39697570-14"],["map","key","events","value","UA-39697570-15"],["map","key","help","value","UA-39697570-16"],["map","key","toolbelt","value","UA-39697570-17"],["map","key","jobs","value","UA-39697570-18"],["map","key","lp","value","UA-39697570-19"],["map","key","waza","value","UA-39697570-20"],["map","key","partners","value","UA-39697570-21"],["map","key","postgres","value","UA-39697570-22"],["map","key","redeem","value","UA-39697570-23"],["map","key","status","value","UA-39697570-25"],["map","key","success","value","UA-39697570-26"],["map","key","signup","value","UA-39697570-31"],["map","key","elements","value","UA-39697570-32"],["map","key","engineering","value","UA-39697570-33"],["map","key","connect","value","UA-39697570-34"],["map","key","redis","value","UA-39697570-36"],["map","key","sso","value","UA-39697570-38"],["map","key","kb","value","UA-39697570-40"],["map","key","data","value","UA-39697570-41"],["map","key","jp","value","UA-39697570-44"],["map","key","brand","value","UA-39697570-46"]]
    },{
      "function":"__j",
      "vtp_name":"document.title"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialTarget"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"socialNetwork"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gtm.element.value"
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__c",
      "vtp_value":"UA-39697570-25"
    },{
      "function":"__v",
      "vtp_name":"gtm.historyChangeSource",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__t"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",4],
      "vtp_defaultValue":"false",
      "vtp_map":["list",["map","key","dashboard","value","UA-2989055-26"],["map","key","devcenter","value","UA-2989055-24"],["map","key","toolbelt","value","UA-2989055-19"],["map","key","signup","value","UA-2989055-36"],["map","key","elements","value","UA-2989055-38"],["map","key","connect","value","UA-2989055-37"],["map","key","status","value","UA-2989055-22"],["map","key","jp","value","UA-39697570-44"]]
    },{
      "function":"__c",
      "vtp_value":"UA-2989055-1"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":1,
      "vtp_setDefaultValue":false,
      "vtp_name":"virtualPath"
    },{
      "function":"__c",
      "vtp_value":"51b6483a434bba0f0c000016"
    },{
      "function":"__e"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",16],
      "vtp_defaultValue":["macro",16],
      "vtp_map":["list",["map","key","\/home","value","\/"],["map","key","\/index.html","value","\/"]]
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementId",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementTarget",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__cid"
    },{
      "function":"__hid"
    }],
  "tags":[{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"herokustatus.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]],["map","index","5","dimension",["macro",13]],["map","index","8","dimension",["macro",23]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",25],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",28],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_eventValue":["macro",29],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","2","metric",["macro",30]],["map","index","3","metric",["macro",31]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","page","value",["macro",16]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":7
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]],["map","index","4","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":30
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":34
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":40
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":41
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":42
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":43
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":44
    },{
      "function":"__paused",
      "vtp_originalTagType":"awct",
      "tag_id":45
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":46
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":47
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":49
    },{
      "function":"__cegg",
      "once_per_event":true,
      "vtp_usersNumericId":"00338119",
      "tag_id":57
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":65
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":66
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":68
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":75
    },{
      "function":"__paused",
      "vtp_originalTagType":"img",
      "tag_id":77
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",34],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":80
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",34],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":84
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",25],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",28],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",29],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":86
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","page","value",["macro",16]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":88
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":90
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialActionTarget":["macro",35],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_socialAction":["macro",36],
      "vtp_enableLinkId":true,
      "vtp_socialNetwork":["macro",37],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":95
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",36],
      "vtp_enableLinkId":true,
      "vtp_socialActionTarget":["macro",35],
      "vtp_socialNetwork":["macro",37],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":96
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":97
    },{
      "function":"__paused",
      "vtp_originalTagType":"sp",
      "tag_id":98
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":102
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Submit",
      "vtp_eventLabel":["template","Keep me up to Date: Newsletter - ",["macro",12]],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":103
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Click",
      "vtp_eventLabel":["macro",40],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":true,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":104
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Form",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Re-subscribe",
      "vtp_eventLabel":"Newsletter Re-subscribe",
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":true,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":"UA-39697570-1",
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":105
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":106
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":107
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"heroku.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":109
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"ErrorPage",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",18],
      "vtp_eventLabel":["macro",34],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":110
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":["macro",25],
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":["macro",26],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":["macro",27],
      "vtp_eventLabel":["macro",28],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_eventValue":["macro",29],
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":111
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":112
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackType":"TRACK_SOCIAL",
      "vtp_socialAction":["macro",36],
      "vtp_enableLinkId":true,
      "vtp_socialActionTarget":["macro",35],
      "vtp_socialNetwork":["macro",37],
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_trackingId":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsSocial":true,
      "tag_id":113
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","page","value",["macro",16]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":114
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","page","value","\/virtual\/registration\/registered"],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",41],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":115
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_autoLinkDomains":"herokustatus.com",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","3","dimension",["macro",22]],["map","index","5","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":116
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_useDebugVersion":false,
      "vtp_useHashAutoLink":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_decorateFormsAutoLink":false,
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":false,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_metric":["list",["map","index","1","metric","1"]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]],["map","index","2","dimension",["macro",22]],["map","index","4","dimension",["macro",13]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":117
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":124
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":125
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":126
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":127
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Internal Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Help Article",
      "vtp_eventLabel":["macro",40],
      "vtp_overrideGaSettings":true,
      "vtp_setTrackerName":true,
      "vtp_doubleClick":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_trackerName":"heroku_optimize",
      "vtp_metric":["list",["map","index","2","metric",["macro",30]],["map","index","3","metric",["macro",31]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",24],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":145
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_useDebugVersion":false,
      "vtp_eventCategory":"Internal Links",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"Help Article",
      "vtp_eventLabel":["macro",40],
      "vtp_overrideGaSettings":true,
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_fieldsToSet":["list",["map","fieldName","cookieDomain","value",["macro",19]],["map","fieldName","customTask","value",["macro",14]]],
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","1","dimension",["macro",21]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",32],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":146
    },{
      "function":"__hl",
      "tag_id":151
    },{
      "function":"__hl",
      "tag_id":152
    },{
      "function":"__cl",
      "tag_id":153
    },{
      "function":"__cl",
      "tag_id":154
    },{
      "function":"__cl",
      "tag_id":155
    },{
      "function":"__hl",
      "tag_id":156
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"115433_259",
      "tag_id":157
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003EpiAId=\"37622\";piCId=\"30300\";(function(){var a=document.createElement(\"script\");a.type=\"text\/javascript\";a.src=(\"https:\"==document.location.protocol?\"https:\/\/pi\":\"http:\/\/cdn\")+\".pardot.com\/pd.js\";var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":37
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript data-gtmsrc=\"\/\/pixel.mathtag.com\/event\/js?mt_id=687393\u0026amp;mt_adid=131453\u0026amp;v1=\u0026amp;v2=\u0026amp;v3=\u0026amp;s1=\u0026amp;s2=\u0026amp;s3=\u0026amp;skipsync=13\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(){function f(a){var b=\/[?\u0026]?([^=]c)=([^\u0026]*)\/;a=b.exec(a)||[];return a=decodeURIComponent(a[2])}function g(a){var b=\"; \"+document.cookie;a=b.split(\"; \"+a+\"\\x3d\");return 2==a.length?a.pop().split(\";\").shift():void 0}function h(a,b){var c=new Date;c.setTime(c.getTime()+12096E5);c=\"; expires\\x3d\"+c.toGMTString();document.cookie=a+\"\\x3d\"+b+c+\";domain\\x3d.heroku.com;path\\x3d\/\"}var e=\"campaign\",d=g(e);\"undefined\"==typeof d\u0026\u0026(d=f(document.location.search),\"undefined\"!==d\u0026\u0026h(e,d))}();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":60
    },{
      "function":"__html",
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=function(a){a=new RegExp(\"[; ]\"+a+\"\\x3d([^\\\\s;]*)\");if(a=(\" \"+document.cookie).match(a))return unescape(a[1])};if(!d(\"jbfp\")){var c=Math.random().toString(36).substring(2,15)+Math.random().toString(36).substring(2,15);document.cookie=\"jbfp\\x3d\"+(new Date).getTime()+\"-\"+c+\";domain\\x3dheroku.com;path\\x3d\/;max-age\\x3d31536000\"}var f=function(){var a=-9,b=\"undefined\"!==typeof window.performance?window.performance:!1,c=(b=b?\"undefined\"!==typeof b.timing?b.timing:!1:!1)?\"undefined\"!==\ntypeof b.loadEventEnd\u0026\u0026\"undefined\"!==b.navigationStart?!0:!1:!1;c\u0026\u0026(a=Math.ceil(b.loadEventEnd-b.navigationStart),0\u003Ea\u0026\u0026(a=-1));return a},g=function(){var a=!1,b=navigator.userAgent||navigator.vendor||window.opera;if(\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino\/i.test(b)||\n\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(b.substr(0,\n4)))a=!0;return a};c=function(){var a=!1,b=document.querySelectorAll(\"[data-uuid]\");0\u003Cb.length\u0026\u0026(a=b[0].getAttribute(\"data-uuid\"));return a};c=c();var h=document.referrer,e=d(\"jbfp\");d=d(\"heroku_session\");f=f();var k=g();g=document.createElement(\"img\");e=\"https:\/\/jambox.heroku.com\/e?url\\x3d\"+escape(document.location.href)+\"\\x26fp\\x3d\"+e+\"\\x26li\\x3d\"+d+\"\\x26dtls[page_load_timing]\\x3d\"+f+\"\\x26dtls[mobile_flag]\\x3d\"+k;h\u0026\u0026(e+=\"\\x26ref\\x3d\"+escape(h));c\u0026\u0026(e+=\"\\x26dtls[core_user_uuid]\\x3d\"+c);g.src=e})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":78
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Ewindow.addEventListener(\"load\",function(h){(function(c,e,g){e=c(e);var f={iframes:[],eventMarker:{},getIframeSrc:function(a){return c(a).attr(\"src\").split(\"?\")[0]},getIframeId:function(a){return c(a).attr(\"id\")},removeUndefinedIframes:function(a){var b=c(a).attr(\"id\");a=c(a).attr(\"src\");if(-1===a.indexOf(\"player_id\"))return!1;if(this.eventMarker[b])return!0;this.eventMarker[b]={progress25:!1,progress50:!1,progress75:!1,videoPlayed:!1,videoPaused:!1,videoResumed:!1,videoSeeking:!1,videoCompleted:!1,\ntimePercentComplete:0};return!0},init:function(){var a=c('iframe[src*\\x3d\"player.vimeo.com\/video\"]');this.iframes=c.grep(a,c.proxy(this.removeUndefinedIframes,this));c.each(this.iframes,c.proxy(this.handleOnReady,this))},onMessageReceived:function(a){if(\/^https?:\\\/\\\/player\\.vimeo\\.com\/.test(a.originalEvent.origin)){a=JSON.parse(a.originalEvent.data);var b=c(\"#\"+a.player_id)[0];switch(a.event){case \"playProgress\":this.onPlayProgress(a.data,b);break;case \"seek\":this.onSeek(b);break;case \"play\":this.onPlay(b);\nbreak;case \"pause\":this.onPause(b);break;case \"finish\":this.onFinish(b)}}},post:function(a,b,d){a=JSON.stringify({method:a,value:b});b=c(d).attr(\"src\").split(\"?\")[0];d.contentWindow.postMessage(a,b)},handleOnReady:function(a,b){this.post(\"addEventListener\",\"play\",b);this.post(\"addEventListener\",\"seek\",b);this.post(\"addEventListener\",\"pause\",b);this.post(\"addEventListener\",\"finish\",b);this.post(\"addEventListener\",\"playProgress\",b)},onFinish:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoCompleted||\n(this.sendEvent(a,\"Completed video\"),this.eventMarker[b].videoCompleted=!0)},onSeek:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoSeeking||(this.sendEvent(a,\"Skipped video forward or backward\"),this.eventMarker[b].videoSeeking=!0)},onPlay:function(a){var b=this.getIframeId(a);this.eventMarker[b].videoPlayed||(this.sendEvent(a,\"Started video\"),this.eventMarker[b].videoPlayed=!0);!this.eventMarker[b].videoResumed\u0026\u0026this.eventMarker[b].videoPaused\u0026\u0026(this.sendEvent(a,\"Resumed video\"),\nthis.eventMarker[b].videoResumed=!0)},onPause:function(a){var b=this.getIframeId(a);99\u003Ethis.eventMarker[b].timePercentComplete\u0026\u0026!this.eventMarker[b].videoPaused\u0026\u0026(this.sendEvent(a,\"Paused video\"),this.eventMarker[b].videoPaused=!0)},onPlayProgress:function(a,b){var d=this.getIframeId(b);this.eventMarker[d].timePercentComplete=Math.round(100*a.percent);if(24\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026!this.eventMarker[d].progress25){var c=\"Played video: 25%\";this.eventMarker[d].progress25=!0}49\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026\n!this.eventMarker[d].progress50\u0026\u0026(c=\"Played video: 50%\",this.eventMarker[d].progress50=!0);74\u003Cthis.eventMarker[d].timePercentComplete\u0026\u0026!this.eventMarker[d].progress75\u0026\u0026(c=\"Played video: 75%\",this.eventMarker[d].progress75=!0);c\u0026\u0026this.sendEvent(b,c)},sendEvent:function(a,b){var c=this.getIframeSrc(a);g.push({event:\"trackEvent\",eventCat:\"Vimeo\",eventAction:b,eventLabel:c,eventValue:void 0,eventInteraction:!1})}};f.init();e.on(\"message\",c.proxy(f.onMessageReceived,f))})(jQuery,window,window.dataLayer)});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":93
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E!function(t){function u(a){var b=[0,25,50,75,90],m=b.slice(0),e=[0,0],g=0,h=!1,l=c.create();a.on(\"timeupdate\",function(b){var c=0;var f=Math.floor(b);if(!(h||\"object\"!=typeof a.metadata||f\u003C=e[1])){e[1]=b;b=l.insertOne(e);f=l;var d,k=null,n=[];for(d=0;d\u003Cf.length;++d)!k||k[1]\u003Cf[d][0]?(k\u0026\u0026n.push(k),k=[f[d][0],f[d][1]]):f[d][1]\u003Ek[1]\u0026\u0026(k[1]=f[d][1]);f=(k\u0026\u0026n.push(k),n);for(d=0;d\u003Cf.length;++d)c+=f[d][1]-f[d][0];(l.remove(b),c=c\/a.metadata.chapters_attributes[g].video_attributes.length_in_seconds*100,c\u003E=\nm[0])\u0026\u0026\"undefined\"!==typeof dataLayer\u0026\u0026\"function\"===typeof dataLayer.push\u0026\u0026dataLayer.push({event:\"trackEvent\",eventCat:\"Vidyard\",eventAction:\"Played video: \"+m.shift()+\"%\",eventLabel:a.metadata.chapters_attributes[g].video_attributes.name,eventValue:void 0,eventInteraction:!0})}});a.on(\"beforeSeek\",function(a){!1===h\u0026\u0026(e[1]=a.start);h=!0});a.on(\"play\",function(a){l.insertOne(e.slice(0));e[0]=a;e[1]=a;h=!1});a.on(\"chapterComplete\",function(){m=b.slice(0);g=a.getCurrentChapter();e=[0,0];l=c.create();\nh=!1})}var c=function(){this._compare=function(a,b){return a[0]\u003Cb[0]?-1:a[0]\u003Eb[0]?1:a[1]\u003Cb[1]?-1:a[1]\u003Eb[1]?1:0}};c.create=function(){return new c};c.prototype=[];c.prototype.constructor=Array.prototype.constructor;c.prototype.insertOne=function(a){var b=this.bsearch(a);return this.splice(b+1,0,a),b+1};c.prototype.remove=function(a){return this.splice(a,1),this};c.prototype.bsearch=function(a){if(!this.length)return-1;for(var b,c,e,g=0,h=this.length;1\u003Ch-g;){if(b=Math.floor((g+h)\/2),c=this[b],e=this._compare(a,\nc),0===e)return b;0\u003Ce?g=b:h=b}return 0===g\u0026\u00260\u003Cthis._compare(this[0],a)?-1:g};var q=!0;try{var p=new t.players}catch(a){throw Error(\"The Vidyard API must be loaded before this script can execute\");}for(var r in p)p.hasOwnProperty(r)\u0026\u0026(u(p[r]),q=!1);q\u0026\u0026console.warn(\"No Vidyard Players found. (include this script below player embed codes)\")}(Vidyard);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":94
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E$(\".heroku-footer-social a\").each(function(b,c){if(-1!=this.href.toLowerCase().indexOf(\"heroku.com\/home\")){var a=this.textContent.toLowerCase().indexOf(\"english\")?\"Japanese Site\":\"English Site\";this.setAttribute(\"onclick\",\"dataLayer.push({'event': 'trackEvent', 'eventCat': 'Internal Links', 'eventAction': 'Change Language', 'eventLabel': 'Switch to \"+a+\"', 'eventValue': 0, 'eventInteraction': 0})\")}});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":121
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar structDataTest=document.createElement(\"script\");structDataTest.type=\"application\/ld+json\";\nstructDataTest.text=JSON.stringify({\"@context\":\"http:\/\/schema.org\",\"@type\":\"Event\",name:\"Kafka Summit NYC\",description:\"The Heroku-sponsored Kafka Summit is the premier event for data architects, engineers, devops professionals, and developers who want to learn about streaming data. It brings the Apache Kafka community together to share best practices, write code and discuss the future of streaming technologies.\",startDate:\"2018-04-02\",location:{\"@type\":\"Place\",name:\"Kafka Summit NYC\",address:{\"@type\":\"PostalAddress\",\nstreetAddress:\"Pier 60 - Chelsea Piers\",addressLocality:\"New York\",postalCode:\"10011\",addressRegion:\"NY\",addressCountry:\"US\"}}});document.querySelector(\"head\").appendChild(structDataTest);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":129
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=a||window.jQuery;if(\"undefined\"!==typeof window.jQuery.fn){window.dataLayer=window.dataLayer||[];window.Heroku=window.Heroku||{};window.Heroku.Trackable=window.Heroku.Trackable||function(){};var l=function(b,c){var d=JSON.stringify({category:c.category,action:c.action,label:c.label});a(b).attr(\"data-trackable\",d);a(b).attr(\"data-trackable-nav\",!0)},h;\"www.heroku.com\"===document.location.hostname\u0026\u0026(h=a(\"#navigation a\"));\"devcenter.heroku.com\"===document.location.hostname\u0026\u0026(h=a(\"#primary-header .main-nav a\"));\nfor(var k=0;k\u003Ch.length;k+=1){var f=[],g=h[k],b=a(g).parents(\".has-dropdown\"),d=g.innerHTML,e=a(g).hasClass(\"glostick__menu__item\")?!0:!1;-1===d.indexOf(\"\\x3c\")\u0026\u0026-1===d.indexOf(\"\\x3e\")\u0026\u0026f.push(d);for(d=0;d\u003Cb.length;d+=1){var c=a(b[d])[0];c=a(c).find(\"a\")[0].innerHTML;if(\"More\"===c){if(c=a(g).parents(\"ul\")[0],c=a(c).siblings(\".more-title\")[0],\"undefined\"!==typeof c){var n=a(\".nav-more\").is(\":visible\")||!a(\".nav-more\").is(\":hidden\");f.push(c.innerHTML);n\u0026\u0026f.push(\"More\")}}else-1===f.indexOf(c)\u0026\u0026-1===\nc.indexOf(\"\\x3c\")\u0026\u0026-1===c.indexOf(\"\\x3e\")\u0026\u0026f.push(c)}f.reverse();if(0\u003Cf.length){var m=0;d=function(){for(var a=\"\",b=0;b\u003Cf.length;b+=1)0\u003Cb\u0026\u0026(m+=1,a+=\" \\x3e \"),a+=f[b];return a}();b=e?\"Glostick Menu\":\"Top Navigation Menu\";e=e?\"Glostick Click\":\"Level \"+m;b={category:b,action:e,label:d};l(g,b)}}h=a(\"#heroku-footer a\");for(k=0;k\u003Ch.length;k+=1)g=h[k],b=a(g).parents(\".col\")[0],e=!1,\"undefined\"!==typeof a(b).find(\"h4\")[0]\u0026\u0026(e=a(b).find(\"h4\")[0].innerHTML,d=(e?e+\" \\x3e \":\"\")+g.innerHTML,b=\"Footer Navigation Menu\",\ne=\"Click\",b={category:b,action:e,label:d},l(g,b));a(\"[data-trackable-nav]\").each(function(b,c){return new Heroku.Trackable(a(c))})}})(window.jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":133
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(d){function e(a,c,b){window.dataLayer.push({event:\"trackEvent\",eventCat:a,eventAction:c,eventLabel:b})}function h(a){var c=new XMLHttpRequest;c.timeout=3E3;c.onreadystatechange=function(){if(4==this.readyState\u0026\u0026200==this.status\u0026\u0026\"\"!==c.responseText){var b=JSON.parse(c.responseText);e(\"Widget + Survey POC\",\"Launched\",\"Launched\");window.martechMessagingWidget(b);b=a;var d=new XMLHttpRequest;d.timeout=3E3;d.open(\"GET\",\"https:\/\/booster.heroku.com\/set?tid\\x3d\"+b,!0);d.send()}};c.open(\"GET\",\"https:\/\/booster.heroku.com\/spoc?tid\\x3d\"+\na,!0);c.send()}function f(b,c){var a=new XMLHttpRequest;a.timeout=3E3;a.open(\"GET\",\"https:\/\/booster.heroku.com\/status?ct\\x3d\"+c+\"\\x26tid\\x3d\"+b,!0);a.send()}var g=document.querySelectorAll(\"[data-uuid]\")[0]||!1,b=!1;g\u0026\u0026(b=g.getAttribute(\"data-uuid\"));window.dataLayer=window.dataLayer||[];d(document).on(\"click\",\".mt-engage-widget-dismiss-link\",function(a){b\u0026\u0026(f(b,\"d\"),e(\"Widget + Survey POC\",\"Interaction\",\"Dismissed Widget\"))});d(document).on(\"click\",\"#mt-engage-widget-primary\",function(a){b\u0026\u0026(f(b,\n\"c\"),e(\"Widget + Survey POC\",\"Interaction\",\"CTA Clicked\"))});d=document.createElement(\"script\");d.type=\"text\/javascript\";d.src=\"https:\/\/booster.heroku.com\/widget.js\";document.getElementsByTagName(\"body\")[0].appendChild(d);var k=-1\u003Cdocument.location.href.indexOf(\"#explore\")?!0:!1;setTimeout(function(){if(b\u0026\u0026k)f(b,\"p\");else{var a;if(a=b){a=!1;var c=navigator.userAgent||navigator.vendor||window.opera;if(\/(android|bb\\d+|meego).+mobile|avantgo|bada\\\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\\\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\\.(browser|link)|vodafone|wap|windows ce|xda|xiino\/i.test(c)||\n\/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\\-(n|u)|c55\\\/|capi|ccwa|cdm\\-|cell|chtm|cldc|cmd\\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\\-s|devi|dica|dmob|do(c|p)o|ds(12|\\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\\-|_)|g1 u|g560|gene|gf\\-5|g\\-mo|go(\\.w|od)|gr(ad|un)|haie|hcit|hd\\-(m|p|t)|hei\\-|hi(pt|ta)|hp( i|ip)|hs\\-c|ht(c(\\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\\-(20|go|ma)|i230|iac( |\\-|\\\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\\\/)|klon|kpt |kwc\\-|kyo(c|k)|le(no|xi)|lg( g|\\\/(k|l|u)|50|54|\\-[a-w])|libw|lynx|m1\\-w|m3ga|m50\\\/|ma(te|ui|xo)|mc(01|21|ca)|m\\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\\-2|po(ck|rt|se)|prox|psio|pt\\-g|qa\\-a|qc(07|12|21|32|60|\\-[2-7]|i\\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\\\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\\-|oo|p\\-)|sdk\\\/|se(c(\\-|0|1)|47|mc|nd|ri)|sgh\\-|shar|sie(\\-|m)|sk\\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\\-|v\\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\\-|tdg\\-|tel(i|m)|tim\\-|t\\-mo|to(pl|sh)|ts(70|m\\-|m3|m5)|tx\\-9|up(\\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\\-|your|zeto|zte\\-\/i.test(c.substr(0,\n4)))a=!0;a=!a}a\u0026\u0026h(b)}},3E3)})(window.jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":134
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(a){a=a||window.jQuery;if(\"undefined\"!==typeof window.jQuery.fn){window.dataLayer=window.dataLayer||[];window.Heroku=window.Heroku||{};window.Heroku.Trackable=window.Heroku.Trackable||function(){};for(var k=function(c,b){var d=JSON.stringify({category:b.category,action:b.action,label:b.label});a(c).attr(\"data-trackable\",d);a(c).attr(\"data-trackable-df\",!0)},h=a(\".page-content a\"),f=0;f\u003Ch.length;f+=1){var c=h[f],d=a(c).parents(\".table-row\"),b=c.innerHTML,l=\"undefined\"!==typeof a(c).attr(\"href\")?\n-1\u003Ca(c).attr(\"href\").indexOf(\"heroku.com\")||0===a(c).attr(\"href\").indexOf(\"\/\")?\"Internal Links\":\"External Links\":\"Internal Links\";\"Go to Agenda Builder\"===b\u0026\u0026(b=\"Agenda Builder\");for(var g=0;g\u003Cd.length;g+=1){var e=a(d[g])[0];e=a(e).find(\"h3 a\")[0].innerHTML;e!==b\u0026\u0026(b+=\" \\x3e \"+e)}d={category:l,action:\"Click\",label:b};k(c,d)}a(\"[data-trackable-df]\").each(function(c,b){return new Heroku.Trackable(a(b))})}})(window.jQuery);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":143
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003EEventNONInteraction=1;Frequency=10;GA_EventCategory=\"Page Interaction\";GA_EventAction=\"Scroll Down\";_frequency=Frequency;_repetition=100\/Frequency;var _scrollMatrix=[];for(ix=0;ix\u003C_repetition;ix++)_scrollMatrix[ix]=[_frequency,\"false\"],_frequency=Frequency+_frequency;function debounce(b,f,c){var a;return function(){var d=this,e=arguments,g=function(){a=null;c||b.apply(d,e)},h=c\u0026\u0026!a;clearTimeout(a);a=setTimeout(g,f);h\u0026\u0026b.apply(d,e)}}\nvar debouncedScrollFunction=debounce(function(){for(iz=0;iz\u003C_scrollMatrix.length;iz++)jQuery(window).scrollTop()+jQuery(window).height()\u003E=jQuery(document).height()*_scrollMatrix[iz][0]\/100\u0026\u0026\"false\"==_scrollMatrix[iz][1]\u0026\u0026(_scrollMatrix[iz][1]=\"true\",dataLayer.push({event:\"trackEvent\",eventCat:GA_EventCategory,eventAction:GA_EventAction,eventLabel:_scrollMatrix[iz][0]+\"%\",eventValue:0,nonInteraction:EventNONInteraction}))},250);jQuery(document).scroll(debouncedScrollFunction);\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":150
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",10],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",16],
      "arg1":"\/articles\/getting-started-.*",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.historyChange"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.load"
    },{
      "function":"_re",
      "arg0":["macro",3],
      "arg1":"herokustatus\\.com|status\\.heroku\\.com"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"https:\/\/signup.heroku.com\/account\/accept\/ok"
    },{
      "function":"_re",
      "arg0":["macro",7],
      "arg1":"^\/search\\?"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.js"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"trackEvent"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"trackPageview"
    },{
      "function":"_eq",
      "arg0":["macro",32],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"www.heroku.com"
    },{
      "function":"_sw",
      "arg0":["macro",18],
      "arg1":"https:\/\/www.heroku.com\/pricing"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"www\\.heroku\\.com(\\\/$|\\\/home)",
      "ignore_case":true
    },{
      "function":"_sw",
      "arg0":["macro",18],
      "arg1":"https:\/\/signup.heroku.com"
    },{
      "function":"_gt",
      "arg0":["macro",2],
      "arg1":"0"
    },{
      "function":"_sw",
      "arg0":["macro",18],
      "arg1":"https:\/\/devcenter.heroku.com\/start"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"https:\/\/signup.heroku.com\/account"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"https:\/\/www.heroku.com\/connect"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"https:\/\/www.heroku.com\/thanks"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"blog.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"elements.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"devcenter.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"https:\/\/signup.heroku.com\/java"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"signup.heroku.com"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"signup.heroku.com\/account\/accept\/|signup.heroku.com\/confirm"
    },{
      "function":"_eq",
      "arg0":["macro",18],
      "arg1":"https:\/\/signup.heroku.com\/account\/accept"
    },{
      "function":"_re",
      "arg0":["macro",33],
      "arg1":"(\\d+\\sError|^Page not found)",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"trackSocial"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"NotLoggedIn"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"Keep Me Up to Date"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"hello\\.heroku\\.com\\\/keepmeuptodate",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.click"
    },{
      "function":"_cn",
      "arg0":["macro",39],
      "arg1":"hello.heroku.com\/unsubscribe"
    },{
      "function":"_cn",
      "arg0":["macro",38],
      "arg1":"Re-subscribe"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"hello\\.heroku\\.com\\\/unsubscribe",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"herokustatus.com"
    },{
      "function":"_eq",
      "arg0":["macro",42],
      "arg1":"popstate"
    },{
      "function":"_cn",
      "arg0":["macro",43],
      "arg1":"heroku.com"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"help\\.heroku\\.com\\\/((PKEZDG48\\\/how\\-do\\-i\\-close\\-my\\-team\\-account)|(R2NSPPFU\\\/how\\-do\\-i\\-close\\-my\\-personal\\-account)|(KXT7TVJG\\\/why\\-do\\-i\\-see\\-unpaid\\-invoices\\-when\\-trying\\-to\\-close\\-my\\-account))",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",44],
      "arg1":"(^$|((^|,)115433_259($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"dashboard.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"redis.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"postgres.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"dataclips.heroku.com"
    },{
      "function":"_sw",
      "arg0":["macro",18],
      "arg1":"https:\/\/signup.heroku.com\/nodese"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"id.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"engineering.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"toolbelt.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",3],
      "arg1":"partners.heroku.com"
    },{
      "function":"_eq",
      "arg0":["macro",5],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",6],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",17],
      "arg1":"gtm.dom"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"kafka-summit-nyc-2019"
    },{
      "function":"_ew",
      "arg0":["macro",18],
      "arg1":"devcenter.heroku.com\/"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"https:\/\/devcenter.heroku.com\/"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"articles\\\/heroku-cli|articles\\\/git|articles\\\/logging|articles\\\/custom-domains|categories\\\/command-line|articles\\\/procfile|articles\\\/heroku-postgresql|articles\\\/config-vars|articles\\\/heroku-cli-commands|articles\\\/buildpacks|categories\\\/deployment|articles\\\/dynos|articles\\\/pipelines|articles\\\/free-dyno-hours|articles\\\/github-integration|articles\\\/scheduler|articles\\\/heroku-local|articles\\\/dyno-types|articles\\\/how-heroku-works|categories\\\/data-management|articles\\\/multiple-environments|categories\\\/reference|articles\\\/github-integration-review-apps|categories\\\/deploying-with-git$"
    },{
      "function":"_cn",
      "arg0":["macro",18],
      "arg1":"www.heroku.com\/dreamforce"
    },{
      "function":"_eq",
      "arg0":["macro",15],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",18],
      "arg1":"www\\.heroku\\.com(\\\/$|\\\/home|\\\/pricing)",
      "ignore_case":true
    }],
  "rules":[
    [["if",0,1,2],["add",0,36]],
    [["if",3],["add",0,58]],
    [["if",8],["add",1]],
    [["if",9],["add",2]],
    [["if",3],["unless",10],["add",3]],
    [["if",0,1,2],["unless",10],["add",3]],
    [["if",3,5],["add",4,18],["block",0,3,20,28,29,30,34,39,43,44,58,60]],
    [["if",3,11],["add",5,15,20,28,30,34,60,61,66]],
    [["if",3,12],["add",6]],
    [["if",3,13],["add",7,60]],
    [["if",3,14,15],["add",8,13,47]],
    [["if",3,16],["add",9]],
    [["if",3,17],["add",10,11,12,35,45,46,48],["block",20]],
    [["if",3,18],["add",14]],
    [["if",3,19],["add",14]],
    [["if",3,20],["add",15,17,28,30,34,60,61]],
    [["if",3,21],["add",15,28,30,34,61]],
    [["if",3,22],["add",16,20,28,30,34,60,61,66]],
    [["if",7,23],["add",19]],
    [["if",3,24],["add",20,28,30,34,60]],
    [["if",7,27],["add",21]],
    [["if",7,27],["unless",10],["add",22]],
    [["if",8],["unless",10],["add",23]],
    [["if",9],["unless",10],["add",24]],
    [["if",5,7],["unless",10],["add",25]],
    [["if",28],["add",26]],
    [["if",28],["unless",10],["add",27]],
    [["if",3,29],["add",29]],
    [["if",30,31,32],["add",31]],
    [["if",32,33],["add",32]],
    [["if",32,34,35],["add",33]],
    [["if",3,4],["add",36,61],["block",0,43,44]],
    [["if",7,27,36],["add",37]],
    [["if",8,36],["add",38]],
    [["if",0,1,2,36,37],["add",39]],
    [["if",7,36],["add",39]],
    [["if",28,36],["add",40]],
    [["if",9,36],["add",41]],
    [["if",5,7,36],["add",42]],
    [["if",3,6],["add",43,44]],
    [["if",38,39,40,41],["add",49,50]],
    [["if",7],["add",51,52,53,54,55,56,57]],
    [["if",7,46],["add",59]],
    [["if",7,47],["add",60]],
    [["if",3,48],["add",60,61]],
    [["if",3,49],["add",61]],
    [["if",3,50],["add",61]],
    [["if",7,51],["add",62]],
    [["if",52,53],["add",63]],
    [["if",53],["add",64]],
    [["if",7,54],["add",65]],
    [["if",3,55],["add",67]],
    [["if",3,56,57],["add",67]],
    [["if",3,58],["add",68]],
    [["if",53,59,60],["add",69]],
    [["if",6,7],["block",0,3]],
    [["if",3,25],["unless",5,26],["block",20,58,60]],
    [["if",3,42],["block",58]],
    [["if",7,43],["block",58]],
    [["if",3,44],["block",58]],
    [["if",3,45],["block",58]],
    [["if",47,53],["block",64]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={lf:!0},fa={};try{fa.__proto__=ea;da=fa.lf;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ca,ja=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},r=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Ca=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];za(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")},Na=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b.push(d):2048>d?b.push(192|d>>6,128|d&63):55296>d||57344<=d?b.push(224|d>>12,128|d>>6&63,128|d&63):(d=65536+((d&1023)<<10|a.charCodeAt(++c)&1023),b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return new Uint8Array(b)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Oa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Pa=function(a){if(null==a)return String(a);var b=Oa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Qa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ra=function(a){if(!a||"object"!=Pa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Qa(a,"constructor")&&!Qa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Qa(a,b)},B=function(a,b){var c=b||("array"==Pa(a)?[]:{}),d;for(d in a)if(Qa(a,d)){var e=a[d];"array"==Pa(e)?("array"!=Pa(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):Ra(e)?(Ra(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};
var Sa=[],Ta={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ua=function(a){return Ta[a]},Va=/[\x00\x22\x26\x27\x3c\x3e]/g;var Za=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return cb[a]};
Sa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(Za,db)+"'"}};var mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return nb[a]};Sa[16]=function(a){return a};var qb;
var rb=[],sb=[],tb=[],vb=[],wb=[],xb={},yb,zb,Ab,Bb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Cb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=xb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Db(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=xb[b];return c?c.priorityOverride||0:0},Db=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Db(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Lc(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Cb(k,b);Ab&&(d=Ab.Mf(d,k))}catch(y){b.te&&b.te(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Db(a[l],b,c)]=Db(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var q=Db(a[n],b,c);zb&&(m=m||q===zb.ub);d.push(q)}return zb&&m?zb.Pf(d):d.join("");case "escape":d=Db(a[1],b,c);if(zb&&ua(a[1])&&"macro"===a[1][0]&&zb.mg(a))return zb.Jg(d);d=String(d);for(var u=2;u<a.length;u++)Sa[a[u]]&&(d=Sa[a[u]](d));return d;case "tag":var p=a[1];if(!vb[p])throw Error("Unable to resolve tag reference "+p+".");return d={fe:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Hb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Hb=function(a,b,c){try{return yb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ib=function(){var a=function(b){return{toString:function(){return b}}};return{qd:a("convert_case_to"),rd:a("convert_false_to"),sd:a("convert_null_to"),td:a("convert_true_to"),ud:a("convert_undefined_to"),rh:a("debug_mode_metadata"),ra:a("function"),Qe:a("instance_name"),Ue:a("live_only"),We:a("malware_disabled"),Xe:a("metadata"),sh:a("original_vendor_template_id"),af:a("once_per_event"),Dd:a("once_per_load"),Ld:a("setup_tags"),Nd:a("tag_id"),Od:a("teardown_tags")}}();var Jb=null,Mb=function(a){function b(q){for(var u=0;u<q.length;u++)d[q[u]]=!0}var c=[],d=[];Jb=Kb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Lb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<vb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Lb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Jb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Jb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Kb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Hb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */
var D=window,F=document,fc=navigator,gc=F.currentScript&&F.currentScript.src,hc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var f=ja.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},oc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},qc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},rc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},sc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},tc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?F.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(F.querySelectorAll)try{var zc=F.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==F.documentElement&&(yc=!0)}catch(a){}var vc=yc;var H={qa:"_ee",nc:"event_callback",tb:"event_timeout",D:"gtag.config",X:"allow_ad_personalization_signals",oc:"restricted_data_processing",Qa:"allow_google_signals",Y:"cookie_expires",sb:"cookie_update",Ra:"session_duration",ca:"user_properties"};
H.de=[H.X,H.Qa,H.sb];H.ke=[H.Y,H.tb,H.Ra];var Pc=/[A-Z]+/,Qc=/\s/,Rc=function(a){if(g(a)&&(a=Ea(a),!Qc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Tc=function(a){for(var b={},c=0;c<a.length;++c){var d=Rc(a[c]);d&&(b[d.id]=d)}Sc(b);var e=[];za(b,function(f,h){e.push(h)});return e};
function Sc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Uc={},Vc=null,Wc=Math.random();Uc.s="GTM-JD26";Uc.yb="250";var Xc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Zc="www.googletagmanager.com/gtm.js";var $c=Zc,ad=null,bd=null,cd=null,dd="//www.googletagmanager.com/a?id="+Uc.s+"&cv=325",ed={},fd={},gd=function(){var a=Vc.sequence||0;Vc.sequence=a+1;return a};var hd={},I=function(a,b){hd[a]=hd[a]||[];hd[a][b]=!0},id=function(a){for(var b=[],c=hd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var jd=function(){return"&tc="+vb.filter(function(a){return a}).length},md=function(){kd||(kd=D.setTimeout(ld,500))},ld=function(){kd&&(D.clearTimeout(kd),kd=void 0);void 0===nd||od[nd]&&!pd&&!qd||(rd[nd]||sd.og()||0>=td--?(I("GTM",1),rd[nd]=!0):(sd.Sg(),mc(ud()),od[nd]=!0,vd=wd=qd=pd=""))},ud=function(){var a=nd;if(void 0===a)return"";var b=id("GTM"),c=id("TAGGING");return[xd,od[a]?"":"&es=1",yd[a],b?"&u="+b:"",c?"&ut="+c:"",jd(),pd,qd,wd,vd,"&z=0"].join("")},zd=function(){return[dd,"&v=3&t=t","&pid="+
wa(),"&rv="+Uc.yb].join("")},Ad="0.005000">Math.random(),xd=zd(),Bd=function(){xd=zd()},od={},pd="",qd="",vd="",wd="",nd=void 0,yd={},rd={},kd=void 0,sd=function(a,b){var c=0,d=0;return{og:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},Sg:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),td=1E3,Cd=function(a,b){if(Ad&&!rd[a]&&nd!==a){ld();nd=a;vd=pd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";yd[a]="&e="+c+"&eid="+a;md()}},Dd=function(a,b,c){if(Ad&&!rd[a]&&
b){a!==nd&&(ld(),nd=a);var d,e=String(b[Ib.ra]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;pd=pd?pd+"."+f:"&tr="+f;var h=b["function"];if(!h)throw Error("Error: No function name given for function call.");var k=(xb[h]?"1":"2")+d;vd=vd?vd+"."+k:"&ti="+k;md();2022<=ud().length&&ld()}},Ed=function(a,b,c){if(Ad&&!rd[a]){a!==nd&&(ld(),nd=a);var d=c+b;qd=qd?qd+
"."+d:"&epr="+d;md();2022<=ud().length&&ld()}};var Fd={},Gd=new xa,Hd={},Id={},Ld={name:"dataLayer",set:function(a,b){B(La(a,b),Hd);Jd()},get:function(a){return Kd(a,2)},reset:function(){Gd=new xa;Hd={};Jd()}},Kd=function(a,b){if(2!=b){var c=Gd.get(a);if(Ad){var d=Md(a);c!==d&&I("GTM",5)}return c}return Md(a)},Md=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Od(d)},Od=function(a){for(var b=Hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Qd=function(a,b){Id.hasOwnProperty(a)||(Gd.set(a,b),B(La(a,b),Hd),Jd())},Jd=function(a){za(Id,function(b,c){Gd.set(b,c);B(La(b,void 0),Hd);B(La(b,c),Hd);a&&delete Id[b]})},Rd=function(a,b,c){Fd[a]=Fd[a]||{};var d=1!==c?Md(b):Gd.get(b);"array"===Pa(d)||"object"===Pa(d)?Fd[a][b]=B(d):Fd[a][b]=d},Sd=function(a,b){if(Fd[a])return Fd[a][b]},Td=function(a,b){Fd[a]&&delete Fd[a][b]};var Ud=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Vd()||d||"http:"!=D.location.protocol?a:b)+c},Vd=function(){var a=kc(),b;if(1===a)a:{var c=$c;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var je=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ke={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},le={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},me="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var oe=function(a){var b=Kd("gtm.whitelist");b&&I("GTM",9);var c=b&&Ka(Ca(b),ke),d=Kd("gtm.blacklist");d||(d=Kd("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];ne()&&(d=Ca(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=r(Ca(d),"google")&&I("GTM",2);var e=d&&Ka(Ca(d),le),f={};return function(h){var k=h&&h[Ib.ra];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=fd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>r(c,k))if(l&&0<l.length)for(var q=0;q<
l.length;q++){if(0>r(c,l[q])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=r(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=r(l,"sandboxedScripts"))||c&&-1!==r(c,"sandboxedScripts")||(v=ya(e,me));return f[k]=v}},ne=function(){return je.test(D.location&&D.location.hostname)};var pe={Mf:function(a,b){b[Ib.qd]&&"string"===typeof a&&(a=1==b[Ib.qd]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ib.sd)&&null===a&&(a=b[Ib.sd]);b.hasOwnProperty(Ib.ud)&&void 0===a&&(a=b[Ib.ud]);b.hasOwnProperty(Ib.td)&&!0===a&&(a=b[Ib.td]);b.hasOwnProperty(Ib.rd)&&!1===a&&(a=b[Ib.rd]);return a}};var qe={active:!0,isWhitelisted:function(){return!0}},re=function(a){var b=Vc.zones;!b&&a&&(b=Vc.zones=a());return b};var se=function(){};var te=!1,ue=0,ve=[];function we(a){if(!te){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){te=!0;for(var e=0;e<ve.length;e++)G(ve[e])}ve.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function xe(){if(!te&&140>ue){ue++;try{F.documentElement.doScroll("left"),we()}catch(a){D.setTimeout(xe,50)}}}var ye=function(a){te?a():ve.push(a)};var ze={},Ae={},Be=function(a,b,c,d){if(!Ae[a]||Xc[b]||"__zone"===b)return-1;var e={};Ra(d)&&(e=B(d,e));e.id=c;e.status="timeout";return Ae[a].tags.push(e)-1},Ce=function(a,b,c,d){if(Ae[a]){var e=Ae[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function De(a){for(var b=ze[a]||[],c=0;c<b.length;c++)b[c]();ze[a]={push:function(d){d(Uc.s,Ae[a])}}}
var Ge=function(a,b,c){Ae[a]={tags:[]};qa(b)&&Ee(a,b);c&&D.setTimeout(function(){return De(a)},Number(c));return Fe(a)},Ee=function(a,b){ze[a]=ze[a]||[];ze[a].push(Ha(function(){return G(function(){b(Uc.s,Ae[a])})}))};function Fe(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&De(a)})},yf:function(){d=!0;b>=c&&De(a)}}};var He=function(){function a(d){return!ra(d)||0>d?0:d}if(!Vc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Ld.get("gtm.start"))?Ld.get("gtm.start"):0;Vc._li={cst:a(c-b),cbt:a(bd-b)}}};var Le={},Me=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ne=!1;
var Oe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}He();return D[b]},Pe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Me();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Re=function(a){},Qe=function(){return D.GoogleAnalyticsObject||"ga"};var Te=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ue=/:[0-9]+$/,Ve=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ye=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=We(a.protocol)||We(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Ue,"").toLowerCase());var f=b,h,k=We(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Xe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Ue,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=r(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ve(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},We=function(a){return a?a.replace(":","").toLowerCase():""},Xe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Ze=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ue,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function df(a,b,c,d){var e=vb[a],f=ef(a,b,c,d);if(!f)return null;var h=Db(e[Ib.Ld],c,[]);if(h&&h.length){var k=h[0];f=df(k.index,{B:f,w:1===k.fe?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ef(a,b,c,d){function e(){if(f[Ib.We])k();else{var w=Eb(f,c,[]),y=Be(c.id,String(f[Ib.ra]),Number(f[Ib.Nd]),w[Ib.Xe]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"5");Ce(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"6");Ce(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Dd(c.id,f,"1");var z=function(){var A=Fa()-C;Dd(c.id,f,"7");Ce(c.id,y,"exception",A);x||(x=!0,k())};var C=Fa();try{Cb(w,c)}catch(A){z(A)}}}var f=vb[a],h=b.B,k=b.w,l=b.terminate;if(c.Lc(f))return null;var m=Db(f[Ib.Od],c,[]);if(m&&m.length){var n=m[0],q=df(n.index,{B:h,w:k,terminate:l},c,d);if(!q)return null;h=q;k=2===n.fe?l:q}if(f[Ib.Dd]||f[Ib.af]){var u=f[Ib.Dd]?wb:c.ah,p=h,t=k;if(!u[a]){e=Ha(e);var v=ff(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function ff(a,b,c){var d=[],e=[];b[a]=gf(d,e,c);return{B:function(){b[a]=hf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=jf;for(var f=0;f<e.length;f++)e[f]()}}}function gf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hf(a){a()}function jf(a,b){b()};var mf=function(a,b){for(var c=[],d=0;d<vb.length;d++)if(a.kb[d]){var e=vb[d];var f=b.add();try{var h=df(d,{B:f,w:f,terminate:f},a,d);h?c.push({Ee:d,ze:Fb(e),Xf:h}):(kf(d,a),f())}catch(l){f()}}b.yf();c.sort(lf);for(var k=0;k<c.length;k++)c[k].Xf();return 0<c.length};function lf(a,b){var c,d=b.ze,e=a.ze;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ee,k=b.Ee;f=h>k?1:h<k?-1:0}return f}
function kf(a,b){if(!Ad)return;var c=function(d){var e=b.Lc(vb[d])?"3":"4",f=Db(vb[d][Ib.Ld],b,[]);f&&f.length&&c(f[0].index);Dd(b.id,vb[d],e);var h=Db(vb[d][Ib.Od],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var nf=!1,of=function(a,b,c,d,e){if("gtm.js"==b){if(nf)return!1;nf=!0}Cd(a,b);var f=Ge(a,d,e);Rd(a,"event",1);Rd(a,"ecommerce",1);Rd(a,"gtm");var h={id:a,name:b,Lc:oe(c),kb:[],ah:[],te:function(){I("GTM",6)}};h.kb=Mb(h);var k=mf(h,f);"gtm.js"!==b&&"gtm.sync"!==b||Re(Uc.s);if(!k)return k;for(var l=0;l<h.kb.length;l++)if(h.kb[l]){var m=vb[l];if(m&&!Xc[String(m[Ib.ra])])return!0}return!1};var qf=/^https?:\/\/www\.googletagmanager\.com/;function rf(){var a;return a}function tf(a,b){}
function sf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function uf(){var a=!1;return a};var vf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},wf=function(a){var b=new vf;b.eventModel=a;return b},xf=function(a,b){a.targetConfig=b;return a},yf=function(a,b){a.containerConfig=b;return a},zf=function(a,b){a.h=b;return a},Af=function(a,b){a.globalConfig=b;return a},Bf=function(a,b){a.B=b;return a},Cf=function(a,b){a.w=b;return a};
vf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Df=function(a){function b(e){za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var Ef={},Ff=["G"];Ef.Fe="";var Gf=Ef.Fe.split(",");function Hf(){var a=Vc;return a.gcq=a.gcq||new If}
var Jf=function(a,b,c){Hf().register(a,b,c)},Kf=function(a,b,c,d){Hf().push("event",[b,a],c,d)},Lf=function(a,b){Hf().push("config",[a],b)},Mf={},Nf=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Of=function(a,b,c,d,e){this.type=a;this.m=b;this.N=c||"";this.h=d;this.i=e},If=function(){this.i={};this.m={};this.h=[]},Pf=function(a,b){var c=Rc(b);return a.i[c.containerId]=a.i[c.containerId]||new Nf},Qf=function(a,b,c,d){if(d.N){var e=Pf(a,d.N),
f=e.m;if(f){var h=B(c),k=B(e.targetConfig[d.N]),l=B(e.containerConfig),m=B(e.i),n=B(a.m),q=Kd("gtm.uniqueEventId"),u=Rc(d.N).prefix,p=Cf(Bf(Af(zf(yf(xf(wf(h),k),l),m),n),function(){Ed(q,u,"2");}),function(){Ed(q,u,"3");});try{Ed(q,u,"1");f(d.N,b,d.m,p)}catch(t){
Ed(q,u,"4");}}}};
If.prototype.register=function(a,b,c){if(3!==Pf(this,a).status){Pf(this,a).m=b;Pf(this,a).status=3;c&&(Pf(this,a).i=c);var d=Rc(a),e=Mf[d.containerId];if(void 0!==e){var f=Vc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Vc[d.containerId]._spx&&(h=h.toLowerCase());var k=Kd("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Ad&&!rd[k]){k!==nd&&(ld(),nd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);wd=wd?wd+","+n:"&cl="+n}delete Mf[d.containerId]}this.flush()}};
If.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var f=Rc(c),h;if(h=f){var k;if(k=1===Pf(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(Pf(this,c).status=2,this.push("require",[],f.containerId),Mf[f.containerId]=Fa(),!Ud())){var m=encodeURIComponent(f.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";jc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.h.push(new Of(a,e,c,b,d));d||this.flush()};
If.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Pf(this,c.N).status&&!a)return;break;case "set":za(c.h[0],function(l,m){B(La(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[H.Qb];delete d[H.Qb];var f=Pf(this,c.N),h=Rc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||Qf(this,H.D,d,c);f.h=!0;delete d[H.qa];k?B(d,f.containerConfig):B(d,f.targetConfig[c.N]);break;
case "event":Qf(this,c.h[1],c.h[0],c)}this.h.shift()}};var Rf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Uf=function(a,b,c,d){var e=Sf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Tf(e,function(f){return f.Jb},b);if(1===e.length)return e[0].id;e=Tf(e,function(f){return f.lb},c);return e[0]?e[0].id:void 0}};
function Vf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Rf(b,e).indexOf(c)}
var Zf=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var q=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":q=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===q){for(var v=Wf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Yf(y,u)&&Vf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else q&&"none"!=q&&(m+="; domain="+q),k=!Yf(q,u)&&Vf(m,a,l)}return k};function Tf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Sf(a,b){for(var c=[],d=Rf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Jb:1*k[0]||1,lb:1*k[1]||1}))}}return c}
var $f=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ag=/(^|\.)doubleclick\.net$/i,Yf=function(a,b){return ag.test(document.location.hostname)||"/"===b&&$f.test(a)},Wf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ag.test(e)||$f.test(e)||a.push("none");return a};var bg="G".split(/,/),cg=!1;cg=!0;var dg=null,eg={},fg={},gg;function hg(a,b){var c={event:a};b&&(c.eventModel=B(b),b[H.nc]&&(c.eventCallback=b[H.nc]),b[H.tb]&&(c.eventTimeout=b[H.tb]));return c}
var ng={config:function(a){},
event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ra(a[2])&&void 0!=a[2])return;c=a[2]}var d=hg(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ra(a[1])?b=B(a[1]):3==a.length&&g(a[1])&&(b={},Ra(a[2])||ua(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);
if(b){b._clear=!0;return b}}},og={policy:!0};var pg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},rg=function(a){var b=qg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var sg=!1,tg=[];function ug(){if(!sg){sg=!0;for(var a=0;a<tg.length;a++)G(tg[a])}}var vg=function(a){sg?G(a):tg.push(a)};var Kg=function(a){if(Jg(a))return a;this.h=a};Kg.prototype.dg=function(){return this.h};var Jg=function(a){return!a||"object"!==Pa(a)||Ra(a)?!1:"getUntrustedUpdateValue"in a};Kg.prototype.getUntrustedUpdateValue=Kg.prototype.dg;var Lg=[],Mg=!1,Ng=function(a){return D["dataLayer"].push(a)},Og=function(a){var b=Vc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Pg(a){var b=a._clear;za(a,function(f,h){"_clear"!==f&&(b&&Qd(f,void 0),Qd(f,h))});ad||(ad=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=gd(),a["gtm.uniqueEventId"]=d,Qd("gtm.uniqueEventId",d));cd=c;var e=
Qg(a);cd=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}function Qg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Vc.zones;d=e?e.checkState(Uc.s,c):qe;return d.active?of(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Rg(){for(var a=!1;!Mg&&0<Lg.length;){Mg=!0;delete Hd.eventModel;Jd();var b=Lg.shift();if(null!=b){var c=Jg(b);if(c){var d=b;b=Jg(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Kd(h,1);if(ua(k)||Ra(k))k=B(k);Id[h]=k}}try{if(qa(b))try{b.call(Ld)}catch(v){}else if(ua(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),q=l.slice(1),u=Kd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,q)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=ng[b[0]];if(t&&(!c||!og[b[0]])){b=t(b);break a}}b=void 0}if(!b){Mg=!1;continue}}a=Pg(b)||a}}finally{c&&Jd(!0)}}Mg=!1}
return!a}function Sg(){var a=Rg();try{pg(D["dataLayer"],Uc.s)}catch(b){}return a}
var Ug=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ye(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});vg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Vc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Kg(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Lg.push.apply(Lg,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Rg()&&h};Lg.push.apply(Lg,a.slice(0));Tg()&&G(Sg)},Tg=function(){var a=!0;return a};var Vg={};Vg.ub=new String("undefined");
var Wg=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Vg.ub?b:a[d]);return c.join("")}};Wg.prototype.toString=function(){return this.h("undefined")};Wg.prototype.valueOf=Wg.prototype.toString;Vg.jf=Wg;Vg.xc={};Vg.Pf=function(a){return new Wg(a)};var Xg={};Vg.Tg=function(a,b){var c=gd();Xg[c]=[a,b];return c};Vg.be=function(a){var b=a?0:1;return function(c){var d=Xg[c];if(d&&"function"===typeof d[b])d[b]();Xg[c]=void 0}};Vg.mg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Vg.Jg=function(a){if(a===Vg.ub)return a;var b=gd();Vg.xc[b]=a;return'google_tag_manager["'+Uc.s+'"].macro('+b+")"};Vg.xg=function(a,b,c){a instanceof Vg.jf&&(a=a.h(Vg.Tg(b,c)),b=pa);return{Jc:a,B:b}};var Yg=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||qc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Zg=function(a){Vc.hasOwnProperty("autoEventsSettings")||(Vc.autoEventsSettings={});var b=Vc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},$g=function(a,b,c){Zg(a)[b]=c},ah=function(a,b,c,d){var e=Zg(a),f=Ga(e,b,d);e[b]=c(f)},bh=function(a,b,c){var d=Zg(a);return Ga(d,b,c)};function ch(){for(var a=dh,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function eh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var dh,fh;function gh(a){dh=dh||eh();fh=fh||ch();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,q=k&63;e||(q=64,d||(n=64));b.push(dh[l],dh[m],dh[n],dh[q])}return b.join("")}
function hh(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=fh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}dh=dh||eh();fh=fh||ch();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var ih;var mh=function(){var a=jh,b=kh,c=lh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(F,"mousedown",d);nc(F,"keyup",d);nc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},nh=function(a,b,c){for(var d=lh().decorators,e={},f=0;f<d.length;++f){var h=d[f],k;if(k=!c||h.forms)a:{var l=h.domains,m=a;if(l&&(h.sameHost||m!==F.location.hostname))for(var n=0;n<l.length;n++)if(l[n]instanceof
RegExp){if(l[n].test(m)){k=!0;break a}}else if(0<=m.indexOf(l[n])){k=!0;break a}k=!1}if(k){var q=h.placement;void 0==q&&(q=h.fragment?2:1);q===b&&Ia(e,h.callback())}}return e},lh=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var oh=/(.*?)\*(.*?)\*(.*)/,ph=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,qh=/^(?:www\.|m\.|amp\.)+/,rh=/([^?#]+)(\?[^#]*)?(#.*)?/;function sh(a){return new RegExp("(.*?)(^|&)"+a+"=([^&]*)&?(.*)")}
var uh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(gh(String(d))))}var e=b.join("*");return["1",th(e),e].join("*")},th=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=ih)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=
h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}ih=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^ih[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},wh=function(){return function(a){var b=Ze(D.location.href),c=b.search.replace("?",""),d=Ve(c,"_gl",!0)||"";a.query=vh(d)||{};var e=Ye(b,"fragment").match(sh("_gl"));a.fragment=vh(e&&e[3]||"")||{}}},xh=function(){var a=wh(),b=lh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},vh=function(a){var b;
b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=oh.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===th(k,n)){l=!0;break a}l=!1}if(l){for(var q={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)q[u[p]]=hh(u[p+1]);return q}}}}catch(t){}};
function yh(a,b,c,d){function e(n){var q=n,u=sh(a).exec(q),p=q;if(u){var t=u[2],v=u[4];p=u[1];v&&(p=p+t+v)}n=p;var w=n.charAt(n.length-1);n&&"&"!==w&&(n+="&");return n+m}d=void 0===d?!1:d;var f=rh.exec(c);if(!f)return"";var h=f[1],k=f[2]||"",l=f[3]||"",m=a+"="+b;d?l="#"+e(l.substring(1)):k="?"+e(k.substring(1));return""+h+k+l}
function zh(a,b){var c="FORM"===(a.tagName||"").toUpperCase(),d=nh(b,1,c),e=nh(b,2,c),f=nh(b,3,c);if(Ja(d)){var h=uh(d);c?Ah("_gl",h,a):Bh("_gl",h,a,!1)}if(!c&&Ja(e)){var k=uh(e);Bh("_gl",k,a,!0)}for(var l in f)if(f.hasOwnProperty(l))a:{var m=l,n=f[l],q=a;if(q.tagName){if("a"===q.tagName.toLowerCase()){Bh(m,n,q,void 0);break a}if("form"===q.tagName.toLowerCase()){Ah(m,n,q);break a}}"string"==typeof q&&yh(m,n,q,void 0)}}
function Bh(a,b,c,d){if(c.href){var e=yh(a,b,c.href,void 0===d?!1:d);Te.test(e)&&(c.href=e)}}
function Ah(a,b,c){if(c&&c.action){var d=(c.method||"").toLowerCase();if("get"===d){for(var e=c.childNodes||[],f=!1,h=0;h<e.length;h++){var k=e[h];if(k.name===a){k.setAttribute("value",b);f=!0;break}}if(!f){var l=F.createElement("input");l.setAttribute("type","hidden");l.setAttribute("name",a);l.setAttribute("value",b);c.appendChild(l)}}else if("post"===d){var m=yh(a,b,c.action);Te.test(m)&&(c.action=m)}}}
var jh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||zh(e,e.hostname)}}catch(h){}},kh=function(a){try{if(a.action){var b=Ye(Ze(a.action),"host");zh(a,b)}}catch(c){}},Ch=function(a,b,c,d){mh();var e="fragment"===c?2:1,f={callback:a,domains:b,fragment:2===e,placement:e,forms:!!d,sameHost:!1};lh().decorators.push(f)},Dh=function(){var a=F.location.hostname,
b=ph.exec(F.referrer);if(!b)return!1;var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(qh,""),l=e.replace(qh,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Eh=function(a,b){return!1===a?!1:a||b||Dh()};var Fh={};var Gh=/^\w+$/,Hh=/^[\w-]+$/,Ih=/^~?[\w-]+$/,Jh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Kh(a){return a&&"string"==typeof a&&a.match(Gh)?a:"_gcl"}
var Mh=function(){var a=Ze(D.location.href),b=Ye(a,"query",!1,void 0,"gclid"),c=Ye(a,"query",!1,void 0,"gclsrc"),d=Ye(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ve(e,"gclid",void 0);c=c||Ve(e,"gclsrc",void 0)}return Lh(b,c,d)},Lh=function(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};d.gclid=a;d.gclsrc=b;d.dclid=c;if(void 0!==a&&a.match(Hh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==
Fh.gtm_3pds?0:Fh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d},Oh=function(a){var b=Mh();Nh(b,a)};
function Nh(a,b,c){function d(q,u){var p=Ph(q,e);p&&Zf(p,u,h,f,l,!0)}b=b||{};var e=Kh(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ka?7776E3:b.Ka;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(q){return["GCL",m,q].join(".")};a.aw&&(!0===b.Lh?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var Rh=function(a,b,c,d,e){for(var f=xh(),h=Kh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Jh[l]){var m=Ph(l,h),n=f[m];if(n){var q=Math.min(Qh(n),Fa()),u;b:{for(var p=q,t=Rf(m,F.cookie),v=0;v<t.length;++v)if(Qh(t[v])>p){u=!0;break b}u=!1}u||Zf(m,n,c,d,0==e?void 0:new Date(q+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Nh(Lh(f.gclid,f.gclsrc),w)},Ph=function(a,b){var c=Jh[a];if(void 0!==c)return b+c},Qh=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function Sh(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var Th=function(a,b,c,d,e){if(ua(b)){var f=Kh(e);Ch(function(){for(var h={},k=0;k<a.length;++k){var l=Ph(a[k],f);if(l){var m=Rf(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},Uh=function(a){return a.filter(function(b){return Ih.test(b)})},Vh=function(a,b){for(var c=Kh(b&&b.prefix),d={},e=0;e<a.length;e++)Jh[a[e]]&&(d[a[e]]=Jh[a[e]]);za(d,function(f,h){var k=Rf(c+h,F.cookie);if(k.length){var l=k[0],m=Qh(l),n={};n[f]=[Sh(l)];Nh(n,b,m)}})};var Wh=function(){for(var a=fc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},Zh=function(a,b,c,d){var e=Xh(b);return Uf(a,e,Yh(c),d)},$h=function(a,b,c,d){var e=""+Xh(c),f=Yh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},Xh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},Yh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var ai=["1"],bi={},fi=function(a,b,c,d){var e=ci(a);bi[e]||di(e,b,c)||(ei(e,Wh(),b,c,d),di(e,b,c))};function ei(a,b,c,d,e){var f=$h(b,"1",d,c);Zf(a,f,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function di(a,b,c){var d=Zh(a,b,c,ai);d&&(bi[a]=d);return d}function ci(a){return(a||"_gcl")+"_au"};var gi=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({dd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].dd]||(f[a[h].dd]=[]),f[a[h].dd].push({timestamp:k[1],$f:k[2]}))}return f};var hi=/^\d+\.fls\.doubleclick\.net$/;function ii(a){var b=Ze(D.location.href),c=Ye(b,"host",!1);if(c&&c.match(hi)){var d=Ye(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function ji(a,b){if("aw"==a||"dc"==a){var c=ii("gcl"+a);if(c)return c.split(".")}var d=Kh(b);if("_gcl"==d){var e;e=Mh()[a]||[];if(0<e.length)return e}var f=Ph(a,d),h;if(f){var k=[];if(F.cookie){var l=Rf(f,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=Sh(l[m]);n&&-1===r(k,n)&&k.push(n)}h=Uh(k)}else h=k}else h=k}else h=[];return h}
var ki=function(){var a=ii("gac");if(a)return decodeURIComponent(a);var b=gi(),c=[];za(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].$f);f=Uh(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},li=function(a,b,c,d,e){fi(b,c,d,e);var f=bi[ci(b)],h=Mh().dc||[],k=!1;if(f&&0<h.length){var l=Vc.joined_au=Vc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var q="https://adservice.google.com/ddm/regclk",u=q=q+"?gclid="+h[n]+"&auiddc="+f;fc.sendBeacon&&fc.sendBeacon(u)||mc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var p=ci(b),t=bi[p];t&&ei(p,t,c,d,e)}};var mi;if(3===Uc.yb.length)mi="g";else{var ni="G";mi=ni}
var oi={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:mi,OPT:"o"},pi=function(a){var b=Uc.s.split("-"),c=b[0].toUpperCase(),d=oi[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Uc.yb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Uc.yb+e};var ui=["input","select","textarea"],vi=["button","hidden","image","reset","submit"],wi=function(a){var b=a.tagName.toLowerCase();return!va(ui,function(c){return c===b})||"input"===b&&va(vi,function(c){return c===a.type.toLowerCase()})?!1:!0},xi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):tc(a,["form"],100)},yi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(wi(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Bi=!!D.MutationObserver,Ci=void 0,Di=function(a){if(!Ci){var b=function(){var c=F.body;if(c)if(Bi)(new MutationObserver(function(){for(var e=0;e<Ci.length;e++)G(Ci[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Ci.length;e++)G(Ci[e])}))})}};Ci=[];F.body?b():G(b)}Ci.push(a)};var Zi=D.clearTimeout,$i=D.setTimeout,R=function(a,b,c){if(Ud()){b&&G(b)}else return jc(a,b,c)},aj=function(){return D.location.href},bj=function(a){return Ye(Ze(a),"fragment")},cj=function(a){return Xe(Ze(a))},U=function(a,b){return Kd(a,b||2)},dj=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Ng(a)):d=Ng(a);return d},ej=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},fj=function(a,b,c){return Rf(a,b,void 0===c?!0:!!c)},gj=function(a,b){if(Ud()){b&&G(b)}else lc(a,b)},hj=function(a){return!!bh(a,"init",!1)},ij=function(a){$g(a,"init",!0)},jj=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":$c;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},kj=function(a,b){var c=a[b];return c};
var lj=Vg.xg;var mj;var Jj=new xa;function Kj(a,b){function c(h){var k=Ze(h),l=Ye(k,"protocol"),m=Ye(k,"host",!0),n=Ye(k,"port"),q=Ye(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,q]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Lj(a){return Mj(a)?1:0}
function Mj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(Lj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=r(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var q;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Jj.get(p);t||(t=new RegExp(c,u),Jj.set(p,t));q=t.test(b)}catch(v){q=!1}return q;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Kj(b,
c)}return!1};var Nj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Oj={},Pj=encodeURI,Y=encodeURIComponent,Qj=mc;var Rj=function(a,b){if(!a)return!1;var c=Ye(Ze(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Sj=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Oj.ng=function(){var a=!1;return a};var el=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var pl=window,ql=document,rl=function(a){var b=pl._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===pl["ga-disable-"+a])return!0;try{var c=pl.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Rf("AMP_TOKEN",ql.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return ql.getElementById("__gaOptOutExtension")?!0:!1};var ul=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ca]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var yl=function(a,b,c){Kf(b,c,a)},zl=function(a,b,c){Kf(b,c,a,!0)},Bl=function(a,b){};
function Al(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Sd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=U("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ye(Ze(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):cj(String(b)):String(b)})}();
Z.a.cl=["google"],function(){function a(b){var c=b.target;if(c){var d=Yg(c,"gtm.click");dj(d)}}(function(b){Z.__cl=b;Z.__cl.b="cl";Z.__cl.g=!0;Z.__cl.priorityOverride=0})(function(b){if(!hj("cl")){var c=X("document");nc(c,"click",a,!0);ij("cl")}G(b.vtp_gtmOnSuccess)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return fj(a.vtp_name,U("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.t=["google"],function(){(function(a){Z.__t=a;Z.__t.b="t";Z.__t.g=!0;Z.__t.priorityOverride=0})(function(){return(new Date).getTime()})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=U("gtm.url",1);c=c||aj();var d=b[a("vtp_component")];if(!d||"URL"==d)return cj(String(c));var e=Ze(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ua(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var q=Ye(e,"QUERY",void 0,void 0,m[n]);if(void 0!=q&&(!l||""!==q)){f=q;break a}}f=void 0}else f=Ye(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=U(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;B(Sj(n.vtp_fieldsToSet,"fieldName","value"),f);B(Sj(n.vtp_contentGroup,"index","group"),h);B(Sj(n.vtp_dimension,"index","dimension"),k);B(Sj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var q=B(n);d=B(d,q)}B(Sj(d.vtp_fieldsToSet,"fieldName","value"),f);B(Sj(d.vtp_contentGroup,
"index","group"),h);B(Sj(d.vtp_dimension,"index","dimension"),k);B(Sj(d.vtp_metric,"index","metric"),l);var u=Oe(d.vtp_functionName);if(qa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+gd(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&
y("set",O+sa,K[sa])},C=function(){},A=function(O,K,sa){var Gb=0;if(O)for(var Da in O)if(O.hasOwnProperty(Da)&&(sa&&v[Da]||!sa&&void 0===v[Da])){var $a=w[Da]?Ba(O[Da]):O[Da];"anonymizeIp"!=Da||$a||($a=void 0);K[Da]=$a;Gb++}return Gb},E={name:t};A(f,E,
!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",pi(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(f,J,!1)&&y("set",J);var M;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var V={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||e.value)};A(M,V,!1);y("send",V);}else if("TRACK_SOCIAL"==d.vtp_trackType){var W={hitType:"social",socialNetwork:String(d.vtp_socialNetwork),socialAction:String(d.vtp_socialAction),socialTarget:String(d.vtp_socialActionTarget)};A(M,W,!1);y("send",W);}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var oa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:oa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ka})}M?y("send","pageview",M):y("send","pageview");
d.vtp_autoLinkDomains&&Pe(p,d.vtp_autoLinkDomains,!!d.vtp_useHashAutoLink,!!d.vtp_decorateFormsAutoLink);}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var bb=Q("https:","http:","//www.google-analytics.com/"+ta,f&&f.forceSSL);
R(bb,function(){var O=Me();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.cid=["google"],function(){(function(a){Z.__cid=a;Z.__cid.b="cid";Z.__cid.g=!0;Z.__cid.priorityOverride=0})(function(){return Uc.s})}();



Z.a.aev=["google"],function(){function a(p,t){var v=Sd(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,q.push(y),35<q.length)){var C=q.shift();delete n[C]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e(aj());ua(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Rj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ye(Ze(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return qc(p,"value");case "button":return rc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)wi(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&qc(w,t)||v}var m=/^https?:\/\//i,n={},q=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,rc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),C=Ze(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Ye(C,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&qc(M,J)||v||""}return E;case "MD":var V=p.vtp_mdValue,W=b(t,"MD",Ki);return V&&W?Ni(W,V)||
v:W||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();

Z.a.cegg=["nonGoogleScripts"],function(){var a={};(function(b){Z.__cegg=b;Z.__cegg.b="cegg";Z.__cegg.g=!0;Z.__cegg.priorityOverride=0})(function(b){try{var c=b.vtp_usersNumericId;if(c)if(a.hasOwnProperty(c)&&!0===a[c])b.vtp_gtmOnSuccess();else{b.vtp_snapshotName&&(D.CE_SNAPSHOT_NAME=b.vtp_snapshotName);for(var d=c.toString();8>d.length;)d="0"+d;var e=d.replace(/(\d+)(\d{4})$/,"/pages/scripts/$1/$2.js");R("//script.crazyegg.com"+e+"?"+Math.floor((new Date).getTime()/36E5),b.vtp_gtmOnSuccess,b.vtp_gtmOnFailure);
a[c]=!0}else G(b.vtp_gtmOnFailure)}catch(f){G(b.vtp_gtmOnFailure)}})}();
Z.a.hl=["google"],function(){function a(f){return f.target&&f.target.location&&f.target.location.href?f.target.location.href:aj()}function b(f,h){nc(f,"hashchange",function(k){var l=a(k);h({source:"hashchange",state:null,url:cj(l),J:bj(l)})})}function c(f,h){nc(f,"popstate",function(k){var l=a(k);h({source:"popstate",state:k.state,url:cj(l),J:bj(l)})})}function d(f,h,k){var l=h.history,m=l[f];if(qa(m))try{l[f]=function(n,q,u){m.apply(l,[].slice.call(arguments,0));k({source:f,state:n,url:cj(aj()),
J:bj(aj())})}}catch(n){}}function e(){var f={source:null,state:X("history").state||null,url:cj(aj()),J:bj(aj())};return function(h){var k=f,l={};l[k.source]=!0;l[h.source]=!0;if(!l.popstate||!l.hashchange||k.J!=h.J){var m={event:"gtm.historyChange","gtm.historyChangeSource":h.source,"gtm.oldUrlFragment":f.J,"gtm.newUrlFragment":h.J,"gtm.oldHistoryState":f.state,"gtm.newHistoryState":h.state};m["gtm.oldUrl"]=f.url,m["gtm.newUrl"]=h.url;
f=h;dj(m)}}}(function(f){Z.__hl=f;Z.__hl.b="hl";Z.__hl.g=!0;Z.__hl.priorityOverride=0})(function(f){var h=X("self");if(!hj("hl")){var k=e();b(h,k);c(h,k);d("pushState",h,k);d("replaceState",h,k);ij("hl")}G(f.vtp_gtmOnSuccess)})}();Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Sj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();Z.a.hid=["google"],function(){(function(a){Z.__hid=a;Z.__hid.b="hid";Z.__hid.g=!0;Z.__hid.priorityOverride=0})(function(){return Vg.ub})}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,ic(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var q=
[];k.firstChild;)q.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,q,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){G(h)}}}var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=lj(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Jc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,sc(h),k,e)()}else $i(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var e=X("document"),f=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.lg||k.timeStamp&&k.timeStamp===f)){f=k.timeStamp;l=tc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=bh("lcl",m?"nv.mwt":"mwt",0),q;q=m?bh("lcl","nv.ids",[]):bh("lcl","ids",[]);if(q.length){var u=Yg(l,"gtm.linkClick",q);if(b(k,l,e)&&!m&&n&&l.href){var p=String(kj(l,"rel")||""),t=!!va(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
t&&I("GTM",36);var v=X((kj(l,"target")||"_self").substring(1)),w=!0;if(dj(u,Og(function(){var y;if(y=w&&v){var x;a:if(t&&d){var z;try{z=new MouseEvent(k.type)}catch(C){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.lg=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=kj(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else dj(u,function(){},n||2E3);return!0}}};nc(e,"click",h,!1);nc(e,"auxclick",h,
!1)}function b(e,f,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=kj(f,"href"),l=k.indexOf("#"),m=kj(f,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=cj(k),q=cj(h.location);return n!==q}return!0}function c(e){var f=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(q){return Math.max(k,
q)};ah("lcl","mwt",m,0);h||ah("lcl","nv.mwt",m,0)}var n=function(q){q.push(l);return q};ah("lcl","ids",n,[]);h||ah("lcl","nv.ids",n,[]);hj("lcl")||(a(),ij("lcl"));G(e.vtp_gtmOnSuccess)}var d=!1;d=!0;Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0;}();


var wm={};wm.macro=function(a){if(Vg.xc.hasOwnProperty(a))return Vg.xc[a]},wm.onHtmlSuccess=Vg.be(!0),wm.onHtmlFailure=Vg.be(!1);wm.dataLayer=Ld;wm.callback=function(a){ed.hasOwnProperty(a)&&qa(ed[a])&&ed[a]();delete ed[a]};function xm(){Vc[Uc.s]=wm;Ia(fd,Z.a);zb=zb||Vg;Ab=pe}
function ym(){Fh.gtm_3pds=!0;Vc=D.google_tag_manager=D.google_tag_manager||{};if(Vc[Uc.s]){var a=Vc.zones;a&&a.unregisterChild(Uc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)vb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],q={},u=0;u<n.length;u++)q[n[u][0]]=Array.prototype.slice.call(n[u],1);sb.push(q)}xb=Z;yb=Lj;xm();Ug();te=!1;ue=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)we();else{nc(F,"DOMContentLoaded",we);nc(F,"readystatechange",we);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&xe()}nc(D,"load",we)}sg=!1;"complete"===F.readyState?ug():nc(D,
"load",ug);a:{if(!Ad)break a;D.setInterval(Bd,864E5);}
bd=(new Date).getTime();
}}ym();

})()
