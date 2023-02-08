import React from 'react';

/**
 * 1.获取输入框中的值(通过ref)
 * 2.键盘事件(onKeyUp/onKeyDown)
 */
class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            username: "UserName",
        };
    }
    inputChange = () => {
        /* 获取dom节点
            1.给元素定义ref属性
                <input ref="username" />
            2.通过this.refs.username 获取dom节点
        */
        let val = this.refs.username.value;
        this.setState({ username: val })
    }
    getInput= () => {
        alert(this.state.username)
    }
    // 键盘事件
    inputKeyUp = (e) => {
        if(e.keyCode === 13){ alert(e.keyCode) }
    }
    inputKeyDown = (e) => { }
        
    
    render() {
        return (
            <div>
                {/* 表单事件 */}
                <h2>表单事件</h2>
                {/* 
                    1、监听表单的改变事件                       onChange
                    2、在改变的事件里面获取表单输入的值          ref
                    3、把表单输入的值赋给username               this.setState({})
                    4、点击按钮的时候获取 state 里面的 uname  this.state.uname
                */}
                {/* <input ref="username" onChange={this.inputChange} />  */}
                <button onClick={this.getInput}>获取输入框的值</button>
                <br /><br />
                {/* 键盘事件 */}
                <h2>键盘事件</h2>
                <input onKeyUp={this.inputKeyUp} /> 
                <input onKeyDown={this.inputKeyDown} /> 
            </div>
        );
    }
}

export default List;