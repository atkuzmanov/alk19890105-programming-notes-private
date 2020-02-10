function display_see_more(text = undefined, video = undefined, banner = undefined, banner_link = undefined)
{
var textsObj, videoObj, bannerObj, banner_linksObj;
var call_the_image = false;
var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
        render_xml(this);
    }
};
xhttp.open("GET", "/wp-content/uploads/apexsql/xml/seemore.xml", true);
xhttp.send();

function render_xml(xml){
    var xmlContent = xml.responseXML;
    textsObj = xmlContent.childNodes[0].childNodes[1];
    videosObj = xmlContent.childNodes[0].childNodes[3];
    bannersObj = xmlContent.childNodes[0].childNodes[5];
    banner_linksObj = xmlContent.childNodes[0].childNodes[7];


function getText(texts, text){
    for(var i=0; i<texts.childElementCount; i++)
    {
        if(texts.children[i].getAttribute('name') == text)
        {
            return texts.children[i].textContent;
        }
    }
}
function getVideo(videos, video){
    for(var i=0; i<videos.childElementCount; i++)
    {
        if(videos.children[i].getAttribute('name') == video)
        {
            if(videos.children[i].getAttribute('link') != "")
            {
                call_the_image = true;
                return videos.children[i].getAttribute('link');
            }
            else
            {
                return videos.children[i].textContent;
            }
        }
    }
}
function getHref(videos, video){
    for(var i=0; i<videos.childElementCount; i++)
    {
         if(videos.children[i].getAttribute('name') == video)
        {
                return videos.children[i].getAttribute('href');
        }
    }
}
function getBanner(banners, banner){
    for(var i=0; i<banners.childElementCount; i++)
    {
        if(banners.children[i].getAttribute('name') == banner)
        {
            return banners.children[i].textContent;
        }
    }
}
function getBannerLink(banner_links, banner_link){
    for(var i=0; i<banner_links.childElementCount; i++)
    {
        if(banner_links.children[i].getAttribute('name') == banner_link)
        {
            return banner_links.children[i].textContent;
        }
    }
}



    text = getText(textsObj, text);
    href = getHref(videosObj, video);
    video = getVideo(videosObj, video);
    
    banner = getBanner(bannersObj, banner);
    banner_link = getBannerLink(banner_linksObj, banner_link);

    var see_more_text = document.getElementById('see_more');

    var tab_empty_line = document.createElement('p');
    tab_empty_line.innerHTML = '&nbsp;'

    var tag_h2 = document.createElement('h2');
    tag_h2.innerHTML = "See more";
    see_more_text.appendChild(tag_h2);

    if(text != undefined)
    {
        var tag_p = document.createElement('p');
        tag_p.innerHTML = text;
        see_more.appendChild(tag_p);
    }
    if(video != undefined)
    {
        var tag_center = document.createElement('center');
        if (call_the_image)
        {
            var a = document.createElement('a');
            a.href = href;
			a.rel = "noopener";
			a.target = "_blank";
            var image = document.createElement('img');
            image.src = video; 
            image.style.opacity = "1";
            a.appendChild(image);
            tag_center.appendChild(a);
        }
        else 
        {
            var tag_div = document.createElement('div');
            tag_div.className = "videoWrapper";
            var tag_iframe = document.createElement('iframe');
            tag_iframe.src = video;
            tag_div.appendChild(tag_iframe);
            tag_center.appendChild(tag_div);
        } 
        see_more.appendChild(tag_center);
        see_more.appendChild(tab_empty_line);
        see_more.appendChild(tab_empty_line);
    }
    if(banner != undefined)
    {
        var tag_a = document.createElement('a');
        tag_a.href = banner_link;
		tag_a.rel= "noopener noreferrer";
		tag_a.target = "_blank";
        var tag_img = document.createElement('img');
        tag_img.src = banner;
        tag_a.appendChild(tag_img);
        see_more.appendChild(tab_empty_line);
        see_more.appendChild(tag_a);
    }

}
}