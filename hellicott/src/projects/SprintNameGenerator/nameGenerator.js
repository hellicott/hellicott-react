import '../App.css';
import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import data from './sprintName.json';
import ProjectTemplate from '../components/projectTemplate';
import HellicottButton from '../components/Button';

function NameGenerator() {
  const [name, setName] = useState("Click button to generate");
  const checkbox = useRef();

  return (
    <div id="nameGenerator" className="App">   
      <ProjectTemplate heading={"Sprint Name Generator"} bgColour={'DarkSeaGreen'}>
      
          <div className='inner-app-section'>
            <p>
              Get a new randomly generated sprint name by clicking the button below
            </p>
              <HellicottButton onClick={handleSubmit}>Generate Name</HellicottButton>
              <input 
                type='checkbox'
                name='alliterate'
                ref={checkbox}
              />
              <label htmlFor='alliterate'>Alliterate</label>
            <p>
              <HellicottButton onClick={copyName} tooltiptext={"copy name to clipboard"}>
                {name}
                <FontAwesomeIcon icon={faCopy} />
              </HellicottButton>
            </p>
            
          </div>
        </ProjectTemplate>

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