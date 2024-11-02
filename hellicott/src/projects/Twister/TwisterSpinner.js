import styled from "@emotion/styled";
import React, { useRef } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLocationPin } from "@fortawesome/free-solid-svg-icons";
import HellicottButton from "../../components/Button";
import ProjectTemplate from "../../components/projectTemplate";

const SpinnerContainer = styled.div`
  height: 500px;
  display: inline-block;
`

const Pointer = styled.div`
  position: relative;
  margin-bottom: -6px;
  z-index: 1;
`

const Spinner = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  background-image: 
  repeating-conic-gradient(
      red 0deg,
      red 22.5deg,
      blue 22.5deg,
      blue 45deg,
      green 45deg,
      green 67.5deg,
      yellow 67.5deg,
      yellow 90deg
  );

  display: flex;
  justify-items: center;
  align-items: center;

`
const LimbSpinner = styled.div`
  position: relative;
  margin: 0px auto;
  padding: 20px;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-image: 
  conic-gradient(
      orange 0deg,
      orange 90deg,
      purple 90deg,
      purple 180deg,
      teal 180deg,
      teal 270deg,
      grey 270deg,
      grey 360deg
  );
  
  display: flex;
  justify-items: center;

`
const LimbLable = styled.div`
position: absolute;
width: 200px;
transform-origin: 100px 100px;
transform: rotate(${props => props.rotate}deg);
`


const TwisterSpinner = () => {
  const spinnerObject = useRef(null);
  
    return (
      <div id="twister" className="App">   
        <ProjectTemplate heading={"Twister Spinner [WIP]"} bgColour={'SeaShell'}>
          <div className='inner-app-section' >
            <SpinnerContainer>
              <Pointer>
                <FontAwesomeIcon icon={faLocationPin} />
              </Pointer>
              <Spinner ref={spinnerObject}>
                <LimbSpinner>
                  <LimbLable rotate="45">Right Hand</LimbLable>
                  <LimbLable rotate="135">Left Hand</LimbLable>
                  <LimbLable rotate="225">Right Foot</LimbLable>
                  <LimbLable rotate="315">Left Foot</LimbLable>
                </LimbSpinner>
              </Spinner>
              <HellicottButton onClick={handleSubmit}>Spin</HellicottButton>
            </SpinnerContainer>
          </div>
        </ProjectTemplate>
      </div>
    )

    
  async function handleSubmit(e){
    e.preventDefault();

    const randomSpin = Math.floor(Math.random() * 800) + 360;

    const animation = spinnerObject.current.animate(
      [
        { transform: `rotate(0deg)` },
        { transform: `rotate(${randomSpin}deg)` }
      ],
      { duration: 3000, easing:"ease-in-out", fill:"forwards" }
    );

    await animation.finished;
    animation.commitStyles();
    animation.cancel();
        
  }

}

export default TwisterSpinner;
