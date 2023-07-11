



import React from "react";
import { Link } from 'react-router-dom'
import { renderRoutes } from "react-router-config";
import { connect } from 'react-redux';
import { actions } from "@/store";



function App(props) {
  console.log(props);
  const { route, children } = props;
  return (
    <div className="App">
      <Link to='/home'>Home</Link>
      <Link to='/about'>About</Link>
      <div className="Children">{/* 类插槽 */}
        {children}
      </div>
      {renderRoutes(route.routes)}
    </div>
  );
}

export default connect(
  state => ({ state }),
  actions
)(App);