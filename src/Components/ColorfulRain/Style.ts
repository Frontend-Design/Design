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
    overflow: hidden;
    height: 100vh;
    `
export const RainLine = styled.i<StyledProps>`
    position: absolute;
    height: 200px;
    background: linear-gradient(transparent, white);
    border-bottom-left-radius: 5px;
    border-bottom-right-radius: 5px;
    overflow: hidden;
    animation: animate 5s linear infinite;
    width: ${props => props.randomwidth};
    left: ${props => props.randomleft};
    animation-delay: ${props => props.randomdelay};
    animation-duration: ${props => props.randomduration};


    &:nth-child(4n){ background: linear-gradient(transparent, #0ff)};
    &:nth-child(4n+1){ background: linear-gradient(transparent, #0f0)};
    &:nth-child(4n+2){ background: linear-gradient(transparent, #f00)};
    &:nth-child(4n+3){ background: linear-gradient(transparent, #ff0)};

    @keyframes animate {
        0%{ transform: translateY(-200px)};
        100%{ transform: translateY(calc(100vh))};
    }
`