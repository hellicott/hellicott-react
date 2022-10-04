import './App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'



function RockPaperScissors() {
  const [botChoice, setBotChoice] = useState(faQuestion);
  const [playerChoice, setPlayerChoice] = useState(faQuestion);

  return (
    <div id="rockpaperscissors" className="App">
      <header className="App-section darker-section">
        <p>Rock Paper Scissors!</p>
        <div className="row">
          <div className="column darker-section">
            <p>Bot</p>
            <FontAwesomeIcon icon={botChoice} />
          </div>
          <div className="column lighter-section">
            <p>Player</p>
            <FontAwesomeIcon icon={playerChoice} />
            <p>
              <button className='subtle-button' onClick={updatePlayerRock}><FontAwesomeIcon icon={faHandBackFist} /></button>
              <button className='subtle-button' onClick={updatePlayerPaper}><FontAwesomeIcon icon={faHand} /></button>
              <button className='subtle-button' onClick={updatePlayerScissors}><FontAwesomeIcon icon={faHandScissors} /></button>
            </p>
          </div>
        </div>
        <p id='rpsResult'>Who will win?</p>
      </header>
    </div>
  );

  function updatePlayerRock() {
    setPlayerChoice(faHandBackFist);
  }
  function updatePlayerPaper() {
    setPlayerChoice(faHand);
  }
  function updatePlayerScissors() {
    setPlayerChoice(faHandScissors);
  }
  function getSymbol(num) {
    if (num === 0){
      console.log(num);
      return {faHandBackFist}.faHandBackFist;
    }
    if (num === 1){
      console.log(num);

      return faHand;
    }
    if (num === 2){      
      console.log(num);

      return faHandScissors;
    }
  }


}



export default RockPaperScissors;