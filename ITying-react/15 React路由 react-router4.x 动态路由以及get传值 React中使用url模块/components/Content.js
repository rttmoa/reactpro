import React, { Component } from 'react';

class Content extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //生命周期函数---- componentDidMount() 这个生命周期方法应该是用的最多的，一般用在进入页面后，数据初始化，
                        // 这种情况下，跟model中的 subscription方法作用是一样的
    componentDidMount(){
        //获取动态路由的传值
        console.log(this.props.match.params.aid);  
    }
    render() {
        return (
            <div>
                我是新闻详情组件
            </div>
        );
    }
}

export default Content;