let utils=(function(){
	const offset=function offset(ele){
		let top=ele.offsetTop;//初始top
		let left=ele.offsetLeft;
		let parent=ele.offsetParent;//初始父级  parent
	    while(parent){//如果有父级 parent pp body
			top+=parent.offsetTop+parent.clientTop;
			left+=parent.offsetLeft+parent.clientLeft;
			parent=parent.offsetParent;//父级 pp  body  null
		}
		return {
			top,
			left
		}
	} 
	
	return {
		offset
	}
})()