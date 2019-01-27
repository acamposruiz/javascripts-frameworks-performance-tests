<template>
  <div id="app">
    <div class="App-intro content">
      <div v-for="(item, i) in mockData"  :key="i" :style="item.style">{{item.content}}</div>
    </div>
    <div class="modal-container">
      <div class="modal-head">
        <div class="controls">
          <button :class="toggleButton.className"
                  @click="switchState">
            {{toggleButton.text}}
          </button>
          <button @click="clear">
            CLEAR
          </button>
        </div>
        <div class="logo">
          <h5 class="App-title">
            <img alt="Vue logo" src="./assets/logo.png">
            Vue
            <small>({{VUE_VERSION}})</small>
          </h5>
        </div>
      </div>
      <div class="modal-content">
        <div class="content">
          <div class="counter elements">
            <p><span>{{elements}}</span></p>
            <small>elements</small>
          </div>
          <div class="counter time">
            <p><span>{{time}}</span></p>
            <small>seconds</small>
          </div>
        </div>
      </div>
      <div class="modal-foot">
        <button v-for="(elnum, i) in elnumOptions"  :key="i" :class="(elnumValue ===
        elnum) ? 'active' : 'no-active'" @click="setElnumValue(elnum)"> {{elnum}} </button>
      </div>
      <div class="info">
        <a target="_blank" class="social github-icon"
           href="https://github.com/acamposruiz/jsTestsByGamming/blob/master/vue-test/src/App.vue">
          <img class="img-social" alt="Github" :src="logoGithub"/> <span>View source code</span>
        </a>
      </div>
    </div>
    <div class="back-container">
      <a title="Go back" class="back-link"
         href="https://acamposruiz.github.io/jsTestsByGamming/builds/home/index.html">
        <img class="img-social" alt="Github" :src="backIcon"/>
      </a>
    </div>
  </div>
</template>

<script>
  import Vue from 'vue';
  import _ from 'lodash';
  import logoGithub from './github-icon.svg';
  import backIcon from './back.svg';
  import {ELEMENTS_INITIAL_STATE, ELEMENTS_OPTIONS, ELEMENTS_COLORS} from "./constants"

  const VUE_VERSION = new Vue()['$options']._base.version;

  export default {
    name: 'app',
    computed: {
      elements: (self = this) => {
        const extraDigits = (self.step === 0) ? '000' : (self.step < 10) ? '00' : (self.step <
          100) ? '0' : '';
        return `${extraDigits}${self.step * 10}`;
      },
      time: (self = this) => `${(self.secondsCounter < 10) ? "0" : ""}${self.secondsCounter}`,
      toggleButton: (self = this) => ({
        className: self.isToggleOn ? 'active' : 'no-active',
        text: self.isToggleOn ? 'STOP' : 'START'
      })
    },
    methods: {
      setElnumValue(elnumValue) {
        const self = this;
        self.clear(true);
        self.elnumValue = elnumValue;
      },
      switchState() {
        const self = this;
        self.isToggleOn = !self.isToggleOn;
        /* If the application is already running will gets stopped */
        if (self.int) {
          clearInterval(self.int);
          self.int = undefined;
          clearInterval(self.timer);
        } else {
          self.timer = setInterval(() => {
            self.secondsCounter += 1;
          }, 1000);
          /* If the application isn't running it starts to generate data */
          self.int = setInterval(() => {
            /*Checking elements limit*/
            if ((self.step * 10) >= self.elnumValue) {
              self.clear(false);
              return;
            }
            self.step++;
            self.mockData = _.shuffle(_.range(self.step * 10).map((element, index) => {
              return {style: self.divStyle(), content: index};
            }));
          }, 1);
        }
      },
      divStyle() {
        function ramdonColor() {
          return _.shuffle(ELEMENTS_COLORS)[0];
        }

        return {color: ramdonColor(), backgroundColor: ramdonColor()};
      },
      clear(manual) {
        const self = this;
        if (self.int) {
          clearInterval(self.int);
        }
        if (manual) {
          clearInterval(self.timer);
          Object.assign(self, {
            secondsCounter: 0,
            mockData: [],
            step: 0,
          });
        }
        Object.assign(self, {
          isToggleOn: false,
          int: undefined
        });
      }
    },
    data: function () {
      return {
        logoGithub,
        backIcon,
        VUE_VERSION,
        mockData: [], // Where the list of elements will be store
        isToggleOn: false, // On/Off state indicator
        step: 0, // Iteration step
        elnumValue: ELEMENTS_INITIAL_STATE,
        elnumOptions: ELEMENTS_OPTIONS,
        secondsCounter: 0,
        int: undefined,
        timer: undefined
      };
    }
  }
