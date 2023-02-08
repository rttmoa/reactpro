/*父组件给子组件传值：
    defaultProps:父子组件传值中，如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
    propTypes：验证父组件传值的类型合法性
            1、引入import PropTypes from 'prop-types';
            2、类.propTypes = {
                name: PropTypes.string
            };
    都是定义在子组件里面
https://reactjs.org/docs/typechecking-with-proptypes.html
*/

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = { msg:"我是一个头部组件" };
    }
    render() {
        return (
            <div>
                {/* 父组件给 Header 组件传递 title属性和num属性--指定num为number类型 */}
                <h2>---{this.props.title}--- {this.props.num}</h2>
            </div>
        );
    }
}
//defaultProps   如果父组件调用子组件的时候不给子组件传值，可以在子组件中使用defaultProps定义的默认值
Header.defaultProps={
    title:'标题'
}

//同行propTypes定义父组件给子组件传值的类型
Header.propTypes={
    num:PropTypes.number
}


export default Header;