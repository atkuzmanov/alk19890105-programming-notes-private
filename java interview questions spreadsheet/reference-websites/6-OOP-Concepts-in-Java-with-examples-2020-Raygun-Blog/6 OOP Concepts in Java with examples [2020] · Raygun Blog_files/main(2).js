// put your code here
// remember, you can use modules with browserify
var headsup_AP_Fn = {
    init: function() {
        //inject styles
        var css = 'h1 { background: none; }',
            head = document.head || document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet){
          style.styleSheet.cssText = css;
        } else {
          style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);

        // setup variables
        var d = document.getElementById("headsupwrap");
        var d_content = document.getElementById("headsup-content-id");
        var d_image = document.getElementById("headsup-image-id");
        var opened = false;
        var loadTime = Date.now() - window.headsupData && window.headsupData.baseTime || 100;
        var hideOnMobile = document.getElementsByClassName("hideOnMobile").length;
        var hideOnTablet = document.getElementsByClassName("hideOnTablet").length;

        var mobileDev = false;
        var tabletDev = false;
        if (typeof window.matchMedia === 'function') {
          if (window.matchMedia("only screen and (min-device-width : 375px) and (max-device-width : 667px)").matches) {
            mobileDev = true;
          }
          else if (window.matchMedia("screen and (max-device-width : 414px)").matches) {
            mobileDev = true;
          }
          else if (window.matchMedia("only screen and (min-device-width : 320px) and (max-device-width : 568px)").matches) {
            mobileDev = true;
          }
          else if (window.matchMedia("screen and (max-device-width : 375px)").matches) {
            mobileDev = true;
          }
          else if (window.matchMedia("only screen and (min-device-width : 768px) and (max-device-width : 1024px)").matches) {
            // iPad in portrait & landscape
            tabletDev = true;
          }
          else if (window.matchMedia("only screen and (min-device-width : 768px) and (max-device-width : 1024px) and (-webkit-min-device-pixel-ratio: 2)").matches) {
            // Retina iPad in portrait & landscape
            tabletDev = true;
          }
        }

        if ((mobileDev && hideOnMobile > 0) || (tabletDev && hideOnTablet > 0)) {
          return;
        }

        if (mobileDev || tabletDev) {
          setTimeout(function() {
            window.pm({ height: '190px'});
          }, 0);
        }

        //notify container of text we will display and click url
        if(window.headsupData) {
          window.pm({init: true, messageText: window.headsupData.messageText, shortMessageText: window.headsupData.shortMessageText, fromName: window.headsupData.fromName, titleAndCompany: window.headsupData.titleAndCompany, buttonText: window.headsupData.buttonText, redirectLink: window.headsupData.redirectLink, subscribeContactListId: window.headsupData.subscribeContactListId, replyBackField: window.headsupData.replyBackField });
        }

        //slide in headsup
        setTimeout(function() {
            d.className = d.className + " slideUp";
            window.pm({shown: true,opacity: '1.0'});

            //add pulse css class
            setTimeout(function() {
                d_image.className = d_image.className + " pulse";
            }, 1500);
        }, Math.max(0, 2500 - loadTime));

        // reply dynamic height
        var replyInput = document.getElementById('reply-msg');
        var replyParent = replyInput.parentElement;

        replyInput.style.overflowY = 'hidden';

        var keyTimeout = null;
        var fullMode = null;

        replyInput.onkeydown = function() {
            // remove reply input error
            var replyInput = document.getElementById('reply-msg');
            replyInput.classList.remove("invalid");

            clearTimeout(keyTimeout);
            textAreaChanged();

            // commented out
            // this was a reset back to fixed mode
            // was bugging out in ios

            // fullMode = true;
            // keyTimeout = setTimeout(function(){
            //     fullMode = false;
            //     setToAbsolute = false;
            //     window.pm({ height: (d.clientHeight + 38 + (mobileDev ? 80 : 0)) + 'px', width: '415px', left: 'auto', top: 'auto', bottom: '0px', position: 'fixed'});
            // }, 1300);

            // commented out b
            // this returns the height to default

            /*var msgLength = replyInput.value && replyInput.value.length || 0;
            if(msgLength < 36) {
              replyInput.style.height = "";
              replyParent.style.height = "53px";
            }*/
        };

        // input fields
        var proScbFirst = document.getElementById('proScb-first');
        var proScbLast = document.getElementById('proScb-last');
        var proScbEmail = document.getElementById('proScb-email');
        var setToAbsolute = false;

        replyInput.addEventListener('touchstart', function () {
            if (mobileDev) {
              inputFieldFix();
            }
        });
        proScbFirst.addEventListener('touchstart', function () {
            if (mobileDev) {
              inputFieldFix();
            }
        });
        proScbLast.addEventListener('touchstart', function () {
            if (mobileDev) {
              inputFieldFix();
            }
        });
        proScbEmail.addEventListener('touchstart', function () {
            if (mobileDev) {
              inputFieldFix();
            }
        });

        // Display fix for mobile
        var inputFieldFix = function() {
            if (!setToAbsolute) {
                window.pm({absoluteIFrame: true});
                fullMode = true;
                setToAbsolute = true;
            }
        };

        var textAreaChanged = function() {
            var textHeight  = replyInput.scrollHeight;

            if(textHeight < 123) {
                replyInput.style.height = textHeight + 'px';
                replyParent.style.height = textHeight + 'px';
            }

            if(textHeight > 100) {
                var klass = 'UiPosOverflowAuto';

                if(replyInput.classList && !replyInput.classList.contains(klass)) {
                    replyInput.classList.add(klass);
                } else if (!replyInput.classList) {
                    replyInput.className += ' ' + klass;
                }

            } else {
                if(replyInput.classList) {
                    replyInput.classList.remove(klass);
                } else {
                    var reg = new RegExp("(\\s|^)" + klass + "(\\s|$)");
                    replyInput.className = replyInput.className.replace(reg, ' ');
                }
            }

        };
        var submitEvent = function () {
            if (headsupData.proactiveSubscribe) {
                document.getElementById('headsup-success').className += " show";
            }
            else {
                document.getElementById('headsup-success').className += " show";
                window.headsupData.reply = document.getElementById('reply-msg').value;
            }
            window.pm(window.headsupData);
            var expires = new Date(Date.now()+1000*3600).toUTCString();
            if(window.headsupData.refDoc){
                document.cookie = window.headsupData.sessionId+"_"+window.headsupData.refDoc+"=1;path=/;expires="+expires+";";
            }

            setTimeout(function() {
                d.className += " slideDowner";
            }, 2300);

            return false;
        };

        var proactiveErrorCheck = function(proactiveType) {
            // get values
            window.headsupData.firstName = document.getElementById('proScb-first').value || "";
            window.headsupData.lastName = document.getElementById('proScb-last').value || "";
            window.headsupData.email = document.getElementById('proScb-email').value || "";

            // check for errors
            var termsAndConds = document.getElementById('termsAndConditions'); // Terms & Conditions div
            var termsAndCondsDisplay = termsAndConds ? (window.getComputedStyle(termsAndConds).display) : 'none';
            var termsAndCondsBox = document.getElementById('termsAndConditionsCheckBox'); // checkbox
            var termsAndCondsAccepted = termsAndCondsBox ? (termsAndCondsBox.checked) : false;
            if(termsAndCondsDisplay !== "none" && !termsAndCondsAccepted) {
                var termsAndCondsError = true;
            }

            var firstNameThing = document.getElementById('proScb-first');
            if(window.getComputedStyle(firstNameThing).display !== "none" && window.headsupData.firstName === "") {
                var firstNameError = true;
            }
            var lastNameThing = document.getElementById('proScb-last');
            if(window.getComputedStyle(lastNameThing).display !== "none" && window.headsupData.lastName === "") {
                var lastNameError = true;
            }
            var emailRegex = /^[^@]+@.*\..*$/;
            if (!window.headsupData.email.match(emailRegex)) {
                var emailError = true;
            }
            // show errors if errors
            if (firstNameError || lastNameError || emailError || termsAndCondsError) {
                var firstNameDiv = document.getElementById('proScb-first');
                var lastNameDiv = document.getElementById('proScb-last');
                var emailDiv = document.getElementById('proScb-email');
                var termsAndCondsClassName = termsAndConds ? (termsAndConds.className) : '';

                if (firstNameError && !firstNameDiv.className.match(/invalid/)) {
                    firstNameDiv.className = firstNameDiv.className + " invalid";
                }
                else if (!firstNameError) {
                    firstNameDiv.classList.remove("invalid");
                }
                if (lastNameError && !lastNameDiv.className.match(/invalid/)) {
                    lastNameDiv.className = lastNameDiv.className + " invalid";
                }
                else if (!lastNameError) {
                    lastNameDiv.classList.remove("invalid");
                }
                if (emailError && !emailDiv.className.match(/invalid/)) {
                    emailDiv.className = emailDiv.className + " invalid";
                }
                else if (!emailError) {
                    emailDiv.classList.remove("invalid");
                }
                if (termsAndCondsError && !termsAndCondsClassName.match(/invalid/)) {
                    termsAndConds.className = termsAndCondsClassName + " invalid";
                }
                else if (!termsAndCondsError) {
                    termsAndCondsBox.classList.remove("invalid");
                }
                return;
            }
            else {
                if (proactiveType === "replyBack") {
                    window.headsupData.proactiveReplyBack = true;
                }
                else if (proactiveType === "proactiveSubscribe") {
                    window.headsupData.proactiveSubscribe = true;
                }
                submitEvent();
            }
        };

        // click event - replyBack
        var replyBack = document.getElementById('clk-roundBtn');
        replyBack.onclick = function() {
            window.headsupData.reply = document.getElementById('reply-msg').value || "";
            var replyInput = document.getElementById('reply-msg');
            if(window.headsupData.reply === "") {
                replyInput.className = replyInput.className + " invalid";
                return;
            }
            window.headsupData.replyBack = true;
            submitEvent();
        };

        // click event - proactive replyBack
        var proReplyBack = document.getElementById('headsup-reply-button');
        if (typeof(proReplyBack) !== 'undefined' && proReplyBack !== null) {
          proReplyBack.onclick = function() {
              proactiveErrorCheck('replyBack');
          };
        }

        // click event - proactive replyBack next step
        var replyBackNext = document.getElementById('replyBackNext');
        replyBackNext.onclick = function() {
            window.headsupData.reply = document.getElementById('reply-msg').value || "";
            var replyInput = document.getElementById('reply-msg');
            if(window.headsupData.reply === "") {
                replyInput.className = replyInput.className + " invalid";
                return;
            }
            var headsupWrapper = document.getElementsByClassName('ap-headsup--replyBack')[0];
            headsupWrapper.className = headsupWrapper.className.replace("ap-headsup--replyBack", "ap-headsup--replyBack--REM").replace("ap-headsup--replyBack--form--REM", "ap-headsup--replyBack--form");
            replyParent.style.display = "none";
        };

        // click event - proactive replyBack previous step
        var replyBackPrev = document.getElementById('replyBackPrev');
        replyBackPrev.onclick = function() {
            var headsupWrapper = document.getElementsByClassName('ap-headsup--replyBack--form')[0];
            headsupWrapper.className = headsupWrapper.className.replace("ap-headsup--replyBack--REM", "ap-headsup--replyBack").replace("ap-headsup--replyBack--form", "ap-headsup--replyBack--form--REM");
        };

        // click event - close
        var elClose = document.getElementById('idclose-headsup');
        elClose.onclick = function() {
            d.className = d.className + " slideDowner";
            window.pm({dismiss: true});

            var expires = new Date(Date.now()+1000*3600).toUTCString();
            if(window.headsupData.refDoc){
                document.cookie = window.headsupData.sessionId + "_" + window.headsupData.refDoc+"=1;path=/;expires="+expires+";";
            }

            setTimeout(function() {
                window.pm({close: true});
            }, 450); // 0.1sec from animation duration in css
        };

        // click event - button link
        var elCtaBtnLink = document.getElementById('headsup-button-link-cta-id');
        if(elCtaBtnLink){
            elCtaBtnLink.onclick = function() {
                d.className = d.className + " fadeOut";
                var expires = new Date(Date.now()+1000*3600).toUTCString();
                if(window.headsupData.refDoc){
                    document.cookie = window.headsupData.sessionId + "_" + window.headsupData.refDoc+"=1;path=/;expires="+expires+";";
                }
                setTimeout(function() {
                    window.pm({close: true});
                }, 450); // 0.45sec from animation duration in css
            };
        }

        // proactive cta click event
        var elCtaBtnLink = document.getElementById('proactive-headsup-cta-button-id');
        if(elCtaBtnLink){
            elCtaBtnLink.onclick = function() {
                window.pm({proactiveCTA: true});
                var expires = new Date(Date.now()+1000*3600).toUTCString();
                if(window.headsupData.refDoc){
                    document.cookie = window.headsupData.sessionId+"_"+window.headsupData.refDoc+"=1;path=/;expires="+expires+";";
                }
                setTimeout(function() {
                    d.className += " slideDowner";
                }, 2300); // 0.45sec from animation duration in css
            };
        }

        // subscribe click event - button link
        var elScbBtnLink = document.getElementById('headsup-subscribe-button-link-id');
        if(elScbBtnLink){
            elScbBtnLink.onclick = function() {
                var expires = new Date(Date.now()+1000*3600).toUTCString();
                if(window.headsupData.refDoc){
                    document.cookie = window.headsupData.sessionId+"_"+window.headsupData.refDoc+"=1;path=/;expires="+expires+";";
                }
                var successDiv = document.getElementById('headsup-success');
                document.getElementById('headsup-success').className += " show";

                setTimeout(function() {
                    d.className += " slideDowner";
                    window.pm({subscribe: true});
                }, 2300); // 0.45sec from animation duration in css

                return false;
            };
        }

        // proactive subscribe click event - button link
        var proScbBtnLink = document.getElementById('proactive-headsup-subscribe-button-id');
        if(proScbBtnLink){
            proScbBtnLink.onclick = function(evt) {
                if(evt && typeof evt.preventDefault === 'function') {
                  evt.preventDefault();
                }
                proactiveErrorCheck('proactiveSubscribe');
            };
        }

        // hover event - hover to slide up extended message
        // this handler will be executed only once when the cursor moves over the unordered list
        d.onmouseover = function() {
            if (opened) {
              return;
            }
            opened = true;
            var borderless = document.getElementsByClassName('headsup-image-borderless');
            if(borderless.length > 0){
                d_image.className = 'headsup-image-borderless';
            }
            else {
                d_image.className = 'headsup-image';
            }
            var wrap = document.getElementById("headsupwrap");
              if(wrap.classList.contains('closed')) {
                wrap.classList.remove('closed');
              }

            // Make room for the terms and conditions area if it is visible
            var totalTermsAndConditionsHeight = 0;
            var termsAndConditionsContainer = document.getElementById('termsAndConditions');
            if (window.getComputedStyle(termsAndConditionsContainer).display !== "none") {
              var elementHeight = termsAndConditionsContainer.clientHeight;
              var containerMargin = parseInt(window.getComputedStyle(termsAndConditionsContainer).marginTop, 10);

              totalTermsAndConditionsHeight = elementHeight + containerMargin;
            }
            d_content.className = 'headsup-content pullUp';
            window.pm({open: true, height: (d.clientHeight + 113 + totalTermsAndConditionsHeight + (mobileDev ? 155 : 0)) + 'px', width: '415px'});
        };
    }
};
headsup_AP_Fn.init();
