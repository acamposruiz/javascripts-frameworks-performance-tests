import _ from 'lodash';
import Timer from 'easytimer.js';
import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mockData: [], // Where the list of elements will be store
      isToggleOn: false, // On/Off state indicator
      step: 0, // Iteration step
      secondsCounter: "0"
    };
    this.switchState = this.switchState.bind(this);
    this.clear = this.clear.bind(this);
    this.timer = new Timer();
  }

  /* Here we manage switching from initial state to running state (and the way back) when the application starts to generate data */
  switchState() {
    const newState = {isToggleOn: !this.state.isToggleOn, step: this.state.step};
    /* If the application is already running will gets stopped */
    if (this.state.int) {
      clearInterval(this.state.int);
      newState.int = undefined;
      newState.secondsCounter = "0";
      this.timer = new Timer();
    } else {
      this.timer.start();
      /* If the application isn't running it starts to generate data */
      newState.int = setInterval(() => {
        if (newState.step >= 219) this.clear(false);
        newState.step++;
        this.setState({
          secondsCounter: this.timer.getTimeValues().seconds.toString(),
          step: newState.step,
          mockData: _.shuffle(_.range(newState.step * 10).map((element, index) => {
            return {style: this.divStyle(), content: index};
          }))
        });
      }, 1);
    }
    this.setState(newState);
  }

  /* Go back to initial state */
  clear(manual) {
    const newState = {mockData: [], step: 0};
    if (this.state.int) {
      clearInterval(this.state.int);
      newState.int = undefined;
      newState.isToggleOn = false;
    }
    if (manual) {
      newState.secondsCounter = 0;
      this.timer = new Timer();
    }
    this.setState(newState);
  }

  divStyle() {
    function ramdonColor() {
      return _.shuffle(['red', 'cyan', 'grey', 'purple', 'black', 'blue', 'yellow', 'pink', 'orange', 'brown', 'green'])[0];
    }
    return {color: ramdonColor(), 'background-color': ramdonColor()};
  }

  render() {
    return (

      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo"/>
          <h1 className="App-title">Welcome to React (v. 16.2.0)</h1>
          <button onClick={this.switchState}>
            {this.state.isToggleOn ? 'STOP' : 'START'}
          </button>
          <button onClick={this.clear}>
            CLEAR
          </button>
        </header>
        <div  className="step-info">
          <h1>{this.state.step * 10} elements</h1>

        </div>
        <div className="App-intro content">
          {this.state.mockData.map(function (data, i) {
            return <div key={i} style={data.style}>{data.content}</div>
          })}
        </div>
        <div className="timer-modal">
          <p> {(this.state.secondsCounter < 10)? "0": ""}{this.state.secondsCounter}</p>
          <small>seconds</small>
        </div>
      </div>
    );
  }
}

export default App;
