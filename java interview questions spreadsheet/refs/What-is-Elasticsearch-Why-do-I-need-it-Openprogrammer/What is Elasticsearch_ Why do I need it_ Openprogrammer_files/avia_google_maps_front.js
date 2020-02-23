"use strict";(function($)
{var objAviaGoogleMaps=null;var AviaGoogleMaps=function(){if('undefined'==typeof window.av_google_map||'undefined'==typeof avia_framework_globals)
{return;}
if(objAviaGoogleMaps!=null)
{return;}
objAviaGoogleMaps=this;this.document=$(document);this.script_loading=false;this.script_loaded=false;this.script_source=avia_framework_globals.gmap_avia_api;this.maps={};this.loading_icon_html='<div class="ajax_load"><span class="ajax_load_inner"></span></div>';this.LoadAviaMapsAPIScript();};AviaGoogleMaps.prototype={LoadAviaMapsAPIScript:function()
{this.maps=$('body').find('.avia-google-map-container');if(this.maps.length==0)
{return;}
var needToLoad=false;this.maps.each(function(index){var container=$(this);if(container.hasClass('av_gmaps_show_unconditionally')||container.hasClass('av_gmaps_show_delayed'))
{needToLoad=true;return false;}});if(!needToLoad)
{return;}
if(document.cookie.match(/aviaPrivacyGoogleMapsDisabled/))
{$('.av_gmaps_main_wrap').addClass('av-maps-user-disabled');return;}
if(typeof $.AviaMapsAPI!='undefined')
{this.AviaMapsScriptLoaded();return;}
$('body').on('avia-google-maps-api-script-loaded',$.proxy(this.AviaMapsScriptLoaded,this));this.script_loading=true;var script=document.createElement('script');script.id='avia-gmaps-api-script';script.type='text/javascript';script.src=this.script_source;document.body.appendChild(script);},AviaMapsScriptLoaded:function()
{this.script_loading=false;this.script_loaded=true;var object=this;this.maps.each(function(index){var container=$(this);if(container.hasClass('av_gmaps_show_page_only'))
{return;}
var mapid=container.data('mapid');if('undefined'==typeof window.av_google_map[mapid])
{console.log('Map cannot be displayed because no info: '+mapid);return;}
if(container.hasClass('av_gmaps_show_unconditionally'))
{container.aviaMaps();}
else if(container.hasClass('av_gmaps_show_delayed'))
{var wrap=container.closest('.av_gmaps_main_wrap');var confirm=wrap.find('a.av_text_confirm_link');confirm.on('click',object.AviaMapsLoadConfirmed);}
else
{console.log('Map cannot be displayed because missing display class: '+mapid);}});},AviaMapsLoadConfirmed:function(event)
{event.preventDefault();var confirm=$(this);var container=confirm.closest('.av_gmaps_main_wrap').find('.avia-google-map-container');container.aviaMaps();}};$(function()
{new AviaGoogleMaps();});})(jQuery);