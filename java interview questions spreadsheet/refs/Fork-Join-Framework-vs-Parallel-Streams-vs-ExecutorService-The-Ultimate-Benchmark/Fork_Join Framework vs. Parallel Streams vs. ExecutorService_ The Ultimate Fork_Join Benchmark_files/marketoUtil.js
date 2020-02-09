// This script is hosted in: //d16f8x4wee2da2.cloudfront.net/deploy/js/marketoUtil.js (s3)
//
var MARKETO_ID = "786-BQX-986";
var LOGGED_IN_USERNAME_COOKIE = "takipiLoggedInUser";

var UTM_URL_PARAM_PREFIX = "utm_";
var MARKETO_UTM_PREFIX = "UTM_";
var MARKETO_UTM_SUFFIX = "__c";
var MARKETO_UTM_COOKIE = "MARKETO_UTM_COOKIE";

var MARKETO_CTA_COOKIE = "MARKETO_CTA_COOKIE";
var MARKETO_CTA_FIELD = "Signup_CTA__c";

var MARKETO_BLOG_SUBSCRIBER_FIELD = "blogSubscriber";
var MARKETO_BLOG_SUBSCRIBER_SOURCE_FIELD = "blogSubscriberSource";

var MARKETO_MISC_SUBSCRIBER_FIELD = "miscSubscriber";
var MARKETO_MISC_SUBSCRIBER_SOURCE_FIELD = "miscSubscriberSource";

var MARKETO_SIGNUP_FORM = "signupForm";
var MARKETO_REQUEST_FORM = "requestForm";
var MARKETO_WEBINAR_FORM = "webinarForm";
var MARKETO_EBOOK_FORM = "eBookForm";
var MARKETO_STUB_FORM = "stubForm";
var MARKETO_BLOG_SUBS_FORM = "BlogSubsForm";
var MARKETO_ONPREM_REQUEST_FORM = "onPremRequest";
var MARKETO_USER_REQUEST_ONPREM = "userRequestOnPrem";
var MARKETO_DEMO_REQUEST_FORM = "demoRequest";
var MARKETO_USER_REQUESTED_DEMO = "userRequestedDemo"
var MARKETO_DASHBOARD_DEMO_REQUEST = "dashboardDemoRequest";
var MARKETO_UNLOCK_REQUEST = "unlockRequest";
var MARKETO_DOT_NET_REQUEST = "dotNetRequest";
var MARKETO_QUOTE_REQUEST = "quoteRequest";

var MARKETO_FIELD_TO_ID_MAP = {
	"Email":"#email",
	"FirstName":"#first_name",
	"LastName":"#last_name",
	"Company":"#company",
	"Phone":"#phone_number",
	"Title":"#position",
	"quotedetails":"#quote_details",
};

var MARKETO_REPORT_URL = "https://app.overops.com/app/marketing/report/marketo";

function marketoAjax(requestObject)
{
	var xmlhttp = new XMLHttpRequest();
	xmlhttp.open(requestObject.type, requestObject.url);
	xmlhttp.send(requestObject.data);
}

// DDD - methods in this file should only be called from inside doAfterMarketoLoads block
//
mkt_accosiate_lead = function(email, firstName, lastName, company, phone, associatedLeadHash)
{
	var request = {"Email":email, "FirstName":firstName, "LastName":lastName, "Company":company, "Phone":phone};
	
	try
	{
		Munchkin.munchkinFunction('associateLead',
			request,
			associatedLeadHash);
	}
	catch (ex)
	{
		handleMarketoError(ex, request);
	}
};

mkt_track_event = function(data)
{
	try
	{
		Munchkin.munchkinFunction('visitWebPage',
			{"url": "/custom", "params": mkt_params_map_to_object(data)});
	}
	catch (ex)
	{
		handleMarketoError(ex);
	}
};

mkt_params_map_to_object = function(obj, prefix)
{
	var str = [];
	
	for (var p in obj) 
	{
		if (obj.hasOwnProperty(p))
		{
			var k = ((prefix) ? (prefix + "[" + p + "]") : p);
			var v = obj[p];
			
			if ((typeof v) == "object")
			{
				if (window.serialize)
				{
					str.push(window.serialize(v, k));
				}
				else
				{
					if (window.TakipiRavenInst)
					{
						TakipiRavenInst.captureMessage("serialize is not defined for the given values", {
							"key": k,
							"value": v.toString()
						});
					}
				}
			}
			else
			{
				str.push((encodeURIComponent(k) + "=" + encodeURIComponent(v)));
			}
		}
	}
	
	return str.join("&");
};

mkt_site_default_init = function()
{
	try
	{
		mkt_init_munchkin();
		mkt_report_UTM_attributes();
	}
	catch(e)
	{
		console.log('Error initializing marketo');
		handleMarketoError(e);
	}
};

