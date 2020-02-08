jQuery(document).ready(function() { 
    jQuery('.menu-three-lines').click(function() {
        if(jQuery(this).hasClass('close')) { 
            jQuery(this).removeClass('close').addClass('open');
            jQuery('.menu-mobile').fadeIn(300);
            jQuery('.menu-mobile').removeClass('hide-menu').addClass('show-menu');
        } else { 
            jQuery(this).removeClass('open').addClass('close');
            jQuery('.menu-mobile').fadeOut(300);
            jQuery('.menu-mobile').removeClass('show-menu').addClass('hide-menu');
        }
    });
    
});

