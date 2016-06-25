require('./main.scss');

import 'babel-polyfill'
import React from 'react';
import { render } from 'react-dom'
import ProgressBar from './components/ProgressBar';

let currentStep = 4;
let stepData = [
  {
    title: 'Sign Up'
  },
  {
    title: 'Your Company'
  },
  {
    title: 'Add First Product'
  },
  {
    title: 'Finish'
  }
];

render(
  <ProgressBar currentStep={currentStep} stepData={stepData}></ProgressBar>,
  document.getElementById('app')
);
