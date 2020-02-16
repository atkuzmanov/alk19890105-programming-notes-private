function sgr() {
	var recaptcha = document.getElementsByClassName("sgr-recaptcha");
	for (var i = 0; i < recaptcha.length; i++) {
		grecaptcha.render(recaptcha.item(i), {"sitekey" : sgr_recaptcha.site_key});
	}
};