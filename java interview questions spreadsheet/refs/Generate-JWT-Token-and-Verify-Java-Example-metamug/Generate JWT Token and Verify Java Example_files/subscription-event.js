    $(document).ready(function(){
            $('#email-subscription').click(function(e){
                e.preventDefault();
                //console.log('hello');

                ga('send', {
        					hitType: 'event',
        					eventCategory: 'Email Subscription',
        					eventAction: 'Click',
        					eventLabel: 'Subscription Popup'
        				});

                if($('#email-subscription-form')[0].checkValidity()){
                  $('#email-subscription-form').submit();
                }
            });
        });
