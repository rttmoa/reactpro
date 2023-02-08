import React, { Component } from 'react';


import { DatePicker } from 'antd';


class News extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个News组件'
         };
    }    

    getDate=(date, dateString)=>{
        console.log(date, dateString);
    }

    render() {
        return (
            <div className="news">
                News组件

                <br />
                <DatePicker onChange={this.getDate} />
            </div>
        );
    }
}

export default News;
