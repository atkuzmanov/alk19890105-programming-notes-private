jQuery( document ).ready( function( $ ) {	
	var WPEPS_Scripts = {
		init: function() {
			var series = $( '.wpeps-series-nav' );
			for ( var i = 0; i <= series.length; i++ ) {
				$( series[i] ).find( '.wpeps-show-posts' ).click( show_posts_handler( i ) );
				$( series[i] ).find( '.wpeps-hide-posts' ).click( hide_posts_handler( i ) );
			}

			function show_posts_handler( i ) {
				return function() {
					$( series[i] ).find( 'ol' ).show( 'fast' );
					$( series[i] ).find( '.wpeps-show-posts' ).hide( 'fast' );
					$( series[i] ).find( '.wpeps-hide-posts' ).show( 'fast' );
				};
			}

			function hide_posts_handler( i ) {
				return function() {
					$( series[i] ).find( 'ol' ).hide( 'fast' );
					$( series[i] ).find( '.wpeps-hide-posts' ).hide( 'fast' );
					$( series[i] ).find( '.wpeps-show-posts' ).show( 'fast' );
				};
			}
		},
	};
	WPEPS_Scripts.init();
});