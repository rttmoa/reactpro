import React, { Component } from 'react';

// import Home from './components/Home';
import News from '../../../../03 React 创建组件、绑定属性(class_style)引入图片  循环数组渲染数据/src/components/News';





class App extends Component {

  //render 模板   jsx
  render() {
    return (
      <div className="App">
         你好react  根组件
        <hr />

         <News />
      </div>
    );
  }
}

export default App;
