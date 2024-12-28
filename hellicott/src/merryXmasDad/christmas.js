import styled from "@emotion/styled";
import React, { useState, useEffect } from 'react';
import FlipCard from "../components/flipCard";
import ProjectTemplate from "../components/projectTemplate";
import Grid from '@mui/material/Grid2';
import '../App.css';
import data from './challenges.json';


const ChristmasContainer = styled.div`
    font-family: "Courier New";
`

const Christmas = () => {  

    const [jokeStart, setJokeStart] = useState('');
    const [jokePunch, setJokePunch] = useState('');


    useEffect(()=>{
        getDadJoke();
    }, [])

    return (
    <div id="dadsCodemas" className="App">
        <ChristmasContainer>
            <ProjectTemplate heading={'Dad\'s <Code>mas Challenges!'} bgColour={'FireBrick'}>   
                <Grid container spacing={0.5}>
                    {
                        data.challenges.map((item) => (
                            <Grid size={3}>
                                <FlipCard 
                                    title={item.title} 
                                    bgColour={'DarkSeaGreen'} 
                                    disabled={isLocked(item.date)}
                                    // disabled={false}
                                    disabledMessage={"Unlocks on "+item.date}>
                                        <p>{item.challengeText}</p>
                                        <a target="_blank" href={item.link}>{item.linkText}</a>
                                </FlipCard>
                            </Grid>
                        ))
                    }
                    <Grid size={3}>
                        <FlipCard title={jokeStart} bgColour={'green'} disabled={false}>
                            <p>{jokePunch}</p>
                        </FlipCard>
                    </Grid>
                </Grid>
            </ProjectTemplate>
        </ChristmasContainer>
    </div>
    )

    function isLocked(itemDate){
        const today = Date.now();
        const unlockDate = Date.parse(itemDate)
        return today < unlockDate;

    }

    async function getDadJoke(){
        const apiUrl = 'https://official-joke-api.appspot.com/jokes/programming/random';
        const response = await fetch(apiUrl);
        const myJson = await response.json();
        setJokeStart(myJson[0].setup);
        setJokePunch(myJson[0].punchline);
        console.log(myJson[0].id);
    }

}


export default Christmas;
