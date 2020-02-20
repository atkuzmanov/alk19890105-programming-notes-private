(function( screen, window, debug ) {

	var $thm = {
		_$thm:  window.$thm,
		_debug: debug,
		_body: document.getElementsByTagName('body')[0],
		adRenderQueue:{},
		deviceBreakpoints: IDG.DEVICE.breakpoints,
		localIsMoble: false,
		deviceClass:'unknown',
		deviceClassAdSizes:undefined,
        useBusinessData:false,
        ip_cookie:'',
        ip_business_data:'',
        welcomeSeen: $.cookie('welcomeSeen'),
        tealiumUserDataNeeded:false,
        newHeaderTopLeaderboard: ["resources", "index","search","about"],
		ads:function() {
            let ads = {
                homepage: {
                    desktop: ["gpt-overlay", "gpt-skin", "topleaderboard", "ticker", "topimu","imu2", "imu3"],
                    tablet: ["topleaderboard", "topimu"],
                    mobile: ["topleaderboard", "topimu"]
                },
                article: {
                    desktop: ["gpt-overlay", "gpt-skin", "topleaderboard",  "inread", "topimu","imu2","imu3", "imu4"],
                    tablet: ["topleaderboard", "inread", "topimu","imu2","imu3", "imu4"],
                    mobile: ["topleaderboard", "inread", "topimu","imu2","imu3", "imu4"]
                },
                index: {
                    desktop: ["gpt-overlay", "gpt-skin", "topleaderboard","topimu","ticker","imu2"],
                    tablet: ["topleaderboard","topimu", "imu2"],
                    mobile: ["topleaderboard","topimu", "imu2"]
                },
                tentpole: {
                    desktop: ["gpt-overlay", "gpt-skin", "topleaderboard", "topimu", "imu2"],
                    tablet: ["topleaderboard", "topimu"],
                    mobile: ["topleaderboard", "topimu"]
                },
                video: {
                    desktop: ["gpt-skin", "gpt-leaderboard"],
                    tablet: [],
                    mobile: []
                },
                video_index: {
                    desktop: ["gpt-overlay"],
                    tablet: [],
                    mobile: []
                },
                video_player: {
                    desktop: ["gpt-skin"],
                    tablet: [],
                    mobile: ["gpt-showcasemobile"]
                },
                slideshow: {
                    desktop: ["gpt-overlay", "topleaderboard", "small_leaderboard", "topimu"],
                    tablet: ["topleaderboard","imu2","imu3", "imu4","imu5","imu6"],
                    mobile: ["imu2","imu3", "imu4","imu5","imu6"]
                },
                search: {
                    desktop: ["topleaderboard", "topimu","imu2","imu3","imu4"],
                    tablet: ["topleaderboard", "topimu", "imu2","imu3","imu4"],
                    mobile: ["topleaderboard", "topimu", "imu2","imu3","imu4"]
                },
                about: {
                    desktop: ["topleaderboard", "topimu"],
                    tablet: ["topleaderboard", "topimu"],
                    mobile: ["topleaderboard", "topimu"]
                },
                resources: {
                    desktop: ["gpt-overlay", "topleaderboard"],
                    tablet: ["topleaderboard"],
                    mobile: ["topleaderboard"]
                },
                resource_detail: {
                    desktop: [],
                    tablet: [],
                    mobile: []
                },
                podcast: {
                    desktop: ["topleaderboard"],
                    tablet: ["topleaderboard"],
                    mobile: ["topleaderboard"]
                },
                podcast_detail: {
                	desktop: [],
                    tablet: [],
                    mobile: []
                }
            };
            if (IDG.GPT.isSharedHomepage) {            	
        		ads.homepage.desktop=["gpt-overlay", "gpt-skin", "oc_ad_2","oc_ad_3","oc_ad_4"];
        		ads.homepage.tablet=["oc_ad_2","oc_ad_3","oc_ad_4"];
        		ads.homepage.mobile=["oc_ad_2","oc_ad_3","oc_ad_4"];
            }
            if (IDG.GPT.isNewHeader) {
            	ads.homepage.desktop.push("oc_ad_1");
            	ads.homepage.tablet.push("oc_ad_1");
            	ads.homepage.mobile.push("oc_ad_1");
            	
            	ads.article.desktop.push("oc_ad_1");
            	ads.article.tablet.push("oc_ad_1");
            	ads.article.mobile.push("oc_ad_1");
            	
            	ads.index.desktop.push("oc_ad_1");
            	ads.index.tablet.push("oc_ad_1");
            	ads.index.mobile.push("oc_ad_1");
            	
            	ads.slideshow.desktop.push("oc_ad_1");
            	ads.slideshow.tablet.push("oc_ad_1");
            	ads.slideshow.mobile.push("oc_ad_1");
            	
            	ads.search.desktop.push("oc_ad_1");
            	ads.search.tablet.push("oc_ad_1");
            	ads.search.mobile.push("oc_ad_1");
            	
            	ads.about.desktop.push("oc_ad_1");
            	ads.about.tablet.push("oc_ad_1");
            	ads.about.mobile.push("oc_ad_1");
            	
            	/*ads.resources.desktop.push("oc_ad_1");
            	ads.resources.tablet.push("oc_ad_1");
            	ads.resources.mobile.push("oc_ad_1");*/
            }
			return ads;
		},
        pos_values:function(){
            let pos_values= {
                gpt_leaderboard: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                gpt_leaderboardmobile:{
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
				},
                gpt_showcase: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                ticker: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                small_leaderboard: {
                    desktop: "BTF1",
                    tablet: "BTF1",
                    mobile: "BTF1"
                },
                topimu: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                imu2: {
                    desktop: "BTF1",
                    tablet: "BTF1",
                    mobile: "BTF1"
                },
                imu3: {
                    desktop: "BTF2",
                    tablet: "BTF2",
                    mobile: "BTF2"
                },
                imu4: {
                    desktop: "BTF3",
                    tablet: "BTF3",
                    mobile: "BTF3"
                },                
                topleaderboard: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                gpt_showcase_2: {
                    desktop: "ATF2",
                    tablet: "ATF2",
                    mobile: "ATF2"
                },
                gpt_showcasemobile: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                gpt_custom_promo: {
                    desktop: "BTF1",
                    tablet: "BTF1",
                    mobile: "BTF1"
                },
                oc_ad_1: {
            		desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                oc_ad_2: {
                    desktop: "ATF1",
                    tablet: "ATF1",
                    mobile: "ATF1"
                },
                oc_ad_3: {
                    desktop: "BTF1",
                    tablet: "BTF1",
                    mobile: "BTF1"
                },
                oc_ad_4: {
                    desktop: "BTF2",
                    tablet: "BTF2",
                    mobile: "BTF2"
                }
            };
            return pos_values;
        },
		deviceWidth:function() {return document.documentElement.clientWidth > 0 ? document.documentElement.clientWidth : window.innerWidth;},
		deviceHeight:function() {return document.documentElement.clientHeight > 0 ? document.documentElement.clientHeight : window.innerHeight;},
		deviceOrientation: function() {return this.deviceWidth > this.deviceHeight ? 'landscape' : 'portrait';},
		devicePixelRatio: function() {return window.devicePixelRatio !== undefined ? window.devicePixelRatio : 1;},
		deviceWidthAtLeast:function(w) {
			if (window.matchMedia != undefined) {
				return window.matchMedia("(min-width: " + w + "px)").matches;
			}
			else {
				return this.deviceWidth() >= w;
			}
		},
		deviceWidthLessThan:function(w) {
			if (window.matchMedia != undefined) {
				return window.matchMedia("(max-width: " + (w-1) + "px)").matches;
			}
			else {
				return this.deviceWidth() < w;
			}
		},
		isZoomedOut:function() {return this.devicePixelRatio() < 1;},
		isZoomedIn:function() {return this.devicePixelRatio() > 1;},
		compareCartId: 0,	
		premiumAdOptStatus: undefined,
		debug: function(msg,force) {
			var doDebug = force || this._debug;
			if (doDebug && window.console) {
				typeof msg === 'object' ? window.console.dir(msg) : window.console.log(msg);
			};
		},
		isMSIE: /*@cc_on!@*/false,
		MSIEVersion: function() {
			if (isMSIE) {
				var appVersion = navigator.appVersion.split("MSIE");
				return appVersion.length >1 ? appVersion[1] : undefined;
			}
			return undefined;
		},
		noConflict: function() {
			// jquery style noConflict calls to free namespace/
			if ( window.$thm === this ) {
				//replace global $thm with old value
				window.$thm = _$thm;
				return this;
			};
		},
		setDeviceClass:function(width) {
			if (width > this.deviceBreakpoints.superwide) {
				return "superwide desktop";
			}
			else if (width >this.deviceBreakpoints.desktop) {
				//also tablet landscape
				return "desktop";
			}
			else if (width >this.deviceBreakpoints.mobile) {
				return "tablet";
			}
			else {
				return "mobile";
			}
		},
		adSlots:"",
		setFreqCapCookie:function() {
			var visitTime = new Date();
			visitTime.setTime(visitTime.getTime()+1000*60*60*12);
	      	$.cookie('welcomeSeen', 'true', { expires: visitTime, path: '/' });
		},
		setDeviceClassAdSizes:function(width) {
			try {
				if (this._debug) {
					this.debug("adUnitId:"+IDG.GPT.unitName);
				}
	
				if (!IDG.GPT.isSlideshow) {
					IDG.GPT.addSlot("gpt-skin", [[1,1]]);
					IDG.GPT.addSlot("inread", [[1,1],[2,1]]);
				}
				if (width >= this.deviceBreakpoints.wide) { // wide = 970
					//IDGMPM-15684 - if welcome ad frequency cap is in place, only add gpt-overlay if cookie indicates 
					//it hasn't been seen in the past 12 hours
					if (IDG.GPT.welcomeFreqCap === true) {
						if (typeof $thm.welcomeSeen === 'undefined') {
							$thm.setFreqCapCookie();
					      	IDG.GPT.addSlot("gpt-overlay", [[640,480]]);
					      	//console.log("SHOWED WELCOME AD");
						}
						else {
							//console.log('SUPPRESS WELCOME AD');
						}
					}
					else {
						//console.log("NO WELCOME AD CAP");
						IDG.GPT.addSlot("gpt-overlay", [[640,480]]);
					}
					if (IDG.GPT.getPlace() === "homepage") {
						IDG.GPT.addSlot("topleaderboard", [[970,90],[728,90]]);
						IDG.GPT.addSlot("ticker", [[970,250]]);
					}
					/*else {
						IDG.GPT.addSlot("topleaderboard", [[970,90],[970,250],[728,90]]);
					}*/
					else {
						//if ( (IDG.GPT.getPlace() === "resources" || IDG.GPT.getPlace() === "index" ) && IDG.GPT.isNewHeader) {
						if ((($thm.newHeaderTopLeaderboard.indexOf(IDG.GPT.getPlace()) > -1) || IDG.GPT.isSlideshow) && IDG.GPT.isNewHeader) {	
				         // no topleaderboard on resources pages of sites with new header
						} else {
							IDG.GPT.addSlot("topleaderboard", [[970,90],[970,250],[728,90]]);
						}
					}
					
					if (IDG.GPT.getPlace() === "search" && IDG.GPT.isNewHeader) {
						// OC-1778 on sites with new header
						IDG.GPT.addSlot("topimu", [[300,600],[300,250],[120,600],[160,600]]);
					}
					else if (IDG.GPT.getPlace() === "about") {
						// no topimu on about and newsletter pages
					}
					else  {
						IDG.GPT.addSlot("topimu", [[300,600],[300,250],[120,600],[160,600]]); //updated per IDGMPM-15087 to include 300x600 even on slideshows for tablet/desktop
					}
					
					if (!IDG.GPT.isSlideshow) {
						IDG.GPT.addSlot("catfish", [[970,50]]);
						IDG.GPT.addSlot("sponsored-pst", [[200,126]]);
						IDG.GPT.addSlot("cram_session", [[200,80]]);
						IDG.GPT.addOtherAd("overlayimu", [[640,480],[300,250]]);
						IDG.GPT.addSlot("gpt-leaderboard", [[728,90],[970,90],[970,250],[768,66]]);
					}
					if (IDG.GPT.isSlideshow) {
						if (window.matchMedia("screen and (min-width: 1078px)").matches) {
							IDG.GPT.addSlot("small_leaderboard", [[728,90]]);
						}
					}
					if (IDG.GPT.isNewHeader) {
						IDG.GPT.addSlot("oc_ad_1", [[7,7]]);
					}
					if (IDG.GPT.isSharedHomepage) {
						IDG.GPT.addSlot("oc_ad_2", [[970,90],[970,250],[728,90]]);
						IDG.GPT.addSlot("oc_ad_3", [[970,90],[970,250],[728,90],[300,250]]);
						IDG.GPT.addSlot("oc_ad_4", [[970,90],[970,250],[728,90],[300,250]]);
					}
				}
				
				else if (width >= this.deviceBreakpoints.tablet) { // tablet = 768
					//IDGMPM-15684 - only add gpt-overlay if cookie indicates it hasn't been seen in the past 12 hours
					if (IDG.GPT.welcomeFreqCap === true) {
						if (typeof $thm.welcomeSeen === 'undefined') {
							$thm.setFreqCapCookie();
					      	IDG.GPT.addSlot("gpt-overlay", [[640,480]]);
					      	//console.log("SHOWED WELCOME AD");
						}
						else {
							//console.log('SUPPRESS WELCOME AD');
						}
					}
					else {
						//console.log("NO WELCOME AD CAP");
						IDG.GPT.addSlot("gpt-overlay", [[640,480]]);
					}
					IDG.GPT.addSlot("topleaderboard", [[728,90],[468,60]]);
					if (IDG.GPT.isSharedHomepage) {
						IDG.GPT.addSlot("oc_ad_2", [[728,90],[468,60]]);
						IDG.GPT.addSlot("oc_ad_3", [[728,90],[468,60],[300,250]]);
						IDG.GPT.addSlot("oc_ad_4", [[728,90],[468,60],[300,250]]);
					}
					//IDG.GPT.isSlideshow ? IDG.GPT.addSlot("topimu", [300,250]) : IDG.GPT.addSlot("topimu", [[300,600],[300,250]]);
					if (IDG.GPT.isSlideshow) {
						if (window.matchMedia("screen and (min-width: 930px)").matches) {
							IDG.GPT.addSlot("topimu", [[300,600],[300,250],[120,600],[160,600]]); //updated per IDGMPM-15087 to include 300x600 even on slideshows for tablet/desktop OC-1613 120x600
						}
						
					}
					if (!IDG.GPT.isSlideshow) {
						IDG.GPT.addSlot("sponsored-pst", [[200,126]]);
						IDG.GPT.addSlot("cram_session", [[200,80]]);
						IDG.GPT.addOtherAd("overlayimu", [[640,480],[300,250]]);
						IDG.GPT.addSlot("catfish", [[300,50],[320,50]]);
						IDG.GPT.addSlot("gpt-leaderboard", [[728,90],[970,90],[970,250],[768,66],[468,60]]);
						IDG.GPT.addSlot("topimu", [[300,600],[300,250],[120,600],[160,600]]);
					}
					
					if (IDG.GPT.isNewHeader) {
						IDG.GPT.addSlot("oc_ad_1", [[7,7]]);
					}
				}
				else if (width > this.deviceBreakpoints.mobile) {
					if (!IDG.GPT.isSlideshow) {
						IDG.GPT.addSlot("topleaderboard", [[300,50],[320,50]]);
						IDG.GPT.addSlot("mobilewelcomead", [[1,1]]);
						IDG.GPT.addSlot("topimu", [[300,250]]);
						IDG.GPT.addSlot("sponsored-pst", [[200,126]]);
						IDG.GPT.addSlot("cram_session", [[200,80]]);
						IDG.GPT.addOtherAd("overlayimu", [[300,250]]);
						IDG.GPT.addSlot("catfish", [[300,50],[320,50]]);
						IDG.GPT.addSlot("gpt-leaderboard", [[728,90],[970,90],[970,250],[768,66],[468,60]]);
					}
				}
				else {
					//SMALL MOBILE
					if (!IDG.GPT.isSlideshow) {
						IDG.GPT.addSlot("topleaderboard", [[300,50],[320,50]]);
						IDG.GPT.addSlot("mobilewelcomead", [[1,1]]);
						IDG.GPT.addSlot("topimu", [[300,250],[300,50],[320,50]]);
						IDG.GPT.addSlot("sponsored-pst", [[200,126]]);
						IDG.GPT.addSlot("cram_session", [[200,80]]);
						IDG.GPT.addOtherAd("overlayimu", [[300,250]]);
						IDG.GPT.addSlot("catfish", [[300,50],[320,50]]);
						IDG.GPT.addSlot("gpt-leaderboardmobile", [[300,50],[320,50]]); // has clearTargeting() before addService
						
						if (IDG.GPT.isNewHeader) {
							IDG.GPT.addSlot("oc_ad_1", [[7,7]]);
						}
						if (IDG.GPT.isSharedHomepage) {
							IDG.GPT.addSlot("oc_ad_2", [[300,250],[300,50],[320,50]]);
							IDG.GPT.addSlot("oc_ad_3", [[300,250],[300,50],[320,50]]);
							IDG.GPT.addSlot("oc_ad_4", [[300,250],[300,50],[320,50]]);
						}
					}
				}
			}
			catch(e) {
				console.log("error in $thm.setDeviceClassAdSizes: "+e);
			}
		},
		ord: null,
		getOrd: function() {
			return this.ord;
		},
		fpvKey: null,
		getFpvKey: function() {
			return this.fpvKey;
		},
		setFpvKey:function() {
			var c = this.readCookie('aiia');
			if (c == undefined || c == "") {
				this.fpvKey = ";c=AIIA";
				var expires = new Date (new Date().getTime()+86400000);//1day
				this.writeCookie('aiia', 'true', expires, this.cookieDomain);
			} else {
				this.fpvKey = "";
			}
		},
		isMobile:function() {
			return this.deviceClass =='mobile';
		},
		readRawCookie: function(name) {
			var cookies = document.cookies;
			if (navigator.cookieEnabled&&cookies!='') {
				var strAll = document.cookie;
				var i1 = strAll.indexOf(name);
				if (i1!=-1) {
					// skip name and '='
					i1 = i1+name.length+1;
					i2 = strAll.indexOf(';', i1);
					if (i2==-1) i2 = strAll.length;
					return strAll.substring(i1, i2);
				}
			}
			return "";
		},
		readCookie:function(name) {
			return unescape(this.readRawCookie(name));
		},
		deleteCookie: function(name) {
			if(navigator.cookieEnabled){
				var d = new Date();
				d.setDate(d.getDate()-30);
				document.cookie=name+"=;expires="+d.toGMTString()+";domain="+domain+";path=/";
			}
		},
		writeRawCookie: function(name, value, expires, domain) { 
			if (navigator.cookieEnabled) {
				var exp = (expires instanceof Date) ?expires.toGMTString():expires;
				document.cookie = name+"="+value+";expires="+exp+";domain="+domain+";path=/";
			}
		},
		writeCookie: function(name, value, expires, domain) {
			this.writeRawCookie(name, value, expires, domain);
		},
		setDomain:function() {
			this.cookieDomain = window.location.hostname.match(/\.[a-zA-Z]+\.com/);
		},
		writeLastVisit:function() {
			var midnight = new Date();
			midnight.setHours(0);
			midnight.setMinutes(0);
			midnight.setSeconds(0);
			var now = new Date();
			var minutes = (parseInt(now.getMinutes()/15) * 15) % 60;
			now.setSeconds(0);
			now.setMinutes(minutes);
			var time = now.getTime()-midnight.getTime();
			var expires = new Date ( now.getTime()+ 86400000);//1 Day
			this.writeCookie('lv', time, expires, this.cookieDomain);
		},
		setPremiumAdOptStatus:function() {
			var c = this.readCookie('nsdr');
			if (c != undefined && c != "" && typeof c == "string"){
				c = c.replace(/\"/g,"");
				return (c.charAt(c.length - 1) != '1');
			}
			
			return false;
		},
		qsToObject: function(qs) {
			// http://techtaunt.wordpress.com/2011/07/02/querystring-to-json/ 
	        var o = {};
	        qs.replace(
	            new RegExp("([^?=&]+)(=([^&]*))?", "g"),
	            function($0, $1, $2, $3) { o[$1] = $3; }
	            );
	        return o;
	    },
		setIDGTargetings: function() {
			try {
				// set targeting to c, referrer, browser, squery, nlsource, insiderauth, device, env and mobile
				if (this.getFpvKey() != "") {
					IDG.GPT.addTarget("c", "AIIA");
				}

				IDG.GPT.addTarget("device", this.deviceClass);

			} catch(e) {
				//console.log(e);
			}
		},
        logPlEvent: function(data) {        	
        	this.ip_cookie=$thm.readCookie("idg_client_ip");
        	this.ip_company_cookie=$thm.readCookie("de_normalized_company_name");
        	if (!this.ip_cookie || !this.ip_company_cookie) {
        		this.tealiumUserDataNeeded = true;
        	}
            if (data.hasOwnProperty("b") && data.hasOwnProperty("t") && data.hasOwnProperty("id") && data.hasOwnProperty("e")) {
                var qs = [];
                for (var key in data) {
                    qs.push(key+"="+data[key]);
                }
                var pl = new Image(1, 1);
                pl.onerror = pl.onload = function () {
                    pl.onerror = pl.onload = null;
                };
                if (!this.ip_cookie) {
                    this.getIpAddress().then(function (result) {
                        document.cookie ="idg_client_ip"+"="+result["ip"];
                        this.ip_cookie = result["ip"];
                        $thm.logBusinessName(this.ip_cookie, pl, qs)
                    }, function (err) {
                        console.log("Error getting ip address: " + err);
                        pl.src = ["//pixel.staticworld.net/pixel.gif?" + qs.join("&") + "&ts=", (new Date()).getTime()].join('');
                    });
                }
                else if (! $thm.readCookie("de_normalized_company_name")) {
                    $thm.logBusinessName(this.ip_cookie, pl, qs);
                }
            }
            console.log('logPlEvent fired');
        },
        logIpAddress: function(data, pl, qs){
            pl.src = ["//pixel.staticworld.net/pixel.gif?" + qs.join("&") + "&ts=", (new Date()).getTime()].join('') + "&ip=" + data;
        },
        logBusinessName: function(data,pl, qs){
            if (this.useBusinessData) {
                this.getBusinessName(data).then(function (result){
                    let retVals = result["response"];
                    
                    document.cookie ="de_normalized_company_name"+"="+retVals["organization-name"];
                    document.cookie ="ip_normalized_company_name"+"="+retVals["company-name"];
                    
                    pl.src = ["//pixel.staticworld.net/pixel.gif?" + qs.join("&") + "&ts=", (new Date()).getTime()].join('') + "&ip=" + $thm.getFiltered(retVals["ip"]) +
                        "&dn=" + $thm.getFiltered(retVals["domain-name"]) + "&cn=" + $thm.getFiltered(retVals["company-name"])+ "&on=" + $thm.getFiltered(retVals["organization-name"]) + "&n_rt=" + $thm.getFiltered(retVals["n_rt"]);
                }, function (error){
                    console.log("Error retrieving Business Data: " + error);
                    $thm.logIpAddress(data);
                });
            }
            else {
                this.logIpAddress(this.ip_cookie, pl, qs);
            }
        },
		init: function() {
			try {
				this.adUnitId = IDG.GPT.unitName;
			}
			catch (exception) {
				console.log("error in $thm.init() assigning adUnitId: "+exception);
			}
			this.deviceClass=this.setDeviceClass(this.deviceWidth());
			this.setIDGTargetings();
			// define slots
			this.setDeviceClassAdSizes(this.deviceWidth());
			//this doesn't clean up prior settings, so it proliferates body tags onresize. must be fixed before used
			//this._body.className = this._body.className +' '+this.deviceClass+' '+this.deviceOrientation();
			this.setDomain();
			this.setFpvKey();
			this.ord = ( new Date() ).getTime(); 
			var compareCookie = this.readCookie('compareCart');
			this.compareCartId = compareCookie!=undefined && compareCookie.length>0 ? compareCookie:0;
			if (this._debug) {
				this.debug("deviceWidth:"+this.deviceWidth());
				this.debug("deviceHeight:"+this.deviceHeight());
				this.debug("deviceClass:"+this.deviceClass);
				this.debug("devicePixelRatio:"+this.devicePixelRatio());
				this.debug("deviceOrientation:"+this.deviceOrientation());
				this.debug("productCompareCartId:"+this.compareCartId);
			}
		},
        getBusinessName: function(_ip){
            let startTime = new Date();
            return $.getJSON('//usa.cloud.netacuity.com/webservice/query?u=14c00d35-e85c-11e4-af66-0050568f6c90&ip=' + _ip + '&dbs=all&trans_id=test&json=true', function(data) {
                let endTime = new Date();
                let timeDiff = endTime - startTime;
                data["response"]["n_rt"]=timeDiff;
                return data;
            });
        },
        getIpAddress: function(){
            return $.getJSON('//api.ipify.org?format=jsonp&callback=?', function(data) {
                return data;
            });
        },
		getFiltered: function(item){
        	item=item + "";
        	return item.replace("?","");
		}
	};

	window.$thm =$thm;
	return $thm;
})(screen, window, false).init();

/* Logon namespace */
var Logon = new Object();
Logon.forumUser = $thm.readCookie('forumUser');
Logon.uname = $thm.readCookie('uname');
Logon.isValid = (Logon.forumUser && Logon.uname) ? true:false;

