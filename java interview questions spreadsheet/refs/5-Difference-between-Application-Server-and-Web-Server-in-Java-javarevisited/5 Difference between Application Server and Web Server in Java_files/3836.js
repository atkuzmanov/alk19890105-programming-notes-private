/* Updated : 2020-02-14 11:18:10 */

    var refEn = 0,
    updateDate = "2020-02-14 11:18:10",
    tagsInitDone = 0,
    gptAdSlots = [],
    adDomain = 'javarevisited.blogspot.com',
    breakpoints = {"desktop":"1024","tablet":"768","mobile":"0"},
    domainValid = 1,
    PREBID_TIMEOUT = 2000,
    interstitialDone = 0,
    waldoTimeOuts = [],
    waldoAdRefreshes = [],
    allAdUnits = [],
    blockAdsOn = [],
    pubwiseSiteId = '',
    adTagsInitFlag = 0,
    siteId = 3836,
    bidDivAvailable = 0,
    waldoTagsStatus = [],
    googletag = googletag || {},
    pbjs = pbjs || {},
    switchUserSync = 0,
    waldoRestrictIp = 0,
    waldoImpressionDone = 0,
    blockedPageAds = '',
    waldoGDPR = 1;
    var waldoCountry = waldoReadCookie('waldo_country');
    var waldoContinent = waldoReadCookie('waldo_continent');
    var waldoDataPointsDone = waldoReadCookie('waldo_data_points_done');
    var closeBtnAdded = 0;
    var unlimitedRefGeos = ['US', 'UK', 'CA', 'AU', 'NZ', 'HK', 'SG', 'IL'];
    var waldoGPTSlots = {"3909":"gptAdSlots[3909] = googletag.defineSlot('\/124067137\/javarevisited300x250FL_1', [[300, 250], [300, 600]], 'waldo-tag-3909').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250], [300, 600]]).addSize([768, 0], [[300, 250], [300, 600]]).addSize([0, 0], [[300, 250], [300, 600]]).build()).addService(googletag.pubads());","3911":"gptAdSlots[3911] = googletag.defineSlot('\/124067137\/javarevisited300x250FX_1', [300, 250], 'waldo-tag-3911').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[300, 250]]).addSize([0, 0], [[300, 250]]).build()).addService(googletag.pubads());","6795":"gptAdSlots[6795] = googletag.defineSlot('\/124067137\/javarevisited300x250FX_2', [300, 250], 'waldo-tag-6795').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[300, 250]]).addSize([0, 0], [[300, 250]]).build()).addService(googletag.pubads());","6797":"gptAdSlots[6797] = googletag.defineSlot('\/124067137\/javarevisited300x250FX_3', [300, 250], 'waldo-tag-6797').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[300, 250]]).addSize([0, 0], [[300, 250]]).build()).addService(googletag.pubads());","6799":"gptAdSlots[6799] = googletag.defineSlot('\/124067137\/javarevisited300x250FX_4', [300, 250], 'waldo-tag-6799').defineSizeMapping(googletag.sizeMapping().addSize([1024, 0], [[300, 250]]).addSize([768, 0], [[300, 250]]).addSize([0, 0], [[300, 250]]).build()).addService(googletag.pubads());"};
    var waldoTagsOnPage = [];
    var waldoSlotIds = ["3909","3911","6795","6797","6799"];
    var waldoDefinedSlots = [];
    var waldoAdUnitsAddedToPbjs = [];
    var waldoAdRefreshesOnView = [];

    //window.googletag = window.googletag || {cmd: []};

    googletag.cmd = googletag.cmd || [];
    
    if(typeof googletag.cmd.unshift == 'function') {
        googletag.cmd.unshift(function() {
            googletag.pubads().disableInitialLoad();
        });
    }
    else {
        googletag.cmd.push(function() {
            googletag.pubads().disableInitialLoad();
        });
    }


    if(!Array.prototype.find) {
        Object.defineProperty(Array.prototype, 'find', {
            value: function(predicate) {
                if(this == null) {
                    throw new TypeError('"this" is null or not defined');
                }
                var o = Object(this);
                var len = o.length >>> 0;
                
                if(typeof predicate !== 'function') {
                    throw new TypeError('predicate must be a function');
                }
                var thisArg = arguments[1];
                var k = 0;
                while (k < len) {
                    var kValue = o[k];
                    if (predicate.call(thisArg, kValue, k, o)) {
                        return kValue;
                    }
                    k++;
                }
                return undefined;
            },
            configurable: true,
            writable: true
        });
    }

    if(waldoCountry === null) {
        PREBID_TIMEOUT = PREBID_TIMEOUT + 500;
    }

    function adDomainCheck() {
        if(blockAdsOn.length) {
            var currPath = window.location.pathname;
             //currPath = (currPath.substr(-1) != '/') ? currPath + '/' : currPath;
            for (i = 0; i < blockAdsOn.length; i++) {
                //console.log(blockAdsOn[i] + ' ' + currPath);
                if(blockAdsOn[i] == currPath) {
                    return false;
                }
            }
         }

        var url = window.location.href;
        url = decodeURI(url);
        url = decodeURIComponent(url);

        var re = /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;

        var emails = re.exec(url);

        if (emails !== null && emails[0].indexOf('volkmarkt.com') === -1) {
            waldoEmailDetected(url);
            return false;
        }
        return true;
    }

    function waldoIsInArray(needle, haystack) {
        var length = haystack.length;
        for(var i = 0; i < length; i++) {
            if(haystack[i] == needle) return true;
        }
        return false;
    }
    
     // init scripts start

    function waldoInitScripts() {
        var style = document.createElement('style');
        style.type = 'text/css';

        var css = '';
        css += '#waldo-sticky-footer-wrapper {position: fixed; width: 100%; bottom: 0px; left: 0px; text-align: center; z-index: 9000;}';
        css += '#waldo-sticky-footer-wrapper > div {position: relative; display: inline-block}';
        css += '#waldo-sticky-footer-wrapper iframe, #waldo-sticky-footer-wrapper div {margin-left: auto;margin-right: auto;}';
        css += '.waldo-sticky-sidebar{position: fixed; top: 10px;z-index: 90}';
        css += '.waldo-sticky-css{position: sticky; top: 10px; z-index: 90}';
        css += '.waldo-overlay{position: fixed;height: 100%;width: 100%;top: 0;left: 0;z-index: 105;background: rgba(0,0,0,0.7);}';
        css += '#waldo-counter {position: absolute;bottom: 0;right: 0;color: #fff;font-size: 30px;padding: 15px;}';
         
        if(browserWidth >= breakpoints.desktop) {
            css += '.waldo-bfleft {position: fixed; left: 0; top: 10px;z-index:101;}';
            css += '.waldo-bfright {position: fixed; right: 0; top: 10px;z-index:101;}';
        }

        css += '#waldo-tag-6038 {clear: both !important;}';
        css += 'div[class^="app_gdpr-"] a {color: #41afbb !important; text-decoration: underline !important}';
        css += '#waldo-close-button {position: absolute; right: 0;top: -24px;}';
        css += '#waldo-close-button a {';
        css += 'border: 1px solid rgba(0,0,0,.35);';
        css += 'padding: 3px;'
        css += 'font-size: 12px;';
        css += 'color: #fff;';
        css += 'font-weight: bold;';
        css += 'background-color: #777;';
        css += '}';
       
        style.appendChild(document.createTextNode(css));
        var styleTarget = document.getElementsByTagName('head')[0];
        styleTarget.appendChild(style);

        var gads = document.createElement('script');
        gads.async = true;
        gads.type = 'text/javascript';
        var useSSL = 'https:' == document.location.protocol;
        gads.src = (useSSL ? 'https:' : 'http:') +
             '//securepubads.g.doubleclick.net/tag/js/gpt.js';
        var node = document.getElementsByTagName('script')[0];
        node.parentNode.insertBefore(gads, node);

        var pbjsEl = document.createElement('script');
        pbjsEl.type = 'text/javascript';
        pbjsEl.async = true;
        pbjsEl.src = 'https://cdn.thisiswaldo.com/sites/all/modules/custom/ad_delivery/prebid.js';
        var pbjsTargetEl = document.getElementsByTagName('head')[0];
        pbjsTargetEl.insertBefore(pbjsEl, pbjsTargetEl.firstChild);

                    var blockT = document.createElement('script');
            blockT.type = 'text/javascript';
            blockT.async = true;
            blockT.src = '//theeighth-net.videoplayerhub.com/videoplayer.js';
            var blockTEl = document.getElementsByTagName('head')[0];
            blockTEl.insertBefore(blockT, blockTEl.firstChild);
        
         
    }


    function waldoSetTagsOnPage() {
        for(var i = 0; i < waldoSlotIds.length; i++) {    
            if(document.getElementById('waldo-tag-' + waldoSlotIds[i])) {
                waldoTagsOnPage.push(waldoSlotIds[i]);
            }
        }
    }

   function isElementInViewport(el) {
       var rect = el.getBoundingClientRect(),
        vWidth = window.innerWidth || doc.documentElement.clientWidth,
        vHeight = window.innerHeight || doc.documentElement.clientHeight,
        efp = function (x, y) { return document.elementFromPoint(x, y) };     

        // Return false if it's not in the viewport
        if (rect.right < 0 || rect.bottom < 0 
                || rect.left > vWidth || rect.top > vHeight)
            return false;

        // Return true if any of its four corners are visible
        return (
              el.contains(efp(rect.left,  rect.top))
          ||  el.contains(efp(rect.right, rect.top))
          ||  el.contains(efp(rect.right, rect.bottom))
          ||  el.contains(efp(rect.left,  rect.bottom))
        );
    }

    function isElementInViewport2(el) {

        //special bonus for those using jQuery
        if (typeof jQuery === "function" && el instanceof jQuery) {
            el = el[0];
        }

        var rect = el.getBoundingClientRect();
        //console.log(el)
        //console.log(rect);

        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) && /*or $(window).height() */
            rect.right <= (window.innerWidth || document.documentElement.clientWidth) /*or $(window).width() */
        );
    }

            function waldoInitScroll() { 
            window.addEventListener('scroll', function(e) {
                for(var i = 0; i < adUnits.length; i++) {
                    var adUnit = adUnits[i];
                    var bidDiv = document.getElementById(adUnit.code);
                    var slotNo = adUnit.customParams.slotNo;
                     
                     /*if(bidDiv && isElementInViewport(bidDiv)) {
                         console.log(adUnit.code + ' is visible');
                    }*/
                   
                    if(bidDiv && (isElementInViewport(bidDiv) || isElementInViewport2(bidDiv)) && waldoAdRefreshesOnView[slotNo] == 1) {
                        // refresh the ad unit on view immediately
                        hbRefreshBid(adUnit);
                       // console.log('waldo unit ' + adUnit.code + ' refreshed on view');
                        // set a new timer
                        hbRandomMinMaxRefreshOnView(adUnit);

                        // reset the variable so that we know when next timer ends and ad unit can be refreshed on view
                        waldoAdRefreshesOnView[slotNo] = 0;
                    }
                }
            });
        }
    
    function waldoInitGPT() {
        var gscript = document.createElement('script');
        gscript.type = 'text/javascript';

        gscript.text = 'googletag.cmd.push(function() {';
                
        gscript.text += "googletag.pubads().addEventListener('slotRenderEnded', function(event) {";
        gscript.text += "waldoPassbackCheck(event);";
        gscript.text += "waldoAddCloseBtn(event);";
        gscript.text += "});";
        
        gscript.text += "googletag.pubads().enableSingleRequest();";
        //gscript.text += "googletag.pubads().disableInitialLoad();";
        gscript.text += "googletag.enableServices();";

        for(var i = 0; i < waldoTagsOnPage.length; i++) {    
            gscript.text += waldoGPTSlots[waldoTagsOnPage[i]];
            gscript.text += "googletag.display('waldo-tag-" + waldoTagsOnPage[i] + "');";
            waldoDefinedSlots[waldoTagsOnPage[i]] = 1;
        }

        
        gscript.text += "});";
        
        var scriptTarget = document.getElementsByTagName('head')[0];
        scriptTarget.appendChild(gscript);
    }


    function waldoInitGPTSingleSlot(slotNo) {
        var gscript = document.createElement('script');
        gscript.type = 'text/javascript';
        gscript.text = 'googletag.cmd.push(function() {';
     
        gscript.text += waldoGPTSlots[slotNo];
        gscript.text += "googletag.display('waldo-tag-" + slotNo + "');";
        
        gscript.text += "googletag.pubads().enableSingleRequest();";
        gscript.text += "googletag.enableServices();";
        gscript.text += "});";
        
        var scriptTarget = document.getElementsByTagName('head')[0];
        scriptTarget.appendChild(gscript);
        waldoDefinedSlots[slotNo] = 1;
    }

    // init scripts end

    //console.log(PREBID_TIMEOUT);
             var browserWidth = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    
    var adUnits = [{"code":"waldo-tag-3909","mediaTypes":{"banner":{"sizes":[]}},"customParams":{"slotNo":"3909","amp_code":"\/124067137\/javarevisited300x250FL_1","mobile_pause":"0","refresh":{"type":"min_max","desktop":{"min":"45","max":"90"},"mobile":{"min":"45","max":"70"},"min":"45","max":"90","limit":"0"},"mobile_refresh":1},"sizeMapping":[{"minWidth":"1024","sizes":[[300,250],[300,600]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"338301"}},{"bidder":"districtm","params":{"placementId":"15425076"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540665006"}},{"bidder":"appnexus","params":{"placementId":"15425061"}},{"bidder":"gumgum","params":{"inSlot":"25746"}},{"bidder":"gumgum","params":{"inSlot":"25747"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"lockerdome","params":{"adUnitId":"11736642952320358"}},{"bidder":"ix","params":{"siteId":"296667","size":[300,250]}},{"bidder":"ix","params":{"siteId":"296668","size":[300,600]}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"dVQ06ADzGr6yooaKlId8sQ"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"eu2l"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"5GHY"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"sharethrough","params":{"pkey":"Fz7FdWrdW7mbDLJqhtmCh59N"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"768","sizes":[[300,250],[300,600]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"338301"}},{"bidder":"districtm","params":{"placementId":"15425076"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540665006"}},{"bidder":"appnexus","params":{"placementId":"15425061"}},{"bidder":"gumgum","params":{"inSlot":"25746"}},{"bidder":"gumgum","params":{"inSlot":"25747"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"lockerdome","params":{"adUnitId":"11736642952320358"}},{"bidder":"ix","params":{"siteId":"296669","size":[300,250]}},{"bidder":"ix","params":{"siteId":"296670","size":[300,600]}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"eu2l"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"5GHY"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"sharethrough","params":{"pkey":"Fz7FdWrdW7mbDLJqhtmCh59N"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"0","sizes":[[300,250],[300,600]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"338301"}},{"bidder":"districtm","params":{"placementId":"15425076"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540665006"}},{"bidder":"appnexus","params":{"placementId":"15425061"}},{"bidder":"gumgum","params":{"inSlot":"25746"}},{"bidder":"gumgum","params":{"inSlot":"25747"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"lockerdome","params":{"adUnitId":"11736642952320358"}},{"bidder":"ix","params":{"siteId":"296669","size":[300,250]}},{"bidder":"ix","params":{"siteId":"296670","size":[300,600]}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"eu2l"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"5GHY"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"sharethrough","params":{"pkey":"Fz7FdWrdW7mbDLJqhtmCh59N"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]}],"affiliate_banners":[]},{"code":"waldo-tag-3911","mediaTypes":{"banner":{"sizes":[]}},"customParams":{"slotNo":"3911","amp_code":"\/124067137\/javarevisited300x250FX_1","mobile_pause":"0","refresh":{"type":"min_max","desktop":{"min":"45","max":"90"},"mobile":{"min":"45","max":"70"},"min":"45","max":"90","limit":"0"},"mobile_refresh":1},"sizeMapping":[{"minWidth":"1024","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"338303"}},{"bidder":"districtm","params":{"placementId":"15425113"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540665010"}},{"bidder":"appnexus","params":{"placementId":"15425065"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"ix","params":{"siteId":"296671","size":[300,250]}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"dVQ06ADzGr6yooaKlId8sQ"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"qT2e"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"768","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"338303"}},{"bidder":"districtm","params":{"placementId":"15425113"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540665010"}},{"bidder":"appnexus","params":{"placementId":"15425065"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"ix","params":{"siteId":"296672","size":[300,250]}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"qT2e"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"0","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"338303"}},{"bidder":"districtm","params":{"placementId":"15425113"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540665010"}},{"bidder":"appnexus","params":{"placementId":"15425065"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"ix","params":{"siteId":"296672","size":[300,250]}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"qT2e"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]}],"affiliate_banners":[]},{"code":"waldo-tag-6795","mediaTypes":{"banner":{"sizes":[]}},"customParams":{"slotNo":"6795","amp_code":"\/124067137\/javarevisited300x250FX_2","mobile_pause":"0","refresh":{"type":"min_max","desktop":{"min":"45","max":"90"},"mobile":{"min":"45","max":"70"},"min":"45","max":"90","limit":"0"},"mobile_refresh":1},"sizeMapping":[{"minWidth":"1024","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"480726"}},{"bidder":"districtm","params":{"placementId":"18134982"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540941171"}},{"bidder":"appnexus","params":{"placementId":"18134993"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"ix","params":{"siteId":"296673","size":[300,250]}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"dVQ06ADzGr6yooaKlId8sQ"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"b8DR"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"768","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"480726"}},{"bidder":"districtm","params":{"placementId":"18134982"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540941171"}},{"bidder":"appnexus","params":{"placementId":"18134993"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"ix","params":{"siteId":"296674","size":[300,250]}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"b8DR"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"0","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"480726"}},{"bidder":"districtm","params":{"placementId":"18134982"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540941171"}},{"bidder":"appnexus","params":{"placementId":"18134993"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"ix","params":{"siteId":"296674","size":[300,250]}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"aardvark","params":{"ai":"IS9K","sc":"b8DR"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]}],"affiliate_banners":[]},{"code":"waldo-tag-6797","mediaTypes":{"banner":{"sizes":[]}},"customParams":{"slotNo":"6797","amp_code":"\/124067137\/javarevisited300x250FX_3","mobile_pause":"0","refresh":{"type":"min_max","desktop":{"min":"45","max":"90"},"mobile":{"min":"45","max":"70"},"min":"45","max":"90","limit":"0"},"mobile_refresh":1},"sizeMapping":[{"minWidth":"1024","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"480727"}},{"bidder":"districtm","params":{"placementId":"18135001"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540941174"}},{"bidder":"appnexus","params":{"placementId":"18135006"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"dVQ06ADzGr6yooaKlId8sQ"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"768","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"480727"}},{"bidder":"districtm","params":{"placementId":"18135001"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540941174"}},{"bidder":"appnexus","params":{"placementId":"18135006"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"0","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"480727"}},{"bidder":"districtm","params":{"placementId":"18135001"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540941174"}},{"bidder":"appnexus","params":{"placementId":"18135006"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]}],"affiliate_banners":[]},{"code":"waldo-tag-6799","mediaTypes":{"banner":{"sizes":[]}},"customParams":{"slotNo":"6799","amp_code":"\/124067137\/javarevisited300x250FX_4","mobile_pause":"0","refresh":{"type":"min_max","desktop":{"min":"45","max":"90"},"mobile":{"min":"45","max":"70"},"min":"45","max":"90","limit":"0"},"mobile_refresh":1},"sizeMapping":[{"minWidth":"1024","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"18135011"}},{"bidder":"districtm","params":{"placementId":"480728"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540941179"}},{"bidder":"appnexus","params":{"placementId":"18135054"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"dVQ06ADzGr6yooaKlId8sQ"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"768","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"18135011"}},{"bidder":"districtm","params":{"placementId":"480728"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540941179"}},{"bidder":"appnexus","params":{"placementId":"18135054"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]},{"minWidth":"0","sizes":[[300,250]],"bids":[{"bidder":"districtmDMX","params":{"memberid":"100835","dmxid":"18135011"}},{"bidder":"districtm","params":{"placementId":"480728"}},{"bidder":"openx","params":{"delDomain":"the-eighth-d.openx.net","unit":"540941179"}},{"bidder":"appnexus","params":{"placementId":"18135054"}},{"bidder":"gumgum","params":{"inSlot":"7722"}},{"bidder":"lockerdome","params":{"adUnitId":"11736639328441702"}},{"bidder":"rubicon","params":{"accountId":"17822","zoneId":"1256456","siteId":"253518"}},{"bidder":"33across","params":{"productId":"siab","siteId":"c2uq4MGH8r6y0WaKkGJozW"}},{"bidder":"sharethrough","params":{"pkey":"kTbSC4suDuQW1CWPnxq9HMZz"}},{"bidder":"triplelift","params":{"inventoryCode":"NM_RON_HDX"}}]}],"affiliate_banners":[]}];
    var passbackAdUnits = [];
    allAdUnits = adUnits.concat(passbackAdUnits);
    adUnits.forEach(function(adUnit) {
        if(!adUnit.bids) {
            var responsiveBids = adUnit.sizeMapping.find(function(sizeMapping) {
                if (browserWidth > 0) {
                    return browserWidth >= sizeMapping.minWidth;
                }else {
                    return sizeMapping.minWidth == 0;
                }
            }).bids;

            var sizes = adUnit.sizeMapping.find(function(sizeMapping) {
                if(browserWidth > 0) {
                    return browserWidth >= sizeMapping.minWidth;
                }else {
                    return sizeMapping.minWidth == 0;
                }
            }).sizes;

            adUnit.mediaTypes.banner.sizes = sizes;
            adUnit.bids = responsiveBids;
            delete adUnit.sizeMapping;
        }
    });

     
             var affiliateBanners;
     
    if(adDomainCheck()) {
        waldoInitScripts();

                    const customConfigObject = {
                "buckets" : [{
                    "precision": 2,  //default is 2 if omitted - means 2.1234 rounded to 2 decimal places = 2.12
                    "min" : 0,
                    "max" : 40,
                    "increment" : 0.02  // from $0 to $5, 1-cent increments
                }]
            };
        
        pbjs.que = pbjs.que || [];
        
        pbjs.que.push(function() {
            pbjs.aliasBidder('appnexus', 'districtm');
            pbjs.aliasBidder('appnexus', '9284');

            pbjs.setConfig({
                priceGranularity: customConfigObject,
                "schain": {
                    "validation": "off",
                    "config": {
                        "ver":"1.0",
                        "complete": 1,
                        "nodes": [{
                            "asi":"newormedia.com",
                            "sid":"3836",
                            "hp":1
                        }]
                    }
                }
            });
        });

                    // Wrapper for Eighth Network, generated on 2020-01-30T21:37:13-05:00, version 2018.04.02
pbjs.que.push(function() {

    // keep a reference to original renderAd function
    var w = window;
    w._clrm = w._clrm || {};
    w._clrm.renderAd = w._clrm.renderAd || pbjs.renderAd;
    var config = w._clrm.prebid || {
           /* Enables sandboxing on a device group
                All:1 , Desktop:2, Mobile: 3, iOS: 4, Android: 5, Off: 0
            */
        sandbox: 0
    };

    if (w.confiant && w.confiant.settings) {
        config = w.confiant.settings;
    }

    var confiantWrap = function confiantWrap(a,b,c,d,e,f,g){'v2.202001291339';function h(a){for(var b in l)if(b===a&&l[b])return l[b];return null}function i(a){if("string"!=typeof a)return a;var b=a.match(/[^\u0000-\u024F\u1E00-\u1EFF\u2C60-\u2C7F\uA720-\uA7FF]/g);if(!b)return a;for(var c=0;c<b.length;c++)a=a.replace(b[c],encodeURIComponent(b[c]));return a}function j(a){return a=i(a),(r(a)||"")[x]("/","_")[x]("+","-")}function k(b,c,e,g){var h=C+s(b)+"&d="+c,i="err__"+1*new Date;p[i]=g;var j="<"+v+' type="text/java'+v+'">window["'+d+'"]={};'+'window["'+d+'"]["tpid"]="'+b+'";'+'window["'+d+'"]["'+b+'"]='+q.stringify(e)+";"+"</"+v+">",k="<"+v+" on"+y+'="void('+i+'())" '+w+'="'+h+'" type="text/java'+v+'" ></'+v+">";f&&(k="<"+v+" on"+y+'="void('+i+'())" '+'" type="text/java'+v+'" >'+unescape(f)+"</"+v+">"),a[A](j+k)}var l=b.adserverTargeting,m=b.bidder,n=null,o=b.size,p=a.parentWindow||a.defaultView,q=p.JSON,r=p.btoa,s=p.encodeURIComponent;if(!q||!r)return!1;var t="t",u="i",v="script",w="src",x="replace",y="error",z="stringify",A="wr"+u+t+"e";c.indexOf("http")<0&&(c="https://"+c);var B,C=c+"/?wrapper="+s(d)+"&tpid=";B=h("oz_winner")||"ozone"===m?{k:{hb_bidder:[h("oz_winner")],hb_size:[o]}}:{k:{hb_bidder:[m],hb_size:[o]}};var D=!1;return window._clrm||window.confiant||function(){function a(a){var b="cb";if("string"==typeof a.data&&a.data.indexOf(b)>-1){var c=a.data.substr(b.length+d.length),f=atob(c),g=window.JSON.parse(f);e.apply(this,g)}}if(window.addEventListener)try{window.top.addEventListener("message",a,!1)}catch(b){window.addEventListener("message",a,!1)}else window.top.attachEvent("onmessage",a)}(),function(){try{n=j(d+"/"+B.k.hb_bidder[0]+":"+B.k.hb_size[0]);var c={wh:n,wd:q.parse(q[z](B)),wr:0};2===g&&(c.cb=1e3*Math.random());var f={prebid:{adId:b.adId,cpm:b.cpm}},h=!1;try{h=!!p.frameElement.getAttribute("data-forced-sandbox")}catch(a){}var i={d:c,t:escape(b.ad),isE:!0,cb:e,id:f,isFSb:h,devMode:g};k(n,j(q[z](c)),i,function(){a[A](b.ad)})}catch(a){D=!0;var c={property_id:d,uh:n||"wt_not_established",url:window.location.href||window.top.location.href||document.url||"url not found",label:"confiantWrap_initialize",msg:a.message},l=new XMLHttpRequest;l.open("POST","https://protected-by.clarium.io/werror",!0),l.send(r(q.stringify(c)))}}(),a.close(),!D};
    //add optional blocking layer

    var isGoogleFrame = function (c) {
        return c.tagName === 'IFRAME' && c.id && c.id.indexOf('google_ads_iframe_') > -1;
    }

    var shouldSandbox = function () {
              var uaToRegexMap = {
                  "mobile": /Mobile|iP(hone|od|ad)|Android|BlackBerry|IEMobile/i,
                  "ios": /(.+)(iPhone|iPad|iPod)(.+)OS[\s|\_](\d)\_?(\d)?[\_]?(\d)?.+/i,
                  "android": /Android/i
                },
                sbStr = "" +config.sandbox;
              if (sbStr === "1") {
                // all environments
                return true;
              } else if (sbStr === "2") {
                // desktop
                return !navigator.userAgent.match(uaToRegexMap["mobile"]);
              } else if (sbStr === "3") {
                // mobile
                return navigator.userAgent.match(uaToRegexMap["mobile"]);
              } else if (sbStr === "4") {
                // ios only
                return navigator.userAgent.match(uaToRegexMap["ios"]);
              } else if (sbStr === "5") {
                // android
                return navigator.userAgent.match(uaToRegexMap["android"]);
              } else {
                return false;
              }
          }

  function appendChildOverwrite() {
    if (shouldSandbox()) {
      Node.prototype.appendChild = (function(original) {
        return function(child) {
          if (isGoogleFrame(child) && shouldSandbox() && !child.getAttribute('sandbox')) {
            child.setAttribute('sandbox',
              'allow-forms allow-pointer-lock allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation');
            child.setAttribute('data-forced-sandbox', true);
          }
          return original.call(this, child);
        };
      })(Node.prototype.appendChild);
    }
    return;
  }


  appendChildOverwrite();


    // override renderAd
    pbjs.renderAd = function(doc, id) {
        if (doc && id) {
            try {

               // get pbjs bids
                var bids = [];
                var bidResponses = pbjs.getBidResponses();
                var bidResponseForAdUnit;
                for (var slot in bidResponses) {
                  bids = bids.concat(bidResponses[slot].bids);
                  bidResponseForAdUnit = pbjs.getBidResponsesForAdUnitCode(slot);
                  for (var bidcache in bidResponseForAdUnit) {
                    bids = bids.concat(bidResponseForAdUnit.bids);
                  }
                }
                bids = bids.concat( pbjs.getHighestCpmBids());
                bids = pbjs.getAllWinningBids ? bids.concat( pbjs.getAllWinningBids()) : bids;
                bids = pbjs.getAllPrebidWinningBids ? bids.concat( pbjs.getAllPrebidWinningBids()) : bids;

                // lookup ad by ad Id (avoid ES6 array functions)
                var bid;
                var i;
                for (i = 0; i < bids.length; i++) {
                  if (bids[i].adId === id) {
                    bid = bids[i];
                    break;
                  }
                }

                if (!bid && pbjs.findBidByAdId) {
                  bid = pbjs.findBidByAdId(id);
                }

                // Optional: list of bidders that don't need wrapping, array of strings, e.g.: ["bidder1", "bidder2"]
                var confiantExcludeBidders = config.excludeBidders || [];

                // check bidder exclusion (avoid ES6 array functions)
                if (bid) {
                    var excludeBidder = false;
                    for (i=0; i<confiantExcludeBidders.length; i++) {
                        if (bid.bidder === confiantExcludeBidders[i]) {
                            excludeBidder = true;
                            break;
                        }
                    }
                }


                if (bid && bid.ad && !excludeBidder) {
                    // Neutralize document
                    var docwrite = doc.write;
                    var docclose = doc.close;
                    doc.write = doc.close = function() {};
                    // call renderAd with our neutralized doc.write
                    window._clrm.renderAd(doc, id);
                    // Restore document
                    delete doc.write;
                    delete doc.close;

                    var callback = function(blockingType, blockingId, isBlocked, wrapperId, tagId, impressionData) {
                        console.log("w00t one more bad ad nixed.", arguments);
                    };

                    var serializedCasprLayer = (function () {
                            if (typeof getSerializedCaspr === 'undefined') {
                              //for now both builds are supported v2(additional network call) and v3 (unified)
                              return null;
                            }
                            return getSerializedCaspr();
                          })();

                    // do the actual ad serving and fall back on document.write if failure
                    if (!confiantWrap(doc, bid, 'clarium.global.ssl.fastly.net', 'bbdvOAJnqH-Idffgn_02C2Cyx_E', callback, serializedCasprLayer, config.devMode)) {
                        doc.write(bid.ad);
                        doc.close();
                    }

                    return;
                }
            } catch (e) {
                console.error(e);
            }
        }

        // if bid.ad is not defined or if any error occurs, call renderAd to serve the creative
        window._clrm.renderAd(doc, id);
    };

});        
        

        function fetchHeaderBids() {
                            var bidders = ['prebid'];
            
            var requestManager = {
                adserverRequestSent: false,
            };

            bidders.forEach(function(bidder) {
                requestManager[bidder] = false;
            });

            function allBiddersBack() {
                var allBiddersBack = bidders.map(function(bidder) {
                    return requestManager[bidder];
                }).filter(Boolean).length === bidders.length;
                return allBiddersBack;
            }

            function headerBidderBack(bidder) {
                if(requestManager.adserverRequestSent === true) {
                    return;
                }
                //console.log('bidder back = ' + bidder);
                if(bidder === 'a9') {
                    requestManager.a9 = true;
                } else if(bidder === 'prebid') {
                    requestManager.prebid = true;
                }
                // if all bidders are back, send the request to the ad server
                if(allBiddersBack()) {
                    sendAdserverRequest();
                }
            }

            function sendAdserverRequest() {
                // return early if request already sent
                if(requestManager.adserverRequestSent === true) {
                    return;
                }

                console.log('sending ad server request');

                requestManager.adserverRequestSent = true;
                pbjs.adserverRequestSent = true;
                requestManager.sendAdserverRequest = true;

                googletag.cmd.push(function() {
                                        pbjs.que.push(function() {
                        pbjs.setTargetingForGPTAsync();
                        googletag.pubads().refresh();
                        //console.log('setting GPT targeting');
                    });
                });
            }

            function requestBids() {
                var tmpAdUnits = [];
                 
             // request bids from prebid
                pbjs.que.push(function() {

                                            if(waldoReadCookie('waldo_continent') == 'EU' || waldoReadCookie('waldo_country') == 'RO') {
                            pbjs.setConfig({
                                consentManagement: {
                                    gdpr: {
                                        cmpApi: 'iab',
                                        timeout: 2000,
                                        allowAuctionWithoutConsent: true
                                    }
                                }
                            });
                        }

                        if(waldoReadCookie('waldo_region') == 'CA') {
                            pbjs.setConfig({
                                consentManagement: {
                                    usp: {
                                        cmpApi: 'iab',
                                        timeout: 2000,
                                        allowAuctionWithoutConsent: true
                                    }
                                }
                            });
                        }
                    
                                            pbjs.setConfig({
                            usersync: {
                                userIds: [{
                                    name: 'unifiedId',
                                    params: {
                                        partner: '9zrfwmk'
                                    },
                                    storage: {
                                        type: 'cookie',  
                                        name: 'waldo-pbjs-unifiedid'
                                    }
                                },{
                                    name: 'pubCommonId',
                                    storage: {
                                        type: 'cookie',  
                                        name: 'waldo-pbjs-pubCommonId'
                                    }
                                }],
                                syncDelay: 3000
                            }
                        });
                                        
                    pbjs.setConfig({
                        enableSendAllBids: false,
                        userSync: {
                            filterSettings: {
                                all: {
                                    bidders: ['aardvark'],
                                    filter: 'include'
                                }
                            },
                        }
                    });

                    // temp disable ads auction on page load for toolbox site
                    
                        for(var i = 0; i < adUnits.length; i++) {
                            if(document.getElementById(adUnits[i].code)) {
                                tmpAdUnits.push(adUnits[i]);
                                waldoAdUnitsAddedToPbjs.push(adUnits[i].customParams.slotNo);
                            }
                        }

                        if(tmpAdUnits) {
                            pbjs.addAdUnits(tmpAdUnits);
                        }

                        pbjs.requestBids({
                            bidsBackHandler: function(bidResponses) {
                                //console.log(bidResponses);
                                headerBidderBack('prebid');
                            }
                        });
                                    });
        }

        requestBids();

                    setTimeout(function() {
                sendAdserverRequest();
            }, 3000);
            }


    function waldoTriggerHB() {
        if(!adTagsInitFlag) {
            adTagsInitFlag = 1;
            waldoSetTagsOnPage();
            waldoInitGPT();
            fetchHeaderBids();
            waldoInitTags(adUnits);
                            waldoInitScroll();
                    }
    }


    if(document.readyState === 'complete' || (document.readyState !== 'loading' && !document.documentElement.doScroll)) {
        waldoTriggerHB();
        console.log('triggered on readyState complete');
    } 
    else {
        console.log('triggered on event listener');
        document.addEventListener('DOMContentLoaded', waldoTriggerHB);
        window.addEventListener('load', waldoTriggerHB);
    }
    
                    
     
     function waldoInitCmp(l_country, l_cont, l_region) {
        var euconsent = waldoReadCookie('euconsent');
        
        if(typeof l_region == 'undefined') {
            var l_cont = waldoReadCookie('waldo_continent');
            var l_country = waldoReadCookie('waldo_country');
            var l_region = waldoReadCookie('waldo_region');
        }

        if((l_cont == 'EU' || l_region == 'CA') && euconsent === null) {
            var cmp = document.createElement('script');
            cmp.type = 'text/javascript';
            cmp.src = '//thisiswaldo.com/sites/all/modules/custom/ad_delivery/cmp/build/cmp.complete.bundle.js';
            var cmpTarget = document.getElementsByTagName('head')[0];
            cmpTarget.insertBefore(cmp, cmpTarget.firstChild);
        }
    }

    function waldoAddCloseBtn(event) {
        for(var i = 0, len = adUnits.length; i < len; i++) {
             if(event.slot.getSlotElementId() == adUnits[i].code && adUnits[i].customParams.sticky_footer) {
                if(!event.isEmpty) {
                    var slotNo = adUnits[i].customParams.slotNo;
                    var tagDiv = document.getElementById(event.slot.getSlotElementId());
                    var div = tagDiv.getElementsByTagName('div')[0];
                    var iframe = div.getElementsByTagName('iframe')[0];
                    var width = iframe.getAttribute('width');
                    var stickyInner = document.getElementById('waldo-sticky-footer-inner');
                    
                    if(!document.getElementById('waldo-close-button')) {
                        var closeBtn = document.createElement('div');
                        closeBtn.setAttribute('id', 'waldo-close-button');
                        closeBtn.style.marginLeft = 'auto';
                        closeBtn.style.marginRight = 'auto';
                        closeBtn.style.textAlign = 'right';
                        closeBtn.innerHTML = '<a style="text-decoration: none;" href="#">Close X</a>';


                        if(stickyInner) {
                            stickyInner.insertBefore(closeBtn, stickyInner.firstChild);

                            var closeLink = closeBtn.getElementsByTagName('a')[0];
                            closeLink.onclick = function(e) {
                                e.preventDefault();
                                stickyInner.parentNode.removeChild(stickyInner);
                                clearTimeout(waldoTimeOuts[slotNo]);
                            };
                            closeBtnAdded = 1;
                        }
                    }
                }
            }
        }
    }
    
    function waldoPassbackCheck(event) {
         for(var i = 0, len = adUnits.length; i < len; i++) {
             if(event.slot.getSlotElementId() == adUnits[i].code) {
                if(!event.isEmpty && (event.campaignId == 2661158838 || event.campaignId == 2665122399)) {
                   var slotNo = adUnits[i].customParams.slotNo;
                   if(typeof waldoTimeOuts[slotNo] !== 'undefined') {
                     clearTimeout(waldoTimeOuts[slotNo]);
                     //console.log('passback rendered so timeout cleared');
                   }
                }
            }
        }
    }

    function waldoInitTags(tagsToInit) {
        var scrollingAdUnit;
        var zoneIds = [];

        docBody = document.documentElement || document.body.parentNode || document.body;

        for(index = 0; index < tagsToInit.length; ++index) {
            var adUnit = tagsToInit[index];
            var bidDivId = adUnit.code;
            var bidDiv = document.getElementById(bidDivId);

            if(bidDiv && typeof waldoTagsStatus[bidDivId] === 'undefined') {
                zoneIds.push(adUnit.customParams.slotNo);

                waldoTagsStatus[bidDivId] = 1;
                bidDivAvailable = 1;
                
                //init refresh counts
                waldoAdRefreshes[adUnit.customParams.slotNo] = 0;


                if(adUnit.customParams.sticky_footer && !document.getElementById('waldo-sticky-footer-wrapper')) {
                    bidDiv.outerHTML = '<div id="waldo-sticky-footer-wrapper"><div id="waldo-sticky-footer-inner"><div id="' + bidDivId + '"></div></div></div>';
                }
            
                bidDiv.setAttribute('data-processed', true);
            }

            if(scrollingAdUnit && window.location.pathname != '/') {
                var stop  = scrollingAdUnit.offsetTop,
                docBody   = document.documentElement || document.body.parentNode || document.body,
                hasOffset = window.pageYOffset !== undefined,
                scrollTop;
                 
                stop = stop + 550;
                window.onscroll = function(e) {
                    scrollTop = hasOffset ? window.pageYOffset : docBody.scrollTop;

                    if(scrollTop >= stop) {
                        scrollingAdUnit.className = 'waldo-sticky-sidebar';
                    } else {
                        scrollingAdUnit.className = '';
                    }
                }
            }
        }

        if(!waldoImpressionDone && zoneIds.length > 0) {
            waldoRecordImpression(zoneIds);
            waldoImpressionDone = 1;
        }
     }

    function hbRefreshBid(adUnit) {
        var code = adUnit.code;

        if(!document.getElementById(code)) return;

            var refreshBidders = ['prebid'];
            var refreshBiddersBack = [];
            refreshBiddersBack[adUnit.customParams.slotNo] = {
                a9: false,
                prebid: false
            };

            
            pbjs.que.push(function() {
               if (waldoAdRefreshes[adUnit.customParams.slotNo] == 5) {
                    var bids = adUnit.bids;
                    for (i = 0; i < adUnit.bids.length; i++) {
                        if (adUnit.bids[i].bidder == 'openx' || adUnit.bids[i].bidder == 'aol' || adUnit.bids[i].bidder == 'sovrn') {
                            pbjs.removeAdUnit(adUnit.code);
                            adUnit.bids.splice(i, 1);
                            pbjs.addAdUnits([adUnit]);
                        }
                    }
                }
            });

         
            pbjs.que.push(function() {
                if(!waldoIsInArray(adUnit.customParams.slotNo, waldoAdUnitsAddedToPbjs)) {
                    pbjs.addAdUnits([adUnit]);
                }

                //console.log(PREBID_TIMEOUT);
                pbjs.requestBids({
                    timeout: PREBID_TIMEOUT,
                    adUnitCodes: [adUnit.code],
                    bidsBackHandler: function(response) {
                        //console.log(response);
                        refHeaderBidderBack('prebid');
                    }
                });
            });

            function refAllBiddersBack() {
                var allBiddersBack = refreshBidders.map(function(bidder) {
                    return refreshBiddersBack[adUnit.customParams.slotNo][bidder];
                }).filter(Boolean).length === refreshBidders.length;
                return allBiddersBack;
            }

            function refHeaderBidderBack(bidder) {
                if (bidder === 'a9') {
                    refreshBiddersBack[adUnit.customParams.slotNo].a9 = true;
                } else if (bidder === 'prebid') {
                    refreshBiddersBack[adUnit.customParams.slotNo].prebid = true;
                }
                if (refAllBiddersBack()) {
                    googletag.cmd.push(function() {
                                                pbjs.que.push(function() {
                            pbjs.setTargetingForGPTAsync([adUnit.code]);
                            googletag.pubads().refresh([gptAdSlots[adUnit.customParams.slotNo]]);
                        });
                    });
                }
            }
    }

function hbRandomMinMaxRefreshMulti(country_t, continent_t) {
        if(typeof country_t == 'undefined') country_t = '';
        if(typeof continent_t == 'undefined') continent_t = '';

        for (var i = 0, len = adUnits.length; i < len; i++) {
                            var limit = 10;
            
            var noRefresh = 0;

            if(adUnits[i].customParams.refresh.type == 'min_max') {
                if(country_t != '' && continent_t != '') { 
                    if(!waldoIsInArray(country_t, unlimitedRefGeos) && continent_t != 'EU') {
                                                    limit = 5;
                                            }
                }

                if(adUnits[i].customParams.refresh.limit == 0) {
                    adUnits[i].customParams.refresh.limit = limit;
                }

                var tRefresh = 1;

                if(browserWidth < breakpoints.desktop) {
                    if(adUnits[i].customParams.mobile_refresh == 0) {
                        tRefresh = 0;
                    }
                }
                            
                if(tRefresh && !noRefresh) {
                    hbRandomMinMaxRefresh(adUnits[i]);
                }
            }
        }
    }

    function hbRandomMinMaxRefresh(adUnit) {
        var h_country = waldoReadCookie('waldo_country');
        var h_continent = waldoReadCookie('waldo_continent');
        if(typeof h_country == 'null') h_country = '';
        if(typeof h_continent == 'null') h_continent = '';



        var isTier3 = 0;

        if(h_country != '' && h_continent != '') {
            if(!waldoIsInArray(h_country, unlimitedRefGeos) && h_continent != 'EU') {
                isTier3 = 1;
            }
        }    

        if(browserWidth >= breakpoints.desktop) {
            var min = parseInt(adUnit.customParams.refresh.desktop.min);
            var max = parseInt(adUnit.customParams.refresh.desktop.max);
        }
        else {
            var min = parseInt(adUnit.customParams.refresh.mobile.min);
            var max = parseInt(adUnit.customParams.refresh.mobile.max);
        }

        if(isTier3) {
            min = 250;
            max = 250;
        }

        var slotNo = adUnit.customParams.slotNo,
        limit = parseInt(adUnit.customParams.refresh.limit);
         
        var randomNo = getRandomNumber(min, max);

        if(typeof waldoTimeOuts[slotNo] !== 'undefined') {
            clearTimeout(waldoTimeOuts[slotNo]);
        }

        waldoTimeOuts[slotNo] = setTimeout(function() {
            if(waldoAdRefreshes[slotNo]) {
                waldoAdRefreshes[slotNo]++;
            } else {
                waldoAdRefreshes[slotNo] = 1;
            }
            hbRefreshBid(adUnit);
            //console.log('waldo unit ' + adUnit.code + ' refreshed automatically');

            if(waldoAdRefreshes[slotNo] < limit) {
                hbRandomMinMaxRefresh(adUnit);
            }
            else {
                if(!isTier3) {
                    adUnit.customParams.refresh.desktop.min = 250;
                    adUnit.customParams.refresh.desktop.max = 250;
                    adUnit.customParams.refresh.mobile.min = 250;
                    adUnit.customParams.refresh.mobile.max = 250;
                    hbRandomMinMaxRefresh(adUnit);
                }
                //console.log('waldo unit ' + adUnit.code + ' set to refresh on view for first time');
            }
        }, randomNo * 1000);
    }

    function hbRandomMinMaxRefreshOnView(adUnit) {
        if(browserWidth >= breakpoints.desktop) {
            var min = parseInt(adUnit.customParams.refresh.desktop.min);
            var max = parseInt(adUnit.customParams.refresh.desktop.max);
        }
        else {
            var min = parseInt(adUnit.customParams.refresh.mobile.min);
            var max = parseInt(adUnit.customParams.refresh.mobile.max);
        }

        var slotNo = adUnit.customParams.slotNo,
        limit = parseInt(adUnit.customParams.refresh.limit);
         
        var randomNo = getRandomNumber(min, max);

        if(typeof waldoTimeOuts[slotNo] !== 'undefined') {
            clearTimeout(waldoTimeOuts[slotNo]);
            //console.log('timeout cleared for ' + adUnit.code);
        }

        waldoTimeOuts[slotNo] = setTimeout(function() {
            waldoAdRefreshesOnView[slotNo] = 1;
            //console.log('waldo unit ' + adUnit.code + ' can be refreshed on view');
        }, randomNo * 1000);
    }
    
    function getRandomNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }
     
    if (waldoCountry === null) {
        waldoGetUserData();
    } 
    else {
                    waldoInitCmp();
           
        hbRandomMinMaxRefreshMulti(waldoCountry, waldoContinent);
    }
}

    function waldoGetUserData() {
        var auth = '3757a9b9-5759-4813-bc1a-7fa0b8ba94c1';
        var useSSL = 'https:' == document.location.protocol;
        var http = new XMLHttpRequest();
        var getURl = (useSSL ? 'https:' : 'http:') + '//ipfind.co/me?auth=' + auth;
        var xhr = new XMLHttpRequest();

        xhr.onreadystatechange = function() {
            if(xhr.readyState === XMLHttpRequest.DONE) {
                if (xhr.status === 200) {
                    var location = JSON.parse(xhr.responseText);
                    waldoCreateCookie('waldo_country', location.country_code, 90);
                    waldoCreateCookie('waldo_continent', location.continent_code, 90);
                    waldoCreateCookie('waldo_region', location.region_code, 90);

                                            waldoInitCmp(location.country_code, location.continent_code, location.region_code);
                                        hbRandomMinMaxRefreshMulti(location.country_code, location.continent_code);
  
                }
                else {
                                            waldoInitCmp();
                                        hbRandomMinMaxRefreshMulti('', '');
                }
             }
        };

        xhr.open("GET", getURl, true);
        xhr.timeout = 3000;
        xhr.send();
    } 

    function waldoLoadPassback(passbackSlotNo) {
        for (i = 0; i < passbackAdUnits.length; i++) {
         if (passbackAdUnits[i].customParams.slotNo == passbackSlotNo) return passbackAdUnits[i];
        }
     }

    function waldoCreateCookie(name, value, days) {
        var expires = "";
        if (days) {
            var date = new Date();
            date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
            expires = "; expires=" + date.toUTCString();
        }
        document.cookie = name + "=" + value + expires + "; path=/;SameSite=None; Secure";
    }

    function waldoReadCookie(name) {
        var nameEQ = name + "=";
        var ca = document.cookie.split(';');
        for(var i = 0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) == ' ') c = c.substring(1, c.length);
            if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
        }
        return null;
    }

    function waldoEmailDetected(url) {
        var http = new XMLHttpRequest();
        var postUrl = 'https://thisiswaldo.com/email-detected';
        var params = 'url=' + url;
        http.open('POST', postUrl, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send(params);
    }

    function waldoRecordImpression(zoneIds) {
        var zoneIdsStr = zoneIds.join(',');
        var useSSL = 'https:' == document.location.protocol;
        var http = new XMLHttpRequest();
        var postUrl = (useSSL ? 'https:' : 'http:') + '//thisiswaldo.com/new-impression';
        var params = 'site_id=' + siteId + '&zone_ids=' + zoneIdsStr;
        http.open('POST', postUrl, true);
        http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
        http.send(params);
    }

    var waldo = waldo || {};

    waldo.refreshTag = function(tagId) {
        //console.log('manual refresh = ' + tagId);
        for(var i =0; i < adUnits.length; i++) {
            if(adUnits[i].code == tagId) {
                var slotNo = adUnits[i].customParams.slotNo;

                if(!waldoDefinedSlots[slotNo]) {
                    waldoInitGPTSingleSlot(slotNo);
                }

                hbRefreshBid(adUnits[i]);


                if(!waldoImpressionDone) {
                    waldoRecordImpression([]);
                    waldoImpressionDone = 1;
                }
            }
        }  
    };

    /*waldo.refreshAllTags = function() {
        fetchHeaderBids();    
    };*/

