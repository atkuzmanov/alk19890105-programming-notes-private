WRMCB=function(e){var c=console;if(c&&c.log&&c.error){c.log('Error running batched script.');c.error(e);}}
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'soy/pagetree.soy' */
// This file was automatically generated from pagetree.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Pagetree.Macro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Pagetree == 'undefined') { Confluence.Templates.Pagetree = {}; }
if (typeof Confluence.Templates.Pagetree.Macro == 'undefined') { Confluence.Templates.Pagetree.Macro = {}; }


Confluence.Templates.Pagetree.Macro.loadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="plugin_pagetree_children_loading_wrapper"><div class="spinner"/><span class="plugin_pagetree_children_loading">' + soy.$$escapeHtml('Loading...') + '</span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Pagetree.Macro.loadingIndicator.soyTemplateName = 'Confluence.Templates.Pagetree.Macro.loadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree.js' */
(function(){var a=function(j){this.$=j;var f=this.$;var y=999;var z=true;var i=false;var u={};var c={};var k=function(I,E,J,D,B){var G=I.dataset.expanded==="true";if(E==undefined||E==null){E=!G}if(J==undefined||J==null){J=0}var F=I.getAttribute("data-children-loaded")==="true";if(G!==E){var C=I.getAttribute("data-page-id")+"-"+I.getAttribute("data-tree-id");var H=f("#children"+C);if(F){if(E==z){I.classList.remove("aui-iconfont-chevron-right");I.classList.add("aui-iconfont-chevron-down");I.setAttribute("data-expanded",true)}else{I.classList.remove("aui-iconfont-chevron-down");I.classList.add("aui-iconfont-chevron-right");I.setAttribute("data-expanded",false)}if(E==z){if(B==false){H.slideDown(300)}else{H.removeClass("plugin-pagetree-hide-children");H.animate({opacity:1})}}else{if(B==false){H.slideUp(300)}else{H.animate({opacity:0},{complete:function(){H.addClass("plugin-pagetree-hide-children")}})}}if(D){p(C)}}else{h(I,C,new Array(),J,"",D,B,true)}}if(D){p(C)}};var g=function(D,C,B){x(D,z,C,B)};var v=function(D,C,B){x(D,i,C,B)};var x=function(G,E,D,C){e(G);var F=f("#"+G);var B=F.find('a.plugin_pagetree_childtoggle[data-type="toggle"]');B.each(function(H){k(this,E,y,H==B.length-1,C)});D.preventDefault();D.stopPropagation()};var s=function(B){if(!B||B==undefined){return null}if(B.indexOf("plusminus")!=-1){return B.substring("plusminus".length)}if(B.indexOf("children")!=-1){return B.substring("children".length)}return null};var b=function(B){if(!B||B==undefined){return null}return o(B)[1]};var o=function(B){if(!B||B==undefined){return null}return B.split("-")};var e=function(C){var B=b(C);f("div.plugin_pagetree").each(function(D){if(D==B){f(this).find("span.plugin_pagetree_status").removeClass("hidden");f(this).find("div.plugin_pagetree_expandcollapse").addClass("hidden")}})};var p=function(C){var B=b(C);f("div.plugin_pagetree").each(function(D){if(D==B){f(this).find("span.plugin_pagetree_status").addClass("hidden");f(this).find("div.plugin_pagetree_expandcollapse").removeClass("hidden")}})};var d=function(G,E,L,I,H,D,C,J,F,K){var B=u[G];if(E=="Orphan"){B+="&hasRoot=false&spaceKey="+H}else{B+="&hasRoot=true&pageId="+E}B+="&treeId="+G+"&startDepth="+I+"&mobile="+C;f.each(L,function(){B+="&ancestors="+this});if(J){B+="&loadMore=true"}if(F!=null){B+="&elementsAfter="+F}if(K!=null){B+="&elementsBefore="+K}B+="&treePageId="+D;if(C==false){B=(AJS.params.serverUrl||"")+B}return B};var n=function(D){var C=D;var B=null;f("div.plugin_pagetree").each(function(E){if(E==C){B=f(this)}});return B};var m=function(B){var C=B.children("fieldset");var D=new Object();if(C.length>0){C.children("input").each(function(){D[this.name]=this.value})}return D};var l=function(B){var D=B.children("fieldset");var E=new Array();if(D.length>0){var C=D.children("fieldset");if(C.length>0){C.children("input").each(function(){E.push(this.value)})}}return E};var r=function(B){var C=f(document.createElement("div"));C.html(B);return C.find("ul[id^='child_ul']").length};var h=function(F,J,B,U,K,E,C,S,G,O,L,H){var Q=J;var I=E;var R=o(J);var M=R[0];var D=R[1];var V=f("#children"+J);var P=m(n(D));var T=false;function W(){if(O||L){F.innerHTML="Loading..."}else{var X=Confluence.Templates.Pagetree.Macro.loadingIndicator();V.find(".plugin_pagetree_children_loading_wrapper .spinner").spin("small");if(L){V.html(X+V.html())}else{V.append(X)}}}var N=0;if(typeof H!=="undefined"&&H){N=f("#"+H).offset().top}if(S){setTimeout(function(){if(!T){W()}},250)}else{W()}f.ajax({type:"GET",url:d(D,M,B,U,P.spaceKey,P.treePageId,C,G,O,L),dataType:"text",success:function(Y){if(r(Y)){f(".plugin_pagetree_children_loading_wrapper").remove();if(L!=null){var X=V.html();V.html(Y+X)}else{V.append(Y)}T=true;if(typeof H!=="undefined"){var Z=f("#"+H).offset().top-N;document.getElementsByClassName("acs-side-bar")[0].scrollTop=document.getElementsByClassName("acs-side-bar")[0].scrollTop+Z}if(V.children().length&&V.hasClass("hidden")){V.removeClass("hidden")}f("#plusminus"+Q).addClass("aui-iconfont-chevron-down").removeClass("aui-iconfont-chevron-right");f("#childrenspan"+c[parseInt(D)]+"-"+D).addClass("plugin_pagetree_current");if(I){p(Q)}if(typeof F!=="undefined"){F.setAttribute("data-children-loaded",true);F.setAttribute("data-expanded",true)}if(O){f("#children"+J+" > ul > .page-tree-load-more-link-after").remove()}if(L){f("#children"+J+" > ul > .page-tree-load-more-link-before").remove()}q(V);if(AJS.PageGadget&&AJS.PageGadget.contentsUpdated){AJS.PageGadget.contentsUpdated()}}else{window.location=P.loginUrl}AJS.trigger("pagetree-children-loaded")},error:function(X){if(X.status=="403"){V.text(P["i18n-pagetree.error.permission"])}else{V.text(P["i18n-pagetree.error.general"])}}})};var q=function(B){f("div.plugin_pagetree_children_container:empty",B).addClass("hidden")};function t(F){var E=F.target;var D=E.getAttribute("data-type");var C=F.currentTarget.getAttribute("data-mobile")==="true";if(D==="toggle"){F.preventDefault();F.stopPropagation();k(F.target,null,null,null,C)}else{if(D==="load-all-after"){var I=E.getAttribute("data-last-rendered-id");var H=E.getAttribute("data-page-id")+"-"+E.getAttribute("data-tree-id");h(F.target,H,new Array(),null,"","",C,false,true,I,null)}else{if(D==="load-all-before"){var B=E.getAttribute("data-first-rendered-id");var H=E.getAttribute("data-page-id")+"-"+E.getAttribute("data-tree-id");var G="childrenspan"+B+"-"+E.getAttribute("data-tree-id");h(F.target,H,new Array(),null,"","",C,false,false,null,B,G)}else{return}}}F.preventDefault();F.stopPropagation()}var w=function(B,G,I){B[0].addEventListener("click",t,{passive:false});var E=m(B);var H=E.noRoot=="true";var D=H?"Orphan-"+G:E.rootPageId+"-"+G;var C=E.mobile=="true";if(C){B[0].setAttribute("data-mobile",C)}u[G]=E.treeRequestId;if(C==false){c[G]=AJS.params.pageId}else{c[G]=f("div.content-container").parent().attr("data-content-id")}B.children("fieldset").each(function(){var J=f(this);J.children("input[treeId]").attr("value",G);J.children("input[rootPage]").attr("value",D)});if(H){B.find("div.plugin_pagetree_children").attr("id","childrenOrphan-"+G);B.find("a.plugin_pagetree_expandall").click(function(J){g("childrenOrphan-"+G,J,C);return false});B.find("a.plugin_pagetree_collapseall").click(function(J){v("childrenOrphan-"+G,J,C);return false})}else{B.find("div.plugin_pagetree_children").attr("id","children"+D);B.find("a.plugin_pagetree_expandall").click(function(J){g("children"+D,J,C);return false});B.find("a.plugin_pagetree_collapseall").click(function(J){v("children"+D,J,C);return false})}var F=l(B);h(undefined,D,F,E.startDepth,E.spaceKey,"",C,false,I,null,null)};this.initPageTrees=function(B){f("div.plugin_pagetree").each(function(C){w(f(this),C,B)});A()};var A=function(){var B=self.placeFocus;if(B){self.placeFocus=function(){var C=f("form[name='pagetreesearchform']");C.attr("name","inlinecommentform");B();C.attr("name","pagetreesearchform")}}};f(".open-flyout-to-search").bind("click",function(B){if(f(".fly-out-open").length){setTimeout(function(){ConfluenceMobile.flyout.hide()},400)}else{setTimeout(function(){ConfluenceMobile.flyout.show()},400)}B.stopPropagation();B.preventDefault()})};Confluence=Confluence||{};Confluence.Plugins=Confluence.Plugins||{};Confluence.Plugins.PagetreeMacro={bind:function(b){var c=new a(b);c.initPageTrees(false)}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.pagetree:pagetree-js-resources', location = 'com/atlassian/confluence/plugins/pagetree/resource/javascript/pagetree-desktop.js' */
AJS.toInit(function(a){Confluence.Plugins.PagetreeMacro.bind(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-dashboard:footer-analytics', location = '/js/confluence-dashboard/utils/footer-analytics.js' */
define("confluence-dashboard/utils/footer-analytics",["jquery","ajs","confluence/meta"],function(e,a,t){"use strict";var n=i(e).default,o=i(a).default,c=i(t).default;function i(e){return e&&e.__esModule?e:{default:e}}o.toInit(function(){var e=c.get("page-id"),a=n("body").hasClass("dashboard");n("#footer").on("click","a",function(){o.trigger("analytics",{name:"confluence.footer.item.click",data:{pageId:e,isDashboard:a}})})})}),require(["confluence-dashboard/utils/footer-analytics"]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-resources-admin', location = 'js/DiagramlyBlueprintInit.js' */
AJS.toInit(function(){if(Confluence&&Confluence.Blueprint&&Confluence.Blueprint.register){Confluence.Blueprint.register("com.mxgraph.confluence.plugins.diagramly:drawio-blueprint-item",function(b,c,a){window.location=Confluence.getContextPath()+"/pages/createpage.action?spaceKey="+encodeURIComponent(c)+"&newSpaceKey="+encodeURIComponent(c)+(b.getParentPageId()?"&fromPageId="+b.getParentPageId():"")+"&diagramlyBlueprint=1"})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPrefix.js' */
// This was copied from Atlassian's almond-noconflict-pre.js
window.__require = window.require;
window.__requirejs = window.requirejs;
window.__define = window.define;
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'thirdparty/almond.js' */
/**
 * @license almond 0.3.1 Copyright (c) 2011-2014, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */
//Going sloppy to avoid 'use strict' string cost, but strict practices should
//be followed.
/*jslint sloppy: true */
/*global setTimeout: false */

var requirejs, require, define;
(function (undef) {
    var main, req, makeMap, handlers,
        defined = {},
        waiting = {},
        config = {},
        defining = {},
        hasOwn = Object.prototype.hasOwnProperty,
        aps = [].slice,
        jsSuffixRegExp = /\.js$/;

    function hasProp(obj, prop) {
        return hasOwn.call(obj, prop);
    }

    /**
     * Given a relative module name, like ./something, normalize it to
     * a real name that can be mapped to a path.
     * @param {String} name the relative name
     * @param {String} baseName a real name that the name arg is relative
     * to.
     * @returns {String} normalized name
     */
    function normalize(name, baseName) {
        var nameParts, nameSegment, mapValue, foundMap, lastIndex,
            foundI, foundStarMap, starI, i, j, part,
            baseParts = baseName && baseName.split("/"),
            map = config.map,
            starMap = (map && map['*']) || {};

        //Adjust any relative paths.
        if (name && name.charAt(0) === ".") {
            //If have a base name, try to normalize against it,
            //otherwise, assume it is a top-level require that will
            //be relative to baseUrl in the end.
            if (baseName) {
                name = name.split('/');
                lastIndex = name.length - 1;

                // Node .js allowance:
                if (config.nodeIdCompat && jsSuffixRegExp.test(name[lastIndex])) {
                    name[lastIndex] = name[lastIndex].replace(jsSuffixRegExp, '');
                }

                //Lop off the last part of baseParts, so that . matches the
                //"directory" and not name of the baseName's module. For instance,
                //baseName of "one/two/three", maps to "one/two/three.js", but we
                //want the directory, "one/two" for this normalization.
                name = baseParts.slice(0, baseParts.length - 1).concat(name);

                //start trimDots
                for (i = 0; i < name.length; i += 1) {
                    part = name[i];
                    if (part === ".") {
                        name.splice(i, 1);
                        i -= 1;
                    } else if (part === "..") {
                        if (i === 1 && (name[2] === '..' || name[0] === '..')) {
                            //End of the line. Keep at least one non-dot
                            //path segment at the front so it can be mapped
                            //correctly to disk. Otherwise, there is likely
                            //no path mapping for a path starting with '..'.
                            //This can still fail, but catches the most reasonable
                            //uses of ..
                            break;
                        } else if (i > 0) {
                            name.splice(i - 1, 2);
                            i -= 2;
                        }
                    }
                }
                //end trimDots

                name = name.join("/");
            } else if (name.indexOf('./') === 0) {
                // No baseName, so this is ID is resolved relative
                // to baseUrl, pull off the leading dot.
                name = name.substring(2);
            }
        }

        //Apply map config if available.
        if ((baseParts || starMap) && map) {
            nameParts = name.split('/');

            for (i = nameParts.length; i > 0; i -= 1) {
                nameSegment = nameParts.slice(0, i).join("/");

                if (baseParts) {
                    //Find the longest baseName segment match in the config.
                    //So, do joins on the biggest to smallest lengths of baseParts.
                    for (j = baseParts.length; j > 0; j -= 1) {
                        mapValue = map[baseParts.slice(0, j).join('/')];

                        //baseName segment has  config, find if it has one for
                        //this name.
                        if (mapValue) {
                            mapValue = mapValue[nameSegment];
                            if (mapValue) {
                                //Match, update name to the new value.
                                foundMap = mapValue;
                                foundI = i;
                                break;
                            }
                        }
                    }
                }

                if (foundMap) {
                    break;
                }

                //Check for a star map match, but just hold on to it,
                //if there is a shorter segment match later in a matching
                //config, then favor over this star map.
                if (!foundStarMap && starMap && starMap[nameSegment]) {
                    foundStarMap = starMap[nameSegment];
                    starI = i;
                }
            }

            if (!foundMap && foundStarMap) {
                foundMap = foundStarMap;
                foundI = starI;
            }

            if (foundMap) {
                nameParts.splice(0, foundI, foundMap);
                name = nameParts.join('/');
            }
        }

        return name;
    }

    function makeRequire(relName, forceSync) {
        return function () {
            //A version of a require function that passes a moduleName
            //value for items that may need to
            //look up paths relative to the moduleName
            var args = aps.call(arguments, 0);

            //If first arg is not require('string'), and there is only
            //one arg, it is the array form without a callback. Insert
            //a null so that the following concat is correct.
            if (typeof args[0] !== 'string' && args.length === 1) {
                args.push(null);
            }
            return req.apply(undef, args.concat([relName, forceSync]));
        };
    }

    function makeNormalize(relName) {
        return function (name) {
            return normalize(name, relName);
        };
    }

    function makeLoad(depName) {
        return function (value) {
            defined[depName] = value;
        };
    }

    function callDep(name) {
        if (hasProp(waiting, name)) {
            var args = waiting[name];
            delete waiting[name];
            defining[name] = true;
            main.apply(undef, args);
        }

        if (!hasProp(defined, name) && !hasProp(defining, name)) {
            throw new Error('No ' + name);
        }
        return defined[name];
    }

    //Turns a plugin!resource to [plugin, resource]
    //with the plugin being undefined if the name
    //did not have a plugin prefix.
    function splitPrefix(name) {
        var prefix,
            index = name ? name.indexOf('!') : -1;
        if (index > -1) {
            prefix = name.substring(0, index);
            name = name.substring(index + 1, name.length);
        }
        return [prefix, name];
    }

    /**
     * Makes a name map, normalizing the name, and using a plugin
     * for normalization if necessary. Grabs a ref to plugin
     * too, as an optimization.
     */
    makeMap = function (name, relName) {
        var plugin,
            parts = splitPrefix(name),
            prefix = parts[0];

        name = parts[1];

        if (prefix) {
            prefix = normalize(prefix, relName);
            plugin = callDep(prefix);
        }

        //Normalize according
        if (prefix) {
            if (plugin && plugin.normalize) {
                name = plugin.normalize(name, makeNormalize(relName));
            } else {
                name = normalize(name, relName);
            }
        } else {
            name = normalize(name, relName);
            parts = splitPrefix(name);
            prefix = parts[0];
            name = parts[1];
            if (prefix) {
                plugin = callDep(prefix);
            }
        }

        //Using ridiculous property names for space reasons
        return {
            f: prefix ? prefix + '!' + name : name, //fullName
            n: name,
            pr: prefix,
            p: plugin
        };
    };

    function makeConfig(name) {
        return function () {
            return (config && config.config && config.config[name]) || {};
        };
    }

    handlers = {
        require: function (name) {
            return makeRequire(name);
        },
        exports: function (name) {
            var e = defined[name];
            if (typeof e !== 'undefined') {
                return e;
            } else {
                return (defined[name] = {});
            }
        },
        module: function (name) {
            return {
                id: name,
                uri: '',
                exports: defined[name],
                config: makeConfig(name)
            };
        }
    };

    main = function (name, deps, callback, relName) {
        var cjsModule, depName, ret, map, i,
            args = [],
            callbackType = typeof callback,
            usingExports;

        //Use name if no relName
        relName = relName || name;

        //Call the callback to define the module, if necessary.
        if (callbackType === 'undefined' || callbackType === 'function') {
            //Pull out the defined dependencies and pass the ordered
            //values to the callback.
            //Default to [require, exports, module] if no deps
            deps = !deps.length && callback.length ? ['require', 'exports', 'module'] : deps;
            for (i = 0; i < deps.length; i += 1) {
                map = makeMap(deps[i], relName);
                depName = map.f;

                //Fast path CommonJS standard dependencies.
                if (depName === "require") {
                    args[i] = handlers.require(name);
                } else if (depName === "exports") {
                    //CommonJS module spec 1.1
                    args[i] = handlers.exports(name);
                    usingExports = true;
                } else if (depName === "module") {
                    //CommonJS module spec 1.1
                    cjsModule = args[i] = handlers.module(name);
                } else if (hasProp(defined, depName) ||
                    hasProp(waiting, depName) ||
                    hasProp(defining, depName)) {
                    args[i] = callDep(depName);
                } else if (map.p) {
                    map.p.load(map.n, makeRequire(relName, true), makeLoad(depName), {});
                    args[i] = defined[depName];
                } else {
                    throw new Error(name + ' missing ' + depName);
                }
            }

            ret = callback ? callback.apply(defined[name], args) : undefined;

            if (name) {
                //If setting exports via "module" is in play,
                //favor that over return value and exports. After that,
                //favor a non-undefined return value over exports use.
                if (cjsModule && cjsModule.exports !== undef &&
                    cjsModule.exports !== defined[name]) {
                    defined[name] = cjsModule.exports;
                } else if (ret !== undef || !usingExports) {
                    //Use the return value from the function.
                    defined[name] = ret;
                }
            }
        } else if (name) {
            //May just be an object definition for the module. Only
            //worry about defining if have a module name.
            defined[name] = callback;
        }
    };

    requirejs = require = req = function (deps, callback, relName, forceSync, alt) {
        if (typeof deps === "string") {
            if (handlers[deps]) {
                //callback in this case is really relName
                return handlers[deps](callback);
            }
            //Just return the module wanted. In this scenario, the
            //deps arg is the module name, and second arg (if passed)
            //is just the relName.
            //Normalize module name, if it contains . or ..
            return callDep(makeMap(deps, callback).f);
        } else if (!deps.splice) {
            //deps is a config object, not an array.
            config = deps;
            if (config.deps) {
                req(config.deps, config.callback);
            }
            if (!callback) {
                return;
            }

            if (callback.splice) {
                //callback is an array, which means it is a dependency list.
                //Adjust args if there are dependencies
                deps = callback;
                callback = relName;
                relName = null;
            } else {
                deps = undef;
            }
        }

        //Support require(['a'])
        callback = callback || function () {};

        //If relName is a function, it is an errback handler,
        //so remove it.
        if (typeof relName === 'function') {
            relName = forceSync;
            forceSync = alt;
        }

        //Simulate async callback;
        if (forceSync) {
            main(undef, deps, callback, relName);
        } else {
            //Using a non-zero value because of concern for what old browsers
            //do, and latest browsers "upgrade" to 4 if lower value is used:
            //http://www.whatwg.org/specs/web-apps/current-work/multipage/timers.html#dom-windowtimers-settimeout:
            //If want a value immediately, use require('id') instead -- something
            //that works in almond on the global level, but not guaranteed and
            //unlikely to work in other AMD implementations.
            setTimeout(function () {
                main(undef, deps, callback, relName);
            }, 4);
        }

        return req;
    };

    /**
     * Just drops the config on the floor, but returns req in case
     * the config return value is used.
     */
    req.config = function (cfg) {
        return req(cfg);
    };

    /**
     * Expose module registry for debugging and tooling
     */
    requirejs._defined = defined;

    define = function (name, deps, callback) {
        if (typeof name !== 'string') {
            throw new Error('See almond README: incorrect module build, no module name');
        }

        //This module may not have dependencies
        if (!deps.splice) {
            //deps is not an array, so probably means
            //an object literal or factory function for
            //the value. Adjust args.
            callback = deps;
            deps = [];
        }

        if (!hasProp(defined, name) && !hasProp(waiting, name)) {
            waiting[name] = [name, deps, callback];
        }
    };

    define.amd = {
        jQuery: true
    };
}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/AlmondNoConflictPostfix.js' */
// This was copied from Atlassian's almond-noconflict-post.js

if (window.__require) {
    window.require = window.__require;
    window.requirejs = window.__requirejs;
    window.define = window.__define;
} else {
    // Patch our own version of Almond.
    //
    // If "define.amd" is truthy, some 3rd-party libs (e.g. jQuery, spin.js)
    // automatically register themselves via define(). We don't want that,
    // we'll take care of calling define() for each lib.
    delete window.define.amd;
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/amd/ApexModuleManager.js' */
/**
 * Simple mechanism for automatic AMD apex module (such as DOM controllers) instantiation.
 * May not be necessary after integrating RequireJS optimizer.
 *
 * define() passes through all arguments to AMD loader, storing away the ID for instantiation later. So far, all apex
 * classes have only had to add the line "require("gliffy/amd/apexModuleManager")." before the standard AMD define()
 * call.
 *
 * Example use:
 *      <this file toward beginning of batch.js>
 *
 *      require("gliffy/amd/apexModuleManager").
 *      define("my/new/class/id", ...)
 *      define("my/new/class2/id", ...)
 *      ....
 *
 *      ;(function($, apexModuleManager) {
 *          // Wait for DOM to be loaded before instantiating apex modules.
 *          $(function () {
 *              apexModuleManager.instantiateAll();
 *              apexModuleManager.reset();
 *          });
 *      })(require('jquery'), require('gliffy/amd/apexModuleManager'));

 *     <end of batch.js>
 */
define("gliffy/amd/apexModuleManager", function() {
    var apexModuleIds = [];

    return {
        reset: function() {
            apexModuleIds = [];
        },
        define: function() {
            // pass the arguments directly to define(), but register the first argument as module ID.
            apexModuleIds.push(arguments[0]);
            window.define.apply(window, arguments);
        },
        instantiateAll: function() {
            apexModuleIds.forEach(function(apexModuleId) {
                require(apexModuleId);
            });
        }
    };

});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-almond', location = 'gliffy/confluence/AlmondRegistrations.js' */
// You can't just bind it directly to jQuery because it is a function, which causes define to try to use it as a
// factory method.

// Remove definition to force libraries to not register themselves with AMD. This is because we need to handle registration ourselves due to Almond's name requirement.
delete define.amd;

define('jquery', [], function() {
    return jQuery;
});

define('underscore', [], function() {
    return _;
});

define('selectize', [], function () {
    return Selectize;
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/Util.js' */
define("gliffy/util", [
], function() {
    "use strict";

    // similar to Java String.format().
    //   Examples:
    //      $.format('{1} is first, {0} is second! {0} {2}', 'B', 'A') === 'A is first, B is second! B undefined';

    return {
        format: function (format) {
            var args = Array.prototype.slice.call(arguments, 1);
            return format.replace(/{(\d+)}/g, function (match, number) {
                return (typeof args[number] != 'undefined') ? args[number] : "undefined";
            });
        },
        htmlDecode: function(input) {
            var e = document.createElement('div');
            e.innerHTML = input;
            return e.childNodes.length === 0 ? "" : e.childNodes[0].nodeValue;
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/Url.js' */
/**
 * URL utility functions.
 */
define("gliffy/url", {
    buildPath: function (pathElementArray) {
        return pathElementArray.reduce(function (result, value) {
            if (value == null) {
                return result;
            } else if (result) {
                return result + "/" + encodeURIComponent(value);
            }
            return encodeURIComponent(value);
        }, "");
    },
    buildQuery: function (queryMap) {
        return _.reduce(queryMap, function (result, value, key) {
            if (value == null) {
                return result;
            } else if (result) {
                return result + "&" + encodeURIComponent(key) + "=" + encodeURIComponent(value);
            }
            return encodeURIComponent(key) + "=" + encodeURIComponent(value);
        }, "");
    },
    buildPathAndQuery: function (pathElements, queryMap) {
        var elements = [this.buildPath(pathElements)];

        if((typeof queryMap !== "undefined") && Object.keys(queryMap).length > 0) {
            elements.push(this.buildQuery(queryMap))
        }
        return elements.join("?");
    },
    buildRootedPathAndQuery: function (rootPath, pathElements, queryMap) {
        return rootPath + "/" + this.buildPathAndQuery(pathElements, queryMap);
    },
    "parse": function(url) {
        var regex = /^(?:([a-z]*):)?(?:\/\/)?(?:([^:@]*)(?::([^@]*))?@)?([0-9a-z-._]+)?(?::([0-9]*))?(\/[^?#]*)?(?:\?([^#]*))?(?:#(.*))?$/i;
        var md = url.match(regex) || [];

        var r = {
            "url":    url,
            "scheme": md[1],
            "user":   md[2],
            "pass":   md[3],
            "host":   md[4],
            "port":   md[5] && +md[5],
            "path":   md[6],
            "query":  md[7],
            "hash":   md[8]
        };

        // parse query params
        r.queryParams = {};

        var queryTokens = r.query.split("&");
        for(var tokenIndex = 0; tokenIndex < queryTokens.length; tokenIndex++) {
            var subTokens = queryTokens[tokenIndex].split("=");
            r.queryParams[decodeURIComponent(subTokens[0])] = decodeURIComponent(subTokens[1]);
        }
        return r;
    }
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/controls/alert/Alert.soy' */
// This file was automatically generated from Alert.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.controls.alert.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.controls == 'undefined') { gliffySoy.controls = {}; }
if (typeof gliffySoy.controls.alert == 'undefined') { gliffySoy.controls.alert = {}; }


gliffySoy.controls.alert.CompleteAlert = function(opt_data, opt_ignored) {
  return '<div id="gliffy-alert-save-as-complete" class="alert alert-success gliffy-alert"><a href="#" class="close" data-dismiss="alert">&times;</a><strong>' + soy.$$escapeHtml(opt_data.diagramName) + '</strong>&nbsp;' + soy.$$escapeHtml('successfully saved to page') + '&nbsp;<a class="gliffy-alert-link" href="' + soy.$$escapeHtml(opt_data.linkUrl) + '" target="_blank"><img class="page-icon"/><strong>&nbsp;' + soy.$$escapeHtml(opt_data.pageName) + '</strong></a><br/>' + soy.$$escapeHtml('in space') + '&nbsp;<strong>' + soy.$$escapeHtml(opt_data.spaceName) + '</strong></div>';
};
if (goog.DEBUG) {
  gliffySoy.controls.alert.CompleteAlert.soyTemplateName = 'gliffySoy.controls.alert.CompleteAlert';
}


gliffySoy.controls.alert.ErrorAlert = function(opt_data, opt_ignored) {
  return '<div id="gliffy-alert-save-as-error" class="alert alert-error gliffy-alert"><a href="#" class="close" data-dismiss="alert">&times;</a>' + soy.$$filterNoAutoescape(opt_data.errorDetail) + '</div>';
};
if (goog.DEBUG) {
  gliffySoy.controls.alert.ErrorAlert.soyTemplateName = 'gliffySoy.controls.alert.ErrorAlert';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/ObjectValidatorFactory.js' */
/**
 * Utility class for validating an object's values. Useful for constructors.
 */
define("gliffy/objectValidatorFactory", [
    'jquery',
    'underscore',
    'gliffy/util'
    ], function ($, _, util) {
        "use strict";
        var ObjectValidator = function (parameters) {
            // parameters:
            //   keyToPredicateMap
            //       key - the key of the value to pass through predicate (i.e. predicate.func(object[key]))
            //       predicate
            //           func - a function that takes a value and returns a boolean.
            //           failureMessage - the message to display when func(object[key]) == false.
            //
            //   description - string description of the object displayed upon failures.
            //

            var fail = function (key, value, failureMessage) {
                throw new Error(util.format("{0} {1} value ({2}) failed predicate: {3}", parameters.description, key, $.isFunction(value) ? "[function]" : value, failureMessage));
            };

            if (!_.isString(parameters.description)) {
                parameters.description = "ObjectValidator construction parameters";
                fail("description", parameters.description, "Expected value to be a string.");
            }

            if (typeof parameters.keyToPredicateMap === 'undefined') {
                parameters.description = "ObjectValidator construction parameters";
                fail("keyToPredicateMap", parameters.keyToPredicateMap, "Expected value to be defined.");
            }

            $.each(parameters.keyToPredicateMap, function (key, predicate) {
                if (!_.isFunction(predicate.func)) {
                    fail("keyToPredicateMap " + key + ".func", predicate.func, "Expected value to be a function.");
                }
                if (!_.isString(predicate.failureMessage)) {
                    fail("keyToPredicateMap " + key + ".failureMessage", predicate.failureMessage, "Expected value to be a string.");
                }
            });

            this._ = {
                keyToPredicateMap: parameters.keyToPredicateMap,
                fail: fail
            };
        };

        ObjectValidator.prototype.validate = function (value) {
            var self = this;
            if (value == null) {
                throw new Error("ObjectValidator.validate() requires non-null input.");
            }
            $.each(self._.keyToPredicateMap, function (key, predicate) {
                if (!predicate.func(value[key])) {
                    self._.fail(key, value[key], predicate.description);
                }
            });
        }

        return {
            create: function(parameters) {
                return new ObjectValidator(parameters);
            },
            predicates: {
                isString: {
                    func: _.isString,
                    failureMessage: "Expected value to be a string."
                },
                isNumber: {
                    func: _.isNumber,
                    failureMessage: "Expected value to be a number."
                },
                isFunction: {
                    func: _.isFunction,
                    failureMessage: "Expected value to be a function."
                },
                isArray: {
                    func: _.isArray,
                    failureMessage: "Expected value to be an array."
                },
                isTruthy: {
                    func: function (value) {
                        return value == true; // coercion intentional
                    },
                    failureMessage: "Expected value to be truthy."
                },
                isFalsey: {
                    func: function (value) {
                        return value == false; // coercion intentional
                    },
                    failureMessage: "Expected value to be falsey."
                },
                isDefinedAndNotNull: {
                    func: function (value) {
                        return value != null; // coercion intentional, to include undefined.
                    },
                    failureMessage: "Expected value to be defined and not null."
                },
                containsAnyKey: {
                    func: function (value) {
                        return Object.keys(value).length > 0;
                    },
                    failureMessage: "Expected value to contain at least one key."
                }
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/PageFacade.js' */
define("gliffy/confluence/pageFacade", [
    "jquery",
    "gliffy/confluence/rest/webRequestPromiseFactory"
], function($, webRequestPromiseFactory) {
    "use strict";

    var unpinPageViewMacroDiagramVersion = function (diagramReference) {
        // get current page content, remove version from appropriate element, update to server, then refresh browser
        var getPageContent = webRequestPromiseFactory.buildGetPageContentPromise(AJS.params.pageId);

        var removeVersionAndPutPageContent = function(page) {
            var bodyStorageHtml = page.body.storage.value;
            // Wrap data in a new div so it can be used with jquery (http://stackoverflow.com/questions/12808770/parsing-of-html-string-using-jquery).
            var wrappedBodyNodes = $('<div/>').append(bodyStorageHtml);

            // remove parameters with empty names
            var emptyParameterNodesToRemove = wrappedBodyNodes.find("ac\\:parameter[ac\\:name='']");
            emptyParameterNodesToRemove.remove();

            // find all the paragraphs that have the same diagram name and version number...
            var matchingParagraphNodes = wrappedBodyNodes.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function () {
                var versionMatches = $(this).find("ac\\:parameter[ac\\:name='version']").text() === diagramReference.version.toString();
                var nameMatches = $(this).find("ac\\:parameter[ac\\:name='name']").text() === diagramReference.name;
                var parameterElement = $(this).find("ac\\:parameter[ac\\:name='pageid']");
                var pageIdMatches = ((parameterElement.length === 0) && (AJS.params.pageId === diagramReference.ownerPageId))
                    || (parameterElement.text() === diagramReference.ownerPageId.toString());
                return versionMatches && nameMatches && pageIdMatches;
            });

            // ... and remove their version elements.
            var versionNodesToRemove = matchingParagraphNodes.find("ac\\:parameter[ac\\:name='version']");
            versionNodesToRemove.remove();

            // prepare page update
            page.body.storage.value = wrappedBodyNodes.html();
            page.version.number = page.version.number + 1;

            // GCONF-1956: Resolve ancestors
            if (page.ancestors) {
                // If page.ancestors is empty, remove it. If there is more than one ancestor, use the last one
                if (page.ancestors.length === 0) {
                    delete page.ancestors;
                } else if (page.ancestors.length > 1) {
                    page.ancestors = [page.ancestors.pop()];
                }
            }
            return webRequestPromiseFactory.buildPutPageContentPromise(AJS.params.pageId, page);
        };

        var reloadBrowserPage = function() {
            window.location.reload();
        };

        $.when(getPageContent).then(removeVersionAndPutPageContent).then(reloadBrowserPage);
    };

    // Since this will be deprecated soon, I am not going to bother abstracting these into the WebRequestPromiseFactory
    var unpinPageViewMacroDiagramVersionWithJsonRpcApi = function (diagramReference) {
        var baseApiUrl = AJS.format("{0}/rpc/json-rpc/confluenceservice-v2", AJS.Confluence.getContextPath());
        var getPageUrl = baseApiUrl + "/getPage";
        var getPageParameters = [AJS.params.pageId];

        $.ajax({
            type : "POST", // must use POST with json-rpc API
            url : getPageUrl,
            contentType: "application/json",
            data: JSON.stringify(getPageParameters),
            success : function(result) {
                var bodyHtml = result.content;

                // Wrap data in a new div so it can be used with jquery (http://stackoverflow.com/questions/12808770/parsing-of-html-string-using-jquery).
                var wrappedBodyNodes = $('<div/>').append(bodyHtml);

                // remove parameters with empty names
                var emptyParameterNodesToRemove = wrappedBodyNodes.find("ac\\:parameter[ac\\:name='']");
                emptyParameterNodesToRemove.remove();

                // find all the paragraphs that have the same diagram name and version number...
                var matchingParagraphNodes = wrappedBodyNodes.find("p:has(ac\\:parameter[ac\\:name='version'])p:has(ac\\:parameter[ac\\:name='name'])").filter(function () {
                    var versionMatches = $(this).find("ac\\:parameter[ac\\:name='version']").text() === String(diagramReference.version);
                    var nameMatches = $(this).find("ac\\:parameter[ac\\:name='name']").text() === diagramReference.name;
                    var parameterElement = $(this).find("ac\\:parameter[ac\\:name='pageid']");
                    var pageIdMatches = ((parameterElement.length === 0) && (AJS.params.pageId === diagramReference.ownerPageId))
                        || (parameterElement.text() === diagramReference.ownerPageId.toString());
                    return versionMatches && nameMatches && pageIdMatches;
                });

                // ... and remove their version elements.
                var versionNodesToRemove = matchingParagraphNodes.find("ac\\:parameter[ac\\:name='version']");
                versionNodesToRemove.remove();

                var updatePageData = {
                    "jsonrpc": "2.0",
                    "method": "updatePage",
                    "params": [
                        {
                            "id": result.id,
                            "space": result.space,
                            "title": result.title,
                            "parentId" : result.parentId,
                            "version": result.version,
                            "content": wrappedBodyNodes.html()
                        },
                        {
                            "versionComment": "Unpinned macro version",
                            "minorEdit": false
                        }
                    ],
                    "id": AJS.params.pageId
                };

                // update via server
                $.ajax({
                    type: "POST",
                    contentType: "application/json",
                    url: baseApiUrl,
                    data: JSON.stringify(updatePageData),
                    success: function () {
                        window.location.reload();
                    }
                });
            }
        });
    };

    var unpinPageEditMacroDiagramVersion = function (diagramReference) {

        if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {

            // modify the macro to no longer be pinned
            var macroNodeQuery = AJS.format('.editor-inline-macro[data-macro-parameters*="name={0}"]', diagramReference.name);
            var macroNodes = AJS.Rte.getEditor().dom.select(macroNodeQuery);
            AJS.$.each(macroNodes, function (index, macroNode) {
                var diagramReference = getDiagramReference($(macroNode));
                // removing version sets to unpinned and displays nicely in macro chrome
                diagramReference.version = undefined;
                addDiagramReference(diagramReference, macroNode);
            });
        }
    };

    var getMacroParams = function(diagramReference) {
        // clone diagramReference and modify to
        var macroParams = $.extend(true, {}, diagramReference);
        // strip default values
        if(macroParams.ownerPageId !== AJS.params.pageId) {
            macroParams.pageid = macroParams.ownerPageId;
        }
        delete macroParams.ownerPageId;
        if(macroParams.version === 0) {
            delete macroParams.version;
        }
        if(macroParams.size === 'O' || macroParams.size === 'L') {
            delete macroParams.size;
        }
        if(!macroParams.border) {
            delete macroParams.border;
        }
        if(macroParams.chrome === 'full') {
            delete macroParams.chrome;
        }
        if(!!macroParams.html5) {
            delete macroParams.html5;
        }
        return macroParams;
    };

    var getDiagramReferenceFromMacroParams = function(macroParams) {
        return {
            ownerPageId: macroParams['pageid'] || AJS.params.pageId,
            name: macroParams['name'],
            version: macroParams['version'],
            size: macroParams['size'],
            border: macroParams['border'],
            chrome: macroParams['chrome'],
            html5: macroParams['html5'],
            pagePin: macroParams['pagePin']
        }
    };

    var getDiagramReferenceFromMacroContainer = function($macroContainer) {
        return {
            ownerPageId: $macroContainer.data('ceoid') || AJS.params.pageId,
            name: $macroContainer.data('filename'),
            version: $macroContainer.data('version'),
            size: $macroContainer.data('size'),
            border: $macroContainer.data('border'),
            chrome: $macroContainer.data('chrome'),
            html5: $macroContainer.data('html5'),
            diagramAttachmentId: $macroContainer.data('attachmentid')
        };
    };

    var addDiagramReference = function(diagramReference, nodeToReplace) {
        if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
            var deferred, params = {
                contentId: Confluence.Editor.getContentId(),
                macro: {
                    name: "gliffy",
                    params: getMacroParams(diagramReference),
                    defaultParameterValue: "",
                    body: ""
                }
            };

            //GCONF-2360
            //if ($.browser.msie && AJS.$.Deferred) {
            //    //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
            //    tinymce.confluence.NodeUtils.replaceNode = replaceNode;
            //}

            AJS.Rte.BookmarkManager.restoreBookmark();
            deferred = tinymce.confluence.MacroUtils.insertMacro(params, nodeToReplace);

            if (deferred && deferred.then) {
                deferred.then(function () {
                    if ($.browser.msie) {
                        //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
                        tinymce.confluence.NodeUtils.replaceNode = originalReplaceNodeFunction;
                    }
                }, function () {
                    if ($.browser.msie) {
                        //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
                        tinymce.confluence.NodeUtils.replaceNode = originalReplaceNodeFunction;
                    }
                });
            }

            //AJS.log("insert gliffy macro");
            fixEditorFocus();
            return deferred;
        } else {
            // TODO: GCONF-2181
            throw "addDiagramReference not yet implemented for non-RTE";
        }
    };

    var getDiagramReference = function($macroContainer) {
        if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
            var macroParams = {};
            // Look for data from jQuery node.
            var macroParamsString = $macroContainer.data && $macroContainer.data("macro-parameters");
            // If none, look for data from RTE DOM node.
            macroParamsString = macroParamsString || ($macroContainer.dataset && $macroContainer.dataset.macroParameters);
            // If string found, parse into params object (KEY1=Value1|KEY2=Value2|KEY3=Value|...)
            if (macroParamsString) {
                $.each(macroParamsString.split("|"), function (idx, item) {
                    var param = item.split("=");
                    macroParams[param[0]] = param[1];
                });
            }

            return getDiagramReferenceFromMacroParams(macroParams);
        } else {
            return getDiagramReferenceFromMacroContainer($macroContainer);
        }
    };

    var fixEditorFocus = function () {
        //remove this if chrome+mac gets rid of focus issue.
        if (AJS.Rte && typeof AJS.Rte.getEditorFrame === 'function' && AJS.Rte.getEditorFrame()) {
            $(AJS.Rte.getEditorFrame()).focus();
        }

        // GCONF-1941: fix editor focus. Perhaps AJS.Rte.getEditorFrame may not be set?
        var gliffyEditorIFrame = $("#gliffy-editor")[0];
        if(gliffyEditorIFrame) {
            gliffyEditorIFrame.contentWindow.focus();
        }
    };

    //var updateDiagramReferences = function() {
    //    if(AJS.Rte && AJS.Rte.getEditor()) {
    //
    //        //find all matching macros in the editor iframe
    //        var macros = $(AJS.Rte.getEditor().dom.select('.editor-inline-macro')).filter(function(index, element) {
    //            return $(element).data("macro-name") === 'gliffy';
    //        });
    //
    //        macros.each(function (index, element) {
    //            var $macroContainer = $(element);
    //            var diagramReference = getDiagramReference($macroContainer);
    //            var dataJson = $.toJSON({
    //                contentId : Confluence.Editor.getContentId(),
    //                macro : {
    //                    name : 'gliffy',
    //                    params : {
    //                        pageid: diagramReference.ownerPageId,
    //                        name: diagramReference.name,
    //                        version: diagramReference.version
    //                    },
    //                    body : "", defaultParameterValue : ""
    //                }
    //            });
    //
    //            $.ajax({
    //                type : "POST",
    //                contentType : "application/json; charset=utf-8",
    //                url : Confluence.getContextPath() + "/rest/tinymce/1/macro/placeholder",
    //                data : dataJson,
    //                dataType : "text",
    //                success : function (macroplaceholder) {
    //                    $macroContainer.after(macroplaceholder);
    //                    $macroContainer.remove();
    //                }
    //            });
    //        });
    //
    //    }
    //};

    //remove this once https://jira.atlassian.com/browse/CONF-28418 is fixed
    var originalReplaceNodeFunction = (AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) ? tinymce.confluence.NodeUtils.replaceNode : null;

    return {
        unpinDiagramReferenceVersion: function(diagramReference) {
            if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
                unpinPageEditMacroDiagramVersion(diagramReference);
            } else {
                var versionComponents = AJS.version.split('.');
                var useJsonRpcApi = !(parseInt(versionComponents[0]) >= 5 && parseInt(versionComponents[1]) >= 4);

                if (useJsonRpcApi) {
                    unpinPageViewMacroDiagramVersionWithJsonRpcApi(diagramReference);
                } else {
                    unpinPageViewMacroDiagramVersion(diagramReference);
                }
            }
        },

        //updateDiagramReferences: updateDiagramReferences,

        addDiagramReference: addDiagramReference,

        getDiagramReference: getDiagramReference,

        getDiagramReferences: function() {
            var diagramReferences = [];
            var $macroContainers;

            if(AJS.Rte && typeof AJS.Rte.getEditor === 'function' && AJS.Rte.getEditor()) {
                $macroContainers = $("iframe").contents().find(".editor-inline-macro[data-macro-name='gliffy']");
            } else {
                $macroContainers = $(".gliffy-container");
            }

            $macroContainers.each(function (index, macroContainer) {
                diagramReferences.push(getDiagramReference($(macroContainer)));
            });
            return diagramReferences;
        }
    };
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/rest/UrlFactory.js' */
define("gliffy/confluence/rest/urlFactory", [
    "gliffy/url"
], function(url) {
    "use strict";

    //GCONF-2677: following line sets the Confluence base url based on browser location instead of Confluence base URL.
    var confluenceBaseUrl = window.location.protocol + "//" + window.location.host + AJS.contextPath();

    var rootGliffyApiUrl = confluenceBaseUrl + "/rest/gliffy/1.0";

    return {
        buildPrependDiagramToPageUrl: function(parameters) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "saveas",
                    parameters.sourcePageId,
                    parameters.sourceDiagramName
                ],
                {
                    sourceDiagramVersion: parameters.sourceDiagramVersion,
                    targetPageId: parameters.targetPageId,
                    space: parameters.targetSpaceKey,
                    targetDiagramName: parameters.targetDiagramName,
                    targetPageTitle: parameters.targetPageTitle,
                    includeAlertLinkUrlParams: parameters.includeAlertLinkUrlParams
                }
            );
        },

        buildGetSpacesUrl: function (startIndex, countLimit) {
            // Works only on 5.5+, but is Confluence native and probably faster
            //return $.ajax(GLIFFY.baseConfluenceUrl + "/rest/api/space?start=" + startIndex + "&limit=" + countLimit);

            // Works on 5.1+
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "spaces"
                ],
                {
                    start: startIndex,
                    limit: countLimit
                }
            );
        },

        buildSpaceSearchUrl: function (searchString, startIndex, countLimit, page) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "spaces"
                ],
                {
                    searchTerm: searchString,
                    start: startIndex,
                    limit: countLimit,
                    page: page
                }
            );
            return rootGliffyApiUrl + "/" + pathAndQuery;
        },

        // Works only on 5.5+
        //var buildPageSearchUrl = function(searchString, spaceKeys, startIndex, countLimit) {
        //    var cql = "type=page ";
        //
        //    if(spaceKeys) {
        //        cql += "and (";
        //        spaceKeys.forEach(function(key, index) {
        //            if(index > 0) {
        //                cql += " or ";
        //            }
        //            cql += 'space=' + key;
        //        });
        //        cql += ") ";
        //    }
        //
        //    if(searchString) {
        //        cql += 'and title ~'"' + searchString + '"';
        //    }
        //
        //    var url = rootConfluenceApiUrl + "/rest/api/content/search?cql=" + encodeURIComponent(cql);
        //    url += "&start=" + startIndex + "&limit=" + countLimit + "&expand=space";
        //
        //    return url;
        //}

        buildPageSearchUrl: function (searchString, spaceKeys, startIndex, countLimit) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "page",
                    "search"
                ],
                {
                    searchTerm: searchString || "",
                    start: startIndex,
                    limit: countLimit,
                    expand: 'space',
                    spaceKeys: spaceKeys && spaceKeys.join(",")
                }
            );
        },

        // We must pass in the rootGliffyAPI separately from what's configured above, since
        // AJS.params.baseUrl and GLIFFY.baseConfluenceUrl are not always set when this is called
        buildPageEditPermissionUrl: function(gliffyAPIRootServiceURL, pageId) {
            return AJS.format("{0}/ceo/{1}/permission", gliffyAPIRootServiceURL, pageId);
        },

        buildGetDiagramsInPageUrl: function (pageId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "page",
                    pageId,
                    "diagrams"
                ]
            );
        },

        buildPageWithTitleExistsInSpaceUrl: function (pageTitle, spaceKey) {
            return confluenceBaseUrl + '/rest/api/content?' + 'spaceKey=' + spaceKey +
                    '&title=' + encodeURIComponent(pageTitle);
        },

        buildUnlinkDiagramUrl: function(parameters) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "unlink",
                    parameters.sourcePageId,
                    parameters.sourceDiagramName
                ],
                {
                    sourceDiagramVersion: parameters.sourceDiagramVersion,
                    targetPageId: parameters.targetPageId,
                    targetDiagramName: parameters.targetDiagramName
                }
            );
        },

        buildPageContentUrl: function(pageId) {
            return AJS.format("{0}/rest/api/content/{1}?expand=body.storage,version,space,ancestors", confluenceBaseUrl, pageId);
        },

        buildEditDiagramPermissionUrl: function(ownerPageId, diagramName) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "ceo",
                    ownerPageId,
                    "diagrams",
                    diagramName,
                    "permission"
                ]
            );
        },

        buildCreateAttachmentPermissionUrl: function(ownerPageId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "ceo",
                    ownerPageId,
                    "permission"
                ]
            );
        },

        buildPropertyUrl: function(propertyId) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "properties",
                    propertyId
                ]
            );
        },

        buildDiagramPreviewImageUrl: function(ownerPageId, diagramName, diagramVersion) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "preview"
                ],
                {
                    name: diagramName,
                    pageId: ownerPageId,
                    version: diagramVersion
                }
            );
        },

        buildDiagramThumbnailImageUrl: function(ownerPageId, diagramName, diagramVersion) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "thumbnail"
                ],
                {
                    name: diagramName,
                    pageId: ownerPageId,
                    version: diagramVersion
                }
            );
        },

        buildGetDiagramVersionsUrl: function(ownerPageId, diagramName) {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "diagrams",
                    "allVersionInformation"
                ],
                {
                    pageId: ownerPageId,
                    name: diagramName
                }
            );
        },

        buildCreateEmbedLinkUrl: function () {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "embeddedDiagrams"
                ]
            );
        },

        buildDeactivateEmbedLinkUrl: function () {
            return url.buildRootedPathAndQuery(rootGliffyApiUrl,
                [
                    "embeddedDiagrams",
                    "deactivate"
                ]
            );
        }
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-basics', location = 'gliffy/confluence/rest/WebRequestPromiseFactory.js' */
/**
 * Central place for creating promises in order to abstract URLs from controller code, as well as providing a means for
 * asynchronous mocks/testing.
 *
 * NOTE: /confluence/rest/api/* are only present in Confluence 5.5+
 */
define("gliffy/confluence/rest/webRequestPromiseFactory", [
        "jquery",
        "gliffy/confluence/rest/urlFactory"
    ], function($, urlFactory) {
        "use strict";


        return {
            /**
             * AJAX response spec
             *   pageTitle: the title of the page that was modified
             *   spaceName: the name of the space containing the page that was modified
             *   targetPageUrl: a URL that links to the page that was modified. This URL is relative to the base Confluence URL.
             */
            buildPrependDiagramToPagePromise: function (parameters) {

                var postUrl = urlFactory.buildPrependDiagramToPageUrl(parameters);

                /**
                 * GCONF-2306: Save-as operation (from the Gliffy editor). If we have access to the Gliffy editor stage, then send the diagram
                 * content directly from the stage. This ensures that any unsaved changes made to the stage will be properly transferred during
                 * the save-as operation. If we do not have access to the editor, then the POST url has sufficient parameters to copy the attachment.
                 */
                if (window.GLIFFY && window.GLIFFY.Mouse && window.GLIFFY.Mouse.editor) {

                    var gliffyEditor = window.GLIFFY.Mouse.editor;
                    var diagramObject = gliffyEditor.getDocumentManager().getActiveDocument().toObject(); // diagram content from the editor stage
                    var gliffyEditorStage = gliffyEditor.getDocumentManager().getActiveStage();

                    // Show a spinner while we export the image
                    if (window.GLIFFY.Spinner) {
                        window.GLIFFY.Spinner.show($('body'));
                    }

                    // Get image data from the Editor stage
                    return gliffyEditor.getDocumentManager().getImageData(gliffyEditorStage, "image/png", function(imageDataUrl, deferred) {
                        diagramObject.image = imageDataUrl;
                        deferred.resolve(diagramObject);
                    }, false, 1).then(function() {
                        return gliffyEditor.getDocumentManager().getHTMLData(gliffyEditorStage)
                    }).then(function(html) {
                        diagramObject.html = html;
                        // Then return a promise that makes a POST request to the server, containing the diagram and image data url
                        return $.ajax({
                            type: "POST",
                            contentType: "application/json",
                            data: JSON.stringify(diagramObject),
                            url: postUrl
                        });
                    });
                } else {
                    /**
                     * Copy-to operation (from the Confluence macro viewer): the Gliffy editor is not available.
                     * Do not send raw diagram and image data to the REST endpoint, and instead use the attachment pointers to copy the attachments.
                     */
                    return $.post(postUrl);
                }
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildGetSpacesPromise: function (startIndex, countLimit) {
                return $.get(urlFactory.buildGetSpacesUrl(startIndex, countLimit));
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildSpaceSearchPromise: function (searchString, startIndex, countLimit, page) {
                return $.get(urlFactory.buildSpaceSearchUrl(searchString, startIndex, countLimit, page));
            },

            /**
             * AJAX directly returned by Atlassian REST interface
             */
            buildPageSearchPromise: function (searchString, spaceKeys, startIndex, countLimit) {
                return $.get(urlFactory.buildPageSearchUrl(searchString, spaceKeys, startIndex, countLimit));
            },

            /**
             * AJAX response spec
             *   array of
             *     id: the diagram id
             *     title: the title of the diagram
             *     fileName: the filename of the diagram
             */
            buildGetDiagramsInPagePromise: function (pageId) {
                return $.get(urlFactory.buildGetDiagramsInPageUrl(pageId));
            },

            /**
             * AJAX response spec
             *   exists: boolean
             */
            buildPageWithTitleExistsInSpacePromise: function (pageTitle, spaceKey) {
                return $.get(urlFactory.buildPageWithTitleExistsInSpaceUrl(pageTitle, spaceKey));
            },

            buildUnlinkDiagramPromise: function(parameters) {
                return $.post(urlFactory.buildUnlinkDiagramUrl(parameters));
            },

            buildGetPageContentPromise: function(pageId) {
                return $.ajax(urlFactory.buildPageContentUrl(pageId));
            },

            buildPutPageContentPromise: function(pageId, pageContent) {
                return $.ajax({
                    type: "PUT",
                    contentType: "application/json; charset=utf-8",
                    url: urlFactory.buildPageContentUrl(pageId),
                    data: JSON.stringify(pageContent),
                    dataType: "text",
                    processData: false
                });
            },

            buildGetEditPagePermissionPromise: function(gliffyAPIRootServiceURL, pageId) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildPageEditPermissionUrl(gliffyAPIRootServiceURL, pageId),
                    dataType: "json",
                    cache: false
                });
            },

            buildGetEditDiagramPermissionPromise: function(pageId, diagramName) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildEditDiagramPermissionUrl(pageId, diagramName),
                    dataType:"json",
                    cache:false
                });
            },

            buildGetCreateAttachmentPermissionPromise: function(pageId) {
                return $.ajax({
                    type: 'GET',
                    url: urlFactory.buildCreateAttachmentPermissionUrl(pageId),
                    dataType:"json",
                    cache:false
                });
            },

            buildGetPropertyValuePromise: function(propertyId) {
                var deferred = new $.Deferred();
                $.get(urlFactory.buildPropertyUrl(propertyId)).then(function(response) {
                    deferred.resolve(response[propertyId]);
                });
                return deferred;
            },

            buildGetDiagramVersionsPromise: function(ownerPageId, diagramName) {
                return $.get(urlFactory.buildGetDiagramVersionsUrl(ownerPageId, diagramName));
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/controls/imageselection/ImageSelectionControl.soy' */
// This file was automatically generated from ImageSelectionControl.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.widget.image.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.widget == 'undefined') { gliffySoy.widget = {}; }
if (typeof gliffySoy.widget.image == 'undefined') { gliffySoy.widget.image = {}; }


gliffySoy.widget.image.gliffyImageSelectionWidget = function(opt_data, opt_ignored) {
  return '<div class="gliffy-image-selection"><div class="gliffy-image-selection-inner-panel" title="' + soy.$$escapeHtml(opt_data.labelText) + '"><div class="gliffy-image-selection-spinner"/><div><img class="gliffy-image-selection-image" src="' + soy.$$escapeHtml(opt_data.imageUrl) + '"/><div class="gliffy-image-selection-icon gliffy-image-selection-zoom"><img/></div></div></div><div class="gliffy-image-selection-label">' + soy.$$escapeHtml(opt_data.labelText) + '</div></div>';
};
if (goog.DEBUG) {
  gliffySoy.widget.image.gliffyImageSelectionWidget.soyTemplateName = 'gliffySoy.widget.image.gliffyImageSelectionWidget';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/controls/imageselection/ImageSelectionControlFactory.js' */
define("gliffy/controls/imageselection/imageSelectionControlFactory", [
        "jquery",
        "gliffy/objectValidatorFactory"
    ], function ($, objectValidatorFactory) {
        "use strict";
        var ImageSelectionControl = function (parameters) {
            var self = this;

            objectValidatorFactory.create({
                description: "ListTable constructor parameters",
                keyToPredicateMap: {
                    "parent": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "labelText": objectValidatorFactory.predicates.isString,
                    "imageUrl": objectValidatorFactory.predicates.isString
                }
            }).validate(parameters);

            var parameters = $.extend({
                isSelected: false
            }, parameters);

            var html = gliffySoy.widget.image.gliffyImageSelectionWidget(parameters);
            var domRoot = $(html).appendTo(parameters.parent);

            domRoot.on('click', function(event) {
                self.setIsSelected(true);
            });

            //GCONF-2013 fancybox is deprecated, use image previewer but fall back to
            //fancy box if it is not available
            var previewImage = domRoot.find(".gliffy-image-selection-image");
            var zoomButton = domRoot.find(".gliffy-image-selection-zoom");

            if (previewImage.previewer) {
                zoomButton.previewer({
                    src: previewImage.attr('src'),
                    type: 'image/png',
                    zindex: 10000
                });
            } else {
                zoomButton.on('click', function (event) {
                    var content = previewImage.clone();
                    // modify style
                    content.removeClass('gliffy-image-selection-image');
                    content.addClass('gliffy-image-selection-fancybox-image');
                    $.fancybox({
                        orig: previewImage,
                        content: content,
                        showCloseButton: true,
                        hideOnOverlayClick: true,
                        hideOnContentClick: true
                    });
                });
            }

            this._ = {
                domRoot: domRoot,
                labelText: parameters.labelText,
                imageUrl: parameters.imageUrl,
                isSelected: !parameters.isSelected, // set as opposite so that setIsSelected() below will trigger events
                selectionChangedListeners: [],
            };

            this.setIsSelected(parameters.isSelected);
        };

        ImageSelectionControl.prototype.getIsSelected = function () {
            return this._.isSelected;
        };

        ImageSelectionControl.prototype.setIsSelected = function (isSelected) {
            if(this._.isSelected === isSelected) {
                return;
            }

            this._.isSelected = isSelected;
            if(isSelected) {
                this._.domRoot.addClass("gliffy-image-selected");
            } else {
                this._.domRoot.removeClass("gliffy-image-selected");
            }

            var self = this;
            this._.selectionChangedListeners.forEach(function (listener) {
                listener({
                    source:self,
                    isSelected:isSelected
                });
            });
        };

        ImageSelectionControl.prototype.getDomRoot = function () {
            return this._.domRoot;
        };

        ImageSelectionControl.prototype.addSelectionChangedListener = function (listener) {
            this._.selectionChangedListeners.push(listener);
        };

        return {
            create: function(parameters) {
                return new ImageSelectionControl(parameters);
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionDialog.soy' */
// This file was automatically generated from VersionSelectionDialog.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace gliffySoy.dialog.version.
 */

if (typeof gliffySoy == 'undefined') { var gliffySoy = {}; }
if (typeof gliffySoy.dialog == 'undefined') { gliffySoy.dialog = {}; }
if (typeof gliffySoy.dialog.version == 'undefined') { gliffySoy.dialog.version = {}; }


gliffySoy.dialog.version.versionSelectionDialogBody = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui top-label"><div class="gliffy-version-dialog-panel"><div class="gliffy-version-dialog-description">' + soy.$$escapeHtml(opt_data.promptText) + '</div><div class="gliffy-image-selection-widget-area"/></div></form>';
};
if (goog.DEBUG) {
  gliffySoy.dialog.version.versionSelectionDialogBody.soyTemplateName = 'gliffySoy.dialog.version.versionSelectionDialogBody';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionDialogFactory.js' */
/**
 * Save As/CopyTo dialog common logic.
 */
define("gliffy/confluence/versionselection/versionSelectionDialogFactory",
    [
        "jquery",
        "gliffy/controls/imageselection/imageSelectionControlFactory",
        "gliffy/objectValidatorFactory"
    ],
    function($, imageSelectionControlFactory, objectValidatorFactory) {
        "use strict";

        // GCONF-1922: Add diagram thumbnails to pinned version dialogs.
        //
        // PARAMETERS:
        //   parameters
        //   - headerText: Text to display in header area of dialog.
        //   - promptText: Text to display above image selection widgets.
        //   - attachmentVersion: The number of the pinned version.
        //   - diagramName: the name of the diagram (included in macro).
        //   - ownerPageId: ID of page that diagram is contained within.
        //   - referencePageId: ID of page that diagram reference is contained within.
        //   - pinnedIsDefault: true if pinned version should be default selection, false if latest version should be default selection.
        //   - onComplete: A callback that gets executed up dialog dismissal.
        //      * Argument pinnedVersionWasSelected: true if pinned version selected, false if latest version is selected.
        var VersionSelectionDialog = function (parameters) {
            var self = this;
            var parameters = $.extend({
                onCancel: function () {
                    // intentionally empty
                }
            }, parameters);
            objectValidatorFactory.create({
                description: "VersionSelectionDialog constructor parameters",
                keyToPredicateMap: {
                    "headerText": objectValidatorFactory.predicates.isString,
                    "promptText": objectValidatorFactory.predicates.isString,
                    "attachmentVersion": objectValidatorFactory.predicates.isNumber,
                    "diagramName": objectValidatorFactory.predicates.isString,
                    "ownerPageId": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "referencePageId": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "pinnedIsDefault": objectValidatorFactory.predicates.isDefinedAndNotNull,
                    "onComplete": objectValidatorFactory.predicates.isFunction
                }
            }).validate(parameters);

            this._ = {
                hasBeenShown: false,
                parameters: parameters,
                pinnedVersionIsSelected: parameters.pinnedIsDefault,
                buildDom: function () {
                    var bodyHtml = gliffySoy.dialog.version.versionSelectionDialogBody({
                        promptText: parameters.promptText
                    });

                    var dom = $(bodyHtml);

                    var widgetArea = dom.find(".gliffy-image-selection-widget-area");
                    var pinnedVersionControl = imageSelectionControlFactory.create({
                        parent: widgetArea,
                        labelText: AJS.format("Version {0}", parameters.attachmentVersion),
                        imageUrl: AJS.format('{0}/download/attachments/{1}/{2}.png?api=v2&version={3}&modificationDate=0', self._.parameters.contextPath, self._.parameters.ownerPageId, encodeURIComponent(self._.parameters.diagramName), self._.parameters.attachmentVersion),
                        isSelected: parameters.pinnedIsDefault
                    });

                    var latestVersionControl = imageSelectionControlFactory.create({
                        parent: widgetArea,
                        labelText: "Latest",
                        imageUrl: AJS.format('{0}/download/attachments/{1}/{2}.png?api=v2&timestamp={3}&version={4}',
                                                self._.parameters.contextPath,
                                                self._.parameters.ownerPageId,
                                                encodeURIComponent(self._.parameters.diagramName),
                                                new Date().getTime(),
                                                self._.parameters.pagePin || 0),
                        isSelected: !parameters.pinnedIsDefault
                    });

                    pinnedVersionControl.getDomRoot().addClass("left");
                    latestVersionControl.getDomRoot().addClass("right");

                    pinnedVersionControl.addSelectionChangedListener(function(event) {
                        if(event.isSelected) {
                            latestVersionControl.setIsSelected(false);
                            self._.pinnedVersionIsSelected = true;
                        }
                    });

                    latestVersionControl.addSelectionChangedListener(function(event) {
                        if(event.isSelected) {
                            pinnedVersionControl.setIsSelected(false);
                            self._.pinnedVersionIsSelected = false;
                        }
                    });

                    return dom;
                }
            }
        };

        VersionSelectionDialog.prototype.show = function () {
            var self = this;
            if (self._.hasBeenShown) {
                throw new Error("versionSelectionDialogFactory can be shown only once per instance lifetime.");
            }

            var dialog = new AJS.Dialog({
                width: 600,
                height: 380,
                closeOnOutsideClick: false
            });
            dialog.addHeader(self._.parameters.headerText);
            dialog.addPanel("", self._.buildDom(), "panel-body");

            dialog.addLink("Cancel", function (dialog) {
                dialog.remove();
            }, 'aui-button gliffy-dialog-cancel');

            dialog.addButton("Select", function (dialog) {
                dialog.remove();
                self._.parameters.onComplete(self._.pinnedVersionIsSelected);
            });
            dialog.show();
            self._.hasBeenShown = true;
        };

        return {
            create: function(parameters) {
                return new VersionSelectionDialog(parameters);
            }
        }
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionDialogController.js' */
define("gliffy/confluence/versionselection/versionSelectionDialogController",
    [
        "jquery",
        "gliffy/objectValidatorFactory",
        "gliffy/confluence/versionselection/versionSelectionDialogFactory"
    ],
    function($, objectValidatorFactory, versionSelectionDialogFactory) {
        "use strict";

        return {
            // Creates a diagram which asks the user whether to unpin the recently edited diagram.
            //
            // PARAMETERS:
            //   options
            //   - attachmentVersion: The number of the pinned version.
            //   - diagramName: the name of the diagram (included in macro).
            //   - ownerPageId: ID of page that diagram is contained within.
            //   - referencePageId: ID of page that diagram reference is contained within.
            //   - onComplete: A callback that gets executed up dialog dismissal.
            //      * Argument pinnedVersionWasSelected: true if pinned version selected, false if latest version is selected.

            showUnpinMacroDiagramVersionDialog: function (parameters) {
                versionSelectionDialogFactory.create($.extend({
                    headerText: "Select Diagram Version to Display",
                    promptText: AJS.format("Version {0} is currently pinned to this page. Which version would you like to display?", parameters.attachmentVersion),
                    pinnedIsDefault: false
                }, parameters)).show();
            },

            showSelectVersionToEditDialog: function (parameters) {
                versionSelectionDialogFactory.create($.extend({
                    headerText: "Select Diagram Version to Edit",
                    promptText: AJS.format("Version {0} is currently pinned to this page. Which version you would like to edit?", parameters.attachmentVersion),
                    pinnedIsDefault: true
                }, parameters)).show();
            }
        };

    }
);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/versionselection/VersionSelectionController.js' */
/**
 * Responsible for attaching to events and handling local storage "cookie" checks
 */

// Register as apex module so this module can be instantiated after everybody is registered.
require("gliffy/amd/apexModuleManager").
define("gliffy/confluence/versionselection/versionSelectionController", [
    "jquery",
    "gliffy/url",
    "gliffy/confluence/pageFacade",
    "gliffy/confluence/versionselection/versionSelectionDialogController"
], function($, url, pageFacade, versionSelectionDialogController) {
    "use strict";

    // check for edited pinned version local storage "cookie"
    var checkForEdit = function () {
        var diagramEditedDataString = window.localStorage.getItem("com.gliffy.confluence.diagram.edited");
        if (diagramEditedDataString) {
            window.localStorage.removeItem("com.gliffy.confluence.diagram.edited");
            var data = JSON.parse(diagramEditedDataString);
            if (data) {
                // Execute only when there is an element that matches the data.referencePageId parameter.
                var parsedUrlParameters = url.parse(data.url).queryParams;
                var attachmentVersion = 0;
                if (parsedUrlParameters.originalAttachmentVersion) {
                    attachmentVersion = parseInt(parsedUrlParameters.originalAttachmentVersion);
                } else if (parsedUrlParameters.attachmentVersion) {
                    attachmentVersion = parseInt(parsedUrlParameters.attachmentVersion);
                }

                var diagramReferencesThatMatch = pageFacade.getDiagramReferences().filter(function (diagramReference) {
                    // TODO: GCONF-2181 This will probably have issues with linked diagrams.
                    return (diagramReference.name === parsedUrlParameters.name);
                });
                var isPinned = parsedUrlParameters.isPinned === "true" ? true : false;
                if (attachmentVersion > 0 && isPinned && (parsedUrlParameters.inline === "true" || diagramReferencesThatMatch.length > 0)) {
                    var diagramReference = {
                        ownerPageId: parsedUrlParameters.ceoid,
                        name: parsedUrlParameters.name,
                        version: attachmentVersion
                    };

                    versionSelectionDialogController.showUnpinMacroDiagramVersionDialog({
                        ownerPageId: diagramReference.ownerPageId,
                        diagramName: diagramReference.name,
                        attachmentVersion: diagramReference.version,
                        referencePageId: AJS.params.pageId,
                        contextPath: AJS.Confluence.getContextPath(),
                        onComplete: function (pinnedVersionWasSelected) {
                            if (!pinnedVersionWasSelected) {
                                pageFacade.unpinDiagramReferenceVersion(diagramReference);
                            }
                        }
                    });
                }
            }
        }
    }

    AJS.bind("gliffy.confluence.inlineEditorClosed", function () {
        checkForEdit();
    });

    $(function () {
        checkForEdit();
    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-confluence-editor-launcher', location = 'gliffy/confluence/editor/EditorLauncher.js' */
define("gliffy/confluence/editor/editorLauncher",
    [
        "jquery",
        "gliffy/objectValidatorFactory",
        "gliffy/confluence/versionselection/versionSelectionDialogController"
    ],
    function($, objectValidatorFactory, versionSelectionDialogController) {
        "use strict";

        var determineWhetherToDisplayInitialDialog = function(contextPath, diagramName, ownerPageId, attachmentVersion, callback) {
            if (attachmentVersion && attachmentVersion > 0) {
                $.ajax({
                    url: contextPath + '/rest/gliffy/1.0/diagrams/allVersionInformation',
                    type: 'GET',
                    data: {
                        name: diagramName,
                        pageId: ownerPageId
                    },
                    success: function (response) {
                        callback(response.numRevisions !== parseInt(attachmentVersion));
                    },
                    error: function (response) {
                        callback(false);
                    }
                });
            } else {
                callback(false);
            }
        }

        //url: linkUrl,
        //    attachmentVersion: attachmentVersion,
        //    ownerPageId: parsedUrlParameters.ceoid,
        //    referencePageId: parsedUrlParameters.pageId,
        //    diagramName: parsedUrlParameters.name
        return {
            launchEditorFromViewPage: function (parameters) {
                parameters = $.extend({
                    contextPath: AJS.Confluence.getContextPath()
                }, parameters);

                window.open(parameters.url, '_self');
            },
            launchEditorFromEditPage: function(parameters) {
                parameters = $.extend({
                    contextPath: AJS.Confluence.getContextPath()
                }, parameters);
                parameters.isPinned = (parameters.attachmentVersion) ? true : false;
                parameters.attachmentVersion = parameters.attachmentVersion;
                AJS.trigger("gliffy.confluence.launchInlineEditor", [parameters]);
            }
        };
    }
);

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-spinner', location = 'gliffy/GliffySpinner.js' */
/*
    Wrapper to implement spinners in confluence plugin.  Supports the Raphael spinner, and falls back to
    a spinjs spinner if Raphael spinner is not supported.  The spinjs fallback was added because the Editor
    appears to have compatability issues with the Atlassian spinners when running under earlier versions of confluence.
    This feature may be removable when supportfor Confluence 5.1.5 is depricated.

    use:

        //create a spinner object
        var spinner = new GliffySpinner([element to insert the spinner into], [optiond])

        options can be the following:
            inline: boolean. If true the spinner is added into the normal layout.  If false, the spinner is superimposed
                    and centered over the container element
            color: color of the spinner lines.
            radius: radius of the spinner
            other: If this is a spinjs spinner, this following option are also available.  The defaults are set to
                   resemble an Atlassian spinner as mush as possible.
 */


define("GliffySpinner", [
    "thirdparty/spinjs"
], function(SpinJs) {
        "use strict";

        var getZIndex = function(el) {
            var zIndex;
            var i=0;
            do {
                zIndex = $(el).css('z-index');
                el = $(el).parent()[0];
                i++;
            } while (isNaN(zIndex) && el.tagName);
            if (isNaN(zIndex)) {
                zIndex = 0;
            }
            return zIndex;
        };

        var GliffySpinner = function (parent, options) {

            options = options || {};
            options.radius = options.radius || 20;
            options.color = options.color || '#000';

            $(parent).prepend('<span></span>');
            this.container= $(parent).find('span').get(0);
            $(this.container)
                .addClass('gliffy-spinner-container');
            if (options.inline) {
                $(this.container).css('position', 'relative');
                this.inline = true;
            } else {
                var zIndex = getZIndex(parent);
                $(this.container)
                    .css('position', 'absolute')
                    .css('z-index', zIndex+1);
            }
            var r = options.radius;
            options.length = 0.5*r;
            options.radius = 0.5*r;
            options.lines = 12;
            options.corners = 1.0;
            options.width = 0.4*options.length;
            var gliffySpinner = SpinJs();
            var spinner = new gliffySpinner.Spinner(options).spin();
            this.container.appendChild(spinner.el);
            if (!options.inline) {
                $(this.container)
                    .css('left', $(parent).width() / 2 - $(this.container).width() / 2)
                    .css('top', $(parent).height() / 2 - $(this.container).height() / 2);
            }
            $(this.container).hide();

            //function to start/display the spinner
            this.start = function() {

                if ($(this.container).parent().css('position') === 'static') {
                    //absolutely positioned elements are positioned relatively to the nearest POSITIONED ancestor
                    //so make relative if static, position will remain unchanged it
                    if (!this.inline) {
                        $(this.container).parent().css('position', 'relative');
                        this.positioned = true;
                    }
                }
                $(this.container).show();
            };

            //function to stop the spinner
            this.stop = function() {

                if (this.positioned) {
                    $(parent).parent().css('position', 'static');
                    this.positioned = false;
                }
                $(this.container).hide();
            };
        };

        return GliffySpinner;
    });
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-spinner', location = 'thirdparty/spin.js' */
/**
 * Copyright (c) 2011-2014 Felix Gnass
 * Licensed under the MIT license
 * http://spin.js.org/
 *
 * Example:
 var opts = {
      lines: 12,            // The number of lines to draw
    , length: 7,            // The length of each line
    , width: 5,             // The line thickness
    , radius: 10            // The radius of the inner circle
    , scale: 1.0            // Scales overall size of the spinner
    , corners: 1            // Roundness (0..1)
    , color: '#000'         // #rgb or #rrggbb
    , opacity: 1/4          // Opacity of the lines
    , rotate: 0             // Rotation offset
    , direction: 1          // 1: clockwise, -1: counterclockwise
    , speed: 1              // Rounds per second
    , trail: 100            // Afterglow percentage
    , fps: 20               // Frames per second when using setTimeout()
    , zIndex: 2e9           // Use a high z-index by default
    , className: 'spinner'  // CSS class to assign to the element
    , top: '50%'            // center vertically
    , left: '50%'           // center horizontally
    , shadow: false         // Whether to render a shadow
    , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
    , position: 'absolute'  // Element positioning
    }
 var target = document.getElementById('foo')
 var spinner = new Spinner(opts).spin(target)
 */

//modified for almond - Jan Revis@Gliffy
define('thirdparty/spinjs', [

], function() {

    return function() {
        var spinner = new Object();
        (function (root, factory) {

            /* CommonJS */
            if (typeof exports == 'object') module.exports = factory()

            /* AMD module */
            else if (typeof define == 'function' && define.amd) define(factory)

            /* Browser global */
            else root.Spinner = factory()
        }(spinner, function () {
            "use strict";

            var prefixes = ['webkit', 'Moz', 'ms', 'O'] /* Vendor prefixes */
                , animations = {} /* Animation rules keyed by their name */
                , useCssAnimations /* Whether to use CSS animations or setTimeout */
                , sheet
            /* A stylesheet to hold the @keyframe or VML rules. */

            /**
             * Utility function to create elements. If no tag name is given,
             * a DIV is created. Optionally properties can be passed.
             */
            function createEl(tag, prop) {
                var el = document.createElement(tag || 'div')
                    , n

                for (n in prop) el[n] = prop[n]
                return el
            }

            /**
             * Appends children and returns the parent.
             */
            function ins(parent /* child1, child2, ...*/) {
                for (var i = 1, n = arguments.length; i < n; i++) {
                    parent.appendChild(arguments[i])
                }

                return parent
            }

            /**
             * Creates an opacity keyframe animation rule and returns its name.
             * Since most mobile Webkits have timing issues with animation-delay,
             * we create separate rules for each line/segment.
             */
            function addAnimation(alpha, trail, i, lines) {
                var name = ['opacity', trail, ~~(alpha * 100), i, lines].join('-')
                    , start = 0.01 + i / lines * 100
                    , z = Math.max(1 - (1 - alpha) / trail * (100 - start), alpha)
                    , prefix = useCssAnimations.substring(0, useCssAnimations.indexOf('Animation')).toLowerCase()
                    , pre = prefix && '-' + prefix + '-' || ''

                if (!animations[name]) {
                    sheet.insertRule(
                        '@' + pre + 'keyframes ' + name + '{' +
                        '0%{opacity:' + z + '}' +
                        start + '%{opacity:' + alpha + '}' +
                        (start + 0.01) + '%{opacity:1}' +
                        (start + trail) % 100 + '%{opacity:' + alpha + '}' +
                        '100%{opacity:' + z + '}' +
                        '}', sheet.cssRules.length)

                    animations[name] = 1
                }

                return name
            }

            /**
             * Tries various vendor prefixes and returns the first supported property.
             */
            function vendor(el, prop) {
                var s = el.style
                    , pp
                    , i

                prop = prop.charAt(0).toUpperCase() + prop.slice(1)
                if (s[prop] !== undefined) return prop
                for (i = 0; i < prefixes.length; i++) {
                    pp = prefixes[i] + prop
                    if (s[pp] !== undefined) return pp
                }
            }

            /**
             * Sets multiple style properties at once.
             */
            function css(el, prop) {
                for (var n in prop) {
                    el.style[vendor(el, n) || n] = prop[n]
                }

                return el
            }

            /**
             * Fills in default values.
             */
            function merge(obj) {
                for (var i = 1; i < arguments.length; i++) {
                    var def = arguments[i]
                    for (var n in def) {
                        if (obj[n] === undefined) obj[n] = def[n]
                    }
                }
                return obj
            }

            /**
             * Returns the line color from the given string or array.
             */
            function getColor(color, idx) {
                return typeof color == 'string' ? color : color[idx % color.length]
            }

            // Built-in defaults

            var defaults = {
                lines: 12             // The number of lines to draw
                , length: 7             // The length of each line
                , width: 5              // The line thickness
                , radius: 10            // The radius of the inner circle
                , scale: 1.0            // Scales overall size of the spinner
                , corners: 1            // Roundness (0..1)
                , color: '#000'         // #rgb or #rrggbb
                , opacity: 1 / 4          // Opacity of the lines
                , rotate: 0             // Rotation offset
                , direction: 1          // 1: clockwise, -1: counterclockwise
                , speed: 1              // Rounds per second
                , trail: 100            // Afterglow percentage
                , fps: 20               // Frames per second when using setTimeout()
                , zIndex: 2e9           // Use a high z-index by default
                , className: 'spinner'  // CSS class to assign to the element
                , top: '50%'            // center vertically
                , left: '50%'           // center horizontally
                , shadow: false         // Whether to render a shadow
                , hwaccel: false        // Whether to use hardware acceleration (might be buggy)
                , position: 'absolute'  // Element positioning
            }

            /** The constructor */
            function Spinner(o) {
                this.opts = merge(o || {}, Spinner.defaults, defaults)
            }

            // Global defaults that override the built-ins:
            Spinner.defaults = {}

            merge(Spinner.prototype, {
                /**
                 * Adds the spinner to the given target element. If this instance is already
                 * spinning, it is automatically removed from its previous target by calling
                 * stop() internally.
                 */
                spin: function (target) {
                    this.stop()

                    var self = this
                        , o = self.opts
                        , el = self.el = createEl(null, {className: o.className})

                    css(el, {
                        position: o.position
                        , width: 0
                        , zIndex: o.zIndex
                        , left: o.left
                        , top: o.top
                    })

                    if (target) {
                        target.insertBefore(el, target.firstChild || null)
                    }

                    el.setAttribute('role', 'progressbar')
                    self.lines(el, self.opts)

                    if (!useCssAnimations) {
                        // No CSS animation support, use setTimeout() instead
                        var i = 0
                            , start = (o.lines - 1) * (1 - o.direction) / 2
                            , alpha
                            , fps = o.fps
                            , f = fps / o.speed
                            , ostep = (1 - o.opacity) / (f * o.trail / 100)
                            , astep = f / o.lines

                            ;
                        (function anim() {
                            i++
                            for (var j = 0; j < o.lines; j++) {
                                alpha = Math.max(1 - (i + (o.lines - j) * astep) % f * ostep, o.opacity)

                                self.opacity(el, j * o.direction + start, alpha, o)
                            }
                            self.timeout = self.el && setTimeout(anim, ~~(1000 / fps))
                        })()
                    }
                    return self
                }

                /**
                 * Stops and removes the Spinner.
                 */
                , stop: function () {
                    var el = this.el
                    if (el) {
                        clearTimeout(this.timeout)
                        if (el.parentNode) el.parentNode.removeChild(el)
                        this.el = undefined
                    }
                    return this
                }

                /**
                 * Internal method that draws the individual lines. Will be overwritten
                 * in VML fallback mode below.
                 */
                , lines: function (el, o) {
                    var i = 0
                        , start = (o.lines - 1) * (1 - o.direction) / 2
                        , seg

                    function fill(color, shadow) {
                        return css(createEl(), {
                            position: 'absolute'
                            ,
                            width: o.scale * (o.length + o.width) + 'px'
                            ,
                            height: o.scale * o.width + 'px'
                            ,
                            background: color
                            ,
                            boxShadow: shadow
                            ,
                            transformOrigin: 'left'
                            ,
                            transform: 'rotate(' + ~~(360 / o.lines * i + o.rotate) + 'deg) translate(' + o.scale * o.radius + 'px' + ',0)'
                            ,
                            borderRadius: (o.corners * o.scale * o.width >> 1) + 'px'
                        })
                    }

                    for (; i < o.lines; i++) {
                        seg = css(createEl(), {
                            position: 'absolute'
                            ,
                            top: 1 + ~(o.scale * o.width / 2) + 'px'
                            ,
                            transform: o.hwaccel ? 'translate3d(0,0,0)' : ''
                            ,
                            opacity: o.opacity
                            ,
                            animation: useCssAnimations && addAnimation(o.opacity, o.trail, start + i * o.direction, o.lines) + ' ' + 1 / o.speed + 's linear infinite'
                        })

                        if (o.shadow) ins(seg, css(fill('#000', '0 0 4px #000'), {top: '2px'}))
                        ins(el, ins(seg, fill(getColor(o.color, i), '0 0 1px rgba(0,0,0,.1)')))
                    }
                    return el
                }

                /**
                 * Internal method that adjusts the opacity of a single line.
                 * Will be overwritten in VML fallback mode below.
                 */
                , opacity: function (el, i, val) {
                    if (i < el.childNodes.length) el.childNodes[i].style.opacity = val
                }

            })


            function initVML() {

                /* Utility function to create a VML tag */
                function vml(tag, attr) {
                    return createEl('<' + tag + ' xmlns="urn:schemas-microsoft.com:vml" class="spin-vml">', attr)
                }

                // No CSS transforms but VML support, add a CSS rule for VML elements:
                sheet.addRule('.spin-vml', 'behavior:url(#default#VML)')

                Spinner.prototype.lines = function (el, o) {
                    var r = o.scale * (o.length + o.width)
                        , s = o.scale * 2 * r

                    function grp() {
                        return css(
                            vml('group', {
                                coordsize: s + ' ' + s
                                , coordorigin: -r + ' ' + -r
                            })
                            , {width: s, height: s}
                        )
                    }

                    var margin = -(o.width + o.length) * o.scale * 2 + 'px'
                        , g = css(grp(), {position: 'absolute', top: margin, left: margin})
                        , i

                    function seg(i, dx, filter) {
                        ins(
                            g
                            , ins(
                                css(grp(), {rotation: 360 / o.lines * i + 'deg', left: ~~dx})
                                , ins(
                                    css(
                                        vml('roundrect', {arcsize: o.corners})
                                        , {
                                            width: r
                                            , height: o.scale * o.width
                                            , left: o.scale * o.radius
                                            , top: -o.scale * o.width >> 1
                                            , filter: filter
                                        }
                                    )
                                    , vml('fill', {color: getColor(o.color, i), opacity: o.opacity})
                                    , vml('stroke', {opacity: 0}) // transparent stroke to fix color bleeding upon opacity change
                                )
                            )
                        )
                    }

                    if (o.shadow)
                        for (i = 1; i <= o.lines; i++) {
                            seg(i, -2, 'progid:DXImageTransform.Microsoft.Blur(pixelradius=2,makeshadow=1,shadowopacity=.3)')
                        }

                    for (i = 1; i <= o.lines; i++) seg(i)
                    return ins(el, g)
                }

                Spinner.prototype.opacity = function (el, i, val, o) {
                    var c = el.firstChild
                    o = o.shadow && o.lines || 0
                    if (c && i + o < c.childNodes.length) {
                        c = c.childNodes[i + o];
                        c = c && c.firstChild;
                        c = c && c.firstChild
                        if (c) c.opacity = val
                    }
                }
            }

            if (typeof document !== 'undefined') {
                sheet = (function () {
                    var el = createEl('style', {type: 'text/css'})
                    ins(document.getElementsByTagName('head')[0], el)
                    return el.sheet || el.styleSheet
                }());

                var probe = css(createEl('group'), {behavior: 'url(#default#VML)'})

                if (!vendor(probe, 'transform') && probe.adj) initVML()
                else useCssAnimations = vendor(probe, 'animation')
            }

            return Spinner

        }));
        return spinner;
    }
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-on-confluence-init.js' */
AJS.toInit(function() {

    // Replaces Gliffy attachments with our icon and text
    AJS.$('table.attachments tr').each(function(trIndex, trElement) {
        AJS.$(trElement).find("td.attachment-actions a").each(function(aIndex, aElement) {
            if (AJS.$(aElement).attr("href").indexOf("/plugins/gliffy/view") != -1) {
                AJS.$(trElement).find("td.filename-column span")
                        .removeClass("icon-file-xml icon-file-unknown")
                        .addClass("gliffy-document-icon")
                        .attr("title", "Gliffy File")
                        .text("Gliffy File");
            }
        });
    });
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-blueprint-registration.js' */
AJS.toInit(function() {

    //moved from gliffy-on-confluence-init.js so we can include this in both the global and admin web contexts
    if (Confluence && Confluence.Blueprint && Confluence.Blueprint.register){

        //direct to gliffy blank page
        Confluence.Blueprint.register('com.gliffy.integration.confluence:gliffy-blueprint-item-main', function(createDialog, spaceKey, createFunction){
            window.location = Confluence.getContextPath() + "/pages/createpage.action?showGliffyMacro=true&fromCreateDialog=true" +
                "&spaceKey=" + encodeURIComponent(spaceKey) +
                "&newSpaceKey=" + encodeURIComponent(spaceKey) +
                (createDialog.getParentPageId() ? '&fromPageId=' + createDialog.getParentPageId() : '');
        });

        //direct to a template
        var registerTemplate = function(type){
            Confluence.Blueprint.register('com.gliffy.integration.confluence:gliffy-blueprint-item-'+type, function(createDialog, spaceKey, createFunction){
                window.location = Confluence.getContextPath() + "/pages/createpage.action?showGliffyMacro=true&createDiagramType=" + type +
                    "&spaceKey=" + encodeURIComponent(spaceKey) +
                    "&newSpaceKey=" + encodeURIComponent(spaceKey) +
                    (createDialog.getParentPageId() ? '&fromPageId=' + createDialog.getParentPageId() : '');
            });
        };
        var templateCategories = ['org', 'network', 'software'];
        for (var i=0; i<templateCategories.length; i++){
            registerTemplate(templateCategories[i]);
        }



        //To pack dialog
        Confluence.Blueprint.register('com.gliffy.integration.confluence:gliffy-blueprint-item-pack', function(createDialog, spaceKey, createFunction){

            var page = createDialog.addPage("myplugin-step-2"),
                createHandler = function () {
                    // Called when the user clicks the Submit button
                    var title = $('#my-title').val();
                    var myName = $('#my-text-field').val();
                    createFunction(title, { myName: myName });
                };

            //todo: AJS.I18n.getText() doesn't have our keys yet, so need to figure out a solution to localize this
            var html = '<div class="template-select-container-body"><ol class="templates" tabindex="100"><li class="template selected"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-main"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-main/icon"><div class="template-meta"><div class="template-name" title="Gliffy Diagram">Corporate Org Chart</div><div class="template-description" title="Add a blank page with a Gliffy Diagram.">Add a page with a Corporate Org Chart</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Reimbursement Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Add a page with that shows a Reimbursement Process in your organization</div></div></li><li class="template"data-item-module-complete-key="com.gliffy.integration.confluence:gliffy-blueprint-item-pack"><imgclass="template-preview"src="/confluence/s/en_GB-1988229788/4103/31cc10c48352e244f00edd8fa27d95566a28e0c5.1/0.0-SNAPSHOT/_/download/resources/com.gliffy.integration.confluence:gliffy-blueprint-item-pack/icon"><div class="template-meta"><div class="template-name" title="Gliffy Human Resources Pack">Termination Process</div><div class="template-description" title="Choose from a list of diagrams relating to Human Resources.">Shows you how to fire the guy who had ten too many tequila shots at the last company party.</div></div></li></ol></div>';
            page.addHeader("Gliffy Human Resources Pack")
                .addPanel("SinglePanel", html, "singlePanel")
                .addButton("Previous", function (dialog) {
                    dialog.prevPage();
                    dialog.page.pop(); // remove this page / step when we move back.
                }, "")
                .addButton("Create", createHandler, "aui-button-primary create-dialog-create-button")
                .addLink("Close", function (dialog) {
                    dialog.remove();
                }, "");
            page.getPanel(0).setPadding(0);
            /* focus first text field */
            $("#my-title").focus();
            /* submit form if user hits enter inside any text field */
            $("#myplugin-form").submit(function () {
                createHandler(createDialog);
                return false;
            });
            return false;
    //            window.location = Confluence.getContextPath() + "/pages/createpage.action?showGliffyMacro=true" +
    //                "&spaceKey=" + encodeURIComponent(spaceKey) +
    //                "&newSpaceKey=" + encodeURIComponent(spaceKey);

        });
    }

});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'js/gliffy-footer.js' */
AJS.toInit(function() {

    // AJS.template is not available until 3.0
    if (AJS.version >= "3.0") {
        // Adds markup to the global footer
        var poweredByNode = AJS.$("#poweredby:visible");
        if (poweredByNode.length > 0) {
            poweredByNode.before(AJS.template.load("gliffy-webpanel-footer"));
        }
    }

});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.gliffy.integration.confluence:gliffy-global-resources', location = 'gliffy/confluence/ContextFinalizer.js' */
/**
 * Exists to require, and therefore execute, application-level bits like DOM controllers.
 * This must be included as the final resource of the web-resource definition
 */
;(function($, apexModuleManager) {
    // Wait for DOM to be loaded before instantiating apex modules.
    $(function () {
        apexModuleManager.instantiateAll();
        apexModuleManager.reset();
    });
})(require('jquery'), require('gliffy/amd/apexModuleManager'));


}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:help-dialog-extension', location = '/jira/help-dialog.js' */
if(Confluence.KeyboardShortcuts){Confluence.KeyboardShortcuts.Editor.push({context:"editor.actions",descKey:"Insert Jira Issue/Filter"+":",keys:[["Ctrl+Shift+J"]]})};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-mentions-plugin:help-dialog-extension', location = 'js/help-dialog.js' */
AJS.toInit(function($) {
    // Add the shortcut to the shortcuts dialog
    Confluence.KeyboardShortcuts && Confluence.KeyboardShortcuts.Autoformat.push(
        {
            action: "@",
            context: "autoformat.autocomplete",
            description: "Mention"
        });
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.dialog2', location = 'aui.chunk.8dfc581e537092369347--79cee1339050bf73f760.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.dialog2"],{"0+IH":function(i,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.dialog2=void 0;var t=a("p4ys");Object.defineProperty(e,"dialog2",{enumerable:!0,get:function(){return function(i){return i&&i.__esModule?i:{default:i}}(t).default}}),a("AehQ"),a("ZO0i")},ZO0i:function(i,e,a){},p4ys:function(i,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var t=s(a("+x/D")),u=s(a("TmQU")),n=s(a("KloK")),o=s(a("jEnx")),l=s(a("6RZY")),d=s(a("+ay7"));function s(i){return i&&i.__esModule?i:{default:i}}var f={"aui-focus":"false","aui-blanketed":"true"};var c='\n        <section role="dialog" class="aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="true">\n            <header class="aui-dialog2-header">\n                <h2 class="aui-dialog2-header-main"></h2>\n                <a class="aui-dialog2-header-close">\n                    <span class="aui-icon aui-icon-small aui-iconfont-close-dialog">Close</span>\n                </a>\n            </header>\n            <div class="aui-dialog2-content"></div>\n            <footer class="aui-dialog2-footer"></footer>\n        </section>';function r(i){this.$el=i?(0,t.default)(i):(0,t.default)(c),function(i){t.default.each(f,function(e,a){var t="data-"+e;i[0].hasAttribute(t)||i.attr(t,a)})}(this.$el)}r.prototype.on=function(i,e){return(0,o.default)(this.$el).on(i,e),this},r.prototype.off=function(i,e){return(0,o.default)(this.$el).off(i,e),this},r.prototype.show=function(){return(0,o.default)(this.$el).show(),this},r.prototype.hide=function(){return(0,o.default)(this.$el).hide(),this},r.prototype.remove=function(){return(0,o.default)(this.$el).remove(),this},r.prototype.isVisible=function(){return(0,o.default)(this.$el).isVisible()};var h=(0,l.default)("dialog2",r);h.on=function(i,e){return o.default.on(i,".aui-dialog2",e),this},h.off=function(i,e){return o.default.off(i,".aui-dialog2",e),this},(0,t.default)(document).on("click keydown",".aui-dialog2-header-close",function(i){("click"===i.type||i.keyCode===d.default.ENTER||i.keyCode===d.default.SPACE)&&(i.preventDefault(),h((0,t.default)(i.target).closest(".aui-dialog2")).hide())}),h.on("show",function(i,e){e.find(".aui-dialog2-header-close").attr("tabindex",0);var a;[".aui-dialog2-content",".aui-dialog2-footer",".aui-dialog2-header"].some(function(i){return(a=e.find(i).find(":aui-tabbable")).length}),a&&a.first().focus()}),h.on("hide",function(i,e){var a=(0,o.default)(e);e.data("aui-remove-on-hide")&&a.remove()}),(0,u.default)("aui/dialog2",h),(0,n.default)("dialog2",h),e.default=h,i.exports=e.default}},[["0+IH","runtime","aui.splitchunk.vendors--e54c7c7304","aui.splitchunk.172ffb6da7","aui.splitchunk.b0831cc7d0","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.54d3f16c20","aui.splitchunk.e54c7c7304","aui.splitchunk.f5828f5ab9","aui.splitchunk.fb15cffa72","aui.splitchunk.f673ef53ac","aui.splitchunk.8659b532c1","aui.splitchunk.d0110a864f","aui.splitchunk.afa5039e04","aui.splitchunk.bff3715233","aui.splitchunk.c750721820","aui.splitchunk.6d6f245ed3","aui.splitchunk.5b8c290363"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/js/page-loading-indicator.js' */
define("confluence/page-loading-indicator",["jquery","underscore","ajs","confluence/templates"],function(c,g,a,h){return function(b){function d(){return c(".confluence-page-loading-blanket",b)}function e(){return c(".confluence-loading-indicator",b)}return{show:function(){0===d().length&&c(b).append(h.pageLoadingIndicator());d().show();e().spin({lines:12,length:8,width:4,radius:10,trail:60,speed:1.5,color:"#F0F0F0"})},hide:function(){e().stop();d().hide()},showUntilResolved:function(c,b){this.show();
c.always(g.bind(this.hide,this));b&&c.fail(function(){a.messages.error(".confluence-page-loading-errors",{body:b})})},showUntilDialogVisible:function(b,d){var f=this,e=d||"An error has occurred connecting to the server. Please try again.",g=c(".aui-dialog:visible"),h=c(".aui-dialog2:visible");!g.length&&!h.length&&f.show();b.always(f.hide).fail(function(){a.messages.error(".confluence-page-loading-errors",{body:e})});a.bind("show.dialog",function i(){a.unbind("show.dialog",i);f.hide()});if(null!=a.dialog2&&void 0!=a.dialog2)a.dialog2.on("show",
function j(){a.dialog2.off("show",j);f.hide()})},destroy:function(){b.remove(".confluence-page-loading-blanket")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence/page-loading-indicator","Confluence.PageLoadingIndicator");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-loading-indicator', location = '/includes/soy/page-loading-indicator.soy' */
// This file was automatically generated from page-loading-indicator.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }


Confluence.Templates.pageLoadingIndicator = function(opt_data, opt_ignored) {
  return '<div class="confluence-page-loading-errors"></div><div class="confluence-page-loading-blanket aui-blanket" aria-hidden="false"><div class="confluence-loading-indicator"></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.pageLoadingIndicator.soyTemplateName = 'Confluence.Templates.pageLoadingIndicator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/deferred-dialog-loader.js' */
define("confluence/deferred-dialog-loader",["underscore","jquery","ajs","confluence/page-loading-indicator","confluence/api/event"],function(c,d,i,j,b){return function(){var k=j(d("body")),e,g=!1,h=!1,f=function(){g&&h&&e&&(b.trigger(e),e=void 0)};b.bind("page.move.dialog.ready",function(){g=!0;f()});b.bind("blogpost.move.dialog.ready",function(){h=!0;f()});c.each({movePageDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-page-dialog-link",event:"deferred.page-move.tools-menu"},
movePageDialogEditor:{resource:"confluence.web.resources:page-move-resources",selector:"#rte-button-location",event:"deferred.page-move.editor"},moveBlogDialogTools:{resource:"confluence.web.resources:page-move-resources",selector:"#action-move-blogpost-dialog-link",event:"deferred.blog-move.tools-menu"},availableGadgetsHelp:{resource:"com.atlassian.confluence.plugins.gadgets:gadget-directory-resources",selector:"#gadget-directory-link",event:"deferred.available-gadgets.help-menu"},aboutConfluenceHelp:{resource:"confluence.web.resources:about",
selector:"#confluence-about-link",event:"deferred.about-confluence.help-menu"}},function(a){d("body").on("click",a.selector,function(c){var d=a.resource+".requested",f=WRM.require("wr!"+a.resource,function(){"confluence.web.resources:page-move-resources"!==a.resource?b.trigger(a.event):g&&h?b.trigger(a.event):e=a.event});k.showUntilDialogVisible(f);i.Analytics?i.Analytics.triggerPrivacyPolicySafeEvent(d):b.trigger("analyticsEvent",{name:d});c.preventDefault()})})}});
require("confluence/module-exporter").safeRequire("confluence/deferred-dialog-loader",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:deferred-loaders', location = '/includes/js/page-permissions-deferred-loader.js' */
define("confluence/page-permissions-deferred-loader","confluence/dark-features confluence/legacy ajs confluence/page-loading-indicator jquery wrm".split(" "),function(a,b,c,d,e,f){var g=d(e("body"));return function(a){var b=f.require("wr!com.atlassian.confluence.plugins.confluence-page-restrictions-dialog:dialog-resources",function(){c.trigger("deferred.page.permissions")});g.showUntilDialogVisible(b,"There was an error loading the page restrictions. Please try again later.");a.preventDefault()}});
require("confluence/module-exporter").safeRequire("confluence/page-permissions-deferred-loader",function(a){var b=require("ajs");b.toInit(function(c){c("body").on("click","#rte-button-restrictions,#action-page-permissions-link",a);b.bind("system-content-metadata.open-restrictions-dialog",a)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:navigator-context', location = '/includes/js/api/navigator-context.js' */
define("confluence/api/navigator-context",["confluence/meta","document"],function(g,b){var h=function(a){a=d(a);return"undefined"!==typeof a&&0!==a},d=function(a){a=g.get(a);if(!isNaN(a))return Number(a)},i=function(){return!!b.querySelector(".page.view")||!!b.querySelector(".blogpost.view")},e=function(){return!!b.querySelector(".page.edit")||!!b.querySelector(".blogpost.edit")},f=function(){return g.get("content-type")},c=function(){return d("page-id")};return{getCurrent:function(){return e()&&
0===c()&&h("draft-id")?{target:"contentcreate",context:{contentId:d("draft-id"),contentType:f()}}:e()&&!i()&&0!==c()?{target:"contentedit",context:{contentId:c(),contentType:f()}}:!e()&&i()&&h("page-id")?{target:"contentview",context:{contentId:c(),contentType:f()}}:{target:"unknown",context:{}}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.soy' */
// This file was automatically generated from presence.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.HipChat.Presence.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.HipChat == 'undefined') { Confluence.Templates.HipChat = {}; }
if (typeof Confluence.Templates.HipChat.Presence == 'undefined') { Confluence.Templates.HipChat.Presence = {}; }


Confluence.Templates.HipChat.Presence.badge = function(opt_data, opt_ignored) {
  return '<span class="hipchat-status aui-icon aui-icon-small hipchat-icon-' + soy.$$escapeHtml(opt_data.statusCode) + '" data-status="' + soy.$$escapeHtml(opt_data.statusCode) + '" title="' + soy.$$escapeHtml(opt_data.statusMessage) + '">' + soy.$$escapeHtml(opt_data.statusMessage) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.badge.soyTemplateName = 'Confluence.Templates.HipChat.Presence.badge';
}


Confluence.Templates.HipChat.Presence.chatBar = function(opt_data, opt_ignored) {
  return '<div class="hipchat-chatbar aui-buttons"><button class="aui-button hipchat-chat" title="' + soy.$$escapeHtml('Unable to start chat as this user is not known in Hipchat.') + '" aria-disabled="true"><span><span class="aui-icon aui-icon-small hipchat-icon-chat">' + soy.$$escapeHtml('Chat') + '</span></span></button><button class="aui-button hipchat-voice" title="' + soy.$$escapeHtml('Unable to start voice calls as this user is not known in Hipchat.') + '" aria-disabled="true" data-call-type="voice"><span><span class="aui-icon aui-icon-small hipchat-icon-voice">' + soy.$$escapeHtml('Voice') + '</span></span></button><button class="aui-button hipchat-video" title="' + soy.$$escapeHtml('Unable to start video calls as this user is not known in Hipchat.') + '" aria-disabled="true" data-call-type="video"><span><span class="aui-icon aui-icon-small hipchat-icon-video">' + soy.$$escapeHtml('Video') + '</span></span></button></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.HipChat.Presence.chatBar.soyTemplateName = 'Confluence.Templates.HipChat.Presence.chatBar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-hipchat-integration-plugin:hipchat-presence-resources', location = 'presence/presence.js' */
(function(d){var f=AJS.DarkFeatures.isEnabled("hipchat.chatbar");var a={hipChatCall:function(g,h){if(!g){return}return"hipchat://hipchat.com/user/"+encodeURI(g)+(h?"?call="+encodeURI(h):"")}};var c=AJS.contextPath()+"/rest/hipchat/integration/1.0/users/";var b=function(g){return function(j){var i=d(this);var h=i.attr("data-user-id");var k=i.attr("data-caller-id");if(!k){return}var l=i.attr("data-call-type");if(!g&&l){return}window.location.replace(a.hipChatCall(k,l));AJS.trigger("analyticsEvent",{name:"hipchat.chatbar."+(l||"chat"),data:{userId:h}});j.preventDefault()}};var e=function(g){return function(i){if(!i||!i.presence){return}var j=i.userId;var h=i.hipChatUserId;var k;var m;var l=d(g).find(".hipchat-chatbar .aui-button");l.attr("data-user-id",j);l.attr("data-caller-id",h);l.click(b(i.presence.is_online));if(i.presence.is_online){if(i.presence.show==="xa"||i.presence.show==="away"){k="away";m="Away"}else{if(i.presence.show==="dnd"){k="dnd";m="Do not disturb"}else{k="available";m="Available"}}l.filter(".hipchat-chat").attr("title","Start chat with this user in Hipchat.").removeAttr("aria-disabled");l.filter(".hipchat-voice").attr("title","Start a voice call with this user in Hipchat.").removeAttr("aria-disabled");l.filter(".hipchat-video").attr("title","Start a video call with this user in Hipchat.").removeAttr("aria-disabled")}else{k="offline";m="Offline";l.filter(".hipchat-chat").attr("title","Start chat with this user in Hipchat.").removeAttr("aria-disabled");l.filter(".hipchat-voice").attr("title","Unable to start voice calls as this user is not known in Hipchat.");l.filter(".hipchat-video").attr("title","Unable to start video calls as this user is not known in Hipchat.")}if(i.presence.status){m+=" ("+i.presence.status+")"}d("div.values",g).append(Confluence.Templates.HipChat.Presence.badge({statusCode:k,statusMessage:m}));AJS.trigger("analyticsEvent",{name:"hipchat.presence.user.found",data:{userId:i.userId}})}};d(document).bind("ajaxComplete",function(i,g,h){if(/userinfopopup\.action/.test(h.url)){d.each(d(".vcard"),function(n,p){var m=d(p);var k=m.closest(".contents");var l=k.find(".profile-macro").first();var o=k.find(".actions").first();if(l.hasClass("hipchat-status-applied")||!o.length){return}l.addClass("hipchat-status-applied");if(f){o.addClass("hipchat-chatbar-support");o.append(Confluence.Templates.HipChat.Presence.chatBar());o.find(".ajs-menu-bar").addClass("aui-buttons");o.find(".ajs-button > a").addClass("aui-button");o.find(".user-popup-more").addClass("aui-button");o.find(".user-popup-more > span > span").addClass("aui-icon aui-icon-small aui-iconfont-more").text("")}var q=d(".userLogoLink",m).attr("data-username");var j=c+encodeURIComponent(q);d.getJSON(j,e(k)).fail(function(t){if(t.status===404){try{var r=JSON.parse(t.responseText);if(r.userId){AJS.trigger("analyticsEvent",{name:"hipchat.presence.user.unknown",data:{userId:r.userId}})}}catch(s){}}})})}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/first-time-tooptip.js' */
AJS.bind("sidebar.finished-loading",function(){var a=AJS.Meta.get("blueprint-index-popup-key");AJS.debug("Index key for "+a);if(a){Confluence.Blueprint.showIndexPagePopup(a)}});Confluence.Blueprint=AJS.$.extend(Confluence.Blueprint,{showIndexPagePopup:function(b){var d=function(i){return function(l,j,k){l.html(Confluence.Templates.Blueprints.sidebarIndexPagePopup({indexPageTitle:i.toLowerCase()}));k()}};var a=AJS.$(AJS.$("li.blueprint."+b)[0]);var h=a.text();var g=AJS.$(".icon",a);var f="blueprintIndexSidebarPopup";var c=AJS.InlineDialog(g.is(":visible")?g:AJS.$(".acs-nav-sections .quick-links-section"),f,d(h),{addActiveClass:false,hideDelay:null,noBind:true});AJS.$(document).bind("showLayer",function(i){var j=f+".inline-dialog-check";AJS.$("body").unbind("click."+j)});c.show();var e=function(i){AJS.$(document).on("click","#dismiss-index-popup",function(){i.hide();return false})}(c);AJS.bind("quickedit.success",function(){c.hide()})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:blueprint-first-time-tooltip-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/sidebar-index-page-popup.soy' */
// This file was automatically generated from sidebar-index-page-popup.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }


Confluence.Templates.Blueprints.sidebarIndexPagePopup = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml(AJS.format('Find your {0} here',opt_data.indexPageTitle)) + '</h2><p>' + soy.$$escapeHtml(AJS.format('You\x27\x27ve created a {0} page. A shortcut in your sidebar has been added where you can find other {0} in this space.',opt_data.indexPageTitle)) + '</p><br/><form>' + aui.buttons.button({text: 'Dismiss', id: 'dismiss-index-popup'}) + '</form>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.sidebarIndexPagePopup.soyTemplateName = 'Confluence.Templates.Blueprints.sidebarIndexPagePopup';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/js/create-from-template-macro.js' */
AJS.toInit(function(b){b(document).tooltip({live:'.create-from-template-button[aria-disabled="true"]',gravity:"n",title:"data-tooltip",delayIn:250,delayOut:0});var a=b(".create-from-template-button");a.each(function(){var c=b(this);if(c.attr("aria-disabled")!=="true"){c.click(function(){c.addClass("launching-dialog");Confluence.Blueprint.loadDialogAndOpenTemplate(c.data());return false})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-create-content-plugin:create-from-template-resources', location = 'com/atlassian/confluence/plugins/createcontent/soy/create-from-template-macro.soy' */
// This file was automatically generated from create-from-template-macro.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Blueprints.CreateFromTemplate.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Blueprints == 'undefined') { Confluence.Templates.Blueprints = {}; }
if (typeof Confluence.Templates.Blueprints.CreateFromTemplate == 'undefined') { Confluence.Templates.Blueprints.CreateFromTemplate = {}; }


Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate = function(opt_data, opt_ignored) {
  return '<a class=\'aui-button create-from-template-button\'' + ((! opt_data.hasCreatePermission) ? 'aria-disabled=\'true\' data-tooltip="' + soy.$$escapeHtml('Sorry, you don\x27t have permission to create content. Contact your space administrator to request access.') + '"' : '') + 'data-space-key=\'' + soy.$$escapeHtml(opt_data.spaceKey) + '\' href=\'' + soy.$$escapeHtml(opt_data.createContentUrl) + '\'' + ((opt_data.title) ? 'data-title=\'' + soy.$$escapeHtml(opt_data.title) + '\'' : '') + ((opt_data.templateId) ? 'data-template-id=\'' + soy.$$escapeHtml(opt_data.templateId) + '\'' : '') + ((opt_data.contentBlueprintId) ? 'data-content-blueprint-id=\'' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '\'' : '') + '>' + soy.$$escapeHtml(opt_data.buttonLabel) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate.soyTemplateName = 'Confluence.Templates.Blueprints.CreateFromTemplate.macroTemplate';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = 'templates/status.soy' */
// This file was automatically generated from status.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace JIRA.Template.Util.Issue.Status.
 */

if (typeof JIRA == 'undefined') { var JIRA = {}; }
if (typeof JIRA.Template == 'undefined') { JIRA.Template = {}; }
if (typeof JIRA.Template.Util == 'undefined') { JIRA.Template.Util = {}; }
if (typeof JIRA.Template.Util.Issue == 'undefined') { JIRA.Template.Util.Issue = {}; }
if (typeof JIRA.Template.Util.Issue.Status == 'undefined') { JIRA.Template.Util.Issue.Status = {}; }


JIRA.Template.Util.Issue.Status.issueStatusResolver = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.issueStatus) ? '<span class="aui-icon aui-icon-small aui-iconfont-help jira-issue-status-render-error" title="' + soy.$$escapeHtml('No issue status information was provided') + '"></span>' : (opt_data.issueStatus.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatus(opt_data) : JIRA.Template.Util.Issue.Status.iconStatus({name: opt_data.issueStatus.name, iconUrl: opt_data.issueStatus.iconUrl, description: opt_data.issueStatus.description, isCompact: opt_data.isCompact}));
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatusResolver.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatusResolver';
}


JIRA.Template.Util.Issue.Status.iconStatus = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml(opt_data.iconUrl) + '" width="16" height="16" alt="' + soy.$$escapeHtml(opt_data.name) + '" title="' + soy.$$escapeHtml(opt_data.name) + ((opt_data.description) ? ' - ' + soy.$$escapeHtml(opt_data.description) : '') + '" class="jira-issue-status-icon">' + ((! opt_data.isCompact) ? ' ' + soy.$$escapeHtml(opt_data.name) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.iconStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.iconStatus';
}


JIRA.Template.Util.Issue.Status.issueStatus = function(opt_data, opt_ignored) {
  return '' + JIRA.Template.Util.Issue.Status.statusLozenge({name: opt_data.issueStatus.name, categoryKey: opt_data.issueStatus.statusCategory.key, colorName: opt_data.issueStatus.statusCategory.colorName, description: opt_data.issueStatus.description, isSubtle: opt_data.isSubtle, isCompact: opt_data.isCompact, maxWidth: opt_data.maxWidth});
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.issueStatus.soyTemplateName = 'JIRA.Template.Util.Issue.Status.issueStatus';
}


JIRA.Template.Util.Issue.Status.statusLozenge = function(opt_data, opt_ignored) {
  var output = '';
  var maxWidth__soy46 = opt_data.maxWidth ? opt_data.maxWidth : 'medium';
  var tooltipContent__soy47 = '<span class="jira-issue-status-tooltip-title">' + soy.$$escapeHtml(opt_data.name) + '</span>' + ((opt_data.description) ? '<br><span class="jira-issue-status-tooltip-desc">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '');
  output += '<span class=" jira-issue-status-lozenge aui-lozenge ' + JIRA.Template.Util.Issue.Status.statusLozengeClasses(opt_data) + ((opt_data.isSubtle && ! opt_data.isCompact) ? ' aui-lozenge-subtle' : '') + ((opt_data.isCompact) ? ' jira-issue-status-lozenge-compact' : '') + ' jira-issue-status-lozenge-max-width-' + soy.$$escapeHtml(maxWidth__soy46) + '" data-tooltip="' + soy.$$escapeHtml(tooltipContent__soy47) + '">' + soy.$$escapeHtml(opt_data.name) + '</span>';
  return output;
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozenge.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozenge';
}


JIRA.Template.Util.Issue.Status.statusLozengeClasses = function(opt_data, opt_ignored) {
  return 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.colorName ? opt_data.colorName : 'medium-gray') + ' ' + ((opt_data.categoryKey) ? 'jira-issue-status-lozenge-' + soy.$$escapeHtml(opt_data.categoryKey) : '');
};
if (goog.DEBUG) {
  JIRA.Template.Util.Issue.Status.statusLozengeClasses.soyTemplateName = 'JIRA.Template.Util.Issue.Status.statusLozengeClasses';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.issue-status-plugin:issue-status-resources', location = '/js/issue-status-plugin.js' */
AJS.$(function(){if(AJS.$.fn.tooltip){AJS.$(".jira-issue-status-lozenge[data-tooltip]").tooltip({aria:true,gravity:AJS.$.fn.tipsy.autoWE,delayIn:100,html:true,live:true,title:"data-tooltip",className:"jira-issue-status-tooltip"})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = 'soy/jira-metadata.soy' */
// This file was automatically generated from jira-metadata.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Metadata.Jira.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Metadata == 'undefined') { Confluence.Templates.Metadata = {}; }
if (typeof Confluence.Templates.Metadata.Jira == 'undefined') { Confluence.Templates.Metadata.Jira = {}; }


Confluence.Templates.Metadata.Jira.metadata = function(opt_data, opt_ignored) {
  var output = '<div id="jira-metadata-dialog" class="rendered-content"><h2 class="title">' + soy.$$escapeHtml('Jira links') + '</h2><div class="items-section">';
  var groupList6 = opt_data.groups;
  var groupListLen6 = groupList6.length;
  for (var groupIndex6 = 0; groupIndex6 < groupListLen6; groupIndex6++) {
    var groupData6 = groupList6[groupIndex6];
    if (groupData6.items.length) {
      switch (groupData6.type) {
        case 'ISSUES':
          output += Confluence.Templates.Metadata.Jira.renderGroup({items: groupData6.items, headingText: 'Issues', type: groupData6.type, links: groupData6.links});
          break;
        case 'SPRINTS':
          output += Confluence.Templates.Metadata.Jira.renderGroup({items: groupData6.items, headingText: 'Sprints', type: groupData6.type, links: groupData6.links});
          break;
        case 'VERSIONS':
          output += Confluence.Templates.Metadata.Jira.renderGroup({items: groupData6.items, headingText: 'Versions', type: groupData6.type, links: groupData6.links});
          break;
        case 'EPICS':
          output += Confluence.Templates.Metadata.Jira.renderGroup({items: groupData6.items, headingText: 'Epics', type: groupData6.type, links: groupData6.links});
          break;
      }
    }
  }
  output += '</div>' + Confluence.Templates.Metadata.Jira.renderAuthPrompts({appLinks: opt_data.unauthorisedAppLinks}) + Confluence.Templates.Metadata.Jira.renderJiraErrors(opt_data) + '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.Jira.metadata.soyTemplateName = 'Confluence.Templates.Metadata.Jira.metadata';
}


Confluence.Templates.Metadata.Jira.featureDiscovery = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-feature-discovery"><h2>' + soy.$$escapeHtml('View related Jira items here') + '</h2><p>' + soy.$$escapeHtml('Now you can see which epics, sprints, versions and issues relate to this page.') + '</p><div class="aui-toolbar2" role="toolbar"><div class="aui-toolbar2-inner">' + aui.buttons.button({text: 'Show me', extraClasses: 'showme'}) + aui.buttons.button({text: 'Don\x27t show again', type: 'link', extraClasses: 'close'}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.Jira.featureDiscovery.soyTemplateName = 'Confluence.Templates.Metadata.Jira.featureDiscovery';
}


Confluence.Templates.Metadata.Jira.nometadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Jira links cannot be displayed. Either you do not have correct Jira permissions or the links have been removed.') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.Jira.nometadata.soyTemplateName = 'Confluence.Templates.Metadata.Jira.nometadata';
}


Confluence.Templates.Metadata.Jira.renderAuthPrompts = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.appLinks.length) {
    var param66 = '';
    if (opt_data.appLinks.length == 1) {
      var appLink__soy69 = opt_data.appLinks[0];
      param66 += '<p>' + soy.$$filterNoAutoescape(AJS.format('{0}Login \x26amp; Approve{1} to retrieve data from {2}','<a class="jira-metadata-auth-link" href="#" data-href="' + appLink__soy69.authorisationUrl + '">','</a>',appLink__soy69.htmlSafeName)) + '</p>';
    } else {
      param66 += '<p>' + soy.$$escapeHtml('Authenticate to retrieve data from the following instances:') + '</p>';
      var appLinkList78 = opt_data.appLinks;
      var appLinkListLen78 = appLinkList78.length;
      for (var appLinkIndex78 = 0; appLinkIndex78 < appLinkListLen78; appLinkIndex78++) {
        var appLinkData78 = appLinkList78[appLinkIndex78];
        param66 += '<div><a class="jira-metadata-auth-link" href="#" data-href="' + soy.$$escapeHtml(appLinkData78.authorisationUrl) + '">' + soy.$$escapeHtml(appLinkData78.name) + '</a></div>';
      }
    }
    output += aui.message.hint({content: param66});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.Jira.renderAuthPrompts.soyTemplateName = 'Confluence.Templates.Metadata.Jira.renderAuthPrompts';
}


Confluence.Templates.Metadata.Jira.renderGroup = function(opt_data, opt_ignored) {
  var output = '<div class="jira-metadata-section ' + soy.$$escapeHtml(opt_data.type) + '-section"><div class="section-label"><span class="icon"></span><span>' + soy.$$escapeHtml(opt_data.headingText) + '</span></div><ul class="jira-metadata-list jira-' + soy.$$escapeHtml(opt_data.type) + '-list">';
  var itemList94 = opt_data.items;
  var itemListLen94 = itemList94.length;
  for (var itemIndex94 = 0; itemIndex94 < itemListLen94; itemIndex94++) {
    var itemData94 = itemList94[itemIndex94];
    output += '<li class="jira-metadata-item"><span class="item-label"><a href="' + soy.$$escapeHtml("/confluence") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(itemData94.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '" title="' + soy.$$escapeHtml(itemData94.name) + '">' + soy.$$escapeHtml(itemData94.name) + '</a>' + ((itemData94.status) ? '&nbsp;' + ((itemData94.status.statusCategory) ? JIRA.Template.Util.Issue.Status.issueStatusResolver({issueStatus: itemData94.status, isSubtle: true}) : '<span class="item-status">(' + soy.$$escapeHtml(itemData94.status.name) + ')</span>') : '') + '</span>' + ((itemData94.description != '') ? '<span class="item-subtext">' + soy.$$escapeHtml(itemData94.description) + '</span>' : '') + '</li>';
  }
  output += '</ul><ul class="jira-metadata-list ' + soy.$$escapeHtml(opt_data.type) + '-more-link">';
  var linkList130 = opt_data.links;
  var linkListLen130 = linkList130.length;
  for (var linkIndex130 = 0; linkIndex130 < linkListLen130; linkIndex130++) {
    var linkData130 = linkList130[linkIndex130];
    output += '<li class="jira-metadata-item"><a href="' + soy.$$escapeHtml("/confluence") + '/plugins/servlet/jira-metadata/redirect?u=' + soy.$$escapeUri(linkData130.url) + '&t=' + soy.$$escapeHtml(opt_data.type) + '&more">' + soy.$$escapeHtml(AJS.format('View {0} more in {1}',linkData130.numItems,linkData130.appName)) + '</a></li>';
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.Jira.renderGroup.soyTemplateName = 'Confluence.Templates.Metadata.Jira.renderGroup';
}


Confluence.Templates.Metadata.Jira.loadingMetadata = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog"><h2 class="title">' + soy.$$escapeHtml('Jira links') + '</h2><div class="spinner-container"><div class="spinner"></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.Jira.loadingMetadata.soyTemplateName = 'Confluence.Templates.Metadata.Jira.loadingMetadata';
}


Confluence.Templates.Metadata.Jira.renderJiraErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.errors.length == 1) {
    var error__soy150 = opt_data.errors[0];
    output += aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata.') + ' ' + soy.$$escapeHtml(error__soy150.errorMessage) + '</p>'});
  } else if (opt_data.errors.length > 1) {
    var param159 = '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata. The following errors occurred:') + '</p><ul>';
    var errorList163 = opt_data.errors;
    var errorListLen163 = errorList163.length;
    for (var errorIndex163 = 0; errorIndex163 < errorListLen163; errorIndex163++) {
      var errorData163 = errorList163[errorIndex163];
      param159 += '<li>' + soy.$$escapeHtml(errorData163.errorMessage) + '</li>';
    }
    param159 += '</ul>';
    output += aui.message.warning({content: param159});
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.Jira.renderJiraErrors.soyTemplateName = 'Confluence.Templates.Metadata.Jira.renderJiraErrors';
}


Confluence.Templates.Metadata.Jira.unknownError = function(opt_data, opt_ignored) {
  return '<div id="jira-metadata-dialog" class="rendered-content">' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to retrieve Jira metadata. Could not connect to Confluence') + '</p>'}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Metadata.Jira.unknownError.soyTemplateName = 'Confluence.Templates.Metadata.Jira.unknownError';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-metadata:confluence-jira-metadata-resources', location = '/js/jira-metadata.js' */
AJS.toInit(function(h){var i="com.atlassian.confluence.plugins.confluence-jira-metadata";var s=false;var o;var l;var q="jira-metadata-dialog";var g=h("#content-metadata-jira");var t;var e="jira-metadata-discovery";var r=AJS.Meta.get("jira-metadata-count");var k="linked-issues-dropdown";if(r>0){p(r,AJS.Meta.get("jira-metadata-count-incomplete"))}else{if(r==-1){h.ajax({url:AJS.contextPath()+"/rest/jira-metadata/1.0/metadata/aggregate?pageId="+AJS.Meta.get("page-id"),type:"GET",dataType:"json",contentType:"application/json",cache:false,success:function(u){if(u.count>0){p(u.count,u.incomplete)}}})}}function p(v,u){f(v,u);g.removeClass("hidden");if(b()){o=AJS.InlineDialog(g,q,function(x,w,y){AJS.trigger("analytics",{name:"confluence.jira.metadata.expanded"});if(!l||!s){l=x;y();a(x)}else{y()}return false},{hideDelay:null});g.click(function(){if(h("#"+q).is(":visible")){o.hide()}})}if(g&&j()){m();g.one("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k)})}}function f(w,v){if(!v){var u=h("<span/>").addClass("aui-icon aui-icon-small aui-iconfont-jira");h("#content-metadata-jira").text(w==1?"1 Jira link":AJS.format("{0} Jira links",w)).prepend(u)}}function b(){return !g.attr("href")}function m(){t=AJS.InlineDialog(g,e,function(v,u,w){v.html(Confluence.Templates.Metadata.Jira.featureDiscovery());v.find(".showme").on("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k);t.hide();o.show()});v.find(".close").on("click",function(){Confluence.FeatureDiscovery.forPlugin(i).markDiscovered(k);t.hide()});w()},{noBind:true,closeOthers:false,hideDelay:null});t.show();Confluence.FeatureDiscovery.forPlugin(i).addDiscoveryView(k)}function j(){return !AJS.Meta.get("blueprint-index-popup-key")&&Confluence.FeatureDiscovery.forPlugin(i).shouldShow(k)}function a(){d();l.html(Confluence.Templates.Metadata.Jira.loadingMetadata());l.find(".spinner").spin("medium");h.ajax({url:AJS.contextPath()+"/rest/jira-metadata/1.0/metadata?pageId="+AJS.Meta.get("page-id"),type:"GET",dataType:"json",contentType:"application/json",error:function(u){c();l.html(Confluence.Templates.Metadata.Jira.unknownError())},success:function(u){c();s=true;f(u.count,false);var v;if(u.count===0&&!(u.unauthorisedAppLinks&&u.unauthorisedAppLinks.length>0)&&u.errors.length==0){AJS.trigger("analytics",{name:"confluence.jira.metadata.error.no-metadata"});v=Confluence.Templates.Metadata.Jira.nometadata()}else{v=Confluence.Templates.Metadata.Jira.metadata(u)}l.html(v);setTimeout(function(){l.find("#"+q).addClass("show")},0);n()},complete:function(){h("#"+q+" .icon-close").click(function(u){u.stopPropagation();h(this).closest(".closable").remove()})}})}function n(){h(".jira-metadata-auth-link").click(function(u){u.preventDefault();AppLinks.authenticateRemoteCredentials(h(this).data("href"),a,function(){})})}function d(){if(l&&l.height()>0){l.css("height",l.height())}}function c(){l&&l.css("height","")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-fixed-headers:utils', location = '/js/utils/dom.js' */
define("confluence/fh/utils/dom",["jquery","ajs","exports"],function(j,p,i){var q,d,a,n;function k(r){if(k.done&&!r){return}var s="#main .aui-page-panel-outer-content";d=j(s).length!==0?j(s):j("#main");a=j("#header");n=j("#main-header");k.done=true}function f(){var s=p.Meta.get("content-type");if(s==="page"||s==="blogpost"){var r=function(){j(tinymce.activeEditor.getWin().document).find("body#tinymce").addClass("page-edit")};if(tinymce&&tinymce.activeEditor&&j(tinymce.activeEditor.getWin().document).length>0){r()}else{p.bind("init.rte",r)}}}function o(){k();n.css({width:d.outerWidth()-(parseInt(d.css("padding-left"))+parseInt(d.css("padding-right")))})}function c(){k();var r=parseInt(n.css("top"))+n.outerHeight();if(isNaN(r)||r===c.lastValue){return}c.lastValue=r;p.trigger("sticky-table-headers.change.options",{fixedOffset:r,cacheHeaderHeight:true})}function e(t,r,s){if(s){e[s]=e[s]||{};if(r===e[s].lastValue){return}e[s].lastValue=r}t.css({transform:"translateY("+r+"px)","-webkit-transform":"translateY("+r+"px)","-ms-transform":"translateY("+r+"px)"})}function m(u,r,s){var t={};s.forEach(function(v){t[v]=u.css(v)});r.css(t)}var l={mt:"margin-top",mr:"margin-right",ml:"margin-left",mb:"margin-bottom",pt:"padding-top",pr:"padding-right",pl:"padding-left",pb:"padding-bottom",ff:"font-family",fsi:"font-size",fst:"font-style",fw:"font-weight",td:"text-decoration",ls:"letter-spacing",ta:"text-align",c:"color"};l.margin=[l.mt,l.mr,l.ml,l.mb];l.padding=[l.pt,l.pr,l.pl,l.pb];l.font=[l.ff,l.fsi,l.fst,l.fw];function b(){k();if(q){return q}q=j('<div id="main-header-placeholder"></div>');var t=j("#title-text"),s=t.find("a"),r=t.clone().removeAttr("id"),u=r.find("a");m(n,q,l.margin.concat(l.padding));q.css({height:n.outerHeight()});m(t,r,l.font.concat(l.td,l.ls,l.ta,l.pr,l.pb,l.pl,l.mr,l.mb,l.ml));r.css({paddingTop:parseInt(t.css("padding-top"))+Math.round(t.offset().top-n.offset().top)});m(s,u,l.font.concat(l.margin,l.padding,l.font,l.c,l.td,l.ls,l.ta));q.append(r);return q}function g(){q&&q.remove()}function h(t){t=typeof(t)==="string"?t:j(this).attr("href");if(!t){return}k();var s=a.outerHeight();var r=j(t.replace(/(!|\"|\$|%|&|'|\(|\)|\*|\+|,|\.|\/|\:|;|<|=|>|\?|@|\[|\\|\]|\^|`|\{|\||\}|~)/g,"\\$1"));if(r.length){window.scrollTo(0,r.offset().top-s);if(history&&"pushState" in history){history.pushState({},document.title,window.location.pathname+window.location.search+t);return false}}}i.forceInitialize=function(){k(true)};i.addClassToPage=f;i.adjustMainHeaderSize=o;i.updateTableStickyHeaderOption=c;i.translateVertical=e;i.createMainHeaderPlaceHolder=b;i.removeMainHeaderPlaceHolder=g;i.scrollIfAnchor=h});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-fixed-headers:handlers', location = '/js/handlers/page-view-handler.js' */
define("confluence/fh/handlers/page-view-handler",["confluence/fh/utils/dom","jquery","ajs","exports"],function(z,i,m,G){var E,s,D,n,v,d,C,h,e,w,F,r=false,l=false,f=false,j=0,u=0,g=0,y=50,b=100,q="by-hover",t="by-scroll",B="by-other",a=B,o=false;function c(H){if(c.done&&!H){return}E=i("#header");s=i("#main .aui-page-panel-outer-content");s.length===0&&(s=i("#main"));D=i("#main-header");n=i("#action-menu-link");v=z.createMainHeaderPlaceHolder();d=i(".ia-splitter-left .ia-fixed-sidebar");C=D.prop("style");h=s.prop("style");e=Math.round(E.offset().top);w=E.height();F=Math.round(D.offset().top)-w-(parseInt(s.css("padding-top"))+parseInt(D.css("margin-top")));c.done=true}var x=function(){c();var I=i(window).scrollTop();var K=I>e;if(K&&parseInt(d.css("top"))<w){d.css({top:w+"px"})}if(!r&&K){r=true;E.addClass("fixed-header");s.css({marginTop:w+"px"})}else{if(!K){E.removeClass("fixed-header");h.removeProperty("margin-top");r=false}}var O=I>F;if(!l&&O){l=true;D.find("#title-text").hide();D.css({position:"fixed",width:s.outerWidth()-(parseInt(s.css("padding-left"))+parseInt(s.css("padding-right"))),right:0,top:w+"px",marginTop:0,paddingTop:parseInt(s.css("padding-top"))+parseInt(D.css("margin-top")),paddingBottom:parseInt(s.css("padding-top"))+parseInt(D.css("margin-top")),paddingLeft:s.css("padding-left"),paddingRight:s.css("padding-right"),zIndex:b});D.before(z.createMainHeaderPlaceHolder())}else{if(!O){["position","width","right","top","margin-top","padding-top","padding-bottom","padding-left","padding-right","z-index"].forEach(function(P){C.removeProperty(P)});D.removeClass("overlay-header");D.find("#title-text").show();l=false;f=false;z.removeMainHeaderPlaceHolder()}}var M,L,J=D.outerHeight(),H=j-I,N=parseInt(D.css("top"))+H;if(I<=0){g=0;u=0;M=w}else{if(l&&H>0){if(N>w){g=w;u=0;M=w;L=b}else{g+=Math.abs(H);if(g>=y||I<=J){u-=Math.abs(H);M=N;L=b}}if(I>J+y&&!f){D.addClass("overlay-header");f=true}a=t}else{if(l&&H<0){if(N<w-J){g=0;u=J;M=w-J;L=0}else{u+=Math.abs(H);M=N}}}}if(L!==undefined&&M!==undefined){D.css({top:M+"px",zIndex:L})}else{if(M!==undefined){D.css({top:M+"px"})}}if(o){z.translateVertical(n,u,n.attr("id"))}z.updateTableStickyHeaderOption();j=I};function A(){if(!l||u===0){return}u=0;D.addClass("overlay-header");D.css({top:w+"px",zIndex:b});if(o){z.translateVertical(n,u,n.attr("id"))}z.updateTableStickyHeaderOption()}function p(){c();A();a=q}function k(){c();A();m.bind("quick-edit.viewport.saved",function(){E.removeAttr("style");z.removeMainHeaderPlaceHolder()});i(window).off("scroll",x).off("resize.confluence-fixed-headers-responsive");m.trigger("analyticsEvent",{name:"view.edit.transition.edit.button.clicked",data:{method:a}})}G.forceInitialize=function(){c(true)};G.onScrollHandler=x;G.onHoverActionMenuLinkHandler=p;G.onClickEditPageLinkHandler=k;G.isKeepDotDotDotButton=o;G.__getShowMainHeaderBy=function(){return a};G.__getFixedHeader=function(){return r};G.__getFixedMainHeader=function(){return l};G.__setFixedHeader=function(H){r=H};G.__setFixedMainHeader=function(H){l=H};G.__setMainHeaderOverlay=function(H){f=H};G.__setScrollPosition=function(H){j=H};G.__setMovingDistance=function(H){u=H}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-fixed-headers:confluence-fixed-headers-view-content-resources', location = '/js/confluence-fixed-headers.js' */
require(["confluence/fh/utils/dom","confluence/fh/handlers/page-view-handler","ajs","jquery"],function(d,b,a,c){a.toInit(function(){if(!a.Meta.get("content-type")){return}if(c("#main-content").find("style").length>0){return}if(c("body").hasClass("theme-documentation")){return}var e=c("#header"),l=c("#main-header"),i=c("#main"),g=c("#content"),k=c("#editPageLink"),m=c("#action-menu-link");var n=["inline-dialog-notifications-miniview","inline-dialog-confluence-watch","inline-dialog-shareContentPopup","inline-dialog-ap-inline-dialog-content-confstats-connect-dev__confstats-live-watcher","inline-dialog-jira-metadata-dialog"];var j=function(){var p=c('.aui-dropdown2[aria-hidden="false"]');p.length&&c('.aui-dropdown2-trigger[aria-owns="'+p.attr("id")+'"]').trigger("aui-button-invoke");var o=c(".aui-inline-dialog:visible");if(o.length){o=o.filter(function(){var s=c(this);var r=s.attr("id");return s.hasClass("non-persistence-dialog")||n.indexOf(r)!==-1});o.css({display:"none"});var q=".aui-button.active, .aui-nav-imagelink.active";e.find(q).removeClass("active");l.find(q).removeClass("active");document.activeElement.blur()}};var h=new MutationObserver(function(o){d.adjustMainHeaderSize()});h.observe(i[0],{attributes:true,attributeFilter:["style"]});var f=new MutationObserver(function(o){g.css("padding-right")==="0px"&&g.css({paddingRight:"28px"})});f.observe(g[0],{attributes:true,attributeFilter:["style"]});c(window).on("resize.confluence-fixed-headers-responsive",a.debounce(d.adjustMainHeaderSize,100)).on("scroll",b.onScrollHandler).scroll(a.debounceImmediate(j,250));if(b.isKeepDotDotDotButton){i.addClass("floating-action-menu");m.on("hover",b.onHoverActionMenuLinkHandler)}k.click(function(){f&&f.disconnect();b.onClickEditPageLinkHandler()});setTimeout(function(){d.scrollIfAnchor(window.location.hash)});c("body").on("click",'a[href^="#"]',d.scrollIfAnchor)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugin.jslibs:skate-0.12.6', location = 'libs/skate/0.12.6/skate-0.12.6.js' */
(function e(g,c,j){function h(a,k){if(!c[a]){if(!g[a]){var d="function"==typeof require&&require;if(!k&&d)return d(a,!0);if(f)return f(a,!0);d=Error("Cannot find module '"+a+"'");throw d.code="MODULE_NOT_FOUND",d;}d=c[a]={exports:{}};g[a][0].call(d.exports,function(c){var f=g[a][1][c];return h(f?f:c)},d,d.exports,e,g,c,j)}return c[a].exports}for(var f="function"==typeof require&&require,d=0;d<j.length;d++)h(j[d]);return h})({1:[function(b,g,c){Object.defineProperty(c,"__esModule",{value:!0});"use strict";
c.ATTR_IGNORE="data-skate-ignore";c.types={ANY:"act",ATTR:"a",CLASS:"c",NOATTR:"ct",NOCLASS:"at",NOTAG:"ac",TAG:"t"}},{}],2:[function(b,g){g.exports={get:function(c,b){if(c.__SKATE_DATA)return c.__SKATE_DATA[b]},set:function(c,b,h){c.__SKATE_DATA||(c.__SKATE_DATA={});c.__SKATE_DATA[b]=h;return c}}},{}],3:[function(b,g){function c(c){for(var f=c.length,b=0;b<f;b++){var i=c[b],o=i.addedNodes,i=i.removedNodes;o&&(o.length&&!p(o[0].parentNode))&&d(o);i&&i.length&&a(i)}}var j=function(c){return c&&c.__esModule?
c["default"]:c},h=j(b("./globals")),f=b("./lifecycle"),d=f.initElements,a=f.removeElements,k=j(b("./mutation-observer")),p=b("./utils").getClosestIgnoredElement;g.exports={register:function(a){a&&(k.fixIe(),this.unregister());h.observer||(a=new k(c),a.observe(document,{childList:!0,subtree:!0}),h.observer=a);return this},unregister:function(){h.observer&&(h.observer.disconnect(),h.observer=void 0);return this}}},{"./globals":4,"./lifecycle":5,"./mutation-observer":6,"./utils":9}],4:[function(b,g){window.__skate||
(window.__skate={observer:void 0,registry:{}});g.exports=window.__skate},{}],5:[function(b,g,c){function j(o,c,a){if(k.get(o,c.id+":lifecycle:"+a))return!0;k.set(o,c.id+":lifecycle:"+a,!0);return!1}function h(c,a){if(!j(c,a,"created")){m(c,a.prototype,!0);a.template&&a.template(c);var b=function(a,b){return function(f){if(!b)return a(c,f,c);for(var d=f.target;d&&d!==document&&d!==c.parentNode;){if(i.call(d,b))return a(c,f,d);d=d.parentNode}}};"object"===typeof a.events&&l(a.events,function(a,d){var f,
i;i=d.split(" ");f=i.shift();i=i.join(" ");c.addEventListener(f,b(a,i),!!i&&("blur"===f||"focus"===f))});var f=function(i,f,d,b){var k;a.attributes&&a.attributes[f]&&"function"===typeof a.attributes[f][i]?k=a.attributes[f][i]:a.attributes&&"function"===typeof a.attributes[f]?k=a.attributes[f]:"function"===typeof a.attributes&&(k=a.attributes);k&&k(c,{type:i,name:f,newValue:d,oldValue:b})},d,k=c.attributes,h=[],g=k.length;(new p(function(a){a.forEach(function(a){var c,i=a.attributeName,d=k[i];d&&null===
a.oldValue?c="created":d&&null!==a.oldValue?c="updated":d||(c="removed");f(c,i,d?d.value||d.nodeValue:void 0,a.oldValue)})})).observe(c,{attributes:!0,attributeOldValue:!0});for(d=0;d<g;d++)h.push(k[d]);for(d=0;d<g;d++){var n=h[d];f("created",n.nodeName,n.value||n.nodeValue)}a.created&&a.created(c)}}function f(c){for(var i=c.length,d=0;d<i;d++){var b=c[d];if(!(1!==b.nodeType||b.attributes[a])){for(var k=n.getForElement(b),g=k.length,m=0;m<g;m++){var l=b,p=k[m];h(l,p);j(l,p,"attached")||(l.removeAttribute(p.unresolvedAttribute),
l.setAttribute(p.resolvedAttribute,""),p.attached&&p.attached(l))}b=b.childNodes;b.length&&f(b)}}}function d(a){for(var c=a.length,i=0;i<c;i++){var f=a[i];if(1===f.nodeType){d(f.childNodes);for(var b=n.getForElement(f),g=b.length,j=0;j<g;j++){var h=f,m=b[j];m.detached&&m.detached(h);k.set(h,m.id+":lifecycle:attached",!1)}}}}g=function(a){return a&&a.__esModule?a["default"]:a};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var a=b("./constants").ATTR_IGNORE,k=g(b("./data")),p=g(b("./mutation-observer")),
n=g(b("./registry")),b=b("./utils"),m=b.inherit,l=b.objEach,b=window.HTMLElement.prototype,i=b.matches||b.msMatchesSelector||b.webkitMatchesSelector||b.mozMatchesSelector||b.oMatchesSelector;c.triggerCreated=h;c.initElements=f;c.removeElements=d},{"./constants":1,"./data":2,"./mutation-observer":6,"./registry":7,"./utils":9}],6:[function(b,g){function c(a,c){return{addedNodes:null,attributeName:null,attributeNamespace:null,nextSibling:null,oldValue:null,previousSibling:null,removedNodes:null,target:a,
type:c||"childList"}}function j(a,c){var f=a.childNodes;if(f)for(var d=f.length,b=0;b<d;b++){var k=f[b];c(k);j(k,c)}}function h(a){if(n&&!m)return new n(a);this.callback=a;this.elements=[]}var f=b("./utils"),d=f.debounce,a=f.objEach,k=window.HTMLElement.prototype,p=window.HTMLElement.prototype.contains,n=window.MutationObserver||window.WebkitMutationObserver||window.MozMutationObserver,m=!1,l=-1<window.navigator.userAgent.indexOf("Trident");h.fixIe=function(){if(l&&!m){var a=Object.getOwnPropertyDescriptor(k,
"innerHTML");Object.defineProperty(k,"innerHTML",{get:function(){return a.get.call(this)},set:function(c){j(this,function(a){var c=document.createEvent("MutationEvent");c.initMutationEvent("DOMNodeRemoved",!0,!1,null,null,null,null,null);a.dispatchEvent(c)});a.set.call(this,c)}});m=!0}};Object.defineProperty(h,"isFixingIe",{get:function(){return m}});h.prototype={observe:function(a,f){function b(a){h.push(a);n()}var k=this,j,g,h=[],l=[],n=d(function(){for(var b=h.length,d=0;d<b;d++){var n=h[d],r=
n.target;if(r){var n=n.type,q=r.parentNode;if(f.childList&&(f.subtree||q===a)){var s=m&&"DOMNodeRemoved"===n,t=j&&(1!==j.nodeType?!1:j.contains?j.contains(r):p.call(j,r));if(s||!t){if(!g||g.target!==q)l.push(g=c(q));"DOMNodeInserted"===n?(g.addedNodes||(g.addedNodes=[]),g.addedNodes.push(r)):(g.removedNodes||(g.removedNodes=[]),g.removedNodes.push(r));j=r}}}}k.callback(l);h=[];l=[];g=j=void 0}),t={},q=[],u=d(function(){var a=q.length;k.callback(q);q.splice(0,a)}),s={target:a,options:f,insertHandler:b,
removeHandler:b,attributeHandler:function(d){var b=d.target;if(f.attributes&&(f.subtree||b===a)){var k=d.attrName,g=d.prevValue,d=d.newValue,b=c(b,"attributes");b.attributeName=k;f.attributeOldValue&&(b.oldValue=t[k]||g||null);q.push(b);f.attributeOldValue&&(t[k]=d);u()}}};this.elements.push(s);f.childList&&(a.addEventListener("DOMNodeInserted",s.insertHandler),a.addEventListener("DOMNodeRemoved",s.removeHandler));f.attributes&&a.addEventListener("DOMAttrModified",s.attributeHandler);return this},
disconnect:function(){a(this.elements,function(a){a.target.removeEventListener("DOMNodeInserted",a.insertHandler);a.target.removeEventListener("DOMNodeRemoved",a.removeHandler);a.target.removeEventListener("DOMAttrModified",a.attributeHandler)});this.elements=[];return this}};g.exports=h},{"./utils":9}],7:[function(b,g){function c(a,c){return d(j.registry,a)&&-1<j.registry[a].type.indexOf(c)}var j,h=b("./globals");j=h&&h.__esModule?h["default"]:h;var f=b("./constants.js").types,d=b("./utils").hasOwn;
g.exports={clear:function(){j.registry={};return this},getForElement:function(a){var d=a.attributes,b=d.length,g=[],h=d.is,l=h&&(h.value||h.nodeValue),h=a.tagName.toLowerCase(),i=l||h,o;c(i,f.TAG)&&(i=j.registry[i],o=i["extends"],l?h===o&&g.push(i):o||g.push(i));for(l=0;l<b;l++)i=d[l].nodeName,c(i,f.ATTR)&&(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));(d=a.classList)?a=d:(a=a.attributes,a=a["class"]&&a["class"].nodeValue.split(/\s+/)||[]);d=a.length;for(b=0;b<d;b++)i=a[b],c(i,f.CLASS)&&
(i=j.registry[i],o=i["extends"],(!o||h===o)&&g.push(i));return g},has:function(a){return d(j.registry,a)},set:function(a,c){if(this.has(a))throw Error('A definition of type "'+c.type+'" with the ID of "'+a+'" already exists.');j.registry[a]=c;return this},remove:function(a){this.has(a)&&delete j.registry[a];return this}}},{"./constants.js":1,"./globals":4,"./utils":9}],8:[function(b,g){function c(a,b){b=n(b||{},c.defaults);b.id=a;if(k.has(b.id))throw Error('A definition of type "'+b.type+'" with the ID of "'+
a+'" already exists.');k.set(b.id,b);i();h.register(b.remove);if(-1<b.type.indexOf(m.TAG)){var f=b,g=function(){var a;a=f["extends"];var b=f.id;a?(a=document.createElement(a),a.setAttribute("is",b)):a=document.createElement(b);f.prototype=g.prototype;d(a,f);return a};g.prototype=f.prototype;return g}}var j=function(a){return a&&a.__esModule?a["default"]:a},h=j(b("./document-observer")),f=b("./lifecycle"),d=f.triggerCreated,a=f.initElements,k=j(b("./registry")),p=b("./utils"),f=p.debounce,n=p.inherit,
j=j(b("./version")),m=b("./constants").types,l=!!document.attachEvent,i=f(function(){var b=function(){a(document.getElementsByTagName("html"))},c;c=l?"complete"===document.readyState:"interactive"===document.readyState||"complete"===document.readyState;c?b():l?window.addEventListener("load",b):document.addEventListener("DOMContentLoaded",b)});c.init=function(b){if(b)return"string"===typeof b&&(b=document.querySelectorAll(b)),a("undefined"===typeof b.length?[b]:b),b};c.types=m;c.version=j;c.defaults=
{attributes:void 0,events:void 0,"extends":"",id:"",prototype:{},resolvedAttribute:"resolved",template:void 0,type:m.ANY,unresolvedAttribute:"unresolved"};var o=window.skate;c.noConflict=function(){window.skate=o;return this};window.skate=c;g.exports=c},{"./constants":1,"./document-observer":3,"./lifecycle":5,"./registry":7,"./utils":9,"./version":10}],9:[function(b,g,c){function j(b,c){return Object.prototype.hasOwnProperty.call(b,c)}c.hasOwn=j;c.debounce=function(b){var c=!1;return function(){c||
(c=!0,setTimeout(function(){c=!1;b()},1))}};c.getClosestIgnoredElement=function(b){for(;b&&b!==document&&!(b instanceof DocumentFragment);){if(b.hasAttribute(h))return b;b=b.parentNode}};c.inherit=function(b,c,a){for(var g=Object.getOwnPropertyNames(c),h=g.length,j=0;j<h;j++){var m=g[j];if(a||void 0===b[m]){var l=Object.getOwnPropertyDescriptor(c,m);l.get||l.set||!l.writable||!l.enumerable||!l.configurable?Object.defineProperty(b,m,l):b[m]=c[m]}}return b};c.objEach=function(b,c){for(var a in b)j(b,
a)&&c(b[a],a)};Object.defineProperty(c,"__esModule",{value:!0});"use strict";var h=b("./constants").ATTR_IGNORE},{"./constants":1}],10:[function(b,g){g.exports="0.12.6"},{}]},{},[8]);(function(b){var g=b.skate.noConflict();define("atlassian/libs/skate-0.12.6",[],function(){return g})})(window);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:skate', location = '/includes/js/amd/shim/skate-amd.js' */
define("skate",["atlassian/libs/skate-0.12.6"],function(a){return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/user.soy' */
// This file was automatically generated from user.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.User.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.User == 'undefined') { Confluence.Templates.User = {}; }


Confluence.Templates.User.userLinkUrl = function(opt_data, opt_ignored) {
  return soy.$$escapeHtml("/confluence") + '/display/~' + soy.$$escapeUri(opt_data.username);
};
if (goog.DEBUG) {
  Confluence.Templates.User.userLinkUrl.soyTemplateName = 'Confluence.Templates.User.userLinkUrl';
}


Confluence.Templates.User.logo = function(opt_data, opt_ignored) {
  return '' + ((opt_data.profilePictureInfo['default'] && opt_data.username == opt_data.currentUsername) ? '<a ' + ((opt_data.canView) ? ' ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : '') + ' href="' + soy.$$escapeHtml("/confluence") + '/users/profile/editmyprofilepicture.action" title="' + soy.$$escapeHtml('Add a picture of yourself') + '"><img class="userLogo logo defaultLogo" src="' + soy.$$escapeHtml("/confluence/s/-7iq2vk/8301/13280cd41a592ca5883bbc1ae415b58671505365/_") + '/images/icons/profilepics/add_profile_pic.svg" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Add a picture of yourself') + '"></a>' : (opt_data.profilePictureInfo.anonymous) ? '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/confluence/s/-7iq2vk/8301/13280cd41a592ca5883bbc1ae415b58671505365/_") + '/images/icons/profilepics/anonymous.svg" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Anonymous') + '" title="' + soy.$$escapeHtml('Anonymous') + '">' : (opt_data.canView) ? '<a ' + ((! opt_data.disableUserHover) ? 'class="userLogoLink"' : '') + ' data-username="' + soy.$$escapeHtml(opt_data.username) + '" href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"><img class="userLogo logo" src="' + soy.$$escapeHtml(opt_data.profilePictureInfo.uriReference) + '" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '"></a>' : '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/confluence/s/-7iq2vk/8301/13280cd41a592ca5883bbc1ae415b58671505365/_") + '/images/icons/profilepics/anonymous.svg" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml(opt_data.username) + '" title="' + soy.$$escapeHtml(opt_data.username) + '">');
};
if (goog.DEBUG) {
  Confluence.Templates.User.logo.soyTemplateName = 'Confluence.Templates.User.logo';
}


Confluence.Templates.User.usernameLink = function(opt_data, opt_ignored) {
  return '' + ((opt_data.username && opt_data.username != '') ? '<a href="' + Confluence.Templates.User.userLinkUrl(opt_data) + '"' + ((opt_data.canView) ? 'class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.username) + '"' : 'class="url fn"') + '>' + ((opt_data.fullName && opt_data.fullName != '') ? soy.$$escapeHtml(opt_data.fullName) : soy.$$escapeHtml(opt_data.username)) + '</a>' : soy.$$escapeHtml('Anonymous'));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameLink.soyTemplateName = 'Confluence.Templates.User.usernameLink';
}


Confluence.Templates.User.fullNameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.fullName) ? soy.$$escapeHtml(opt_data.user.fullName) : soy.$$escapeHtml('Anonymous'));
};
if (goog.DEBUG) {
  Confluence.Templates.User.fullNameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.fullNameOrAnonymous';
}


Confluence.Templates.User.usernameOrAnonymous = function(opt_data, opt_ignored) {
  return '' + ((opt_data.user && opt_data.user.name) ? soy.$$escapeHtml(opt_data.user.name) : soy.$$escapeHtml('Anonymous'));
};
if (goog.DEBUG) {
  Confluence.Templates.User.usernameOrAnonymous.soyTemplateName = 'Confluence.Templates.User.usernameOrAnonymous';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/icons.soy' */
// This file was automatically generated from icons.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Icons.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Icons == 'undefined') { Confluence.Templates.Icons = {}; }


Confluence.Templates.Icons.contentIcon = function(opt_data, opt_ignored) {
  return '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="icon ' + soy.$$escapeHtml(opt_data.iconCss) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIcon.soyTemplateName = 'Confluence.Templates.Icons.contentIcon';
}


Confluence.Templates.Icons.contentIconFont = function(opt_data, opt_ignored) {
  return '<a' + ((opt_data.linkColour) ? ' ' + soy.$$escapeHtml(opt_data.linkColour) : '') + ' href="' + soy.$$escapeHtml(opt_data.linkHref) + '" title="' + soy.$$escapeHtml(opt_data.iconTitle) + '"><span class="aui-icon ' + soy.$$escapeHtml(opt_data.iconCss) + '">' + soy.$$escapeHtml(opt_data.iconTitle) + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.contentIconFont.soyTemplateName = 'Confluence.Templates.Icons.contentIconFont';
}


Confluence.Templates.Icons.iconSpan = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<span class="icon' + ((opt_data.type) ? ' aui-icon aui-icon-small aui-iconfont-' + soy.$$escapeHtml(opt_data.type) : '') + ' ' + ((opt_data.additionalClasses) ? soy.$$escapeHtml(opt_data.additionalClasses) : '') + '">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</span>';
};
if (goog.DEBUG) {
  Confluence.Templates.Icons.iconSpan.soyTemplateName = 'Confluence.Templates.Icons.iconSpan';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/captcha.soy' */
// This file was automatically generated from captcha.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Captcha.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Captcha == 'undefined') { Confluence.Templates.Captcha = {}; }


Confluence.Templates.Captcha.form = function(opt_data, opt_ignored) {
  var output = '<div class="captcha field-group"><label id="captcha-response-label" for="captcha-response"><span class="assistive">' + soy.$$escapeHtml('If you are unable to use this CAPTCHA please \x3ca href\x3d\x22administrators.action\x22 tabindex\x3d\x225\x22\x3econtact your administrator\x3c/a\x3e for assistance.') + '</span></label>' + Confluence.Templates.Captcha.image(opt_data) + '<input type="text" id="captcha-response" name="captchaResponse" value="" class="text" placeholder="' + soy.$$escapeHtml('Type the word above') + '">';
  if (opt_data.captchaErrors && opt_data.captchaErrors.length) {
    var errorList13 = opt_data.captchaErrors;
    var errorListLen13 = errorList13.length;
    for (var errorIndex13 = 0; errorIndex13 < errorListLen13; errorIndex13++) {
      var errorData13 = errorList13[errorIndex13];
      output += aui.message.warning({content: errorData13});
    }
  }
  output += '</div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.form.soyTemplateName = 'Confluence.Templates.Captcha.form';
}


Confluence.Templates.Captcha.image = function(opt_data, opt_ignored) {
  return '<img src="' + soy.$$escapeHtml("/confluence") + '/jcaptcha?id=' + soy.$$escapeHtml(opt_data.captchaId) + '" class="captcha-image" alt="' + soy.$$escapeHtml('CAPTCHA image') + '"><input type="hidden" name="captchaId" value="' + soy.$$escapeHtml(opt_data.captchaId) + '" placeholder="' + soy.$$escapeHtml('Type the word above') + '">';
};
if (goog.DEBUG) {
  Confluence.Templates.Captcha.image.soyTemplateName = 'Confluence.Templates.Captcha.image';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:shared-templates', location = '/includes/soy/notifications.soy' */
// This file was automatically generated from notifications.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Notifications.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Notifications == 'undefined') { Confluence.Templates.Notifications = {}; }


Confluence.Templates.Notifications.notLoggedIn = function(opt_data, opt_ignored) {
  return '' + ((! opt_data.isUserAuthenticated) ? '<div id="anonymous-warning" class="aui-message aui-message-warning closeable">' + soy.$$filterNoAutoescape('You are not logged in. Any changes you make will be marked as \x3cspan class\x3d\x22smalltext\x22\x3eanonymous\x3c/span\x3e.') + ((! opt_data.isExternalUserManagementEnabled) ? ' ' + soy.$$filterNoAutoescape(AJS.format('You may want to \x3ca href\x3d\x22{0}\x22\x3eLog In\x3c/a\x3e if you already have an account.',opt_data.loginURL)) : '') + '</div>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.notLoggedIn.soyTemplateName = 'Confluence.Templates.Notifications.notLoggedIn';
}


Confluence.Templates.Notifications.actionErrors = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.actionErrors.length > 0) {
    output += '<div class="aui-message aui-message-error ' + ((opt_data.closeable) ? 'closeable' : '') + '"><p class="title">' + soy.$$escapeHtml('The following error(s) occurred:') + '</p><ul>';
    var errorHtmlList24 = opt_data.actionErrors;
    var errorHtmlListLen24 = errorHtmlList24.length;
    for (var errorHtmlIndex24 = 0; errorHtmlIndex24 < errorHtmlListLen24; errorHtmlIndex24++) {
      var errorHtmlData24 = errorHtmlList24[errorHtmlIndex24];
      output += '<li>' + soy.$$filterNoAutoescape(errorHtmlData24) + '</li>';
    }
    output += '</ul></div>';
  }
  output += '<div id="action-messages"></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Notifications.actionErrors.soyTemplateName = 'Confluence.Templates.Notifications.actionErrors';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:soy-resources', location = 'soy/page-banner.soy' */
// This file was automatically generated from page-banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.PageBanner.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.PageBanner == 'undefined') { Confluence.Templates.PageBanner = {}; }


Confluence.Templates.PageBanner.banner = function(opt_data, opt_ignored) {
  var output = '<div id="page-metadata-banner"><ul class="banner">' + Confluence.Templates.PageBanner.renderSystemContentItems(opt_data);
  var itemList6 = opt_data.pageBannerItems;
  var itemListLen6 = itemList6.length;
  for (var itemIndex6 = 0; itemIndex6 < itemListLen6; itemIndex6++) {
    var itemData6 = itemList6[itemIndex6];
    output += Confluence.Templates.PageBanner.renderPageBannerItem(itemData6);
  }
  output += '</ul></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.banner.soyTemplateName = 'Confluence.Templates.PageBanner.banner';
}


Confluence.Templates.PageBanner.renderSystemContentItems = function(opt_data, opt_ignored) {
  var output = '<li id="system-content-items" class="noprint">';
  var itemList12 = opt_data.systemContentItems;
  var itemListLen12 = itemList12.length;
  for (var itemIndex12 = 0; itemIndex12 < itemListLen12; itemIndex12++) {
    var itemData12 = itemList12[itemIndex12];
    output += Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentMap(itemData12, {isSystemContentItem: true}));
  }
  output += '</li>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.renderSystemContentItems.soyTemplateName = 'Confluence.Templates.PageBanner.renderSystemContentItems';
}


Confluence.Templates.PageBanner.renderPageBannerItem = function(opt_data, opt_ignored) {
  return '<li class="' + ((! opt_data.suppressDefaultStyle) ? 'page-metadata-item noprint' : '') + ((opt_data.isAuiButton) ? 'has-button' : '') + '" ' + ((opt_data.linkId) ? ' id="' + soy.$$escapeHtml(opt_data.linkId) + '-wrapper"' : '') + '>' + Confluence.Templates.PageBanner.itemAnchor(soy.$$augmentMap(opt_data, {isSystemContentItem: false})) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.renderPageBannerItem.soyTemplateName = 'Confluence.Templates.PageBanner.renderPageBannerItem';
}


Confluence.Templates.PageBanner.itemAnchor = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.href) + '" title="' + soy.$$escapeHtml(opt_data.tooltip) + '" ' + ((opt_data.linkId) ? 'id="' + soy.$$escapeHtml(opt_data.linkId) + '"' : '') + ' ' + ((opt_data.styleClasses) ? 'class="' + soy.$$escapeHtml(opt_data.styleClasses) + '"' : '') + '>' + Confluence.Templates.PageBanner.itemIcon(opt_data) + ((! opt_data.isSystemContentItem) ? '<span>' + soy.$$escapeHtml(opt_data.label) + '</span>' : '') + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.itemAnchor.soyTemplateName = 'Confluence.Templates.PageBanner.itemAnchor';
}


Confluence.Templates.PageBanner.itemIcon = function(opt_data, opt_ignored) {
  return '' + ((opt_data.icon) ? '<img class="page-banner-item-icon" src="' + soy.$$escapeHtml(opt_data.icon.url) + '" style="height: ' + soy.$$escapeHtml(opt_data.icon.height) + 'px; width: ' + soy.$$escapeHtml(opt_data.icon.width) + 'px;"/>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.itemIcon.soyTemplateName = 'Confluence.Templates.PageBanner.itemIcon';
}


Confluence.Templates.PageBanner.draftStatusDiscovery = function(opt_data, opt_ignored) {
  return '<aui-inline-dialog id="' + soy.$$escapeHtml(opt_data.elementId) + '" alignment="bottom left" open><p><strong>' + soy.$$escapeHtml('Didn\x27t publish?') + '</strong></p><p>' + soy.$$filterNoAutoescape(AJS.format('All good, we\x27\x27ve saved your changes! Find them any time under \x3ca href\x3d\x22{0}\x22\x3eRecently worked on\x3c/a\x3e. Just keep editing, and publish when you\x27\x27re ready.',opt_data.linkToMyWork)) + '</p><p><a class="aui-button">' + soy.$$escapeHtml('Okay, got it!') + '</a></p></aui-inline-dialog>';
};
if (goog.DEBUG) {
  Confluence.Templates.PageBanner.draftStatusDiscovery.soyTemplateName = 'Confluence.Templates.PageBanner.draftStatusDiscovery';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner.js' */
define("confluence-page-banner/page-banner",["ajs","jquery","confluence/templates","confluence/legacy","skate"],function(i,c,n,j,d){function l(){var o=c("#system-content-items");if(o.children(":not(.hidden)").length==0){o.addClass("hidden")}else{o.removeClass("hidden")}}function e(){c("#page-metadata-banner").hide()}function k(){var o="#system-content-items a:not(.tipsy-disabled),.page-metadata-item a:not(.tipsy-disabled),.page-metadata-modification-info a.last-modified:not(tipsy-disabled),#draft-status-lozenge";a(o);c(o).click(function(p){g(c(p.target).closest("a"))});c(window).on("click scroll resize",g)}function a(o){c(document).tooltip({live:o,gravity:"n",title:"title",delayIn:500})}function g(o){c(".tipsy").remove();if(o){var p=c(o).data("tipsy");if(p){p.hoverState="out"}}}var f=function(q,t){var s="#content-metadata-page-restrictions";var r=c(s);var o="";r.removeClass("aui-iconfont-locked aui-iconfont-unlocked restricted");var p=t.hasRestrictions&&!(t.hasExplicitRestrictions||t.hasInheritedRestrictions);if(t.hasExplicitRestrictions||p){r.addClass("aui-icon aui-icon-small aui-iconfont-locked restricted");o="Restrictions apply"}else{if(t.hasInheritedRestrictions){r.addClass("aui-icon aui-icon-small aui-iconfont-unlocked restricted");o="Restrictions apply"}else{r.addClass("aui-icon aui-icon-small aui-iconfont-unlocked");o=t.hasAnyExplicitRestrictions?"Restrictions apply":"Unrestricted"}}r.attr("title",o);a(s);l()};var b=function(){l();i.bind("system-content-metadata.toggled-restrictions",f);i.bind("breadcrumbs.expanded",e);c("#page-metadata-banner").css("visibility","visible");k()};var h=function(){i.unbind("system-content-metadata.toggled-restrictions",f);i.unbind("breadcrumbs.expanded",e)};var m=function(){d("system-metadata-restrictions",{type:d.types.CLASS,events:{click:function(p,o){o.preventDefault();i.trigger("system-content-metadata.open-restrictions-dialog")}},attached:b,detached:h})};m()});require("confluence/module-exporter").safeRequire("confluence-page-banner/page-banner");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:page-banner-common-resources', location = 'js/page-banner-analytics.js' */
AJS.toInit(function(c){function b(){if(!AJS.Confluence.Analytics||!AJS.Confluence.Analytics.setAnalyticsSource){AJS.log("WARNING: Could not initialise analytics for the page banner: AJS.Confluence.Analytics.setAnalyticsSource is not defined.");return}var e=AJS.Confluence.Analytics.setAnalyticsSource;var f=c("#breadcrumbs > li");e(f.filter(":not(#ellipsis)").find("a"),"breadcrumbs");e(f.filter(".hidden-crumb").find("a"),"breadcrumbs-expanded");e(f.filter(":last").find("a"),"breadcrumbs-parent");var d=c("#com-atlassian-confluence").hasClass("theme-documentation")?"breadcrumbs-homepage":"breadcrumbs-collector";e(f.filter(".first").find("a"),d)}function a(e,d,g){var f=null;e.mouseover(function(){f=setTimeout(g,d)});e.mouseout(function(){clearTimeout(f)})}AJS.bind("breadcrumbs.expanded",function(){AJS.trigger("analyticsEvent",{name:"breadcrumbs-expanded"})});b()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-feature-discovery-plugin:confluence-feature-discovery-plugin-resources', location = '/js/confluence-feature-discovery-plugin.js' */
(function(f){Confluence.FeatureDiscovery={};var c,e=false,i=3;var d="com.atlassian.confluence.plugins.confluence-feature-discovery-plugin";var g=d+":confluence-feature-discovery-plugin-resources.test-mode";var a=WRM.data.claim(g);function j(k){if(c===undefined){c=JSON.parse(AJS.Meta.get("discovered-plugin-features")||"{}")}if(k){return c[k]||[]}return c}function b(m,o){var n=j(m);for(var l=0,k=n.length;l<k;l++){if(n[l]===o){return true}}return false}function h(n,p){var l="com.atlassian.webdriver.discovery="+n+":"+p;var k=document.cookie.split(";");for(var m=0;m<k.length;m++){var o=k[m];while(o.charAt(0)===" "){o=o.substring(1)}if(o.indexOf(l)!==-1){return true}}return false}Confluence.FeatureDiscovery.forPlugin=function(m,l){var p=Confluence.storageManager("feature-discovery."+m);l=l||i;function o(r){var q=parseInt(p.getItem(r),10);return isNaN(q)?0:q}function n(r,q){return p.setItem(r,q)}function k(q){return p.removeItem(q)}return{addDiscoveryView:function(q){n(q,o(q)+1)},shouldShow:function(r,q){if(q===true&&a&&!h(m,r)){return false}if(e||b(m,r)){return false}if(o(r)>=l){this.markDiscovered(r);return false}e=true;return true},markDiscovered:function(r,q){if(b(m,r)){return}AJS.safeAjax({url:AJS.contextPath()+"/rest/feature-discovery/1.0/discovered/"+m+"/"+r,type:"POST",data:{},success:function(){j(m).unshift(r);k(r);AJS.trigger("feature-discovered",{pluginKey:m,featureKey:r});if(q&&f.isFunction(q)){q()}}})},listDiscovered:function(){return j(m).slice(0)}}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-banner:status-lozenge-onboarding', location = 'js/status-lozenge-onboarding.js' */
define("confluence-page-banner/status-lozenge-onboarding",["ajs","jquery","confluence/templates","confluence/legacy"],function(f,d,h,g){var i={pluginKey:"com.atlassian.confluence.plugins.confluence-page-banner",featureKey:"recently-work-on-contributor-lozenge"};var c="#draft-status-lozenge";var e=function(){g.FeatureDiscovery.forPlugin(i.pluginKey).markDiscovered(i.featureKey)};var b=function(){if(!g.FeatureDiscovery||!g.FeatureDiscovery.forPlugin){return false}if(d(c).length===0){return false}if(document.referrer.indexOf("resumedraft.action")<0&&document.referrer.indexOf("editpage.action")<0){return false}return g.FeatureDiscovery.forPlugin(i.pluginKey).shouldShow(i.featureKey)};var a=function(){if(!b()){return}var j="dope-draft-discovery";var k=d(h.PageBanner.draftStatusDiscovery({elementId:j,linkToMyWork:f.contextPath()+"/#recently-worked"}));d(c).attr("aria-controls",j).append(k);k.find(".aui-button").click(function(){k.removeAttr("open");e()})};f.toInit(a)});require("confluence/module-exporter").safeRequire("confluence-page-banner/status-lozenge-onboarding");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-loader', location = 'js/loader.js' */
require(["ajs","wrm"],function(a,b){a.toInit(function(){a.$("#main").find("table").length&&b.require("wrc!sortable-tables-resources")})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/doctheme-utils.js' */
Confluence.DocThemeUtils=Confluence.DocThemeUtils||(function(f){var e;function c(){return(a().length)?true:false}function a(){if(!e){e=f("#splitter-content")}return e}function g(i){var h=f(i);f(i).appendTo(c()?a():f("body"));return h}function b(){return c()?a().scrollTop():f(document).scrollTop()}function d(){return c()?a().scrollLeft():f(document).scrollLeft()}return{isDocTheme:c,appendAbsolutePositionedElement:g,getMainContentScrollTop:b,getMainContentScrollLeft:d,getDocThemeContentElement:a}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/scrolling-inline-dialog.js' */
Confluence.ScrollingInlineDialog=function(a,d,c,b){var g=Confluence.DocThemeUtils.getDocThemeContentElement();var e=Confluence.DocThemeUtils.isDocTheme();b=b||{};if(!b.container&&e){b.container=g}var f=function(k,s,J,z){var v;var L="auto";var G;var p=-7;var q;var w;var u=e?g.width():AJS.$(window).width();var K=s.target.position();K.top+=e?g.scrollTop():0;K.left+=e?g.scrollLeft():0;var i=s.target.outerWidth();var m=K.left+i/2;var C=e?g.scrollTop()+AJS.$(window).height()-AJS.$("#footer").outerHeight():(window.pageYOffset||document.documentElement.scrollTop)+AJS.$(window).height();var n=10;var o=20;G=K.top+s.target.outerHeight()+z.offsetY;var H=k.find(".arrow").outerWidth();var j=k.outerWidth();var D=s.target.outerWidth();if(z.centerOnHighlight){if(j>D){v=K.left-(j-D)/2;q=m-v-H/2}else{v=K.left+z.offsetX;q=(j-H)/2}}else{v=K.left+z.offsetX;if(j>D){q=m-v-H/2}else{q=(j-H)/2}}q=(q<0)?0:q;var h=(e)?(K.top-g.scrollTop()):(K.top-(window.pageYOffset||document.documentElement.scrollTop));var A=z.maxHeight||0;var t=k.height();var r=h>Math.max(t,A);var l=(G+k.height())<C;w=(!l&&r)||z.onTop;z.onTop=w;var y=u-(v+j+n);if(w){G=K.top-t-8;p=t}if(w===false&&l===false){var x=(G+t)-C;var E=e?g.scrollTop()+x+AJS.$("#footer").outerHeight():(window.pageYOffset||document.documentElement.scrollTop)+x+o;var F=e?g:AJS.$("html, body");F.stop().animate({scrollTop:E},500)}if(z.isRelativeToMouse){if(y<0){L=n;v="auto";q=J.x-(AJS.$(window).width()-z.width)}else{v=J.x-20;q=J.x-v}}else{if(y<0){L=n;v="auto";var I=u-L;var B=I-j;q=m-B-H/2}}return{displayAbove:w,popupCss:{left:v,right:L,top:G},arrowCss:{position:"absolute",left:q,right:"auto",top:p}}};if(!b.calculatePositions){b.calculatePositions=f}return AJS.InlineDialog.call(this,a,d,c,b)};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-panel.js' */
Confluence.HighlightAction=(function(f){var d={};var c;var b={MAINCONTENT_AND_COMMENT:function(o){return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(f(".wiki-content"),o)},MAINCONTENT_ONLY:function(o){c=c||f(".wiki-content").first();return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(c,o)},COMMENT_ONLY:function(o){return Confluence.HighlightAction.RangeHelper.isSelectionInsideContent(f(".comment-content"),o)}};function a(p,q){var o={onClick:function(){},shouldDisplay:b.MAINCONTENT_AND_COMMENT};d[p]=f.extend(o,q)}function l(o){var p=d[o];if(!p){p=function(){AJS.logError("The button with key "+o+" doesn't have a registered handler")}}return p}function e(p){var o=Confluence.getContextPath()+"/rest/highlighting/1.0/insert-storage-fragment";return f.ajax({type:"POST",contentType:"application/json",url:o,data:JSON.stringify(p)})}function g(o){var p=Confluence.getContextPath()+"/rest/highlighting/1.0/insert-storage-column-table";return f.ajax({type:"POST",contentType:"application/json",url:p,data:JSON.stringify(o)})}function k(q,p,r){var o=i(r);o.tableColumnIndex=p;o.cellModifications=q;return o}function h(o,q){var p=i(q);p.xmlModification=o[0].xmlInsertion;return p}function j(o,q){var p=i(q);p.xmlModification=o;return p}function m(){if(window.getSelection){window.getSelection().empty&&window.getSelection().empty();window.getSelection().removeAllRanges&&window.getSelection().removeAllRanges()}else{window.document.selection&&window.document.selection.empty()}}function i(p){var o={};o.pageId=p.pageId;o.selectedText=p.selectedText;o.index=p.index;o.numMatches=p.numMatches;o.lastFetchTime=n();return o}function n(){return f("meta[name='confluence-request-time']").attr("content")}return{registerButtonHandler:a,getButtonHandler:l,insertContentAtSelectionEnd:e,insertContentsInTableColumnCells:g,createTableInsertionBean:k,createInsertionBean:h,createXMLModificationBean:j,clearTextSelection:m,WORKING_AREA:b}})(AJS.$);Confluence.HighlightAction.RangeHelper=(function(h){function j(p){return{area:c(p),text:k(p),html:n(p),containingElement:d(p),range:p}}function c(q){var r=Confluence.DocThemeUtils.getMainContentScrollTop();var s=Confluence.DocThemeUtils.getMainContentScrollLeft();var w=q.getClientRects();if(!w.length&&q.parentElement()){var x=h(q.parentElement());var p=x.offset();w=[{top:p.top-((Confluence.DocThemeUtils.isDocTheme())?0:r),left:p.left-((Confluence.DocThemeUtils.isDocTheme())?0:s),bottom:p.top+x.height(),right:p.left+x.width()}]}var z=g(q,w);var u=function(E,D){var C={};C.top=E.top;C.left=E.left+s;C.bottom=D.bottom;if(E.left>=D.right){C.right=E.right}else{C.right=D.right}C.right=C.right+s;C.top=C.top+r;C.bottom=C.bottom+r;C.width=C.right-C.left;C.height=C.bottom-C.top;return C};var t=function(D){var C={};C.width=D.right-D.left;C.height=D.bottom-D.top;C.left=D.left+s;C.right=D.right+s;C.top=D.top+r;C.bottom=D.bottom+r;return C};var B=function(C){if(Confluence.DocThemeUtils.isDocTheme()){var D=Confluence.DocThemeUtils.getDocThemeContentElement().offset();C.left=C.left-D.left;C.right=C.right-D.left;C.top=C.top-D.top;C.bottom=C.bottom-D.top}return C};var A=B(u(z.first,z.last));var v=B(t(z.first));if(Confluence.HighlightAction.debug){var y=h("<div>").attr("id","highlight-actions-debug-helper");Confluence.DocThemeUtils.appendAbsolutePositionedElement(y).css(h.extend({position:"absolute",outline:"1px solid red"},A))}return{first:v,average:A}}function k(q){var p=(q.text!=undefined)?q.text:q.cloneContents().textContent;return i(p)}function n(p){return(p.cloneContents)?h("<div>").append(p.cloneContents()).html():p.htmlText}function d(q){if(q.commonAncestorContainer){var p=q.commonAncestorContainer;if(p.nodeType==3){return p.parentNode}return p}else{if(q.parentElement){return q.parentElement()}}}function g(r,q){var p={};p.first=q[0];p.last=q[q.length-1];if(r.endOffset!=="undefined"){if(r.endOffset==0&&q.length>1){p.last=q[q.length-2]}}return p}function e(){if(window.getSelection&&window.getSelection().isCollapsed){return false}if(document.selection&&(document.selection.type=="None"||document.selection.createRange().htmlText=="")){return false}var s;if(window.getSelection){var p=window.getSelection();s=p.getRangeAt(p.rangeCount-1)}else{if(document.selection){s=document.selection.createRange()}}if(/^\s*$/.test(k(s))){var q=n(s);if(!q){return false}var r=q.toLowerCase().indexOf("<img ")!=-1;if(!r){return false}}if(!m(h(".wiki-content"),s)){return false}return s}function m(p,s){var q=d(s);var r=function(){var t=false;h.each(p,function(u,v){if(v===q||h.contains(v,q)){t=true;return false}});return t};return r()}function b(r,q){var p=k(o(r,q));var t=h.trim(k(q));var s=a(t,r);p=p.replace(/\s*$/,"");return{pageId:AJS.Meta.get("page-id"),selectedText:t,index:h.inArray(p.length-t.length,s),numMatches:s.length}}function f(p){if(document.createRange){return p.text()}else{range=document.body.createTextRange();range.moveToElementText(p.get(0));return range.text}}function o(r,q){var p;if(document.createRange){p=document.createRange();p.setStart(r.get(0),0);p.setEnd(q.endContainer,q.originalEndOffset)}else{p=document.body.createTextRange();p.moveToElementText(r.get(0));p.setEndPoint("EndToEnd",q)}return p}function a(u,s){var q=f(s);q=l(u,s.clone(),q);q=i(q);var t=0;var r=-1;var p=[];while((r=q.indexOf(u,t))>-1){p.push(r);t=r+1}return p}function l(u,t,r){var s=t.find('.user-mention, a[href^="/"]');t.find('.conf-macro[data-hasbody="false"], .jira-issue, .jira-issues').each(function(){if(h(this).text().indexOf(u)>-1){s=s.add(this)}});if(s.length>0){var p=u.replace(/\S/g," ");var q=new RegExp(u.replace(/[-\/\\^$*+?.()|[\]{}]/g,"\\$&"),"g");s.each(function(){var v=h(this).text();h(this).text(v.replace(q,p))});return f(t)}return r}function i(p){return p.replace(/\u00a0/g,"\u0020")}return{getRangeOption:j,getUserSelectionRange:e,getSelectionRects:c,getSelectionText:k,getSelectionHTML:n,getContainingElement:d,getFirstAndLastSelectionRect:g,isSelectionInsideContent:m,computeSearchTextObject:b}})(AJS.$);AJS.toInit(function(f){var i=f(".wiki-content").first();var g={ELEMENT_NODE:1,TEXT_NODE:3};var k={IMAGE:"IMG"};var a=f("<div>").attr("id","action-dialog-target");var d;var j="selection-action-panel";var b;var e;function o(){var r=Confluence.getContextPath()+"/rest/highlighting/1.0/panel-items";var q=AJS.Meta.get("page-id");if(q!=undefined){r=r+"?pageId="+q}var s=f.get(r,function(t){if(t.length){m(t)}});h(s)}function m(v){var y=c();var q=29;var z=false;var B=v.length*q;var A=Confluence.HighlightPanel.Templates.panelContent({webItems:v});var x=false;var s=function(D,C,E){if(!x){D.append(A);D.find(".aui-button").tooltip({gravity:"s"});l(D.parent());D.find("button").click(function(H){var F=f(this).attr("data-key");var I=Confluence.HighlightAction.getButtonHandler(F);z=true;d.hide();var G=Confluence.HighlightAction.RangeHelper.getRangeOption(b);if(f.trim(G.text)!==""){G.searchText=Confluence.HighlightAction.RangeHelper.computeSearchTextObject(i,b)}I.onClick(G)})}E();x=true;return false};var w=function(C){var D=false;C.find("button").each(function(E){var G=f(this);var F=G.attr("data-key");var I=Confluence.HighlightAction.getButtonHandler(F);var H=I.shouldDisplay(b);G.css("display",H?"inline-block":"none");D=D||H});if(!D){d.hide()}else{C.find(".contents").width("auto")}};var r=function(){Confluence.HighlightAction.Analytics.sendAnalyticsForOpeningHighlightOptionPanel();w(this.popup);y.bindHideEvents();a.show()};var u=function(){y.unbindHideEvents();a.hide()};var t={centerOnHighlight:true,onTop:true,fadeTime:0,width:B,persistent:true,initCallback:r,hideCallback:u};d=Confluence.ScrollingInlineDialog(a,j,s,t)}function l(q){q.children().attr("unselectable","on").on("selectstart",false)}function h(s){var q;var r=0;var t=1000;f(document).on("mouseup",function(u){s.done(function(w){if(!(w&&w.length>0)){return}var v=f(u.target);if(v.closest(".aui-inline-dialog").length!==0){return}setTimeout(function(){clearTimeout(q);var x=t;if(f(d[0]).is(":visible")){x=r}q=setTimeout(function(){n()},x)},r)})});s.done(function(){AJS.bind("quickedit.success",function(){d.hide()})})}function n(){b=Confluence.HighlightAction.RangeHelper.getUserSelectionRange();var q=function(t){return f.trim(t.toString())!==""};b.originalEndOffset=b.endOffset;if(!b||!q(b)){d.hide();return}var s=Confluence.HighlightAction.RangeHelper.getSelectionRects(b);if(!s){return}var r=p(s);if(r||!f(d[0]).is(":visible")){f(d[0]).hide();d.show()}}function c(){var t=function(){v();s()};var w=function(){q();y()};var r=false;var x=j+".inline-dialog-check";var v=function(){if(!r){f("body").bind("click."+x,function(A){var z=f(A.target);if(z.closest("#inline-dialog-"+j+" .contents").length===0){if(!b){d.hide()}}});r=true}};var q=function(){if(r){f("body").unbind("click."+x)}r=false};var u=function(z){if(z.keyCode===27){d.hide()}};var s=function(){f(document).on("keydown",u)};var y=function(){f(document).off("keydown",u)};return{bindHideEvents:t,unbindHideEvents:w}}function p(r){Confluence.DocThemeUtils.appendAbsolutePositionedElement(a);var q=false;if(!e||r.first.top!=e.first.top||r.first.height!=e.first.height||r.first.left!=e.first.left||r.first.width!=e.first.width){a.css({top:r.first.top,height:r.first.height,left:r.first.left,width:r.first.width});e=r;q=true}return q}o()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/quote-in-comment.js' */
AJS.toInit(function(f){var a=true;var h=false;var d="com.atlassian.confluence.plugins.confluence-highlight-actions:quote-comment";function b(l){var k=l.getBody().createTextRange();k.moveToElementText(l.getBody());k.collapse(false);k.select()}function e(){var k=40;if(Confluence.DocThemeUtils.isDocTheme()){var l=Confluence.DocThemeUtils.getDocThemeContentElement();var m=l.scrollTop()-f("#header").height()+f("#rte-toolbar").offset().top;l.scrollTop(m-k)}else{var m=f("#rte-toolbar").offset().top;f(document).scrollTop(m-k)}}function j(l,m){var n="<p><br/></p>";var k="<blockquote><p>"+m.html+"</p></blockquote>"+n;l.execCommand("mceInsertContent",false,k);h=false}function i(k){Confluence.HighlightAction.clearTextSelection();setTimeout(function(){var l=AJS&&AJS.Rte&&AJS.Rte.getEditor&&AJS.Rte.getEditor();if(l){Confluence.HighlightAction.Analytics.sendAnalyticsForQuoteInComment();e();j(l,k)}else{Confluence.HighlightAction.Analytics.sendAnalyticsForQuoteInComment(a);h=true;var m=function(){j(AJS.Rte.getEditor(),k);AJS.unbind("quickedit.visible",m)};AJS.bind("quickedit.visible",m);c(g(k.containingElement))}},0)}function g(k){var l=f(k).closest("div.comment");return l}function c(k){if(!k.length>0){f(".quick-comment-prompt").click()}else{k.find(".comment-actions .action-reply-comment").click()}}Confluence&&Confluence.HighlightAction&&Confluence.HighlightAction.registerButtonHandler(d,{onClick:i,shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_AND_COMMENT})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/js/highlight-analytics.js' */
Confluence.HighlightAction.Analytics=(function(c){var b="confluence.highlight.actions.open";var e="confluence.quote.in.comment.insert";var g="confluence.quote.in.comment.append";function d(h,i){AJS.trigger("analytics",{name:h,data:i})}function a(){d(b)}function f(h){if(h){d(e)}else{d(g)}}return{sendAnalyticsForOpeningHighlightOptionPanel:a,sendAnalyticsForQuoteInComment:f}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-highlight-actions:highlighting-experiment-resources', location = '/soy/templates.soy' */
// This file was automatically generated from templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.HighlightPanel.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.HighlightPanel == 'undefined') { Confluence.HighlightPanel = {}; }
if (typeof Confluence.HighlightPanel.Templates == 'undefined') { Confluence.HighlightPanel.Templates = {}; }


Confluence.HighlightPanel.Templates.panelContent = function(opt_data, opt_ignored) {
  var output = '';
  var webItemList3 = opt_data.webItems;
  var webItemListLen3 = webItemList3.length;
  for (var webItemIndex3 = 0; webItemIndex3 < webItemListLen3; webItemIndex3++) {
    var webItemData3 = webItemList3[webItemIndex3];
    output += '<button data-key="' + soy.$$escapeHtml(webItemData3.key) + '" class="aui-button aui-button-compact aui-button-subtle" title="' + soy.$$escapeHtml(webItemData3.label) + '"><span class="aui-icon aui-icon-small ' + soy.$$escapeHtml(webItemData3.styleClass) + '"/></button>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.HighlightPanel.Templates.panelContent.soyTemplateName = 'Confluence.HighlightPanel.Templates.panelContent';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-core', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro-core.js' */
(function(){var a=function(b){this.$=b;this.createToggleFunction=function(e){var d=this.$;return function c(i){if(typeof e!="undefined"&&!e(i)){return}var f=d(this),g=d(".expand-icon",f),h=d(".expand-content",f.closest(".expand-container")).first();var j;if(h.hasClass("expand-hidden")){g.removeClass("aui-iconfont-chevron-right").addClass("aui-iconfont-chevron-down");h.css("display","block");h.animate({opacity:1});j="expand"}else{g.removeClass("aui-iconfont-chevron-down").addClass("aui-iconfont-chevron-right");h.animate({opacity:0},{complete:function(){h.hide()}});j="collapse"}h.toggleClass("expand-hidden");if(j==="expand"){AJS.trigger("confluence.expand-macro.expanded")}else{AJS.trigger("confluence.expand-macro.collapsed")}AJS.trigger("analyticsEvent",{name:"confluence.expand-macro.expand-click",data:{userAction:j}})}};this.getExpandElements=function(c){return this.$("div[id^='expander-control-'].expand-control",c)}};if(typeof Confluence==="undefined"){Confluence={}}if(typeof Confluence.Plugins==="undefined"){Confluence.Plugins={}}Confluence.Plugins.ExpandMacro={bind:function(b,c,g,f){var e=new a(b);var d=e.getExpandElements(c);d.length&&d.bind(g,e.createToggleFunction(f))}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.expand-macro:expand-macro-desktop-resources', location = 'com/atlassian/confluence/plugins/expand/js/expand-macro.js' */
AJS.toInit(function(a){Confluence.Plugins.ExpandMacro.bind(a,a("body"),"click keyup",function(b){return !(b.type=="keyup"&&b.keyCode!=13)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/soy/sharelinks-urlmacro-templates.soy' */
// This file was automatically generated from sharelinks-urlmacro-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.SharelinksUrlMacro.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.SharelinksUrlMacro == 'undefined') { Confluence.Blueprints.SharelinksUrlMacro = {}; }


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink = function(opt_data, opt_ignored) {
  return '<a class="aui-button sharelinks-urlmacro-button" href="' + Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript(opt_data) + '"><span class="aui-icon aui-icon-small aui-iconfont-confluence">Confluence Icon</span> <span>' + soy.$$escapeHtml('Share on Confluence') + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink.soyTemplateName = 'Confluence.Blueprints.SharelinksUrlMacro.bookmarkletLink';
}


Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript = function(opt_data, opt_ignored) {
  return 'javascript:(function(){var screenWidth=screen.width,screenHeight=screen.height,popupWidth=640,popupHeight=580,popupLeft=0,popupTop=0; if(screenWidth>popupWidth){popupLeft=Math.round((screenWidth/2)-(popupWidth/2));}if(screenHeight>popupHeight){popupTop=Math.round((screenHeight/2)-(popupHeight/2));}window.open(\'' + soy.$$filterNoAutoescape(opt_data.bookmarkletActionURL) + '?bookmarkedURL=\'+encodeURIComponent(window.location.href), \'\',\'left=\'+popupLeft+\',top=\'+popupTop+\',width=\'+popupWidth+\',height=\'+popupHeight+\',personalbar=0,toolbar=0,scrollbars=1,resizable=1\');}());';
};
if (goog.DEBUG) {
  Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript.soyTemplateName = 'Confluence.Blueprints.SharelinksUrlMacro.bookmarkletScript';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:sharelinks-urlmacro-resources', location = 'com/atlassian/confluence/plugins/sharelinksurlmacro/js/sharelinks-urlmacro.js' */
AJS.toInit(function(a){a(".sharelinks-urlmacro-button").click(function(){alert("Drag this link to your toolbar");return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:plupload', location = 'js/plupload.js' */
(function(){function x(){this.returnValue=!1}function y(){this.cancelBubble=!0}var z=0,p=[],u={},v={},t={},w={"<":"lt",">":"gt","&":"amp",'"':"quot","'":"#39"},A=/[<>&\"\']/g,q=window.setTimeout,m={},h,j="application/msword,doc dot,application/pdf,pdf,application/pgp-signature,pgp,application/postscript,ps ai eps,application/rtf,rtf,application/vnd.ms-excel,xls xlb,application/vnd.ms-powerpoint,ppt pps pot,application/zip,zip,application/java-archive,jar,application/java-archive,war,application/java-archive,ear,application/x-shockwave-flash,swf swfl,application/vnd.openxmlformats-officedocument.spreadsheetml.sheet,xlsx,application/vnd.openxmlformats-officedocument.spreadsheetml.template,xltx,application/vnd.openxmlformats-officedocument.presentationml.presentation,pptx,application/vnd.openxmlformats-officedocument.presentationml.slideshow,ppsx,application/vnd.openxmlformats-officedocument.presentationml.template,potx,application/vnd.openxmlformats-officedocument.wordprocessingml.document,docx,application/vnd.openxmlformats-officedocument.wordprocessingml.template,dotx,audio/mpeg,mpga mpega mp2 mp3,audio/mp3,mp3,audio/x-wav,wav,audio/mp4,m4a,image/bmp,bmp,image/gif,gif,image/jpeg,jpeg jpg jpe,image/photoshop,psd,image/png,png,image/svg+xml,svg svgz,image/tiff,tiff tif,text/html,htm html xhtml,text/xml,xml,text/javascript,js,text/css,css,text/rtf,rtf,text/x-java-source,java,video/mpeg,mpeg mpg mpe,video/quicktime,qt mov,video/mp4,mp4,video/x-m4v,m4v,video/x-flv,flv,video/x-ms-wmv,wmv,video/avi,avi,video/webm,webm,video/vnd.rn-realvideo,rv,text/csv,csv,text/plain,asc txt text diff log,application/octet-stream,exe".split(/,/),
k,n,o;for(k=0;k<j.length;k+=2){o=j[k+1].split(/ /);for(n=0;n<o.length;n++){v[o[n]]=j[k];var r=t[j[k]]||[];r.push(o[n]);t[j[k]]=r}}j=navigator;k=j.userAgent;o=j.vendor;r=(n=/WebKit/.test(k))&&-1!==o.indexOf("Apple");o=window.opera&&window.opera.buildNumber;var j={windows:-1!==navigator.platform.indexOf("Win"),ie:!n&&!o&&/MSIE/gi.test(k)&&/Explorer/gi.test(j.appName),webkit:n,gecko:!n&&/Gecko/.test(k),safari:r,opera:!!o},c={VERSION:"@@version@@",STOPPED:1,STARTED:2,QUEUED:1,UPLOADING:2,FAILED:4,DONE:5,
GENERIC_ERROR:-100,HTTP_ERROR:-200,IO_ERROR:-300,SECURITY_ERROR:-400,INIT_ERROR:-500,FILE_SIZE_ERROR:-600,FILE_EXTENSION_ERROR:-601,IMAGE_FORMAT_ERROR:-700,IMAGE_MEMORY_ERROR:-701,IMAGE_DIMENSIONS_ERROR:-702,mimeTypes:v,mineTypeToExtensionsMap:t,ua:j,extend:function(a){c.each(arguments,function(b,g){0<g&&c.each(b,function(b,c){a[c]=b})});return a},getElement:function(a){return a&&1===a.nodeType?a:document.getElementById(a)},cleanName:function(a){var b,c;c=[/[\300-\306]/g,"A",/[\340-\346]/g,"a",/\307/g,
"C",/\347/g,"c",/[\310-\313]/g,"E",/[\350-\353]/g,"e",/[\314-\317]/g,"I",/[\354-\357]/g,"i",/\321/g,"N",/\361/g,"n",/[\322-\330]/g,"O",/[\362-\370]/g,"o",/[\331-\334]/g,"U",/[\371-\374]/g,"u"];for(b=0;b<c.length;b+=2)a=a.replace(c[b],c[b+1]);a=a.replace(/\s+/g,"_");return a=a.replace(/[^a-z0-9_\-\.]+/gi,"")},addRuntime:function(a,b){b.name=a;p[a]=b;p.push(b);return b},guid:function(){var a=(new Date).getTime().toString(32),b;for(b=0;5>b;b++)a+=Math.floor(65535*Math.random()).toString(32);return(c.guidPrefix||
"p")+a+(z++).toString(32)},buildUrl:function(a,b){var g="";c.each(b,function(a,b){g+=(g?"&":"")+encodeURIComponent(b)+"="+encodeURIComponent(a)});g&&(a+=(0<a.indexOf("?")?"&":"?")+g);return a},each:function(a,b){var c,f;if(a)if(c=a.length,void 0===c)for(f in a){if(a.hasOwnProperty(f)&&!1===b(a[f],f))break}else for(f=0;f<c&&!1!==b(a[f],f);f++);},formatSize:function(a){return void 0===a||/\D/.test(a)?c.translate("N/A"):1073741824<a?Math.round(a/1073741824,1)+" GB":1048576<a?Math.round(a/1048576,1)+
" MB":1024<a?Math.round(a/1024,1)+" KB":a+" b"},getPos:function(a,b){function c(a){var b,e=0;b=0;a&&(b=a.getBoundingClientRect(),a="CSS1Compat"===h.compatMode?h.documentElement:h.body,e=b.left+a.scrollLeft,b=b.top+a.scrollTop);return{x:e,y:b}}var f=0,d=0,e,h=document,b=b||h.body;if(a&&a.getBoundingClientRect&&0<navigator.userAgent.indexOf("MSIE")&&8!==h.documentMode)return f=c(a),d=c(b),{x:f.x-d.x,y:f.y-d.y};for(e=a;e&&e!=b&&e.nodeType;)f+=e.offsetLeft||0,d+=e.offsetTop||0,e=e.offsetParent;for(e=
a.parentNode;e&&e!=b&&e.nodeType;)f-=e.scrollLeft||0,d-=e.scrollTop||0,e=e.parentNode;return{x:f,y:d}},getSize:function(a){return{w:a.offsetWidth||a.clientWidth,h:a.offsetHeight||a.clientHeight}},parseSize:function(a){var b;"string"==typeof a&&(a=/^([0-9]+)([mgk]?)$/.exec(a.toLowerCase().replace(/[^0-9mkg]/g,"")),b=a[2],a=+a[1],"g"==b&&(a*=1073741824),"m"==b&&(a*=1048576),"k"==b&&(a*=1024));return a},xmlEncode:function(a){return a?(""+a).replace(A,function(a){return w[a]?"&"+w[a]+";":a}):a},toArray:function(a){var b,
c=[];for(b=0;b<a.length;b++)c[b]=a[b];return c},addI18n:function(a){return c.extend(u,a)},translate:function(a){return u[a]||a},isEmptyObj:function(a){if(void 0===a)return!0;for(var b in a)return!1;return!0},hasClass:function(a,b){return""==a.className?!1:RegExp("(^|\\s+)"+b+"(\\s+|$)").test(a.className)},addClass:function(a,b){c.hasClass(a,b)||(a.className=""==a.className?b:a.className.replace(/\s+$/,"")+" "+b)},removeClass:function(a,b){a.className=a.className.replace(RegExp("(^|\\s+)"+b+"(\\s+|$)"),
function(a,b,c){return" "===b&&" "===c?" ":""})},getStyle:function(a,b){if(a.currentStyle)return a.currentStyle[b];if(window.getComputedStyle)return window.getComputedStyle(a,null)[b]},addEvent:function(a,b,g,f){var d,b=b.toLowerCase();void 0===h&&(h="Plupload_"+c.guid());a.addEventListener?(d=g,a.addEventListener(b,d,!1)):a.attachEvent&&(d=function(){var a=window.event;a.target||(a.target=a.srcElement);a.preventDefault=x;a.stopPropagation=y;g(a)},a.attachEvent("on"+b,d));void 0===a[h]&&(a[h]=c.guid());
m.hasOwnProperty(a[h])||(m[a[h]]={});a=m[a[h]];a.hasOwnProperty(b)||(a[b]=[]);a[b].push({func:d,orig:g,key:f})},removeEvent:function(a,b,g){var f,d;"function"==typeof g?f=g:d=g;b=b.toLowerCase();if(a[h]&&m[a[h]]&&m[a[h]][b]){for(var g=m[a[h]][b],e=g.length-1;0<=e;e--)if(g[e].key===d||g[e].orig===f)if(a.detachEvent?a.detachEvent("on"+b,g[e].func):a.removeEventListener&&a.removeEventListener(b,g[e].func,!1),g[e].orig=null,g[e].func=null,g.splice(e,1),void 0!==f)break;g.length||delete m[a[h]][b];if(c.isEmptyObj(m[a[h]])){delete m[a[h]];
try{delete a[h]}catch(k){a[h]=void 0}}}},removeAllEvents:function(a,b){void 0!==a[h]&&a[h]&&c.each(m[a[h]],function(g,f){c.removeEvent(a,f,b)})},Uploader:function(a){function b(){var a,b=0,d;if(this.state==c.STARTED){for(d=0;d<e.length;d++)!a&&e[d].status==c.QUEUED?(a=e[d],a.status=c.UPLOADING,this.trigger("BeforeUpload",a)&&this.trigger("UploadFile",a)):b++;b==e.length&&(this.stop(),this.trigger("UploadComplete",e))}}function g(){var a,b;d.reset();for(a=0;a<e.length;a++)b=e[a],void 0!==b.size?(d.size+=
b.size,d.loaded+=b.loaded):d.size=void 0,b.status==c.DONE?d.uploaded++:b.status==c.FAILED?d.failed++:d.queued++;void 0===d.size?d.percent=0<e.length?Math.ceil(100*(d.uploaded/e.length)):0:(d.bytesPerSec=Math.ceil(d.loaded/((+new Date-h||1)/1E3)),d.percent=0<d.size?Math.ceil(100*(d.loaded/d.size)):0)}var f={},d,e=[],h;d=new c.QueueProgress;a=c.extend({chunk_size:0,multipart:!0,multi_selection:!0,file_data_name:"file",filters:[]},a);c.extend(this,{state:c.STOPPED,runtime:"",features:{},files:e,settings:a,
total:d,id:c.guid(),init:function(){function f(){var a=s[k++],b,e,d;if(a){b=a.getFeatures();if(e=i.settings.required_features){e=e.split(",");for(d=0;d<e.length;d++)if(!b[e[d]]){f();return}}a.init(i,function(c){c&&c.success?(i.features=b,i.runtime=a.name,i.trigger("Init",{runtime:a.name}),i.trigger("PostInit"),i.refresh()):f()})}else i.trigger("Error",{code:c.INIT_ERROR,message:c.translate("Init error.")})}var i=this,l,s,k=0,j;"function"==typeof a.preinit?a.preinit(i):c.each(a.preinit,function(a,
b){i.bind(b,a)});a.page_url=a.page_url||document.location.pathname.replace(/\/[^\/]+$/g,"/");/^(\w+:\/\/|\/)/.test(a.url)||(a.url=a.page_url+a.url);a.chunk_size=c.parseSize(a.chunk_size);a.max_file_size=c.parseSize(a.max_file_size);i.bind("FilesAdded",function(b,d){b.trigger("Started",d);var f,g,l=0,h;if((f=a.filters)&&f.length){h=[];c.each(f,function(a){c.each(a.extensions.split(/,/),function(a){/^\s*\*\s*$/.test(a)?h.push("\\.*"):h.push("\\."+a.replace(RegExp("["+"/^$.*+?|()[]{}\\".replace(/./g,
"\\$&")+"]","g"),"\\$&"))})});h=RegExp(h.join("|")+"$","i")}for(f=0;f<d.length;f++){g=d[f];g.loaded=0;g.percent=0;g.status=c.QUEUED;if(h&&!h.test(g.name))b.trigger("Error",{code:c.FILE_EXTENSION_ERROR,message:c.translate("File extension error."),file:g});else if(g.size!==void 0&&g.size>a.max_file_size)b.trigger("Error",{code:c.FILE_SIZE_ERROR,message:c.translate("File size error."),file:g});else{e.push(g);l++}}if(l)q(function(){i.trigger("QueueChanged");i.refresh()},1);else return false});a.unique_names&&
i.bind("UploadFile",function(a,b){var c=b.name.match(/\.([^.]+)$/),d="tmp";c&&(d=c[1]);b.target_name=b.id+"."+d});i.bind("UploadProgress",function(a,b){b.percent=b.size>0?Math.ceil(b.loaded/b.size*100):100;g()});i.bind("StateChanged",function(a){if(a.state==c.STARTED)h=+new Date;else if(a.state==c.STOPPED)for(l=a.files.length-1;l>=0;l--)if(a.files[l].status==c.UPLOADING){a.files[l].status=c.QUEUED;g()}});i.bind("QueueChanged",g);i.bind("Error",function(a,e){if(e.file){e.file.status=c.FAILED;g();a.state==
c.STARTED&&(d.queued||q(function(){b.call(i)},1))}});i.bind("FileUploaded",function(a,d){d.status=c.DONE;d.loaded=d.size;a.trigger("UploadProgress",d);q(function(){b.call(i)},1)});if(a.runtimes){s=[];j=a.runtimes.split(/\s?,\s?/);for(l=0;l<j.length;l++)p[j[l]]&&s.push(p[j[l]])}else s=p;f();"function"==typeof a.init?a.init(i):c.each(a.init,function(a,b){i.bind(b,a)})},refresh:function(){this.trigger("Refresh")},start:function(){this.state!=c.STARTED&&(this.state=c.STARTED,this.trigger("StateChanged"),
b.call(this))},stop:function(){this.state!=c.STOPPED&&(this.state=c.STOPPED,this.trigger("CancelUpload"),this.trigger("StateChanged"))},getFile:function(a){var b;for(b=e.length-1;0<=b;b--)if(e[b].id===a)return e[b]},removeFile:function(a){var b;for(b=e.length-1;0<=b;b--)if(e[b].id===a.id)return this.splice(b,1)[0]},splice:function(a,b){var f;f=e.splice(void 0===a?0:a,void 0===b?e.length:b);this.trigger("FilesRemoved",f);this.trigger("QueueChanged");f[0].status==c.UPLOADING&&this.state==c.STARTED&&
this.trigger("CancelUpload");if(!d.queued){var g=this;q(function(){g.trigger("UploadComplete")})}return f},trigger:function(a){var b=f[a.toLowerCase()],c,d;if(b){d=Array.prototype.slice.call(arguments);d[0]=this;for(c=0;c<b.length;c++)if(!1===b[c].func.apply(b[c].scope,d))return!1}return!0},hasEventListener:function(a){return!!f[a.toLowerCase()]},bind:function(a,b,c){var d,a=a.toLowerCase();d=f[a]||[];d.push({func:b,scope:c||this});f[a]=d},unbind:function(a,b){var a=a.toLowerCase(),c=f[a],d;if(c){if(void 0!==
b)for(d=c.length-1;0<=d;d--){if(c[d].func===b){c.splice(d,1);break}}else c=[];c.length||delete f[a]}},unbindAll:function(){var a=this;c.each(f,function(b,c){a.unbind(c)})},destroy:function(){this.trigger("Destroy");this.unbindAll()}})},File:function(a,b,c){this.id=a;this.name=b;this.size=c;this.status=this.percent=this.loaded=0},Runtime:function(){this.getFeatures=function(){};this.init=function(){}},QueueProgress:function(){var a=this;a.size=0;a.loaded=0;a.uploaded=0;a.failed=0;a.queued=0;a.percent=
0;a.bytesPerSec=0;a.reset=function(){a.size=a.loaded=a.uploaded=a.failed=a.queued=a.percent=a.bytesPerSec=0}},runtimes:{}};window.plupload=c})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:plupload', location = 'js/plupload.html5.js' */
(function(s,j,f,p){function G(f,e,k,g){var b,a,d,q,m=this;var c=y[f.id],r=function(c){b=j.createElement("canvas");b.style.display="none";j.body.appendChild(b);a=b.getContext("2d");d=new Image;d.onerror=d.onabort=function(){g({success:!1})};d.onload=function(){var r,t,j,o;e.width||(e.width=d.width);e.height||(e.height=d.height);q=Math.min(e.width/d.width,e.height/d.height);if(1>q||1===q&&"image/jpeg"===k){r=Math.round(d.width*q);t=Math.round(d.height*q);b.width=r;b.height=t;a.drawImage(d,0,0,r,t);
if("image/jpeg"===k){if(j=new w(atob(c.substring(c.indexOf("base64,")+7))),j.headers&&j.headers.length&&(o=new H,o.init(j.get("exif")[0])&&(o.setExif("PixelXDimension",r),o.setExif("PixelYDimension",t),j.set("exif",o.getBinary()),m.hasEventListener("ExifData")&&m.trigger("ExifData",f,o.EXIF()),m.hasEventListener("GpsData")&&m.trigger("GpsData",f,o.GPS()))),e.quality)try{c=b.toDataURL(k,e.quality/100)}catch(s){c=b.toDataURL(k)}}else c=b.toDataURL(k);c=c.substring(c.indexOf("base64,")+7);c=atob(c);
j&&(j.headers&&j.headers.length)&&(c=j.restore(c),j.purge());b.parentNode.removeChild(b);g({success:!0,data:c})}else g({success:!1})};d.src=c},t;"FileReader"in s?(t=new FileReader,t.readAsDataURL(c),t.onload=function(){r(t.result)}):r(c.getAsDataURL())}function C(){function f(b,a){var d=k?0:-8*(a-1),q=0,m;for(m=0;m<a;m++)q|=g.charCodeAt(b+m)<<Math.abs(d+8*m);return q}function e(b,a,d){d=3===arguments.length?d:g.length-a-1;g=g.substr(0,a)+b+g.substr(d+a)}var k=!1,g;return{II:function(b){if(b===p)return k;
k=b},init:function(b){k=!1;g=b},SEGMENT:function(b,a,d){switch(arguments.length){case 1:return g.substr(b,g.length-b-1);case 2:return g.substr(b,a);case 3:e(d,b,a);break;default:return g}},BYTE:function(b){return f(b,1)},SHORT:function(b){return f(b,2)},LONG:function(b,a){if(a===p)return f(b,4);var d="",q=k?0:-24,m;for(m=0;4>m;m++)d+=String.fromCharCode(a>>Math.abs(q+8*m)&255);e(d,b,4)},SLONG:function(b){b=f(b,4);return 2147483647<b?b-4294967296:b},STRING:function(b,a){for(var d="",a=a+b;b<a;b++)d+=
String.fromCharCode(f(b,1));return d}}}function w(f){var e={65505:{app:"EXIF",name:"APP1",signature:"Exif\x00"},65506:{app:"ICC",name:"APP2",signature:"ICC_PROFILE\x00"},65517:{app:"IPTC",name:"APP13",signature:"Photoshop 3.0\x00"}},k=[],g,b,a=p,d=0;g=new C;g.init(f);if(65496===g.SHORT(0)){b=2;for(f=Math.min(1048576,f.length);b<=f;)if(a=g.SHORT(b),65488<=a&&65495>=a)b+=2;else{if(65498===a||65497===a)break;d=g.SHORT(b+2)+2;e[a]&&g.STRING(b+4,e[a].signature.length)===e[a].signature&&k.push({hex:a,app:e[a].app.toUpperCase(),
name:e[a].name.toUpperCase(),start:b,length:d,segment:g.SEGMENT(b,d)});b+=d}g.init(null);return{headers:k,restore:function(a){g.init(a);var d=new w(a);if(!d.headers)return!1;for(a=d.headers.length;0<a;a--){var c=d.headers[a-1];g.SEGMENT(c.start,c.length,"")}d.purge();b=65504==g.SHORT(2)?4+g.SHORT(4):2;a=0;for(d=k.length;a<d;a++)g.SEGMENT(b,0,k[a].segment),b+=k[a].length;return g.SEGMENT()},get:function(a){for(var d=[],c=0,b=k.length;c<b;c++)k[c].app===a.toUpperCase()&&d.push(k[c].segment);return d},
set:function(a,d){var c=[];"string"===typeof d?c.push(d):c=d;for(var b=ii=0,f=k.length;b<f&&!(k[b].app===a.toUpperCase()&&(k[b].segment=c[ii],k[b].length=c[ii].length,ii++),ii>=c.length);b++);},purge:function(){k=[];g.init(null)}}}}function H(){function f(a,d){var q=e.SHORT(a),m,c,k,h,l,j=[],n={};for(m=0;m<q;m++)if(l=a+12*m+2,k=d[e.SHORT(l)],k!==p){c=e.SHORT(l+=2);h=e.LONG(l+=2);l+=4;j=[];switch(c){case 1:case 7:4<h&&(l=e.LONG(l)+g.tiffHeader);for(c=0;c<h;c++)j[c]=e.BYTE(l+c);break;case 2:4<h&&(l=
e.LONG(l)+g.tiffHeader);n[k]=e.STRING(l,h-1);continue;case 3:2<h&&(l=e.LONG(l)+g.tiffHeader);for(c=0;c<h;c++)j[c]=e.SHORT(l+2*c);break;case 4:1<h&&(l=e.LONG(l)+g.tiffHeader);for(c=0;c<h;c++)j[c]=e.LONG(l+4*c);break;case 5:l=e.LONG(l)+g.tiffHeader;for(c=0;c<h;c++)j[c]=e.LONG(l+4*c)/e.LONG(l+4*c+4);break;case 9:l=e.LONG(l)+g.tiffHeader;for(c=0;c<h;c++)j[c]=e.SLONG(l+4*c);break;case 10:l=e.LONG(l)+g.tiffHeader;for(c=0;c<h;c++)j[c]=e.SLONG(l+4*c)/e.SLONG(l+4*c+4);break;default:continue}h=1==h?j[0]:j;
n[k]=b.hasOwnProperty(k)&&"object"!=typeof h?b[k][h]:h}return n}var e,k,g={},b;e=new C;k={tiff:{274:"Orientation",34665:"ExifIFDPointer",34853:"GPSInfoIFDPointer"},exif:{36864:"ExifVersion",40961:"ColorSpace",40962:"PixelXDimension",40963:"PixelYDimension",36867:"DateTimeOriginal",33434:"ExposureTime",33437:"FNumber",34855:"ISOSpeedRatings",37377:"ShutterSpeedValue",37378:"ApertureValue",37383:"MeteringMode",37384:"LightSource",37385:"Flash",41986:"ExposureMode",41987:"WhiteBalance",41990:"SceneCaptureType",
41988:"DigitalZoomRatio",41992:"Contrast",41993:"Saturation",41994:"Sharpness"},gps:{"0":"GPSVersionID",1:"GPSLatitudeRef",2:"GPSLatitude",3:"GPSLongitudeRef",4:"GPSLongitude"}};b={ColorSpace:{1:"sRGB","0":"Uncalibrated"},MeteringMode:{"0":"Unknown",1:"Average",2:"CenterWeightedAverage",3:"Spot",4:"MultiSpot",5:"Pattern",6:"Partial",255:"Other"},LightSource:{1:"Daylight",2:"Fliorescent",3:"Tungsten",4:"Flash",9:"Fine weather",10:"Cloudy weather",11:"Shade",12:"Daylight fluorescent (D 5700 - 7100K)",
13:"Day white fluorescent (N 4600 -5400K)",14:"Cool white fluorescent (W 3900 - 4500K)",15:"White fluorescent (WW 3200 - 3700K)",17:"Standard light A",18:"Standard light B",19:"Standard light C",20:"D55",21:"D65",22:"D75",23:"D50",24:"ISO studio tungsten",255:"Other"},Flash:{"0":"Flash did not fire.",1:"Flash fired.",5:"Strobe return light not detected.",7:"Strobe return light detected.",9:"Flash fired, compulsory flash mode",13:"Flash fired, compulsory flash mode, return light not detected",15:"Flash fired, compulsory flash mode, return light detected",
16:"Flash did not fire, compulsory flash mode",24:"Flash did not fire, auto mode",25:"Flash fired, auto mode",29:"Flash fired, auto mode, return light not detected",31:"Flash fired, auto mode, return light detected",32:"No flash function",65:"Flash fired, red-eye reduction mode",69:"Flash fired, red-eye reduction mode, return light not detected",71:"Flash fired, red-eye reduction mode, return light detected",73:"Flash fired, compulsory flash mode, red-eye reduction mode",77:"Flash fired, compulsory flash mode, red-eye reduction mode, return light not detected",
79:"Flash fired, compulsory flash mode, red-eye reduction mode, return light detected",89:"Flash fired, auto mode, red-eye reduction mode",93:"Flash fired, auto mode, return light not detected, red-eye reduction mode",95:"Flash fired, auto mode, return light detected, red-eye reduction mode"},ExposureMode:{"0":"Auto exposure",1:"Manual exposure",2:"Auto bracket"},WhiteBalance:{"0":"Auto white balance",1:"Manual white balance"},SceneCaptureType:{"0":"Standard",1:"Landscape",2:"Portrait",3:"Night scene"},
Contrast:{"0":"Normal",1:"Soft",2:"Hard"},Saturation:{"0":"Normal",1:"Low saturation",2:"High saturation"},Sharpness:{"0":"Normal",1:"Soft",2:"Hard"},GPSLatitudeRef:{N:"North latitude",S:"South latitude"},GPSLongitudeRef:{E:"East longitude",W:"West longitude"}};return{init:function(a){g={tiffHeader:10};if(a===p||!a.length)return!1;e.init(a);return 65505===e.SHORT(0)&&"EXIF\x00"===e.STRING(4,5).toUpperCase()?(a=p,a=g.tiffHeader,e.II(18761==e.SHORT(a)),42!==e.SHORT(a+=2)?a=!1:(g.IFD0=g.tiffHeader+e.LONG(a+
2),a=f(g.IFD0,k.tiff),g.exifIFD="ExifIFDPointer"in a?g.tiffHeader+a.ExifIFDPointer:p,g.gpsIFD="GPSInfoIFDPointer"in a?g.tiffHeader+a.GPSInfoIFDPointer:p,a=!0),a):!1},EXIF:function(){var a;a=f(g.exifIFD,k.exif);a.ExifVersion&&(a.ExifVersion=String.fromCharCode(a.ExifVersion[0],a.ExifVersion[1],a.ExifVersion[2],a.ExifVersion[3]));return a},GPS:function(){var a;a=f(g.gpsIFD,k.gps);a.GPSVersionID&&(a.GPSVersionID=a.GPSVersionID.join("."));return a},setExif:function(a,d){if("PixelXDimension"!==a&&"PixelYDimension"!==
a)return!1;var b;b=a;var f,c,h,j=0;if("string"===typeof b)for(hex in f=k.exif,f)if(f[hex]===b){b=hex;break}f=g.exifIFD;c=e.SHORT(f);for(i=0;i<c;i++)if(h=f+12*i+2,e.SHORT(h)==b){j=h+8;break}j?(e.LONG(j,d),b=!0):b=!1;return b},getBinary:function(){return e.SEGMENT()}}}var y={},F;f.runtimes.Html5=f.addRuntime("html5",{getFeatures:function(){var h,e,k,g,b,a;e=k=b=a=!1;s.XMLHttpRequest&&(h=new XMLHttpRequest,k=!!h.upload,e=!(!h.sendAsBinary&&!h.upload));e&&(g=!!(h.sendAsBinary||s.Uint8Array&&s.ArrayBuffer),
b=!(!File||!File.prototype.getAsDataURL&&!s.FileReader||!g),a=!(!File||!File.prototype.mozSlice&&!File.prototype.webkitSlice&&!File.prototype.slice));F=f.ua.safari&&f.ua.windows&&navigator.userAgent&&0<navigator.userAgent.indexOf("Version/4");h=e;e=j.createElement("div");return{html5:h,dragdrop:"draggable"in e||"ondragstart"in e&&"ondrop"in e,jpgresize:b,pngresize:b,multipart:b||!!s.FileReader||!!s.FormData,canSendBinary:g,cantSendBlobInFormData:!(!f.ua.gecko||!s.FormData||!s.FileReader||FileReader.prototype.readAsArrayBuffer),
progress:k,chunks:a,multi_selection:!(f.ua.safari&&f.ua.windows),triggerDialog:f.ua.gecko&&s.FormData||f.ua.webkit||f.ua.windows}},init:function(h,e){function k(a){var d,b,g=[],c,e={};for(b=0;b<a.length;b++)d=a[b],e[d.name]||(e[d.name]=!0,c=f.guid(),y[c]=d,c=new f.File(c,d.fileName||d.name,d.fileSize||d.size),c.nativeFile=d,g.push(c));g.length&&h.trigger("FilesAdded",g)}var g,b;g=this.getFeatures();g.html5?(h.upload=function(a){k(a)},h.bind("Init",function(a){var d,b,g=[],c,e,t=a.settings.filters,
l,s;c=j.body;var n;d=j.createElement("div");d.id=a.id+"_html5_container";f.extend(d.style,{position:"absolute",background:h.settings.shim_bgcolor||"transparent",width:"100px",height:"100px",overflow:"hidden",zIndex:99999,opacity:h.settings.shim_bgcolor?"":0});d.className="plupload html5";h.settings.container&&(c=j.getElementById(h.settings.container),"static"===f.getStyle(c,"position")&&(c.style.position="relative"));c.appendChild(d);c=0;a:for(;c<t.length;c++){l=t[c].extensions.split(/,/);for(e=0;e<
l.length;e++){if("*"===l[e]){g=[];break a}(s=f.mimeTypes[l[e]])&&g.push(s)}}d.innerHTML='<input id="'+h.id+'_html5"  style="font-size:999px" type="file" accept="'+g.join(",")+'" '+(h.settings.multi_selection&&h.features.multi_selection?'multiple="multiple"':"")+" />";d.scrollTop=100;n=j.getElementById(h.id+"_html5");h.settings.inputFileClazz&&(n.className+=" "+h.settings.inputFileClazz);a.features.triggerDialog?f.extend(n.style,{position:"absolute",width:"100%",height:"100%"}):f.extend(n.style,{cssFloat:"right",
styleFloat:"right"});var p=function(){k(this.files);if(navigator.appVersion.indexOf("MSIE10")===-1){n=this.cloneNode(true);n.onchange=p;this.parentNode.replaceChild(n,this)}else this.value=""};n.onchange=p;if(b="string"===typeof a.settings.browse_button?j.getElementById(a.settings.browse_button):a.settings.browse_button){var o=a.settings.browse_button_hover,B=a.settings.browse_button_active;d=a.features.triggerDialog?b:d;o&&(f.addEvent(d,"mouseover",function(){f.addClass(b,o)},a.id),f.addEvent(d,
"mouseout",function(){f.removeClass(b,o)},a.id));B&&(f.addEvent(d,"mousedown",function(){f.addClass(b,B)},a.id),f.addEvent(j.body,"mouseup",function(){f.removeClass(b,B)},a.id));a.features.triggerDialog&&f.addEvent(b,"click",function(b){j.getElementById(a.id+"_html5").click();b.preventDefault()},a.id)}}),h.bind("PostInit",function(){var a=f.getElement(h.settings.drop_element),b,e=!1;a&&(F?(f.addEvent(a,"dragenter",function(){var b,d;b=j.getElementById(h.id+"_drop");b||(b=j.createElement("input"),
b.setAttribute("type","file"),b.setAttribute("id",h.id+"_drop"),b.setAttribute("multiple","multiple"),f.addEvent(b,"change",function(){k(this.files);f.removeEvent(b,"change",h.id);b.parentNode.removeChild(b)},h.id),a.appendChild(b),e=!0);f.getPos(a,j.getElementById(h.settings.container));d=f.getSize(a);"static"===f.getStyle(a,"position")&&f.extend(a.style,{position:"relative"});f.extend(b.style,{position:"absolute",display:"block",top:0,left:0,width:d.w+"px",height:d.h+"px",opacity:0})},h.id),f.addEvent(a,
"dragleave",function(){e||(b&&b.parentElement.removeChild(b),b=null);e=!1})):(f.addEvent(a,"dragover",function(a){a.preventDefault()},h.id),f.addEvent(a,"drop",function(a){if(!$(".disable-attachment-uploader").length){var c=a.dataTransfer;c&&c.files&&k(c.files)}b&&b.parentElement.removeChild(b);b=null;a.preventDefault();h.settings.stop_propagation&&(a.cancelBubble?a.cancelBubble=!0:a.stopPropagation())},h.id)))}),h.bind("Refresh",function(a){var b,e,g;if(b=j.getElementById(h.settings.browse_button))e=
f.getPos(b,j.getElementById(a.settings.container)),g=f.getSize(b),a=j.getElementById(h.id+"_html5_container"),f.extend(a.style,{top:e.y+"px",left:e.x+"px",width:g.w+"px",height:g.h+"px"}),h.features.triggerDialog&&("static"===f.getStyle(b,"position")&&f.extend(b.style,{position:"relative"}),e=parseInt(f.getStyle(b,"z-index"),10),isNaN(e)&&(e=0),f.extend(b.style,{zIndex:e}),f.extend(a.style,{zIndex:e-1}))}),h.bind("CancelUpload",function(){b&&b.abort&&b.abort()}),h.bind("UploadFile",function(a,d){function e(c){function k(){function e(c){var h=
0,m="----pluploadboundary"+f.guid(),n,r="";b=new XMLHttpRequest;b.upload&&(b.upload.onprogress=function(b){d.loaded=Math.min(d.size,q+b.loaded-h);a.trigger("UploadProgress",d)});b.onreadystatechange=function(){var e,g;if(b.readyState==4){try{e=b.status}catch(h){e=0}if(e>=400)a.trigger("Error",{code:f.HTTP_ERROR,message:f.translate("HTTP Error."),file:d,status:e,xhr:b,response:b.responseText||""});else{if(p){g={chunk:j,chunks:p,response:b.responseText,status:e};a.trigger("ChunkUploaded",d,g);q=q+z;
if(g.cancelled){d.status=f.FAILED;return}d.loaded=Math.min(d.size,(j+1)*u)}else d.loaded=d.size;a.trigger("UploadProgress",d);c=o=n=r=null;if(!p||++j>=p){d.status=f.DONE;a.trigger("FileUploaded",d,{response:b.responseText,status:e})}else k()}}};if(a.settings.multipart&&g.multipart){x.name=d.target_name||d.name;b.open("post",D,!0);f.each(a.settings.headers,function(a,c){b.setRequestHeader(c,a)});if("string"!==typeof c&&s.FormData){n=new FormData;f.each(f.extend(x,a.settings.multipart_params),function(a,
b){n.append(b,a)});n.append(a.settings.file_data_name,c);b.send(n);return}if("string"===typeof c){b.setRequestHeader("Content-Type","multipart/form-data; boundary="+m);f.each(f.extend(x,a.settings.multipart_params),function(a,b){r=r+("--"+m+'\r\nContent-Disposition: form-data; name="'+b+'"\r\n\r\n');r=r+(unescape(encodeURIComponent(a))+"\r\n")});y=f.mimeTypes[d.name.replace(/^.+\.([^.]+)/,"$1").toLowerCase()]||"application/octet-stream";r+="--"+m+'\r\nContent-Disposition: form-data; name="'+a.settings.file_data_name+
'"; filename="'+unescape(encodeURIComponent(d.name))+'"\r\nContent-Type: '+y+"\r\n\r\n"+c+"\r\n--"+m+"--\r\n";h=r.length-c.length;c=r;if(b.sendAsBinary)b.sendAsBinary(c);else if(g.canSendBinary){for(var w=new Uint8Array(c.length),v=0;v<c.length;v++)w[v]=c.charCodeAt(v)&255;b.send(w.buffer)}return}}D=f.buildUrl(a.settings.url,f.extend(x,a.settings.multipart_params));b.open("post",D,!0);b.setRequestHeader("Content-Type","application/octet-stream");c.encoding&&b.setRequestHeader("Content-Encoding",c.encoding);
f.each(a.settings.headers,function(a,c){b.setRequestHeader(c,a)});b.send(c.getData?c.getData():c)}var o,p,x,u,z,y,D=a.settings.url;if(!(d.status==f.DONE||d.status==f.FAILED||a.state==f.STOPPED)){x={name:d.target_name||d.name};if(h.chunk_size&&d.size>h.chunk_size&&(g.chunks||"string"==typeof c)){u=h.chunk_size;p=Math.ceil(d.size/u);z=Math.min(u,d.size-j*u);if("string"==typeof c)o=c.substring(j*u,j*u+z);else{var v=c,A=j*u,E=j*u+z,w;if(File.prototype.slice)try{v.slice(),o=v.slice(A,E)}catch(C){o=v.slice(A,
E-A)}else o=(w=File.prototype.webkitSlice||File.prototype.mozSlice)?w.call(v,A,E):null}x.chunk=j;x.chunks=p}else z=d.size,o=c;"string"!==typeof o&&n&&g.cantSendBlobInFormData&&g.chunks&&a.settings.chunk_size?(n.onload=function(){e(n.result)},n.readAsBinaryString(o)):e(o)}}var j=0,q=0,n="FileReader"in s?new FileReader:null;k()}var h=a.settings,c;c=y[d.id];g.jpgresize&&a.settings.resize&&/\.(png|jpg|jpeg)$/i.test(d.name)?G.call(a,d,a.settings.resize,/\.png$/i.test(d.name)?"image/png":"image/jpeg",function(a){a.success?
(d.size=a.data.length,e(a.data)):e(c)}):e(c)}),h.bind("Destroy",function(a){var b,e,g=j.body,c={inputContainer:a.id+"_html5_container",inputFile:a.id+"_html5",browseButton:a.settings.browse_button,dropElm:a.settings.drop_element};for(b in c)(e=j.getElementById(c[b]))&&f.removeAllEvents(e,a.id);f.removeAllEvents(j.body,a.id);a.settings.container&&(g=j.getElementById(a.settings.container));g.removeChild(j.getElementById(c.inputContainer))}),e({success:!0})):e({success:!1})}})})(window,document,plupload);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:plupload', location = '/includes/js/amd/shim/plupload-amd.js' */
define("plupload",function(){return plupload});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--c7d6d1dc80', location = 'aui.chunk.a7fc0d5b8767e9b40315--bdd2730e8619a65df894.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.vendors--c7d6d1dc80"],{"2NYx":function(t,i,o){var e,n,l;n=[o("oDIA"),o("O+lX")],void 0===(l="function"==typeof(e=function(t){return function(){var i,o=Math.max,e=Math.abs,n=/left|center|right/,l=/top|center|bottom/,s=/[\+\-]\d+(\.[\d]+)?%?/,f=/^\w+/,h=/%$/,r=t.fn.position;function p(t,i,o){return[parseFloat(t[0])*(h.test(t[0])?i/100:1),parseFloat(t[1])*(h.test(t[1])?o/100:1)]}function c(i,o){return parseInt(t.css(i,o),10)||0}t.position={scrollbarWidth:function(){if(void 0!==i)return i;var o,e,n=t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),l=n.children()[0];return t("body").append(n),o=l.offsetWidth,n.css("overflow","scroll"),o===(e=l.offsetWidth)&&(e=n[0].clientWidth),n.remove(),i=o-e},getScrollInfo:function(i){var o=i.isWindow||i.isDocument?"":i.element.css("overflow-x"),e=i.isWindow||i.isDocument?"":i.element.css("overflow-y"),n="scroll"===o||"auto"===o&&i.width<i.element[0].scrollWidth;return{width:"scroll"===e||"auto"===e&&i.height<i.element[0].scrollHeight?t.position.scrollbarWidth():0,height:n?t.position.scrollbarWidth():0}},getWithinInfo:function(i){var o=t(i||window),e=t.isWindow(o[0]),n=!!o[0]&&9===o[0].nodeType;return{element:o,isWindow:e,isDocument:n,offset:e||n?{left:0,top:0}:t(i).offset(),scrollLeft:o.scrollLeft(),scrollTop:o.scrollTop(),width:o.outerWidth(),height:o.outerHeight()}}},t.fn.position=function(i){if(!i||!i.of)return r.apply(this,arguments);i=t.extend({},i);var h,a,d,g,u,m,w=t(i.of),W=t.position.getWithinInfo(i.within),v=t.position.getScrollInfo(W),y=(i.collision||"flip").split(" "),H={};return m=function(i){var o=i[0];return 9===o.nodeType?{width:i.width(),height:i.height(),offset:{top:0,left:0}}:t.isWindow(o)?{width:i.width(),height:i.height(),offset:{top:i.scrollTop(),left:i.scrollLeft()}}:o.preventDefault?{width:0,height:0,offset:{top:o.pageY,left:o.pageX}}:{width:i.outerWidth(),height:i.outerHeight(),offset:i.offset()}}(w),w[0].preventDefault&&(i.at="left top"),a=m.width,d=m.height,g=m.offset,u=t.extend({},g),t.each(["my","at"],function(){var t,o,e=(i[this]||"").split(" ");1===e.length&&(e=n.test(e[0])?e.concat(["center"]):l.test(e[0])?["center"].concat(e):["center","center"]),e[0]=n.test(e[0])?e[0]:"center",e[1]=l.test(e[1])?e[1]:"center",t=s.exec(e[0]),o=s.exec(e[1]),H[this]=[t?t[0]:0,o?o[0]:0],i[this]=[f.exec(e[0])[0],f.exec(e[1])[0]]}),1===y.length&&(y[1]=y[0]),"right"===i.at[0]?u.left+=a:"center"===i.at[0]&&(u.left+=a/2),"bottom"===i.at[1]?u.top+=d:"center"===i.at[1]&&(u.top+=d/2),h=p(H.at,a,d),u.left+=h[0],u.top+=h[1],this.each(function(){var n,l,s=t(this),f=s.outerWidth(),r=s.outerHeight(),m=c(this,"marginLeft"),x=c(this,"marginTop"),b=f+m+c(this,"marginRight")+v.width,T=r+x+c(this,"marginBottom")+v.height,L=t.extend({},u),P=p(H.my,s.outerWidth(),s.outerHeight());"right"===i.my[0]?L.left-=f:"center"===i.my[0]&&(L.left-=f/2),"bottom"===i.my[1]?L.top-=r:"center"===i.my[1]&&(L.top-=r/2),L.left+=P[0],L.top+=P[1],n={marginLeft:m,marginTop:x},t.each(["left","top"],function(o,e){t.ui.position[y[o]]&&t.ui.position[y[o]][e](L,{targetWidth:a,targetHeight:d,elemWidth:f,elemHeight:r,collisionPosition:n,collisionWidth:b,collisionHeight:T,offset:[h[0]+P[0],h[1]+P[1]],my:i.my,at:i.at,within:W,elem:s})}),i.using&&(l=function(t){var n=g.left-L.left,l=n+a-f,h=g.top-L.top,p=h+d-r,c={target:{element:w,left:g.left,top:g.top,width:a,height:d},element:{element:s,left:L.left,top:L.top,width:f,height:r},horizontal:l<0?"left":n>0?"right":"center",vertical:p<0?"top":h>0?"bottom":"middle"};a<f&&e(n+l)<a&&(c.horizontal="center"),d<r&&e(h+p)<d&&(c.vertical="middle"),o(e(n),e(l))>o(e(h),e(p))?c.important="horizontal":c.important="vertical",i.using.call(this,t,c)}),s.offset(t.extend(L,{using:l}))})},t.ui.position={fit:{left:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollLeft:n.offset.left,s=n.width,f=t.left-i.collisionPosition.marginLeft,h=l-f,r=f+i.collisionWidth-s-l;i.collisionWidth>s?h>0&&r<=0?(e=t.left+h+i.collisionWidth-s-l,t.left+=h-e):t.left=r>0&&h<=0?l:h>r?l+s-i.collisionWidth:l:h>0?t.left+=h:r>0?t.left-=r:t.left=o(t.left-f,t.left)},top:function(t,i){var e,n=i.within,l=n.isWindow?n.scrollTop:n.offset.top,s=i.within.height,f=t.top-i.collisionPosition.marginTop,h=l-f,r=f+i.collisionHeight-s-l;i.collisionHeight>s?h>0&&r<=0?(e=t.top+h+i.collisionHeight-s-l,t.top+=h-e):t.top=r>0&&h<=0?l:h>r?l+s-i.collisionHeight:l:h>0?t.top+=h:r>0?t.top-=r:t.top=o(t.top-f,t.top)}},flip:{left:function(t,i){var o,n,l=i.within,s=l.offset.left+l.scrollLeft,f=l.width,h=l.isWindow?l.scrollLeft:l.offset.left,r=t.left-i.collisionPosition.marginLeft,p=r-h,c=r+i.collisionWidth-f-h,a="left"===i.my[0]?-i.elemWidth:"right"===i.my[0]?i.elemWidth:0,d="left"===i.at[0]?i.targetWidth:"right"===i.at[0]?-i.targetWidth:0,g=-2*i.offset[0];p<0?((o=t.left+a+d+g+i.collisionWidth-f-s)<0||o<e(p))&&(t.left+=a+d+g):c>0&&((n=t.left-i.collisionPosition.marginLeft+a+d+g-h)>0||e(n)<c)&&(t.left+=a+d+g)},top:function(t,i){var o,n,l=i.within,s=l.offset.top+l.scrollTop,f=l.height,h=l.isWindow?l.scrollTop:l.offset.top,r=t.top-i.collisionPosition.marginTop,p=r-h,c=r+i.collisionHeight-f-h,a="top"===i.my[1]?-i.elemHeight:"bottom"===i.my[1]?i.elemHeight:0,d="top"===i.at[1]?i.targetHeight:"bottom"===i.at[1]?-i.targetHeight:0,g=-2*i.offset[1];p<0?((n=t.top+a+d+g+i.collisionHeight-f-s)<0||n<e(p))&&(t.top+=a+d+g):c>0&&((o=t.top-i.collisionPosition.marginTop+a+d+g-h)>0||e(o)<c)&&(t.top+=a+d+g)}},flipfit:{left:function(){t.ui.position.flip.left.apply(this,arguments),t.ui.position.fit.left.apply(this,arguments)},top:function(){t.ui.position.flip.top.apply(this,arguments),t.ui.position.fit.top.apply(this,arguments)}}}}(),t.ui.position})?e.apply(i,n):e)||(t.exports=l)}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_jquery.ui.position', location = 'aui.chunk.6d46b627bfb0d048fba9--406d570703742f04765b.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["jquery.ui.position"],{"7ih8":function(i,u,e){"use strict";Object.defineProperty(u,"__esModule",{value:!0}),e("2NYx"),u.default="jquery",i.exports=u.default}},[["7ih8","runtime","aui.splitchunk.vendors--20a97d6a33","aui.splitchunk.vendors--c7d6d1dc80","aui.splitchunk.172ffb6da7"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.progressbar', location = 'aui.chunk.0b8ab41abe40b010af1e--0a9e9a861f70d991a8b5.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.progressbar"],{JeHW:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressBarEl=void 0;var r=l(a("+x/D")),n=a("QFBp"),i=l(a("4dFR")),u=a("Ioyv"),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a("bPPT")),o=l(a("KloK"));function l(e){return e&&e.__esModule?e:{default:e}}var d="aui-progress-indicator-after-update",c="aui-progress-indicator-before-update",v="transitionend webkitTransitionEnd";function f(e,t,a){var n=a.currentProgress,i=a.value,s=(0,r.default)(e),o=(0,r.default)(t);"number"==typeof i&&i<=1&&i>=0&&(o.trigger(c,[n,i]),s.one(v,function(){o.trigger(d,[n,i])}),function(e,t,a){(0,u.recomputeStyle)(e),e.css("width",100*a+"%"),t.attr("data-value",a)}(s,o,i))}function p(e){var t=(0,r.default)(e).first(),a=t.children(".aui-progress-indicator-value");t.removeAttr("data-value"),(0,u.recomputeStyle)(t),a.css("width","")}var m={indeterminate:!1,max:1,val:0};function g(e){return(0,n.isNumber)(e)&&(0,n.isFinite)(e)&&!(0,n.isNaN)(e)}function b(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1,a=parseFloat(e);return g(a)?a:Number(t)}function h(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Number(parseFloat(e).toFixed(t))}function _(e){var t=e.val,a=function(e){return e>0?e:m.max}(e.max),r=function(e,t){return Math.max(0,Math.min(e,t))}(t,a),n=h(r/a,6);return{max:a,val:r,valAsFraction:n,valAsPercent:h(100*n,2)}}function x(e){var t=_(e._data),a=t.val,r=t.valAsFraction,n=t.max,i=e.querySelector(".aui-progress-indicator"),u=i.getAttribute("data-value");e.indeterminate?(i.removeAttribute("aria-valuenow"),p(i)):(i.setAttribute("aria-valuenow",a),i.setAttribute("aria-valuemax",n),f(i.querySelector(".aui-progress-indicator-value"),i,{currentProgress:u,value:r}))}function w(e,t){e._data.val=b(t.newValue,t.oldValue||m.val),x(e)}function y(e,t){e._data.max=b(t.newValue,t.oldValue||m.max),x(e)}var A=(0,i.default)("aui-progressbar",{template:function(e){e._data.max=b(e.getAttribute("max"),m.max),e._data.val=b(e.getAttribute("value"),m.val),e._data.indeterminate=e.hasAttribute("indeterminate");var t=_(e._data),a=t.val,r=t.max,n=t.valAsFraction,i=t.valAsPercent,u=e._data.indeterminate?"":'data-value="'+n+'"';e.innerHTML='<div class="aui-progress-indicator"\n         '+u+'\n         role="progressbar"\n         aria-valuemin="0"\n         aria-valuenow="'+a+'"\n         aria-valuemax="'+r+'"\n         tabindex="0"\n     >\n        <span class="aui-progress-indicator-value" style="width: '+i+'%"></span>\n    </div>'},attached:function(e){x(e)},attributes:{indeterminate:{created:function(e){e.indeterminate=!0},removed:function(e){e.indeterminate=!1}},value:{value:m.val,fallback:function(e,t){if(e._updating)return!1;w(e,t)}},max:{value:m.max,fallback:function(e,t){if(e._updating)return!1;y(e,t)}}},prototype:{get _data(){return this.__data||(this._data=(0,n.defaults)({},m))},set _data(e){return this.__data=e},get indeterminate(){return this._data.indeterminate},set indeterminate(e){this._data.indeterminate=!!e,x(this)},get value(){return _(this._data).val},set value(e){if(!g(e))return!1;var t={newValue:h(e,6)};this._updating=!0,this.setAttribute("value",t.newValue),this._updating=!1,w(this,t)},get max(){return _(this._data).max},set max(e){if(!g(e))return!1;var t={newValue:h(e,6)};this._updating=!0,this.setAttribute("max",t.newValue),this._updating=!1,y(this,t)}}}),P={update:s.fn(function(e,t){if("string"==typeof e){var a=document.getElementById(e);a&&(e=a)}var n=(0,r.default)(e).first(),i=n.children(".aui-progress-indicator-value"),u=n.attr("data-value"),s=!u,o=parseFloat(u)||0,l=u&&o===t;if(l&&(l=o===100*(parseFloat(i.get(0).style.width)||0)),!l)return s&&i.css("width",0),f(i,n,{currentProgress:o,value:t}),n},"AJS.progressBars.update",{sinceVersion:"7.7.0",removeInVersion:"9.0.0",extraInfo:"Use the <aui-progressbar> web component instead"}),setIndeterminate:s.fn(p,"AJS.progressBars.setIndeterminate",{sinceVersion:"7.7.0",removeInVersion:"9.0.0",extraInfo:"Use the <aui-progressbar> web component instead"})};(0,o.default)("progressBars",P),t.default=P,t.ProgressBarEl=A},NQOw:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.ProgressBarEl=t.progressBars=void 0;var r=a("JeHW");Object.defineProperty(t,"progressBars",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(r).default}}),Object.defineProperty(t,"ProgressBarEl",{enumerable:!0,get:function(){return r.ProgressBarEl}}),a("FStl"),a("Q0fs"),a("Nb/K")},"Nb/K":function(e,t,a){}},[["NQOw","runtime","aui.splitchunk.vendors--e54c7c7304","aui.splitchunk.vendors--b47d4b691d","aui.splitchunk.vendors--9c48cc20a9","aui.splitchunk.172ffb6da7","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.54d3f16c20","aui.splitchunk.e54c7c7304","aui.splitchunk.8659b532c1","aui.splitchunk.9c48cc20a9"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/drag-and-drop-utils.js' */
define("confluence-drag-and-drop/drag-and-drop-utils",["jquery","window","ajs"],function(d,f,e){return{defaultMimeType:"application/octet-stream",base:/^\w+:\/\/[^/?#]+/.exec(location.href),bindDragEnter:function(a,b){(b=this.isFireFox35OrLater()?this.firefox35DragEnterAndOverCallbackWrapper(b):b)&&a.addEventListener("dragenter",b,!1)},bindDragOver:function(a,b){this.isFireFox35OrLater()?b=this.firefox35DragEnterAndOverCallbackWrapper(b):d.browser.safari&&(b=this.safariDragOverCallbackWrapper(b));
b&&a.addEventListener("dragover",b,!1)},bindDragLeave:function(a,b){b&&a.addEventListener("dragleave",b,!1)},bindDrop:function(a,b){if(d.browser.mozilla){var c=this.isFireFox35OrLater()?"drop":"dragdrop";a.addEventListener(c,this.mozillaDropCallbackWrapper(b),!1)}else b&&a.addEventListener("drop",function(a){b(a);e.DragAndDropUtils.stopPropagation(a)},!1)},niceSize:function(a){for(var b=" B; kB; MB; GB; TB; PB; EB; ZB; YB".split(";"),c=0,d=b.length;c<d;c++)if(a<Math.pow(2,10*(c+1)))return(!c?a:(a/
Math.pow(2,10*c)).toFixed(2))+b[c];return(a/Math.pow(2,10*(c+1))).toFixed(2)+b[b.length-1]},safariDragOverCallbackWrapper:function(a){return function(b){if((b=b||f.event)&&"file"!==b.target.type)a&&a(b),-1!=d.inArray("public.file-url",b.dataTransfer.types)&&b.preventDefault()}},mozillaDropCallbackWrapper:function(a){return function(b){b&&(a&&a(b),b.preventDefault(),e.DragAndDropUtils.isFireFox35OrLater()?e.DragAndDropUtils.firefox35FileDataInEvent(b)&&b.stopPropagation():b.stopPropagation())}},firefox35DragEnterAndOverCallbackWrapper:function(a){return function(b){b&&
(a&&a(b),e.DragAndDropUtils.firefox35FileDataInEvent(b)&&b.preventDefault())}},firefox35FileDataInEvent:function(a){return-1!=d.inArray("application/x-moz-file",a.dataTransfer.types)},stopPropagation:function(a){if(a=a||f.event)a.stopPropagation?a.stopPropagation():a.cancelBubble=!0},preventDefault:function(a){if(a=a||f.event)a.preventDefault?a.preventDefault():a.returnValue=!1},isFireFox35OrLater:function(){return!this.isFireFox30()&&-1!=d.browser.version.indexOf("1.9.")},isFireFox30:function(){return-1!=
d.browser.version.indexOf("1.9.0")},enableDropZoneOn:function(a,b){if(!a)throw Error("Cannot enable drop zone on invalid container. Received: "+a);b=b||e.DragAndDrop.defaultDropHandler;this.bindDragEnter(a);this.bindDragOver(a);this.bindDragLeave(a);this.bindDrop(a,b)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/drag-and-drop-utils","AJS.DragAndDropUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/default-drop-handler.js' */
define("confluence-drag-and-drop/default-drop-handler","ajs document confluence/meta jquery confluence/legacy underscore plupload window confluence/message-controller".split(" "),function(a,h,j,f,k,p,l,q,r){var m={initialise:function(){function n(){var a=f(".aui-blanket:visible");return a.length&&a.css("visibility")!=="hidden"&&!f("#drag-and-drop-progress-dialog:visible").length}function m(){for(;e.files.length;)e.removeFile(e.files[0])}var d,i=h.getElementById("fileuploadShim");if(!i){i=h.createElement("div");
i.setAttribute("id","fileuploadShim");h.body.appendChild(i)}var e=new l.Uploader({runtimes:"html5",dragdrop:true,drop_element:f("body")[0],browse_button:i.getAttribute("id"),multipart:false,stop_propagation:true,max_file_size:+j.get("global-settings-attachment-max-size")}),o=function(){d=a.Editor&&a.Editor.isVisible()&&k.EditorUploadProgressDialog?k.EditorUploadProgressDialog:new a.DragAndDropProgressDialog};d=null;e.init();a.DragAndDrop.defaultDropHandler=null;e.bind("FilesAdded",function(g,b){function s(a,
b){!d&&o();for(var c=0;c<b.length;c++){var g=b[c];g.status!==l.FAILED&&d.render({workId:g.id,status:g.status,file:g})}e.start()}if(n())m();else if(a.Editor&&a.Editor.isVisible()){var c=p.reject(b,function(b){return b.status===l.FAILED});k.Uploader&&k.Uploader.trigger("FilesAdded",c)}else a.UploadUtils.filterFiles(g,b,s)});e.bind("BeforeUpload",function(g,b){if(!a.Editor||!a.Editor.isVisible()){var e=a.DragAndDropUtils.base+a.contextPath()+"/plugins/drag-and-drop/upload.action",c=j.get("page-id"),
c=c!=0?{pageId:c}:{draftId:j.get("draft-id")},f=b.name.substr(b.name.lastIndexOf(".")+1);c.filename=b.name;c.size=b.size;c.mimeType=l.mimeTypes[f.toLowerCase()]||a.DragAndDropUtils.defaultMimeType;c.spaceKey=j.get("space-key");c.atl_token=j.get("atl-token");g.settings.url=l.buildUrl(e,c);d.cancelListeners.push(function(b,c){var e=g.getFile(c.workId);e&&g.removeFile(e);d.renderInfo(c.workId,"File was manually removed from the queue.")});d.show()}});e.bind("UploadProgress",function(a,b){d.renderUpdateToBytesUploaded(b.id,
b.loaded,b.size);d.hideCloseButton()});e.bind("FileUploaded",function(e,b,f){f.status===0?d.renderError(b.id,"The server is not responding. Please check that it is running."):d.renderComplete(b.id)});e.bind("Error",function(e,b){if(n())m();else if(a.Editor&&a.Editor.isVisible())k.Uploader&&k.Uploader.trigger("Error",b);else{var h,c;if(b.response){try{h=f.parseJSON(b.response);c=h.actionErrors[0]}catch(i){if(i.name==="SyntaxError")c="Invalid response received from the server.";else{b.responseText=b.response;
c=r.parseError(b)}}d.renderError(b.file.id,c);a.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.server-unknown"})}else{c=b.message;if(b.code===l.FILE_SIZE_ERROR){c=a.format("is too big to upload. Files must be less than {0}.",a.DragAndDropUtils.niceSize(j.get("global-settings-attachment-max-size")));a.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-size"})}else if(b.code===a.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR){c="might be a folder or an unsupported file type.";
a.trigger("analyticsEvent",{name:"confluence.default-drop.upload.error.file-type"})}!d&&o();d.render({workId:b.file.id,status:b.file.status,file:b.file,errorMessage:c});if(!d.isVisible()){d.show();d.showCloseButton()}}}});e.bind("UploadComplete",function(){if(!e.total.queued&&d){d.showCloseButton();d.hasErrors()||setTimeout(function(){d.hide();d.clearRenderOutput();q.location.reload()},1E3)}})},bind:function(){function a(){f(h).unbind("dragenter",a);m.initialise()}f(h).bind("dragenter",a)}};return m});
require("confluence/module-exporter").safeRequire("confluence-drag-and-drop/default-drop-handler",function(a){require("ajs").toInit(a.bind)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/observable-array-list.js' */
define("confluence-drag-and-drop/observable-array-list",["ajs","jquery"],function(g,f){var e=function(){this._data=[];this._pushObservers=[]};e.prototype={push:function(a){this._data.push(a);this._notifyPushObservers(a)},length:function(){return this._data.length},remove:function(a,b){return this._remove.call(this._data,a,b)},_remove:function(a,b){var c=this.slice((b||a)+1||this.length);this.length=0>a?this.length+a:a;return this.push.apply(this,c)},shift:function(){return this._data.shift()},removeByPredicate:function(a){for(var b=
[],c=this._data.length,d=0;d<c;d++)a(this._data[d])||b.push(this._data[d]);this._data=b;return c-this._data.length},addPushObserver:function(a){if(f.isFunction(a))this._pushObservers.push(a);else throw Error("Attempting to add an observer that is not a function: "+a);},_notifyPushObservers:function(a){for(var b=0,c=this._pushObservers.length;b<c;b++)this._pushObservers[b](a)}};return e});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/observable-array-list","AJS.ObservableArrayList");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-progress-dialog.js' */
define("confluence-drag-and-drop/upload-progress-dialog",["ajs","plupload","jquery","document"],function(c,g,b,i){var h=function(a){var d=this,e={header:"Attach files",width:600,height:400};this._options=b.extend({},e,a);this.id="drag-and-drop-progress-dialog";this._dialog=new c.Dialog(this._options.width,this._options.height,this.id);this._dialog.addHeader(this._options.header).addPanel("Panel 1",c.DragAndDrop.Templates.uploadFileStatusContainer()).addButton("Done",
function(){d.hide();d.clearRenderOutput()},"all-file-uploads-complete");this._dialog.getCurrentPanel().setPadding(0);this._$closeButton=this.find(".all-file-uploads-complete");b(i).keydown(function(a){if(27===a.which)return d._$closeButton.prop("disabled")||(d.hide(),d.clearRenderOutput()),a.stopPropagation(),!1});this._$container=this.find("#upload-statuses");this._workIdsOfFilesInProgress=[];this.cancelListeners=[];this.onShowListeners=[];this._hidden=!0;this.hasErrorMessage=!1};h.prototype={show:function(){this._hidden&&
(this._dialog.show(),this._hidden=!1,b.each(this.onShowListeners,function(a,b){b()}));this.hideCloseButton()},hide:function(){this._hidden||(this._dialog.hide(),this._hidden=!0)},isVisible:function(){return!this._hidden},_getProgressElementId:function(a){return"file-"+a+"-progress"},render:function(a){this._workIdsOfFilesInProgress.push(a.workId);var d=this._getProgressElementId(a.workId);this._$container.append(c.DragAndDrop.Templates.fileStatus({filename:a.file.name,progressElementId:d,workId:a.workId,
showCancel:a.status==g.QUEUED}));c.progressBars.update("#"+d,0);a.status==g.QUEUED?b("#file-upload-cancel-"+a.workId).click(function(c){return function(d){b.each(c,function(b,c){c(d,a)})}}(this.cancelListeners)):this.renderError(a.workId,a.errorMessage)},renderError:function(a,d){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var e=b("#file-status-block-"+a),f=c.escapeEntities(e.attr("data-filename"));e.html(aui.message.error({content:d,titleContent:f}));
this.hasErrorMessage=!0},renderInfo:function(a,d){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var e=b("#file-status-block-"+a),f=c.escapeEntities(e.attr("data-filename"));e.html(aui.message.info({content:d,titleContent:f}));this.hasErrorMessage=!0},hasErrors:function(){return this.hasErrorMessage},renderUpdateToBytesUploaded:function(a,d,e){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);var f=
c.DragAndDropUtils.niceSize(d),g=b("#file-"+a+"-uploaded");g.length?g.text(f):b("#file-upload-progress-text-"+a).html(c.DragAndDrop.Templates.uploadFileStatusProgressMessage({fileId:a,uploadedSizeNice:f,totalSizeNice:c.DragAndDropUtils.niceSize(e)}));c.progressBars.update("#"+this._getProgressElementId(a),d/e)},renderComplete:function(a){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);b("#cancel-or-success-placeholder-"+a).html(c.DragAndDrop.Templates.uploadFileStatusSuccessIcon())},
renderCancelled:function(a){if(-1==b.inArray(a,this._workIdsOfFilesInProgress))throw Error("No file status found with id: "+a);c.progressBars.setIndeterminate("#"+this._getProgressElementId(a));b("#file-upload-progress-text-"+a).html("Cancelled.");b("#cancel-or-success-placeholder-"+a).hide()},clearRenderOutput:function(){this.showCloseButton();this._$container.empty();this._workIdsOfFilesInProgress=[];this.hasErrorMessage=!1},hideCloseButton:function(){this._$closeButton.hide()},
showCloseButton:function(){this._$closeButton.show()},find:function(a){return this._dialog.getCurPanel().page.body.parent().find(a)}};return h});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/upload-progress-dialog","AJS.DragAndDropProgressDialog");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'templates/drag-and-drop.soy' */
// This file was automatically generated from drag-and-drop.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AJS.DragAndDrop.Templates.
 */

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.DragAndDrop == 'undefined') { AJS.DragAndDrop = {}; }
if (typeof AJS.DragAndDrop.Templates == 'undefined') { AJS.DragAndDrop.Templates = {}; }


AJS.DragAndDrop.Templates.fileStatus = function(opt_data, opt_ignored) {
  return '<li id="file-status-block-' + soy.$$escapeHtml(opt_data.workId) + '" data-filename="' + soy.$$escapeHtml(opt_data.filename) + '"><div class="aui-group aui-group-split file-status-item"><div class="aui-item"><label>' + soy.$$escapeHtml(opt_data.filename) + '</label></div><div class="aui-item"><div id="file-upload-progress-text-' + soy.$$escapeHtml(opt_data.workId) + '" class="file-upload-progress-text">' + soy.$$escapeHtml('Waiting...') + '</div></div></div><div class="file-upload-progress-block"><div class="aui-progress-indicator" id="' + soy.$$escapeHtml(opt_data.progressElementId) + '"><span class="aui-progress-indicator-value"></span></div>' + ((opt_data.showCancel) ? '<div id="cancel-or-success-placeholder-' + soy.$$escapeHtml(opt_data.workId) + '" class="cancel-or-success-placeholder ui-state-default"><span id="file-upload-cancel-' + soy.$$escapeHtml(opt_data.workId) + '" class="aui-icon aui-icon-small aui-iconfont-remove" title="' + soy.$$escapeHtml('Cancel Upload') + '">' + soy.$$escapeHtml('Cancel') + '</span></div>' : '') + '</div></li>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.fileStatus.soyTemplateName = 'AJS.DragAndDrop.Templates.fileStatus';
}


AJS.DragAndDrop.Templates.uploadFileStatusContainer = function(opt_data, opt_ignored) {
  return '<ul id="upload-statuses"></ul>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.uploadFileStatusContainer.soyTemplateName = 'AJS.DragAndDrop.Templates.uploadFileStatusContainer';
}


AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon = function(opt_data, opt_ignored) {
  return '<span class=\'aui-icon aui-icon-small aui-iconfont-success\'></span>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon.soyTemplateName = 'AJS.DragAndDrop.Templates.uploadFileStatusSuccessIcon';
}


AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage = function(opt_data, opt_ignored) {
  return '<span id="file-' + soy.$$escapeHtml(opt_data.fileId) + '-uploaded">' + soy.$$escapeHtml(opt_data.uploadedSizeNice) + '</span> ' + soy.$$escapeHtml('of') + ' ' + soy.$$escapeHtml(opt_data.totalSizeNice);
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage.soyTemplateName = 'AJS.DragAndDrop.Templates.uploadFileStatusProgressMessage';
}


AJS.DragAndDrop.Templates.dropZone = function(opt_data, opt_ignored) {
  return '<div class="attachments-drop-zone"><div class="drop-zone-image"></div><div class="drop-zone-text">' + soy.$$escapeHtml('Drop files here to attach them') + '</div></div>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.dropZone.soyTemplateName = 'AJS.DragAndDrop.Templates.dropZone';
}


AJS.DragAndDrop.Templates.dragOverlay = function(opt_data, opt_ignored) {
  return '<div id="dragOverlay"><div class="overlay-blanket"></div><div class="overlay-center"><p>' + soy.$$escapeHtml('Drop files to insert them into the page') + '</p></div><span class="overlay-baseline"></span><div class="overlay-drop-zone"></div></div>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.dragOverlay.soyTemplateName = 'AJS.DragAndDrop.Templates.dragOverlay';
}


AJS.DragAndDrop.Templates.dragAndDropTip = function(opt_data, opt_ignored) {
  return '<div class="attach-tip-discovery"><span class="img"></span><div class="text"><strong>' + soy.$$escapeHtml('Tip:') + ' </strong><p>' + soy.$$escapeHtml('Drop files straight into your page to insert them directly.') + '</p><div><a class="close-tip" href="#">' + soy.$$escapeHtml('Ok, got it!') + '</a></div></div></div>';
};
if (goog.DEBUG) {
  AJS.DragAndDrop.Templates.dragAndDropTip.soyTemplateName = 'AJS.DragAndDrop.Templates.dragAndDropTip';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.drag-and-drop:support', location = 'js/upload-utils.js' */
define("confluence-drag-and-drop/upload-utils",["ajs"],function(h){return{ErrorCode:{FILE_IS_A_FOLDER_ERROR:-602},filterFiles:function(d,a,g){for(var e=[],b=0,c=0;c<a.length;c++)if(4096>=a[c].nativeFile.size){var f=new FileReader;f.onload=function(){b++;e.push(this.currentFile);b===a.length&&g(d,e)};f.onerror=function(){d.removeFile(this.currentFile);d.trigger("Error",{code:h.UploadUtils.ErrorCode.FILE_IS_A_FOLDER_ERROR,message:"File is a folder",file:this.currentFile});b++;b===a.length&&g(d,e)};
f.currentFile=a[c];f.readAsText(a[c].nativeFile)}else b++,e.push(a[c]),b===a.length&&g(d,e)}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-drag-and-drop/upload-utils","AJS.UploadUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/utils.js' */
define("confluence/ic/util/utils",["jquery","underscore","ajs","backbone","exports"],function(w,R,u,x,F){var m={INLINE_COMMENTS:u.DarkFeatures.isEnabled("confluence-inline-comments"),RESOLVED_INLINE_COMMENTS:u.DarkFeatures.isEnabled("confluence-inline-comments-resolved"),RICH_TEXT_EDITOR:u.DarkFeatures.isEnabled("confluence-inline-comments-rich-editor"),DANGLING_COMMENT:u.DarkFeatures.isEnabled("confluence-inline-comments-dangling-comment")},t=["dateautocomplete","confluencemacrobrowser","propertypanel","jiraconnector","dfe"],n=["autoresize","confluenceleavecomment"],r=["code"];var a,C,q;function O(){return R.clone(m)}function N(){return R.clone(t)}function j(){return R.clone(n)}function d(U,T){var W;if(!U||!T){return}var S=w(U.containingElement);if(!S.is(".inline-comment-marker.valid")){S=w("<div/>").append(U.html).find(".inline-comment-marker.valid")}if(S.length>0&&f(S)){var V=S.first().data("ref");W=T.findWhere({markerRef:V});return W}}function f(S){return S.filter(function(){return w(this).text().length>0}).length>0}function h(S){return u.contextPath()+"/pages/viewpage.action?pageId="+u.Meta.get("latest-page-id")+"&focusedCommentId="+S+"#comment-"+S}function s(Y,X,S){var V=X.match(/(focusedCommentId|replyToComment)=(\d+)/);if(V==null){return}var U=V[1]==="replyToComment";var W=parseInt(V[2],10);var T=Y.findWhere({id:W});if(T!=null){o(Y,T,S,U)}else{w.ajax({url:u.contextPath()+"/rest/inlinecomments/1.0/comments/replies/"+W+"/commentId"}).done(function(Z){T=Y.findWhere({id:Z});o(Y,T,S,U)})}}function o(V,U,S,T){if(U!=null){if(U.isResolved()){new S({collection:V,focusCommentId:U.get("id")}).render()}else{if(!U.isDangling()){x.trigger("ic:view",U,"permalink",{isReplyComment:T})}}}}function K(){if(u.Meta.get("current-user-avatar-url")){return u.contextPath()+u.Meta.get("current-user-avatar-url")}return u.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/anonymous.png"}function P(){return u.Meta.get("user-display-name")||u.Meta.get("current-user-fullname")}function b(U){if(typeof U.selectionStart==="number"){var S=U.value.length;U.selectionStart=S;U.selectionEnd=S}else{if(typeof U.createTextRange!=null){U.focus();var T=U.createTextRange();T.collapse(false);T.select()}}}function L(S){b(S);window.setTimeout(function(){b(S)},1)}function E(X,W){var U="webkitAnimationEnd oanimationend msAnimationEnd animationend";var T=X.$wikiContent;var S=w.Deferred();if(W){var Y=w(".inline-comment-marker.active");T.addClass("ic-fade-in-animation");T.one(U,function(){w(this).removeClass("ic-fade-in-animation")});X.$el.addClass("ic-slide-in");X.$el.one(U,function(){w(this).removeClass("ic-slide-in");Y.addClass("ic-highlight-pulse");Y.one(U,function(){Y.removeClass("ic-highlight-pulse")})});S.resolve()}else{T.bind(U,function(Z){if(Z.originalEvent.animationName=="ic-fade-out-animation"){X.$wikiContent.removeClass("ic-fade-out-animation");X.$wikiContent.css("opacity","0.5")}else{if(Z.originalEvent.animationName=="ic-fade-in-animation"){X.$wikiContent.css("opacity","1");X.$wikiContent.removeClass("ic-fade-in-animation");X.$wikiContent.unbind(U)}}});T.addClass("ic-fade-out-animation");X.$el.addClass("ic-slide-out");var V=function(){X.$el.removeClass("ic-slide-out");X._emptySidebar();y().css("padding-right","0");T.addClass("ic-fade-in-animation");T.css("position","static");S.resolve();X.$el.off(U,V)};X.$el.on(U,V)}return S.promise()}function k(S){var T=w(S).closest("a");if(!T.length){T=w(S).find("a")}return T}function A(S){S.each(function(){var T=k(this);T.length&&T.off("mousemove")})}function Q(){return document.body.style.animation!==undefined||document.body.style.webkitAnimation!==undefined}function c(T){var S=T.parents(".expand-content.expand-hidden");S.each(function(U){w(this).siblings(".expand-control").click()})}function v(T){var S=u.Rte&&u.Rte.getEditor();if(T===true){if(M()&&S&&S.isDirty()){return confirm("Your comment will be lost.")}}else{if(S&&S.isDirty()&&Confluence.Editor&&!Confluence.Editor.getContentType){return confirm("Your comment will be lost.")}}return true}function M(){return !!w(".ic-sidebar #wysiwygTextarea_ifr").length}function G(){return u.Meta.get("use-keyboard-shortcuts")&&Confluence.KeyboardShortcuts&&Confluence.KeyboardShortcuts.enabled}function p(S){S.$("button.ic-action-hide").tooltip({gravity:"se"});S.$("#ic-nav-next").tooltip({gravity:"s"});S.$("#ic-nav-previous").tooltip({gravity:"s"})}function B(W){if(J()){W.css("padding-bottom","20px");return}var U=W.height();var V=W.offset().top;var T=V+U;var X=this.getPageContainer().offset().top;var S=T-X;this.getPageContainer().css({"min-height":S+"px"})}function z(W){W=W.closest(".ic-display-comment-view");var V=this;var T=w(".confluence-embedded-image, .confluence-embedded-file img",W);var U=T.length;var S=0;if(U>0){T.off("load").one("load",function(){if(++S===U){V.recalculateContentHeight(W)}}).each(function(){if(this.complete){w(this).load()}})}}function J(){if(q===undefined){q=!!D().length}return q}function y(){if(a===undefined){a=w("#content")}return a}function D(){if(C===undefined){C=w("#splitter-content")}return C}function g(S,T){if(T&&!T.is(":visible")){return}if(S){if(this.isDocTheme()){this.getSplitterContent().scrollTop(T.offset().top-S)}else{window.scrollTo(0,T.offset().top-S)}}}function e(T){var S=w.Deferred();w.ajax({url:u.contextPath()+"/rest/api/content/"+T+"?expand=body.editor",type:"GET",dataType:"json",contentType:"application/json; charset=utf-8"}).then(function(U){var V=U.body.editor.value;S.resolve(V)}).fail(function(U,W,V){S.reject(U,W,V)});return S.promise()}function I(S){var T=S.closest(".conf-macro");return(T.data("hasbody")===false||S.find('.conf-macro[data-hasbody="false"]').length>0)||r.indexOf(T.data("macro-name"))!=-1}function i(S){return S.closest(".user-mention").length>0||S.find(".user-mention").length>0}function l(S){return S.closest("a[href^='/']:not('.user-mention')").length>0||S.find("a[href^='/']:not('.user-mention')").length>0}function H(){var S={isDefault:true,path:u.Meta.get("static-resource-url-prefix")+"/images/icons/profilepics/default.png"};if(u.Meta.get("current-user-avatar-url")!=="/images/icons/profilepics/default.png"){S={isDefault:false,path:u.contextPath()+u.Meta.get("current-user-avatar-url")}}var T=u.Meta.get("remote-user");return{userName:T==""?null:T,displayName:u.Meta.get("current-user-fullname"),profilePicture:S}}F.overlappedSelection=d;F.focusedCommentUrl=h;F.showFocusedComment=s;F.getAuthorAvatarUrl=K;F.moveCaretToEnd=L;F.animateSidebar=E;F.getDarkFeatures=O;F.getInlineLinks=k;F.removeInlineLinksDialog=A;F.isAnimationSupported=Q;F.showHighlightContent=c;F.getUnsupportedRtePlugins=N;F.getSupportedRtePlugins=j;F.confirmProcess=v;F.getAuthorDisplayName=P;F.isKeyboardShortcutsEnable=G;F.addSidebarHeadingTooltip=p;F.hasEditorInSidebar=M;F.recalculateContentHeight=B;F.resizeContentAfterLoadingImages=z;F.isDocTheme=J;F.getPageContainer=y;F.getSplitterContent=D;F.scrollToCommentAfterToggleSideBar=g;F.getEditorFormat=e;F.containUnsupportedMacro=I;F.containInternalLink=i;F.containUserMetion=l;F.getCurrentUserInfo=H});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:util-resource', location = 'util/text-highlighter.js' */
define("confluence/ic/util/text-highlighter",["jquery"],function(c){var a="ic-current-selection";function b(){c.textHighlighter.createWrapper=function(d){return c("<span></span>").addClass(d.highlightedClass)};this.$el=c("#content .wiki-content").first();if(this.$el.length>0){this.$el.textHighlighter({highlightedClass:a})}}b.prototype.highlight=function(e){if(this.$el.length===0){return}var d=c(this.$el.getHighlighter().doHighlight(e));return this.$el.getHighlighter().serializeHighlights(d)};b.prototype.removeHighlight=function(){if(this.$el.length===0){return}this.$el.getHighlighter().removeHighlights();return this};b.prototype.deserializeHighlights=function(d,e){if(this.$el.length===0){return}var f='<span class="inline-comment-marker" data-ref="'+e+'"></span>';return this.$el.getHighlighter().deserializeHighlights(d,f)};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment.js' */
define("confluence/ic/model/comment",["jquery","underscore","backbone","ajs","confluence/ic/util/utils","confluence/ic/model/reply-collection"],function(d,b,g,a,c,f){var e=g.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:a.Meta.get("remote-user"),authorAvatarUrl:a.contextPath()+a.Meta.get("current-user-avatar-url"),body:"",originalSelection:"",containerId:a.Meta.get("latest-page-id"),containerVersion:a.Meta.get("page-version"),parentCommentId:"0",lastFetchTime:d("meta[name=confluence-request-time]").attr("content"),hasDeletePermission:true,hasEditPermission:true,hasResolvePermission:true,resolveProperties:{resolved:false,resolvedTime:0},serializedHighlights:"",deleted:false},urlRoot:a.contextPath()+"/rest/inlinecomments/1.0/comments",initialize:function(h){h=h||{};this._setHighlights(h.markerRef);var i=this;this.replies=new f();this.replies.url=function(){return i.url()+"/replies"};if(c.getDarkFeatures().DANGLING_COMMENT&&a.Meta.get("page-id")===a.Meta.get("latest-page-id")){if(this.isDangling()&&!this.isResolved()){this.resolve(true,{wait:true,dangling:true,success:b.bind(function(){g.trigger("ic:open:dangled",this)},this),error:b.bind(function(k,j){g.trigger("ic:resolve:dangled:failed",this)},this)})}}},validate:function(){if(!this.get("body")){return true}},resolve:function(h,i){i=i||{};this.save({},b.extend(i,{url:this.urlRoot+"/"+this.get("id")+"/resolve/"+h+"/dangling/"+(i.dangling===true)}))},isResolved:function(){return this.get("resolveProperties").resolved},isDangling:function(){return this.highlight===undefined},isDeleted:function(){return this.get("deleted")},_setHighlights:function(i){var h;if(i!==undefined){h=d("#content .wiki-content:first").find('.inline-comment-marker[data-ref="'+i+'"]')}else{h=d(".ic-current-selection")}if(h.length!==0){this.highlights=h;this.highlight=h.first()}else{this.highlights=undefined;this.highlight=undefined}},destroy:function(i){i=i?b.clone(i):{};var h=this;var k=i.success;var j=function(n,m){var l=m.error;m.error=function(o){if(l){l(n,o,m)}n.trigger("error",n,o,m)}};i.success=function(l){if(k){k(h,l,i)}};j(this,i);return this.sync("delete",this,i)}});return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/comment-collection.js' */
define("confluence/ic/model/comment-collection",["jquery","backbone","ajs","underscore","confluence/ic/model/comment"],function(d,f,a,b,e){var c=f.Collection.extend({model:e,initialize:function(){this.listenTo(this,"sort",this._removeCachedMarkers)},url:function(){var h=a.contextPath();var g=a.Meta.get("page-id");return h+"/rest/inlinecomments/1.0/comments?containerId="+g},getResolvedCount:function(){return this.getResolvedComments().length},getUnresolveCount:function(){return this.reject(function(g){return g.isResolved()===true&&g.isDeleted()===false}).length},getResolvedComments:function(){return this.filter(function(g){return g.isResolved()===true&&g.isDeleted()===false})},getResolvedCommentsDesc:function(){return b.sortBy(this.getResolvedComments(),function(g){return 0-g.get("resolveProperties").resolvedTime})},getNextCommentOnPage:function(){return this._getCommentAtRelativeOffset(1)},getPrevCommentOnPage:function(){return this._getCommentAtRelativeOffset(-1)},_getCommentAtRelativeOffset:function(j){var k=this.getCommentsOnPage();var g=this.findWhere({active:true});if(g===undefined||k.length<=1){return null}var i=b.pluck(k,"id");var h=b.indexOf(i,g.get("id"));return k[(h+j+k.length)%k.length]},getCommentsOnPage:function(){return this.filter(function(g){return((g.isResolved()===false)&&!g.isDangling()&&(g.isDeleted()===false))||g.get("active")===true})},getCommentsOnPageCount:function(){return this.getCommentsOnPage().length},getActiveIndexWithinPageComments:function(){var h=b.pluck(this.getCommentsOnPage(),"id");var g=this.findWhere({active:true});if(g===undefined){return null}var i=g.get("id");return b.indexOf(h,i)},comparator:function(h,g){if(this.markers===undefined){this.markers=d("#content .wiki-content:first").find(".inline-comment-marker")}if(h.highlight===undefined){return 1}if(g.highlight===undefined){return -1}return this.markers.index(h.highlight)-this.markers.index(g.highlight)},_removeCachedMarkers:function(){this.markers=undefined}});return c});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply.js' */
define("confluence/ic/model/reply",["jquery","backbone","ajs","confluence/ic/util/utils",],function(d,e,b,c){var a=e.Model.extend({defaults:{authorDisplayName:c.getAuthorDisplayName(),authorUserName:b.Meta.get("remote-user"),authorAvatarUrl:b.contextPath()+b.Meta.get("current-user-avatar-url"),body:"",commentId:"0",hasDeletePermission:true,hasEditPermission:!!b.Meta.get("remote-user")},urlRoot:function(){return b.contextPath()+"/rest/inlinecomments/1.0/comments/"+this.get("commentId")+"/replies"},sync:function(h,g,f){f=f||{};if(h==="create"){f.url=this.urlRoot()+"?containerId="+b.Meta.get("latest-page-id")}return e.sync.call(this,h,g,f)},validate:function(){if(!this.get("body")){return true}}});return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:models', location = '/model/reply-collection.js' */
define("confluence/ic/model/reply-collection",["backbone","confluence/ic/model/reply"],function(c,a){var b=c.Collection.extend({model:a});return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = 'analytics/ic-analytics.js' */
define("confluence/ic/analytics",["ajs","underscore","backbone"],function(b,c,d){var a={};c.extend(a,d.Events);a.start=function(){if(this.running===true){return}this.running=true;this.send=function(e,f){b.trigger("analytics",{name:e,data:f})};this.listenTo(d,"ic:highlight-panel-click",function(){this.send("confluence.highlight.actions.comment.inline")});this.listenTo(d,"ic:view",function(f,e){this.send("confluence.comment.inline.view");if(e==="nav"){this.send("confluence.comment.inline.view.nav")}if(e==="permalink"){this.send("confluence.comment.inline.view.permalink")}});this.listenTo(d,"ic:overlap",function(){this.send("confluence.comment.inline.overlap")});this.listenTo(d,"ic:edit",function(){this.send("confluence.comment.inline.edit")});this.listenTo(d,"ic:persist",function(){this.send("confluence.comment.inline.create")});this.listenTo(d,"ic:sidebar:close",function(){this.send("confluence.comment.inline.sidebar.close")});this.listenTo(d,"ic:reply:persist",function(){this.send("confluence.comment.inline.reply")});this.listenTo(d,"ic:delete ic:reply:delete",function(){this.send("confluence.comment.inline.delete")});this.listenTo(d,"ic:resolved",function(){this.send("confluence.comment.inline.resolved")});this.listenTo(d,"ic:unresolved",function(){this.send("confluence.comment.inline.unresolved")});this.listenTo(d,"ic:resolved:view",function(f){var e={total:f};this.send("confluence.comment.inline.resolved.view",e)});this.listenTo(d,"ic:resolved:dismiss:recovery",function(){this.send("confluence.comment.inline.resolved.dismiss")});this.listenTo(d,"ic:resolved:show:recovery",function(){this.send("confluence.comment.inline.resolved.discovery")});this.listenTo(d,"ic:open:dangled",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.open.dangled",e)});this.listenTo(d,"ic:editor:load:fail",function(){var e={pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.editor.load.fail",e)});this.listenTo(d,"ic:resolve:dangled:failed",function(f){var e={commentId:f.get("id"),pageId:b.Meta.get("page-id")};this.send("confluence.comment.inline.resolved.dangled.failed",e)})};a.stop=function(){this.running=false;this.stopListening()};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:app', location = '/app/app.js' */
define("confluence/ic/app/app",["jquery","backbone","ajs","confluence/ic/model/comment","confluence/ic/model/comment-collection","confluence/ic/analytics","exports"],function(e,h,c,f,d,b,a){function g(){b.start();var n=true;var i=new d();function l(){q().done(function(s){s.afterSyncCommentCollection();s.displayPermalinkedComment(i)})}e("body").on("click","#view-resolved-comments",function(s){s.preventDefault();q().done(function(t){t.createResolvedCommentListView()})});i.fetch({cache:false}).done(function(){if(i.getCommentsOnPageCount()>0){l()}if(i.getResolvedCount()>0){q().done(function(s){s.updateResolvedCommentCountInToolsMenu()})}});var k=window.location.search;if(k.indexOf("focusedCommentId")!==-1){l()}h.listenTo(h,"ic:resolved",function(){l()});var o=e("#view-resolved-comments>span");o.text("Resolved comments"+c.format(" ({0})",i.getResolvedCount()));var p=function(u,t){var v=i.get(t);var s=false;if(v===undefined){v=new f({id:t});s=true}v.fetch({success:function(w){w._setHighlights(w.get("markerRef"));if(s){i.add(w)}else{v.replies.isFetched=false}h.trigger("ic:view",v,"quickreload")}})};c.bind("qr:show-new-thread",function(t,s){q().done(function(){p(t,s)})});c.bind("qr:add-new-highlight",function(u,t,s){q().done(function(){c.trigger("qr:add-new-highlight-text",[t,s])})});var j;var r;function q(){if(n){n=false;if(j){return j.promise()}j=e.Deferred();WRM.require("wrc!inline-comments-load-sidebar").then(function(){var s=require("confluence/ic/app/loader");s.init(i);j.resolve(s)})}r=false;return j.promise()}var m="com.atlassian.confluence.plugins.confluence-inline-comments:create-inline-comment";if(Confluence&&Confluence.HighlightAction){Confluence.HighlightAction.registerButtonHandler(m,{onClick:function(s){q().done(function(t){if(r==false){r=true;t.loadSidebarOnClick(s)}})},shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY})}}a.init=g});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-comments:bootstrap', location = '/app/bootstrap.js' */
require(["jquery","ajs","confluence/ic/app/app"],function(c,a,b){if(a.Meta.get("page-id")&&(a.Meta.get("page-id")===a.Meta.get("latest-page-id"))){c(b.init)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:jsUri', location = '/includes/js/third-party/jsUri.js' */
(function(){function g(a){a=decodeURIComponent(a);return a=a.replace("+"," ")}function h(a){var c,b,f,e,d=[];if("undefined"===typeof a||null===a||""===a)return d;0===a.indexOf("?")&&(a=a.substring(1));c=a.toString().split(/[&;]/);for(a=0;a<c.length;a++)b=c[a],f=b.split("="),e=f[0],b=-1===b.indexOf("=")?null:null===f[1]?"":f[1],d.push([e,b]);return d}function d(a){var c=/^(?:(?![^:@]+:[^:@\/]*@)([^:\/?#.]+):)?(?:\/\/)?((?:(([^:@\/]*)(?::([^:@\/]*))?)?@)?([^:\/?#]*)(?::(\d*))?)(((\/(?:[^?#](?![^?#\/]*\.[^?#\/.]+(?:[?#]|$)))*\/?)?([^?#\/]*))(?:\?([^#]*))?(?:#(.*))?)/.exec(a||
""),b={};"source protocol authority userInfo user password host port relative path directory file query anchor".split(" ").forEach(function(a,e){b[a]=c[e]||""});this.uriParts=b;this.queryPairs=h(this.uriParts.query);this.hasAuthorityPrefixUserPref=null}Array.prototype.forEach||(Array.prototype.forEach=function(a,c){for(var b=0,f=this.length;b<f;++b)a.call(c||this,this[b],b,this)});"protocol userInfo host port path anchor".split(" ").forEach(function(a){d.prototype[a]=function(c){typeof c!=="undefined"&&
(this.uriParts[a]=c);return this.uriParts[a]}});d.prototype.hasAuthorityPrefix=function(a){if(typeof a!=="undefined")this.hasAuthorityPrefixUserPref=a;return this.hasAuthorityPrefixUserPref===null?this.uriParts.source.indexOf("//")!==-1:this.hasAuthorityPrefixUserPref};d.prototype.query=function(a){var c="",b;if(typeof a!=="undefined")this.queryPairs=h(a);for(a=0;a<this.queryPairs.length;a++){b=this.queryPairs[a];c.length>0&&(c=c+"&");c=b[1]===null?c+b[0]:c+b.join("=")}return c.length>0?"?"+c:c};
d.prototype.getQueryParamValue=function(a){var c,b;for(b=0;b<this.queryPairs.length;b++){c=this.queryPairs[b];if(g(a)===g(c[0]))return c[1]}};d.prototype.getQueryParamValues=function(a){var c=[],b,f;for(b=0;b<this.queryPairs.length;b++){f=this.queryPairs[b];g(a)===g(f[0])&&c.push(f[1])}return c};d.prototype.deleteQueryParam=function(a,c){var b=[],f,e,d,h;for(f=0;f<this.queryPairs.length;f++){e=this.queryPairs[f];d=g(e[0])===g(a);h=g(e[1])===g(c);(arguments.length===1&&!d||arguments.length===2&&!d&&
!h)&&b.push(e)}this.queryPairs=b;return this};d.prototype.addQueryParam=function(a,c,b){if(arguments.length===3&&b!==-1){b=Math.min(b,this.queryPairs.length);this.queryPairs.splice(b,0,[a,c])}else arguments.length>0&&this.queryPairs.push([a,c]);return this};d.prototype.replaceQueryParam=function(a,c,b){var d=-1,e,h;if(arguments.length===3){for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)&&decodeURIComponent(h[1])===g(b)){d=e;break}}this.deleteQueryParam(a,b).addQueryParam(a,
c,d)}else{for(e=0;e<this.queryPairs.length;e++){h=this.queryPairs[e];if(g(h[0])===g(a)){d=e;break}}this.deleteQueryParam(a);this.addQueryParam(a,c,d)}return this};"protocol hasAuthorityPrefix userInfo host port path query anchor".split(" ").forEach(function(a){var c="set"+a.charAt(0).toUpperCase()+a.slice(1);d.prototype[c]=function(b){this[a](b);return this}});d.prototype.scheme=function(){var a="";if(this.protocol()){a=a+this.protocol();this.protocol().indexOf(":")!==this.protocol().length-1&&(a=
a+":");a=a+"//"}else this.hasAuthorityPrefix()&&this.host()&&(a=a+"//");return a};d.prototype.origin=function(){var a=this.scheme();if(this.userInfo()&&this.host()){a=a+this.userInfo();this.userInfo().indexOf("@")!==this.userInfo().length-1&&(a=a+"@")}if(this.host()){a=a+this.host();this.port()&&(a=a+(":"+this.port()))}return a};d.prototype.toString=function(){var a=this.origin();if(this.path())a=a+this.path();else if(this.host()&&(this.query().toString()||this.anchor()))a=a+"/";if(this.query().toString()){this.query().toString().indexOf("?")!==
0&&(a=a+"?");a=a+this.query().toString()}if(this.anchor()){this.anchor().indexOf("#")!==0&&(a=a+"#");a=a+this.anchor()}return a};d.prototype.clone=function(){return new d(this.toString())};define("confluence/jsUri",function(){return d})})(this);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.5b7fdbd666', location = 'aui.chunk.0bce7a740d241a802120--042bad697916b10ec4e5.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.5b7fdbd666"],{fVKi:function(t,n,r){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var e=function(t){if(t&&t.__esModule)return t;var n={};if(null!=t)for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n.default=t,n}(r("JFi+"));n.default=function(t){function n(n){return u(function(){return t.hasAttribute(n)},n+" wasn't defined")}function r(r){if(!n(r))return!1;var e=t.getAttribute(r);return u(function(){return document.getElementById(e)},'an element with id set to "'+e+'" was not found')}function u(n,r){return!!n()||(t?e.error(r,t):e.error(r),!1)}return{attributeExists:n,refersTo:r,satisfiesRules:u,ariaControls:function(){return r("aria-controls")},ariaOwns:function(){return r("aria-owns")}}},t.exports=n.default}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.8a641c03a4', location = 'aui.chunk.a489803c7ae78857ce6b--c120e25ca7023b0ad30c.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.8a641c03a4"],{kdZR:function(t,e,u){"use strict";function n(t){return null!==t}function l(t,e,u){u?t.setAttribute(e,""):t.removeAttribute(e)}function i(t,e){var u=function(t){return t.toLowerCase()===e.toLowerCase()},n=null===e,l=!n&&!t.values.filter(u).length;return n?t.hasOwnProperty("missingDefault")?t.missingDefault:null:l?t.hasOwnProperty("invalidDefault")?t.invalidDefault:t.hasOwnProperty("missingDefault")?t.missingDefault:null:t.values.length?t.values.filter(u)[0]:null}function a(t,e,u){t.setAttribute(e.attribute,u)}Object.defineProperty(e,"__esModule",{value:!0}),e.computeBooleanValue=n,e.setBooleanAttribute=l,e.computeEnumValue=i,e.setEnumAttribute=a,e.default={computeBooleanValue:n,setBooleanAttribute:l,computeEnumValue:i,setEnumAttribute:a}}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.d727dd207f', location = 'aui.chunk.10cebad55090d670d7cc--d338139d594464edd443.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.d727dd207f"],{VtiI:function(i,n,s){"use strict";s("FStl"),s("Q0fs"),s("nqD9"),s("NjKm")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.543254b237', location = 'aui.chunk.6ff2ffb94d3aa983eaf4--5bf0288117d4302e487b.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.543254b237"],{P3bb:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=m(n("+x/D")),u=m(n("vbuG")),o=m(n("TmQU")),a=m(n("kdZR")),s=m(n("fVKi")),r=m(n("KloK")),l=n("jEnx"),d=m(l),f=m(n("4dFR")),c=m(n("TK3y")),p=n("/soZ"),g=n("I7um");function m(e){return e&&e.__esModule?e:{default:e}}function v(e,t){(0,p.doIfTrigger)(e,function(n){n.setAttribute("aria-expanded","false"),t.setAttribute("aria-expanded",e.open)}),(0,p.setTrigger)(e,t)}function h(e,t){e._auiAlignment?(e._auiAlignment.changeTarget(t),e._auiAlignment.enable(),e._auiAlignment.scheduleUpdate()):(e._auiAlignment=new u.default(e,t,{overflowContainer:"viewport"===e.getAttribute("contained-by")?"viewport":"window"}),e._auiAlignment.enable())}var b={click:function(e,t){e.open&&!(0,d.default)(e).isPersistent()?e.open=!1:(v(e,t.currentTarget),e.open=!0)},mouseenter:function(e,t){var n=t.currentTarget;n&&(v(e,n),h(e,n)),e.open||(e.open=!0),e._clearMouseleaveTimeout&&e._clearMouseleaveTimeout()},mouseleave:function(e){if(e.open&&!(0,d.default)(e).isPersistent()){e._clearMouseleaveTimeout&&e._clearMouseleaveTimeout();var t=setTimeout(function(){(0,c.default)(e).get("mouse-inside")||(e.open=!1)},1e3);e._clearMouseleaveTimeout=function(){clearTimeout(t),e._clearMouseleaveTimeout=null}}},focus:function(e,t){e.open||(v(e,t.currentTarget),e.open=!0)},blur:function(e){!(0,d.default)(e).isPersistent()&&e.open&&(e.open=!1)}};function A(e){var t=e.target;(0,c.default)(t).set("mouse-inside",!0),t.message({type:"mouseenter"})}function T(e){var t=e.target;(0,c.default)(t).set("mouse-inside",!1),t.message({type:"mouseleave"})}function _(e){(0,c.default)(e).set("mouse-inside",void 0),e.removeEventListener("mouseenter",A),e.removeEventListener("mouseleave",T),"hover"===e.respondsTo&&((0,c.default)(e).set("mouse-inside",!1),e.addEventListener("mouseenter",A),e.addEventListener("mouseleave",T))}function w(e,t){return e+".nested-layer-"+t}function y(e){!function(e){(0,i.default)(document).off(w("aui-layer-hide",e)).off(w("aui-layer-show",e)).off(w("select2-opening",e)).off(w("select2-close",e))}(e.id),function(e){e._auiAlignment&&e._auiAlignment.disable()}(e)}function E(e){(0,d.default)(e).show(),(0,d.default)(e).isVisible()?((0,i.default)(e).on(l.EVENT_PREFIX+"-hide",function(){return y(e)}),function(e){var t=(0,i.default)(e),n=e.id,u=function(e){return t.find((0,p.getTrigger)(e.target)).length<1};(0,i.default)(document).on(w("aui-layer-show",n),function(e){u(e)||t.attr("persistent","")}).on(w("aui-layer-hide",n),function(e){u(e)||t.removeAttr("persistent")}).on(w("select2-opening",n),function(){t.attr("persistent","")}).on(w("select2-close",n),function(){t.removeAttr("persistent")})}(e),(0,p.doIfTrigger)(e,function(t){h(e,t),t.setAttribute("aria-expanded","true")})):e.open=!1}function V(e){var t=!e.hasAttribute("aria-hidden"),n=e.hasAttribute("open");(t||e.open!==n)&&(n?((0,c.default)(e).set("is-processing-show",!0),E(e),(0,c.default)(e).set("is-processing-show",!1)):function(e){(0,d.default)(e).hide(),(0,d.default)(e).isVisible()?e.open=!0:(y(e),(0,p.doIfTrigger)(e,function(e){e.setAttribute("aria-expanded","false")})),(0,p.setTrigger)(e,null)}(e))}var x={attribute:"responds-to",values:["toggle","hover"],missingDefault:"toggle",invalidDefault:"toggle"},I=(0,f.default)("aui-inline-dialog",{prototype:{get open(){return(0,d.default)(this).isVisible()},set open(e){a.default.setBooleanAttribute(this,"open",e),V(this)},get persistent(){return this.hasAttribute("persistent")},set persistent(e){a.default.setBooleanAttribute(this,"persistent",e)},get respondsTo(){var e=x.attribute;return a.default.computeEnumValue(x,this.getAttribute(e))},set respondsTo(e){var t=this.respondsTo;a.default.setEnumAttribute(this,x,e),t!==this.respondsTo&&_(this)},message:function(e){return function(e,t){var n={toggle:["click"],hover:["mouseenter","mouseleave","focus","blur"]}[e.respondsTo];n&&n.indexOf(t.type)>-1&&b[t.type](e,t)}(this,e),this}},created:function(e){(0,c.default)(e).set("is-processing-show",!1)},attributes:{"aria-hidden":function(e,t){"true"===t.newValue&&(0,p.doIfTrigger)(e,function(e){e.setAttribute("aria-expanded","false")}),a.default.setBooleanAttribute(e,"open","false"===t.newValue)},open:function(e){document.body.contains(e)&&V(e)},"responds-to":function(e,t){a.default.computeEnumValue(x,t.oldValue)!==a.default.computeEnumValue(x,t.newValue)&&_(e)}},attached:function(e){(0,s.default)(e).attributeExists("id"),e.hasAttribute("open")&&(0,c.default)(e).get("is-processing-show")||V(e),_(e),(0,p.doIfTrigger)(e,function(t){t.setAttribute("aria-expanded",e.open)}),(0,p.forEachTrigger)(e,function(e){e.setAttribute("aria-haspopup","true")})},detached:function(e){(0,g.ifGone)(e).then(function(){!function(e){e._auiAlignment&&(e._auiAlignment.destroy(),delete e._auiAlignment)}(e),(0,p.forEachTrigger)(e,function(e){e.removeAttribute("aria-haspopup"),e.removeAttribute("aria-expanded")})})},template:function(e){var t=(0,i.default)('<div class="aui-inline-dialog-contents"></div>').append(e.childNodes);(0,i.default)(e).addClass("aui-layer").html(t)}});(0,o.default)("aui/inline-dialog2",I),(0,r.default)("InlineDialog2",I),t.default=I,e.exports=t.default},Rvtc:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.InlineDialogEl=void 0;var i=n("P3bb");Object.defineProperty(t,"InlineDialogEl",{enumerable:!0,get:function(){return function(e){return e&&e.__esModule?e:{default:e}}(i).default}}),n("AehQ"),n("THZ5"),n("VtiI")}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.inline-dialog2', location = 'aui.chunk.337a5e8e72c173fc3405--a3d251a4920e1ac5c95a.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.inline-dialog2"],[],[["Rvtc","runtime","aui.splitchunk.vendors--e54c7c7304","aui.splitchunk.vendors--b47d4b691d","aui.splitchunk.vendors--084821f40b","aui.splitchunk.172ffb6da7","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.d49cf794d2","aui.splitchunk.54d3f16c20","aui.splitchunk.e54c7c7304","aui.splitchunk.1659111a3c","aui.splitchunk.f5828f5ab9","aui.splitchunk.fb15cffa72","aui.splitchunk.f673ef53ac","aui.splitchunk.8659b532c1","aui.splitchunk.d0110a864f","aui.splitchunk.afa5039e04","aui.splitchunk.bff3715233","aui.splitchunk.c750721820","aui.splitchunk.6d6f245ed3","aui.splitchunk.084821f40b","aui.splitchunk.5b8c290363","aui.splitchunk.baa83dbaf9","aui.splitchunk.36cd9d521c","aui.splitchunk.d925afe2c0","aui.splitchunk.5b7fdbd666","aui.splitchunk.8a641c03a4","aui.splitchunk.d727dd207f","aui.splitchunk.543254b237"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview-support.js' */
define("cp/confluence/preview-support",["ajs"],function(a){var d=function(){var e=b.SELECTOR_STRINGS.IMAGE+", "+b.SELECTOR_STRINGS.LINK_IMAGE+", "+b.SELECTOR_STRINGS.EXTERNAL_IMAGE;if(b.isPDFSupported()){e+=", "+b.SELECTOR_STRINGS.PDF+", "+b.SELECTOR_STRINGS.LINK_PDF}return e};var c=function(){return b.SELECTOR_STRINGS.IMAGE+", "+b.SELECTOR_STRINGS.EXTERNAL_IMAGE+", "+b.SELECTOR_STRINGS.FILE+", "+b.SELECTOR_STRINGS.LINK_FILE+", "+b.SELECTOR_STRINGS.ATTACHMENT_MACRO};var b={SELECTOR_STRINGS:{IMAGE:"img.confluence-embedded-image[data-linked-resource-id]",EXTERNAL_IMAGE:"img.confluence-embedded-image.confluence-external-resource",PDF:"a.confluence-embedded-file[data-nice-type='PDF Document']",LINK_IMAGE:"a[data-linked-resource-type='attachment'][data-nice-type='Image']",LINK_PDF:"a[data-linked-resource-type='attachment'][data-nice-type='PDF Document']",FILE:"a.confluence-embedded-file",LINK_FILE:"a[data-linked-resource-type='attachment']",FILE_OVERLAY:"span.confluence-embedded-file-wrapper .overlay",ATTACHMENT_MACRO:".plugin_attachments_container a.previewAttachmentLink"},VIEW_MODE:{FULL:"full",COMMENT:"comment",SIMPLE:"simple"},isPDFSupported:function(){return a.DarkFeatures.isEnabled("pdf-preview")},getFileSelectorString:function(){if(a.DarkFeatures.isEnabled("previews.trigger-all-file-types")){return c()}else{return d()}}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/preview.js' */
define("cp/confluence/preview",["underscore","jquery","cp/confluence/preview-support","ajs","confluence/jsUri"],function(k,e,f,i,b){var j,l;e(document).ready(g);function g(){var o=e(f.getFileSelectorString());o.off("click.fb");e(document.body).off("click.filePreviews");e(document.body).on("click.filePreviews",f.getFileSelectorString(),n);e(document.body).on("click.filePreviews",f.SELECTOR_STRINGS.FILE_OVERLAY,h);e(window).on("popstate",function(){if(!l&&i.DarkFeatures.isEnabled("previews.sharing.pushstate")){a()}});a()}function n(o){if(!o.altKey&&!o.ctrlKey&&!o.metaKey&&!e(this).parent().closest("a, #draft-changes-dialog, #cp-annotations, .diff-block-context, .diff-block-target").length){o.preventDefault();m(this)}}function h(p){p.preventDefault();var o=e(p.target);var q=o.closest("span.confluence-embedded-file-wrapper");m(q.find(f.SELECTOR_STRINGS.IMAGE+","+f.SELECTOR_STRINGS.FILE),undefined,undefined,o.closest(".comment-count-overlay").length>0)}function m(q,r,o,x){if(!l){var s="confluence-previews-css";var p="media-viewer";var y="viewattachments";WRM.require("wr!com.atlassian.confluence.plugins.confluence-previews:"+s);var z=e.Deferred(),u=z.promise();var t=setInterval(function(){for(var D=0;D<document.styleSheets.length;D++){var E=document.styleSheets[D];if(E.href&&(E.href.indexOf(s)!==-1||E.href.indexOf(p)!==-1||E.href.indexOf(y)!==-1)){w();return}if(document.styleSheets[D].imports&&document.all&&!window.atob){for(var C=0;C<document.styleSheets[D].imports.length;C++){if(document.styleSheets[D].imports[C].href.indexOf(s)!==-1){w();return}}}}},100);var w=function(){z.resolve();clearInterval(t)};var B=i.Meta.get("static-resource-url-prefix");var A="com.atlassian.confluence.plugins.confluence-previews:mediaviewer-chunks";var v=B+"/download/resources/"+A+"/";l=e.when(WRM.require(["wr!com.atlassian.confluence.plugins.confluence-previews:confluence-previews-js","wrc!media-viewer"]),u);l.done(function(){j=require("cp/confluence/file-preview-loader");d(q,r,o,x)});Confluence.PageLoadingIndicator(e("body")).showUntilResolved(l,"We were unable to load the file previewer")}else{l.done(k.partial(d,q,r,o,x))}return l}var d=function(q,p,s,t){var o=e("#content");var r=e(q).closest(".comment,.cq-content,.ic-content");if(!p){if(!(o.hasClass("page")||o.hasClass("blogpost"))){p=f.VIEW_MODE.SIMPLE}else{if(r.length){p=f.VIEW_MODE.COMMENT}}}if(p===f.VIEW_MODE.COMMENT){j.showPreviewerForComment(q,r,p,t)}else{if(p===f.VIEW_MODE.SIMPLE){j.showPreviewerForSingleFile(q,p,s)}else{p=f.VIEW_MODE.FULL;j.showPreviewer(undefined,q,p,t)}}};function a(){if(c()){var q=new b(window.location.href);var p=window.history.pushState&&i.DarkFeatures.isEnabled("previews.sharing.pushstate");if(q.getQueryParamValue("preview")&&!p){var r="#!/preview"+q.getQueryParamValue("preview");var o=decodeURIComponent(q.deleteQueryParam("preview").setAnchor(r).toString());if(window.history.replaceState){window.history.replaceState({},"",o)}else{window.location=o}}else{if(q.anchor().indexOf("!/preview")===0&&p){var o;if(q.getQueryParamValue("preview")){o=q.setAnchor("")}else{o=q.addQueryParam("preview",q.anchor().substr("!/preview".length,q.anchor().length)).setAnchor("")}window.history.replaceState({},"",o)}}m()}}function c(){var o=new b(window.location.href);return i.DarkFeatures.isEnabled("previews.sharing")&&(o.getQueryParamValue("preview")||(o.anchor()&&o.anchor().indexOf("!/preview")===0))}return{loadConfluencePreviews:m}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-previews:confluence-previews-jquery', location = '/js/confluence/jquery-previewer.js' */
require(["cp/confluence/preview","jquery"],function(b,a){a.fn.previewer=function(c){if(!a(this).length){return this}var d=a.extend({},c);return this.each(function(){var f=a(this);var e=f.closest("li");var g=d.src||f.attr("data-image-src")||f.attr("src");if(g){f.click(function(j){var i={src:g,type:d.type,thumbnail:g,title:d.title||e.attr("data-file-name")||g,id:e.attr("data-attachment-id"),ownerId:e.attr("data-owner-id")};var h=b.loadConfluencePreviews([i],d.viewMode||"simple",d.from||"custom");d.zindex&&h.done(function(){a(".cp-container").css({"z-index":d.zindex})})})}})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:initialise-metrics-collection', location = '/js/initialise-metrics.js' */
define("collaborative-editing-initialise-metrics-collection",["confluence/legacy"],function(b){var a=function(){var c="confluence.editor.quickedit.loading.times";var d={"confluence.editor":true,"confluence.editor.preload":true,"confluence.editor.quick.fetchContent":true,"confluence.editor.tinymce":true,"confluence.editor.synchrony":true,"confluence.editor.synchrony.CR":true,"confluence.editor.synchrony.connect":true,"confluence.editor.synchrony.deps":true,"confluence.editor.synchrony.init":true,"confluence.editor.synchrony.jsLoad":true,"confluence.editor.synchrony.snapshot":true,"confluence.editor.synchrony.unmarshal":true};var e={"confluence.editor.synchrony.connect":true,};if(b.registerPerformanceSession){b.registerPerformanceSession(c,d,e)}};return a});require("confluence/module-exporter").safeRequire("collaborative-editing-initialise-metrics-collection",function(a){a()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-loader', location = 'com/atlassian/confluence/plugins/createjiracontent/js/page-helper.js' */
AJS.toInit(function(d){var c="com.atlassian.confluence.plugins.confluence-jira-content:create-Jira-issue-summary";var g="wr!com.atlassian.confluence.plugins.confluence-jira-content:confluence-jira-content-resources";var b="Loading\u2026";var e=false;var j=d("div.jira-issues-created");if(j.length>0){if(window.history&&window.history.replaceState){var h=window.location.href;var i=h.substr(0,h.indexOf("JIRAIssuesCreated")-1);window.history.replaceState({},document.title,i)}var a=j.find("#jira-content-message-panel-error-warning");var f=j.find("#jira-content-message-panel-view-more-link");f.click(function(k){k.preventDefault();f.hide();a.show()});if(j.hasClass("success")){setTimeout(function(){j.hide()},10000)}}Confluence&&Confluence.HighlightAction&&Confluence.HighlightAction.registerButtonHandler(c,{onClick:function(l){var k;if(!e){var m=function(o,n,p){o.html('<span class="aui-icon aui-icon-wait"></span> '+b);p();return false};k=d("<div>");Confluence.CreateJiraContent.Dialogs.appendDialogTarget(l.area.average,k);dialog=Confluence.ScrollingInlineDialog(k,"create-issue-loading-dialog",m,{});dialog.show();e=true}WRM.require(g).done(function(){if(Confluence.CreateJiraContent.FeatureDiscovery.shouldShowFeatureDiscovery()){Confluence.CreateJiraContent.Dialogs.showFeatureDiscoveryDialog(l)}else{Confluence.CreateJiraContent.Dialogs.showCreateIssueDialog(l)}if(typeof k!=="undefined"){k.remove()}})},shouldDisplay:Confluence.HighlightAction.WORKING_AREA.MAINCONTENT_ONLY});Confluence.CreateJiraContent={Dialogs:{}};Confluence.CreateJiraContent.Dialogs.appendDialogTarget=function(l,k){Confluence.DocThemeUtils.appendAbsolutePositionedElement(k);k.css({top:l.top,height:l.height,left:l.left,width:l.width,"z-index":-9999,position:"absolute"}).addClass("confluence-jira-content-dialog-target")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar.soy' */
// This file was automatically generated from sidebar.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Sidebar.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }


Confluence.Templates.Sidebar.headerStyles = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.sidebarWidth) ? '<style>.ia-fixed-sidebar, .ia-splitter-left {width: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.theme-default .ia-splitter #main {margin-left: ' + soy.$$escapeHtml(opt_data.sidebarWidth) + 'px;}.ia-fixed-sidebar {visibility: hidden;}</style>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.headerStyles.soyTemplateName = 'Confluence.Templates.Sidebar.headerStyles';
}


Confluence.Templates.Sidebar.sidebar = function(opt_data, opt_ignored) {
  return '<div class="acs-side-bar ia-scrollable-section"><div class="acs-side-bar-space-info tipsy-enabled" data-configure-tooltip="' + soy.$$escapeHtml('Edit space details') + '"><div class="avatar"><div class="space-logo" data-key="' + soy.$$escapeHtml(opt_data.space.key) + '" data-name="' + soy.$$escapeHtml(opt_data.space.name) + '" data-entity-type="confluence.space"><div class="avatar-img-container"><div class="avatar-img-wrapper"><a href="' + soy.$$escapeHtml(opt_data.space.homeUrl) + '" title="' + soy.$$escapeHtml(opt_data.space.name) + '"><img class="avatar-img" src="' + soy.$$escapeHtml(opt_data.space.logoUrl) + '" alt="' + soy.$$escapeHtml(opt_data.space.name) + '"></a></div></div></div></div><div class="space-information-container"><div class="name"><a href="' + soy.$$escapeHtml(opt_data.space.homeUrl) + '" title="' + soy.$$escapeHtml(opt_data.space.name) + '">' + soy.$$escapeHtml(opt_data.space.name) + '</a></div><div class="flyout-handle icon aui-icon aui-icon-small aui-iconfont-edit"></div>' + ((opt_data.hasFavouriteSpacePermission || opt_data.accessMode == 'READ_ONLY') ? '<div class="favourite-space-icon ' + ((opt_data.accessMode == 'READ_ONLY') ? 'disabled' : '') + '">' + Confluence.Templates.Sidebar.renderFavouriteSpace(opt_data) + '</div>' : '') + '</div></div><div class="acs-side-bar-content"><div class="acs-nav-wrapper"><div class="acs-nav" data-has-create-permission="' + soy.$$escapeHtml(opt_data.hasCreatePermission) + '" data-quick-links-state="' + soy.$$escapeHtml(opt_data.quickLinksState) + '" data-page-tree-state="' + soy.$$escapeHtml(opt_data.pageTreeState) + '" data-nav-type="' + soy.$$escapeHtml(opt_data.navType) + '">' + Confluence.Templates.Sidebar.renderLinks(opt_data) + '</div></div>' + ((opt_data.contextualNav) ? Confluence.Templates.Sidebar.contextualNav(opt_data) : '') + '</div><div class="hidden"><a href="' + soy.$$escapeHtml(opt_data.space.browseSpaceUrl) + '" id="space-pages-link"></a><script type="text/x-template" title="logo-config-content"><h2>' + soy.$$escapeHtml('Space Details') + '</h2><div class="personal-space-logo-hint">' + soy.$$filterNoAutoescape(AJS.format('Your profile picture is used as the logo for your personal space. \x3ca href\x3d\x22{0}\x22 target\x3d\x22_blank\x22\x3eChange your profile picture\x3c/a\x3e.',"/confluence" + '/users/profile/editmyprofilepicture.action')) + '</div><\/script></div></div>' + Confluence.Templates.Sidebar.renderSpaceToolsSection({advancedLinks: opt_data.advancedLinks, hasConfigurePermission: opt_data.hasConfigurePermission, currentlyViewed: opt_data.collectorToHighlight == 'spacebar-advanced', pageTreeState: opt_data.pageTreeState});
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.sidebar.soyTemplateName = 'Confluence.Templates.Sidebar.sidebar';
}


Confluence.Templates.Sidebar.renderFavouriteSpace = function(opt_data, opt_ignored) {
  return '<button title="' + soy.$$escapeHtml('Add to my spaces') + '" id="space-favourite-add" class="space-favourite aui-icon aui-icon-small aui-iconfont-unstar"></button><button class="' + ((! opt_data.isFavouriteSpace) ? ' space-favourite-hidden ' : '') + ' space-favourite aui-icon aui-icon-small aui-iconfont-star" id="space-favourite-remove" title="' + soy.$$escapeHtml('Remove from my spaces') + '"></button>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderFavouriteSpace.soyTemplateName = 'Confluence.Templates.Sidebar.renderFavouriteSpace';
}


Confluence.Templates.Sidebar.renderLinks = function(opt_data, opt_ignored) {
  return '<div class="acs-nav-sections">' + ((opt_data.mainLinks.length) ? Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.mainLinks, sectionClass: 'main-links-section', collectorToHighlight: opt_data.collectorToHighlight}) : '') + ((opt_data.quickLinksState != 'hide') ? '<div class="quick-links-wrapper">' + ((opt_data.quickLinks.length) ? '<h5 class="ia-quick-links-header-title">' + soy.$$escapeHtml('Space shortcuts') + '</h5>' + Confluence.Templates.Sidebar.renderLinksSection({links: opt_data.quickLinks, sectionClass: 'quick-links-section tipsy-enabled', collectorToHighlight: null}) : (opt_data.hasConfigurePermission) ? '<h5 class="ia-quick-links-header-title">' + soy.$$escapeHtml('Space shortcuts') + '</h5><p class="tip">' + soy.$$filterNoAutoescape(AJS.format('Here you can add shortcut links to the most important content for your team or project. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eConfigure sidebar\x3c/a\x3e.','','configure-sidebar')) + '</p>' : '') + '</div>' : '') + ((opt_data.hasSidebarCustomisation) ? Confluence.Templates.Sidebar.renderCustomContent(opt_data) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderLinks.soyTemplateName = 'Confluence.Templates.Sidebar.renderLinks';
}


Confluence.Templates.Sidebar.renderCustomContent = function(opt_data, opt_ignored) {
  return '<div class="custom-sidebar"><div class="custom-sidebar-content"><div class="content">' + soy.$$filterNoAutoescape(opt_data.sidebarCustomisation) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderCustomContent.soyTemplateName = 'Confluence.Templates.Sidebar.renderCustomContent';
}


Confluence.Templates.Sidebar.renderLinksSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.links.length) {
    output += '<div class="' + soy.$$escapeHtml(opt_data.sectionClass) + ' ' + ((opt_data.highlightSection) ? ' current-section' : '') + '"><ul class="acs-nav-list">';
    var linkList134 = opt_data.links;
    var linkListLen134 = linkList134.length;
    for (var linkIndex134 = 0; linkIndex134 < linkListLen134; linkIndex134++) {
      var linkData134 = linkList134[linkIndex134];
      output += '<li class="acs-nav-item ' + soy.$$escapeHtml(linkData134.styleClass) + ((opt_data.collectorToHighlight && linkData134.collectorKey == opt_data.collectorToHighlight) ? ' current-item' : '') + '"' + ((linkData134.collectorKey) ? ' data-collector-key="' + soy.$$escapeHtml(linkData134.collectorKey) + '"' : '') + '><a class="acs-nav-item-link tipsy-enabled" href="' + soy.$$escapeHtml(linkData134.url) + '" data-collapsed-tooltip="' + soy.$$escapeHtml(linkData134.tooltip) + '">' + ((linkData134.styleClass == 'pinned_attachment') ? '<span class="aui-icon aui-icon-small aui-iconfont-attachment"></span>' : '<span class="icon"></span>') + '<span class="acs-nav-item-label">' + soy.$$escapeHtml(linkData134.title) + '</span></a></li>';
    }
    output += '</ul></div>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderLinksSection.soyTemplateName = 'Confluence.Templates.Sidebar.renderLinksSection';
}


Confluence.Templates.Sidebar.contextualNav = function(opt_data, opt_ignored) {
  return '<div class="ia-secondary-container tipsy-enabled" data-tree-type="' + ((opt_data.forBlogs) ? 'blogs' : (opt_data.forSettings) ? 'settings' : soy.$$escapeHtml(opt_data.navType)) + '">' + ((opt_data.pageTreeState != 'hide') ? (opt_data.forBlogs) ? '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title blog"><span class="icon"></span><span class="label">' + soy.$$escapeHtml('Blog') + '</span></h5></div><div class="ia-secondary-content">' + Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}) + '</div>' : (opt_data.forSettings) ? '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title settings"><span class="label">' + soy.$$escapeHtml('Advanced') + '</span></h5></div><div class="ia-secondary-content">' + Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.contextualNav}) + '</div>' : (opt_data.navType == 'page-tree') ? '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title page-tree"><span class="icon"></span><span class="label">' + soy.$$escapeHtml('Page tree') + '</span></h5></div>' + ((opt_data.pageTreeEmpty && opt_data.hasCreatePermission) ? '<p class="tip">' + soy.$$filterNoAutoescape(AJS.format('Get started by adding some pages to this space. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eCreate page\x3c/a\x3e.',"/confluence" + '/pages/createpage.action?spaceKey=' + opt_data.space.key,'page-tree-create-child-page-link')) + '</p>' : '<div class="ia-secondary-content">' + soy.$$filterNoAutoescape(opt_data.contextualNav) + '</div>') : Confluence.Templates.Sidebar.Pages.renderPageContextualNav({pageContextualNav: opt_data.contextualNav, hasCreatePermission: opt_data.hasCreatePermission}) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.contextualNav.soyTemplateName = 'Confluence.Templates.Sidebar.contextualNav';
}


Confluence.Templates.Sidebar.pagetreeList = function(opt_data, opt_ignored) {
  var output = '<ul class="' + ((opt_data.isSubtree) ? 'ia-subpagetree' : 'ia-pagetree') + '">';
  var itemList216 = opt_data.pagetree;
  var itemListLen216 = itemList216.length;
  for (var itemIndex216 = 0; itemIndex216 < itemListLen216; itemIndex216++) {
    var itemData216 = itemList216[itemIndex216];
    output += Confluence.Templates.Sidebar.pagetreeItem(itemData216);
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.pagetreeList.soyTemplateName = 'Confluence.Templates.Sidebar.pagetreeList';
}


Confluence.Templates.Sidebar.throbber = function(opt_data, opt_ignored) {
  return '<div class="content-container"><div class="throbber-container"><div class="throbber"><div class="spinner"></div><span>' + soy.$$escapeHtml('Loading...') + '</span></div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.throbber.soyTemplateName = 'Confluence.Templates.Sidebar.throbber';
}


Confluence.Templates.Sidebar.treeThrobber = function(opt_data, opt_ignored) {
  return '<ul class="ia-subpagetree"><li class="acs-tree-item leaf"><span class="node-title">' + soy.$$escapeHtml('Loading...') + '</span></li></ul>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.treeThrobber.soyTemplateName = 'Confluence.Templates.Sidebar.treeThrobber';
}


Confluence.Templates.Sidebar.pagetreeItem = function(opt_data, opt_ignored) {
  return '<li class="acs-tree-item' + ((opt_data.hasChildren) ? (opt_data.children.length) ? ' opened' : ' closed' : ' leaf') + ((opt_data.groupType) ? ' grouping' : '') + ((opt_data.active) ? ' current-item' : '') + '"' + ((opt_data.pageId) ? ' data-page-id="' + soy.$$escapeHtml(opt_data.pageId) + '"' : '') + ((opt_data.groupType) ? ' data-group-type="' + soy.$$escapeHtml(opt_data.groupType) + '" data-group-value="' + soy.$$escapeHtml(opt_data.groupValue) + '"' : '') + '>' + ((! opt_data.groupType) ? '<a href="' + soy.$$escapeHtml(opt_data.url) + '">' : '') + '<span class="icon aui-icon aui-icon-small ' + ((opt_data.hasChildren) ? (opt_data.children.length) ? 'aui-iconfont-expanded' : 'aui-iconfont-collapsed' : '') + '"></span><span class="node-title navigation-pseudo-link">' + soy.$$escapeHtml(opt_data.title) + '</span>' + ((! opt_data.groupType) ? '</a>' : '') + ((opt_data.children && opt_data.children.length > 0) ? Confluence.Templates.Sidebar.pagetreeList({pagetree: opt_data.children, isSubtree: true}) : '') + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.pagetreeItem.soyTemplateName = 'Confluence.Templates.Sidebar.pagetreeItem';
}


Confluence.Templates.Sidebar.renderSpaceToolsSection = function(opt_data, opt_ignored) {
  var output = '<div class="space-tools-section"><div id="space-tools-menu-additional-items" class="hidden">';
  var linkList286 = opt_data.advancedLinks;
  var linkListLen286 = linkList286.length;
  for (var linkIndex286 = 0; linkIndex286 < linkListLen286; linkIndex286++) {
    var linkData286 = linkList286[linkIndex286];
    output += '<div data-label="' + soy.$$escapeHtml(linkData286.title) + '" data-class="' + soy.$$escapeHtml(linkData286.styleClass) + '" data-href="' + soy.$$escapeHtml(linkData286.url) + '">' + soy.$$escapeHtml(linkData286.title) + '</div>';
  }
  output += ((opt_data.hasConfigurePermission) ? '<div data-label="' + soy.$$escapeHtml('Configure sidebar') + '" data-class="configure-sidebar" data-href="">' + soy.$$escapeHtml('Configure sidebar') + '</div>' : '') + '</div>' + aui.dropdown2.trigger({id: 'space-tools-menu-trigger', tagName: 'button', content: '<span class="aui-icon aui-icon-small aui-iconfont-configure">' + soy.$$escapeHtml('Configure') + '</span><span class="aui-button-label">' + soy.$$escapeHtml('Space tools') + '</span>', extraClasses: 'aui-button aui-button-subtle tipsy-enabled aui-dropdown2-trigger-arrowless ' + ((opt_data.currentlyViewed) ? ' current-item' : ''), menu: {id: 'space-tools-menu'}}) + aui.dropdown2.contents({id: 'space-tools-menu', extraClasses: 'aui-style-default space-tools-dropdown', extraAttributes: {'data-aui-alignment': 'top left'}}) + '<a class="expand-collapse-trigger aui-icon aui-icon-small ' + ((opt_data.pageTreeState == 'hide') ? 'aui-iconfont-chevron-double-right' : 'aui-iconfont-chevron-double-left') + '"></a></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.renderSpaceToolsSection.soyTemplateName = 'Confluence.Templates.Sidebar.renderSpaceToolsSection';
}


Confluence.Templates.Sidebar.spaceToolsMenu = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.isAuiFiveSeven) {
    output += '<div class="space-tools-menu"><div class="aui-dropdown2-section"><ul class="space-tools-navigation">';
    var linkList335 = opt_data.spaceToolLinks;
    var linkListLen335 = linkList335.length;
    for (var linkIndex335 = 0; linkIndex335 < linkListLen335; linkIndex335++) {
      var linkData335 = linkList335[linkIndex335];
      output += '<li><a href="' + soy.$$escapeHtml(linkData335.href) + '" title="' + soy.$$escapeHtml(linkData335.label) + '">' + soy.$$escapeHtml(linkData335.label) + '</a></li>';
    }
    output += '</ul></div>';
    if (opt_data.spaceLinks.length > 0) {
      output += '<div class="aui-dropdown2-section"><ul class="space-operations">';
      var linkList348 = opt_data.spaceLinks;
      var linkListLen348 = linkList348.length;
      for (var linkIndex348 = 0; linkIndex348 < linkListLen348; linkIndex348++) {
        var linkData348 = linkList348[linkIndex348];
        output += '<li><a class="' + soy.$$escapeHtml(linkData348.className) + '" href="' + soy.$$escapeHtml(linkData348.href) + '" title="' + soy.$$escapeHtml(linkData348.label) + '">' + soy.$$escapeHtml(linkData348.label) + '</a></li>';
      }
      output += '</ul></div>';
    }
    output += '</div>';
  } else {
    output += aui.dropdown2.itemGroup({isTruncated: true, items: opt_data.spaceToolLinks, extraClasses: 'space-tools-navigation'}) + ((opt_data.spaceLinks.length > 0) ? aui.dropdown2.itemGroup({isTruncated: true, items: opt_data.spaceLinks, extraClasses: 'space-operations'}) : '');
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.spaceToolsMenu.soyTemplateName = 'Confluence.Templates.Sidebar.spaceToolsMenu';
}


Confluence.Templates.Sidebar.configure = function(opt_data, opt_ignored) {
  return '<div class="acs-nav-sections"><table id="acs-nav-list-main" class="acs-nav-list"></table><div class="acs-nav-list-quick-section' + ((opt_data.quickLinksState == 'hide') ? ' hidden-section' : '') + '"><div class="quick-links-header"><h5>' + soy.$$escapeHtml('Space shortcuts') + '</h5><a href="#" class="aui-icon aui-icon-small toggle-link ' + ((opt_data.quickLinksState == 'hide') ? 'aui-iconfont-add-circle' : 'aui-iconfont-plan-disabled') + '" data-tooltip="' + soy.$$escapeHtml('Hide/Show space shortcuts') + '"/></div><table id="acs-nav-list-quick" class="acs-nav-list"></table><p class="tip">' + soy.$$escapeHtml('Click \x22Add link\x22 to add links to the sidebar.') + '</p><a class="acs-add-link" href="#"><span class="aui-icon aui-icon-small aui-iconfont-add-small"></span><span class="label">' + soy.$$escapeHtml('Add link') + '</span></a></div>' + ((opt_data.hasSidebarCustomisation) ? '<p class="tip">' + soy.$$filterNoAutoescape(AJS.format('You can continue editing your customized sidebar in the space admin. \x3ca href\x3d\x22{0}\x22 class\x3d\x22{1}\x22\x3eGo to space admin\x3c/a\x3e.',opt_data.customContentAdminLink,'custom-sidebar-tip')) + '</p>' + Confluence.Templates.Sidebar.renderCustomContent(opt_data) : '') + '<div class="acs-nav-list-page-tree-section' + ((opt_data.pageTreeState == 'hide') ? ' hidden-section' : '') + '"><div class="page-tree-header"><h5>' + soy.$$escapeHtml('Navigation display options') + '</h5><a href="#" class="aui-icon aui-icon-small ' + ((opt_data.pageTreeState == 'hide') ? 'aui-iconfont-add-circle' : 'aui-iconfont-plan-disabled') + '" data-tooltip="' + soy.$$escapeHtml('Hide/Show navigation display options') + '"/></div><form class="aui page-tree-options"><div class="radio"><input ' + ((opt_data.pageTreeState == 'hide') ? 'disabled ' : '') + ' class="radio acs-nav-type" type="radio" name="nav-type" value="pages" id="nav-type-pages" ' + ((! opt_data.pageTree) ? 'checked' : '') + '><label for="nav-type-pages">' + soy.$$escapeHtml('Child pages') + '</label></div><div class="radio"><input ' + ((opt_data.pageTreeState == 'hide') ? 'disabled ' : '') + ' class="radio acs-nav-type" type="radio" name="nav-type" value="page-tree" id="nav-type-tree" ' + ((opt_data.pageTree) ? 'checked' : '') + '><label for="nav-type-tree">' + soy.$$escapeHtml('Page tree') + '</label></div></form></div><button class="aui-style aui-button acs-done-link">' + soy.$$escapeHtml('Done') + '</button></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.configure.soyTemplateName = 'Confluence.Templates.Sidebar.configure';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:soy-resources', location = 'soy/sidebar-pages.soy' */
// This file was automatically generated from sidebar-pages.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Sidebar.Pages.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Sidebar == 'undefined') { Confluence.Templates.Sidebar = {}; }
if (typeof Confluence.Templates.Sidebar.Pages == 'undefined') { Confluence.Templates.Sidebar.Pages = {}; }


Confluence.Templates.Sidebar.Pages.renderPageContextualNav = function(opt_data, opt_ignored) {
  return '<div class="ia-secondary-header"><h5 class="ia-secondary-header-title pages"><span class="label">' + soy.$$escapeHtml('Child pages') + '</span></h5></div><div class="ia-secondary-parent-content">' + Confluence.Templates.Sidebar.Pages.parentPage({parentPage: opt_data.pageContextualNav.parentPage}) + '</div><div class="ia-secondary-current-content">' + Confluence.Templates.Sidebar.Pages.currentPage({currentPage: opt_data.pageContextualNav.currentPage}) + '</div><div class="ia-secondary-content">' + Confluence.Templates.Sidebar.Pages.childPages({children: opt_data.pageContextualNav, createPermission: opt_data.hasCreatePermission}) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.renderPageContextualNav.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.renderPageContextualNav';
}


Confluence.Templates.Sidebar.Pages.childPages = function(opt_data, opt_ignored) {
  return '<div class="contextual-nav-child-pages">' + ((opt_data.children.initialChildPages.length) ? '<ul class="children">' + Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.initialChildPages}) + '</ul>' + ((opt_data.children.remainingChildPages.length) ? '<ul class="more-children">' + Confluence.Templates.Sidebar.Pages.renderChildren({children: opt_data.children.remainingChildPages}) + '</ul><a class="more-children-link" href=""><span class="icon"></span><span class="label">' + soy.$$escapeHtml(AJS.format('{0} more child pages',opt_data.children.remainingChildPages.length)) + '</span></a>' : '') : '') + ((opt_data.createPermission && opt_data.children.createLink) ? '<a class="create-child-page-link" href="' + soy.$$escapeHtml(opt_data.children.createLink) + '"><span class="aui-icon aui-icon-small aui-iconfont-add-small"></span><span class="label">' + soy.$$escapeHtml('Create child page') + '</span></a>' : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.childPages.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.childPages';
}


Confluence.Templates.Sidebar.Pages.currentPage = function(opt_data, opt_ignored) {
  return '' + ((opt_data.currentPage) ? '<ul class="ia-secondary-currentPage-title wiki' + ((opt_data.currentPage.active) ? ' current-item' : '') + '"><li><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.currentPage.title) + '</span></li></ul>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.currentPage.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.currentPage';
}


Confluence.Templates.Sidebar.Pages.parentPage = function(opt_data, opt_ignored) {
  return '' + ((opt_data.parentPage) ? '<ul class="parent ia-secondary-header-title wiki' + ((opt_data.parentPage.active) ? ' current-item' : '') + '"><li class="parent-item"><a class="parent-item-link" href="' + soy.$$escapeHtml(opt_data.parentPage.url) + '" title="' + soy.$$escapeHtml(opt_data.parentPage.title) + '"><span class="icon"></span><span class="label">' + soy.$$escapeHtml(opt_data.parentPage.title) + '</span></a></li></ul>' : '');
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.parentPage.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.parentPage';
}


Confluence.Templates.Sidebar.Pages.renderChildren = function(opt_data, opt_ignored) {
  var output = '';
  var childList65 = opt_data.children;
  var childListLen65 = childList65.length;
  for (var childIndex65 = 0; childIndex65 < childListLen65; childIndex65++) {
    var childData65 = childList65[childIndex65];
    output += '<li class="child-item" data-page-id="' + soy.$$escapeHtml(childData65.pageId) + '"><span class="icon"></span><a href="' + soy.$$escapeHtml(childData65.url) + '" title="' + soy.$$escapeHtml(childData65.title) + '"><span class="label">' + soy.$$escapeHtml(childData65.title) + '</span></a></li>';
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Sidebar.Pages.renderChildren.soyTemplateName = 'Confluence.Templates.Sidebar.Pages.renderChildren';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/editor-loader.js' */
define("confluence-editor-loader/editor-loader","jquery confluence/legacy wrm/context-path confluence/dark-features confluence/api/logger confluence/meta confluence/template-renderer confluence/aui-overrides ajs wrm window".split(" "),function(d,h,n,o,e,i,p,q,f,r,s){var b,c={_listening:false,_queuedHandlers:[],_watchHandler:function(){h.Editor.UI.toggleWatchPage(false)},_unwatchHandler:function(){h.Editor.UI.toggleWatchPage(true)},_createQueueAdder:function(a){return function(){c._listening&&c._queuedHandlers.push(a)}},
bind:function(){f.bind("watchpage.pageoperation",this._createQueueAdder(this._watchHandler));f.bind("unwatchpage.pageoperation",this._createQueueAdder(this._unwatchHandler))},setListening:function(a){this._listening=a},applyHandlers:function(){for(var a=this._queuedHandlers.pop();a;){a();a=this._queuedHandlers.pop()}}};c.setListening(true);c.bind();var l=function(){var a=d("#editor-preload-container");a.length||(a=d('<div id="editor-preload-container" style="display: none;"></div>'));return a},g,
m={getPreloadContainer:l,getEditorPreloadMarkup:function(){if(g)return g;h.debugTime("confluence.editor.preload");var a=n()+"/plugins/editor-loader/editor.action";return g=d.get(a,{parentPageId:i.get("parent-page-id"),pageId:i.get("page-id"),spaceKey:i.get("space-key"),atl_after_login_redirect:s.location.pathname,timeout:m.loadingTimeout})},resourcesLoaded:function(){return b&&b.state()==="resolved"},loadingTimeout:12E3,isEditorActive:function(){var a=d("#editor-preload-container");return a.length&&
a.is(":visible")},load:function(a,c){function g(){var a=[o.isEnabled("frontend.editor.v4")?"wrc!editor-v4":"wrc!editor-v3","wrc!editor","wrc!macro-browser","wrc!fullpage-editor"];return r.require(a).fail(function(a){e.logError("Failed to load editor resources",a)})}var k;if(b){b.fail(function(){c?c.call(this,arguments):e.log("EditorLoader: loadGuard - previous load failed.")});b.done(function(){a?b.done(function(){setTimeout(a,0)}):e.log("EditorLoader: loadGuard - editor is already loaded.")});k=
true}else k=void 0;if(!k){b=new d.Deferred;a&&b.done(a);c&&b.fail(c);var f=l();d("body").append(f);var j=new d.Deferred;i.get("page-id")?this.getEditorPreloadMarkup().always(function(a,b,c){if(b==="success"||b==="notmodified"){f.append(a);a=p.renderTemplate("dynamic-editor-metadata");d("head").append(a);q.metaToParams();e.debug("EditorLoader: Finished loading the editor template.");j.resolve();h.debugTimeEnd("confluence.editor.preload")}else j.reject("Error loading the Editor template: "+c.status+
" - "+c.statusText)}):j.resolve();j.pipe(g).done(function(){e.debug("EditorLoader: Finished loading the editor.");b.resolve()}).fail(function(){b.reject(arguments)})}},getEditorForm:function(){if(this.isEditorActive()){var a=require("tinymce");return d(a.activeEditor.getContainer()).closest("form")}return null}};return m});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/editor-loader","AJS.Confluence.EditorLoader");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor-loader:background-loading-editor', location = 'jscripts/block-and-buffer-keys.js' */
define("confluence-editor-loader/block-and-buffer-keys",[],function(){return{block:function(e){var d=[],f=function(a){a.preventDefault();a.stopPropagation();var c=a.which;c||(c=a.charCode?a.charCode:a.keyCode);13!==c&&48>c||d.push(c);a.preventDefault()};e.keypress(f);return function(){e.unbind("keypress",f);for(var a="",c=0;c<d.length;c++){var b;b=d[c];65535<b?(b-=65536,b=String.fromCharCode(55296+(b>>10),56320+(b&1023))):b=String.fromCharCode(b);a+=b}return a}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor-loader/block-and-buffer-keys","AJS.Confluence.BlockAndBuffer");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--fc45e4dda1', location = 'aui.chunk.f275be028b02fbce6993--d9ed628d7ae62b6737e9.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.vendors--fc45e4dda1"],{"FJx+":function(n,i,o){}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_jquery.ui.sortable', location = 'aui.chunk.6880542ee9d1db428d90--3d4584a88af3f8040a6a.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["jquery.ui.sortable"],{Ckgl:function(u,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i("FJx+"),i("xTPO"),e.default="jquery",u.exports=e.default}},[["Ckgl","runtime","aui.splitchunk.vendors--20a97d6a33","aui.splitchunk.vendors--d18e3cafa7","aui.splitchunk.vendors--db57146687","aui.splitchunk.vendors--51504ebf10","aui.splitchunk.vendors--351ae504d7","aui.splitchunk.vendors--6ce18a1d80","aui.splitchunk.vendors--fc45e4dda1","aui.splitchunk.172ffb6da7"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/linkbrowser-editor-adapter.js' */
AJS.$(function(){if(!$("body").hasClass("with-space-sidebar")){return}Confluence=Confluence||{};Confluence.Editor=Confluence.Editor||{};AJS.Rte=AJS.Rte||{};AJS.Rte.BookmarkManager=AJS.Rte.BookmarkManager||{};AJS.Rte.BookmarkManager.storeBookmark=AJS.$.noop;AJS.Rte.BookmarkManager.restoreBookmark=AJS.$.noop});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-ia.js' */
(function(a){Confluence.Sidebar={};AJS.toInit(function(C){var I=C(window);var o=C(document);var v=Math.min(285,I.width()/3);var z=285;var c=150;var n=55;var q=640;var E=AJS.storageManager("confluence","sidebar");var p="width";var l=AJS.contextPath();var G=AJS.Meta.get("space-key");var i=AJS.Meta.get("use-keyboard-shortcuts")?" "+"(\u2009[\u2009)":"";Confluence.Sidebar.collapseTooltip="Collapse sidebar"+i;Confluence.Sidebar.expandTooltip="Expand sidebar"+i;var H=C(".ia-splitter").children();var D=C(".ia-splitter-left");if(D.length<1){return}var h=C(".acs-side-bar");var d=D.find(".ia-fixed-sidebar");var b=C("<div>",{"class":"ia-splitter-handle tipsy-enabled","data-tooltip":Confluence.Sidebar.collapseTooltip}).appendTo(d);C("<div>",{"class":"ia-splitter-handle-highlight confluence-icon-grab-handle"}).appendTo(b);var u=C(".ia-secondary-container");var m=C("#footer, #studio-footer");Confluence.Sidebar.throbberDiv=e;u.length&&k(u.attr("data-tree-type"));I.scroll(y);I.resize(y);I.on("touchend",y);o.ready(y);AJS.bind("confluence.header-resized",y);C("#header-precursor img").load(y);Confluence.Sidebar.applyTooltip=r;t();AJS.bind("sidebar.exit-configure-mode",t);var g=E.getItem(p)||v;var A=g>c?g:n;x(A);K();d.css("visibility","visible");y();J();setTimeout(function(){Confluence.Sidebar.createFlyouts(h)},0);AJS.trigger("sidebar.finished-loading");I.one("pagetree-children-loaded",function(){var L=C(".plugin_pagetree_current");if(L.length){var M=L.offset();if(M.top>h.height()/2){h.scrollTop(M.top-h.height()/3)}if(M.left>h.width()/2){h.scrollLeft(M.left-h.width()/2)}}});AJS.bind("sidebar.enter-configure-mode",function(){s();w();d.addClass("configure-mode")});AJS.bind("sidebar.exit-configure-mode",function(){s();B();d.removeClass("configure-mode")});function s(){AJS.trigger("sidebar.hide-overlays")}function r(L,N){var M={gravity:"w",title:"data-tooltip",delayIn:500,delayOut:0,offset:5};C(document).tooltip(C.extend(M,N?N:{},{live:L,}))}function t(){C(".acs-side-bar .quick-links-section").attr("data-collapsed-tooltip","Space shortcuts");C("#space-tools-menu-trigger").attr("data-collapsed-tooltip","Space tools");if(u.attr("data-tree-type")=="pages"){C(".acs-side-bar .ia-secondary-container").attr("data-collapsed-tooltip","Child pages");r(".collapsed .ia-secondary-container.tipsy-enabled",{title:"data-collapsed-tooltip"})}r(".expand-collapse-trigger");r(".ia-splitter-handle.tipsy-enabled");r(".collapsed .quick-links-section.tipsy-enabled, .collapsed .acs-nav-item > a.tipsy-enabled, .collapsed #space-tools-menu-trigger.tipsy-enabled",{title:"data-collapsed-tooltip"});r(".configure-mode .acs-side-bar-space-info.tipsy-enabled",{title:"data-configure-tooltip"});h.on("mousedown click scroll",s);C(window).on("scroll resize",s);AJS.bind("sidebar.hide-overlays",M);AJS.bind("sidebar.disable-tooltip",N);AJS.bind("sidebar.enable-all-tooltips",L);function N(R,Q){var O=C(Q).closest(".tipsy-enabled");if(O.size()!=1){return}O.removeClass("tipsy-enabled").addClass("tipsy-disabled").attr("title","");var P=O.data("tipsy");if(P){P.hoverState="out"}M()}function L(){C(".tipsy-disabled").removeClass("tipsy-disabled").addClass("tipsy-enabled")}function M(){C(".tipsy").remove()}}function K(){o.on("mousewheel",".ia-scrollable-section",function(N,O){var M=C(this).scrollTop();var L=C(this).get(0).scrollHeight-C(this).innerHeight()-1;if((O>0&&M<=0)||(O<0&&M>=L)){N.preventDefault()}N.stopPropagation()})}function e(){var M=C(Confluence.Templates.Sidebar.throbber()),N=M.find(".spinner"),L=Raphael.spinner(N[0],10,"#666");M.find(".throbber").bind("remove",function(){L()});return M}function k(L){if(L==="blogs"){j(h,f)}else{if(L==="pages"){Confluence.Sidebar.Pages.installHandlers(h)}}}function f(O,P){var N=O.attr("data-group-type");var L=O.attr("data-group-value");var M=l+"/rest/ia/1.0/pagetree/blog/subtree";C.get(M,{spaceKey:G,groupType:N,groupValue:L}).done(P)}function j(L,M){L.delegate(".acs-tree-item > .icon, .acs-tree-item > .node-title","click",function(){var R=C(this);var Q=R.parent();var N=Q.find("> .icon");if(Q.hasClass("opened")){Q.children("ul").hide();Q.removeClass("opened").addClass("closed");N.removeClass("aui-iconfont-expanded").addClass("aui-iconfont-collapsed")}else{if(Q.hasClass("closed")){var O=Q.children("ul");if(O.length){O.show()}else{var P=C(Confluence.Templates.Sidebar.treeThrobber());Q.append(P);M(Q,function(T){var S=C(Confluence.Templates.Sidebar.pagetreeList({pagetree:T,isSubtree:true}));P.remove();S.appendTo(Q)})}Q.removeClass("closed").addClass("opened");N.removeClass("aui-iconfont-collapsed").addClass("aui-iconfont-expanded")}}})}function y(){var L=D.offset().top,M=I.scrollTop(),N=I.scrollLeft();if(M<0){return}if(M>(o.height()-I.height())){return}if(N<0){return}if(N>(o.width()-I.width())){return}if(C("#header").css("position")!=="fixed"){d.css({top:Math.max(L-M,0)+"px",left:Math.min(N*-1,0)+"px"})}else{d.css({left:Math.min(N*-1,0)+"px"})}}function F(){m.css("margin-left",d.outerWidth()+"px")}function J(){var O=C("body");var M=false;var N=false;var P=function(Q){N=true;Q.preventDefault();H.one("selectstart",function(S){S.preventDefault()});var R=function(){if(d.width()<=c){x(n)}else{v=d.width()}N=false;O.off("mousemove.ia-splitter")};M=false;O.on("mousemove.ia-splitter",function(S){if(Confluence.Sidebar.Configure.mode&&S.pageX<z){return}x(S.pageX);M=true});O.one("mouseup mouseleave",R)};b.on("mousedown.ia-splitter",function(Q){P(Q);s()}).click(function(){if(!M){L()}else{M=false}});Confluence.Sidebar.toggle=L;function L(){if(Confluence.Sidebar.Configure.mode){return}var Q=d.width();if(Q>n){if(Q<=c){v=z;x(v)}else{v=Q;x(n)}}else{x(v)}}}function x(L){L=Math.max(L,n);L=Math.min(L,q);E.setItemQuietly(p,L);if(L<=c){d.addClass("collapsed");C(".expand-collapse-trigger").removeClass("aui-iconfont-chevron-double-left").addClass("aui-iconfont-chevron-double-right");b.attr("data-tooltip",Confluence.Sidebar.expandTooltip);AJS.trigger("sidebar.collapsed")}else{if(d.hasClass("collapsed")){d.removeClass("collapsed");b.attr("data-tooltip",Confluence.Sidebar.collapseTooltip);C(".expand-collapse-trigger").removeClass("aui-iconfont-chevron-double-right").addClass("aui-iconfont-chevron-double-left");AJS.trigger("sidebar.expanded")}}d.width(L);H.eq(1).css("margin-left",L+"px");F()}function w(){if(d.width()<z){Confluence.Sidebar.widthBeforeConfiguring=d.width();x(z)}}function B(){if(Confluence.Sidebar.widthBeforeConfiguring){x(Confluence.Sidebar.widthBeforeConfiguring);Confluence.Sidebar.widthBeforeConfiguring=undefined}}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/configurable-nav.js' */
(function(a){AJS.Confluence.ConfigurableNav=AJS.RestfulTable.extend({initialize:function(c){var b=this;b.options=a.extend(true,this._getDefaultOptions(c),c,{columns:[{id:"title"}]});b._events=b._events||AJS.RestfulTable.Events;b._event=b._event||AJS.RestfulTable.Events;b.classNames=AJS.RestfulTable.ClassNames;b.dataKeys=AJS.RestfulTable.DataKeys;b.$table=c.$el.addClass(this.classNames.RESTFUL_TABLE).addClass(this.classNames.ALLOW_HOVER).addClass("aui").addClass(b.classNames.LOADING);b.$table.prepend('<colgroup><col span="1" class="aui-restfultable-order"><col span="1"><col span="1" class="aui-restfultable-operations"></colgroup>');b.$tbody=a("<tbody/>");b._models=this._createCollection();b._rowClass=AJS.Confluence.ConfigurableNav.Row;b.editRows=[];b.enableReordering();b._models.bind("remove",function(d){a.each(b.getRows(),function(e,f){if(f.model===d){if(f.hasFocus()&&b._createRow){b._createRow.trigger(b._event.FOCUS)}b.removeRow(f)}})});this.fetchInitialResources();Confluence.Sidebar.applyTooltip(".aui-iconfont-add-circle, .aui-iconfont-cross-circle, .aui-iconfont-plan-disabled",{gravity:"ne"})},enableReordering:function(){var b=this;this.$tbody.sortable({handle:"."+this.classNames.DRAG_HANDLE,helper:function(f,c){var d=c.clone(true).addClass(b.classNames.MOVEABLE);d.children().each(function(e){a(this).width(c.children().eq(e).width())});return d},start:function(c,d){var e=d.placeholder.find("td");d.item.addClass(b.classNames.MOVEABLE).children().each(function(f){a(this).width(e.eq(f).width())});d.placeholder.html('<td colspan="'+b.getColumnCount()+'">&nbsp;</td>').css("visibility","visible");b.getRowFromElement(d.item[0]).trigger(b._event.MODAL)},stop:function(c,d){if(jQuery(d.item[0]).is(":visible")){d.item.removeClass(b.classNames.MOVEABLE).children().attr("style","");d.placeholder.removeClass(b.classNames.ROW);b.getRowFromElement(d.item[0]).trigger(b._event.MODELESS)}},update:function(f,h){var c,e,g={},i=b.getRowFromElement(h.item[0]);if(i){if(b.options.reverseOrder){e=h.item.next();if(!e.length){g.position="First"}else{c=b.getRowFromElement(e).model;g.after=c.url()}}else{e=h.item.prev();if(!e.length){g.position="First"}else{c=b.getRowFromElement(e).model;g.after=c.url()}}g.spaceKey=AJS.Meta.get("space-key");a.ajax({url:i.model.url()+"/move",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify(g),complete:function(){i.hideLoading()},success:function(k){d(AJS.RestfulTable.Events.REORDER_SUCCESS,b,[k])},error:function(l){var k=a.parseJSON(l.responseText||l.data);d(AJS.RestfulTable.Events.SERVER_ERROR,b,[k,l])}});function d(k,m,l){a(m).trigger(k,l);j(k,a(m),l);if(m.id){j(m.id+"-"+k,a(m),l)}}function j(m,l,k){l.trigger(m,k)}i.showLoading()}},axis:"y",delay:0,containment:"document",cursor:"move",scroll:true,zIndex:8000});this.$tbody.bind("selectstart mousedown",function(c){return !a(c.target).is("."+b.classNames.DRAG_HANDLE)})}});AJS.Confluence.ConfigurableNav.ReadView=AJS.RestfulTable.CustomReadView.extend({render:function(c){var b=c.styleClass=="pinned_attachment"?"aui-icon aui-icon-small aui-iconfont-attachment":"icon";return _.template('<span class="acs-nav-item-link" title="<%=title%>"><span class="'+b+'"></span><span class="acs-nav-item-label"><%=title%></span></span>')({title:AJS.escapeHtml(c.title)})}});AJS.Confluence.ConfigurableNav.Row=AJS.RestfulTable.Row.extend({render:function(){var b=this,d=this.model.toJSON(),e=a("<td class='aui-restfultable-operations' />").append(this.renderOperations(d.canHide,d.hidden)),c=a('<td class="'+this.classNames.ORDER+'"/>').append(this.renderDragHandle());b._event=b._event||b._events;b.$el.attr("data-id",this.model.id);b.$el.append(c);a.each(b.columns,function(f,g){var h,k=a("<td />"),j=d[g.id];if(j){b.$el.attr("data-"+g.id,j)}h=new AJS.Confluence.ConfigurableNav.ReadView().render(d);k.append(h);b.$el.append(k)});b.$el.append(e);d.canHide&&d.hidden&&b.$el.addClass("hidden-link");b.$el.addClass(this.classNames.ROW+" "+b.classNames.READ_ONLY+" acs-nav-item "+d.styleClass);b.trigger(this._event.RENDER,this.$el,d);b.$el.trigger(this._event.CONTENT_REFRESHED,[b.$el]);return b},renderOperations:function(f,e){var c=this,b=a('<a href="#" class="aui-icon aui-icon-small"/>');if(f){function d(g){if(g.hasClass("aui-iconfont-plan-disabled")){g.attr("data-tooltip","Hide link")}else{g.attr("data-tooltip","Show link")}}b.addClass(e?"aui-iconfont-add-circle show-link":"aui-iconfont-plan-disabled hide-link").click(function(g){g.preventDefault();a.ajax({url:c.model.url()+(e?"/show":"/hide"),type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:AJS.Meta.get("space-key")})}).done(function(){b.closest(".acs-nav-item").toggleClass("hidden-link");b.toggleClass("aui-iconfont-plan-disabled").toggleClass("aui-iconfont-add-circle");b.toggleClass("hide-link").toggleClass("show-link");d(b)})});d(b)}else{b.addClass("aui-iconfont-cross-circle delete-link tipsy-enabled").click(function(g){g.preventDefault();if(a(".acs-nav").data("quick-links-state")!="hide"){AJS.trigger("sidebar.disable-tooltip",this);c.destroy()}}).attr("data-tooltip","Remove link")}return b},destroy:function(){this.model.destroy({data:{spaceKey:AJS.Meta.get("space-key")}})}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-pages.js' */
(function(b){var a=AJS.Meta.get("context-path");Confluence.Sidebar.Pages={installHandlers:function(d){d.find(".more-children-link").click(function(f){f.preventDefault();d.find("ul.more-children").show();b(this).hide()})},quickLinksContent:function(){return new b.Deferred().resolve(b(".acs-side-bar .quick-links-wrapper").html())},childPageCollapsedContent:function(){var e=b(".acs-side-bar .ia-secondary-header");var d=b(".acs-side-bar .ia-secondary-parent-content");var g=b(".acs-side-bar .ia-secondary-current-content");var f=b(".acs-side-bar .ia-secondary-content");return new b.Deferred().resolve(b("<div>").append(b("<div>").addClass("acs-side-bar-flyout-wiki-wrapper").append(e.clone()).append(d.clone()).append(g.clone()).append(f.clone())).html())},pageTreeCollapsedContent:function(){var d=b(".page-tree-flyout-content");if(d.length==0){return c().pipe(function(e){var f=b("<div>").addClass("acs-side-bar-flyout-wiki-wrapper").append(Confluence.Templates.Sidebar.Pages.renderPageContextualNav({pageContextualNav:e,hasCreatePermission:b(".acs-nav").data("has-create-permission")}));b("body").append(b("<div>").addClass("page-tree-flyout-content hidden").append(f.clone()));return f})}else{return new b.Deferred().resolve(d.html())}}};function c(){return b.ajax({url:a+"/rest/ia/1.0/space/childPagesContextualNav",data:{pageId:AJS.Meta.get("page-id")}})}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-links.js' */
AJS.$(function(){Confluence.Sidebar.Configure={mode:false};var d=AJS.$,n=AJS.Meta.get("context-path"),l=AJS.Meta.get("space-key"),j=d(".acs-side-bar"),r=j.find(".ia-secondary-container"),e,p,k,m,h=d(".acs-nav"),t=false;d.ajaxSetup({cache:false});d("body").on("click","#acs-configure-link, a.configure-sidebar",function(w){w.preventDefault();v()});d("#space-favourite-remove").on("click",function(){c("remove")});d("#space-favourite-add").on("click",function(){c("add")});function c(y){var z;var x;var w=d(".space-information-container .favourite-space-icon");w.addClass("disabled");if(y==="add"){z="PUT";x="confluence.space-sidebar.favourite.click"}else{z="DELETE";x="confluence.space-sidebar.favourite-remove.click"}d.ajax({url:n+"/rest/experimental/relation/user/current/favourite/toSpace/"+l,type:z,dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:l})}).done(function(){var A=d("#space-favourite-add");var B=d("#space-favourite-remove");if(y==="add"){A.prop("data-favourited","true");B.show();A.hide()}else{A.prop("data-favourited","false");A.show();B.hide()}}).fail(function(A){var B=require("confluence/message-controller");B.showError(B.parseError(A),B.Location.FLAG)}).always(function(){w.removeClass("disabled")});AJS.trigger("analyticsEvent",{name:x})}function v(){AJS.trigger("sidebar-before-enter-configure-mode");var w=d(".custom-sidebar-content");var z=w.length;var D;var B;if(z){B=n+"/spaces/custompagecontent.action?key="+l;D=w.children().html()}m=h.data("nav-type");Confluence.Sidebar.Configure.mode=true;k=d(".acs-nav-sections .acs-nav-item.current-item").data("collector-key");e=Confluence.Sidebar.throbberDiv();var C=d(".acs-nav-sections");e.height(C.height());r.hide();C.replaceWith(e);var y=Confluence.Templates.Sidebar.configure({pageTree:m==="page-tree",quickLinksState:h.data("quick-links-state"),pageTreeState:h.data("page-tree-state"),hasSidebarCustomisation:z,customContentAdminLink:B,sidebarCustomisation:D,accessMode:AJS.Meta.get("access-mode")});p=d(y).hide();e.after(p);i();g();s();var A={};var x=function(){e.replaceWith(p);p.show()};d("#acs-nav-list-main").one(AJS.RestfulTable.Events.INITIALIZED,function(){A.main=true;A.quick&&x()});d("#acs-nav-list-quick").one(AJS.RestfulTable.Events.INITIALIZED,function(){A.quick=true;A.main&&x()});d(".acs-nav-type").change(function(E){u("nav-type",d(this).val(),function(F){r.data("tree-type",F);h.data("nav-type",F)})});d(".acs-done-link").click(function(E){E.preventDefault();d(".acs-done-link").attr("aria-disabled",true).prop("disabled",true);o()});d(".quick-links-header a").click(function(F){F.preventDefault();var E=h.data("quick-links-state")==="hide"?"show":"hide";u("quick-links-state",E,a)});d(".page-tree-header a").click(function(G){G.preventDefault();var F=h.data("page-tree-state")==="hide"?"show":"hide";var E=d(".acs-nav-type");if(F==="show"){E.attr("disabled",false)}else{E.attr("disabled",true)}u("page-tree-state",F,b)});AJS.$(".acs-side-bar-space-info").on("click.configurelogo",q);AJS.trigger("sidebar.enter-configure-mode")}function q(y){var x=AJS.$(".acs-side-bar-space-info > .flyout-handle");x.addClass("loading").spin();var w=WRM.require("wr!com.atlassian.confluence.plugins.confluence-space-ia:avatar-picker",function(){AJS.trigger("deferred.spaceia.open.configure.space")});w.always(function(){x.removeClass("loading").spinStop()});y.preventDefault()}function u(w,x,y){d.ajax({url:n+"/rest/ia/1.0/space/option",type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:l,option:w,value:x}),success:function(z){y(x)}})}function o(){if(m!==h.data("nav-type")||t===true){location.reload();t=false;return}var w=d(".custom-sidebar-content");var y=w.length;var A;if(y){A=w.children().html()}e=Confluence.Sidebar.throbberDiv();e.height(p.height());p.replaceWith(e);f();r.show().css("display","");var x=function(){var B=d(Confluence.Templates.Sidebar.renderLinks({mainLinks:z.main,quickLinks:z.quick.reverse(),advancedLinks:z.advanced,hasConfigurePermission:true,collectorToHighlight:k,quickLinksState:h.data("quick-links-state"),hasSidebarCustomisation:y,sidebarCustomisation:A}));e.replaceWith(B);Confluence.Sidebar.Configure.mode=false;AJS.trigger("sidebar.exit-configure-mode")};var z={};d.get(n+"/rest/ia/1.0/link/main",{spaceKey:l,includeHidden:false}).done(function(B){z.main=B;z.quick&&z.advanced&&x()});d.get(n+"/rest/ia/1.0/link/quick",{spaceKey:l}).done(function(B){z.quick=B;z.main&&z.advanced&&x()});d.get(n+"/rest/ia/1.0/link/advanced",{spaceKey:l}).done(function(B){z.advanced=B;z.main&&z.quick&&x()});Confluence.Sidebar.Configure.Logo&&Confluence.Sidebar.Configure.Logo.unbind()}function i(){WRM.require("wr!com.atlassian.confluence.plugins.confluence-space-ia:link-dialog",function(){var w=new d.Deferred();d(".acs-add-link").click(function(x){w.done(function(){x.preventDefault();if(h.data("quick-links-state")!=="hide"){Confluence.Sidebar.LinkAdapter.hijackLinkBrowser();Confluence.Editor.LinkBrowser.open();d("#recentlyviewed-panel-id").click()}})}).addClass("acs-add-link-ready");if(AJS.Meta.get("space-key")){AJS.Confluence.EditorLoader.load(function(){w.resolve()},function(){AJS.log("Attempted to load editor for space ia side bar. Loading the editor failed.");w.reject()})}else{w.resolve()}})}function g(){var w=d("#acs-nav-list-quick");var y=d(".acs-nav-sections .tip").hide();var x=function(){if(Confluence.Sidebar.Configure.QuickLinks.isEmpty()){w.hide();y.show()}else{y.hide();w.show()}};d(document).bind(AJS.RestfulTable.Events.INITIALIZED,x);d(document).bind(AJS.RestfulTable.Events.ROW_ADDED,x);d(document).bind(AJS.RestfulTable.Events.ROW_REMOVED,x)}function s(){Confluence.Sidebar.Configure.MainLinks=new AJS.Confluence.ConfigurableNav({$el:d("#acs-nav-list-main"),resources:{all:n+"/rest/ia/1.0/link/main?spaceKey="+l+"&includeHidden=true",self:n+"/rest/ia/1.0/link"}});Confluence.Sidebar.Configure.QuickLinks=new AJS.Confluence.ConfigurableNav({$el:d("#acs-nav-list-quick"),resources:{all:n+"/rest/ia/1.0/link/quick?spaceKey="+l,self:n+"/rest/ia/1.0/link"},reverseOrder:true})}function f(){Confluence.Sidebar.Configure.MainLinks.remove();Confluence.Sidebar.Configure.MainLinks.unbind();Confluence.Sidebar.Configure.QuickLinks.remove();Confluence.Sidebar.Configure.QuickLinks.unbind();d(document).unbind(AJS.RestfulTable.Events.INITIALIZED);d(document).unbind(AJS.RestfulTable.Events.ROW_ADDED);d(document).unbind(AJS.RestfulTable.Events.ROW_REMOVED)}function a(w){h.data("quick-links-state",w);if(w==="hide"){d(".acs-nav-list-quick-section").addClass("hidden-section");d(".quick-links-header a").removeClass("aui-iconfont-plan-disabled").addClass("aui-iconfont-add-circle")}else{d(".acs-nav-list-quick-section").removeClass("hidden-section");d(".quick-links-header a").removeClass("aui-iconfont-add-circle").addClass("aui-iconfont-plan-disabled")}}function b(w){h.data("page-tree-state",w);t=true;if(w==="hide"){d(".acs-nav-list-page-tree-section").addClass("hidden-section");d(".page-tree-header a").removeClass("aui-iconfont-plan-disabled").addClass("aui-iconfont-add-circle")}else{d(".acs-nav-list-page-tree-section").removeClass("hidden-section");d(".page-tree-header a").removeClass("aui-iconfont-add-circle").addClass("aui-iconfont-plan-disabled")}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-space-tools.js' */
define("confluence-space-ia/sidebar-space-tools",["ajs","jquery","confluence/legacy"],function(b,c,d){function a(){var e=[];var h=[];var k=b.version.indexOf("5.7")===0;var i;var l;var f,j;if(!k){f=c("#space-tools-menu-trigger");j=c("#space-tools-menu")}var g;if(k){c("#space-tools-web-items").children("div").each(function(){e.push({label:c(this).data("label"),href:c(this).data("href")})})}else{b.warn("Remove legacy sidebar code when upgrade to AUI 5.8+");j.on({"aui-dropdown2-show":function(){b.trigger("sidebar.disable-tooltip",f)},"aui-dropdown2-hide":function(){b.trigger("sidebar.enable-all-tooltips")}});c("#space-tools-web-items").children("div").each(function(){e.push({text:c(this).data("label"),href:c(this).data("href")})})}if(k){c("#space-tools-menu-additional-items").children("div").each(function(){h.push({className:c(this).data("class"),label:c(this).data("label"),href:c(this).data("href")})})}else{c("#space-tools-menu-additional-items").children("div").each(function(){h.push({extraClasses:c(this).data("class"),text:c(this).data("label"),href:c(this).data("href")})})}if(k){l={hideDelay:null,width:170,displayShadow:false,calculatePositions:function(m,n){var o=n.target.offset();return{popupCss:{top:o.top-m.height(),left:o.left},arrowCss:{display:"none"}}},hideCallback:function(){b.trigger("sidebar.enable-all-tooltips")}};i=b.InlineDialog(c("#space-tools-menu-trigger"),"space-tools",function(n,m,o){n.html(d.Templates.Sidebar.spaceToolsMenu({spaceToolLinks:e,spaceLinks:h,isAuiFiveSeven:k}));c(m).one("click",function(p){if(c("#inline-dialog-space-tools").is(":visible")){setTimeout(function(){i.hide()},0)}});b.trigger("sidebar.disable-tooltip",m);b.trigger("sidebar.spacetools-loaded");o();return false},l);i.addClass("aui-dropdown2 aui-style-default space-tools-dropdown");b.bind("sidebar.hide-overlays",i.hide)}else{j.html(d.Templates.Sidebar.spaceToolsMenu({spaceToolLinks:e,spaceLinks:h}));if(b&&b.Confluence&&b.Confluence.Analytics&&b.Confluence.Analytics.setAnalyticsSource){b.Confluence.Analytics.setAnalyticsSource(j.find("a:not(.configure-sidebar)"),"spacetools")}b.bind("sidebar.hide-overlays",function(){if(j.filter('[aria-hidden="false"]').length){c("#space-tools-menu-trigger").trigger("aui-button-invoke")}})}g=c(".expand-collapse-trigger");g.click(function(m){m.preventDefault();d.Sidebar.toggle()});g.attr("data-tooltip",c(".ia-fixed-sidebar").hasClass("collapsed")?d.Sidebar.expandTooltip:d.Sidebar.collapseTooltip);b.bind("sidebar.collapsed",function(){g.attr("data-tooltip",d.Sidebar.expandTooltip)});b.bind("sidebar.expanded",function(){g.attr("data-tooltip",d.Sidebar.collapseTooltip)})}return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-space-tools-require.js' */
require(["confluence-space-ia/sidebar-space-tools"],function(a){AJS.toInit(function(){a()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-flyouts.js' */
(function(d){var b,c,a;Confluence.Sidebar.createFlyouts=function(g){b=f(d(".collapsed .quick-links-section"),Confluence.Sidebar.Pages.quickLinksContent,"sidebar-quick-links-flyout",{flyout:"quick-links"});var h=g.find(".ia-secondary-container");if(h.length&&h.attr("data-tree-type")=="pages"){c=f(d(".collapsed .ia-secondary-header-title.wiki"),Confluence.Sidebar.Pages.childPageCollapsedContent,"sidebar-children-flyout",{flyout:"children"})}if(h.length&&h.attr("data-tree-type")=="page-tree"){a=f(d(".collapsed .ia-secondary-header-title.page-tree"),Confluence.Sidebar.Pages.pageTreeCollapsedContent,"sidebar-page-tree-flyout",{flyout:"pagetree"})}};function f(g,j,i,l){var k=function(n,m,o){d(n).addClass("acs-side-bar-flyout ia-scrollable-section");d(n).empty().append(Confluence.Sidebar.throbberDiv());j().done(function(p){d(n).html(p)});AJS.trigger("sidebar.flyout-triggered",l);o();d(m).one("click",function(p){if(d("#inline-dialog-"+i).is(":visible")){setTimeout(function(){h.hide()},0)}});AJS.trigger("sidebar.disable-tooltip",m)};var h=AJS.InlineDialog(g,i,k,{gravity:"w",calculatePositions:e,useLiveEvents:true,hideDelay:null,hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")}});AJS.bind("sidebar.hide-overlays",h.hide);return h}function e(h,k,p,g){var q=k.target.offset();var o=k.target.width();var l=k.target.height();var n={top:q.top+l/2-15,left:q.left+o+5,right:"auto"};var i=d(window);var m=20;n.maxHeight=i.height()+i.scrollTop()-n.top-m;var j={top:9};return{popupCss:n,arrowCss:j,gravity:"w"}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/external/jquery.mousewheel.min.js' */
/*! Copyright (c) 2011 Brandon Aaron (http://brandonaaron.net)
 * Licensed under the MIT License (LICENSE.txt).
 *
 * Thanks to: http://adomas.org/javascript-mouse-wheel/ for some pointers.
 * Thanks to: Mathias Bank(http://www.mathias-bank.de) for a scope bug fix.
 * Thanks to: Seamus Leahy for adding deltaX and deltaY
 *
 * Version: 3.0.6
 * 
 * Requires: 1.2.2+
 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacesidebar', location = 'js/sidebar-logo.js' */
AJS.toInit(function(f){Confluence.Sidebar.Configure.Logo={};var b=f(".acs-side-bar-space-info div.name a");var h;var a;var e=function(i){f(".space-logo .avatar-img").attr("src",AJS.Meta.get("context-path")+i)};var d=function(i){b.attr("title",i).text(i)};var g=function(i){if(!h){h=new i({onCrop:function(k,j){f.ajax({type:"POST",dataType:"json",contentType:"application/json",data:JSON.stringify({spaceKey:AJS.Meta.get("space-key"),spaceName:j,logoDataURI:k}),url:AJS.Meta.get("context-path")+"/rest/ia/1.0/space/setLogo",success:function(l){e(l.logoDownloadPath);d(l.name);h.hide()},error:function(l){h.setMessage("An error occurred while updating space details");h._removeSaveImageLoadingIcon()}})}})}h.show(f(".acs-side-bar-space-info div.name a").text());return false};var c=function(){var i=function(l,k,m){f(l).addClass("acs-side-bar-flyout");f(l).empty();l.html(AJS.template.load("logo-config-content"));l.unbind("mouseover mouseout");AJS.trigger("sidebar.disable-tooltip",k);m()};if(!a){a=AJS.InlineDialog(f(".acs-side-bar-space-info"),"space-logo-config",i,{gravity:"w",calculatePositions:j,useLiveEvents:true,hideCallback:function(){AJS.trigger("sidebar.enable-all-tooltips")},hideDelay:null,noBind:true,width:635})}function j(l,n,r,k){var s=n.target.offset();var q=n.target.width();var o=n.target.height();var p={top:s.top+o/2-15,left:s.left+q+5,right:"auto"};var m={top:9};return{popupCss:p,arrowCss:m,gravity:"w"}}a.show()};AJS.bind("sidebar-before-enter-configure-mode",function(){AJS.bind("deferred.spaceia.open.configure.space",function(i){if(AJS.Meta.get("space-key")=="~"+AJS.Meta.get("remote-user")){c()}else{require(["confluence-space-ia/avatar-picker/avatar-picker-dialog",],g)}i.preventDefault();return false})});Confluence.Sidebar.Configure.Logo.unbind=function(){f("#inline-dialog-space-logo-config .cancel").click();f(".acs-side-bar-space-info").off("click.configurelogo");AJS.unbind("deferred.spaceia.open.configure.space")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-namespace.js' */
'use strict';define("confluence-like/like-namespace",["confluence/legacy"],function(a){return a.Likes||{}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-like/like-namespace","Confluence.Likes");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like.js' */
'use strict';define("confluence-like/like",["ajs","confluence/legacy","jquery","confluence/meta","confluence/message-controller"],function(e,c,d,g,q){function r(a){return e.contextPath()+"/rest/likes/1.0/content/"+a+"/likes"}function v(){return 0<(g.get("remote-user")||"").length&&!1!==g.get("remote-user-has-licensed-access")}function t(a,b,h){var d=g.get("remote-user")||"";b=c.Likes.LikeSummaryFactory.getLikeSummary(a.likes,b,d);b.key||!n||"page"!==a.content_type&&"blogpost"!==a.content_type||(b.text=
"Be the first to like this");a=[];a.push(b.text);a=a.concat(b.args);(a=e.format.apply(e,a))&&0<a.length?(n&&h.addClass("like-summary-margin-left"),h.html(a)):(h.removeClass("like-summary-margin-left"),h.empty());a&&(h.find(".likes").click(p.showLikeUsers),c.Binder.userHover())}function m(a,b,h){var k=g.get("remote-user")||"";if(void 0===a)throw Error("type is required");if(void 0===b)throw Error("contentId is required");if(void 0===h)throw Error("contentType is required");return function(){if("object"!==
typeof this||!this.nodeType||1!==this.nodeType||"A"!==this.nodeName)throw Error("this handler should be bound to a DOM anchor element");var u=d(this),f=arguments.callee,c=u.next(".like-summary");d.ajax({type:0===a?"POST":"DELETE",url:r(b),contentType:"application/json",data:{"atlassian-token":g.get("atlassian-token")},dataType:"json",timeout:1E4}).fail(function(d){var k;405===d.status?q.showError(q.parseError(d),q.Location.FLAG):k=0===a?"Like failed":"Unlike failed";
d=c.siblings(".like-error");0===d.length&&void 0!==k?c.after('\x3cspan class\x3d"like-error" title\x3d"'+k+'"\x3e\x3c/span\x3e'):d.attr("title",k);u.off("click").on("click",null,0===a?m(0,b,h):m(1,b,h)).find(".like-button-text").html(0===a?"Like":"Unlike")}).success(function(){c.attr("data-liked",0===a);c.parent().find(".like-error").remove();t(l[b],b,c)});x(u,a,f,k,b,h,c);return!1}}function x(a,b,h,k,c,f){a.off("click",null,h).on("click",null,0===b?m(1,
c,f):m(0,c,f)).find(".like-button-text").html(0===b?"Unlike":"Like");l[c]=l[c]||{content_type:f,likes:[]};0===b?l[c].likes.push({user:{name:k}}):l[c].likes=d.grep(l[c].likes,function(a){return a.user.name!==k});0===b&&e.trigger("analytics",{name:"confluence."+f+".like.create",data:{pageID:g.get("page-id")}})}var f,l={},n=v()&&"READ_ONLY"!==g.get("access-mode"),w=d.Deferred(),p={getLikesCache:function(){return w.promise()},showLikeUsers:function(a){a&&a.preventDefault();
a=d(this);var b=a.data("content-id");a.blur();f&&(f.remove(),f=void 0);f=new e.Dialog(400,365,"likes-dialog");f.addHeader("People who like this");f.addPanel("Panel 1","\x3cdiv class\x3d'spinner-container'\x3e\x3c/div\x3e");f.addCancel("Close",function(a){a.remove();f=void 0});f.getCurrentPanel().setPadding(0);f.show();d.ajax({type:"GET",url:r(b),data:{expand:"user",max:50},dataType:"json"}).done(function(a){f.popup.element.is(":visible")&&(a.showFollowActions=
v(),f.getCurrentPanel().html(c.Templates.Likes.likesDialog(a)),d("#likes-dialog").find(".likes-dialog-follow-button").click(function(){var a=d(this);d.ajax({type:"PUT",url:e.contextPath()+"/rest/likes/1.0/user/"+g.get("remote-user")+"/following?username\x3d"+a.data("username"),contentType:"application/json",dataType:"json"}).done(function(){a.replaceWith("Following")})}))})},appendAction:function(a){a=a.find(".comment-actions-primary");var b=a.find("li[class~\x3d'comment-date']"),
h=d(c.Templates.Likes.commentLikeSection({showLikeButton:n}));0===b.length?a.find("li:last-child").after(h):b.before(h)},reload:function(a){d.each(a,function(a,b){var e=d("#comment-"+a).find(".like-summary");t(b,a,e);l[a]=b});var b=d("#page-comments");!n&&b.find(".like-summary:empty").each(function(){d(this).closest(".comment-action-like").hide()});b.find(".comment").each(function(){p.updateComment(d(this),a)});w.resolve(l)},updateComment:function(a,b){var c=a.attr("id");if(!c)return!0;var f=(/^comment-(\d+)$/.exec(c)||
[])[1];if(!f)throw Error('Expecting ID attribute of comment to be in format "comment-XXX", found: '+c);b=b[f]&&g.get("remote-user")&&0<d.grep(b[f].likes,function(a){return a.user.name===g.get("remote-user")}).length;a.find(".like-button").click(b?m(1,f,"comment"):m(0,f,"comment")).find(".like-button-text").html(b?"Unlike":"Like")},init:function(){var a=d(c.Templates.Likes.likeSection({showLikeButton:n}));g.get("page-id")&&d.ajax({type:"GET",url:r(g.get("page-id")),
data:{commentLikes:!0},dataType:"json"}).done(function(b){if(g.get("remote-user")){var c=0<d.grep(b.likes,function(a){return a.user.name===g.get("remote-user")}).length,f=b.content_type;a.find(".like-button").click(c?m(1,g.get("page-id"),f):m(0,g.get("page-id"),f)).find(".like-button-text").html(c?"Unlike":"Like")}c=a.find(".like-summary");t(b,b.content_id,c);""!==c.html()||n||a.hide();d("\x3cdiv id\x3d'likes-and-labels-container' /\x3e").insertBefore("#labels-section").append(a).append(d("#labels-section"));
l[b.content_id]=b;p.reload(b.commentLikes)});p.appendAction(d("#page-comments"))}};return p});require("confluence/module-exporter").safeRequire("confluence-like/like",function(e){var c=require("confluence/legacy"),d=require("ajs");c.Likes.getLikesCache=e.getLikesCache;d.PageGadget||window.parent.AJS&&window.parent.AJS.PageGadget||(d.toInit(e.init),c.Likes.showLikeUsers=e.showLikeUsers,c.Likes.appendAction=e.appendAction,c.Likes.reload=e.reload,c.Likes.updateComment=e.updateComment)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/com/atlassian/confluence/plugins/like/js/like-summary-factory.js' */
'use strict';define("confluence-like/like-summary-factory",["ajs","confluence/templates","jquery"],function(a,g,h){var k={"likes.summary.you":"You like this","likes.summary.1.promoted":"{0} likes this","likes.summary.2.promoted":"{0} and {1} like this","likes.summary.3.promoted":"{0}, {1} and {2} like this","likes.summary.1.non-promoted":"{0} likes this","likes.summary.x.non-promoted":"\u003ca href=\u0022\u0022 {1}\u003e{0} people\u003c/a\u003e like this",
"likes.summary.you.1.promoted":"You and {0} like this","likes.summary.you.2.promoted":"You, {0} and {1} like this","likes.summary.you.3.promoted":"You, {0}, {1} and {2} like this","likes.summary.you.1.non-promoted":"You and {0} like this","likes.summary.you.x.non-promoted":"You and \u003ca href=\u0022\u0022 {1}\u003e{0} others\u003c/a\u003e like this","likes.summary.1.promoted.1.non-promoted":"{0} and {1} like this",
"likes.summary.1.promoted.x.non-promoted":"{0} and \u003ca href=\u0022\u0022 {2}\u003e{1} others\u003c/a\u003e like this","likes.summary.2.promoted.1.non-promoted":"{0}, {1} and {2} like this","likes.summary.2.promoted.x.non-promoted":"{0}, {1} and \u003ca href=\u0022\u0022 {3}\u003e{2} others\u003c/a\u003e like this","likes.summary.3.promoted.1.non-promoted":"{0}, {1}, {2} and {3} like this","likes.summary.3.promoted.x.non-promoted":"{0}, {1}, {2} and \u003ca href=\u0022\u0022 {4}\u003e{3} others\u003c/a\u003e like this","likes.summary.you.1.promoted.1.non-promoted":"You, {0} and {1} like this",
"likes.summary.you.1.promoted.x.non-promoted":"You, {0} and \u003ca href=\u0022\u0022 {2}\u003e{1} others\u003c/a\u003e like this","likes.summary.you.2.promoted.1.non-promoted":"You, {0}, {1} and {2} like this","likes.summary.you.2.promoted.x.non-promoted":"You, {0}, {1} and \u003ca href=\u0022\u0022 {3}\u003e{2} others\u003c/a\u003e like this","likes.summary.you.3.promoted.1.non-promoted":"You, {0}, {1}, {2} and {3} like this","likes.summary.you.3.promoted.x.non-promoted":"You, {0}, {1}, {2} and \u003ca href=\u0022\u0022 {4}\u003e{3} others\u003c/a\u003e like this"};
return{getLikeSummary:function(a,c,m){if(!a||0===a.length)return{key:"",text:""};if(!c)throw Error("contentId is required.");var l,e=[],f=[];h.each(a,function(a,b){b.user&&b.user.name==m?l=b:3>e.length&&b.user.followedByRemoteUser?e.push(b):f.push(b)});a=["likes.summary"];var d=[];null!=l&&a.push(".you");0<e.length&&(a.push("."),a.push(e.length),a.push(".promoted"),h.each(e,function(a,b){d.push(g.Likes.userLink(b))}));1===f.length?(a.push(".1.non-promoted"),d.push(g.Likes.userLink(f[0]))):1<f.length&&
(a.push(".x.non-promoted"),d.push(f.length),d.push('class\x3d"likes" data-content-id\x3d"'+c+'"'));c=a.join("");return{key:c,args:0===d.length?void 0:d,text:c in k?k[c]:""}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-like/like-summary-factory","Confluence.Likes.LikeSummaryFactory");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-like:content-like-resources', location = '/templates/com/atlassian/confluence/plugins/like/soy/like.soy' */
// This file was automatically generated from like.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Likes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Likes == 'undefined') { Confluence.Templates.Likes = {}; }


Confluence.Templates.Likes.likeButton = function(opt_data, opt_ignored) {
  return '<a href="" class="like-button">' + ((opt_data.useIcon) ? '<span class="aui-icon aui-icon-small aui-iconfont-like"></span>' : '') + '<span class="like-button-text">' + soy.$$escapeHtml('Like') + '</span></a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likeButton.soyTemplateName = 'Confluence.Templates.Likes.likeButton';
}


Confluence.Templates.Likes.likeSection = function(opt_data, opt_ignored) {
  return '<div id="likes-section" class="no-print">' + ((opt_data.showLikeButton) ? Confluence.Templates.Likes.likeButton({useIcon: true}) : '') + '<span class="like-summary"></span></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likeSection.soyTemplateName = 'Confluence.Templates.Likes.likeSection';
}


Confluence.Templates.Likes.commentLikeSection = function(opt_data, opt_ignored) {
  return '<li class="comment-action-like">' + ((opt_data.showLikeButton) ? Confluence.Templates.Likes.likeButton({useIcon: false}) : '') + '<span class="like-summary"></span></li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.commentLikeSection.soyTemplateName = 'Confluence.Templates.Likes.commentLikeSection';
}


Confluence.Templates.Likes.likesDialog = function(opt_data, opt_ignored) {
  var output = '<div id="likes-dialog-body"><ol>';
  var likeList26 = opt_data.likes;
  var likeListLen26 = likeList26.length;
  for (var likeIndex26 = 0; likeIndex26 < likeListLen26; likeIndex26++) {
    var likeData26 = likeList26[likeIndex26];
    output += '<li><div class="avatar-container"><a href="' + soy.$$escapeHtml(likeData26.user.url) + '"><img class="like-user-avatar" src="' + soy.$$escapeHtml(likeData26.user.avatarUrl) + '"></a></div><div class="like-user"><a class="like-user-link" href="' + soy.$$escapeHtml(likeData26.user.url) + '">' + soy.$$escapeHtml(likeData26.user.fullName) + '</a></div>' + ((opt_data.showFollowActions) ? '<div class="follow-button-container aui-toolbar"><ul class="toolbar-group"><li class="toolbar-item">' + ((likeData26.user.followedByRemoteUser) ? soy.$$escapeHtml('Following') : '<button data-username="' + soy.$$escapeHtml(likeData26.user.name) + '" class="likes-dialog-follow-button toolbar-trigger">' + soy.$$escapeHtml('Follow') + '</button>') + '</li></ul></div>' : '') + '</li>';
  }
  output += '</ol></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.likesDialog.soyTemplateName = 'Confluence.Templates.Likes.likesDialog';
}


Confluence.Templates.Likes.userLink = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.user.url) + '" class="confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.user.name) + '">' + soy.$$escapeHtml(opt_data.user.fullName) + '</a>';
};
if (goog.DEBUG) {
  Confluence.Templates.Likes.userLink.soyTemplateName = 'Confluence.Templates.Likes.userLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'probe.js' */
!function(){var n,t,e,r,i,o,u,a,c,s,f,l,h,d,y,p,v,m,w;n=function(){return window}(),t=function(n){return!(!n.performance||!n.performance.now)}(n),e=[],r=function(n){return function(t){n.unshift({addReporter:t})}}(e),i=function(n){return function(t){for(;n.length;)t(n.splice(0,1)[0]);n.unshift=t,n.push=t}}(e),o=function(n,t){return function(e){n.push({end:{key:e.key,timestamp:t.performance.now()}})}}(e,n),u=function(n){return n.document}(n),a=function(n){return n.Promise}(n),c=function(){function n(){this._={}}var t=function(e){var r=e[0],i=e[1];i instanceof n?e.length>=3?Object.keys(i._).forEach(function(n){t([r,i._[n],n].concat(e.slice(2)))}):Object.keys(i._).forEach(function(n){t([r,i._[n],n])}):Array.isArray(i)&&r.apply(null,[i].concat(e.slice(2)))};n.prototype.forEach=function(n){t([n,this])},n.prototype.add=function(){for(var t=this,e=null,r=null,i=0;i<arguments.length;i++){if(r=arguments[i],i===arguments.length-1&&Array.isArray(t)){t.push(r);break}i<arguments.length-2&&!t._.hasOwnProperty(r)?t._[r]=new n:i!==arguments.length-2||t._.hasOwnProperty(r)||(t._[r]=[]),t=t._[r],e=r}};var e=function(n,t){if(0!==n.length){var r=n.pop(),i=r[0],o=r[1];i===t?e(n,i):o._.hasOwnProperty(t)&&delete o._[t],0===Object.keys(o).length&&e(n,i)}};return n.prototype.remove=function(){for(var n,t=!1,r=null,i=this,o=[[r,i]],u=null,a=0;a<arguments.length;a++)if(u=arguments[a],Array.isArray(i))n=i.indexOf(u),n>-1&&(i.splice(n,1),0===i.length&&o.length>1&&e(o,r),t=!0);else{if(!i._.hasOwnProperty(u))break;a===arguments.length-1&&(delete i._[u],0===Object.keys(i).length&&o.length>1&&e(o,r),t=!0),r=u,i=i._[u],o.push([r,i])}return t},n.prototype.get=function(n){return this._.hasOwnProperty(n)?this._[n]:[]},n}(),s=function(n,t,e,r){function i(n){return!n||null==n||"null"===n||"undefined"===n}function o(t,e,r){l||(c.observe(n,{attributes:!0,childList:!0,subtree:!0}),l=!0),s.add(t,e,r)}function u(t,e){var r=n.querySelectorAll(t);return r.length&&(i(e)||Array.prototype.every.call(r,function(n){return!n.querySelector(e)}))}function a(n,e){var r;n.forEach||(n=[n]),!i(e)&&Array.isArray(e)&&(e=e.join(", "));var a=new t(function(i,a){var c=[],f=[];n.forEach(function(n){var r,i;u(n,e)||(r=new t(function(t){o(n,e,t),i=function(){s.remove(n,e,t)},f.push(i)}),c.push(r))});var l=function(){f.forEach(function(n){n()})};t.all(c).then(l).then(i,a),r=function(){l(),a()}});return a.dismiss=r,a}var c,s,f=r.MutationObserver,l=!1;return f&&t?(s=new e,c=new f(function(){s.forEach(function(n,t,e){u(e,t)&&(n.forEach(function(n){n()}),s.remove(e,t))})}),a):void 0}(u,a,c,n),f=function(n){return!!n}(s),l=function(n){function t(){c(),n.body.classList.add(u)}function e(){function e(){n.body.classList.remove(u),n.removeEventListener(i,s),n.removeEventListener(o,c),r=null}if(r)return r;var c,s,f=!1;return r=new Promise(function(e,r){"visible"!==n.visibilityState?r():(s=function(){f=!0},c=function(n){n.animationName===a&&(f?r():e())},n.addEventListener(i,s),n.addEventListener(o,c),t())}),r.then(e,e),r}var r,i="visibilitychange",o="animationend",u="browser-metrics-visibility-test",a="browser-metrics-visibility-animation",c=function(){var t=n.createElement("style"),e=["."+u+" {","-webkit-animation-duration: 0.001s;","animation-duration: 0.001s;","-webkit-animation-name: "+a+";","animation-name: "+a+";","-webkit-animation-iteration-count: 1;","animation-iteration-count: 1;","}","@keyframes "+a+" {}","@-webkit-keyframes "+a+" {","from {}","to {}","}"].join("\n");t.type="text/css",t.styleSheet?t.styleSheet.cssText=e:t.appendChild(n.createTextNode(e)),n.head.appendChild(t),c=function(){}};return e}(u),h=function(n,t,e,r,i){function o(n){return Array.isArray(n)||(n=[n]),n.map(function(n){return"string"==typeof n?{selector:n,hasNone:null}:n})}function u(n){return Array.isArray(n)||"string"==typeof n}function a(n){return u(n)&&(n={rules:n}),n.rules=o(n.rules),n.requirePaint="undefined"==typeof n.requirePaint?!1:n.requirePaint,n}return function(i,o){if(n){i=a(i);var u=function(){},c=new e(function(n,r){var o=[],a=i.rules.map(function(n){var e=new t(n.selector,n.hasNone);return o.push(function(){e.dismiss()}),e});u=function(){o.forEach(function(n){n()}),r()},e.all(a).then(function(n){}).then(n,r)});return c.cancel=u,i.requirePaint&&(c=c.then(r)),"function"==typeof o&&c.then(o),c}}}(f,s,a,l,n),d=function(n,t){function e(){return r}var r=!1;return n.addEventListener("DOMContentLoaded",function(){t.setTimeout(function(){r=!0})}),e}(u,n),y=function(n,t,e,r,i,o,u){function a(){c=null}var c;return function(o){var s="isInitial"in o?o.isInitial:i()===!1,f="threshold"in o?o.threshold:1e3,l="reporters"in o?o.reporters:[];r.push({start:{key:o.key,isInitial:s,threshold:f,timestamp:s?0:u.performance.now(),reporters:Array.isArray(l)?l:[l]}}),c&&(c.cancel(),a()),o.ready&&e&&(c=n(o.ready),c.then(function(){t({key:o.key})}).then(a,a))}}(h,o,f,e,d,a,n),p=function(n){return function(t){n.push({subscribe:t})}}(e),v=function(){return window}(),m=function(n){return n.performance}(v),w=function(n,t,e,r,i,o,u){var a=function(){};return u?{start:n?i:a,end:n?r:a,addReporter:n?t:a,delegateTo:n?e:a,subscribe:n?o:a}:void 0}(t,r,i,o,y,p,m),window["browser-metrics"]=w,window.define&&window.define("internal/browser-metrics",function(){return w})}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'internal/browser-metrics-aa-beacon.js' */
!function(){var e={};e=function(e){function n(e,n){Object.keys(n).forEach(function(r){e[r]=n[r]})}Object.defineProperty(e,"__esModule",{value:!0});var r,t=[],o=[];return e.addUrlCleaner=function(e){o.push(e)},e.cleanUrl=function(e){return o.reduce(function(n,r){var t=r(e);return t.length>n.length?t:n},"")},e.addReportMarshaller=function(e){t.push(e)},e.setEventQueue=function(e){r=e},e.beacon=function(e){var o={};t.forEach(function(r){var t=r(e);"object"==typeof t&&n(o,t)});var a={name:"browser.metrics.navigation",properties:o};(r||AJS.EventQueue).push(a)},e}(e),window["browser-metrics-aa-beacon"]=e,window.define&&window.define("internal/browser-metrics-aa-beacon",function(){return e})}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.browser.metrics.browser-metrics-plugin:api', location = 'loader.js' */
!function(){var n={},r={};r=function(n,r,i){function e(){t===u&&o&&(o(),o=null)}Object.defineProperty(n,"__esModule",{value:!0});var t=0,u=0,o=null,c={install:function(n){t+=1,n(function(){u+=1,e()})}};return r["browser-metrics-plugin"]=c,i.require(["wrc!browser-metrics-plugin.contrib"],function(){r.require(["internal/browser-metrics-plugin/collector"],function(n){o=function(){n.install()},e()})}),n}(r,n=window,n.WRM)}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:viewcontent', location = '/js/viewcontent.js' */
require(["confluence/api/event","internal/browser-metrics","ajs","jquery"],function(f,e,c,g){function b(i){if(!g(i.target).hasClass("full-load")){var h=i.data.type;if(c.Meta.getBoolean("collaborative-content")){var j="confluence."+h+".edit.collaborative.quick-view";e.start({key:j});c.bind("rte-collab-ready",function(){e.end({key:j});e.start({key:j+".connected"})});c.bind("synchrony.connected",function(){e.end({key:j+".connected"})})}else{if(!c.Meta.getBoolean("shared-drafts")){e.start({key:"confluence."+h+".edit.quick-view",ready:".active-richtext"})}}}}function a(){e.start({key:"confluence.file.preview.firstpage"});f.bind("confluence-previews.fileviewer.completed",function(){e.end({key:"confluence.file.preview.firstpage"})})}function d(){var j=c.Meta.get("content-type");var i=g("#confluence-ui.confluence-dashboard").length;var h=window.location.href.indexOf("/content-only/")>-1;if(j){if(!i&&!h){e.start({key:"confluence."+j+".view",ready:".wiki-content",isInitial:true})}g("#editPageLink").on("click",{type:j},b);g(".confluence-embedded-file-wrapper").on("click",a)}}c.toInit(d)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.ext.newcode-macro-plugin:syntaxhighlighter-init', location = 'sh/asyncLoader.js' */
/**
 * Load the Code Macro resources via WRM.require(). This avoids any extra blocking resources being added to the <head>
 */
define('confluence/code-macro/async-loader', [
    'jquery',
    'wrm',
    'underscore'
], function(
    $,
    WRM,
    _
) {
    return function() {
        _.defer(function() {
            var $controlButtons = $(".codeHeader .collapse-source");
            _showSpinner($controlButtons);
            var $codeBlocks = $('#content').find("pre.syntaxhighlighter-pre");

            if ($codeBlocks.length > 0) {

                var codeMacroThemeResourcePrefix = 'wr!com.atlassian.confluence.ext.newcode-macro-plugin:sh-theme-';
                var codeMacroResources = ['wrc!code-macro'];

                $codeBlocks.each(function() {
                    codeMacroResources.push(codeMacroThemeResourcePrefix + $(this).data('theme').toLowerCase());

                    // If the macro is using a custom language, we need to download it
                    var customLanguageResource = $(this).data('custom-language-resource');
                    if (typeof customLanguageResource !== "undefined" && codeMacroResources.indexOf(customLanguageResource) === -1) {
                        codeMacroResources.push("wr!" + customLanguageResource);
                    }
                });

                WRM.require(codeMacroResources).done(function () {
                    if (window.SyntaxHighlighter && typeof window.SyntaxHighlighter.highlight === "function") {
                        window.SyntaxHighlighter.highlight();
                    }
                    _hideSpinner($controlButtons);
                });

            }
        });

        /**
         * Hide the expand/collapse buttons until the highlighter is finished, and show a spinner instead
         * @param $controlButtons The expand/collapse buttons
         * @private
         */
        function _showSpinner($controlButtons) {
            $controlButtons.hide();
            // Avoiding searching the entire dom again
            _.forEach($controlButtons, function (button) {
                $(button).next('.collapse-spinner-wrapper').spin();
            });

        }

        /**
         * Show the expand/collapse buttons and hide the spinner once the highlighter is ready.
         * @param $controlButtons The expand/collapse buttons
         * @private
         */
        function _hideSpinner($controlButtons) {
            $controlButtons.show();
            $controlButtons.next('.collapse-spinner-wrapper').remove();
        }
    }
});

require('confluence/module-exporter').safeRequire('confluence/code-macro/async-loader', function(CodeMacroLoader) {
    AJS.toInit(CodeMacroLoader);
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:view-comment', location = '/includes/js/comments.js' */
define("confluence/comments",["ajs","jquery","confluence/storage-manager","confluence/message-controller"],function(b,f,h,c){function g(a){confirm("Are you sure you want to delete the comment?")&&f.ajax({type:"DELETE",url:b.contextPath()+"/rest/api/content/"+a,contentType:"application/json",dataType:"json"}).done(function(){var a=document.location.href;-1===a.indexOf("showComments")&&(a+=-1!==a.indexOf("?")?"&showComments=true":"?showComments=true");document.location=a}).fail(function(a){c.showError(c.parseError(a),
c.Location.FLAG)})}return{binder:{bindRemoveConfirmation:function(a){f("#comment-"+a+" .comment-action-remove a").click(function(b){b.preventDefault();g(a);return!1})}},initialiser:function(a){var c=h("confluence","comments");if(a("#comments-section").length){a("#comments-section").find(".comment:odd").addClass("odd");a(".comment-action-remove a").click(function(){var b=a(this).attr("id").replace(/remove-comment-/g,"");g(b);return!1});var e=a("#addcomment.comment-text"),d=a("#comments-text-editor").find("textarea");
d.focus(function(){e.addClass("active")}).blur(function(){a.trim(d.val()).length||e.removeClass("active")}).bind("reset.default-text",function(){e.removeClass("active")});a("form[name='textcommentform']").submit(function(){var c=d.val();return!a.trim(c)?(alert("Comment text is empty. Cannot create empty comments."),!1):!0});a("#add-comment-rte").click(function(){d.hasClass("placeholded")||c.setItem("text-comment",a.trim(d.val()))});a("#addcomment #rte").length&&b.bind("init.rte",function(a,b){var d=c.getItem("text-comment");
d&&(b.editor.setContent(d),c.setItem("text-comment",""))})}}}});require("confluence/module-exporter").safeRequire("confluence/comments",function(b){require("confluence/legacy").Comments=b.binder;require("ajs").toInit(b.initialiser)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:browser', location = '/includes/js/api/browser.js' */
define("confluence/api/browser",[],function(){return function(a){function c(){return-1!==a.indexOf("Firefox/")}function b(){return-1!==a.indexOf("Edge/")}function d(){return-1!==a.indexOf("MSIE")||-1!==a.indexOf("Trident/")||b()}function e(){return-1!==a.indexOf("Chrome/")}function f(){return-1!==a.indexOf("Safari/")&&-1===a.indexOf("Chrome/")}function g(){return-1!==a.indexOf("PhantomJS")}return{isFirefox:c,notFirefox:function(){return!c()},isMSEdge:b,notMSEdge:function(){return!b()},isIE:d,notIE:function(){return!d()},
isChrome:e,notChrome:function(){return!e()},isSafari:f,notSafari:function(){return!f()},isPhantom:g,notPhantom:function(){return!g()},version:function(){if(d()){var b=a.match(/MSIE\s([\d.]+)/)||a.match(/rv:([\d.]+)/)||a.match(/Edge\/([\d.]+)/);return parseInt(b[1])}if(e())return parseInt(a.match(/Chrome\/([\d.]+)/)[1]);if(f())return parseInt(a.match(/Version\/([\d.]+)/)[1]);if(c())return parseInt(a.match(/Firefox\/([\d.]+)/)[1])},friendlyName:function(){if(b())return"MSEdge";if(d())return"IE";if(e())return"Chrome";
if(f())return"Safari";if(c())return"Firefox"}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:page-editor-message', location = 'editor/page-editor-message.js' */
define("confluence-editor/editor/page-editor-message",["jquery","ajs","aui/flag","document","underscore"],function(f,i,g,h,d){var b=Object.create(null),e=Object.create(null);h.addEventListener("aui-flag-close",function(a){a&&a.target&&(b=d.filter(Object.keys(b),function(c){return!f(a.target).find("span").hasClass(c)}))});return{handleMessage:function(a,c,d){b[a]||(e[a]?delete e[a]:c&&(b[a]=g({title:c.title?c.title:"",type:c.type,close:c.close?c.close:"manual",persistent:!1,body:"<span class='"+a+
"'>"+c.message+"</span>"}),d&&d()))},closeMessages:function(a){d.each(a,function(a){b[a]&&(b[a].close(),delete b[a])})},isDisplayed:function(a){return a in b},displayedErrors:function(){return Object.keys(b)},suppressMessage:function(a){e[a]={}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-message', location = '/includes/js/page-message.js' */
define("confluence/page-message","ajs jquery confluence/meta window confluence/api/browser confluence-editor/editor/page-editor-message".split(" "),function(a,h,d,f,i,j){var e={},g=new i(f.navigator.userAgent);e._getQueryString=function(){return f.location.search};e.displayPageMessage=function(){var c=e._getQueryString(),b=d.get("editing-user");if(c.indexOf("editingLocked")!==-1&&b)a.MessageHandler.flag({type:"info",title:"Unable to edit",body:a.format("Collaborative editing is offline right now, and {0} is editing this page. Try again in a few minutes.",
a.escapeHtml(b)),close:"manual"});else if(c.indexOf("editingFailed")!==-1)a.MessageHandler.flag({type:"info",title:"Unable to edit",body:"Editing is unavailable right now. Try again in a few minutes.",close:"manual"});else if(c.indexOf("userLimitReached")!==-1){j.handleMessage("collab.edit.user.limit.reached",{type:"warning",title:"You can\u0027t edit this page right now",message:"\u003cp\u003eThis page is so popular, you\u0027ve reached the maximum number of simultaneous editors.\u003c/p\u003e\u003cp\u003eTry again when it\u0027s not so busy.\u003c/p\u003e",close:"manual"});a.Confluence.Analytics.publish("collab.edit.user.limit.reached",
{browserName:g.friendlyName(),browserVersion:g.version(),pageId:d.get("page-id"),editMode:"slow",numEditors:d.get("max-number-editors")})}else if(c.indexOf("spaceEditingRestriction")!==-1){b=d.get("space-key");c=d.get("content-type")==="blogpost"?"You can\u0027t edit blog posts in this space":"You can\u0027t edit pages in this space";b=d.get("context-path")+"/spaces/viewspacesummary.action?key="+encodeURIComponent(b);b=d.get("content-type")==="blogpost"?a.format("Ask a {0}space admin{1}, or the person who invited you, to give you \u0027\u0027add blog\u0027\u0027 permission in this space.",
'<a href="'+b+'">',"</a>"):a.format("Ask a {0}space admin{1}, or the person who invited you, to give you \u0027\u0027add page\u0027\u0027 permission in this space.",'<a href="'+b+'">',"</a>");c=a.MessageHandler.flag({type:"info",title:c,body:b,close:"manual"});h(c).addClass("spaceEditingRestriction")}};return e});require("confluence/module-exporter").safeRequire("confluence/page-message",function(a){require("ajs").toInit(a.displayPageMessage)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-sortable-tables:sortable-table-hooks', location = 'js/hooks.js' */
define("confluence-sortable-tables/hooks",[],function(){var a=[];return{onBeforeInit:function(b){a.push(b)},beforeInitHooks:function(){return a}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/tablesorter-date-parser.js' */
require(["ajs","jquery","confluence-sortable-tables/hooks"],function(b,c,d){d.onBeforeInit(a);function a(e){e.addParser({id:"dateAttributeParser",is:function(f,h,g){return c(g).is(".content-report-table-macro .modified")},format:function(f,h,g,i){return c(g).attr("data-sortable-date")},type:"numeric"})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/soy/content-report-table.soy' */
// This file was automatically generated from content-report-table.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Plugins.ContentReport.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Plugins == 'undefined') { Confluence.Templates.Plugins = {}; }
if (typeof Confluence.Templates.Plugins.ContentReport == 'undefined') { Confluence.Templates.Plugins.ContentReport = {}; }


Confluence.Templates.Plugins.ContentReport.contentReportTable = function(opt_data, opt_ignored) {
  var output = '';
  var hasSocialColumn__soy3 = opt_data.showCommentsCount || opt_data.showLikesCount;
  if (opt_data.results.length == 0 && opt_data.blueprintKey) {
    output += '<div class="blueprint-blank-experience ' + soy.$$escapeHtml(opt_data.blueprintKey) + '"><div class="content"><h2>' + soy.$$escapeHtml(opt_data.blankTitle) + '</h2><p>' + soy.$$escapeHtml(opt_data.blankDescription) + '</p></div>' + ((opt_data.createButtonLabel) ? '<p><button class="create-from-template-button aui-button aui-button-primary" data-space-key="' + soy.$$escapeHtml(opt_data.dataSpaceKey) + '" data-content-blueprint-id="' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '" href="' + soy.$$escapeHtml(opt_data.createContentUrl) + '" >' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</button></p>' : '') + '</div>';
  } else {
    output += '<table class="aui content-report-table-macro' + ((hasSocialColumn__soy3) ? ' with-extra-columns' : '') + '"' + ((opt_data.analyticsKey) ? ' data-analytics-key="' + soy.$$escapeHtml(opt_data.analyticsKey) + '"' : '') + '><thead><tr><th>' + soy.$$escapeHtml('Title') + '</th><th>' + soy.$$escapeHtml('Creator') + '</th><th>' + soy.$$escapeHtml('Modified') + '</th></tr></thead><tbody>';
    var resultList43 = opt_data.results;
    var resultListLen43 = resultList43.length;
    if (resultListLen43 > 0) {
      for (var resultIndex43 = 0; resultIndex43 < resultListLen43; resultIndex43++) {
        var resultData43 = resultList43[resultIndex43];
        output += '<tr><td class="title"><a href="' + soy.$$escapeHtml(resultData43.urlPath) + '">' + soy.$$escapeHtml(resultData43.title) + '</a></td><td class="creator">' + Confluence.Templates.User.usernameLink({canView: opt_data.canViewProfiles, username: resultData43.creatorName, fullName: resultData43.creatorFullName, contextPath: opt_data.contextPath}) + '</td><td class="modified" data-sortable-date="' + soy.$$escapeHtml(resultData43.sortableDate) + '">' + soy.$$escapeHtml(resultData43.friendlyModificationDate) + '</td>' + ((hasSocialColumn__soy3) ? '<td class="social">' + ((opt_data.showCommentsCount && resultData43.commentCount != 0) ? '<span class="icon icon-comment"></span> <span class="count">' + soy.$$escapeHtml(resultData43.commentCount) + '</span>' : '') + ((opt_data.showLikesCount && resultData43.likeCount != 0) ? '<span class="icon icon-like"></span> <span class="count">' + soy.$$escapeHtml(resultData43.likeCount) + '</span>' : '') + '</td>' : '') + '</tr>';
      }
    } else {
      output += '<tr><td colspan="3">' + soy.$$escapeHtml('No content found.') + '</td></tr>';
    }
    output += '</tbody></table>' + ((opt_data.searchMoreResultsLinkUrl) ? '<div class="more-results"><a href="' + soy.$$escapeHtml("/confluence") + soy.$$escapeHtml(opt_data.searchMoreResultsLinkUrl) + '">' + soy.$$escapeHtml('Find more results') + '</a></div>' : '');
  }
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Plugins.ContentReport.contentReportTable.soyTemplateName = 'Confluence.Templates.Plugins.ContentReport.contentReportTable';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-content-report-plugin:resources', location = 'com/atlassian/confluence/plugins/content_report/js/content-report-analytics.js' */
require(["ajs"],function(a){a.toInit(function(b){b(".content-report-table-macro").on("click",".title a",function(e){var c=b(e.delegateTarget).data("analytics-key");if(c){var d="content-report-table-macro.content-click."+c;a.trigger("analytics",{name:d})}})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks.js' */
(function(c){function j(p){var k,q;if(p.offsetX===undefined){var o=0,n=0,m=p.target,l;do{if(m.scrollTop!=0||m.scrollLeft!=0){l=m}o+=m.offsetLeft;n+=m.offsetTop;m=m.offsetParent}while(m&&m!=m.offsetParent);k=p.pageX+(l?l.scrollLeft:0)-o;q=p.pageY+(l?l.scrollTop:0)-n}else{k=p.offsetX;q=p.offsetY}return k>=3&&k<=14&&q>=3&&q<=14}function f(k){return k.currentTarget===k.target}function h(l){var k="page";if(l.closest("table.tasks-report").length){k="report"}else{if(l.closest("#task-container").length){k="mytasks"}else{if(l.closest("ul.inline-task-list").length){k="task"}}}return k}function e(n,l){var k=n.attr("data-inline-task-id");var m=n.find(l).first();if(m.closest("li").attr("data-inline-task-id")===k){return m}else{return c()}}function i(l){var m=""+l.getFullYear();var n=""+(l.getMonth()+1);var k=""+l.getDate();if(n.length<2){n="0"+n}if(k.length<2){k="0"+k}return[m,n,k].join("-")}var a=false;c(window).bind("beforeunload",function(){a=true});var d=[];c(document).delegate("ul.inline-task-list > li[data-inline-task-id]",{click:function(p){if(f(p)&&j(p)){var n=c(p.target);n.toggleClass("checked");g(n);var k=n.hasClass("checked")?"CHECKED":"UNCHECKED";var m=n.data("inline-task-id");var q=n.closest("ul").attr("data-inline-tasks-content-id")||AJS.params.pageId;var l=AJS.contextPath()+"/rest/inlinetasks/1/task/"+q+"/"+m+"/";n.prop("disabled",true);var o=n.closest("tr");o.attr("aria-disabled",true);d.push(m);AJS.trigger("inline-tasks.status-update.start",{status:k,taskId:m,taskListQueue:d});c.ajax({type:"POST",url:l,data:c.toJSON({status:k,trigger:"VIEW_PAGE"}),dataType:"json",contentType:"application/json",timeout:30000,error:function(s,t,r){if(a||t==="timeout"){return}AJS.logError("Inline Task #"+m+" was not persisted to "+k+" because of "+r+" (status: "+t+")");var u=require("confluence/message-controller");n.toggleClass("checked");g(n);u.showError(u.parseError(s,"Oops! Your task change couldn\u0027t be saved. \u003cbr/\u003eThere could be a few reasons for this."),u.Location.FLAG)},success:function(){var r={dueDate:e(n,"time").attr("datetime"),completionDate:i(new Date()),mode:"view",assigneeUsername:e(n,".user-mention").attr("data-username"),context:h(n)};if(k==="CHECKED"){AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.completed",data:r})}}}).always(function(){n.prop("disabled",false);var r=n.closest("tr");r.attr("aria-disabled",false);d.splice(d.indexOf(m),1);AJS.trigger("inline-tasks.status-update.complete",{status:k,taskId:m,taskListQueue:d})})}},mousemove:function(k){if(f(k)){if(j(k)){c(k.target).addClass("hover")}else{c(k.target).removeClass("hover")}}},mouseout:function(k){if(f(k)){c(k.target).removeClass("hover")}},mousedown:function(k){if(f(k)&&j(k)){c(k.target).addClass("task-active")}},mouseup:function(k){if(f(k)&&j(k)){c(k.target).removeClass("task-active")}}});c(document).tooltip({title:function(){return "This task is due in less than a week"},live:"ul.inline-task-list li:not(.checked) time.date-upcoming"});c(document).tooltip({title:function(){return "This task is overdue"},live:"ul.inline-task-list li:not(.checked) time.date-past"});c(document).tooltip({title:function(){return "A completion date wasn\u0027t recorded for this task"},live:"span.emptycompletedate"});c(document).on("click","time",function(){var l=c(this);var k={date:l.attr("datetime"),mode:"view",context:h(l)};AJS.trigger("analyticsEvent",{name:"confluence-spaces.date.clicked",data:k})});AJS.toInit(function(){b();if(AJS.Meta.get("access-mode")==="READ_ONLY"){c("[data-inline-task-id]").addClass("disabled");c("[data-inline-task-id]").prop("disabled",true)}});function b(){c(".inline-task-list").attr("role","group");c(".inline-task-list [data-inline-task-id]:not(.checked)").attr("role","checkbox").attr("aria-checked","false");c(".inline-task-list [data-inline-task-id].checked").attr("role","checkbox").attr("aria-checked","true")}function g(k){k.attr("aria-checked",k.hasClass("checked")?"true":"false")}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-alert.js' */
Confluence.InlineTasks=Confluence.InlineTasks||{};(function(b){var a=function(c){this.settings=b.extend({},a.DEFAULTS,c);this.template=Confluence.InlineTasks.Templates;b("#inline-tasks-notice").remove();var d=b(this.template.notice(this.settings));d.hide().appendTo("body");d.find(".notice-close").click(function(){d.hide()});this.$notice=d};a.DEFAULTS={textMessage:"Oops! Your task change couldn\u0027t be saved. \u003cbr/\u003eThere could be a few reasons for this.",className:"general-notice"};a.prototype.show=function(){this.$notice.show();return this};a.prototype.hide=function(){this.$notice.hide();return this};Confluence.InlineTasks.Notice=a}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'templates/inline-tasks.soy' */
// This file was automatically generated from inline-tasks.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.InlineTasks.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Templates == 'undefined') { Confluence.InlineTasks.Templates = {}; }


Confluence.InlineTasks.Templates.notice = function(opt_data, opt_ignored) {
  return '<div class="aui-message error' + ((opt_data.className) ? ' ' + soy.$$escapeHtml(opt_data.className) : '') + '" id="inline-tasks-notice">' + soy.$$filterNoAutoescape(opt_data.textMessage) + '&nbsp;&nbsp;<a href="#" class="notice-close">' + soy.$$escapeHtml('Dismiss') + '</a></div>';
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Templates.notice.soyTemplateName = 'Confluence.InlineTasks.Templates.notice';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:inline-tasks-resources', location = 'js/inline-tasks-focus.js' */
AJS.$(document).ready(function(f){var d="focusedTaskId";var a=require("confluence/jsUri");var c=new a(window.location.href);var g=c.getQueryParamValue(d);if(g){var b=$("li[data-inline-task-id="+g+"]");if(b.length){b.addClass("focused");window.scrollTo(b.offset().left,(b.offset().top-($(window).height()/2)))}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/jquery.tablesorter.serveronly.js' */
(function(a){a.extend({tablesorterServerOnly:new function(){this.defaults={classNameDisableSorting:"aui-table-column-unsortable",classNameHeaderDesc:"tablesorter-headerDesc",classNameHeaderAsc:"tablesorter-headerAsc",reverseSort:false,sortColumn:"",onInit:function(){},onSort:function(){},events:{clickHeader:"click.sortServerOnly",refreshHeader:"refreshHeader.sortServerOnly",simulateClickHeader:"simulateClickHeader.sortServerOnly"}};var b=this;var d={updateCurrentHeaderSort:function(e,f){d.resetHeadersSort(e,f);f.$headers.each(function(){var h=a(this);var g=h.attr("data-column-name");var i=f.reverseSort;if(g===f.sortColumn){i?h.addClass(f.classNameHeaderDesc):h.addClass(f.classNameHeaderAsc)}})},resetHeadersSort:function(e,f){f.$headers.removeClass(f.classNameHeaderDesc).removeClass(f.classNameHeaderAsc)},prepareHTMLHeader:function(e,f){f.$headers.not("."+f.classNameDisableSorting).attr("unselectable","on").bind("selectstart",false).addClass("tablesorter-header").wrapInner("<span class='aui-table-header-content'/>")},bindEvents:function(f,g){var e=a(f);e.on(g.events.refreshHeader,function(){d.updateCurrentHeaderSort(f,g)});e.on(g.events.simulateClickHeader,function(i,j,h){g.reverseSort=h;g.sortColumn=j})}};var c=function(f,g){var e=a(f);g.$table=e;g.$headers=e.find("thead th");g.$tbodies=e.find("tbody");d.prepareHTMLHeader(f,g);d.updateCurrentHeaderSort(f,g);if(typeof g.onInit==="function"){g.onInit.apply(f,[g])}g.$headers.on(g.events.clickHeader,function(){var h=a(this);if(h.hasClass(g.classNameDisableSorting)){return false}var i=h.attr("data-column-name");if(i===g.sortColumn){g.reverseSort=!g.reverseSort}else{g.reverseSort=false}g.sortColumn=i;if(typeof g.onSort==="function"){g.onSort.apply(f,[g])}return false});d.bindEvents(f,g)};b.construct=function(e){return this.each(function(){var f=this;var g=a.extend(true,{},a.tablesorterServerOnly.defaults,e);if(this.config&&f.hasInitialized&&a.tablesorter){a.tablesorter.destroy(f,false,function(){c(f,g)})}else{c(f,g)}})}}()});a.fn.extend({tablesorterServerOnly:a.tablesorterServerOnly.construct})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:sortable-table-server-side', location = 'js/tasks-table-sortable.js' */
(function(a){var b=function(d){this.ajaxUrl=d.ajaxUrl;this.restUrlPagination=d.restUrlPagination;this.$wrapper=d.$wrapper;this.table=d.table;this.$table=a(this.table);this.analyticEventKey=d.analyticEventKey;this.sortColumnDefault=d.sortColumnDefault||"duedate";this.sortReverseSortDefault=d.sortReverseSortDefault||false;this.reportParametersDefault=d.reportParametersDefault;this.pageIndex=d.pageIndex||0;this.pageSize=d.pageSize||10;this.pageTotal=d.pageTotal||0;this.pageLimit=d.pageLimit||7;this.adaptive=d.adaptive;this.columns=d.columns;this.templates=d.templates;this.onRenderEmptyTable=d.onRenderEmptyTable;this.onBusySorting=d.onBusySorting};b.getColumnNameFromSortBy=function(e){var d={"due date":"duedate","page title":"location",assignee:"assignee"};return d[e]?d[e]:"duedate"};b.getSortByFromColumnName=function(d){var e={duedate:"due date",location:"page title"};return e[d]?e[d]:d};b.prototype.updateOptions=function(d){a.extend(this,d);this.$table=a(this.table)};b.prototype.getCurrentPageIndex=function(){var e=this.$wrapper.find(".macro-auto-pagination").last();var d=parseInt(e.attr("data-initial-page-index"),10);return isNaN(d)?0:d};b.prototype.renderPagination=function(e,g){var d=this;if(!e){e=d.$table}if(!g){g=d.reportParametersDefault}this.$wrapper.find(".macro-auto-pagination").remove();if(!(d.pageTotal>1)){return}c.UI.Components.Pagination.build({scope:e,pageSize:d.pageSize,totalPages:d.pageTotal,pageLimit:d.pageLimit,path:d.restUrlPagination,adaptive:d.adaptive,currentPage:d.pageIndex,data:{reportParameters:JSON.stringify(g)},success:function f(h,j){var k={task:h,columns:d.columns};var i=d.templates.tasksReportLine(k);j.append(i)}})};b.prototype.toggleBusyState=function(d){this.$wrapper.attr("data-loading",d);if(d){this.$wrapper.find(".task-blanket").show()}else{this.$wrapper.find(".task-blanket").hide()}if(typeof this.onBusySorting==="function"){this.onBusySorting.apply(this,[d])}};b.prototype.renderTable=function(e){var d=this;var f=_.map(e,function(g){return d.templates.tasksReportLine({task:g,columns:d.columns})}).join("");d.$table.find("tbody").html(f);c.Binder.userHover()};b.prototype._triggerAnalyticsSorting=function(){var d=this.analyticEventKey;var e={column:this.sortColumn,direction:this.reverseSort?"desc":"asc"};AJS.trigger("analyticsEvent",{name:d,data:e})};b.prototype._buildAjaxData=function(e){var d={url:this.ajaxUrl,cache:false,dataType:"json",data:{pageIndex:this.pageIndex,pageSize:this.pageSize,reportParameters:JSON.stringify(e)}};return d};b.prototype.init=function(){var d=this;d.sortColumn=d.sortColumnDefault;d.reverseSort=d.sortReverseSortDefault;this.$table.tablesorterServerOnly({sortColumn:d.sortColumn,reverseSort:d.reverseSort,onInit:function(){var e=a(this);e.addClass("aui-table-sortable")},onSort:function(i){var h=this;var f=a(h);d.pageIndex=d.getCurrentPageIndex();d.sortColumn=i.sortColumn;d.reverseSort=i.reverseSort;d.toggleBusyState(true);var g=a.extend({},d.reportParametersDefault,{sortColumn:b.getSortByFromColumnName(d.sortColumn),reverseSort:d.reverseSort});var e=d._buildAjaxData(g);a.ajax(e).done(function(j){d.pageIndex=d.getCurrentPageIndex();d.pageTotal=j.totalPages;if(d.pageIndex===0&&d.pageTotal===0){if(typeof d.onRenderEmptyTable==="function"){d.$wrapper.find(".macro-auto-pagination").remove();f.remove();d.onRenderEmptyTable.apply(d)}return}d.renderTable(j.detailLines);d.renderPagination(null,g);f.trigger("refreshHeader.sortServerOnly");d._triggerAnalyticsSorting()}).fail(function(){var j=new c.InlineTasks.Notice({textMessage:"We can\u0027t sort your tasks right now. Refresh the page to try again.",className:"forbidden-notice"});j.show()}).always(function(){d.toggleBusyState(false)})}})};var c=window.Confluence||{};c.InlineTasks=c.InlineTasks||{};c.InlineTasks.TasksTableSortable=b})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = '/js/internal/namespace-legacy.js' */
"use strict";var Confluence=require("confluence/legacy");Confluence.UI||(Confluence.UI={});Confluence.UI.Components||(Confluence.UI.Components={});Confluence.UI.Components.BlankPlaceholderBox||(Confluence.UI.Components.BlankPlaceholderBox={});Confluence.UI.Components.CQL||(Confluence.UI.Components.CQL={});Confluence.UI.Components.DatePicker||(Confluence.UI.Components.DatePicker={});Confluence.UI.Components.LabelPicker||(Confluence.UI.Components.LabelPicker={});Confluence.UI.Components.Pagination||(Confluence.UI.Components.Pagination={});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:common', location = 'js/internal/soy-templates.js' */
define("confluence-ui-components/js/internal/soy-templates",[],function(){return{BlankPlaceholderBox:function(){return Confluence.UI.Components.BlankPlaceholderBox.Templates},DatePicker:function(){return Confluence.UI.Components.DatePicker.templates},LabelPicker:function(){return Confluence.UI.Components.LabelPicker.templates},Pagination:function(){return Confluence.UI.Components.Pagination.Templates},Components:function(){return Confluence.UI.Components.templates},UserGroupSelect2:function(){return Confluence.UI.Components.UserGroupSelect2}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/js/pagination.js' */
define("confluence-ui-components/js/pagination",["ajs","confluence/hover-user","confluence-ui-components/js/internal/soy-templates","jquery","underscore"],function(g,c,b,f,j){var d=function(n,o,m){var l=n.find("a").attr("aria-disabled",m);if(m){l.attr("disabled","disabled")}else{l.removeAttr("disabled");var k=f(".aui-nav-selected",n).data("index")+1;n.find(".aui-nav-next > a").attr("aria-disabled",k===o);n.find(".aui-nav-previous > a").attr("aria-disabled",k===1)}};var a={scope:null,success:null,data:null,path:"",url:"#",pageLimit:7,currentPage:0,adaptive:false,totalPages:0,pageSize:0};var e=function(m,n,o){var k=Math.floor(o/2);var l=n-1;if(!o||n<=o||m-k<0){return 0}if(m+k>l){return n-o}return m-k};var h=function(p){var o=p.totalPages;var n=p.currentPage;var q=p.pageLimit;var l=p.adaptive;var k;if(q){if(l){o=n+q}k=q}else{k=o}var m=e(n,o,q);return b.Pagination().paginationFooter({currentPage:n||0,startPage:m,itemsToRender:k,totalPages:o,pageSize:p.pageSize,url:p.url||"#"})};var i=function(n){var l=j.extend({},a,n);if(typeof l.success!=="function"){l.success=function(){}}var o=h(l);l.scope.after(o);var m=l.scope.next();var k=m.data("initial-page-index");m.on("click","a",function(t){var s=f(this);var v=s.parents("ol").prev();if(v.prop("id")==="floating-scrollbar"){v=v.prev()}var r=v.is("table")?v:v.find("table");var p=r.data("pageIndex")||k;var u=s.parent("li");if(u.hasClass("aui-nav-selected")||u.find("> a[aria-disabled=true]").length){return}if(u.hasClass("aui-nav-next")){p++}else{if(u.hasClass("aui-nav-previous")){p--}else{p=u.data("index")}}d(m,l.totalPages,true);var q=f.extend({},{pageSize:l.pageSize,pageIndex:p},l.data);f.getJSON(g.contextPath()+l.path,q).done(function(x){p=x.currentPage;var w=r.find("tbody");w.find("tr").remove();r.data("pageIndex",p);j.each(x.detailLines,function(z){l.success(z,w)});g.trigger("ui.components.pagination.updated",[x,l]);var y=f.extend({},l,{totalPages:x.totalPages,adaptive:x.adaptive,currentPage:p});m.html(h(y));d(m,y.totalPages,false);c()}).fail(function(){d(m,l.totalPages,false)});t.preventDefault()})};return{build:i}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/js/internal/pagination-legacy.js' */
"use strict";var _=require("underscore");window.Confluence.UI.Components.Pagination=_.extend(window.Confluence.UI.Components.Pagination,require("confluence-ui-components/js/pagination"));require("ajs").deprecate.prop(window.Confluence.UI.Components.Pagination,"build",{sinceVersion:"2.1.1",extraInfo:"Use require('confluence-ui-components/js/pagination')"});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:pagination', location = '/soy/pagination.soy' */
// This file was automatically generated from pagination.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.Pagination.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.Pagination == 'undefined') { Confluence.UI.Components.Pagination = {}; }
if (typeof Confluence.UI.Components.Pagination.Templates == 'undefined') { Confluence.UI.Components.Pagination.Templates = {}; }


Confluence.UI.Components.Pagination.Templates.paginationFooter = function(opt_data, opt_ignored) {
  var output = '<ol class="aui-nav aui-nav-pagination macro-auto-pagination" data-page-size="' + soy.$$escapeHtml(opt_data.pageSize) + '" data-initial-page-index="' + soy.$$escapeHtml(opt_data.currentPage) + '"><li class="aui-nav-previous"><a ' + ((opt_data.currentPage == 0) ? 'aria-disabled="true"' : 'href="#"') + '>' + soy.$$escapeHtml('Prev') + '</a></li>';
  var startIdx__soy16 = opt_data.startPage + 1;
  var currentIdx__soy17 = opt_data.currentPage + 1;
  var endIdx__soy18 = startIdx__soy16 + opt_data.itemsToRender;
  var totalRange__soy19 = opt_data.totalPages + 1;
  var indexInit20 = startIdx__soy16;
  var indexLimit20 = endIdx__soy18 < totalRange__soy19 ? endIdx__soy18 : totalRange__soy19;
  for (var index20 = indexInit20; index20 < indexLimit20; index20++) {
    output += (index20 == currentIdx__soy17) ? '<li class="aui-nav-selected" data-index="' + soy.$$escapeHtml(index20 - 1) + '">' + soy.$$escapeHtml(index20) + '</li>' : '<li data-index="' + soy.$$escapeHtml(index20 - 1) + '"><a href="#">' + soy.$$escapeHtml(index20) + '</a></li>';
  }
  output += '<li class="aui-nav-next"><a ' + ((currentIdx__soy17 == opt_data.totalPages) ? 'aria-disabled="true"' : 'href="' + soy.$$escapeHtml(opt_data.url) + '"') + '>' + soy.$$escapeHtml('Next') + '</a></li></ol>';
  return output;
};
if (goog.DEBUG) {
  Confluence.UI.Components.Pagination.Templates.paginationFooter.soyTemplateName = 'Confluence.UI.Components.Pagination.Templates.paginationFooter';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-ui-components:blank-placeholder-box', location = 'soy/blank-placeholder-box.soy' */
// This file was automatically generated from blank-placeholder-box.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.UI.Components.BlankPlaceholderBox.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.UI == 'undefined') { Confluence.UI = {}; }
if (typeof Confluence.UI.Components == 'undefined') { Confluence.UI.Components = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox = {}; }
if (typeof Confluence.UI.Components.BlankPlaceholderBox.Templates == 'undefined') { Confluence.UI.Components.BlankPlaceholderBox.Templates = {}; }


Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox = function(opt_data, opt_ignored) {
  return '<div class="blank-placeholder-box ' + ((opt_data.customClass) ? soy.$$escapeHtml(opt_data.customClass) : '') + '"><div class="content"><h2>' + soy.$$escapeHtml(opt_data.blankTitle) + '</h2><p>' + soy.$$escapeHtml(opt_data.blankDescription) + '</p></div>' + ((opt_data.customHtml) ? soy.$$filterNoAutoescape(opt_data.customHtml) : '') + '</div>';
};
if (goog.DEBUG) {
  Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox.soyTemplateName = 'Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.component.sortable-table', location = 'aui.chunk.0c4b04d32c932f76b0fb--6ff66be022ba199d5a10.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.component.sortable-table"],{AqzS:function(e,t){!function(e){"use strict";e.extend({tablesorter:new function(){var t=this;function r(){var e=arguments[0],t=arguments.length>1?Array.prototype.slice.call(arguments):e;"undefined"!=typeof console&&void 0!==console.log?console[/error/i.test(e)?"error":/warn/i.test(e)?"warn":"log"](t):alert(t)}function s(e,t){r(e+" ("+((new Date).getTime()-t.getTime())+"ms)")}function a(e){for(var t in e)return!1;return!0}function n(r,s,a){if(!s)return"";var n,o=r.config,i=o.textExtraction||"",d="";return d="basic"===i?e(s).attr(o.textAttribute)||s.textContent||s.innerText||e(s).text()||"":"function"==typeof i?i(s,r,a):"function"==typeof(n=t.getColumnData(r,i,a))?n(s,r,a):s.textContent||s.innerText||e(s).text()||"",e.trim(d)}function o(e,s,a,o){for(var i,d=t.parsers.length,c=!1,l="",u=!0;""===l&&u;)s[++a]?(l=n(e,c=s[a].cells[o],o),e.config.debug&&r("Checking if value was empty on row "+a+", column: "+o+': "'+l+'"')):u=!1;for(;--d>=0;)if((i=t.parsers[d])&&"text"!==i.id&&i.is&&i.is(l,e,c))return i;return t.getParserById("text")}function i(e){var a,n,i,d,c,l,u,p,f,g,h=e.config,m=h.$tbodies=h.$table.children("tbody:not(."+h.cssInfoBlock+")"),b=0,y="",v=m.length;if(0===v)return h.debug?r("Warning: *Empty table!* Not building a parser cache"):"";for(h.debug&&(g=new Date,r("Detecting parsers for each column")),n={extractors:[],parsers:[]};b<v;){if((a=m[b].rows)[b])for(i=h.columns,d=0;d<i;d++)c=h.$headers.filter('[data-column="'+d+'"]:last'),l=t.getColumnData(e,h.headers,d),f=t.getParserById(t.getData(c,l,"extractor")),p=t.getParserById(t.getData(c,l,"sorter")),u="false"===t.getData(c,l,"parser"),h.empties[d]=t.getData(c,l,"empty")||h.emptyTo||(h.emptyToBottom?"bottom":"top"),h.strings[d]=t.getData(c,l,"string")||h.stringTo||"max",u&&(p=t.getParserById("no-parser")),f||(f=!1),p||(p=o(e,a,-1,d)),h.debug&&(y+="column:"+d+"; extractor:"+f.id+"; parser:"+p.id+"; string:"+h.strings[d]+"; empty: "+h.empties[d]+"\n"),n.parsers[d]=p,n.extractors[d]=f;b+=n.parsers.length?v:1}h.debug&&(r(y||"No parsers detected"),s("Completed detecting parsers",g)),h.parsers=n.parsers,h.extractors=n.extractors}function d(a){var o,i,d,c,l,u,p,f,g,h,m,b,y,v=a.config,w=v.$table.children("tbody"),x=v.extractors,C=v.parsers;if(v.cache={},v.totalRows=0,!C)return v.debug?r("Warning: *Empty table!* Not building a cache"):"";for(v.debug&&(h=new Date),v.showProcessing&&t.isProcessing(a,!0),p=0;p<w.length;p++)if(y=[],o=v.cache[p]={normalized:[]},!w.eq(p).hasClass(v.cssInfoBlock)){for(m=w[p]&&w[p].rows.length||0,l=0;l<m;++l)if(b={child:[]},f=e(w[p].rows[l]),[new Array(v.columns)],g=[],f.hasClass(v.cssChildRow)&&0!==l)i=o.normalized.length-1,o.normalized[i][v.columns].$row=o.normalized[i][v.columns].$row.add(f),f.prev().hasClass(v.cssChildRow)||f.prev().addClass(t.css.cssHasChild),b.child[i]=e.trim(f[0].textContent||f[0].innerText||f.text()||"");else{for(b.$row=f,b.order=l,u=0;u<v.columns;++u)void 0!==C[u]?(i=n(a,f[0].cells[u],u),d=void 0===x[u].id?i:x[u].format(i,a,f[0].cells[u],u),c="no-parser"===C[u].id?"":C[u].format(d,a,f[0].cells[u],u),g.push(v.ignoreCase&&"string"==typeof c?c.toLowerCase():c),"numeric"===(C[u].type||"").toLowerCase()&&(y[u]=Math.max(Math.abs(c)||0,y[u]||0))):v.debug&&r("No parser found for cell:",f[0].cells[u],"does it have a header?");g[v.columns]=b,o.normalized.push(g)}o.colMax=y,v.totalRows+=o.normalized.length}v.showProcessing&&t.isProcessing(a),v.debug&&s("Building cache for "+m+" rows",h)}function c(r,n){var o,i,d,c,l,u,p,f=r.config,g=f.widgetOptions,h=r.tBodies,m=[],b=f.cache;if(a(b))return f.appender?f.appender(r,m):r.isUpdating?f.$table.trigger("updateComplete",r):"";for(f.debug&&(p=new Date),u=0;u<h.length;u++)if((d=e(h[u])).length&&!d.hasClass(f.cssInfoBlock)){for(c=t.processTbody(r,d,!0),i=(o=b[u].normalized).length,l=0;l<i;l++)m.push(o[l][f.columns].$row),f.appender&&(!f.pager||f.pager.removeRows&&g.pager_removeRows||f.pager.ajax)||c.append(o[l][f.columns].$row);t.processTbody(r,c,!1)}f.appender&&f.appender(r,m),f.debug&&s("Rebuilt table",p),n||f.appender||t.applyWidget(r),r.isUpdating&&f.$table.trigger("updateComplete",r)}function l(e){return/^d/i.test(e)||1===e}function u(a){var n,o,i,d,c,u,p,g=a.config;g.headerList=[],g.headerContent=[],g.debug&&(p=new Date),g.columns=t.computeColumnIndex(g.$table.children("thead, tfoot").children("tr")),d=g.cssIcon?'<i class="'+(g.cssIcon===t.css.icon?t.css.icon:g.cssIcon+" "+t.css.icon)+'"></i>':"",g.$headers=e(a).find(g.selectorHeaders).each(function(r){o=e(this),n=t.getColumnData(a,g.headers,r,!0),g.headerContent[r]=e(this).html(),c=g.headerTemplate.replace(/\{content\}/g,e(this).html()).replace(/\{icon\}/g,d),g.onRenderTemplate&&(i=g.onRenderTemplate.apply(o,[r,c]))&&"string"==typeof i&&(c=i),e(this).html('<div class="'+t.css.headerIn+'">'+c+"</div>"),g.onRenderHeader&&g.onRenderHeader.apply(o,[r]),this.column=parseInt(e(this).attr("data-column"),10),this.order=l(t.getData(o,n,"sortInitialOrder")||g.sortInitialOrder)?[1,0,2]:[0,1,2],this.count=-1,this.lockedOrder=!1,void 0!==(u=t.getData(o,n,"lockedOrder")||!1)&&!1!==u&&(this.order=this.lockedOrder=l(u)?[1,1,1]:[0,0,0]),o.addClass(t.css.header+" "+g.cssHeader),g.headerList[r]=this,o.parent().addClass(t.css.headerRow+" "+g.cssHeaderRow).attr("role","row"),g.tabIndex&&o.attr("tabindex",0)}).attr({scope:"col",role:"columnheader"}),f(a),g.debug&&(s("Built headers:",p),r(g.$headers))}function p(e,t,r){var s=e.config;s.$table.find(s.selectorRemove).remove(),i(e),d(e),y(s.$table,t,r)}function f(r){var s,a,n,o=r.config;o.$headers.each(function(i,d){a=e(d),n=t.getColumnData(r,o.headers,i,!0),s="false"===t.getData(d,n,"sorter")||"false"===t.getData(d,n,"parser"),d.sortDisabled=s,a[s?"addClass":"removeClass"]("sorter-false").attr("aria-disabled",""+s),r.id&&(s?a.removeAttr("aria-controls"):a.attr("aria-controls",r.id))})}function g(r){var s,a,n,o=r.config,i=o.sortList,d=i.length,c=t.css.sortNone+" "+o.cssNone,l=[t.css.sortAsc+" "+o.cssAsc,t.css.sortDesc+" "+o.cssDesc],u=["ascending","descending"],p=e(r).find("tfoot tr").children().add(o.$extraHeaders).removeClass(l.join(" "));for(o.$headers.removeClass(l.join(" ")).addClass(c).attr("aria-sort","none"),a=0;a<d;a++)if(2!==i[a][1]&&(s=o.$headers.not(".sorter-false").filter('[data-column="'+i[a][0]+'"]'+(1===d?":last":""))).length){for(n=0;n<s.length;n++)s[n].sortDisabled||s.eq(n).removeClass(c).addClass(l[i[a][1]]).attr("aria-sort",u[i[a][1]]);p.length&&p.filter('[data-column="'+i[a][0]+'"]').removeClass(c).addClass(l[i[a][1]])}o.$headers.not(".sorter-false").each(function(){var r=e(this),s=this.order[(this.count+1)%(o.sortReset?3:2)],a=r.text()+": "+t.language[r.hasClass(t.css.sortAsc)?"sortAsc":r.hasClass(t.css.sortDesc)?"sortDesc":"sortNone"]+t.language[0===s?"nextAsc":1===s?"nextDesc":"nextNone"];r.attr("aria-label",a)})}function h(e,t){return e&&e[t]&&e[t].type||""}function m(e){var r,n,o,i,d,c,l,u,p,f,g=0,m=e.config,b=m.textSorter||"",y=m.sortList,v=y.length,w=e.tBodies.length;if(!m.serverSideSorting&&!a(m.cache)){for(m.debug&&(d=new Date),n=0;n<w;n++)c=m.cache[n].colMax,m.cache[n].normalized.sort(function(s,a){for(r=0;r<v;r++){if(i=y[r][0],l=y[r][1],g=0===l,m.sortStable&&s[i]===a[i]&&1===v)return s[m.columns].order-a[m.columns].order;if((o=/n/i.test(h(m.parsers,i)))&&m.strings[i]?(o="boolean"==typeof m.string[m.strings[i]]?(g?1:-1)*(m.string[m.strings[i]]?-1:1):m.strings[i]&&m.string[m.strings[i]]||0,u=m.numberSorter?m.numberSorter(s[i],a[i],g,c[i],e):t["sortNumeric"+(g?"Asc":"Desc")](s[i],a[i],o,c[i],i,e)):(p=g?s:a,f=g?a:s,u="function"==typeof b?b(p[i],f[i],g,i,e):"object"==typeof b&&b.hasOwnProperty(i)?b[i](p[i],f[i],g,i,e):t["sortNatural"+(g?"Asc":"Desc")](s[i],a[i],i,e,m)),u)return u}return s[m.columns].order-a[m.columns].order});m.debug&&s("Sorting on "+y.toString()+" and dir "+l+" time",d)}}function b(t,r){t[0].isUpdating&&t.trigger("updateComplete"),e.isFunction(r)&&r(t[0])}function y(e,r,s){var a=e[0].config.sortList;!1!==r&&!e[0].isProcessing&&a.length?e.trigger("sorton",[a,function(){b(e,s)},!0]):(b(e,s),t.applyWidget(e[0],!1))}function v(r){var s=r.config,o=s.$table;o.unbind("sortReset update updateRows updateCell updateAll addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave ".split(" ").join(s.namespace+" ")).bind("sortReset"+s.namespace,function(t,a){t.stopPropagation(),s.sortList=[],g(r),m(r),c(r),e.isFunction(a)&&a(r)}).bind("updateAll"+s.namespace,function(e,a,n){e.stopPropagation(),r.isUpdating=!0,t.refreshWidgets(r,!0,!0),t.restoreHeaders(r),u(r),t.bindEvents(r,s.$headers,!0),v(r),p(r,a,n)}).bind("update"+s.namespace+" updateRows"+s.namespace,function(e,t,s){e.stopPropagation(),r.isUpdating=!0,f(r),p(r,t,s)}).bind("updateCell"+s.namespace,function(t,a,i,d){t.stopPropagation(),r.isUpdating=!0,o.find(s.selectorRemove).remove();var c,l,u,p,f=o.find("tbody"),g=e(a),h=f.index(e.fn.closest?g.closest("tbody"):g.parents("tbody").filter(":first")),m=e.fn.closest?g.closest("tr"):g.parents("tr").filter(":first");a=g[0],f.length&&h>=0&&(u=f.eq(h).find("tr").index(m),p=g.index(),s.cache[h].normalized[u][s.columns].$row=m,l=void 0===s.extractors[p].id?n(r,a,p):s.extractors[p].format(n(r,a,p),r,a,p),c="no-parser"===s.parsers[p].id?"":s.parsers[p].format(l,r,a,p),s.cache[h].normalized[u][p]=s.ignoreCase&&"string"==typeof c?c.toLowerCase():c,"numeric"===(s.parsers[p].type||"").toLowerCase()&&(s.cache[h].colMax[p]=Math.max(Math.abs(c)||0,s.cache[h].colMax[p]||0)),y(o,i,d))}).bind("addRows"+s.namespace,function(t,d,c,l){if(t.stopPropagation(),r.isUpdating=!0,a(s.cache))f(r),p(r,c,l);else{var u,g,h,m,b,v,w,x=(d=e(d).attr("role","row")).filter("tr").length,C=o.find("tbody").index(d.parents("tbody").filter(":first"));for(s.parsers&&s.parsers.length||i(r),u=0;u<x;u++){for(h=d[u].cells.length,w=[],v={child:[],$row:d.eq(u),order:s.cache[C].normalized.length},g=0;g<h;g++)m=void 0===s.extractors[g].id?n(r,d[u].cells[g],g):s.extractors[g].format(n(r,d[u].cells[g],g),r,d[u].cells[g],g),b="no-parser"===s.parsers[g].id?"":s.parsers[g].format(m,r,d[u].cells[g],g),w[g]=s.ignoreCase&&"string"==typeof b?b.toLowerCase():b,"numeric"===(s.parsers[g].type||"").toLowerCase()&&(s.cache[C].colMax[g]=Math.max(Math.abs(w[g])||0,s.cache[C].colMax[g]||0));w.push(v),s.cache[C].normalized.push(w)}y(o,c,l)}}).bind("updateComplete"+s.namespace,function(){r.isUpdating=!1}).bind("sorton"+s.namespace,function(s,n,i,l){var u=r.config;s.stopPropagation(),o.trigger("sortStart",this),function(t,r){var s,a,n,o,i,d=t.config,c=r||d.sortList;d.sortList=[],e.each(c,function(t,r){if(o=parseInt(r[0],10),n=d.$headers.filter('[data-column="'+o+'"]:last')[0]){switch(a=(a=(""+r[1]).match(/^(1|d|s|o|n)/))?a[0]:""){case"1":case"d":a=1;break;case"s":a=i||0;break;case"o":s=n.order[(i||0)%(d.sortReset?3:2)],a=0===s?1:1===s?0:2;break;case"n":n.count=n.count+1,a=n.order[n.count%(d.sortReset?3:2)];break;default:a=0}i=0===t?a:i,s=[o,parseInt(a,10)||0],d.sortList.push(s),a=e.inArray(s[1],n.order),n.count=a>=0?a:s[1]%(d.sortReset?3:2)}})}(r,n),g(r),u.delayInit&&a(u.cache)&&d(r),o.trigger("sortBegin",this),m(r),c(r,l),o.trigger("sortEnd",this),t.applyWidget(r),e.isFunction(i)&&i(r)}).bind("appendCache"+s.namespace,function(t,s,a){t.stopPropagation(),c(r,a),e.isFunction(s)&&s(r)}).bind("updateCache"+s.namespace,function(t,a){s.parsers&&s.parsers.length||i(r),d(r),e.isFunction(a)&&a(r)}).bind("applyWidgetId"+s.namespace,function(e,a){e.stopPropagation(),t.getWidgetById(a).format(r,s,s.widgetOptions)}).bind("applyWidgets"+s.namespace,function(e,s){e.stopPropagation(),t.applyWidget(r,s)}).bind("refreshWidgets"+s.namespace,function(e,s,a){e.stopPropagation(),t.refreshWidgets(r,s,a)}).bind("destroy"+s.namespace,function(e,s,a){e.stopPropagation(),t.destroy(r,s,a)}).bind("resetToLoadState"+s.namespace,function(){t.refreshWidgets(r,!0,!0),s=e.extend(!0,t.defaults,s.originalSettings),r.hasInitialized=!1,t.setup(r,s)})}t.version="2.17.7",t.parsers=[],t.widgets=[],t.defaults={theme:"default",widthFixed:!1,showProcessing:!1,headerTemplate:"{content}",onRenderTemplate:null,onRenderHeader:null,cancelSelection:!0,tabIndex:!0,dateFormat:"mmddyyyy",sortMultiSortKey:"shiftKey",sortResetKey:"ctrlKey",usNumberFormat:!0,delayInit:!1,serverSideSorting:!1,headers:{},ignoreCase:!0,sortForce:null,sortList:[],sortAppend:null,sortStable:!1,sortInitialOrder:"asc",sortLocaleCompare:!1,sortReset:!1,sortRestart:!1,emptyTo:"bottom",stringTo:"max",textExtraction:"basic",textAttribute:"data-text",textSorter:null,numberSorter:null,widgets:[],widgetOptions:{zebra:["even","odd"]},initWidgets:!0,initialized:null,tableClass:"",cssAsc:"",cssDesc:"",cssNone:"",cssHeader:"",cssHeaderRow:"",cssProcessing:"",cssChildRow:"tablesorter-childRow",cssIcon:"tablesorter-icon",cssInfoBlock:"tablesorter-infoOnly",selectorHeaders:"> thead th, > thead td",selectorSort:"th, td",selectorRemove:".remove-me",debug:!1,headerList:[],empties:{},strings:{},parsers:[]},t.css={table:"tablesorter",cssHasChild:"tablesorter-hasChildRow",childRow:"tablesorter-childRow",header:"tablesorter-header",headerRow:"tablesorter-headerRow",headerIn:"tablesorter-header-inner",icon:"tablesorter-icon",info:"tablesorter-infoOnly",processing:"tablesorter-processing",sortAsc:"tablesorter-headerAsc",sortDesc:"tablesorter-headerDesc",sortNone:"tablesorter-headerUnSorted"},t.language={sortAsc:"Ascending sort applied, ",sortDesc:"Descending sort applied, ",sortNone:"No sort applied, ",nextAsc:"activate to apply an ascending sort",nextDesc:"activate to apply a descending sort",nextNone:"activate to remove the sort"},t.log=r,t.benchmark=s,t.construct=function(r){return this.each(function(){var s=e.extend(!0,{},t.defaults,r);s.originalSettings=r,!this.hasInitialized&&t.buildTable&&"TABLE"!==this.tagName?t.buildTable(this,s):t.setup(this,s)})},t.setup=function(s,a){if(!s||!s.tHead||0===s.tBodies.length||!0===s.hasInitialized)return a.debug?r("ERROR: stopping initialization! No table, thead, tbody or tablesorter has already been initialized"):"";var n="",o=e(s),c=e.metadata;s.hasInitialized=!1,s.isProcessing=!0,s.config=a,e.data(s,"tablesorter",a),a.debug&&e.data(s,"startoveralltimer",new Date),a.supportsDataObject=function(e){return e[0]=parseInt(e[0],10),e[0]>1||1===e[0]&&parseInt(e[1],10)>=4}(e.fn.jquery.split(".")),a.string={max:1,min:-1,emptyMin:1,emptyMax:-1,zero:0,none:0,null:0,top:!0,bottom:!1},/tablesorter\-/.test(o.attr("class"))||(n=""!==a.theme?" tablesorter-"+a.theme:""),a.table=s,a.$table=o.addClass(t.css.table+" "+a.tableClass+n).attr("role","grid"),a.$headers=o.find(a.selectorHeaders),a.namespace?a.namespace="."+a.namespace.replace(/\W/g,""):a.namespace=".tablesorter"+Math.random().toString(16).slice(2),a.$table.children().children("tr").attr("role","row"),a.$tbodies=o.children("tbody:not(."+a.cssInfoBlock+")").attr({"aria-live":"polite","aria-relevant":"all"}),a.$table.find("caption").length&&a.$table.attr("aria-labelledby","theCaption"),a.widgetInit={},a.textExtraction=a.$table.attr("data-text-extraction")||a.textExtraction||"basic",u(s),function(t){if(t.config.widthFixed&&0===e(t).find("colgroup").length){var r=e("<colgroup>"),s=e(t).width();e(t.tBodies[0]).find("tr:first").children(":visible").each(function(){r.append(e("<col>").css("width",parseInt(e(this).width()/s*1e3,10)/10+"%"))}),e(t).prepend(r)}}(s),i(s),a.totalRows=0,a.delayInit||d(s),t.bindEvents(s,a.$headers,!0),v(s),a.supportsDataObject&&void 0!==o.data().sortlist?a.sortList=o.data().sortlist:c&&o.metadata()&&o.metadata().sortlist&&(a.sortList=o.metadata().sortlist),t.applyWidget(s,!0),a.sortList.length>0?o.trigger("sorton",[a.sortList,{},!a.initWidgets,!0]):(g(s),a.initWidgets&&t.applyWidget(s,!1)),a.showProcessing&&o.unbind("sortBegin"+a.namespace+" sortEnd"+a.namespace).bind("sortBegin"+a.namespace+" sortEnd"+a.namespace,function(e){clearTimeout(a.processTimer),t.isProcessing(s),"sortBegin"===e.type&&(a.processTimer=setTimeout(function(){t.isProcessing(s,!0)},500))}),s.hasInitialized=!0,s.isProcessing=!1,a.debug&&t.benchmark("Overall initialization time",e.data(s,"startoveralltimer")),o.trigger("tablesorter-initialized",s),"function"==typeof a.initialized&&a.initialized(s)},t.getColumnData=function(t,r,s,a){if(void 0!==r&&null!==r){var n,o=(t=e(t)[0]).config;if(r[s])return a?r[s]:r[o.$headers.index(o.$headers.filter('[data-column="'+s+'"]:last'))];for(n in r)if("string"==typeof n&&(a?o.$headers.eq(s).filter(n):o.$headers.filter('[data-column="'+s+'"]:last').filter(n)).length)return r[n]}},t.computeColumnIndex=function(t){var r,s,a,n,o,i,d,c,l,u,p,f,g,h=[],m={},b=0;for(r=0;r<t.length;r++)for(d=t[r].cells,s=0;s<d.length;s++){for(i=d[s],o=e(i),l=(c=i.parentNode.rowIndex)+"-"+o.index(),u=i.rowSpan||1,p=i.colSpan||1,void 0===h[c]&&(h[c]=[]),a=0;a<h[c].length+1;a++)if(void 0===h[c][a]){f=a;break}for(m[l]=f,b=Math.max(f,b),o.attr({"data-column":f}),a=c;a<c+u;a++)for(void 0===h[a]&&(h[a]=[]),g=h[a],n=f;n<f+p;n++)g[n]="x"}return b+1},t.isProcessing=function(r,s,a){var n=(r=e(r))[0].config,o=a||r.find("."+t.css.header);s?(void 0!==a&&n.sortList.length>0&&(o=o.filter(function(){return!this.sortDisabled&&t.isValueInArray(parseFloat(e(this).attr("data-column")),n.sortList)>=0})),r.add(o).addClass(t.css.processing+" "+n.cssProcessing)):r.add(o).removeClass(t.css.processing+" "+n.cssProcessing)},t.processTbody=function(t,r,s){var a;if(t=e(t)[0],s)return t.isProcessing=!0,r.before('<span class="tablesorter-savemyplace"/>'),a=e.fn.detach?r.detach():r.remove();a=e(t).find("span.tablesorter-savemyplace"),r.insertAfter(a),a.remove(),t.isProcessing=!1},t.clearTableBody=function(t){e(t)[0].config.$tbodies.children().detach()},t.bindEvents=function(r,s,n){var o,i=(r=e(r)[0]).config;!0!==n&&(i.$extraHeaders=i.$extraHeaders?i.$extraHeaders.add(s):s),s.find(i.selectorSort).add(s.filter(i.selectorSort)).unbind("mousedown mouseup sort keyup ".split(" ").join(i.namespace+" ")).bind("mousedown mouseup sort keyup ".split(" ").join(i.namespace+" "),function(n,l){var u,p=n.type;if(!(1!==(n.which||n.button)&&!/sort|keyup/.test(p)||"keyup"===p&&13!==n.which||"mouseup"===p&&!0!==l&&(new Date).getTime()-o>250)){if("mousedown"===p)return o=(new Date).getTime(),/(input|select|button|textarea)/i.test(n.target.tagName)?"":!i.cancelSelection;i.delayInit&&a(i.cache)&&d(r),u=e.fn.closest?e(this).closest("th, td")[0]:/TH|TD/.test(this.tagName)?this:e(this).parents("th, td")[0],(u=i.$headers[s.index(u)]).sortDisabled||function r(s,a,n){if(s.isUpdating)return setTimeout(function(){r(s,a,n)},50);var o,i,d,l,u,p=s.config,f=!n[p.sortMultiSortKey],h=p.$table;if(h.trigger("sortStart",s),a.count=n[p.sortResetKey]?2:(a.count+1)%(p.sortReset?3:2),p.sortRestart&&(i=a,p.$headers.each(function(){this===i||!f&&e(this).is("."+t.css.sortDesc+",."+t.css.sortAsc)||(this.count=-1)})),i=a.column,f){if(p.sortList=[],null!==p.sortForce)for(o=p.sortForce,d=0;d<o.length;d++)o[d][0]!==i&&p.sortList.push(o[d]);if((l=a.order[a.count])<2&&(p.sortList.push([i,l]),a.colSpan>1))for(d=1;d<a.colSpan;d++)p.sortList.push([i+d,l])}else{if(p.sortAppend&&p.sortList.length>1)for(d=0;d<p.sortAppend.length;d++)(u=t.isValueInArray(p.sortAppend[d][0],p.sortList))>=0&&p.sortList.splice(u,1);if(t.isValueInArray(i,p.sortList)>=0)for(d=0;d<p.sortList.length;d++)u=p.sortList[d],l=p.$headers.filter('[data-column="'+u[0]+'"]:last')[0],u[0]===i&&(u[1]=l.order[a.count],2===u[1]&&(p.sortList.splice(d,1),l.count=-1));else if((l=a.order[a.count])<2&&(p.sortList.push([i,l]),a.colSpan>1))for(d=1;d<a.colSpan;d++)p.sortList.push([i+d,l])}if(null!==p.sortAppend)for(o=p.sortAppend,d=0;d<o.length;d++)o[d][0]!==i&&p.sortList.push(o[d]);h.trigger("sortBegin",s),setTimeout(function(){g(s),m(s),c(s),h.trigger("sortEnd",s)},1)}(r,u,n)}}),i.cancelSelection&&s.attr("unselectable","on").bind("selectstart",!1).css({"user-select":"none",MozUserSelect:"none"})},t.restoreHeaders=function(r){var s=e(r)[0].config;s.$table.find(s.selectorHeaders).each(function(r){e(this).find("."+t.css.headerIn).length&&e(this).html(s.headerContent[r])})},t.destroy=function(r,s,a){if((r=e(r)[0]).hasInitialized){t.refreshWidgets(r,!0,!0);var n=e(r),o=r.config,i=n.find("thead:first"),d=i.find("tr."+t.css.headerRow).removeClass(t.css.headerRow+" "+o.cssHeaderRow),c=n.find("tfoot:first > tr").children("th, td");!1===s&&e.inArray("uitheme",o.widgets)>=0&&(n.trigger("applyWidgetId",["uitheme"]),n.trigger("applyWidgetId",["zebra"])),i.find("tr").not(d).remove(),n.removeData("tablesorter").unbind("sortReset update updateAll updateRows updateCell addRows updateComplete sorton appendCache updateCache applyWidgetId applyWidgets refreshWidgets destroy mouseup mouseleave keypress sortBegin sortEnd resetToLoadState ".split(" ").join(o.namespace+" ")),o.$headers.add(c).removeClass([t.css.header,o.cssHeader,o.cssAsc,o.cssDesc,t.css.sortAsc,t.css.sortDesc,t.css.sortNone].join(" ")).removeAttr("data-column").removeAttr("aria-label").attr("aria-disabled","true"),d.find(o.selectorSort).unbind("mousedown mouseup keypress ".split(" ").join(o.namespace+" ")),t.restoreHeaders(r),n.toggleClass(t.css.table+" "+o.tableClass+" tablesorter-"+o.theme,!1===s),r.hasInitialized=!1,delete r.config.cache,"function"==typeof a&&a(r)}},t.regex={chunk:/(^([+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?)?$|^0x[0-9a-f]+$|\d+)/gi,chunks:/(^\\0|\\0$)/,hex:/^0x[0-9a-f]+$/i},t.sortNatural=function(e,r){if(e===r)return 0;var s,a,n,o,i,d,c,l,u=t.regex;if(u.hex.test(r)){if((a=parseInt(e.match(u.hex),16))<(o=parseInt(r.match(u.hex),16)))return-1;if(a>o)return 1}for(s=e.replace(u.chunk,"\\0$1\\0").replace(u.chunks,"").split("\\0"),n=r.replace(u.chunk,"\\0$1\\0").replace(u.chunks,"").split("\\0"),l=Math.max(s.length,n.length),c=0;c<l;c++){if(i=isNaN(s[c])?s[c]||0:parseFloat(s[c])||0,d=isNaN(n[c])?n[c]||0:parseFloat(n[c])||0,isNaN(i)!==isNaN(d))return isNaN(i)?1:-1;if(typeof i!=typeof d&&(i+="",d+=""),i<d)return-1;if(i>d)return 1}return 0},t.sortNaturalAsc=function(e,r,s,a,n){if(e===r)return 0;var o=n.string[n.empties[s]||n.emptyTo];return""===e&&0!==o?"boolean"==typeof o?o?-1:1:-o||-1:""===r&&0!==o?"boolean"==typeof o?o?1:-1:o||1:t.sortNatural(e,r)},t.sortNaturalDesc=function(e,r,s,a,n){if(e===r)return 0;var o=n.string[n.empties[s]||n.emptyTo];return""===e&&0!==o?"boolean"==typeof o?o?-1:1:o||1:""===r&&0!==o?"boolean"==typeof o?o?1:-1:-o||-1:t.sortNatural(r,e)},t.sortText=function(e,t){return e>t?1:e<t?-1:0},t.getTextValue=function(e,t,r){if(r){var s,a=e?e.length:0,n=r+t;for(s=0;s<a;s++)n+=e.charCodeAt(s);return t*n}return 0},t.sortNumericAsc=function(e,r,s,a,n,o){if(e===r)return 0;var i=o.config,d=i.string[i.empties[n]||i.emptyTo];return""===e&&0!==d?"boolean"==typeof d?d?-1:1:-d||-1:""===r&&0!==d?"boolean"==typeof d?d?1:-1:d||1:(isNaN(e)&&(e=t.getTextValue(e,s,a)),isNaN(r)&&(r=t.getTextValue(r,s,a)),e-r)},t.sortNumericDesc=function(e,r,s,a,n,o){if(e===r)return 0;var i=o.config,d=i.string[i.empties[n]||i.emptyTo];return""===e&&0!==d?"boolean"==typeof d?d?-1:1:d||1:""===r&&0!==d?"boolean"==typeof d?d?1:-1:-d||-1:(isNaN(e)&&(e=t.getTextValue(e,s,a)),isNaN(r)&&(r=t.getTextValue(r,s,a)),r-e)},t.sortNumeric=function(e,t){return e-t},t.characterEquivalents={a:"áàâãäąå",A:"ÁÀÂÃÄĄÅ",c:"çćč",C:"ÇĆČ",e:"éèêëěę",E:"ÉÈÊËĚĘ",i:"íìİîïı",I:"ÍÌİÎÏ",o:"óòôõö",O:"ÓÒÔÕÖ",ss:"ß",SS:"ẞ",u:"úùûüů",U:"ÚÙÛÜŮ"},t.replaceAccents=function(e){var r,s="[",a=t.characterEquivalents;if(!t.characterRegex){for(r in t.characterRegexArray={},a)"string"==typeof r&&(s+=a[r],t.characterRegexArray[r]=new RegExp("["+a[r]+"]","g"));t.characterRegex=new RegExp(s+"]")}if(t.characterRegex.test(e))for(r in a)"string"==typeof r&&(e=e.replace(t.characterRegexArray[r],r));return e},t.isValueInArray=function(e,t){var r,s=t.length;for(r=0;r<s;r++)if(t[r][0]===e)return r;return-1},t.addParser=function(e){var r,s=t.parsers.length,a=!0;for(r=0;r<s;r++)t.parsers[r].id.toLowerCase()===e.id.toLowerCase()&&(a=!1);a&&t.parsers.push(e)},t.getParserById=function(e){if("false"==e)return!1;var r,s=t.parsers.length;for(r=0;r<s;r++)if(t.parsers[r].id.toLowerCase()===e.toString().toLowerCase())return t.parsers[r];return!1},t.addWidget=function(e){t.widgets.push(e)},t.hasWidget=function(t,r){return(t=e(t)).length&&t[0].config&&t[0].config.widgetInit[r]||!1},t.getWidgetById=function(e){var r,s,a=t.widgets.length;for(r=0;r<a;r++)if((s=t.widgets[r])&&s.hasOwnProperty("id")&&s.id.toLowerCase()===e.toLowerCase())return s},t.applyWidget=function(r,a){var n,o,i,d=(r=e(r)[0]).config,c=d.widgetOptions,l=[];!1!==a&&r.hasInitialized&&(r.isApplyingWidgets||r.isUpdating)||(d.debug&&(n=new Date),d.widgets.length&&(r.isApplyingWidgets=!0,d.widgets=e.grep(d.widgets,function(t,r){return e.inArray(t,d.widgets)===r}),e.each(d.widgets||[],function(e,r){(i=t.getWidgetById(r))&&i.id&&(i.priority||(i.priority=10),l[e]=i)}),l.sort(function(e,t){return e.priority<t.priority?-1:e.priority===t.priority?0:1}),e.each(l,function(t,s){s&&(!a&&d.widgetInit[s.id]||(d.widgetInit[s.id]=!0,s.hasOwnProperty("options")&&(c=r.config.widgetOptions=e.extend(!0,{},s.options,c)),s.hasOwnProperty("init")&&s.init(r,s,d,c)),!a&&s.hasOwnProperty("format")&&s.format(r,d,c,!1))})),setTimeout(function(){r.isApplyingWidgets=!1},0),d.debug&&(o=d.widgets.length,s("Completed "+(!0===a?"initializing ":"applying ")+o+" widget"+(1!==o?"s":""),n)))},t.refreshWidgets=function(s,a,n){var o,i=(s=e(s)[0]).config,d=i.widgets,c=t.widgets,l=c.length;for(o=0;o<l;o++)c[o]&&c[o].id&&(a||e.inArray(c[o].id,d)<0)&&(i.debug&&r('Refeshing widgets: Removing "'+c[o].id+'"'),c[o].hasOwnProperty("remove")&&i.widgetInit[c[o].id]&&(c[o].remove(s,i,i.widgetOptions),i.widgetInit[c[o].id]=!1));!0!==n&&t.applyWidget(s,a)},t.getData=function(t,r,s){var a,n,o="",i=e(t);return i.length?(a=!!e.metadata&&i.metadata(),n=" "+(i.attr("class")||""),void 0!==i.data(s)||void 0!==i.data(s.toLowerCase())?o+=i.data(s)||i.data(s.toLowerCase()):a&&void 0!==a[s]?o+=a[s]:r&&void 0!==r[s]?o+=r[s]:" "!==n&&n.match(" "+s+"-")&&(o=n.match(new RegExp("\\s"+s+"-([\\w-]+)"))[1]||""),e.trim(o)):""},t.formatFloat=function(t,r){return"string"!=typeof t||""===t?t:(t=(r&&r.config?!1!==r.config.usNumberFormat:void 0===r||r)?t.replace(/,/g,""):t.replace(/[\s|\.]/g,"").replace(/,/g,"."),/^\s*\([.\d]+\)/.test(t)&&(t=t.replace(/^\s*\(([.\d]+)\)/,"-$1")),s=parseFloat(t),isNaN(s)?e.trim(t):s);var s},t.isDigit=function(e){return!isNaN(e)||/^[\-+(]?\d+[)]?$/.test(e.toString().replace(/[,.'"\s]/g,""))}}});var t=e.tablesorter;e.fn.extend({tablesorter:t.construct}),t.addParser({id:"no-parser",is:function(){return!1},format:function(){return""},type:"text"}),t.addParser({id:"text",is:function(){return!0},format:function(r,s){var a=s.config;return r&&(r=e.trim(a.ignoreCase?r.toLocaleLowerCase():r),r=a.sortLocaleCompare?t.replaceAccents(r):r),r},type:"text"}),t.addParser({id:"digit",is:function(e){return t.isDigit(e)},format:function(r,s){var a=t.formatFloat((r||"").replace(/[^\w,. \-()]/g,""),s);return r&&"number"==typeof a?a:r?e.trim(r&&s.config.ignoreCase?r.toLocaleLowerCase():r):r},type:"numeric"}),t.addParser({id:"currency",is:function(e){return/^\(?\d+[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]|[\u00a3$\u20ac\u00a4\u00a5\u00a2?.]\d+\)?$/.test((e||"").replace(/[+\-,. ]/g,""))},format:function(r,s){var a=t.formatFloat((r||"").replace(/[^\w,. \-()]/g,""),s);return r&&"number"==typeof a?a:r?e.trim(r&&s.config.ignoreCase?r.toLocaleLowerCase():r):r},type:"numeric"}),t.addParser({id:"ipAddress",is:function(e){return/^\d{1,3}[\.]\d{1,3}[\.]\d{1,3}[\.]\d{1,3}$/.test(e)},format:function(e,r){var s,a=e?e.split("."):"",n="",o=a.length;for(s=0;s<o;s++)n+=("00"+a[s]).slice(-3);return e?t.formatFloat(n,r):e},type:"numeric"}),t.addParser({id:"url",is:function(e){return/^(https?|ftp|file):\/\//.test(e)},format:function(t){return t?e.trim(t.replace(/(https?|ftp|file):\/\//,"")):t},type:"text"}),t.addParser({id:"isoDate",is:function(e){return/^\d{4}[\/\-]\d{1,2}[\/\-]\d{1,2}/.test(e)},format:function(e,r){return e?t.formatFloat(""!==e?new Date(e.replace(/-/g,"/")).getTime()||e:"",r):e},type:"numeric"}),t.addParser({id:"percent",is:function(e){return/(\d\s*?%|%\s*?\d)/.test(e)&&e.length<15},format:function(e,r){return e?t.formatFloat(e.replace(/%/g,""),r):e},type:"numeric"}),t.addParser({id:"usLongDate",is:function(e){return/^[A-Z]{3,10}\.?\s+\d{1,2},?\s+(\d{4})(\s+\d{1,2}:\d{2}(:\d{2})?(\s+[AP]M)?)?$/i.test(e)||/^\d{1,2}\s+[A-Z]{3,10}\s+\d{4}/i.test(e)},format:function(e,r){return e?t.formatFloat(new Date(e.replace(/(\S)([AP]M)$/i,"$1 $2")).getTime()||e,r):e},type:"numeric"}),t.addParser({id:"shortDate",is:function(e){return/(^\d{1,2}[\/\s]\d{1,2}[\/\s]\d{4})|(^\d{4}[\/\s]\d{1,2}[\/\s]\d{1,2})/.test((e||"").replace(/\s+/g," ").replace(/[\-.,]/g,"/"))},format:function(e,r,s,a){if(e){var n=r.config,o=n.$headers.filter("[data-column="+a+"]:last"),i=o.length&&o[0].dateFormat||t.getData(o,t.getColumnData(r,n.headers,a),"dateFormat")||n.dateFormat;e=e.replace(/\s+/g," ").replace(/[\-.,]/g,"/"),"mmddyyyy"===i?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$1/$2"):"ddmmyyyy"===i?e=e.replace(/(\d{1,2})[\/\s](\d{1,2})[\/\s](\d{4})/,"$3/$2/$1"):"yyyymmdd"===i&&(e=e.replace(/(\d{4})[\/\s](\d{1,2})[\/\s](\d{1,2})/,"$1/$2/$3"))}return e?t.formatFloat(new Date(e).getTime()||e,r):e},type:"numeric"}),t.addParser({id:"time",is:function(e){return/^(([0-2]?\d:[0-5]\d)|([0-1]?\d:[0-5]\d\s?([AP]M)))$/i.test(e)},format:function(e,r){return e?t.formatFloat(new Date("2000/01/01 "+e.replace(/(\S)([AP]M)$/i,"$1 $2")).getTime()||e,r):e},type:"numeric"}),t.addParser({id:"metadata",is:function(){return!1},format:function(t,r,s){var a=r.config,n=a.parserMetadataName?a.parserMetadataName:"sortValue";return e(s).metadata()[n]},type:"numeric"}),t.addWidget({id:"zebra",priority:90,format:function(r,s,a){var n,o,i,d,c,l,u=new RegExp(s.cssChildRow,"i"),p=s.$tbodies;for(s.debug&&(c=new Date),l=0;l<p.length;l++)(n=p.eq(l)).children("tr").length>1&&(i=0,n.children("tr:visible").not(s.selectorRemove).each(function(){o=e(this),u.test(this.className)||i++,d=i%2==0,o.removeClass(a.zebra[d?1:0]).addClass(a.zebra[d?0:1])}));s.debug&&t.benchmark("Applying Zebra widget",c)},remove:function(t,r,s){var a,n,o=r.$tbodies,i=(s.zebra||["even","odd"]).join(" ");for(a=0;a<o.length;a++)(n=e.tablesorter.processTbody(t,o.eq(a),!0)).children().removeClass(i),e.tablesorter.processTbody(t,n,!1)}})}(jQuery)},KQgW:function(e,t,r){},M8Tw:function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),r("jJ4L"),r("KQgW"),r("fJ6+")},"fJ6+":function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var s=n(r("+x/D"));r("AqzS");var a=n(r("KloK"));function n(e){return e&&e.__esModule?e:{default:e}}var o={sortMultiSortKey:"",headers:{},debug:!1,tabIndex:!1};function i(e){var t=o;e.find("th").each(function(e,r){var a=(0,s.default)(r);t.headers[e]={},a.hasClass("aui-table-column-unsortable")?t.headers[e].sorter=!1:(a.attr("tabindex","0"),a.wrapInner("<span class='aui-table-header-content'/>"),a.hasClass("aui-table-column-issue-key")&&(t.headers[e].sorter="issue-key"))}),e.tablesorter(t)}var d={setup:function(){s.default.tablesorter.addParser({id:"issue-key",is:function(){return!1},format:function(e){var t=e.split("-"),r=t[0],s=t[1],a=(r+"..........").slice(0,"..........".length);return a+=("000000"+s).slice(-"000000".length)},type:"text"}),s.default.tablesorter.addParser({id:"textSortAttributeParser",is:function(e,t,r){return r.hasAttribute("data-sort-value")&&(!r.hasAttribute("data-sort-type")||"text"===r.getAttribute("data-sort-type"))},format:function(e,t,r){return r.getAttribute("data-sort-value")},type:"text"}),s.default.tablesorter.addParser({id:"numericSortAttributeParser",is:function(e,t,r){return"numeric"===r.getAttribute("data-sort-type")&&r.hasAttribute("data-sort-value")},format:function(e,t,r){return r.getAttribute("data-sort-value")},type:"numeric"}),(0,s.default)(".aui-table-sortable").each(function(){i((0,s.default)(this))})},setTableSortable:function(e){i(e)}};(0,s.default)(d.setup),(0,a.default)("tablessortable",d),t.default=d,e.exports=t.default}},[["M8Tw","runtime","aui.splitchunk.172ffb6da7","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.d49cf794d2","aui.splitchunk.336ae4f9e7","aui.splitchunk.fb15cffa72","aui.splitchunk.ed80e00f15","aui.splitchunk.b2ecdd4179","aui.splitchunk.16f099a0da"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'templates/tasks-report.soy' */
// This file was automatically generated from tasks-report.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.InlineTasks.Report.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.InlineTasks == 'undefined') { Confluence.InlineTasks = {}; }
if (typeof Confluence.InlineTasks.Report == 'undefined') { Confluence.InlineTasks.Report = {}; }
if (typeof Confluence.InlineTasks.Report.Templates == 'undefined') { Confluence.InlineTasks.Report.Templates = {}; }


Confluence.InlineTasks.Report.Templates.tasksReport = function(opt_data, opt_ignored) {
  var output = '<div class="table-wrapper" data-loading="false"><div class="task-blanket"></div><input type="hidden" name="reportParameters" value="' + soy.$$escapeHtml(opt_data.reportParameters) + '" /><table class="aui aui-table-interactive tasks-report" data-sortable="false" data-total-pages="' + soy.$$escapeHtml(opt_data.totalPages) + '" data-page-size="' + soy.$$escapeHtml(opt_data.pageSize) + '" data-adaptive="' + soy.$$escapeHtml(opt_data.adaptive) + '" data-page-limit="' + soy.$$escapeHtml(opt_data.pageLimit) + '"><thead><tr class="tablesorter-headerRow">';
  var headingList14 = opt_data.headings;
  var headingListLen14 = headingList14.length;
  for (var headingIndex14 = 0; headingIndex14 < headingListLen14; headingIndex14++) {
    var headingData14 = headingList14[headingIndex14];
    output += '<th class="header-' + soy.$$escapeHtml(headingData14) + ((headingData14 == 'description') ? ' aui-table-column-unsortable' : '') + '" data-column-name="' + soy.$$escapeHtml(headingData14) + '">' + soy.$$escapeHtml(opt_data.headingTexts[headingData14]) + '</th>';
  }
  output += '</tr></thead><tbody>';
  if (opt_data.tasks.length) {
    var taskList29 = opt_data.tasks;
    var taskListLen29 = taskList29.length;
    for (var taskIndex29 = 0; taskIndex29 < taskListLen29; taskIndex29++) {
      var taskData29 = taskList29[taskIndex29];
      output += Confluence.InlineTasks.Report.Templates.tasksReportLine({task: taskData29, columns: opt_data.headings});
    }
  } else {
    output += '<tr><td colspan="' + soy.$$escapeHtml(opt_data.headings.length) + '">' + soy.$$escapeHtml('Create a task list in a Confluence page to keep track of things you need to do.') + '</td></tr>';
  }
  output += '</tbody></table></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksReport.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksReport';
}


Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification = function(opt_data, opt_ignored) {
  return '<h2>' + soy.$$escapeHtml('Hey! Did you know...') + '</h2><p>' + soy.$$escapeHtml('You can view the tasks you created, or assigned to you, in the tasks tabs of your profile.') + '</p>';
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification';
}


Confluence.InlineTasks.Report.Templates.tasksReportLine = function(opt_data, opt_ignored) {
  var output = '<tr data-task-id="' + soy.$$escapeHtml(opt_data.task.taskId) + '" aria-disabled="false">';
  var columnList51 = opt_data.columns;
  var columnListLen51 = columnList51.length;
  for (var columnIndex51 = 0; columnIndex51 < columnListLen51; columnIndex51++) {
    var columnData51 = columnList51[columnIndex51];
    if (columnData51 == 'duedate') {
      output += '<td class=\'tasks-report-date\'>' + ((opt_data.task.dueDate) ? soy.$$escapeHtml(opt_data.task.dueDate) : '') + '</td>';
    } else if (columnData51 == 'description') {
      output += '<td>' + soy.$$filterNoAutoescape(opt_data.task.taskHtml) + '</td>';
    } else if (columnData51 == 'assignee') {
      output += '<td class=\'tasks-report-assignee\'>' + ((opt_data.task.assigneeUserName) ? Confluence.Templates.User.usernameLink({username: opt_data.task.assigneeUserName, fullName: opt_data.task.assigneeFullName, canView: false}) : '') + '</td>';
    } else if (columnData51 == 'location') {
      output += '<td><a class=\'task-location\' href="' + soy.$$escapeHtml("/confluence") + soy.$$escapeHtml(opt_data.task.pageUrl) + '">' + soy.$$escapeHtml(opt_data.task.pageTitle) + '</a></td>';
    } else if (columnData51 == 'completedate') {
      output += '<td class=\'tasks-report-date\'>' + ((opt_data.task.completeDate) ? soy.$$escapeHtml(opt_data.task.completeDate) : (opt_data.task.taskCompleted) ? '<span class="emptycompletedate">--</span>' : '') + '</td>';
    } else if (columnData51 == 'labels') {
      output += '<td>';
      var labelList90 = opt_data.task.labels;
      var labelListLen90 = labelList90.length;
      for (var labelIndex90 = 0; labelIndex90 < labelListLen90; labelIndex90++) {
        var labelData90 = labelList90[labelIndex90];
        output += aui.labels.label({text: labelData90});
      }
      output += '</td>';
    }
  }
  output += '</tr>';
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.tasksReportLine.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.tasksReportLine';
}


Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning = function(opt_data, opt_ignored) {
  var param98 = '<p>' + soy.$$escapeHtml('Unable to show this task report.') + '</p>';
  var messageList102 = opt_data.messages;
  var messageListLen102 = messageList102.length;
  for (var messageIndex102 = 0; messageIndex102 < messageListLen102; messageIndex102++) {
    var messageData102 = messageList102[messageIndex102];
    param98 += '<p>' + soy.$$escapeHtml(messageData102) + '</p>';
  }
  var output = '' + aui.message.warning({content: param98});
  return output;
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.taskReportBrowserWarning';
}


Confluence.InlineTasks.Report.Templates.taskReportWarning = function(opt_data, opt_ignored) {
  return '' + aui.message.warning({content: '<p>' + soy.$$escapeHtml('Unable to show the task report. Edit this page to resolve the issues.') + '</p>'});
};
if (goog.DEBUG) {
  Confluence.InlineTasks.Report.Templates.taskReportWarning.soyTemplateName = 'Confluence.InlineTasks.Report.Templates.taskReportWarning';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report-blank-exp.js' */
(function(b){Confluence.InlineTasks=Confluence.InlineTasks||{};Confluence.InlineTasks.TasksReport=Confluence.InlineTasks.TasksReport||{};var a={"blank.complete.title":"Task report","blank.complete.desc":"Get going, no tasks completed yet.","blank.incomplete.title":"Task report","blank.incomplete.desc":"Looking good, no incomplete tasks."};Confluence.InlineTasks.TasksReport.renderBlankExperiences=function(g,c){if(!c){c="incomplete"}var f=a["blank."+c+".title"],e=a["blank."+c+".desc"];var d=Confluence.UI.Components.BlankPlaceholderBox.Templates.blankBox({blankTitle:f,blankDescription:e,customClass:c+" tasks-report-blank"});g.html(d)}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-report-resources', location = 'js/tasks-report.js' */
AJS.$(function(c){var b="/rest/inlinetasks/1/task-report/",a=Confluence.InlineTasks.Report.Templates,e=Confluence.InlineTasks.TasksTableSortable;var d=c(".tasks-report").parent();_.each(d,function(i){var l=c(i),n=l.find("table.tasks-report"),m=n.data("page-size"),k=n.data("total-pages"),f=n.data("page-limit"),q=n.data("adaptive"),p=l.find("input[name=reportParameters]").val(),g=JSON.parse(p);var o=function(r,s){c(r).attr("aria-disabled",s)};AJS.bind("inline-tasks.status-update.start",function(t,s){if(s.taskListQueue.length>0){var r=c("li[data-inline-task-id="+s.taskId+"]").closest(".tasks-report").siblings(".macro-auto-pagination");o(r,true);r=r.find("li a");r.on("click.taskreport.pagination",function(u){u.preventDefault();u.stopPropagation()})}});AJS.bind("inline-tasks.status-update.complete",function(s,r){if(r.taskListQueue.length===0){o(".macro-auto-pagination",false);c(".macro-auto-pagination li a").off("click.taskreport.pagination")}});var j=n.closest(".table-wrapper");var h=new e({$wrapper:j,table:n[0],sortReverseSortDefault:g.reverseSort,sortColumnDefault:e.getColumnNameFromSortBy(g.sortColumn),reportParametersDefault:g,pageIndex:0,pageSize:m,pageTotal:k,adaptive:q,pageLimit:f,templates:a,columns:g.columns,onRenderEmptyTable:function(){Confluence.InlineTasks.TasksReport.renderBlankExperiences(j,g.status)},analyticEventKey:"confluence-spaces.tasks.report.sorted",restUrlPagination:b,ajaxUrl:Confluence.getContextPath()+b});h.init();if(q||k>1){h.renderPagination()}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'js/help-tip.js' */
(function(f){function b(){return false}function d(){return true}var l=0,g=new Date().getTime();var k=AJS.contextPath()+"/rest/helptips/1.0/tips";function h(n){n=""+(n||"");return n.replace(/\./g,"-")}function j(o,n){if(AJS.EventQueue&&n&&n.attributes.id){var q={};var p=h(n.attributes.id);q.name="helptips."+p+"."+o;q.properties={};AJS.EventQueue.push(q)}}function c(){return"c"+g+(l++)}var a={dismissedTipIds:[],loaded:f.Deferred(),url:function(){return k},sync:function(o,n){o||(o="get");n||(n=null);return f.ajax(this.url(),{type:o,context:this,dataType:"json",contentType:"application/json",data:n&&JSON.stringify(n),processData:false}).promise()},fetch:function(){var n=this.sync();n.done(function(o){f.merge(this.dismissedTipIds,o);this.loaded.resolve()});return n.promise()},show:function(n){this.loaded.done(n)},dismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=true}else{this.dismissedTipIds.push(o);this.sync("post",{id:o})}},undismiss:function(n){var o=n.attributes.id;if(!o){n._dismissed=false}else{this.dismissedTipIds.splice(f.inArray(o,this.dismissedTipIds),1);this.sync("delete",{id:o})}},isDismissed:function(n){var o=n.attributes.id;return(o)?f.inArray(o,this.dismissedTipIds)>=0:n._dismissed}};var e=AJS.HelpTip=function(n){var o;this.attributes=f.extend({},n);this.attributes.id||(this.attributes.id=false);if(this.attributes.body){this.attributes.bodyHtml=this.attributes.body;delete this.attributes.body}this.cid=c();o=this.attributes.anchor;delete this.attributes.anchor;this.view=o?new i(this,o):new m(this);this.view.$el.addClass("aui-help-tip")};AJS.HelpTip.Manager=a;f.extend(e.prototype,{show:function(){var n=this;AJS.HelpTip.Manager.show(function(){if(!n.isDismissed()){if(AJS.Popups&&AJS.Popups.DisplayController){AJS.Popups.DisplayController.request({name:n.id,weight:1000,show:function(){n.view.show()}})}else{n.view.show()}j("shown",n)}})},dismiss:function(){var n=h(arguments[0]||"programmatically");this.view.dismiss();if(!this.isDismissed()){AJS.HelpTip.Manager.dismiss(this);j("dismissed."+n,this)}},isVisible:function(){return this.view.$el.is(":visible")},isDismissed:function(){return AJS.HelpTip.Manager.isDismissed(this)}});var i=function(o,n){this.initialize(o,n)};f.extend(i.prototype,{initialize:function(r,q){var o=this;var s=q.prop("ownerDocument");var p=s!=window.document;if(p){var n=f("iframe").filter(function(){return this.contentDocument==s});n.contents().scroll(function(){var v=f(this).contents().find("body").scrollTop();var w=n.offset().top;var u=o.popup.data("offset-top");var t=o.popup.find(".arrow").height();o.popup.css("top",u-v);o.popup.toggle(v<=u-w-t&&v+n.height()-t+w-o.popup.height()>=u)})}this.model=r;this.beforeHide=b;this.dismissButton=f(AJS.Templates.HelpTip.tipDismiss());this.dismissButton.click(function(t){r.dismiss("close-button");t.preventDefault()});this.popup=AJS.InlineDialog(q,r.cid,function(v,u,t){v.html(AJS.Templates.HelpTip.tipContent(r.attributes));v.find(".helptip-body").after(o.dismissButton);v.unbind("mouseover mouseout");v.find(".helptip-link").click(function(){j("learn-more.clicked",r)});t()},{container:"body",noBind:true,preHideCallback:function(){return o.beforeHide()},calculatePositions:function(t,y,z,x){var w=AJS.InlineDialog.opts.calculatePositions(t,y,z,x);if(p){var v=t.find(".arrow").height();var u=n.contents().find("body").scrollTop();w.popupCss.top=n.offset().top+(q.offset().top-u)+q.height()+v;w.popupCss.left=q.offset().left;n.contents().scroll()}t.data("offset-top",w.popupCss.top);return w}});this.popup.refresh();this._popupHide=this.popup.hide;this.popup.hide=b;this.$el=f(this.popup[0]);AJS.$(document).bind("showLayer",function(v,u,t){if(u==="inlineDialog"&&t.id===r.cid){AJS.InlineDialog.current=null;AJS.$(document.body).unbind("click."+r.cid+".inline-dialog-check");t._validateClickToClose=b;t.hide=b}})},show:function(){var n=this.popup,o=function(p){if(!n.has(p.target).length){n.shadow.remove();n.remove()}};n.show()},dismiss:function(){this.beforeHide=d;this._popupHide()}});var m=function(n){this.initialize(n)};f.extend(m.prototype,{initialize:function(){this.$el=f("<div />")},show:f.noop,dismiss:f.noop});if(AJS.Meta.get("remote-user")){a.fetch()}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-help-tips:common', location = 'templates/help-tip.soy' */
// This file was automatically generated from help-tip.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace AJS.Templates.HelpTip.
 */

if (typeof AJS == 'undefined') { var AJS = {}; }
if (typeof AJS.Templates == 'undefined') { AJS.Templates = {}; }
if (typeof AJS.Templates.HelpTip == 'undefined') { AJS.Templates.HelpTip = {}; }


AJS.Templates.HelpTip.tipContent = function(opt_data, opt_ignored) {
  return ((opt_data.title) ? '<h4 class="helptip-title">' + soy.$$escapeHtml(opt_data.title) + '</h4>' : '') + '<div class="helptip-body">' + soy.$$filterNoAutoescape(opt_data.bodyHtml) + '</div>' + ((opt_data.url) ? '<a class="helptip-link" href="' + soy.$$escapeHtml(opt_data.url) + '" target="_blank">' + soy.$$escapeHtml('Learn more') + '</a>' : '');
};
if (goog.DEBUG) {
  AJS.Templates.HelpTip.tipContent.soyTemplateName = 'AJS.Templates.HelpTip.tipContent';
}


AJS.Templates.HelpTip.tipDismiss = function(opt_data, opt_ignored) {
  return '<button class="helptip-dismiss aui-button" type="button">' + soy.$$escapeHtml('Dismiss') + '</button>';
};
if (goog.DEBUG) {
  AJS.Templates.HelpTip.tipDismiss.soyTemplateName = 'AJS.Templates.HelpTip.tipDismiss';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-inline-tasks:tasks-feature-discovery-resources', location = 'js/tasks-discovery.js' */
(function(d){var c="com.atlassian.confluence.plugins.confluence-jira-metadata";var b="inline-tasks-flag";function a(){if(!!AJS.HelpTip){var e={id:null,body:Confluence.InlineTasks.Report.Templates.tasksFeatureDiscoveryNotification(),anchor:d("#user-menu-link")};var f=new AJS.HelpTip(e);AJS.trigger("analyticsEvent",{name:"confluence-spaces.tasks.feature.discovery.shown"});f.show();Confluence.FeatureDiscovery.forPlugin(c).markDiscovered(b)}}d(function(){if(d("meta[name=show-task-feature-discovery-flag]").length>0&&Confluence.FeatureDiscovery.forPlugin(c).shouldShow(b)){a()}})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/confluence-amd.js' */
define("confluence",function(){return Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-amd-resources', location = '/js/amd/tinymce-amd.js' */
define("tinymce",function(){return tinymce});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/view-file-macro-utils.js' */
define("vfm/view-file-macro-utils",[],function(){var a={DEFAULT_HEIGHT:"250",DEFAULT_HEIGHT_IN_COMMENT:"150",THUMBNAIL_STATUS_IN_PROGRESS:202,THUMBNAIL_STATUS_CONVERTED:200,THUMBNAIL_STATUS_ERROR:415,THUMBNAIL_STATUS_BUSY:429,THUMBNAIL_POLLING_PERIOD:1000,THUMBNAIL_POLLING_BACKOFF_RATIO:1.25,MAP_NICE_TYPE_TO_TEXT:{"pdf document":"PDF","word document":"Document","excel spreadsheet":"Spreadsheet","powerpoint presentation":"Presentation","generic file":"File"},getFileNameFromUrl:function(b){if(!b){return""}var c=b.indexOf("#");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.indexOf("?");c=(c>=0)?c:b.length;b=b.substring(0,c);c=b.lastIndexOf("/");b=b.substring(c+1,b.length);return decodeURIComponent(b)},isSupportPointerEvents:function(){var b=document.createElement("x");b.style.cssText="pointer-events:auto";return b.style.pointerEvents==="auto"},getParameterByName:function(d,c){var e=d.indexOf("#");if(e>=0){d=d.substring(0,e)}var b=new RegExp(c+"=([^&]*)","i").exec(d);return b?decodeURIComponent(b[1]):null},addParamsToUrl:function(b,h){var f="";if(b.indexOf("?")===-1){f="?"}else{f="&"}var e=Object.keys(h);for(var d=0;d<e.length;d++){var c=e[d];var g=h[c];if(d>0){f+="&"}f+=c+"="+g}return b+f},getFileTypeTextFromNiceType:function(b){b=b?b.toLowerCase():"";return this.MAP_NICE_TYPE_TO_TEXT[b]?this.MAP_NICE_TYPE_TO_TEXT[b]:b}};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:common', location = '/js/services/conversion-service.js' */
define("vfm/services/conversion-service",["ajs","jquery"],function(a,b){return{postThumbnailConversionResults:function(c){var d=a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/results";var e=Object.keys(c);var f=_.map(e,function(g){return{id:g,v:c[g].version}});return b.ajax({type:"POST",url:d,contentType:"application/json",data:JSON.stringify(f)})},getThumbnailUrl:function(d,c){return a.contextPath()+"/rest/documentConversion/latest/conversion/thumbnail/"+d+"/"+c}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:file-types-utils-resources', location = 'utils/file-types-utils.js' */
define("confluence-editor/utils/file-types-utils",[],function(){var e={"aui-iconfont-file-image":"image/gif image/jpeg image/pjpeg image/png image/tiff image/bmp".split(" "),"aui-iconfont-file-pdf":["application/pdf"],"aui-iconfont-file-video":"audio/mpeg audio/x-wav audio/mp3 audio/mp4 video/mpeg video/quicktime video/mp4 video/x-m4v video/x-flv video/x-ms-wmv video/avi video/webm video/vnd.rn-realvideo".split(" "),"aui-iconfont-file-code":"text/html text/xml text/javascript application/javascript application/x-javascript text/css text/x-java-source".split(" "),
"aui-iconfont-file-doc":["application/msword","application/vnd.openxmlformats-officedocument.wordprocessingml.document"],"aui-iconfont-file-xls":["application/vnd.ms-excel","application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"],"aui-iconfont-file-ppt":["application/vnd.ms-powerpoint","application/vnd.openxmlformats-officedocument.presentationml.presentation"],"aui-iconfont-file-txt":["text/plain"],"aui-iconfont-file-zip":["application/zip","application/java-archive"]},b={},c;for(c in e)for(var f=
e[c],d=0,g=f.length;d<g;d++)b[f[d]]=c;return{getAUIIconFromMime:function(a){return b[a]||"aui-iconfont-file-generic"},isImage:function(a){return b[a]&&0===a.indexOf("image/")}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/utils/file-types-utils","AJS.Confluence.FileTypesUtils");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-soy-resources', location = '/templates/embedded-file-view.soy' */
// This file was automatically generated from embedded-file-view.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.ViewFileMacro.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.ViewFileMacro == 'undefined') { Confluence.ViewFileMacro = {}; }
if (typeof Confluence.ViewFileMacro.Templates == 'undefined') { Confluence.ViewFileMacro.Templates = {}; }


Confluence.ViewFileMacro.Templates.embeddedFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><a class="confluence-embedded-file" href="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-nice-type="' + soy.$$escapeHtml(opt_data.niceType) + '" data-file-src="' + soy.$$escapeHtml(opt_data.fileSrc) + '" data-linked-resource-id="' + soy.$$escapeHtml(opt_data.attachmentId) + '" data-linked-resource-type="attachment" data-linked-resource-container-id="' + soy.$$escapeHtml(opt_data.containerId) + '" data-linked-resource-default-alias="' + soy.$$escapeHtml(opt_data.fileName) + '" data-mime-type="' + soy.$$escapeHtml(opt_data.mimeType) + '" data-has-thumbnail="' + ((opt_data.hasThumbnail) ? 'true' : 'false') + '" data-linked-resource-version="' + soy.$$escapeHtml(opt_data.attachmentVersion) + '"' + ((opt_data.unresolvedCommentCount && opt_data.unresolvedCommentCount >= 0) ? 'data-unresolved-comment-count=' + soy.$$escapeHtml(opt_data.unresolvedCommentCount) : '') + '><img src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" height="' + soy.$$escapeHtml(opt_data.height) + '" />' + ((! opt_data.hasThumbnail) ? '<span class="title">' + soy.$$escapeHtml(opt_data.fileName) + '</span>' : '') + '</a></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedFile';
}


Confluence.ViewFileMacro.Templates.embeddedUnknownFile = function(opt_data, opt_ignored) {
  return '<span class="confluence-embedded-file-wrapper"><img class="confluence-embedded-file unknown-attachment" src="' + soy.$$escapeHtml(opt_data.placeholderSrc) + '" /></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.embeddedUnknownFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.embeddedUnknownFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFile = function(opt_data, opt_ignored) {
  return '<span class="overlay"></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFile.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFile';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount = function(opt_data, opt_ignored) {
  return '<span class="comment-count-overlay"><span class="content">' + soy.$$escapeHtml(opt_data.commentCountRep) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount';
}


Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc = function(opt_data, opt_ignored) {
  return '<span class="file-type-desc-overlay"><i class="aui-icon aui-icon-small ' + soy.$$escapeHtml(opt_data.iconClass) + '"></i><span class="content"> ' + soy.$$escapeHtml(opt_data.fileType) + '</span></span>';
};
if (goog.DEBUG) {
  Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc.soyTemplateName = 'Confluence.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/services/file-service.js' */
define("vfm/services/file-service",["ajs","jquery"],function(a,b){return{getCommentCount:function(c,e){var d="/rest/files/1.0/files/content/{0}/commentCount?attachmentId={1}";d=a.contextPath()+a.format(d,c,e);return b.get(d)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-embedded-file-view-resources', location = '/js/components/embedded-file-view.js' */
define("vfm/components/embedded-file-view",["jquery","backbone","ajs","confluence/legacy","vfm/view-file-macro-utils"],function(c,g,f,h,i){function b(s){var r=c(s.el);var q=r.find(".confluence-embedded-image, .confluence-embedded-file");if(q.hasClass("unknown-attachment")||(q.attr("src")&&q.attr("src").indexOf("/confluence/plugins/servlet/confluence/placeholder/unknown-attachment")>=0)){return this}var j={mimeType:"",niceType:""};var k=q.hasClass("confluence-embedded-image");var o=r.parent().is("a");var m=q.attr("data-has-thumbnail")==="true";if(k){j.mimeType="image/png"}else{j.mimeType=q.attr("data-mime-type");j.niceType=q.attr("data-nice-type")!=="null"?q.attr("data-nice-type"):"generic file"}var p=!o?e(q):"";var l=(!k&&m)?a(j):"";if(p||l){var n=h.ViewFileMacro.Templates.overlayEmbeddedFile();r.append(c(n).append(p).append(l));if(l){r.addClass("has-comment-overlay")}}}var d=function(j){j=parseInt(j,10);j=c.isNumeric(j)?j:0;return j>9?"9+":j+""};var e=function(o){var j="",k=o.attr("data-linked-resource-container-id"),m=o.attr("data-linked-resource-id");if(k&&m){var n=o.attr("data-unresolved-comment-count");var l=d(n);if(l!=="0"){j=h.ViewFileMacro.Templates.overlayEmbeddedFileCommentCount({commentCountRep:l})}}return j};var a=function(j){return h.ViewFileMacro.Templates.overlayEmbeddedFileFileTypeDesc({fileType:i.getFileTypeTextFromNiceType(j.niceType),iconClass:f.Confluence.FileTypesUtils.getAUIIconFromMime(j.mimeType)})};return{render:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-view-file-macro:view-file-macro-resources', location = '/js/vfm.js' */
require(["jquery","ajs","vfm/components/embedded-file-view"],function(c,a,b){c(document).on("click",".confluence-embedded-file.unknown-attachment",function(d){d.preventDefault()});a.toInit(function(){c(".confluence-embedded-file-wrapper").each(function(){b.render({el:this})})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.editor:editor-core-resources', location = 'loader/profiles.js' */
define("confluence-editor/profiles",["jquery","ajs"],function(d,c){return{createProfileForCommentEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavecomment confluencewatch autoresize".split(" ")}},createProfileForPageEditor:function(a){var b="searchreplace confluencedrafts confluenceimagedialog autocompletemacro confluencemacrobrowser flextofullsize referrer".split(" ");c.Meta.getBoolean("shared-drafts")&&c.DarkFeatures.isEnabled("unpublished-changes-lozenge")&&
b.push("unpublishedchanges");a&&a.versionComment&&b.push("confluenceversioncomment");a&&a.notifyWatchers&&b.push("confluencenotifywatchers");return{plugins:b}},createProfileForTemplateEditor:function(){return{plugins:"searchreplace confluenceimagedialog autocompletemacro confluencemacrobrowser confluenceleavetemplate flextofullsize confluencetemplateeditor".split(" ")}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-editor/profiles","AJS.Confluence.Editor._Profiles");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-util', location = 'jscripts/util.js' */
define("confluence-quick-edit/util",["window","ajs"],function(c,d){return{generateUUID:function(){var a=function(){return Math.floor(65536*(1+Math.random())).toString(16).substring(1)};return a()+a()+"-"+a()+"-"+a()+"-"+a()+"-"+a()+a()+a()},getBaseUrl:function(){var a=c.location.protocol.replace(/:$/,"")+"://"+c.location.host+"/"+c.location.pathname.replace(/^\//,""),b=c.location.search.replace(/^\?/,""),b=b.replace(/&?focusedCommentId=\d+/,""),b=b.replace(/^&/,"");return{url:a,search:b,addQueryParam:function(a,
b){this.search=this.search?this.search+"&"+a+"="+b:a+"="+b},toString:function(){return this.url+"?"+this.search}}},timeoutDeferred:function(a,b,c){"function"!==typeof b.reject&&d.log("WARNING: invalid, not rejectable object passed to AJS.Confluence.QuickEdit.Util.timeoutDeferred. You should use a Deferred object");setTimeout(function(){"pending"===b.state()&&(d.logError("Timeout: "+a),b.reject("timeout"))},c);return b}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/util","AJS.Confluence.QuickEdit.Util");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:querystring', location = '/includes/js/api/querystring.js' */
define("confluence/api/querystring",[],function(){return{stringify:function(a){var b="",c;for(c in a)for(var d=0;d<a[c].length;d++)b+="&"+c,a[c][d]&&(b+="="+a[c][d]);return b.substring(1)},parse:function(a){var b={};if(a){"?"===a.substr(0,1)&&(a=a.substr(1));for(var a=a.split("&"),c=0;c<a.length;c++){var d=a[c].split("=");b[d[0]]||(b[d[0]]=[]);b[d[0]].push(a[c].substring(d[0].length+1))}}return b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:url', location = '/includes/js/api/url.js' */
define("confluence/api/url",["confluence/api/querystring","jquery"],function(d,e){var g=/([^?|#]+)[?]?([^#]*)[#]?(.*)/,f=["source","urlPath","queryParams","anchor"];return{parse:function(a){var b={};if(a=g.exec(a)){for(var c=0;c<f.length;c++)b[f[c]]=a[c];b.queryParams=d.parse(b.queryParams)}return b},format:function(a){return e.isEmptyObject(a)?"":(!a.urlPath?"":a.urlPath)+(e.isEmptyObject(a.queryParams)?"":"?"+d.stringify(a.queryParams))+(!a.anchor?"":"#"+a.anchor)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:analytics-support', location = '/includes/js/analytics-support.js' */
define("confluence/analytics-support","jquery ajs confluence/meta window document confluence/api/url".split(" "),function(j,o,l,k,m,h){var b={},n;b.setAnalyticsSource=function(a,d){if(typeof n==="undefined"){var c=j._data(k,"events");n=c&&c.analytics&&c.analytics.length>0}n&&a.attr("href",function(a,c){var b=encodeURIComponent(d),g=h.parse(c);if(!j.isEmptyObject(g))g.queryParams.src=[b];return h.format(g)})};b.srcRemovedUrl=function(a){a=h.parse(a);delete a.queryParams.src;for(var d=Object.keys(a.queryParams),
c=0;c<d.length;c++){var b=d[c],f=b.split(".");f.length===3&&f[0]==="src"&&delete a.queryParams[b];b==="jwt"&&delete a.queryParams[b]}return h.format(a)};b.srcParamValues=function(a){return(a=h.parse(a).queryParams)&&a.src?a.src:[]};b.srcAttrParamValues=function(a){for(var a=h.parse(a).queryParams,b={},c=Object.keys(a),e=0;e<c.length;e++){var f=c[e],i=f.split(".");if(i.length===3&&i[0]==="src"){var g=i[1],i=i[2];b[g]=b[g]||{};b[g][i]=decodeURIComponent(a[f][0])}}return b};b.extractAnalyticsData=function(a){for(var d=
[],c=b.srcParamValues(a),a=b.srcAttrParamValues(a),e=0;e<c.length;e++){var f=c[e];d.push({src:f,attr:a[f]||{}})}return d};b.publish=function(a,b){o.trigger("analytics",{name:a,data:b||{}})};b.init=function(){var a=b.extractAnalyticsData(m.URL),d={userKey:l.get("remote-user-key"),pageID:l.get("page-id"),draftID:l.get("draft-id")};if(a.length>0){for(var c=0;c<a.length;c++){var e=a[c],f=j.extend({},d,e.attr);b.publish("confluence.viewpage.src."+e.src,f)}if(k.history&&k.history.replaceState){a=b.srcRemovedUrl(m.URL);
m.URL!==a&&k.history.replaceState(null,"",a)}}else b.publish("confluence.viewpage.src.empty",d)};return b});require("confluence/module-exporter").exportModuleAsGlobal("confluence/analytics-support","AJS.Confluence.Analytics",function(j){require("ajs").toInit(j.init)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/captcha-manager.js' */
define("confluence-quick-edit/captcha-manager",["jquery","ajs"],function(d,e){return function(f){function a(a){return d(f||"body").find(a)}return{refreshCaptcha:function(){var b=a("img.captcha-image");if(0<b.length){var c=Math.random();b.attr("src",e.contextPath()+"/jcaptcha?id="+c);a('input[name="captchaId"]').val(c);a('input[name="captchaResponse"]').val("")}},getCaptchaData:function(){return{id:a('input[name="captchaId"]').val(),response:a('input[name="captchaResponse"]').val()}}}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/captcha-manager","AJS.Confluence.QuickEditCaptchaManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/quick-edit.js' */
define("confluence-quick-edit/quick-edit","ajs confluence-editor-loader/block-and-buffer-keys confluence/legacy confluence/templates confluence/meta jquery window document confluence-editor-loader/editor-loader confluence/api/event confluence/api/logger confluence-quick-edit/captcha-manager confluence-quick-edit/util wrm".split(" "),function(i,u,e,r,j,a,v,w,o,c,g,k,x,y){function z(){var b=new a.Deferred;o.load(function(){setTimeout(function(){b.resolve()},0)},function(){b.reject()});return b}var s=
{enableShortcut:function(){a("#editPageLink").addClass("full-load")},disableShortcut:function(){a("#editPageLink").removeClass("full-load")}},l=[],q={loadingContentTimeout:4E3,register:function(b){l.push(b)},disableHandlers:function(){a.each(l,function(b,a){return a.disable()})},enableHandlers:function(){a.each(l,function(b,a){return a.enable()})},SaveBarBinder:{bind:function(b,a){b&&e.Editor.addSaveHandler(b);a&&e.Editor.addCancelHandler(a)}},activateEditor:function(b){function e(){function f(b){var c=
new a.Deferred;y.require(b).done(function(b){c.resolve(b)}).fail(function(b){c.reject(b)});return c}var l,m=new a.Deferred;if(j.get("access-mode")==="READ_ONLY"){g.logError("activateEditor could not be initialised: Read-only mode is enabled");return m.reject("READ_ONLY")}if(i.Rte&&i.Rte.getEditor()){g.debug("there is already an editor open");return m.reject("EDITOR_OPEN")}if(!b.$container||!b.$form){g.logError("activateEditor could not be initialised: bad arguments",b);return m.reject("BAD_ARGS")}l=
u.block(a(w));b.preActivate&&b.preActivate();s.disableShortcut();var t=b.timeoutResources||o.loadingTimeout,k=q.loadingContentTimeout,n=x.timeoutDeferred;a.when(n("resources",z(),t),n("fetch content",b.fetchContent||a.Deferred().resolve(),k),n("additional resources",b.additionalResources?f(b.additionalResources):a.Deferred().resolve(),t)).done(function(e,f){var d={$container:b.$container,content:f,$form:b.$form,replayBufferedKeys:l};b.preInitialise&&b.preInitialise(d);var h=o.getPreloadContainer();
a(".quick-comment-prompt",d.$container).hide();a(".quick-comment-body",d.$container).addClass("comment-body");if(d.content&&d.content.title){var p=d.content.title;h.find("#content-title").val(p)}d.$form.append(h.children());h.show();a("#editor-precursor").hide();a("#rte-savebar").find(".toolbar-split-left").hide();if(j.get("content-type")==="comment"){a("#pluggable-status").hide();var h=r.Editor.Page.cancelButton({contentType:j.get("content-type"),sharedDraftsEnabled:j.getBoolean("shared-drafts")}),
p=a("#rte-button-cancel"),k=p.parent(".rte-toolbar-group-done");if(k.length){k.remove();a("#rte-button-discard").remove()}else p.remove();a("#rte-savebar").find(".toolbar-split-right").append(h);h=r.Editor.Page.previewButton({});a("#rte-button-ellipsis").parent().remove();a("#rte-savebar").find(".toolbar-group-preview").empty().append(h)}var n=function(){d.editor=i.Rte.getEditor();d.$container.find(".quick-comment-loading-container").hide();d.$form.show();d.$form.addClass("fadeIn");var a=d.editor,
e=d.content?d.content.editorContent:"",f=d.replayBufferedKeys;if(e){g.debug("Initial Editor Content from quick edit: ",e);a.setContent(e);a.startContent=a.getContent({format:"raw",no_events:1});a.undoManager.clear()}f()&&a.undoManager.add();c.trigger("quickedit.success");c.trigger("quickedit.visible");c.trigger("add-bindings.keyboardshortcuts");c.trigger("active.dynamic.rte");b.postInitialise&&b.postInitialise(d);q.SaveBarBinder.bind(b.saveHandler,b.cancelHandler);c.trigger("rte-quick-edit-ready");
a=j.get("content-type");j.get("collaborative-content")&&(a==="page"||a==="blogpost")&&c.trigger("rte-collab-editor-loaded");c.unbind("rte-ready",n);m.resolve()};c.bind("rte-ready",n);c.bind("rte-destroyed",b.postDeactivate||function(){});i.Rte.BootstrapManager.initialise({plugins:b.plugins,toolbar:b.toolbar,excludePlugins:b.excludePlugins,isQuickEdit:true,onInitialise:b.onInitialise})}).fail(function(a,e){m.reject(a,e);g.logError("Error loading page quick edit. Falling back to normal edit URL...");
c.trigger("analytics",{name:"rte.quick-edit.activate-editor.failed"});if(b.fallbackUrl){g.log("This parameter is deprecated. To be removed in the next major version (5.8 or 6.0). Please use the promise returned to bind custom action if the editor fails to load instead.");v.location=b.fallbackUrl}});return m.promise()}if(b.closeAnyExistingEditor&&i.Rte&&i.Rte.getEditor()){var f=new a.Deferred;this.deactivateEditor().done(function(){e().done(function(){f.resolve()}).fail(function(a){f.reject(a)})}).fail(function(){g.debug("Could not deactivate current editor.");
f.reject("Could not deactivate current editor.")});return f.promise()}return e()},deactivateEditor:function(){require("tinymce").majorVersion>=4?require("tinymce").execCommand("mceRemoveEditor",true,"wysiwygTextarea"):require("tinymce").execCommand("mceRemoveControl",true,"wysiwygTextarea");e.Editor.UI.toggleSavebarBusy(false);var b=o.getPreloadContainer().empty();a(".editor-container").remove();a("#editor-precursor").remove();a("#anonymous-warning").remove();a(".quick-comment-prompt").show();a(".bottom-comment-panels").show();
a("#editor-notification-container").empty();a(".action-reply-comment").removeAttr("reply-disabled");s.enableShortcut();e.Editor.removeAllSaveHandlers();e.Editor.removeAllCancelHandlers();return o.getEditorPreloadMarkup().done(function(a){b.append(a);b.hide();(new k(b)).refreshCaptcha();c.trigger("rte-destroyed");c.unbind("rte-destroyed")})}};return q});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/quick-edit","AJS.Confluence.QuickEdit");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/view.js' */
define("confluence-quick-edit/handlers/view",["jquery","ajs","window"],function(c,d,e){return function(){var a;sessionStorage.viewPort&&(a=JSON.parse(sessionStorage.viewPort));if(a&&a.pageId==d.params.pageId){var b;b=c("#main-content");var f=c("#header");b=-1!==a.blockIndex?b.children().first().children().eq(a.blockIndex).find(".innerCell").eq(a.columnIndex).children().eq(a.index):b.children().eq(a.index);e.scrollTo(0,b.offset().top+a.offset-f.outerHeight())}delete sessionStorage.viewPort}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/handlers/view",function(c){require("ajs").toInit(c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/shortcut.js' */
define("confluence-quick-edit/handlers/shortcut",["ajs"],function(a){var d=!1;a.bind("initialize.keyboardshortcuts add-bindings.keyboardshortcuts",function(){d=!0});a.bind("remove-bindings.keyboardshortcuts",function(){d=!1});return{createShortcut:function(f,g){function b(){c=c||a.whenIType(f).moveToAndClick(g)}function e(){c&&c.unbind();c=null}var c;return{bind:function(){d&&b();a.bind("initialize.keyboardshortcuts",b);a.bind("add-bindings.keyboardshortcuts",b);a.bind("remove-bindings.keyboardshortcuts",
e)},unbind:function(){e();a.unbind("initialize.keyboardshortcuts",b);a.unbind("add-bindings.keyboardshortcuts",b);a.unbind("remove-bindings.keyboardshortcuts",e)}}}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/shortcut","AJS.Confluence.QuickEdit.KeyboardShortcuts");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/handlers/page.js' */
define("confluence-quick-edit/handlers/page","jquery ajs confluence/legacy confluence/analytics-support wrm/context-path confluence/dark-features confluence/api/event confluence/api/logger confluence/meta confluence/aui-overrides window confluence/api/browser confluence-editor/editor/page-editor-message confluence/message-controller confluence-quick-edit/quick-edit confluence-quick-edit/handlers/shortcut".split(" "),function(b,i,m,p,s,H,f,o,g,z,n,A,B,j,t,C){function q(){var a=b("#editPageLink");a.find(".aui-icon").css("visibility",
"visible");a.parent().spinStop()}function u(){var a=g.get("content-type");return g.get("collaborative-content")&&(a==="page"||a==="blogpost")}function v(a,c,d){var e={pageId:d,blockIndex:-1,columnIndex:-1,index:-1,offset:0,hasBlock:function(){return this.blockIndex!==-1}},h=false,f=function(a){var b=a.offset();return b.top-8<=c&&b.top+a.height()>=c},g=function(a,b){var d=a.offset();if(f(a)){e.index=b;e.offset=c-d.top;h=true}};if(a.children().length===1&&a.children().first().hasClass("contentLayout2")){a.children().first().children().each(function(a){if(!e.hasBlock()&&
f(b(this)))e.blockIndex=a});if(e.hasBlock()){a=a.children().first().children().eq(e.blockIndex).find(".innerCell");a.each(function(a){if(e.columnIndex===-1){var d=b(this).children().length;if(d>0)if(d<2){if(b(this).children().first().height()>25)e.columnIndex=a}else e.columnIndex=a}});a.eq(e.columnIndex).children().each(function(a){h||g(b(this),a)})}}else a.children().each(function(a){h||g(b(this),a)});return h?e:null}function D(a){var c=require("tinymce");k.disable();z.metaToParams();var d=b("#main-content"),
e=b("#header"),h=b("#main-header"),e=n.pageYOffset+e.outerHeight()+h.outerHeight();l=v(d,e,i.params.pageId);f.trigger("quick-edit.viewport.saved");var j=function(){b(c.activeEditor.getWin().document).find("body#tinymce").addClass("page-edit");b("#content").css({paddingRight:0});f.unbind("quickedit.visible",j)};f.bind("quickedit.visible",j);d=a.$form;e=g.get("content-type")==="page"?"doeditpage":"doeditblogpost";e=s()+"/pages/"+e+".action?pageId="+m.getContentId();b(".ia-splitter-left").remove();try{b("#main").unwrap()}catch(o){}b("#rte").removeClass("editor-default").addClass("editor-fullheight");
a.$container.children().remove();b(".editor-container").children().eq(0).unwrap();d.attr({"class":"editor aui",action:e,name:"editpageform",id:"editpageform",style:""});a.$container.append(d);a.$container.removeClass("view").addClass("edit");b("body").addClass("contenteditor edit")}function E(a){require("tinymce");b("#editor-precursor").show();b("#rte-savebar").find(".toolbar-split-left").show();if(n.history.pushState){var c=b("#editPageLink").attr("href");if(c!==n.location.pathname+n.location.search){history.pushState({quickEdit:true},
"",c);f.trigger("rte-quick-edit-push-state",c)}}else{n.location.hash="editor";f.trigger("rte-quick-edit-push-hash")}c=a.content;if(c.permissions)for(var d in c.permissions)b("#"+d).attr("value",c.permissions[d]);b("#originalVersion").val(a.content.pageVersion);g.set("page-version",a.content.pageVersion);g.set("page-title",a.content.title);b('meta[name="page-version"]').attr("content",a.content.pageVersion);b('meta[name="ajs-page-version"]').attr("content",a.content.pageVersion);b("#syncRev").val(a.content.syncRev);
g.set("conf-revision",a.content.confRev);b('meta[name="ajs-conf-revision"]').attr("content",a.content.confRev);d=a.content.atlToken;g.set("atl-token",d);b('input[name="atl_token"]').val(d);f.trigger("analyticsEvent",{name:"quick-edit-success"});b("#navigation").remove();var e=new Date,h=function(b,d){if(e&&!(d.type==="keydown"&&[91,92,93,224,33,34,37,38,39,40,16,17,18,20,112,113,114,115,116,117,118,119,120,121,122,123].indexOf(d.keyCode)>-1)){var c=new Date-e;e=null;p.publish("confluence.editor.transition.firstkeydown",
{delay:c});a.editor.onKeyDown.remove(h);a.editor.onChange.remove(h)}};a.editor.onKeyDown.add(h);a.editor.onChange.add(h);m.debugTimeEnd("confluence.editor")}function F(a){var c=function(){f.unbind("rte-ready",c);if(l){var d;d=b(a.getBody());d=l.hasBlock()?d.children().first().children().eq(l.blockIndex).find(".innerCell").eq(l.columnIndex).children().eq(l.index):d.children().eq(l.index);a.getWin().scrollTo(0,d.offset().top+l.offset);b("#main").css("visibility","visible")}};f.bind("rte-ready",c)}function w(a){f.trigger("rte-collaborative-content-ready",
a)}function G(){var a=new b.Deferred;m.debugTime("confluence.editor.quick.fetchContent");var c=b.ajax({url:s()+"/rest/tinymce/1/content/"+m.getContentId()+".json",cache:false});c.success(function(b){g.get("edit-mode")&&g.get("edit-mode")!==b.editMode&&a.reject("edit mode change",c);m.debugTimeEnd("confluence.editor.quick.fetchContent");u()&&w(b);f.bind("synchrony-events-bound",function h(){w(b);f.unbind("synchrony-events-bound",h)});a.resolve(b)});c.error(function(b){a.reject("error fetching content",
b)});return a}function x(a,c){if(c)switch(c.status){case 405:q();j.showError(j.parseError(c),j.Location.FLAG);return;case 423:var d=JSON.parse(c.responseText).user;q();d={title:"Unable to edit",body:i.format("Collaborative editing is offline right now, and {0} is editing this page. Try again in a few minutes.",i.escapeHtml(d))};j.showError(d,j.Location.FLAG);return;case 412:q();B.handleMessage("collab.edit.user.limit.reached",{type:"warning",title:"You can\u0027t edit this page right now",message:"\u003cp\u003eThis page is so popular, you\u0027ve reached the maximum number of simultaneous editors.\u003c/p\u003e\u003cp\u003eTry again when it\u0027s not so busy.\u003c/p\u003e",
close:"manual"});p.publish("collab.edit.user.limit.reached",{browserName:y.friendlyName(),browserVersion:y.version(),pageId:g.get("page-id"),editMode:"quick",numEditors:g.get("max-number-editors")});return}n.location=b("#editPageLink").attr("href")}var r,l,y=new A(n.navigator.userAgent),k={editShortcut:C.createShortcut("e","#editPageLink"),activateEventHandler:function(a){if(!a.metaKey&&!a.shiftKey&&!a.ctrlKey&&!a.altKey&&!(a.which===2||a.which===3)){a.preventDefault();if(r&&r.state()==="pending")o.debug("Editor is being activated. Ignoring handler...");
else{r=k.activateEditor();a=b("#editPageLink");a.find(".aui-icon").css("visibility","hidden");a.spin();a=b("#draft-status-lozenge");a.text()!==""&&p.publish("confluence.drafts.referrer",{referrerPage:"view",lozengeType:a.text()})}}},enable:function(){if(b("body").is(".theme-default")){var a=b("#editPageLink");a.bind("click",k.activateEventHandler);a.removeClass("full-load");k.editShortcut.bind();o.debug("QuickPageEdit enabled")}else o.debug("QuickPageEdit not enabled")},activateEditor:function(){m.debugTime("confluence.editor");
u()&&f.trigger("rte-quick-edit-init");var a=b("#content").find(".quick-comment-form"),c=function(){var a=require("tinymce").activeEditor.getWin(),c=b(a.document).find("#tinymce");if(a=v(c,a.pageYOffset,i.params.pageId))sessionStorage.viewPort=JSON.stringify(a)};return t.activateEditor({fetchContent:G(),$container:b("#content"),$form:a.length?a:b('<form method="post"></form>'),preInitialise:D,postInitialise:E,saveHandler:function(){c()},cancelHandler:function(){c()},plugins:m.Editor._Profiles.createProfileForPageEditor({versionComment:true,
notifyWatchers:true}).plugins,onInitialise:function(a){a.onLoad.add(F);i.messages.setup()}}).fail(x)},disable:function(){o.debug("QuickPageEdit disabled.");k.editShortcut.unbind();b("#editPageLink").unbind("click",k.activateEventHandler)}};t.register(k);return{disable:k.disable,_objForTesting:{onFailActivateEditor:x}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/page","AJS.Confluence.QuickEdit.QuickEditPage");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-edit-general', location = 'jscripts/init.js' */
define("confluence-quick-edit/init",["ajs","jquery","window"],function(a,b,c){return function(){b("body").hasClass("page-gadget")?a.debug("QuickComment: editor preload is disabled"):b(c).load(function(){a.debug("QuickComment: instigated background loading of the comment editor.");a.Confluence.EditorLoader.load()});a.Confluence.QuickEdit.enableHandlers();a.trigger("rte-quick-edit-enable-handlers")}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/init",function(a){var b=require("ajs"),c=require("jquery");b.DarkFeatures.isEnabled("disable-quick-edit")?b.log("disable-quick-edit is turned on; run AJS.Confluence.EditorLoader.load() manually."):c(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'soy/comments.soy' */
// This file was automatically generated from comments.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Comments.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Comments == 'undefined') { Confluence.Templates.Comments = {}; }


Confluence.Templates.Comments.displayReplyEditorLoadingContainer = function(opt_data, opt_ignored) {
  return '<ol class="comment-threads"><li class="comment-thread">' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId, parentId: opt_data.parentCommentId}, commenter: opt_data.commenter, state: 'loading', mode: 'reply'}) + '</li></ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayReplyEditorLoadingContainer.soyTemplateName = 'Confluence.Templates.Comments.displayReplyEditorLoadingContainer';
}


Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'add'});
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder.soyTemplateName = 'Confluence.Templates.Comments.displayTopLevelCommentEditorPlaceholder';
}


Confluence.Templates.Comments.displayEditEditorContainer = function(opt_data, opt_ignored) {
  return '' + Confluence.Templates.Comments.displayCommentEditorCommon({comment: {ownerId: opt_data.contentId, id: opt_data.commentId}, commenter: opt_data.commenter, state: 'placeholder', mode: 'edit'});
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayEditEditorContainer.soyTemplateName = 'Confluence.Templates.Comments.displayEditEditorContainer';
}


Confluence.Templates.Comments.editorLoadErrorMessage = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml(opt_data.message) + '</p><p><a href="' + soy.$$escapeHtml(opt_data.fallbackUrl) + '">' + soy.$$escapeHtml('Try again') + '</a></p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.editorLoadErrorMessage.soyTemplateName = 'Confluence.Templates.Comments.editorLoadErrorMessage';
}


Confluence.Templates.Comments.displayCommentEditorCommon = function(opt_data, opt_ignored) {
  var output = '<div class="quick-comment-container comment ' + soy.$$escapeHtml(opt_data.mode) + '">' + Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}) + '<div class="quick-comment-body"><div class="quick-comment-loading-container" style="display:' + ((opt_data.state == 'loading') ? 'block' : 'none') + ';"></div><div id="editor-messages"></div><div id="all-messages"></div><form style="display:' + ((opt_data.state == 'loading') ? 'none' : 'block') + ';" class="quick-comment-form aui" method="post" ';
  switch (opt_data.mode) {
    case 'add':
      output += 'name="inlinecommentform" action="' + soy.$$escapeHtml("/confluence") + '/pages/doaddcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '"';
      break;
    case 'edit':
      output += 'name="editcommentform" action="' + soy.$$escapeHtml("/confluence") + '/pages/doeditcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '&commentId=' + soy.$$escapeHtml(opt_data.comment.id) + '"';
      break;
    case 'reply':
      output += 'name="threadedcommentform"  action="' + soy.$$escapeHtml("/confluence") + '/pages/doaddcomment.action?pageId=' + soy.$$escapeHtml(opt_data.comment.ownerId) + '&parentId=' + soy.$$escapeHtml(opt_data.comment.parentId) + '"';
      break;
  }
  output += ' >' + ((opt_data.mode == 'add') ? '<div title="' + soy.$$escapeHtml('Add a Comment') + '" class="quick-comment-prompt"><span>' + soy.$$escapeHtml('Write a comment\u2026') + '</span></div>' : '') + '</form></div></div>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayCommentEditorCommon.soyTemplateName = 'Confluence.Templates.Comments.displayCommentEditorCommon';
}


Confluence.Templates.Comments.userLogo = function(opt_data, opt_ignored) {
  return '<p class="comment-user-logo">' + ((opt_data.userInfo.userName == null) ? '<img class="userLogo logo anonymous" src="' + soy.$$escapeHtml("/confluence/s/-7iq2vk/8301/13280cd41a592ca5883bbc1ae415b58671505365/_") + '/images/icons/profilepics/anonymous.svg" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Anonymous') + '" title="' + soy.$$escapeHtml('Anonymous') + '">' : (opt_data.userInfo.profilePicture.isDefault) ? '<a class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" href="' + soy.$$escapeHtml("/confluence") + '/users/profile/editmyprofilepicture.action" title="' + soy.$$escapeHtml('Add a picture of yourself') + '"><img class="userLogo logo defaultLogo" src="' + soy.$$escapeHtml("/confluence/s/-7iq2vk/8301/13280cd41a592ca5883bbc1ae415b58671505365/_") + '/images/icons/profilepics/add_profile_pic.svg" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml('Add a picture of yourself') + '"></a>' : '<a class="userLogoLink" data-username="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" href="' + Confluence.Templates.User.userLinkUrl({username: opt_data.userInfo.userName}) + '"><img class="userLogo logo" src="' + soy.$$escapeHtml(opt_data.userInfo.profilePicture.path) + '" alt="' + soy.$$escapeHtml('User icon') + ': ' + soy.$$escapeHtml(opt_data.userInfo.userName) + '" title="' + soy.$$escapeHtml(opt_data.userInfo.userName) + '"></a>') + '</p>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.userLogo.soyTemplateName = 'Confluence.Templates.Comments.userLogo';
}


Confluence.Templates.Comments.displayComment = function(opt_data, opt_ignored) {
  return '' + ((opt_data.comment.parentId == 0 && opt_data.firstReply) ? '<div id="comments-section" class="pageSection group"><div class="section-header"><h2 id="comments-section-title" class="section-title">' + soy.$$escapeHtml('1 Comment') + '</h2>' + Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: true}) + '</div></div>' : (opt_data.firstReply) ? Confluence.Templates.Comments.commentThread({comment: opt_data.comment, commenter: opt_data.commenter, highlight: opt_data.highlight, topLevel: false}) : Confluence.Templates.Comments.commentThreadItem({comment: opt_data.comment, commenter: opt_data.commenter, highlight: true}));
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayComment.soyTemplateName = 'Confluence.Templates.Comments.displayComment';
}


Confluence.Templates.Comments.commentThread = function(opt_data, opt_ignored) {
  return '<ol class="comment-threads' + ((opt_data.topLevel) ? ' top-level" id="page-comments' : '') + '">' + Confluence.Templates.Comments.commentThreadItem(opt_data) + '</ol>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentThread.soyTemplateName = 'Confluence.Templates.Comments.commentThread';
}


Confluence.Templates.Comments.commentThreadItem = function(opt_data, opt_ignored) {
  return '<li id="comment-thread-' + soy.$$escapeHtml(opt_data.comment.id) + '" class="comment-thread">' + Confluence.Templates.Comments.commentView(opt_data) + '</li>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentThreadItem.soyTemplateName = 'Confluence.Templates.Comments.commentThreadItem';
}


Confluence.Templates.Comments.commentView = function(opt_data, opt_ignored) {
  return '<div class="comment' + ((opt_data.highlight == true) ? ' focused' : '') + '" id="comment-' + soy.$$escapeHtml(opt_data.comment.id) + '">' + Confluence.Templates.Comments.userLogo({userInfo: opt_data.commenter}) + '<div class="comment-header"><h4 class="author">' + ((opt_data.commenter.userName == null) ? soy.$$escapeHtml('Anonymous') : '<a href="' + soy.$$escapeHtml("/confluence") + '/display/~' + soy.$$escapeUri(opt_data.commenter.userName) + '" class="url fn confluence-userlink" data-username="' + soy.$$escapeHtml(opt_data.commenter.userName) + '">' + soy.$$escapeHtml(opt_data.commenter.displayName) + '</a>') + '</h4></div><div class="comment-body"><div class="comment-content wiki-content">' + soy.$$filterNoAutoescape(opt_data.comment.html) + '</div><div class="comment-actions">' + Confluence.Templates.Comments.displayCommentActions({section: 'secondary', actions: opt_data.comment.secondaryActions, commentId: opt_data.comment.id}) + Confluence.Templates.Comments.displayCommentActions({section: 'primary', actions: opt_data.comment.primaryActions, commentId: opt_data.comment.id}) + '</div></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.commentView.soyTemplateName = 'Confluence.Templates.Comments.commentView';
}


Confluence.Templates.Comments.displayCommentActions = function(opt_data, opt_ignored) {
  var output = '<ul class="comment-actions-' + soy.$$escapeHtml(opt_data.section) + '">';
  if (opt_data.actions != null) {
    var itemList211 = opt_data.actions;
    var itemListLen211 = itemList211.length;
    for (var itemIndex211 = 0; itemIndex211 < itemListLen211; itemIndex211++) {
      var itemData211 = itemList211[itemIndex211];
      output += '<li ' + ((itemData211.style != null) ? ' class="' + soy.$$escapeHtml(itemData211.style) + '"' : '') + '><a ' + ((itemData211.tooltip != null) ? ' title="' + soy.$$escapeHtml(itemData211.tooltip) + '"' : '') + ' href="' + soy.$$escapeHtml(itemData211.url) + '" ' + ((itemData211.id) ? ' id="' + soy.$$escapeHtml(itemData211.id) + '-' + soy.$$escapeHtml(opt_data.commentId) + '"' : '') + '><span>' + soy.$$escapeHtml(itemData211.label) + '</span></a></li>\n';
    }
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.Comments.displayCommentActions.soyTemplateName = 'Confluence.Templates.Comments.displayCommentActions';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/comment-display-manager.js' */
define("confluence-quick-edit/comment-display-manager",["ajs","confluence/legacy","confluence/templates","jquery"],function(g,j,h,c){var i={_updateCommentSectionTitle:function(){var a=c("#comments-section-title");if(0!==a.length){var b=this.commentCount();1===b?a.text("1 Comment"):a.text(g.format("{0} Comments",b))}},addComment:function(a,b,f,d){a={comment:b,commenter:a,highlight:f,context:{contextPath:g.Meta.get("context-path"),staticResourceUrlPrefix:g.Meta.get("static-resource-url-prefix")}};
if(this.hasComments()){if(0===b.parentId)a.firstReply=!1,f=c("#comments-section").find(".comment-threads.top-level");else{var f=c("#comment-thread-"+b.parentId),e=f.children(".commentThreads");e.length?(a.firstReply=!1,f=e):a.firstReply=!0}d||this.clearFocus();d=c(h.Comments.displayComment(a));d.addClass("fadeInComment");f.append(d);this._updateCommentSectionTitle()}else a.firstReply=!0,d=c(h.Comments.displayComment(a)),d.addClass("fadeInComment"),c("#comments-section").prepend(d);j.Comments.bindRemoveConfirmation(b.id);
b=this.getCommentNode(b.id);b.scrollToElement();return b},addOrUpdateComment:function(a,b,c,d){var e=this.getCommentNode(b.id);return e?(e.find(".comment-content").html(b.html),d||this.clearFocus(),c&&e.addClass("focused"),e.addClass("fadeInComment"),e.scrollToElement(),e):this.addComment.apply(this,arguments)},isVisible:function(){return!c("#page-comments").hasClass("hidden")},hasComments:function(){return 0<this.commentCount()},commentCount:function(){return c("#comments-section .comment").not(".quick-comment-container").length},
clearFocus:function(){c(".comment").removeClass("focused")},getCommentNode:function(a){a=c("#comment-"+a);return!a.length?null:a},getParentId:function(a){a=i.getCommentNode(a);return null!=a&&(a=a.closest("div.comment"),a.length)?(a=a.attr("id"),a=/\d+/.exec(a),parseInt(a)):0}};return i});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/comment-display-manager","Confluence.CommentDisplayManager");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-page', location = 'jscripts/scroll-util.js' */
define("confluence-quick-edit/scroll-util",["window","document","jquery"],function(a,c,e){return{scrollToElement:function(){this.scrollWindowToElement()||this.scrollOverflowContainerToElement();return this},scrollWindowToElement:function(){function b(){return"pageYOffset"in a?a.pageYOffset:c.documentElement.scrollTop}var f=b(),d;if("number"===typeof a.innerWidth)d=a.innerHeight;else if(c.documentElement&&c.documentElement.clientWidth)d=c.documentElement.clientHeight;else return this[0].scrollIntoView(!1),
!0;var g=this.offset().top,h=this.height();return g+h+40>f+d?(this[0].scrollIntoView(!1),a.scrollBy(0,40),f!=b()):!0},scrollOverflowContainerToElement:function(){var b=null;this.parents().each(function(){var a=e(this).css("overflow");if("auto"==a||"scroll"==a)return b=e(this),!1});if(!b)return!1;var a=b.height(),d=this.offset().top,c=this.height(),a=a-(d+c+40);0>a&&(b[0].scrollTop-=a);return!0}}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/scroll-util",function(a){require("jquery").fn.extend(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment.js' */
define("confluence-quick-edit/handlers/comment","jquery ajs confluence/legacy wrm/context-path confluence-editor-loader/editor-loader confluence/api/event aui/flag confluence/api/logger confluence-editor/editor/page-editor-message confluence/message-controller confluence/meta confluence-quick-edit/captcha-manager confluence-quick-edit/handlers/page confluence-quick-edit/util".split(" "),function(d,b,h,o,p,l,t,q,j,f,e,r,s,m){function n(a,c){var b=a.match(RegExp("[?&]"+c+"=(\\d+)"));return b&&b.length>
1?parseInt(b[1],10):0}d(function(){b.AppLinksInitialisationBinder=function(a){l.bind("init.rte",a)}});var g={timeout:8E3,showLoadingEditorErrorMessage:function(a){var c={};l.trigger("rte-quick-comment-loading-failed");if(a==="READ_ONLY"){c.title="This site is read-only";c.body="You can\u0027t make changes right now."}else{c.title="Error";c.body="Error loading the comment editor. Please refresh the page to try again."}f.showError(c,
f.Location.FLAG)},preInitialise:function(){s.disable();e.set("content-type","comment");e.set("draft-type","");b.params.contentType="comment";b.params.draftType="";e.set("use-inline-tasks","false");d("#editor-precursor").children().eq(0).hide();d("#pagelayout-menu").parent().hide();d("#page-layout-2-group").hide();d("#rte-button-tasklist").remove();d("#pluggable-status-container").remove();d("#rte-insert-tasklist").parent().remove()},postInitialise:function(a){b.Rte.editorFocus(a.editor)},delegatingSaveCommentHandler:function(a){return a.asyncRenderSafe?
g.ajaxSaveCommentHandler(a):g.reloadPageSaveCommentHandler(a)},reloadPageSaveCommentHandler:function(a){var c=m.getBaseUrl();c.addQueryParam("focusedCommentId",a.id);c.addQueryParam("refresh",+new Date);window.location.href=c.toString()+"#comment-"+a.id},ajaxSaveCommentHandler:function(a){var c={isDefault:true,path:e.get("static-resource-url-prefix")+"/images/icons/profilepics/default.png"};e.get("current-user-avatar-uri-reference")!==o()+"/images/icons/profilepics/default.png"&&(c={isDefault:false,
path:e.get("current-user-avatar-uri-reference")});var b=e.get("remote-user"),d={userName:b===""?null:b,displayName:e.get("current-user-fullname"),profilePicture:c};g.cancelComment().done(function(){h.CommentDisplayManager.addOrUpdateComment(d,a,true,false);l.trigger("page.commentAddedOrUpdated",{commentId:a.id})})},cancelHandler:function(){var a=require("confluence-quick-edit/quick-edit");b.Rte.Content.editorResetContentChanged();a.deactivateEditor()},createCommenterParam:function(a,b,d){return{userName:b||
e.get("remote-user")||null,displayName:d||e.get("user-display-name"),profilePicture:{isDefault:a.hasClass("defaultLogo"),path:a.attr("src")}}},createSaveHandler:function(a,c){var e=m.generateUUID();return function(f){var i=require("confluence/editor-notifications");f.preventDefault();if(b.Rte.Content.isEmpty()){i.notify("warning","Comment text is empty. Cannot create empty comments.");h.Editor.UI.toggleSavebarBusy(false)}else{var i=f=0,k=p.getEditorForm();if(k.is("form")){i=k.attr("action");f=n(i,"parentId");i=n(i,"commentId")}var g=
new r(k),k=function(a,b){c(a,b);g.refreshCaptcha()},j=d("#watchPage").is(":checked");i>0?h.Editor.CommentManager.updateComment(h.getContentId(),i,b.Rte.Content.getHtml(),j,g.getCaptchaData(),a,k):h.Editor.CommentManager.saveComment(h.getContentId(),f,b.Rte.Content.getHtml(),j,e,g.getCaptchaData(),a,k)}}},saveCommentErrorHandler:function(a,c){h.Editor.UI.toggleSavebarBusy(false);var d;if(a&&a.search(/captcha/i)!==-1){d="The typed word did not match the text in the picture.";j.closeMessages(["captcha-response-failed"]);
j.handleMessage("captcha-response-failed",{type:"error",message:d})}else{d="Failed to save the comment. Please try again later.";if(c)f.showError(f.parseError(c,d),f.Location.FLAG);else{j.closeMessages(["server-offline"]);j.handleMessage("server-offline",{type:"error",message:d})}}q.logError("Error saving comment",a)},cancelComment:function(){b.Rte.Content.editorResetContentChanged();return require("confluence-quick-edit/quick-edit").deactivateEditor()},proceedWithActivation:function(){var a=new d.Deferred,
c=b.Rte&&b.Rte.getEditor();if(c){if(c.isDirty()&&!h.Editor.isEmpty()&&!confirm("Your comment will be lost."))return a.reject();a=g.cancelComment()}else a.resolve();return a}};return g});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment","AJS.Confluence.QuickEdit.QuickComment");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/top-level.js' */
define("confluence-quick-edit/handlers/comment/top-level","jquery confluence/dark-features confluence-editor-loader/editor-loader confluence/api/event confluence/api/logger confluence-editor/profiles confluence-quick-edit/handlers/comment confluence-quick-edit/quick-edit confluence-quick-edit/handlers/shortcut window".split(" "),function(a,i,j,k,e,l,b,f,m,g){function n(a){b.preInitialise(a)}function o(c){a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler);a("#rte-savebar").scrollWindowToElement();
b.postInitialise(c)}function p(){if(!j.resourcesLoaded()){k.trigger("analytics",{name:"rte.quick-edit.top-comment.spinner"});a(".quick-comment-prompt").hide();a(".quick-comment-loading-container").fadeIn().spin("medium")}}function q(b){b.preventDefault();g.location=a("#add-comment-rte").attr("href")}var r=i.isEnabled("editor.slow.comment.disable"),d={commentShortcut:m.createShortcut("m",".quick-comment-prompt"),activateEventHandler:function(c){c.preventDefault();b.proceedWithActivation().done(function(){var c=
b.createSaveHandler(b.delegatingSaveCommentHandler,b.saveCommentErrorHandler),h=a("form[name=inlinecommentform]");return f.activateEditor({preActivate:p,$container:h.closest(".quick-comment-container"),$form:h,preInitialise:n,saveHandler:c,cancelHandler:b.cancelHandler,postInitialise:o,plugins:l.createProfileForCommentEditor().plugins,additionalResources:["wrc!comment-editor"],timeoutResources:b.timeout}).fail(function(c){e.logError("activateEventHandler failed because of: "+c);if(c==="READ_ONLY"||
r){b.showLoadingEditorErrorMessage(c);a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler)}else g.location=a("#add-comment-rte").attr("href")})}).fail(function(){a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler)})},enable:function(){a("#comments-section").one("click",".quick-comment-prompt",d.activateEventHandler);a("#add-comment-rte").removeClass("full-load");this.commentShortcut.bind()},disable:function(){a("#comments-section").off("click",
".quick-comment-prompt");this.commentShortcut.unbind()}};f.register(d);return{bindCommentAreaFallbackHandler:function(){a("#comments-section").delegate(".quick-comment-prompt","click",q)},cancelComment:function(){e.log("'AJS.Confluence.QuickEdit.QuickComment.TopLevel.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");return b.cancelComment()}}});
require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/top-level","AJS.Confluence.QuickEdit.QuickComment.TopLevel");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/reply.js' */
define("confluence-quick-edit/handlers/comment/reply","confluence/root confluence/templates wrm/context-path confluence/dark-features confluence-editor-loader/editor-loader confluence/api/event confluence/api/logger confluence/meta confluence-editor/profiles confluence-quick-edit/handlers/comment confluence-quick-edit/quick-edit jquery".split(" "),function(l,m,n,o,p,g,h,i,q,b,j,a){function r(a){b.preInitialise(a);a.$container.scrollWindowToElement()}function s(a){b.postInitialise(a)}function k(a){var b=
a.attr("id").match(/comment-(\d+)/),e=0;if(b)e=parseInt(b[1],10);else{g.trigger("analytics",{name:"rte.quick-edit.get-reply-parent.failed"});h.logError("replyHandler: activateEventHandler - could not extract a parent comment Id from the comment id "+a.attr("id"))}return e}function t(){a(".comment.reply").closest(".comment-threads").remove()}var d,u=o.isEnabled("editor.slow.comment.disable");d={activateEventHandler:function(d){var f=this;d.preventDefault();d.stopPropagation();if(a(f).attr("reply-disabled"))return false;
b.proceedWithActivation().done(function(){var e=a(f).closest("div.comment"),c;c=a(".quick-comment-container img.userLogo");c=b.createCommenterParam(c);c={contentId:l.getContentId(),parentCommentId:k(e),commenter:c,context:{contextPath:n(),staticResourceUrlPrefix:i.get("static-resource-url-prefix")}};c=a(m.Comments.displayReplyEditorLoadingContainer(c));var d=a(".quick-comment-loading-container",c);d.hide();e.after(c);if(p.resourcesLoaded())g.trigger("analytics",{name:"rte.quick-edit.reply-comment.no-spinner"});
else{g.trigger("analytics",{name:"rte.quick-edit.reply-comment.spinner"});e.after(c);d.fadeIn();d.spin("medium");d[0].scrollIntoView()}c=a(f).closest(".comment-thread").find(".quick-comment-container");i.set("form-name",a("form",c).attr("name"));j.activateEditor({$container:c,$form:a("form.quick-comment-form[name=threadedcommentform]"),preInitialise:r,postInitialise:s,saveHandler:b.createSaveHandler(b.delegatingSaveCommentHandler,b.saveCommentErrorHandler),cancelHandler:b.cancelHandler,plugins:q.createProfileForCommentEditor().plugins,
postDeactivate:t,additionalResources:["wrc!comment-editor"],timeoutResources:b.timeout}).fail(function(){u?b.showLoadingEditorErrorMessage():window.location=a("#reply-comment-"+k(e)).attr("href")});a(f).attr("reply-disabled",true)})},enable:function(){a("#comments-section").delegate(".action-reply-comment","click",d.activateEventHandler)},disable:function(){a("#comments-section").undelegate(".action-reply-comment","click")}};j.register(d);return{cancelComment:function(){h.log("'AJS.Confluence.QuickEdit.QuickComment.Reply.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");
return b.cancelComment()}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/reply","AJS.Confluence.QuickEdit.QuickComment.Reply");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/handlers/comment/edit.js' */
define("confluence-quick-edit/handlers/comment/edit","confluence/root confluence/templates wrm/context-path confluence/dark-features confluence/api/logger confluence/meta confluence-editor/profiles confluence-quick-edit/handlers/comment confluence-quick-edit/quick-edit jquery".split(" "),function(j,k,l,m,n,g,o,b,i,d){function p(a){b.preInitialise(a);a.$container.scrollWindowToElement()}function q(a){b.postInitialise(a)}function h(a){return(a=a.attr("id").match(/comment-(\d+)/))?parseInt(a[1],10):
0}function r(a){var b=new d.Deferred;d.ajax({url:l()+"/rest/api/content/"+a+"?expand=body.editor",cache:false}).done(function(a){!a||!a.body||!a.body.editor?b.reject("invalid response from loading comment rest endpoint"):b.resolve({editorContent:a.body.editor.value})}).fail(function(){b.reject("error fetching content")});return b}function s(){var a=d(".comment.edit");a.prev(".comment").show();a.remove()}var t=m.isEnabled("editor.slow.comment.disable"),f={activateEventHandler:function(a){var f=this;
a.preventDefault();a.stopPropagation();b.proceedWithActivation().done(function(){var a=d(f).closest("div.comment"),c;c=a.find(".author .confluence-userlink");var e=a.find(".comment-user-logo img.userLogo");c=b.createCommenterParam(e,c.attr("data-username"),c.text());c={contentId:j.getContentId(),commentId:h(a),commenter:c,context:{contextPath:g.get("context-path"),staticResourceUrlPrefix:g.get("static-resource-url-prefix")},mode:"edit"};c=d(k.Comments.displayEditEditorContainer(c));e=d(".quick-comment-loading-container",
c);a.hide();a.after(c);e.fadeIn().spin("medium");e[0].scrollIntoView();c=a.next(".quick-comment-container");g.set("form-name",d("form",c).attr("name"));i.activateEditor({$container:c,$form:d("form.quick-comment-form[name=editcommentform]"),fetchContent:r(h(a)),preInitialise:p,postInitialise:q,saveHandler:b.createSaveHandler(b.delegatingSaveCommentHandler,b.saveCommentErrorHandler),cancelHandler:b.cancelHandler,plugins:o.createProfileForCommentEditor().plugins,postDeactivate:s,additionalResources:["wrc!comment-editor"],
timeoutResources:b.timeout}).fail(function(){t?b.showLoadingEditorErrorMessage():window.location=d("#edit-comment-"+h(a)).attr("href")})})},enable:function(){d("#comments-section").delegate(".comment-action-edit","click",f.activateEventHandler)},disable:function(){d("#comments-section").undelegate(".comment-action-edit","click")}};i.register(f);return{cancelComment:function(){n.log("'AJS.Confluence.QuickEdit.QuickComment.Edit.cancelComment' is deprecated in 5.7, consider using 'AJS.Confluence.QuickEdit.QuickComment.cancelComment' instead.");
return b.cancelComment()}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/handlers/comment/edit","AJS.Confluence.QuickEdit.QuickComment.Edit");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-initial', location = 'jscripts/editor-comment-manager.js' */
define("confluence-quick-edit/editor-comment-manager",["ajs","jquery","confluence/legacy"],function(d,e,j){return function(){function k(a,f,l,i,b,g,h){d.trigger("analytics",{name:"confluence.page.comment.create",data:{pageID:d.Meta.get("page-id")}});a={type:"POST",url:a,contentType:"application/x-www-form-urlencoded; charset=UTF-8",data:{html:f,watch:l,uuid:i},dataType:"json",cache:!1,headers:{"X-Atlassian-Token":"no-check"},success:function(a){g(a)},error:function(a,c,b){c=c+": "+b;a.responseText&&
(c=c+" - "+a.responseText);h(c,a)},timeout:12E4};b&&b.id&&(a.headers["X-Atlassian-Captcha-Id"]=b.id,a.headers["X-Atlassian-Captcha-Response"]=b.response);e.ajax(a)}return{addComment:function(a,f,d,i,b,g,h,e,c){j.Editor.CommentManager.saveComment(a,f,d,function(a){j.CommentDisplayManager.addComment(h,a,g);e(a)},c)},saveComment:function(a,f,e,i,b,g,h,j){var c=null,c=f?d.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+f+"/comment?actions=true":d.contextPath()+"/rest/tinymce/1/content/"+a+"/comment?actions=true";
k(c,e,i,b,g,h,j)},updateComment:function(a,f,e,i,b,g,h){a=d.contextPath()+"/rest/tinymce/1/content/"+a+"/comments/"+f+"?actions=true";k(a,e,i,null,b,g,h)}}}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/editor-comment-manager",function(d){var e=require("confluence/legacy");require("ajs").bind("init.rte",function(){e.Editor.CommentManager=d()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation-util.js' */
define("confluence-quick-edit/view-content/pushed-navigation-util",["ajs","jquery","window"],function(d,f,a){function c(){return d.Rte&&d.Rte.getEditor()&&!!f("#editpageform").length}var b=a.location.hash,e=a.location.search;return{isInEditPage:c,filterPreviewHashChange:function(){var g=c()||a.history.pushState||!(a.location.hash&&0===a.location.hash.indexOf("#!"))&&!(b&&0===b.indexOf("#!"));b=a.location.hash;return g},filterPreviewNavigationEvent:function(){var b=c()||!/[?&]preview=([^&]*)/.test(a.location.search)&&
!/[?&]preview=([^&]*)/.test(e);e=a.location.search;return b}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quick-edit/view-content/pushed-navigation-util","Confluence.Editor.PushedNavUtil");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:editor-view-resources', location = 'jscripts/view-content/pushed-navigation.js' */
define("confluence-quick-edit/view-content/pushed-navigation","jquery underscore window confluence/legacy confluence/api/event confluence-quick-edit/view-content/pushed-navigation-util".split(" "),function(b,n,a,f,g,c){function d(){if(h){if(e.split("#")[0]!=a.location.href.split("#")[0]){b(a).unbind("popstate",k);a.location.reload()}}else e.split("#")[0]==a.location.href.split("#")[0]&&e.split("#")[1]!=="editor"||a.location.reload()}function i(){e=a.location.href}function l(){var b=f.Editor.Drafts.unloadMessage();
if(b){f.Editor.Drafts.unBindUnloadMessage();if(confirm(b+"\n\n"+"Press OK to continue, or Cancel to stay on the current page.")){g.trigger("analytics",{name:"rte.quick-edit.confirmation.leaving"});d()}else{g.trigger("analytics",{name:"rte.quick-edit.confirmation.staying"});if(h){j=true;a.history.forward()}else a.location.hash="editor";f.Editor.Drafts.bindUnloadMessage()}}else d()}function o(){c.isInEditPage()?a.location.hash!=="#editor"&&l():d()}function k(){j?j=false:c.isInEditPage()?l():d()}function m(a,b){return function(){n.every(b,
function(a){return a()})&&a()}}var h=!!a.history.pushState,j=false,e=a.location.href,p=[c.filterPreviewHashChange],q=[c.filterPreviewNavigationEvent];g.bind("rte-quick-edit-enable-handlers",function(){a.location.hash==="#editor"&&b("#editPageLink").click()});return function(){i();if(h){b(a).bind("popstate",m(k,q));b(a).bind("rte-quick-edit-push-state",i)}else{b(a).bind("hashchange",m(o,p));b(a).bind("rte-quick-edit-push-hash",i)}}});
require("confluence/module-exporter").safeRequire("confluence-quick-edit/view-content/pushed-navigation",function(b){require("ajs").toInit(function(){setTimeout(b,0)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'org.randombits.confluence.toc:toc-plugin-analytics', location = 'net/customware/confluence/plugin/toc/analytics/analytics.js' */
AJS.toInit(function(){AJS.$(".toc-macro a").click(function(){AJS.trigger("analyticsEvent",{name:"confluence.toc-macro.heading-click"})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'org.randombits.confluence.toc:client-side-toc-resources', location = 'net/customware/confluence/plugin/toc/js/client-side-toc.js' */
require(["ajs"],function(a){a.toInit(function(f){function b(n){var m=f({});m.data("precedenceLevel",n);return m}function g(m){return f(m).data("precedenceLevel")}function i(n,m){f(n).data("precedenceLevel",m);return n}function h(n,m){return m===g(n)}function d(s,m,o){if(s.length===0){return f()}var n=s.map(g).reduce(function(u,t){return Math.min(u,t)});if(!h(s[0],n)){s.unshift(b(n))}var q=m.createTocLevelContainer();var r={subElements:[],currentItem:undefined,outline:undefined,flush:function(){if(this.subElements.length>0&&this.currentItem){d(this.subElements,m,this.outline).appendTo(this.currentItem);this.subElements=[]}},add:function(t){this.subElements.push(t)},resetItem:function(t){this.outline=(o||[]).slice(0);this.outline.push(t);this.currentItem=m.createTocItemContainer();this.currentItem.appendTo(q);return this.currentItem}};var p=0;s.forEach(function(t){if(h(t,n)){p++;r.flush();r.resetItem(p);if(t.textContent){c(t,r.outline.join(".")).appendTo(r.currentItem)}else{r.currentItem.addClass("toc-empty-item")}}else{r.add(t)}});r.flush();if(o.length===0&&m.decorateToc){m.decorateToc(q)}return q}function c(m,n){return f(Confluence.Plugins.TableOfContents.Client.tocItemBody({outline:n,linkHref:"#"+m.id,linkText:m.textContent}))}function l(m){return{createTocLevelContainer:function(){return this.createTocItemContainer()},createTocItemContainer:function(){return f(Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer({cssClass:"toc-item-container"}))},decorateToc:function(o){function n(r,p){var s=r in m?m[r]:p;if(s){var q=f(Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator({separator:s}));q.appendTo(o)}}n("preseparator","[ ");f(o).find("span.toc-item-body").each(function(p,q){if(p>0){n("midseparator"," ] [ ")}f(q).appendTo(o)});n("postseparator"," ]");f(o).find(".toc-item-container").remove()}}}function e(m){return{createTocLevelContainer:function(){return f(Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer({cssliststyle:m.cssliststyle,csslistindent:m.csslistindent}))},createTocItemContainer:function(){return f(Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer())}}}function j(m){var o;if(m.includeheaderregex){o=new RegExp(m.includeheaderregex)}var n;if(m.excludeheaderregex){n=new RegExp(m.excludeheaderregex)}return function(){var p=f(this).text();if(o&&!o.test(p)){return false}if(n&&n.test(p)){return false}return true}}function k(o,q){var m=q.headerelements;var r=m.split(",");var p=j(q);var n=f("#main-content").find(m).filter(p).each(function(){i(this,r.indexOf(this.nodeName))}).toArray();return d(n,o,[])}f(".client-side-toc-macro").each(function(){var o=f(this);var n=o.data()||{};var m;if(n.structure==="flat"){m=l(n)}else{m=e(n)}if(n.numberedoutline!==true){o.addClass("hidden-outline")}o.html(k(m,n))})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'org.randombits.confluence.toc:client-side-toc-resources', location = 'net/customware/confluence/plugin/toc/templates/client.soy' */
// This file was automatically generated from client.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Plugins.TableOfContents.Client.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Plugins == 'undefined') { Confluence.Plugins = {}; }
if (typeof Confluence.Plugins.TableOfContents == 'undefined') { Confluence.Plugins.TableOfContents = {}; }
if (typeof Confluence.Plugins.TableOfContents.Client == 'undefined') { Confluence.Plugins.TableOfContents.Client = {}; }


Confluence.Plugins.TableOfContents.Client.tocItemBody = function(opt_data, opt_ignored) {
  return '<span class="toc-item-body" data-outline="' + soy.$$escapeHtml(opt_data.outline) + '"><span class="toc-outline">' + soy.$$escapeHtml(opt_data.outline) + '</span><a href="' + soy.$$escapeHtml(opt_data.linkHref) + '" class="toc-link">' + soy.$$escapeHtml(opt_data.linkText) + '</a></span>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.tocItemBody.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.tocItemBody';
}


Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer = function(opt_data, opt_ignored) {
  return '<ul style="' + ((opt_data.cssliststyle) ? ' list-style: ' + soy.$$escapeHtml(opt_data.cssliststyle) + ';' : '') + ((opt_data.csslistindent) ? ' padding-left: ' + soy.$$escapeHtml(opt_data.csslistindent) + ';' : '') + '"></ul>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.listStyleTocLevelContainer';
}


Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer = function(opt_data, opt_ignored) {
  return '<li></li>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.listStyleTocItemContainer';
}


Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer = function(opt_data, opt_ignored) {
  return '<span class="' + soy.$$escapeHtml(opt_data.cssClass) + '"></span>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.flatStyleTocItemContainer';
}


Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator = function(opt_data, opt_ignored) {
  return '<span class="toc-separator">' + soy.$$escapeHtml(opt_data.separator) + '</span>';
};
if (goog.DEBUG) {
  Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator.soyTemplateName = 'Confluence.Plugins.TableOfContents.Client.flatStyleTocSeparator';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.synchrony-interop:synchrony-status-banner-loader', location = '/js/synchrony-down-banner-loader.js' */
'use strict';require(["ajs","wrm"],function(b,a){b.toInit(function(){!0===a.data.claim("com.atlassian.confluence.plugins.synchrony-interop:synchrony-status-banner-loader.synchrony-status")&&a.require("wrc!synchrony-interop-down-banner")})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'templates/recently.soy' */
// This file was automatically generated from recently.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace RY.Templates.
 */

if (typeof RY == 'undefined') { var RY = {}; }
if (typeof RY.Templates == 'undefined') { RY.Templates = {}; }


RY.Templates.body = function(opt_data, opt_ignored) {
  return '<div id="recently-viewed" class="aui-group"><div class="aui-item"><div class="top"><div class="filter"><form class="aui"><input class="filter-input text" type="text" placeholder="' + soy.$$escapeHtmlAttribute('Filter') + '"></form></div></div><div class="pages"></div></div></div>';
};
if (goog.DEBUG) {
  RY.Templates.body.soyTemplateName = 'RY.Templates.body';
}


RY.Templates.pageCollection = function(opt_data, opt_ignored) {
  return '<div class="groups"></div><div class="empty"></div>';
};
if (goog.DEBUG) {
  RY.Templates.pageCollection.soyTemplateName = 'RY.Templates.pageCollection';
}


RY.Templates.pageGroup = function(opt_data, opt_ignored) {
  return '<h3>' + soy.$$escapeHtml(opt_data.title) + '</h3><ul/>';
};
if (goog.DEBUG) {
  RY.Templates.pageGroup.soyTemplateName = 'RY.Templates.pageGroup';
}


RY.Templates.pageItem = function(opt_data, opt_ignored) {
  return '<a href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '><div class="page-icon"><span class="aui-icon content-type-' + soy.$$escapeHtmlAttribute(opt_data.type) + '">' + soy.$$escapeHtml(opt_data.type) + '</span></div><div class="page-title"><span class="ellipsis" href=' + soy.$$escapeHtmlAttributeNospace(soy.$$filterNormalizeUri(opt_data.href)) + '>' + soy.$$escapeHtml(opt_data.title) + ' - ' + soy.$$escapeHtml(opt_data.space) + '</span></div></a>';
};
if (goog.DEBUG) {
  RY.Templates.pageItem.soyTemplateName = 'RY.Templates.pageItem';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/util.js' */
var RY=RY||{};(function(){var b=new Date();var c=new Date(b).getTime();var a=new Date(b.getFullYear(),b.getMonth(),b.getDate()).getTime();var d=new Date(b.getFullYear(),b.getMonth(),b.getDate()-1).getTime();RY.util=RY.Util={analytics:{trackDialogOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-dialog-open"})},trackPageOpen:function(){AJS.trigger("analytics",{name:"recently-viewed-page-open"})}},quote:function(e){return(e).replace(/([.?*+^$[\]\\(){}|-])/g,"\\$1")},diffInDays:function(g,f){var e=1000*60*60*24;return Math.floor((g-f)/e)},daysSince:function(e){if(e>=a){return 0}else{if(e>=d){return 1}else{return RY.util.diffInDays(c,e)}}},wait:function(h,j,f){var i,k,e;var g=function(){k=setTimeout(function(){h.apply(f,e)},j)};return function(){e=arguments;var l=new Date();if(i&&l-i<j){clearTimeout(k)}g();i=l}}}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-storage.js' */
var RY=RY||{};RY.RecentPageStorage=function(h){var f="com.atlassian.confluence.plugins.recently.viewed.pages.v1";var d=100;var c={};var b=function(){var i=function(k,l){if(k==="lastSeen"&&_.isString(l)){return new Date(l).getTime()}else{return l}};try{c=JSON.parse(h.getItem(f),i)||{}}catch(j){c={}}return c};var g=function(){var i=_.values(c);var k=i.length-d;if(k>0){var j=_.sortBy(i,function(l){return l.lastSeen});_.times(k,function(){var l=j.shift();delete c[l.id]})}};var e=function(){g();try{h.setItem(f,JSON.stringify(c))}catch(i){}};this.addCurrentPage=function(i){if(!(i.id&&i.title)){return}b();a(i);e()};var a=function(i){var j=c[i.id];if(!j){c[i.id]=j={}}j=_.extend(j,i);j.lastSeen=new Date().getTime();j.count=j.count+1||1};this.getPages=function(){return _.values(b())}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/filter.js' */
var RY=RY||{};RY.FilterView=Backbone.View.extend({className:"filter",events:{"input .filter-input":"onInput","keyup .filter-input":"onInput","keydown .filter-input":"onKeydown"},initialize:function(){_.bindAll(this,"render","onInput","onKeydown","search");this.navigationEvents=this.options.navigationEvents;this.onInput=RY.util.wait(this.onInput,100,this)},render:function(){this.$input=this.$(".filter-input");return this},onInput:function(a){if(a&&_.contains([37,38,39,40],a.which)){return}this.search()},onKeydown:function(a){switch(a.which){case 13:this.navigationEvents.trigger("select");a.preventDefault();a.stopPropagation();break;case 38:this.navigationEvents.trigger("previous");a.preventDefault();break;case 40:this.navigationEvents.trigger("next");a.preventDefault();break}},search:function(){var a=this.$input.val();this.collection.search(a)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page-model.js' */
var RY=RY||{};(function(){var a;if(typeof ConfluenceMobile!="undefined"){a=ConfluenceMobile.AppData.get("confluence-context-path")}else{a=AJS.contextPath()}RY.Page=Backbone.Model.extend({href:function(){return a+this.get("url")},daysSinceLastSeen:function(){return RY.util.daysSince(this.get("lastSeen"))}});RY.PageCollection=Backbone.Collection.extend({model:RY.Page,url:a+"/rest/recentlyviewed/1.0/recent?includeTrashedContent=true",search:function(c){var b;if(this._queryLength(c)===0){b=this.models}else{var d=c.match(/[^\s-]+/g);b=this.filter(function(g){var h=g.get("title");var f=g.get("space");var e=(h+f).toLowerCase();return _.all(d,function(i){return e.indexOf(i.toLowerCase())!==-1})})}this.trigger("filter",b,c);return b},_queryLength:function(b){if(!String.prototype.trim){return AJS.$.trim(b).length}return b.trim().length},comparator:function(b){return -(b.get("lastSeen"))}})})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:app-resources', location = 'js/page.js' */
var RY=RY||{};RY.PageView=Backbone.View.extend({tagName:"li",className:"ry-page",template:RY.Templates.pageItem,initialize:function(){_.bindAll(this,"hide","show","render")},hide:function(){this.$el.hide().removeClass("shown")},show:function(){this.$el.show().addClass("shown")},render:function(){var a=this.model.toJSON();a.href=this.model.href();this.$el.html(this.template(a));return this}});RY.PageGroupView=Backbone.View.extend({className:"group",template:RY.Templates.pageGroup,initialize:function(){_.bindAll(this,"hide","hideAll","show","showBorder","showPages","add","render");this.title=this.options.title;this.modelViews={}},hide:function(){this.$el.hide()},hideAll:function(){this.$el.removeClass("border").hide();_.invoke(_.values(this.modelViews),"hide")},show:function(){this.$el.show()},showBorder:function(){this.$el.addClass("border")},showPages:function(a){var c=this;var b=false;_.each(a,function(e){var d=c.modelViews[e.cid];if(d){b=true;d.show()}});if(b){this.show()}return b},add:function(b){var a=new RY.PageView({model:b});this.modelViews[b.cid]=a;this.$list.append(a.render().el)},render:function(){this.$el.html(this.template({title:this.title}));this.$list=this.$("ul");return this}});RY.PageNavigator=function(a,e,c){var g=null;function f(){return a.find("li.shown")}function b(i){pageItems=f();var h=pageItems.index(pageItems.filter(".highlight"));if(g){g.removeClass("highlight")}i+=h;if(i<0){i=pageItems.length-1}if(i>=pageItems.length){i=0}g=pageItems.eq(i);g.addClass("highlight")}function d(){if(!g.length){return}var k=e;var l=k.children();var j=k.height();var i=g.outerHeight(true);var h=g.position().top;if(h<0){if(f().index(g)===0){k.scrollTop(0);return}k.scrollTop(g.offset().top-l.offset().top)}else{if(h>j){k.scrollTop(g.offset().top-l.offset().top-j+i)}}}c.on("select",function(){if(g&&g.is(":visible")){RY.util.analytics.trackPageOpen();var h=g.find(".page-title span").attr("href");window.location=h}},this);c.on("previous",function(){b(-1);d()},this);c.on("next",function(){b(1);d()},this)};RY.PageCollectionView=Backbone.View.extend({template:RY.Templates.pageCollection,events:{"click .page-title a":RY.util.analytics.trackPageOpen},initialize:function(){_.bindAll(this,"checkEmpty","filter","_groupForPage","addOne","showEmptyMessage","clearEmptyMessage","addAll","render");this.modelViews={};this.collection.on("reset",this.addAll,this);this.collection.on("add",this.addOne,this);this.collection.on("filter",this.filter,this)},checkEmpty:function(a,e){var f=this.collection.isEmpty();var b=a.length===0;if(f||b){var c;if(f){c="Sorry mate, looks like you haven\u0027t visited any pages yet."}else{var d=AJS.contextPath()+"/dosearchsite.action?queryString="+encodeURIComponent(e);c="We didn\u0027t find any matching pages in your history."+" "+AJS.format("\u003ca href=\u0022{0}\u0022\u003eClick here\u003c/a\u003e to search for this term instead.",d)}this.showEmptyMessage(c)}else{this.clearEmptyMessage()}},filter:function(b,d){d=d||"";this.checkEmpty(b,d);var a=[this.$today,this.$yesterday,this.$older];_.invoke(a,"hideAll");var c=[];_.each(a,function(f){var e=f.showPages(b);if(e){c.push(f)}});if(c.length>1){c.pop();_.invoke(c,"showBorder")}},_groupForPage:function(a){var b=a.daysSinceLastSeen();if(b===0){return this.$today}else{if(b===1){return this.$yesterday}else{return this.$older}}},addOne:function(a){var b=this._groupForPage(a);b.add(a)},showEmptyMessage:function(a){this.$(".empty").html(AJS.$("<p>").html(a))},clearEmptyMessage:function(){this.$(".empty").html("")},addAll:function(){this.collection.each(this.addOne)},render:function(){this.$el.html(this.template());this.$today=new RY.PageGroupView({title:"Today"});this.$yesterday=new RY.PageGroupView({title:"Yesterday"});this.$older=new RY.PageGroupView({title:"Older"});var a=this.$(".groups");a.append(this.$today.render().el);a.append(this.$yesterday.render().el);a.append(this.$older.render().el);_.invoke([this.$today,this.$yesterday,this.$older],"hideAll");return this}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.recently-viewed-plugin:main-resources', location = 'js/main.js' */
var RY=RY||{};AJS.toInit(function(a){a("#view-user-history-link").unbind("click");a("#view-user-history-link").click(function(g){g.preventDefault();var c=new AJS.Dialog({width:600,height:500,id:"recently-viewed-dialog",closeOnOutsideClick:true});var f=a(RY.Templates.body());c.addHeader("Recently viewed pages");c.addPanel("SinglePanel",f);c.addLink("Close",function(e){e.hide()});var d=a("<div>",{"class":"dialog-tip"}).text("Hint: type \u0022g\u0022 and then \u0022r\u0022 anywhere to quickly open this menu");c.popup.element.find(".dialog-button-panel").append(d);var i=new RY.PageCollection();var b=new RY.PageCollectionView({collection:i});f.find(".pages").html(b.render().el);c.gotoPanel(0);c.show();var h=a("#recently-viewed-dialog").spin("large");i.fetch({success:function(){h.spinStop();var j=_.extend({},Backbone.Events);var k=new RY.PageNavigator(b.$el,f.parent(),j);var e=new RY.FilterView({collection:i,el:f.find(".filter"),navigationEvents:j}).render();e.search()}});RY.util.analytics.trackDialogOpen()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.aui.staging:persistable', location = 'js/persistable.js' */
define("confluence/persistable",["skate","confluence/storage-manager"],function(f,g){var d=g("confluence","userSettings");return f("data-persist",{type:f.types.ATTRIBUTE,created:function(b){if(!b.name)throw'Missing attribute "name"';var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,a=d.getItem(a),e=b.getAttribute("data-default-value");if(/value|checked/.test(c))a=a||e||null,null!==a&&("checked"===c&&(a="true"===a),b[c]=a);else throw"Persistable only works with 'value' or 'checked' attributes!";
},events:{change:function(b){var c=b.getAttribute("data-persist"),a=b.getAttribute("data-persist-scope"),a=a?b.name+"."+a.replace(/\./g,"-"):b.name,e=b.getAttribute("data-default-value");String(b[c])===e?d.removeItem(a):d.setItem(a,b[c],2592E3)}}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-quicknav:quicknav-resources', location = 'js/quick-nav.js' */
'use strict';define("confluence-quicknav/quick-nav",["jquery","confluence/api/logger"],function(b,l){var f=[],d,g=function(a){return function(e){a.closest("form").find(".quick-nav-drop-down").append(e)}},h=function(a){"undefined"!==typeof a?f.push(a):l.log("WARN: Attempted to add a dropdown post-process function that was undefined.")},m=function(a){b("a",a).each(function(){var a=b(this),c=a.find("span").data("properties");(c=c?c.spaceName:null)&&!a.is(".content-type-spacedesc")&&(a.after(a.clone().attr("class",
"space-name").html(c)),a.parent().addClass("with-space-name"))})};return{addDropDownPostProcess:h,setMakeParams:function(a){d=a},init:function(){var a=b("#quick-search-query"),e=g(a),c=b("#space-blog-quick-search-query"),k=b("#confluence-space-key");a.quicksearch("/rest/quicknav/1/search",null,{dropdownPlacement:e,dropdownPostprocess:function(a){b.each(f,function(c,b){b&&b(a)})},makeParams:function(a){return d?d(a):{query:a}},ajsDropDownOptions:{className:"quick-search-dropdown"}});h(m);c.length&&
k.length&&c.quicksearch("/rest/quicknav/1/search?type\x3dblogpost\x26spaceKey\x3d"+b("\x3ci\x3e\x3c/i\x3e").html(k.attr("content")).text(),null,{dropdownPlacement:g(c)})}}});require("confluence/module-exporter").exportModuleAsGlobal("confluence-quicknav/quick-nav","Confluence.QuickNav");
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'de.griffel.confluence.plugins.plant-uml:plantuml-resources', location = 'soy/wizard-templates.soy' */
// This file was automatically generated from wizard-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace plantuml.wizard.
 */

if (typeof plantuml == 'undefined') { var plantuml = {}; }
if (typeof plantuml.wizard == 'undefined') { plantuml.wizard = {}; }


plantuml.wizard.page1FormUml = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_activity_diagram_simple">' + soy.$$escapeHtml('Activity Diagram') + '</option><option value="plantuml_template_class_diagram_simple">' + soy.$$escapeHtml('Class Diagram') + '</option><option value="plantuml_template_component_diagram_simple">' + soy.$$escapeHtml('Component Diagram') + '</option><option value="plantuml_template_state_diagram_simple">' + soy.$$escapeHtml('State Diagram') + '</option><option value="plantuml_template_sequence_diagram_simple">' + soy.$$escapeHtml('Sequence Diagram') + '</option><option value="plantuml_template_usecase_diagram_simple">' + soy.$$escapeHtml('Use Case Diagram') + '</option></select><p><a href="' + soy.$$escapeHtml('http://plantuml.sourceforge.net/classes.html') + '" class="external-link">' + soy.$$escapeHtml('UML Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormUml.soyTemplateName = 'plantuml.wizard.page1FormUml';
}


plantuml.wizard.page1FormGraphviz = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_graphviz_diagram_simple">' + soy.$$escapeHtml('Graphviz') + '</option><option value="plantuml_template_flowchart_diagram_simple">' + soy.$$escapeHtml('Flowchart') + '</option></select><p><a href="' + soy.$$escapeHtml('http://www.graphviz.org/Documentation.php') + '" class="external-link">' + soy.$$escapeHtml('Graphviz Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormGraphviz.soyTemplateName = 'plantuml.wizard.page1FormGraphviz';
}


plantuml.wizard.page1FormDitaa = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_ditaa_diagram_simple">' + soy.$$escapeHtml('DITAA') + '</option></select><p><a href="' + soy.$$escapeHtml('http://ditaa.sourceforge.net/') + '" class="external-link">' + soy.$$escapeHtml('DITAA Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormDitaa.soyTemplateName = 'plantuml.wizard.page1FormDitaa';
}


plantuml.wizard.page1FormJcckit = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_jcckit_diagram_simple">' + soy.$$escapeHtml('JCCKit') + '</option></select><p><a href="' + soy.$$escapeHtml('http://plantuml.sourceforge.net/jcckit.html') + '" class="external-link">' + soy.$$escapeHtml('JCCKit Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormJcckit.soyTemplateName = 'plantuml.wizard.page1FormJcckit';
}


plantuml.wizard.page1FormPlantuml = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Function') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_plantuml_spacegraph">' + soy.$$escapeHtml('Spacegraph') + '</option><option value="plantuml_template_plantuml_version">' + soy.$$escapeHtml('PlantUML Version Info') + '</option><option value="plantuml_template_plantuml_xearth">' + soy.$$escapeHtml('XEarth') + '</option></select><p><a href="' + soy.$$escapeHtml('plantuml.blueprint.wizard.plantumlxearth.documentation_url') + '" class="external-link">' + soy.$$escapeHtml('plantuml.blueprint.wizard.plantumlxearth.documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormPlantuml.soyTemplateName = 'plantuml.wizard.page1FormPlantuml';
}


plantuml.wizard.page1FormSalt = function(opt_data, opt_ignored) {
  return '<form action="#" method="post" class="aui"><fieldset><div class="field-group"><label for="template-key">' + soy.$$escapeHtml('Type') + '</label><select id="template-key" class="select" name="contentTemplateKey"><option value="plantuml_template_salt_diagram_simple">' + soy.$$escapeHtml('Salt') + '</option></select><p><a href="' + soy.$$escapeHtml('http://plantuml.sourceforge.net/salt.html') + '" class="external-link">' + soy.$$escapeHtml('Salt Documentation') + '</a></p></div></fieldset></form>';
};
if (goog.DEBUG) {
  plantuml.wizard.page1FormSalt.soyTemplateName = 'plantuml.wizard.page1FormSalt';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'templates/anchor.soy' */
// This file was automatically generated from anchor.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace MyWork.Templates.Anchor.
 */

if (typeof MyWork == 'undefined') { var MyWork = {}; }
if (typeof MyWork.Templates == 'undefined') { MyWork.Templates = {}; }
if (typeof MyWork.Templates.Anchor == 'undefined') { MyWork.Templates.Anchor = {}; }


MyWork.Templates.Anchor.tasksFeatureDiscovery = function(opt_data, opt_ignored) {
  return '<p>' + soy.$$escapeHtml('See the tasks assigned to you, or created by you, in the Tasks tab of your profile.') + '</p><ul class="mw-tasks-discovery-controls"><li><a id="mw-tasks-discovery-view" href="' + soy.$$escapeHtml(opt_data.tasksUrl) + '" class="aui-button aui-style"><p>' + soy.$$escapeHtml('View Tasks') + '</p></a></li><li><a id="mw-tasks-discovery-dismiss" href="#">' + soy.$$escapeHtml('Dismiss') + '</a></li></ul>';
};
if (goog.DEBUG) {
  MyWork.Templates.Anchor.tasksFeatureDiscovery.soyTemplateName = 'MyWork.Templates.Anchor.tasksFeatureDiscovery';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/miniview-anchor.js' */
var MW=MW||{$:jQuery};MW.MV={};AJS.toInit(function(){if(AJS.Meta&&!AJS.Meta.get("remote-user")){return}MW.MV.AnchorManager=function(){var l=contextPath,h=l+"/plugins/servlet/notifications-miniview",p=0,e=/[?&]show-miniview/.test(window.location.search);function r(t){t=t.replace(/[\[]/,"\\[").replace(/[\]]/,"\\]");var s="[\\?\\#&]"+t+"=([^&#]*)";var v=new RegExp(s);var u=v.exec(window.location.search);if(u!==null){return decodeURIComponent(u[1].replace(/\+/g," "))}}var o=r("show-miniview");if(o){h+="#notification/"+o}function q(){var s="badge-i aui-icon aui-icon-small aui-iconfont-notification";MW.$("#notifications-anchor").html('<div class="'+s+'"></div><span class="badge-w"><span class="badge"></span></span>').attr("title","Open Notifications")}function f(u){var t=false,s;return function(){if(t){return s}t=true;s=u.apply(this,arguments);return s}}var n=f(function(){MW.Dialog.getOptions().closeOthers=false;MW.Dialog.preload=true;MW.Dialog.show();MW.Dialog.hide();MW.Dialog.getOptions().closeOthers=true});function k(s){return s<=9?s:"9+"}function j(s){var t=MW.$("#notifications-anchor"),u=t.find(".badge"),v=t.find(".aui-icon");u.html(k(s));p=s;if(s>0){t.addClass("unread").removeClass("read");if(t.is(":visible")&&!e){n()}}else{t.addClass("read").removeClass("unread")}}function m(){c("notifications",h);d()}function d(){MW.$(document).keydown(function(s){if(AJS.InlineDialog.current&&s.which==27&&!MW.$(s.target).is(":input")){AJS.InlineDialog.current.hide()}})}function i(){MW.$("#header-menu-bar").find(".ajs-drop-down").each(function(){this.hide()})}function c(x,v){var w;var u=function(){w=this};var s=function(){if(this.preload!==true){var y=JSON.stringify({markAllRead:true});MW.$("#"+x+"-miniview-iframe")[0].contentWindow.postMessage(y,"*")}};if(!window.addEventListener){window.attachEvent("onmessage",t)}else{window.addEventListener("message",t,false)}function t(A){function B(C){return C===location.protocol+"//"+location.host}if("escKey"===A.data){w.hide();MW.$("#notifications-anchor").focus();document.activeElement.blur()}else{if("getParentConfig"===A.data&&B(A.origin)){var z=JSON.stringify({parentConfig:{parentUrl:location.href,preload:MW.Dialog.preload,unread:p}}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(z,"*");if(MW.Dialog.preload){MW.Dialog.preload=false}else{y.focus()}}}}MW.Dialog=AJS.InlineDialog(MW.$("#"+x+"-anchor"),x+"-miniview",function(B,z,C){if(MW.$(B).children().length===0){MW.$(B).append(MW.$('<iframe id="'+x+'-miniview-iframe" src="'+v+'" frameborder="0"></iframe>'))}else{var A=JSON.stringify({unread:p}),y=MW.$("#"+x+"-miniview-iframe")[0].contentWindow;y.postMessage(A,"*");setTimeout(function(){y.focus()},100)}i();C()},{width:500,height:520,hideDelay:null,initCallback:u,hideCallback:s,noBind:true});MW.Tasks=(function(){var A=300;var z=20;var B=16;var G;var D=$("#user-menu-link");var C=$("#user-menu-link-content");var y=C.find("#view-mytasks-link");var E=function(J,H,K){var I=MyWork.Templates.Anchor.tasksFeatureDiscovery({tasksUrl:AJS.contextPath()+"/plugins/inlinetasks/mytasks.action"});J.html(I);J.find("#mw-tasks-discovery-dismiss").click(function(){G.hide()});K()};var F=function(){MW.Dialog.hide();var J=function(){return C.is(":visible")};if(!J()){D.trigger("aui-button-invoke")}var H=function(){G.hide()};C.one("aui-dropdown2-hide",H);G=AJS.InlineDialog(y,"my-tasks-discovery",E,{hideCallback:function(){G.unbind("click focusin mousedown",I);C.unbind("aui-dropdown2-hide",H);if(J()){D.trigger("aui-button-invoke")}MW.$("#inline-dialog-my-tasks-discovery").remove()},gravity:"w",useLiveEvents:true,width:A,noBind:true});C.find(".user-item.active").removeClass("active");y.addClass("active");y.focus();var I=function(K){K.stopPropagation()};G.on("click focusin mousedown",I);G.show()};return{closeAndDiscoverMyTasks:F}})();MW.$("#"+x+"-anchor").click(function(y){y.preventDefault();if(MW.$("#"+x+"-miniview-iframe").is(":visible")){MW.Dialog.hide()}else{MW.Dialog.show()}});if(e){MW.$("#"+x+"-anchor").click()}}function g(){q();m()}return{setupAnchors:g,updateNotificationCount:j}}();MW.MV.AnchorManager.setupAnchors();var b=new MW.AnchorUtil(MW.$,contextPath,MW.MV.AnchorManager.updateNotificationCount);b.setupAnchors();MW.$("#notifications-anchor").click(function(){AJS.trigger("analytics",{name:"mywork.host.button.clicked.notifications",data:{}});MW.MV.AnchorManager.updateNotificationCount(0)});var a=function(){if(document.hidden){b.stopRequests(true)}else{b.startRequests()}};document.addEventListener("visibilitychange",a,false);if(typeof document.hidden==="undefined"){MW.$(window).focus(function(){b.startRequests()})}MW.$("body").click(function(){b.startRequests()})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.mywork.mywork-confluence-host-plugin:mw-header-anchor', location = 'js/util/anchor-util.js' */
MW.AnchorUtil=function(d,k,e){var f=30000,i=f,s,p=k+"/rest/mywork/latest/status/notification/count";var r=new Date().getTime();var b=5*60*1000;var t=1000*60*5;var h=1.25;var c=0;function q(u){window.clearInterval(s);s=undefined;if(u===true){i=f}}function o(){return(new Date().getTime()-r)<t}function m(){if(!o()||!s){l()}r=new Date().getTime()}function l(){if(s){clearTimeout(s)}s=setTimeout(function(){g()},c=n(c))}function a(w,u){var v=w*1000;b=u*1000||b;if(v&&v!=i){i=v;m()}}function n(u){return Math.min(o()?i:u*h,b)}function g(u){MW.$.getJSON(p+((u)?"?pageid="+u:""),function(w){a(w.timeout,w.maxTimeout);var v=w.count;e(v)});l()}function j(){var u=AJS&&AJS.Meta&&AJS.Meta.get&&(AJS.Meta.get("content-type")==="page"||AJS.Meta.get("content-type")==="blogpost");if(u){g(AJS.Meta.get("page-id"))}else{g()}m()}return{setupAnchors:j,startRequests:m,stopRequests:q,updateAnchors:g}};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:common-template-resources', location = 'com/atlassian/confluence/plugins/blueprint/common/soy/common-templates.soy' */
// This file was automatically generated from common-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Common.Index.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Common == 'undefined') { Confluence.Blueprints.Common = {}; }
if (typeof Confluence.Blueprints.Common.Index == 'undefined') { Confluence.Blueprints.Common.Index = {}; }


Confluence.Blueprints.Common.Index.detailsSummaryMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="detailssummary"><ac:parameter ac:name="label">' + soy.$$escapeHtml(opt_data.label) + '</ac:parameter><ac:parameter ac:name="spaces">' + soy.$$escapeHtml(opt_data.spaces) + '</ac:parameter><ac:parameter ac:name="firstcolumn">' + soy.$$escapeHtml(opt_data.firstcolumn) + '</ac:parameter><ac:parameter ac:name="headings">' + soy.$$escapeHtml(opt_data.headings) + '</ac:parameter><ac:parameter ac:name="blankTitle">' + soy.$$escapeHtml(opt_data.blankTitle) + '</ac:parameter><ac:parameter ac:name="blankDescription">' + soy.$$escapeHtml(opt_data.blankDescription) + '</ac:parameter><ac:parameter ac:name="contentBlueprintId">' + soy.$$escapeHtml(opt_data.contentBlueprintId) + '</ac:parameter><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.blueprintModuleCompleteKey) + '</ac:parameter><ac:parameter ac:name="createButtonLabel">' + soy.$$escapeHtml(opt_data.createButtonLabel) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.detailsSummaryMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.detailsSummaryMacro';
}


Confluence.Blueprints.Common.Index.createFromTemplateMacro = function(opt_data, opt_ignored) {
  return '<ac:macro ac:name="create-from-template"><ac:parameter ac:name="blueprintModuleCompleteKey">' + soy.$$escapeHtml(opt_data.moduleKey) + '</ac:parameter><ac:parameter ac:name="buttonLabel">' + soy.$$escapeHtml(opt_data.buttonLabel) + '</ac:parameter><ac:parameter ac:name="spaceKey">' + soy.$$escapeHtml(opt_data.spaceKey) + '</ac:parameter><ac:parameter ac:name="templateName">' + soy.$$escapeHtml(opt_data.templateName) + '</ac:parameter></ac:macro>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Common.Index.createFromTemplateMacro.soyTemplateName = 'Confluence.Blueprints.Common.Index.createFromTemplateMacro';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/how-to.soy' */
// This file was automatically generated from how-to.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Blueprints.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Blueprints == 'undefined') { Confluence.Blueprints = {}; }
if (typeof Confluence.Blueprints.Meeting == 'undefined') { Confluence.Blueprints.Meeting = {}; }
if (typeof Confluence.Blueprints.Meeting.Notes == 'undefined') { Confluence.Blueprints.Meeting.Notes = {}; }


Confluence.Blueprints.Meeting.Notes.howTo = function(opt_data, opt_ignored) {
  return '<h1>' + soy.$$escapeHtml('With meeting notes you can...') + '</h1><ol class="howto-steps"><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Crowd-source your agenda') + '</h3><p>' + soy.$$escapeHtml('Distribute an agenda and keep meetings focused.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Capture meeting minutes') + '</h3><p>' + soy.$$escapeHtml('Take notes and make them available to everyone.') + '</p></div></li><li class="howto-step"><div><h3>' + soy.$$escapeHtml('Create and assign tasks') + '</h3><p>' + soy.$$escapeHtml('Assign action items for attendees to work on afterward.') + '</p></div></li></ol>';
};
if (goog.DEBUG) {
  Confluence.Blueprints.Meeting.Notes.howTo.soyTemplateName = 'Confluence.Blueprints.Meeting.Notes.howTo';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-business-blueprints:meeting-notes-resources', location = 'com/atlassian/confluence/plugins/meetingnotes/soy/user-mention.soy' */
// This file was automatically generated from user-mention.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.Meeting.Notes.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.Meeting == 'undefined') { Confluence.Templates.Meeting = {}; }
if (typeof Confluence.Templates.Meeting.Notes == 'undefined') { Confluence.Templates.Meeting.Notes = {}; }


Confluence.Templates.Meeting.Notes.userMention = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '' + ((opt_data.userkey) ? '<li><p><ac:link><ri:user ri:userkey="' + soy.$$escapeHtml(opt_data.userkey) + '" /></ac:link></p></li><li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>' : '<li><p><ac:placeholder ac:type="mention">' + soy.$$escapeHtml('@mention a person to add them as an attendee and they will be notified.') + '</ac:placeholder></p></li>');
};
if (goog.DEBUG) {
  Confluence.Templates.Meeting.Notes.userMention.soyTemplateName = 'Confluence.Templates.Meeting.Notes.userMention';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/store-1.3.1.js' */
(function(){var l={},h=window,k=h.document,c="localStorage",n="globalStorage",d="__storejs__",g;l.disabled=false;l.set=function(e,o){};l.get=function(e){};l.remove=function(e){};l.clear=function(){};l.transact=function(e,o){var p=l.get(e);if(typeof p=="undefined"){p={}}o(p);l.set(e,p)};l.serialize=function(e){return JSON.stringify(e)};l.deserialize=function(e){if(typeof e!="string"){return undefined}return JSON.parse(e)};function b(){try{return(c in h&&h[c])}catch(e){return false}}function m(){try{return(n in h&&h[n]&&h[n][h.location.hostname])}catch(e){return false}}if(b()){g=h[c];l.set=function(e,o){if(o===undefined){return l.remove(e)}g.setItem(e,l.serialize(o))};l.get=function(e){return l.deserialize(g.getItem(e))};l.remove=function(e){g.removeItem(e)};l.clear=function(){g.clear()}}else{if(m()){g=h[n][h.location.hostname];l.set=function(e,o){if(o===undefined){return l.remove(e)}g[e]=l.serialize(o)};l.get=function(e){return l.deserialize(g[e]&&g[e].value)};l.remove=function(e){delete g[e]};l.clear=function(){for(var e in g){delete g[e]}}}else{if(k.documentElement.addBehavior){var j,f;try{f=new ActiveXObject("htmlfile");f.open();f.write('<script>document.w=window<\/script><iframe src="/favicon.ico"></frame>');f.close();j=f.w.frames[0].document;g=j.createElement("div")}catch(i){g=k.createElement("div");j=k.body}function a(e){return function(){var p=Array.prototype.slice.call(arguments,0);p.unshift(g);j.appendChild(g);g.addBehavior("#default#userData");g.load(c);var o=e.apply(l,p);j.removeChild(g);return o}}l.set=a(function(p,e,o){if(o===undefined){return l.remove(e)}p.setAttribute(e,l.serialize(o));p.save(c)});l.get=a(function(o,e){return l.deserialize(o.getAttribute(e))});l.remove=a(function(o,e){o.removeAttribute(e);o.save(c)});l.clear=a(function(q){var o=q.XMLDocument.documentElement.attributes;q.load(c);for(var p=0,e;e=o[p];p++){q.removeAttribute(e.name)}q.save(c)})}}}try{l.set(d,d);if(l.get(d)!=d){l.disabled=true}l.remove(d)}catch(i){l.disabled=true}if(typeof module!="undefined"){module.exports=l}else{if(typeof define==="function"&&define.amd){define(l)}else{this.store=l}}})();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/page-visibility.js' */
define("atlassian/analytics/page-visibility",function(){var a=(document.hidden!==undefined);var b={supported:a,isHidden:function(){return a?document.hidden:false}};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/user-activity-xhr-header.js' */
define("atlassian/analytics/user-activity-xhr-header",["atlassian/analytics/page-visibility"],function(c){var e="x-atlassian-mau-ignore";var d=XMLHttpRequest.prototype.send;var a=window.fetch;var b=false;return{install:function(){if(!b&&c.supported){XMLHttpRequest.prototype.send=function(){if(c.isHidden()){this.setRequestHeader(e,c.isHidden())}d.apply(this,arguments)};if(a){window.fetch=function(f,i){var g=i||{};var h=g.headers;if(c.isHidden()){g.headers=(h)?new Headers(h):new Headers();g.headers.append(e,c.isHidden())}return a.call(this,f,g)}}b=true}},uninstall:function(){if(b){XMLHttpRequest.prototype.send=d;if(a){window.fetch=a}}b=false}}});require("atlassian/analytics/user-activity-xhr-header").install();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:js-events', location = 'js/atlassian-analytics.js' */
(function(d){var q=AJS.$.ajax;var l="atlassian-analytics";var j=typeof AJS.contextPath==="function"?AJS.contextPath():"";var p=null;var m=null;var g=null;var r="xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g,function(z){var y=Math.random()*16|0,x=z=="x"?y:(y&3|8);return x.toString(16)});var t=function(){var x="unknown";if(document.body.id=="jira"){x="jira"}else{if(document.body.id=="com-atlassian-confluence"){x="confluence"}}m=l+"."+x;g=m+".lock"};var f=function(){if(store.get(g)){return false}store.set(g,r);return(store.get(g)===r)};var u=function(){store.set(g,null)};var i=function(){var y=[],A,B,x,z;if(AJS.EventQueue.length==0){return}y=store.get(m)||y;for(x=0,z=AJS.EventQueue.length;x<z;++x){B=AJS.EventQueue[x];if(B.name){A={name:B.name,properties:B.properties,time:B.time||0};y.push(A)}}AJS.EventQueue.length=0;store.set(m,y)};var v=0;var a=function(x){return Math.min(5000*Math.pow(2,x),5*60*1000)};var e=0;var h=function(){var A;function y(){setTimeout(h,a(v=0))}function x(){setTimeout(h,a(++v))}if(!f()){++e;if(e<20){return y()}}else{e=0}try{i();A=store.get(m);if(!A||!A.length){return y()}store.remove(m);if(!o(A)){return y()}var B=new Date().getTime();for(var z=0;z<A.length;z++){if(A[z].time>0){A[z].timeDelta=A[z].time-B}else{A[z].timeDelta=z-A.length}delete A[z].time}p=q({type:"POST",url:j+"/rest/analytics/1.0/publish/bulk",data:JSON.stringify(A),contentType:"application/json",dataType:"json"});p.fail(function(){AJS.EventQueue.concat(A);i();x()});p.done(function(){y()})}finally{u()}};var o=function(z){for(var y=z.length-1;y>=0;y--){var B="";var A=z[y];var x=A.properties;if(typeof A.name==="undefined"){B="you must provide a name for the event."}else{if(typeof x!=="undefined"&&x!==null){if(x.constructor!==Object){B="properties must be an object with key value pairs."}else{b(x)}}}if(B!==""){AJS.log("WARN: Invalid analytics event detected and ignored, "+B+"\nEvent: "+JSON.stringify(A));z.splice(y,1)}}return z.length};var b=function(z){for(var y in z){if(z.hasOwnProperty(y)){var x=z[y];if(c(x)&&k(x)){}else{if(c(x)&&x.toString){z[y]=x.toString()}else{z[y]=""}}}}};function c(x){return typeof x!=="undefined"&&x!==null}function k(x){return typeof x==="number"||typeof x==="string"||typeof x==="boolean"}var n=function(){if(p&&!(p.state()==="resolved"||p.state()==="rejected")){p.abort()}};AJS.EventQueue=AJS.EventQueue||[];var s=Array.prototype.push;AJS.EventQueue.push=function(x){x.time=new Date().getTime();s.call(AJS.EventQueue,x)};AJS.toInit(function(){t();setTimeout(h,500);w()});d(window).unload(function(){n();i()});AJS.Analytics={triggerPrivacyPolicySafeEvent:function(x,y){AJS.log("WARN: 'triggerPrivacyPolicySafeEvent' has been deprecated");AJS.EventQueue.push({name:x,properties:y})}};AJS.bind("analytics",function(x,y){AJS.EventQueue.push({name:y.name,properties:y.data})});AJS.bind("analyticsEvent",function(x,y){AJS.EventQueue.push({name:y.name,properties:y.data})});var w=function(){if(window.location.pathname.indexOf("/secure/admin/ViewApplicationProperties")>-1){AJS.$("[data-property-id='analytics-enabled']").remove()}else{if(window.location.pathname.indexOf("/secure/admin/EditApplicationProperties")>-1){var y=AJS.$(":contains(Enable Atlassian analytics)");if(y.size()>0){var x=y[y.size()-2];if(x){x.remove()}}}}}}(AJS.$));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:policy-update-init', location = 'js/policy-update-init.js' */
AJS.toInit(function(){var a=WRM.data.claim("com.atlassian.analytics.analytics-client:policy-update-init.policy-update-data-provider");if(a){WRM.require("wrc!com.atlassian.analytics.analytics-client:policy-update")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.analytics.analytics-client:programmatic-analytics-init', location = 'js/programmatic-analytics-init.js' */
(function(){var a=WRM.data.claim("com.atlassian.analytics.analytics-client:programmatic-analytics-init.programmatic-analytics-data-provider");if(a){WRM.require("wrc!com.atlassian.analytics.analytics-client:programmatic-analytics")}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:application-header-administration-cog-resource', location = 'header/cog.js' */
var NavLinks=(function(a){a.ApplicationHeader=function(b){b.Cog=(function(){var c=function(){var d=AJS.$("#system-admin-menu-content");if(d.length>0){return d}var e=AJS.$("#admin-menu-link-content");if(e.length>0){return e}return AJS.$("#bamboo\\.global\\.header-admin\\.menu")};return{getDropdown:c}}());return b}(a.ApplicationHeader||{});return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminshortcuts.soy' */
// This file was automatically generated from adminshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.adminshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.adminshortcuts == 'undefined') { navlinks.templates.adminshortcuts = {}; }


navlinks.templates.adminshortcuts.section = function(opt_data, opt_ignored) {
  var param5 = '<ul class="aui-list-truncate">';
  var linkList7 = opt_data.links;
  var linkListLen7 = linkList7.length;
  for (var linkIndex7 = 0; linkIndex7 < linkListLen7; linkIndex7++) {
    var linkData7 = linkList7[linkIndex7];
    param5 += '<li><a href="' + soy.$$escapeHtml(linkData7.link) + '">' + soy.$$escapeHtml(linkData7.label) + '</a></li>';
  }
  param5 += '</ul>';
  var output = '' + aui.dropdown2.section({id: 'nl-remote-admin-section', label: 'Other applications', content: param5});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.adminshortcuts.section.soyTemplateName = 'navlinks.templates.adminshortcuts.section';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts-resources', location = 'adminshortcuts/adminnavlinks.js' */
var NavLinks=(function(a){a.AdminShortcuts=(function(){var c=function(){return AJS.$.ajax({url:AJS.contextPath()+"/rest/menu/latest/admin",cache:false,dataType:"json"})};var b=function(){AJS.$("#nl-remote-admin-section").on("click","a",function(){NL.trackEvent("remoteAdminItemSelected",NL.getCurrentApplication(),$(this).attr("href"))})};return{render:function(){c().done(function(e){e=_.reject(e,function(f){return f.local===true});if(e.length){var d=navlinks.templates.adminshortcuts.section({links:e});a.ApplicationHeader.Cog.getDropdown().append(d);b()}})}}}());return a}(NavLinks||{}));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:administration-shortcuts', location = 'adminshortcuts/adminshortcuts-cdn.js' */
AJS.toInit(function(){if(AJS.DarkFeatures&&AJS.DarkFeatures.isEnabled("rotp.admin.shortcuts")){NavLinks.AdminShortcuts.render()}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.splitchunk.vendors--02a4084a95', location = 'aui.chunk.44a84b38d918ac48f23e--0bb7ce9e7417a425cdd3.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.splitchunk.vendors--02a4084a95"],{M4tZ:function(E,n,o){var i,u,A;u=[o("oDIA"),o("O+lX")],void 0===(A="function"==typeof(i=function(E){return E.ui.keyCode={BACKSPACE:8,COMMA:188,DELETE:46,DOWN:40,END:35,ENTER:13,ESCAPE:27,HOME:36,LEFT:37,PAGE_DOWN:34,PAGE_UP:33,PERIOD:190,RIGHT:39,SPACE:32,TAB:9,UP:38}})?i.apply(n,u):i)||(E.exports=A)}}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_jquery.ui.keycode', location = 'aui.chunk.d175379a9b4e384fcbc6--5bd6af766d5f5cd45e54.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["jquery.ui.keycode"],{wrJm:function(u,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),i("M4tZ"),e.default="jquery",u.exports=e.default}},[["wrJm","runtime","aui.splitchunk.vendors--20a97d6a33","aui.splitchunk.vendors--02a4084a95","aui.splitchunk.172ffb6da7"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.soy' */
// This file was automatically generated from projectshortcuts.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.projectshortcuts.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.projectshortcuts == 'undefined') { navlinks.templates.projectshortcuts = {}; }


navlinks.templates.projectshortcuts.dialogContent = function(opt_data, opt_ignored) {
  return '' + ((opt_data.localShortcuts && opt_data.localShortcuts.length > 0) ? navlinks.templates.projectshortcuts.dialogContentShortcuts({shortcuts: opt_data.localShortcuts, listClass: 'projectshortcut-links'}) : '') + ((opt_data.remoteShortcuts != null) ? (opt_data.remoteShortcuts.length > 0) ? '<h2 class="projectshortcuts-heading">Related Links</h2>' + navlinks.templates.projectshortcuts.dialogContentShortcuts(soy.$$augmentMap(opt_data.remoteShortcuts, {shortcuts: opt_data.remoteShortcuts, listClass: 'projectshortcut-links'})) : '' : navlinks.templates.projectshortcuts.dialogLoading(null));
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContent.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContent';
}


navlinks.templates.projectshortcuts.headingWrapper = function(opt_data, opt_ignored) {
  return '<div class="project-dialog-header-wrapper"><div class="project-header"><img class="project-img" src="' + soy.$$escapeHtml(opt_data.logoUrl) + '"><h2 class="dialog-title">' + soy.$$escapeHtml(opt_data.title) + '</h2></div><div class="project-content-wrapper">' + soy.$$filterNoAutoescape(opt_data.contentHtml) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.headingWrapper.soyTemplateName = 'navlinks.templates.projectshortcuts.headingWrapper';
}


navlinks.templates.projectshortcuts.dialogContentShortcuts = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  var output = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
  var shortcutList35 = opt_data.shortcuts;
  var shortcutListLen35 = shortcutList35.length;
  for (var shortcutIndex35 = 0; shortcutIndex35 < shortcutListLen35; shortcutIndex35++) {
    var shortcutData35 = shortcutList35[shortcutIndex35];
    output += '<li' + ((shortcutIndex35 == shortcutListLen35 - 1) ? ' class="last"' : '') + '>' + navlinks.templates.projectshortcuts.dialogContentShortcut(shortcutData35) + '</li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcuts.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcuts';
}


navlinks.templates.projectshortcuts.dialogContentShortcut = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.link) + '"' + ((opt_data.tooltip) ? ' title="' + soy.$$escapeHtml(opt_data.tooltip) + '"' : '') + '>' + soy.$$escapeHtml(opt_data.label) + '</a>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogContentShortcut.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogContentShortcut';
}


navlinks.templates.projectshortcuts.dialogLoading = function(opt_data, opt_ignored) {
  opt_data = opt_data || {};
  return '<div class="projectshortcuts-loading">' + ((opt_data.text) ? soy.$$escapeHtml(opt_data.text) : '') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.projectshortcuts.dialogLoading.soyTemplateName = 'navlinks.templates.projectshortcuts.dialogLoading';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-projectshortcuts', location = 'projectshortcuts/projectshortcuts.js' */
(function(e,g){var i,k={},m="key",b="name",j="entity-type";function f(s){var n=e(this),o=n.data(m),q=n.data(b),p=n.data(j);if(typeof o==="undefined"){return}s.preventDefault();i=new AJS.Dialog({width:600,keypressListener:function(u){if(u.which==jQuery.ui.keyCode.ESCAPE){i.remove()}},id:"project-shortcuts-dialog"}).addCancel("Close",function(){i.remove()}).addPanel("",navlinks.templates.projectshortcuts.headingWrapper({title:q,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogLoading({text:"Retrieving links…"})})).show();c(i);if(!k[o]){k[o]={entity:{title:q},localShortcuts:null,remoteShortcuts:null};d(AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+o,{entityType:p}).done(t);d(AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+o,{entityType:p}).done(r).fail(function(){var u=i.getCurrentPanel().body.find(".project-content-wrapper");u.find(".projectshortcuts-loading").remove();AJS.messages.error(u,{body:"Could not retrieve remote project shortcuts",closeable:false});c(i)})}else{l(k[o])}function t(u){k[o].localShortcuts=u.shortcuts;l(k[o])}function r(u){k[o].remoteShortcuts=u.shortcuts;l(k[o])}}function h(){return e(".project-shortcut-dialog-trigger img").attr("src")}function l(n){if(n.localShortcuts){i.getCurrentPanel().html(navlinks.templates.projectshortcuts.headingWrapper({title:n.entity.title,logoUrl:h(),contentHtml:navlinks.templates.projectshortcuts.dialogContent(n)}));c(i)}}function a(p){var o=210;if(!p||p.length<=o){return p}var n=o;while(n>0&&p.charAt(n)!=" "){n--}if(n==0){n=o}p=p.substring(0,n);if(p.length>=n){p=p+"..."}return p}function c(n){var q=n.popup.element,p=q.find(".dialog-panel-body"),o=q.find(".dialog-components");p.height("auto");q.height(o.outerHeight()-1);e(".aui-shadow").remove()}function d(n,o){return e.ajax({url:n,cache:false,data:o,dataType:"json"})}e(document).on("click",".project-shortcut-dialog-trigger",f)}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:atlassian-ui-popup-display-controller', location = 'popups/DisplayController.js' */
AJS.Popups=AJS.Popups||{};AJS.Popups.DisplayController=function(){var c=[];var a=false;var b=false;AJS.toInit(function(){setTimeout(function(){AJS.Popups.DisplayController.render()},0)});return{request:function(d){c.push(d);if(a&&b===false){this.render()}},render:function(){c.sort(function(e,d){return e.weight-d.weight});a=true;if(c.length!==0){b=true;c[0].show()}}}}();
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.page.iconography', location = 'aui.chunk.bdafbba768eff22233fc--8f22190d7e95afd6cbd1.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.page.iconography"],[],[["rSV2","runtime","aui.splitchunk.b0831cc7d0","aui.splitchunk.336ae4f9e7","aui.splitchunk.56dfb54d0c","aui.splitchunk.908fe798b4"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jira-issues-view-mode-resources', location = 'jira/jira-issues-view-mode/main.js' */
require(["ajs","jquery"],function(b,d){var a="wr!confluence.extra.jira:jira-issues-view-mode-async-resource";var c=function(){var e=d(".wiki-content [data-jira-key][data-client-id]");if(e.length==0){return false}WRM.require(a,function(){require(["confluence/jim/jira/jira-issues-view-mode/lazy-loading","confluence/jim/jira/jira-issues-view-mode/fix-ui"],function(g,f){g.init(e).done(function(){f.fixBreakIconInOldConf()})})})};b.toInit(c);b.bind("ic-jim-async-supported",c)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/confluence-shim.js' */
define("confluence/jim/confluence-shim",function(){return window.Confluence});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:amd-support', location = 'amd/amd-exporter.js' */
define("confluence/jim/amd/module-exporter",[],function(){var a={};a.namespace=function(f,g,e){var h=f.split(".");var c=e||window;var d;var j=h.length-1;for(d=0;d<j;d++){var b=c[h[d]];c=(b!=null)?b:c[h[d]]={}}if(c[h[d]]){if(window.console&&window.console.warn){window.console.warn('Value of "'+f+'" was overridden')}}c[h[d]]=g||c[h[d]]||{};return c[h[d]]};a.safeRequire=function(c,b){if(define&&define.amd===undefined){var d=require(c);if(b){b(d)}}};a.exportModuleAsGlobal=function(c,d,b){a.safeRequire(c,function(e){a.namespace(d,e);if(b){b(e)}})};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:lodash-amd', location = 'applinks/internal/lib/lodash-amd-global.js' */
define("applinks/lib/lodash",function(){if(!window._){throw"lodash not found"}return window._});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/lib-version.js' */
define("applinks/lib/version",["applinks/lib/lodash"],function(c){function d(f,g){if(c.isUndefined(f)){return 0}else{if(typeof f!=="number"||isNaN(f)){throw new Error(g+": expected a number, was: <"+f+">")}else{return Math.floor(f)}}}function a(f,g){if(!f||!(f instanceof e)){throw new Error(g+": expected a Version object, was: <"+f+">")}return f}function b(f,g){return f>g?1:f==g?0:-1}function e(g,h,f){this.major=d(g,"major");this.minor=d(h,"minor");this.bugfix=d(f,"bugfix")}e.parse=function(g,h){h=h||"versionString";if(!g){throw new Error(h+": expected a non-empty string")}var f=g.split(".");if(f.length!==3){throw new Error(h+": expected <major>.<minor>.<bugfix> string, was: <"+g+">")}return new e(parseInt(f[0]),parseInt(f[1]),parseInt(f[2]))};e.comparator=function(g,f){return a(g,"versionOne").compareTo(a(f,"versionTwo"))};e.prototype.compareTo=function(h){a(h,"that");var f=b(this.major,h.major);if(f!=0){return f}var g=b(this.minor,h.minor);if(g!=0){return g}return b(this.bugfix,h.bugfix)};e.prototype.greaterThan=function(f){return this.compareTo(f)>0};e.prototype.greaterThanOrEqual=function(f){return this.compareTo(f)>=0};e.prototype.lessThan=function(f){return this.compareTo(f)<0};e.prototype.lessThanOrEqual=function(f){return this.compareTo(f)<=0};e.prototype.equals=function(f){return this.compareTo(f)==0};e.prototype.toMinor=function(){return new e(this.major,this.minor)};e.prototype.toMajor=function(){return new e(this.major)};e.prototype.toString=function(){return this.major+"."+this.minor+"."+this.bugfix};return e});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-version-details.js' */
define("applinks/lib/aui-version-details",["applinks/lib/version"],function(f){var e=new f(5,9,13);var d=new f(5,8);var c=new f(5,9);function a(g){if(g.lessThan(e)||g.lessThan(c)){throw new Error("AUI version "+g+" is too low, you need to upgrade AUI to "+e+" for Applinks to work")}}function b(g){var h=f.parse(g.version,"AUI version");a(h);g.versionDetails=h;g.versionDetails.is58=h.toMinor().equals(d);g.versionDetails.is59=h.toMinor().equals(c);return g}return{addVersionDetails:b}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/console-amd.js' */
define("applinks/lib/console",function(){return window.console});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/jquery-amd.js' */
define("applinks/lib/jquery",function(){return window.jQuery});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/aui-amd.js' */
define("applinks/lib/aui",["applinks/lib/window","applinks/lib/aui-version-details"],function(b,c){var a=b.AJS;if(!a){throw new Error("window.AJS not defined, cannot load AUI")}return c.addVersionDetails(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/wrm-amd.js' */
define("applinks/lib/wrm",function(){return window.WRM});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/skate-amd.js' */
define("applinks/lib/skate",function(){return window.skate});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/window-amd.js' */
define("applinks/lib/window",function(){return window});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/spi-amd.js' */
define("applinks/lib/spi",function(){return{get:function(){return AppLinks.SPI}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-lib', location = 'applinks/internal/lib/applinks-creation-amd.js' */
define("applinks/lib/creation",function(){return{get:function(){return AppLinks.Creation}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/docs.js' */
define("applinks/common/docs",["applinks/lib/jquery","applinks/lib/aui","applinks/common/help-paths"],function(c,b,a){return{createDocLink:function(d,f,e){if(!e){e=""}else{e=" "+e}return c("<a/>",{"class":"ual-help-link help-link"+e,href:this.getDocHref(d,f),target:"_blank","data-help-link-key":d,text:"Help",title:"Help"})},getDocHref:function(e,f){var d=a.getFullPath(e);if(f){d+="#"+a.getPath(f)}return d}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/help-paths.js' */
define("applinks/common/help-paths",["applinks/lib/console","applinks/lib/wrm","applinks/lib/lodash","applinks/common/modules","applinks/common/preconditions"],function(b,a,g,e,d){var f=g.memoize(function(){var j=a.data.claim(e.dataFqn(e.COMMON_EXPORTED,"applinks-help-paths"));if(!j.entries){b.warn("Help paths not found, all help links are likely to be broken.")}return j.entries||{}});var i=function(j,m){d.nonEmptyString(j,"key");var l=f()[j]||j;if(m){d.nonEmptyString(m,"sectionKey");var k=l.replace(/\+/g,"");l+="#"+k+"-"+m}return l};function c(j,k){return j.indexOf(k,j.length-k.length)!==-1}function h(j,k){return c(j,k)?j:j+k}return{getPath:i,getFullPath:function(j,l){var k=this.baseUrl();return h(k,"/")+this.getPath(j,l)},baseUrl:g.partial(i,"applinks.docs.root")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/events.js' */
define("applinks/common/events",["applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/preconditions"],function(e,b,d,f){var c="applinks.event.";function a(g){return c+f.nonEmptyString(g,"eventId")}return{PREREADY:a("preready"),READY:a("ready"),APPLINKS_LOADED:a("loaded"),APPLINKS_UPDATED:a("updated"),NEW_APPLINK_CREATED:a("created"),ORPHANED_UPGRADE:a("orphaned.upgrade"),V3_ONBOARDING_FINISHED:a("v3-onboarding-finished"),Legacy:{MESSAGE_BOX_DISPLAYED:a("message-box-displayed")},applinksEvent:a,on:function(h,i,g){var j=g?b.bind(i,g):i;e(d.document).on(h,j)},off:function(g,h){e(d.document).off(g,h)},trigger:function(g,h){e(d.document).trigger(g,h)}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/i18n.js' */
define("applinks/common/i18n",["applinks/lib/lodash","applinks/lib/jquery","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions","applinks/common/products"],function(e,g,c,f,h,b){var a=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"entity-types"));return h.hasValue(i,"entity-types","Entity Types data not found")});var d=e.memoize(function(){var i=c.data.claim(f.dataFqn(f.COMMON_EXPORTED,"authentication-types"));return h.hasValue(i,"authentication-types","Authentication Types data not found")});return{getApplicationTypeName:function(i){return b.getTypeName(i)},getEntityTypeName:function(i){return a().singular[i]||i},getPluralizedEntityTypeName:function(i){return a().plural[i]||i},getAuthenticationTypeName:function(i){return d()[i]||i}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/modules.js' */
define("applinks/common/modules",function(){return{PLUGIN_KEY:"com.atlassian.applinks.applinks-plugin",COMMON_EXPORTED:"applinks-common-exported",COMMON:"applinks-common",fqn:function(a){return this.PLUGIN_KEY+":"+a},dataFqn:function(a,b){return this.fqn(a)+"."+b}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/preconditions.js' */
define("applinks/common/preconditions",["applinks/lib/lodash"],function(c){function f(i,j,h){return d(c.isString(i)&&!c.isEmpty(i),h,b(j,": expected a non-empty string, was: <"+i+">"),i)}function g(i,j,h){return d(c.isFunction(i),h,b(j,": expected a function, was: "+i),i)}function a(i,j,h){return d(c.isArray(i),h,b(j,": expected an array, was: "+i),i)}function e(i,j,h){return d(i,h,b(j,": expected a value"),i)}function d(l,i,h,k){var j=i?i:h;if(!l){throw new Error(j)}return k||l}function b(i,h){return(i||"[unspecified]")+h}return{checkArgument:c.partial(d,c,c,"",c),nonEmptyString:f,isArray:a,isFunction:g,hasValue:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-common-exported', location = 'applinks/internal/common/products.js' */
define("applinks/common/products",["applinks/lib/lodash","applinks/lib/wrm","applinks/common/modules","applinks/common/preconditions"],function(c,b,d,f){var a=c.memoize(function(){var g=b.data.claim(d.dataFqn(d.COMMON_EXPORTED,"applinks-types"));return f.hasValue(g,"types","Application Types data not found")});function e(g){return a()[g]||g}return{BAMBOO:"bamboo",BITBUCKET:"stash",CONFLUENCE:"confluence",FECRU:"fecru",JIRA:"jira",REFAPP:"refapp",STASH:"stash",getTypeName:e}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.core', location = 'aui.chunk.bcc4a9ceb5e493d06f24--5f9f540fcdddcfc7c28c.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.core"],[],[["7KGX","runtime","aui.splitchunk.172ffb6da7","aui.splitchunk.087aba7911","aui.splitchunk.fbd1a5ab27","aui.splitchunk.1659111a3c","aui.splitchunk.792781e698","aui.splitchunk.8771ceac91","aui.splitchunk.e7c127e2cc","aui.splitchunk.7873ba9060","aui.splitchunk.0fc208f3fe","aui.splitchunk.2a34183e72"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/rest-service.js' */
(function(a,e,d){var f=AJS.$;AppLinks=f.extend(window.AppLinks||{},{Event:{NAMESPACE:"applinks"},I18n:a,Docs:e});AppLinks.Event=f.extend(window.AppLinks.Event,d);if(AJS.AppLinksInitialisationBinder){AppLinks.initialisationBinder=AJS.AppLinksInitialisationBinder}else{AppLinks.initialisationBinder=function(h){AJS.toInit(h)}}function b(k){var h=k.responseText;var j;try{j=JSON.parse(h)}catch(i){console&&console.error&&console.error("invalid JSON response",h,k)}return j||{}}var g=new RegExp("rest/applinks(?:.*?)/(\\d\\.\\d|\\d)/");function c(h){var i=g.exec(h);return i&&i.length===2?i[1]:false}AppLinks.initialisationBinder(function(){AppLinks=f.extend(window.AppLinks||{},{failure:function(j){if(j.status==401){window.location.reload()}else{var h=AppLinks.parseError(j);var i=f(".page-error");if(i.length>0){i.html(h).fadeIn("slow")}else{alert("REST request failed: "+h)}}},jsonRequest:function(i,j,k,l,h){if(k){k=JSON.stringify(k)}f(".page-error").fadeOut("fast");if(!h){h=AppLinks.failure}return jQuery.ajax({url:i,type:j,data:k,dataType:"json",contentType:"application/json; charset=utf-8",cache:false,success:l,error:h,jsonp:false})},xmlRequest:function(i,j,k,l,h){if(k){k=JSON.stringify(k)}f(".page-error").fadeOut("fast");if(!h){h=AppLinks.failure}return jQuery.ajax({url:i,type:j,data:k,dataType:"xml",contentType:"application/xml; charset=utf-8",cache:false,success:l,error:h})},parseError:function(j){var h=b(j);var i=h&&h.message;if(i){return f.isArray(i)?i.join(" "):i}if(j){return j.statusText?j.statusText:j}return"An unknown error occurred. Check the console logs for details."},put:function(i,j,k,h){return AppLinks.jsonRequest(i,"PUT",j,k,h)},post:function(i,j,k,h){return AppLinks.jsonRequest(i,"POST",j,k,h)},update:function(j,l,i){var h=AppLinks.self_link(j);var k=c(h)==="1.0"?AppLinks.put:AppLinks.post;k(h,j,l,i)},get:function(i,j,h){return AppLinks.jsonRequest(i,"GET",null,j,h)},getXml:function(i,j,h){return AppLinks.xmlRequest(i,"GET",null,j,h)},self_link:function(k){for(var h=0,l=k.link.length;h<l;h++){var j=k.link[h];if(j.rel=="self"){return j.href}}throw"No self-link found"},del:function(k,j,i){var h;if(typeof(k)=="string"){h=k}else{h=AppLinks.self_link(k)}return AppLinks.jsonRequest(h,"DELETE",null,j,i)},SPI:f.extend({},{API_VERSION:"1.0",REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks/",BASE_URL:AJS.contextPath()+"/rest/applinks/1.0",OAUTH_REST_RESOURCE_URL:AJS.contextPath()+"/rest/applinks-oauth/",OAUTH_BASE_URL:AJS.contextPath()+"/rest/applinks-oauth/1.0",setApiVersion:function(h){AppLinks.SPI.API_VERSION=h;AppLinks.SPI.setBaseUrl(AppLinks.SPI.REST_RESOURCE_URL+AppLinks.SPI.API_VERSION)},setBaseUrl:function(h){AppLinks.SPI.BASE_URL=h},setOAuthBaseUrl:function(h){AppLinks.SPI.OAUTH_BASE_URL=h},getRemoteRestBaseUrl:function(h){return h+"/rest/applinks/"+AppLinks.SPI.API_VERSION},getRemotePluginServletBaseUrl:function(h){return h+"/plugins/servlet"},getAllLinks:function(j,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink";return AppLinks.get(h,j,i)},getAllLinksWithAuthInfo:function(j,i){var h=AppLinks.SPI.BASE_URL+"/listApplicationlinks";return AppLinks.get(h,j,i)},getApplicationLinkState:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/listApplicationlinkstates/id/"+k;return AppLinks.get(h,j,i)},getLinksOfType:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink/type/"+j;return AppLinks.get(h,k,i)},tryToFetchManifest:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/applicationlinkForm/manifest.json?url="+encodeURIComponent(j);return AppLinks.get(h,k,i)},getManifestFor:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/manifest/"+k+".json";return AppLinks.get(h,j,i)},getLocalManifest:function(j,i){var h=AppLinks.SPI.BASE_URL+"/manifest.json";return AppLinks.get(h,j,i)},getRemoteManifest:function(j,k,i){var h=AppLinks.SPI.getRemoteRestBaseUrl(j)+"/manifest.json";return AppLinks.get(h,k,i)},getRemoteOAuthConsumerInfo:function(j,k,i){var h=AppLinks.SPI.getRemotePluginServletBaseUrl(j)+"/oauth/consumer-info";return AppLinks.getXml(h,k,i)},getApplinkStatus:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/status/"+k;return AppLinks.get(h,j,i)},createStaticUrlAppLink:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createStaticUrlAppLink?typeId="+k;return AppLinks.post(h,null,j,i)},createLink:function(o,m,q,i,n,p,k,r,j){var h=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var l={applicationLink:o,username:m,password:q,createTwoWayLink:i,customRpcURL:n,rpcUrl:p,configFormValues:k};return AppLinks.post(h,l,r,j)},createLinkWithOrphanedTrust:function(o,m,r,i,n,p,k,q,s,j){var h=AppLinks.SPI.BASE_URL+"/applicationlinkForm/createAppLink";var l={applicationLink:o,username:m,password:r,createTwoWayLink:i,customRpcURL:n,rpcUrl:p,configFormValues:k,orphanedTrust:q};return AppLinks.post(h,l,s,j)},verifyTwoWayLinkDetails:function(h,n,o,k,m,j){var i=AppLinks.SPI.BASE_URL+"/applicationlinkForm/details";var l={username:o,password:k,remoteUrl:h,rpcUrl:n};return AppLinks.post(i,l,m,j)},getApplicationLinkInfo:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/applicationlinkInfo/id/"+j;return AppLinks.get(h,k,i)},deleteLink:function(l,h,k,j){var i=AppLinks.SPI.BASE_URL+"/applicationlink/"+l.id;if(h){i+="?reciprocate=true"}return AppLinks.del(i,k,j)},makePrimary:function(j,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink/primary/"+j.id;return AppLinks.post(h,null,i)},relocate:function(m,k,h,l,j){var i=AppLinks.SPI.BASE_URL+"/relocateApplicationlink/"+m.id+"?newUrl="+encodeURIComponent(k)+"&nowarning="+(h?"true":"false");return AppLinks.post(i,null,l,j)},legacyUpgrade:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/upgrade/legacy/"+k.id;return AppLinks.post(h,null,j,i)},ualUpgrade:function(l,h,k,j){var i=AppLinks.SPI.BASE_URL+"/upgrade/ual/"+l.id;return AppLinks.post(i,h,k,j)},getEntityTypesForApplicationType:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/type/entity/"+k;return AppLinks.get(h,j,i)},getLocalEntitiesWithLinksToApplication:function(h,k,j){var i=AppLinks.SPI.BASE_URL+"/entitylink/localEntitiesWithLinksTo/"+h+".json";return AppLinks.get(i,k,j)},getEntityLinksForApplication:function(h,k,j){var i=AppLinks.SPI.BASE_URL+"/entities/"+h+".json";AppLinks.get(i,k,j)},getEntityLinksForApplicationUsingAnonymousAccess:function(h,k,j){var i=AppLinks.SPI.BASE_URL+"/entities/anonymous/"+h+".json";return AppLinks.get(i,k,j)},createNonUalEntityLink:function(q,l,i,k,o,j,p,n){var h=AppLinks.SPI.BASE_URL+"/entitylink/"+q+"/"+l+"?reciprocate=false";var m={applicationId:i,typeId:k,key:o,name:j,isPrimary:false};return AppLinks.put(h,m,p,n)},createEntityLink:function(m,l,i,h,n,k){var j=AppLinks.SPI.BASE_URL+"/entitylink/"+m+"/"+l+"?reciprocate=";j+=(h?"true":"false");return AppLinks.put(j,i,n,k)},getConfiguredEntityLinks:function(k,j,l,i){var h=AppLinks.SPI.BASE_URL+"/entitylink/primaryLinks/"+k+"/"+j+".json";return AppLinks.get(h,l,i)},deleteEntityLink:function(m,l,i,h,n,k){var j=AppLinks.SPI.BASE_URL+"/entitylink/"+m+"/"+l+"?typeId="+i.typeId+"&key="+i.key+"&applicationId="+i.applicationId+"&reciprocate="+h;return AppLinks.del(j,n,k)},makePrimaryEntityLink:function(l,k,h,m,j){var i=AppLinks.SPI.BASE_URL+"/entitylink/primary/"+l+"/"+k+"?typeId="+h.typeId+"&key="+h.key+"&applicationId="+h.applicationId;return AppLinks.post(i,null,m,j)},canDeleteAppLink:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/permission/reciprocate-application-delete/"+k;return AppLinks.get(h,j,i)},canDeleteEntityLink:function(l,k,h,m,j){var i=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-delete/"+h.applicationId+"/"+l+"/"+k+"/"+h.typeId+"/"+h.key;return AppLinks.get(i,m,j)},canCreateReciprocateEntityLink:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/permission/reciprocate-entity-create/"+k;return AppLinks.get(h,j,i)},processPermissionCode:function(i){var h={noPermission:function(){},missing:function(){},credentialsRequired:function(j){},authenticationFailed:function(j){},noAuthentication:function(j){},noAuthenticationConfigured:function(){},noConnection:function(){},allowed:function(){},unrecognisedCode:function(j){},updateView:function(l,k,j){}};if(!i){i={}}i=f.extend(h,i);return function(k){var j=k.code;if(j=="NO_PERMISSION"){i.noPermission()}else{if(j=="MISSING"){i.missing()}else{if(j=="CREDENTIALS_REQUIRED"){i.credentialsRequired(k.url)}else{if(j=="AUTHENTICATION_FAILED"){i.authenticationFailed(k.url)}else{if(j=="NO_AUTHENTICATION"){i.noAuthentication(k.url)}else{if(j=="NO_AUTHENTICATION_CONFIGURED"){i.noAuthenticationConfigured()}else{if(j=="NO_CONNECTION"){i.noConnection()}else{if(j=="ALLOWED"){i.allowed()}else{i.unrecognisedCode(k.code)}}}}}}}}}},addAuthenticationTrigger:function(j,h,i){if(!i){i={}}if(typeof i.onSuccess=="undefined"){i.onSuccess=function(){location.reload()}}if(typeof i.onFailure=="undefined"){i.onFailure=function(){return true}}f(j).off("click.applinks");f(j).on("click.applinks",function(){if(i.before){i.before()}AppLinks.authenticateRemoteCredentials(h,i.onSuccess,i.onFailure)})},deleteOrphanedTrust:function(l,j,k,i){var h=AppLinks.SPI.BASE_URL+"/orphaned-trust/"+j+"/"+l;return AppLinks.del(h,k,i)},getOrphanedTrust:function(j,i){var h=AppLinks.SPI.BASE_URL+"/orphaned-trust/";return AppLinks.get(h,j,i)},showCreateEntityLinkSuggestion:function(){return true},getApplicationLink:function(k,j,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink/"+k;return AppLinks.get(h,j,i)},createApplicationLink:function(k,i,n,o,h,p,l){var j=AppLinks.SPI.BASE_URL+"/applicationlink";var m={id:k,name:i,rpcUrl:n,displayUrl:o,typeId:h};return AppLinks.put(j,m,p,l)},createConsumer:function(j,s,i,r,n,q,l,u,m,p,t,k){var h=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+j+"/authentication/consumer";var o={key:s,name:i,description:r,sharedSecret:n,publicKey:q,outgoing:p,twoLOAllowed:l,executingTwoLOUser:u,twoLOImpersonationAllowed:m};return AppLinks.put(h,o,t,k)},createConsumerAutoConfigure:function(o,n,k,h,m,j){var i=AppLinks.SPI.OAUTH_BASE_URL+"/applicationlink/"+o+"/authentication/consumer?autoConfigure=true";var l={twoLOAllowed:n,executingTwoLOUser:k,twoLOImpersonationAllowed:h};return AppLinks.put(i,l,m,j)},registerProvider:function(n,m,j,l,i){var h=AppLinks.SPI.BASE_URL+"/applicationlink/"+n+"/authentication/provider";var k={config:j,provider:m};return AppLinks.put(h,k,l,i)},enableFeature:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/features/"+j;return AppLinks.put(h,{},k,i)},disableFeature:function(j,k,i){var h=AppLinks.SPI.BASE_URL+"/features/"+j;return AppLinks.del(h,k,i)}},(window.AppLinks&&window.AppLinks.SPI)||{})});AppLinks.UI={showInfoBox:function(h){f(".aui-message.aui-message-success").remove();AppLinks.UI.createMessage("success",h,"page-info")},hideInfoBox:function(){f(".aui-message.aui-message-success").remove()},showErrorBox:function(h){AppLinks.UI.createMessage("error",h,"page-error")},hideErrorBox:function(){f(".aui-message.aui-message-error").remove()},showWarningBox:function(i){if(f.isArray(i)&&i.length>0){var h=f("<ul></ul>");f(i).each(function(k){h.append(f("<li/>",{text:i[k]}))});var j=f('<div class="page-warning"></div>').append(h);AppLinks.UI.createMessage("warning",j.html(),"page-warning")}else{AppLinks.UI.createMessage("warning",i,"page-warning")}},hideWarningBox:function(){f(".aui-message.aui-message-warning").remove()},shortenString:function(i,h){if(i.length>h){i=i.substring(0,h)+"..."}return i},createMessage:function(i,j,h){var k=f('<div class="'+h+'">');k.html(j);AJS.messages[i](".applinks-message-bar",{title:"",body:k.wrap("<div></div>").parent().html(),closeable:true});f(document).trigger(AppLinks.Event.Legacy.MESSAGE_BOX_DISPLAYED)},displayValidationErrorMessages:function(h,j,i){if(f.isArray(i)){f(i).each(function(m,l){var n=f('<div class="error applinks-error">');n.text(l);f(j).find("."+h).append(n)})}else{if(typeof i!="undefined"){var k=f('<div class="error applinks-error">');k.text(i.toString());f(j).find("."+h).append(k)}}},displayValidationError:function(h,i,j){return function(n){if(n.status==401){window.location.reload();return}f(".applinks-error").remove();f(".loading").remove();var m=b(n);var l=m.message;if(typeof m.fields=="undefined"){AppLinks.UI.displayValidationErrorMessages(h,i,l)}else{var k=m.fields;f(k).each(function(o){var p=f('<div class="error applinks-error" id="'+k[o]+'-error">');p.text(l[o]);if(f(i).find("."+k[o]).length>0){p.insertAfter(f(i).find("."+k[o]))}else{p.insertAfter(f(i).find("."+h).append(p))}})}f(i).find("."+h).addClass("fully-populated-errors");if(j){j()}}},addProtocolToURL:function(h){var k=f.trim(h);var j=k.toLowerCase();var i=false;if(j.length>=7){if(j.substring(0,7).indexOf("http")!=-1){i=true}}if(!i){k="http://"+k}return k},prettyJoin:function(i,l,k){if(!k){k="and"}var h=i.length;var j="";f.each(i,function(m,n){if(m==(h-1)&&h>1){j+=" "+k+"  "+l(n)}else{j+=l(n);if(m+2<h){j+=", "}}});return j},showLoadingIcon:function(h){f('<span class="loading">&nbsp;</span>').insertAfter(h)},hideLoadingIcon:function(h){f(h).next(".loading").remove()},findUrl:function(k){var j=undefined;var l=k.toLowerCase();var i=l.indexOf("http:");if(i==-1){i=l.indexOf("https:")}if(i>-1){var h=l.indexOf(" ",i);if(h==-1){h=l.length}j=k.substring(i,h)}return j},findApplicationType:function(h){h=h.toLowerCase();if(h.indexOf("jira")!=-1){return"jira"}else{if(h.indexOf("fisheye")!=-1){return"fecru"}else{if(h.indexOf("confluence")!=-1){return"confluence"}else{if(h.indexOf("refapp")!=-1){return"refapp"}else{return undefined}}}}},escapeSelector:function(h){return h.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},sanitiseHTML:function(h){var i={"<":"&lt;",'"':"&quot;","&":"&amp;"};return h.replace(/[<"&]/g,function(j){return i[j]})},refreshOrphanedTrust:function(){var h=function(i){f("tr.orphaned-trust-row").each(function(){var n=f(this);var o=n.attr("data-id");var l=n.attr("data-type");var k=false;for(var j=0;j<i.orphanedTrust.length;j++){var m=i.orphanedTrust[j];if(o==m.id&&l==m.type){k=true;break}}if(!k){n.remove();if(i.orphanedTrust.length==0){f(".orphaned-trust-warning").hide()}}})};AppLinks.SPI.getOrphanedTrust(h)},removeCssClass:function(h,i){f(h).removeClass(function(k,m){var l=m.split(" ");var j="";f.each(l,function(n,o){if(o.indexOf(i)!=-1){j=o}});return j})}};(function(){var h=f({});f.each(["bind","unbind","trigger"],function(j,k){AppLinks.UI[k]=function(){return h[k].apply(h,arguments)}})})();f(document).trigger(AppLinks.Event.PREREADY);f(document).trigger(AppLinks.Event.READY)})})(require("applinks/common/i18n"),require("applinks/common/docs"),require("applinks/common/events"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'applinks/internal/non-amd/autocomplete.js' */
AJS.$(document).bind(AppLinks.Event.READY,function(){AppLinks.autoComplete={cacheManager:function(c){var a={},b=[],c=c||30;return{get:function(d){return a[d]},put:function(d,e){a[d]=e;b.push(d);if(b.length>c){delete a[b.shift()]}},clear:function(){a={};b=[]}}}};(function(d){var c=function(f){AJS.log("InputDrivenDropDown: truncating text");var h=f.$.closest(".aui-dropdown").width(),g=20;d("a span:not(.icon)",f.$).each(function(){var j=d(this),i=d("<var></var>").html("&#8230;"),l=i.width(),k=false;j.wrapInner(d("<em>"));d("em",j).each(function(){var m=d(this);m.show();if(this.offsetLeft+this.offsetWidth>h){var t=this.childNodes,s=false;for(var o=t.length-1;o>=0;o--){var p=t[o],n=1,r=(p.nodeType==3)?"nodeValue":"innerHTML",q=p[r];do{if(n<=q.length){p[r]=q.substr(0,q.length-n++)}else{break}}while(this.offsetLeft+this.offsetWidth+l>h-g);if(n<=q.length){s=true;break}}if(s){k=true}else{m.hide()}}});if(k){j.append(i);this.elpss=i}})};var b=function(f,l){if(!l.length||!l[0]){return}AJS.log("InputDrivenDropDown: highlighting tokens");for(var h=0,j=l.length;h<j;h++){var g=l[h];l[h]=g?g.replace(/[\.\*\+\?\|\(\)\[\]{}\\]/g,"\\$"):""}var k=new RegExp("("+l.join("|")+")","gi");d("li a:not(.dropdown-prevent-highlight) span",f.$).each(function(){var m=d(this),i=m.html().replace(k,"<strong>$1</strong>");m.html(i)})};var e=function(j,g){var i=j.options,h=j.dd;if(h){h.hide();h.$.remove()}i.ajsDropDownOptions=i.ajsDropDownOptions||{};if(i.ajsDropDownOptions&&!i.ajsDropDownOptions.alignment){i.ajsDropDownOptions.alignment="left"}i.ajsDropDownOptions.selectionHandler=i.ajsDropDownOptions.selectionHandler||function(l,k){if(l.type!="click"){l.preventDefault();d("a",k).click();document.location=d("a",k).attr("href")}};i.ajsDropDownOptions.displayHandler=function(k){return AJS.escapeHtml(k.name)};var f=j.dd=new AJS.dropDown(g.matrix,i.ajsDropDownOptions)[0];if(i.ajsDropDownOptions&&i.ajsDropDownOptions.className){f.$.addClass(i.ajsDropDownOptions.className)}if(i.dropdownPlacement){i.dropdownPlacement(f.$)}else{AJS.log("No dropdownPlacement function specified. Appending dropdown to the body.");d("body").append(f.$)}b(f,g.queryTokens||[g.query]);c(f);if(i.dropdownPostprocess){i.dropdownPostprocess(f.$)}f.show(j._effect);if(typeof i.onShow=="function"){i.onShow.call(f,f.$)}return f};function a(g,f){this._effect="appear";this._timer=null;this.id=g;this.options=f;this.inactive=false;this.busy=false;this.cacheManager=AppLinks.autoComplete.cacheManager()}a.prototype.clearCache=function(){this.cacheManager.clear()};a.prototype.change=function(h,g){var f=this;if(h!=f._value||g){f._value=h;f.busy=false;clearTimeout(f._timer);if(g||(/\S{0,}/).test(h)){var i=f.cacheManager.get(h);if(i){e(f,i)}else{f.busy=true;f._timer=setTimeout(function(){f.options.getDataAndRunCallback.call(f,h,f.show)},200)}}else{f.dd&&f.dd.hide()}}};a.prototype.dropDownLength=function(){return this.dd.links?this.dd.links.length:0};a.prototype.dropDownItem=function(f){return this.dropDownLength()>f?this.dd.links[f]:null};a.prototype.hide=function(){this.dd&&this.dd.hide()};a.prototype.remove=function(){var f=this.dd;if(f){this.hide();f.$.remove()}this.inactive=true;this.options.onDeath&&this.options.onDeath()};a.prototype.show=function(g,i,h){if(this.inactive){AJS.log("Quick search abandoned before server response received, ignoring. "+this);return}var f={matrix:g,query:i,queryTokens:h};this.cacheManager.put(i,f);e(this,f);this.busy=false};AppLinks.inputDrivenDropdown=function(f){return new a("inputdriven-dropdown",f)}})(jQuery)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-util-js', location = 'js/fecru-compatibility.js' */
if(jQuery!=undefined&&AJS!=undefined){jQuery=AJS.$};
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-callback.js' */
define("applinks/feature/oauth-callback",["applinks/lib/window","applinks/lib/lodash","applinks/common/preconditions"],function(c,a,d){function b(e){d.nonEmptyString(e,"url");this._url=e}b.prototype.source=function(e){d.hasValue(e,"source");this._source=e;return this};b.prototype.onSuccess=function(e){d.isFunction(e,"onSuccess");this._onSuccess=e;return this};b.prototype.onFailure=function(e){d.isFunction(e,"onFailure");this._onFailure=e;return this};b.prototype.success=function(){this.oauthWindow.close();if(this._onSuccess){this._onSuccess(this._source)}delete c.oauthCallback};b.prototype.failure=function(){this.oauthWindow.close();if(this._onFailure){this._onFailure(this._source)}delete c.oauthCallback};b.prototype.open=function(){c.oauthCallback=this;this.oauthWindow=c.open(this._url,"com_atlassian_applinks_authentication")};return b});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:feature-oauth-dance', location = 'applinks/internal/feature/oauth/oauth-dance.js' */
define("applinks/feature/oauth-dance",["applinks/lib/console","applinks/lib/jquery","applinks/lib/lodash","applinks/lib/window","applinks/common/events","applinks/common/preconditions","applinks/feature/oauth-callback"],function(a,f,c,e,b,h,d){function g(j,i){this._scope=j||e.document;this._selector=i}g.prototype.onSuccess=function(i){h.isFunction(i,"onSuccess");this._onSuccess=i;return this};g.prototype.onFailure=function(i){h.isFunction(i,"onFailure");this._onFailure=i;return this};g.prototype.defaultSuccess=function(){return this.onSuccess(function(){e.location.reload()})};g.prototype.defaultFailure=function(){return this.onFailure(function(){return true})};g.prototype.initialize=function(){var i=this;if(this._selector){f(this._scope).on("click",this._selector,function(j){j.preventDefault();i._open(f(this))})}else{f(this._scope).on("click",function(j){j.preventDefault();i._open(f(this))})}};g.prototype.start=function(){var j=f(this._scope);var i=this._selector?j.find(this._selector):j;this._open(i)};g.prototype._open=function(i){if(i.length!==1){a.warn("Could not trigger OAuth dance, the source is not a single HTML element: "+i);return}var j=i.attr("data-authorisation-uri");if(j){this._onSuccess||this.defaultSuccess();this._onFailure||this.defaultFailure();new d(j).source(i).onSuccess(this._onSuccess).onFailure(this._onFailure).open()}else{a.warn("Could not trigger OAuth dance, data-authorisation-uri missing for: "+i)}};return g});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.applinks.applinks-plugin:applinks-oauth-ui', location = 'js/oauth-dialog.js' */
(function(c,a,b){AppLinks.authenticateRemoteCredentials=function(d,f,e){c(".applinks-error").remove();new b(d).onSuccess(f).onFailure(e).open()}})(require("applinks/lib/jquery"),require("applinks/common/events"),require("applinks/feature/oauth-callback"));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/retry-caller.js' */
define("confluence/jim/util/retry-caller",["ajs","jquery","underscore"],function(b,d,c){var a=function(g,p){p=p||{};var h=p.args;var j=(typeof p.tester==="function")?p.tester:function(){return true};var i=p.delays||[0.1,0.3,0.5,0.7,1];var l=i.length;var e=p.name||"";var k=d.Deferred(),o=k.promise();var f=p.context||k;var n=0;var m=function(){if(n===l){return k.rejectWith(f,[f,"exceed-maximum-called-times",""])}var r=i[n++];var q=function(){d.when(g.apply(f,h)).then(function(){k.notify.apply(f,arguments);if(j.apply(f,arguments)){m()}else{k.resolveWith(f,arguments)}},function(){k.rejectWith(f,arguments)})};c.delay(q,r)};m();return o};return a});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:common', location = 'util/common.js' */
AJS.JiraIssues={Remote:{}};var appLinksI18n={entries:{}};jQuery(document).ready(function(){AJS.JiraIssues=jQuery.extend(AJS.JiraIssues||{},{bindOAuthLink:function(c,f){var e={onSuccess:function(){f()},onFailure:function(){}};var d=c.attr("href");c.click(function(g){AppLinks.authenticateRemoteCredentials(d,e.onSuccess,e.onFailure);g.preventDefault()})},getOAuthRealm:function(f){var d=f.getResponseHeader("WWW-Authenticate")||"";var c=/OAuth realm\=\"([^\"]+)\"/;var e=c.exec(d);if(e){return e[1]}else{return null}}});jQuery("a.static-oauth-init").each(function(){AJS.JiraIssues.bindOAuthLink(jQuery(this),function(){window.location.reload()})});jQuery("a.anonymous-init").each(function(f,e){var c=encodeURIComponent(window.location.pathname.replace(Confluence.getContextPath(),""));var d=Confluence.getContextPath()+"/login.action?os_destination="+c;AJS.$(e).attr("href",d)});var a=function(j){var e=AJS.JiraIssues.Remote[j];var h="";for(var g=0;g<e.length;g++){h=h+(e[g].key+(g<e.length-1?",":""))}var d=function(l){var i="issuekey in ("+l+")";var m="/sr/jira.issueviews:searchrequest-xml/temp/SearchRequest.xml?jqlQuery="+encodeURIComponent(i)+"&returnMax=true";var k=contextPath+"/plugins/servlet/issue-retriever?appId="+j+"&url="+encodeURIComponent(m)+"&columns=summary&columns=type&columns=resolution&columns=status";return k};var f=function(k){var i=AJS.$("item",k);i.each(function(){var u=AJS.$("link",this).text();var v=AJS.$("key",this).text();var r=AJS.$("summary",this).text();var s=AJS.$("type",this);var m=AJS.$("resolution",this);var w=m.attr("id")!="-1";var o=AJS.$("status",this);var n=AJS.$(".unknown-jira-issue."+v);for(var p=0;p<n.length;p++){var t=AJS.$("<a style=\"background-image: url('"+s.attr("iconUrl")+'\')" href="'+u+'"></a>');t.text(v);var l=AJS.$('<span class="jira-status"></span>');l.text(o.text().toUpperCase());var q=AJS.$('<span class="jira-issue'+(w?" resolved":"")+'" ></span>');q.append(t);q.append(document.createTextNode(" - "+r+" - "));q.append(l);AJS.$(n[p]).replaceWith(q)}})};var c=d(h);AJS.$.ajax({url:c,success:f,error:function(l){if(l.status==401){var k=AJS.JiraIssues.getOAuthRealm(l);if(k){var i={};AJS.$(e).each(function(){if(!i[this.key]){i[this.key]=true;var m=AJS.$('<span class="oauth-msg"> - <a class="oauth-init" href="'+k+'">'+"Authenticate"+"</a> "+"to see issue details"+"</span>");AJS.$(".unknown-jira-issue."+this.key).addClass("single-issue-oauth").append(m)}});AJS.JiraIssues.bindOAuthLink(AJS.$(".single-issue-oauth a.oauth-init"),function(){window.location.reload()})}}else{if(l.status==400&&e.length>1){AJS.$(e).each(function(){var m=this.key;var n=d(m);AJS.$.ajax({url:n,success:f,error:function(p){var o=AJS.$(".unknown-jira-issue."+m);o.removeClass("single-issue-oauth");AJS.$(".oauth-msg",o).remove();o.addClass("jira-error")}})})}}}})};AJS.$(".unknown-jira-issue").each(function(e,f){var d=AJS.$(f);var g=d.attr("data-app-link");var c=d.attr("data-key");AJS.JiraIssues.Remote[g]=AJS.JiraIssues.Remote[g]||[];AJS.JiraIssues.Remote[g].push({key:c})});for(var b in AJS.JiraIssues.Remote){a(b)}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:web-resources', location = 'templates/extra/jira/jiraIssues.js' */
jQuery(document).ready(function(){var a=jQuery.extend(window.JiraIssues||{},{ADG_ENABLED:AJS.Meta.getNumber("build-number")>=4000,ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO:14/11,fixMenusShowingUnderWidgetInIE:function(){if(jQuery.browser.msie){jQuery("ul.ajs-menu-bar li.ajs-menu-item").each(function(){jQuery(this).hover(function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().each(function(){var c=jQuery(this);var b=c.css("position");if(b&&b!="auto"){c.addClass("ajs-menu-bar-z-index-fix-for-ie")}})},function(){jQuery("div.ajs-drop-down",jQuery(this)).parents().removeClass("ajs-menu-bar-z-index-fix-for-ie")})})}},onSuccessFunction:function(d){if(!jQuery("fieldset input[name='height']",d).length){var b=jQuery(".bDiv table[id^='jiraissues_table']",d)[0];var e=b.grid;var c=b.clientHeight+jQuery(".hDiv",d)[0].clientHeight;jQuery(".bDiv",d).css("height",c+"px");e.options.height=c;e.fixHeight(c)}},onErrorFunction:function(h,c,b,n,f){var o=jQuery("#"+c);var g=b+": ";if(n.status=="200"){g+=f}else{g+=n.responseText}var i=n.getResponseHeader("WWW-Authenticate")||"";if(n.status=="401"&&i.indexOf("OAuth")!=-1){var m=/OAuth realm\=\"([^\"]+)\"/;var e=m.exec(i);if(e){o.empty();a.bigMessageFunction(c,'<a class="oauth-init" href="'+e[1]+'">'+"Authenticate"+"</a> "+"to retrieve your issues"+"</span>");jQuery(".bmDiv",h).css({"z-index":2});var j={onSuccess:function(){window.location.reload()},onFailure:function(){}};var l=jQuery(".oauth-init",o.parent());var d=l.attr("href");l.click(function(p){AppLinks.authenticateRemoteCredentials(d,j.onSuccess,j.onFailure);p.preventDefault()});AJS.$(".gBlock").remove()}}else{if(n.status=="400"){a.bigMessageFunction(c,"The Jira server was not able to process the search. This may indicate a problem with the syntax of this macro. Alternatively, if this table is requesting specific issue keys, you may not have permission to view one of these issues.")}else{var k=jQuery("iframe.jiraissues_errorMsgSandbox",h);k.load(function(){var r=this.contentWindow||this.contentDocument;var q=jQuery((r.document?r.document:r).body);jQuery("a",q).each(function(){this.target="_top"});jQuery(".pPageStat",h).empty().text(q.text());var p=jQuery("div.bmDiv",h)[0];k.removeClass("hidden");k.css({height:p.clientHeight+"px",width:p.clientWidth+"px"})});k[0].src=jQuery("fieldset input[name='retrieverUrlHtml']",h).val();a.bigMessageFunction(c,k)}}jQuery(h).find(".pReload").removeClass("loading");o[0].grid.loading=false;jQuery(h).find(".pButton").each(function(){jQuery(this).removeClass("pBtnOver");jQuery(this).css({cursor:"default",opacity:"0.3"})});jQuery(h).find("span.pcontrol input").attr("readonly","true")},onReloadFunction:function(b,d,c){jQuery(".bmDiv",d).remove();jQuery(".bmDistance",d).remove();c.onSubmit=function(){a.reloadOnSubmitFunction(b,c);return true}},reloadOnSubmitFunction:function(b,c){c.params=[{name:"useCache",value:false}];c.onSubmit=function(){a.onSubmitFunction(b,c);return true}},onSubmitFunction:function(b,c){c.params=[{name:"useCache",value:b}]},showTrustWarningsFunction:function(d,c){var b=jQuery(d).children(".trusted_warnings");if(c.trustedMessage){b.find("td:last").html(c.trustedMessage);b.css("display","block")}else{b.css("display","none")}},preProcessFunction:function(e,b,d,c,f){if(d){a.showTrustWarningsFunction(e,c)}if(c.total==0){jQuery(".pPageStat",e).html(f);a.bigMessageFunction(b,f);jQuery(".pReload",e).removeClass("loading");return}},bigMessageFunction:function(e,f){var d=jQuery("<div></div>");var b=jQuery("<div></div>");d.addClass("bmDistance");b.addClass("bmDiv");if(typeof f=="string"){b.html("<p><strong>"+f+"</strong></p>")}else{f.appendTo(b)}var c=jQuery("#"+e);c.after(b).after(d)},getParamsFrom:function(c){var b={};c.children("input").each(function(){b[jQuery(this).attr("name")]=jQuery(this).attr("value")});return b},initializeColumnWidth:function(f,p){var d={},m=function(i){return a.ADG_ENABLED?Math.round(i*a.ADG_FONT_SIZE_OVER_FLEXIGRID_FONT_SIZE_RATIO):i};if(!(p&&p.length)){return d}var h=37,n=11,k=f.width()-(h+(p.length*n)),j=false,q=false,o=0,c=m(140);for(var l=0,e=p.length;l<e;l++){var g=p[l].name;switch(g){case"summary":j=true;o++;break;case"description":q=true;o++;break;case"type":o++;d[g]=30;k-=30;break;case"priority":o++;d[g]=50;k-=50;break;case"status":o++;d[g]=m(100);k-=m(100);break;case"key":o++;d[g]=m(90);k-=m(90);break;case"comments":case"attachments":case"version":case"component":case"resolution":o++;d[g]=m(80);k-=m(80);break;default:d[g]=c}}if(j||q){k-=(c*(p.length-o));var b=250;if(j&&q){d.summary=Math.max(k/2,b);d.description=Math.max(k/2,b)}else{if(j){d.summary=Math.max(k,b)}else{d.description=Math.max(k,b)}}}else{if(!j&&!q&&(p.length>o)){c=k/(p.length-o);for(l=0;l<e;l++){if(!{resolution:true,key:true,type:true,priority:true,status:true}[p[l]]){d[p[l]]=c}}}}return d}});a.fixMenusShowingUnderWidgetInIE();jQuery(".jiraissues_table").each(function(f,j){var k=jQuery(j),h=k.children("fieldset"),e=a.getParamsFrom(h),c="jiraissues_table_"+f;k.append('<table id="'+c+'" style="display:none"></table>');k.css("width",e.width);var d=[];h.children(".columns").each(function(l){var m=jQuery(this).hasClass("nowrap");d[l]={display:this.name,name:this.value,nowrap:m,sortable:true,align:"left"}});var b=a.initializeColumnWidth(k,d);jQuery.each(d,function(l,m){m.width=b[m.name]});var g=jQuery("<div></div>");jQuery("<a></a>").attr({rel:"nofollow",href:e.clickableUrl}).text(e.title).appendTo(g);jQuery("#"+c).flexigrid({url:e.retrieverUrlHtml,method:"GET",dataType:"json",colModel:d,sortname:e.sortField,sortorder:e.sortOrder,usepager:true,title:g.html(),page:parseInt(e.requestedPage,10),useRp:false,rp:parseInt(e.resultsPerPage,10),showTableToggleBtn:true,height:(function(){return e.height?parseInt(e.height,10):480})(),onSuccess:function(){a.onSuccessFunction(j)},onSubmit:function(){a.onSubmitFunction(e.useCache,this);return true},preProcess:function(i){a.preProcessFunction(j,c,e.showTrustWarnings,i,e.nomsg);return i},onError:function(m,l,i){a.onErrorFunction(j,c,e.jiraissuesError,m,l,i)},onReload:function(){a.onReloadFunction(e.useCache,j,this);return true},errormsg:e.errormsg,pagestat:e.pagestat,procmsg:e.procmsg,nomsg:e.nomsg})});jQuery(".jiraissues_count").each(function(b,d){var c=jQuery(d);jQuery.ajax({cache:false,type:"GET",url:c.find(".url").text(),data:{useCache:c.find(".use-cache").text(),rp:c.find(".rp").text(),showCount:"true"},success:function(f){var e=c.find(".result");if(f==1){e.text(AJS.format("{0} issue",f))}else{e.text(AJS.format("{0} issues",f))}e.removeClass("hidden");jQuery(".calculating, .error, .data",c).remove()},error:function(h){var f=jQuery(".error",c).removeClass("hidden"),g=h.getResponseHeader("WWW-Authenticate")||"",j=false;if(h.status===401&&g.indexOf("OAuth")!=-1){var e=/OAuth realm\=\"([^\"]+)\"/,i=e.exec(g);if(i){f.empty().append(AJS.$("<a/>",{href:i[1],"class":"oauth-init"}).text("Authenticate").click(function(){AppLinks.authenticateRemoteCredentials(i[1],function(){window.location.reload()},function(){});return false})).append(AJS.$("<span/>",{text:" "+"to retrieve your issues"}));j=true}}if(!j){f.text(AJS.format(f.text(),h.status))}jQuery(".calculating, .result, .data",c).remove()}})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'js/space-menu.js' */
AJS.toInit(function(a){var c=a(Confluence.Templates.BrowseSpaces.spacesLink());a("#space-directory-link").replaceWith(a(c));var b=function(d){var e=a("#space-menu-link-content");e.html(d.template);if(AJS&&AJS.Confluence&&AJS.Confluence.Analytics&&AJS.Confluence.Analytics.setAnalyticsSource){AJS.Confluence.Analytics.setAnalyticsSource(e.find("a"),"spacemenu")}a("#create-space-header").click(function(){AJS.trigger("analytics",{name:"create-space-from-header"});Confluence.SpaceBlueprint.Dialog.launch();return false})};a("#space-menu-link-content").on("aui-dropdown2-show",function(){AJS.trigger("analytics",{name:"open-space-menu"});if(!a("#space-menu-link-content .aui-dropdown2-section")||!a("#space-menu-link-content .aui-dropdown2-section").length){a.ajax({url:Confluence.getContextPath()+"/rest/ia/1.0/spacesmenu",type:"GET",dataType:"json",cache:false,success:b})}return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:spacemenu-resources', location = 'soy/space-menu.soy' */
// This file was automatically generated from space-menu.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.BrowseSpaces.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.BrowseSpaces == 'undefined') { Confluence.Templates.BrowseSpaces = {}; }


Confluence.Templates.BrowseSpaces.spacesLink = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.trigger({menu: {id: 'space-menu-link-content'}, id: 'space-menu-link', tagName: 'a', extraClasses: 'aui-nav-link', title: 'Spaces', showIcon: false, text: 'Spaces'}) + aui.dropdown2.contents({id: 'space-menu-link-content', extraClasses: 'aui-style-default aui-dropdown2-in-header'});
};
if (goog.DEBUG) {
  Confluence.Templates.BrowseSpaces.spacesLink.soyTemplateName = 'Confluence.Templates.BrowseSpaces.spacesLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-space-ia:space-ia-analytics', location = 'js/space-ia-analytics.js' */
(function(b){var c=AJS.Confluence.Analytics.setAnalyticsSource;function d(){var h=b(".acs-side-bar");var g=h.find("a:not(.external_link a, #acs-configure-link)");c(g,"sidebar");var f=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Pages")+"']");c(f,"sidebar-pages");var j=h.find("[data-collapsed-tooltip='"+AJS.I18n.getText("Blog")+"']");c(j,"sidebar-blogs");var e=h.find(".quick-links-section li:not(.external_link) a");c(e,"spaceshortcut");var i=h.find(".ia-secondary-container a:not(.more-children-link)");if(h.find(".ia-secondary-container").data("tree-type")=="pages"){c(i,"contextnavchildmode")}else{if(h.find(".ia-secondary-container").data("tree-type")=="page-tree"){c(i,"contextnavpagetreemode")}else{c(i,"contextnav")}}}function a(e){return function(){AJS.trigger("analytics",{name:"space-ia-nav",data:{linkType:e}})}}AJS.toInit(function(e){e(".acs-side-bar").find(".ia-secondary-container .more-children-link").click(a("context-nav.more-children"));AJS.bind("sidebar.exit-configure-mode",d);AJS.bind("sidebar.flyout-triggered",function(g,f){a("flyout-triggered."+f.flyout)()});AJS.bind("pagetree-children-loaded",d);d()})})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'aptis.plugins.deleteAllComments:resources', location = 'js/askUser.js' */
AJS.toInit(function(){AJS.$("#deleteAllComments").click(function(){AJS.$("#deleteSelectedCommentsContainer").hide(250)});AJS.$("#deleteSelectedComments").click(function(){AJS.$("#deleteSelectedCommentsContainer").show(250)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = '/js/confluence-license-banner.js' */
require(["ajs","jquery"],function(a,b){a.toInit(function(){var d=WRM.data.claim("com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources.license-details");if(!d){a.warn("Unable to claim my required data");return}var c={destroyBanner:function(){b("#license-banner").slideUp(function(){b("#license-banner").remove()})},remindMeLater:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify({atl_token:a.Meta.get("atl-token")}),url:a.contextPath()+"/rest/licensebanner/1.0/reminder/later"});c.destroyBanner()},remindMeNever:function(){b.ajax({type:"POST",dataType:"json",contentType:"application/json; charset=utf-8",data:JSON.stringify({atl_token:a.Meta.get("atl-token")}),url:a.contextPath()+"/rest/licensebanner/1.0/reminder/never"});c.destroyBanner()},createBanner:function(g){var e;if(g.showLicenseExpiryBanner){e=Confluence.Templates.LicenseBanner.expiryBanner({days:g.daysBeforeLicenseExpiry,mac:g.renewUrl,sales:g.salesUrl})}else{if(g.showMaintenanceExpiryBanner){e=Confluence.Templates.LicenseBanner.maintenanceBanner({days:g.daysBeforeMaintenanceExpiry,mac:g.renewUrl,sales:g.salesUrl})}}if(e){var f=b(e);b("#full-height-container").prepend(f);b("#license-banner-later").click(function(h){h.preventDefault();c.remindMeLater()});b("#license-banner-never").click(function(h){h.preventDefault();c.remindMeNever()});f.find(".icon-close").click(function(h){h.preventDefault();c.remindMeLater()})}}};c.createBanner(d)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-license-banner:confluence-license-banner-resources', location = 'soy/confluence-license-banner.soy' */
// This file was automatically generated from confluence-license-banner.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.LicenseBanner.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.LicenseBanner == 'undefined') { Confluence.Templates.LicenseBanner = {}; }


Confluence.Templates.LicenseBanner.wrapper = function(opt_data, opt_ignored) {
  return '<div>' + soy.$$filterNoAutoescape(opt_data.contentHTML) + '</div>';
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.wrapper.soyTemplateName = 'Confluence.Templates.LicenseBanner.wrapper';
}


Confluence.Templates.LicenseBanner.expiryBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy8 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy12 = '</a>';
  var mailTag__soy14 = '<a id="license-banner-sales-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.sales) + '">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '' + aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="true">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format('Your subscription has expired. This site is now read-only. To keep using Confluence, {0}renew online{1} or {2}contact us{3}.',renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format('Your subscription will expire today and your site will become read-only. To keep using Confluence, {0}renew online{1} or {2}contact us{3}.',renewTag__soy8,end__soy12,mailTag__soy14,end__soy12)) : soy.$$filterNoAutoescape(AJS.format('Your subscription will expire in {0,choice,1#{0} day|1\x3c{0} days}. Your site will become read-only after the expiry. To keep using Confluence, {1}renew online{2} or {3}contact us{4}.',opt_data.days,renewTag__soy8,end__soy12,mailTag__soy14,end__soy12))) + '</div>', isCloseable: opt_data.days > 7, id: 'license-banner'})});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.expiryBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.expiryBanner';
}


Confluence.Templates.LicenseBanner.maintenanceBanner = function(opt_data, opt_ignored) {
  var output = '';
  var renewTag__soy39 = '<a id="license-banner-my-link" target="_blank" href="' + soy.$$escapeHtml(opt_data.mac) + '">';
  var end__soy43 = '</a>';
  var later__soy45 = '<a href="#" id="license-banner-later">';
  var never__soy47 = '<a href="#" id="license-banner-never">';
  output += Confluence.Templates.LicenseBanner.wrapper({contentHTML: '' + aui.message.warning({content: '<div id="license-banner-content" data-days="' + soy.$$escapeHtml(opt_data.days) + '" data-subscription="false">' + ((opt_data.days < 0) ? soy.$$filterNoAutoescape(AJS.format('You no longer have access Support and Updates. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.',renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : (opt_data.days == 0) ? soy.$$filterNoAutoescape(AJS.format('You will lose access to Support and Updates today. {0}Renew online{1}, {2}remind me later{3} or {4}never remind me again{5}.',renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43)) : soy.$$filterNoAutoescape(AJS.format('You will lose access to Support and Updates in {0,choice,1#{0} day|1\x3c{0} days}. {1}Renew online{2}, {3}remind me later{4} or {5}never remind me again{6}.',opt_data.days,renewTag__soy39,end__soy43,later__soy45,end__soy43,never__soy47,end__soy43))) + '</div>', id: 'license-banner'})});
  return output;
};
if (goog.DEBUG) {
  Confluence.Templates.LicenseBanner.maintenanceBanner.soyTemplateName = 'Confluence.Templates.LicenseBanner.maintenanceBanner';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics.js' */
(function(){var a=window.BrowserMetrics||{};a.isFunction=function(b){return !!(b&&b.constructor&&b.call&&b.apply)};a.isEnabled=function(){if(a.enabled===undefined){a.enabled=true}return a.enabled};window.BrowserMetrics=a}());(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var f=5;var e=12000;var c=function(g){return Math.round(g)};var a=function(g){return Math.round(g*100)/100};var d=function(k){var h=(function(){var n=/^(\w+):\/\/([^\/]*)(.*)$/;return function(p){var o=p.match(n);if(!o){return{path:p}}return{scheme:o[1],host:o[2],path:o[3]}}}());var i=(function(){var n=["secureConnectionStart","requestStart","responseStart","responseEnd","domContentLoadedEventStart","domContentLoadedEventEnd","loadEventEnd"];return function(o){if(k.performance){var s=k.performance.timing;var p=s.navigationStart;if(p){for(var r=0;r<n.length;++r){var q=n[r];var t=s[q];if(t){o(q,t-p)}}}}}}());var g=(function(){var o=[{key:"LOGIN",pattern:/^\/login.*/i},{key:"J-DASH",pattern:/^\/secure\/dashboard\.jspa.*/i},{key:"J-ISSUE",pattern:/^\/browse\/\w+\-\w+.*/i},{key:"J-NAV",pattern:/^\/issues.*/i},{key:"J-RAPID",pattern:/secure\/rapidboard\.jspa/i},{key:"SD-AGENT",pattern:/^(\/\w+)?\/servicedesk\/agent\/.*/i},{key:"SD-CUSTOMER",pattern:/^(\/\w+)?\/servicedesk\/customer\/.*/i},{key:"C-DASH",pattern:/^\/wiki(\/)?(\?.*|#.*)?$/i},{key:"C-DASH",pattern:/^\/wiki\/dashboard\.action.*$/i},{key:"C-SPACE",pattern:/^\/wiki\/display\/\w+(\?.*|#.*)?$/i},{key:"C-PAGE",pattern:/^\/wiki\/display\/\w+\/.*/i},{key:"C-PAGE",pattern:/^\/wiki\/pages\/viewpage\.action.*/i},{key:"C-BLOG",pattern:/^\/wiki\/display\/~\w+\/\d+\/\d+\/\d+\/.*/i},{key:"C-EDITOR",pattern:/^\/wiki\/pages\/editpage\.action.*/i},{key:"C-CREATE",pattern:/^\/wiki\/pages\/createpage\.action.*/i}];return function n(){var r=h(k.location.href).path;for(var p=0;p<o.length;++p){var q=o[p];if(r.match(q.pattern)){return q.key}}return null}}());function j(){var n=g();if(n){i(function(p,r){var o="browser.metrics."+p,q={version:f,page:n,value:r>e?"x":Math.ceil((r)/100),rawValue:c(r)};AJS.Analytics?AJS.Analytics.triggerPrivacyPolicySafeEvent(o,q):AJS.trigger("analyticsEvent",{name:o,data:q})})}}function m(){try{j()}catch(n){if(window.console){window.console.log("Error reporting browser metrics: "+n)}}}function l(){if(k.performance.timing.loadEventEnd){m()}else{setTimeout(l,1000)}}if(k.performance&&k.performance.timing){l()}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initPageLoad=d}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-events.js' */
(function(){var b=window.BrowserMetrics||{};if(b.isEnabled()){var e=5;var d=12000;var a=function(f){return Math.round(f*100)/100};var c=function(g){var l={};function h(){return g.performance&&g.performance.now?g.performance.now():new Date().getTime()}function n(o){return o===Object(o)}function k(o){if(n(o)){return o.eventName+"."+o.eventType}else{return o}}function m(o){if(n(o)){return o.eventName}else{return o}}function j(o){if(n(o)){return o.eventType}else{return""}}function f(o){var p=k(o);l[p]=h()}function i(r,u){var v=k(r);if(!l[v]){throw ("Error logging browser metrics event end: no start event for key '"+v+"'")}var t=h()-l[v];l[v]=null;var o=m(r),q=j(r);var p="browser.metrics.e."+o+(u?"."+u:""),s={version:e,value:t>d?"x":Math.ceil((t)/100),rawValue:a(t),eventType:q};g.AJS.Analytics?g.AJS.Analytics.triggerPrivacyPolicySafeEvent(p,s):g.AJS.trigger("analyticsEvent",{name:p,data:s})}return{start:f,end:i}};if(!window.ATL_PERF){window.ATL_PERF={}}window.ATL_PERF.initEvents=c}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-browser-metrics:legacy-browser-metrics', location = '/js/legacy/browser-metrics-init.js' */
(function(){var a=window.BrowserMetrics||{};if(a.isEnabled()){if(Math.random()<0.1){window.ATL_PERF&&window.ATL_PERF.initPageLoad&&window.ATL_PERF.initPageLoad(window)}window.ATL_PERF&&window.ATL_PERF.initEvents&&(function(){window.BrowserMetrics=window.ATL_PERF.initEvents(window)}())}}());
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:clickable-resources', location = 'js/clickable.js' */
jQuery(function($) {
    $(".clickable").live("click", function(event) {
        // Ensure we don't override any normal links or nested clickables within the clickable element
        if ($(event.target).closest("a[href]").length === 0 && $(event.target).closest(".clickable").length === 1) {
            // Use the href from the clickable element or the first nested link
            var href = $(this).attr("href") || $('a[href]:first', this).attr("href");
            if (href) {
                location.href = href;
            }
        }
    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:alert-resources', location = 'js/alert.js' */
AJS.toInit(function () {

    AJS.$(".adaptavist-alert").each(function () {

        var title = $(this).attr('title');
        var type = $(this).attr('type').toLowerCase();
        var content = $(this).attr('contentBody');

        require('aui/flag')({
            type: type,
            title: title,
            body: content
        });
    });

});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:rollover-resource', location = 'js/rollover.js' */
AJS.toInit(function () {

    var allRolloverMacros = AJS.$('.rollover-parameters');

    AJS.$.each(allRolloverMacros, function (index, macro) {
        var targetID = macro.getAttribute('targetid');
        var normalClass = macro.getAttribute('normal-class');
        var overClass = macro.getAttribute('over-class');

        var targetElement = AJS.$('#' + targetID);
        var link = allRolloverMacros[index].getAttribute("rollover-link");

        if (targetID != null) {
            targetElement.addClass(normalClass);
            if (!(overClass === "${overClass}")) {
                targetElement.hover(
                    function () {
                        AJS.$(this).removeClass(normalClass);
                        AJS.$(this).addClass(overClass);
                    }, function () {
                        AJS.$(this).removeClass(overClass);
                        AJS.$(this).addClass(normalClass);
                    }
                );
            }

            if (!(link === "${link}")) {
                targetElement.html('<a class="external-link rolloverLink" rel="nofollow" href="" >' + targetElement.text() + '</a>');
                targetElement.children().attr('href', link);
            }
        }
    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.auiplugin:split_aui.pattern.multi-step-progress', location = 'aui.chunk.3c3b8c0ef0f18c99173f--32af67f67526f8cbfed4.js' */
(window.__auiJsonp=window.__auiJsonp||[]).push([["aui.pattern.multi-step-progress"],{LOci:function(i,u,c){},qc5q:function(i,u,c){"use strict";c("FStl"),c("Q0fs"),c("nqD9"),c("LOci")}},[["qc5q","runtime","aui.splitchunk.b0831cc7d0","aui.splitchunk.572a8bf5cd","aui.splitchunk.d49cf794d2"]]]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-blueprint-wizard', location = 'soy/blueprint/wizard-page1.soy' */
// This file was automatically generated from wizard-page1.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CFM.Blueprints.
 */

if (typeof CFM == 'undefined') { var CFM = {}; }
if (typeof CFM.Blueprints == 'undefined') { CFM.Blueprints = {}; }


CFM.Blueprints.cfmBlueprintWizardPage1 = function(opt_data, opt_ignored) {
  return '<div class="aui-group"><div class="aui-item wizard-page-left"><form name="cfm-wizard-page-one" action="#" method="post" class="aui"><fieldset><div class="cfm-wizard-description">' + soy.$$escapeHtml('This wizard provides the ability to quick start a page that uses selected Content Formatting macros.') + '</div><div class="cfm-page-title-padding"><label for="text-input">Page title<span class="aui-icon icon-required cfm-req">required</span></label><input class="text medium-field" type="text" id="cfm-page-title" name="title" title="title"></input></div><div><label for="cfm-blueprints-dropdown" class="blueprints-label-padding">Templates</label><!-- Trigger --><a href="#cfm-blueprints-dropdown-trigger" aria-owns="cfm-blueprints-dropdown" aria-haspopup="true" class="aui-button aui-style-default aui-dropdown2-trigger cfm-blueprints-dropdown-text">Selection</a><!-- Dropdown --><div id="cfm-blueprints-dropdown" class="aui-style-default aui-dropdown2"><div class="aui-dropdown2-section"><ul><li class="cfm-blueprint-selected"><a href="#1mpj">Multi-Page Journey</a></li><li class="cfm-blueprint-selected"><a href="#2shp">Space Home Page</a></li><li class="cfm-blueprint-selected"><a href="#3f">Finance</a></li><li class="cfm-blueprint-selected"><a href="#4a">Academic</a></li><li class="cfm-blueprint-selected"><a href="#5b">Blog</a></li><li class="cfm-blueprint-selected"><a href="#6sr">Software Requirements</a></li></ul></div></div></div><div class="cfm-blueprint-description">' + soy.$$escapeHtml('Start by entering a page Title and selecting a template from the dropdown.') + '</div></fieldset></form></div><div class="cfm-vertical-line"></div><div class="aui-item"><div class="cfm-blueprints-picture">&nbsp;</div></div></div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.cfmBlueprintWizardPage1.soyTemplateName = 'CFM.Blueprints.cfmBlueprintWizardPage1';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-wizard-resources', location = 'soy/blueprint/wizard-page1.soy' */
// This file was automatically generated from wizard-page1.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CFM.Blueprints.
 */

if (typeof CFM == 'undefined') { var CFM = {}; }
if (typeof CFM.Blueprints == 'undefined') { CFM.Blueprints = {}; }


CFM.Blueprints.cfmBlueprintWizardPage1 = function(opt_data, opt_ignored) {
  return '<div class="aui-group"><div class="aui-item wizard-page-left"><form name="cfm-wizard-page-one" action="#" method="post" class="aui"><fieldset><div class="cfm-wizard-description">' + soy.$$escapeHtml('This wizard provides the ability to quick start a page that uses selected Content Formatting macros.') + '</div><div class="cfm-page-title-padding"><label for="text-input">Page title<span class="aui-icon icon-required cfm-req">required</span></label><input class="text medium-field" type="text" id="cfm-page-title" name="title" title="title"></input></div><div><label for="cfm-blueprints-dropdown" class="blueprints-label-padding">Templates</label><!-- Trigger --><a href="#cfm-blueprints-dropdown-trigger" aria-owns="cfm-blueprints-dropdown" aria-haspopup="true" class="aui-button aui-style-default aui-dropdown2-trigger cfm-blueprints-dropdown-text">Selection</a><!-- Dropdown --><div id="cfm-blueprints-dropdown" class="aui-style-default aui-dropdown2"><div class="aui-dropdown2-section"><ul><li class="cfm-blueprint-selected"><a href="#1mpj">Multi-Page Journey</a></li><li class="cfm-blueprint-selected"><a href="#2shp">Space Home Page</a></li><li class="cfm-blueprint-selected"><a href="#3f">Finance</a></li><li class="cfm-blueprint-selected"><a href="#4a">Academic</a></li><li class="cfm-blueprint-selected"><a href="#5b">Blog</a></li><li class="cfm-blueprint-selected"><a href="#6sr">Software Requirements</a></li></ul></div></div></div><div class="cfm-blueprint-description">' + soy.$$escapeHtml('Start by entering a page Title and selecting a template from the dropdown.') + '</div></fieldset></form></div><div class="cfm-vertical-line"></div><div class="aui-item"><div class="cfm-blueprints-picture">&nbsp;</div></div></div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.cfmBlueprintWizardPage1.soyTemplateName = 'CFM.Blueprints.cfmBlueprintWizardPage1';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-wizard-resources', location = 'soy/blueprint/wizard-page2.soy' */
// This file was automatically generated from wizard-page2.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CFM.Blueprints.
 */

if (typeof CFM == 'undefined') { var CFM = {}; }
if (typeof CFM.Blueprints == 'undefined') { CFM.Blueprints = {}; }


CFM.Blueprints.cfmBlueprintWizardPage2 = function(opt_data, opt_ignored) {
  return '<div class="aui-group cfm-dialog-no-scroll"><div class="aui-item"><form name="cfm-wizard-page-two" action="#" method="post" class="aui"><fieldset class="rows"><div class="cfm-wizard-description">' + soy.$$escapeHtml('Please add the additional page or pages required for the Multi-Page Journey template.') + '</div><div class="aui-group"><div class="aui-item create-button-rows"><div class="cfm-wizard-page-two-validation"></div><table class="aui" id="cfm-wizard-dataTable"><thead><tr><th>Page Title</th><th>Actions</th></tr></thead><tbody><tr id="groupRow0"><td class="cfm-input-field"><input id="cfm-page-title-input-0" class="text buttonInputLabel" type="text" value="" required="required" tabindex="10"/></td><td class="cfm-actions"><input type="button" class="aui-button cfmAddPageTitleRowInput" value="+" data-row-index="0" tabindex="10"/><input type="button" class="aui-button cfmRemovePageTitleRowInput" data-row-index="0" value="-" tabindex="10" disabled/></td></tr></tbody></table></div></div></fieldset></form></div></div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.cfmBlueprintWizardPage2.soyTemplateName = 'CFM.Blueprints.cfmBlueprintWizardPage2';
}


CFM.Blueprints.addPageTitleRow = function(opt_data, opt_ignored) {
  return '<tr id="groupRow' + soy.$$escapeHtml(opt_data.rowIndex) + '"><td class="cfm-input-field"><input id="cfm-page-title-input-' + soy.$$escapeHtml(opt_data.rowIndex) + '" class="text buttonInputLabel" type="text" value="" required="required" tabindex="10"/></td><td class="cfm-actions"><input type="button" class="aui-button cfmAddPageTitleRowInput" value="+" data-row-index="' + soy.$$escapeHtml(opt_data.rowIndex) + '" tabindex="10"/><input type="button" class="aui-button cfmRemovePageTitleRowInput" data-row-index="' + soy.$$escapeHtml(opt_data.rowIndex) + '" value="-" tabindex="10"/></td></tr>';
};
if (goog.DEBUG) {
  CFM.Blueprints.addPageTitleRow.soyTemplateName = 'CFM.Blueprints.addPageTitleRow';
}


CFM.Blueprints.addDuplicateValidationMessage = function(opt_data, opt_ignored) {
  return '<div class="cfm-invalid-page-title">' + soy.$$escapeHtml('Each title must be unique') + '</div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.addDuplicateValidationMessage.soyTemplateName = 'CFM.Blueprints.addDuplicateValidationMessage';
}


CFM.Blueprints.addExistsValidationMessage = function(opt_data, opt_ignored) {
  return '<div class="cfm-invalid-page-title">' + soy.$$escapeHtml('A page with this title already exists') + '</div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.addExistsValidationMessage.soyTemplateName = 'CFM.Blueprints.addExistsValidationMessage';
}


CFM.Blueprints.addEmptyValidationMessage = function(opt_data, opt_ignored) {
  return '<div class="cfm-invalid-page-title">' + soy.$$escapeHtml('This field can not be empty') + '</div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.addEmptyValidationMessage.soyTemplateName = 'CFM.Blueprints.addEmptyValidationMessage';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-wizard-resources', location = 'soy/blueprint/wizard-page3.soy' */
// This file was automatically generated from wizard-page3.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace CFM.Blueprints.
 */

if (typeof CFM == 'undefined') { var CFM = {}; }
if (typeof CFM.Blueprints == 'undefined') { CFM.Blueprints = {}; }


CFM.Blueprints.cfmBlueprintWizardPage3 = function(opt_data, opt_ignored) {
  return '<div class="aui-group cfm-wizard-page-two"><div class="cfm-wizard-description">' + soy.$$escapeHtml('You finished the wizard setup successfully. Click create to get started with your template.') + '</div></div><div class="aui-item"><div class="cfm-blueprints-picture-complete">&nbsp;</div></div>';
};
if (goog.DEBUG) {
  CFM.Blueprints.cfmBlueprintWizardPage3.soyTemplateName = 'CFM.Blueprints.cfmBlueprintWizardPage3';
}


CFM.Blueprints.docoLink = function(opt_data, opt_ignored) {
  return '<a class="add-remove-customise-templates-trigger button-panel-link" href="https://www.adaptavist.com/doco/display/CFP/Templates" tabindex="-1">' + soy.$$escapeHtml('Documentation') + '</a>';
};
if (goog.DEBUG) {
  CFM.Blueprints.docoLink.soyTemplateName = 'CFM.Blueprints.docoLink';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.adaptavist.confluence.contentFormattingMacros:cfm-wizard-resources', location = 'js/blueprint-wizard.js' */
AJS.toInit(function ($) {

    var selectedBlueprint;
    var pageTwoData = {};
    var rowIndex = 1;
    var stepTwoTitles = [];

    function handleWizardPage1Submit(e, state) {
        var pageOneValidationElement = $('.cfm-blueprint-description');
        if (!state.pageData.title) {
            pageOneValidationElement.text("Please enter a unique page title");
            addValidationStyling(pageOneValidationElement);
            return false;
        }

        if (doesPageExist(state.pageData.title, state.wizardData.spaceKey)) {
            pageOneValidationElement.text("Page title already exists, please enter a unique title");
            addValidationStyling(pageOneValidationElement);
            return false;
        }

        if (!selectedBlueprint) {
            pageOneValidationElement.text("Please select a template from the dropdown");
            addValidationStyling(pageOneValidationElement);
            return false;
        }

        state.pageData.userSelectedBlueprint = selectedBlueprint;
        if (selectedBlueprint === 'Multi-Page Journey') {
            state.nextPageId = 'cfmBlueprintWizardPage2';
        } else {
            state.nextPageId = 'cfmBlueprintWizardPage3';
        }
        return true;
    }

    function handleWizardPage2Submit(e, state) {
        pageTwoData = {};
        stepTwoTitles = [];
        var success = true;
        var allPageTitles = [];
        resetValidation();
        $('#cfm-wizard-dataTable > tbody > tr').each(function (index) {
            allPageTitles.push($('#cfm-page-title').val());
            var pageTwoValidationElement;
            var pageTitle = $(this).find('.cfm-input-field > input').val();
            var pageIndex = 'page' + index;
            pageTwoData[pageIndex] = pageTitle;
            stepTwoTitles.push(pageTitle);

            //check if user provided same title twice
            if ($.inArray($(this).find('.buttonInputLabel').val(), allPageTitles) !== -1 && pageTitle || state.wizardData.pages.cfmBlueprintWizardPage1.title === pageTitle) {
                //add error text
                var pageTitleDuplicateValidationMessage = CFM.Blueprints.addDuplicateValidationMessage();
                $(this).find('.cfm-input-field').append(pageTitleDuplicateValidationMessage);
                //style the error message
                pageTwoValidationElement = $(this).find($('.cfm-invalid-page-title'));
                addValidationStyling(pageTwoValidationElement);
                success = false;
            } else {
                allPageTitles.push($(this).find('.buttonInputLabel').val());
            }

            if (doesPageExist(pageTitle, state.wizardData.spaceKey)) {
                if ($(this).find('.buttonInputLabel').val()) {
                    //show page title already exists message
                    var pageTitleExistsValidationMessage = CFM.Blueprints.addExistsValidationMessage();
                    $(this).find('.cfm-input-field').append(pageTitleExistsValidationMessage);
                    pageTwoValidationElement = $(this).find($('.cfm-invalid-page-title'));
                } else {
                    //show field empty message
                    var pageTitleEmptyValidationMessage = CFM.Blueprints.addEmptyValidationMessage();
                    $(this).find('.cfm-input-field').append(pageTitleEmptyValidationMessage);
                    pageTwoValidationElement = $(this).find($('.cfm-invalid-page-title'));
                }

                addValidationStyling(pageTwoValidationElement);
                $(this).find(pageTwoValidationElement).addClass('blueprint-validation');

                success = false;
            }
        });

        var errorMessages = $('.cfm-invalid-page-title');
        if ($(errorMessages).size() > 0) {
            errorMessages[0].scrollIntoView(false);
        }
        state.wizardData.pageTwoNewPageTitles = pageTwoData;
        return success;
    }

    function handleWizardPage3Submit(e, state) {
        //subsumes the normal blueprint wizard and use an action to complete the specified tasks
        if (state.wizardData.pages.cfmBlueprintWizardPage1.userSelectedBlueprint === "Blog") {
            $('#create-dialog').find('.button-panel-cancel-link').click();
            var blogPayload = {
                "title": state.wizardData.pages.cfmBlueprintWizardPage1.title,
                "space": state.wizardData.spaceKey
            };
            createBlog(blogPayload);
            e.preventDefault();
        } else if (state.wizardData.pages.cfmBlueprintWizardPage1.userSelectedBlueprint === "Multi-Page Journey") {
            $('#create-dialog').find('.button-panel-cancel-link').click();
            var journeyPayload = {
                "stepOnePageTitle": state.wizardData.pages.cfmBlueprintWizardPage1.title,
                "space": state.wizardData.spaceKey,
                "parentPageId": state.wizardData.parentPageId,
                "stepTwoPageTitles": stepTwoTitles
            };
            createJourneyPages(journeyPayload);
            e.preventDefault();
        } else {
            return true;
        }
    }

    function createBlog(blogPayload) {
        $.ajax({
            type: 'POST',
            async: false,
            url: AJS.params.baseUrl + '/cfm/blueprint/create/blog/cfm-create-blog.action',
            data: blogPayload
        }).success(function () {
            window.location.href = AJS.params.baseUrl + '/pages/viewrecentblogposts.action?key=' + blogPayload.space;
        }).error(function () {
            var failMessage = "Failed to call Content Formatting blueprint create blog action";
            console.log(failMessage);
        });
    }

    function createJourneyPages(journeyPayload) {
        $.ajax({
            type: 'POST',
            async: false,
            url: AJS.params.baseUrl + '/cfm/blueprint/create/journeypages/cfm-create-multi-page-journey-pages.action',
            data: journeyPayload
        }).success(function () {
            window.location.href = AJS.params.baseUrl + '/display/' + journeyPayload.space + '/' + journeyPayload.stepOnePageTitle;
        }).error(function () {
            var failMessage = "Failed to call Content Formatting blueprint create journey pages action";
            console.log(failMessage);
        });
    }

    function handleWizardPage1Input(e, state) {
        $('.dialog-button-panel').append(CFM.Blueprints.docoLink());
        $('.cfm-blueprints-picture').prop('class', 'cfm-blueprints-picture');
        var descriptionElement = $('.cfm-blueprint-description');
        //handle dropdown blueprint selection
        $('.cfm-blueprint-selected').on('click', function (event) {
            descriptionElement.removeClass('blueprint-validation');
            selectedBlueprint = event.target.text;
            $('.cfm-blueprints-dropdown-text').text(selectedBlueprint);
            descriptionElement.text(getBlueprintDescriptionAndUpdateImage('page1', selectedBlueprint));
        });
        //handle page title change
        $('#cfm-page-title').on('change', function () {
            descriptionElement.removeClass('blueprint-validation');
            descriptionElement.text(getBlueprintDescriptionAndUpdateImage('page1', selectedBlueprint));
        });
        //close dropdown if cancel button is clicked while dropdown open
        $('.dialog-button-panel .button-panel-link.button-panel-cancel-link').on('click', function () {
            $('#cfm-blueprints-dropdown').remove();
        });
    }

    function createKeyCodeRange(start, end) {
        var keyCodeArray = [];
        for (var i = start; i <= end; i++) {
            keyCodeArray.push(i);
        }
        return keyCodeArray;
    }

    function handleWizardPage2Input(e, state) {
        $('.dialog-button-panel').append(CFM.Blueprints.docoLink());
        var table = $('#cfm-wizard-dataTable');
        var keyCodeArray = createKeyCodeRange(48, 90);
        keyCodeArray.push(13);
        keyCodeArray.push(32);

        //add page title table row
        table.on('keypress click', '.cfmAddPageTitleRowInput', function (event) {
            if ($.inArray(event.which, keyCodeArray) === -1) {
                var tableRow = $('#cfm-wizard-dataTable > tbody > tr');
                var newRow = CFM.Blueprints.addPageTitleRow({rowIndex: rowIndex});
                rowIndex++;
                //add new table row on appropriate index
                tableRow.eq($.inArray($(event.target).parent().parent()[0], tableRow)).after(newRow);
                //make first row 'remove button' clickable
                $('#groupRow' + $('#cfm-wizard-dataTable tbody tr .cfmAddPageTitleRowInput')[0].getAttribute('data-row-index') + ' .cfm-actions .cfmRemovePageTitleRowInput').removeAttr('disabled');
            } else {
                event.preventDefault();
            }
        });

        //remove page title table row
        table.on('keypress click', '.cfmRemovePageTitleRowInput', function (event) {
            if (event.which !== 13 && event.which !== 32) {
                var rowIndex = event.target.getAttribute('data-row-index');
                $('#groupRow' + rowIndex).remove();
                //make first row 'remove button' disabled
                if ($('#cfm-wizard-dataTable tbody tr').length === 1) {
                    $('#groupRow' + $('#cfm-wizard-dataTable tbody tr .cfmAddPageTitleRowInput')[0].getAttribute('data-row-index') + ' .cfm-actions .cfmRemovePageTitleRowInput').prop('disabled', true);
                }
            } else {
                event.preventDefault();
            }
        });
    }

    function handleWizardPage3Input(e, state) {
        $('.dialog-button-panel').append(CFM.Blueprints.docoLink());
        $('.cfm-blueprint-description').text(getBlueprintDescriptionAndUpdateImage('page3', selectedBlueprint));
    }

    //displays the appropriate description message and image based on the selected blueprint and wizard dialog step.
    function getBlueprintDescriptionAndUpdateImage(dialogPage, selectedBlueprint) {
        var description;
        switch (selectedBlueprint) {
            case "Multi-Page Journey":
                description = "Create several pages that a user can follow from start to finish.";
                updateBlueprintImage(dialogPage, 'multi-page-journey');
                break;
            case "Space Home Page":
                description = "Design a new Space Home Page.";
                updateBlueprintImage(dialogPage, 'space-home-page');
                break;
            case "Finance":
                description = "This template displays financial performance data.";
                updateBlueprintImage(dialogPage, 'finance');
                break;
            case "Blog":
                description = "Get started with a blog.";
                updateBlueprintImage(dialogPage, 'blog');
                break;
            case "Software Requirements":
                description = "Create a software requirements document.";
                updateBlueprintImage(dialogPage, 'software-requirements');
                break;
            case "Academic":
                description = "Use mathematical formulae and cite works.";
                updateBlueprintImage(dialogPage, 'academic');
                break;
            default:
                description = "Start by entering a page Title and selecting a template from the dropdown.";
        }
        return description;
    }

    function updateBlueprintImage(dialogPage, selectedBlueprint) {
        var blueprintPictureElement = $('.cfm-blueprints-picture');
        var blueprintPictureElementComplete = $('.cfm-blueprints-picture-complete');
        if (dialogPage === 'page1') {
            blueprintPictureElement.prop('class', 'cfm-blueprints-picture');
            blueprintPictureElement.addClass(dialogPage).addClass(selectedBlueprint);
        } else {
            blueprintPictureElementComplete.prop('class', 'cfm-blueprints-picture-complete');
            blueprintPictureElementComplete.addClass(dialogPage).addClass(selectedBlueprint);
        }
    }

    function doesPageExist(pageTitle, spaceKey) {
        var success = false;
        $.ajax({
            type: 'GET',
            async: false,
            url: AJS.params.baseUrl + '/rest/api/content?spaceKey=' + spaceKey + '&title=' + pageTitle,
            dataType: 'json'
        }).success(function (json) {
            if (json.size > 0) {
                success = true;
            } else {
                success = false;
            }
        });
        return success;
    }

    function addValidationStyling(element) {
        element.addClass('blueprint-validation');
        element.addClass('validation-error');

        //shake error message
        setTimeout(function () {
            element.removeClass('validation-error');
        }, 100);
    }

    function resetValidation() {
        $('.cfm-invalid-page-title').remove();
    }

    //reset some elements when navigating backwards to page 1
    function handleWizardPage1PreRender() {
        selectedBlueprint = false;
    }

    Confluence.Blueprint.setWizard('com.adaptavist.confluence.contentFormattingMacros:cfm-blueprint-item', function (wizard) {
        wizard.on('submit.cfmBlueprintWizardPage1', handleWizardPage1Submit);
        wizard.on('submit.cfmBlueprintWizardPage2', handleWizardPage2Submit);
        wizard.on('submit.cfmBlueprintWizardPage3', handleWizardPage3Submit);
        wizard.on('pre-render.cfmBlueprintWizardPage1', handleWizardPage1PreRender);
        wizard.on('post-render.cfmBlueprintWizardPage1', handleWizardPage1Input);
        wizard.on('post-render.cfmBlueprintWizardPage2', handleWizardPage2Input);
        wizard.on('post-render.cfmBlueprintWizardPage3', handleWizardPage3Input);
    });
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.soy' */
// This file was automatically generated from appswitcher.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher == 'undefined') { navlinks.templates.appswitcher = {}; }


navlinks.templates.appswitcher.linkSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    output += '<div class="aui-nav-heading sidebar-section-header">' + soy.$$escapeHtml(opt_data.title) + '</div><ul class="aui-nav nav-links">';
    var linkList8 = opt_data.list;
    var linkListLen8 = linkList8.length;
    for (var linkIndex8 = 0; linkIndex8 < linkListLen8; linkIndex8++) {
      var linkData8 = linkList8[linkIndex8];
      output += navlinks.templates.appswitcher.applicationsItem(linkData8);
    }
    output += '</ul>';
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.linkSection.soyTemplateName = 'navlinks.templates.appswitcher.linkSection';
}


navlinks.templates.appswitcher.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span></a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher.applicationsItem';
}


navlinks.templates.appswitcher.shortcutsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link"><a href="' + soy.$$escapeHtml(opt_data.link) + '" ' + ((opt_data.self) ? 'class="checked"' : '') + ' title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.shortcutsItem.soyTemplateName = 'navlinks.templates.appswitcher.shortcutsItem';
}


navlinks.templates.appswitcher.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape('Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.error.soyTemplateName = 'navlinks.templates.appswitcher.error';
}


navlinks.templates.appswitcher.sidebarContents = function(opt_data, opt_ignored) {
  return '<div class="aui-page-panel-nav"><nav class="aui-navgroup aui-navgroup-vertical"><div class="app-switcher-section app-switcher-applications"><div class="aui-nav-heading">' + soy.$$escapeHtml('Application Links') + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape('Loading\x26hellip;') + '</div></div><div class="app-switcher-section app-switcher-shortcuts"><div class="aui-nav-heading">' + soy.$$escapeHtml('Shortcuts') + '</div><div class="app-switcher-loading">' + soy.$$filterNoAutoescape('Loading\x26hellip;') + '</div></div></nav></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.sidebarContents.soyTemplateName = 'navlinks.templates.appswitcher.sidebarContents';
}


navlinks.templates.appswitcher.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml('Linked Applications') + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.trigger.soyTemplateName = 'navlinks.templates.appswitcher.trigger';
}


navlinks.templates.appswitcher.projectHeaderSection = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-title">' + aui.avatar.avatar({size: 'large', avatarImageUrl: opt_data.avatarUrl, isProject: true, title: opt_data.name}) + '<div class="sidebar-project-name">' + soy.$$escapeHtml(opt_data.name) + '</div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.projectHeaderSection.soyTemplateName = 'navlinks.templates.appswitcher.projectHeaderSection';
}


navlinks.templates.appswitcher.cogDropdown = function(opt_data, opt_ignored) {
  var output = '';
  var dropdownList__soy74 = '' + navlinks.templates.appswitcher.dropdownList({list: opt_data.links});
  output += aui.dropdown2.dropdown2({menu: {id: opt_data.id, content: dropdownList__soy74, extraClasses: 'aui-style-default sidebar-customize-section'}, trigger: {showIcon: false, content: '<span class="aui-icon aui-icon-small aui-iconfont-configure"></span>', container: '#app-switcher'}});
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.cogDropdown.soyTemplateName = 'navlinks.templates.appswitcher.cogDropdown';
}


navlinks.templates.appswitcher.dropdownList = function(opt_data, opt_ignored) {
  var output = '<ul class="sidebar-admin-links">';
  var linkList82 = opt_data.list;
  var linkListLen82 = linkList82.length;
  for (var linkIndex82 = 0; linkIndex82 < linkListLen82; linkIndex82++) {
    var linkData82 = linkList82[linkIndex82];
    output += '<li class="nav-link"><a href="' + soy.$$escapeHtml(linkData82.href) + '" title="' + soy.$$escapeHtml(linkData82.title) + '"><span class="nav-link-label">' + soy.$$escapeHtml(linkData82.label) + '</span></a></li>';
  }
  output += '</ul>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.dropdownList.soyTemplateName = 'navlinks.templates.appswitcher.dropdownList';
}


navlinks.templates.appswitcher.switcher = function(opt_data, opt_ignored) {
  var output = '';
  if (true) {
    if (AJS.DarkFeatures.isEnabled('rotp.sidebar')) {
      var sidebarContents__soy97 = '' + navlinks.templates.appswitcher.sidebarContents(null);
      var triggerContent__soy99 = '' + navlinks.templates.appswitcher.trigger(null);
      output += navlinks.templates.appswitcher.sidebar({sidebar: {id: 'app-switcher', content: sidebarContents__soy97}, trigger: {showIcon: false, content: triggerContent__soy99}});
    } else {
      output += navlinks.templates.appswitcher_old.switcher(null);
    }
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.switcher.soyTemplateName = 'navlinks.templates.appswitcher.switcher';
}


navlinks.templates.appswitcher.sidebar = function(opt_data, opt_ignored) {
  return '<a href="' + soy.$$escapeHtml(opt_data.sidebar.id) + '" class="sidebar-trigger app-switcher-trigger" aria-owns="' + soy.$$escapeHtml(opt_data.sidebar.id) + '" aria-haspopup="true" data-is-user-admin="' + soy.$$escapeHtml(false) + '" data-is-sidebar="true" >' + soy.$$filterNoAutoescape(opt_data.trigger.content) + '</a><div id=' + soy.$$escapeHtml(opt_data.sidebar.id) + ' class="app-switcher-sidebar aui-style-default sidebar-offscreen">' + soy.$$filterNoAutoescape(opt_data.sidebar.content) + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher.sidebar.soyTemplateName = 'navlinks.templates.appswitcher.sidebar';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher.js' */
(function(e,a){var d="is-user-admin";var c="#app-switcher";a.SideBar=function(f){var g=this;this.$sidebar=null;f=e.extend({sidebarContents:null},f);this.getLinks=function(){return e.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateAppLinks).fail(this.showAppSwitcherError)};this.populateProjectHeader=function(i,h){g.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").after(navlinks.templates.appswitcher.projectHeaderSection({avatarUrl:h,name:i}))};this.getProjectData=function(){var h=e(".project-shortcut-dialog-trigger"),i=h.data("key"),j=h.data("entity-type");if(h.size()==0||!i||!j){e(".app-switcher-shortcuts").remove();return}var l,k;k=e.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/local/"+i,cache:false,data:{entityType:j},dataType:"json"});l=e.ajax({url:AJS.contextPath()+"/rest/project-shortcuts/1.0/remote/"+i,cache:false,data:{entityType:j},dataType:"json"});e.when(k,l).then(function(n,m){g.updateProjectShortcuts(n,m,{key:i,entityType:j,name:h.data("name"),avatarUrl:h.find("img").prop("src")})},g.showProjectShortcutsError)};this.getSidebar=function(){if(!this.$sidebar){this.$sidebar=e(f.sidebarContents)}return this.$sidebar};this.addApplicationsCog=function(){e(".app-switcher-applications .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-applications-admin-dropdown",links:[{href:AJS.contextPath()+"/plugins/servlet/customize-application-navigator",label:"Customize navigator",title:"Add new entries, hide existing or restrict who sees what"},{href:AJS.contextPath()+"/plugins/servlet/applinks/listApplicationLinks",label:"Manage application links",title:"Link to more Atlassian applications"}]}))};this.addProjectShortcutsCog=function(h,j){var i=[{href:AJS.contextPath()+"/plugins/servlet/custom-content-links-admin?entityKey="+h,label:"Customize shortcuts",title:""}];if(g.entityMappings[j]){i.push({href:g.generateEntityLinksUrl(h,g.entityMappings[j]),label:"Manage product links",title:""})}g.getSidebar().find(".app-switcher-shortcuts .aui-nav-heading").before(navlinks.templates.appswitcher.cogDropdown({id:"sidebar-project-shortcuts-admin-dropdown",links:i}))};this.updateAppLinks=function(h){e(function(){g.getSidebar().find(".app-switcher-applications").html(navlinks.templates.appswitcher.linkSection({title:"Application Links",list:h}));if(g.getSidebar().data(d)){g.addApplicationsCog()}g.bindAnalyticsHandlers(g.getSidebar(),h)})};this.updateProjectShortcuts=function(k,i,j){var l=k[0].shortcuts,h=i[0].shortcuts;g.getSidebar().find(".app-switcher-shortcuts").html(navlinks.templates.appswitcher.linkSection({title:"Shortcuts",list:l.concat(h)}));if(g.getSidebar().data(d)){g.addProjectShortcutsCog(j.key,j.entityType)}g.populateProjectHeader(j.name,j.avatarUrl);g.bindAnalyticsHandlers(g.getSidebar(),data)};this.entityMappings={"confluence.space":"com.atlassian.applinks.api.application.confluence.ConfluenceSpaceEntityType","jira.project":"com.atlassian.applinks.api.application.jira.JiraProjectEntityType","bamboo.project":"com.atlassian.applinks.api.application.bamboo.BambooProjectEntityType","stash.project":"com.atlassian.applinks.api.application.stash.StashProjectEntityType"};this.generateEntityLinksUrl=function(h,i){if(i===g.entityMappings["confluence.space"]){return AJS.contextPath()+"/spaces/listentitylinks.action?typeId="+i+"&key="+h}else{return AJS.contextPath()+"/plugins/servlet/applinks/listEntityLinks/"+i+"/"+h}};this.showAppSwitcherError=function(){e(function(){var h=g.getSidebar();h.find(".app-switcher-applications .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());h.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(g.retryLoading,g))})};this.showProjectShortcutsError=function(){e(function(){var h=g.getSidebar();h.find(".app-switcher-shortcuts .app-switcher-loading").replaceWith(navlinks.templates.appswitcher.error());h.off(".appswitcher").on("click.appswitcher",".app-switcher-retry",e.proxy(g.retryLoading,g))})};this.retryLoading=function(h){this.getSidebar().html(navlinks.templates.appswitcher.sidebarContents());this.getLinks();this.getProjectData();h&&h.stopPropagation()};this.bindAnalyticsHandlers=function(h,i){};this.getLinks();e(this.getProjectData);this.toggleSidebar=function(j){var k=g.getSidebar(),i=e("body"),h=e(window.document);if(!i.hasClass("app-switcher-open")){var m=e("#header");k.css("left",-k.width());k.parent("body").length||k.appendTo("body");b({data:k});k.animate({left:0},300);function l(n){var p=n.target&&e(n.target),o=n.keyCode;if(n.originalEvent===j.originalEvent){return}if(p&&!o&&!(p.closest(k).length||p.closest(m).length)&&j.which==1&&!(n.shiftKey||n.ctrlKey||n.metaKey)){g.toggleSidebar()}else{if(o===27){g.toggleSidebar()}}}h.on("click.appSwitcher",l);h.on("keydown.appSwitcher",l);h.on("scroll.appSwitcher",k,b)}else{h.off(".appSwitcher")}i.toggleClass("app-switcher-open")};e("#header").on("click",".app-switcher-trigger",this.toggleSidebar)};function b(h){var f=e(document).scrollTop(),i=e("#header"),g=(i.height()+i.offset().top)-f;if(g>=0){h.data.css({top:g,position:"fixed"})}else{h.data.css({top:0,left:0,position:"fixed"})}}e(function(){if(e(c).data("is-sidebar")===true){new a.SideBar({sidebarContents:c})}})}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.js' */
var APPSWITCHER_TRIGGER_CLICK="appswitcher.trigger.click";var APPSWITCHER_DROPDOWN_SHOW="appswitcher.dropdown.show";var APPSWITCHER_DROPDOWN_DISPLAY_ERROR="appswitcher.dropdown.display.error";var APPSWITCHER_APP_LINK_CLICK="appswitcher.app.link.click";var APPSWITCHER_CONFIGURE_LINK_CLICK="appswitcher.configure.link.click";(function(c,f){var b="isAppSuggestionAvailable";var d="isSiteAdminUser";var e="isUserAdmin";var a="#app-switcher";f.AppSwitcher=function(j){var l=AJS.contextPath()+"/plugins/servlet/customize-application-navigator";var k="unified.usermanagement";var m=this;this.$dropdown=null;j=c.extend({dropdownContents:null},j);this.getLinks=function(){return c.ajax({url:AJS.contextPath()+"/rest/menu/latest/appswitcher",cache:false,dataType:"json"}).done(this.updateDropdown).fail(this.showError)};this.getDropdown=function(){if(!this.$dropdown){this.$dropdown=c(j.dropdownContents);this.envData=this.$dropdown.data("environment")}return this.$dropdown};this.updateDropdown=function(n){c(function(){m.getDropdown().html(navlinks.templates.appswitcher_old.applications({apps:n,showAdminLink:m.envData[e],adminLink:l}));m.bindAnalyticsHandlers();if(m.envData[b]===true){m.handleSuggestionApps(n)}})};this.bindAnalyticsHandlers=function(){c(".app-switcher-trigger").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_TRIGGER_CLICK})});c("#app-switcher").on("aui-dropdown2-show",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_SHOW})});c("#app-switcher .nav-link").on("click",function(){var p="custom";var q=c(this).find("a");var o=q.attr("href");var n=window.location.hostname;if(o&&o.indexOf("bitbucket.org")>-1){p="bitbucket-cloud"}else{if(o.indexOf(n+"/wiki")>-1){p="confluence"}else{if(o.indexOf(n+"/build")>-1){p="bamboo"}else{if(o.indexOf(n)>-1){p="jira"}}}}AJS.trigger("analyticsEvent",{name:APPSWITCHER_APP_LINK_CLICK,data:{product:p}})});c(".nav-link-edit-wrapper").on("click",function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_CONFIGURE_LINK_CLICK})})};this.isBillingSystemEnabled=function(){return(this.envData[d]===true)&&AJS.DarkFeatures.isEnabled(k)};this.handleSuggestionApps=function(q){var r=_.map(q,function(s){return s.applicationType.toLowerCase()});var o=c("<div id='app-switcher-suggestion-apps' class='aui-dropdown2-section'/>");o.html(navlinks.templates.appswitcher_old.suggestionApps);var p=o.find(".suggestion-apps");var n=false;_.each(g,function(s){if(!_.contains(r,s.appName)){n=true;p.append(navlinks.templates.appswitcher_old.suggestionApp({suggestionApp:s,isBillingSystemEnabled:m.isBillingSystemEnabled()}))}});if(!n){return}c("#app-switcher").append(o);c(".app-discovery-suggestion-app").click(function(){var t=c(this).find("a");var s;if(m.envData[d]===true){s="appswitcher.discovery.siteadmin.select.inproduct."}else{s="appswitcher.discovery.user.select."}s=s+t.attr("id").toLowerCase();AJS.trigger("analytics",{name:s})});c(".app-discovery-suggestion-app").hover(function(){c(this).find("a").removeClass("active").removeClass("aui-dropdown2-active")});c(".app-discovery-cancel-button").click(function(){AJS.trigger("analytics",{name:"appswitcher.discovery.nothanks.button.click"});i(h,"true");o.remove()})};this.showError=function(){c(function(){AJS.trigger("analyticsEvent",{name:APPSWITCHER_DROPDOWN_DISPLAY_ERROR});m.getDropdown().html(navlinks.templates.appswitcher_old.error()).off(".appswitcher").on("click.appswitcher",".app-switcher-retry",c.proxy(m.retryLoading,m))})};this.retryLoading=function(n){this.getDropdown().html(navlinks.templates.appswitcher_old.loading());this.getLinks();n&&n.stopPropagation()};this.getLinks()};var h="key-no-thanks";var g=[{appName:"jira",appDesc:"Issue & Project Tracking Software",discoveryUrl:"https://www.atlassian.com/software/jira",billingSystemDiscoveryUrl:"/admin/billing/addapplication"},{appName:"confluence",appDesc:"Collaboration and content sharing",discoveryUrl:"https://www.atlassian.com/software/confluence",billingSystemDiscoveryUrl:"/admin/billing/addapplication?product=confluence.ondemand"},{appName:"bamboo",appDesc:"Continuous integration",discoveryUrl:"https://www.atlassian.com/software/bamboo",billingSystemDiscoveryUrl:"/admin/billing/addapplication?product=bamboo.ondemand"}];var i=function(j,k){c.ajax({url:AJS.contextPath()+"/rest/menu/latest/userdata/",type:"PUT",contentType:"application/json",data:JSON.stringify({key:j,value:k})})};c(function(){if(c(a).data("is-switcher")===true){new f.AppSwitcher({dropdownContents:a})}})}(jQuery,window.NL=(window.NL||{})));
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.plugins.atlassian-nav-links-plugin:rotp-menu', location = 'appswitcher/appswitcher_old.soy' */
// This file was automatically generated from appswitcher_old.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace navlinks.templates.appswitcher_old.
 */

if (typeof navlinks == 'undefined') { var navlinks = {}; }
if (typeof navlinks.templates == 'undefined') { navlinks.templates = {}; }
if (typeof navlinks.templates.appswitcher_old == 'undefined') { navlinks.templates.appswitcher_old = {}; }


navlinks.templates.appswitcher_old.applications = function(opt_data, opt_ignored) {
  return '' + navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.apps, listClass: 'nav-links', showDescription: opt_data.showDescription}) + ((opt_data.custom) ? navlinks.templates.appswitcher_old.applicationsSection({list: opt_data.custom, showDescription: opt_data.showDescription}) : '') + ((opt_data.showAdminLink) ? navlinks.templates.appswitcher_old.adminSection(opt_data) : '');
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applications.soyTemplateName = 'navlinks.templates.appswitcher_old.applications';
}


navlinks.templates.appswitcher_old.applicationsSection = function(opt_data, opt_ignored) {
  var output = '';
  if (opt_data.list.length > 0) {
    var param19 = '<ul' + ((opt_data.listClass) ? ' class="' + soy.$$escapeHtml(opt_data.listClass) + '"' : '') + '>';
    var linkList27 = opt_data.list;
    var linkListLen27 = linkList27.length;
    for (var linkIndex27 = 0; linkIndex27 < linkListLen27; linkIndex27++) {
      var linkData27 = linkList27[linkIndex27];
      param19 += navlinks.templates.appswitcher_old.applicationsItem(soy.$$augmentMap(linkData27, {showDescription: opt_data.showDescription}));
    }
    param19 += '</ul>';
    output += aui.dropdown2.section({content: param19});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsSection.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsSection';
}


navlinks.templates.appswitcher_old.applicationsItem = function(opt_data, opt_ignored) {
  return '<li class="nav-link' + ((opt_data.self) ? ' nav-link-local' : '') + '"><a href="' + soy.$$escapeHtml(opt_data.link) + '" class="aui-dropdown2-radio ' + ((opt_data.self) ? 'aui-dropdown2-checked' : '') + '" title="' + soy.$$escapeHtml(opt_data.link) + '"><span class="nav-link-label">' + soy.$$escapeHtml(opt_data.label) + '</span>' + ((opt_data.showDescription && opt_data.description) ? '<span class="nav-link-description">' + soy.$$escapeHtml(opt_data.description) + '</span>' : '') + '</a></li>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.applicationsItem.soyTemplateName = 'navlinks.templates.appswitcher_old.applicationsItem';
}


navlinks.templates.appswitcher_old.adminSection = function(opt_data, opt_ignored) {
  return '' + aui.dropdown2.section({content: '<ul class="nav-links"><li><a class="nav-link-edit-wrapper" href="' + soy.$$escapeHtml(opt_data.adminLink) + '"><span class="nav-link-edit">' + soy.$$filterNoAutoescape('Configure\x26hellip;') + '</span></a></li></ul>'});
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.adminSection.soyTemplateName = 'navlinks.templates.appswitcher_old.adminSection';
}


navlinks.templates.appswitcher_old.error = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-error">' + soy.$$filterNoAutoescape('Something went wrong, please \x3cspan class\x3d\x22app-switcher-retry\x22\x3etry again\x3c/span\x3e.') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.error.soyTemplateName = 'navlinks.templates.appswitcher_old.error';
}


navlinks.templates.appswitcher_old.loading = function(opt_data, opt_ignored) {
  return '<div class="app-switcher-loading">' + soy.$$filterNoAutoescape('Loading\x26hellip;') + '</div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.loading.soyTemplateName = 'navlinks.templates.appswitcher_old.loading';
}


navlinks.templates.appswitcher_old.trigger = function(opt_data, opt_ignored) {
  return '<span class="aui-icon aui-icon-small aui-iconfont-appswitcher">' + soy.$$escapeHtml('Linked Applications') + '</span>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.trigger.soyTemplateName = 'navlinks.templates.appswitcher_old.trigger';
}


navlinks.templates.appswitcher_old.switcher = function(opt_data, opt_ignored) {
  var output = '';
  if (true) {
    var loadingContent__soy81 = '' + navlinks.templates.appswitcher_old.loading(null);
    var triggerContent__soy83 = '' + navlinks.templates.appswitcher_old.trigger(null);
    output += aui.dropdown2.dropdown2({menu: {id: 'app-switcher', content: loadingContent__soy81, extraClasses: 'aui-style-default', extraAttributes: {'data-environment': {}, 'data-is-switcher': 'true'}}, trigger: {showIcon: false, content: triggerContent__soy83, extraClasses: 'app-switcher-trigger', extraAttributes: {href: '#app-switcher'}}});
  }
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.switcher.soyTemplateName = 'navlinks.templates.appswitcher_old.switcher';
}


navlinks.templates.appswitcher_old.suggestionApp = function(opt_data, opt_ignored) {
  var output = '';
  var href__soy89 = opt_data.isBillingSystemEnabled == true ? opt_data.suggestionApp.billingSystemDiscoveryUrl : opt_data.suggestionApp.discoveryUrl;
  output += '<li class="app-discovery-suggestion-app"><a id="' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '" href="' + soy.$$escapeHtml(href__soy89) + '" class="app-discovery-link aui-icon-container app-discovery-' + soy.$$escapeHtml(opt_data.suggestionApp.appName) + '-product-icon" title="' + soy.$$escapeHtml(href__soy89) + '" target="_blank"/><div class="app-discovery-small">' + soy.$$escapeHtml(opt_data.suggestionApp.appDesc) + '</div></li>';
  return output;
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.suggestionApp.soyTemplateName = 'navlinks.templates.appswitcher_old.suggestionApp';
}


navlinks.templates.appswitcher_old.suggestionApps = function(opt_data, opt_ignored) {
  return '<ul class=\'nav-links suggestion-apps\'><li><span class=\'app-discovery-suggest-title nav-link-label\'><h6>' + soy.$$escapeHtml('Try other Atlassian apps') + '</h6></span></li></ul><div class=\'buttons-container app-discovery-suggest-apps-buttons\'><div class=\'buttons\'><button class=\'aui-button aui-button-link app-discovery-cancel-button\' name=\'cancel\' accesskey=\'c\' href=\'#\'>' + soy.$$escapeHtml('Don\x27t show this again') + '</button></div></div>';
};
if (goog.DEBUG) {
  navlinks.templates.appswitcher_old.suggestionApps.soyTemplateName = 'navlinks.templates.appswitcher_old.suggestionApps';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:common-header-resources', location = '/includes/js/header-user-menu.js' */
define("confluence/header-user-menu",["jquery","confluence/meta","underscore"],function(a,c,b){function d(){var b=c.get("current-user-avatar-uri-reference");a("#user-menu-link").find(".aui-avatar-inner img").attr("src",b)}return function(){b.defer(d)}});require("confluence/module-exporter").safeRequire("confluence/header-user-menu",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:general-analytics-bindings', location = '/includes/js/analytics-bindings.js' */
define("confluence/analytics-bindings",["jquery","confluence/analytics-support"],function(b,d){return function(){function e(a,c){b(a).on("click",".view-historical-version-trigger",function(){d.publish("confluence.page.view-historical.from-"+(c||"unknown"))})}function f(a,c){b(a).on("click",".restore-historical-version-trigger",function(){d.publish("confluence.page.restore-historical.from-"+(c||"unknown"))})}function g(a,c){b("#header .aui-header-secondary "+a).on("click",function(){var a=b(this).hasClass("aui-dropdown2-active")?
"expanded":"collapsed";d.publish("confluence.header.dropdown."+c,{state:a})})}e("#page-history-warning","navigation");e("#page-history-container","history");e(".diff-menu","diff");f("#page-history-warning","navigation");f("#page-history-container","history");g("#admin-menu-link","administration");g("#user-menu-link","profile")}});require("confluence/module-exporter").safeRequire("confluence/analytics-bindings",function(b){require("ajs").toInit(b)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-search-ui-plugin:search-ui-client-templates', location = 'soy/search-ui-client-templates.soy' */
// This file was automatically generated from search-ui-client-templates.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.SearchUI.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.SearchUI == 'undefined') { Confluence.Templates.SearchUI = {}; }


Confluence.Templates.SearchUI.helpUrl = function(opt_data, opt_ignored) {
  return '' + soy.$$escapeHtml("https:\/\/docs.atlassian.com\/confluence\/docs-71\/Search");
};
if (goog.DEBUG) {
  Confluence.Templates.SearchUI.helpUrl.soyTemplateName = 'Confluence.Templates.SearchUI.helpUrl';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-search-ui-plugin:confluence-search-ui-plugin-resources', location = '/js/confluence-search-ui-analytics-support.js' */
'use strict';

/**
 * Utility functions for publishing new search ui analytics
 * @module confluence/searchui/analytics-support
 */
define('confluence/search-ui/analytics-support', ['window', 'document', 'confluence/api/event', 'confluence/api/url'], function (window, document, eventApi, url) {
    "use strict";

    var SEARCH_UI_LEAVE_CONTENT_FROM_SEARCH_RESULT = 'confluence-search-ui-leave-content-from-new-search';
    var SEARCH_UI_EDIT_CONTENT_FROM_SEARCH_RESULT = 'confluence-search-ui-edit-content-from-new-search';
    /**
     * trigger analytic
     * @since 6.13.0
     * @public
     * @param name the analytic name
     * @param data the analytic data
     */
    function triggerAnalytic(name, data) {
        data = data || {};
        eventApi.trigger('analytics', { name: name, data: data });
    }

    /**
     * @param urlString
     * @returns {*} return array of searchId
     */
    function extractAnalyticsData(urlString) {
        var params = url.parse(urlString).queryParams;
        return params && params.searchId ? params.searchId : [];
    }

    /**
     * trigger period analytic event when beforeunload event happen
     * @param searchId searchId
     * @param period the period in millisecond
     */
    function triggerPeriodEventViewContentFromSearch(searchId, period) {
        triggerAnalytic(SEARCH_UI_LEAVE_CONTENT_FROM_SEARCH_RESULT, { searchId: searchId, period: period });
    }

    /**
     * trigger period analytic event when enter editor init.rte
     * @param searchId searchId
     * @param period the period in millisecond
     */
    function triggerPeriodEvenEditContentFromSearch(searchId, period) {
        triggerAnalytic(SEARCH_UI_EDIT_CONTENT_FROM_SEARCH_RESULT, { searchId: searchId, period: period });
    }

    /**
     * Remove
     * @param urlString
     * @returns {*}
     */
    function removeSearchIdUrl(urlString) {
        var parsedUrl = url.parse(urlString);
        delete parsedUrl.queryParams.searchId;
        return url.format(parsedUrl);
    }

    /**
     * Clean analytic parameter
     */
    function replaceStateAfterCleaningUpAnalyticsParameters() {
        var cleanUrl = removeSearchIdUrl(document.URL);
        if (document.URL !== cleanUrl) {
            window.history.replaceState(null, '', cleanUrl);
        }
    }

    /**
     * Init analytic for period
     * @since 6.13
     * @public
     */
    function initAnalytic() {
        var analyticsData = extractAnalyticsData(document.URL);
        var searchId = analyticsData[0];
        if (!searchId) {
            return;
        }

        var currentDate = new Date();
        window.addEventListener('beforeunload', function () {
            var currentTriggerTime = new Date();
            var period = currentTriggerTime.getTime() - currentDate.getTime();
            triggerPeriodEventViewContentFromSearch(searchId, period);
        });
        eventApi.bind('init.rte', function () {
            var currentTriggerTime = new Date();
            var period = currentTriggerTime.getTime() - currentDate.getTime();
            triggerPeriodEvenEditContentFromSearch(searchId, period);
        });
        // Check if browser supports HTML5 replaceState()
        if (window.history && window.history.replaceState) {
            replaceStateAfterCleaningUpAnalyticsParameters();
        }
    }

    return {
        init: initAnalytic
    };
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-search-ui-plugin:confluence-search-ui-plugin-resources', location = '/js/confluence-search-ui-plugin.js' */
require(['ajs', 'wrm', 'document', 'confluence/api/logger', 'confluence/meta', 'confluence/api/constants', 'confluence/search-ui/analytics-support'],
    function (ajs, wrm, document, logger, meta, constants, analyticsSupport) {
        const events = ['click', 'focus'];
        var searchUI;
        var searchInput;
        var spinner;
        var tooltip;
        var isTooltipShown = false;
        var isLoading = false;

        function toggleIcon() {
            searchUI.classList.toggle("hide-icon");
        }

        function startLoading() {
            isLoading = true;
            toggleIcon();
            spinner.style.display = 'block';
        }

        function stopLoading() {
            isLoading = false;
            toggleIcon();
            spinner.style.display = 'none';
        }

        function unregisterHandlers() {
            events.forEach(function (event) {
                searchInput.removeEventListener(event, lazyLoad);
            });
        }

        function showTooltip() {
            if (!isTooltipShown) {
                tooltip.style.display = 'block';
                isTooltipShown = true;
            }
        }

        function hideTooltip() {
            if (isTooltipShown) {
                tooltip.style.display = 'none';
                isTooltipShown = false;
            }
        }

        function handleClickAndFocusEvent(event) {
            showTooltip();
            event.stopPropagation();
        }

        function handleInputEvent(event) {
            if (event.target.value) {
                showTooltip();
            } else {
                hideTooltip();
            }
        }

        function handleKeyDownEvent(event) {
            const ENTER_KEY_CODE = 13;
            if (event.keyCode === ENTER_KEY_CODE) {
                const searchTerm = event.target.value;
                const cql = searchTerm ? '?cql=&queryString=' + encodeURIComponent(searchTerm) : '';
                window.location.href = constants.CONTEXT_PATH + '/dosearchsite.action' + cql;
            }
        }

        function handleDocumentClick(event) {
            if (searchUI.contains(event.target)) {
                showTooltip();
            } else {
                hideTooltip();
            }
        }

        function lazyLoad() {
            if (isLoading) return;

            startLoading();
            wrm
                .require(['wrc!confluence-search-ui-plugin-main'])
                .done(function () {
                    require(['confluence-search-ui-plugin-main'], function (SearchUI) {
                        SearchUI.init();
                        unregisterHandlers();
                        stopLoading();
                    });
                })
                .fail(function () {
                    stopLoading();
                    logger.error('fail to load confluence-search-ui-plugin-main');
                });
        }

        ajs.toInit(function () {
            searchUI = document.getElementById('search-ui');
            // login screen doesn't have navigation search
            if (!searchUI) {
                logger.log('no search-ui element found');
                return;
            }

            analyticsSupport.init();
            searchInput = searchUI.querySelector('#quick-search-query');
            spinner = searchUI.querySelector('aui-spinner');
            tooltip = searchUI.querySelector('[role=alert]');

            if (!meta.get('global-settings-quick-search-enabled')) {
                searchInput.addEventListener('keydown', handleKeyDownEvent);
                searchInput.addEventListener('input', handleInputEvent);

                events.forEach(function (event) {
                    searchInput.addEventListener(event, handleClickAndFocusEvent);
                });

                document.addEventListener('click', handleDocumentClick);
            } else {
                events.forEach(function (event) {
                    searchInput.addEventListener(event, lazyLoad);
                });
            }
        });
    });

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/soy/dialog-wizard.soy' */
// This file was automatically generated from dialog-wizard.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Templates.DialogWizard.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Templates == 'undefined') { Confluence.Templates = {}; }
if (typeof Confluence.Templates.DialogWizard == 'undefined') { Confluence.Templates.DialogWizard = {}; }


Confluence.Templates.DialogWizard.pageContainer = function(opt_data, opt_ignored) {
  return '<div class="dialog-wizard-page-wrapper"><div class="dialog-wizard-page-main"></div><div class="dialog-wizard-page-description">' + ((opt_data.descriptionHeaderLink && opt_data.descriptionHeader) ? '<h3><a href=\'' + soy.$$escapeHtml(opt_data.descriptionHeaderLink) + '\' target=\'_blank\'>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</a></h3>' : (opt_data.descriptionHeader) ? '<h3>' + soy.$$escapeHtml(opt_data.descriptionHeader) + '</h3>' : '') + '<p>' + soy.$$escapeHtml(opt_data.descriptionContent) + '</p></div></div>';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.pageContainer.soyTemplateName = 'Confluence.Templates.DialogWizard.pageContainer';
}


Confluence.Templates.DialogWizard.waitIcon = function(opt_data, opt_ignored) {
  return '<img class="wait-icon" src="' + soy.$$escapeHtml("/confluence") + '/images/icons/wait.gif">';
};
if (goog.DEBUG) {
  Confluence.Templates.DialogWizard.waitIcon.soyTemplateName = 'Confluence.Templates.DialogWizard.waitIcon';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.dialog-wizard:dialog-wizard-resources', location = '/js/dialog-wizard.js' */
(function($){var FormStateControl=require("confluence/form-state-control");function findNextPageId(pageId,pages){var thisPageIdIndex=-1;_.each(pages,function(element,index){if(element.id==pageId){thisPageIdIndex=index;return}});return pages[thisPageIdIndex+1].id}Confluence.DialogWizard=function(dialog,finalAction){function newPage(config,pageId,soyRenderContext,wizardData,wizard){var wizardPage=_.find(config.wizard.pages,function(page){return page.id==pageId});wizard.trigger("pre-render."+pageId,{soyRenderContext:soyRenderContext,wizardData:wizardData});try{var soyTemplateFunction=eval(wizardPage.templateKey);var $soyRender=$(soyTemplateFunction(soyRenderContext))}catch(e){throw Error("wizard points to a non-existent Soy template '"+wizardPage.templateKey+"'. Check your web-resources or server logs.")}$soyRender.find("a, area, button, input, object, select, textarea").attr("tabindex","10");var $panelContent;if(wizardPage.descriptionContent){$panelContent=$(Confluence.Templates.DialogWizard.pageContainer({descriptionHeaderLink:wizardPage.descriptionHeaderLink,descriptionHeader:wizardPage.descriptionHeader,descriptionContent:wizardPage.descriptionContent}));$panelContent.addClass("with-description").find(".dialog-wizard-page-main").append($soyRender)}else{$panelContent=$soyRender}var dialogPageId=pageId;if(dialog.id=="create-dialog"){dialogPageId="create-dialog-"+pageId}var page=dialog.addPage(dialogPageId).page[dialog.curpage];page.addHeader(wizardPage.title).addPanel("SinglePanel",$panelContent,"singlePanel");page.element.find("form").submit(function(){return false});if(wizardPage.descriptionContent){page.element.find(".dialog-panel-body").css({padding:0})}Confluence.Binder.autocompleteMultiUser($soyRender);Confluence.Binder.placeholder($soyRender);function nextCallback(ev){$soyRender.find(".placeholded").val("");var pageData={};var formArray=$soyRender.parent().find("form").serializeArray();_.each(formArray,function(item){pageData[item.name]=item.value});var e=$.Event("submit."+pageId);var state={$container:$soyRender,wizardData:wizardData,pageData:pageData};var validationDeferred=$.Deferred();validationDeferred.done(function(){wizardData.pages[pageId]=pageData;var nextPageId;if(state.nextPageId){nextPageId=state.nextPageId}else{nextPageId=!wizardPage.last&&findNextPageId(pageId,config.wizard.pages)}if(!state.nextPageId&&wizardPage.last){doFinalAction(ev,state,wizardData,finalAction,wizard);FormStateControl.disableElement(dialog.popup.element.find(":input,a").filter(":visible"));buttons.prepend(Confluence.Templates.DialogWizard.waitIcon())}else{newPage(config,nextPageId,soyRenderContext,wizardData,wizard)}});validationDeferred.fail(function(){AJS.log("dialog aborted by on-submit callback on page: "+pageId)});state.validationDeferred=validationDeferred;wizard.trigger(e,state);if(state.async){return}if(e.isDefaultPrevented()){validationDeferred.reject();return}validationDeferred.resolve()}var buttons=dialog.addFullButtonPanel(page,nextCallback,null,wizardPage.last);buttons.find(".button-panel-back").click(function(){delete wizardData.pages[pageId]});buttons.find(".aui-button-primary").attr("tabindex","10");$soyRender.find("input, select, textarea").eq(0).focus();wizard.trigger("post-render."+pageId,{$container:$soyRender,wizardData:wizardData})}function doFinalAction(ev,state,wizardData,finalAction,wizard){if(state.finalUrl){if(ev.type==="click"&&ev.which===2){window.open(state.finalUrl)}else{window.location=state.finalUrl}}else{_.each(wizardData.pages,function(pageData){_.extend(wizardData,pageData)});delete wizardData.pages;finalAction(ev,wizardData,null,wizard)}return{success:function(callback){callback()}}}return{newPage:newPage,doFinalAction:doFinalAction}}})(AJS.$);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-model.js' */
define("confluence-watch-button/watch-model",["ajs","backbone"],function(a,b){return b.Model.extend({saveSettings:function(e,f,c){this.trigger("request");var d=this;return a.safe.ajax({url:e,type:f?"POST":"DELETE",contentType:"application/json",dataType:"json",data:{}}).done(function(){d.set(c,f);d.trigger("sync",d)}).fail(function(){d.trigger("error")})},saveWatchPage:function(d){var c=a.contextPath()+"/rest/api/user/watch/content/"+this.get("pageId");return this.saveSettings(c,d,"watchingPage")},saveWatchBlogs:function(d){var c=a.contextPath()+"/rest/api/user/watch/space/"+this.get("spaceKey")+"?contentType=blogpost";return this.saveSettings(c,d,"watchingBlogs")},saveWatchSpace:function(d){var c=a.contextPath()+"/rest/api/user/watch/space/"+this.get("spaceKey");return this.saveSettings(c,d,"watchingSpace")}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch-view.js' */
define("confluence-watch-button/watch-view",["jquery","ajs","underscore","backbone","confluence/flag"],function(c,a,b,e,d){return e.View.extend({events:{"change #cw-watch-page":"changeWatchPage","change #cw-watch-blogs":"changeWatchBlogs","change #cw-watch-space":"changeWatchSpace"},initialize:function(){b.bindAll(this,"render","initTooltips","changeWatchPage","changeWatchBlogs","changeWatchSpace","togglePageEnabledState","toggleBlogsEnabledState","startLoading","stopLoading","setTitle","_restoreCheckboxState","_disableAllElements","_rememberLastState","_revertToLastState");this.model.on("sync change:watchingSpace",this.togglePageEnabledState,this);this.model.on("change:watchingSpace",this.toggleBlogsEnabledState,this);this.model.on("request",this.startLoading,this);this.model.on("sync",this.setTitle,this);this.model.on("sync",this.stopLoading,this);this.model.on("sync",this._restoreCheckboxState,this);this.model.on("error",this._revertToLastState,this)},render:function(){this.$el.html(Confluence.Watch.Templates.dialogBody(this.model.toJSON()));this.initTooltips();this.setTitle(this.model);if(a.Meta.get("access-mode")==="READ_ONLY"){this._disableAllElements()}return this},_revertToLastState:function(){var i=this.currentModel.get("watchingPage");var j=this.currentModel.get("watchingSpace");var k=this.currentModel.get("watchingBlogs");var f=this.$("#cw-watch-page");f.prop("checked",i||j);f.prop("disabled",this.currentModel.get("watchPageDisabled"));var h=this.$("#cw-watch-space");h.prop("checked",j);h.prop("disabled",this.currentModel.get("watchSpaceDisabled"));var l=this.$("#cw-watch-blogs");l.prop("checked",k);l.prop("disabled",this.currentModel.get("watchBlogsDisabled"));this.$(".cw-manage-watchers").removeClass("disabled");this.model.set("watchingPage",i);this.model.set("watchingBlogs",k);this.model.set("watchingSpace",j);this.stopLoading();var g={close:"manual",type:"error",extraClasses:"confluence-menu-flag",fifo:true,stack:"menu"};this.errorFlag=new d(c.extend({},g,{body:"This site is read-only. You can\u0027t make changes right now."}))},_rememberLastState:function(){if(!!this.errorFlag){this.errorFlag.close()}this.currentModel=this.model.clone();this.currentModel.set("watchPageDisabled",this.$("#cw-watch-page").prop("disabled"));this.currentModel.set("watchSpaceDisabled",this.$("#cw-watch-space").prop("disabled"));this.currentModel.set("watchBlogsDisabled",this.$("#cw-watch-blogs").prop("disabled"));this.$targetCheckbox.prop("disabled",true)},_disableAllElements:function(){this.$("input[type='checkbox']").prop("disabled",true);this.$(".cw-manage-watchers").addClass("disabled")},_restoreCheckboxState:function(){this.$targetCheckbox&&this.$targetCheckbox.prop("disabled",false)},initTooltips:function(){this.$(".cw-tooltip").tooltip({gravity:"e",offset:5,delayIn:0});this.togglePageEnabledState(this.model);this.toggleBlogsEnabledState(this.model)},changeWatchPage:function(g){this.$targetCheckbox=c(g.target);this._rememberLastState();var f=this.$targetCheckbox.is(":checked");this.model.saveWatchPage(f)},changeWatchBlogs:function(g){this.$targetCheckbox=c(g.target);this._rememberLastState();var f=this.$targetCheckbox.is(":checked");this.model.saveWatchBlogs(f)},changeWatchSpace:function(g){this.$targetCheckbox=c(g.target);this._rememberLastState();var f=this.$targetCheckbox.is(":checked");this.model.saveWatchSpace(f)},togglePageEnabledState:function(f){var g=f.get("watchingPage");var i=f.get("watchingSpace");this.$("#cw-watch-page").prop("disabled",i);this.$("#cw-watch-page").prop("checked",g||i);var h=i?"You will receive updates for this page because you are watching this space.":"";this.$(".cw-tooltip-watch-page").attr("original-title",h)},toggleBlogsEnabledState:function(f){var i=f.get("watchingBlogs");var h=f.get("watchingSpace");this.$("#cw-watch-blogs").prop("disabled",h);this.$("#cw-watch-blogs").prop("checked",i||h);var g=h?"You are subscribed to all blog posts because you are watching this space.":"";this.$(".cw-tooltip-watch-blogs").attr("original-title",g)},startLoading:function(){this.$(".cw-status").addClass("loading")},stopLoading:function(){this.$(".cw-status").removeClass("loading")},setTitle:function(){var g=this.model.get("watchingPage");var k=this.model.get("watchingBlogs");var i=this.model.get("watchingSpace");var f=this.model.get("isBlogPost");function j(){if(i){return{title:"You are watching this space",description:"Receiving email updates for all content in this space.",}}if(g&&f&&k){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post and all new blog posts in this space.",}}if(g&&f){return{title:"You are watching this blog post",description:"Receiving email updates about changes to this blog post.",}}if(g){return{title:"You are watching this page",description:"Receiving email updates about changes to this page.",}}if(f&&k){return{title:"You are watching for new blog posts",description:"Receiving email updates for new blog posts in this space.",}}if(f){return{title:"You are not watching this blog",description:"Start watching to receive email updates about changes to this blog.",}}return{title:"You are not watching this page",description:"Start watching to receive email updates about changes to this page.",}}var h=j();this.$(".cw-title").text(h.title);this.$(".cw-title-description").text(h.description)}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/notification.js' */
define("confluence-watch-button/watch-notification",["jquery","aui/flag"],function(b,a){return function(e){var c=document.getElementById("watch-notification");if(c!=null){c.close()}var d=a({type:"success",body:e,close:"auto"});d.setAttribute("id","watch-notification")}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'js/watch.js' */
require(["jquery","underscore","ajs","confluence-watch-button/watch-model","confluence-watch-button/watch-view","confluence-watch-button/watch-notification"],function(b,i,h,f,d,g){h.toInit(function(){var j=b("#watch-content-button");if(!j.length){return}j.click(function(l){l.preventDefault()});var k=h.Meta.get("page-id");b.getJSON(h.contextPath()+"/rest/watch-button/1.0/watchState/"+k,function(l){i.extend(l,{pageId:k,spaceKey:h.Meta.get("space-key"),spaceName:h.Meta.get("space-name")});a(j,l);j.addClass("watch-state-initialised")})});function a(j,n){e(j,n);var m=new f(n);var l=new d({model:m});h.InlineDialog(j,"confluence-watch",function(p,o,q){l.setElement(p);l.render();q()},{width:325,offsetX:-180,cacheContent:false,hideDelay:null,hideCallback:function(){b(".tipsy").hide()}});m.on("change:watchingPage change:watchingBlogs change:watchingSpace",function(o){e(j,o.toJSON())});m.on("change:watchingPage",function(o,q){var p=q?"watch-page":"unwatch-page";h.trigger("analytics",{name:p})});m.on("change:watchingBlogs",function(o,q){var p=q?"watch-blogs":"unwatch-blogs";h.trigger("analytics",{name:p})});m.on("change:watchingSpace",function(o,q){var p=q?"watch-space":"unwatch-space";h.trigger("analytics",{name:p})});c(m);var k=false;b(document).on("keyup",function(){k=false});window.CW_watchPage=function(){if(k){return}k=true;var q=m.get("watchingSpace");var p=m.get("watchingPage");if(q){b("body, #splitter-content").animate({scrollTop:0},300,function(){j.click();setTimeout(function(){b(".cw-tooltip-watch-page").tipsy("show")},50)})}else{var r=!p;m.saveWatchPage(r);var o=r?"You started watching this page.":"You stopped watching this page.";g(o)}}}function e(k,q){var m=q.watchingPage;var j=q.isBlogPost&&q.watchingBlogs;var o=q.watchingSpace;if(m||j||o){var l=k.find(".aui-icon").removeClass("aui-iconfont-unwatch").addClass("aui-iconfont-watch");var n=h.format("{0}W{1}atching","<u>","</u>");k.prop("title","Stop watching (w)").children("span").empty().append(l).append(" "+n)}else{var l=k.find(".aui-icon").removeClass("aui-iconfont-watch").addClass("aui-iconfont-unwatch");var p=h.format("{0}W{1}atch","<u>","</u>");k.prop("title","Watch (w)").children("span").empty().append(l).append(" "+p)}}function c(j){j.on("change:watchingPage",function(k,m){var l=m?"watchpage.pageoperation":"unwatchpage.pageoperation";h.trigger(l)})}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.watch-button:watch-resources', location = 'templates/watch.soy' */
// This file was automatically generated from watch.soy.
// Please don't edit this file by hand.

/**
 * @fileoverview Templates in namespace Confluence.Watch.Templates.
 */

if (typeof Confluence == 'undefined') { var Confluence = {}; }
if (typeof Confluence.Watch == 'undefined') { Confluence.Watch = {}; }
if (typeof Confluence.Watch.Templates == 'undefined') { Confluence.Watch.Templates = {}; }


Confluence.Watch.Templates.dialogBody = function(opt_data, opt_ignored) {
  return '<div class="cw-status"><h2 class="cw-title"></h2><p class="cw-title-description"></p></div><form class="aui cw-dialog"><div class="cw-tooltip cw-tooltip-watch-page"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-page" ' + ((opt_data.watchingPage) ? 'checked' : '') + '><label for="cw-watch-page">' + ((opt_data.isBlogPost) ? soy.$$escapeHtml('Watch blog post') : soy.$$escapeHtml('Watch page')) + '</label></div></div>' + ((opt_data.isBlogPost) ? '<div class="cw-tooltip cw-tooltip-watch-blogs"><div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-blogs" ' + ((opt_data.watchingBlogs) ? 'checked' : '') + '><label for="cw-watch-blogs">' + soy.$$escapeHtml('Watch for new blog posts in this space') + '</label></div></div>' : '') + '<div class="checkbox"><input class="checkbox" type="checkbox" id="cw-watch-space" ' + ((opt_data.watchingSpace) ? 'checked' : '') + '><label for="cw-watch-space">' + soy.$$escapeHtml('Watch all content in this space') + '</label></div></form>' + ((opt_data.isAdmin) ? '<div class="cw-manage-watchers-wrapper"><button class="aui-button aui-button-link cw-manage-watchers">' + soy.$$escapeHtml('Manage Watchers') + '</button></div>' : '');
};
if (goog.DEBUG) {
  Confluence.Watch.Templates.dialogBody.soyTemplateName = 'Confluence.Watch.Templates.dialogBody';
}

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.editor.confluence-source-editor:atlassian-source-editor-view-storage-javascript', location = 'jscripts/source-editor/view-source.js' */
/*
 * Copyright © 2012 - 2013 Atlassian Corporation Pty Ltd.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

require([
    'ajs',
    'jquery'
], function (
    AJS,
    $
) {
    AJS.toInit(function () {
        if ($('#action-view-storage-link').length) {
            // "View Storage Format" link - remove the one we added via a web item
            $('#action-source-editor-view-storage-link').closest('li').hide();
        }
    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.advanced:blog-post-resources', location = 'com/atlassian/confluence/plugins/macros/advanced/blog-posts.js' */
jQuery(function(a){a(".macro-blank-experience .create-post").bind("click",function(){var b=AJS.Meta.get("base-url")+"/pages/createblogpost.action?spaceKey="+AJS.Meta.get("space-key");window.location=b})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.macros.multimedia:flash-autosize', location = 'javascript/flash-autosize.js' */
AJS.toInit(function(b){function a(e,d){var c;if(d>=20){AJS.log("unable to auto size flash - took too long to load");return}c=b([]);e.each(function(){var g=b(this);var i;var f;if(this.GetVariable){if(!g.attr("height")){i=this.GetVariable("height");if(i){g.height(i)}else{c=c.add(g);return}}if(!g.attr("width")){f=this.GetVariable("width");if(f){g.width(f)}else{c=c.add(g);return}}}});if(c.length){setTimeout(function(){a(c,d+1)},100)}}a(b('embed[type="application/x-shockwave-flash"]'),0);b(window).bind("render-content-loaded",function(d,c){a(b('embed[type="application/x-shockwave-flash"]',c),0)})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-source:view-source-menu-resources', location = 'com/atlassian/confluence/plugins/viewsource/js/viewsource.js' */
define("confluence-view-source/viewsource",["jquery","window"],function(a,b){return function(){a("#action-view-source-link").click(function(a){b.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");a.preventDefault();return!1})}});require("confluence/module-exporter").safeRequire("confluence-view-source/viewsource",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.k15t.scroll.scroll-epub:spark-web-resource', location = 'com/k15t/spark/spark-dist.js' */
!function(e){var n={};function t(i){if(n[i])return n[i].exports;var r=n[i]={i:i,l:!1,exports:{}};return e[i].call(r.exports,r,r.exports,t),r.l=!0,r.exports}t.m=e,t.c=n,t.i=function(e){return e},t.d=function(e,n,i){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:i})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)},t.p="",t(t.s=4)}([function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(e){return e&&e.__esModule?e:{default:e}}(t(5));n.default={__version:"2.2.0",appLoader:i.default.appLoader,iframeAppLoader:i.default.iframeAppLoader}},function(e,n,t){"use strict";e.exports=function(e){var n=[];return n.toString=function(){return this.map(function(n){var t=function(e,n){var t=e[1]||"",i=e[3];if(!i)return t;if(n&&"function"==typeof btoa){var r=function(e){return"/*# sourceMappingURL=data:application/json;charset=utf-8;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(e))))+" */"}(i),o=i.sources.map(function(e){return"/*# sourceURL="+i.sourceRoot+e+" */"});return[t].concat(o).concat([r]).join("\n")}return[t].join("\n")}(n,e);return n[2]?"@media "+n[2]+"{"+t+"}":t}).join("")},n.i=function(e,t){"string"==typeof e&&(e=[[null,e,""]]);for(var i={},r=0;r<this.length;r++){var o=this[r][0];"number"==typeof o&&(i[o]=!0)}for(r=0;r<e.length;r++){var a=e[r];"number"==typeof a[0]&&i[a[0]]||(t&&!a[2]?a[2]=t:t&&(a[2]="("+a[2]+") and ("+t+")"),n.push(a))}},n}},function(e,n,t){"use strict";var i,r,o,a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e};!function(t){if("undefined"!=typeof window){var s=0,l=!1,c=!1,u="message".length,d="[iFrameSizer]",f=d.length,p=null,m=window.requestAnimationFrame,g={max:1,scroll:1,bodyScroll:1,documentElementScroll:1},h={},v=null,b={autoResize:!0,bodyBackground:null,bodyMargin:null,bodyMarginV1:8,bodyPadding:null,checkOrigin:!0,inPageLinks:!1,enablePublicMethods:!0,heightCalculationMethod:"bodyOffset",id:"iFrameResizer",interval:32,log:!1,maxHeight:1/0,maxWidth:1/0,minHeight:0,minWidth:0,resizeFrom:"parent",scrolling:!1,sizeHeight:!0,sizeWidth:!1,warningTimeout:5e3,tolerance:0,widthCalculationMethod:"scroll",closedCallback:function(){},initCallback:function(){},messageCallback:function(){I("MessageCallback function not defined")},resizedCallback:function(){},scrollCallback:function(){return!0}};0,r=[],(o="function"==typeof(i=H)?i.apply(n,r):i)===t||(e.exports=o)}function w(e,n,t){"addEventListener"in window?e.addEventListener(n,t,!1):"attachEvent"in window&&e.attachEvent("on"+n,t)}function y(e,n,t){"removeEventListener"in window?e.removeEventListener(n,t,!1):"detachEvent"in window&&e.detachEvent("on"+n,t)}function x(e){return d+"["+function(e){var n="Host page: "+e;return window.top!==window.self&&(n=window.parentIFrame&&window.parentIFrame.getId?window.parentIFrame.getId()+": "+e:"Nested host page: "+e),n}(e)+"]"}function k(e){return h[e]?h[e].log:l}function C(e,n){O("log",e,n,k(e))}function E(e,n){O("info",e,n,k(e))}function I(e,n){O("warn",e,n,!0)}function O(e,n,t,i){!0===i&&"object"===a(window.console)&&console[e](x(n),t)}function S(e){function n(){t("Height"),t("Width"),D(function(){T(m),F(g)},m,"init")}function t(e){var n=Number(h[g]["max"+e]),t=Number(h[g]["min"+e]),i=e.toLowerCase(),r=Number(m[i]);C(g,"Checking "+i+" is in range "+t+"-"+n),r<t&&(r=t,C(g,"Set "+i+" to min value")),r>n&&(r=n,C(g,"Set "+i+" to max value")),m[i]=""+r}function i(e){return c.substr(c.indexOf(":")+u+e)}function r(e,n){j(function(){L("Send Page Info","pageInfo:"+function(){var e=document.body.getBoundingClientRect(),n=m.iframe.getBoundingClientRect();return JSON.stringify({iframeHeight:n.height,iframeWidth:n.width,clientHeight:Math.max(document.documentElement.clientHeight,window.innerHeight||0),clientWidth:Math.max(document.documentElement.clientWidth,window.innerWidth||0),offsetTop:parseInt(n.top-e.top,10),offsetLeft:parseInt(n.left-e.left,10),scrollTop:window.pageYOffset,scrollLeft:window.pageXOffset})}(),e,n)},32)}function o(e){var n=e.getBoundingClientRect();return A(g),{x:Math.floor(Number(n.left)+Number(p.x)),y:Math.floor(Number(n.top)+Number(p.y))}}function a(e){var n=e?o(m.iframe):{x:0,y:0},t={x:Number(m.width)+n.x,y:Number(m.height)+n.y};C(g,"Reposition requested from iFrame (offset x:"+n.x+" y:"+n.y+")"),window.top!==window.self?window.parentIFrame?window.parentIFrame["scrollTo"+(e?"Offset":"")](t.x,t.y):I(g,"Unable to scroll to requested position, window.parentIFrame not found"):(p=t,s(),C(g,"--"))}function s(){!1!==l("scrollCallback",p)?F(g):N()}function l(e,n){return M(g,e,n)}var c=e.data,m={},g=null;"[iFrameResizerChild]Ready"===c?function(){for(var e in h)L("iFrame requested init",P(e),document.getElementById(e),e)}():d===(""+c).substr(0,f)&&c.substr(f).split(":")[0]in h?(m=function(){var e=c.substr(f).split(":");return{iframe:h[e[0]].iframe,id:e[0],height:e[1],width:e[2],type:e[3]}}(),g=m.id,clearTimeout(h[g].msgTimeout),!function(){var e=m.type in{true:1,false:1,undefined:1};return e&&C(g,"Ignoring init message from meta parent page"),e}()&&function(e){var n=!0;return h[e]||(n=!1,I(m.type+" No settings for "+e+". Message was: "+c)),n}(g)&&(C(g,"Received: "+c),function(){var e=!0;return null===m.iframe&&(I(g,"IFrame ("+m.id+") not found"),e=!1),e}()&&function(){var n=e.origin,t=h[g].checkOrigin;if(t&&""+n!="null"&&!(t.constructor===Array?function(){var e=0,i=!1;for(C(g,"Checking connection is from allowed list of origins: "+t);e<t.length;e++)if(t[e]===n){i=!0;break}return i}():function(){var e=h[g].remoteHost;return C(g,"Checking connection is from: "+e),n===e}()))throw new Error("Unexpected message received from: "+n+" for "+m.iframe.id+". Message was: "+e.data+". This error can be disabled by setting the checkOrigin: false option or by providing of array of trusted domains.");return!0}()&&function(){switch(h[g].firstRun&&(h[g].firstRun=!1),m.type){case"close":R(m.iframe);break;case"message":!function(e){C(g,"MessageCallback passed: {iframe: "+m.iframe.id+", message: "+e+"}"),l("messageCallback",{iframe:m.iframe,message:JSON.parse(e)}),C(g,"--")}(i(6));break;case"scrollTo":a(!1);break;case"scrollToOffset":a(!0);break;case"pageInfo":r(h[g].iframe,g),function(){function e(e,i){function o(){h[t]?r(h[t].iframe,t):n()}["scroll","resize"].forEach(function(n){C(t,e+n+" listener for sendPageInfo"),i(window,n,o)})}function n(){e("Remove ",y)}var t=g;e("Add ",w),h[t].stopPageInfo=n}();break;case"pageInfoStop":h[g]&&h[g].stopPageInfo&&(h[g].stopPageInfo(),delete h[g].stopPageInfo);break;case"inPageLink":!function(e){var n=e.split("#")[1]||"",t=decodeURIComponent(n),i=document.getElementById(t)||document.getElementsByName(t)[0];i?function(){var e=o(i);C(g,"Moving to in page link (#"+n+") at x: "+e.x+" y: "+e.y),p={x:e.x,y:e.y},s(),C(g,"--")}():window.top!==window.self?window.parentIFrame?window.parentIFrame.moveToAnchor(n):C(g,"In page link #"+n+" not found and window.parentIFrame not found"):C(g,"In page link #"+n+" not found")}(i(9));break;case"reset":z(m);break;case"init":n(),l("initCallback",m.iframe),l("resizedCallback",m);break;default:n(),l("resizedCallback",m)}}())):E(g,"Ignored: "+c)}function M(e,n,t){var i=null,r=null;if(h[e]){if("function"!=typeof(i=h[e][n]))throw new TypeError(n+" on iFrame["+e+"] is not a function");r=i(t)}return r}function R(e){var n=e.id;C(n,"Removing iFrame: "+n),e.parentNode&&e.parentNode.removeChild(e),M(n,"closedCallback",n),C(n,"--"),delete h[n]}function A(e){null===p&&C(e,"Get page position: "+(p={x:window.pageXOffset!==t?window.pageXOffset:document.documentElement.scrollLeft,y:window.pageYOffset!==t?window.pageYOffset:document.documentElement.scrollTop}).x+","+p.y)}function F(e){null!==p&&(window.scrollTo(p.x,p.y),C(e,"Set page position: "+p.x+","+p.y),N())}function N(){p=null}function z(e){C(e.id,"Size reset requested by "+("init"===e.type?"host page":"iFrame")),A(e.id),D(function(){T(e),L("reset","reset",e.iframe,e.id)},e,"reset")}function T(e){function n(n){c||"0"!==e[n]||(c=!0,C(i,"Hidden iFrame detected, creating visibility listener"),function(){function e(){function e(e){function n(n){return"0px"===h[e].iframe.style[n]}(function(e){return null!==e.offsetParent})(h[e].iframe)&&(n("height")||n("width"))&&L("Visibility change","resize",h[e].iframe,e)}for(var n in h)e(n)}function n(n){C("window","Mutation observed: "+n[0].target+" "+n[0].type),j(e,16)}var t=window.MutationObserver||window.WebKitMutationObserver;t&&function(){var e=document.querySelector("body");new t(n).observe(e,{attributes:!0,attributeOldValue:!1,characterData:!0,characterDataOldValue:!1,childList:!0,subtree:!0})}()}())}function t(t){!function(n){e.iframe.style[n]=e[n]+"px",C(e.id,"IFrame ("+i+") "+n+" set to "+e[n]+"px")}(t),n(t)}var i=e.iframe.id;h[i]&&(h[i].sizeHeight&&t("height"),h[i].sizeWidth&&t("width"))}function D(e,n,t){t!==n.type&&m?(C(n.id,"Requesting animation frame"),m(e)):e()}function L(e,n,t,i,r){i=i||t.id,h[i]&&(t&&"contentWindow"in t&&null!==t.contentWindow?function(){var r=h[i].targetOrigin;C(i,"["+e+"] Sending msg to iframe["+i+"] ("+n+") targetOrigin: "+r),t.contentWindow.postMessage(d+n,r)}():I(i,"["+e+"] IFrame("+i+") not found"),r&&(h[i].msgTimeout=setTimeout(function(){I(i,"No response from iFrame. Check iFrameResizer.contentWindow.js has been loaded in iFrame")},h[i].warningTimeout)))}function P(e){return e+":"+h[e].bodyMarginV1+":"+h[e].sizeWidth+":"+h[e].log+":"+h[e].interval+":"+h[e].enablePublicMethods+":"+h[e].autoResize+":"+h[e].bodyMargin+":"+h[e].heightCalculationMethod+":"+h[e].bodyBackground+":"+h[e].bodyPadding+":"+h[e].tolerance+":"+h[e].inPageLinks+":"+h[e].resizeFrom+":"+h[e].widthCalculationMethod}function B(e,n){var i=function(t){return t,""===t&&(e.id=t=function(){var e=n&&n.id||b.id+s++;return null!==document.getElementById(e)&&(e+=s++),e}(),l=(n||{}).log,t,C(t,"Added missing iframe ID: "+t+" ("+e.src+")")),t}(e.id);i in h&&"iFrameResizer"in e?I(i,"Ignored iFrame, already setup."):(!function(n){n=n||{},h[i]={firstRun:!0,iframe:e,remoteHost:e.src.split("/").slice(0,3).join("/")},function(e){if("object"!==(void 0===e?"undefined":a(e)))throw new TypeError("Options is not an object")}(n),function(e){for(var n in b)b.hasOwnProperty(n)&&(h[i][n]=e.hasOwnProperty(n)?e[n]:b[n])}(n),h[i].targetOrigin=!0===h[i].checkOrigin?function(e){return""===e||"file://"===e?"*":e}(h[i].remoteHost):"*"}(n),function(){switch(C(i,"IFrame scrolling "+(h[i].scrolling?"enabled":"disabled")+" for "+i),e.style.overflow=!1===h[i].scrolling?"hidden":"auto",h[i].scrolling){case!0:e.scrolling="yes";break;case!1:e.scrolling="no";break;default:e.scrolling=h[i].scrolling}}(),function(){function n(n){1/0!==h[i][n]&&0!==h[i][n]&&(e.style[n]=h[i][n]+"px",C(i,"Set "+n+" = "+h[i][n]+"px"))}function t(e){if(h[i]["min"+e]>h[i]["max"+e])throw new Error("Value for min"+e+" can not be greater than max"+e)}t("Height"),t("Width"),n("maxHeight"),n("minHeight"),n("maxWidth"),n("minWidth")}(),"number"!=typeof h[i].bodyMargin&&"0"!==h[i].bodyMargin||(h[i].bodyMarginV1=h[i].bodyMargin,h[i].bodyMargin=h[i].bodyMargin+"px"),function(n){w(e,"load",function(){L("iFrame.onload",n,e,t,!0),function(){var n=h[i].firstRun,t=h[i].heightCalculationMethod in g;!n&&t&&z({iframe:e,height:0,width:0,type:"init"})}()}),L("init",n,e,t,!0)}(P(i)),Function.prototype.bind&&(h[i].iframe.iFrameResizer={close:R.bind(null,h[i].iframe),resize:L.bind(null,"Window resize","resize",h[i].iframe),moveToAnchor:function(e){L("Move to anchor","moveToAnchor:"+e,h[i].iframe,i)},sendMessage:function(e){L("Send Message","message:"+(e=JSON.stringify(e)),h[i].iframe,i)}}))}function j(e,n){null===v&&(v=setTimeout(function(){v=null,e()},n))}function U(e){C("window","Trigger event: "+e),j(function(){V("Window "+e,"resize")},16)}function W(){"hidden"!==document.visibilityState&&(C("document","Trigger event: Visiblity change"),j(function(){V("Tab Visable","resize")},16))}function V(e,n){function t(e){return"parent"===h[e].resizeFrom&&h[e].autoResize&&!h[e].firstRun}for(var i in h)t(i)&&L(e,n,document.getElementById(i),i)}function H(){function e(e,t){t&&(!function(){if(!t.tagName)throw new TypeError("Object is not a valid DOM element");if("IFRAME"!==t.tagName.toUpperCase())throw new TypeError("Expected <IFRAME> tag, found <"+t.tagName+">")}(),B(t,e),n.push(t))}var n;return function(){var e,n=["moz","webkit","o","ms"];for(e=0;e<n.length&&!m;e+=1)m=window[n[e]+"RequestAnimationFrame"];m||C("setup","RequestAnimationFrame not supported")}(),w(window,"message",S),w(window,"resize",function(){U("resize")}),w(document,"visibilitychange",W),w(document,"-webkit-visibilitychange",W),w(window,"focusin",function(){U("focus")}),w(window,"focus",function(){U("focus")}),function(i,r){switch(n=[],function(e){e&&e.enablePublicMethods&&I("enablePublicMethods option has been removed, public methods are now always available in the iFrame")}(i),void 0===r?"undefined":a(r)){case"undefined":case"string":Array.prototype.forEach.call(document.querySelectorAll(r||"iframe"),e.bind(t,i));break;case"object":e(i,r);break;default:throw new TypeError("Unexpected data type ("+(void 0===r?"undefined":a(r))+")")}return n}}}()},function(e,n,t){"use strict";e.exports=function(e){var n="undefined"!=typeof window&&window.location;if(!n)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var t=n.protocol+"//"+n.host,i=t+n.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,function(e,n){var r,o=n.trim().replace(/^"(.*)"$/,function(e,n){return n}).replace(/^'(.*)'$/,function(e,n){return n});return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/)/i.test(o)?e:(r=0===o.indexOf("//")?o:0===o.indexOf("/")?t+o:i+o.replace(/^\.\//,""),"url("+JSON.stringify(r)+")")})}},function(e,n,t){"use strict";var i=function(e){return e&&e.__esModule?e:{default:e}}(t(0));function r(){throw new Error("getSpark() has to be called immediately after including spark-dist.js!")}function o(){return window.getSpark=r,i.default}window.getSpark=o,setTimeout(function(){window.getSpark===o&&(window.getSpark=r)},0)},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=l(t(2)),r=l(t(11)),o=l(t(10)),a=l(t(9)),s=l(t(6));function l(e){return e&&e.__esModule?e:{default:e}}var c=function(e){var n=e.split("?"),t=n[0];return t=/\/$/.test(t)||/\.html$/.test(t)?t:t+"/",o.default.contextPath()+t+(n.length>1?"?"+n[1]:"")},u=function(e,n){var t=c(e),i=function(e){if(!e)return"";var n=e;return 0!==n.indexOf("?")&&0!==n.indexOf("&")||(n=n.substr(1)),"?"+n}(n);return location.protocol+"//"+location.host+t+i};var d=function(e){var n=function(n,t){var i=n.get()[0],o={};i.SPARK=o,o.contextData=t.contextData,o.setContainerWidth=function(e){n.parent().width(e)},t.customContext&&(o.customContext=t.customContext);var a={autoResize:!0,heightCalculationMethod:"max"};return t.iframeResizerSettings&&(a=r.default.extend(a,t.iframeResizerSettings)),e(a,i),{iframeDomEl:i,iframeSparkContext:o}};return{openFullscreenIframeDialog:function(e,t,i){if(i=i||{},!e)throw new Error("Parameter missing - 'appName'");if(!t)throw new Error("Parameter missing - 'appPath'");var o=(0,r.default)("body");o.addClass("spark-no-scroll");var l=u(t,i.queryString),c=e+"-spark-app-container",d=r.default.extend({addChrome:!1},i);(0,r.default)("#"+c).remove();var f=(0,r.default)(s.default.appFullscreenContainerIframe({id:c,src:l,createOptions:d,className:a.default.className})),p=function(e){o.removeClass("spark-no-scroll"),function(e,n,t){var i=e.find("iframe").get()[0];i.iFrameResizer&&i.iFrameResizer.close(),e.remove(),n&&n(t)}(f,d.onClose,e)},m=null;d.addChrome&&(m={cancelBtn:f.find("#"+c+"-chrome-cancel").get()[0],confirmBtn:f.find("#"+c+"-chrome-submit").get()[0]},d.addChromeCloseHandlers&&(m.cancelBtn.addEventListener("click",p),m.confirmBtn.addEventListener("click",p)));f.appendTo(o);var g=f.find("iframe");function h(){var e=window.innerHeight;return d.addChrome&&(e-=51),e}var v={autoResize:!0,heightCalculationMethod:"max",maxHeight:h(),scrolling:"auto",resizedCallback:function(e){e.iframe.style.maxHeight=h()+"px"}},b=r.default.extend(!0,{iframeResizerSettings:v},i),w=n(g,b),y=w.iframeDomEl,x=w.iframeSparkContext;return x.dialogControls={closeDialog:p,dialogChrome:m},{iframeDomEl:y,iframeSparkContext:x,appContainerId:c}},openInlineIframeDialog:function(e,t,i){if(!e)throw new Error("Parameter missing - 'appName'");if(!t)throw new Error("Parameter missing - 'appPath'");var o=(0,r.default)("body"),l=u(t,i.queryString),c=e+"-spark-app-container",d=r.default.extend({width:"540px",triggerText:"Inline trigger",alignment:"bottom left"},i);(0,r.default)("#"+c).remove();var f=s.default.inlineDialogTrigger({targetId:c,text:d.triggerText}),p=(0,r.default)(s.default.inlineDialogAppContainer({id:c,createOptions:d,src:l,className:a.default.className}));(0,r.default)(o).append(p);var m=p.find("iframe"),g=n(m,d);return{triggerEl:f,iframeDomEl:g.iframeDomEl,iframeSparkContext:g.iframeSparkContext,appContainerId:c}},createAppIframe:function(e,t,i){if(!e)throw new Error("Parameter missing - 'appId'");if(!t)throw new Error("Parameter missing - 'appPath'");if(!i)throw new Error("Parameter missing - 'options'");var o=e+"-spark-iframe",l=u(t,i.queryString),c=(0,r.default)(s.default.bootstrappedIframe({id:o,src:l,className:a.default.className}));i.containerEl&&i.containerEl.append(c);var d=n(c,i),f=d.iframeDomEl;return{iframeSparkContext:d.iframeSparkContext,iframeDomEl:f,appContainerId:o}}}};n.default={appLoader:new function(){var e,n={},t={width:"1000px",height:"500px",label:{submit:"Save",close:"Close"}};this.loadAppInDialog=function(n,o,c,u,d){e&&(e.$el.remove(),e=void 0),u=r.default.extend(t,u);var f=o+"-spark-dialog-app-container",p=l(f,s.default.appBootstrapContainerDialog2WithiFrame({id:f,title:n,src:location.protocol+"//"+location.host+c,createOptions:u,className:a.default.className}),u.width,u.height),m=(0,r.default)("#closeDialogButton"+f,p.$el),g=(0,r.default)("#submitDialogButton"+f,p.$el),h=(0,r.default)("#"+f+"-iframe");m.click(function(e){p.close()}),p.close=function(){p.hide(),h.remove()},p.getButton=function(e){return"submit"===e?g:m},e=p,(0,i.default)([{log:!0,autoResize:!0}],h[0]),p.show(),d&&d(p,h)},this.loadApp=function(e,n,o,l){var u=c(o),d=n+"-spark-app-container";(0,r.default)("#"+d).length>0&&(0,r.default)("#"+d).remove(),(0,r.default)(e).append(s.default.appBootstrapContaineriFrame({id:d,src:location.protocol+"//"+location.host+u,createOptions:r.default.extend(t,l),className:a.default.className})),(0,i.default)([{autoResize:!0,heightCalculationMethod:"max"}],(0,r.default)(e).find("iframe")[0])},this.getApp=function(e){return n[e]},this.getAppDialog=function(){return e};var l=function(e,n,t,i,a){var s;return o.default.dialog2?((0,r.default)("body").append(n),(s=o.default.dialog2("#"+e)).$appEl=s.$el,s.$contentEl=(0,r.default)(".spark-app-content",s.$appEl)):((s=new o.default.Dialog({width:i,height:a,id:e})).$appEl=s.popup.element,s.$appEl.html(n),s.$contentEl=(0,r.default)(".spark-app-content",s.$appEl),s.$contentEl.height(s.$appEl.height()-105)),s}},iframeAppLoader:d(i.default),initIframeAppLoader:d}},function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var i=function(e){var n=e.id,t=e.src,i=e.createOptions;return'\n        <iframe id="'+n+'-iframe" class="'+e.className+' spark-app-iframe" src="'+t+'" width="'+i.width+'"\n            height="100%" scrolling="no">\n        </iframe>\n    '};n.default={appBootstrapContaineriFrame:i,appBootstrapContainerDialog2WithiFrame:function(e){var n=e.id,t=e.title,r=e.src,o=e.createOptions,a=e.className;return'\n        <section role="dialog" id="'+n+'" class="'+a+' aui-layer aui-dialog2" style="width:'+o.width+';"\n                aria-hidden="true">\n            <header class="aui-dialog2-header">\n                <h2 class="aui-dialog2-header-main">'+t+'</h2>\n            </header>\n            <div class="aui-dialog2-content spark-app-content"\n                    style="padding: 0; width:'+o.width+"; height: "+o.height+'; overflow: hidden;">\n                '+i({id:n,src:r,createOptions:o,className:a})+'\n            </div>\n            <footer class="aui-dialog2-footer">\n                <div class="aui-dialog2-footer-actions">\n                    '+(o.showSubmitButton?'<button id="submitDialogButton'+n+'" class="aui-button aui-button-primary">\n                            '+o.label.submit+"\n                        </button>":"")+'\n                    <button id="closeDialogButton'+n+'" class="aui-button aui-button-link">'+o.label.close+"</button>\n                </div>\n            </footer>\n        </section>\n    "},errorDialog2:function(e){var n=e.id,t=e.title;return'\n        <section role="dialog" id="'+n+'" class="'+e.className+' aui-layer aui-dialog2 aui-dialog2-medium" aria-hidden="true">\n            <header class="aui-dialog2-header">\n                <h2 class="aui-dialog2-header-main">'+t+'</h2>\n            </header>\n            <div class="aui-dialog2-content spark-app-content"></div>\n            <footer class="aui-dialog2-footer">\n                <div class="aui-dialog2-footer-actions">\n                    <button id="closeErrorDialogButton" class="aui-button aui-button-link">Close</button>\n                </div>\n            </footer>\n        </section>\n    '},errorDialog:function(e){var n=e.title;return'\n        <div class="dialog-components '+e.className+'">\n            <h2 class="dialog-title">'+n+'</h2>\n            <div class="dialog-page-body">\n                <div class="dialog-panel-body spark-app-content">\n            </div>\n            </div>\n                <div class="dialog-button-panel">\n                <a href="#" class="button-panel-link button-panel-cancel-link" id="closeErrorDialogButton">Close</a>\n            </div>\n        </div>\n    '},appFullscreenContainerIframe:function(e){var n=e.id,t=e.src,i=e.createOptions;return'\n        <div id="'+n+'" \n            class="spark-fullscreen-wrapper '+e.className+" "+(i.addChrome?"spark-fullscreen-dialog":"")+'"\n        >\n            '+(i.addChrome?'<div class="spark-fullscreen-chrome">\n                    <div class="spark-fullscreen-chrome-btnwrap">\n                        <button id="'+n+'-chrome-submit" class="aui-button aui-icon aui-icon-small aui-iconfont-success">\n                            "OK"\n                        </button>\n                        <button id="'+n+'-chrome-cancel" class="aui-button aui-icon aui-icon-small aui-iconfont-close-dialog">\n                            "Cancel"\n                        </button>\n                    </div>\n                </div>\n            ':"")+'\n            <div class="spark-fullscreen-scroll-wrapper '+(i.addChrome?"spark-fullscreen-haschrome":"")+'">\n                <iframe id="'+n+'-iframe" class="spark-fullscreen-iframe" src="'+t+'" scrolling="no">\n                </iframe>\n            </div>\n        </div>\n    '},inlineDialogTrigger:function(e){return'\n        <a data-aui-trigger aria-controls="'+e.targetId+'" style="cursor: pointer; color: inherit;">'+e.text+"</a>\n    "},inlineDialogAppContainer:function(e){var n=e.id,t=e.src,i=e.createOptions,r=e.className;return'\n        <aui-inline-dialog id="'+n+'" class="spark-inline-wrapper '+r+'"\n            alignment="'+i.alignment+'">\n                <div style="width:'+i.width+'" id="'+n+'-iframe-container">\n                    <iframe id="'+n+'-iframe" class="'+r+' spark-iframe" src="'+t+'" scrolling="no">\n                    </iframe>\n                </div>\n        </aui-inline-dialog>\n    '},bootstrappedIframe:function(e){var n=e.id,t=e.src;return'\n        <iframe id="'+n+'" class="'+e.className+' spark-iframe" src="'+t+'" scrolling="no">\n        </iframe>\n    '}}},function(e,n,t){(n=e.exports=t(1)(!1)).push([e.i,"/* Applied to body so that the parent document does not scroll while the full screen IFrame dialog is open. */\n.spark-no-scroll {\n  overflow: hidden; }\n\n.YvpxiV5x7vy1i-QG5gfAe {\n  /*\n     * Styles for iframe (full screen) dialog emulating Atlassian Connect\n     */\n  /*\n     * Styling to imitate dialog chrome styling from Atlassian Connect (at least\n     * one specific version).\n     * If an add-on would like to override these styles, it could be done by\n     * prefixing with the predictable 'app-id' that will be added as an id\n     * to the main dialog wrapper div.\n     */ }\n  .YvpxiV5x7vy1i-QG5gfAe.spark-app-iframe {\n    border: none; }\n  .YvpxiV5x7vy1i-QG5gfAe.spark-iframe {\n    width: 100%;\n    min-height: 100%;\n    border: none;\n    padding: 0;\n    margin: 0;\n    overflow: hidden; }\n  .YvpxiV5x7vy1i-QG5gfAe.spark-fullscreen-wrapper {\n    position: fixed;\n    z-index: 9000;\n    top: 0;\n    left: 0;\n    right: 0;\n    bottom: 0;\n    background-color: rgba(0, 0, 0, 0.5);\n    margin: 0;\n    padding: 0;\n    overflow: hidden;\n    /*\n         * Change background on fullscreen dialogs to grey.\n         * There are two types of fullscreen dialogs in Atlassian Connect:\n         * Dialogs with width/height set to 100% have a half-transparent black background,\n         * dialogs with size set to \"fullscreen\" have a grey background.\n         */ }\n    .YvpxiV5x7vy1i-QG5gfAe.spark-fullscreen-wrapper.spark-fullscreen-dialog {\n      background-color: #f5f5f5; }\n  .YvpxiV5x7vy1i-QG5gfAe .spark-fullscreen-scroll-wrapper {\n    position: static;\n    width: 100%;\n    height: 100%;\n    overflow: auto;\n    margin: 0;\n    padding: 0;\n    line-height: 0;\n    font-size: 0; }\n  .YvpxiV5x7vy1i-QG5gfAe .spark-fullscreen-iframe {\n    width: 100%;\n    min-height: 100%;\n    border: none;\n    padding: 0;\n    margin: 0;\n    overflow: hidden; }\n  .YvpxiV5x7vy1i-QG5gfAe .spark-fullscreen-scroll-wrapper.spark-fullscreen-haschrome {\n    height: calc(100% - 51px); }\n  .YvpxiV5x7vy1i-QG5gfAe .spark-fullscreen-chrome {\n    width: 100%;\n    background: black;\n    height: 50px;\n    margin: 0;\n    padding: 0;\n    border: none;\n    border-bottom: 1px solid #cccccc; }\n  .YvpxiV5x7vy1i-QG5gfAe .spark-fullscreen-chrome-btnwrap {\n    float: right;\n    margin: 0;\n    padding: 0;\n    height: 50px; }\n  .YvpxiV5x7vy1i-QG5gfAe .spark-fullscreen-chrome-btnwrap .aui-icon-small::before {\n    margin-left: 16px; }\n  .YvpxiV5x7vy1i-QG5gfAe .spark-fullscreen-chrome-btnwrap .aui-button {\n    height: 50px;\n    width: 50px;\n    border: none;\n    border-left: 1px solid #333;\n    border-radius: 0;\n    float: left;\n    margin-left: 0;\n    background: black;\n    color: white; }\n",""]),n.locals={className:"YvpxiV5x7vy1i-QG5gfAe"}},function(e,n,t){var i={},r=function(e){var n;return function(){return void 0===n&&(n=e.apply(this,arguments)),n}}(function(){return window&&document&&document.all&&!window.atob}),o=function(e){var n={};return function(e){return void 0===n[e]&&(n[e]=function(e){return document.querySelector(e)}.call(this,e)),n[e]}}(),a=null,s=0,l=[],c=t(3);function u(e,n){for(var t=0;t<e.length;t++){var r=e[t],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(h(r.parts[a],n))}else{var s=[];for(a=0;a<r.parts.length;a++)s.push(h(r.parts[a],n));i[r.id]={id:r.id,refs:1,parts:s}}}}function d(e){for(var n=[],t={},i=0;i<e.length;i++){var r=e[i],o=r[0],a={css:r[1],media:r[2],sourceMap:r[3]};t[o]?t[o].parts.push(a):n.push(t[o]={id:o,parts:[a]})}return n}function f(e,n){var t=o(e.insertInto);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var i=l[l.length-1];if("top"===e.insertAt)i?i.nextSibling?t.insertBefore(n,i.nextSibling):t.appendChild(n):t.insertBefore(n,t.firstChild),l.push(n);else{if("bottom"!==e.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");t.appendChild(n)}}function p(e){e.parentNode.removeChild(e);var n=l.indexOf(e);n>=0&&l.splice(n,1)}function m(e){var n=document.createElement("style");return e.attrs.type="text/css",g(n,e.attrs),f(e,n),n}function g(e,n){Object.keys(n).forEach(function(t){e.setAttribute(t,n[t])})}function h(e,n){var t,i,r;if(n.singleton){var o=s++;t=a||(a=m(n)),i=b.bind(null,t,o,!1),r=b.bind(null,t,o,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(t=function(e){var n=document.createElement("link");return e.attrs.type="text/css",e.attrs.rel="stylesheet",g(n,e.attrs),f(e,n),n}(n),i=function(e,n,t){var i=t.css,r=t.sourceMap,o=void 0===n.convertToAbsoluteUrls&&r;(n.convertToAbsoluteUrls||o)&&(i=c(i));r&&(i+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([i],{type:"text/css"}),s=e.href;e.href=URL.createObjectURL(a),s&&URL.revokeObjectURL(s)}.bind(null,t,n),r=function(){p(t),t.href&&URL.revokeObjectURL(t.href)}):(t=m(n),i=function(e,n){var t=n.css,i=n.media;i&&e.setAttribute("media",i);if(e.styleSheet)e.styleSheet.cssText=t;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(t))}}.bind(null,t),r=function(){p(t)});return i(e),function(n){if(n){if(n.css===e.css&&n.media===e.media&&n.sourceMap===e.sourceMap)return;i(e=n)}else r()}}e.exports=function(e,n){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(n=n||{}).attrs="object"==typeof n.attrs?n.attrs:{},void 0===n.singleton&&(n.singleton=r()),void 0===n.insertInto&&(n.insertInto="head"),void 0===n.insertAt&&(n.insertAt="bottom");var t=d(e);return u(t,n),function(e){for(var r=[],o=0;o<t.length;o++){var a=t[o];(s=i[a.id]).refs--,r.push(s)}e&&u(d(e),n);for(o=0;o<r.length;o++){var s;if(0===(s=r[o]).refs){for(var l=0;l<s.parts.length;l++)s.parts[l]();delete i[s.id]}}}};var v=function(){var e=[];return function(n,t){return e[n]=t,e.filter(Boolean).join("\n")}}();function b(e,n,t,i){var r=t?"":i.css;if(e.styleSheet)e.styleSheet.cssText=v(n,r);else{var o=document.createTextNode(r),a=e.childNodes;a[n]&&e.removeChild(a[n]),a.length?e.insertBefore(o,a[n]):e.appendChild(o)}}},function(e,n,t){var i=t(7);"string"==typeof i&&(i=[[e.i,i,""]]);t(8)(i,{});i.locals&&(e.exports=i.locals)},function(e,n){e.exports=AJS},function(e,n){e.exports=AJS.$}]);
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.k15t.scroll.scroll-epub:spark-web-resource', location = '/com/k15t/scroll/epub/ui/app-loaders.js' */
(function(spark) {
    define('scroll-epub-app-loaders', ['ajs'], function(AJS) {
        'use strict';

        var appPath = '/plugins/servlet/scroll-epub/ui/';

        function getUserLanguageTag() {
            var locale = AJS.params.userLocale;
            if (locale) {
                return locale.replace('_', '-');
            }
            return null;
        }

        function createQueryString(rootCmp, moduleType) {
            var contentId = AJS.params.pageId || '';
            var spaceKey = AJS.params.spaceKey || '';
            var locale = getUserLanguageTag();
            return 'root_cmp=' + rootCmp +
                '&spaceKey=' + encodeURIComponent(spaceKey) +
                '&contentId=' + encodeURIComponent(contentId) +
                '&loc=' + locale +
                '&moduleType=' + moduleType;
        }


        return {
            'scroll-epub-exporter-launcher': function(customData, onCloseCallback) {
                AJS.toInit(function() {
                    var query = createQueryString('epub-export-dialog', 'dialog');
                    spark.iframeAppLoader.openFullscreenIframeDialog('k15t-exp-epub-export-dialog-web-item', appPath, {
                        queryString: query,
                        contextData: customData || {},
                        onClose: onCloseCallback
                    });
                });
            },
            'scroll-epub-export-scheme-dialog': function(customData, onCloseCallback) {
                AJS.toInit(function() {
                    var query = createQueryString('epub-export-scheme-dialog', 'dialog');
                    spark.iframeAppLoader.openFullscreenIframeDialog('k15t-exp-epub-export-scheme-dialog-web-item', appPath, {
                        queryString: query,
                        contextData: customData || {},
                        onClose: onCloseCallback
                    });
                });
            }
        };
    });
})(getSpark());

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.k15t.scroll.scroll-epub:export-dialog-resources', location = '/com/k15t/scroll/epub/ui/export-ui-bootstrap.js' */
require(['ajs', 'scroll-epub-app-loaders'], function(AJS, scrollAppLaunchers) {
    AJS.toInit(function() {

        'use strict';

        var $ = AJS.$;
        var exportWebItem = $('#com-k15t-confluence-scroll-epub-launcher, .scroll-epub-launcher');

        function getVariantInformation() {
            var scroll = window.Scroll;
            return scroll &&
                scroll.Versions &&
                scroll.Versions.Context &&
                scroll.Versions.Context.page &&
                scroll.Versions.Context.page.variants;
        }

        function isPageAvailable() {
            var contentAvailable = !jQuery('.sv-content-notavailable').length;
            // information about whether a page is in the current variant is only available since SCM 3.8.0. Default to true otherwise.
            var availableInVariant = true;
            var variantInformation = getVariantInformation();
            if (variantInformation) {
                availableInVariant = variantInformation.isAvailableInCurrentVariant;
            }
            return contentAvailable && availableInVariant;
        }

        // Error dialog that is shown in case the user tries to export a page that is not available.
        var errorDialog = jQuery('' +
            '<section role="dialog" id="k15t-exp-epub-no-export-dialog" class="aui-layer aui-dialog2 aui-dialog2-small aui-dialog2-warning"' +
            '         aria-hidden="true">' +
            '    <header class="aui-dialog2-header">' +
            '        <h2 class="aui-dialog2-header-main">Page Not Available</h2>' +
            '        <a class="aui-dialog2-header-close">' +
            '            <span class="aui-icon aui-icon-small aui-iconfont-close-dialog">Close</span>' +
            '        </a>' +
            '    </header>' +
            '    <div class="aui-dialog2-content">' +
            '        <p>You cannot export this page, because it is not available in the current version, variant, or language.</p>' +
            '    </div>' +
            '    <footer class="aui-dialog2-footer">' +
            '        <div class="aui-dialog2-footer-actions">' +
            '            <button id="k15t-exp-epub-no-export-dialog-close-button" class="aui-button aui-button-link">Close</button>' +
            '        </div>' +
            '        <div class="aui-dialog2-footer-hint">' +
            '           <span style="' +
            '  background: linear-gradient(to right, #1062fb 0, #1062fb 33.3%, #2eb785 33.3%, #2eb785 66.6%, #ffc420 66.6%);' +
            '  height: .5em;' +
            '  width: 2.625em;' +
            '  display: inline-block;' +
            '  position: relative;' +
            '           "></span>' +
            '         </div>' +
            '    </footer>' +
            '</section>'
        );
        errorDialog.find('#k15t-exp-epub-no-export-dialog-close-button').click(function(e) {
            e.preventDefault();
            AJS.dialog2(jQuery(e.target).closest('.aui-dialog2')).hide();
        });
        exportWebItem.append(errorDialog);// Register event handler for the export menu entry.

        exportWebItem.on('click', function(event) {
            event.preventDefault();
            if (isPageAvailable()) {
                var exportSchemeId = null;
                var directExportMode = false;

                var exportSchemeIdAttr = jQuery(event.target)
                    .closest(".scroll-epub-launcher")
                    .attr("data-export-scheme-id");
                if (exportSchemeIdAttr) {
                    exportSchemeId = exportSchemeIdAttr;
                    directExportMode = true;
                }

                scrollAppLaunchers['scroll-epub-exporter-launcher']({
                    exportSchemeId: exportSchemeId,
                    directExportMode: directExportMode
                });
            } else {
                AJS.dialog2('#k15t-exp-epub-no-export-dialog').show();
            }
        });

    });
});

}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-page-hierarchy-plugin:confluence-copy-page-hierarchy-plugin-loader', location = 'js/loader.js' */
/**
 * Async resources loader for copy-page-hierarchy resources.
 */
require([
    'ajs',
    'wrm',
    'confluence/legacy'
], function (AJS, WRM, Confluence) {
    var COPY_CONTEXT = 'confluence-copy-page-hierarchy';
    var DELETE_CONTEXT = 'confluence-delete-page-hierarchy';

    AJS.toInit(function ($) {
        var $toolsCopyLink = $('#action-copy-page-link');
        var $operationsCopyLink = $('#copyPageLink');
        var $toolsDeleteLink = $('#action-remove-content-link');

        _loadResourcesAsync($toolsCopyLink, COPY_CONTEXT);
        _loadResourcesAsync($operationsCopyLink, COPY_CONTEXT);
        _loadResourcesAsync($toolsDeleteLink, DELETE_CONTEXT);
        _checkInProgressDeleteFlow($toolsDeleteLink);
    });

    /**
     * Loads the require resources for either copy or delete
     * @param {jQuery} $button The button that loads the resources
     * @param {string} context The WRM resource context to load
     * @returns {undefined}
     * @private
     */
    function _loadResourcesAsync($button, context) {
        if ($button.length) {
            $button.off('click');
            $button.on('click', function (e) {
                e.preventDefault();
                _loadResources($button, context);
            });
        }
    }

    /**
     * Function handler to run when the delete or copy button is clicked
     * @param {jQuery} $button The button that loads the resources
     * @param {string} context The WRM resource context to load
     * @returns {undefined}
     * @private
     */
    function _loadResources($button, context) {
        var $body = $('body');
        $button.off('click');

        var loadingIndicator = Confluence.PageLoadingIndicator($body);
        loadingIndicator.show();

        AJS.debug('Loading ' + context + ' resources...');
        WRM.require(['wrc!' + context], function () {
            loadingIndicator.hide();
            $button.addClass('confluencePageHierarchy');
            AJS.debug('Loaded ' + context + ' resources.');
        });
    }

    /**
     * Checks to see if there is a flow in progress based on url parameters
     * and loads the resources if the flow is in progress.
     * @param {jQuery} $toolsDeleteLink The Delete button, if present
     * @returns {undefined}
     * @private
     */
    function _checkInProgressDeleteFlow($toolsDeleteLink) {
        var hash = window.location.hash;
        if (hash.indexOf('delete-complete') === 1) {
            _loadResources($toolsDeleteLink, DELETE_CONTEXT);
        }
    }
});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/jirachart.js' */
AJS.toInit(function(){var a=require("confluence/form-state-control");AJS.$(".jira-chart-macro-img").load(function(b){AJS.log("Jira Chart Macro - chart image loaded");a.enableElement(AJS.$(".insert-jira-chart-macro-button",window.parent.document))}).error(function(e){AJS.log("Jira Chart Macro - chart image loaded error");a.disableElement(AJS.$(".insert-jira-chart-macro-button",window.parent.document));var f=AJS.$(e.target);var d=f.parent();var c=d.parent();d.remove();var b="Unable to render Jira chart macro due to an execution error.";AJS.messages.error(c,{body:b})})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.extra.jira:jirachart-resources', location = '/jirachart/twodimensionalchart-showlink.js' */
var TwoDimensionalShowLink=(function(e){var d=function(i){var h=e("#two-dimensional-chart-"+i);var g=h.position();e("<div />",{id:"twodimensional-dark-layout-"+i,"class":"jim-sortable-dark-layout",css:{top:g.top+"px",left:g.left+"px",width:h.width()+"px",height:h.height()+"px"}}).appendTo(h.parent())};var a=function(g){e("#twodimensional-dark-layout-"+g).remove()};var b=function(){var h=e(this).attr("data-chart-id");d(h);var g={pageId:e("#chart-page-id-"+h).val(),wikiMarkup:e("#chart-wiki-"+h).val(),isShowMore:e(this).attr("data-is-show-more")};AJS.$.ajax({type:"POST",dataType:"html",url:Confluence.getContextPath()+"/plugins/servlet/twoDimensionalShowMoreRenderer",data:g,success:function(i){if(e(i).find(".aui-message.error,.aui-message.aui-message-error").length){var j=e(i).find(".message").text();e("#two-dimensional-chart-"+h).find(".show-error").html(j)}else{var k=e(i).find(".show-link-container a").attr("data-chart-id");e("#two-dimensional-chart-"+h).replaceWith(i);c(k)}a(h)},error:function(){e("#two-dimensional-chart-"+h).find(".show-error").html("Unable to render Jira chart macro. Execution has timed out.");a(h)}})};var c=function(g){e("#show-link-"+g).on("click",b)};var f=function(){e(".show-link-container a").each(function(){c(e(this).attr("data-chart-id"))})};return{init:f}})(AJS.$);AJS.$(function(){TwoDimensionalShowLink.init()});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:synchrony-util', location = '/js/synchrony-util.js' */
define("confluence-collaborative-editor-plugin/synchrony-util",["ajs","jquery","underscore","confluence/meta","confluence/legacy"],function(k,g,x,v,p){var t;function b(z){var y=v.get(z);if(y===undefined){y=g('meta[name="ajs-'+z+'"]').attr("content");if(y!==undefined){v.set(z,y)}else{console.error("Missing '"+z+"' metadata value");if(d()){k.trigger("editor.error.message",{messageKey:"collaborative-editor-load-failure",message:k.I18n.getText("editor.collaborative-editing.refresh-editor.error"),close:"manual"})}}}return y}function i(){return"/"+b("synchrony-app-id")+"/confluence-"+p.getContentId()}function s(){return p.getContentId()!=="0"}function a(){return s()}function o(){return b("synchrony-base-url").split(",")}function f(){return(t?t:o()[0])+"/v1"}function r(){return b("use-xhr-fallback")}function q(y,z){return y+"/resources"+z}function l(z,y){return x.last(z.filter(function(A){return A.meta&&A.meta[y]}))}function e(z,y){return z.some(function(A){return A.meta&&A.meta.type===y})}function u(z,y){return z.some(function(A){return A.meta&&A.meta.trigger===y})}function n(){return Array.prototype.slice.call(arguments)}function j(y){p.debugTime&&p.debugTime(y)}function c(y){p.debugTimeEnd&&p.debugTimeEnd(y)}function w(y){return y+"/heartbeat"}function m(A){var z=g.Deferred();var y=o();h(z,A,y);return z.promise()}function h(y,C,A){if(A.length===0||C.length===0){y.reject();return}var z=A[0];var B=g.ajax({url:w(z),cache:false});B.done(function(E,H,D){if(D.status===200){t=z;var G=A.slice(1).length>0?"primary":"secondary";var F=t.indexOf("synchrony-proxy")>0?"synchrony-proxy":"synchrony-direct";v.set("synchrony-connection-order",G);v.set("synchrony-connection-type",F);g.when.apply(this,C.map(function(I){return g.ajax({url:q(z,I),dataType:"script",cache:true})})).then(function(){y.resolve()})}else{h(y,C,A.slice(1))}}).fail(function(){h(y,C,A.slice(1))})}function d(){return k.Rte.getEditor()&&k.Rte.getEditor().initialized}return{retrieveMetadata:b,getEntityId:i,synchronyReady:a,getServiceUrl:f,getXhrFallbackFlag:r,getLatestRevisionWithAttr:l,hasRevisionType:e,hasRevisionTrigger:u,asArray:n,time:j,timeEnd:c,loadScript:m,isEditorInitialised:d}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-collaborative-editor-plugin:synchrony-content', location = '/js/synchrony-content.js' */
define("confluence-collaborative-editor-plugin/synchrony-content",["jquery","underscore","ajs","confluence/meta","confluence/legacy","confluence-collaborative-editor-plugin/synchrony-util"],function(d,s,h,n,j,f){var q;function k(t){return t==="dummy-sync-rev"?null:t}function b(u,t){return"<body data-title='"+s.escape(u)+"'>"+t+"</body>"}function e(t){return !!d("<div>"+t+"</div>").find(".fatal-render-error").length}function r(u){if(u.syncRevSource==="limited"){return{error:"limited-mode"}}var v=u.title;var t=u.editorContent;return{title:v,raw:t,html:b(v,t),error:e(t),confRev:u.confRev,syncRev:k(u.syncRev),syncRevSource:u.syncRevSource}}function o(){return f.retrieveMetadata("new-page")}function l(t){return(t.firstChild&&t.firstChild.classList&&t.firstChild.classList.contains("synchrony-container")&&(/^\s*$/).test(t.firstChild.textContent))}function c(t){return !t.childNodes.length||(t.childNodes.length===1&&l(t))}function m(u,t){if(c(u)){t.setContent("")}}function p(){var v=d("#content-title").val();if(v!==q){var u=frames.wysiwygTextarea_ifr;var t=u.contentDocument!==undefined?u.contentDocument:u.document;t.body.setAttribute("data-title",v);q=v}}function i(t){if(t.hasAttribute("data-title")){var u=t.getAttribute("data-title");if(u!==q){d("#content-title").val(u);q=u}}}function g(){var u=d(document);var t="confluence.postpaste-fix";u.bind("prePaste",function(){h.trigger("synchrony.stop",{id:t})}).bind("postPaste",function(){setTimeout(function(){h.trigger("synchrony.start",{id:t})},0)})}function a(t){return/^\s+$/.test(t)||d(d.parseHTML?d.parseHTML(t):t).text().trim().length===0}return{getContent:r,isUnpublished:o,fixTinymceCaretContainer:m,writeTitleToRootElement:p,readTitleFromRootElement:i,bindPostPasteFix:g,isContentEmpty:a}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:share-dialog-service', location = 'js/service/share-page.js' */
define("confluence/share-page/service/share-page",["ajs","wrm","jquery"],function(b,a,d){var c="click.share-page";return{initDialog:function(f,h,g,i){var e=d(f);if(e.length){e.off(c).on(c,function(j){e.off(c);i.beforeLoad&&typeof i.beforeLoad==="function"&&i.beforeLoad();a.require(["wrc!share-page-async-loader"]).done(function(){i.afterLoad&&typeof i.afterLoad==="function"&&i.afterLoad();require("confluence/share-page/dialog-async-loader")(f,h,d.extend(false,{hideCallback:function(){i.onHide&&typeof i.onHide==="function"&&i.onHide()},width:250,hideDelay:3600000},g),i);e.click()});j.preventDefault();return false})}}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:share-dialog-service', location = 'js/service/share-dialog-loader.js' */
define("confluence/share-page/service/share-dialog-loader",["wrm","confluence/api/logger"],function(a,b){return{init:function(c,d){a.require(["wrc!share-dialog-react"]).done(function(){require(["share-dialog-react"],function(e){e.init(c,d)})}).fail(function(){b.error("fail to load share-dialog-app")})}}});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.share-page:view-resources', location = 'js/view-init.js' */
require(["ajs","confluence/meta","confluence/share-page/service/share-page","confluence/share-page/service/share-dialog-loader","confluence/dark-features"],function(b,e,f,d,c){var g=e.get("content-type")==="page"?"Share this page":"Share this blog post";var a=e.get("content-type")==="page"?"Take a look at this page":"Take a look at this blog post";b.toInit(function(j){if(c.isEnabled("react.share.dialog")){d.init("share-react-link")}else{var i="#shareContentLink";var h=j(i);if(!j(i).length){return}f.initDialog(i,"shareContentPopup",{},{heading:g,notePlaceholder:a,link:function(){return j('link[rel="shortlink"]').prop("href")},entityId:function(){return e.get("page-id")},restriction:function(){return require("confluence/share-page/fetch/content-restrictions")(e.get("content-id")).pipe(function(k){var m=k.read.restrictions.user.size||k.read.restrictions.group.size||k.update.restrictions.user.size||k.update.restrictions.group.size;var l={};if(m){l.type="restrict";l.message="Restrictions on this page may prevent people viewing or editing."}return l})},copyOption:"share",shareType:"view",contentType:e.get("content-type"),errorText:"An unexpected error occurred. Please try again.",beforeLoad:function(){h.find(".aui-icon").css("visibility","hidden");h.parent().spin({left:"10px"})},afterLoad:function(){h.find(".aui-icon").css("visibility","visible");h.parent().spinStop()},onHide:function(){j(".dashboard-actions .explanation").hide()}})}})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'confluence.web.resources:page-analytics', location = '/includes/js/page.js' */
define("confluence/page",["ajs","jquery","confluence/analytics-support","window","document"],function(a,c,e,f,g){var i=a.Meta.get("page-id"),d=function(b,a){e.publish("confluence.page."+b,c.extend({pageID:i},a||{}))},j=(new Date).getTime();return function(){var b=c("#main-content");if(0!==b.length){d("view");b.on("click","a",function(a){a=-1<a.currentTarget.href.indexOf(f.location.host)?"internal":"external";d("link.click",{linkType:a})});var h=c(f),e=(new Date).getTime();h.on("scroll.content",a.debounce(function(){var a=
g.body.scrollTop+g.body.offsetHeight,c=b.offset().top+b.height();a>c&&(d("scroll-to-bottom",{secondsSinceReadyEvent:((new Date).getTime()-e)/1E3,secondsSincePageLoad:((new Date).getTime()-j)/1E3}),h.off("scroll.content"))},200));setTimeout(function(){d("reading")},3E5)}}});require("confluence/module-exporter").safeRequire("confluence/page",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.view-storage-format:view-storage-menu-resources', location = 'com/atlassian/confluence/plugins/viewstorage/js/viewstorage.js' */
AJS.toInit(function(a){a(".view-storage-link, .view-storage-link a").click(function(b){window.open(this.href,(this.id+"-popupwindow").replace(/-/g,"_"),"width=800, height=600, scrollbars, resizable");b.preventDefault();return false})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.confluence-request-access-plugin:confluence-request-access-plugin-loader', location = '/js/loader.js' */
require(["ajs","wrm"],function(b,a){!(b.$(".page-gadget").length)&&b.toInit(function(){a.require(["wrc!request-access-plugin"])})});
}catch(e){WRMCB(e)};
;
try {
/* module-key = 'com.atlassian.confluence.plugins.quickedit:quick-comment-hide-traditional', location = 'jscripts/add-comment-hider.js' */
define("confluence-quick-edit/add-comment-hider",[],function(){return function(a){a("#comments-actions").hide()}});require("confluence/module-exporter").safeRequire("confluence-quick-edit/add-comment-hider",function(a){require("ajs").toInit(a)});
}catch(e){WRMCB(e)};