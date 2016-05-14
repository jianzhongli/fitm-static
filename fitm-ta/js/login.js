function login() {
    var userid = document.getElementById("userid").value;
    var password = document.getElementById("password").value;
    if (userid.length > 0 && password.length > 0) {
        window.location.href = "overview.html"
    } else {
        Materialize.toast('请填写用户名和密码', 2000);
    }
}

function keyDown() {
    if (event.keyCode == 13) { // 回车键键盘响应
        login();
    }
}

// TODO: 利用 API 帮助重设密码
function reset_password() {

}
