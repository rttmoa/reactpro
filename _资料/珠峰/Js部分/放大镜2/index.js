let leftBox=document.querySelector(".leftbox");
let mark=document.querySelector(".mark");
let rightBox=document.querySelector(".rightbox");
let bigImg=document.querySelector(".bigimg");

let leftBoxW=leftBox.offsetWidth;
let leftBoxH=leftBox.offsetHeight;

const getWH=function getWH(ele,type){
	return parseInt(window.getComputedStyle(ele)[type])
}
//offsetWidth 只能求显示的元素，如果元素没显示，求出来的就是0
//getComputedStyle(ele).width 求得css的width值
let markW=getWH(mark,"width");
let markH=getWH(mark,"height");

let rightBoxW=getWH(rightBox,"width");
let rightBoxH=getWH(rightBox,"height");

//设置到行内
bigImg.style.width=rightBoxW/markW*leftBoxW+"px";
bigImg.style.height=rightBoxH/markH*leftBoxH+"px";

//mark 可移动的范围
let maxW=leftBoxW-markW;
let maxH=leftBoxH-markH;

//移入，左侧小盒
leftBox.onmouseenter=function(){
	mark.style.display="block";
	rightBox.style.display="block";
}

//移出，左侧小盒
leftBox.onmouseleave=function(){
	mark.style.display="none";
	rightBox.style.display="none";
}

//在左侧小盒子里移动，修改mark的位置，（left,top）
//鼠标一直在 mark 的正中间
leftBox.onmousemove=function(e){
	let resultX=e.clientX-leftBox.offsetLeft-markW/2;
	let resultY=e.clientY-leftBox.offsetTop-markH/2;
	
	resultX=resultX<=0?0:(resultX>=maxW?maxW:resultX);
	resultY=resultY<=0?0:(resultY>=maxH?maxH:resultY);

	mark.style.left=resultX+"px";
	mark.style.top=resultY+"px";
	
	//大图片根据，遮罩层移动的坐标，来移动自己的坐标
	bigImg.style.left="-"+(rightBoxW/markW*resultX)+"px";
	bigImg.style.top="-"+(rightBoxH/markH*resultY)+"px";
}

