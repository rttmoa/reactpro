import React, {Component} from 'react';
import '../assets/css/index.css';



/**
 * 1.获取 Button按钮中的事件、属性 | React获取dom节点 (aid)
 * 2.input输入框中的值 改变页面中的值(this.setState)
 * 3.Button按钮中 获取input框中的值(this.state)
 */
class Home extends Component {
    // 数据
    constructor() {
        super()
        // React 定义数据
        this.state={
            username: "UserName",
            uname: "zhangsan"
        }
    } 
    run = (event) =>  {
        alert(event.target)  /* 获取执行事件的dom节点 --> button按钮  */
        event.target.style.background='red'; 
        alert(event.target.getAttribute('aid'))  /* 获取dom的属性： 123  */
    }
    inputChange = (e) => {
        // 获取表单的值
        this.setState({ uname: e.target.value, })
    }
    getInput = (e) => { alert(this.state.uname) }

    render() {
        return(
            <div>
                {this.state.username}
                {/* 事件对象 */}
                <button aid='123' onClick={this.run}>执行方法</button>
                <h2>表单事件</h2>
                {/* 
                    1、监听表单的改变事件                       onChange
                    2、在改变的事件里面获取表单输入的值          事件对象
                    3、把表单输入的值赋给username               this.setState({})
                    4、点击按钮的时候获取 state 里面的 uname  this.state.uname
                */}
                <input onChange={this.inputChange} /> 
                <button onClick={this.getInput}>获取输入框的值</button>
                <br /><br />
                {/* Dom节点获取表单的值 */}
                

            </div>
        )
    } 
}

export default Home;