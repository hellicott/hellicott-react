import '../App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'



function RockPaperScissors() {
  const [playerChoice, setPlayerChoice] = useState(-1);
  const [botChoice, setBotChoice] = useState(-1);

  return (
    <div id="rockpaperscissors" className="App">
      <header className="App-section darker-section">
        <p>Rock Paper Scissors!</p>
        <div className="row">
          <div className="column darker-section">
            <p>Bot</p>
            <FontAwesomeIcon icon={getSymbol(botChoice)} />
            
          </div>
          <div className="column lighter-section">
            <p>Player</p>
            <FontAwesomeIcon icon={getSymbol(playerChoice)} />
            <p>
              <button className='subtle-button' onClick={updatePlayerRock}><FontAwesomeIcon icon={getSymbol(0)} /></button>
              <button className='subtle-button' onClick={updatePlayerPaper}><FontAwesomeIcon icon={getSymbol(1)} /></button>
              <button className='subtle-button' onClick={updatePlayerScissors}><FontAwesomeIcon icon={getSymbol(2)} /></button>
            </p>
          </div>
        </div>
        <p>
          {playerChoice !== -1 
          ? <button id='playButton' className='subtle-button' onClick={selectBotChoice}>Play!</button>
          : ""}
        </p>
      </header>
    </div>
  );

  function updatePlayerRock() {
    setPlayerChoice(0);
  }
  function updatePlayerPaper() {
    setPlayerChoice(1);
  }
  function updatePlayerScissors() {
    setPlayerChoice(2);
  }

  function selectBotChoice(){
    const randomNum = Math.floor(Math.random()*3);

    setBotChoice(randomNum);

  }

  function getSymbol(num) {
    if (num === -1){
      return faQuestion;
    }

    if (num === 0){
      return faHandBackFist;
    }

    if (num === 1){
      return faHand;
    }

    if (num === 2){
      return faHandScissors;
    }
  }

}


export default RockPaperScissors;