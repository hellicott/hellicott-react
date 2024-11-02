import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import HellicottHeader from './components/hellicottHeader';
import DinoDesigner from './projects/DinoDesigner';
import RandomColour from './projects/randomColour';
import reportWebVitals from './reportWebVitals';
import NameGenerator from './projects/SprintNameGenerator/nameGenerator';
import MorseCodeTranslator from './projects/morseCode';
import TwisterSpinner from './projects/Twister/TwisterSpinner';

ReactDOM.render(
  <React.StrictMode>
    <HellicottHeader />
    <TwisterSpinner />
    <NameGenerator />
    <RandomColour />
    <DinoDesigner />
    <MorseCodeTranslator />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
