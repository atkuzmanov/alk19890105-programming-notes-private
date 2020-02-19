var mdn=window.mdn||{};mdn.perf={getDuration:function(measureName){"use strict";if(performance.getEntriesByName===undefined){console.error("performance.getEntriesByName is not supported by your user-agent");return}return performance.getEntriesByName(measureName)[0].duration},setMark:function(label){"use strict";if(performance.mark===undefined){console.error("performance.mark is not supported by your user-agent");return}try{performance.mark(label)}catch(error){console.error("Error while setting performance mark: ",error)}},setMeasure:function(measureData){"use strict";if(performance.measure===undefined){console.error("performance.measure is not supported by your user-agent");return}performance.measure(measureData.measureName,measureData.startMark,measureData.endMark)}};function handlePerfMarks(perfData){if(!perfData.measureName){window.mdn.perf.setMark(perfData.markName)}else{window.mdn.perf.setMark(perfData.markName);window.mdn.perf.setMeasure({measureName:perfData.measureName,startMark:perfData.startMark,endMark:perfData.endMark});if(window.ga&&window.ga.create){window.ga("send",{hitType:"timing",timingCategory:"RUM - Interactive Examples",timingVar:perfData.measureName,timingValue:window.mdn.perf.getDuration(perfData.measureName)||0})}}}function perfMsgHandler(event){"use strict";var allowedOrigin=window.mdn.interactiveEditor.editorUrl||"https://interactive-examples.mdn.mozilla.net";var eventData=event.data;if(event.origin!==allowedOrigin){return false}if(eventData.markName&&eventData.markName.indexOf("interactive-editor-")>-1){handlePerfMarks(eventData)}}window.addEventListener("message",perfMsgHandler,false);