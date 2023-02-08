import React, { Component } from 'react';

import { Button ,DatePicker} from 'antd';



class Home extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            msg:'我是一个home组件'
         };
    }    

    // getDate(date, dateString){
    //     console.log(date, dateString); 
    // }
    render() {
        return (
            <div className="home">
                Home组件

                <br /> <br />

                 <Button type="primary">Primary</Button>

                    <br /> <br />
                 <DatePicker onChange={this.getDate} />
            </div>
        );
    }
}

export default Home;
