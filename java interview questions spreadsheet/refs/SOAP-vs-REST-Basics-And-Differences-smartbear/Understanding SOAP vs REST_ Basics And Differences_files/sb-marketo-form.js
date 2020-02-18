(function (sb) {
	var _baseUrl = location.protocol + "//" + window.location.host + "/services/trials",
	_config,
	_mktoForm,
	_onSubmitCallback,
	_downloadKey = "",
	_tInterval,
	_invalidEmail = true;

	if (typeof MktoForms2 === "undefined") {
		$("#mktoFormFallback").show(function() {
			$.ajax({
				url : _baseUrl + '/validator.aspx',
				data : {
					mktoForm : JSON.stringify({
						Product : "MarketoFormLoadError"
					})
				},
				dataType : 'jsonp'
			});		
		});
		$("#mktoFormFallback").nextAll("form").hide();		
	} else {
		MktoForms2.whenReady(function (form) {
			_mktoForm = form;

			if (typeof _config !== "undefined") {
				formProcess();
			}
		});
	}

	sb.init = function (config) {
		_config = config;

		if (typeof _mktoForm !== "undefined") {
			formProcess();
		}
	}
	
	sb.checkLead = function() {
		if (_config.checkLead) {
			$.getJSON("/services/trials/checklead.aspx/?callback=?", function(data) {
				_mktoForm.vals(data);
				
				if (typeof dataLayer !== "undefined") {
					dataLayer.push({"event": "gaEvent",
									"eventCategory": "Total Form Prepopulations",
									"eventAction": _config.marketoFormId,
									"eventLabel": window.location.href});
				}
			});
		}		
	}

	formProcess = function () {	
		if ($("#mktoForm_" + _config.marketoFormId).is(":visible")) {
			sb.checkLead();
		}

	
		if (_config.downloadKey.length > 0) {
			_downloadKey = _config.downloadKey + Math.floor(Math.random() * 999999) + Math.floor(Math.random() * 999999);
			$("input[name=Download_Key__c]").val(_downloadKey);
		}

		if (_config.restoreState) {
			var data = $.cookie('mktoForm');
			if (typeof data !== "undefined") {
				var o = JSON.parse(data);
				delete o.formid;
				_mktoForm.vals(o);
				
				$.removeCookie('mktoForm', {
					path : '/'
				});
			}
		}
		
		//kickbox onblur
		if (_config.verifyEmail && _invalidEmail) {		
			$("#Email").blur(function(){			
				$.getJSON("/services/kickbox/verify.aspx/?email=" + $(this).val() + "&callback=?", function( data ) {
					if (_config.blockEmail) {
						if (data.success) {
							_invalidEmail = false;
						} else {
							_invalidEmail = true;
							_mktoForm.showErrorMessage("Invalid Email Address", $("#Email"));
						}
					}
				});
			});
		}

		_mktoForm.onValidate(function (succeeded) {
			if (!succeeded) {
				mktoFormData = _mktoForm.getValues();
				mktoFormData.Product = _config.moduleName;

				$.ajax({
					url : _baseUrl + '/validator.aspx',
					data : {
						mktoForm : JSON.stringify(mktoFormData)
					},
					dataType : 'jsonp'
				});
			}
			
			if (succeeded && _config.verifyEmail && _invalidEmail) {
				if (_config.blockEmail) {
					_mktoForm.submittable(false);
					$(".mktoButton").attr("disabled", "disabled");		
				}
				
				$.getJSON("/services/kickbox/verify.aspx/?email=" + _mktoForm.getValues().Email + "&callback=?", function( data ) {
					if (_config.blockEmail) {
						if (data.success) {
							_invalidEmail = false;
							_mktoForm.submittable(true);
							_mktoForm.submit();
						} else {
							_mktoForm.showErrorMessage("Invalid Email Address", $("#Email"));
							$(".mktoButton").removeAttr("disabled");
						}
					}
				});
			}
		});

		_mktoForm.onSuccess(function (values, followUpUrl) {

			if (_config.storeState) {
				$.cookie('mktoForm', JSON.stringify(_mktoForm.getValues()), {
					path : '/'
				});
			}

			if (typeof dataLayer !== "undefined" && _config.gaPush !== null) {
				dataLayer.push(_config.gaPush);
			}

			if (_downloadKey.length > 0) {
				var timerId = setTimeout(thankYouRedirect, 5000);

				mktoFormData = values; //_mktoForm.getValues();
				mktoFormData.Product = _config.moduleName;
				mktoFormData.Download_Key__c = _downloadKey;

				$.ajax({
					url : _baseUrl + '/collector.aspx',
					data : {
						mktoForm : JSON.stringify(mktoFormData)
					},
					dataType : 'jsonp',
					success: function() {
						clearTimeout(timerId);
						thankYouRedirect(1);					
					}
				});
			} else {
				thankYouRedirect();
			}

			return false;
		});
	}

	thankYouRedirect = function (val) {

		var canRedirect = true;
		if (typeof _onSubmitCallback === 'function') {
			canRedirect = _onSubmitCallback(_mktoForm, _config);
			if (typeof canRedirect === "undefined")
				canRedirect = true;
		}

		if (_config.thankYouPageUrl.length > 0 && canRedirect) {
			_config.thankYouPageUrl = _config.thankYouPageUrl + "?fid="+ _config.formId;
		
			if (_downloadKey.length > 0 && _config.thankYouPageUrl.indexOf("&id=") === -1) {
				_config.thankYouPageUrl = _config.thankYouPageUrl + "&id=" + _downloadKey;
			}
			
			if (typeof val === "undefined")
				_config.thankYouPageUrl = _config.thankYouPageUrl + "&t=0";

			setTimeout(function () {
				location.href = _config.thankYouPageUrl;
			}, 500);
		}
	}

	sb.onSubmitCallback = function (fn) {
		_onSubmitCallback = fn;
	}
	
	sb.getProductName = function() {
		return _config.moduleName;
	}

}
	(window.sbMktoForm = window.sbMktoForm || {}));