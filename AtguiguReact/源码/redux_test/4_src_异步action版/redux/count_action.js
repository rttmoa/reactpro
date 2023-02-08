/* 
	该文件专门为Count组件生成action对象
*/
import {INCREMENT,DECREMENT} from './constant'

//同步action，就是指action的值为Object类型的一般对象
export const createIncrementAction = data => ({type:INCREMENT,data})
export const createDecrementAction = data => ({type:DECREMENT,data})






//原函数：  store.dispatch(createIncrementAsyncAction(value*1, 500))

//异步action，就是指action的值为函数,异步action中一般都会调用同步action，异步action不是必须要用的。
export const createIncrementAsyncAction = (data,time) => {
	return (disp)=>{
		// console.log('dis', disp) //ƒ dispatch() { }
		setTimeout(()=>{
			disp(createIncrementAction(data))
			// disp({type: 'increment', data})
		},time)
	}
}



