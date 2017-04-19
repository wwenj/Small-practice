window.onload=function(){
	var box=document.getElementById('box');

	var timer=null;
	var left=false;
	var up=false;
	var light=false;
	var down=false;
	timer=setInterval(function(){
		if(left){
			box.style.left=box.offsetLeft-10+'px';
		}else if (up) {
			box.style.top=box.offsetTop-10+'px'
		}else if (light) {
			box.style.left=box.offsetLeft+10+'px'
		}else if (down) {
			box.style.top=box.offsetTop+10+'px'
		}
	},30)

	document.onkeydown=function(ev){
		var oEvent=ev||event
		var key=oEvent.keyCode
		switch(key)
		{
			case 37:left=true;break;
			case 38:up=true;break;
			case 39:light=true;break;
			case 40:down=true;break;
		}	
	}
	document.onkeyup=function(ev){
		var oEvent=ev||event
		var key=oEvent.keyCode
		switch(key)
		{
			case 37:left=false;break;
			case 38:up=false;break;
			case 39:light=false;break;
			case 40:down=false;break;
		}	
	}
//取消默认事件在事件后加return false;
	document.oncontextmenu=function(){
		alert("已取消右键菜单")
		return false;
	}
}

// switch(key1)
		// {
		// 	case 37:
		// 	box.style.left=box.offsetLeft-10+'px';
		// 	break;

		// 	case 38:
		// 	
		// 	box.style.top=box.offsetTop-10+'px'
		// 	break;

		// 	case 39:
		// 	box.style.left=box.offsetLeft+10+'px'
		// 	break;

		// 	case 40:
		// 	box.style.top=box.offsetTop+10+'px'
		// 	break;
		// }


		/*if (oEvent.keyCode==37) {
			box.style.left=box.offsetLeft-10+'px'
		}else if (oEvent.keyCode==38) {
			box.style.top=box.offsetTop-10+'px'
		}else if (oEvent.keyCode==39) {
			box.style.left=box.offsetLeft+30+'px'
		}else if (oEvent.keyCode==40) {
			box.style.top=box.offsetTop+10+'px'
		} */