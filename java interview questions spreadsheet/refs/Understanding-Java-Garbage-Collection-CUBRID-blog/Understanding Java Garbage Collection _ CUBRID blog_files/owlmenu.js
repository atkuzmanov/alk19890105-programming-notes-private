var responsiveflagMenu = false;
var categoryMenu = $('ul.owl-menu');
var mCategoryGrover = $('.owl-contener .cat-title');
$(document).ready(function() {
	responsiveMenu();
	$(window).resize(responsiveMenu);
});
// check resolution
function responsiveMenu() {
	if ($(document).width() < 1024 && responsiveflagMenu == false) {
		menuChange('enable');
		responsiveflagMenu = true;
	}
	else if ($(document).width() >= 1024) {
		menuChange('disable');
		responsiveflagMenu = false;
	}
}
// init Owl Navigation Menu for 767px+ resolution
function desktopInit() {
	mCategoryGrover.off();
	mCategoryGrover.removeClass('active');
	$('.owl-menu > li > ul, .owl-nav-list-single > li > ul').removeClass('menu-mobile').parent().find('.menu-mobile-grover').remove();
	$('.cat-menu').removeAttr('style');
	$('.owl-menu').removeAttr('style');
	categoryMenu.owlmegamenu('init');
	//add class for width define
	$('.owl-menu > li > ul').addClass('submenu-container clearfix');
	// loop through each sublist under each top list item
	$('.owl-menu > li > ul').each(function() {
		i = 0;
		//add classes for clearing
		$(this).each(function() {
			if ($(this).attr('id') != "category-thumbnail") {
				i++;
				if (i % 2 == 1) $(this).addClass('first-in-line-xs');
				else if (i % 5 == 1) $(this).addClass('first-in-line-lg');
			}
		});
	});
}

function mobileInit() {
	categoryMenu.owlmegamenu('destroy');
    $('.cat-menu').removeAttr('style');
	$('.owl-menu').removeAttr('style');
	// var scrollPosition;
	mCategoryGrover.on('click', function() {
        var $this = $(this),
			$htmlElement = $('html'),
            $mCategoryGroverParent = $this.parent(),
            $mCategoryGroverCatMenu = $mCategoryGroverParent.find('.cat-menu'),
            $mCategoryGroverMenuContent = $mCategoryGroverParent.find('ul.menu-content');
        if(!$this.hasClass('active')){
            $this.parents('nav').removeClass('nav-margin-left');
        }
        $this.toggleClass('active');

        if ($this.hasClass('active')) {
            scrollPosition = $('.nav-sticky').offset().top;

            //set wrapper to 100vh(to prevent scroll)
			$htmlElement.css('overflow', 'hidden');

            //slide, then fade in menu
            $mCategoryGroverCatMenu.stop().slideDown('medium', null, function() {
				$mCategoryGroverMenuContent.stop().slideDown('fast');
            });
        } else {
            //fade, then slide, then allow scroll
			$mCategoryGroverMenuContent.stop().slideUp('fast', null, function() {
                $mCategoryGroverCatMenu.stop().slideUp('medium', null, function() {
                    $htmlElement.removeAttr('style');
                    $mCategoryGroverCatMenu.removeAttr('style');
                    //$(window).scrollTop(scrollPosition);
                    if(!$this.hasClass('active')) {
                        $this.parents('nav').addClass('nav-margin-left');
                    }
                });
            });
        }
	});
	$('.owl-menu > li > ul, .owl-nav-list-single > li > ul').addClass('menu-mobile clearfix').parent().prepend('<span class="menu-mobile-grover"></span>');
	$(".owl-menu .menu-mobile-grover, .owl-nav-list-single .menu-mobile-grover").on('click touchstart', function() {
		var catSubUl = $(this).next().next('.menu-mobile');
		if (catSubUl.is(':hidden')) {
			catSubUl.slideDown();
			$(this).addClass('active');
		}
		else {
			catSubUl.slideUp();
			$(this).removeClass('active');
		}
		return false;
	});
	if ('ontouchstart' in document.documentElement) {
		$('#block_top_menu > ul:first > li > a').on('click', function(e) {
			if ($(this).parent('li').find('ul').length) e.preventDefault();
		});
	}
}
// change the menu display at different resolutions
function menuChange(status) {
	status == 'enable' ? mobileInit() : desktopInit();
}
/*
 * jQuery Owl Menu Plugin - v1.0.0
 *
 */
