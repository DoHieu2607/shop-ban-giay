var s='<select name="thang">';
for(i=1;i<=12;i++)
	s=s+'<option value='+i+'>'+i+'</option>';
	s=s+'</select>';
	console.log(s);
document.getElementById("thang").innerHTML=s;