// JavaScript Document
<!--Ajax With jquery-->
/*
pageUrl
divToload
divNewid
formName
formMethod "POST/GET"
divLoading
divLoadingText
divAction APE/REP
*/
function ShaForm(FormName){
	comp = "document." + FormName;
	var frm = eval(comp);
	Cps = "";
	for (i=0; i<frm.length; i++){
		Cps = Cps + frm.elements[i].name + "=" + encodeURIComponent(frm.elements[i].value) + "&";
	}
	Cps = Cps.substring(0,Cps.length -1);
	return Cps;
}

function ShaAjaxJquary(pageUrl, divToload, divNewid, formName, formMethod, divLoading, divLoadingText, divAction){

	if(divLoading){
		jQuery(divLoading).show(400).html(divLoadingText);
	}
	if(formName){
		var dataString = ShaForm(formName);
	}
     jQuery.ajax({
        type: formMethod,
        url: pageUrl,
		cache: false,
		data: dataString,
        success: function(data) {
			if(divAction == "REP"){
				jQuery(divToload).hide();
				jQuery(divToload).html(data);
				jQuery(divToload).show("slow");
			}else{
				jQuery(divToload).append(data);
				jQuery(divNewid).hide();
				jQuery(divNewid).show("slow");
			}
		if(divLoading){
			if(divLoading!=divToload){
				jQuery(divLoading).hide("slow");
			}
	 	}
		}
     });
	 
}

function ShaAjaxJquary1(pageUrl, divToload, divNewid, formName, formMethod, divLoading, divLoadingText, divAction){
	// alert(divNewid);
	if(divLoading){
		jQuery(divLoading).show(400).html(divLoadingText);
	}
	if(formName){
		var dataString = ShaForm(formName);
	}
     jQuery.ajax({
        type: formMethod,
        url: pageUrl,
		cache: false,
		data: dataString,
        success: function(data) {
			if(divAction == "REP"){
				jQuery(divToload).hide();
				jQuery(divToload).html(data);
				jQuery(divToload).show("slow");
			}else{
				//alert(data);
				jQuery(divToload).append(data);
				jQuery(divNewid).hide();
				//jQuery(divNewid).show("slow");
			}
		// if(divLoading){
		// 	if(divLoading!=divToload){
		// 		jQuery(divLoading).hide("slow");
		// 	}
	 // 	}
		}
     });
	 
}

<!--Ajax With jquery END-->