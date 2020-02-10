// Assign current date to variable //
var currentDate = new Date();

// Create some DOM elements
var newCookiesWarningDiv = document.createElement("div");

// Retrieving cookie's information
function checkCookie(cookieName) {
  "use strict";
  var cookieValue, cookieStartsAt, cookieEndsAt;

  // Get all cookies in one string
  cookieValue = document.cookie;
  // Check if cookie's name is within that string
  cookieStartsAt = cookieValue.indexOf(" " + cookieName + "=");
  if (cookieStartsAt === -1) {
    cookieStartsAt = cookieValue.indexOf(cookieName + "=");
  }
  if (cookieStartsAt === -1) {
    cookieValue = null;
  } else {
    cookieStartsAt = cookieValue.indexOf("=", cookieStartsAt) + 1;
    cookieEndsAt = cookieValue.indexOf(";", cookieStartsAt);

    if (cookieEndsAt === -1) {
      cookieEndsAt = cookieValue.length;
    }

    // Get and return cookie's value
    cookieValue = unescape(cookieValue.substring(cookieStartsAt, cookieEndsAt));
    return cookieValue;
  }
}

// Cookie setup function
function setCookie(cookieName, cookieValue, cookiePath, cookieExpires) {
  "use strict";

  // Convert characters that are not text or numbers into hexadecimal equivalent of their value in the Latin-1 character set
  cookieValue = escape(cookieValue);

  // If cookie's expire date is not set
  if (cookieExpires === "") {
    // Default expire date is set to 6 after the current date
    currentDate.setMonth(currentDate.getMonth() + 6);
    // Convert a date to a string, according to universal time (same as GMT)
    cookieExpires = currentDate.toUTCString();
  }

  // If cookie's path value has been passed
  if (cookiePath !== "") {
    cookiePath = ";path = " + cookiePath;
  }

  // Add cookie to visitors computer
  document.cookie = cookieName + "=" + cookieValue + ";expires = " + cookieExpires + cookiePath;

  // Call function to get cookie's information
  checkCookie(cookieName);
}

// Check if cookies are allowed by browser //
function checkCookiesEnabled() {
  "use strict";
  // Try to set temporary cookie
  setCookie("TestCookieExist", "Exist", "", "");
  // If temporary cookie has been set, delete it and return true
  if (checkCookie("TestCookieExist") === "Exist") {
    setCookie("TestCookieExist", "Exist", "", "1 Jan 2000 00:00:00");
    return true;
  // If temporary cookie hasn't been set, return false  
  }
  if (checkCookie("TestCookieExist") !== "Exist") {
    return false;
  }
}

// Add HTML form to the website   
function acceptCookies() {
  "use strict";

  document.getElementById("cookiesWarning").appendChild(newCookiesWarningDiv).setAttribute("id", "cookiesWarningActive");
  document.getElementById("cookiesWarningActive").setAttribute("class", "row vertical-align");
  document.getElementById("cookiesWarningActive").setAttribute("style", "min-height: 100%; vertical-align: middle");
  document.getElementById("cookiesWarningActive").innerHTML = "<div class='contCookie'><div class='emptySpace1'></div><div class='cookieTxt'><span id='text'><p>This website uses cookies. By continuing to use this site and/or clicking the &quot;Accept&quot; button you are providing&nbsp;consent</p></span><br><span id='text'><p>Quest Software and its affiliates do NOT sell the Personal Data you provide to us either when you register on our websites or when you do business with us. For more information about our <a target='_blank' rel='nofollow' class='cookiesLink' href='https://www.quest.com/legal/privacy.aspx'>Privacy Policy</a> and our data protection efforts, please visit <a target='_blank' rel='nofollow' class='cookiesLink' href='https://www.quest.com/legal/gdpr-hq.aspx'>GDPR-HQ</a></p></span><form name='cookieAgreement'><input type='checkbox' name='agreed' value='Agreed' checked style='display: none'/><span class='acceptance'></span></div><div class='cookieBtn'><input type='submit' value='Accept' onclick='getAgreementValue(); return false;' id='cookiesOK' class='acceptButton'></form></div><div class='emptySpace2'></div></div>";
}

function acceptCookiesTickBoxWarning() {
  "use strict";

  setCookie("TestCookie", "Yes", "", "1 Jan 2000 00:00:00");
  document.getElementById("cookiesWarning").appendChild(newCookiesWarningDiv).setAttribute("id", "cookiesWarningActive");
}

// Check if cookie has been set before //
function checkCookieExist() {
  "use strict";
  // Call function to check if cookies are enabled in browser
  if (checkCookiesEnabled()) {                                          
    // If cookies enabled, check if our cookie has been set before and if yes, leave HTML block empty
    if (checkCookie("TestCookie") === "Yes") {
      document.getElementById("cookiesWarning").innerHTML = "";
    // If our cookie hasn't been set before, call cookies' agreement form to HTML block 
    } else {
      acceptCookies();
    }
  } else {
    // Display warning if cookies are disabled on browser
    document.getElementById("cookiesWarning").appendChild(newCookiesWarningDiv).setAttribute("id", "cookiesWarningActive");
    document.getElementById("cookiesWarningActive").innerHTML = "<span id='cookiesDisabled'><strong>Cookies are disabled. We use cookies to give you the best online experience.</strong><br /> Your browser currently not accepting cookies.</span>";
  }
}

// Get agreement results
function getAgreementValue() {
  "use strict";

    document.getElementById("cookiesWarning").innerHTML = "";
    setCookie("TestCookie", "Yes", "", "");
}