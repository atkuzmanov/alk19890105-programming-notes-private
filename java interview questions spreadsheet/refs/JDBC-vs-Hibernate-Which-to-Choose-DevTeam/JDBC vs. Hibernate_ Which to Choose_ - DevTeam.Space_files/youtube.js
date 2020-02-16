(function($){$(document).ready(function(){$(document).on('click','.youtube-preview',function(e){e.preventDefault();var videoID=$(this).attr('data-video-id');var videoWidth=$(this).attr('data-video-width');videoWidth=videoWidth.replace(/px/,'');var videoHeight=$(this).attr('data-video-height');videoHeight=videoHeight.replace(/px/,'');$(this).replaceWith('<iframe width="'+videoWidth+'" height="'+videoHeight+'" class="yt_player_iframe" '+
'src="https://www.youtube.com/embed/'+videoID+'?autoplay=1&enablejsapi=1"'+
'frameborder="0" '+
'allow="autoplay; encrypted-media" '+
'allowfullscreen></iframe>');});});})(jQuery);