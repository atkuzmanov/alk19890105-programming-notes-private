(function($) {

    $(document).ready(function($) {

        var button = $('#ajax-test');

        var $ID      = $('.post-list-ajax-search-form').children('form').attr('id'),
            $form    = $('#'+$ID),
            $input   = $form.find('input[type="text"]'),
            $wrapper = $form.siblings('.result-posts-wrapper').hide();

        $input.keypress(function(e){
            if(e.which == 13) {
                return false;
            }else {
                return true;
            }
        });


        $input.on('keyup', function(e) {
            e.preventDefault();

            var $key = $(this).val();

            $.ajax({
                url: AjaxPostSearch.ajaxUrl,
                type: 'post',
                data: {
                    action: 'eael_ajax_post_search',
                    key: $key
                },
                success: function(r) {
                    if( $key != '') {
                        setTimeout(function() {
                            $wrapper.html(r);
                            $wrapper.fadeIn();
                        }, 300);
                    }else {
                        $wrapper.hide();
                    }
                },
                error: function(r) {
                    console.log('err', r);
                }
            });

        });


    });

})(jQuery);