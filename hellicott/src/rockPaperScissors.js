import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'



function RockPaperScissors() {
  const [bot, setBot] = useState({faCopy});

  return (
    <div id="rockpaperscissors" className="App">
      <header className="App-section darker-section" style={{backgroundColor: '#282c34'}}>
        <p>Rock Paper Scissors!</p>
        <div className="row">
          <div className="column darker-section">
            <p>Bot</p>
            <FontAwesomeIcon icon={faQuestion} />
          </div>
          <div className="column lighter-section">
            <p>Player</p>
            <FontAwesomeIcon icon={faQuestion} />
            <p>
              <button className='subtle-button' onClick={copyHexColour}><FontAwesomeIcon icon={faHandBackFist} /></button>
              <button className='subtle-button' onClick={copyHexColour}><FontAwesomeIcon icon={faHand} /></button>
              <button className='subtle-button' onClick={copyHexColour}><FontAwesomeIcon icon={faHandScissors} /></button>
            </p>
          </div>
        </div>
      </header>
    </div>
  );

  function chooseBotAnswer(e) {
    e.preventDefault();

    const randomColor = "#" + Math.floor(Math.random()*3);


  }

  function toRPS() {

  }

  function copyHexColour() {

    navigator.clipboard.writeText("");

  }
}



export default RockPaperScissors;