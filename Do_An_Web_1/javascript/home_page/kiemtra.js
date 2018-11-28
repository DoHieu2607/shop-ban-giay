var t = document.getElementById('name');
var ph = document.getElementById('sdt');
var em = document.getElementById('thu');
var login = document.getElementById('lg');
var p = document.getElementById('pass');
var rp = document.getElementById('repass');
var formSign = document.getElementById('sign');

if(formSign.attachEvent) {
    formSign.attachEvent('submit', onFormSign);
} else {
    formSign.addEventListener('submit', onFormSign);
}

function onFormSign(e)
{	

	if(e.preventDefault) e.preventDefault();
	var Ten = t.value;
	var Sodt = ph.value;
	var Thu = em.value;
	var Tentaikhoan = login.value;
	var Matkhau = p.value;
	var Mk = rp.value;
	window.localStorage.setItem("UserName",Tentaikhoan);
	window.localStorage.setItem("UserPassword",Matkhau);
	if(Ten == "")
	{
		alert("Hãy nhập tên của bạn!");
		document.FormDk.Name.focus();
		return false;
	}
	else
	{
		if(Sodt == "")
		{
			alert("Hãy nhập số điện thoại của bạn!");
			document.FormDk.Phone.focus();
			return false;
		}
		else
		{
			if(Sodt.length < 10 || Sodt.length >11)
			{
				document.getElementById('ph').innerHTML = "Số điện thoại chưa đúng";
				return false;
			}
			else
			{	document.getElementById('ph').innerHTML = "";
				if(Thu == "")
				{
					alert("Hãy nhập email của bạn!");
					document.FormDk.Email.focus();
					return false;
				}
				else{
					if(Tentaikhoan=="")
					{
						alert("Hãy nhập id của bạn!");
						document.FormDk.Login.focus();
						return false;
					}
					else
					{
						if(Matkhau == "")
						{
							alert("Hãy nhập mật khẩu của bạn!");
							document.FormDk.Pass.focus();
							return false;
						}
						else
						{
							if(Matkhau.length < 6)
							{document.getElementById('p').innerHTML = "Mật khẩu cần 6 ký tự";
							return false;
							}
							else {document.getElementById('p').innerHTML = "";
								if(Mk == "")
								{
									alert("Hãy nhập lại mật khẩu của bạn!");
									document.FormDk.Repass.focus();
									return false;
								}
								else
								{
									if(Mk != Matkhau)
									{
										document.getElementById('rp').innerHTML = "Chưa khớp !!!";
										return false;
									}
									else{
										document.getElementById('p').innerHTML = "";
										window.location ='home_page.html';
									}
								}
							}
						}
					}
				}
				
			}
		}
	}
}
