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
          path: "https://acamposruiz.github.io/toyJsTests/builds/react"
        },
        {
          key: "angular",
          name: "Angular",
          path: "https://acamposruiz.github.io/toyJsTests/builds/angular"
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
      path: "http://github.com/acamposruiz/toyJsTests"
    };

    return (
      <div className="container-fluid">
        <div className="row">
          <div  className="title col-sm-12 col-md-12">
            <a target="_blank" className="social github-icon" href={github.path}><img className="img-social" alt="Github home page" src={logoGithub}/></a>
            <h1>Javascript Framework Performance Tests</h1>
            <h5 className="subtitle">Go ahead to check the performance by select one</h5>
          <hr  className="line"/>
            <p className="description">This is a personal approach to check the performance of the most popular javascript frameworks nowadays in the market. So you are able to check it on your own. You can do so with the device of your election. So you can take note of the time each framework takes to finish the same operation. The task accomplished by each app in every framework is just move divs around. The quantity of divs grows along the time as the app is running.</p>
            <p className="description">You can select how many items you want the framework to move, then you get the time this particular framework needs to accomplish the task. You can compare the time each framework takes to accomplish the same task.</p>
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
