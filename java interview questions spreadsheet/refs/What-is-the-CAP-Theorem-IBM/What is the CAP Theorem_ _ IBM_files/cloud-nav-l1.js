(function ($, window, document) {

  function toggleL1Dropdown() {
    if ($(window).width() <= 819) {
      $('#cloud-small-navigation').removeClass('hidden');
      $('.cloud-sitenav-menu-container').hide();
    }
    else {
      $('#cloud-small-navigation').addClass('hidden');
      $('.cloud-sitenav-menu-container').show();
    }
  }

  // Add Done Resizing Event.
  var resizeTimer;
  $(window).on('resize', function(e) {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {

      toggleL1Dropdown();
    }, 250);
  });

  $(document).ready(function() {

    toggleL1Dropdown();

    $('.cloud-sitenav-menu-container .ibm-sitenav-menu-list li.ibm-haschildlist').hover(
      function() {
        $(this).addClass('ibm-active');
      },
      function() {
        $(this).removeClass('ibm-active');
      }
    );
  });

})(jQuery, this, this.document);
