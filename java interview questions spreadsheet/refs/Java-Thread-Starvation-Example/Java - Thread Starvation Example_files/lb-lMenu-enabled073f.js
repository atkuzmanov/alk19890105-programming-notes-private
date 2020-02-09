function populateLeftMenu(data) {
let thisPath =  window.location.pathname;
thisPath = thisPath.replace(/[/]+/g, '/');

let isHowTo = thisPath.indexOf("how-to/code-snippets/jcode-")!=-1;
   let baseUrl  = window.location.protocol + '//' + window.location.host;
    let html = "<h3 class='lMenuHead'>" + data.name + "</h3>";
    for (i in data.list) {
        let list = data.list[i];
        if(list.group!=null){
        if(isHowTo){
        if(list.groupLink != undefined){
        html+="<div class='lMenuApiClass'><a href='"+baseUrl+list.groupLink+".html'>"+list.group+"</a></div>"
        }else{
        html+="<div class='lMenuApiClass apiClassSelected'>"+list.group+":</div>"
        }}
        else{
        html += "<h5 class='lMenuGrp'>" + list.group +"</h5>";
        }
        }
        if(list.links != null && list.links.length>0){
        let extra = "";
        if(isHowTo){
        extra = " apiGrpUl"
        }
         html+="<ul class='siteAdsCls"+extra+"'>";

        for (g in list.links) {
            let link = list.links[g];

            let page = link.link+".html"
            if(page==thisPath){
             html+="<li id='selectedLMenuItem' class='currentMLink'>"+link.title+"</li>"
            }else{
            html+="<li class='rp-line2'><a href='"+baseUrl+link.link+".html'>"+link.title+"</a></li>"
            }
         }
         html+="</ul>"
         }
    }

    //just put some space at bottom
    if(isHowTo){
    html+= "<div class='lMenuApiClass'><a href='"+
    baseUrl+"/how-to/java-api.html'><u>All JAVA API</u></a></div>"
     }
     html+="<div class='lMenuApiClass'></div>"
     html+="<div class='lMenuApiClass'></div>"
     html+="<div class='lMenuApiClass'></div>"


    $('#lMenuContent').hide().html(html).fadeIn(300);
    let lMenu = $('#lMenu');
    lMenu.css({"border":"solid 2px #bcbfc3;"});
    if(isHowTo){
        lMenu.css({"background": "rgba(221, 218, 205, 0.27)"})
             }

  setTimeout(()=>{
  let target = document.getElementById('selectedLMenuItem');
  let topPos = target.offsetTop;
  let h = $("#lMenu").height();
  if(topPos>h-150){
      document.getElementById('lMenu').scrollTop=topPos-h+150;
     }
  },
  0);
}



$(document).ready(function () {

    let url = document.location.href;


    if(url.indexOf("/how-to/code-snippets/jcode-")!=-1){
     let i = url.lastIndexOf("-");
     url = url.substring(0,i);
     //i = url.lastIndexOf("-");
     //url = url.substring(0,i);
     url= url+"/content.json";



    }
    else{
      let i = url.lastIndexOf("/");
       url = url.substring(0, i) + "/content.json";
    }
    let func = function (data, status, xhr) {
        let content = parseJsonData(data, xhr);
        populateLeftMenu(content);
    };
    $.ajax({
        url: url,
        success: func,
        cache: false
    });

  let leftMenu = $('#lMenu');
    let leftMenuTd = $('#lMenuTd');
       if ( leftMenu.css('display') == 'none'){
        leftMenuTd.css("display","none");
           return;
        }
    if (leftMenuTd.length == 0) {

        return;
    }
    var top = leftMenuTd.offset().top;
    let footerHeight = $("#footer").height();
    leftMenu.css({top: top + 'px'});
    let adjustHeight = function(y){
     let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
                           leftMenu.height(h-top+y-6);

    }
    let scrollFunc = function () {

    if ( leftMenu.css('display') == 'none'){
              return;
           }
        var y = $(this).scrollTop();

        if (y >= top) {

            var scrollableHeight = $(document).outerHeight() - $(window).outerHeight();
            let moveUp = scrollableHeight - y <= footerHeight-8;
	           let h = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            leftMenu.height(h-6);
            if (moveUp) {
							leftMenu.css({top: '1px'});
               leftMenu.height(h-6-(footerHeight-scrollableHeight+ y ));
            }
            else {
                leftMenu.css({top: '1px'});
            }
        }
        else {
            leftMenu.css({top: (top - y-1) + 'px'});
            adjustHeight(y);
        }
    };
    scrollFunc();
    $(window).scroll(function (event) {
        scrollFunc();
    });
    $(window).on('resize', function(){
       scrollFunc();
    });
});

