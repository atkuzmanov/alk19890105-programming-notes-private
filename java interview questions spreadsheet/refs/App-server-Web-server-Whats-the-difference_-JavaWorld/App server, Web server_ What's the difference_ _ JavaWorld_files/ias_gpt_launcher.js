try{IDG.GPT.setIDGExtraTargetings();IDG.GPT.setAllGoogleTagTargetings();IDG.GPT.dfpAdManager.init();IDG.GPT.defineAllGoogleTagSlots()}catch(exception){console.log("google_dfp can't use IDG.GPT "+exception)}function requestAds(){try{consent.ads.queue.push(function(){IDG.GPT.initGoogleTagService()});$(window).trigger("runConsent",[IDG.GPT.displayQueue])}catch(exception){console.log("google_dfp can't use IDG.GPT "+exception)}}var iasDataHandler,__iasPET=__iasPET||{};__iasPET.queue=__iasPET.queue||[];__iasPET.pubId="8879";var IASPET_TIMEOUT=4000;var __iasPETTimeoutRequestAds=setTimeout(requestAds,IASPET_TIMEOUT);var iasDataHandler=function(adSlotData){clearTimeout(__iasPETTimeoutRequestAds);__iasPET.setTargetingForGPT();requestAds()};googletag.cmd.push(function(){var gptSlots=googletag.pubads().getSlots();var iasPETSlots=[];for(var i=0;i<gptSlots.length;i++){var sizes=gptSlots[i].getSizes().map(function(size){if(size.getWidth&&size.getHeight){return[size.getWidth(),size.getHeight()]}else{return[1,1]}});iasPETSlots.push({adSlotId:gptSlots[i].getSlotElementId(),size:sizes,adUnitPath:gptSlots[i].getAdUnitPath()})}__iasPET.queue.push({adSlots:iasPETSlots,dataHandler:iasDataHandler})});