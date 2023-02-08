import React, { Component } from 'react';


// import Home from './components/Home';
import List from '../../../../05 React 键盘事件 表单事件 事件对象以及React中的ref获取dom节点 、React实现类似Vue的双向数据绑定/src/components/List';
import Todolist from '../../../../05 React 键盘事件 表单事件 事件对象以及React中的ref获取dom节点 、React实现类似Vue的双向数据绑定/src/components/Todolist';


class App extends Component {


  render() {
    return (
      <div className="App">
         你好react-根组件
         <hr />

         {/* <Home /> */}

         <hr />
         
         <List />

         <hr />

         <Todolist />
         

      </div>
    );
  }
}

export default App;
