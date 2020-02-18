(function($){$(function(){$(document).ready(function(){$(".app-navbar-toggler").click(function(){$(".app-header").toggleClass("menu-opened");});});$(document).on("click",".menu-item-has-children > a",function(ev){ev.preventDefault();var currentItem=$(this).parent(".menu-item");var currentItemSubmenu=currentItem.children(".sub-menu");$(".sub-menu").each(function(){var sumbenu=$(this);var item=sumbenu.closest(".menu-item");if(typeof item!=="undefined"){if(item.attr("id")===currentItem.attr("id")&&!currentItemSubmenu.hasClass("active")){sumbenu.show().addClass("active");}else{sumbenu.hide().removeClass("active");}}});});$(document).on("click",function(ev){if($(ev.target).closest(".menu-item").length===0&&$(ev.target).closest(".sub-menu").length===0){$(".sub-menu").hide().removeClass("active");}});$(".author-widget-tabs a").on("click",function(e){e.preventDefault();var $this=$(this),$tabsContainer=$this.closest(".author-widget-content"),$tabsList=$this.closest(".author-widget-tabs"),tabIndex=$this.parent().index();if(!$this.parent().hasClass("active")){$tabsList.find("li").removeClass("active").eq(tabIndex).addClass("active");$tabsContainer.find(".author-widget-tab-section").removeClass("shown").eq(tabIndex).stop(true,true).fadeIn(500).addClass("shown").removeAttr("style");}else{return false;}});$(".app-faq-card").find("a").on("click",function(){var toggleContainer=$(this).closest(".faq-card");if(!toggleContainer.hasClass("opened")){toggleContainer.addClass("opened");}else{toggleContainer.removeClass("opened");}});if($(".app-technology-top-developers-slider").length>0){$(".app-technology-top-developers-slider").not(".slick-initialized").slick({centerMode:false,slidesToShow:3,arrows:true,autoplay:false,lazyLoad:"ondemand",responsive:[{breakpoint:1200,settings:{centerMode:true,centerPadding:"30px",slidesToShow:2}},{breakpoint:660,settings:{centerMode:true,centerPadding:"30px",slidesToShow:1}},{breakpoint:480,settings:{centerMode:false,slidesToShow:1}}]});}
if($(".app-developers-list").length>0){$(".app-developers-list").not(".slick-initialized").slick({settings:"unslick",lazyLoad:"ondemand",responsive:[{breakpoint:9200,settings:"unslick"},{breakpoint:992,settings:{settings:"slick",arrows:true,centerMode:true,centerPadding:"30px",slidesToShow:1}},{breakpoint:450,settings:{centerMode:false,centerPadding:"30px",slidesToShow:1}}]});}
$(".app-developer-card-slider").slick({centerMode:false,slidesToShow:8,arrows:true,autoplay:false,lazyLoad:"ondemand",infinite:true,responsive:[{breakpoint:1440,settings:{slidesToShow:7}},{breakpoint:1200,settings:{slidesToShow:5}},{breakpoint:992,settings:{slidesToShow:4}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:500,settings:{slidesToShow:1}}]});if($(".post-developer-card-slider").length>0){$(".post-developer-card-slider").on("init",()=>{$(".post-developer-card-slider").removeClass("invisible");}).not(".slick-initialized").slick({centerMode:false,slidesToShow:1,infinite:true,arrows:false,dots:true,lazyLoad:"ondemand",autoplay:true});}
$(".app-clutch-card-slider").slick({centerMode:false,slidesToShow:4,arrows:false,lazyLoad:"ondemand",autoplay:false,responsive:[{breakpoint:1200,settings:{centerMode:true,centerPadding:"30px",slidesToShow:3}},{breakpoint:992,settings:{centerMode:true,slidesToShow:2}},{breakpoint:768,settings:{centerMode:true,centerPadding:"50px",slidesToShow:1}},{breakpoint:480,settings:{centerMode:false,slidesToShow:1}}]});if($(".app-video-slider").length>0){$(".app-video-slider").not(".slick-initialized").slick({centerMode:false,slidesToShow:1,arrows:true,dots:true,touchThreshold:100,fade:true,infinite:true,cssEase:"cubic-bezier(0.7, 0, 0.3, 1)",autoplay:true,autoplaySpeed:10000,lazyLoad:"ondemand",responsive:[{breakpoint:769,settings:{arrows:false}}]});}
$(document).ready(function(){if($(".tags-data").height()>100){$(".tags-data").css("height","94px").css("overflow","hidden");}else{$(".btn-show-tags").hide();}
$(".btn-show-tags").on("click",()=>{$(".tags-data").css("height","auto");$(".btn-show-tags").hide();});});$(document).ready(function(){var time=15;var $bar,$slick,tick,percentTime;$slick=$(".video-blog-slider");$slick.on("init",(event,slick)=>{$slick.removeClass("hidden");});$slick.slick({draggable:true,adaptiveHeight:false,mobileFirst:true,centerMode:false});$bar=$(".video-slider-progress .slider-progress");function startProgressbar(){resetProgressbar();percentTime=0;isPause=false;tick=setInterval(interval,10);}
function interval(){percentTime+=1/(time+0.1);$bar.css({width:percentTime+"%"});if(percentTime>=100){$slick.slick("slickNext");startProgressbar();}}
function resetProgressbar(){$bar.css({width:0+"%"});clearTimeout(tick);}
startProgressbar();});if($(".app-testimonials-slider").length>0){$(".app-testimonials-slider").not(".slick-initialized").slick({centerMode:false,slidesToShow:1,infinite:true,arrows:false,dots:true,lazyLoad:"ondemand",autoplay:true});}
if($(".app-projects-slider-inline").length>0){$(".app-projects-slider-inline").not(".slick-initialized").slick({centerMode:false,slidesToShow:4,infinite:true,prevArrow:'<button class="custom-slick-arrow prev-slide"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="51"><path fill="#FFF" fill-rule="evenodd"d="M2.637 0L0 2.553l23.714 22.941L0 48.447 2.637 51l23.714-22.964L29 25.494z"/></svg></button>',nextArrow:'<button class="custom-slick-arrow next-slide"><svg xmlns="http://www.w3.org/2000/svg" width="29" height="51"><path fill="#FFF" fill-rule="evenodd"d="M2.637 0L0 2.553l23.714 22.941L0 48.447 2.637 51l23.714-22.964L29 25.494z"/></svg></button>',dots:false,lazyLoad:"ondemand",responsive:[{breakpoint:1299.9,settings:{slidesToShow:3}},{breakpoint:991.9,settings:{slidesToShow:2}},{breakpoint:767.9,settings:{slidesToShow:1}}]});}
$("body").on("shown.bs.modal",".modal",function(ev){if($(ev.target).find("video")[0]!==undefined){$(ev.target).find("video").removeAttr("preload");$(ev.target).find("video")[0].play();}
if($(ev.target).find(".youtube-preview")!==undefined){$(ev.target).find(".youtube-preview").click();}
$(ev.target).find(".yt_player_iframe").each(function(){this.contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}',"*");});});$("body").on("hidden.bs.modal",".modal",function(){$("video").each(function(){$(this)[0].pause();});$(".yt_player_iframe").each(function(){this.contentWindow.postMessage('{"event":"command","func":"pauseVideo","args":""}',"*");});});$('.app-anchor, [data-is-anchor="1"]').on("click",function(ev){var bodyOffset=parseInt($("body").css("padding-top"));var documentOffset=parseInt($("html").css("margin-top"));var scrollSpeed=1000;var chosenAnchor=$(this).attr("href");chosenAnchor=chosenAnchor.replace(/\//,"");if(typeof chosenAnchor!=="undefined"&&chosenAnchor.length>1&&$(chosenAnchor).offset()!==undefined&&/\#/.test(chosenAnchor)){ev.preventDefault();$("html, body").animate({scrollTop:$(chosenAnchor).offset().top-(bodyOffset+documentOffset)},scrollSpeed);}});$(window).scroll(function(){if($(this).scrollTop()>100){$(".scroll-to-top").fadeIn();}else{$(".scroll-to-top").fadeOut();}});$(".scroll-to-top").click(function(){$("html, body").animate({scrollTop:0},800);return false;});$(function(){$('[data-toggle="tooltip"]').tooltip();});if($(".app-projects-slider").length>0){$(".app-projects-slider").not(".slick-initialized").slick({settings:"unslick",lazyLoad:"ondemand",responsive:[{breakpoint:9200,arrows:false,settings:"unslick"},{breakpoint:991.9,settings:{settings:"slick",arrows:false,centerMode:true,centerPadding:"30px",slidesToShow:2}},{breakpoint:767.9,settings:{arrows:false,centerMode:true,slidesToShow:1}},{breakpoint:420,settings:{arrows:false,centerMode:true,slidesToShow:1}}]});}
$(document).on("click","[data-target]:not(.app-navbar-toggler)",function(e){var target=$(this).attr("data-target");if(!target.match(/^#/)){target="#"+target;}
var targetModal=$(target);if(targetModal!==undefined&&targetModal.length){e.preventDefault();targetModal.modal("show");}});$(document).find("#FAQModal").on("submit",function(e){e.preventDefault();var modal=$(this).parents("#faq-modal");var emailObj=$(this).find('input[name="EMAIL"]');grecaptcha.execute(window.reCaptchaV3SiteKey,{action:"faq_modal"}).then(function(token){$.post("/wp-admin/admin-ajax.php","action=recaptcha_validation&captcha_action=faq_modal&token="+token).done(function(response){if(response.result){$.post("/wp-admin/admin-ajax.php?action=download_cheat_sheet_pdf",$(this).serialize(),function(response){if(!response.result){emailObj.parent().find("span.error").html(response.message);console.error(response.exception);return false;}
modal.find('input[name="EMAIL"]').val("");modal.modal("hide");});}});});});exitpopup({aggressive:true,timer:0,sensitivity:20,delay:0,sitewide:true,cookieExpire:999,callback:function(){$(document).find("#service-modal-trusted").modal("show");}});$.validator.addMethod("email",function(value,element){return /^[-a-z0-9~!$%^&*_=+}{\'?]+(\.[-a-z0-9~!$%^&*_=+}{\'?]+)*@([a-z0-9_][-a-z0-9_]*(\.[-a-z0-9_]+)*\.(aero|arpa|biz|com|coop|edu|gov|info|int|mil|museum|name|net|org|pro|travel|mobi|[a-z][a-z])|([0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}))(:[0-9]{1,5})?$/i.test(value);},"Please enter a valid email address");$.each($.validator.methods,function(key,value){$.validator.methods[key]=function(){if(arguments.length>0){arguments[0]=$.trim(arguments[0]);}
return value.apply(this,arguments);};});$(document).find("#exitPopupModal").validate({submitHandler:function(form){$(form).find('[type="submit"]').prop("disabled",true);if(!$(form).find("label.error").length){$(form).find(".form-group").append('<label class="error"></label>');}
var $onError=function(error){console.error("Unable to send gift",error);$(form).find('[type="submit"]').prop("disabled",false);$(form).find(".error").html("Something went wrong. Try again later.").show();};grecaptcha.execute(window.reCaptchaV3SiteKey,{action:"popup_form"}).then(function(token){$.post("/wp-admin/admin-ajax.php","action=recaptcha_validation&captcha_action=popup_form&token="+token).done(function(response){if(response.result){$.post("/wp-admin/admin-ajax.php?action=mailchimp_subscription",$(form).serialize()).done(function(response){$(form).find('[type="submit"]').prop("disabled",false);if(!response.result){$(form).find(".error").html(response.exception.replace(/\s+Use PUT to insert or update list members\./,""));}else{window.location.href=$(form).attr("data-redirect-url");}}).fail($onError);}else{$onError(response);}}).fail($onError);});}});$(document).on("click",".help-video-popup-link",function(e){e.preventDefault();$(this).find("video").trigger("pause");$(document).find("#help-video-popup").modal("show");});});})(jQuery);