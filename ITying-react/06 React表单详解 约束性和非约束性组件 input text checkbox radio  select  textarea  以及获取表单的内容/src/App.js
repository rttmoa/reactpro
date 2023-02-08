import React, { Component } from 'react';


import Home from './components/Home.js';
import ReactForm from './components/ReactForm.js';

class App extends Component {

  render() {
    return (
      <div className="App">
      
         <Home />
      
         <br />
         <hr />
         <br />

        <ReactForm />
         
      </div>
    );
  }
}

export default App;
