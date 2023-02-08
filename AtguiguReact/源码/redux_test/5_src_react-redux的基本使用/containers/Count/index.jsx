
import CountUI from '../../components/Count' //引入Count的UI组件

import {
	createIncrementAction, createDecrementAction, createIncrementAsyncAction //引入action
} from '../../redux/count_action'


import { connect } from 'react-redux'//引入connect用于连接UI组件与redux

/* 
	1.mapStateToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapStateToProps用于传递状态
*/
function mapStateToProps(state) {
	return { count: state } //this.state 用于储存/获取值
}

/* 
	1.mapDispatchToProps函数返回的是一个对象；
	2.返回的对象中的key就作为传递给UI组件props的key,value就作为传递给UI组件props的value
	3.mapDispatchToProps用于传递操作状态的方法
*/
function mapDispatchToProps(dispatch) {
	return {
		jia: number => dispatch(createIncrementAction(number)),//加
		jian: number => dispatch(createDecrementAction(number)),//减
		jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time)),//异步加
	}
}

//使用connect()()创建并暴露一个Count的容器组件
export default connect(mapStateToProps, mapDispatchToProps)(CountUI)

