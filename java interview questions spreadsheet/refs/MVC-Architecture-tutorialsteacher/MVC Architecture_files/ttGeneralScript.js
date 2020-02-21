function stickTLMenus() {
    var hMenuHeight = $(".topMenuHorizontal").outerHeight();
    var isIE = /*@@cc_on!@@*/false || !!document.documentMode;

    if ($(this).scrollTop() >= 1) {

        var hdHeight = ($('header').outerHeight() + hMenuHeight) - $(this).scrollTop();
        if (hdHeight < hMenuHeight)
            hdHeight = hMenuHeight;
        // Internet Explorer 6-11
        if (isIE) {
            $(".topMenuHorizontal").addClass("sticky");
            $("#navbarLeft").css({ 'top': hMenuHeight });
            $(".menuVerticalParent").css({ 'padding-top': hMenuHeight });
        }
        $("#navbarLeft").css({ 'top': hdHeight });
        $(".menuVerticalParent").css({ 'padding-top': hdHeight });
    } else {

        $('.topMenuHorizontal').removeClass("sticky");

        if ($("#navbarLeft").is(':visible')) {
            $("#navbarLeft").css({ 'top': '107px' });
            $(".menuVerticalParent").css({ 'padding-top': '107px' });
        }
    }
}
function stickyAd() {

    if ($(this).scrollTop() >= 350) { //350 $("#stickyAdDiv").position().top + 80

        if (($(this).scrollTop() + $("#stickyAdDiv").height()) > $("footer").position().top) {
            $("#stickyAdDiv").removeClass("stickyad-t");
            $("#stickyAdDiv").addClass("stickyad-b");
        }
        else {
            $("#stickyAdDiv").addClass("stickyad-t");
            $('#stickyAdDiv').removeClass("stickyad-b");
        }
    }
    else if ($(this).scrollTop() < 350){
        $('#stickyAdDiv').removeClass("stickyad-t");
        $('#stickyAdDiv').removeClass("stickyad-b");

    }
}

function maintainLeftMenuPos() {
    var lmTop = $('#leftmenu').position().top,
        lmHeight = $('#leftmenu').height(),
        scrolPos = $("#leftmenu").scrollTop()
    menuItemPos = $('#leftmenu li a[class *="active"]').position().top;

    if ((menuItemPos) > (lmHeight + lmTop - 40)) {
        $("#leftmenu").scrollTop(menuItemPos - ((lmHeight + lmTop) / 2));
    }
}


function submitSubscribeForm(s) {
    $.ajax({
        type: "GET", url: s.attr("action"), data: s.serialize(), cache: !1, dataType: "jsonp", jsonp: "c", contentType: "application/json; charset=utf-8", error: function (s) { }, success: function (s) {
            if ("error" == s.result) {
                $("#successMsg").hide(), $("#failMsg").show();

                $("#failMsg").html(s.msg);
            }
            else { $("#failMsg").hide(), $("#successMsg").show(); var e = s.msg; "success" != s.result ? s.msg && s.msg.indexOf("already subscribed") >= 0 && (e = "You're already subscribed. Thank you.") : e = "Thank you for subscribing with us.", $("#successMsg").html(e) }
        }
    })
}