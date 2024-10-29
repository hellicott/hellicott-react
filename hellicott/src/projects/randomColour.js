import '../App.css';
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import ProjectTemplate from '../components/projectTemplate';
import HellicottButton from '../components/Button';


function RandomColour() {
  const [colour, setColour] = useState("#5e5e74");

  return (
    <div id="colourGenerator" className="App">   
      <ProjectTemplate heading={"Random Colour Generator"} bgColour={colour}>
        <div className='inner-app-section' style={{backgroundColor:colour}}>
          <p>
            Get a new randomly generated colour by clicking the button below
          </p>
          <HellicottButton onClick={handleSubmit}>New Colour</HellicottButton>
          <p>
            <HellicottButton onClick={copyHexColour} tooltiptext={"copy hex colour to clipboard"}>
              <div>
                {colour}
                <FontAwesomeIcon icon={faCopy} />
              </div>
            </HellicottButton>
          </p>
          
        </div>
      </ProjectTemplate>         

    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();

    setColour(getRandomColor());

  }

  function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var colour = '#';
    for (var i = 0; i < 6; i++) {
      colour += letters[Math.floor(Math.random() * 16)];
    }
    return colour;
  }
  

  function copyHexColour() {

    navigator.clipboard.writeText(colour);

  }
}



export default RandomColour;