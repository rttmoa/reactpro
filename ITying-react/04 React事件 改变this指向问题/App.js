import React, { Component } from 'react';


import Home from '../components/Home';


class App extends Component {

  //render 模板   jsx
  render() {
    return (
      <div className="App">
         你好react-根组件
         <hr />
         <Home />
      </div>
    );
  }
}

export default App;
