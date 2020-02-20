var vmConsentCookieFinder = (function() {

    var CONSENT_COOKIES = ['euconsent', '_evidon_consent_cookie', 'oil_data'];

    function readCookie(cookieString, name) {
        var nameEQ = name + '=';
        var ca = (cookieString || '').split(';');
        for(var i=0; i < ca.length; i++) {
            var c = ca[i];
            while (c.charAt(0) === ' ') {
                c = c.substring(1,c.length);
            }
            if (c.indexOf(nameEQ) === 0) {
                return c.substring(nameEQ.length,c.length);
            }
        }
    }

    function findConsentCookie (cookieString) {

        try {
            for (var consentCookieIdx = 0; consentCookieIdx < CONSENT_COOKIES.length; consentCookieIdx++) {

                var cookieValue = readCookie(cookieString, CONSENT_COOKIES[consentCookieIdx]);
                if (cookieValue) {
                    return {
                        consentStr: cookieValue,
                        consentType: CONSENT_COOKIES[consentCookieIdx]
                    };
                }
            }
        } catch(error) {}
    }

    return {
        readCookie: readCookie,
        findConsentCookie: findConsentCookie
    };
}());

// Export for unit tests
if (typeof module !== 'undefined' && module.exports != null) {
    module.exports = vmConsentCookieFinder;
};
/**
 * Reload the go service with the consent parameter
 */
!function () {
    var consentObj  = vmConsentCookieFinder.findConsentCookie(document.cookie);
    var consentStr  = consentObj ? consentObj.consentStr : '';
    var consentType = consentObj ? consentObj.consentType : '';

    var s = document.createElement('script');

    var isBaseUrl = function (url) {
        url = url.substring(url.indexOf('://') + 3);
        var nextSlash = url.indexOf('/');
        return (nextSlash === -1) || (nextSlash === (url.length - 1));
    };

    var r = document.referrer || '';

    if ((window.self === window.top) && (!r || (r.substr(0, 4) !== 'http') || isBaseUrl(r))) {
        r = document.URL;
    }

    r = encodeURIComponent(r);

    s.src = '//k.intellitxt.com/go/1/?ipid=88514&consentstr=' + consentStr + '&consenttype=' + consentType + '&referer=' + r;

    var head = document.getElementsByTagName('head')[0];
    head.appendChild(s);

    if (consentObj) {
        console.log('VM: ReloadGo with consentStr: <' + consentObj.consentStr + '>' +
            ' consentType: <' + consentObj.consentType + '>');
    } else {
        console.log('VM: ReloadGo - Consent cookie not found');
    }
}();


