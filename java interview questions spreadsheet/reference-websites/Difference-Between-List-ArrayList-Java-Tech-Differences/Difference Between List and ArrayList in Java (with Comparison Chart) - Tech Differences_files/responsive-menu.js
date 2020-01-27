jQuery(function( $ ){

	$(".nav-primary .genesis-nav-menu").addClass("responsive-menu").before('<div id="responsive-menu-icon"></div>');
	
	$("#responsive-menu-icon").click(function(){
		$("nav .genesis-nav-menu").slideToggle();
	});
	
	$(window).resize(function(){
		if(window.innerWidth > 768) {
			$(".nav-primary .genesis-nav-menu").removeAttr("style");
		}
	});
	
});