mkt_init_munchkin = function()
{
	$.ajax({
		url: '//munchkin.marketo.net/munchkin.js',
		dataType: 'script',
		cache: true,
		success: function() {
			Munchkin.init(MARKETO_ID);
		}
	});
};

// UTM and CTA

mkt_report_UTM_attributes = function()
{
	var utmAttributes = ['Source', 'Medium', 'Campaign'];	
	var utmMarketoRequest = {};
	
	for (var i = 0; i < utmAttributes.length; i++)
	{
		var utmAttribute = utmAttributes[i];
		var urlFormattedAtrtribute = UTM_URL_PARAM_PREFIX + utmAttribute.toLowerCase();
		var utmAttributeValue = getParameterByName(urlFormattedAtrtribute);
		
		if (utmAttributeValue.length > 0)
		{
			var marketoFormattedAttribute = MARKETO_UTM_PREFIX + utmAttribute + MARKETO_UTM_SUFFIX;
			utmMarketoRequest[marketoFormattedAttribute] = utmAttributeValue;
		}
	}
	
	if (Object.keys(utmMarketoRequest).length > 0)
	{
		mkt_setCookie(MARKETO_UTM_COOKIE, JSON.stringify(utmMarketoRequest));
	}
};

mkt_report_CTA_attributes = function(singUpType, locationInPage, sourcePath)
{
	var source = mkt_getSource(sourcePath);
	
	var formattedString = source + "-" + locationInPage + "-" + singUpType;
	
	mkt_setCookie(MARKETO_CTA_COOKIE, formattedString);
};

mkt_getSource = function(sourcePath)
{
	if (sourcePath)
	{
		return sourcePath;
	}
	
	try
	{
		var locationPath = (document.location.pathname == '/') ? 'index': (document.location.pathname.split("/").join(""));
		
		return locationPath;
	}
	catch(e)
	{
		console.log('Failed to resolve page source for marketo. Path was:' + document.location.pathname);
		handleMarketoError(e);
		
		return 'unknown-source';
	}
};

// Is called when entering signup page (including stub) and when signup completes.
// If signup has no email (LOGGED_IN_USERNAME_COOKIE), the CTA and UTM cookies
// will remain until full signup is complete, and if email is present,
// the form will be sent at that point and the cookies will be deleted,
// making sure nothing happens on full signup.
//
mkt_handle_cookies = function()
{
	var loggedInUsername = $.cookie(LOGGED_IN_USERNAME_COOKIE);
	
	if (!loggedInUsername)
	{
		return;
	}
	
	mkt_handle_UTM_cookies(loggedInUsername);
	mkt_handle_CTA_cookies(loggedInUsername);
};

mkt_handle_UTM_cookies = function(username)
{
	var cookieValue = $.cookie(MARKETO_UTM_COOKIE);
	
	if (!cookieValue)
	{
		return;
	}
	
	var utmMarketoRequest;
	
	try
	{
		utmMarketoRequest = JSON.parse(cookieValue);
		
		MktoForms2.loadForm("//app-ab16.marketo.com", MARKETO_ID, 1003, function(form)
		{
			mkt_submit_form(form, utmMarketoRequest);
		});
		
		mkt_removeCookie(MARKETO_UTM_COOKIE);
	}
	catch(e)
	{
		console.log('Failed to handle UTM cookies. ' + e);
		
		utmMarketoRequest = {
			"Email": username
		};
		
		handleMarketoError(e, utmMarketoRequest);
	}
};

mkt_handle_CTA_cookies = function(username)
{
	var cookieValue = $.cookie(MARKETO_CTA_COOKIE);
	
	if (!cookieValue)
	{
		return;
	}
	
	var request = {};
	request[MARKETO_CTA_FIELD] = cookieValue;
	request["Email"] = username;
	
	try
	{
		MktoForms2.loadForm("//app-ab16.marketo.com", MARKETO_ID, 1008, function(form)
		{
			mkt_submit_form(form, request);
		});
		
		mkt_removeCookie(MARKETO_CTA_COOKIE);
	}
	catch(e)
	{
		console.log('Failed to handle CTA cookies. ' + e);
		handleMarketoError(e, request);
	}
};

// BLOG

