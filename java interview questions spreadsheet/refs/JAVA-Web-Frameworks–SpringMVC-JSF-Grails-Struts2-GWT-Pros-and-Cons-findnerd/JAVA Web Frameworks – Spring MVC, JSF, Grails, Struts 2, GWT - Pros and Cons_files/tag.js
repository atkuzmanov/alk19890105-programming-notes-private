  $().ready(function() {		
		
		var data1 = [{value: "0", name: "No Tag"}];
		if($("#node_id").val()){
			var url = "/content/getNodeTagsById/"
			params = {node_id : $("#node_id").val()};	
		
			$.ajax({type:"POST",url:url,data:params,success:function(res){				
				if(res){
				$("#node_tag input[type=text]").autoSuggest(baseurl+"/content/getTagsName", {asHtmlID: "tag",minChars: 2, matchCase: false,startText : "Enter Tags Name",selectedItemProp: "name", searchObjProps: "name",limitText:5,queryParam:"tag",preFill: res});
				}else{
					$("#node_tag input[type=text]").autoSuggest(baseurl+"/content/getTagsName", {asHtmlID: "tag",minChars: 2, matchCase: false,startText : "Enter Tags Name",selectedItemProp: "name", searchObjProps: "name",limitText:5,queryParam:"tag",preFill: data1});
				}   
			}});
		}else{
			$("#node_tag input[type=text]").autoSuggest(baseurl+"/content/getTagsName", {asHtmlID: "tag",minChars: 2, matchCase: false,startText : "Enter Tags Name",selectedItemProp: "name", searchObjProps: "name",limitText:5,queryParam:"tag"});
		
		}
				
  });