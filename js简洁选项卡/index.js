window.onload=function(){
	var oBtn=document.getElementsByTagName('ul')[0].getElementsByTagName('li');
	var oDiv=document.getElementsByTagName('ul')[1].getElementsByTagName('li');

	for (var i = 0; i < oBtn.length; i++) {
		oBtn[i].index=i;
		oBtn[i].onclick=function(){
			for (var i = 0; i < oBtn.length; i++) {
				oBtn[i].className='aa';
				oDiv[i].style.display='none';
			}
			this.className='butDown';
			oDiv[this.index].style.display='block';
		}
	}
}