import React from "react";
import '../assets/css/index.css'
/**
 * TodoList 案例
 */
class TodoList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            vals: "",
            username: "常嘉琪",
            list: [],
        };
    }
    inputChange = (e) => {
        this.setState({
            vals: e.target.value,
            // vals: "",
        })
    }
    addData = () => {
        // alert(this.state.vals)
        let tempList = this.state.list;
        tempList.push(this.state.vals); ////返回是一个索引值
        // this.state.vals = ''  ///设置文本框为空
        this.setState({
            // vals: "",
            list: tempList,
            // vals: ''
        })
    }
    removeData = (key) => {
        // alert(key)   删除的索引值
        let tempList = this.state.list;
        tempList.splice(key, 1);   ////删除数据
        this.setState({
            list: tempList,
        })
    }
    render() {
        return (
            <div>
                <h2> TodoList 案例 演示</h2>
                <br />
                <input onChange={this.inputChange} />
                <button onClick={this.addData}>获取输入框的值</button>
                <br />
                <ul className="list">
                    {
                        // 用到this 指向
                        this.state.list.map((val, key) => {
                            return(<li key={key}>{val}  <button onClick={this.removeData.bind(this, key)}>删除-</button>  </li>)
                        })
                    }
                    
                </ul>



            </div>
        );
    }
}

export default TodoList;