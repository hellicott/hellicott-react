import styled from "@emotion/styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCopy } from '@fortawesome/free-regular-svg-icons'
import {Tooltip, Alert, Button} from "@mui/material";

const CopyText = styled.div`
    margin: 10px;
    display: flex;
    justify-content: center;
    & > div {
        background-color: #FFFFFF9F;
        color: black;
        min-width: 40%;
    }

`

const CopyToClipboard = ({text}) => {
    return (
        <CopyText >
            <Alert
            icon={false}
            action={
                <Tooltip title="Copy to clipboard" arrow>
                    <Button color="inherit" size="small" onClick={() => copyAction(text)}>
                        <FontAwesomeIcon icon={faCopy} />
                    </Button>
                </Tooltip>
            }
            >
            {text}
            </Alert>
        </CopyText>
    )
}

function copyAction(text) {
    navigator.clipboard.writeText(text);
  }


export default CopyToClipboard;
