import './App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faQuestion } from '@fortawesome/free-solid-svg-icons'
import { faHandBackFist } from '@fortawesome/free-solid-svg-icons'
import { faHand } from '@fortawesome/free-solid-svg-icons'
import { faHandScissors } from '@fortawesome/free-solid-svg-icons'



function RockPaperScissors() {

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
              <button className='subtle-button' onClick={chooseBotAnswer}><FontAwesomeIcon icon={faHandBackFist} /></button>
              <button className='subtle-button' onClick={chooseBotAnswer}><FontAwesomeIcon icon={faHand} /></button>
              <button className='subtle-button' onClick={chooseBotAnswer}><FontAwesomeIcon icon={faHandScissors} /></button>
            </p>
          </div>
        </div>
      </header>
    </div>
  );

  function chooseBotAnswer(e) {
    e.preventDefault();

    const randomNum = "#" + Math.floor(Math.random()*3);

    console.log(randomNum);

  }

}



export default RockPaperScissors;