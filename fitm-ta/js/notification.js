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
    $('#notification-title').html("添加网络安全课程通知");
    window.currentTag = "网络安全";
}

function show_appui_notification() {
    $('#all-notification').hide();
    $('#netsecure-notification').hide();
    $('#unread-notification').hide();
    $('#appui-notification').show();
    $("#type-of-notification").children().removeClass("active");
    $("#type-of-notification").children(":nth-child(4)").addClass("active");
    $('#add-notification-btn').show();
    $('#notification-title').html("添加移动交互设计课程通知");
    window.currentTag = "移动交互设计";
}

function get_current_time() {
    var currentDate = new Date();
    var dateString = currentDate.getFullYear() + "年" 
                   + (currentDate.getMonth() + 1) + "月" 
                   + currentDate.getDate() + "日";
    return dateString;
}

function add_notification() {
    if (!$('#notification-input').val().trim()) {
        Materialize.toast('请输入通知内容', 2000);
        return;
    }
    var newTag = "<li class=\"collection-item\">"
               +     "<button class=\"waves-effect waves-light btn right\" onclick=\"hide_parent(this)\">已阅</button>"
               +     "<h6>" + get_current_time() + "</h6>"
               +     "<p>" + $('#notification-input').val().trim() + "</p>"
               +     "<h6 class=\"right-align\">From: " + window.currentTag + " 黎建忠 TA</h6>"
               + "</li>";
    $('#unread-notification ul.collection').prepend(newTag);
    newTag = "<li class=\"collection-item\">"
           +     "<h6>" + get_current_time() + "</h6>"
           +     "<p>" + $('#notification-input').val().trim() + "</p>"
           +     "<h6 class=\"right-align\">From: " + window.currentTag + " 黎建忠 TA</h6>"
           + "</li>";
    $('#all-notification ul.collection#coll-1').children(":last").remove();
    // $('#all-notification').find("ul.collection")[0].prepend(newTag);
    $('#all-notification ul.collection#coll-1').prepend(newTag);

    if (window.currentTag == "网络安全") {
        $('#netsecure-notification ul.collection').prepend(newTag);
    } else if (window.currentTag == "移动交互设计") {
        $('#appui-notification ul.collection').prepend(newTag);
    }
    Materialize.toast('添加成功', 2000);
    $('#notification-input').val("");
}