import './App.css';
import React, { useState } from 'react';

function RandomColour() {
  const [colour, setColour] = useState("#00FF00");

  return (
    <div id="colourGenerator" className="App">
      <header className="App-section" style={{backgroundColor: colour}}>
        <form onSubmit={handleSubmit}>
          <p>
            Get a new randomly generated colour by clicking the button below
          </p>
          <button type="submit">New Colour</button>
          <p>{colour}</p>
        </form>
      </header>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();

    const randomColor = "#" + Math.floor(Math.random()*16777215).toString(16);

    setColour(randomColor);

  }

}

export default RandomColour;
