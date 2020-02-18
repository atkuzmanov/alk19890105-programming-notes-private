
    (function() {
        window.sumoTargets = {};
        function getSumoTargets() {
            window.sumoTargets.title = document.title;
            window.sumoTargets.category = document.querySelector('.category-name') ? document.querySelector('.category-name').innerText : '';
            window.sumoTargets.tag = document.querySelector('[data-tag-name]') ? document.querySelector('[data-tag-name]').getAttribute('data-tag-name') : '';
        }
        document.onreadystatechange = function() {
            if (document.readyState === "complete") {
                getSumoTargets()
            }
        }
        getSumoTargets()
    })()

