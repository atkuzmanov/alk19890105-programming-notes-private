(function() {

    var __hs_cta_json = {"css":"a#cta_button_2570476_c2c59b08-3744-432e-8ad0-7c8123e69eb6 {\n    cursor: pointer !important;\n\n    \n  }\n\na#cta_button_2570476_c2c59b08-3744-432e-8ad0-7c8123e69eb6:hover {\n}\n\na#cta_button_2570476_c2c59b08-3744-432e-8ad0-7c8123e69eb6:active, #cta_button_2570476_c2c59b08-3744-432e-8ad0-7c8123e69eb6:active:hover {\n}\n\n","css_links":[],"image_html":"<a id=\"cta_button_2570476_c2c59b08-3744-432e-8ad0-7c8123e69eb6\" class=\"cta_button\" href=\"https://www.leanix.net/cs/c/?cta_guid=c2c59b08-3744-432e-8ad0-7c8123e69eb6&placement_guid=b7a4bed5-5cc9-4c84-84ac-67543cdef78e&portal_id=2570476&canon=https%3A%2F%2Fwww.leanix.net%2Fen%2Fblog%2Fdeveloping-microservices-with-java&redirect_url=APefjpGMSZdqq3YtMY-t-bwGMjEP09CXh5iLH0RGck7RbaM-lJBa2oKqvTf5QZjuTaKbLinlr_uyuaIRsILkR9bGMhheGwCip2vI8-XeYTfARIev-OXxUzxmtv1o-Ev-DeyEUXgQzFJT3mFUq3rkY8H42zlHkTyC2EcttD1VtTcGlExdXpT2vHKsuPpd1egbMPEUK37MTm744usHqWRcN-Ukr8ijjUOBQr8pKlHj2Ul8W7lHCh3fYYY&click=50c022a0-5393-4554-88fe-4c2ae422ff42&hsutk=62cf5577745f4e520da0a38979387e9e&signature=AAH58kF1cgXnSznCivDq85mQDc-PeUNaiA&pageId=5456855462\"  target=\"_blank\"  cta_dest_link=\"https://www.leanix.net/leanix-trial\"><img id=\"hs-cta-img-b7a4bed5-5cc9-4c84-84ac-67543cdef78e\" class=\"hs-cta-img topNavBtn\" style=\"border-width: 0px; /*hs-extra-styles*/\" mce_noresize=\"1\" alt=\"Start Now!\" src=\"https://cdn2.hubspot.net/hubshot/19/07/01/7cd96848-f007-4b32-993d-270ab288cd6b.png\" srcset=\"https://cdn2.hubspot.net/hubshot/19/07/01/dc78e0e6-c67f-4083-9a42-b4b4ce9d6324.png 4x, https://cdn2.hubspot.net/hubshot/19/07/01/a3d64485-d835-4edb-87fc-e62a18f72884.png 3x, https://cdn2.hubspot.net/hubshot/19/07/01/484a9256-0d12-451f-85a6-dc5111196871.png 2x\"/></a>","is_image":false,"placement_element_class":"hs-cta-b7a4bed5-5cc9-4c84-84ac-67543cdef78e","raw_html":"<a id=\"cta_button_2570476_c2c59b08-3744-432e-8ad0-7c8123e69eb6\" class=\"cta_button topNavBtn\" href=\"https://www.leanix.net/cs/c/?cta_guid=c2c59b08-3744-432e-8ad0-7c8123e69eb6&placement_guid=b7a4bed5-5cc9-4c84-84ac-67543cdef78e&portal_id=2570476&canon=https%3A%2F%2Fwww.leanix.net%2Fen%2Fblog%2Fdeveloping-microservices-with-java&redirect_url=APefjpGMSZdqq3YtMY-t-bwGMjEP09CXh5iLH0RGck7RbaM-lJBa2oKqvTf5QZjuTaKbLinlr_uyuaIRsILkR9bGMhheGwCip2vI8-XeYTfARIev-OXxUzxmtv1o-Ev-DeyEUXgQzFJT3mFUq3rkY8H42zlHkTyC2EcttD1VtTcGlExdXpT2vHKsuPpd1egbMPEUK37MTm744usHqWRcN-Ukr8ijjUOBQr8pKlHj2Ul8W7lHCh3fYYY&click=50c022a0-5393-4554-88fe-4c2ae422ff42&hsutk=62cf5577745f4e520da0a38979387e9e&signature=AAH58kF1cgXnSznCivDq85mQDc-PeUNaiA&pageId=5456855462\" target=\"_blank\" style=\"/*hs-extra-styles*/\" cta_dest_link=\"https://www.leanix.net/leanix-trial\" title=\"Start Now!\">Start Now!</a>"};
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
            window.hbspt && hbspt.cta && hbspt.cta.afterLoad && hbspt.cta.afterLoad('b7a4bed5-5cc9-4c84-84ac-67543cdef78e');
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
    window._hsq.push(['trackCtaView', 'b7a4bed5-5cc9-4c84-84ac-67543cdef78e', 'c2c59b08-3744-432e-8ad0-7c8123e69eb6']);
    

}());
