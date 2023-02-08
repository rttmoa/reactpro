
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import Home from './components/Home';
import User from './components/User';
import News from './components/News';

import './assets/css/index.css';

let routes = [{
  path: "/",
  component: Home,
  exact:true
}, 
{
  path: "/user",
  component: User
},
{
  path: "/news",
  component: News
}];


// 22React UI框架Antd配置 react-app-rewired 按需加载Antd的css
class App extends Component {

  render() {
    return ( 
      <Router>
        <div>
            <header className="title"> 
                <Link to="/">首页组件</Link>
                <Link to="/user">用户页面</Link>                
                <Link to="/news">新闻</Link>
            </header>  
            {
              routes.map((route,key)=>{

                  if(route.exact){ 
                    return <Route key={key} exact path={route.path} component={route.component}/>
                  }else{
                    return <Route  key={key}  path={route.path} component={route.component}/> 
                  }
              })
            }      
        </div>
      </Router>
    );
  }
}

export default App;
