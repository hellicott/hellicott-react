import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import {Tooltip, Alert, Button} from "@mui/material";


const dynamicSegments = props =>
  css`
    background-color: ${(props.bgColour ? props.bgColour : 'grey')};
  `

const SpinnerContainer = styled.div`
  width: 400px;
  height: 400px;
  border-radius: 50%;
  &.twister {
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
  }

`

const Spinner = ({text}) => {
    return (
        <SpinnerContainer className="twister">
            <div></div>
        </SpinnerContainer>
    )
}

export default Spinner;
