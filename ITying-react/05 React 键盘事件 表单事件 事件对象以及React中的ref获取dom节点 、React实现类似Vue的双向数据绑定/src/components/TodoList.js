import React from "react";



/**
 * 1.双向数据绑定----  Model改变影响View view改变反过来影响Model
 * 2.input中改变(this.state)里面的属性值
 * 3.button中改变(this.state)里面的属性值
 */
class TodoList extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            username: "zhangsan",
        };
    }
    inputChange = (e) => {
        this.setState({ username: e.target.value })
    }
    setUsername = (e) => {
        this.setState({ username: "Liss" })
    }

    render() { // 数据双向绑定
        return (
            <div>
                <h2>双向数据绑定</h2>
                {/* Model改变影响View view改变反过来影响Model */}
                <input defaultValue={this.state.username} onChange={this.inputChange} />
                <br />
                    {this.state.username}
                <br />
                <button onClick={this.setUsername}>改变 username 的值</button>
                <br />
            </div>
        );
    }
}

export default TodoList;