(function(){

$(document).ready(function() {
  $('pre.code').each(function(ix, el){
    hljs.highlightBlock(el);
  });
});

}());
