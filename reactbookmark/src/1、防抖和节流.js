// React 实现input输入框的防抖和节流: https://www.shuzhiduo.com/A/D854E9MYdE/
// 1.为什么使用防抖和节流
//     对于频繁触发的事件 比如keydown keyup事件 当频繁点击时候 会多次触发事件 页面出现卡顿 影响性能

// 2.函数防抖（debounce）：间隔时间内只执行一次   函数节流（throttle）：间隔时间内执行

// 3.使用场景
//     函数防抖：搜索框等
//     函数节流：鼠标不断点击事件等

// 4.目的：提升性能、提高用户体验

// 5.用react实现防抖和节流

// 6.使用lodash实现防抖和节流
//     import _ from 'lodash';
//     实现防抖 ：onClick = { _.debounce(this.ajax, 200)}
//     实现节流 ：onClick = { _.throttle(this.ajax, 200)}


import { Component } from "react";


// Url: https://www.shuzhiduo.com/A/D854E9MYdE/
class UnDebounce extends Component {
    constructor(props){
        super(props);
        this.state = {
            timerId: null   // //整数 定时器的编号 用来取消这个定时器
        }
    }
    // 模仿ajax请求
    ajax = (content) => {
        console.log("Ajax:", content)
    }

    debounce = (fn, delay = 3000) => {
        // 期间间隔执行 节流
        return (...rest) => { // 箭头函数是没有arguments的 所以用...rest 来代替
            let args = rest;

            if(this.state.timerId){
                clearTimeout(this.state.timerId); // // 要用this.timerId 而不能直接定义var timerId=null;
            }
            // eslint-disable-next-line react/no-direct-mutation-state
            this.state.timerId = setTimeout(() => {
                fn.apply(this, args)
            }, delay)
        }
    }

    throttle = (fn, delay = 3000) => {
        // 期间间隔执行 节流
        let canRun = true;
        return (...rest) => {
            if(!canRun) return;
            canRun = false;
            setTimeout(() => {
                fn.apply(this, rest);
                canRun = true;
            }, delay);
        }
    }

    onUndebounceKeyUpClick = (e) => { // 只要是按下键盘就会发生ajax请求 会出现资源浪费 一般情况下当输入完整字符才会请求数据
        this.ajax(e.target.value)
    }

    onDebounceKeyUpClick = (e) => { // 加入防抖动后 在频繁输入后 不会发送请求
        let debounceAjax = this.debounce(this.ajax, 3000)
        debounceAjax(e.target.value)
    }

    onThrottleKeyUpClick = (e) => { // ajax会按照我们设定的时间，每1s执行一次
        let throttleAjax = this.throttle(this.ajax, 3000)
        throttleAjax(e.target.value)
    }


    render(){
        return(
            <div>
                <div style={{textAlign: 'center'}}>
                    正常的input:   <input onKeyUp={this.onUndebounceKeyUpClick} />
                    防抖动的input: <input onKeyUp={this.onDebounceKeyUpClick} />
                    节流的input:   <input onKeyUp={this.onThrottleKeyUpClick} />
                </div>
            </div>
        )
    } 

}

export default UnDebounce;