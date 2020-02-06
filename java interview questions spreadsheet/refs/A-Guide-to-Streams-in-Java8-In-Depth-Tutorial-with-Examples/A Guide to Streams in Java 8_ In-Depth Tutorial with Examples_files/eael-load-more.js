(function($) {
	'use strict';

	window.eaelLoadMore = function( options, settings ) {

		// Default Values for Load More Js
		var optionsValue = {
			totalPosts: options.totalPosts,
			loadMoreBtn: options.loadMoreBtn,
			postContainer: $(options.postContainer),
			postStyle: options.postStyle, // block, grid, timeline, 
		}

		// Settings Values
		var settingsValue = {
			postType: settings.postType,
			perPage: settings.perPage,
			postOrder: settings.postOrder,
			orderBy: settings.orderBy,
			showImage: settings.showImage,
			showTitle: settings.showTitle,
			showExcerpt: settings.showExcerpt,
			showMeta: settings.showMeta,
			imageSize: settings.imageSize,
			metaPosition: settings.metaPosition,
			excerptLength: settings.excerptLength,
			btnText: settings.btnText,

			tax_query: settings.tax_query,

			post__in: settings.post__in,
			excludePosts: settings.exclude_posts,
			offset: parseInt( settings.offset , 10 ),
			grid_style: settings.grid_style || '',
			hover_animation: settings.hover_animation
		}

		var offset = settingsValue.offset + settingsValue.perPage;

		optionsValue.loadMoreBtn.on( 'click', function( e ) {
			e.preventDefault();

			$(this).addClass( 'button--loading' );
			$(this).find( 'span' ).html( 'Loading...' );

			$.ajax( {
				url: eaelPostGrid.ajaxurl,
				type: 'post',
				data: {
					action: 'load_more',
					post_style: optionsValue.postStyle,
					eael_show_image : settingsValue.showImage,
					image_size : settingsValue.imageSize,
					eael_show_title : settingsValue.showTitle,
					eael_show_meta : settingsValue.showMeta,
					meta_position : settingsValue.metaPosition,
					
					eael_show_excerpt : settingsValue.showExcerpt,
					eael_excerpt_length : settingsValue.excerptLength,

					post_type: settingsValue.postType,
					posts_per_page : settingsValue.perPage,
					offset : offset,

					tax_query: settingsValue.tax_query,

					post__not_in: settingsValue.excludePosts,
					
					post__in: settingsValue.post__in,

					orderby: settingsValue.orderBy,
					order: settingsValue.postOrder,
					grid_style: settingsValue.grid_style,
					eael_post_block_hover_animation: settingsValue.hover_animation
				},
				beforeSend: function() {
					// _this.html('<i class="fa fa-spinner fa-spin"></i>&nbsp;Saving Data..');
				},
				success: function( response ) {
					var $content = $( response );
					if( optionsValue.postStyle === 'grid' ) {
						setTimeout(function() {
							optionsValue.postContainer.masonry();
							optionsValue.postContainer.append( $content ).masonry( 'appended', $content );
							optionsValue.postContainer.masonry({
						    	itemSelector: '.eael-grid-post',
						    	percentPosition: true,
						    	columnWidth: '.eael-post-grid-column'
						    });
						}, 100);
					} else {
						optionsValue.postContainer.append( $content );
					}
					optionsValue.loadMoreBtn.removeClass( 'button--loading' );
					optionsValue.loadMoreBtn.find( 'span' ).html( settingsValue.btnText );

					offset = offset + settingsValue.perPage;

					if( offset >= optionsValue.totalPosts ) {
						optionsValue.loadMoreBtn.remove();
					}

				},
				error: function() {
					
				}
			} );
		} );
	}; // end of eaelLoadMore

	window.eaelDynamicGalleryLoadMore = function(options, settings, gallery) {

		var options = {
			totalPosts: options.totalPosts,
			loadMoreBtn: options.loadMoreBtn,
			postStyle: options.postStyle,
			postContainer: options.postContainer,
			gridStyle:options.gridStyle,
			zoomIcon:options.zoomIcon,
			linkIcon:options.linkIcon,
			hoverStyle: options.hoverStyle,
			popUp: options.popUp,
			showPopupStyles: options.showPopupStyles
		}

		var gallerySettings = {
			gallery: gallery,
			postType: settings.postType,
			perPage: settings.perPage,
			postOrder: settings.postOrder,
			orderBy: settings.orderBy,
			offset: settings.offset,
			btnText: settings.btn_text,
			tax_query: settings.tax_query,
			exclude_posts: settings.exclude_posts,
			post__in: settings.post__in,
			postExcerpt: settings.postExcerpt,
			btnText: settings.btnText
		}
		
		var offset = settings.offset + settings.perPage;

		options.loadMoreBtn.on('click', function(e) {
			e.preventDefault();

			$(this).addClass( 'button--loading' );
			$(this).find( 'span' ).html( 'Loading...' );

			$.ajax({
				url: eaelPostGrid.ajaxurl,
				type: 'post',
				data: {
					action: 'load_more',
					post_type: gallerySettings.postType,
					posts_per_page : gallerySettings.perPage,
					post_style: options.postStyle,
					offset : offset,
					tax_query: gallerySettings.tax_query,
					post__not_in: gallerySettings.excludePosts,
					post__in: gallerySettings.post__in,
					orderby: gallerySettings.orderBy,
					eael_fg_grid_style: options.gridStyle,
					eael_fg_grid_hover_style:options.hoverStyle,
					eael_fg_show_popup: options.popUp,
					eael_section_fg_zoom_icon: options.zoomIcon,
					eael_section_fg_link_icon: options.linkIcon,
					order: gallerySettings.postOrder,
					eael_post_excerpt: gallerySettings.postExcerpt,
					eael_fg_show_popup_styles: options.showPopupStyles
				},
				beforeSend: function() {
					// _this.html('<i class="fa fa-spinner fa-spin"></i>&nbsp;Saving Data..');
				},
				success: function( response ) {
					var $content = $( response );

					setTimeout(function() {
						gallerySettings.gallery.isotope('insert', $content);
						options.loadMoreBtn.removeClass( 'button--loading' );
						options.loadMoreBtn.find( 'span' ).html( gallerySettings.btnText );
					}, 100);

					offset = offset + gallerySettings.perPage;
					if( offset >= options.totalPosts ) {
						options.loadMoreBtn.remove();
					}
					
	
				},
				error: function() {
					
				}
			});


		});
		


	}



})(jQuery);