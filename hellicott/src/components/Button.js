import styled from "@emotion/styled";
import {Tooltip} from "@mui/material";

const Button = styled.button`
    padding: 5px;
    border-radius: 5px;
    border: solid 2px #FFFFFF00;
    background-color: #FFFFFF9F;
    &:hover {
      border: solid 2px white;
      background-color: #FFFFFF9F;
    }
    &:active {
      background-color: #FFFFFF3F;
    }
    
    & > div {
      display: flex;
      align-items: center;
    }

    & > div > * {
      margin: 0px 3px;
    }

`

const HellicottButton = ({children, onClick, tooltiptext, type}) => {
    return (
      <Tooltip title={tooltiptext} arrow>
        <Button onClick={onClick} type={type}>
          {children}
        </Button>
      </Tooltip>
    )
}

export default HellicottButton;