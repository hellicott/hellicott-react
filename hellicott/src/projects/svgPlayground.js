import '../App.css';
import React, { useState } from 'react';
import Mountains from '../svgs/mountain.js';
import { CompactPicker } from 'react-color';


function SvgPlayground() {
    const [background, setBackground] = useState({hex: "#9199c1"});
    const handleBackgroundChange = (background) => setBackground(background);
    
    const [foreground, setForeground] = useState({hex: "#5e5e74"});
    const handleForegroundChange = (foreground) => setForeground(foreground);

    return (
        <div id="svgPlayground" className="App">
            <div className="row">
                <div className="column">
                    <p>Mountains</p>
                    <CompactPicker color={foreground} onChangeComplete={handleForegroundChange} />
                </div>
                <div className="column">
                    <p>Circle</p>
                    <CompactPicker color={background} onChangeComplete={handleBackgroundChange} />
                </div>
            </div>
            <div>
                <Mountains moon={background.hex} mountains={foreground.hex} />
            </div>
        </div>
    );

}

export default SvgPlayground;