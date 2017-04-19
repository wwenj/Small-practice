window.onload=function(){
	var box=document.getElementById('box');
	var oUl=document.getElementsByTagName('ul')[0];
	var button=document.getElementsByClassName('button')
	var aa=document.getElementsByClassName('')
	var speed=-4

	function move(){
		//offsetLeft相对于下一层距离左边的边距
		if (oUl.offsetLeft<-oUl.offsetWidth/2) {
			oUl.style.left='0';
		}else if(oUl.offsetLeft>0){
			oUl.style.left=-oUl.offsetWidth/2+'px'
		}
		else{
			oUl.style.left=oUl.offsetLeft+speed+'px'
		}
	}
	var timer=setInterval(move,30)
		//鼠标放上去暂停
		oUl.onmouseover=function(){
			clearInterval(timer)
		}
		oUl.onmouseout=function(){
			timer=setInterval(move,30)
		}
		button[0].onclick=function(){
			speed=-4
		}
		button[1].onclick=function(){
			speed=+4
		}
}