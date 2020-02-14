function isSmallWidthDisplay() {
	return jQuery(window).width() < 900;
}
    
jQuery(document).ready(function(){
	if(!isSmallWidthDisplay()) {
		jQuery('<div id="pre-footer-holder" style="height: 10px"></div>').insertBefore(".footer");
	}
	
	var lastModifiedDateSpan = jQuery('span#article-last-modified-date');
	if(lastModifiedDateSpan.length > 0) {
		var articleLastModifiedTime = jQuery('meta[property="article:modified_time"]').attr('content');
		if(articleLastModifiedTime) {
			var articleLastModifiedDate = new Date(articleLastModifiedTime)
				.toLocaleDateString(
					'en-US', { 
						year: "numeric", 
						month: "short",	  
						day: "numeric" 
					}
				);
			
			lastModifiedDateSpan.text('Last modified: ' + articleLastModifiedDate).css('visibility', 'visible');
		}
	}
});