mkt_handle_blogSubscription = function(email, source)
{
	var request = {};
	request.Email = email;
	request[MARKETO_BLOG_SUBSCRIBER_FIELD]='true';
	request[MARKETO_BLOG_SUBSCRIBER_SOURCE_FIELD]=source;
	
	var utmAttributes = ['Source', 'Medium', 'Campaign'];	
	
	for (var i = 0; i < utmAttributes.length; i++)
	{
		var utmAttribute = utmAttributes[i];
		var urlFormattedAtrtribute = UTM_URL_PARAM_PREFIX + utmAttribute.toLowerCase();
		var utmAttributeValue = getParameterByName(urlFormattedAtrtribute);
		
		if (utmAttributeValue.length > 0)
		{
			var marketoFormattedAttribute = "blogSubsriberUTM" + utmAttribute;
			request[marketoFormattedAttribute] = utmAttributeValue;
		}
	}
	
	try
	{
		MktoForms2.loadForm("//app-ab16.marketo.com", MARKETO_ID, 1003, function(form)
		{
			mkt_submit_form(form, request);
		});
	}
	catch(e)
	{
		console.log('Failed to handle blog subscription. ' + e);
		handleMarketoError(e, request);
	}
};

mkt_submit_form = function(form, request, callback)
{
	form.addHiddenFields(request);
	form.onSuccess(function()
	{
		if (callback)
		{
			callback();
		}

		return false;
	});
	
	form.submit();
};

mkt_setCookie = function(key, value)
{
	var topLevelDomain = mkt_topLevelDomain();
	
	$.cookie(key, value, {path: '/', domain: topLevelDomain, expires: 7});
};

mkt_removeCookie = function(key, value)
{
	var topLevelDomain = mkt_topLevelDomain();
	
	// We set the cookie to expire in 0 days
	$.cookie(key, '', {path: '/', domain: topLevelDomain, expires: 0});
};

mkt_topLevelDomain = function()
{
	try
	{
		var domain = window.location.hostname;
		var domainParts = domain.split('\.');
		
		if (domainParts.length > 2)
		{
			domainParts = domainParts.slice(1, domainParts.length);
		}
		
		var topLevelDomain = '.' + domainParts.join('.');
		
		return topLevelDomain;
	}
	catch(e)
	{
		return '.overops.com';
	}
};

mkt_bind_CTA_attributes = function(emailInputId, buttonId, signupType, locationInPage, path)
{
	if (!signupType)
	{
		signupType = 'stub';
	}
	
	if (!locationInPage)
	{
		locationInPage = 'main';
	}
	
	$(buttonId).click(function()
	{
		mkt_report_CTA_attributes(signupType, locationInPage, path);
		return false;
	});
	
	if (!emailInputId)
	{
		return;
	}
	
	$(emailInputId).keydown(function(event)
	{
		var keyCode = (event.keyCode ? event.keyCode : event.which);
		
		if (keyCode == 13)
		{
			mkt_report_CTA_attributes(signupType, locationInPage, path);
			return false;
		}
		
		return true;
	});
};

// MISC

mkt_report_MISC_attributes = function(request, source, formType)
{
	request[MARKETO_MISC_SUBSCRIBER_FIELD] = 'true';
	request[MARKETO_MISC_SUBSCRIBER_SOURCE_FIELD] = source;
	
	if (formType)
	{
		request[formType] = 'true';
	}
    
	if (mkt_validateEmail(request.Email))
	{	
		try
		{
			MktoForms2.loadForm("//app-ab16.marketo.com", MARKETO_ID, 1008, function(form)
			{
				mkt_submit_form(form, request);
			});
		}
		catch(e)
		{
			console.log('Failed to report misc attributes. ' + e.message);
			handleMarketoError(e, request);
		}
	}
};

mkt_bind_misc_attributes = function(buttonId, source, formType)
{
	mkt_bind_compoundForm(buttonId, function(request)
	{
		mkt_report_MISC_attributes(request, source, formType);
	});
};

mkt_report_formFill = function(fieldNames, emailButton, callback)
{
	// handles both string and array
	//
	var requestFieldNames = [].concat(fieldNames);
	
	var request = {};
	
	requestFieldNames.forEach(function(value){
		request[value] = 'true';
	});
	
	if (!emailButton)
	{
		emailButton = 'email';
	}
	
	var email = null;
	var emailElement = $(emailButton, "form");
	
	if ((emailElement) &&
		(emailElement.length > 0))
	{
		email = emailElement[0].value;
	}
	
	request.Email = email;
	
	if (mkt_validateEmail(request.Email))
	{	
		try
		{
			MktoForms2.loadForm("//app-ab16.marketo.com", MARKETO_ID, 1008, function(form)
			{
				mkt_submit_form(form, request, callback);
			});
		}
		catch(e)
		{
			console.log('Failed to report form. ' + e);
			handleMarketoError(e, request);

			if (callback)
			{
				callback();
			}
		}
	}
};

// SIMPLE FORMS

mkt_bind_formFill = function(type, buttonId, emailFieldId)
{
	$(buttonId).click(function()
	{
		mkt_report_formFill(type, emailFieldId);
		return false;
	});
};

