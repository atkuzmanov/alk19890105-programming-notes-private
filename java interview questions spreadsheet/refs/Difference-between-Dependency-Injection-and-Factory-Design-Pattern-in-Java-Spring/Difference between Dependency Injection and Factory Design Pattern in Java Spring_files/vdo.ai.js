var w_vdo = (top == self) ? window : window.top,
d_vdo = w_vdo.document;
(function (window, document, deps, publisher) {
  var protocol = window.location.protocol;

  function loadStyleSheet(src, id) {
    var s = document.createElement('link');
    s.id = id;
    s.rel = "stylesheet";
    s.href = protocol + src;
    document.head.appendChild(s);
  }


  function loadPlayerDiv(id,parentId,iframeBurst=false) {
    if (!iframeBurst) {      
      if(document.getElementById(id) == null) {
        var s = document.createElement('div');
        s.id = id;
      } else{
        var s = document.getElementById(id);
      }
       if (parentId != '') {
         var parentDiv = document.getElementById(parentId);
         parentDiv.style.display = "block";
         parentDiv.style.width = "100%";
         if (document.getElementById(parentId).parentNode.offsetWidth < 350){
           var margin = (352 - document.getElementById(parentId).parentNode.clientWidth )/2 ;
           parentDiv.style.marginLeft = '-'+margin + 'px';
         }
         parentDiv.appendChild(s);
       } else{
         document.body.appendChild(s);
       }

    } else{

      var parentIframes = top.document.querySelectorAll('iframe');
      for (var i=0; i < parentIframes.length; i++) {
        var el = parentIframes[i];
        if (el.contentWindow === self) {
            // here you can create an expandable ad
            var s = document.createElement('div');
            s.style.zIndex=111;
            s.style.margin = "0 auto";
            s.style.display = "block";
            s.style.position = "relative";
            s.width = 'fit-content';
            s.id = id;
            var googleDiv = el.parentNode;


            if (parentId != '') {
              var parentDiv = document.getElementById(parentId);
              parentDiv.style.display = "block";
              parentDiv.style.width = "100%";
              parentDiv.appendChild(s);
              googleDiv.insertBefore(parentDiv, el);
            } else{
              googleDiv.insertBefore(s, el);
            }


            googleDiv.style.width = "auto";
            googleDiv.parentNode.style.width='auto';
            googleDiv.parentNode.style.height='auto';
        }
      }
    }
  }

  function loadScriptSync(src, id) {
    var s = document.createElement('script');
    s.id = id;
    s.async = false;
    s.src = protocol + src;
    document.body.appendChild(s);
  }

  function inIframe(){try{return self!==top}catch(r){return!0}}var iframe_Burst=inIframe();
  loadPlayerDiv('_vdo_ads_player_ai_735','vdo_ai_div',iframe_Burst);
  // loadPlayerDiv('_vdo_ads_player_ai_');

  //#region full_dependencies
  loadStyleSheet(deps + "dependencies_hbv3/vdo.min.css", '_vdo_ads_css_5654_');
  loadScriptSync(deps + "dependencies_hbv3/vdo.min.js", '_vdo_ads_css_5654_');
  loadScriptSync("//imasdk.googleapis.com/js/sdkloader/ima3.js", '_vdo_ads_sdk_5654_');
  loadScriptSync(deps + publisher + "/adframe.js", '_vdo_ads_frame_5654_');
  //#endregion

})(w_vdo, d_vdo, '//a.vdo.ai/core/', 'javarevisitedv2');
