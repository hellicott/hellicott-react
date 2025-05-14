import styled from "@emotion/styled";
import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import ProjectTemplate from "../components/projectTemplate";

const CountdownContainer = styled.div`
    font-family: "Courier New";
`

const Countdown = () => {  
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);

    const { timestamp } = useParams();
    const date = new Date(parseInt(timestamp));

    useEffect(() => {
        const interval = setInterval(() => calulateTimeRemaining(timestamp), 1000);
        return () => clearInterval(interval);
      }, []);

    return (
    <div id="countdown" className="App">
        <CountdownContainer>
            <ProjectTemplate heading={'Countdown'} bgColour={'Aqua'}>
                <p>the url is: {timestamp}</p>
                <p>the time is: {date.toDateString()}</p>
                <p>{days} days, {hours} hours, {minutes} minutes and {seconds} seconds remaining</p>

                <Link to="/countdown">Create new timer</Link>
            </ProjectTemplate>
        </CountdownContainer>
    </div>
    );

    function calulateTimeRemaining(timestamp){
        const time = timestamp - Date.now();
        if (time >= 0) {
            setDays(Math.floor(time / (1000 * 60 * 60 * 24)));
            setHours(Math.floor((time / (1000 * 60 * 60)) % 24));
            setMinutes(Math.floor((time / 1000 / 60) % 60));
            setSeconds(Math.floor((time / 1000) % 60));
        }
    }

}


export default Countdown;
