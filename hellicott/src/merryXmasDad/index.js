import styled from "@emotion/styled";
import React from 'react';
import FlipCard from "../components/flipCard";
import ProjectTemplate from "../components/projectTemplate";
import Grid from '@mui/material/Grid2';
import '../App.css';
import data from './challenges.json';


const ChristmasContainer = styled.div`
    font-family: "Courier New";
`

const Christmas = () => {  
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
                                    disabledMessage={"Unlocks on "+item.date}>
                                    {/* disabled={false}> */}
                                        <p>{item.challengeText}</p>
                                </FlipCard>

                            </Grid>
                        ))
                    }
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

}


export default Christmas;
