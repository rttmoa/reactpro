import React, {Component} from 'react';
import '../assets/css/index.css';

class Home extends Component {
    // 数据
    constructor() {
        super()
        // React 定义数据
        this.state={
            name: "张三",
            age: 30,
            userinfo: { username: "itying" },
            msg: "我是一个 Home 组件",
            title: "我是一个 Title",
            color: "red",
            style: {
                color: "red",
                fontSize: "40px",
            }
        }
    } 
    render() {
        return(
            <div>
                {/* 第二节 绑定数据 绑定对象 */}
                <h2>react组件里面的所有节点要被根节点包含起来</h2>
                <p>姓名：{this.state.name}</p>
                <p>年龄：{this.state.age}</p>
                <p>对象：{this.state.userinfo.username}</p>

                <br />
                {/* 第三节  绑定属性 */}
                <div title={this.state.title}>我是一个div</div>  {/* 提示文字 */}
                {/* 第三节 绑定class属性 */}
                <div id="box" className='red'>我是一个红色的 div----id</div>
                <div className={this.state.color}>我是一个红色的 div</div>
                <br />
                <label htmlFor='name'>姓名</label>
                <input id='name' />
                <br />
                {/* <div style={{marginRight: spacing + 'em'}}>我是一个红的 div 行内样式</div> */}
                <div style={{"color": "red"}}>我是一个红的 div 行内样式</div>
                <br />
                <div style={this.state.style}>我是一个红的 div 行内样式</div>

            </div>
        )
    }
}

export default Home;