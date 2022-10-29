import '../App.css';
import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'



function RockPaperScissors() {
  const [winner, setWinner] = useState("Who will win?");
  const [playerChoice, setPlayerChoice] = useState(-1);
  const [botChoice, setBotChoice] = useState(-1);
  useEffect(() => {
    checkWin(); // This is be executed when `loading` state changes
  }, [botChoice, checkWin])


  return (
    <div id="rockpaperscissors" className="App">
      <header className="App-section darker-section">
        <p>Rock Paper Scissors!</p>
        <div className="row">
          <div className="column darker-section">
            <p>Bot</p>
            <FontAwesomeIcon icon={getSymbol(botChoice)} />
            <p>
              {playerChoice !== -1 
              ? <button id='playButton' className='subtle-button' onClick={selectBotChoice}>Play!</button>
              : ""}
            </p>
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
        <p>{winner}</p>
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
    // document.getElementById('playButton').setAttribute("hidden", "true");
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

  function checkWin() {
    console.log(botChoice + ", " + playerChoice);
    if (botChoice === playerChoice) {
      setWinner("It's a draw!");
    }
    else if (botChoice === 0) {
      (playerChoice === 1) ? playerWins() : playerLoses();
    }
    else if (botChoice === 1) {
      (playerChoice === 2) ? playerWins() : playerLoses();
    }
    else if (botChoice === 2) {
      (playerChoice === 0) ? playerWins() : playerLoses();
    }
  }

  function playerWins() {
    setWinner("You beat the bot!");
  }

  function playerLoses() {
    setWinner("You lost :(");
  }
}



export default RockPaperScissors;