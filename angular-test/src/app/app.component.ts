import {Component} from '@angular/core';
import * as _ from "lodash";
import {SimpleTimer} from 'ng2-simple-timer';

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

  constructor(private st: SimpleTimer) { }

  ngOnInit() {
    this.initTimer();
  }

  initTimer() {
    this.st.delTimer('timerName');
    this.st.newTimer('timerName',1);
  }

  subscribeTimer() {
    if (this.state.timer) {
      // Unsubscribe if timer Id is defined
      this.st.unsubscribe(this.state.timer);
      this.state.timer = undefined;
    } else {
      // Subscribe if timer Id is undefined
      this.state.timer = this.st.subscribe('timerName', () => this.state.secondsCounter++);
    }
  }

  /* Here we manage switching from initial state to running state (and the way back) when the application starts to generate data */
  switchState() {
    let mockData = this.state.mockData;
    let timer = this.state.timer;
    let step = this.state.step;
    let secondsCounter = this.state.secondsCounter;
    let int = this.state.int;
    let isToggleOn = !this.state.isToggleOn;

    /* If the application is already running will gets stopped */
    if (int) {
      clearInterval(int);
      int = undefined;
      timer = 0;
      this.initTimer();
    } else {
      this.subscribeTimer();
      /* If the application isn't running it starts to generate data */
      int = setInterval(() => {
        if (step >= 219) this.clear(false);
        step++;
        mockData = _.shuffle(_.range(step * 10).map((element, index) => {
          return {style: this.divStyle(), content: index};
        }));
        this.state = {
          ...this.state,
          step, mockData, isToggleOn, int
        }
      }, 1);
    }

    this.state = {
      ...this.state, timer, secondsCounter, isToggleOn, int
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
      this.initTimer();
      this.st.unsubscribe(this.state.timer);
    }
    if (manual) {
      this.state = {
        ...this.state,
        timer: undefined,
        secondsCounter: 0
      };
    }
    this.state = {
      ...this.state,
      step: 0,
      mockData: [] ,
      isToggleOn: false,
      int: undefined
    };
  }

}
