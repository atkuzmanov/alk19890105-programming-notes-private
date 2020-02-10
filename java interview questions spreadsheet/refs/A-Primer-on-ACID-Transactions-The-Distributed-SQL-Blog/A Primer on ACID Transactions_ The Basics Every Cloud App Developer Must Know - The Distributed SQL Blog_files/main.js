$(document).ready(function() {
	$('.navbar-white .menu-item-462 a').on('click', function() {
		$(".navbar-white .menu-item-462 .sub-menu").css({
			"height": "220px",
			"padding": "15px",
			"border": "1px solid #202951"
		});
	});
	$('.navbar-white .menu-item-468 a').on('click', function() {
		$(".navbar-white .menu-item-468 .sub-menu").css({
			"height": "134px",
			"padding": "15px",
			"border": "1px solid #202951"
		});
	});
	$('#navOpen').on('click', function() {
		var ele = $("#navMobile");
		ele.css({
			"height": "315px",
	  		"margin-top": "-42px",
			"padding-top": "15px",
			"padding-bottom": "15px",
			"border": "1px solid #202951"
		});
		ele = $("body:not(.home) .hamburger-fill");
		ele.css({
			"fill": "#fff"
		});
	});
	$('#navClose').on('click', function() {
		var ele = $("#navMobile");
		ele.css({
			"height": "0",
	  		"margin-top": "-15px",
			"padding-top": "0",
			"padding-bottom": "0",
			"border": "transparent"
		});
		ele = $("body:not(.home) .hamburger-fill");
		ele.css({
			"fill": "#151838"
		});
	});
	$(document).on('click scroll', function(event) {
		if (!$(event.target).closest('#navOpen').length && !$(event.target).closest('#navMobile').length) {
			var ele = $("#navMobile");
			ele.css({
				"height": "0",
		  		"margin-top": "-15px",
				"padding-top": "0",
				"padding-bottom": "0",
				"border": "transparent"
			});
			ele = $("body:not(.home) .hamburger-fill");
			ele.css({
				"fill": "#151838"
			});
		}
		if (!$(event.target).closest('.navbar-white .menu-item-462 a').length && !$(event.target).closest('.menu-item-429 .sub-menu').length) {
			$(".navbar-white .menu-item-462 .sub-menu").css({
				"height": "0",
				"padding": "0",
				"border": "0"
			});
		}
		if (!$(event.target).closest('.navbar-white .menu-item-468 a').length && !$(event.target).closest('.menu-item-435 .sub-menu').length) {
			$(".navbar-white .menu-item-468 .sub-menu").css({
				"height": "0",
				"padding": "0",
				"border": "0"
			});
		}
	});
	$(window).on('resize', function(event) {
		if (!$(event.target).closest('#navOpen').length && !$(event.target).closest('#navMobile').length) {
			var ele = $("#navMobile");
			ele.css({
				"height": "0",
		  		"margin-top": "-15px",
				"padding-top": "0",
				"padding-bottom": "0",
				"border": "transparent"
			});
			ele = $("body:not(.home) .hamburger-fill");
			ele.css({
				"fill": "#151838"
			});
		}
		if (!$(event.target).closest('.navbar-white .menu-item-462 a').length && !$(event.target).closest('.menu-item-429 .sub-menu').length) {
			$(".navbar-white .menu-item-462 .sub-menu").css({
				"height": "0",
				"padding": "0",
				"border": "0"
			});
		}
		if (!$(event.target).closest('.navbar-white .menu-item-468 a').length && !$(event.target).closest('.menu-item-435 .sub-menu').length) {
			$(".navbar-white .menu-item-468 .sub-menu").css({
				"height": "0",
				"padding": "0",
				"border": "0"
			});
		}
	});
	console.log("hello");

	if ($("body").hasClass("single-post")) {
		console.log("single-post");
		var newP = document.getElementsByClassName("under-article")[0];
		var oldP = document.getElementsByClassName("rltdpstsplgn-related-post-block")[0];

		while (oldP.childNodes.length > 0) {
		    newP.appendChild(oldP.childNodes[0]);
		}
	}
});
