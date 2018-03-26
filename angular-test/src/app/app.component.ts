import {Component} from '@angular/core';
import * as _ from "lodash";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  state = {
    isToggleOn: false, // On/Off state indicator
    step: 0, // Iteration step
    int: undefined, // Reference to setInterval()
    mockData: [], // Where the list of elements will be store
    secondsCounter: 0,
    timer: undefined
  };

  /* Here we manage switching from initial state to running state (and the way back) when the application starts to generate data */
  switchState() {
    let mockData = this.state.mockData;
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
        if (step >= 219) {this.clear(false);}
        step++;
        mockData = _.shuffle(_.range(step * 10).map((element, index) => {
          return {style: this.divStyle(), content: index};
        }));
        this.state = {
          ...this.state,
          step, mockData, isToggleOn, int
        };
      }, 1);
    }

    this.state = {
      ...this.state, timer, isToggleOn, int
    };
  }

  divStyle() {
    function ramdonColor() {
      return _.shuffle(['red', 'cyan', 'grey', 'purple', 'black', 'blue', 'yellow', 'pink', 'orange', 'brown', 'green'])[0];
    }

    return {color: ramdonColor(), 'background-color': ramdonColor()};
  }

  /* Go back to initial state */
  clear(manual) {
    if (this.state.int) {
      clearInterval(this.state.int);
    }
    if (manual) {
      clearInterval(this.state.timer);
      this.state = {
        ...this.state,
        secondsCounter: 0
      };
    }
    this.state = {
      ...this.state,
      step: 0,
      mockData: [],
      isToggleOn: false,
      int: undefined
    };
  }

}
