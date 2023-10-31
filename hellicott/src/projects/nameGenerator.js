import '../App.css';
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import data from './sprintName.json';

function NameGenerator() {
  const [name, setName] = useState("Click button to generate");
  const checkbox = useRef();

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
            <input 
              type='checkbox'
              name='alliterate'
              ref={checkbox}
            />
            <label htmlFor='alliterate'>Alliterate</label>
          <p>
            <span style={{padding: 8}}>{name}</span>
            <button className='subtle-button tooltip' onClick={copyName}><FontAwesomeIcon icon={faCopy} />
            <span className="tooltiptext">copy name to clipboard</span>
            </button>
          </p>
          
        </div>
    </div>
  );

  function handleSubmit(e){
    e.preventDefault();

    const alliterate = checkbox.current.checked;
    console.log("alliterate", alliterate)

    let newName = getRandomAdjective() + " ";

    if (alliterate) {
      newName += getAlliteratedAnimal(newName.charAt(0))
    } 
    else {
      newName += getRandomAnimal()
    }

    setName(newName)

  }

  function getAlliteratedAnimal(letter){
    const animals = data.animals;
    const alliteratingAnimals = animals.filter(x => x.toLowerCase().startsWith(letter.toLowerCase()))
    const animal = alliteratingAnimals[getRandomInt(alliteratingAnimals.length)].toLowerCase();

    return animal
  }

  function getRandomAdjective(){
    const adjectives = data.adjectives;
    const adjective = adjectives[getRandomInt(adjectives.length)].toLowerCase();

    return adjective;

  }

  function getRandomAnimal(){
    const animals = data.animals;
    const animal = animals[getRandomInt(animals.length)].toLowerCase();

    return animal;

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