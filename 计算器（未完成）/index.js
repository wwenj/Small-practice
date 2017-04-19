window.onload=function(){
	var bigP=document.getElementById('bigP');
	var smaP=document.getElementById('smaP');
	var open1=document.getElementById('open1');
	var close1=document.getElementById('close1');
	var ope=document.getElementsByClassName('open')[0];


var results="0";
var ope="1"
var calresults;
var fuck;
/*数字键点击事件*/
function calculater(){
	results=event.srcElement.innerText;
	/*当显示器为0*/
	if (/^0$/i.test(smaP.innerText)) {
		bigP.innerText=results;
		smaP.innerText=results;
	//当按下=并且前一步没按的事运算符号
	}else if (calresults!=="0"&&fuck!=="1") {
		bigP.innerText=results;
		smaP.innerText=results;
	//前面是运算符
	}else if (fuck=="1") {
		bigP.innerText=results;
		smaP.innerText+=results;
	}else{
		bigP.innerText+=results;
		smaP.innerText+=results;
	}
	calresults="0";
		fuck="0";
}
/*计算器开关*/
function close1(){
	if (ope==0) {
		smaP.innerText='';
		bigP.innerText='';
		bigP.id="bb"
		smaP.id = "aa"
		return ope="1";
	}
	
}
function open1(){
	if (ope==1) {
		bb.id="bigP"
		aa.id = "smaP"
		smaP.innerText='0';
		bigP.innerText='0';
		return ope="0";
	}
	
}
/*运算符点击事件*/
function calculater1(){
		results=event.srcElement.innerText;
		if (/[+ * / -]$/ig.test(smaP.innerText)) {
			/*只允许显示一个运算符号*/
		}else{
			
			smaP.innerText+=results;
		}
		fuck="1";
		return fuck;
}
/*+-号变化*/
function chance(){
	
	bigP.innerText="-"+results;
	smaP.innerText="-"+results
	
}
function calculater2(){
	if (/[.+]/ig.test(bigP.innerText)) {
		/*只能有一个小数点*/
	}else{
		results=event.srcElement.innerText;
	    smaP.innerText+=results;
	    bigP.innerText+=results;
	}	
}
/*计算结果*/
function Endresults(){
   calresults=eval(smaP.innerText);
   bigP.innerText=calresults;
   smaP.innerText=calresults;
   return calresults;
}
/*C清空*/
function delete1(){
	results="";
    bigP.innerText="0";
    smaP.innerText="0";
    return;
}


/*待解决问题：1.初始化状态下和运算后直接点击“.”再点数字，随后前面的“0.”会消失
			  2.初始化状态下点击“+”，“-”无法变成正负数
*/ 















