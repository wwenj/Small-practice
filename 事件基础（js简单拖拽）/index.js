window.onload=function(){
	var box=document.getElementById('box');

	var boX=0;
	var boY=0;
	/*用client-offsetLeft算出鼠标到div边缘的距离开始动画时*/
	box.onmousedown=function(ev){
		var oEvent=ev||event;
		boX=oEvent.clientX-box.offsetLeft;
		boY=oEvent.clientY-box.offsetTop;
		document.onmousemove=function(ev){
			var oEvent=ev||event;
			box.style.left=oEvent.clientX-boX+'px';
			box.style.top=oEvent.clientY-boY+'px';
		}
		document.onmouseup=function(){
			document.onmousemove=null;
			document.onmouseup=null;
		}

	}
}