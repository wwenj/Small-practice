window.onload=function(){
	var oDiv=document.getElementsByTagName('div');

function getPos(ev){
		var scrollTop=document.documentElement.scrollTop || document.body.scrollTop;
		var scrollLeft=document.documentElement.scrollLeft || document.body.scrollLeft;
		return {x:scrollLeft+ev.clientX,y:scrollTop+ev.clientY}
	}

	document.onmousemove=function(ev){
		var oEvent=ev||event;
		//var pos=getPos(oEvent);
		for (var i = oDiv.length - 1; i >0; i--) {
			oDiv[i].style.left=oDiv[i-1].offsetLeft+'px';
			oDiv[i].style.top=oDiv[i-1].offsetTop+'px';
		}
		oDiv[0].style.left=oEvent.clientX+'px';
		oDiv[0].style.top=oEvent.clientY+'px';
	}


	

}
