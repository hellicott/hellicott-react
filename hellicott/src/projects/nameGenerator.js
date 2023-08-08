import '../App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import data from './sprintName.json';

function NameGenerator() {
  const [name, setName] = useState("Click button to generate");

  return (
    <div id="nameGenerator" className="App">            
    <div className='project-title'>
      <h1>Sprint Name Generator</h1>
    </div>
        <div className='inner-app-section'>
          <p>
            Get a new randomly generated sprint name by clicking the button below
          </p>
          <button className='subtle-button' onClick={handleSubmit}>Generate name</button>
          <p>
            <span style={{padding: 8}}>{name}</span>
            <button className='subtle-button tooltip' onClick={copyName}><FontAwesomeIcon icon={faCopy} />
            <span className="tooltiptext">copy name to clipboard</span>
            </button>
          </p>
          
        </div>
    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();

    let adjectives = data.adjectives;
    let adjective = adjectives[getRandomInt(adjectives.length)].toLowerCase()
    console.log(adjective);

    let animals = data.animals;
    let animal = animals[getRandomInt(animals.length)].toLowerCase()
    console.log(animal);

    setName(adjective + " " + animal)

  }

  function copyName(e) {
    e.preventDefault();
    navigator.clipboard.writeText(name);
  }

  function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

}



export default NameGenerator;