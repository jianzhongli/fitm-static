function hide_parent(item) {
    item.parentNode.setAttribute("class", "hide");
}

function paginate(index) {
    if (curPage == index || index < 1 || index > 5)   return;
    curPage = index;
    for (var i = 1; i <= 5; i++) {
        var coll = "coll-" + i;
        var pagin = "pagin-" + i;
        if (i == index) {
            document.getElementById(coll).setAttribute("class", "collection");
            document.getElementById(pagin).setAttribute("class", "active disabled");
        } else {
            document.getElementById(coll).setAttribute("class", "collection hide");
            document.getElementById(pagin).setAttribute("class", "waves-effect");
        }
    }
    if (curPage > 1) {
        document.getElementById("pagin-up").setAttribute("class", "waves-effect");
    } else {
        document.getElementById("pagin-up").setAttribute("class", "disabled");
    }
    if (curPage < 5) {
        document.getElementById("pagin-down").setAttribute("class", "waves-effect");
    } else {
        document.getElementById("pagin-down").setAttribute("class", "disabled");
    }
}

window.onload = function() {
    show_unread_notification();
    window.curPage = 1;
}

function show_unread_notification() {
    $('#all-notification').hide();
    $('#unread-notification').show();
    $("#type-of-notification").children().removeClass("active");
    $("#type-of-notification").children(":first-child").addClass("active");
}

function show_all_notification() {
    $('#unread-notification').hide();
    $('#all-notification').show();
    $("#type-of-notification").children().removeClass("active");
    $("#type-of-notification").children(":nth-child(2)").addClass("active");
}