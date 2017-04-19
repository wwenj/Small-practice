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
	clearInterval(obj.timer);	//开始定时器
	obj.timer=setInterval(function(){
		for(var attr in json){

		var cur=0;

		if (attr=='opacity') {		//如果改变属性是透明度判断一下
			cur=parseFloat(getStyle(obj,attr))*100;		//cur为需要改变的属性值的此时值
		}else{
			cur=parseInt(getStyle(obj,attr));
		}

		var speed=(json[attr]-cur)/6;	//cur此时值变大speed慢慢变小，减速运动
		speed=speed>0?Math.ceil(speed):Math.floor(speed);	//判断正负进行向上或向下取整

		if(cur==json[attr]){	
			clearInterval(obj.timer);	//到达设定的该变的值清除定时器
			if (fnEnd)fnEnd();		//参数存在则运行，链式运动
		}else{
			if (attr=='opacity'){	//普通数值计算和透明度小数计算
				obj.style.filter="alpha(opacity:'+(cur+speed)+')";
				obj.style.opacity=(cur+speed)/100;
			}else{
				obj.style[attr]=cur+speed+'px';		//属性值增大
			}
	}
	}},30);			
	
	
}