/**
 * @file slick-slider.js
 *
 * Creates a Slick slider for the IBM Cloud theme.
 */

(function ($, window, document, undefined) {
  jQuery(document).ready(function() {
    var $container = $('.ibm-cloud-band-dynamic-slider');
    if ($container.get(0)) {
      $container.slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        arrows: false,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1.25,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 672,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 1056,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: false,
            }
          },
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: false,
            }
          }
        ]
      });
    }


    var $related_container = $('.ibm-cloud-grid-blog-related');
    if ($related_container.get(0)) {
      $related_container.slick({
        dots: true,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: false,
        responsive: [
          {
            breakpoint: 320,
            settings: {
              slidesToShow: 1.25,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 672,
            settings: {
              slidesToShow: 1.5,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 1056,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 1,
              infinite: false,
            }
          },
          {
            breakpoint: 1240,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 1,
              infinite: false,
            }
          }
        ]
      });
    }

  });
})(jQuery, this, this.document);
