import React, {Component} from 'react';
import '../assets/css/index.css';



/**
 * 文件名: 04 React事件 方法_获取数据 改变数据 执行方法传值
 * 改变 this 指向问题
 * 1. bind改变 this指向
 * 2. 箭头函数 = () => {}
 * 3.this.setState( { } )
 */
class Home extends Component {
    // 数据
    constructor() {
        super()
        // React 定义数据
        this.state={
            msg: "我是MSG 消息",
            message: "我是 Message 消息",
            username: "常嘉琪",
        }
        // 第二种改变this指向的方法
        this.getMessage = this.getMessage.bind(this);
    }

    run() {alert("我是 一个 run 方法")}
    getData() {alert(this.state.msg);}
    getMessage() {alert(this.state.message)}
    getName = () => {alert(this.state.username);}
    setData = () => { this.setState({msg: "Home 组件 改变后的值"}) }
    setName = (str) => {this.setState({username: str})}

    render() {
        return(
            <div>
                <h2>{this.state.msg}</h2>
                <br />
                {this.state.username}
                <br />
                <button onClick={this.run}>执行方法</button>
                <br />
                <button onClick={this.getData.bind(this)}>获取数据--第一种改变this指向的方法</button>
                <br />
                <button onClick={this.getMessage.bind(this)}>获取数据--第二种改变this指向的方法</button>
                <br />
                <button onClick={this.getName.bind(this)}>获取数据--第三种改变this指向的方法</button>
                <br />
                <button onClick={this.setData.bind(this)}>改变 state 里面的值</button>
                <br />
                <button onClick={this.setName.bind(this, "张三")}>执行方法传值</button>
                
            </div>
        )
    } 
}

export default Home;