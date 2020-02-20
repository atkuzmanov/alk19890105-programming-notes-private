$(document).ready(function(){$(".embeddedVideo").each(function(idx,item){var id=$(item).attr("id");var vid=id.replace(/.*?(\d+).*/,"$1");$.ajax({url:"/video/embed/"+vid+"/embed-wrapper",type:"GET",success:function(data){$(item).removeAttr("controls");var targetId="#mediaContainer"+vid+"target";var embedContainer=$(item).parent(".embed-container");var wrappedItem=$(data).find(targetId).prepend(item);embedContainer.html(wrappedItem);var $parentFigure=$(item).parents("figure.large");$parentFigure.addClass("video");var overlay=$(item).siblings(".over");var overlayText=$(item).siblings(".item-text");$(item).click(function(){loadVideo($(this))});$(overlay).click(function(){loadVideo($(item))});$(overlayText).click(function(){loadVideo($(item))})},error:function(jqXHR){window.console&&console.log(jqXHR)}})});function loadVideo(item){var id=$(item).attr("id");var vid=id.replace(/.*?(\d+).*/,"$1");$.ajax({url:"/video/embed/"+vid+"/embed",type:"GET",success:function(data){var $parentFigure=$(item).parents("figure.large");$parentFigure.find(".item-text, .over").remove();$parentFigure.find(".vjs-poster").remove();$parentFigure.addClass("video-loaded");$parentFigure.find(".vjs-poster").remove();transitionVideo(item,data,$parentFigure)},error:function(jqXHR){window.console&&console.log(jqXHR)}})}function transitionVideo(item,data,$parentFigure){var $embedContainer=$(item).parents(".embed-container");$embedContainer.animate({opacity:"0"},250,function(){$(item).replaceWith(data)}).animate({opacity:"1"},750)}var isiPad=navigator.userAgent.match(/iPad/i)!=null;if(isiPad){$(".article .thm-gallery .embed-wrapper .embed-container .item-text").addClass("ipad");$(".article .thm-gallery .embed-wrapper .video-js .vjs-big-play-button").addClass("ipad")}});