</script>

<style>

  #app {
    text-align: center;
    font-family: sans-serif;
  }

  .App-logo {
    animation: App-logo-spin infinite 20s linear;
    height: 5rem;
  }

  .App-header {
    background-color: #222;
    height: 9.375rem;
    padding: 1.25rem;
    color: white;
  }

  .App-title {
    top: -5.1875rem;
    position: relative;
    font-size: 2em;
    padding-bottom: 1.75rem;
  }

  .step-info {
    width: 100%;
    text-align: center;
  }

  .logo small {
    font-size: .6em;
  }

  @keyframes App-logo-spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }

  .modal-container {
    width: 100%;
    position: absolute;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .modal-head {
    margin-bottom: 0.5rem;
    height: 5rem;
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .modal-head .logo {
    padding-right: 1.625rem;
    background-color: white;
    border-radius: .400rem;
    margin-left: .4375rem;
  }

  .modal-head img {
    position: relative;
    top: 1.9374rem;
    width: 2.4em;
  }

  .modal-container .controls {
    display: flex;
  }

  .modal-container .controls button {
    margin: .1875rem;
    opacity: .9;
    background-color: #41B883;
    color: white;
    border-radius: .400rem;
    padding: 1.0625rem;
    font-size: 1.5em;
  }

  .modal-container .controls button.active {
    background-color: white;
    color: red;
    opacity: 1;
  }

  .modal-container .modal-content {
    display: flex;
    flex-direction: row;
    justify-content: center;
  }

  .modal-container .modal-content .content {
    opacity: .9;
    background-color: #41B883;
    color: white;
    border-radius: 1rem;
    width: 37.5rem;
  }

  .modal-container .counter {
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 9em;
    padding: 1.4375rem;
  }

  .modal-container .counter.time {
    color: black;
  }

  .modal-container .counter p {
    position: inherit;
    margin: 0px;
    padding: 0px;
  }

  .modal-container .counter small {
    font-size: 0.25em;
    margin: 0px;
    padding: 0px;
  }

  .modal-foot button {
    margin: .1875rem;
    opacity: .9;
    background-color: white;
    color: #41B883;
    border-radius: .500rem;
    padding: .5625rem;
    font-size: 1.3em;
  }

  .modal-foot button.active {
    background-color: #41B883;
    color: white;
    border-top-left-radius: 0px;
    border-top-right-radius: 0px;
    top: -.3rem;
    position: relative;
    border: 0px;
  }

  .controls button.no-active {
    background-color: #35495E;
  }

  .info {

  }

  .social {
    color: grey;
    margin: 1rem;
    padding: 1rem;
    display: inline-block;
    opacity: .9;
    background-color: white;
    border-radius: 15px;
  }

  .social:hover {
    opacity: 1;
  }

  .img-social {
    top: .5rem;
    opacity: .7;
    width: 2rem;
    position: relative;
  }


  .back-container {
    float: left;
    position: absolute;
    padding: 2rem;
  }

  .back-container .back-link {
    padding: 1rem;
    display: block;
    background: white;
    border-radius: 24px;
    opacity: .8;
  }

  .back-container .back-link:hover {
    opacity: 1;
  }

  .back-container .back-link img {
    width: 5rem;
  }

  @media (max-width: 1200px) {
    html {
      font-size: 13px;
    }
  }

  @media (max-width: 700px) {
    html {
      font-size: 12px;
    }
  }

  @media (max-width: 500px) {
    html {
      font-size: 9px;
    }
  }

  @media (max-width: 300px) {
    html {
      font-size: 5px;
    }
  }

  body {
    margin: 0;
    padding: 0;
  }

  .content {
    width: 100%;
  }

  .content div {
    float: left;
    border-radius: 122px;
    font-size: 12.8px;
  }

</style>
