import _ from 'lodash';
import React, {Component} from 'react';
import {AppComponent} from './AppComponent';
import './App.css';
import {ELEMENTS_INITIAL_STATE, ELEMENTS_OPTIONS, ELEMENTS_COLORS} from "./constants"

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      mockData: [], // Where the list of elements will be store
      isToggleOn: false, // On/Off state indicator
      step: 0, // Iteration step
      elnumValue: ELEMENTS_INITIAL_STATE,
      elnumOptions: ELEMENTS_OPTIONS,
      secondsCounter: 0,
      timer: undefined
    };
    this.switchState = this.switchState.bind(this);
    this.clear = this.clear.bind(this);
    this.setElnumValue = this.setElnumValue.bind(this);
  }

  /* Here we manage switching from initial state to running state (and the way back) when the application starts to generate data */
  switchState() {
    const newState = {isToggleOn: !this.state.isToggleOn, step: this.state.step};
    /* If the application is already running will gets stopped */
    if (this.state.int) {
      clearInterval(this.state.int);
      newState.int = undefined;
      clearInterval(this.state.timer);
    } else {
      newState.timer = setInterval(() => {
        this.state.secondsCounter += 1;
      }, 1000);
      /* If the application isn't running it starts to generate data */
      newState.int = setInterval(() => {
        /*Checking elements limit*/
        if ((newState.step * 10) >= this.state.elnumValue) {
          this.clear(false);
          return;
        }
        newState.step++;
        this.setState({
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
    const newState = {};
    if (this.state.int) {
      clearInterval(this.state.int);
    }
    if (manual) {
      clearInterval(this.state.timer);
      newState.secondsCounter = 0;
      newState.mockData = [];
      newState.step = 0;
    }
    this.setState({
      ...newState,
      isToggleOn: false,
      int: undefined
    });
  }

  setElnumValue(elnumValue) {
    return function () {
      this.clear(true);
      this.setState({elnumValue});
    }.bind(this);
  }

  divStyle() {
    function ramdonColor() {
      return _.shuffle(ELEMENTS_COLORS)[0];
    }

    return {color: ramdonColor(), 'background-color': ramdonColor()};
  }

  render() {
    const extradigits = (this.state.step === 0) ? '000' : (this.state.step < 10) ? '00' : (this.state.step < 100) ? '0' : '';
    const items = this.state.mockData.map(function (data, i) {
      return <div key={i} style={data.style}>{data.content}</div>
    });
    const controls = {
      toggleButton: (<button className={this.state.isToggleOn ? 'active' : 'no-active'} onClick={this.switchState}>
        {this.state.isToggleOn ? 'STOP' : 'START'}
      </button>),
      clearButton: (<button onClick={this.clear}>
        CLEAR
      </button>)
    };
    const result = {
      elements: `${extradigits}${this.state.step * 10}`,
      time: `${(this.state.secondsCounter < 10) ? "0" : ""}${this.state.secondsCounter}`,
    };
    const selectMaxItems = this.state.elnumOptions.map(function (elnum, i) {
      return <button className={(this.state.elnumValue === elnum) ? 'active' : 'no-active'}
                     onClick={this.setElnumValue(elnum)} key={i}>{elnum}</button>
    }.bind(this));
    return <AppComponent items={items} controls={controls} result={result} selectMaxItems={selectMaxItems}/>;
  }
}

export default App;
