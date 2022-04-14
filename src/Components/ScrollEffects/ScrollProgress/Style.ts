import styled from "styled-components";

type StyleProp = {
    progresswidth: string;
}

export const Background = styled.div`
    height: 200vh;
`

export const ProgressBar = styled.div<StyleProp>`
    position: fixed;
    top: 0;
    right: 0;
    height: ${prop => prop.progresswidth};
    width: 10px;
    background: linear-gradient(to top, #008aff, #00ffe7);
    animation: animate 5s linear infinite;

    &::before{
        content:'';
        position: absolute;
        top: 0;
        right: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to ltop, #008aff, #00ffe7);
        filter: blue(10px);
    }

    @keyframes animate {
        0%, 100%{
            filter: hue-rotate(0deg);
        }   
        50%{
            filter: hue-rotate(360deg);
        }
    }

    
`

export const ScrollPath = styled.div`
    position: fixed;
    top: 0;
    right: 0;
    width: 10px;
    height: 100%;
    background: rgba(255,255,255,0.05);
`