(function(global) {
    var serverHost = 'https://hackr.io';
    var elements = document.querySelectorAll('.hackr-widget');
    for (var i = 0; i < elements.length; ++i) {
        var el = elements[i];
        processElement(el);
    } 

    function processElement(el) {
        var id = el.getAttribute('data-tutorial');
        var type = el.getAttribute('data-type');
        var width = '100%'
        var height = '100%'
        var processed = el.getAttribute('data-widget-processed');
        if (!id || processed === 'done') {           
            return;
        }
        
        el.style.height = '100%';
        el.style.width = '100%';
        
        var iframe = document.createElement('iframe');
        iframe.src =  serverHost + '/tutorial/' + id + '/embed/' + type;
        iframe.setAttribute('frameborder', 0);
        iframe.style.height = height;
        iframe.style.width = width;
        el.appendChild(iframe);
        el.setAttribute('data-widget-processed', 'done');
    }
}());