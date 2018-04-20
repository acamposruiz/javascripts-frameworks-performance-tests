import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="">
        <div className="row">
          <div  className="title col-sm-12">
            <h1>Test yourself a Js framwork</h1>
          </div>
          <a href="react" className="react col-sm">
            React
          </a>
          <a href="angular" className="angular col-sm">
            Angular
          </a>
          <a href="angular" className="vue col-sm">
            Vue
          </a>
        </div>
      </div>
    );
  }
}

export default App;
