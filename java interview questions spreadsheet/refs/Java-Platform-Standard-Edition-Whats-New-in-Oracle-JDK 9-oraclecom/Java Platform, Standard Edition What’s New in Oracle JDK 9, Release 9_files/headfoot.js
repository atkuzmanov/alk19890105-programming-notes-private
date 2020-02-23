/*
��Copyright 2014, 2017, Oracle and/or its affiliates. All rights reserved.
��Version: 2017.1.17
*/
var prodList = {}, baseurl = "", listOfCategories = new Array(),
  langErr = 0, langList = {}, langCode = { "ar":"Arabic",
"ca":"Catalan",
"cs":"Czech",
"da":"Danish",
"de":"German",
"el":"Greek",
"en":"English",
"es":"Spanish",
"fi":"Finnish",
"fr":"French",
"hi":"Hindi",
"hr":"Croatian",
"hu":"Hungarian",
"it":"Italian",
"he":"Hebrew",
"ja":"Japanese",
"ko":"Korean",
"nl":"Dutch",
"no":"Norwegian",
"pl":"Polish",
"pt":"Portuguese",
"pt-BR":"Brazilian Portuguese",
"ro":"Romanian",
"ru":"Russian",
"sk":"Slovak",
"sv":"Swedish",
"th":"Thai",
"tr":"Turkish",
"vi":"Vietnamese",
"zh-CN":"Simplified Chinese",
"zh-TW":"Traditional Chinese"
  };
function setBaseUrl() {
baseurl = window.location.hostname + "/";
if (baseurl.indexOf("pdb-stage") !== -1) {
  baseurl = "http://" + baseurl + "web/";
} else {
  baseurl = "//" + baseurl;
}
if (document.getElementById("searchbody") === undefined || document.getElementById("searchbody") === null) {
  baseurl += "en/";
} else {
  basurl += "apps/search/"
}
// alert(baseurl + " " + window.location.hostname);
}
setBaseUrl();
function addLoadEvent(func) {
  "use strict";
  var oldOnload = window.onload;
  if (typeof window.onload !== "function") {
    window.onload = func;
  } else {
    window.onload = function () { oldOnload(); func(); };
  }
}
function initializeValues() {
  "use strict";
  listOfCategories = new Array();
  getCategories();
}
//addLoadEvent(initializeValues);

function getCategories() {
  var searchURL = "";
    function setBase() {
     searchURL = window.location.hostname + "/";
     if (searchURL.indexOf("pdb-stage") !== -1) {
       searchURL = "http://" + searchURL+"oracleSearchCategories.jsp";
     } else {
       searchURL = "//" + searchURL + "apps/search/searchCategories.jsp";
     }
    }
    setBase();
    $.ajax({
      url: searchURL,
      dataType: "json",
      async: false,
      success: function( data) {
        var responseJson = data;
        var count = 0;
        for(var keyProd in responseJson){
          var thisProdName   = keyProd; // db, cloud etc
          var thisProdValues = responseJson[thisProdName];
          listOfCategories[thisProdName] = thisProdValues;
          //count = count + 1;
          //alert ("adding: "+thisProdName+": "+thisProdValues);
        }
      }
   });
}
function getHttpObject() {
  var xhr = false;
  if (window.XMLHttpRequest) {
    xhr = new window.XMLHttpRequest();
  } else if (window.ActiveXObject) {
    try {
      xhr = new window.ActiveXObject("Msxml2.XMLHTTP");
    } catch (e1) {
      try {
        xhr = new window.ActiveXObject("Microsoft.XMLHTTP");
      } catch (e2) {
        xhr = false;
      }
    }
  }
  return xhr;
}
function readJSON() {
    //"use strict";
    var request = getHttpObject();
    function parseResponse_json(request) {
        var jso, ul1, ipr = 0, iIter;
        if (request.readyState === 4) {
          if (request.status === 200 || request.status === 304 || request.status === 0) {
            prodList = window.JSON.parse(request.responseText);
            modifyHeader();
            //addNavigation();
          }
        }
    }
    try {
        if (request) {
          request.onreadystatechange = function () {
            parseResponse_json(request);
          };
          setBaseUrl();
          request.open("GET", baseurl + "dcommon/js/product.json", true);
          request.send(null);
        }
      } catch (e) {
      }
}
//addLoadEvent(readJSON);
function getCookieData(c){
var g=c.length;
var e=document.cookie.length;
var d=0;
var f;
while(d<e){
var b=d+g;
if(document.cookie.substring(d,b)==c){
f=document.cookie.indexOf(";",b);
if(f==-1){f=document.cookie.length;}b++;
var a=decodeURIComponent(document.cookie.substring(b,f).replace(/\+/g,"%20"));
return cleanCookieContent(a);
}
d++;
}
return"";
}
function cleanCookieContent(b){
var d=(typeof(b)=="undefined")?"NoData":b;
var a="<>";
if(d!="NoData"){
var c=d.length;
for(i=0;i<c;i++){
if(d.substr(i,1)!="."&&a.search(d.substr(i,1))>-1){
d="Invalid";
i=c+1;
}
}
}
return d;
}
function readCookie(name) {
  "use strict";
  var i = 0, c, nameEQ = name + "=", ca = document.cookie.split(";");
  for (i = 0; i < ca.length; i += 1) {
    c = ca[i];
    while (c.charAt(0) === " ") {
      c = c.substring(1, c.length);
    }
    if (c.indexOf(nameEQ) === 0) {
      return c.substring(nameEQ.length, c.length);
    }
  }
  return "";
}
function sso_sign_out(){
  var rUrl=escape(window.location.href);
  if ((rUrl.indexOf("/secure")!=-1)) {
    rUrl="http://www.oracle.com/partners/";
  }
  invalidateAuthCookie();
  /*if (window.location.host.indexOf("-stage")>-1) {
    window.location="https://login-stage.oracle.com/sso/logout?p_done_url="+rUrl;
  } else {
  */
    window.location="https://login.oracle.com/sso/logout?p_done_url="+rUrl;
  //}
}

