var ochang=document.getElementsByClassName("chang");
var ozc=document.getElementsByClassName("zc");
var oinput=document.getElementsByTagName("input");
var ozc=document.getElementsByClassName("zc");
var ocw=document.getElementsByClassName("cw");


var x="";
for(var i=0;i<4;i++){
	var x1=Math.random()*4;
	if(x1<1){
		x+=String.fromCharCode(Math.floor(Math.random()*10+48));
	}else{
		x+=String.fromCharCode(Math.floor(Math.random()*26+65));
	}
}
$("i").last().html(x);
$("input").focus(function(){
	$(this).siblings(".zc").css({"display":"block"});
	$(this).siblings(".cw").css({"display":"none"});
});
$("input").blur(function(){
	$(this).siblings(".zc").css({"display":"none"});
});
var pat = [];
pat[0]= /^1[3|4|5|8][0-9]\d{8}$/; // 手机号码13,14,15,18开头十一位
pat[1]=x;
pat[2]=/^[a-zA-z][a-zA-Z0-9_\-]{5,19}$/;
pat[3]=pat[2];
pat[4]=/^[0-9]{4}$/;
for(let i=0 ;i<oinput.length;i++){
	oinput[i].onblur=foo=function(){
		switch(i){
			case 0:
				if(!pat[0].test(oinput[0].value)){
					ocw[0].style.display="block";	
				}else{ocw[0].style.display="none";}break;
			case 1:
				if((oinput[1].value).toUpperCase()!=x){
					ocw[1].style.display="block";
				}
				else{ocw[1].style.display="none";}break;
			case 2:
				if(oinput[2].value.length>20||oinput[2].value.length<6){
					ocw[2].style.display="block";	
				}else{ocw[2].style.display="none";}
			case 3:
				if(oinput[3].value!=oinput[2].value){
					ocw[3].style.display="block";
				}
				else{ocw[3].style.display="none";}break;
			case 4:
				if(!pat[4].test(oinput[4].value)){
					ocw[4].style.display="block";	
				}else{ocw[4].style.display="none";}break;
		}		
    }
	oinput[6].onclick=function(){
		if(!oinput[6].checked){
			ocw[5].style.display="block";	
			}else{ocw[5].style.display="none";}
	}
	oinput[7].onclick=function(){
		var flag=1;
		if(!pat[0].test(oinput[0].value)){
			ocw[0].style.display="block";flag=0;
		}else{ocw[0].style.display="none";}
	
		if(oinput[2].value.length>20||oinput[2].value.length<6){
			ocw[2].style.display="block";flag=0;	
		}else{ocw[2].style.display="none";}
	
		if(oinput[3].value!=oinput[2].value){
			ocw[3].style.display="block";flag=0;
		}else{ocw[3].style.display="none";}
	
		if(!pat[4].test(oinput[4].value)){
			ocw[4].style.display="block";flag=0;	
		}else{ocw[4].style.display="none";}
		
		if(!oinput[6].checked){
			ocw[5].style.display="block";flag=0;	
		}else{ocw[5].style.display="none";}
		
		if(flag){
			//window.location.href="https://www.baidu.com/?tn=93380420_hao_pg";
			$.ajax({
				url:"/user/reg",
				data:{
					"username":$("#username").val(),
					"password":$("#password").val(),
				},
				type:"POST",
				success:function (data) {
					if(data["msg"] == 0){
						alert("注册成功！")
					}else if(data["msg"] == 1){
                        alert("用户名已被注册！")
					}else{
                        alert("未知错误！！")
					}
                }
			});
		}
	}
}




