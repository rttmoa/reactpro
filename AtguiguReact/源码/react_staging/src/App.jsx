import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
import './App.css'

export default class App extends Component {
	//状态在哪里，操作状态的方法就在哪里

	//初始化状态
	state = { todos:[
		{id:'001',name:'吃饭',done:true},
		{id:'002',name:'睡觉',done:true},
		{id:'003',name:'打代码',done:false},
		{id:'004',name:'逛街',done:false}
	]}


	addTodo = (todoObj)=>{/**--- 子组件传递的对象： {id: '96dxZKl-pI_jEpFtVPrtx', name: 'dsf', done: false} ---**/
		const {todos} = this.state
		const newTodos = [todoObj,...todos]
		this.setState({todos:newTodos})
	}

	//updateTodo用于更新一个todo对象
	updateTodo = (id, done)=>{/**--- 子组件传递的数据为： this.props.updateTodo(id, event.target.checked) ---**/
		//获取状态中的todos
		const {todos} = this.state
		//匹配处理数据
		const newTodos = todos.map((todoObj)=>{/**--- map处理原数组 形成新数组 ---**/
			// console.log('todoObj', todoObj)
			if(todoObj.id === id) {
				// console.log('obj', todoObj)//点击的那一个todo
				return {...todoObj, done}
			}else return todoObj
		})
		// console.log('newTodos',newTodos)
		this.setState({todos: newTodos})
	}

	//deleteTodo用于删除一个todo对象
	deleteTodo = (id)=>{
		//获取原来的todos
		const {todos} = this.state
		//删除指定id的todo对象
		const newTodos = todos.filter((todoObj)=>{
			return todoObj.id !== id /**--- 数组中 不等于 这个id的留下   filter筛选数据 ---**/
		})
			// let messageId =  '1'
			// let list = [{name: 'a', id: '1'}, {name: 'b', id: '2'}, {name: 'c', id: '3'}]
			// list  = list.filter((val, i) => {
			// 	return val.id !== messageId
			// })  // [{name: 'b', id: '2'}, {name: 'c', id: '3'}]
		console.log('newTodos', newTodos)
		//更新状态
		this.setState({todos: newTodos})
	}

	// map加工数据
	checkAllTodo = (done)=>{/**--- this.props.checkAllTodo(event.target.checked)   |   done全为true或者全为false ---**/
		const {todos} = this.state
		//加工数据
		const newTodos = todos.map((todoObj)=>{//第一次为正常的todos值  第二次点击全为true
			return {...todoObj,done}/**--- 加工数据 把原todos的done属性都改为true或者false ---**/
		})

		//更新状态
		this.setState({todos:newTodos})
	}

	//clearAllDone用于清除所有已完成的    取反为true的留下  也就是说done为false的留下
	clearAllDone = ()=>{
		//获取原来的todos
		const {todos} = this.state
		//过滤数据
		const newTodos = todos.filter((todoObj)=>{
			return !todoObj.done /**--- 取反为true留下来  也就是说done为false的留下 ---**/
		})
		console.log('newTodos',newTodos);
		
		const arr = [`1${true}`,false,true,false,true,false]
		const res = arr.filter((value) => {return !value})
		console.log('res', res)//留下来的是取反为false的数据
		//更新状态
		this.setState({todos: newTodos})
	}

	render() {
		const {todos} = this.state
		return (
			<div className="todo-container">
				<div className="todo-wrap">
					{/* <h3 style={{fontSize: '20px', fontWeight: 'bold', alignItems: 'center'}}>Reactjs TODOS案例</h3> */}
					<Header addTodo={this.addTodo}/>
					<List todos={todos} updateTodo={this.updateTodo} deleteTodo={this.deleteTodo}/>
					<Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllDone={this.clearAllDone}/>
				</div>
			</div>
		)
	}
}
