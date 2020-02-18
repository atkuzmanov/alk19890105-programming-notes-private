$(document).ready(function(){
  var disableScrollBox = false;

  if(Cookies.get('no-scroll-box') == '1') {
    disableScrollBox = true;
  }

  $(window).scroll(function(){
    if(!disableScrollBox && $(window).scrollTop() > $(document).height()/2) {
      $('.scrollbox').show();
    }
  });


  window.setTimeout(function(){
    if(!disableScrollBox) {
       $('.scrollbox').show();
    }
  },10000);


  $('.scrollbox .close').click(function(e){
    e.preventDefault();
    disableScrollBox = true;
    Cookies.set('no-scroll-box', '1', { expires: 7 });
    $('.scrollbox').hide();
  });
});
