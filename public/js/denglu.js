var om=document.getElementsByClassName("m3");
var ort=document.getElementsByClassName("rt")[0];
var oli=ort.getElementsByTagName("li");
for(let i=0;i<oli.length;i++){
	oli[i].onclick=function(){
		oli[0].className="";
		oli[1].className="";
		oli[i].className="active";
		om[0].style.display="none";
		om[1].style.display="none";
		om[i].style.display="block";
	}
}


$("#login").click(function () {
	$.ajax({
		url:"/user/login",
		data:{
			"username":$("#username").val(),
			"password":$("#password").val()
		},
		type:"POST",
		success:function (data) {
			if(data["msg"] == 0){
				alert("登录成功！");
				//location.assign("index.html");
			}else{
                alert("用户名或密码不正确！")
			}
        }
	});
})
