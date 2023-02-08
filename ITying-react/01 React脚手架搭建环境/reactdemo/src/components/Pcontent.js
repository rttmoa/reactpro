import React, { Component } from 'react';

class Pcontent extends Component {
    constructor(props) {
        super(props);
        this.state = {  };
    }
    render() {

        
        // console.log(this.props.match.params.id)
        return (
            
            <div>

                `这是一个商品详情组件, 商品id: ${this.props.match.params.id}`
            </div>
        );
    }
}

export default Pcontent;