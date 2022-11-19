import '../App.css';
import React, { useState } from 'react';
import Dino from '../svgs/dino.js';
import { CompactPicker } from 'react-color';


function SvgDino() {
        
    const [body, setBody] = useState({hex: "#5e5e74"});
    const handleBodyChange = (body) => setBody(body);

    const [spikes, setSpikes] = useState({hex: "#9199c1"});
    const handleSpikesChange = (spikes) => setSpikes(spikes);
    
    const [spots, setSpots] = useState({hex: "#9199c1"});
    const handleSpotsChange = (spots) => setSpots(spots);

    return (
        <div id="svgDino" className="App">
            <div className='project-title'>
                <h1>Dino Designer</h1>
            </div>
            <div className="row thin-section" >
                <div className='column-stack'>
                    <div className="row-stack">
                        <p>Body </p>
                        <CompactPicker color={body} onChangeComplete={handleBodyChange} />
                    </div>
                    <div className="row-stack">
                        <p>Spikes </p>
                        <CompactPicker color={spikes} className="colour-picker" onChangeComplete={handleSpikesChange} />
                    </div>
                    <div className="row-stack">
                        <p>Spots </p>
                        <CompactPicker color={spots} onChangeComplete={handleSpotsChange} />
                    </div>
                </div>
                <div className='column'>
                    <Dino body={body.hex} spikes={spikes.hex} spots={spots.hex} />
                </div>
            </div>
            
        </div>
    );

}

export default SvgDino;