(function($)
{"use strict";$.AviaVideoAPI=function(options,video,option_container)
{this.videoElement=video;this.$video=$(video);this.$option_container=option_container?$(option_container):this.$video;this.load_btn=this.$option_container.find('.av-click-to-play-overlay');this.video_wrapper=this.$video.parents('ul').eq(0);this.lazy_load=this.video_wrapper.hasClass('av-show-video-on-click')?true:false;this.isMobile=$.avia_utilities.isMobile;this.fallback=this.isMobile?this.$option_container.is('.av-mobile-fallback-image'):false;if(this.fallback)return;this._init(options);}
$.AviaVideoAPI.defaults={loop:false,mute:false,controls:false,events:'play pause mute unmute loop toggle reset unload'};$.AviaVideoAPI.apiFiles={youtube:{loaded:false,src:'https://www.youtube.com/iframe_api'}}
$.AviaVideoAPI.players={}
$.AviaVideoAPI.prototype={_init:function(options)
{this.options=this._setOptions(options);this.type=this._getPlayerType();this.player=false;this._bind_player();this.eventsBound=false;this.playing=false;this.$option_container.addClass('av-video-paused');this.pp=$.avia_utilities.playpause(this.$option_container);},_setOptions:function(options)
{var newOptions=$.extend(true,{},$.AviaVideoAPI.defaults,options),htmlData=this.$option_container.data(),i="";for(i in htmlData)
{if(htmlData.hasOwnProperty(i)&&(typeof htmlData[i]==="string"||typeof htmlData[i]==="number"||typeof htmlData[i]==="boolean"))
{newOptions[i]=htmlData[i];}}
return newOptions;},_getPlayerType:function()
{var vid_src=this.$video.get(0).src||this.$video.data('src');if(this.$video.is('video'))return 'html5';if(this.$video.is('.av_youtube_frame'))return 'youtube';if(vid_src.indexOf('vimeo.com')!=-1)return 'vimeo';if(vid_src.indexOf('youtube.com')!=-1)return 'youtube';},_bind_player:function()
{var _self=this;if(document.cookie.match(/aviaPrivacyVideoEmbedsDisabled/))
{this._use_external_link();return;}
if(this.lazy_load&&this.load_btn.length&&this.type!="html5")
{this.$option_container.addClass('av-video-lazyload');this.load_btn.on('click',function()
{_self.load_btn.remove();_self._setPlayer();});}
else
{this.lazy_load=false;this._setPlayer();}},_use_external_link:function()
{this.$option_container.addClass('av-video-lazyload');this.load_btn.on('click',function(e)
{if(e.originalEvent===undefined)return;var src_url=$(this).parents('.avia-slide-wrap').find('div[data-original_url]').data('original_url');if(src_url)window.open(src_url,'_blank');});},_setPlayer:function()
{var _self=this;switch(this.type)
{case "html5":this.player=this.$video.data('mediaelementplayer');if(!this.player)
{this.$video.data('mediaelementplayer',$.AviaVideoAPI.players[this.$video.attr('id').replace(/_html5/,'')]);this.player=this.$video.data('mediaelementplayer');}
this._playerReady();break;case "vimeo":var ifrm=document.createElement("iframe");var $ifrm=$(ifrm);ifrm.onload=function()
{_self.player=Froogaloop(ifrm);_self._playerReady();_self.$option_container.trigger('av-video-loaded');};ifrm.setAttribute("src",this.$video.data('src'));$ifrm.insertAfter(this.$video);this.$video.remove();this.$video=ifrm;break;case "youtube":this._getAPI(this.type);$('body').on('av-youtube-iframe-api-loaded',function(){_self._playerReady();});break;}},_getAPI:function(api)
{if($.AviaVideoAPI.apiFiles[api].loaded===false)
{$.AviaVideoAPI.apiFiles[api].loaded=true;var tag=document.createElement('script'),first=document.getElementsByTagName('script')[0];tag.src=$.AviaVideoAPI.apiFiles[api].src;first.parentNode.insertBefore(tag,first);}},_playerReady:function()
{var _self=this;this.$option_container.on('av-video-loaded',function(){_self._bindEvents();});switch(this.type)
{case "html5":this.$video.on('av-mediajs-loaded',function(){_self.$option_container.trigger('av-video-loaded');});this.$video.on('av-mediajs-ended',function(){_self.$option_container.trigger('av-video-ended');});break;case "vimeo":_self.player.addEvent('ready',function(){_self.$option_container.trigger('av-video-loaded');_self.player.addEvent('finish',function(){_self.$option_container.trigger('av-video-ended');});});break;case "youtube":var params=_self.$video.data();if(_self._supports_video())params.html5=1;_self.player=new YT.Player(_self.$video.attr('id'),{videoId:params.videoid,height:_self.$video.attr('height'),width:_self.$video.attr('width'),playerVars:params,events:{'onReady':function(){_self.$option_container.trigger('av-video-loaded');},'onError':function(player){$.avia_utilities.log('YOUTUBE ERROR:','error',player);},'onStateChange':function(event){if(event.data===YT.PlayerState.ENDED)
{var command=_self.options.loop!=false?'loop':'av-video-ended';_self.$option_container.trigger(command);}}}});break;}
setTimeout(function()
{if(_self.eventsBound==true||typeof _self.eventsBound=='undefined'||_self.type=='youtube'){return;}
$.avia_utilities.log('Fallback Video Trigger "'+_self.type+'":','log',_self);_self.$option_container.trigger('av-video-loaded');},2000);},_bindEvents:function()
{if(this.eventsBound==true||typeof this.eventsBound=='undefined')
{return;}
var _self=this,volume='unmute';this.eventsBound=true;this.$option_container.on(this.options.events,function(e)
{_self.api(e.type);});if(!_self.isMobile)
{if(this.options.mute!=false){volume="mute";}
if(this.options.loop!=false){_self.api('loop');}
_self.api(volume);}
setTimeout(function()
{_self.$option_container.trigger('av-video-events-bound').addClass('av-video-events-bound');},50);},_supports_video:function(){return!!document.createElement('video').canPlayType;},api:function(action)
{if(this.isMobile&&!this.was_started())return;if(this.options.events.indexOf(action)===-1)return;this.$option_container.trigger('av-video-'+action+'-executed');if(typeof this['_'+this.type+'_'+action]=='function')
{this['_'+this.type+'_'+action].call(this);}
if(typeof this['_'+action]=='function')
{this['_'+action].call(this);}},was_started:function()
{if(!this.player)return false;switch(this.type)
{case "html5":if(this.player.getCurrentTime()>0)return true;break;case "vimeo":if(this.player.api('getCurrentTime')>0)return true;break;case "youtube":if(this.player.getPlayerState()!==-1)return true;break;}
return false;},_play:function()
{this.playing=true;this.$option_container.addClass('av-video-playing').removeClass('av-video-paused');},_pause:function()
{this.playing=false;this.$option_container.removeClass('av-video-playing').addClass('av-video-paused');},_loop:function()
{this.options.loop=true;},_toggle:function()
{var command=this.playing==true?'pause':'play';this.api(command);this.pp.set(command);},_vimeo_play:function()
{this.player.api('play');},_vimeo_pause:function()
{this.player.api('pause');},_vimeo_mute:function()
{this.player.api('setVolume',0);},_vimeo_unmute:function()
{this.player.api('setVolume',0.7);},_vimeo_loop:function()
{},_vimeo_reset:function()
{this.player.api('seekTo',0);},_vimeo_unload:function()
{this.player.api('unload');},_youtube_play:function()
{this.player.playVideo();},_youtube_pause:function()
{this.player.pauseVideo()},_youtube_mute:function()
{this.player.mute();},_youtube_unmute:function()
{this.player.unMute();},_youtube_loop:function()
{if(this.playing==true)this.player.seekTo(0);},_youtube_reset:function()
{this.player.stopVideo();},_youtube_unload:function()
{this.player.clearVideo();},_html5_play:function()
{if(this.player)
{this.player.options.pauseOtherPlayers=false;this.player.play();}},_html5_pause:function()
{if(this.player)this.player.pause();},_html5_mute:function()
{if(this.player)this.player.setMuted(true);},_html5_unmute:function()
{if(this.player)this.player.setVolume(0.7);},_html5_loop:function()
{if(this.player)this.player.options.loop=true;},_html5_reset:function()
{if(this.player)this.player.setCurrentTime(0);},_html5_unload:function()
{this._html5_pause();this._html5_reset();}}
$.fn.aviaVideoApi=function(options,apply_to_parent)
{return this.each(function()
{var applyTo=this;if(apply_to_parent)
{applyTo=$(this).parents(apply_to_parent).get(0);}
var self=$.data(applyTo,'aviaVideoApi');if(!self)
{self=$.data(applyTo,'aviaVideoApi',new $.AviaVideoAPI(options,this,applyTo));}});}})(jQuery);window.onYouTubeIframeAPIReady=function(){jQuery('body').trigger('av-youtube-iframe-api-loaded');};var Froogaloop=(function(){function Froogaloop(iframe){return new Froogaloop.fn.init(iframe);}
var eventCallbacks={},hasWindowEvent=false,isReady=false,slice=Array.prototype.slice,playerOrigin='*';Froogaloop.fn=Froogaloop.prototype={element:null,init:function(iframe){if(typeof iframe==="string"){iframe=document.getElementById(iframe);}
this.element=iframe;return this;},api:function(method,valueOrCallback){if(!this.element||!method){return false;}
var self=this,element=self.element,target_id=element.id!==''?element.id:null,params=!isFunction(valueOrCallback)?valueOrCallback:null,callback=isFunction(valueOrCallback)?valueOrCallback:null;if(callback){storeCallback(method,callback,target_id);}
postMessage(method,params,element);return self;},addEvent:function(eventName,callback){if(!this.element){return false;}
var self=this,element=self.element,target_id=element.id!==''?element.id:null;storeCallback(eventName,callback,target_id);if(eventName!='ready'){postMessage('addEventListener',eventName,element);}
else if(eventName=='ready'&&isReady){callback.call(null,target_id);}
return self;},removeEvent:function(eventName){if(!this.element){return false;}
var self=this,element=self.element,target_id=element.id!==''?element.id:null,removed=removeCallback(eventName,target_id);if(eventName!='ready'&&removed){postMessage('removeEventListener',eventName,element);}}};function postMessage(method,params,target){if(!target.contentWindow.postMessage){return false;}
var data=JSON.stringify({method:method,value:params});target.contentWindow.postMessage(data,playerOrigin);}
function onMessageReceived(event){var data,method;try{data=JSON.parse(event.data);method=data.event||data.method;}
catch(e){}
if(method=='ready'&&!isReady){isReady=true;}
if(!(/^https?:\/\/player.vimeo.com/).test(event.origin)){return false;}
if(playerOrigin==='*'){playerOrigin=event.origin;}
var value=data.value,eventData=data.data,target_id=target_id===''?null:data.player_id,callback=getCallback(method,target_id),params=[];if(!callback){return false;}
if(value!==undefined){params.push(value);}
if(eventData){params.push(eventData);}
if(target_id){params.push(target_id);}
return params.length>0?callback.apply(null,params):callback.call();}
function storeCallback(eventName,callback,target_id){if(target_id){if(!eventCallbacks[target_id]){eventCallbacks[target_id]={};}
eventCallbacks[target_id][eventName]=callback;}
else{eventCallbacks[eventName]=callback;}}
function getCallback(eventName,target_id){if(target_id&&eventCallbacks[target_id]&&eventCallbacks[target_id][eventName]){return eventCallbacks[target_id][eventName];}
else{return eventCallbacks[eventName];}}
function removeCallback(eventName,target_id){if(target_id&&eventCallbacks[target_id]){if(!eventCallbacks[target_id][eventName]){return false;}
eventCallbacks[target_id][eventName]=null;}
else{if(!eventCallbacks[eventName]){return false;}
eventCallbacks[eventName]=null;}
return true;}
function isFunction(obj){return!!(obj&&obj.constructor&&obj.call&&obj.apply);}
function isArray(obj){return toString.call(obj)==='[object Array]';}
Froogaloop.fn.init.prototype=Froogaloop.fn;if(window.addEventListener){window.addEventListener('message',onMessageReceived,false);}
else{window.attachEvent('onmessage',onMessageReceived);}
return(window.Froogaloop=window.$f=Froogaloop);})();