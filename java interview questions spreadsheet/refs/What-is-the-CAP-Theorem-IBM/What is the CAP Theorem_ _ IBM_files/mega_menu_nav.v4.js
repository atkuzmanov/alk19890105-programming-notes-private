(function ($, IBM, Drupal, drupalSettings) {
  'use strict';

  var $menuContainer = $('#ibm-masthead .ibm-sitenav-menu-container');
  var moreWidth = 0;
  var isFooterLoaded = false;

  var $col1 = [
    {
      'label': 'Learn',
      'url': '',
      'childrend': [
        {
          'text': 'What is Cloud Computing',
          'target': '',
          'url': 'https://www.ibm.com/cloud/learn/cloud-computing'
        },
        {
          'text': 'What is Kubernetes',
          'target': '',
          'url': 'https://www.ibm.com/cloud/learn/kubernetes'
        },
        {
          'text': 'What are Containers',
          'target': '',
          'url': 'https://www.ibm.com/cloud/learn/containers'
        },
        {
          'text': 'What is Serverless Computing',
          'target': '',
          'url': 'https://www.ibm.com/cloud/learn/serverless'
        },
        {
          'text': 'What is DevOps?',
          'target': '',
          'url': 'https://www.ibm.com/cloud/learn/devops-a-complete-guide'
        },
        {
          'text': 'Data centers',
          'target': '',
          'url': 'https://www.ibm.com/cloud-computing/bluemix/data-centers'
        },
        {
          'text': 'Products',
          'target': '',
          'url': 'https://www.ibm.com/cloud/products/'
        },
        {
          'text': 'Solutions',
          'target': '',
          'url': 'https://www.ibm.com/cloud/solutions/'
        },
        {
          'text': 'Customers',
          'target': '',
          'url': 'https://www.ibm.com/cloud/case-studies'
        },
        {
          'text': 'Security',
          'target': '',
          'url': 'https://www.ibm.com/cloud/security/'
        }
      ]
    }
  ];

  var $col2 = [
    {
      'label': 'Build',
      'url': '',
      'childrend': [
        {
          'text': 'Get started',
          'target': '',
          'url': 'https://www.ibm.com/cloud/get-started'
        },
        {
          'text': 'Docs',
          'target': '',
          'url': 'https://cloud.ibm.com/docs'
        },
        {
          'text': 'Courses',
          'target': '',
          'url': 'https://www.ibm.com/cloud/garage/category/courses'
        },
        {
          'text': 'Practices',
          'target': '',
          'url': 'https://www.ibm.com/cloud/garage/category/practices'
        },
        {
          'text': 'Architectures',
          'target': '',
          'url': 'https://www.ibm.com/cloud/garage/category/architectures'
        },
        {
          'text': 'Toolchains',
          'target': '',
          'url': 'https://www.ibm.com/cloud/garage/category/tools'
        }
      ]
    }
  ];

  var $col3 = [
    {
      'label': 'Engage',
      'url': '',
      'childrend': [
        {
          'text': 'Support',
          'target': '',
          'url': 'https://www.ibm.com/cloud/support'
        },
        {
          'text': 'Services',
          'target': '',
          'url': 'https://www.ibm.com/cloud/services'
        },
        {
          'text': 'Garage',
          'target': '',
          'url': 'https://www.ibm.com/cloud/garage'
        },
        {
          'text': 'Partners',
          'target': '',
          'url': 'https://www.ibm.com/cloud/partners'
        },
        {
          'text': 'Blog',
          'target': '',
          'url': 'https://www.ibm.com/cloud/blog'
        },
        {
          'text': 'Newsletter',
          'target': '',
          'url': 'https://www.ibm.com/account/reg/us-en/signup?formid=urx-37205'
        },
        {
          'text': 'Twitter',
          'target': '',
          'url': 'https://twitter.com/IBMcloud'
        },
        {
          'text': 'YouTube',
          'target': '',
          'url': 'https://www.youtube.com/user/IBMCloud'
        },
        {
          'text': 'Facebook',
          'target': '',
          'url': 'https://www.facebook.com/IBMCloud/'
        }
      ]
    }
  ];

  var $col4 = [
    {
      'label': 'Your account',
      'url': '',
      'childrend': [
        {
          'text': 'Sign up',
          'target': '',
          'url': 'https://console.bluemix.net/registration/'
        },
        {
          'text': 'Log in',
          'target': '',
          'url': 'https://console.ng.bluemix.net/login'
        },
        {
          'text': 'Get help',
          'target': '',
          'url': 'https://cloud.ibm.com/unifiedsupport/supportcenter'
        },
        {
          'text': 'Login issues',
          'target': '',
          'url': 'https://cloud.ibm.com/docs/account?topic=account-accessing#accessing'
        }
      ]
    }
  ];

  var $social_links = [
    {
      'text': "Twitter",
      'url': "http://www.twitter.com/ibmbluemix",
      'classes': "ibm-twitter-encircled-link"
    },
    {
      'text': "Facebook",
      'url': "http://www.facebook.com/ibmbluemix",
      'classes': "ibm-facebook-encircled-link"
    },
    {
      'text': "Youtube",
      'url': "https://www.youtube.com/ibmbluemix",
      'classes': "ibm-youtube-encircled-link"
    },
    {
      'text': "Blog",
      'url': "https://www.ibm.com/cloud/blog",
      'classes': "ibm-hatena-blog-encircled-link"
    },
    {
      'text': "Meetup",
      'url': "http://bluemix.meetup.com",
      'classes': "ibm-meetup-encircled-link ibm-meetup"
    }
  ];

  function appendColumn($column, $col_tmpl, $h5_tmpl, $link_tmpl, $col_ctnr_wrp) {
    var $new_col = $($col_tmpl).clone();
    var $inner = $('<ul class="ibm-plain-list" />');
    $($new_col).append($inner);

    $column.forEach(function (v, i, a) {
      $($inner).append(function () {
        var $new_h5 = $($h5_tmpl).clone().attr('aria-label', v.label);
        if (v.label === "Your account") {
          $new_h5.addClass("cloud-shared-footer-last-col-head");
        }
        $($new_h5).append(function () {
          if (v.url.length) {
            return $('<a />').attr('href', v.url).append(v.label);
          }
          return v.label;
        });
        return $new_h5;
      });

      v.childrend.forEach(function (vv, ii, aa) {
        $($inner).append(function () {
          var $new_link = $($link_tmpl).clone().append(function () {
            if (vv.target.length) {
              return $('<a class="ibm-textcolor-default" />').attr('href', vv.url).attr('target', vv.target).append(vv.text);
            }
            return $('<a class="ibm-textcolor-default" />').attr('href', vv.url).append(vv.text);
          });
          if (ii === (aa.length - 1)) {
            $new_link.removeClass('ibm-padding-bottom-0').addClass('ibm-padding-bottom-2');
          }
          return $('<li />').append($new_link);
        });
      })
    });

    $($col_ctnr_wrp).append($new_col);
  }

  function insertCloudFooter() {
    // Prevent footer duplication on infinite scroll pages.
    if (isFooterLoaded) {
      return;
    }

    // Disable Cloud footer replacement temporarily on non default language,
    // as footer links are hardcoded and can't be translated for now.
    if (drupalSettings.ibm_cloud.is_default_language) {
      populateFooter();
    }

    var $footer = $("#ibm-footer");
    $footer.append(function () {
      return $('<div class="ibm-fluid ibm-fullwidth ibm-padding-bottom-0" />').append(function () {
        return $('<div class="ibm-col-12-12 ibm-col-8-8 ibm-padding-bottom-2" />').append(function () {
          return $('#ibm-footer .ibm-footer-corporate-links');
        }).append(function () {
          var $localeSelector = $('#ibm-footer-locale-selector');
          $localeSelector.attr("class", "");
          return $localeSelector;
        });
      });
    });
    $('#ibm-footer-module-links').parent().remove();
    isFooterLoaded = true;
  }

  function populateFooter() {
    if ($('head link[rel="canonical"]').prop("href") !== "https://www.ibm.com/cloud/") {
      var $band = $('<div />').attr({
        'class': "ibm-background-neutral-white-30 ibm-band ibm-padding-top-20 ibm-padding-bottom-20",
        'id': "cloud-shared-footer"
      }).append();
      var $col_ctnr = $('<div class="ibm-fluid ibm-fullwidth ibm-seamless " data-widget="setsameheight" data-items=".cloud-footer-col" data-alwaystallest="true"/>');
      var $col_ctnr_wrp = $('<div class="ibm-padding-content" />');
      $col_ctnr.append($col_ctnr_wrp);
      var $col_tmpl = $('<div class="ibm-col-12-3 cloud-footer-col" />');
      var $h5_tmpl = $('<div class="ibm-bold ibm-padding-bottom-1" />');
      var $link_tmpl = $('<p class="ibm-padding-bottom-0" />');

      appendColumn($col1, $col_tmpl, $h5_tmpl, $link_tmpl, $col_ctnr_wrp);
      appendColumn($col2, $col_tmpl, $h5_tmpl, $link_tmpl, $col_ctnr_wrp);
      appendColumn($col3, $col_tmpl, $h5_tmpl, $link_tmpl, $col_ctnr_wrp);
      appendColumn($col4, $col_tmpl, $h5_tmpl, $link_tmpl, $col_ctnr_wrp);

      $($band).append($col_ctnr);
      if ($('.region-footer').length) {
        $('.region-footer').prepend($band);
      }
      else if ($('#ibm-content-body').length) {
        $('#ibm-content-body').append($band);
      }
      else if ($('#ibm-content-body-alt').length) {
        $('#ibm-content-body-alt').append($band);
      }

      var $last_columns_inner = $('.cloud-shared-footer-last-col-head').siblings().last();
      $last_columns_inner.parent().append(function () {
        return $('<img />').attr({
          'src': 'https://www.ibm.com/cloud-computing/images/new-cloud/img/cloud.png',
          "alt": "cloud logo",
          "style": "max-width: 50%; height: auto;"
        });
      });
    }
  }

  /**
   * Calculate available space for menu items.
   * Push items that won't fit into "More" drop-down.
   */
  function calcWidth() {
    // Calculate initial values for available space and navigation items width.
    var availableSpace = $menuContainer.find('.ibm-sitenav-menu-list').outerWidth(true) - moreWidth;
    var navWidth = 0;
    $menuContainer.find('.ibm-sitenav-menu-list > ul > li:not(.ibm-cloud-more)').each(function(i, v) {
      navWidth += $(this).outerWidth(true);
    });

    // If navigation width is higher than available space, move some items
    // under the "More" dropdown.
    while (navWidth > availableSpace) {
      // Move last navigation item under "More" dropdown.
      var lastItem = $menuContainer.find('.ibm-sitenav-menu-list > ul > li:not(.ibm-cloud-more)').last();
      lastItem.attr('data-width', lastItem.outerWidth(true));
      lastItem.prependTo($menuContainer.find('.ibm-sitenav-menu-list > ul .ibm-cloud-more ul'));

      // Recalculate available space and navigation items width.
      availableSpace = $menuContainer.find('.ibm-sitenav-menu-list').outerWidth(true) - moreWidth;
      navWidth = 0;
      $menuContainer.find('.ibm-sitenav-menu-list > ul > li:not(.ibm-cloud-more)').each(function(i, v) {
        navWidth += $(this).outerWidth(true);
      });
    }

    // Check if the first element under "More" dropdown can be moved back to
    // the main navigation.
    var firstMoreElement = $menuContainer.find('.ibm-sitenav-menu-list > ul .ibm-cloud-more ul li').first();
    while (navWidth + firstMoreElement.data('width') < availableSpace) {
      firstMoreElement.insertBefore($menuContainer.find('.ibm-sitenav-menu-list > ul .ibm-cloud-more'));
      firstMoreElement = $menuContainer.find('.ibm-sitenav-menu-list > ul .ibm-cloud-more ul li').first();

      // Recalculate available space and navigation items width.
      availableSpace = $menuContainer.find('.ibm-sitenav-menu-list').outerWidth(true) - moreWidth;
      navWidth = 0;
      $menuContainer.find('.ibm-sitenav-menu-list > ul > li:not(.ibm-cloud-more)').each(function(i, v) {
        navWidth += $(this).outerWidth(true);
      });
    }

    // Hide or display the "More" dropdown depending on if it has items.
    var showMore = $('.ibm-sitenav-menu-list > ul .ibm-cloud-more ul li').length > 0 ? 'inline-block' : 'none';
    $('.ibm-sitenav-menu-list > ul .ibm-cloud-more').css('display', showMore);
  }

  /**
   * Move the authentication CTA from the last nav item to the right side
   * of Masthead region, and create the "More" dropdown.
   */
  function onProfileMenuReady() {
    // Relocate authentication CTA.
    $menuContainer.find('.ibm-masthead-rightside .ibm-masthead-iconsonly .ibm-masthead-item-signin').remove();
    $menuContainer.find('.ibm-masthead-rightside .ibm-mh-marketplace-link').remove();
    $menuContainer.find('.ibm-masthead-rightside .ibm-masthead-iconsonly').prepend($('<li role="presentation" class="ibm-masthead-item-signin"></li>'));
    $menuContainer.find('.ibm-cloud-masthead-cta').addClass('ibm-cloud-masthead-loaded');
    $menuContainer.find('.ibm-cloud-masthead-cta a').addClass('ibm-cloud-masthead-link ibm-profile-link').appendTo('.ibm-masthead-item-signin');

    // Add "More" drop-down, hidden by default.
    $menuContainer.find('.ibm-sitenav-menu-list ul').append(function () {
      return $('<li role="representation" class="ibm-haschildlist ibm-cloud-more" data-width="80"/>').append(function () {
        return $('<button>').append(drupalSettings.ibm_cloud.more);
      }).append(function () {
        return $('<ul class="ibm-cloud-more-container" role="menunav" />')
      });
    });
    moreWidth = $menuContainer.find('.ibm-sitenav-menu-list > ul .ibm-cloud-more').outerWidth(true);
  }

  //Load the onProfileMenuReady() and calcWidth() within masthead ready callback.
  IBM.common.module.masthead.subscribe("ready", "Masthead", function () {
    onProfileMenuReady();
    calcWidth();
  });

  Drupal.behaviors.megaMenuNav = {
    attach: function (context, settings) {

      $(window).on('resize', calcWidth);

      if (IBM.common.util.config.get("footer.type") !== "alternate") {
        if (IBM.common.module.footer.isLoaded) {
          insertCloudFooter();
        }
        else {
          IBM.common.module.footer.subscribe("ready", "footerself", insertCloudFooter);
        }
      }
    }
  };

})(jQuery, IBMCore, Drupal, drupalSettings);
