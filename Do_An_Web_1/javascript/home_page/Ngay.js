var s='<select name="ngay">';
for(i=1;i<=31;i++)
	s=s+'<option value='+i+'>'+i+'</option>';
	s=s+'</select>';
	console.log(s);
document.getElementById("ngay").innerHTML=s;