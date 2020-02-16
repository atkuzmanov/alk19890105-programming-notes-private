
// Topic
function OnToggleTopicComplete(result) {
    if (!result["alertMessage"])  // test for null, undefined, and false
        $get(result["toggleImage"]).src = result["toggleImageValue"];
    else
        alert(result["alertMessage"]);
}

// Post
function OnTogglePostComplete(result) {
    if (!result["alertMessage"])
        $get(result["toggleImage"]).src = result["toggleImageValue"];
    else
        alert(result["alertMessage"]);
}

// User
function OnToggleUserComplete(result) {
    if (!result["alertMessage"])
        $get(result["toggleImage"]).src = result["toggleImageValue"];
    else
        alert(result["alertMessage"]);
}

// Answer

function OnAnswerComplete(result) {
    if (!result["alertMessage"])
        $get(result["toggleImage"]).src = result["toggleImageValue"];
    else
        alert(result["alertMessage"]);
}

// Comments

function OnCommentComplete(result) {
    if (!result["alertMessage"]) {
        $get(result["panelAddComment"]).style.display = 'block';
        $get(result["panelEditComment"]).style.display = 'none';
        $get(result["labelComments"]).innerHTML = result["html"];
    }
    else
        alert(result["alertMessage"]);
}

function ConfirmDeleteComment(id, thing, thingId, label) {
    if (!confirm('Are you sure you want to delete your comment?')) return false;
    DoFactory.DoFactoryWebService.DeleteComment(id, thing, thingId, label, OnCommentDeleteComplete);
}

function OnCommentDeleteComplete(result) {
    $get(result["labelComments"]).innerHTML = result["html"];
}

function OnReviewComplete(result) {
    if (!result["alertMessage"]) {
        $get(result["labelThanks"]).innerHTML = 'Thanks'; // display yes
        $get(result["hyperlinkUpVote"]).style.display = 'none'; // display no
        $get(result["hyperlinkDownVote"]).style.display = 'none'; // display no
        $get(result["labelResult"]).innerHTML = result["labelResultText"]; // result
    }
    else
        alert(result["alertMessage"]);

}

function OpenWindow(url) {
    window.open(url, 'ref' + Math.floor(Math.random() * 100));
}

// This is used

$("#showhide").on('click', function () {

    // don't touch code..
    var d = $("#showhidediv");
    if (d.is(':visible')) {
        d.slideToggle();
        $(this).text("Show Question");
    } else {
        d.slideToggle();
        $(this).text("Hide Question");
    }
});

var Dofactory = {
    namespace: function (name) {
        var parts = name.split(".");
        var ns = this;

        for (var i = 0, len = parts.length; i < len; i++) {
            ns[parts[i]] = ns[parts[i]] || {};
            ns = ns[parts[i]];
        }

        return ns;
    }
};

// Template

Dofactory.namespace("Local").DoIt = (function () {

    var start = function () {
    };

    return { start: start };

})();

Dofactory.namespace("Utils").Alert = (function () {

    var start = function () {

        var delay = $("#alert-delay").val();
        if (!delay) delay = 3500;

        $("#alert-success, #alert-failure").fadeIn(500).delay(delay).fadeOut(1000, function () {
            $(this).remove();
        });

        $("#alert-info").fadeIn(500).delay(6500).fadeOut(1000, function () {
            $(this).remove();
        });
    };

    return { start: start };

})();

Dofactory.namespace("Utils").ScrollToTop = (function () {

    var start = function () {

        setInterval(function () {
            $('#scrollLeft').css("left", "30px");
            $('#scrollRight').css("right", "30px");

        }, 1500);


        $(window).scroll(function () {
            if ($(this).scrollTop() > 800) {
                $('.scrollToTop').fadeIn();
            } else {
                $('.scrollToTop').fadeOut();
            }
        });

        $('.scrollToTop').click(function (e) {
            $('html, body').animate({ scrollTop: 0 }, 800, 'swing');
            return false;
        });


    };

    return { start: start };

})();

Dofactory.namespace("Utils").ScrollToTarget = (function () {

    var start = function () {

        $('.scrollToTarget').click(function (e) {
            e.preventDefault();

            $('html, body').animate({
                scrollTop: $('[name="' + $.attr(this, 'href').substr(1) + '"]').offset().top
            }, 800, 'swing');

            return false;
        });


    };

    return { start: start };

})();


$(function () {

    // top failure and success messages
    Dofactory.Utils.Alert.start();

    prettyPrint();

    // handles menus along the top
    //Stay4free.Utils.Menus.start();

});




