//Remove image attributes height and width
$(document).ready(function($){
  $('img').each(function(){
    $(this).removeAttr('width')
    $(this).removeAttr('height');
  });
});

//sticky cta
$(document).scroll(function() {
  var y = $(this).scrollTop();
  if (y > 320) {
    $('html').addClass('scrolled-past-hero');
  } else {
    $('html').removeClass('scrolled-past-hero');
  }
});

// Open Mobile Nav
$("[data-nav-toggle]").click(function(e){
  e.preventDefault();
  $("html").toggleClass("nav-shelf-expanded");
});

//Fit vid
$("section").fitVids();

// Label as placeholder
$('#commentform input, #searchBox input').each(function() {
  var $this = $(this);
  var $originalLabel = $this.siblings('label').children('small');
  var originalLabelText = $originalLabel.html();
  if($this.val() === '') {
    $originalLabel.html(originalLabelText).css('opacity', '1');
  } else {
    $originalLabel.html('');
  }
  $this.focus(function() {
    $originalLabel.css('opacity', '0.5');
  });
  $this.on('keypress', function() {
    if($this.val() === '') {
      $originalLabel.html('');
    }
  });
  $this.blur(function() {
    if($this.val() === '') {
      $originalLabel.html(originalLabelText).css('opacity', '1');
    }
  });
});