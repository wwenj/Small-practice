window.onload=function(){
	var box=document.getElementById('box');
	
	box.onmouseover=function(){
		startMove(this,{width:200,height:400,opacity:100})
	}
	box.onmouseout=function(){
		startMove(this,{width:100,height:100,opacity:50})
	}
}


