import styled from "styled-components";

type StyledProps = {
    randomwidth: string;
    randomleft: string;
    randomdelay: string;
    randomduration: string;
}

export const Background = styled.div`
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: black;
    width: 100vw;
    height: 100vh;
    overflow: hidden;
    position: fixed;
    z-index: -1;
`

export const RainLine = styled.i<StyledProps>`
    position: fixed;
    height: 200px;
    background: linear-gradient(transparent, white);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    animation: dropdown 5s linear infinite;
    width: ${props => props.randomwidth};
    left: ${props => props.randomleft};
    animation-delay: ${props => props.randomdelay};
    animation-duration: ${props => props.randomduration};


    &:nth-child(4n){ background: linear-gradient(transparent, #0ff)};
    &:nth-child(4n+1){ background: linear-gradient(transparent, #0f0)};
    &:nth-child(4n+2){ background: linear-gradient(transparent, #f00)};
    &:nth-child(4n+3){ background: linear-gradient(transparent, #ff0)};

    @keyframes dropdown {
        0%{ transform: translateY(-200px);}
        100%{ transform: translateY(100vh);}
    }
`