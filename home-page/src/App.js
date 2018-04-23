import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logoReact from './logo.svg';
import logoAngular from './angular.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frameworks: [
        {
          key: "react_js",
          name: "ReactJs",
          path: "react"
        },
        {
          key: "angular",
          name: "Angular",
          path: "angular"
        }
      ]
    };
  }

  logo(key) {
    console.log(key);
    switch (key) {
      case "react_js":
        return <img src={logoReact} className="react-logo logo-ico" alt="logo"/>;
      case "angular":
        return <img src={logoAngular} className="angular-logo logo-ico" alt="logo"/>;
      default:
        return <img src={logoReact} className="App-logo" alt="logo"/>;
    }
  }

  render() {
    const md = parseInt(12/this.state.frameworks.length, 10);
    const lg = md-2;
    const sm = "12";

    return (
      <div className="container-fluid">
        <div className="row">
          <div  className="title col-sm-12 col-md-12">
            <h1>Javascript Framework Performance Tests</h1>
            <h5 className="subtitle">Go ahead to check the performance by select one</h5>
          <hr  className="line"/>
          </div>
        </div>
        <div className="row app-container">
          {this.state.frameworks.map(function (fm, i) {
            return <a key={i} href={fm.path} className={`${fm.name.toLowerCase()} col-sm-${sm} col-md-${md}  col-lg-${lg} option`}>
              <h3 className="link-text">{fm.name}</h3>
              {this.logo(fm.key)}
            </a>
          }.bind(this))}
        </div>
      </div>
    );
  }
}

export default App;
