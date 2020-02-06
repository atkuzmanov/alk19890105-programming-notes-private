var logichopPageRendered = LogicHop.prototype.pageRendered;
LogicHop.prototype.pageRendered = function () {
  logichopPageRendered.call( this );

  var elements = document.querySelector( '.logichop-visible' );
  if ( elements ) {
    elements.classList.add( 'elementor-widget-wrap' );
  }

  var el = document;
  var event = document.createEvent( 'HTMLEvents' );
  event.initEvent( 'resize', true, false );
  el.dispatchEvent( event );
};
