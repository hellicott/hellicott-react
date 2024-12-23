import styled from "@emotion/styled";
import React, { useState } from 'react';

const FlipCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    position: relative;
    border-radius: 0.35rem;
    background-color: ${props => props.bgColour};
    transform-style: preserve-3d;
    transition: 350ms;
    cursor: pointer;
    transform: perspective(1000px) rotateY(var(--rotate-y, 0)) translateY(var(--translate-y, 0));
    height: 300px;
    margin: 10px;
    
    &.flip {
        --rotate-y: 180deg;
    }

    &:hover {
        --translate-y: -2px;
        box-shadow: 0 0 5px 2px rgba(0, 0, 0, 0.5);
        opacity: 1;
    }
    
    & > .front, .back {
        position: absolute;
        padding: 1rem;
        backface-visibility: hidden;
        width: -webkit-fill-available;
    }
    
    & > .front {
        left: 0;
    }

    & > .back {
        transform: rotateY(180deg);
    }
    
`
const FlipCard = ({children, title, bgColour}) => {
    const [flip, setFlip] = useState(false);

    return (
        <FlipCardContainer 
            className={flip ? "flip" : ""} 
            onClick={() => setFlip(!flip)} 
            bgColour={bgColour}
        >
            <div className="front">
                <h1>{title}</h1>
            </div>
            <div className="back">
                <subtitle>{title}</subtitle>
                {children}
            </div>
        </FlipCardContainer>
    )
};

export default FlipCard;