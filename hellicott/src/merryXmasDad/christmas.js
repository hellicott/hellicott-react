import styled from "@emotion/styled";
import React from 'react';
import FlipCard from "../components/flipCard";
import ProjectTemplate from "../components/projectTemplate";
import Grid from '@mui/material/Grid2';
import '../App.css';
import data from './challenges.json';


const ChristmasContainer = styled.div`
`

const Christmas = () => {
    console.log(data.challenges);

  
    return (
    <div id="dadsCodemas" className="App">
      <ProjectTemplate heading={'Dad\'s <Code>mas Challenges!'} bgColour={'FireBrick'}>   
        <ChristmasContainer>
            <Grid container spacing={0.5}>
                {
                    data.challenges.map((item) => (
                        <Grid size={4}>
                            <FlipCard 
                                title={item.title} 
                                bgColour={'DarkSeaGreen'} 
                                // disabled={isLocked(item.date)}>
                                disabled={false}>
                            </FlipCard>

                        </Grid>
                    ))
                }
            </Grid>

        </ChristmasContainer>
      </ProjectTemplate>
    </div>
    )

    function isLocked(itemDate){
        const today = Date.now();
        const unlockDate = Date.parse(itemDate)
        return today < unlockDate;

    }

}


export default Christmas;
