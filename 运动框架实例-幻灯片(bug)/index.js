window.onload=function(){
	var oBtn=document.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var oPic=document.getElementsByTagName('ul')[1];

	var now=0;
	for (var i = 0; i < oBtn.length; i++) {
		oBtn[i].index=i;
		oBtn[i].onmouseover=function(){
			// var speed=eval(-253*this.index)
			now=this.index
			move();
		}
	}
	//事件翻页效果
	function move(){
		
		if (oPic.style.top==-1012+'px') {
			startMove(oPic,{top:-253*now},function(){
				oPic.style.top=0+'px'
			})	 
			
		}else{
			startMove(oPic,{top:-253*now})
		}
		
		for (var i = 0; i < oBtn.length; i++) {
			oBtn[i].className='';
		}
		if (now==5) {
			oBtn[0].className='after';
		}else{
			oBtn[now].className='after';
		}
	}
	//自动翻页效果
	function next(){
		now++
		if (now==(oBtn.length+1)) {
			now=0;
		}
		move();
	}
	timer=setInterval(next,1000);		//定时器自动轮播

	oPic.onmouseover=function(){		//鼠标进入广告图关闭定时器
		clearInterval(timer);
	}
	oPic.onmouseout=function(){			
		timer=setInterval(next,1000);
	}

}

/*未解决：二次运动第一张图到第二张之间运动时间是平时的两倍*/


