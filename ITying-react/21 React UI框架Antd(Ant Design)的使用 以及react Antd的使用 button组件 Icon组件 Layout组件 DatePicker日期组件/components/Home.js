
// http://idangero.us/swiper/get-started/

import React, { Component } from 'react';
import { Button,Icon } from 'antd';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个home组件'
         };
    }
    render() {
        return (
            <div className="home">
                首页组件

                <br />

               <Button type="primary">antd的按钮</Button>
               <br />
               <br />

               <Icon type="pic-right" theme="outlined" />
               <br />
               <br />

               <Icon type="forward" className="red" theme="outlined" />
            </div>
        );
    }
}

export default Home;
