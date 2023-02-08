import React, { Component } from 'react';

//url模块来解析url地址    在react里面使用url模块需要安装url模块    cnpm install url --save
import url from 'url';

class ProductContent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    //生命周期函数--- 一般用在进入页面后，数据初始化
    componentDidMount(){
        // this.props.location.search  地址栏中的参数
        // 获取get传值
        console.log(url.parse(this.props.location.search, true));
        var query=url.parse(this.props.location.search, true).query;
        console.log(query)
    }
    render() {
        return (
            <div>
                我是商品详情组件
            </div>
        );
    }
}
export default ProductContent;