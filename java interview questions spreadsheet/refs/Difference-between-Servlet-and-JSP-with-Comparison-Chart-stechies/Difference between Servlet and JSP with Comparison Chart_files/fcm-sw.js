var config = {
    apiKey: "AIzaSyCBCA5pe9KD2rP3m9RkjMRGCCXZcdkMcJ0",
    authDomain: "stechies-api.firebaseapp.com",
    databaseURL: "https://stechies-api.firebaseio.com",
    storageBucket: "stechies-api.appspot.com",
    messagingSenderId: "315076610700"
};
firebase.initializeApp(config);

const messaging = firebase.messaging();
messaging.requestPermission().then(function () {
    return messaging.getToken();
})
        .then(function (token) {
            save_token(token);
            token_refresh();
            // console.log(token);
        })
        .catch(function (error) {
            console.log('Error Occured : ' + error);
        })
messaging.onMessage(function (payload) {
});
function token_refresh() {
    messaging.onTokenRefresh(function () {
        messaging.getToken()
                .then(function (refreshedToken) {
                    save_refreshed_token(refreshedToken);
                })
                .catch(function (err) {
                });
    });
}
function save_token(token){
    var url = window.location.href;
    var reg_url = url.replace('https://www.stechies.com','');
    $.ajax({
        type: 'POST',
        url: "/stpush/firefox/save_fcm_id.php",
        data: {
            'reg_id' : token,
	    'reg_url' : reg_url
            },
        success: function(data){
        }
    });
}
function save_refreshed_token(token){
    var url = window.location.href;
    var reg_url = url.replace('https://www.stechies.com','');
    $.ajax({
        type: 'POST',
        url: "/stpush/firefox/save_fcm_id.php",
        data: {
            'reg_id' : token,
            'new_token':'1',
	    'reg_url' : reg_url
            },
        success: function(data){
        }
    });
}

function servicew(){
    navigator.serviceWorker.getRegistrations().then(function(registrations) {
        for(let registration of registrations){
            if(registration.scope === 'https://www.stechies.com/stpush/chrome/'){
            registration.unregister();
            }
        }
   });
}
servicew();