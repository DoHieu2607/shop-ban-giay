var inputUsername = document.getElementById('username');
var inputPassword = document.getElementById('password');

var formLogin = document.getElementById('form-login');
if(formLogin.attachEvent) {
    formLogin.attachEvent('submit', onFormSubmit);
} else {
    formLogin.addEventListener('submit', onFormSubmit);
}


function onFormSubmit(e) {
	
    if(e.preventDefault) e.preventDefault();
	 var username = inputUsername.value;
    var password = inputPassword.value;
	var CORRECT_USER = window.localStorage.getItem("UserName");
	var CORRECT_PASS = window.localStorage.getItem("UserPassword");
	if(username == "")
	{
		alert("Hãy nhập tên tài khoản");
		document.form-login.tenDn;
		return false;
	}
	else if(password =="")
	{
		alert("Hãy nhập mật khẩu");
		document.form-login.mk;
		return false;
	}
    if(username == CORRECT_USER && password == CORRECT_PASS) {
        window.location = 'main_page.html';
    } else {
  		alert("tên đăng nhập hoặc mật khẩu không đúng");
    }
    return false;
}