//JQ写法
//$(function(){
//	$("a").click(function(){
//		//判断如果最后一个a的parent()已出现则本次点击为最后一次点击，遮罩层消失
//		if($("a").last().parent().css('display')=='block'){
//			$("#mask").css('display','none');		//遮罩消失
//			$(this).parent().css('display','none');		//最后a的parent()消失
//		}else{
//			//点击本身parent消失下一个出现
//			$(this).parent().css('display','none').next().css('display','block');
//		}	
//	});
//})

//原生js写法
window.onload=function(){
	var step=document.getElementsByClassName('step');
	var stepA=document.getElementsByTagName('a');
	var mask=document.getElementById('mask');
	var cookie=document.cookie;
	
	
	if(cookie!=='name=true'){	//当网页中没有cookie时执行
		
	step[0].style.display='block';
	mask.style.display='block';
//PS:在原生js中获取的如果是集合的话，用这个变量时必须写上索引[0],否则变量无用

//循环下相当于5个stepA[0-4]写法并列，i是数值是动态的不确定
//如果想获取用到当前操作的元素的索引，就只能给当前元素集合添加属性=i
for (var i=0;i<stepA.length;i++) {
		stepA[i].index=i;			
		stepA[i].onclick=function(){
			this.parentNode.style.display='none';
			if(this.index<4){		//前4个时点击下一个出现
				step[this.index+1].style.display='block';
			}else if(this.index==4){	//最后一个点击时遮罩消失
				mask.style.display='none';
			}
		}
	}

}
	//添加cookie
	var oDate=new Date();
	oDate.setDate(oDate.getDate()+30)	//获取当前日期并加30天
	document.cookie="name=true;expires="+oDate	//expires设置到期时间
}
