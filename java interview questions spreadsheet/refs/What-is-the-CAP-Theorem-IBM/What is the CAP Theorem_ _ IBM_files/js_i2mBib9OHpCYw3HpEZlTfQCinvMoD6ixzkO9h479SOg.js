/* Source and licensing information for the line(s) below can be found at //1.cms.s81c.com/modules/contrib/table_of_contents/table_of_contents.js. */
(function ($) {
  function getFragment(url) {
    // Remove everything before the hash character.
    var fragmentPosition = url.indexOf('#');
    if (fragmentPosition >= 0) {
      url = url.substr(fragmentPosition + 1);
    }
    else {
      return null;
    }
    // Remove the query string part.
    var queryPosition = url.indexOf('?');
    if (queryPosition >= 0) {
      url = url.substr(0, queryPosition);
    }
    return url;
  }
  Drupal.behaviors.tableOfContents = {
    /**
     * This assumes that the field is in a container with the class .field-name-{field_name}
     *
     * @param context
     * @param settings
     */
    attach: function(context, settings) {
      var $anchorsForMissingIds = $('a.toc-link-invalid-id', context);
      for (var index = 0; index < settings.tableOfContents.length; index++) {
        var fieldData = settings.tableOfContents[index];
        // Get all the toc links that could not be mapped in backend.
        var $tocElements = $(fieldData.selector + ':not([id])', context);
        // For each anchor link that needs pairing
        $anchorsForMissingIds.each(function () {
          var contents = this.text;
          // Find the TOC element that has the same content as the anchor link.
          var tocElement = $tocElements
            .filter(function (i, el) { return el.textContent === contents; })
            .get(0);
          if (typeof tocElement !== 'undefined') {
            tocElement.id = getFragment(this.getAttribute('href'));
            this.classList.remove('toc-link-invalid-id');
          }
        });
      }
    }
  }
})(jQuery);

/* Source and licensing information for the above line(s) can be found at //1.cms.s81c.com/modules/contrib/table_of_contents/table_of_contents.js. */;
