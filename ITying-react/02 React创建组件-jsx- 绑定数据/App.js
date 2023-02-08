import React, { Component } from 'react';
import logo from './assets/images/logo.svg';
// import './assets/css/App.css';



// import Home from './components/Home'
import News from './components/News'

class App extends Component {

  //render 模板        jsx
  render() {
    return (
      <div className="App">
         你好react  根组件

        {/* <Home /> */}
        
         <News/>

      </div>
    );
  }
}

export default App;