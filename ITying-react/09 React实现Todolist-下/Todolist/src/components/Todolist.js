import React, { Component } from "react";

import "../assets/css/index.css";

//引入自定义模块
import storage from "../model/storage";

/**
 * TodoList 案例 已完成
 * React的模块化以及封装Storage实现todolist 待办事项 已经完成事项 以及实现数据持久化_下
 */
class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }

  addData = (e) => {
    //按下回车的时候在增加

    if (e.keyCode == 13) {
      // alert(title);

      let title = this.refs.title.value;
      // let tempList = this.state.list;

      // tempList.push({
      //   title: title,
      //   checked: false,
      // });
      //改变后的值赋值给list

      this.setState({
        // list: tempList,
        list: [...this.state.list, { title, checked: false }],
      });

      //表单置为空
      this.refs.title.value = "";

      // return
      //执行缓存数据
      // storage.set("todolist", tempList);
      storage.set("todolist", [...this.state.list]);
    }
  };
  checkboxChage = (key) => {
    // alert('111');
    let tempList = this.state.list;

    tempList[key].checked = !tempList[key].checked;

    this.setState({
      list: tempList,
    });

    // 执行缓存数据
    storage.set("todolist", tempList);
  };
  removeData = (key) => {
    // console.log('k', key)
    let tempList = this.state.list;

    // this.state.list.splice(key, 1)
    // return
    tempList.splice(key, 1);

    this.setState({
      list: tempList,
    });
    //执行缓存数据
    storage.set("todolist", tempList);
  };

  //生命周期函数  页面加载就会触发
  componentDidMount() {
    //获取缓存的数据
    // storage.set('todolist', [])
    var todolist = storage.get("todolist");
    // console.log(todolist)
    if (todolist) {
      this.setState({
        list: todolist,
      });
    }
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <header className="title">
          TodoList: <input ref="title" onKeyUp={this.addData} />{" "}
        </header>
        {/* {console.log(this.state.list)} */}
        <h2>待办事项</h2>

        <hr />

        <ul>
          {this.state.list.map((value, key) => {
            if (!value.checked) {
              return (
                <li key={key}>
                  <input
                    type="checkbox"
                    checked={value.checked}
                    onChange={this.checkboxChage.bind(this, key)}
                  />
                  {value.title}
                  --{" "}
                  <button onClick={this.removeData.bind(this, key)}>
                    删除
                  </button>
                </li>
              );
            }
          })}
        </ul>

        <h2>已完成事项</h2>

        <hr />
        <ul>
          {this.state.list.map((value, key) => {
            if (value.checked) {
              return (
                <li key={key}>
                  <input
                    type="checkbox"
                    checked={value.checked}
                    onChange={this.checkboxChage.bind(this, key)}
                  />
                  {value.title}
                  --{" "}
                  <button onClick={this.removeData.bind(this, key)}>
                    删除
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}
export default Todolist;
