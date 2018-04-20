import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
/*import logo from './logo.svg';*/
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      frameworks: [
        {
          name: "ReactJs",
          path: "react"
        },
        {
          name: "Angular",
          path: "angular"
        },
        {
          name: "VueJs",
          path: "vue"
        }
      ]
    };
  }

  render() {
    const sm = "12";
    const md = parseInt(12/this.state.frameworks.length, 10);

    return (
      <div className="">
        <div className="row">
          <div  className="title col-sm-12 col-md-12">
            <h1>Test yourself a Js framwork</h1>
          </div>
        </div>
        <div className="row app-container">
          {this.state.frameworks.map(function (fm, i) {
            return <a key={i} href={fm.path} className={`${fm.name.toLowerCase()} col-sm-${sm} col-md-${md}`}>
              {fm.name}
            </a>
          })}
        </div>
      </div>
    );
  }
}

export default App;
