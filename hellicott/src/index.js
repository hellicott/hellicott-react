import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HellicottHeader from './components/hellicottHeader';
import SvgDino from './projects/svgDino';
import RandomColour from './projects/randomColour';
import RockPaperScissors from './projects/rockPaperScissors';
import reportWebVitals from './reportWebVitals';
import BowlingScoreCalculator from './projects/bowlingScore';

ReactDOM.render(
  <React.StrictMode>
    <HellicottHeader />
    <BowlingScoreCalculator />
    <SvgDino />
    <RandomColour />
    <RockPaperScissors />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
