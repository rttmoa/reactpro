/**14 React路由 react-router4.x的基本配置 */
import React, { Component } from 'react';
import { BrowserRouter as Router, Routes, Link } from 'react-router-dom'

import Home from './component/Home'
import News from './component/News';
import Product from './component/Product';

class App extends Component {
   
  render() {
    return (
      <Router>
          <div>
            <header className='title'>
              <Link to="/">首页</Link>
              <Link to="/news">新闻</Link>
              <Link to="/product">产品 </Link>
            </header>

            <Routes exact path="/" Component={<Home />} />
            <Routes path="/news" Component={<News />} />
            <Routes path="/product" Component={<Product />} />
            
          </div>
      </Router>
    );
  }
}

export default App;