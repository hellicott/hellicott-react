import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'


function RandomColour() {
  const [colour, setColour] = useState("#5e5e74");

  return (
    <div id="colourGenerator" className="App">
      <header className="App-section lighter-section">
        <div className='inner-app-section'>
          <p>
            Get a new randomly generated colour by clicking the button below
          </p>
          <button className='subtle-button' style={{color: colour}} onClick={handleSubmit}>New Colour</button>
          <p>
            <span style={{padding: 8}}>{colour}</span>
            <button className='subtle-button' onClick={copyHexColour}><FontAwesomeIcon icon={faCopy} /></button>
          </p>
          
        </div>
      </header>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();

    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    setColour(randomColor);

  }

  function copyHexColour() {

    navigator.clipboard.writeText(colour);

  }
}



export default RandomColour;