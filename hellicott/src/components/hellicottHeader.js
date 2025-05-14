import '../App.css';
import React from 'react';
import HellicottLogo from '../svgs/hellicottLogo';
import IconButton from './iconButton';

import { faFileCode } from '@fortawesome/free-regular-svg-icons'

const HellicottHeader = (props) => { 
  const hexagon = "#5e5e74";
  const mountains = "#2c2c2c";
  const gitSymbol = "#000";

  return ( 
    <div className='header-section'>
      <div className="header-branding">
        <HellicottLogo size="50" hexagonColour={hexagon} mountainColour={mountains} gitColour={gitSymbol} />
        <h1>Hellicott</h1>
      </div>
      <div className="header-icons">
        <IconButton faIcon={faFileCode} link="https://github.com/hellicott/hellicott-react" tooltip="source code" />
      </div>
    </div>
    
        
  ); 
  
} 

export default HellicottHeader;
