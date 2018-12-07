import React from 'react';
import logo from './logo.svg';
import logoGithub from './github-icon.svg';
import backIcon from './back.svg';

const REACT_VERSION = React.version;

export function AppComponent({
                        items,
                        controls,
                        result,
                        selectMaxItems
}) {
  return (
    <div className="App">
      <div className="App-intro content">
        {items}
      </div>
      <div className="modal-container">
        <div className="modal-head">
          <div className="controls">
            {controls.toggleButton}
            {controls.clearButton}
          </div>
          <div className="logo">
            <h5 className="App-title">
              <img src={logo} className="App-logo" alt="logo"/>
              React <small>(v.{REACT_VERSION})</small>
            </h5>
          </div>
        </div>
        <div className="modal-content">
          <div className="content">
            <div className="counter elements">
              <p>{result.elements}</p>
              <small>elements</small>
            </div>
            <div className="counter time">
              <p>{result.time}</p>
              <small>seconds</small>
            </div>
          </div>
        </div>
        <div className="modal-foot">
          {selectMaxItems}
        </div>
        <div className="info">
          <a target="_blank" className="social github-icon" href="https://github.com/acamposruiz/toyJsTests/blob/master/react-test/src/App.js">
            <img className="img-social" alt="Github" src={logoGithub}/> <span>View source code</span>
          </a>
        </div>
      </div>
      <div className="back-container">
        <a title="Go back" className="back-link" href="https://acamposruiz.github.io/toyJsTests/builds/home/index.html">
          <img className="img-social" alt="Github" src={backIcon}/>
        </a>
      </div>
    </div>
  )
}