function invalidateAuthCookie() {
  var b=readCookie("ORASSO_AUTH_HINT");
  if(b!=null) {
    var a="ORASSO_AUTH_HINT=INVALID; Max-Age=0; domain=.oracle.com; path=/;";
    document.cookie=a;
  }
}
function readLang(urlpath) {
  var request = getHttpObject(), urlpath, body, linkEle, i1 = 0;
  body = document.getElementsByTagName('body')[0];
  if (urlpath === undefined  || urlpath === null) {
    if (body.id === 'WELCOME') {
      urlpath = window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/, "/doc/nav/language.json");
      if (urlpath.indexOf("language.json") === -1) {
        urlpath += "/doc/nav/language.json";
      }
    } else if (body.id === 'PORTAL_1' && body.className === 'INDEX') {
      urlpath = window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/, "/nav/language.json");
      if (urlpath.indexOf("language.json") === -1) {
        urlpath += "/nav/language.json";
      }
    } else if (body.id.indexOf('PORTAL') !== -1 && body.className !== 'INDEX') {
      urlpath = window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/, "/language.json");
      if (urlpath !== undefined && urlpath !== null && urlpath.indexOf("language.json") === -1) {
        urlpath += "/language.json";
      }
    }else if (body.className.indexOf("category-page") === -1 || body.id !== 'searchbody' ) {
      linkEle = document.getElementsByTagName("link");
      for (i1 = 0; i1 < linkEle.length; i1 += 1) {
        if (linkEle[i1].getAttribute("rel") === 'Start' || linkEle[i1].getAttribute("rel") === 'start') {
            urlpath =linkEle[i1].href.replace(/\/[\x20-\x2E\x30-\x7E]+$/,'/nav/language.json');
        }
      }
      if (urlpath !== undefined && urlpath !== null && urlpath.indexOf("language.json") === -1) {
        urlpath += "/nav/language.json";
      }
    }
  }
  if (urlpath !== undefined && urlpath !== null && urlpath.length > 0) {
     function parseResponse_lang(request) {
        var jso, ul1, ipr = 0, iIter;
        if (request.readyState === 4) {
          if (request.status === 200 || request.status === 304 || request.status === 0) {
             jso = window.JSON.parse(request.responseText);
             for (ipr = 0; ipr < jso.lang.length; ipr += 1) {
              if (jso.lang[ipr] !== undefined) {
                if (jso.lang[ipr].c !== undefined) {
                  //langCode[jso.lang[ipr].c] = jso.lang[ipr].n;
                  var keys = jso.lang[ipr].c, href = jso.lang[ipr].h;
                  langList[keys] = href;
                }
              }
             }
             langErr = 1;
          } else {
            langErr = 1;
          }
        }
    }
  try {
    if (request) {
      request.onreadystatechange = function () {
        parseResponse_lang(request);
      };
      request.open("GET", urlpath, true);
      request.send(null);
    }
  } catch (e) {
    langErr = 1;
  }
  }
}
addLoadEvent(readLang);
function modifyHeader() {
  "use strict";
  var oldHeader, headerDiv, logoDiv, brEle, contHead, headerEle, headDiv,
    p = 0, pageData, pageNum, logoA, searchDiv, simpDiv, i = 0, headerImg, sL = 0,
    searchForm, searchLabel, prodLabel, prodSelect, option, search, button, gospan,
    headerEle, body, spanUI, alloption, j = 0, setProd = 0, headernav, user = "",
    liSign, aSign, imgSign, spanSign, shadUl, shadLi, shadA, langLi, langA, langImg,
    langSpan, enLang, enLangA, ulSign, langShad, langURL = "", linkEle, i1 = 0,
    searchDiv1, spanSearch, productSearch, metas, k = 0, divLogo, searchURL = "";
  function setBase() {
   searchURL = window.location.hostname + "/";
   if (searchURL.indexOf("pdb-stage") !== -1) {
     searchURL = "http://" + searchURL+"oracleSearch.jsp";
   } else {
     searchURL = "//" + searchURL + "apps/search/search.jsp";
   }
  }
  setBase();    
  pageNum = document.getElementsByTagName("span");
  for (p = 0; p < pageNum.length; p += 1) {
    if (pageNum[p].className === "page") { pageData = pageNum[p]; }
  }
  oldHeader = document.getElementsByTagName('header')[0];
  while (oldHeader.lastChild) {
    oldHeader.removeChild(oldHeader.lastChild);
  }
  body = document.getElementsByTagName('body')[0];
  headerDiv = document.createElement("div");
  headerDiv.className = "w1024";
  headerDiv.style.minHeight = "55px";
  headerDiv.style.display = "block";
  headerDiv.style.margin = "0";
  headerDiv.style.padding = "0";
  divLogo = document.createElement("div");
  divLogo.className = "oracle-logo";
  logoA = document.createElement("a");
  logoA.href = baseurl; // This will be http://docs.oracle.com externally
  headerImg = document.createElement("img");
  headerImg.border = "0";
  headerImg.maxWidth = "none";
  headerImg.width = "236";
  headerImg.height = "22";
  headerImg.alt = "Oracle Documentation";
  headerImg.src = baseurl + "dcommon/img/oracle-doc-logo.png";
  logoA.appendChild(headerImg);
  divLogo.appendChild(logoA);
  headerDiv.appendChild(divLogo);
  headernav = document.createElement("div");
  headernav.id = "headernav";
  headernav.className = "glyph";
  ulSign = document.createElement("ul");
  if (getCookieData("ORA_UCM_INFO").split("~").length > 3) {
      user = "Welcome " + getCookieData("ORA_UCM_INFO").split("~")[2];
  }
  if (user === "") {
    liSign = document.createElement("li");
    liSign.id = "login";
    aSign = document.createElement("a");
    aSign.href = "http://www.oracle.com/webapps/redirect/signon?nexturl=" +
    window.location.href;
    aSign.id = "signInLink";
    imgSign = document.createElement("img");
    imgSign.width = "14";
    imgSign.height = "19";
    imgSign.style.verticalAlign = "text-bottom";
    imgSign.alt = "Sign In Icon";
    imgSign.style.padding = "0";
    imgSign.src = baseurl + "dcommon/img/sign-on.png";
    aSign.appendChild(imgSign);
    aSign.appendChild(document.createTextNode(" Sign In"));
    liSign.appendChild(aSign);
    ulSign.appendChild(liSign);
  } else {
    liSign = document.createElement("li");
    liSign.id = "login";    
    aSign = document.createElement("a");
    aSign.href = "#";
    aSign.id = "signInLink";    
    aSign.appendChild(document.createTextNode(user));
    spanSign = document.createElement("span");
    spanSign.className = "JetFW-caret-s_16";
    spanSign.appendChild(document.createTextNode(" "));
    aSign.appendChild(spanSign);
    liSign.appendChild(aSign);
    shadUl = document.createElement("ul");
    shadUl.className = "shadow";
    shadLi = document.createElement("li");
    shadA = document.createElement("a");
    shadA.href = "#";
    shadA.appendChild(document.createTextNode("Sign Out"));
    shadA.onclick = function () { return function(){sso_sign_out();}}();
    shadLi.appendChild(shadA);
    shadUl.appendChild(shadLi);
    liSign.appendChild(shadUl);
    ulSign.appendChild(liSign);
  }
  //ulSign.appendChild(langLi);
  headernav.appendChild(ulSign);
  headerDiv.appendChild(headernav);
  /*spanUI = document.createElement("span");
  spanUI.setAttribute("role", "status");
  spanUI.setAttribute("aria-live", "polite");
  spanUI.className = "ui-helper-hidden-accessible";*/
  if (0) {
    searchDiv = document.createElement("div");
    searchDiv.className = "headersearch";
    searchDiv1 = document.createElement("div");
    searchDiv1.id = "searchcontent";
    spanSearch = document.createElement("span");
    spanSearch.setAttribute("role", "status");
    spanSearch.setAttribute("aria-live", "polite");
    spanSearch.className = "ui-helper-hidden-accessible";
    searchDiv1.appendChild(spanSearch);
    /*searchDiv.style.position = "relative";
    searchDiv.style.marginRight = "15px";
    searchDiv.style.marginTop = "11px";
    searchDiv.style.cssFloat ="right";*/
    //simpDiv = document.createElement("div");
    //simpDiv.id = "SIMPLESEARCH";
    searchForm = document.createElement("form");
    searchForm.id = "searchpage";
    searchForm.name = "searchpage";
    searchForm.action = searchURL;
    searchLabel = document.createElement("label");
    /*searchLabel.style.cssFloat = "left";
    searchLabel.style.fontSize = "12px";
    searchLabel.style.paddingRight = "7px";
    searchLabel.style.top = "5px";
    searchLabel.style.position = "relative";
    searchLabel.style.fontWeight = "bold";*/
    searchLabel.htmlFor = "searchField";
    searchLabel.className = "obscure";
    searchLabel.appendChild(document.createTextNode("Search "));
    searchForm.appendChild(searchLabel);
    prodLabel = document.createElement("label");
    prodLabel.className = "obscure";
    //prodLabel.style.cssFloat = "left";
    prodLabel.htmlFor = "selectproduct";
    prodLabel.appendChild(document.createTextNode("Select a product"));
    searchForm.appendChild(prodLabel);
    //searchForm.appendChild(spanUI);
    prodSelect = document.createElement("select");
    prodSelect.id = "selectproduct";
    prodSelect.className = "SELECTLRG";
    prodSelect.name = "category";
    /*prodSelect.style.cssFloat = "left";
    prodSelect.style.margin = "0 3px";
    prodSelect.style.marginRight = "0";*/
    if (listOfCategories.length < 1) {
      getCategories();
    }
    //prodSelect.name = "filter";
    if (prodList.products !== undefined ) {
      alloption = document.createElement("option");
      alloption.value = "all";
      alloption.appendChild(document.createTextNode("All Products"));
      prodSelect.appendChild(alloption);
    }
    for (var key in listOfCategories) {
      if (prodList.products !== undefined ) {
          setProd = 0;
          for (i = 0; i < prodList.products.length; i += 1) {
              if (prodList.products[i] !== undefined) {
                  if (prodList.products[i].name !== undefined) {
                      if(prodList.products[i].filter !== undefined) {
                        if(key.indexOf(prodList.products[i].filter) !== -1) {
                          option = document.createElement("option");
                          option.appendChild(document.createTextNode(prodList.products[i].name));
                          if (prodList.products[i].id !== undefined) {
                              if (prodList.products[i].filter !== undefined) {
                                option.value = prodList.products[i].filter;
                              } else { 
                                option.value = prodList.products[i].id;
                              }
                               if(document.getElementById((prodList.products[i].id).toLowerCase()+"body") !== null) {
                                    option.selected = true;
                               } else {
                                if(cat !== undefined && cat !== null) {
                                  if(cat.innerHTML.indexOf(prodList.products[i].name) !== -1) {
                                    option.selected = true;
                                  }
                                }
                               }
                          } else {
                              option.value = prodList.products[i].name;
                              if(document.getElementById((prodList.products[i].name).toLowerCase()+"body") !== null) {
                                option.selected = true;
                            } else {
                              if(cat !== undefined && cat !== null) {
                                if(cat.innerHTML.indexOf(prodList.products[i].name) !== -1) {
                                  option.selected = true;
                                }
                              }
                            }
                          }
                          setProd = 1;
                          prodSelect.appendChild(option);
                        }
                      }
                  }
              }
          }
          if ( setProd === 0) {
             option = document.createElement("option");
             option.value = key;
             option.appendChild(document.createTextNode(listOfCategories[key]));
             prodSelect.appendChild(option);
          }
      }
    }
    
    searchForm.appendChild(prodSelect);
    gospan = document.createElement("span");
    gospan.className = "gospan";
    search = document.createElement("input");
    search.id = "searchField";
    search.className = "search_field";
    search.onblur = function () { addText(this); };
    search.onfocus = function () { checkText(this); };
    //search.onload = function () { if() {this.value !== 'All Products'} };
    search.value = "Search products";
    search.type = "text";
    search.style.color = "#999";
    search.style.paddingLeft = "1px";
    //search.style.cssFloat = "left";
    search.name = "q";
    gospan.appendChild(search);
    productSearch = document.createElement("input");
    productSearch.type = "hidden";
    productSearch.name = "product";
    metas = document.getElementsByTagName("meta");
    for (k = 0; k < metas.length; k += 1) {
      if ((metas[k].name === "partno" || metas[k].name === "dcterms.identifier") &&
          metas[k].content.match(/^([A-Z]\d{5}[\-_]\d+)$/)) {
        productSearch.value = RegExp.$1.toLowerCase();
      }
    }
    button = document.createElement("input");
    button.id = "SEARCHBUTTON";
    button.type = "submit";
    //button.style.cssFloat = "left";
    button.value = "Search";
    gospan.appendChild(button);
    searchForm.appendChild(gospan);
    searchDiv1.appendChild(searchForm);
    searchDiv.appendChild(searchDiv1);
    headerDiv.appendChild(searchDiv);
  }
  if (pageData) {
    headerDiv.appendChild(pageData);
  }
  /*headDiv = document.createElement("div");
  headDiv.id = "newHead";
  headDiv.appendChild(headerDiv);*/
  headerEle = document.getElementsByTagName('header')[0];
  if (headerEle !== undefined && headerEle !== null) {
    //headerEle.style.position = "relative !important";
    headerEle.appendChild(headerDiv);
  } else {
    headerEle = document.createElement("header");
    //headerEle.style.position = "relative !important";
    headerEle.appendChild(headerDiv);
    body.insertBefore(headerEle, body.firstChild);
  }
  if (headerEle !== undefined && headerEle !== null && get_nextsibling(headerEle) !== null && get_nextsibling(headerEle) !== undefined) {
    get_nextsibling(headerEle).style.paddingTop = headerEle.offsetHeight + "px";
  }
}
addLoadEvent(modifyHeader);
function get_nextsibling(n)
{
x=n.nextSibling;
while (x.nodeType!=1)
  {
  x=x.nextSibling;
  }
return x;
}

