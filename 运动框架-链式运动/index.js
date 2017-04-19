window.onload=function(){
	var box1=document.getElementById('box1');
	var box2=document.getElementById('box2');
	var spa=document.getElementsByTagName('span')[0];

	box1.onclick=function(){
		startMove(this,'left',0,function(){
			box2.style.display='block';
			startMove(box2,'top',50)
		})
	}
	spa.onclick=function(){
		startMove(box2,'top',-200,function(){
			box2.style.display='none';
			startMove(box1,'left',-200)
		});
		

	}
}


