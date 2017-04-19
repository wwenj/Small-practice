window.onload=function(){
	// var inp=document.getElementsByTagName('input')[0];
	var oText=document.getElementById('oText');
	var box=document.getElementById('box');
	var inp=document.getElementById('inp');

	inp.onclick=function(){
		var oLi=document.createElement('li');
		oLi.innerHTML=oText.value;
		oText.value="";
		if (box.children.length>0) {
			box.insertBefore(oLi,box.children[0])
		 }else{
		 	box.appendChild(oLi);
		 }
		//运动
		var height=oLi.offsetHeight		//获取新添加的li需要的高度，PS:全部计算后的高度
		oLi.style.height='0';
		startMove(oLi,{height:height},function(){
			startMove(oLi,{opacity:100})
		})		
		
	}
 
}
/*效果点击发布，效果平缓滑动出现*/

