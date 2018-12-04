var formFix = document.getElementById('form-fix');
if(formFix.attachEvent) {
    formSign.attachEvent('submit', onFormFix);
} else {
    formFix.addEventListener('submit', onFormFix);
}

function onFormFix(e)
{	
	if(e.preventDefault) e.preventDefault();
	alert("Đã cập nhật lại danh sách sản phẩm");
	window.location ='customer.html';
	return true;
}