var ww = document.body.clientWidth;

jQuery('document').ready(function($) {
	$(".nav li a").each(function() {
		if ($(this).next().length > 0) {
			$(this).addClass("parent");
		};
	})
	
	$(".toggleMenu").click(function(e) {
		e.preventDefault();
		$(this).toggleClass("active");
		$(".nav").toggle();
	});
	adjustMenu();
        
        $('#commentform').validate({

            ignore: ".ignore",
            rules: {
              author: {
                required: true,
                minlength: 2
              },

              email: {
                required: true,
                email: true
              },

              comment: {
                required: true,
                minlength: 5
              },
              
              hiddenRecaptcha: {
                required: function () {
                    if (grecaptcha.getResponse() == '') {
                        return true;
                    } else {
                        return false;
                    }
                }
            }
             
            },
            
            messages: {
              author: "Please fill the Name",
              email: "Please enter a valid email address.",
              comment: "Please fill the comment field",
              hiddenRecaptcha : "Please confirm captcha to proceed"
            },
            

            errorElement: "div",
            errorPlacement: function(error, element) {
                element.after(error);
            }

        });
        
})

$(window).bind('resize orientationchange', function() {
	ww = document.body.clientWidth;
	adjustMenu();
});

var adjustMenu = function() {
	if (ww < 768) {
		$(".toggleMenu").css("display", "inline-block");
		
		if (!$(".toggleMenu").hasClass("active")) {
			$(".nav").hide();
		} else {
			$(".nav").show();
		}
		$(".nav li").unbind('mouseenter mouseleave');
		
		$(".nav li a.parent").unbind('click').bind('click', function(e) {
			var istoggle =$(this).parent("li").hasClass("hover");
			
			$(".nav li").removeClass("hover");
			// must be attached to anchor element to prevent bubbling
			e.preventDefault();
			if(istoggle){
				$(this).parent("li").addClass("hover");
			}
			$(this).parent("li").toggleClass("hover");
		});
	} 
	else if (ww >= 768) {
		$(".toggleMenu").css("display", "none");
				
		$(".nav").show();
		$(".nav li").removeClass("hover");
		$(".nav li a").unbind('click');
		$(".nav li").hover(
		function () {
		$(this).addClass('hover', 1000);
		},
		function () {
		$(this).removeClass("hover", 1000);
		});
		/*$(".nav li").unbind('mouseenter mouseleave').bind('mouseenter mouseleave', function() {
		 	// must be attached to li so that mouseleave is not triggered when hover over submenu
		 	$(this).toggleClass('hover');
		});*/
	}
}