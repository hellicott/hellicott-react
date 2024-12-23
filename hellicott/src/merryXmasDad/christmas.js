import styled from "@emotion/styled";
import React from 'react';
import FlipCard from "../components/flipCard";
import ProjectTemplate from "../components/projectTemplate";
import Grid from '@mui/material/Grid2';
import '../App.css';


const ChristmasContainer = styled.div`
`

const Christmas = () => {
  
    return (
    <div id="dadsCodemas" className="App">
      <ProjectTemplate heading={'Dad\'s <Code>mas Challenges!'} bgColour={'FireBrick'}>   
        <ChristmasContainer>
            <Grid container spacing={0.5}>
                <Grid size={4}>
                    <FlipCard title='Day 1' bgColour={'DarkSeaGreen'}>
                        <h2>Merry Christmas</h2>
                        <p> Today's challenge is...</p>
                        <p>Good Luck!</p>
                    </FlipCard>
                </Grid>
                <Grid size={4}>
                    <FlipCard title='Day 2' bgColour={'DarkSeaGreen'}>
                        <h2>Merry Christmas</h2>
                        <p> Today's challenge is...</p>
                        <p>Good Luck!</p>
                    </FlipCard>
                </Grid>
                <Grid size={4}>
                    <FlipCard title='Day 3' bgColour={'DarkSeaGreen'}>
                        <h2>Merry Christmas</h2>
                        <p> Today's challenge is...</p>
                        <p>Good Luck!</p>
                    </FlipCard>                
                </Grid>
                <Grid size={3}>
                    <FlipCard title='Day 4' bgColour={'DarkSeaGreen'}>
                        <h2>Merry Christmas</h2>
                        <p> Today's challenge is...</p>
                        <p>Good Luck!</p>
                    </FlipCard>                
                </Grid>
                <Grid size={3}>
                    <FlipCard title='Day 5' bgColour={'DarkSeaGreen'}>
                        <h2>Merry Christmas</h2>
                        <p> Today's challenge is...</p>
                        <p>Good Luck!</p>
                    </FlipCard>                
                </Grid>
                <Grid size={3}>
                    <FlipCard title='Day 6' bgColour={'DarkSeaGreen'}>
                        <h2>Merry Christmas</h2>
                        <p> Today's challenge is...</p>
                        <p>Good Luck!</p>
                    </FlipCard>                
                </Grid>
                <Grid size={3}>
                    <FlipCard title='Day 7' bgColour={'DarkSeaGreen'}>
                        <h2>Merry Christmas</h2>
                        <p> Today's challenge is...</p>
                        <p>Good Luck!</p>
                    </FlipCard>                
                </Grid>
            </Grid>

        </ChristmasContainer>
      </ProjectTemplate>
    </div>
    )

    
  async function handleSubmit(e){
        
  }

}

export default Christmas;
