$(function () {
    $('a[href="#"]').on('click', function (ev) {
        ev.preventDefault();
    });

    $('header nav [data-toggle="follow"]').on('click', function () {
        var $this = $(this);
        var $nav = $this.closest('nav');
        $nav.find('.page-links').toggleClass('hide');
        $nav.find('.social-links').toggleClass('hide');
        $this.toggleClass('active');
    });

    $('header nav .menu-icon').on('click', function () {
        $(this).toggleClass('active');
        $('#nav-links').toggleClass('open');
    });

    $('.social-share [data-toggle="share"]').on('click', function () {
        var $this = $(this);
        var $div = $this.closest('.social-share');
        $div.find('.share-links').toggleClass('hide');
        $this.toggleClass('active');
    });

    setupHashLinks();
});

function setupHashLinks() {
    var contentBlock = document.getElementsByClassName("post")[0];
    if (contentBlock) {
        for (var level = 1; level <= 6; level++) {
            appendHashLink(level, contentBlock);
        }
    }
}

function createHashLink(id) {
    var anchor = document.createElement("a");
    anchor.className = "hash-link";
    anchor.href = "#" + id;
    anchor.innerHTML = "#";
    anchor.title = "Permalink to this section";
    return anchor;
}

function appendHashLink(level, containingElement) {
    var headers = containingElement.getElementsByTagName("h" + level);
    for (var h = 0; h < headers.length; h++) {
        var header = headers[h];
        if (typeof header.id !== "undefined" && header.id !== "") {
            var hashLink = createHashLink(header.id);
            header.appendChild(hashLink);
        }
    }
}