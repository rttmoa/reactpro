import React  from 'react';





/**
 * 1. button按钮获取DOM属性
 * 2. input输入框监听onChange事件
 * 3. button按钮获取input的值
 * 4. input的监听回车按下的事件 onKeyDown
 * 5. input输入框的双休数据绑定 value和onChange
 */
class Home extends React.Component {
    constructor(){
        super();  // 用在构造函数中，必须在使用this之前调用
        this.state = {                
            name:'张三',
            value:'我是一个表单'
        }
    }
    run=(event)=>{
        // console.log()
        event.target.style.background="red"
        alert( event.target.getAttribute('id'))
    }

    setData=(event)=>{
        console.log(event);
        this.setState({
            name: event.target.value
        })
    }

    getData=()=>{
        // alert(this.state.name)
        alert(this.refs.msg.value);
    }

    keydown(e){
        console.log(e.keyCode);
        if(e.keyCode==13){
            alert('回车'+e.target.value);
        }
    }

    inputChage=(event)=>{
        this.setState({
            value: event.target.value
        })
    }

    render() {
        return (
            <div>
                <button id='btn' onClick={this.run}>执行事件</button>

                <br />
                <br />

                 <input type="text" onChange={this.setData} />

                 <br />
                 <br />

                 <input type="text"  ref="msg"/>

                 <button onClick={this.getData}>获取input的值</button>
                 <br />
                 <br />

                <input type="text" onKeyDown={this.keydown} />

                <br />
                 <br />

                {/* 双休数据绑定 */}
                <input type="text" value={this.state.value} onChange={this.inputChage} />
                {this.state.value}
            </div>
        );
    }
}

export default Home;