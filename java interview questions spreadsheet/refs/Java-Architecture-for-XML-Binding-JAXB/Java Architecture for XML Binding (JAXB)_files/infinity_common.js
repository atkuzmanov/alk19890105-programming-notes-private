/*!
######################################################

# INFINITY_COMMON.JS

# Version: 1.00

# BUILD DATE: Fri Dec 20 2019 14:09:52 GMT+0530 (India Standard Time)

# COPYRIGHT ORACLE CORP 2019 [UNLESS STATED OTHERWISE]

######################################################
*/

/*! Truste - v1.0.0 */
!function(){try{oracle.truste.api.getGdprConsentDecision()}catch(err){var oracle=oracle||{};oracle.truste={},oracle.truste.api={},function(){this.getCookieName=function(){return"notice_preferences"},this.getStorageItemName=function(){return"truste.eu.cookie.notice_preferences"},this.getGdprCookieName=function(){return"notice_gdpr_prefs"},this.getGdprStorageItemName=function(){return"truste.eu.cookie.notice_gdpr_prefs"}}.apply(oracle.truste),function(){var e=oracle.truste;function t(e){for(var t=e+"=",r=document.cookie.split(";"),n=0;n<r.length;n++){for(var o=r[n];" "==o.charAt(0);)o=o.substring(1);if(0==o.indexOf(t))return o.substring(t.length,o.length)}return null}function r(e){var t,r=(t=e,"undefined"!=typeof Storage?localStorage.getItem(t):null);return null!=r?JSON.parse(r).value:null}this.getConsentCode=function(){var n=r(e.getStorageItemName())||t(e.getCookieName());return null==n?-1:parseInt(n)+1},this.getGdprConsentCode=function(){var n=r(e.getGdprStorageItemName())||t(e.getGdprCookieName());if(null==n)return-1;var o=new Array;o=n.split(",");for(a in o)o[a]=parseInt(o[a],10)+1;return o.toString()},this.getConsentDecision=function(){var e=this.getConsentCode();if(-1==e){var t='{"consentDecision": 0, "source": "implied"}';return JSON.parse(t)}t='{"consentDecision": '+parseInt(e)+', "source": "asserted"}';return JSON.parse(t)},this.getGdprConsentDecision=function(){var e=this.getGdprConsentCode();if(-1==e){var t='{"consentDecision": [0], "source": "implied"}';return JSON.parse(t)}t='{"consentDecision": ['+e+'], "source": "asserted"}';return JSON.parse(t)}}.apply(oracle.truste.api)}var trusteConsent=[];function getTrusteConsentLevel(){var consentStatus=new Array(-1,"NoTRUSTe");try{consentStatus[0]=oracle.truste.api.getGdprConsentDecision().consentDecision;consentStatus[1]=oracle.truste.api.getGdprConsentDecision().source}catch(err){consentStatus[0]=-1}if(-1==consentStatus[0])try{consentStatus[0]=truste.cma.callApi("getGDPRConsentDecision","oracle.com").consentDecision;consentStatus[1]=truste.cma.callApi("getGDPRConsentDecision","oracle.com").source}catch(err){consentStatus[0]=-1}return consentStatus}function getUserInfo(){var user={};if(ORA.analytics.getCookieRaw("ORA_WWW_MRKT")){var mrktCookie=ORA.analytics.getCookieRaw("ORA_WWW_MRKT");user.userType=mrktCookie.toLowerCase().indexOf("employee")>0?"O":"P";user.profileGUID=mrktCookie.split("~")[1].slice(2);user.cookieName="www_mrkt"}else if(ORA.analytics.getCookieRaw("ORA_UCM_INFO")){var ucmCookie=ORA.analytics.getCookieRaw("ORA_UCM_INFO");ucmCookie.split("~")[4]&&(user.userType=ucmCookie.split("~")[4].toLowerCase().indexOf("@oracle")>0?"O":"P");user.profileGUID=ucmCookie.split("~")[1];user.cookieName="ucm_info"}else{user.userType="A";user.cookieName="NoCookie";user.profileGUID="NotSent"}user.cookieName=trusteConsent[0]+"~"+trusteConsent[1]+"~"+user.cookieName;user.profileGUID=-1!=trusteConsent[0].indexOf(0)||-1!=trusteConsent[0].indexOf(3)?user.profileGUID:"NotSent";return user}var initCallback=function(config,asyncReady){if("NotSet"!=window.dataLayerObject.privacy.consentSource){trusteConsent[0]=window.dataLayerObject.privacy.consentDecision;trusteConsent[1]=window.dataLayerObject.privacy.consentSource}else trusteConsent=getTrusteConsentLevel();var userInfo=getUserInfo(),setUserInfo=function(ping){ping.payload["wt.gcm_uid"]=userInfo.profileGUID;ping.payload["wt.p_status"]=userInfo.userType;ping.payload["wt.p_cookie_att"]=userInfo.cookieName;ORA.analytics.rmMutation("setUserInfo")};ORA.analytics.addMutation("setUserInfo",setUserInfo);asyncReady&&asyncReady()};ORA.regPlugin("InfinityPlugin",initCallback,{blockCollect:!0})}();