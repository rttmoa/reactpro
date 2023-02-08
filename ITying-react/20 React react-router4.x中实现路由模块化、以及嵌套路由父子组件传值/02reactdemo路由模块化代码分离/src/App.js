
import React, { Component } from 'react';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";



import './assets/css/index.css';

import routes from './model/router.js';

class App extends Component {

  render() {
    return (

      <Router>
        <div>
            <header className="title">

                <Link to="/">首页组件</Link>
                <Link to="/user">用户页面</Link>
                <Link to="/shop">商户</Link>
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
