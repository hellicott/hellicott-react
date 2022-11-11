import '../App.css';
import React, { useState } from 'react';
import Mountains from '..\\svgs\\mountain.js'

function SvgPlayground() {
    const [red, setRed] = useState("50");


    return (
        <div id="svgPlayground" className="App">
            <div>
                <input type="range" min="0" max="255" id="redRange" onChange={handleSlider}/>
            </div>
            <div>
              <Mountains moon="#00ffff" mountains="#ffff00" />
            </div>
        </div>
      );

    function handleSlider(e) {
        setRed(e.target.value);
        console.log(red);
    }

}

export default SvgPlayground;