import React from "react";

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            msg: "这是一个头部组件",
        };
    }
    getNews = () => {
        console.log(this.props.news);  ////News {props: {…}, context: {…}, refs: {…}, updater: {…}, run: ƒ, …}
        console.log(this.props.news.state.username);////
    }
    render() {
        return (
            <div>
                我是一个头部的组件
                <br />
                {/* Home组件中的传递的title属性 <Header title={this.state.title} /> */}
                {this.props.title}  {/*获取父组件的 title 属性  */}
                <br />

                {/* News组件中的传递的属性 */}
                <button onClick={this.props.run}>调用news父组件的run方法</button>  {/* 在News组件中调用方法 */}
                <br />
                <button onClick={this.props.news.getData}>获取news组件的getData方法</button>
                <br />
                <button onClick={this.getNews}>获取整个news组件实例</button>
                <br />
                <button onClick={this.props.news.getChildData.bind(this, '我是子组件')}>子组件给父组件传值</button>
                <br />
            </div>
        );
    }
}

export default Header;