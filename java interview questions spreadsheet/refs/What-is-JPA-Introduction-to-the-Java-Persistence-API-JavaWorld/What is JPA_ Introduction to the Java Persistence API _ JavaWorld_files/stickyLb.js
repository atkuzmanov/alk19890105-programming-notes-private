function parallaxLb(args){try{IDG.GPT.googleCommandPush(checkUnitLoadStatus)}catch(e){console.log("error logging ad events: "+e)}function checkUnitLoadStatus(){googletag.pubads().addEventListener("slotOnload",function(event){var slotId=event.slot.getSlotElementId();if(slotId==args.leaderboadrdId){if(window.innerWidth>=640){parallaxLbHandler(args)}return false}})}}function parallaxLbHandler(args){const parallaxContainer=document.getElementById(args.adContainer);const parallaxContainerHeight=parallaxContainer.offsetHeight;const topNav=document.getElementById(args.topNavEl);if(topNav.classList.contains("stick")){topNav.classList.remove("stick")}const topNavHeight=document.getElementById(args.topNavEl).offsetHeight;const parallaxUnit=document.getElementById(args.adUnit);const viewabilityTime=args.viewabilityTime;let lastKnownScrollPos=0;let ticking=false;let viewabilityPassed=false;let isLbSticky=false;let adTopOffset=0;let elementForTopCalc=parallaxContainer;do{adTopOffset+=elementForTopCalc.offsetTop;elementForTopCalc=elementForTopCalc.offsetParent}while(elementForTopCalc!==document.getElementsByTagName("body")[0]);document.getElementById(args.leaderboadrdId).style.maxWidth="970px";window.addEventListener("scroll",function(){lastKnownScrollPos=window.scrollY;if(!ticking){window.requestAnimationFrame(function(){doParallax(lastKnownScrollPos);ticking=false});ticking=true}});setTimeout(function(){if(isLbSticky){parallaxUnit.style.transition="top 0.7s";if(args.topNavIsSticky&&topNav.id!=="oc-head"){topNav.style.transition="margin 0.6s";topNav.style.marginTop="-200px"}setTimeout(function(){parallaxUnit.style.top="-300px"},400);viewabilityPassed=true;if(args.topNavIsSticky){setTimeout(function(){parallaxUnit.style.cssText=parallaxContainerProps.relativeStyles;parallaxContainer.style.height="auto";parallaxContainer.style.boxSizing="content-box";reshowStickyNav()},1200)}}else{setTimeout(function(){viewabilityPassed=true;parallaxUnit.style.cssText=parallaxContainerProps.relativeStyles;parallaxContainer.style.height="auto";parallaxContainer.style.boxSizing="content-box";if(args.topNavIsSticky){reshowStickyNav()}},3000)}},viewabilityTime);var parallaxContainerProps={height:parallaxUnit.offsetHeight,topPos:parallaxContainer.getBoundingClientRect().top,stickyStyles:"position: fixed; z-index: 9999999; background: #fff; top:0; margin-top: 0; width: 100%;  padding: 16px calc(50% - 485px); text-align: center; left: 0; right: 0;",relativeStyles:"transition: none; position: relative; top: auto; padding: 0"};(function(){if(args.topNavIsSticky){topNav.classList.add("no-stick-important")}parallaxContainer.style.height="auto"})();function reshowStickyNav(){if(!ticking){ticking=true;window.scroll({top:scrollY-topNavHeight,left:0});topNav.style.marginTop="0";topNav.classList.remove("no-stick-important")}}function doParallax(scrollPos){if(scrollPos>adTopOffset&&!viewabilityPassed){parallaxUnit.style.cssText=parallaxContainerProps.stickyStyles;parallaxContainer.style.height=parallaxContainerHeight+"px";parallaxContainer.style.boxSizing="border-box";isLbSticky=true}else{parallaxUnit.style.cssText=parallaxContainerProps.relativeStyles;parallaxContainer.style.height="auto";parallaxContainer.style.boxSizing="content-box";isLbSticky=false}}(function(){if(args.topNavIsSticky){var css="#"+args.topNavEl+".no-stick-important { position: relative !important; height:"+topNavHeight+"px !important; box-sizing:border-box !important; };",head=document.head||document.getElementsByTagName("head")[0],style=document.createElement("style");style.type="text/css";style.appendChild(document.createTextNode(css));head.appendChild(style)}})()};