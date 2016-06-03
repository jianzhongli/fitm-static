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
    $('.modal-trigger').leanModal();
    $('notification-input').val('New Text');
    $('notification-input').trigger('autoresize');
}

function show_unread_notification() {
    $('#all-notification').hide();
    $('#netsecure-notification').hide();
    $('#appui-notification').hide();
    $('#unread-notification').show();
    $("#type-of-notification").children().removeClass("active");
    $("#type-of-notification").children(":first-child").addClass("active");
    $('#add-notification-btn').hide();
}

function show_all_notification() {
    $('#netsecure-notification').hide();
    $('#appui-notification').hide();
    $('#unread-notification').hide();
    $('#all-notification').show();
    $("#type-of-notification").children().removeClass("active");
    $("#type-of-notification").children(":nth-child(2)").addClass("active");
    $('#add-notification-btn').hide();
}

function show_netsecure_notification() {
    $('#all-notification').hide();
    $('#appui-notification').hide();
    $('#unread-notification').hide();
    $('#netsecure-notification').show();
    $("#type-of-notification").children().removeClass("active");
    $("#type-of-notification").children(":nth-child(3)").addClass("active");
    $('#add-notification-btn').show();
}

function show_appui_notification() {
    $('#all-notification').hide();
    $('#netsecure-notification').hide();
    $('#unread-notification').hide();
    $('#appui-notification').show();
    $("#type-of-notification").children().removeClass("active");
    $("#type-of-notification").children(":nth-child(4)").addClass("active");
    $('#add-notification-btn').show();
}

function add_notification() {
    Materialize.toast('添加成功', 4000);
}