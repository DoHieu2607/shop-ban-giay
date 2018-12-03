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
	var stt = "false";
	var newUser = new User(username, password);
    var listUser = getArrayUser();
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
	for (var u of listUser) {
        if (equalUser(newUser, u)) { 
			window.localStorage.setItem("tenTaiKhoan",newUser.userName);
			window.location ='main_page.html';
            return false;
        }
		setArrayUser(listUser);
    }
    alert('Nhập sai tên hoặc mật khẩu !!!');
    return false;
}