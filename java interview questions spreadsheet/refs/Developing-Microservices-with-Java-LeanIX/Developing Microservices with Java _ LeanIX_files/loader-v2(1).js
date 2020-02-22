(function() {

    var __hs_cta_json = {"css":"a#cta_button_2570476_e7813e7c-caa7-426a-910e-5dc45ee0e5bf {\n    cursor: pointer !important;\n\n    \n  }\n\na#cta_button_2570476_e7813e7c-caa7-426a-910e-5dc45ee0e5bf:hover {\n}\n\na#cta_button_2570476_e7813e7c-caa7-426a-910e-5dc45ee0e5bf:active, #cta_button_2570476_e7813e7c-caa7-426a-910e-5dc45ee0e5bf:active:hover {\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_2570476_e7813e7c-caa7-426a-910e-5dc45ee0e5bf\" class=\"cta_button\" href=\"https://www.leanix.net/cs/c/?cta_guid=e7813e7c-caa7-426a-910e-5dc45ee0e5bf&placement_guid=8be23feb-13b5-459e-9e55-6bc1be67acdb&portal_id=2570476&canon=https%3A%2F%2Fwww.leanix.net%2Fen%2Fblog%2Fdeveloping-microservices-with-java&redirect_url=APefjpEbOI1PWHzd4HrMHWFafj0LF2lYcTzPuSfhArj_0oShpqK7C8cq5lvwmaw8hifuEmn75RXM7J_IbBtWALCQ-cJyyXIELj0gBYoHDPmYiH5emecFfFQ_YHTrlN89S_nYcgCpnc25G515U4kO0x6StOCqw1YOHWy9iI2VlNqn0vqyex5eKm1AjyMyN9vMYzBlac7kK9PMxI61ZS9xUDObI9YQFAvkqw&click=792690eb-2ca6-4226-a964-1c3f7c7bc11d&hsutk=62cf5577745f4e520da0a38979387e9e&signature=AAH58kGkOCrA1fUrX2Lw4m5OLkdj5Ar_hA&pageId=5456855462\"  target=\"_blank\"  cta_dest_link=\"https://app.leanix.net/\"><img id=\"hs-cta-img-8be23feb-13b5-459e-9e55-6bc1be67acdb\" class=\"hs-cta-img login\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Login\" src=\"https://cdn2.hubspot.net/hubshot/19/05/09/3be1473b-133b-4107-8232-fa0cf77e1731.png\" srcset=\"https://cdn2.hubspot.net/hubshot/19/05/09/b9f9556c-b9af-4455-9dc2-b034f0792dda.png 4x, https://cdn2.hubspot.net/hubshot/19/05/09/4e563b37-1b8e-483d-94a7-aa3134eb209d.png 3x, https://cdn2.hubspot.net/hubshot/19/05/09/72889903-7c64-41cd-9afe-c9fb2872ddde.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-8be23feb-13b5-459e-9e55-6bc1be67acdb","raw_html":"<a id=\"cta_button_2570476_e7813e7c-caa7-426a-910e-5dc45ee0e5bf\" class=\"cta_button login\" href=\"https://www.leanix.net/cs/c/?cta_guid=e7813e7c-caa7-426a-910e-5dc45ee0e5bf&placement_guid=8be23feb-13b5-459e-9e55-6bc1be67acdb&portal_id=2570476&canon=https%3A%2F%2Fwww.leanix.net%2Fen%2Fblog%2Fdeveloping-microservices-with-java&redirect_url=APefjpEbOI1PWHzd4HrMHWFafj0LF2lYcTzPuSfhArj_0oShpqK7C8cq5lvwmaw8hifuEmn75RXM7J_IbBtWALCQ-cJyyXIELj0gBYoHDPmYiH5emecFfFQ_YHTrlN89S_nYcgCpnc25G515U4kO0x6StOCqw1YOHWy9iI2VlNqn0vqyex5eKm1AjyMyN9vMYzBlac7kK9PMxI61ZS9xUDObI9YQFAvkqw&click=792690eb-2ca6-4226-a964-1c3f7c7bc11d&hsutk=62cf5577745f4e520da0a38979387e9e&signature=AAH58kGkOCrA1fUrX2Lw4m5OLkdj5Ar_hA&pageId=5456855462\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://app.leanix.net/\" title=\"Login\">Login</a>"};
    var __hs_cta = {};

    __hs_cta.drop = function() {
        var is_legacy = document.getElementById('hs-cta-ie-element') && true || false,
            html = __hs_cta_json.image_html,
            tags = __hs_cta.getTags(),
            is_image = __hs_cta_json.is_image,
            parent, _style;

        if (!is_legacy && !is_image) {
            parent = (document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0]);

            _style = document.createElement('style');
            parent.insertBefore(_style, parent.childNodes[0]);
            try {
                default_css = ".hs-cta-wrapper p, .hs-cta-wrapper div { margin: 0; padding: 0; }";
                cta_css = default_css + " " + __hs_cta_json.css;
                // http://blog.coderlab.us/2005/09/22/using-the-innertext-property-with-firefox/
                _style[document.all ? 'innerText' : 'textContent'] = cta_css;
            } catch (e) {
                // addressing an ie9 issue
                _style.styleSheet.cssText = cta_css;
            }
            
            html = __hs_cta_json.raw_html;

        }
         

        for (var i = 0; i < tags.length; ++i) {

            var tag = tags[i];
            var images = tag.getElementsByTagName('img');
            var cssText = "";
            var align = "";
            for (var j = 0; j < images.length; j++) {
                align = images[j].align;
                images[j].style.border = '';
                images[j].style.display = '';
                cssText = images[j].style.cssText;
            }

            if (align == "right") {
                tag.style.display = "block";
                tag.style.textAlign = "right";
            } else if (align == "middle") {
                tag.style.display = "block";
                tag.style.textAlign = "center";
            }

            tag.innerHTML = html.replace('/*hs-extra-styles*/', cssText);
            tag.style.visibility = 'visible';
            tag.setAttribute('data-hs-drop', 'true');
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('8be23feb-13b5-459e-9e55-6bc1be67acdb');
        }

        return tags;
    };

    __hs_cta.getTags = function() {
        var allTags, check, i, divTags, spanTags,
            tags = [];
            if (document.getElementsByClassName) {
                allTags = document.getElementsByClassName(__hs_cta_json.placement_element_class);
                check = function(ele) {
                    return (ele.nodeName == 'DIV' || ele.nodeName == 'SPAN') && (!ele.getAttribute('data-hs-drop'));
                };
            } else {
                allTags = [];
                divTags = document.getElementsByTagName("div");
                spanTags = document.getElementsByTagName("span");
                for (i = 0; i < spanTags.length; i++) {
                    allTags.push(spanTags[i]);
                }
                for (i = 0; i < divTags.length; i++) {
                    allTags.push(divTags[i]);
                }

                check = function(ele) {
                    return (ele.className.indexOf(__hs_cta_json.placement_element_class) > -1) && (!ele.getAttribute('data-hs-drop'));
                };
            }
            for (i = 0; i < allTags.length; ++i) {
                if (check(allTags[i])) {
                    tags.push(allTags[i]);
                }
            }
        return tags;
    };

    // need to do a slight timeout so IE has time to react
    setTimeout(__hs_cta.drop, 10);
    
    window._hsq = window._hsq || [];
    window._hsq.push(['trackCtaView', '8be23feb-13b5-459e-9e55-6bc1be67acdb', 'e7813e7c-caa7-426a-910e-5dc45ee0e5bf']);
    

}());
