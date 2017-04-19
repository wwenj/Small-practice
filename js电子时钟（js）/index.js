
window.onload=function(){
	var aImg=document.getElementsByTagName('img');	//获取元素img当做一个集合

	setInterval(function(){
		var oDate=new Date();		//创建一个时间对象
	//创建函数对获取的时间单位数进行补0
	function toDou(n){			
		if (n<10) {
			return '0'+n;
		}else {
			return ''+n;	//即使不是单位数加个空计算时当做字符串加减
		}
	}
	var str=toDou(oDate.getHours())+toDou(oDate.getMinutes())+toDou(oDate.getSeconds());
	//链接成一个六位数的字符串str	
	for (var i =0; i <= 5; i++) {
		//循环元素集合与字符串数组一一对应，修改元素src地址属性改变显示图片
		aImg[i].src='img/'+str[i]+'.png'
		//str[i]的形式虽然简单蛋不兼容IE7一下的浏览器
		//用str.charAt(i)替换str[i]能达到一样的效果并兼容低版本
	}
	},100)

	
}




