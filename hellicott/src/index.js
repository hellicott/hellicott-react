import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HellicottHeader from './components/hellicottHeader';
import DinoDesigner from './projects/DinoDesigner';
import RandomColour from './projects/randomColour';
import reportWebVitals from './reportWebVitals';
import BowlingScoreCalculator from './projects/bowlingScore';
import NameGenerator from './projects/nameGenerator';
import MorseCodeTranslator from './projects/morseCode';

ReactDOM.render(
  <React.StrictMode>
    <HellicottHeader />
    <NameGenerator />
    <RandomColour />
    <DinoDesigner />
    <MorseCodeTranslator />
    <BowlingScoreCalculator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