(function($) {
	"use strict";
	var methods = (function() {
		// private properties and methods go here
		var c = {
				bcClass: 'owl-breadcrumb',
				menuClass: 'owl-js-enabled',
				anchorClass: 'owl-with-ul',
				menuArrowClass: 'owl-arrows'
			},
			ios = (function() {
				var ios = /iPhone|iPad|iPod/i.test(navigator.userAgent);
				if (ios) {
					// iOS clicks only bubble as far as body children
					$(window).load(function() {
						$('body').children().on('click', $.noop);
					});
				}
				return ios;
			})(),
			wp7 = (function() {
				var style = document.documentElement.style;
				return ('behavior' in style && 'fill' in style && /iemobile/i.test(navigator.userAgent));
			})(),
			toggleMenuClasses = function($menu, o) {
				var classes = c.menuClass;
				if (o.cssArrows) {
					classes += ' ' + c.menuArrowClass;
				}
				$menu.toggleClass(classes);
			},
			setPathToCurrent = function($menu, o) {
				return $menu.find('li.' + o.pathClass).slice(0, o.pathLevels).addClass(o.hoverClass + ' ' + c.bcClass).filter(function() {
					return ($(this).children(o.popUpSelector).hide().show().length);
				}).removeClass(o.pathClass);
			},
			toggleAnchorClass = function($li) {
				$li.children('a').toggleClass(c.anchorClass);
			},
			toggleTouchAction = function($menu) {
				var touchAction = $menu.css('ms-touch-action');
				touchAction = (touchAction === 'pan-y') ? 'auto' : 'pan-y';
				$menu.css('ms-touch-action', touchAction);
			},
			applyHandlers = function($menu, o) {
				var targets = 'li:has(' + o.popUpSelector + ')';
				if ($.fn.hoverIntent && !o.disableHI) {
					$menu.hoverIntent(over, out, targets);
				}
				else {
					$menu.on('mouseenter.owlmegamenu', targets, over).on('mouseleave.owlmegamenu', targets, out);
				}
				var touchevent = 'MSPointerDown.owlmegamenu';
				if (!ios) {
					touchevent += ' touchend.owlmegamenu';
				}
				if (wp7) {
					touchevent += ' mousedown.owlmegamenu';
				}
				$menu.on('focusin.owlmegamenu', 'li', over).on('focusout.owlmegamenu', 'li', out).on(touchevent, 'a', o, touchHandler);
			},
			touchHandler = function(e) {
				var $this = $(this),
					$ul = $this.siblings(e.data.popUpSelector);
				if ($ul.length > 0 && $ul.is(':hidden')) {
					$this.one('click.owlmegamenu', false);
					if (e.type === 'MSPointerDown') {
						$this.trigger('focus');
					}
					else {
						$.proxy(over, $this.parent('li'))();
					}
				}
			},
			over = function() {
				var $this = $(this),
					o = getOptions($this);
				clearTimeout(o.owlTimer);
				$this.siblings().owlmegamenu('hide').end().owlmegamenu('show');
			},
			out = function() {
				var $this = $(this),
					o = getOptions($this);
				if (ios) {
					$.proxy(close, $this, o)();
				}
				else {
					clearTimeout(o.owlTimer);
					o.owlTimer = setTimeout($.proxy(close, $this, o), o.delay);
				}
			},
			close = function(o) {
				o.retainPath = ($.inArray(this[0], o.$path) > -1);
				this.owlmegamenu('hide');
				if (!this.parents('.' + o.hoverClass).length) {
					o.onIdle.call(getMenu(this));
					if (o.$path.length) {
						$.proxy(over, o.$path)();
					}
				}
			},
			getMenu = function($el) {
				return $el.closest('.' + c.menuClass);
			},
			getOptions = function($el) {
				return getMenu($el).data('owl-options');
			};
		return {
			// public methods
			hide: function(instant) {
				if (this.length) {
					var $this = this,
						o = getOptions($this);
					if (!o) {
						return this;
					}
					var not = (o.retainPath === true) ? o.$path : '',
						$ul = $this.find('li.' + o.hoverClass).add(this).not(not).removeClass(o.hoverClass).children(o.popUpSelector),
						speed = o.speedOut;
					if (instant) {
						$ul.show();
						speed = 0;
					}
					o.retainPath = false;
					o.onBeforeHide.call($ul);
					$ul.stop(true, true).animate(o.animationOut, speed, function() {
						var $this = $(this);
						o.onHide.call($this);
					});
				}
				return this;
			},
			show: function() {
				var o = getOptions(this);
				if (!o) {
					return this;
				}
				var $this = this.addClass(o.hoverClass),
					$ul = $this.children(o.popUpSelector);
				o.onBeforeShow.call($ul);
				$ul.stop(true, true).animate(o.animation, o.speed, function() {
					o.onShow.call($ul);
				});
				return this;
			},
			destroy: function() {
				return this.each(function() {
					var $this = $(this),
						o = $this.data('owl-options'),
						$hasPopUp;
					if (!o) {
						return false;
					}
					$hasPopUp = $this.find(o.popUpSelector).parent('li');
					clearTimeout(o.owlTimer);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					// remove event handlers
					$this.off('.owlmegamenu').off('.hoverIntent');
					// clear animation's inline display style
					$hasPopUp.children(o.popUpSelector).attr('style', function(i, style) {
						return style.replace(/display[^;]+;?/g, '');
					});
					// reset 'current' path classes
					o.$path.removeClass(o.hoverClass + ' ' + c.bcClass).addClass(o.pathClass);
					$this.find('.' + o.hoverClass).removeClass(o.hoverClass);
					o.onDestroy.call($this);
					$this.removeData('owl-options');
				});
			},
			init: function(op) {
				return this.each(function() {
					var $this = $(this);
					if ($this.data('owl-options')) {
						return false;
					}
					var o = $.extend({}, $.fn.owlmegamenu.defaults, op),
						$hasPopUp = $this.find(o.popUpSelector).parent('li');
					o.$path = setPathToCurrent($this, o);
					$this.data('owl-options', o);
					toggleMenuClasses($this, o);
					toggleAnchorClass($hasPopUp);
					toggleTouchAction($this);
					applyHandlers($this, o);
					$hasPopUp.not('.' + c.bcClass).owlmegamenu('hide', true);
					o.onInit.call(this);
				});
			}
		};
	})();
	$.fn.owlmegamenu = function(method, args) {
		if (methods[method]) {
			return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
		}
		else if (typeof method === 'object' || !method) {
			return methods.init.apply(this, arguments);
		}
		else {
			return $.error('Method ' + method + ' does not exist on jQuery.fn.owlmegamenu');
		}
	};
	$.fn.owlmegamenu.defaults = {
		popUpSelector: '.owl-nav-list-single, .submenu-container, .owl-mega', // within menu context
		hoverClass: 'owlHover',
		pathClass: 'overrideThisToUse',
		pathLevels: 1,
		delay: 300,
		animation: {
			opacity: 'show'
		},
		animationOut: {
			opacity: 'hide'
		},
		speed: 'normal',
		speedOut: 'fast',
		cssArrows: true,
		disableHI: false,
		onInit: $.noop,
		onBeforeShow: $.noop,
		onShow: $.noop,
		onBeforeHide: $.noop,
		onHide: $.noop,
		onIdle: $.noop,
		onDestroy: $.noop
	};
	// soon to be deprecated
	$.fn.extend({
		hideowlmegamenuUl: methods.hide,
		showowlmegamenuUl: methods.show
	});
})(jQuery);
