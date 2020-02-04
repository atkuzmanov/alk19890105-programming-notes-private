/**
 * Wrapper function to safely use $
 */
function wpaiWrapper($) {
    var wpai = {

        /**
         * Main entry point
         */
        init: function () {

            wpai.findAds();
        },        

        
        findAds: function () {
        	var res_array = [];
        	wpai.getCommentsFromEl($('body'),res_array);
            $(res_array).each(	
            		function(x, e) {

            		arr = JSON.parse(e.nodeValue.substr(5));
            		
            		var i = 0;
            		inserted = $(arr.ads[i]);
            		inserted.insertAfter($(e));
            		
            		if (arr.ads.length > 1 && arr.rot_dur[i]>0){
            			wpai.rotate(e, arr,i,inserted);
            		}
            });
        },
        
        getCommentsFromEl : function (el, res_array) {
        	var result;
    		$el = $(el).contents();
    		result = $el.filter(function () {
    				return this.nodeType == 8;
    			});
    		
    		 $(result).each(function(x,e){
    		 	if (e.nodeValue.substr(0,5).trim()==='WPAI'){
    				res_array.push(e);
    		 	}
    		});
    		
    		var result2 = $el.filter(function () {
				return this.nodeType == 1; //only elements
			});
    		
    		$(result2).each(function(x,e){
    			wpai.getCommentsFromEl (e, res_array);
    		});
    		
    	},
        
    	rotate: function (e, arr, i, inserted){

        	var newi = (i+1) % arr.ads.length;
        	setTimeout(function(){
        		arr.ads[newi] = arr.ads[newi].replace('#wpai-endc','-->');
        		newinserted = $(arr.ads[newi]);
        		
        		inserted.detach();
        		newinserted.insertAfter($(e));
        		
				wpai.rotate(e, arr, newi,newinserted);
			}, arr.rot_dur[i]*1000);
        }
    }; 
    $(document).ready(wpai.init);
} 

wpaiWrapper(jQuery);
