!function(){"use strict";try{window.top.location.href}catch(t){return!1}window.top.navigator.userAgent.match(/(MSIE|Trident)/)||fetch("https://script.4dex.io/adagio.js").then((function(t){return t.text()})).then((function(t){window.top.localStorage.getItem("adagioScript")||(window.top.ADAGIO=window.top.ADAGIO||{},window.top.ADAGIO.late=!0,Function(t)()),window.top.localStorage.setItem("adagioScript",t)})).catch((function(t){console.log(t)}))}();
