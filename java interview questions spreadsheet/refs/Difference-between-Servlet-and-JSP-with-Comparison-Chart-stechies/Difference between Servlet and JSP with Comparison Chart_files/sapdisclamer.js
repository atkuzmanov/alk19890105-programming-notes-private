$('#fotterCont').html('<p>All the site contents are Copyright &copy; www.stechies.com and the content authors. All rights reserved. All product names are trademarks of their respective companies. The site www.stechies.com is in no way affiliated with SAP AG. Every effort is made to ensure the content integrity. Information used on this site is at your own risk. The content on this site may not be reproduced or redistributed without the express written permission of www.stechies.com or the content authors.</p>');

$('#cookie_div').html('<div id="cookie-law-info-bar" style="background-color: rgb(81, 90, 90);color: rgb(255, 255, 255);font-family: inherit;bottom: 0px;position: fixed;display: block;"><span>This website uses cookies to improve your experience. We hope that you are ok with this, but you can opt-out if you wish.<a id="cookie_action_close_header" class="medium" style="display: inline-block; color: rgb(255, 255, 255); background-color: rgb(0, 0, 0);margin-left:2px;margin-right:2px;">Accept</a>  Read <a href="/cookies-policy.php" id="" target="_blank" class="cli-plugin-main-link" style="display: inline-block; color: rgb(255, 255, 255);text-decoration:underline">Cookies Policy</a></span></div>');

$('#cookie_action_close_header').on('click',function () {
	$.ajax({
		url:'/new/include/set_cookie.php',
		success: function(){
			$('#cookie-law-info-bar').css("display","none");
		},
	});
});