function addCatalyst() {
  "use strict";
  var siteUrl = "//www.oracleimg.com/us/assets/metrics/ora_docs.js";
  function loadScript(url) {
    var script = document.createElement('script');
    script.type = 'application/javascript';
    script.src = url;
    if (document.getElementsByTagName('body')[0] !== null && document.getElementsByTagName('body')[0] !== undefined) {
      document.getElementsByTagName('body')[0].appendChild(script);
    }
  }
  loadScript(siteUrl);
}
addLoadEvent(addCatalyst);

function modifyFooter () {
  "use strict";
  var oldFooter, footerDiv, body, divs, i = 0, footerExist = false, footDiv, cpyrSpan,
    ulFooterLinks, ulFli1, aF1, ulFli2, aF2, ulFli3, aF3, ulFli4, aF4, ulFli5, aF5, langURL,
    footList, mainDiv, ulLang, langLi, langA, langImg, langSpan, enLang, enLangA, langShad,
    linkEle, sL = 0, body, i1 = 0, d = new Date(), metas, cpyrData = "", k = 0, htmlLang,
    cpyrA;
  body = document.getElementsByTagName('body')[0];
  oldFooter = document.getElementsByTagName('footer')[0];
  footerDiv = document.createElement("div");
  footerDiv.className = "footer-container clearboth";
  footDiv = document.createElement("div");
  footDiv.style.maxWidth = "994px";
  footDiv.style.padding = "10px 0 0 17px";
  mainDiv = document.createElement("div");
  mainDiv.id = "footernav";
  mainDiv.className = "glyph";
  ulLang = document.createElement("ul");
  langLi = document.createElement("li");
  langA = document.createElement("a");
  langA.href = "#";
  langA.style.fontSize = "12px";
  langImg = document.createElement("img");
  langImg.width = "16";
  langImg.height = "16";
  langImg.style.verticalAlign = "middle";
  langImg.style.margin = "0 4px";
  langImg.alt = "Choose your language";
  langImg.src = baseurl + "dcommon/img/func_worldglobe_16_act.png";
  langA.appendChild(langImg);
  langSpan = document.createElement("span");
  langSpan.className = "JetFW-caret-n_16";
  langSpan.appendChild(document.createTextNode(" "));
  langA.appendChild(langSpan);
  langLi.appendChild(langA);
  langShad = document.createElement("ul");
  langShad.className = "shadow";
  if (body.id === 'WELCOME') {
    langURL = window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/, "/doc/nav/language.json");
  } else if (body.id === 'PORTAL_1' && body.className === 'INDEX') {
    langURL = window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/, "/nav/language.json");
  } else if (body.id.indexOf('PORTAL') !== -1 && body.className !== 'INDEX') {
    langURL = window.location.href.replace(/\/[\x20-\x2E\x30-\x7E]+$/, "/language.json");
  }else if (body.className.indexOf("category-page") === -1 || body.id !== 'searchbody' ) {
    linkEle = document.getElementsByTagName("link");
    for (i1 = 0; i1 < linkEle.length; i1 += 1) {
      if (linkEle[i1].getAttribute("rel") === 'Start' || linkEle[i1].getAttribute("rel") === 'start') {
          langURL =linkEle[i1].href.replace(/\/[\x20-\x2E\x30-\x7E]+$/,'/nav/language.json');
      }
    }
  }
  //alert(langURL);
  if (langURL === undefined || langURL === "") {
    enLang = document.createElement("li");
    enLangA = document.createElement("a");
    enLangA.style.fontSize = "12px";
    enLangA.href = "#";
    enLangA.appendChild(document.createTextNode("English"));
    enLang.appendChild(enLangA);
    langShad.appendChild(enLang);
  } else {
    var checkReady = function (callback) {
     if (langErr === 1) {
        sL = 0;
        for (var keys in langList) {
          //alert(keys +" : "+langList[keys]+ " : "+langCode[keys]);
          if (langList[keys] !== undefined) {
            enLang = document.createElement("li");
            enLangA = document.createElement("a");
            enLangA.style.fontSize = "12px";
            enLangA.href = langList[keys];
            if (langCode[keys]) {
              enLangA.appendChild(document.createTextNode(langCode[keys]));
            } else {
              enLangA.appendChild(document.createTextNode(keys));
            }
            enLang.appendChild(enLangA);
            langShad.appendChild(enLang);
            sL += 1;
          }
        }
        if (sL === 0) {
          enLang = document.createElement("li");
          enLangA = document.createElement("a");
          enLangA.style.fontSize = "12px";
          enLangA.href = "#";
          enLangA.appendChild(document.createTextNode("English"));
          enLang.appendChild(enLangA);
          langShad.appendChild(enLang);
        }
     } else {
       window.setTimeout(function () { checkReady(callback); }, 1);
     }
    };
    checkReady(function () {});
    /*sL = 0;
    for (var keys in langList) {
      //alert(keys +" : "+langList[keys]+ " : "+langCode[keys]);
      if (langList[keys] !== undefined) {
        enLang = document.createElement("li");
        enLangA = document.createElement("a");
        enLangA.href = langList[key];
        if (langCode[keys]) {
          enLangA.appendChild(document.createTextNode(langCode[keys]));
        } else {
          enLangA.appendChild(document.createTextNode(keys));
        }
        enLang.appendChild(enLangA);
        langShad.appendChild(enLang);
        sL += 1;
      }
    }
    if (sL === 0) {
      enLang = document.createElement("li");
      enLangA = document.createElement("a");
      enLangA.href = "#";
      enLangA.appendChild(document.createTextNode("English"));
      enLang.appendChild(enLangA);
      langShad.appendChild(enLang);
    }*/
  }
  langLi.appendChild(langShad);
  ulLang.appendChild(langLi);
  mainDiv.appendChild(ulLang);
  footDiv.appendChild(mainDiv);  
  footList = document.createElement("div");
  footList.className = "footer-list"; 
  ulFooterLinks = document.createElement("ul");  
  ulFli1 = document.createElement("li");
  aF1 = document.createElement("a");
  aF1.href = "http://www.oracle.com/corporate/index.html";
  aF1.appendChild(document.createTextNode("About Oracle"));
  ulFli1.appendChild(aF1);
  ulFooterLinks.appendChild(ulFli1);
  ulFli2 = document.createElement("li");
  aF2 = document.createElement("a");
  aF2.href = "http://www.oracle.com/us/corporate/contact/index.html";
  aF2.appendChild(document.createTextNode("Contact Us"));
  ulFli2.appendChild(aF2);
  ulFooterLinks.appendChild(ulFli2);
  ulFli3 = document.createElement("li");
  aF3 = document.createElement("a");
  aF3.href = "http://www.oracle.com/us/legal/index.html";
  aF3.appendChild(document.createTextNode("Legal Notices"));
  ulFli3.appendChild(aF3);
  ulFooterLinks.appendChild(ulFli3);
  ulFli4 = document.createElement("li");
  aF4 = document.createElement("a");
  aF4.href = "http://www.oracle.com/us/legal/terms/index.html";
  aF4.appendChild(document.createTextNode("Terms of Use"));
  ulFli4.appendChild(aF4);
  ulFooterLinks.appendChild(ulFli4);
  ulFli5 = document.createElement("li");
  aF5 = document.createElement("a");
  aF5.href = "http://www.oracle.com/us/legal/privacy/index.html";
  aF5.appendChild(document.createTextNode("Your Privacy Rights"));
  ulFli5.appendChild(aF5);
  ulFooterLinks.appendChild(ulFli5);
  footList.appendChild(ulFooterLinks);
  footDiv.appendChild(footList);
  metas = document.getElementsByTagName("meta");
  for (k = 0; k < metas.length; k += 1) {
    if (metas[k].name === "dcterms.rights") {
      cpyrData = metas[k].content;
    }
  }
  cpyrSpan = document.createElement("span");
  cpyrSpan.className = "copyright";
  //cpyrSpan.style.display = "block";
  if (document.getElementsByTagName("html")[0].getAttribute("lang") !== null) {
    htmlLang = document.getElementsByTagName("html")[0].getAttribute("lang");
  } else {
    htmlLang = "en";
  }
  cpyrA = document.createElement("a");
  cpyrA.href = "http://www.oracle.com/pls/topic/lookup?ctx=cpyr&id="+htmlLang;
  if (cpyrData !== null && cpyrData.length !== 0) {
    cpyrA.appendChild(document.createTextNode(cpyrData));
  } else {
    cpyrA.appendChild(document.createTextNode("Copyright \u00A9 " + d.getFullYear() + ", Oracle and/or its affiliates. All rights reserved. "));
  } 
  cpyrSpan.appendChild(cpyrA);
  footDiv.appendChild(cpyrSpan);
  footerDiv.appendChild(footDiv);
  if (oldFooter !== undefined && oldFooter !== null) {
    while (oldFooter.lastChild) {
      oldFooter.removeChild(oldFooter.lastChild);
    }
    oldFooter = document.getElementsByTagName('footer')[0];
    oldFooter.appendChild(footerDiv);
  } else {
      divs = document.getElementsByTagName("body");
      for (i = 0; i < divs.length; i += 1) {
          if (divs[i].className && divs[i].className.indexOf("footer-container") !== -1) { footerExist = true; }
      }
      if(! footerExist) {
        body = document.getElementsByTagName('body')[0];
        body.appendChild(footerDiv);
      }
  }
}
addLoadEvent(modifyFooter);
/*
function modifyFooter() {
  "use strict";
  var  footerEle, footerDiv, h3Ele, hwsfA, ulFooterLinks, ulFli1, aF1, ulFli2,
    aF2, ulFli3, aF3, ulFli4, aF4, ulFli5, aF5, ulFli6, aF6, ulFli7, aF7, c = 0,
    ulFli8, aF8, sclIcons, sclli1, aS1, sclli2, aS2, sclli3, aS3, sclli4, aS4,
    sclli5, aS5, sclli6, aS6, engT, footerTd, t = 0, cpyrTd, cpyr, cpyrLink,
    cpyrL, cpyrA, cpyrCont;
  footerEle = document.getElementsByTagName('footer')[0];
  footerTd = footerEle.getElementsByTagName("td");  
  for (t = 0; t < footerTd.length; t += 1) {
    if (footerTd[t].className.indexOf("copyrightlogo") != -1) { cpyrTd = footerTd[t]; }
  }
  cpyrLink = cpyrTd.getElementsByTagName("a");
  for (c = 0; c < cpyrLink.length; c += 1) {
    if (c === 0) {
        cpyrL = cpyrLink[c].href;
    }
  }
  //alert(cpyrTd.textContent);
  while (footerEle.lastChild) {
    footerEle.removeChild(footerEle.lastChild);
  }
  footerDiv = document.createElement("div");
  footerDiv.id = "FOOTER";
  h3Ele = document.createElement("h3");
  hwsfA = document.createElement("a");
  hwsfA.href = "http://www.oracle.com/us/corporate/index.html";
  hwsfA.appendChild(document.createTextNode("Hardware and Software, "))
  engT = document.createElement("span");
  engT.appendChild(document.createTextNode("Engineered to Work Together"));
  hwsfA.appendChild(engT);
  h3Ele.appendChild(hwsfA);
  footerDiv.appendChild(h3Ele);
  footerDiv.appendChild(document.createElement("br"));
  ulFooterLinks = document.createElement("ul");
  ulFooterLinks.className = "FOOTER-links";
  ulFli1 = document.createElement("li");
  aF1 = document.createElement("a");
  aF1.href = "http://www.oracle.com/us/syndication/subscribe/index.html";
  aF1.appendChild(document.createTextNode("Subscribe"));
  ulFli1.appendChild(aF1);
  ulFooterLinks.appendChild(ulFli1);
  ulFli2 = document.createElement("li");
  aF2 = document.createElement("a");
  aF2.href = "http://www.oracle.com/us/corporate/careers/index.html";
  aF2.appendChild(document.createTextNode("Careers"));
  ulFli2.appendChild(aF2);
  ulFooterLinks.appendChild(ulFli2);
  ulFli3 = document.createElement("li");
  aF3 = document.createElement("a");
  aF3.href = "http://www.oracle.com/us/corporate/contact/index.html";
  aF3.appendChild(document.createTextNode("Contact Us"));
  ulFli3.appendChild(aF3);
  ulFooterLinks.appendChild(ulFli3);
  ulFli4 = document.createElement("li");
  aF4 = document.createElement("a");
  aF4.href = "http://www.oracle.com/us/sitemaps/index.html";
  aF4.appendChild(document.createTextNode("Site Maps"));
  ulFli4.appendChild(aF4);
  ulFooterLinks.appendChild(ulFli4);
  ulFli5 = document.createElement("li");
  aF5 = document.createElement("a");
  aF5.href = "http://www.oracle.com/us/legal/privacy/overview/index.html";
  aF5.appendChild(document.createTextNode("Legal Notices"));
  ulFli5.appendChild(aF5);
  ulFooterLinks.appendChild(ulFli5);
  ulFli6 = document.createElement("li");
  aF6 = document.createElement("a");
  aF6.href = "http://www.oracle.com/us/legal/terms/index.html";
  aF6.appendChild(document.createTextNode("Terms of Use"));
  ulFli6.appendChild(aF6);
  ulFooterLinks.appendChild(ulFli6);
  ulFli7 = document.createElement("li");
  aF7 = document.createElement("a");
  aF7.href = "http://www.oracle.com/us/legal/privacy/overview/index.html";
  aF7.appendChild(document.createTextNode("Privacy"));
  ulFli7.appendChild(aF7);
  ulFooterLinks.appendChild(ulFli7);
  ulFli8 = document.createElement("li");
  ulFli8.className = "FOOTER-mobile";
  aF8 = document.createElement("a");
  aF8.href = "http://www.oracle.com/us/corporate/mobile-application/index.html";
  aF8.appendChild(document.createTextNode("Oracle Mobile"));
  ulFli8.appendChild(aF8);
  ulFooterLinks.appendChild(ulFli8);
  footerDiv.appendChild(ulFooterLinks);

  sclIcons = document.createElement("ul");
  sclIcons.className = "scl-icons";
  sclli1 = document.createElement("li");
  sclli1.className = "scl-facebook";
  aS1 = document.createElement("a");
  aS1.href = "http://www.oracle.com/us/social-media/facebook/index.html";
  aS1.title = "Oracle on Facebook";
  aS1.appendChild(document.createTextNode("Facebook"));
  sclli1.appendChild(aS1);
  sclIcons.appendChild(sclli1);
  sclli2 = document.createElement("li");
  sclli2.className = "scl-linkedin";
  aS2 = document.createElement("a");
  aS2.href = "http://www.oracle.com/us/social-media/linkedin/index.html";
  aS2.title = "Oracle on LinkedIn";
  aS2.appendChild(document.createTextNode("LinkedIn"));
  sclli2.appendChild(aS2);
  sclIcons.appendChild(sclli2);
  sclli3 = document.createElement("li");
  sclli3.className = "scl-twitter";
  aS3 = document.createElement("a");
  aS3.href = "http://www.oracle.com/us/social-media/twitter/index.html";
  aS3.title = "Follow Oracle on Twitter";
  aS3.appendChild(document.createTextNode("Twitter"));
  sclli3.appendChild(aS3);
  sclIcons.appendChild(sclli3);
  sclli4 = document.createElement("li");
  sclli4.className = "scl-googleplus";
  aS4 = document.createElement("a");
  aS4.href = "https://plus.google.com/u/0/115607918987921226255";
  aS4.title = "Follow Oracle on Google+";
  aS4.appendChild(document.createTextNode("Google+"));
  sclli4.appendChild(aS4);
  sclIcons.appendChild(sclli4);
  sclli5 = document.createElement("li");
  sclli5.className = "scl-youtube";
  aS5 = document.createElement("a");
  aS5.href = "http://www.youtube.com/oracle/";
  aS5.title = "Watch Oracle on YouTube";
  aS5.appendChild(document.createTextNode("YouTube"));
  sclli5.appendChild(aS5);
  sclIcons.appendChild(sclli5);
  sclli6 = document.createElement("li");
  sclli6.className = "scl-feed";
  aS6 = document.createElement("a");
  aS6.href = "http://www.oracle.com/us/syndication/feeds/index.html";
  aS6.title = "Oracle RSS Feeds";
  aS6.appendChild(document.createTextNode("Oracle RSS Feed"));
  sclli6.appendChild(aS6);
  sclIcons.appendChild(sclli6);
  footerDiv.appendChild(sclIcons);
  if(footerDiv && cpyrTd) {
    cpyr = document.createElement("p");
    cpyr.className = "copyrightstmt";
    cpyrCont = cpyrTd.textContent;
    if (cpyrCont.indexOf("Copyright") !== -1) {
        cpyrCont = cpyrCont.replace("Copyright", "");
    }
    if (cpyrCont.indexOf("Legal Notices") !== -1) {
        cpyrCont = cpyrCont.replace("Legal Notices", "");
    }
    if (cpyrL) {
      cpyrA = document.createElement("a");
      cpyrA.href = cpyrL;
      cpyrA.appendChild(document.createTextNode(cpyrCont));
      cpyr.appendChild(cpyrA);
    } else {
      cpyr.appendChild(document.createTextNode(cpyrCont));
    }
    footerDiv.appendChild(cpyr);
  }
  footerEle.appendChild(footerDiv);
}
addLoadEvent(modifyFooter);
*/
function openWindow (aEle) {
  "use strict";
  var myWin = window.open(aEle.href, "_blank", "menubar=no, toolbar=no");
  return false;
}

