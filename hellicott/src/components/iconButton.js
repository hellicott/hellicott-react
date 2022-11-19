import '../App.css';
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const IconButton = (props) => {

  return ( 
    <div>
        <a className='subtle-button tooltip'  target="_blank" href={props.link}>
            <FontAwesomeIcon height="2em" icon={props.faIcon} />
            <span className="tooltiptext">source code</span> 
        </a>
   
    </div>

        
  ); 
  
} 

export default IconButton;
