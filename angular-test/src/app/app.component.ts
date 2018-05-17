import {Component, VERSION} from '@angular/core';
import * as _ from "lodash";
import {ELEMENTS_INITIAL_STATE, ELEMENTS_OPTIONS, ELEMENTS_COLORS} from "../constants"

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = {
    ngVersion: VERSION.full,
    isToggleOn: false, // On/Off state indicator
    step: 0, // Iteration step
    extradigits: '000',
    int: undefined, // Reference to setInterval()
    mockData: [], // Where the list of elements will be store
    secondsCounter: 0,
    elnumValue: ELEMENTS_INITIAL_STATE,
    elnumOptions: ELEMENTS_OPTIONS,
    timer: undefined
  };

  /* Here we manage switching from initial state to running state (and the way back) when the application starts to generate data */
  switchState() {
    let mockData = this.state.mockData;
    let extradigits = this.state.extradigits;
    let timer = this.state.timer;
    let step = this.state.step;
    let int = this.state.int;
    const isToggleOn = !this.state.isToggleOn;

    /* If the application is already running will gets stopped */
    if (int) {
      clearInterval(int);
      clearInterval(this.state.timer);
      int = undefined;
    } else {
      timer = setInterval(() => {
        this.state.secondsCounter += 1;
      }, 1000);
      /* If the application isn't running it starts to generate data */
      int = setInterval(() => {
        /*Checking elements limit*/
        if ((step * 10) >= this.state.elnumValue) {
          this.clear(false);
          return;
        }
        step++;
        extradigits = (step < 10) ? '00' : (step < 100) ? '0' : '';
        mockData = _.shuffle(_.range(step * 10).map((element, index) => {
          return {style: this.divStyle(), content: index};
        }));
        this.state = {
          ...this.state,
          step, mockData, isToggleOn, int, extradigits
        };
      }, 1);
    }

    this.state = {
      ...this.state, timer, isToggleOn, int
    };
  }

  divStyle() {
    function ramdonColor() {
      return _.shuffle(ELEMENTS_COLORS)[0];
    }

    return {color: ramdonColor(), 'background-color': ramdonColor()};
  }

  setElnumValue(elnumValue) {
    this.clear(true);
    this.state.elnumValue = elnumValue;
  }

  /* Go back to initial state */
  clear(manual) {
    clearInterval(this.state.timer);
    if (this.state.int) {
      clearInterval(this.state.int);
    }
    if (manual) {
      this.state = {
        ...this.state,
        extradigits: '000',
        step: 0,
        mockData: [],
        secondsCounter: 0
      };
    }
    this.state = {
      ...this.state,
      isToggleOn: false,
      int: undefined
    };
  }

}
