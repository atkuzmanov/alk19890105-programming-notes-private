/* $Id$ */
(function ($) {
  Drupal.behaviors.tray = {
    attach: function(context, settings) {
      
      //fix for right items block position
      if($('li.tray-item-position-right:not(.tray-item-processed, .tray-item-full)').length) {
        $('li.tray-item-position-right:not(.tray-item-processed)', context).each(function() {
          var handle = $(this).find('.tray-item-handle');
          var p = handle.offset();
          $(this).find('.tray-item-block').css({
            right : parseInt($('body').width()) - (p.left + parseInt(handle.parent('li').width()) + 1)
          });
        }).addClass('tray-item-processed');
      }
      
      //on click event
      $('.tray-item-handle:not(.tray-item-processed)', context).click(function(e){
        e.preventDefault();
        var $item = $(this);
        //check if the item is ajax processed and fire the call if the event is open
        if($item.parent('li').hasClass('tray-item-ajax-processed') && !$item.parent('li').hasClass('tray-item-active')) {
          //add ajax classes
          $item.parent('li').addClass('tray-item-ajax-processing');
          var bid = parseInt($(this).parent('li').attr('id').replace('tray-item-', ''));

          $.ajax({
            method : 'GET',
            dataType: 'json',
            url: Drupal.settings.tray.trayPath + '/' + bid,
            success : function(data){
              $('#tray-item-' + bid).find('.tray-item-content').html(data.content);
              //remove ajax classes
              $item.parent('li').removeClass('tray-item-ajax-processing');
              showItem($item);
            },
            complete: function(xhr, error){
              //console.info('Complete');
              //console.log(error);
              //console.log(xhr);
            },
            error: function(xhr, error){
              console.info('Error');
              console.log(error);
              console.log(xhr);

              $('#tray-item-' + bid).find('.tray-item-content').html('Error:'+xhr.statusText);
              $item.parent('li').removeClass('tray-item-ajax-processing');
              showItem($item);
            }
          })


        } else {
          showItem($item);
        }
      }).addClass('tray-item-processed');
        
      //minimize tray item
      $('.tray-item-minimize:not(.tray-item-processed)').click(function(e){
        e.preventDefault();
        minimizeActiveItem();
      }).addClass('tray-item-processed');
        
      //close tray item
      $('.tray-item-close:not(.tray-item-processed)').click(function(e){
        e.preventDefault();
        closeActiveItem();
      }).addClass('tray-item-processed');
    }
  }
  
  function showItem($item) {
    $('.tray-item-active').removeClass('tray-item-active');
    $item.parent('li').toggleClass('tray-item-active');
    $('li.tray-item').each(function(){
      if(!$(this).hasClass('tray-item-active')){
        $(this).find('.tray-item-block').hide();
      }
    });
    $item.next('.tray-item-block').slideToggle(100);
  }
  
  function minimizeActiveItem() {
    $('.tray-item-active').find('.tray-item-block').slideToggle(100);
    $('.tray-item-active').removeClass('tray-item-active');
  }
  
  function closeActiveItem() {
    $('.tray-item-active').find('.tray-item-block').fadeOut(250);
    $('.tray-item-active').removeClass('tray-item-active');
  }
  
})(jQuery);  ;
