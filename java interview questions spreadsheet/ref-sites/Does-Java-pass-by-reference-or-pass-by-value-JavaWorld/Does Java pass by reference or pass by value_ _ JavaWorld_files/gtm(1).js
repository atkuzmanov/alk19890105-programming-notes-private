
// Copyright 2012 Google Inc. All rights reserved.
(function(w,g){w[g]=w[g]||{};w[g].e=function(s){return eval(s);};})(window,'google_tag_manager');(function(){

var data = {
"resource": {
  "version":"59",
  
  "macros":[{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"eventAction"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"videoEvent\"==",["escape",["macro",0],8,16],"\u0026\u0026\"Autoplay\"==",["escape",["macro",1],8,16],"||\"videoEvent\"==",["escape",["macro",0],8,16],"\u0026\u0026\"Ad Start\"==",["escape",["macro",1],8,16],"||\"moduleImpression\"==",["escape",["macro",0],8,16],"?!0:!1})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"productVendor"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"productName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"articleTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"blogName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"eventLabel"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"affiliateLink\"==",["escape",["macro",0],8,16],"?",["escape",["macro",3],8,16],"+\" | \"+",["escape",["macro",4],8,16],":\"socialLink\"==",["escape",["macro",0],8,16],"?",["escape",["macro",5],8,16],"?",["escape",["macro",5],8,16],":",["escape",["macro",6],8,16],"+\" index\":",["escape",["macro",7],8,16],"})();"]
    },{
      "function":"__aev",
      "vtp_varType":"TEXT"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return\"socialLink\"==",["escape",["macro",0],8,16],"?",["escape",["macro",1],8,16],"+\" \"+",["escape",["macro",9],8,16],":",["escape",["macro",1],8,16],"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return function(d,e,f,b,c){if(d\u0026\u0026e){b=b?\"; path\\x3d\"+b:\"\";c=c?\"; domain\\x3d\"+c:\"\";var a=\"\";f\u0026\u0026(a=new Date,a.setTime(a.getTime()+f),a=\"; expires\\x3d\"+a.toUTCString());document.cookie=d+\"\\x3d\"+e+a+b+c}}})();"]
    },{
      "function":"__v",
      "vtp_name":"gtm.videoStatus",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoPercent",
      "vtp_dataLayerVersion":1
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",12],8,16],";switch(a){case \"start\":return\"Play\";case \"pause\":return\"Pause\";case \"seek\":return\"Seek\";case \"progress\":return ",["escape",["macro",13],8,16],"+\"%\"}})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"nonIdleTimeElapsed"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return ",["escape",["macro",15],8,16],"\/1E3})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"gaTrackingId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){try{var c=ga.getAll(),d;var a=0;for(d=c.length;a\u003Cd;a+=1)if(c[a].get(\"trackingId\")===",["escape",["macro",17],8,16],")return c[a].get(\"clientId\")}catch(f){a=\"_ga\";c=a+\"\\x3d\";d=document.cookie.split(\";\");for(a=0;a\u003Cd.length;a++){for(var b=d[a],e;\" \"==b.charAt(0);)b=b.substring(1,b.length);0==b.indexOf(c)\u0026\u0026(e=b.substring(c.length,b.length))}pieces=e.split(\".\");return(cid=pieces[pieces.length-2]+\".\"+pieces[pieces.length-1])?cid:e=ga.getAll()[0].get(\"clientId\")}return\"false\"})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0==consent.isEU?!0:consent.purposes.standard.includes(\"1\")?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0==consent.isEU?!0:consent.purposes.standard.includes(\"2\")?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0==consent.isEU?!0:consent.purposes.standard.includes(\"3\")?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0==consent.isEU?!0:consent.purposes.standard.includes(\"4\")?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0==consent.isEU?!0:consent.purposes.standard.includes(\"5\")?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){return 0==consent.isEU?!0:consent.purposes.custom.includes(\"Social Media Consents\")?!0:!1})();"]
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var b=!1;1!=consent.isEU\u0026\u0026__uspapi(\"getUSPData\",1,function(a,c){if(c)try{var d=a.uspString;a=[];a=d.split(\"\");b=\"undefined\"!==typeof a[2]\u0026\u0026\"Y\"===a[2]?!0:!1}catch(e){b=!1}else b=!1});return b})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"goldenTaxonomyIdAll"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",26],8,16],",b=a.split(\", \").filter(function(a){return\"\"!==a});a=b.filter(function(a,c){return b.indexOf(a)==c});return a.join(\", \")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"primaryCategoryAll"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){var a=",["escape",["macro",28],8,16],",b=a.split(\", \").filter(function(a){return\"\"!==a});a=b.filter(function(a,c){return b.indexOf(a)==c});return a.join(\", \")})();"]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"ga_enabled"
    },{
      "function":"__e"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"userId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"primaryCategory"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"contentType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"author"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"displayType"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"edition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"jobPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"industry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"purchaseIntent"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"firstSessionDate"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"lastSessionDate"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"daysSinceLastSession"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"sessionNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"environment"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"property"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"propertyCountry"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"audience"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"insiderSignedIn"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"adBlockStatus"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"platform"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"contentStrategy"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"categoryIdPrimary"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"categoryIdList"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"productManufacturer"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"productId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"tags"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"articleId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"source"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"articleHasVideo"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoPlayerName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoPlayerId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoChannel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoTitle"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoId"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"videoAutoplay"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"pageNumber"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"datePublished"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"dateUpdated"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"daysSincePublished"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"daysSinceUpdated"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"isInsiderContent"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"isBlog"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"isICN"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"adModules"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"otherModules"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"hasRegCookie"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"productLinkPosition"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"jobFunction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"oneRegPlacementID"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"goldenTaxonomyIdPrimary"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"contentCollection"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"sponsorName"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"videoLength"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"ip_company_name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"articleLocale"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"brandpost"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"podcastSponsored"
    },{
      "function":"__u",
      "vtp_component":"QUERY",
      "vtp_queryKey":"utm_date",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"youtubeId"
    },{
      "function":"__jsm",
      "vtp_javascript":["template","(function(){if(\"enterprise\"==",["escape",["macro",48],8,16],")return ",["escape",["macro",18],8,16],"})();"]
    },{
      "function":"__gas",
      "vtp_cookieDomain":"auto",
      "vtp_doubleClick":false,
      "vtp_setTrackerName":false,
      "vtp_useDebugVersion":false,
      "vtp_fieldsToSet":["list",["map","fieldName","useAmpClientId","value","true"],["map","fieldName","userId","value",["macro",32]]],
      "vtp_useHashAutoLink":false,
      "vtp_contentGroup":["list",["map","index","1","group",["macro",33]],["map","index","2","group",["macro",34]],["map","index","3","group",["macro",35]],["map","index","4","group",["macro",36]],["map","index","5","group",["macro",37]]],
      "vtp_decorateFormsAutoLink":false,
      "vtp_enableLinkId":true,
      "vtp_dimension":["list",["map","index","14","dimension",["macro",32]],["map","index","2","dimension",["macro",38]],["map","index","3","dimension",["macro",39]],["map","index","4","dimension",["macro",40]],["map","index","5","dimension",["macro",41]],["map","index","6","dimension",["macro",42]],["map","index","7","dimension",["macro",43]],["map","index","8","dimension",["macro",44]],["map","index","9","dimension",["macro",45]],["map","index","10","dimension",["macro",46]],["map","index","11","dimension",["macro",47]],["map","index","12","dimension",["macro",48]],["map","index","13","dimension",["macro",49]],["map","index","1","dimension",["macro",50]],["map","index","15","dimension",["macro",51]],["map","index","16","dimension",["macro",52]],["map","index","17","dimension",["macro",33]],["map","index","18","dimension",["macro",53]],["map","index","19","dimension",["macro",29]],["map","index","20","dimension",["macro",54]],["map","index","21","dimension",["macro",3]],["map","index","22","dimension",["macro",55]],["map","index","23","dimension",["macro",4]],["map","index","24","dimension",["macro",56]],["map","index","25","dimension",["macro",57]],["map","index","26","dimension",["macro",34]],["map","index","27","dimension",["macro",58]],["map","index","28","dimension",["macro",36]],["map","index","29","dimension",["macro",35]],["map","index","30","dimension",["macro",59]],["map","index","31","dimension",["macro",60]],["map","index","32","dimension",["macro",61]],["map","index","33","dimension",["macro",62]],["map","index","34","dimension",["macro",63]],["map","index","35","dimension",["macro",64]],["map","index","36","dimension",["macro",65]],["map","index","37","dimension",["macro",66]],["map","index","38","dimension",["macro",67]],["map","index","39","dimension",["macro",68]],["map","index","40","dimension",["macro",69]],["map","index","41","dimension",["macro",70]],["map","index","42","dimension",["macro",71]],["map","index","43","dimension",["macro",72]],["map","index","44","dimension",["macro",73]],["map","index","45","dimension",["macro",6]],["map","index","46","dimension",["macro",74]],["map","index","47","dimension",["macro",75]],["map","index","48","dimension",["macro",76]],["map","index","49","dimension",["macro",77]],["map","index","50","dimension",["macro",78]],["map","index","51","dimension",["macro",79]],["map","index","52","dimension",["macro",80]],["map","index","53","dimension",["macro",81]],["map","index","54","dimension",["macro",27]],["map","index","55","dimension",["macro",82]],["map","index","56","dimension",["macro",83]],["map","index","57","dimension",["macro",84]],["map","index","61","dimension",["macro",85]],["map","index","79","dimension",["macro",37]],["map","index","80","dimension",["macro",86]],["map","index","81","dimension",["macro",87]],["map","index","82","dimension",["macro",88]],["map","index","83","dimension",["macro",89]],["map","index","84","dimension",["macro",90]],["map","index","70","dimension",["macro",91]]],
      "vtp_enableEcommerce":false,
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"eventCategory"
    },{
      "function":"__u",
      "vtp_component":"PATH",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_name":"gtm.triggers",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":""
    },{
      "function":"__v",
      "vtp_name":"gtm.videoTitle",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.videoUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.elementUrl",
      "vtp_dataLayerVersion":1
    },{
      "function":"__v",
      "vtp_name":"gtm.element",
      "vtp_dataLayerVersion":1
    },{
      "function":"__u",
      "vtp_component":"URL",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollEventCategory"
    },{
      "function":"__u",
      "vtp_component":"HOST",
      "vtp_enableMultiQueryKeys":false,
      "vtp_enableIgnoreEmptyQueryParam":false
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"eventNonInteraction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollEventAction"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"scrollEventLabel"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-event-message"
    },{
      "function":"__c",
      "vtp_value":["macro",17]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.name"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.country"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.employees"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.revenue"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.WatchList"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.website"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.city"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"currentSessionDate"
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"inSession"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"false",
      "vtp_name":"geolocEnabled"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"suppressMonetization"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",46],
      "vtp_defaultValue":"000",
      "vtp_map":["list",["map","key","cio","value","012"],["map","key","computerworld","value","011"],["map","key","cso online","value","013"],["map","key","greenbot","value","005"],["map","key","infoworld","value","014"],["map","key","itnews","value","022"],["map","key","itworld","value","021"],["map","key","javaworld","value","016"],["map","key","macworld","value","002"],["map","key","network world","value","015"],["map","key","pcworld","value","001"],["map","key","techconnect","value","004"],["map","key","techhive","value","003"],["map","key","thefullnerd","value","007"],["map","key","idg.tv","value","023"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",46],
      "vtp_defaultValue":"omit",
      "vtp_map":["list",["map","key","cio","value","cio"],["map","key","computerworld","value","cw"],["map","key","cso online","value","cso"],["map","key","greenbot","value","gb"],["map","key","infoworld","value","ifw"],["map","key","itnews","value","itn"],["map","key","itworld","value","itw"],["map","key","javaworld","value","jw"],["map","key","macworld","value","mw"],["map","key","network world","value","nww"],["map","key","pcworld","value","pcw"],["map","key","techconnect","value","tc"],["map","key","techhive","value","th"],["map","key","insiderpro","value","omit"]]
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"skimlinksId"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",46],
      "vtp_defaultValue":"omit",
      "vtp_map":["list",["map","key","greenbot","value","58eb2128-4a08-4228-a138-6b0cf0f3228c"],["map","key","pcworld","value","4e5961ed-0324-48db-be9c-4ac254530014"],["map","key","techhive","value","ac215297-bef1-4313-b898-c229d4708315"],["map","key","macworld","value","7761d6a8-7952-47fa-912e-9ac62d639171"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"cntxSeen"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",48],
      "vtp_map":["list",["map","key","enterprise","value","8yHZorDV"],["map","key","consumer","value","kAvvfxjt"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":true,
      "vtp_input":["macro",46],
      "vtp_defaultValue":"omit",
      "vtp_map":["list",["map","key","cio","value","cio.com"],["map","key","computerworld","value","computerworld.com"],["map","key","cso online","value","csoonline.com"],["map","key","infoworld","value","infoworld.com"],["map","key","network world","value","networkworld.com"]]
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",48],
      "vtp_map":["list",["map","key","enterprise","value","xAPwXviG"],["map","key","consumer","value","JAlPV8CF"]]
    },{
      "function":"__t"
    },{
      "function":"__smm",
      "vtp_setDefaultValue":false,
      "vtp_input":["macro",48],
      "vtp_map":["list",["map","key","enterprise","value","B2B"],["map","key","consumer","value","B2C"]]
    },{
      "function":"__k",
      "vtp_decodeCookie":false,
      "vtp_name":"jwpSeen"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"primaryCategoryList"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":true,
      "vtp_defaultValue":"",
      "vtp_name":"goldenTaxonomyIdList"
    },{
      "function":"__c",
      "vtp_value":"7356d61f9189e8d0"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.category"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.category2"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.confidence"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.isISP"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.naicsGroup"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.region"
    },{
      "function":"__v",
      "vtp_dataLayerVersion":2,
      "vtp_setDefaultValue":false,
      "vtp_name":"kickfire-api-return.sicGroup"
    },{
      "function":"__j",
      "vtp_name":"consent.isEU"
    },{
      "function":"__f",
      "vtp_component":"URL"
    },{
      "function":"__v",
      "vtp_name":"gtm.elementClasses",
      "vtp_dataLayerVersion":1
    }],
  "tags":[{
      "function":"__html",
      "priority":7,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\n\u003Cscript type=\"text\/javascript\"\u003Evar _auto={accountKey:\"0cf738c9d2c2033aaa3bb88f6ae0a9f57c18d1b822b19058d46be2fd29de4f58\",u1:\"",["escape",["macro",120],7],"\",apiURL:\"https:\/\/www.popshops.com\",snippetURL:\"https:\/\/automate-prod.s3.amazonaws.com\/minified_logic.js\",automateURL:\"https:\/\/automate.linksynergy.com\",widgetKey:\"xp35fk24bu8fvo1ajpk3qdt2izxuffjj\",aelJS:null,useDefaultAEL:!1,loaded:!1,events:[]},ael=window.addEventListener;\nwindow.addEventListener=function(a,b,c,d){\"click\"!==a\u0026\u0026_auto.useDefaultAEL?ael(a,b,c):_auto.events.push({type:a,handler:b,capture:c,rakuten:d})};_auto.links={};var httpRequest=new XMLHttpRequest;httpRequest.open(\"GET\",_auto.snippetURL,!0);httpRequest.timeout=5E3;httpRequest.ontimeout=function(){if(!_auto.loaded){for(i=0;i\u003C_auto.events.length;i++){var a=_auto.events[i];ael(a.type,a.handler,a.capture)}_auto.useDefaultAEL=!0}};\nhttpRequest.onreadystatechange=function(){httpRequest.readyState===XMLHttpRequest.DONE\u0026\u0026200===httpRequest.status\u0026\u0026(eval(httpRequest.responseText),_auto.run(ael))};httpRequest.send(null);\u003C\/script\u003E\n"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":21
    },{
      "function":"__html",
      "priority":4,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript src=\"\/\/platform.twitter.com\/oct.js\" type=\"text\/javascript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/javascript\"\u003Econsent.socmedia.queue.push(function(){twttr.conversion.trackPid(\"nuqtk\",{tw_sale_amount:0,tw_order_quantity:0})});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/analytics.twitter.com\/i\/adsct?txn_id=nuqtk\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"\/\/t.co\/i\/adsct?txn_id=nuqtk\u0026amp;p_id=Twitter\u0026amp;tw_sale_amount=0\u0026amp;tw_order_quantity=0\"\u003E\n\u003C\/noscript\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":4
    },{
      "function":"__html",
      "priority":4,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003Econsent.socmedia.queue.push(function(){!function(d,e,f,a,b,c){d.twq||(a=d.twq=function(){a.exe?a.exe.apply(a,arguments):a.queue.push(arguments)},a.version=\"1.1\",a.queue=[],b=e.createElement(f),b.async=!0,b.src=\"\/\/static.ads-twitter.com\/uwt.js\",c=e.getElementsByTagName(f)[0],c.parentNode.insertBefore(b,c))}(window,document,\"script\");twq(\"init\",\"o1hbs\");twq(\"track\",\"PageView\")});\u003C\/script\u003E\n",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":29
    },{
      "function":"__html",
      "priority":4,
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/javascript\"\u003Econsent.socmedia.queue.push(function(){_linkedin_partner_id=\"929234\";window._linkedin_data_partner_ids=window._linkedin_data_partner_ids||[];window._linkedin_data_partner_ids.push(_linkedin_partner_id);var b=document.getElementsByTagName(\"script\")[0],a=document.createElement(\"script\");a.type=\"text\/javascript\";a.async=!0;a.src=\"https:\/\/snap.licdn.com\/li.lms-analytics\/insight.min.js\";b.parentNode.insertBefore(a,b)});\u003C\/script\u003E\n\u003Cnoscript\u003E\n\u003Cimg height=\"1\" width=\"1\" style=\"display:none;\" alt=\"\" src=\"https:\/\/dc.ads.linkedin.com\/collect\/?pid=929234\u0026amp;fmt=gif\"\u003E\n\u003C\/noscript\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":30
    },{
      "function":"__html",
      "priority":3,
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003Econsent.socmedia.queue.push(function(){!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"528995260596026\");fbq(\"track\",\"PageView\")});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=528995260596026\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n\n\u003Cscript\u003Econsent.socmedia.queue.push(function(){fbq(\"track\",\"ViewContent\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":2
    },{
      "function":"__html",
      "priority":3,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript\u003Econsent.socmedia.queue.push(function(){!function(b,e,f,g,a,c,d){b.fbq||(a=b.fbq=function(){a.callMethod?a.callMethod.apply(a,arguments):a.queue.push(arguments)},b._fbq||(b._fbq=a),a.push=a,a.loaded=!0,a.version=\"2.0\",a.queue=[],c=e.createElement(f),c.async=!0,c.src=g,d=e.getElementsByTagName(f)[0],d.parentNode.insertBefore(c,d))}(window,document,\"script\",\"https:\/\/connect.facebook.net\/en_US\/fbevents.js\");fbq(\"init\",\"783301121827721\");fbq(\"track\",\"PageView\")});\u003C\/script\u003E\n\u003Cnoscript\u003E\u003Cimg height=\"1\" width=\"1\" style=\"display:none\" src=\"https:\/\/www.facebook.com\/tr?id=528995260596026\u0026amp;ev=PageView\u0026amp;noscript=1\"\u003E\u003C\/noscript\u003E\n\n\n\n\u003Cscript\u003Econsent.socmedia.queue.push(function(){fbq(\"track\",\"ViewContent\")});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":32
    },{
      "function":"__html",
      "priority":1,
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=\"https:\/\/apple.sjv.io\/c\/321564\/435031\/7613\",b='[href^\\x3d\"https:\/\/apple.com\"],[href*\\x3d\"store\"],[href*\\x3d\"www\"],[href^\\x3d\"http:\/\/apple.com\"]',c=\"(http(s)?:\/\/((www|store)(.))?apple.com)(\/(uk|au|ca|ie|nl|se|de))?\",g=new RegExp(c+\"(\/.*)\",\"i\"),h=\/(\\\/newsroom)|(aos.prf.hn)|(\\\/swift\\\/playgrounds)|(apple.sjv.)\/i;$('a[href*\\x3d\"apple.com\"]').filter(b).each(function(b,c){var d=$(this).attr(\"href\");if(g.test(d)\u0026\u0026!h.test(d)){var e=d.replace(g,\"$8\"),f=a+\"?subid1\\x3d\"+generateSubtag(this)+\n\"\\x26u\\x3dhttps:\/\/www.apple.com\";0\u003C=d.indexOf(\"store.\")\u0026\u0026(f+=\"\/shop\");0\u003C=e.indexOf(\"us-hed\")\u0026\u0026(e=e.replace(\"\/us-hed\",\"\"));f+=e;$(this).attr(\"href\",f)}})})();function generateSubtag(a){var b=\"US-\"+",["escape",["macro",119],8,16],"+\"-\"+",["escape",["macro",58],8,16],"+\"-\",c=$(a).attr(\"data-vars-link-position-id\");a=$(a).attr(\"data-product-id\");b+=c?c+\"-\":\"000-\";b+=a?a+\"-\":\"000000-\";return b+=\"web\"};\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":20
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":5
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",2],
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",93],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["macro",1],
      "vtp_eventLabel":["macro",7],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":6
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",93],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["macro",10],
      "vtp_eventLabel":["macro",8],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":7
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",93],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["macro",1],
      "vtp_eventLabel":["macro",7],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":11
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"YouTube Video",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["macro",14],
      "vtp_eventLabel":["template",["macro",96]," - ",["macro",97]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":13
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_fieldsToSet":["list",["map","fieldName","transport","value","beacon"]],
      "vtp_eventCategory":"Engaged time",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_metric":["list",["map","index","1","metric",["macro",16]]],
      "vtp_eventAction":["macro",94],
      "vtp_eventLabel":["macro",16],
      "vtp_trackingId":["macro",17],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":14
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",93],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["macro",1],
      "vtp_eventLabel":["macro",7],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":15
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Outbound Link",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["template",["macro",9]," - ",["macro",98]],
      "vtp_eventLabel":["macro",5],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":16
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",93],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["macro",1],
      "vtp_eventLabel":["macro",7],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":17
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",2],
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",93],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["macro",1],
      "vtp_eventLabel":["macro",7],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":18
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_overrideGaSettings":false,
      "vtp_trackType":"TRACK_PAGEVIEW",
      "vtp_gaSettings":["macro",92],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "tag_id":19
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":22
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",93],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["macro",1],
      "vtp_eventLabel":["template",["macro",37]," | ",["macro",1]," | ",["macro",100]],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":26
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"PDF",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":"Download",
      "vtp_eventLabel":["macro",98],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":27
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":["macro",103],
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":["macro",101],
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["macro",104],
      "vtp_eventLabel":["macro",105],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":28
    },{
      "function":"__ua",
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"KickFire API",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_eventAction":"error",
      "vtp_eventLabel":["macro",106],
      "vtp_trackingId":["macro",107],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":34
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":true,
      "vtp_overrideGaSettings":true,
      "vtp_eventCategory":"KickFire API",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":"success",
      "vtp_dimension":["list",["map","index","68","dimension",["macro",108]],["map","index","71","dimension",["macro",109]],["map","index","72","dimension",["macro",110]],["map","index","69","dimension",["macro",111]],["map","index","73","dimension",["macro",112]],["map","index","74","dimension",["macro",113]],["map","index","85","dimension",["macro",114]]],
      "vtp_trackingId":["macro",107],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":35
    },{
      "function":"__paused",
      "vtp_originalTagType":"ua",
      "tag_id":36
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Top Deals Module",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["template",["macro",9]," - ",["macro",98]],
      "vtp_eventLabel":["macro",100],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":37
    },{
      "function":"__ua",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_nonInteraction":false,
      "vtp_overrideGaSettings":false,
      "vtp_eventCategory":"Bottom Deals Module",
      "vtp_trackType":"TRACK_EVENT",
      "vtp_gaSettings":["macro",92],
      "vtp_eventAction":["template",["macro",9]," - ",["macro",98]],
      "vtp_eventLabel":["macro",100],
      "vtp_enableRecaptchaOption":false,
      "vtp_enableUaRlsa":false,
      "vtp_enableUseInternalVersion":false,
      "vtp_enableFirebaseCampaignData":true,
      "vtp_trackTypeIsEvent":true,
      "tag_id":38
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":39
    },{
      "function":"__paused",
      "vtp_originalTagType":"html",
      "tag_id":40
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-NCMJGX","nickname",""]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"cio",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":54
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WBVXW9","nickname",""]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"computerworld",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":55
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-5WC9SK","nickname",""]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"cso online",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":56
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-PMNRQM7","nickname",""]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"gamestar",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":57
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TM76KR","nickname",""]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"greenbot",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":58
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WD3CHM","nickname",""]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"idg.tv",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":59
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-5C7C8C","nickname",""]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"infoworld",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":60
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TLL87H","nickname",""]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"itnews",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":61
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-TP6NS4","nickname",""]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"itworld",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":62
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-MMJKZ9","nickname","www.javaworld.com"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"javaworld",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":63
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-WHLJC4","nickname","www.macworld.com"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"macworld",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":64
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-P3S27S","nickname","www.networkworld.com"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"network world",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":65
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-K7239P","nickname","www.pcworld.com"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"pcworld",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":66
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-N9NGSK","nickname","www.techconnect.com"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"techconnect",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":67
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-NZGV5J","nickname","www.techhive.com"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"techhive",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":68
    },{
      "function":"__zone",
      "once_per_event":true,
      "vtp_childContainers":["list",["map","publicId","GTM-MFS6364","nickname","www.thefullnerd.com"]],
      "vtp_boundaries":["list",["zb","_eq",["macro",46],"thefullnerd",false,false]],
      "vtp_enableTypeRestrictions":false,
      "tag_id":69
    },{
      "function":"__ytl",
      "vtp_progressThresholdsPercent":"25, 50, 75, 100",
      "vtp_captureComplete":false,
      "vtp_captureStart":true,
      "vtp_fixMissingApi":true,
      "vtp_radioButtonGroup1":"PERCENTAGE",
      "vtp_capturePause":true,
      "vtp_captureProgress":true,
      "vtp_uniqueTriggerId":"11064220_16",
      "vtp_enableTriggerStartOption":true,
      "tag_id":70
    },{
      "function":"__lcl",
      "vtp_waitForTags":true,
      "vtp_checkValidation":true,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11064220_19",
      "tag_id":71
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11064220_37",
      "tag_id":72
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11064220_105",
      "tag_id":73
    },{
      "function":"__lcl",
      "vtp_waitForTags":false,
      "vtp_checkValidation":false,
      "vtp_waitForTagsTimeout":"2000",
      "vtp_uniqueTriggerId":"11064220_106",
      "tag_id":74
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var d=(new Date).getTime(),a=0,h=0,b=!0,g=!1,k=function(){h=(new Date).getTime();a+=h-d;b=!0},e=function(a){b\u0026\u0026(b=!1,d=(new Date).getTime(),g=!1);window.clearTimeout(l);l=window.setTimeout(k,5E3)},c=function(a,b){window.addEventListener?window.addEventListener(a,b):window.attachEvent\u0026\u0026window.attachEvent(\"on\"+a,b)},f=function(c){b||(a+=(new Date).getTime()-d);!g\u0026\u00260\u003Ca\u0026\u002636E5\u003Ea\u0026\u0026window.dataLayer.push({event:\"nonIdle\",nonIdleTimeElapsed:a});b\u0026\u0026(g=!0);c\u0026\u0026\"beforeunload\"===c.type\u0026\u0026window.removeEventListener(\"beforeunload\",\nf);a=0;d=(new Date).getTime();window.setTimeout(f,15E3)};c(\"mousedown\",e);c(\"keydown\",e);c(\"scroll\",e);c(\"mousemove\",e);c(\"beforeunload\",f);var l=window.setTimeout(k,5E3);window.setTimeout(f,15E3)})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":1
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar firstSessionDate=",["escape",["macro",41],8,16],",lastSessionDate=",["escape",["macro",42],8,16],",currentSessionDate=",["escape",["macro",115],8,16],",sessionNumber=",["escape",["macro",44],8,16],"||1,inSession=",["escape",["macro",116],8,16],",daysSinceLastSession=0,currentTime=new Date,longExpiry=15768E8;\nif(\"undefined\"===typeof firstSessionDate)",["escape",["macro",11],8,16],"(\"inSession\",!0,18E5,\"\/\"),lastSessionDate=firstSessionDate=currentSessionDate=currentTime.toUTCString(),",["escape",["macro",11],8,16],"(\"firstSessionDate\",firstSessionDate,longExpiry,\"\/\"),",["escape",["macro",11],8,16],"(\"currentSessionDate\",currentSessionDate,longExpiry,\"\/\"),",["escape",["macro",11],8,16],"(\"sessionNumber\",sessionNumber,longExpiry,\"\/\"),",["escape",["macro",11],8,16],"(\"lastSessionDate\",lastSessionDate,longExpiry,\"\/\");else if(\"undefined\"===typeof inSession\u0026\u0026(",["escape",["macro",11],8,16],"(\"inSession\",\n!0,18E5,\"\/\"),sessionNumber=+sessionNumber+1,",["escape",["macro",11],8,16],"(\"sessionNumber\",sessionNumber,longExpiry,\"\/\"),lastSessionDate=currentSessionDate,",["escape",["macro",11],8,16],"(\"lastSessionDate\",lastSessionDate,longExpiry,\"\/\"),currentSessionDate=currentTime.toUTCString(),",["escape",["macro",11],8,16],"(\"currentSessionDate\",currentSessionDate,longExpiry,\"\/\")),\"undefined\"!=typeof lastSessionDate){var lastSessionMS=(new Date(lastSessionDate)).getTime();daysSinceLastSession=Math.round((currentTime.getTime()-lastSessionMS)\/\n864E5)}dataLayer.push({event:\"Session Vars Set\",daysSinceLastSession:daysSinceLastSession,firstSessionDate:firstSessionDate,lastSessionDate:lastSessionDate,sessionNumber:sessionNumber});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":8
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E\/*\n @preserve\n jquery.scrolldepth.js | v1.0\n Copyright (c) 2016 Rob Flaherty (@robflaherty)\n Licensed under the MIT and GPL licenses.\n*\/\n(function(a){\"function\"===typeof define\u0026\u0026define.amd?define([\"jquery\"],a):\"object\"===typeof module\u0026\u0026module.exports?module.exports=a(require(\"jquery\")):a(jQuery)})(function(a){var p={minHeight:0,percentage:!0,pixelDepth:!0,nonInteraction:!0,gtmOverride:!1,trackerName:!1,dataLayer:\"dataLayer\"},f=a(window),g=[],h=0,m;a.scrollDepth=function(b){function q(c,a,e,v){if(m\u0026\u0026b.pixelDepth\u0026\u00262\u003Carguments.length\u0026\u0026e\u003Eh){h=e;var d=!0;\"undefined\"!==typeof a\u0026\u0026\"25%\"!==a\u0026\u0026(d=!1);m({event:\"ScrollDistance\",scrollEventCategory:\"Scroll Depth\",\nscrollEventAction:a,scrollEventLabel:(250*Math.floor(e\/250)).toString()+\"px\",eventValue:1,eventNonInteraction:d})}}function r(c,d,e){a.each(c,function(c,b){-1===a.inArray(c,g)\u0026\u0026d\u003E=b\u0026\u0026(q(\"Percentage\",c,d,e),g.push(c))})}function t(c,a){var b,d,f,k=null,l=0,g=function(){l=new Date;k=null;f=c.apply(b,d)};return function(){var e=new Date;l||(l=e);var h=a-(e-l);b=this;d=arguments;0\u003E=h?(clearTimeout(k),k=null,l=e,f=c.apply(b,d)):k||(k=setTimeout(g,h));return f}}function n(){f.on(\"scroll.scrollDepth\",t(function(){var c=\na(document).height(),d=window.innerHeight?window.innerHeight:f.height();d=f.scrollTop()+d;c={\"25%\":parseInt(.25*c,10),\"50%\":parseInt(.5*c,10),\"75%\":parseInt(.75*c,10),\"100%\":c-5};var e=+new Date-u;g.length\u003E=(b.percentage?4:0)?f.off(\"scroll.scrollDepth\"):b.percentage\u0026\u0026r(c,d,e)},500))}var u=+new Date;b=a.extend({},p,b);a(document).height()\u003Cb.minHeight||(a.scrollDepth.reset=function(){g=[];h=0;f.off(\"scroll.scrollDepth\");n()},n(),\"undefined\"===typeof window[b.dataLayer]||\"function\"!==typeof window[b.dataLayer].push||\nb.gtmOverride||(m=function(a){window[b.dataLayer].push(a)}))};return a.scrollDepth});\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003EjQuery(function(){jQuery.scrollDepth()});window.addEventListener(\"beforeunload\",function(a){dataLayer.push({event:\"pushOnUnload\"})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":9
    },{
      "function":"__html",
      "once_per_event":true,
      "vtp_html":"\n\u003Cscript data-gtmsrc=\"https:\/\/w.soundcloud.com\/player\/api.js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E(function(){try{var q=function(l){var a,c,b,m,n,e,f,h=\"SoundCloud\",d=SC.Widget(l),g=0;d.bind(SC.Widget.Events.READY,function(){d.bind(SC.Widget.Events.PLAY,function(){1E3\u003CDate.now()-g\u0026\u0026d.getCurrentSound(function(c){f=c.title;a=\"Play\";k(h,a,f);g=Date.now()})});d.bind(SC.Widget.Events.PAUSE,function(b){c=Math.round(100*b.relativePosition);100!==c\u0026\u0026(a=\"Pause\",k(h,a,f))});d.bind(SC.Widget.Events.PLAY_PROGRESS,function(d){e=!1;c=Math.round(100*d.relativePosition);25!==c||b||(a=\"25%\",e=b=!0);50!==c||m||\n(a=\"50%\",e=m=!0);75!==c||n||(a=\"75%\",e=n=!0);e\u0026\u0026k(h,a,f)});d.bind(SC.Widget.Events.FINISH,function(){a=\"100%\";b=m=n=!1;k(h,a,f)})})},k=function(b,a,c){window.dataLayer.push({event:\"scEvent\",eventCategory:b,eventAction:a,eventLabel:c})},g,p=document.querySelectorAll('iframe[src*\\x3d\"soundcloud.com\"]');var b=0;for(g=p.length;b\u003Cg;b+=1)q(p[b])}catch(l){console.log(\"Error with SoundCloud API: \"+l.message)}})();\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":12
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/javascript\" src=\"\/\/s.skimresources.com\/js\/",["escape",["macro",121],3],".skimlinks.js\"\u003E\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":23
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript\u003E(function(){var a=document.createElement(\"script\");a.async=!0;a.type=\"text\/javascript\";a.src=\"https:\/\/cdn.connatix.com\/min\/connatix.renderer.infeed.min.js\";a.setAttribute(\"data-connatix-token\",\"",["escape",["macro",122],7],"\");var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":true,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "vtp_usePostscribe":true,
      "tag_id":24
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){var a=",["escape",["macro",123],8,16],";\"undefined\"===typeof a\u0026\u0026dataLayer.push({event:\"cntxReady\"})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":25
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar cookieName=\"kickfireWatchlist\",cookieValue=\"",["escape",["macro",112],7],"\",expires=new Date;expires.setTime(expires.getTime()+6E4*kickfireGTM.session_timeout);document.cookie=cookieName+\"\\x3d\"+cookieValue+\"; expires\\x3d\"+expires.toUTCString()+\"; path\\x3d\/; domain\\x3d.\"+location.hostname.replace(\/^www\\.\/i,\"\");\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":42
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":["template","\u003Cdiv class=\"brVideoContainer\" itemscope itemtype=\"http:\/\/schema.org\/VideoObject\"\u003E\n\t\u003Cdiv class=\"outer-wrapper\"\u003E\n      \u003Cimg onclick=\"jwplayer(\u0026#39;bottomRightPlayer\u0026#39;).remove(); this.style.display = \u0026#39;none\u0026#39;;\" id=\"jw-standalone-close-button\" src=\"data:image\/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAUCAYAAACNiR0NAAAABGdBTUEAALGPC\/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAACXBIWXMAAA3XAAAN1wFCKJt4AAABWWlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS40LjAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp0aWZmPSJodHRwOi8vbnMuYWRvYmUuY29tL3RpZmYvMS4wLyI+CiAgICAgICAgIDx0aWZmOk9yaWVudGF0aW9uPjE8L3RpZmY6T3JpZW50YXRpb24+CiAgICAgIDwvcmRmOkRlc2NyaXB0aW9uPgogICA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgpMwidZAAABOklEQVQ4Ea2V3U7DMAxGV8QN3OyBB+oDdK\/L75DKOV0cmdC0EizSp7iJfWwvbXaY5\/mIJnUoA\/s+7N6cfSKe+XgoD1\/ML+gpANhdaN4zBr2iC5ruCuCT+RGdWHx2bRgGk\/yCuuaePsX3hPmALq4tww1kFscbWqBuYldoYxujr8O5dpeh2eEHlIAMbmHVt62g77ikvbZZKmLqdLOTfSwsk49o96eJltuWItDTt3Kl7XCvtoldYyP5GnTEMQDv2MrhWq56HRZknKsDtlV9oBjam5XFexi8285kz9WNPP+95QaWXx+h7aF0X\/61w8gwA\/MBjDzH6a9DcchttrB6APHj4t\/1yazlQ2fh\/5+emQF5BXVhqbqtbq6XAyAv1zjN3S8A3wyNu5DlhTFZ3Rl59+3CNio1VsZZ4E3\/Ar4BuSbVUBIuWisAAAAASUVORK5CYII=\"\u003E\n      \u003Cdiv id=\"bottomRightPlayer\"\u003E\u003C\/div\u003E\n\t\u003C\/div\u003E\n\u003C\/div\u003E\n\n\u003Cstyle\u003E\n@media only screen and (max-width: 929px) {\n\t.brVideoContainer {\n    \twidth: 100%;\n  \t\theight: auto;\n  \t\tdisplay: inline-block;\n        position: relative;\n  \t\tborder: none;\n  \t\toverflow: hidden;\n  \t\tz-index: 10000;\n\t}\n  \t#bottomRightPlayer {\n      \tmargin-bottom: 10px;\n    }\n    .margin-col .brVideoContainer,\n  \t.main-col .brVideoContainer {\n      \tmargin-top: 20px;\n  \t}\n}\n@media only screen and (min-width: 930px) {\n\t.brVideoContainer {\n  \t\tbottom: 5px;\n  \t\tright: 5px;\n  \t\twidth: 401px;\n  \t\theight: 225px;\n      \tposition: fixed;\n        border: none;\n      \toverflow: hidden;\n  \t\tz-index: 10000;\n\t}\n}\n\n.brVideoContainer .outer-wrapper {\n\tmargin: 0 auto;\n    max-width: 600px;\n  \ttop: 0px;\n  \tleft: 0px;\n  \twidth: 100%;\n  \theight: 100%;\n  \tborder: none;\n  \toverflow: hidden;\n  \tposition: relative;\n}\n\n#jw-standalone-close-button {\n  position: absolute;\n  top: 5%;\n  right: 3%;\n  display: inline;\n  z-index: 999999;\n  height: 20px;\n  width: 20px;\n}\n\u003C\/style\u003E\n\n\u003Cscript type=\"text\/gtmscript\"\u003E$(function(){0\u003C$(\"#drr-container\").length\u0026\u0026$(\"article .bodee #drr-container p:nth-of-type(4)\").after($(\".brVideoContainer\"));0\u003C$(\".main-col\").length\u0026\u0026$(\".main-col \\x3e div:nth-of-type(6)\").after($(\".brVideoContainer\"));0\u003C$(\".landing-listing\").length\u0026\u0026$(\".landing-listing \\x3e div:nth-of-type(6)\").after($(\".brVideoContainer\"));0\u003C$(\"body#search .search-results\").length\u0026\u0026$(\".search-results \\x3e div.river-well:nth-of-type(6)\").after($(\".brVideoContainer\"));0\u003C$(\".gsc-result\").length\u0026\u0026$(\".gsc-expansionArea \\x3e div.gsc-result:nth-of-type(6)\").after($(\".brVideoContainer\"))});\u003C\/script\u003E\n\n\u003Cscript data-gtmsrc=\"https:\/\/cdn.jwplayer.com\/libraries\/",["escape",["macro",124],3],".js\" type=\"text\/gtmscript\"\u003E\u003C\/script\u003E\n\u003Cscript type=\"text\/gtmscript\"\u003Econsent.ads.queue.push(function(){var a={dlm:googletag.pubads().getTargeting(\"dlm\"),fr:googletag.pubads().getTargeting(\"fr\"),grm:googletag.pubads().getTargeting(\"grm\"),vw:googletag.pubads().getTargeting(\"vw\"),URL:IDG.GPT.targets.URL,articleId:IDG.GPT.targets.articleId,blogId:IDG.GPT.targets.blogId,categoryIds:IDG.GPT.targets.categoryIds,categorySlugs:IDG.GPT.targets.categorySlugs,channel:IDG.GPT.targets.channel,env:IDG.GPT.targets.env,goldenIds:IDG.GPT.targets.goldenIds,pagetype:adLayer.itemType,\npermutive:localStorage.getItem(\"_pdfps\"),playertype:\"bottomRightPlayer\",pos:\"bottom_right\",positiondata:buildPositionData(\"bottom_right\"),sponsored:IDG.GPT.targets.sponsored,zone:IDG.GPT.targets.zone},b=\"https:\/\/pubads.g.doubleclick.net\/gampad\/ads?sz\\x3d640x480\\x26iu\\x3d\"+IDG.GPT.unitName+\"\\x26ciu_szs\\x3d300x250,728x90\\x26impl\\x3ds\\x26gdfp_req\\x3d1\\x26env\\x3dvp\\x26output\\x3dvast\\x26unviewed_position_start\\x3d1\\x26description_url\\x3dhttp%3A%2F%2Fwww.",["escape",["macro",125],7],"\\x26url\\x3d[referrer_url]\\x26correlator\\x3d[timestamp]\";\na=[{tag:b,offset:\"pre\",custParams:a}];jwplayer(\"bottomRightPlayer\").setup({playlist:\"https:\/\/cdn.jwplayer.com\/v2\/playlists\/",["escape",["macro",126],7],"?search\\x3d__CONTEXTUAL__\",advertising:{client:\"googima\",adscheduleid:\"rANd0m8x\",schedule:a}})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":45
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-cfasync=\"false\" data-gtmsrc=\"\/\/tribl.io\/footer.js?orgId=DoJGW2O912UGkvRezxvL\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":46
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003Evar script=document.createElement(\"script\");script.id=\"tbw_pixel\";script.type=\"text\/javascript\";script.setAttribute(\"tbw_site_id\",\"Lcb3bcf868a4f9798\");script.setAttribute(\"tbw_segment\",\"",["escape",["macro",128],7],"\");script.setAttribute(\"tbw_log\",\"1\");script.setAttribute(\"onload\",\"tbw_parse(document.getElementById('tbw_pixel'));\");script.src=\"\/\/d26x5ounzdjojj.cloudfront.net\/tbw\/tbw_analytics_v1.0.js?\"+(new Date).getHours();null!=document.body\u0026\u0026document.body.appendChild(script);\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":47
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":["template","\u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){var a=",["escape",["macro",129],8,16],";\"undefined\"===typeof a\u0026\u0026dataLayer.push({event:\"jwpReady\"})});\u003C\/script\u003E"],
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":48
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003Evar mobileField='input[name\\x3d\"leads[attrs][ed42c3c3-5323-477a-812e-2fc22a009435][value]\"]',phoneFiled='input[name\\x3d\"leads[attrs][8f4c41d2-5c95-48fa-af49-710aa1b5dc0e][value]\"]';\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":49
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\"\u003E(function(){var a=document.createElement(\"script\");a.async=!0;a.type=\"text\/javascript\";a.src=\"https:\/\/s.ntv.io\/js\/nativoIQ.js\";a.className=\"ntv-site-analytics\";a.setAttribute(\"ntv-brand-id\",\"184\");var b=document.getElementsByTagName(\"script\")[0];b.parentNode.insertBefore(a,b)})();\u003C\/script\u003E\n\n\u003Cstyle\u003E\n@media only screen and (min-width: 60.625em){\n  article.blog .cat-social.sponsored {\n      margin-right: auto;\n      margin-left: auto;\n  }\n}\n\u003C\/style\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":50
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_load":true,
      "vtp_html":"\u003Cscript type=\"text\/gtmscript\" data-cfasync=\"false\" data-gtmsrc=\"\/\/tribl.io\/h.js?orgId=DoJGW2O912UGkvRezxvL\"\u003E\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":52
    },{
      "function":"__html",
      "metadata":["map"],
      "once_per_event":true,
      "vtp_html":"\u003Cstyle type=\"text\/css\"\u003E\n\n.video-ad {margin-top:25px; margin-bottom:25px;}\n.video-ad p {font-size:10px;text-transform:uppercase;color:#aaa;text-align:center;}\n.video-ad .embed-wrap {border-top:1px solid #aaa; border-bottom:1px solid #aaa; padding: 25px 0;}\n\n\u003C\/style\u003E\n\n\n \u003Cscript type=\"text\/gtmscript\"\u003E$(document).ready(function(){$.getScript(\"https:\/\/cdn.jwplayer.com\/libraries\/UumzMDcZ.js\",function(d,e){\"success\"==e?($(\"#drr-container \\x3e *:nth-child(7)\").after('\\x3cdiv class\\x3d\"video-ad\"\\x3e\\x3cp\\x3eAdvertisement\\x3c\/p\\x3e\\x3cdiv class\\x3d\"embed-wrap\"\\x3e\\x3cdiv id\\x3d\"embedHPE-GTM\"\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e\\x3c\/div\\x3e '),jwplayer(\"embedHPE-GTM\").setup({playlist:\"https:\/\/cdn.jwplayer.com\/v2\/playlists\/ssJ6Bux2\"}),$.getScript(\"\/www\/js\/video\/player-jwp.js\",function(d,e){if(\"success\"==e)jwplayer(\"embedHPE-GTM\").on(\"ready\",\nfunction(){console.log(\"embedHPE ready\");var d=\"\",e=\"bcplayer-embed-HPE\",c=this;this.getPlaylistItem();var a=\"HPEAAS\";IDG.video.addAnalytics(a,c,d,e);c.on(\"adStarted\",function(){IDG.video.sendAnalytics(a,\"Ad Start\",\"\")});c.on(\"adComplete\",function(){IDG.video.sendAnalytics(a,\"Ad Complete\",\"\")});c.on(\"mute\",function(b){1==b.mute\u0026\u0026IDG.video.sendAnalytics(a,\"Volume Change\",\"Mute\");0==b.mute\u0026\u0026IDG.video.sendAnalytics(a,\"Volume Change\",\"Unmute\")});c.on(\"play\",function(b){\"interaction\"==b.playReason\u0026\u0026IDG.video.sendAnalytics(a,\n\"Play\",\"User Initiated\");\"autostart\"==b.playReason\u0026\u0026IDG.video.sendAnalytics(a,\"Play\",\"Autoplay\");\"viewable\"==b.playReason\u0026\u0026IDG.video.sendAnalytics(a,\"Play\",\"In View\")});c.on(\"pause\",function(b){\"interaction\"==b.pauseReason\u0026\u0026IDG.video.sendAnalytics(a,\"Pause\",\"User Initiated\");\"viewable\"==b.pauseReason\u0026\u0026IDG.video.sendAnalytics(a,\"Pause\",\"Out of View\")});c.on(\"time\",function(b){thisAnalytics=IDG.video.analytics[a];var c=b.position;b=b.duration;c=Math.round(c\/b*100)||0;Math.ceil((thisAnalytics.longestPct-\nc)\/100)||(thisAnalytics.longestPct=c)});$(window).on(\"beforeunload\",function(){var b=IDG.video.analytics[a].longestPct;switch(Math.floor(b\/25)){case 0:IDG.video.sendAnalytics(a,\"Watched\",\"less than 25%\");break;case 1:IDG.video.sendAnalytics(a,\"Watched\",\"25%\");break;case 2:IDG.video.sendAnalytics(a,\"Watched\",\"50%\");break;case 3:IDG.video.sendAnalytics(a,\"Watched\",\"75%\");break;case 4:IDG.video.sendAnalytics(a,\"Watched\",\"100%\")}})});else console.log(\"player-jwp getscript failed: \",d)})):console.log(\"jwplayer getscript failed: \",\nd)})});\u003C\/script\u003E",
      "vtp_supportDocumentWrite":false,
      "vtp_enableIframeMode":false,
      "vtp_enableEditJsMacroBehavior":false,
      "tag_id":53
    }],
  "predicates":[{
      "function":"_eq",
      "arg0":["macro",30],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"gtm.dom"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"^(moduleImpression|moduleClick|optimizeEvent|formSubmit)$"
    },{
      "function":"_re",
      "arg0":["macro",31],
      "arg1":"(externalLink|affiliateLink|socialLink|socialShare)"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"scEvent"
    },{
      "function":"_cn",
      "arg0":["macro",94],
      "arg1":"\/article\/"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"gtm.video"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)11064220_16($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"nonIdle"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"editBodyLink"
    },{
      "function":"_re",
      "arg0":["macro",98],
      "arg1":"cio.com|csoonline.com|computerworld.com|itnews.com|itworld.com|infoworld.com|networkworld.com|javaworld.com|techconnect.com|techhive.com|macworld.com|pcworld.com|greenbot.com"
    },{
      "function":"_css",
      "arg0":["macro",99],
      "arg1":"#drr-container a"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"gtm.linkClick"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)11064220_19($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"promoModuleLink"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"videoEvent"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"slidePage"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"Video Refresh"
    },{
      "function":"_eq",
      "arg0":["macro",37],
      "arg1":"us"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"gtm.js"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"Error"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"editionChange"
    },{
      "function":"_cn",
      "arg0":["macro",98],
      "arg1":".pdf"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)11064220_37($|,)))"
    },{
      "function":"_eq",
      "arg0":["macro",101],
      "arg1":"Scroll Depth"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"pushOnUnload"
    },{
      "function":"_eq",
      "arg0":["macro",94],
      "arg1":"\/"
    },{
      "function":"_re",
      "arg0":["macro",102],
      "arg1":"cio|computerworld",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"kickfire-api-error"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"kickfire-api-success"
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"4309|3443|3376|3255|3378|3374|3375|3712|3379|3377|3793|4791|3298|4774",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",46],
      "arg1":"cio|cso|computerworld|infoworld|network"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"gtm.load"
    },{
      "function":"_css",
      "arg0":["macro",99],
      "arg1":".techDeals a"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)11064220_105($|,)))"
    },{
      "function":"_css",
      "arg0":["macro",99],
      "arg1":".topDeals a"
    },{
      "function":"_re",
      "arg0":["macro",95],
      "arg1":"(^$|((^|,)11064220_106($|,)))"
    },{
      "function":"_re",
      "arg0":["macro",46],
      "arg1":"cio",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",54],
      "arg1":"0|1|2|3|4|5|6|7|8|9",
      "ignore_case":true
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"[\\D|\\s]222[\\D|\\s]|^222\\D|\\D222$|[\\D|\\s]478[\\D|\\s]|^478\\D|\\D478$|[\\D|\\s]480[\\D|\\s]|^480\\D|\\D480$|[\\D|\\s]625[\\D|\\s]|^625\\D|\\D625$|[\\D|\\s]91[\\D|\\s]|^91\\D|\\D91$|[\\D|\\s]20[\\D|\\s]|^20\\D|\\D20$|[\\D|\\s]527[\\D|\\s]|^527\\D|\\D527$|[\\D|\\s]530[\\D|\\s]|^530\\D|\\D530$|[\\D|\\s]676[\\D|\\s]|^676\\D|\\D676$|[\\D|\\s]510[\\D|\\s]|^510\\D|\\D510$|[\\D|\\s]910[\\D|\\s]|^910\\D|\\D910$|[\\D|\\s]514[\\D|\\s]|^514\\D|\\D514$|[\\D|\\s]134[\\D|\\s]|^134\\D|\\D134$|[\\D|\\s]330[\\D|\\s]|^330\\D|\\D330$|[\\D|\\s]790[\\D|\\s]|^790\\D|\\D790$|[\\D|\\s]938[\\D|\\s]|^938\\D|\\D938$|[\\D|\\s]646[\\D|\\s]|^646\\D|\\D646$|[\\D|\\s]450[\\D|\\s]|^450\\D|\\D450$|[\\D|\\s]937[\\D|\\s]|^937\\D|\\D937$|[\\D|\\s]936[\\D|\\s]|^936\\D|\\D936$|[\\D|\\s]334[\\D|\\s]|^334\\D|\\D334$|[\\D|\\s]911[\\D|\\s]|^911\\D|\\D911$|[\\D|\\s]123[\\D|\\s]|^123\\D|\\D123$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",87],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",36],
      "arg1":"home page"
    },{
      "function":"_eq",
      "arg0":["macro",117],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",88],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",118],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",26],
      "arg1":"[\\D|\\s]1102[\\D|\\s]|^1102\\D|\\D1102$|[\\D|\\s]84[\\D|\\s]|^84\\D|\\D84$|[\\D|\\s]222[\\D|\\s]|^222\\D|\\D222$|[\\D|\\s]478[\\D|\\s]|^478\\D|\\D478$|[\\D|\\s]480[\\D|\\s]|^480\\D|\\D480$|[\\D|\\s]625[\\D|\\s]|^625\\D|\\D625$|[\\D|\\s]78[\\D|\\s]|^78\\D|\\D78$|[\\D|\\s]91[\\D|\\s]|^91\\D|\\D91$|[\\D|\\s]20[\\D|\\s]|^20\\D|\\D20$|[\\D|\\s]44[\\D|\\s]|^44\\D|\\D44$|[\\D|\\s]169[\\D|\\s]|^169\\D|\\D169$|[\\D|\\s]527[\\D|\\s]|^527\\D|\\D527$|[\\D|\\s]530[\\D|\\s]|^530\\D|\\D530$|[\\D|\\s]472[\\D|\\s]|^472\\D|\\D472$|[\\D|\\s]765[\\D|\\s]|^765\\D|\\D765$|[\\D|\\s]626[\\D|\\s]|^626\\D|\\D626$|[\\D|\\s]676[\\D|\\s]|^676\\D|\\D676$|[\\D|\\s]510[\\D|\\s]|^510\\D|\\D510$|[\\D|\\s]910[\\D|\\s]|^910\\D|\\D910$|[\\D|\\s]266[\\D|\\s]|^266\\D|\\D266$|[\\D|\\s]514[\\D|\\s]|^514\\D|\\D514$|[\\D|\\s]134[\\D|\\s]|^134\\D|\\D134$|[\\D|\\s]108[\\D|\\s]|^108\\D|\\D108$|[\\D|\\s]994[\\D|\\s]|^994\\D|\\D994$|[\\D|\\s]330[\\D|\\s]|^330\\D|\\D330$|[\\D|\\s]790[\\D|\\s]|^790\\D|\\D790$|[\\D|\\s]938[\\D|\\s]|^938\\D|\\D938$|[\\D|\\s]646[\\D|\\s]|^646\\D|\\D646$|[\\D|\\s]796[\\D|\\s]|^796\\D|\\D796$|[\\D|\\s]235[\\D|\\s]|^235\\D|\\D235$|[\\D|\\s]1147[\\D|\\s]|^1147\\D|\\D1147$|[\\D|\\s]450[\\D|\\s]|^450\\D|\\D450$|[\\D|\\s]441[\\D|\\s]|^441\\D|\\D441$|[\\D|\\s]937[\\D|\\s]|^937\\D|\\D937$|[\\D|\\s]63[\\D|\\s]|^63\\D|\\D63$|[\\D|\\s]936[\\D|\\s]|^936\\D|\\D936$|[\\D|\\s]841[\\D|\\s]|^841\\D|\\D841$|[\\D|\\s]913[\\D|\\s]|^913\\D|\\D913$|[\\D|\\s]466[\\D|\\s]|^466\\D|\\D466$|[\\D|\\s]334[\\D|\\s]|^334\\D|\\D334$|[\\D|\\s]675[\\D|\\s]|^675\\D|\\D675$|[\\D|\\s]911[\\D|\\s]|^911\\D|\\D911$|[\\D|\\s]467[\\D|\\s]|^467\\D|\\D467$|[\\D|\\s]155[\\D|\\s]|^155\\D|\\D155$|[\\D|\\s]123[\\D|\\s]|^123\\D|\\D123$|[\\D|\\s]238[\\D|\\s]|^238\\D|\\D238$|[\\D|\\s]464[\\D|\\s]|^464\\D|\\D464$|[\\D|\\s]853[\\D|\\s]|^853\\D|\\D853$|[\\D|\\s]228[\\D|\\s]|^228\\D|\\D228$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",120],
      "arg1":"omit"
    },{
      "function":"_re",
      "arg0":["macro",121],
      "arg1":"^[A-Z0-9]*$",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"cntxReady"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"false"
    },{
      "function":"_eq",
      "arg0":["macro",122],
      "arg1":"omit"
    },{
      "function":"_cn",
      "arg0":["macro",94],
      "arg1":"\/resources"
    },{
      "function":"_cn",
      "arg0":["macro",36],
      "arg1":"video"
    },{
      "function":"_cn",
      "arg0":["macro",94],
      "arg1":"learn-about-insider"
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"jwpReady"
    },{
      "function":"_eq",
      "arg0":["macro",19],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",20],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",21],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",22],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",23],
      "arg1":"true"
    },{
      "function":"_re",
      "arg0":["macro",46],
      "arg1":"cio|computerworld|cso|infoworld|networkworld|macworld|pcworld|techhive|greenbot",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",31],
      "arg1":"consentKnown"
    },{
      "function":"_eq",
      "arg0":["macro",25],
      "arg1":"true"
    },{
      "function":"_eq",
      "arg0":["macro",125],
      "arg1":"omit"
    },{
      "function":"_eq",
      "arg0":["macro",45],
      "arg1":"staging"
    },{
      "function":"_re",
      "arg0":["macro",6],
      "arg1":"CIO’s Guide to IT “As-a-Service”|Key Understandings: Security and IT “As-a-Service”|ITaaS 101 for Enterprise IT Leaders|Understanding ITaaS and Application Development|ITaaS and Corporate Storage Technology",
      "ignore_case":true
    },{
      "function":"_eq",
      "arg0":["macro",46],
      "arg1":"computerworld"
    },{
      "function":"_eq",
      "arg0":["macro",66],
      "arg1":"true"
    }],
  "rules":[
    [["if",0,1],["add",7]],
    [["if",0,2],["add",8]],
    [["if",0,3],["add",9]],
    [["if",4],["add",10]],
    [["if",5,6,7],["add",11]],
    [["if",8],["add",12]],
    [["if",9],["add",13]],
    [["if",11,12,13],["unless",10],["add",14]],
    [["if",14],["add",15]],
    [["if",0,15],["add",16]],
    [["if",0,16],["add",17]],
    [["if",0,17],["add",17]],
    [["if",18,19],["add",18]],
    [["if",0,21],["add",19]],
    [["if",12,22,23],["add",20]],
    [["if",5,24,25],["add",21]],
    [["if",24,25,26,27],["add",21]],
    [["if",28],["add",22]],
    [["if",29],["add",23,57]],
    [["if",30,31,32],["add",24]],
    [["if",12,33,34],["add",25]],
    [["if",12,35,36],["add",26]],
    [["if",19,30,31],["add",27]],
    [["if",19,37,38],["add",27]],
    [["if",18,19,31,39],["add",28]],
    [["if",19],["add",29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,4,1,51,2,3,5,45,47,48,49]],
    [["if",19,40],["add",46,50],["block",0,54]],
    [["if",1,41],["add",52],["block",61]],
    [["if",1,5],["add",52]],
    [["if",5,19],["add",53]],
    [["if",1,5,18,42],["add",6]],
    [["if",18,19],["unless",46],["add",0]],
    [["if",5,18,19,47],["add",54]],
    [["if",48],["add",55]],
    [["if",18,32,49],["unless",40,50],["add",56]],
    [["if",54],["add",58]],
    [["if",55,56,57,58,59,60,61],["add",59,64]],
    [["if",55,57,59,60,61],["add",60]],
    [["if",1,18,49],["unless",40,63],["add",61]],
    [["if",19,51],["add",62]],
    [["if",19,65],["add",63]],
    [["if",18,19,31,45],["add",65],["block",6,0,54]],
    [["if",19,20],["block",18,4,1,0,54,2,3,5]],
    [["if",1,20],["block",52]],
    [["if",19,43],["block",6]],
    [["if",19,44],["block",6,0,54]],
    [["if",32,51],["block",56]],
    [["if",32,43],["block",56]],
    [["if",32,52],["block",56]],
    [["if",32,53],["block",56]],
    [["if",32,41],["block",56]],
    [["if",32,44],["block",56]],
    [["if",18,31,32,45],["block",56]],
    [["if",61,62],["block",59,60,64]],
    [["if",1,51],["block",61]],
    [["if",1,43],["block",61]],
    [["if",1,52],["block",61]],
    [["if",1,53],["block",61]],
    [["if",1,44],["block",61]],
    [["if",19,64],["block",62]],
    [["if",61],["unless",66],["block",64]],
    [["if",19,67],["block",65]],
    [["if",19,40],["unless",65],["block",65]]]
},
"runtime":[]




};
/*

 Copyright The Closure Library Authors.
 SPDX-License-Identifier: Apache-2.0
*/
var aa,ba="function"==typeof Object.create?Object.create:function(a){var b=function(){};b.prototype=a;return new b},ca;if("function"==typeof Object.setPrototypeOf)ca=Object.setPrototypeOf;else{var da;a:{var ea={ff:!0},fa={};try{fa.__proto__=ea;da=fa.ff;break a}catch(a){}da=!1}ca=da?function(a,b){a.__proto__=b;if(a.__proto__!==b)throw new TypeError(a+" is not extensible");return a}:null}var ia=ca,ja=this||self,la=/^[\w+/_-]+[=]{0,2}$/,ma=null;var pa=function(){},qa=function(a){return"function"==typeof a},g=function(a){return"string"==typeof a},ra=function(a){return"number"==typeof a&&!isNaN(a)},ua=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},q=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},va=function(a,b){if(a&&ua(a))for(var c=0;c<a.length;c++)if(a[c]&&b(a[c]))return a[c]},wa=function(a,b){if(!ra(a)||
!ra(b)||a>b)a=0,b=2147483647;return Math.floor(Math.random()*(b-a+1)+a)},ya=function(a,b){for(var c=new xa,d=0;d<a.length;d++)c.set(a[d],!0);for(var e=0;e<b.length;e++)if(c.get(b[e]))return!0;return!1},za=function(a,b){for(var c in a)Object.prototype.hasOwnProperty.call(a,c)&&b(c,a[c])},Aa=function(a){return Math.round(Number(a))||0},Ba=function(a){return"false"==String(a).toLowerCase()?!1:!!a},Da=function(a){var b=[];if(ua(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},Ea=function(a){return a?
a.replace(/^\s+|\s+$/g,""):""},Fa=function(){return(new Date).getTime()},xa=function(){this.prefix="gtm.";this.values={}};xa.prototype.set=function(a,b){this.values[this.prefix+a]=b};xa.prototype.get=function(a){return this.values[this.prefix+a]};
var Ga=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ha=function(a){var b=!1;return function(){if(!b)try{a()}catch(c){}b=!0}},Ia=function(a,b){for(var c in b)b.hasOwnProperty(c)&&(a[c]=b[c])},Ja=function(a){for(var b in a)if(a.hasOwnProperty(b))return!0;return!1},Ka=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},La=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c},Ma=function(a){var b=
[];za(a,function(c,d){10>c.length&&d&&b.push(c)});return b.join(",")},Na=function(a){for(var b=[],c=0;c<a.length;c++){var d=a.charCodeAt(c);128>d?b.push(d):2048>d?b.push(192|d>>6,128|d&63):55296>d||57344<=d?b.push(224|d>>12,128|d>>6&63,128|d&63):(d=65536+((d&1023)<<10|a.charCodeAt(++c)&1023),b.push(240|d>>18,128|d>>12&63,128|d>>6&63,128|d&63))}return new Uint8Array(b)};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var Oa=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,Pa=function(a){if(null==a)return String(a);var b=Oa.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Qa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},Ra=function(a){if(!a||"object"!=Pa(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Qa(a,"constructor")&&!Qa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Qa(a,b)},B=function(a,b){var c=b||("array"==Pa(a)?[]:{}),d;for(d in a)if(Qa(a,d)){var e=a[d];"array"==Pa(e)?("array"!=Pa(c[d])&&(c[d]=[]),c[d]=B(e,c[d])):Ra(e)?(Ra(c[d])||(c[d]={}),c[d]=B(e,c[d])):c[d]=e}return c};
var Sa=[],Ta={"\x00":"&#0;",'"':"&quot;","&":"&amp;","'":"&#39;","<":"&lt;",">":"&gt;","\t":"&#9;","\n":"&#10;","\x0B":"&#11;","\f":"&#12;","\r":"&#13;"," ":"&#32;","-":"&#45;","/":"&#47;","=":"&#61;","`":"&#96;","\u0085":"&#133;","\u00a0":"&#160;","\u2028":"&#8232;","\u2029":"&#8233;"},Ua=function(a){return Ta[a]},Va=/[\x00\x22\x26\x27\x3c\x3e]/g;Sa[3]=function(a){return String(a).replace(Va,Ua)};var bb=/[\x00\x08-\x0d\x22\x26\x27\/\x3c-\x3e\\\x85\u2028\u2029]/g,cb={"\x00":"\\x00","\b":"\\x08","\t":"\\t","\n":"\\n","\x0B":"\\x0b",
"\f":"\\f","\r":"\\r",'"':"\\x22","&":"\\x26","'":"\\x27","/":"\\/","<":"\\x3c","=":"\\x3d",">":"\\x3e","\\":"\\\\","\u0085":"\\x85","\u2028":"\\u2028","\u2029":"\\u2029",$:"\\x24","(":"\\x28",")":"\\x29","*":"\\x2a","+":"\\x2b",",":"\\x2c","-":"\\x2d",".":"\\x2e",":":"\\x3a","?":"\\x3f","[":"\\x5b","]":"\\x5d","^":"\\x5e","{":"\\x7b","|":"\\x7c","}":"\\x7d"},db=function(a){return cb[a]};Sa[7]=function(a){return String(a).replace(bb,db)};
Sa[8]=function(a){if(null==a)return" null ";switch(typeof a){case "boolean":case "number":return" "+a+" ";default:return"'"+String(String(a)).replace(bb,db)+"'"}};var mb=/[\x00- \x22\x27-\x29\x3c\x3e\\\x7b\x7d\x7f\x85\xa0\u2028\u2029\uff01\uff03\uff04\uff06-\uff0c\uff0f\uff1a\uff1b\uff1d\uff1f\uff20\uff3b\uff3d]/g,nb={"\x00":"%00","\u0001":"%01","\u0002":"%02","\u0003":"%03","\u0004":"%04","\u0005":"%05","\u0006":"%06","\u0007":"%07","\b":"%08","\t":"%09","\n":"%0A","\x0B":"%0B","\f":"%0C","\r":"%0D","\u000e":"%0E","\u000f":"%0F","\u0010":"%10",
"\u0011":"%11","\u0012":"%12","\u0013":"%13","\u0014":"%14","\u0015":"%15","\u0016":"%16","\u0017":"%17","\u0018":"%18","\u0019":"%19","\u001a":"%1A","\u001b":"%1B","\u001c":"%1C","\u001d":"%1D","\u001e":"%1E","\u001f":"%1F"," ":"%20",'"':"%22","'":"%27","(":"%28",")":"%29","<":"%3C",">":"%3E","\\":"%5C","{":"%7B","}":"%7D","\u007f":"%7F","\u0085":"%C2%85","\u00a0":"%C2%A0","\u2028":"%E2%80%A8","\u2029":"%E2%80%A9","\uff01":"%EF%BC%81","\uff03":"%EF%BC%83","\uff04":"%EF%BC%84","\uff06":"%EF%BC%86",
"\uff07":"%EF%BC%87","\uff08":"%EF%BC%88","\uff09":"%EF%BC%89","\uff0a":"%EF%BC%8A","\uff0b":"%EF%BC%8B","\uff0c":"%EF%BC%8C","\uff0f":"%EF%BC%8F","\uff1a":"%EF%BC%9A","\uff1b":"%EF%BC%9B","\uff1d":"%EF%BC%9D","\uff1f":"%EF%BC%9F","\uff20":"%EF%BC%A0","\uff3b":"%EF%BC%BB","\uff3d":"%EF%BC%BD"},ob=function(a){return nb[a]};Sa[16]=function(a){return a};var qb;
var rb=[],sb=[],tb=[],vb=[],wb=[],xb={},yb,zb,Ab,Bb=function(a,b){var c={};c["function"]="__"+a;for(var d in b)b.hasOwnProperty(d)&&(c["vtp_"+d]=b[d]);return c},Cb=function(a,b){var c=a["function"];if(!c)throw Error("Error: No function name given for function call.");var d=xb[c],e={},f;for(f in a)a.hasOwnProperty(f)&&0===f.indexOf("vtp_")&&(e[void 0!==d?f:f.substr(4)]=a[f]);return void 0!==d?d(e):qb(c,e,b)},Eb=function(a,b,c){c=c||[];var d={},e;for(e in a)a.hasOwnProperty(e)&&(d[e]=Db(a[e],b,c));
return d},Fb=function(a){var b=a["function"];if(!b)throw"Error: No function name given for function call.";var c=xb[b];return c?c.priorityOverride||0:0},Db=function(a,b,c){if(ua(a)){var d;switch(a[0]){case "function_id":return a[1];case "list":d=[];for(var e=1;e<a.length;e++)d.push(Db(a[e],b,c));return d;case "macro":var f=a[1];if(c[f])return;var h=rb[f];if(!h||b.Jc(h))return;c[f]=!0;try{var k=Eb(h,b,c);k.vtp_gtmEventId=b.id;d=Cb(k,b);Ab&&(d=Ab.Mf(d,k))}catch(y){b.ne&&b.ne(y,Number(f)),d=!1}c[f]=
!1;return d;case "map":d={};for(var l=1;l<a.length;l+=2)d[Db(a[l],b,c)]=Db(a[l+1],b,c);return d;case "template":d=[];for(var m=!1,n=1;n<a.length;n++){var r=Db(a[n],b,c);zb&&(m=m||r===zb.rb);d.push(r)}return zb&&m?zb.Pf(d):d.join("");case "escape":d=Db(a[1],b,c);if(zb&&ua(a[1])&&"macro"===a[1][0]&&zb.vg(a))return zb.Tg(d);d=String(d);for(var u=2;u<a.length;u++)Sa[a[u]]&&(d=Sa[a[u]](d));return d;case "tag":var p=a[1];if(!vb[p])throw Error("Unable to resolve tag reference "+p+".");return d={ae:a[2],
index:p};case "zb":var t={arg0:a[2],arg1:a[3],ignore_case:a[5]};t["function"]=a[1];var v=Hb(t,b,c),w=!!a[4];return w||2!==v?w!==(1===v):null;default:throw Error("Attempting to expand unknown Value type: "+a[0]+".");}}return a},Hb=function(a,b,c){try{return yb(Eb(a,b,c))}catch(d){JSON.stringify(a)}return 2};var Ib=function(){var a=function(b){return{toString:function(){return b}}};return{od:a("convert_case_to"),pd:a("convert_false_to"),qd:a("convert_null_to"),rd:a("convert_true_to"),sd:a("convert_undefined_to"),Fh:a("debug_mode_metadata"),qa:a("function"),Ne:a("instance_name"),Re:a("live_only"),Te:a("malware_disabled"),Ue:a("metadata"),Gh:a("original_vendor_template_id"),Xe:a("once_per_event"),Bd:a("once_per_load"),Gd:a("setup_tags"),Id:a("tag_id"),Jd:a("teardown_tags")}}();var Jb=null,Mb=function(a){function b(r){for(var u=0;u<r.length;u++)d[r[u]]=!0}var c=[],d=[];Jb=Kb(a);for(var e=0;e<sb.length;e++){var f=sb[e],h=Lb(f);if(h){for(var k=f.add||[],l=0;l<k.length;l++)c[k[l]]=!0;b(f.block||[])}else null===h&&b(f.block||[])}for(var m=[],n=0;n<vb.length;n++)c[n]&&!d[n]&&(m[n]=!0);return m},Lb=function(a){for(var b=a["if"]||[],c=0;c<b.length;c++){var d=Jb(b[c]);if(0===d)return!1;if(2===d)return null}for(var e=a.unless||[],f=0;f<e.length;f++){var h=Jb(e[f]);if(2===h)return null;
if(1===h)return!1}return!0},Kb=function(a){var b=[];return function(c){void 0===b[c]&&(b[c]=Hb(tb[c],a));return b[c]}};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var dc,ec=function(){};(function(){function a(k,l){k=k||"";l=l||{};for(var m in b)b.hasOwnProperty(m)&&(l.xf&&(l["fix_"+m]=!0),l.be=l.be||l["fix_"+m]);var n={comment:/^\x3c!--/,endTag:/^<\//,atomicTag:/^<\s*(script|style|noscript|iframe|textarea)[\s\/>]/i,startTag:/^</,chars:/^[^<]/},r={comment:function(){var p=k.indexOf("--\x3e");if(0<=p)return{content:k.substr(4,p),length:p+3}},endTag:function(){var p=k.match(d);if(p)return{tagName:p[1],length:p[0].length}},atomicTag:function(){var p=r.startTag();
if(p){var t=k.slice(p.length);if(t.match(new RegExp("</\\s*"+p.tagName+"\\s*>","i"))){var v=t.match(new RegExp("([\\s\\S]*?)</\\s*"+p.tagName+"\\s*>","i"));if(v)return{tagName:p.tagName,O:p.O,content:v[1],length:v[0].length+p.length}}}},startTag:function(){var p=k.match(c);if(p){var t={};p[2].replace(e,function(v,w,y,x,z){var C=y||x||z||f.test(w)&&w||null,A=document.createElement("div");A.innerHTML=C;t[w]=A.textContent||A.innerText||C});return{tagName:p[1],O:t,lb:!!p[3],length:p[0].length}}},chars:function(){var p=
k.indexOf("<");return{length:0<=p?p:k.length}}},u=function(){for(var p in n)if(n[p].test(k)){var t=r[p]();return t?(t.type=t.type||p,t.text=k.substr(0,t.length),k=k.slice(t.length),t):null}};l.be&&function(){var p=/^(AREA|BASE|BASEFONT|BR|COL|FRAME|HR|IMG|INPUT|ISINDEX|LINK|META|PARAM|EMBED)$/i,t=/^(COLGROUP|DD|DT|LI|OPTIONS|P|TD|TFOOT|TH|THEAD|TR)$/i,v=[];v.ke=function(){return this[this.length-1]};v.Lc=function(A){var E=this.ke();return E&&E.tagName&&E.tagName.toUpperCase()===A.toUpperCase()};v.Lf=
function(A){for(var E=0,J;J=this[E];E++)if(J.tagName===A)return!0;return!1};var w=function(A){A&&"startTag"===A.type&&(A.lb=p.test(A.tagName)||A.lb);return A},y=u,x=function(){k="</"+v.pop().tagName+">"+k},z={startTag:function(A){var E=A.tagName;"TR"===E.toUpperCase()&&v.Lc("TABLE")?(k="<TBODY>"+k,C()):l.Ph&&t.test(E)&&v.Lf(E)?v.Lc(E)?x():(k="</"+A.tagName+">"+k,C()):A.lb||v.push(A)},endTag:function(A){v.ke()?l.Zf&&!v.Lc(A.tagName)?x():v.pop():l.Zf&&(y(),C())}},C=function(){var A=k,E=w(y());k=A;if(E&&
z[E.type])z[E.type](E)};u=function(){C();return w(y())}}();return{append:function(p){k+=p},bh:u,Vh:function(p){for(var t;(t=u())&&(!p[t.type]||!1!==p[t.type](t)););},clear:function(){var p=k;k="";return p},Wh:function(){return k},stack:[]}}var b=function(){var k={},l=this.document.createElement("div");l.innerHTML="<P><I></P></I>";k.Yh="<P><I></P></I>"!==l.innerHTML;l.innerHTML="<P><i><P></P></i></P>";k.Xh=2===l.childNodes.length;return k}(),c=/^<([\-A-Za-z0-9_]+)((?:\s+[\w\-]+(?:\s*=?\s*(?:(?:"[^"]*")|(?:'[^']*')|[^>\s]+))?)*)\s*(\/?)>/,
d=/^<\/([\-A-Za-z0-9_]+)[^>]*>/,e=/([\-A-Za-z0-9_]+)(?:\s*=\s*(?:(?:"((?:\\.|[^"])*)")|(?:'((?:\\.|[^'])*)')|([^>\s]+)))?/g,f=/^(checked|compact|declare|defer|disabled|ismap|multiple|nohref|noresize|noshade|nowrap|readonly|selected)$/i;a.M=b;a.P=function(k){var l={comment:function(m){return"<--"+m.content+"--\x3e"},endTag:function(m){return"</"+m.tagName+">"},atomicTag:function(m){return l.startTag(m)+m.content+l.endTag(m)},startTag:function(m){var n="<"+m.tagName,r;for(r in m.O){var u=m.O[r];n+=
" "+r+'="'+(u?u.replace(/(^|[^\\])"/g,'$1\\"'):"")+'"'}return n+(m.lb?"/>":">")},chars:function(m){return m.text}};return l[k.type](k)};a.C=function(k){var l={},m;for(m in k){var n=k[m];l[m]=n&&n.replace(/(^|[^\\])"/g,'$1\\"')}return l};for(var h in b)a.h=a.h||!b[h]&&h;dc=a})();(function(){function a(){}function b(r){return void 0!==r&&null!==r}function c(r,u,p){var t,v=r&&r.length||0;for(t=0;t<v;t++)u.call(p,r[t],t)}function d(r,u,p){for(var t in r)r.hasOwnProperty(t)&&u.call(p,t,r[t])}function e(r,
u){d(u,function(p,t){r[p]=t});return r}function f(r,u){r=r||{};d(u,function(p,t){b(r[p])||(r[p]=t)});return r}function h(r){try{return m.call(r)}catch(p){var u=[];c(r,function(t){u.push(t)});return u}}var k={nf:a,pf:a,qf:a,rf:a,zf:a,Af:function(r){return r},done:a,error:function(r){throw r;},fh:!1},l=this;if(!l.postscribe){var m=Array.prototype.slice,n=function(){function r(p,t,v){var w="data-ps-"+t;if(2===arguments.length){var y=p.getAttribute(w);return b(y)?String(y):y}b(v)&&""!==v?p.setAttribute(w,
v):p.removeAttribute(w)}function u(p,t){var v=p.ownerDocument;e(this,{root:p,options:t,mb:v.defaultView||v.parentWindow,Fa:v,Tb:dc("",{xf:!0}),xc:[p],Uc:"",Vc:v.createElement(p.nodeName),ib:[],wa:[]});r(this.Vc,"proxyof",0)}u.prototype.write=function(){[].push.apply(this.wa,arguments);for(var p;!this.Gb&&this.wa.length;)p=this.wa.shift(),"function"===typeof p?this.Ff(p):this.gd(p)};u.prototype.Ff=function(p){var t={type:"function",value:p.name||p.toString()};this.Rc(t);p.call(this.mb,this.Fa);this.pe(t)};
u.prototype.gd=function(p){this.Tb.append(p);for(var t,v=[],w,y;(t=this.Tb.bh())&&!(w=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("script"):!1)&&!(y=t&&"tagName"in t?!!~t.tagName.toLowerCase().indexOf("style"):!1);)v.push(t);this.Ah(v);w&&this.fg(t);y&&this.gg(t)};u.prototype.Ah=function(p){var t=this.Cf(p);t.Ud&&(t.Hc=this.Uc+t.Ud,this.Uc+=t.Xg,this.Vc.innerHTML=t.Hc,this.xh())};u.prototype.Cf=function(p){var t=this.xc.length,v=[],w=[],y=[];c(p,function(x){v.push(x.text);if(x.O){if(!/^noscript$/i.test(x.tagName)){var z=
t++;w.push(x.text.replace(/(\/?>)/," data-ps-id="+z+" $1"));"ps-script"!==x.O.id&&"ps-style"!==x.O.id&&y.push("atomicTag"===x.type?"":"<"+x.tagName+" data-ps-proxyof="+z+(x.lb?" />":">"))}}else w.push(x.text),y.push("endTag"===x.type?x.text:"")});return{Zh:p,raw:v.join(""),Ud:w.join(""),Xg:y.join("")}};u.prototype.xh=function(){for(var p,t=[this.Vc];b(p=t.shift());){var v=1===p.nodeType;if(!v||!r(p,"proxyof")){v&&(this.xc[r(p,"id")]=p,r(p,"id",null));var w=p.parentNode&&r(p.parentNode,"proxyof");
w&&this.xc[w].appendChild(p)}t.unshift.apply(t,h(p.childNodes))}};u.prototype.fg=function(p){var t=this.Tb.clear();t&&this.wa.unshift(t);p.src=p.O.src||p.O.Hh;p.src&&this.ib.length?this.Gb=p:this.Rc(p);var v=this;this.zh(p,function(){v.pe(p)})};u.prototype.gg=function(p){var t=this.Tb.clear();t&&this.wa.unshift(t);p.type=p.O.type||p.O.Jh||"text/css";this.Bh(p);t&&this.write()};u.prototype.Bh=function(p){var t=this.Ef(p);this.rg(t);p.content&&(t.styleSheet&&!t.sheet?t.styleSheet.cssText=p.content:
t.appendChild(this.Fa.createTextNode(p.content)))};u.prototype.Ef=function(p){var t=this.Fa.createElement(p.tagName);t.setAttribute("type",p.type);d(p.O,function(v,w){t.setAttribute(v,w)});return t};u.prototype.rg=function(p){this.gd('<span id="ps-style"/>');var t=this.Fa.getElementById("ps-style");t.parentNode.replaceChild(p,t)};u.prototype.Rc=function(p){p.Mg=this.wa;this.wa=[];this.ib.unshift(p)};u.prototype.pe=function(p){p!==this.ib[0]?this.options.error({message:"Bad script nesting or script finished twice"}):
(this.ib.shift(),this.write.apply(this,p.Mg),!this.ib.length&&this.Gb&&(this.Rc(this.Gb),this.Gb=null))};u.prototype.zh=function(p,t){var v=this.Df(p),w=this.mh(v),y=this.options.nf;p.src&&(v.src=p.src,this.kh(v,w?y:function(){t();y()}));try{this.qg(v),p.src&&!w||t()}catch(x){this.options.error(x),t()}};u.prototype.Df=function(p){var t=this.Fa.createElement(p.tagName);d(p.O,function(v,w){t.setAttribute(v,w)});p.content&&(t.text=p.content);return t};u.prototype.qg=function(p){this.gd('<span id="ps-script"/>');
var t=this.Fa.getElementById("ps-script");t.parentNode.replaceChild(p,t)};u.prototype.kh=function(p,t){function v(){p=p.onload=p.onreadystatechange=p.onerror=null}var w=this.options.error;e(p,{onload:function(){v();t()},onreadystatechange:function(){/^(loaded|complete)$/.test(p.readyState)&&(v(),t())},onerror:function(){var y={message:"remote script failed "+p.src};v();w(y);t()}})};u.prototype.mh=function(p){return!/^script$/i.test(p.nodeName)||!!(this.options.fh&&p.src&&p.hasAttribute("async"))};
return u}();l.postscribe=function(){function r(){var w=t.shift(),y;w&&(y=w[w.length-1],y.pf(),w.stream=u.apply(null,w),y.qf())}function u(w,y,x){function z(J){J=x.Af(J);v.write(J);x.rf(J)}v=new n(w,x);v.id=p++;v.name=x.name||v.id;var C=w.ownerDocument,A={close:C.close,open:C.open,write:C.write,writeln:C.writeln};e(C,{close:a,open:a,write:function(){return z(h(arguments).join(""))},writeln:function(){return z(h(arguments).join("")+"\n")}});var E=v.mb.onerror||a;v.mb.onerror=function(J,M,V){x.error({Sh:J+
" - "+M+":"+V});E.apply(v.mb,arguments)};v.write(y,function(){e(C,A);v.mb.onerror=E;x.done();v=null;r()});return v}var p=0,t=[],v=null;return e(function(w,y,x){"function"===typeof x&&(x={done:x});x=f(x,k);w=/^#/.test(w)?l.document.getElementById(w.substr(1)):w.Rh?w[0]:w;var z=[w,y,x];w.Sg={cancel:function(){z.stream?z.stream.abort():z[1]=a}};x.zf(z);t.push(z);v||r();return w.Sg},{streams:{},Uh:t,Kh:n})}();ec=l.postscribe}})();var D=window,F=document,fc=navigator,gc=F.currentScript&&F.currentScript.src,hc=function(a,b){var c=D[a];D[a]=void 0===c?b:c;return D[a]},ic=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},jc=function(a,b,c){var d=F.createElement("script");d.type="text/javascript";d.async=!0;d.src=a;ic(d,b);c&&(d.onerror=c);var e;if(null===ma)b:{var f=ja.document,h=f.querySelector&&f.querySelector("script[nonce]");
if(h){var k=h.nonce||h.getAttribute("nonce");if(k&&la.test(k)){ma=k;break b}}ma=""}e=ma;e&&d.setAttribute("nonce",e);var l=F.getElementsByTagName("script")[0]||F.body||F.head;l.parentNode.insertBefore(d,l);return d},kc=function(){if(gc){var a=gc.toLowerCase();if(0===a.indexOf("https://"))return 2;if(0===a.indexOf("http://"))return 3}return 1},lc=function(a,b){var c=F.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";var d=F.body&&F.body.lastChild||
F.body||F.head;d.parentNode.insertBefore(c,d);ic(c,b);void 0!==a&&(c.src=a);return c},mc=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a;return d},nc=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},pc=function(a,b,c){a.removeEventListener?a.removeEventListener(b,c,!1):a.detachEvent&&a.detachEvent("on"+b,c)},G=function(a){D.setTimeout(a,0)},qc=function(a,b){return a&&
b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},rc=function(a){var b=a.innerText||a.textContent||"";b&&" "!=b&&(b=b.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));b&&(b=b.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));return b},sc=function(a){var b=F.createElement("div");b.innerHTML="A<div>"+a+"</div>";b=b.lastChild;for(var c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},tc=function(a,b,c){c=c||100;for(var d={},e=0;e<b.length;e++)d[b[e]]=!0;for(var f=a,h=0;f&&h<=c;h++){if(d[String(f.tagName).toLowerCase()])return f;
f=f.parentElement}return null},uc=function(a,b){var c=a[b];c&&"string"===typeof c.animVal&&(c=c.animVal);return c};var wc=function(a){return vc?F.querySelectorAll(a):null},xc=function(a,b){if(!vc)return null;if(Element.prototype.closest)try{return a.closest(b)}catch(e){return null}var c=Element.prototype.matches||Element.prototype.webkitMatchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector,d=a;if(!F.documentElement.contains(d))return null;do{try{if(c.call(d,b))return d}catch(e){break}d=d.parentElement||d.parentNode}while(null!==d&&1===d.nodeType);
return null},yc=!1;if(F.querySelectorAll)try{var zc=F.querySelectorAll(":root");zc&&1==zc.length&&zc[0]==F.documentElement&&(yc=!0)}catch(a){}var vc=yc;var H={oa:"_ee",jc:"event_callback",qb:"event_timeout",D:"gtag.config",X:"allow_ad_personalization_signals",kc:"restricted_data_processing",ob:"allow_google_signals",Y:"cookie_expires",pb:"cookie_update",Na:"session_duration",ca:"user_properties"};
H.Zd=[H.X,H.ob,H.pb];H.ee=[H.Y,H.qb,H.Na];var Pc=/[A-Z]+/,Qc=/\s/,Rc=function(a){if(g(a)&&(a=Ea(a),!Qc.test(a))){var b=a.indexOf("-");if(!(0>b)){var c=a.substring(0,b);if(Pc.test(c)){for(var d=a.substring(b+1).split("/"),e=0;e<d.length;e++)if(!d[e])return;return{id:a,prefix:c,containerId:c+"-"+d[0],o:d}}}}},Tc=function(a){for(var b={},c=0;c<a.length;++c){var d=Rc(a[c]);d&&(b[d.id]=d)}Sc(b);var e=[];za(b,function(f,h){e.push(h)});return e};
function Sc(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];"AW"===d.prefix&&d.o[1]&&b.push(d.containerId)}for(var e=0;e<b.length;++e)delete a[b[e]]};var Uc={},Vc=null,Wc=Math.random();Uc.s="GTM-WR6LD2P";Uc.vb="1m0";var Xc={__cl:!0,__ecl:!0,__ehl:!0,__evl:!0,__fal:!0,__fil:!0,__fsl:!0,__hl:!0,__jel:!0,__lcl:!0,__sdl:!0,__tl:!0,__ytl:!0,__paused:!0,__tg:!0},Yc="www.googletagmanager.com/gtm.js";var Zc=Yc,$c=null,bd=null,cd=null,dd="//www.googletagmanager.com/a?id="+Uc.s+"&cv=59",ed={},fd={},gd=function(){var a=Vc.sequence||0;Vc.sequence=a+1;return a};var hd={},I=function(a,b){hd[a]=hd[a]||[];hd[a][b]=!0},id=function(a){for(var b=[],c=hd[a]||[],d=0;d<c.length;d++)c[d]&&(b[Math.floor(d/6)]^=1<<d%6);for(var e=0;e<b.length;e++)b[e]="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_".charAt(b[e]||0);return b.join("")};
var jd=function(){return"&tc="+vb.filter(function(a){return a}).length},md=function(){kd||(kd=D.setTimeout(ld,500))},ld=function(){kd&&(D.clearTimeout(kd),kd=void 0);void 0===nd||od[nd]&&!pd&&!qd||(rd[nd]||sd.xg()||0>=td--?(I("GTM",1),rd[nd]=!0):(sd.dh(),mc(ud()),od[nd]=!0,vd=wd=qd=pd=""))},ud=function(){var a=nd;if(void 0===a)return"";var b=id("GTM"),c=id("TAGGING");return[xd,od[a]?"":"&es=1",yd[a],b?"&u="+b:"",c?"&ut="+c:"",jd(),pd,qd,wd,vd,"&z=0"].join("")},zd=function(){return[dd,"&v=3&t=t","&pid="+
wa(),"&rv="+Uc.vb].join("")},Ad="0.005000">Math.random(),xd=zd(),Bd=function(){xd=zd()},od={},pd="",qd="",vd="",wd="",nd=void 0,yd={},rd={},kd=void 0,sd=function(a,b){var c=0,d=0;return{xg:function(){if(c<a)return!1;Fa()-d>=b&&(c=0);return c>=a},dh:function(){Fa()-d>=b&&(c=0);c++;d=Fa()}}}(2,1E3),td=1E3,Cd=function(a,b){if(Ad&&!rd[a]&&nd!==a){ld();nd=a;vd=pd="";var c;c=0===b.indexOf("gtm.")?encodeURIComponent(b):"*";yd[a]="&e="+c+"&eid="+a;md()}},Dd=function(a,b,c){if(Ad&&!rd[a]&&
b){a!==nd&&(ld(),nd=a);var d,e=String(b[Ib.qa]||"").replace(/_/g,"");0===e.indexOf("cvt")&&(e="cvt");d=e;var f=c+d;pd=pd?pd+"."+f:"&tr="+f;md();2022<=ud().length&&ld()}},Ed=function(a,b,c){if(Ad&&!rd[a]){a!==nd&&(ld(),nd=a);var d=c+b;qd=qd?qd+
"."+d:"&epr="+d;md();2022<=ud().length&&ld()}};var Fd={},Gd=new xa,Hd={},Id={},Ld={name:"dataLayer",set:function(a,b){B(La(a,b),Hd);Jd()},get:function(a){return Kd(a,2)},reset:function(){Gd=new xa;Hd={};Jd()}},Kd=function(a,b){if(2!=b){var c=Gd.get(a);if(Ad){var d=Md(a);c!==d&&I("GTM",5)}return c}return Md(a)},Md=function(a,b,c){var d=a.split("."),e=!1,f=void 0;return e?f:Od(d)},Od=function(a){for(var b=Hd,c=0;c<a.length;c++){if(null===b)return!1;if(void 0===b)break;b=b[a[c]]}return b};
var Qd=function(a,b){Id.hasOwnProperty(a)||(Gd.set(a,b),B(La(a,b),Hd),Jd())},Jd=function(a){za(Id,function(b,c){Gd.set(b,c);B(La(b,void 0),Hd);B(La(b,c),Hd);a&&delete Id[b]})},Rd=function(a,b,c){Fd[a]=Fd[a]||{};var d=1!==c?Md(b):Gd.get(b);"array"===Pa(d)||"object"===Pa(d)?Fd[a][b]=B(d):Fd[a][b]=d},Sd=function(a,b){if(Fd[a])return Fd[a][b]},Td=function(a,b){Fd[a]&&delete Fd[a][b]};var Ud=function(){var a=!1;return a};var Q=function(a,b,c,d){return(2===Vd()||d||"http:"!=D.location.protocol?a:b)+c},Vd=function(){var a=kc(),b;if(1===a)a:{var c=Zc;c=c.toLowerCase();for(var d="https://"+c,e="http://"+c,f=1,h=F.getElementsByTagName("script"),k=0;k<h.length&&100>k;k++){var l=h[k].src;if(l){l=l.toLowerCase();if(0===l.indexOf(e)){b=3;break a}1===f&&0===l.indexOf(d)&&(f=2)}}b=f}else b=a;return b};var je=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ke={cl:["ecl"],customPixels:["nonGooglePixels"],ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},le={cl:["ecl"],customPixels:["customScripts","html"],
ecl:["cl"],ehl:["hl"],hl:["ehl"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels","customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},me="google customPixels customScripts html nonGooglePixels nonGoogleScripts nonGoogleIframes".split(" ");
var oe=function(a){var b=Kd("gtm.whitelist");b&&I("GTM",9);var c=b&&Ka(Da(b),ke),d=Kd("gtm.blacklist");d||(d=Kd("tagTypeBlacklist"))&&I("GTM",3);d?
I("GTM",8):d=[];ne()&&(d=Da(d),d.push("nonGooglePixels","nonGoogleScripts","sandboxedScripts"));0<=q(Da(d),"google")&&I("GTM",2);var e=d&&Ka(Da(d),le),f={};return function(h){var k=h&&h[Ib.qa];if(!k||"string"!=typeof k)return!0;k=k.replace(/^_*/,"");if(void 0!==f[k])return f[k];var l=fd[k]||[],m=a(k,l);if(b){var n;if(n=m)a:{if(0>q(c,k))if(l&&0<l.length)for(var r=0;r<
l.length;r++){if(0>q(c,l[r])){I("GTM",11);n=!1;break a}}else{n=!1;break a}n=!0}m=n}var u=!1;if(d){var p=0<=q(e,k);if(p)u=p;else{var t=ya(e,l||[]);t&&I("GTM",10);u=t}}var v=!m||u;v||!(0<=q(l,"sandboxedScripts"))||c&&-1!==q(c,"sandboxedScripts")||(v=ya(e,me));return f[k]=v}},ne=function(){return je.test(D.location&&D.location.hostname)};var pe={Mf:function(a,b){b[Ib.od]&&"string"===typeof a&&(a=1==b[Ib.od]?a.toLowerCase():a.toUpperCase());b.hasOwnProperty(Ib.qd)&&null===a&&(a=b[Ib.qd]);b.hasOwnProperty(Ib.sd)&&void 0===a&&(a=b[Ib.sd]);b.hasOwnProperty(Ib.rd)&&!0===a&&(a=b[Ib.rd]);b.hasOwnProperty(Ib.pd)&&!1===a&&(a=b[Ib.pd]);return a}};var qe={active:!0,isWhitelisted:function(){return!0}},re=function(a){var b=Vc.zones;!b&&a&&(b=Vc.zones=a());return b};var se=function(){};var te=!1,ue=0,ve=[];function we(a){if(!te){var b=F.createEventObject,c="complete"==F.readyState,d="interactive"==F.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){te=!0;for(var e=0;e<ve.length;e++)G(ve[e])}ve.push=function(){for(var f=0;f<arguments.length;f++)G(arguments[f]);return 0}}}function xe(){if(!te&&140>ue){ue++;try{F.documentElement.doScroll("left"),we()}catch(a){D.setTimeout(xe,50)}}}var ye=function(a){te?a():ve.push(a)};var ze={},Ae={},Be=function(a,b,c,d){if(!Ae[a]||Xc[b]||"__zone"===b)return-1;var e={};Ra(d)&&(e=B(d,e));e.id=c;e.status="timeout";return Ae[a].tags.push(e)-1},Ce=function(a,b,c,d){if(Ae[a]){var e=Ae[a].tags[b];e&&(e.status=c,e.executionTime=d)}};function De(a){for(var b=ze[a]||[],c=0;c<b.length;c++)b[c]();ze[a]={push:function(d){d(Uc.s,Ae[a])}}}
var Ge=function(a,b,c){Ae[a]={tags:[]};qa(b)&&Ee(a,b);c&&D.setTimeout(function(){return De(a)},Number(c));return Fe(a)},Ee=function(a,b){ze[a]=ze[a]||[];ze[a].push(Ha(function(){return G(function(){b(Uc.s,Ae[a])})}))};function Fe(a){var b=0,c=0,d=!1;return{add:function(){c++;return Ha(function(){b++;d&&b>=c&&De(a)})},vf:function(){d=!0;b>=c&&De(a)}}};var He=function(){function a(d){return!ra(d)||0>d?0:d}if(!Vc._li&&D.performance&&D.performance.timing){var b=D.performance.timing.navigationStart,c=ra(Ld.get("gtm.start"))?Ld.get("gtm.start"):0;Vc._li={cst:a(c-b),cbt:a(bd-b)}}};var Le=!1,Me=function(){return D.GoogleAnalyticsObject&&D[D.GoogleAnalyticsObject]},Ne=!1;
var Oe=function(a){D.GoogleAnalyticsObject||(D.GoogleAnalyticsObject=a||"ga");var b=D.GoogleAnalyticsObject;if(D[b])D.hasOwnProperty(b)||I("GTM",12);else{var c=function(){c.q=c.q||[];c.q.push(arguments)};c.l=Number(new Date);D[b]=c}He();return D[b]},Pe=function(a,b,c,d){b=String(b).replace(/\s+/g,"").split(",");var e=Me();e(a+"require","linker");e(a+"linker:autoLink",b,c,d)};
var Re=function(){},Qe=function(){return D.GoogleAnalyticsObject||"ga"};var Te=/^(?:(?:https?|mailto|ftp):|[^:/?#]*(?:[/?#]|$))/i;var Ue=/:[0-9]+$/,Ve=function(a,b,c){for(var d=a.split("&"),e=0;e<d.length;e++){var f=d[e].split("=");if(decodeURIComponent(f[0]).replace(/\+/g," ")===b){var h=f.slice(1).join("=");return c?h:decodeURIComponent(h).replace(/\+/g," ")}}},Ye=function(a,b,c,d,e){b&&(b=String(b).toLowerCase());if("protocol"===b||"port"===b)a.protocol=We(a.protocol)||We(D.location.protocol);"port"===b?a.port=String(Number(a.hostname?a.port:D.location.port)||("http"==a.protocol?80:"https"==a.protocol?443:"")):"host"===b&&
(a.hostname=(a.hostname||D.location.hostname).replace(Ue,"").toLowerCase());var f=b,h,k=We(a.protocol);f&&(f=String(f).toLowerCase());switch(f){case "url_no_fragment":h=Xe(a);break;case "protocol":h=k;break;case "host":h=a.hostname.replace(Ue,"").toLowerCase();if(c){var l=/^www\d*\./.exec(h);l&&l[0]&&(h=h.substr(l[0].length))}break;case "port":h=String(Number(a.port)||("http"==k?80:"https"==k?443:""));break;case "path":a.pathname||a.hostname||I("TAGGING",1);h="/"==a.pathname.substr(0,1)?a.pathname:
"/"+a.pathname;var m=h.split("/");0<=q(d||[],m[m.length-1])&&(m[m.length-1]="");h=m.join("/");break;case "query":h=a.search.replace("?","");e&&(h=Ve(h,e,void 0));break;case "extension":var n=a.pathname.split(".");h=1<n.length?n[n.length-1]:"";h=h.split("/")[0];break;case "fragment":h=a.hash.replace("#","");break;default:h=a&&a.href}return h},We=function(a){return a?a.replace(":","").toLowerCase():""},Xe=function(a){var b="";if(a&&a.href){var c=a.href.indexOf("#");b=0>c?a.href:a.href.substr(0,c)}return b},
Ze=function(a){var b=F.createElement("a");a&&(b.href=a);var c=b.pathname;"/"!==c[0]&&(a||I("TAGGING",1),c="/"+c);var d=b.hostname.replace(Ue,"");return{href:b.href,protocol:b.protocol,host:b.host,hostname:d,pathname:c,search:b.search,hash:b.hash,port:b.port}};function df(a,b,c,d){var e=vb[a],f=ef(a,b,c,d);if(!f)return null;var h=Db(e[Ib.Gd],c,[]);if(h&&h.length){var k=h[0];f=df(k.index,{B:f,w:1===k.ae?b.terminate:f,terminate:b.terminate},c,d)}return f}
function ef(a,b,c,d){function e(){if(f[Ib.Te])k();else{var w=Eb(f,c,[]),y=Be(c.id,String(f[Ib.qa]),Number(f[Ib.Id]),w[Ib.Ue]),x=!1;w.vtp_gtmOnSuccess=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"5");Ce(c.id,y,"success",A);h()}};w.vtp_gtmOnFailure=function(){if(!x){x=!0;var A=Fa()-C;Dd(c.id,vb[a],"6");Ce(c.id,y,"failure",A);k()}};w.vtp_gtmTagId=f.tag_id;
w.vtp_gtmEventId=c.id;Dd(c.id,f,"1");var z=function(){var A=Fa()-C;Dd(c.id,f,"7");Ce(c.id,y,"exception",A);x||(x=!0,k())};var C=Fa();try{Cb(w,c)}catch(A){z(A)}}}var f=vb[a],h=b.B,k=b.w,l=b.terminate;if(c.Jc(f))return null;var m=Db(f[Ib.Jd],c,[]);if(m&&m.length){var n=m[0],r=df(n.index,{B:h,w:k,terminate:l},c,d);if(!r)return null;h=r;k=2===n.ae?l:r}if(f[Ib.Bd]||f[Ib.Xe]){var u=f[Ib.Bd]?wb:c.nh,p=h,t=k;if(!u[a]){e=Ha(e);var v=ff(a,u,e);h=v.B;k=v.w}return function(){u[a](p,t)}}return e}
function ff(a,b,c){var d=[],e=[];b[a]=gf(d,e,c);return{B:function(){b[a]=hf;for(var f=0;f<d.length;f++)d[f]()},w:function(){b[a]=jf;for(var f=0;f<e.length;f++)e[f]()}}}function gf(a,b,c){return function(d,e){a.push(d);b.push(e);c()}}function hf(a){a()}function jf(a,b){b()};var mf=function(a,b){for(var c=[],d=0;d<vb.length;d++)if(a.gb[d]){var e=vb[d];var f=b.add();try{var h=df(d,{B:f,w:f,terminate:f},a,d);h?c.push({Ae:d,ve:Fb(e),Yf:h}):(kf(d,a),f())}catch(l){f()}}b.vf();c.sort(lf);for(var k=0;k<c.length;k++)c[k].Yf();return 0<c.length};function lf(a,b){var c,d=b.ve,e=a.ve;c=d>e?1:d<e?-1:0;var f;if(0!==c)f=c;else{var h=a.Ae,k=b.Ae;f=h>k?1:h<k?-1:0}return f}
function kf(a,b){if(!Ad)return;var c=function(d){var e=b.Jc(vb[d])?"3":"4",f=Db(vb[d][Ib.Gd],b,[]);f&&f.length&&c(f[0].index);Dd(b.id,vb[d],e);var h=Db(vb[d][Ib.Jd],b,[]);h&&h.length&&c(h[0].index)};c(a);}
var nf=!1,of=function(a,b,c,d,e){if("gtm.js"==b){if(nf)return!1;nf=!0}Cd(a,b);var f=Ge(a,d,e);Rd(a,"event",1);Rd(a,"ecommerce",1);Rd(a,"gtm");var h={id:a,name:b,Jc:oe(c),gb:[],nh:[],ne:function(){I("GTM",6)}};h.gb=Mb(h);var k=mf(h,f);if(!k)return k;for(var l=0;l<h.gb.length;l++)if(h.gb[l]){var m=vb[l];if(m&&!Xc[String(m[Ib.qa])])return!0}return!1};var qf=/^https?:\/\/www\.googletagmanager\.com/;function rf(){var a;return a}function tf(a,b){}
function sf(a){0!==a.indexOf("http://")&&0!==a.indexOf("https://")&&(a="https://"+a);"/"===a[a.length-1]&&(a=a.substring(0,a.length-1));return a}function uf(){var a=!1;return a};var vf=function(){this.eventModel={};this.targetConfig={};this.containerConfig={};this.h={};this.globalConfig={};this.B=function(){};this.w=function(){}},wf=function(a){var b=new vf;b.eventModel=a;return b},xf=function(a,b){a.targetConfig=b;return a},yf=function(a,b){a.containerConfig=b;return a},zf=function(a,b){a.h=b;return a},Af=function(a,b){a.globalConfig=b;return a},Bf=function(a,b){a.B=b;return a},Cf=function(a,b){a.w=b;return a};
vf.prototype.getWithConfig=function(a){if(void 0!==this.eventModel[a])return this.eventModel[a];if(void 0!==this.targetConfig[a])return this.targetConfig[a];if(void 0!==this.containerConfig[a])return this.containerConfig[a];if(void 0!==this.h[a])return this.h[a];if(void 0!==this.globalConfig[a])return this.globalConfig[a]};
var Df=function(a){function b(e){za(e,function(f){c[f]=null})}var c={};b(a.eventModel);b(a.targetConfig);b(a.containerConfig);b(a.globalConfig);var d=[];za(c,function(e){d.push(e)});return d};var Ef={},Ff=["G"];Ef.Be="";var Gf=Ef.Be.split(",");function Hf(){var a=Vc;return a.gcq=a.gcq||new If}
var Jf=function(a,b,c){Hf().register(a,b,c)},Kf=function(a,b,c,d){Hf().push("event",[b,a],c,d)},Lf=function(a,b){Hf().push("config",[a],b)},Mf={},Nf=function(){this.status=1;this.containerConfig={};this.targetConfig={};this.i={};this.m=null;this.h=!1},Of=function(a,b,c,d,e){this.type=a;this.m=b;this.N=c||"";this.h=d;this.i=e},If=function(){this.i={};this.m={};this.h=[]},Pf=function(a,b){var c=Rc(b);return a.i[c.containerId]=a.i[c.containerId]||new Nf},Qf=function(a,b,c,d){if(d.N){var e=Pf(a,d.N),
f=e.m;if(f){var h=B(c),k=B(e.targetConfig[d.N]),l=B(e.containerConfig),m=B(e.i),n=B(a.m),r=Kd("gtm.uniqueEventId"),u=Rc(d.N).prefix,p=Cf(Bf(Af(zf(yf(xf(wf(h),k),l),m),n),function(){Ed(r,u,"2");}),function(){Ed(r,u,"3");});try{Ed(r,u,"1");f(d.N,b,d.m,p)}catch(t){
Ed(r,u,"4");}}}};
If.prototype.register=function(a,b,c){if(3!==Pf(this,a).status){Pf(this,a).m=b;Pf(this,a).status=3;c&&(Pf(this,a).i=c);var d=Rc(a),e=Mf[d.containerId];if(void 0!==e){var f=Vc[d.containerId].bootstrap,h=d.prefix.toUpperCase();Vc[d.containerId]._spx&&(h=h.toLowerCase());var k=Kd("gtm.uniqueEventId"),l=h,m=Fa()-f;if(Ad&&!rd[k]){k!==nd&&(ld(),nd=k);var n=l+"."+Math.floor(f-e)+"."+Math.floor(m);wd=wd?wd+","+n:"&cl="+n}delete Mf[d.containerId]}this.flush()}};
If.prototype.push=function(a,b,c,d){var e=Math.floor(Fa()/1E3);if(c){var f=Rc(c),h;if(h=f){var k;if(k=1===Pf(this,c).status)a:{var l=f.prefix;k=!0}h=k}if(h&&(Pf(this,c).status=2,this.push("require",[],f.containerId),Mf[f.containerId]=Fa(),!Ud())){var m=encodeURIComponent(f.containerId),n=("http:"!=D.location.protocol?"https:":"http:")+
"//www.googletagmanager.com";jc(n+"/gtag/js?id="+m+"&l=dataLayer&cx=c")}}this.h.push(new Of(a,e,c,b,d));d||this.flush()};
If.prototype.flush=function(a){for(var b=this;this.h.length;){var c=this.h[0];if(c.i)c.i=!1,this.h.push(c);else switch(c.type){case "require":if(3!==Pf(this,c.N).status&&!a)return;break;case "set":za(c.h[0],function(l,m){B(La(l,m),b.m)});break;case "config":var d=c.h[0],e=!!d[H.Ob];delete d[H.Ob];var f=Pf(this,c.N),h=Rc(c.N),k=h.containerId===h.id;e||(k?f.containerConfig={}:f.targetConfig[c.N]={});f.h&&e||Qf(this,H.D,d,c);f.h=!0;delete d[H.oa];k?B(d,f.containerConfig):B(d,f.targetConfig[c.N]);break;
case "event":Qf(this,c.h[1],c.h[0],c)}this.h.shift()}};var Rf=function(a,b,c){for(var d=[],e=String(b||document.cookie).split(";"),f=0;f<e.length;f++){var h=e[f].split("="),k=h[0].replace(/^\s*|\s*$/g,"");if(k&&k==a){var l=h.slice(1).join("=").replace(/^\s*|\s*$/g,"");l&&c&&(l=decodeURIComponent(l));d.push(l)}}return d},Vf=function(a,b,c,d){var e=Sf(a,d);if(1===e.length)return e[0].id;if(0!==e.length){e=Tf(e,function(f){return f.Hb},b);if(1===e.length)return e[0].id;e=Tf(e,function(f){return f.hb},c);return e[0]?e[0].id:void 0}};
function Wf(a,b,c){var d=document.cookie;document.cookie=a;var e=document.cookie;return d!=e||void 0!=c&&0<=Rf(b,e).indexOf(c)}
var Zf=function(a,b,c,d,e,f){d=d||"auto";var h={path:c||"/"};e&&(h.expires=e);"none"!==d&&(h.domain=d);var k;a:{var l=b,m;if(void 0==l)m=a+"=deleted; expires="+(new Date(0)).toUTCString();else{f&&(l=encodeURIComponent(l));var n=l;n&&1200<n.length&&(n=n.substring(0,1200));l=n;m=a+"="+l}var r=void 0,u=void 0,p;for(p in h)if(h.hasOwnProperty(p)){var t=h[p];if(null!=t)switch(p){case "secure":t&&(m+="; secure");break;case "domain":r=t;break;default:"path"==p&&(u=t),"expires"==p&&t instanceof Date&&(t=
t.toUTCString()),m+="; "+p+"="+t}}if("auto"===r){for(var v=Xf(),w=0;w<v.length;++w){var y="none"!=v[w]?v[w]:void 0;if(!Yf(y,u)&&Wf(m+(y?"; domain="+y:""),a,l)){k=!0;break a}}k=!1}else r&&"none"!=r&&(m+="; domain="+r),k=!Yf(r,u)&&Wf(m,a,l)}return k};function Tf(a,b,c){for(var d=[],e=[],f,h=0;h<a.length;h++){var k=a[h],l=b(k);l===c?d.push(k):void 0===f||l<f?(e=[k],f=l):l===f&&e.push(k)}return 0<d.length?d:e}
function Sf(a,b){for(var c=[],d=Rf(a),e=0;e<d.length;e++){var f=d[e].split("."),h=f.shift();if(!b||-1!==b.indexOf(h)){var k=f.shift();k&&(k=k.split("-"),c.push({id:f.join("."),Hb:1*k[0]||1,hb:1*k[1]||1}))}}return c}
var $f=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,ag=/(^|\.)doubleclick\.net$/i,Yf=function(a,b){return ag.test(document.location.hostname)||"/"===b&&$f.test(a)},Xf=function(){var a=[],b=document.location.hostname.split(".");if(4===b.length){var c=b[b.length-1];if(parseInt(c,10).toString()===c)return["none"]}for(var d=b.length-2;0<=d;d--)a.push(b.slice(d).join("."));var e=document.location.hostname;ag.test(e)||$f.test(e)||a.push("none");return a};var bg="".split(/,/),cg=!1;var dg=null,eg={},fg={},gg;function hg(a,b){var c={event:a};b&&(c.eventModel=B(b),b[H.jc]&&(c.eventCallback=b[H.jc]),b[H.qb]&&(c.eventTimeout=b[H.qb]));return c}
var ng={config:function(a){},
event:function(a){var b=a[1];if(g(b)&&!(3<a.length)){var c;if(2<a.length){if(!Ra(a[2])&&void 0!=a[2])return;c=a[2]}var d=hg(b,c);return d}},js:function(a){if(2==a.length&&a[1].getTime)return{event:"gtm.js","gtm.start":a[1].getTime()}},policy:function(){},set:function(a){var b;2==a.length&&Ra(a[1])?b=B(a[1]):3==a.length&&g(a[1])&&(b={},Ra(a[2])||ua(a[2])?b[a[1]]=B(a[2]):b[a[1]]=a[2]);
if(b){b._clear=!0;return b}}},og={policy:!0};var pg=function(a,b){var c=a.hide;if(c&&void 0!==c[b]&&c.end){c[b]=!1;var d=!0,e;for(e in c)if(c.hasOwnProperty(e)&&!0===c[e]){d=!1;break}d&&(c.end(),c.end=null)}},rg=function(a){var b=qg(),c=b&&b.hide;c&&c.end&&(c[a]=!0)};var sg=!1,tg=[];function ug(){if(!sg){sg=!0;for(var a=0;a<tg.length;a++)G(tg[a])}}var vg=function(a){sg?G(a):tg.push(a)};var Kg=function(a){if(Jg(a))return a;this.h=a};Kg.prototype.eg=function(){return this.h};var Jg=function(a){return!a||"object"!==Pa(a)||Ra(a)?!1:"getUntrustedUpdateValue"in a};Kg.prototype.getUntrustedUpdateValue=Kg.prototype.eg;var Lg=[],Mg=!1,Ng=function(a){return D["dataLayer"].push(a)},Og=function(a){var b=Vc["dataLayer"],c=b?b.subscribers:1,d=0;return function(){++d===c&&a()}};
function Pg(a){var b=a._clear;za(a,function(f,h){"_clear"!==f&&(b&&Qd(f,void 0),Qd(f,h))});$c||($c=a["gtm.start"]);var c=a.event;if(!c)return!1;var d=a["gtm.uniqueEventId"];d||(d=gd(),a["gtm.uniqueEventId"]=d,Qd("gtm.uniqueEventId",d));cd=c;var e=
Qg(a);cd=null;switch(c){case "gtm.init":I("GTM",19),e&&I("GTM",20)}return e}function Qg(a){var b=a.event,c=a["gtm.uniqueEventId"],d,e=Vc.zones;d=e?e.checkState(Uc.s,c):qe;return d.active?of(c,b,d.isWhitelisted,a.eventCallback,a.eventTimeout)?!0:!1:!1}
function Rg(){for(var a=!1;!Mg&&0<Lg.length;){Mg=!0;delete Hd.eventModel;Jd();var b=Lg.shift();if(null!=b){var c=Jg(b);if(c){var d=b;b=Jg(d)?d.getUntrustedUpdateValue():void 0;for(var e=["gtm.whitelist","gtm.blacklist","tagTypeBlacklist"],f=0;f<e.length;f++){var h=e[f],k=Kd(h,1);if(ua(k)||Ra(k))k=B(k);Id[h]=k}}try{if(qa(b))try{b.call(Ld)}catch(v){}else if(ua(b)){var l=b;if(g(l[0])){var m=
l[0].split("."),n=m.pop(),r=l.slice(1),u=Kd(m.join("."),2);if(void 0!==u&&null!==u)try{u[n].apply(u,r)}catch(v){}}}else{var p=b;if(p&&("[object Arguments]"==Object.prototype.toString.call(p)||Object.prototype.hasOwnProperty.call(p,"callee"))){a:{if(b.length&&g(b[0])){var t=ng[b[0]];if(t&&(!c||!og[b[0]])){b=t(b);break a}}b=void 0}if(!b){Mg=!1;continue}}a=Pg(b)||a}}finally{c&&Jd(!0)}}Mg=!1}
return!a}function Sg(){var a=Rg();try{pg(D["dataLayer"],Uc.s)}catch(b){}return a}
var Ug=function(){var a=hc("dataLayer",[]),b=hc("google_tag_manager",{});b=b["dataLayer"]=b["dataLayer"]||{};ye(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});vg(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});b.subscribers=(b.subscribers||0)+1;var c=a.push;a.push=function(){var d;if(0<Vc.SANDBOXED_JS_SEMAPHORE){d=[];for(var e=0;e<arguments.length;e++)d[e]=new Kg(arguments[e])}else d=[].slice.call(arguments,0);var f=c.apply(a,d);Lg.push.apply(Lg,d);if(300<
this.length)for(I("GTM",4);300<this.length;)this.shift();var h="boolean"!==typeof f||f;return Rg()&&h};Lg.push.apply(Lg,a.slice(0));Tg()&&G(Sg)},Tg=function(){var a=!0;return a};var Vg={};Vg.rb=new String("undefined");
var Wg=function(a){this.h=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===Vg.rb?b:a[d]);return c.join("")}};Wg.prototype.toString=function(){return this.h("undefined")};Wg.prototype.valueOf=Wg.prototype.toString;Vg.df=Wg;Vg.vc={};Vg.Pf=function(a){return new Wg(a)};var Xg={};Vg.eh=function(a,b){var c=gd();Xg[c]=[a,b];return c};Vg.Xd=function(a){var b=a?0:1;return function(c){var d=Xg[c];if(d&&"function"===typeof d[b])d[b]();Xg[c]=void 0}};Vg.vg=function(a){for(var b=!1,c=!1,d=2;d<a.length;d++)b=
b||8===a[d],c=c||16===a[d];return b&&c};Vg.Tg=function(a){if(a===Vg.rb)return a;var b=gd();Vg.vc[b]=a;return'google_tag_manager["'+Uc.s+'"].macro('+b+")"};Vg.Fg=function(a,b,c){a instanceof Vg.df&&(a=a.h(Vg.eh(b,c)),b=pa);return{Hc:a,B:b}};var Yg=function(a,b,c){function d(f,h){var k=f[h];return k}var e={event:b,"gtm.element":a,"gtm.elementClasses":d(a,"className"),"gtm.elementId":a["for"]||qc(a,"id")||"","gtm.elementTarget":a.formTarget||d(a,"target")||""};c&&(e["gtm.triggers"]=c.join(","));e["gtm.elementUrl"]=(a.attributes&&a.attributes.formaction?a.formAction:"")||a.action||d(a,"href")||a.src||a.code||a.codebase||
"";return e},Zg=function(a){Vc.hasOwnProperty("autoEventsSettings")||(Vc.autoEventsSettings={});var b=Vc.autoEventsSettings;b.hasOwnProperty(a)||(b[a]={});return b[a]},$g=function(a,b,c){Zg(a)[b]=c},ah=function(a,b,c,d){var e=Zg(a),f=Ga(e,b,d);e[b]=c(f)},bh=function(a,b,c){var d=Zg(a);return Ga(d,b,c)};var ch=function(){for(var a=fc.userAgent+(F.cookie||"")+(F.referrer||""),b=a.length,c=D.history.length;0<c;)a+=c--^b++;var d=1,e,f,h;if(a)for(d=0,f=a.length-1;0<=f;f--)h=a.charCodeAt(f),d=(d<<6&268435455)+h+(h<<14),e=d&266338304,d=0!=e?d^e>>21:d;return[Math.round(2147483647*Math.random())^d&2147483647,Math.round(Fa()/1E3)].join(".")},fh=function(a,b,c,d){var e=dh(b);return Vf(a,e,eh(c),d)},gh=function(a,b,c,d){var e=""+dh(c),f=eh(d);1<f&&(e+="-"+f);return[b,e,a].join(".")},dh=function(a){if(!a)return 1;
a=0===a.indexOf(".")?a.substr(1):a;return a.split(".").length},eh=function(a){if(!a||"/"===a)return 1;"/"!==a[0]&&(a="/"+a);"/"!==a[a.length-1]&&(a+="/");return a.split("/").length-1};var hh=["1"],ih={},mh=function(a,b,c,d){var e=jh(a);ih[e]||kh(e,b,c)||(lh(e,ch(),b,c,d),kh(e,b,c))};function lh(a,b,c,d,e){var f=gh(b,"1",d,c);Zf(a,f,c,d,0==e?void 0:new Date(Fa()+1E3*(void 0==e?7776E3:e)))}function kh(a,b,c){var d=fh(a,b,c,hh);d&&(ih[a]=d);return d}function jh(a){return(a||"_gcl")+"_au"};var nh=function(){for(var a=[],b=F.cookie.split(";"),c=/^\s*_gac_(UA-\d+-\d+)=\s*(.+?)\s*$/,d=0;d<b.length;d++){var e=b[d].match(c);e&&a.push({bd:e[1],value:e[2]})}var f={};if(!a||!a.length)return f;for(var h=0;h<a.length;h++){var k=a[h].value.split(".");"1"==k[0]&&3==k.length&&k[1]&&(f[a[h].bd]||(f[a[h].bd]=[]),f[a[h].bd].push({timestamp:k[1],ag:k[2]}))}return f};function oh(){for(var a=ph,b={},c=0;c<a.length;++c)b[a[c]]=c;return b}function qh(){var a="ABCDEFGHIJKLMNOPQRSTUVWXYZ";a+=a.toLowerCase()+"0123456789-_";return a+"."}var ph,rh;function sh(a){ph=ph||qh();rh=rh||oh();for(var b=[],c=0;c<a.length;c+=3){var d=c+1<a.length,e=c+2<a.length,f=a.charCodeAt(c),h=d?a.charCodeAt(c+1):0,k=e?a.charCodeAt(c+2):0,l=f>>2,m=(f&3)<<4|h>>4,n=(h&15)<<2|k>>6,r=k&63;e||(r=64,d||(n=64));b.push(ph[l],ph[m],ph[n],ph[r])}return b.join("")}
function th(a){function b(l){for(;d<a.length;){var m=a.charAt(d++),n=rh[m];if(null!=n)return n;if(!/^[\s\xa0]*$/.test(m))throw Error("Unknown base64 encoding at char: "+m);}return l}ph=ph||qh();rh=rh||oh();for(var c="",d=0;;){var e=b(-1),f=b(0),h=b(64),k=b(64);if(64===k&&-1===e)return c;c+=String.fromCharCode(e<<2|f>>4);64!=h&&(c+=String.fromCharCode(f<<4&240|h>>2),64!=k&&(c+=String.fromCharCode(h<<6&192|k)))}};var uh;function vh(a,b){if(!a||b===F.location.hostname)return!1;for(var c=0;c<a.length;c++)if(a[c]instanceof RegExp){if(a[c].test(b))return!0}else if(0<=b.indexOf(a[c]))return!0;return!1}
var zh=function(){var a=wh,b=xh,c=yh(),d=function(h){a(h.target||h.srcElement||{})},e=function(h){b(h.target||h.srcElement||{})};if(!c.init){nc(F,"mousedown",d);nc(F,"keyup",d);nc(F,"submit",e);var f=HTMLFormElement.prototype.submit;HTMLFormElement.prototype.submit=function(){b(this);f.call(this)};c.init=!0}},yh=function(){var a=hc("google_tag_data",{}),b=a.gl;b&&b.decorators||(b={decorators:[]},a.gl=b);return b};var Ah=/(.*?)\*(.*?)\*(.*)/,Bh=/^https?:\/\/([^\/]*?)\.?cdn\.ampproject\.org\/?(.*)/,Ch=/^(?:www\.|m\.|amp\.)+/,Dh=/([^?#]+)(\?[^#]*)?(#.*)?/,Eh=/(.*?)(^|&)_gl=([^&]*)&?(.*)/,Gh=function(a){var b=[],c;for(c in a)if(a.hasOwnProperty(c)){var d=a[c];void 0!==d&&d===d&&null!==d&&"[object Object]"!==d.toString()&&(b.push(c),b.push(sh(String(d))))}var e=b.join("*");return["1",Fh(e),e].join("*")},Fh=function(a,b){var c=[window.navigator.userAgent,(new Date).getTimezoneOffset(),window.navigator.userLanguage||
window.navigator.language,Math.floor((new Date).getTime()/60/1E3)-(void 0===b?0:b),a].join("*"),d;if(!(d=uh)){for(var e=Array(256),f=0;256>f;f++){for(var h=f,k=0;8>k;k++)h=h&1?h>>>1^3988292384:h>>>1;e[f]=h}d=e}uh=d;for(var l=4294967295,m=0;m<c.length;m++)l=l>>>8^uh[(l^c.charCodeAt(m))&255];return((l^-1)>>>0).toString(36)},Ih=function(){return function(a){var b=Ze(D.location.href),c=b.search.replace("?",""),d=Ve(c,"_gl",!0)||"";a.query=Hh(d)||{};var e=Ye(b,"fragment").match(Eh);a.fragment=Hh(e&&e[3]||
"")||{}}},Jh=function(){var a=Ih(),b=yh();b.data||(b.data={query:{},fragment:{}},a(b.data));var c={},d=b.data;d&&(Ia(c,d.query),Ia(c,d.fragment));return c},Hh=function(a){var b;b=void 0===b?3:b;try{if(a){var c;a:{for(var d=a,e=0;3>e;++e){var f=Ah.exec(d);if(f){c=f;break a}d=decodeURIComponent(d)}c=void 0}var h=c;if(h&&"1"===h[1]){var k=h[3],l;a:{for(var m=h[2],n=0;n<b;++n)if(m===Fh(k,n)){l=!0;break a}l=!1}if(l){for(var r={},u=k?k.split("*"):[],p=0;p<u.length;p+=2)r[u[p]]=th(u[p+1]);return r}}}}catch(t){}};
function Kh(a,b,c){function d(m){var n=m,r=Eh.exec(n),u=n;if(r){var p=r[2],t=r[4];u=r[1];t&&(u=u+p+t)}m=u;var v=m.charAt(m.length-1);m&&"&"!==v&&(m+="&");return m+l}c=void 0===c?!1:c;var e=Dh.exec(b);if(!e)return"";var f=e[1],h=e[2]||"",k=e[3]||"",l="_gl="+a;c?k="#"+d(k.substring(1)):h="?"+d(h.substring(1));return""+f+h+k}
function Lh(a,b,c){for(var d={},e={},f=yh().decorators,h=0;h<f.length;++h){var k=f[h];(!c||k.forms)&&vh(k.domains,b)&&(k.fragment?Ia(e,k.callback()):Ia(d,k.callback()))}if(Ja(d)){var l=Gh(d);if(c){if(a&&a.action){var m=(a.method||"").toLowerCase();if("get"===m){for(var n=a.childNodes||[],r=!1,u=0;u<n.length;u++){var p=n[u];if("_gl"===p.name){p.setAttribute("value",l);r=!0;break}}if(!r){var t=F.createElement("input");t.setAttribute("type","hidden");t.setAttribute("name","_gl");t.setAttribute("value",
l);a.appendChild(t)}}else if("post"===m){var v=Kh(l,a.action);Te.test(v)&&(a.action=v)}}}else Mh(l,a,!1)}if(!c&&Ja(e)){var w=Gh(e);Mh(w,a,!0)}}function Mh(a,b,c){if(b.href){var d=Kh(a,b.href,void 0===c?!1:c);Te.test(d)&&(b.href=d)}}
var wh=function(a){try{var b;a:{for(var c=a,d=100;c&&0<d;){if(c.href&&c.nodeName.match(/^a(?:rea)?$/i)){b=c;break a}c=c.parentNode;d--}b=null}var e=b;if(e){var f=e.protocol;"http:"!==f&&"https:"!==f||Lh(e,e.hostname,!1)}}catch(h){}},xh=function(a){try{if(a.action){var b=Ye(Ze(a.action),"host");Lh(a,b,!0)}}catch(c){}},Nh=function(a,b,c,d){zh();var e={callback:a,domains:b,fragment:"fragment"===c,forms:!!d};yh().decorators.push(e)},Oh=function(){var a=F.location.hostname,b=Bh.exec(F.referrer);if(!b)return!1;
var c=b[2],d=b[1],e="";if(c){var f=c.split("/"),h=f[1];e="s"===h?decodeURIComponent(f[2]):decodeURIComponent(h)}else if(d){if(0===d.indexOf("xn--"))return!1;e=d.replace(/-/g,".").replace(/\.\./g,"-")}var k=a.replace(Ch,""),l=e.replace(Ch,""),m;if(!(m=k===l)){var n="."+l;m=k.substring(k.length-n.length,k.length)===n}return m},Ph=function(a,b){return!1===a?!1:a||b||Oh()};var Qh={};var Rh=/^\w+$/,Sh=/^[\w-]+$/,Th=/^~?[\w-]+$/,Uh={aw:"_aw",dc:"_dc",gf:"_gf",ha:"_ha",gp:"_gp"};function Vh(a){return a&&"string"==typeof a&&a.match(Rh)?a:"_gcl"}var Xh=function(){var a=Ze(D.location.href),b=Ye(a,"query",!1,void 0,"gclid"),c=Ye(a,"query",!1,void 0,"gclsrc"),d=Ye(a,"query",!1,void 0,"dclid");if(!b||!c){var e=a.hash.replace("#","");b=b||Ve(e,"gclid",void 0);c=c||Ve(e,"gclsrc",void 0)}return Wh(b,c,d)};
function Wh(a,b,c){var d={},e=function(f,h){d[h]||(d[h]=[]);d[h].push(f)};if(void 0!==a&&a.match(Sh))switch(b){case void 0:e(a,"aw");break;case "aw.ds":e(a,"aw");e(a,"dc");break;case "ds":e(a,"dc");break;case "3p.ds":(void 0==Qh.gtm_3pds?0:Qh.gtm_3pds)&&e(a,"dc");break;case "gf":e(a,"gf");break;case "ha":e(a,"ha");break;case "gp":e(a,"gp")}c&&e(c,"dc");return d}var Zh=function(a){var b=Xh();Yh(b,a)};
function Yh(a,b,c){function d(r,u){var p=$h(r,e);p&&Zf(p,u,h,f,l,!0)}b=b||{};var e=Vh(b.prefix),f=b.domain||"auto",h=b.path||"/",k=void 0==b.Ia?7776E3:b.Ia;c=c||Fa();var l=0==k?void 0:new Date(c+1E3*k),m=Math.round(c/1E3),n=function(r){return["GCL",m,r].join(".")};a.aw&&(!0===b.$h?d("aw",n("~"+a.aw[0])):d("aw",n(a.aw[0])));a.dc&&d("dc",n(a.dc[0]));a.gf&&d("gf",n(a.gf[0]));a.ha&&d("ha",n(a.ha[0]));a.gp&&d("gp",n(a.gp[0]))}
var bi=function(a,b,c,d,e){for(var f=Jh(),h=Vh(b),k=0;k<a.length;++k){var l=a[k];if(void 0!==Uh[l]){var m=$h(l,h),n=f[m];if(n){var r=Math.min(ai(n),Fa()),u;b:{for(var p=r,t=Rf(m,F.cookie),v=0;v<t.length;++v)if(ai(t[v])>p){u=!0;break b}u=!1}u||Zf(m,n,c,d,0==e?void 0:new Date(r+1E3*(null==e?7776E3:e)),!0)}}}var w={prefix:b,path:c,domain:d};Yh(Wh(f.gclid,f.gclsrc),w)},$h=function(a,b){var c=Uh[a];if(void 0!==c)return b+c},ai=function(a){var b=a.split(".");return 3!==b.length||"GCL"!==b[0]?0:1E3*(Number(b[1])||
0)};function ci(a){var b=a.split(".");if(3==b.length&&"GCL"==b[0]&&b[1])return b[2]}
var di=function(a,b,c,d,e){if(ua(b)){var f=Vh(e);Nh(function(){for(var h={},k=0;k<a.length;++k){var l=$h(a[k],f);if(l){var m=Rf(l,F.cookie);m.length&&(h[l]=m.sort()[m.length-1])}}return h},b,c,d)}},ei=function(a){return a.filter(function(b){return Th.test(b)})},fi=function(a,b){for(var c=Vh(b&&b.prefix),d={},e=0;e<a.length;e++)Uh[a[e]]&&(d[a[e]]=Uh[a[e]]);za(d,function(f,h){var k=Rf(c+h,F.cookie);if(k.length){var l=k[0],m=ai(l),n={};n[f]=[ci(l)];Yh(n,b,m)}})};var gi=/^\d+\.fls\.doubleclick\.net$/;function hi(a){var b=Ze(D.location.href),c=Ye(b,"host",!1);if(c&&c.match(gi)){var d=Ye(b,"path").split(a+"=");if(1<d.length)return d[1].split(";")[0].split("?")[0]}}
function ii(a,b){if("aw"==a||"dc"==a){var c=hi("gcl"+a);if(c)return c.split(".")}var d=Vh(b);if("_gcl"==d){var e;e=Xh()[a]||[];if(0<e.length)return e}var f=$h(a,d),h;if(f){var k=[];if(F.cookie){var l=Rf(f,F.cookie);if(l&&0!=l.length){for(var m=0;m<l.length;m++){var n=ci(l[m]);n&&-1===q(k,n)&&k.push(n)}h=ei(k)}else h=k}else h=k}else h=[];return h}
var ji=function(){var a=hi("gac");if(a)return decodeURIComponent(a);var b=nh(),c=[];za(b,function(d,e){for(var f=[],h=0;h<e.length;h++)f.push(e[h].ag);f=ei(f);f.length&&c.push(d+":"+f.join(","))});return c.join(";")},ki=function(a,b,c,d,e){mh(b,c,d,e);var f=ih[jh(b)],h=Xh().dc||[],k=!1;if(f&&0<h.length){var l=Vc.joined_au=Vc.joined_au||{},m=b||"_gcl";if(!l[m])for(var n=0;n<h.length;n++){var r="https://adservice.google.com/ddm/regclk",u=r=r+"?gclid="+h[n]+"&auiddc="+f;fc.sendBeacon&&fc.sendBeacon(u)||mc(u);k=l[m]=
!0}}null==a&&(a=k);if(a&&f){var p=jh(b),t=ih[p];t&&lh(p,t,c,d,e)}};var li;if(3===Uc.vb.length)li="g";else{var mi="G";li=mi}
var ni={"":"n",UA:"u",AW:"a",DC:"d",G:"e",GF:"f",HA:"h",GTM:li,OPT:"o"},oi=function(a){var b=Uc.s.split("-"),c=b[0].toUpperCase(),d=ni[c]||"i",e=a&&"GTM"===c?b[1]:"OPT"===c?b[1]:"",f;if(3===Uc.vb.length){var h=void 0;f="2"+(h||"w")}else f=
"";return f+d+Uc.vb+e};var ti=["input","select","textarea"],ui=["button","hidden","image","reset","submit"],vi=function(a){var b=a.tagName.toLowerCase();return!va(ti,function(c){return c===b})||"input"===b&&va(ui,function(c){return c===a.type.toLowerCase()})?!1:!0},wi=function(a){return a.form?a.form.tagName?a.form:F.getElementById(a.form):tc(a,["form"],100)},xi=function(a,b,c){if(!a.elements)return 0;for(var d=b.getAttribute(c),e=0,f=1;e<a.elements.length;e++){var h=a.elements[e];if(vi(h)){if(h.getAttribute(c)===d)return f;
f++}}return 0};var Ai=!!D.MutationObserver,Bi=void 0,Ci=function(a){if(!Bi){var b=function(){var c=F.body;if(c)if(Ai)(new MutationObserver(function(){for(var e=0;e<Bi.length;e++)G(Bi[e])})).observe(c,{childList:!0,subtree:!0});else{var d=!1;nc(c,"DOMNodeInserted",function(){d||(d=!0,G(function(){d=!1;for(var e=0;e<Bi.length;e++)G(Bi[e])}))})}};Bi=[];F.body?b():G(b)}Bi.push(a)};
var Ni=function(){var a=F.body,b=F.documentElement||a&&a.parentElement,c,d;if(F.compatMode&&"BackCompat"!==F.compatMode)c=b?b.clientHeight:0,d=b?b.clientWidth:0;else{var e=function(f,h){return f&&h?Math.min(f,h):Math.max(f,h)};I("GTM",7);c=e(b?b.clientHeight:0,a?a.clientHeight:0);d=e(b?b.clientWidth:0,a?a.clientWidth:0)}return{width:d,height:c}},Oi=function(a){var b=Ni(),c=b.height,d=b.width,e=a.getBoundingClientRect(),f=e.bottom-e.top,h=e.right-e.left;return f&&h?(1-Math.min((Math.max(0-e.left,0)+
Math.max(e.right-d,0))/h,1))*(1-Math.min((Math.max(0-e.top,0)+Math.max(e.bottom-c,0))/f,1)):0},Pi=function(a){if(F.hidden)return!0;var b=a.getBoundingClientRect();if(b.top==b.bottom||b.left==b.right||!D.getComputedStyle)return!0;var c=D.getComputedStyle(a,null);if("hidden"===c.visibility)return!0;for(var d=a,e=c;d;){if("none"===e.display)return!0;var f=e.opacity,h=e.filter;if(h){var k=h.indexOf("opacity(");0<=k&&(h=h.substring(k+8,h.indexOf(")",k)),"%"==h.charAt(h.length-1)&&(h=h.substring(0,h.length-
1)),f=Math.min(h,f))}if(void 0!==f&&0>=f)return!0;(d=d.parentElement)&&(e=D.getComputedStyle(d,null))}return!1};
var Xi=function(a,b,c){function d(){var h=a();f+=e?(Fa()-e)*h.playbackRate/1E3:0;e=Fa()}var e=0,f=0;return{Ib:function(h,k,l){var m=a(),n=m.Yd,r=void 0!==l?Math.round(l):void 0!==k?Math.round(m.Yd*k):Math.round(m.Qf),u=void 0!==k?Math.round(100*k):0>=n?0:Math.round(r/n*100),p=F.hidden?!1:.5<=Oi(c);d();var t=Yg(c,"gtm.video",[b]);t["gtm.videoProvider"]="youtube";t["gtm.videoStatus"]=h;t["gtm.videoUrl"]=m.url;t["gtm.videoTitle"]=m.title;t["gtm.videoDuration"]=Math.round(n);t["gtm.videoCurrentTime"]=
Math.round(r);t["gtm.videoElapsedTime"]=Math.round(f);t["gtm.videoPercent"]=u;t["gtm.videoVisible"]=p;Ng(t)},gh:function(){e=Fa()},wc:function(){d()}}};var Yi=D.clearTimeout,Zi=D.setTimeout,R=function(a,b,c){if(Ud()){b&&G(b)}else return jc(a,b,c)},$i=function(){return D.location.href},aj=function(a){return Ye(Ze(a),"fragment")},bj=function(a){return Xe(Ze(a))},S=function(a,b){return Kd(a,b||2)},cj=function(a,b,c){var d;b?(a.eventCallback=b,c&&(a.eventTimeout=c),d=Ng(a)):d=Ng(a);return d},dj=function(a,b){D[a]=b},X=function(a,b,c){b&&(void 0===D[a]||c&&!D[a])&&(D[a]=
b);return D[a]},ej=function(a,b,c){return Rf(a,b,void 0===c?!0:!!c)},fj=function(a,b){if(Ud()){b&&G(b)}else lc(a,b)},gj=function(a){return!!bh(a,"init",!1)},hj=function(a){$g(a,"init",!0)},ij=function(a,b){var c=(void 0===b?0:b)?"www.googletagmanager.com/gtag/js":Zc;c+="?id="+encodeURIComponent(a)+"&l=dataLayer";R(Q("https://","http://",c))},jj=function(a,b){var c=a[b];return c};
var kj=Vg.Fg;var lj;var Ij=new xa;function Jj(a,b){function c(h){var k=Ze(h),l=Ye(k,"protocol"),m=Ye(k,"host",!0),n=Ye(k,"port"),r=Ye(k,"path").toLowerCase().replace(/\/$/,"");if(void 0===l||"http"==l&&"80"==n||"https"==l&&"443"==n)l="web",n="default";return[l,m,n,r]}for(var d=c(String(a)),e=c(String(b)),f=0;f<d.length;f++)if(d[f]!==e[f])return!1;return!0}
function Kj(a){return Lj(a)?1:0}
function Lj(a){var b=a.arg0,c=a.arg1;if(a.any_of&&ua(c)){for(var d=0;d<c.length;d++)if(Kj({"function":a["function"],arg0:b,arg1:c[d]}))return!0;return!1}switch(a["function"]){case "_cn":return 0<=String(b).indexOf(String(c));case "_css":var e;a:{if(b){var f=["matches","webkitMatchesSelector","mozMatchesSelector","msMatchesSelector","oMatchesSelector"];try{for(var h=0;h<f.length;h++)if(b[f[h]]){e=b[f[h]](c);break a}}catch(v){}}e=!1}return e;case "_ew":var k,l;k=String(b);l=String(c);var m=k.length-
l.length;return 0<=m&&k.indexOf(l,m)==m;case "_eq":return String(b)==String(c);case "_ge":return Number(b)>=Number(c);case "_gt":return Number(b)>Number(c);case "_lc":var n;n=String(b).split(",");return 0<=q(n,String(c));case "_le":return Number(b)<=Number(c);case "_lt":return Number(b)<Number(c);case "_re":var r;var u=a.ignore_case?"i":void 0;try{var p=String(c)+u,t=Ij.get(p);t||(t=new RegExp(c,u),Ij.set(p,t));r=t.test(b)}catch(v){r=!1}return r;case "_sw":return 0==String(b).indexOf(String(c));case "_um":return Jj(b,
c)}return!1};var Mj=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var Nj={},Oj=encodeURI,Y=encodeURIComponent,Pj=mc;var Qj=function(a,b){if(!a)return!1;var c=Ye(Ze(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};
var Rj=function(a,b,c){for(var d={},e=!1,f=0;a&&f<a.length;f++)a[f]&&a[f].hasOwnProperty(b)&&a[f].hasOwnProperty(c)&&(d[a[f][b]]=a[f][c],e=!0);return e?d:null};Nj.wg=function(){var a=!1;return a};var dl=function(){var a=D.gaGlobal=D.gaGlobal||{};a.hid=a.hid||wa();return a.hid};var ol=window,pl=document,ql=function(a){var b=ol._gaUserPrefs;if(b&&b.ioo&&b.ioo()||a&&!0===ol["ga-disable-"+a])return!0;try{var c=ol.external;if(c&&c._gaUserPrefs&&"oo"==c._gaUserPrefs)return!0}catch(f){}for(var d=Rf("AMP_TOKEN",pl.cookie,!0),e=0;e<d.length;e++)if("$OPT_OUT"==d[e])return!0;return pl.getElementById("__gaOptOutExtension")?!0:!1};var tl=function(a){za(a,function(c){"_"===c.charAt(0)&&delete a[c]});var b=a[H.ca]||{};za(b,function(c){"_"===c.charAt(0)&&delete b[c]})};var xl=function(a,b,c){Kf(b,c,a)},yl=function(a,b,c){Kf(b,c,a,!0)},Al=function(a,b){};
function zl(a,b){}var Z={a:{}};


Z.a.jsm=["customScripts"],function(){(function(a){Z.__jsm=a;Z.__jsm.b="jsm";Z.__jsm.g=!0;Z.__jsm.priorityOverride=0})(function(a){if(void 0!==a.vtp_javascript){var b=a.vtp_javascript;try{var c=X("google_tag_manager");return c&&c.e&&c.e(b)}catch(d){}}})}();

Z.a.c=["google"],function(){(function(a){Z.__c=a;Z.__c.b="c";Z.__c.g=!0;Z.__c.priorityOverride=0})(function(a){return a.vtp_value})}();
Z.a.e=["google"],function(){(function(a){Z.__e=a;Z.__e.b="e";Z.__e.g=!0;Z.__e.priorityOverride=0})(function(a){return String(Sd(a.vtp_gtmEventId,"event"))})}();
Z.a.f=["google"],function(){(function(a){Z.__f=a;Z.__f.b="f";Z.__f.g=!0;Z.__f.priorityOverride=0})(function(a){var b=S("gtm.referrer",1)||F.referrer;return b?a.vtp_component&&"URL"!=a.vtp_component?Ye(Ze(String(b)),a.vtp_component,a.vtp_stripWww,a.vtp_defaultPages,a.vtp_queryKey):bj(String(b)):String(b)})}();
Z.a.j=["google"],function(){(function(a){Z.__j=a;Z.__j.b="j";Z.__j.g=!0;Z.__j.priorityOverride=0})(function(a){for(var b=String(a.vtp_name).split("."),c=X(b.shift()),d=0;d<b.length;d++)c=c&&c[b[d]];return c})}();Z.a.k=["google"],function(){(function(a){Z.__k=a;Z.__k.b="k";Z.__k.g=!0;Z.__k.priorityOverride=0})(function(a){return ej(a.vtp_name,S("gtm.cookie",1),!!a.vtp_decodeCookie)[0]})}();

Z.a.t=["google"],function(){(function(a){Z.__t=a;Z.__t.b="t";Z.__t.g=!0;Z.__t.priorityOverride=0})(function(){return(new Date).getTime()})}();
Z.a.u=["google"],function(){var a=function(b){return{toString:function(){return b}}};(function(b){Z.__u=b;Z.__u.b="u";Z.__u.g=!0;Z.__u.priorityOverride=0})(function(b){var c;b.vtp_customUrlSource?c=b.vtp_customUrlSource:c=S("gtm.url",1);c=c||$i();var d=b[a("vtp_component")];if(!d||"URL"==d)return bj(String(c));var e=Ze(String(c)),f;if("QUERY"===d)a:{var h=b[a("vtp_multiQueryKeys").toString()],k=b[a("vtp_queryKey").toString()]||"",l=b[a("vtp_ignoreEmptyQueryParam").toString()],m;h?ua(k)?m=k:m=String(k).replace(/\s+/g,
"").split(","):m=[String(k)];for(var n=0;n<m.length;n++){var r=Ye(e,"QUERY",void 0,void 0,m[n]);if(void 0!=r&&(!l||""!==r)){f=r;break a}}f=void 0}else f=Ye(e,d,"HOST"==d?b[a("vtp_stripWww")]:void 0,"PATH"==d?b[a("vtp_defaultPages")]:void 0,void 0);return f})}();
Z.a.v=["google"],function(){(function(a){Z.__v=a;Z.__v.b="v";Z.__v.g=!0;Z.__v.priorityOverride=0})(function(a){var b=a.vtp_name;if(!b||!b.replace)return!1;var c=S(b.replace(/\\\./g,"."),a.vtp_dataLayerVersion||1);return void 0!==c?c:a.vtp_defaultValue})}();
Z.a.ua=["google"],function(){var a,b={},c=function(d){var e={},f={},h={},k={},l={},m=void 0;if(d.vtp_gaSettings){var n=d.vtp_gaSettings;B(Rj(n.vtp_fieldsToSet,"fieldName","value"),f);B(Rj(n.vtp_contentGroup,"index","group"),h);B(Rj(n.vtp_dimension,"index","dimension"),k);B(Rj(n.vtp_metric,"index","metric"),l);d.vtp_gaSettings=null;n.vtp_fieldsToSet=void 0;n.vtp_contentGroup=void 0;n.vtp_dimension=void 0;n.vtp_metric=void 0;var r=B(n);d=B(d,r)}B(Rj(d.vtp_fieldsToSet,"fieldName","value"),f);B(Rj(d.vtp_contentGroup,
"index","group"),h);B(Rj(d.vtp_dimension,"index","dimension"),k);B(Rj(d.vtp_metric,"index","metric"),l);var u=Oe(d.vtp_functionName);if(qa(u)){var p="",t="";d.vtp_setTrackerName&&"string"==typeof d.vtp_trackerName?""!==d.vtp_trackerName&&(t=d.vtp_trackerName,p=t+"."):(t="gtm"+gd(),p=t+".");var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,cookieUpdate:!0,legacyCookieDomain:!0,
legacyHistoryImport:!0,storage:!0,useAmpClientId:!0,storeGac:!0},w={allowAnchor:!0,allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,cookieUpdate:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useAmpClientId:!0,useBeacon:!0,storeGac:!0,allowAdFeatures:!0,allowAdPersonalizationSignals:!0},y=function(O){var K=[].slice.call(arguments,0);K[0]=p+K[0];u.apply(window,K)},x=function(O,K){return void 0===K?K:O(K)},z=function(O,K){if(K)for(var sa in K)K.hasOwnProperty(sa)&&
y("set",O+sa,K[sa])},C=function(){},A=function(O,K,sa){var Gb=0;if(O)for(var Ca in O)if(O.hasOwnProperty(Ca)&&(sa&&v[Ca]||!sa&&void 0===v[Ca])){var Za=w[Ca]?Ba(O[Ca]):O[Ca];"anonymizeIp"!=Ca||Za||(Za=void 0);K[Ca]=Za;Gb++}return Gb},E={name:t};A(f,E,
!0);u("create",d.vtp_trackingId||e.trackingId,E);y("set","&gtm",oi(!0));d.vtp_enableRecaptcha&&y("require","recaptcha","recaptcha.js");(function(O,K){void 0!==d[K]&&y("set",O,d[K])})("nonInteraction","vtp_nonInteraction");z("contentGroup",h);z("dimension",k);z("metric",l);var J={};A(f,J,!1)&&y("set",J);var M;d.vtp_enableLinkId&&y("require","linkid","linkid.js");y("set","hitCallback",function(){var O=f&&f.hitCallback;qa(O)&&O();d.vtp_gtmOnSuccess()});if("TRACK_EVENT"==d.vtp_trackType){d.vtp_enableEcommerce&&(y("require","ec","ec.js"),C());var V={hitType:"event",eventCategory:String(d.vtp_eventCategory||e.category),eventAction:String(d.vtp_eventAction||
e.action),eventLabel:x(String,d.vtp_eventLabel||e.label),eventValue:x(Aa,d.vtp_eventValue||e.value)};A(M,V,!1);y("send",V);}else if("TRACK_SOCIAL"==d.vtp_trackType){}else if("TRACK_TRANSACTION"==
d.vtp_trackType){}else if("TRACK_TIMING"==d.vtp_trackType){}else if("DECORATE_LINK"==
d.vtp_trackType){}else if("DECORATE_FORM"==d.vtp_trackType){}else if("TRACK_DATA"==d.vtp_trackType){}else{d.vtp_enableEcommerce&&
(y("require","ec","ec.js"),C());if(d.vtp_doubleClick||"DISPLAY_FEATURES"==d.vtp_advertisingFeaturesType){var oa="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","displayfeatures",void 0,{cookieName:oa})}if("DISPLAY_FEATURES_WITH_REMARKETING_LISTS"==d.vtp_advertisingFeaturesType){var ka="_dc_gtm_"+String(d.vtp_trackingId).replace(/[^A-Za-z0-9-]/g,"");y("require","adfeatures",{cookieName:ka})}M?y("send","pageview",M):y("send","pageview");}if(!a){var ta=d.vtp_useDebugVersion?"u/analytics_debug.js":"analytics.js";d.vtp_useInternalVersion&&!d.vtp_useDebugVersion&&(ta="internal/"+ta);a=!0;var ab=Q("https:","http:","//www.google-analytics.com/"+ta,f&&f.forceSSL);
R(ab,function(){var O=Me();O&&O.loaded||d.vtp_gtmOnFailure();},d.vtp_gtmOnFailure)}}else G(d.vtp_gtmOnFailure)};Z.__ua=c;Z.__ua.b="ua";Z.__ua.g=!0;Z.__ua.priorityOverride=0}();



Z.a.ytl=["google"],function(){function a(){var w=Math.round(1E9*Math.random())+"";return F.getElementById(w)?a():w}function b(w,y){if(!w)return!1;for(var x=0;x<u.length;x++)if(0<=w.indexOf("//"+u[x]+"/"+y))return!0;return!1}function c(w){var y=-1!==w.indexOf("?")?"&":"?";if(-1<w.indexOf("origin="))return w+y+"enablejsapi=1";if(!t){var x=X("document");t=x.location.protocol+"//"+x.location.hostname;x.location.port&&(t+=":"+x.location.port)}return w+y+"enablejsapi=1&origin="+encodeURIComponent(t)}function d(w,
y){var x=w.getAttribute("src");if(b(x,"embed/")){if(0<x.indexOf("enablejsapi=1"))return!0;if(y)return w.setAttribute("src",c(x)),!0}return!1}function e(w,y){if(!w.getAttribute("data-gtm-yt-inspected-"+y.cd)&&(w.setAttribute("data-gtm-yt-inspected-"+y.cd,"true"),d(w,y.ce))){w.id||(w.id=a());var x=X("YT"),z=x.get(w.id);z||(z=new x.Player(w.id));var C=h(z,y),A={},E;for(E in C)A.Ma=E,C.hasOwnProperty(A.Ma)&&z.addEventListener(A.Ma,function(J){return function(M){return C[J.Ma](M.data)}}(A)),A={Ma:A.Ma}}}
function f(w){G(function(){function y(){for(var z=x.getElementsByTagName("iframe"),C=z.length,A=0;A<C;A++)e(z[A],w)}var x=X("document");y();Ci(y)})}function h(w,y){var x,z;function C(){ha=Xi(function(){return{url:P,title:U,Yd:L,Qf:w.getCurrentTime(),playbackRate:oa}},y.cd,w.getIframe());L=0;U=P="";oa=1;return A}function A(O){switch(O){case p.PLAYING:L=Math.round(w.getDuration());P=w.getVideoUrl();if(w.getVideoData){var K=w.getVideoData();U=K?K.title:""}oa=w.getPlaybackRate();y.If?ha.Ib("start"):ha.wc();
N=m(y.Vg,y.Ug,w.getDuration());return E(O);default:return A}}function E(){ka=w.getCurrentTime();ta=(new Date).getTime();ha.gh();na();return J}function J(O){var K;switch(O){case p.ENDED:return V(O);case p.PAUSED:K="pause";case p.BUFFERING:var sa=w.getCurrentTime()-ka;K=1<Math.abs(((new Date).getTime()-ta)/1E3*oa-sa)?"seek":K||"buffering";w.getCurrentTime()&&(y.Hf?ha.Ib(K):ha.wc());T();return M;case p.UNSTARTED:return C(O);default:return J}}function M(O){switch(O){case p.ENDED:return V(O);case p.PLAYING:return E(O);
case p.UNSTARTED:return C(O);default:return M}}function V(){for(;z;){var O=x;Yi(z);O()}y.Gf&&ha.Ib("complete",1);return C(p.UNSTARTED)}function W(){}function T(){z&&(Yi(z),z=0,x=W)}function na(){if(N.length&&0!==oa){var O=-1,K;do{K=N[0];if(K.sa>w.getDuration())return;O=(K.sa-w.getCurrentTime())/oa;if(0>O&&(N.shift(),0===N.length))return}while(0>O);x=function(){z=0;x=W;0<N.length&&N[0].sa===K.sa&&(N.shift(),ha.Ib("progress",K.ue,K.xe));na()};z=Zi(x,1E3*O)}}var ha,N=[],L,P,U,oa,ka,ta,ab=C(p.UNSTARTED);
z=0;x=W;return{onStateChange:function(O){ab=ab(O)},onPlaybackRateChange:function(O){ka=w.getCurrentTime();ta=(new Date).getTime();ha.wc();oa=O;T();na()}}}function k(w){for(var y=w.split(","),x=y.length,z=[],C=0;C<x;C++){var A=parseInt(y[C],10);isNaN(A)||100<A||0>A||z.push(A/100)}z.sort(function(E,J){return E-J});return z}function l(w){for(var y=w.split(","),x=y.length,z=[],C=0;C<x;C++){var A=parseInt(y[C],10);isNaN(A)||0>A||z.push(A)}z.sort(function(E,J){return E-J});return z}function m(w,y,x){var z=
w.map(function(E){return{sa:E,xe:E,ue:void 0}});if(!y.length)return z;var C=y.map(function(E){return{sa:E*x,xe:void 0,ue:E}});if(!z.length)return C;var A=z.concat(C);A.sort(function(E,J){return E.sa-J.sa});return A}function n(w){w.vtp_triggerStartOption?r(w):ye(function(){r(w)})}function r(w){var y=!!w.vtp_captureStart,x=!!w.vtp_captureComplete,z=!!w.vtp_capturePause,C=k(w.vtp_progressThresholdsPercent+""),A=l(w.vtp_progressThresholdsTimeInSeconds+""),E=!!w.vtp_fixMissingApi;if(y||x||z||C.length||
A.length){var J={If:y,Gf:x,Hf:z,Ug:C,Vg:A,ce:E,cd:void 0===w.vtp_uniqueTriggerId?"":w.vtp_uniqueTriggerId},M=X("YT"),V=function(){f(J)};G(w.vtp_gtmOnSuccess);if(M)M.ready&&M.ready(V);else{var W=X("onYouTubeIframeAPIReady");dj("onYouTubeIframeAPIReady",function(){W&&W();V()});G(function(){for(var T=X("document"),na=T.getElementsByTagName("script"),ha=na.length,N=0;N<ha;N++){var L=na[N].getAttribute("src");if(b(L,"iframe_api")||b(L,"player_api"))return}for(var P=T.getElementsByTagName("iframe"),U=P.length,
oa=0;oa<U;oa++)if(!v&&d(P[oa],J.ce)){R("https://www.youtube.com/iframe_api");v=!0;break}})}}else G(w.vtp_gtmOnSuccess)}var u=["www.youtube.com","www.youtube-nocookie.com"],p={UNSTARTED:-1,ENDED:0,PLAYING:1,PAUSED:2,BUFFERING:3,CUED:5},t,v=!1;Z.__ytl=n;Z.__ytl.b="ytl";Z.__ytl.g=!0;Z.__ytl.priorityOverride=0}();




Z.a.aev=["google"],function(){function a(p,t){var v=Sd(p,"gtm");if(v)return v[t]}function b(p,t,v,w){w||(w="element");var y=p+"."+t,x;if(n.hasOwnProperty(y))x=n[y];else{var z=a(p,w);if(z&&(x=v(z),n[y]=x,r.push(y),35<r.length)){var C=r.shift();delete n[C]}}return x}function c(p,t,v){var w=a(p,u[t]);return void 0!==w?w:v}function d(p,t){if(!p)return!1;var v=e($i());ua(t)||(t=String(t||"").replace(/\s+/g,"").split(","));for(var w=[v],y=0;y<t.length;y++)if(t[y]instanceof RegExp){if(t[y].test(p))return!1}else{var x=
t[y];if(0!=x.length){if(0<=e(p).indexOf(x))return!1;w.push(e(x))}}return!Qj(p,w)}function e(p){m.test(p)||(p="http://"+p);return Ye(Ze(p),"HOST",!0)}function f(p,t,v){switch(p){case "SUBMIT_TEXT":return b(t,"FORM."+p,h,"formSubmitElement")||v;case "LENGTH":var w=b(t,"FORM."+p,k);return void 0===w?v:w;case "INTERACTED_FIELD_ID":return l(t,"id",v);case "INTERACTED_FIELD_NAME":return l(t,"name",v);case "INTERACTED_FIELD_TYPE":return l(t,"type",v);case "INTERACTED_FIELD_POSITION":var y=a(t,"interactedFormFieldPosition");
return void 0===y?v:y;case "INTERACT_SEQUENCE_NUMBER":var x=a(t,"interactSequenceNumber");return void 0===x?v:x;default:return v}}function h(p){switch(p.tagName.toLowerCase()){case "input":return qc(p,"value");case "button":return rc(p);default:return null}}function k(p){if("form"===p.tagName.toLowerCase()&&p.elements){for(var t=0,v=0;v<p.elements.length;v++)vi(p.elements[v])&&t++;return t}}function l(p,t,v){var w=a(p,"interactedFormField");return w&&qc(w,t)||v}var m=/^https?:\/\//i,n={},r=[],u={ATTRIBUTE:"elementAttribute",
CLASSES:"elementClasses",ELEMENT:"element",ID:"elementId",HISTORY_CHANGE_SOURCE:"historyChangeSource",HISTORY_NEW_STATE:"newHistoryState",HISTORY_NEW_URL_FRAGMENT:"newUrlFragment",HISTORY_OLD_STATE:"oldHistoryState",HISTORY_OLD_URL_FRAGMENT:"oldUrlFragment",TARGET:"elementTarget"};(function(p){Z.__aev=p;Z.__aev.b="aev";Z.__aev.g=!0;Z.__aev.priorityOverride=0})(function(p){var t=p.vtp_gtmEventId,v=p.vtp_defaultValue,w=p.vtp_varType;switch(w){case "TAG_NAME":var y=a(t,"element");return y&&y.tagName||
v;case "TEXT":return b(t,w,rc)||v;case "URL":var x;a:{var z=String(a(t,"elementUrl")||v||""),C=Ze(z),A=String(p.vtp_component||"URL");switch(A){case "URL":x=z;break a;case "IS_OUTBOUND":x=d(z,p.vtp_affiliatedDomains);break a;default:x=Ye(C,A,p.vtp_stripWww,p.vtp_defaultPages,p.vtp_queryKey)}}return x;case "ATTRIBUTE":var E;if(void 0===p.vtp_attribute)E=c(t,w,v);else{var J=p.vtp_attribute,M=a(t,"element");E=M&&qc(M,J)||v||""}return E;case "MD":var V=p.vtp_mdValue,W=b(t,"MD",Ji);return V&&W?Mi(W,V)||
v:W||v;case "FORM":return f(String(p.vtp_component||"SUBMIT_TEXT"),t,v);default:return c(t,w,v)}})}();
Z.a.gas=["google"],function(){(function(a){Z.__gas=a;Z.__gas.b="gas";Z.__gas.g=!0;Z.__gas.priorityOverride=0})(function(a){var b=B(a),c=b;c[Ib.qa]=null;c[Ib.Ne]=null;var d=b=c;d.vtp_fieldsToSet=d.vtp_fieldsToSet||[];var e=d.vtp_cookieDomain;void 0!==e&&(d.vtp_fieldsToSet.push({fieldName:"cookieDomain",value:e}),delete d.vtp_cookieDomain);return b})}();
Z.a.smm=["google"],function(){(function(a){Z.__smm=a;Z.__smm.b="smm";Z.__smm.g=!0;Z.__smm.priorityOverride=0})(function(a){var b=a.vtp_input,c=Rj(a.vtp_map,"key","value")||{};return c.hasOwnProperty(b)?c[b]:a.vtp_defaultValue})}();




Z.a.paused=[],function(){(function(a){Z.__paused=a;Z.__paused.b="paused";Z.__paused.g=!0;Z.__paused.priorityOverride=0})(function(a){G(a.vtp_gtmOnFailure)})}();
Z.a.zone=[],function(){function a(r){for(var u=r.vtp_boundaries||[],p=0;p<u.length;p++)if(!u[p])return!1;return!0}function b(r){var u=Uc.s,p=u+":"+r.vtp_gtmTagId,t=S("gtm.uniqueEventId")||0,v=re(function(){return new h}),w=a(r),y=r.vtp_enableTypeRestrictions?r.vtp_whitelistedTypes.map(function(J){return J.typeId}):null;y=y&&Ka(y,f);if(v.registerZone(p,t,w,y))for(var x=r.vtp_childContainers.map(function(J){return J.publicId}),z=0;z<x.length;z++){var C=String(x[z]);if(v.registerChild(C,u,p)){var A=
0!==C.indexOf("GTM-");if(A){var E=function(J,M){cj(arguments)};E("js",new Date);m?(E("config",C),l||ij(C,A)):Lf({},C)}else ij(C,A)}}}var c={active:!1,isWhitelisted:function(){return!1}},d={active:!0,isWhitelisted:function(){return!0}},e={zone:!0,cn:!0,css:!0,ew:!0,eq:!0,ge:!0,gt:!0,lc:!0,le:!0,lt:!0,re:!0,sw:!0,um:!0},f={cl:["ecl"],ecl:["cl"],ehl:["hl"],hl:["ehl"]},h=function(){this.h={};this.i={}};h.prototype.checkState=function(r,u){var p=this.h[r];if(!p)return d;var t=this.checkState(p.se,u);if(!t.active)return c;
for(var v=[],w=0;w<p.ld.length;w++){var y=this.i[p.ld[w]];y.fb(u)&&v.push(y)}return v.length?{active:!0,isWhitelisted:function(x,z){z=z||[];if(!t.isWhitelisted(x,z))return!1;for(var C=0;C<v.length;++C)if(v[C].isWhitelisted(x,z))return!0;return!1}}:c};h.prototype.unregisterChild=function(r){delete this.h[r]};h.prototype.registerZone=function(r,u,p,t){var v=this.i[r];if(v)return v.m(u,p),!1;if(!p)return!1;this.i[r]=new k(u,t);return!0};h.prototype.registerChild=function(r,u,p){var t=this.h[r];if(!t&&
Vc[r]||t&&t.se!==u)return!1;if(t)return t.ld.push(p),!1;this.h[r]={se:u,ld:[p]};return!0};var k=function(r,u){this.h=[{eventId:r,fb:!0}];this.i=null;if(u){this.i={};for(var p=0;p<u.length;p++)this.i[u[p]]=!0}};k.prototype.m=function(r,u){var p=this.h[this.h.length-1];r<=p.eventId||p.fb!=u&&this.h.push({eventId:r,fb:u})};k.prototype.fb=function(r){if(!this.h||0==this.h.length)return!1;for(var u=this.h.length-1;0<=u;u--)if(this.h[u].eventId<=r)return this.h[u].fb;return!1};k.prototype.isWhitelisted=
function(r,u){u=u||[];if(!this.i||e[r]||this.i[r])return!0;for(var p=0;p<u.length;++p)if(this.i[u[p]])return!0;return!1};var l=!1;var m=!0;var n=function(r){b(r);G(r.vtp_gtmOnSuccess)};Z.__zone=n;Z.__zone.b="zone";Z.__zone.g=!0;Z.__zone.priorityOverride=0}();
Z.a.html=["customScripts"],function(){function a(d,e,f,h){return function(){try{if(0<e.length){var k=e.shift(),l=a(d,e,f,h);if("SCRIPT"==String(k.nodeName).toUpperCase()&&"text/gtmscript"==k.type){var m=F.createElement("script");m.async=!1;m.type="text/javascript";m.id=k.id;m.text=k.text||k.textContent||k.innerHTML||"";k.charset&&(m.charset=k.charset);var n=k.getAttribute("data-gtmsrc");n&&(m.src=n,ic(m,l));d.insertBefore(m,null);n||l()}else if(k.innerHTML&&0<=k.innerHTML.toLowerCase().indexOf("<script")){for(var r=
[];k.firstChild;)r.push(k.removeChild(k.firstChild));d.insertBefore(k,null);a(k,r,l,h)()}else d.insertBefore(k,null),l()}else f()}catch(u){G(h)}}}var b=function(d,e,f){ye(function(){var h,k=Vc;k.postscribe||(k.postscribe=ec);h=k.postscribe;var l={done:e},m=F.createElement("div");m.style.display="none";m.style.visibility="hidden";F.body.appendChild(m);try{h(m,d,l)}catch(n){G(f)}})};var c=function(d){if(F.body){var e=
d.vtp_gtmOnFailure,f=kj(d.vtp_html,d.vtp_gtmOnSuccess,e),h=f.Hc,k=f.B;if(d.vtp_useIframe){}else d.vtp_supportDocumentWrite?b(h,k,e):a(F.body,sc(h),k,e)()}else Zi(function(){c(d)},
200)};Z.__html=c;Z.__html.b="html";Z.__html.g=!0;Z.__html.priorityOverride=0}();






Z.a.lcl=[],function(){function a(){var e=X("document"),f=0,h=function(k){var l=k.target;if(l&&3!==k.which&&!(k.ug||k.timeStamp&&k.timeStamp===f)){f=k.timeStamp;l=tc(l,["a","area"],100);if(!l)return k.returnValue;var m=k.defaultPrevented||!1===k.returnValue,n=bh("lcl",m?"nv.mwt":"mwt",0),r;r=m?bh("lcl","nv.ids",[]):bh("lcl","ids",[]);if(r.length){var u=Yg(l,"gtm.linkClick",r);if(b(k,l,e)&&!m&&n&&l.href){var p=String(jj(l,"rel")||""),t=!!va(p.split(" "),function(y){return"noreferrer"===y.toLowerCase()});
t&&I("GTM",36);var v=X((jj(l,"target")||"_self").substring(1)),w=!0;if(cj(u,Og(function(){var y;if(y=w&&v){var x;a:if(t&&d){var z;try{z=new MouseEvent(k.type)}catch(C){if(!e.createEvent){x=!1;break a}z=e.createEvent("MouseEvents");z.initEvent(k.type,!0,!0)}z.ug=!0;k.target.dispatchEvent(z);x=!0}else x=!1;y=!x}y&&(v.location.href=jj(l,"href"))}),n))w=!1;else return k.preventDefault&&k.preventDefault(),k.returnValue=!1}else cj(u,function(){},n||2E3);return!0}}};nc(e,"click",h,!1);nc(e,"auxclick",h,
!1)}function b(e,f,h){if(2===e.which||e.ctrlKey||e.shiftKey||e.altKey||e.metaKey)return!1;var k=jj(f,"href"),l=k.indexOf("#"),m=jj(f,"target");if(m&&"_self"!==m&&"_parent"!==m&&"_top"!==m||0===l)return!1;if(0<l){var n=bj(k),r=bj(h.location);return n!==r}return!0}function c(e){var f=void 0===e.vtp_waitForTags?!0:e.vtp_waitForTags,h=void 0===e.vtp_checkValidation?!0:e.vtp_checkValidation,k=Number(e.vtp_waitForTagsTimeout);if(!k||0>=k)k=2E3;var l=e.vtp_uniqueTriggerId||"0";if(f){var m=function(r){return Math.max(k,
r)};ah("lcl","mwt",m,0);h||ah("lcl","nv.mwt",m,0)}var n=function(r){r.push(l);return r};ah("lcl","ids",n,[]);h||ah("lcl","nv.ids",n,[]);gj("lcl")||(a(),hj("lcl"));G(e.vtp_gtmOnSuccess)}var d=!1;d=!0;Z.__lcl=c;Z.__lcl.b="lcl";Z.__lcl.g=!0;Z.__lcl.priorityOverride=0;}();


var vm={};vm.macro=function(a){if(Vg.vc.hasOwnProperty(a))return Vg.vc[a]},vm.onHtmlSuccess=Vg.Xd(!0),vm.onHtmlFailure=Vg.Xd(!1);vm.dataLayer=Ld;vm.callback=function(a){ed.hasOwnProperty(a)&&qa(ed[a])&&ed[a]();delete ed[a]};function wm(){Vc[Uc.s]=vm;Ia(fd,Z.a);zb=zb||Vg;Ab=pe}
function xm(){Qh.gtm_3pds=!0;Vc=D.google_tag_manager=D.google_tag_manager||{};if(Vc[Uc.s]){var a=Vc.zones;a&&a.unregisterChild(Uc.s)}else{for(var b=data.resource||{},c=b.macros||[],d=0;d<c.length;d++)rb.push(c[d]);for(var e=b.tags||[],f=0;f<e.length;f++)vb.push(e[f]);for(var h=b.predicates||[],k=0;k<
h.length;k++)tb.push(h[k]);for(var l=b.rules||[],m=0;m<l.length;m++){for(var n=l[m],r={},u=0;u<n.length;u++)r[n[u][0]]=Array.prototype.slice.call(n[u],1);sb.push(r)}xb=Z;yb=Kj;wm();Ug();te=!1;ue=0;if("interactive"==F.readyState&&!F.createEventObject||"complete"==F.readyState)we();else{nc(F,"DOMContentLoaded",we);nc(F,"readystatechange",we);if(F.createEventObject&&F.documentElement.doScroll){var p=!0;try{p=!D.frameElement}catch(y){}p&&xe()}nc(D,"load",we)}sg=!1;"complete"===F.readyState?ug():nc(D,
"load",ug);a:{if(!Ad)break a;D.setInterval(Bd,864E5);}
bd=(new Date).getTime();
}}xm();

})()
