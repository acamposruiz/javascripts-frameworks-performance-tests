import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import logoReact from './react.svg';
import logoAngular from './angular.svg';
import logoGithub from './github-icon.svg';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frameworks: [
        {
          key: "react_js",
          name: "ReactJs",
          path: "https://acamposruiz.github.io/js-frameworks-tests/builds/react"
        },
        {
          key: "angular",
          name: "Angular",
          path: "https://acamposruiz.github.io/js-frameworks-tests/builds/angular"
        }
      ]
    };
  }

  logo(key) {
    console.log(key);
    switch (key) {
      case "react_js":
        return <img src={logoReact} className="react-logo logo-ico" alt={`logo ${key}`}/>;
      case "angular":
        return <img src={logoAngular} className="angular-logo logo-ico" alt={`logo ${key}`}/>;
      default:
        return <img src={logoReact} className="App-logo" alt="logo"/>;
    }
  }

  render() {
    const md = parseInt(12/this.state.frameworks.length, 10);
    const lg = md-2;
    const sm = "12";
    const github = {
      path: "http://github.com/acamposruiz/js-frameworks-tests"
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div  className="title col-sm-12 col-md-12">
            <a target="_blank" className="social github-icon" href={github.path}><img className="img-social" alt="Github home page" src={logoGithub}/></a>
            <h1>Javascript Framework Performance Tests</h1>
            <h5 className="subtitle">Go ahead to check the performance by select one</h5>
          <hr  className="line"/>
            <p className="description">
              This is a personal approach to check the performance of the most popular javascript frameworks in the market nowadays.
              So you are able to check in your own, and by the device of your election, the amount of time each framework takes to finish the same operation.
              The operation developed here is just move divs around. The quatity of divs grows along the time.
            </p>
            <p className="description">
              You can select how many items you want the framework to move, then you get the time this particular framework need to accomplish
              the task and you can compare  the result of differents frameworks in the same device.
            </p>
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
