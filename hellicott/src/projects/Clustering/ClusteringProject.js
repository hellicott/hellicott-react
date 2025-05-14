import '../../App.css';
import React, { useState } from 'react';
import ProjectTemplate from '../../components/projectTemplate';
import HellicottButton from '../../components/Button';
import { Point, Cluster } from '../../components/pointCluster.js';
import { Typography } from '@mui/material';


function ClusteringProject() {

  const points = [Point(0,0), Point(2,2), Point(3,2), Point(10,11), Point(0,1), Point(9,10), Point(7,11), Point(6,0), Point(7,1)];
  const clusters = [Cluster(1), Cluster(2), Cluster(3)]

  points.forEach(point => {
    const distances = [];
    clusters.forEach(cluster => {
      distances.push({
        id: cluster.id,
        distance: cluster.getDistanceTo(cluster.centroid)
      })
    });
    
    
  });

  return (
    <div id="cluster" className="App">   
      <ProjectTemplate heading={"Clustering [WIP]"} bgColour={"IndianRed"}>
        <div className='inner-app-section' >
          <Typography variant='h4'>Clustering Project</Typography>
          <HellicottButton>Button</HellicottButton>
        </div>
      </ProjectTemplate>         

    </div>
  );

}

export default ClusteringProject;