// Utility for sending any request

mkt_report_request = function(request, callback)
{
	try
	{
		MktoForms2.loadForm("//app-ab16.marketo.com", MARKETO_ID, 1008, function(form)
		{
			mkt_submit_form(form, request, callback);
		});
	}
	catch(e)
	{
		console.log('Failed to report form. ' + e);
		handleMarketoError(e, request);

		if (callback)
		{
			callback();
		}
	}
};

// COMPOUND FORMS

mkt_createCompoundRequest = function(keysToElementIds, formTypeFlags)
{
  var request = {};
  
  for (var key in keysToElementIds)
  {
    var fields = $(keysToElementIds[key], "form");
    
    if (fields.length > 0)
    {
      var value = $(keysToElementIds[key])[0].value;
      request[key]=value;
    }
  }
  
	if (formTypeFlags)
	{
		var requestFormTypes = [].concat(formTypeFlags);
		
		requestFormTypes.forEach(function(value){
			request[value] = 'true';
		});
	}
	
	return request;
}

mkt_submitCompoundForm = function(formTypes)
{
	if ($("#email", "form").length > 0)
	{
		var email = $("#email","form")[0].value;
		
		if (mkt_validateEmail(email))
		{
			var request = mkt_createCompoundRequest(MARKETO_FIELD_TO_ID_MAP, formTypes);
			
			mkt_report_request(request);
		}
	}
};

mkt_reportCompoundRequestHelper = function(callback)
{
   if ($("#email", "form").length > 0)
    {
      var email = $("#email","form")[0].value;
      if ((email) &&
          (email.length > 0))
      {
        var request = mkt_createCompoundRequest(MARKETO_FIELD_TO_ID_MAP);
        
        $.ajax({
          type: "POST",
          url:  "https://app.overops.com/app/account/stub/validate",
          data: JSON.stringify({email:email}),
          success:function(data)
          {
            if (data.is_valid)
            {
             callback(request);
            }
            else
            {
              var emailRequest = {};
              emailRequest.Email = request.Email;
              callback(emailRequest);
            }
          }});
      }
    }
}

mkt_reportCompoundRequest = function(formType)
{
  mkt_reportCompoundRequestHelper(function(request)
  {
    request[formType] = 'true';
    mkt_report_request(request);
  });
}

mkt_bind_compoundForm = function(buttonId, callback)
{
  $(buttonId).click(function()
  {
	  // The only place we use this function is Unbounce and this check relies on the code Unbounce generates.
	  // Unbounce takes care of validating the fields in the form but since we can't add the call to Marketo to 
	  // the generated code we copied the check so Marketo won't get invalid data.
	  var $formContainer = lp.jQuery(buttonId).closest('.lp-pom-form');
	  
	  if ($formContainer)
	  {
		  var $form = $formContainer.children('form');
		  
		  if (($form) && (!$form.valid()))
		  {
			  return;
		  }
	  }
	
	  mkt_reportCompoundRequestHelper(callback);
  });
};

mkt_bindCompoundFormFill = function(formType, buttonId)
{
  mkt_bind_compoundForm(buttonId, function(request)
  {
    request[formType] = 'true';
    mkt_report_request(request);
  });
};

// UTILS

mkt_validateEmail = function(email)
{
	if (!email)
	{
		return false;
	}
	
	var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	
	return re.test(email);
}

getParameterByName = function(name)
{
	name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
	
	var regexS = "[\\?&]" + name + "=([^&#]*)";
	var regex = new RegExp(regexS);
	var results = regex.exec(window.location.search);
	
	if (results == null)
	{
		return "";
	}
	else
	{
		return decodeURIComponent(results[1].replace(/\+/g, " "));
	}
};

ravenCaptureException = function(exception)
{
	if (!window.TakipiRavenInst)
	{
		return;
	}
	
	try
	{
		TakipiRavenInst.captureException(exception);
	}
	catch(e) {}
};

reportDataToBackend = function(request)
{
	request["aPIURL"] = window.location.host + window.location.pathname;
	
	var data = convertRequestToMap(request);
	
	marketoAjax({
		type: "POST",
		url: MARKETO_REPORT_URL,
		data: JSON.stringify(data),
	});
};

convertRequestToMap = function(request)
{
	var marketoRequest = {};
	
	if (request.Email)
	{
		marketoRequest.email = request.Email;
	}

	var map = [];
	
	for (key in request)
	{
		if (key != "Email")
		{
			map.push({"key":key, "value":request[key].toString()});
		}
	}
	
	marketoRequest.data = map;
	
	return marketoRequest;
};

handleMarketoError = function(exception, request)
{
	if (request)
	{
		reportDataToBackend(request);
	}
	
	ravenCaptureException(exception);
};
