import styled from "@emotion/styled";
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectTemplate from "../components/projectTemplate";

const CountdownContainer = styled.div`
    font-family: "Courier New";
`

const CreateCountdown = () => {

    return (
    <div id="createCountdown" className="App">
        <CountdownContainer>
            <ProjectTemplate heading={'Create a Countdown'} bgColour={'Aqua'}>
            <Link to={generateCountdownLink(10000)}>Go to countdown</Link>
            </ProjectTemplate>
        </CountdownContainer>
    </div>
    );

    function generateCountdownLink(milliseconds){
        const timestamp = Date.now() + milliseconds + 2500;
        return "/countdown/"+timestamp;
    }

}


export default CreateCountdown;
