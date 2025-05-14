import '../App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = (props) => {

  return ( 
    <div>
        <a className='subtle-button tooltip'  target="_blank" rel="noreferrer" href={props.link}>
            <FontAwesomeIcon height="2em" icon={props.faIcon} />
            <span className="tooltiptext">{props.tooltip}</span> 
        </a>
   
    </div>

        
  ); 
  
} 

export default IconButton;
