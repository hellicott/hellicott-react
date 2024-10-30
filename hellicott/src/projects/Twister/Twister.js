import '../../App.css';
import React, { useState } from 'react';
import ProjectTemplate from '../../components/projectTemplate';
import HellicottButton from '../../components/Button';
import { Typography } from '@mui/material';

const Sides = {
    Right: 'right',
    Left: 'left'
}

const Limbs = {
    Hand: 'hand',
    Foot: 'foot'
}

const Colours = {
    Blue: 'blue',
    Red: 'red',
    Green: 'green',
    Yellow: 'yellow'
};

function TwisterSpinner() {
  const [side, setSide] = useState(Sides.Right);
  const [limb, setLimb] = useState(Limbs.Foot);
  const [colour, setColour] = useState(Colours.Red)

  return (
    <div id="twister" className="App">   
      <ProjectTemplate heading={"Twister Spinner [WIP]"} bgColour={colour}>
        <div className='inner-app-section' >
          <Typography variant='h4'>{side} {limb} {colour}</Typography>
          <HellicottButton onClick={handleSubmit}>Spin</HellicottButton>
        </div>
      </ProjectTemplate>         

    </div>
  );

  function handleSubmit(e) {
    e.preventDefault();

    setColour(getRandomFromGroup(Colours));
    setLimb(getRandomFromGroup(Limbs));
    setSide(getRandomFromGroup(Sides));

  }

  function getRandomFromGroup(group) {
    const keys = Object.keys(group);
    const val = group[keys[ keys.length * Math.random() << 0]];
    return(val)
  }
  
}

export default TwisterSpinner;