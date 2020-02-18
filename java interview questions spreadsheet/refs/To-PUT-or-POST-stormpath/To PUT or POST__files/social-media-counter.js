jQuery.fn.sharePopup = function (e, intWidth, intHeight, blnResize) {
    // Prevent default anchor event
    e.preventDefault();

    // Set values for window
    var intWidth = intWidth || '500',
        intHeight = intHeight || '400',
        strResize = (blnResize ? 'yes' : 'no');

    // Set title and open popup with focus on it
    var strTitle = ((typeof this.attr('title') !== 'undefined') ? this.attr('title') : 'Social Share'),
        strParam = 'width=' + intWidth + ',height=' + intHeight + ',resizable=' + strResize,
        objWindow = window.open(this.attr('href'), strTitle, strParam).focus();
}

jQuery( ".stormpath-social-counter-widget" ).each(function( index ) {
	var $widget = jQuery(this);
    jQuery.ajax({
        type: 'POST',
        dataType: 'json',
        url: stormpath_social_object.ajaxurl,
		data: {
            'action': $widget.data('action'),
            'widget_id': $widget.data('instance'),
            'post_id': stormpath_social_object.post_id
        },
        success: function(data){
        	if(data){
        		$widget.show();
        		jQuery.each(data, function( index, value ) {
              if(typeof value === 'number') {
                $widget.find('.si-'+index+' .social-icon-counter').text(value);
              }
				});
        	}
        }
    });
});

jQuery('.share-button').on("click", function(e) {
  jQuery(this).sharePopup(e);
});
