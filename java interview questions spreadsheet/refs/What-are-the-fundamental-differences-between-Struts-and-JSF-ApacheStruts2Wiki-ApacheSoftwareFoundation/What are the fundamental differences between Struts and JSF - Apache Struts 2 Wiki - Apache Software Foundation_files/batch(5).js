WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access-util.js' */
define("confluence/request-access/request-access-util",["confluence/legacy"],function(b){var a=function a(c){if(c.length===1){return AJS.format("We\u0027\u0027ve asked {0} to give you access. You\u0027\u0027ll get an email once the request is approved.",b.Request.Access.usernameLink({user:c[0]}))}if(c.length===2){return AJS.format("We\u0027\u0027ve asked {0} and {1} to give you access. You\u0027\u0027ll get an email once the request is approved.",b.Request.Access.usernameLink({user:c[0]}),b.Request.Access.usernameLink({user:c[1]}))}if(c.length===3){return AJS.format("We\u0027\u0027ve asked {0}, {1} and one more user to give you access. You\u0027\u0027ll get an email once the request is approved.",b.Request.Access.usernameLink({user:c[0]}),b.Request.Access.usernameLink({user:c[1]}))}return AJS.format("We\u0027\u0027ve asked {0}, {1} and {2} more users to give you access. You\u0027\u0027ll get an email once the request is approved.",b.Request.Access.usernameLink({user:c[0]}),b.Request.Access.usernameLink({user:c[1]}),c.length-2)};return{messageBody:a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-access-page.js' */
require(["ajs","jquery","confluence/legacy","confluence/meta","confluence/request-access/request-access-util"],function(a,d,e,b,c){a.toInit(function(){var g=b.get("page-id");var f=b.get("remote-user");var k=d(".request-access-container");var j=d(".request-access-container button");var i=j.data("access-type");var h=d("#invite-to-edit-draft").length;if(h){g=d("#invite-to-edit-draft").data("draft-id")}if(k.length){d("#breadcrumbs").hide();d("#title-text.with-breadcrumbs").hide();if(j.length){a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page.view",data:{pageId:g,requestAccessUser:f,accessType:i}})}}j.prop("disabled",false);j.removeAttr("aria-disabled");j.click(function(){a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:g,requestAccessUser:f,accessType:i}});j.attr("aria-disabled","true");var l=d(e.Request.Access.loading({}));j.replaceWith(l);d.ajax({url:e.getContextPath()+"/rest/access/latest/page/restriction/"+g+"/request/"+i,type:"POST",contentType:"application/json; charset=utf-8",success:function(m){if(m.users.length===0){a.flag({type:"error",title:"Access request unsuccessful",body:"Your request for access has not been sent. Contact your space admin."});return}a.flag({type:"success",title:"Request sent",body:c.messageBody(m.users)})},error:function(m,n){a.flag({type:"error",title:"Access request unsuccessful",body:"Your request for access has not been sent. Contact your space admin."})},complete:function(){l.remove();e.Binder.userHover()}})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/request-edit-access-dialog.js' */
require(["ajs","jquery","confluence/legacy","confluence/meta","confluence/request-access/request-access-util"],function(a,d,e,b,c){a.toInit(function(){var f=WRM.data.claim("com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources.mail-server-configured");var m=d("#system-content-items");var n=d("#content-metadata-page-restrictions").length!==0;var i=b.get("page-id");var j=b.get("remote-user");if(!m.length||!n||d("#editPageLink").length||!k()){return}var l=d(e.Request.Access.loading());var g=a.InlineDialog(m,"requestAccessDialog",h,o());function h(q,p,r){q.css({padding:"20px"}).html(e.Request.Access.dialog({canRequestAccess:f&&j}));q.on("click","#request-access-dialog-button",function(u){u.stopPropagation();var s=q.find(".actions-result");s.replaceWith(l);a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.request.access.to.page",data:{pageId:i,requestAccessUser:j,accessType:"edit"}});var t="";d.ajax({url:e.getContextPath()+"/rest/access/latest/page/restriction/"+i+"/request/edit",type:"POST",contentType:"application/json; charset=utf-8",data:j,success:function(v){if(v.users.length===0){a.flag({type:"error",title:"Access request unsuccessful",body:"Your request for access has not been sent. Contact your space admin."});return}a.flag({type:"success",title:"Request sent",body:c.messageBody(v.users)})},error:function(v){if(v.status==412){t="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(v.status==502){t="Access was granted, but an unexpected error happened while sending the notification."}else{t="Sorry, there was an unexpected error while granting access."}}a.flag({type:"error",title:"Access request unsuccessful",body:t})},complete:function(){l.remove();g.hide()}})});q.on("click",".aui-button.cancel",function(s){g.hide()});r();return false}function o(){return{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(g.hide(),5000)}}}function k(){var p=window.location.search.match(/[\?&]requestEditAccess=/);return !!(p&&p.length)}g.show()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/js/grant-access.js' */
require(["ajs","jquery","confluence/legacy","confluence/meta"],function(a,c,d,b){a.toInit(function(){var e=b.get("page-id");var i=b.get("remote-user");var p=s("username");var h=s("accessType");var g=s("userFullName");var k=c("#system-content-items");var m=c("#content-metadata-page-restrictions").length!==0;var j=c("#rte-button-restrictions");var n=o()&&j.length&&s("grantAccess")&&h;var r=k.length&&m&&s("grantAccess")&&h;if(!r&&!n){return}if(n){k=j;e=b.get("draft-id")}var f=c(d.Request.Access.loading());var q=a.InlineDialog(k,"grantAccessDialog",function(u,t,v){u.css({padding:"20px"}).html(d.Grant.Access.dialog({requestAccessUsername:p,requestAccessUserFullName:g,requestAccessType:h,contentType:b.get("content-type")}));u.on("click",".aui-button.grant-access",function(z){z.stopPropagation();var y=u.find(".actions-result");y.replaceWith(f);a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.grant.access.to.page",data:{pageId:e,grantAccessUser:i,requestAccessUser:p,accessType:h}});var x="";var w="";c.ajax({url:d.getContextPath()+"/rest/access/latest/page/restriction/"+e+"/grant/"+h,type:"POST",contentType:"application/json; charset=utf-8",data:p,success:function(B,C,A){if(A.status===202){x="It\u0027s the thought that counts";w="Someone already granted access to this person."}else{x="Access request granted";w="We\u0027ll let them know this request has been granted."}a.flag({type:"success",title:x,body:w})},error:function(A){if(A.status===412){w="Access was granted, but there is not a mail server configured so the notification could not be sent."}else{if(A.status===502){w="Access was granted, but an unexpected error happened while sending the notification."}else{w="Sorry, there was an unexpected error while granting access."}}a.flag({type:"error",title:"Access request error",body:w})},complete:function(){q.hide()}})});u.on("click",".aui-button.deny-access",function(){a.trigger("analyticsEvent",{name:"confluence.request.access.plugin.deny.access.to.page",data:{pageId:e,grantAccessUser:i,requestAccessUser:p,accessType:h}});q.hide()});v();return false},{offsetY:2,offsetX:0,width:350,hideDelay:null,noBind:true,hideCallback:function(){setTimeout(q.hide(),5000)}});l(e,p,h).done(function(t){if(t.hasPermission){a.flag({type:"success",title:"It\u0027s the thought that counts",body:"Someone already granted access to this person."})}else{q.show()}}).fail(function(t){console.error("Was unable to check current user permission",t);q.show()});function s(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var v=new RegExp("[\\?&]"+t+"=([^&#]*)"),u=v.exec(location.search);return u==null?"":decodeURIComponent(u[1].replace(/\+/g," "))}function l(t,v,u){return c.ajax({url:d.getContextPath()+"/rest/access/latest/page/restriction/"+t+"/check/"+u,data:{username:v},type:"GET",contentType:"application/json; charset=utf-8"})}function o(){return a.Rte&&a.Rte.getEditor&&a.Rte.getEditor()&&(!!a.$("#editpageform").length||!!a.$("#createpageform").length)}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/request-access.soy' */
// This file was automatically generated from request-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Request.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Request == 'undefined') { Confluence.Request = {}; }
if (typeof Confluence.Request.Access == 'undefined') { Confluence.Request.Access = {}; }


Confluence.Request.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("/confluence") + '/display/~' + soy.$$escapeUri(opt_data.user.name) + '" class="url fn confluence-userlink" title data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.usernameLink.soyTemplateName = 'Confluence.Request.Access.usernameLink';
}


Confluence.Request.Access.loading = function(opt_data, opt_ignored) {
  return '<span id="request-access-loading" class=\'aui-icon aui-icon-wait\'>' + soy.$$escapeHtml('Loading, please wait') + '</span>"';
};
if (goog.DEBUG) {
  Confluence.Request.Access.loading.soyTemplateName = 'Confluence.Request.Access.loading';
}


Confluence.Request.Access.dialog = function(opt_data, opt_ignored) {
  return '<div class="request-access-dialog"><h2 class="grant-access-title">' + soy.$$escapeHtml('You don\x27t have permission to edit') + '</h2>' + ((opt_data.canRequestAccess) ? '<p class="grant-access-message">' + soy.$$escapeHtml('Hit request access and we\x27ll find someone who can give you access.') + '</p><div class="actions-result"><button id="request-access-dialog-button" class="aui-button">' + soy.$$escapeHtml('Request access') + '</button><button class="aui-button aui-button-link cancel">' + soy.$$escapeHtml('Cancel') + '</button><div>' : '<p class="grant-access-message">' + soy.$$escapeHtml('A space admin or the person who shared this page may be able to give you access.') + '</p><div class="actions-result"><button class="aui-button aui-button-link cancel">' + soy.$$escapeHtml('Close') + '</button><div>') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Request.Access.dialog.soyTemplateName = 'Confluence.Request.Access.dialog';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-resources', location = '/templates/soy/grant-access.soy' */
// This file was automatically generated from grant-access.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Grant.Access.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Grant == 'undefined') { Confluence.Grant = {}; }
if (typeof Confluence.Grant.Access == 'undefined') { Confluence.Grant.Access = {}; }


Confluence.Grant.Access.dialog = function(opt_data, opt_ignored) {
  var output = '<div class="grant-access-dialog">';
  var usernameLink__soy4 = '' + Confluence.Grant.Access.usernameLink({username: opt_data.requestAccessUsername, userFullName: opt_data.requestAccessUserFullName});
  var requestAccessDescription__soy8 = '' + ((opt_data.requestAccessType == 'edit') ? (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eedit\x3c/strong\x3e this blog post.',usernameLink__soy4)) : soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eedit\x3c/strong\x3e this page.',usernameLink__soy4)) : (opt_data.contentType == 'blogpost') ? soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eview\x3c/strong\x3e this blog post.',usernameLink__soy4)) : soy.$$filterNoAutoescape(AJS.format('{0} wants to \x3cstrong\x3eview\x3c/strong\x3e this page.',usernameLink__soy4)));
  output += '<h2 class="title grant-access-title">' + soy.$$escapeHtml('Access request') + '</h2><p class="grant-access-message">' + soy.$$filterNoAutoescape(requestAccessDescription__soy8) + '</p><div class="actions-result"><button class="aui-button grant-access">' + soy.$$escapeHtml('Grant access') + '</button><button class="aui-button aui-button-link deny-access">' + soy.$$escapeHtml('Deny') + '</button><div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Grant.Access.dialog.soyTemplateName = 'Confluence.Grant.Access.dialog';
}


Confluence.Grant.Access.usernameLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml("/confluence") + '/display/~' + soy.$$escapeHtml(opt_data.username) + '" class="url fn" title data-username="' + soy.$$escapeHtml(opt_data.username) + '"><strong>' + soy.$$escapeHtml(opt_data.userFullName) + '</strong> (' + soy.$$escapeHtml(opt_data.username) + ')</a>';
};
if (goog.DEBUG) {
  Confluence.Grant.Access.usernameLink.soyTemplateName = 'Confluence.Grant.Access.usernameLink';
}

}catch(e){WRMCB(e)};