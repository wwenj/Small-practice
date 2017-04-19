window.onload=function(){
	var peBox=document.getElementById('peBox');
	var neBox=document.getElementById('neBox');
	var pevr=document.getElementsByClassName('pevr')[0];
	var next=document.getElementsByClassName('next')[0];
  var oLi=document.getElementsByTagName('ul')[0].getElementsByTagName('li');
  var iMg=document.getElementsByTagName('ul')[0].getElementsByTagName('img');
  var oUl=document.getElementsByTagName('ul')[1];

  var j=0;
  var timer2=null;
  var oLeft=0
/*鼠标移入出现方向键 */
    peBox.onmouseover=function(){
      clearInterval(timer2);
   	  startMove(pevr,{opacity:60});
    }
  	peBox.onmouseout=function(){
      timer2=setInterval(toMove,3000);
  		startMove(pevr,{opacity:0})
  	}
  	neBox.onmouseover=function(){
      clearInterval(timer2);
		  startMove(next,{opacity:60});
    }
  	neBox.onmouseout=function(){
      timer2=setInterval(toMove,3000);
  		startMove(next,{opacity:0})
  	}

    oUl.onmouseover=function(){
      clearInterval(timer2);
    }
    oUl.onmouseout=function(){
      timer2=setInterval(toMove,3000);
    }
/*点击右轮播事件*/
next.onclick=function(){
    //先透明所有的图片
    // for (var i = 0; i < iMg.length; i++) {
    //   iMg[i].style.opacity=0;
    // }
    
    toNext();   //底部轮播

    iMg[j].style.opacity=0;
    if (j<3) {
      j++;
      startMove(iMg[j],{opacity:100});
    }else{
      j=0
      startMove(iMg[j],{opacity:100});    
    }
    return j;
  }
  /*点击左轮播事件*/
pevr.onclick=function(){
    //先透明所有的图片
    // for (var i = 0; i < iMg.length; i++) {
    //   iMg[i].style.opacity=0;
    // }
/*点击左底部轮播图*/
    if (oLeft==0) {
      oUl.style.left=-544+'px';
      oLeft=-544;
      oLeft=oLeft+136;
      startMove(oUl,{left:oLeft});
    }else{
      oLeft=oLeft+136;
      startMove(oUl,{left:oLeft});
    }
    
    iMg[j].style.opacity=0;
    if (j>0) {
      j--;
      startMove(iMg[j],{opacity:100});
    }else{
      j=3
      startMove(iMg[j],{opacity:100});    
    }
    return j;
}

/*定时器自动播放轮播图*/
  timer2=setInterval(toMove,3000);

/*自动轮播函数*/
function toMove(){
    //底部轮播图
    toNext(); 
    //先透明所有的图片
    for (var i = 0; i < iMg.length; i++) {
      iMg[i].style.opacity=0;
    }
    //同时从第一个开始轮流显示
    if (j<3) {
      j++;
      startMove(iMg[j],{opacity:100});
    }else{
      j=0;
      startMove(iMg[j],{opacity:100});
    }
    return j
}

/*底部向左运动时的封装函数*/
function toNext(){
    oLeft=oLeft-136;
    if (oLeft<=-544) {
      startMove(oUl,{left:oLeft},function(){
        oLeft=0;
        oUl.style.left=0;
      });
    }else{
      startMove(oUl,{left:oLeft});
    }
 }


}

 

 	