/*任意值运动框架：适用于px像素值的运动变化、透明度变化
缓慢变速运动
通过计时器变化累加使运动速度效果成正比改变
*/

function getStyle(obj,name){
	if(obj.currentStyle){
		return obj.currentStyle[name];
	}else{
		return getComputedStyle(obj,false)[name];
	}
}
// 三个参数：节点元素、{属性:值,属性:值}、链接之后的函数运动
// 多个属性改变同时运动

function startMove(obj,json,fnEnd){
	clearInterval(obj.timer);
	obj.timer=setInterval(function(){
		for(var attr in json){


		var cur=0;
		if (attr=='opacity') {		//如果改变属性是透明度判断一下
			cur=parseFloat(getStyle(obj,attr))*100;
		}else{
			cur=parseInt(getStyle(obj,attr));
		}

		var speed=(json[attr]-cur)/6;
		speed=speed>0?Math.ceil(speed):Math.floor(speed);

		if(cur==json[attr]){
			clearInterval(obj.timer);
			if (fnEnd)fnEnd();		//if有这个参数则运行他自己()
		}else{
			if (attr=='opacity'){
				obj.style.filter="alpha(opacity:'+(cur+speed)+')";
				obj.style.opacity=(cur+speed)/100;
			}else{
				obj.style[attr]=cur+speed+'px';
			}
	}
	}},30);			
	
	
}