function targetChange() {
  "use strict";
  var aList, i = 0, r = new RegExp('^(?:[a-z]+:)?//', 'i'), img, classInfo;
  var checkReady = function (callback) {
     if (document.getElementById("NAV")) {
        aList = document.getElementsByTagName("a")  ;
        for (i = 0; i < aList.length; i += 1) {
          classInfo = "";
          if (aList[i].getAttribute("class")) {
            classInfo = aList[i].className + " ";
          }
          if (aList[i].href && r.test(aList[i].href) && !aList[i].getAttribute("target") && ((classInfo !== '' && classInfo.indexOf("newwindow") === -1 && classInfo.indexOf("various") === -1) || classInfo === '') && !((aList[i].parentNode.parentNode.parentNode.getAttribute("class") && aList[i].parentNode.parentNode.parentNode.className.indexOf("footer-list") !== -1)) && aList[i].href.indexOf("/pls/topic") === -1&& aList[i].href.indexOf("apex.oracle.com") === -1 && aList[i].href.indexOf("apexapps.oracle.com") === -1) {
            if (aList[i].href.indexOf(".oracle.com") === -1) {
              aList[i].target = "_blank";
              img = document.createElement("img");
              img.src = baseurl + "dcommon/img/new-window.png";
              img.alt = "Opens a new window";
              img.style.display = "inline";
              img.style.border = "none";
              img.style.borderRadius = "0";
              img.style.margin = "0 0 0 2px";
              img.style.padding = "0";
              aList[i].className = classInfo + "newwindow";
              aList[i].appendChild(img);
            } else if (aList[i].href.indexOf("docs.oracle.com") === -1 && aList[i].href.indexOf(window.location.hostname)  === -1) {
              aList[i].target = "_blank";
              img = document.createElement("img");
              img.src = baseurl + "dcommon/img/new-window.png";
              img.alt = "Opens a new window";
              img.style.display = "inline";
              img.style.border = "none";
              img.style.borderRadius = "0";
              img.style.margin = "0 0 0 2px";
              img.style.padding = "0";
              aList[i].className = classInfo + "newwindow";
              aList[i].appendChild(img);    
            } else if (aList[i].className.indexOf("old-layout") !== -1) {
              aList[i].target = "_blank";
              img = document.createElement("img");
              img.src = baseurl + "dcommon/img/new-window.png";
              img.alt = "Opens a new window";
              img.style.display = "inline";
              img.style.border = "none";
              img.style.borderRadius = "0";
              img.style.margin = "0 0 0 2px";
              img.style.padding = "0";
              aList[i].className = classInfo + "newwindow";
              aList[i].appendChild(img);
            } else if (aList[i].href.indexOf(".pdf") !== -1) {
              //aList[i].target = "_blank";
              img = document.createElement("img");
              img.src = baseurl + "dcommon/img/new-window.png";
              img.alt = "Opens a new window";
              img.style.display = "inline";
              img.style.border = "none";
              img.style.borderRadius = "0";
              img.style.margin = "0 0 0 2px";
              img.style.padding = "0";
              aList[i].className = classInfo + "newwindow";
              aList[i].appendChild(img);
              aList[i].onclick = function() { return function() {openWindow(this); return false;}}();
            }
          }
        }
     } else {
       window.setTimeout(function () { checkReady(callback); }, 2);
     }
    };
  checkReady(function () {});
}
addLoadEvent(targetChange);
function resizeHeader() {
  var header;
  headerEle = document.getElementsByTagName('header')[0];
  if (headerEle !== undefined && headerEle !== null && headerEle.nextSibling !== null && headerEle.nextSibling !== undefined) {
    headerEle.nextSibling.style.paddingTop = headerEle.offsetHeight + "px";
  }
}
window.addEventListener("resize", resizeHeader);
function positionAnchors() {
  "use strict";
  if (!window.ActiveXObject || window.opera) { return false; }

  var a, i = 0, location = [], anchor = "";

  try {
    if (window.location.href.match(/#([\x20-\x7E]+)$/)) { anchor = RegExp.$1; }
  } catch (e) {
    return;
  }

  function findPos(obj) {
    var curleft = 0, curtop = 0;
    if (obj.offsetParent) {
      do {
        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
    }
    return [curleft, curtop];
  }

  if (document.getElementById(anchor)) {
    location = findPos(document.getElementById(anchor));
    window.scrollTo(0, location[1]);
  } else {
    a = document.getElementsByTagName("a");
    for (i = 0; i < anchor.length; i += 1) {
      if (a[i].className === anchor) {
        location = findPos(a[i]);
        window.scrollTo(0, location[1]);
      }
    }
  }
}
function correctAnchor() {
 var checkReady = function (callback) {
     if (document.getElementById("NAV")) {
        positionAnchors();
     } else {
        window.setTimeout(function () { checkReady(callback); }, 2);
     }
}
checkReady(function () {});
}
addLoadEvent(correctAnchor);
/*function changeDownload() {
 var checkReady = function (callback) {
      if (document.getElementById("downloadsect") !== undefined && document.getElementById("downloadsect") !== null) {
       document.getElementById("downloadsect").style.width = (document.getElementById("leftsidebar").offsetWidth - 5 ) + 'px !important';
       alert(document.getElementById("leftsidebar").offsetWidth);
     } else {
        window.setTimeout(function () { checkReady(callback); }, 2);
     }
}
checkReady(function () {});
}
addLoadEvent(changeDownload);*/