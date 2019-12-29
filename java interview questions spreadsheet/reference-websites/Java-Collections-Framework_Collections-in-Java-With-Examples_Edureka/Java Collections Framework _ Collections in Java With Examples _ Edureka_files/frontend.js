( function ( $ ) {

	$( document ).ready( function () {

		// rest api request
		if ( pvcArgsFrontend.mode == 'rest_api' ) {

			var request = {
				id: pvcArgsFrontend.postID
			};

			$.ajax( {
				url: pvcArgsFrontend.requestURL + '?id=' + pvcArgsFrontend.postID,
				type: 'post',
				async: true,
				cache: false,
				data: request,
				beforeSend: function ( xhr ) {
					xhr.setRequestHeader( 'X-WP-Nonce', pvcArgsFrontend.nonce );
				}
			} ).done( function( response ) {
				// trigger pvcCheckPost event
				$.event.trigger( {
					type: 'pvcCheckPost',
					detail: response
				} );
			} );

		// admin ajax or fast ajax request
		} else {
			
			var request = {
				action: 'pvc-check-post',
				pvc_nonce: pvcArgsFrontend.nonce,
				id: pvcArgsFrontend.postID
			};

			$.ajax( {
				url: pvcArgsFrontend.requestURL,
				type: 'post',
				async: true,
				cache: false,
				data: request
			} ).done( function( response ) {
				// trigger pvcCheckPost event
				$.event.trigger( {
					type: 'pvcCheckPost',
					detail: response
				} );
			} );

		}

	} );

} )( jQuery );