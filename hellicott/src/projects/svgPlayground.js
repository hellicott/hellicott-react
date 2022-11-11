import '../App.css';
import React, { useState } from 'react';
import Mountains from '..\\svgs\\mountain.js'

function SvgPlayground() {
    const [mountainColour, setMountainColour] = useState("#00ff00");
    const [moonColour, setMoonColour] = useState("#ffff00");

    return (
        <div id="svgPlayground" className="App">
            <form onSubmit={handleColourChange}>
                <label>
                    Mountain Hex Colour
                    <input type="text" name="mountainHex" />
                </label>
                <label>
                    Circle Hex Colour
                    <input type="text" name="moonHex" />
                </label>
                <input type="submit" value="Submit" />
            </form>
            <div>
                <Mountains moon={moonColour} mountains={mountainColour} />
            </div>
        </div>
      );

      function handleColourChange(event) {
        event.preventDefault();
        setMountainColour(event.target.mountainHex.value);
        setMoonColour(event.target.moonHex.value);
      }

}

export default SvgPlayground;