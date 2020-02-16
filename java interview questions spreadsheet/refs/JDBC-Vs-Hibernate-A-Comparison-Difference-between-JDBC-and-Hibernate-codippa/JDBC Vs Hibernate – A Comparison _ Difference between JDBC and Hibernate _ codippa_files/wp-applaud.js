jQuery(function($) {
  $('.wp-applaud').on('click', function() {
    var link = $(this);

    var user_likes = wp_applaud.user_likes;

    if (link.hasClass('processing')) return false;

    if (link.hasClass('active')) return false;

    var id = $(this).attr('id'),
        postfix = link.find('.wp-applaud-postfix').text();

    $.ajax({
      type: 'POST',
      url: wp_applaud.ajaxurl,
      data: {
        action: 'wp-applaud', 
        likes_id: id, 
        postfix: postfix, 
      },
      xhrFields: { 
        withCredentials: true, 
      },
      beforeSend: function() {
        link.addClass('processing');
      },
      success: function(data) {
        var res_data = jQuery.parseJSON(data);
        link.removeClass('processing');
        link.html(res_data.html);
        link.attr('title', res_data.title);
        if(res_data.user_likes >= user_likes) {
          link.addClass('active');
        }
      },
    });

    return false;
  });

  if ($('body.ajax-wp-applaud').length) {
    $('.wp-applaud').each(function() {
      var id = $(this).attr('id');
      $(this).load(wp_applaud.ajaxurl, {
        action: 'wp-applaud', 
        post_id: id,
      });
    });
  }
});
