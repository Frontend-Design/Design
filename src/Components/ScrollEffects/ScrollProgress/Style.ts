import styled from "styled-components";

type StyleProp = {
    progresswidth: string;
}

export const Background = styled.div`
`

export const ProgressBar = styled.div<StyleProp>`
    position: fixed;
    bottom: 0;
    left: 0;
    width: ${prop => prop.progresswidth};
    height: 10px;
    background: linear-gradient(to left, #008aff, #00ffe7);
    animation: animate 5s linear infinite;

    &::before{
        content:'';
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: linear-gradient(to left, #008aff, #00ffe7);
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
    bottom: 0;
    left: 0;
    width: 100%;
    height: 10px;
    background: rgba(255,255,255,0.05);
`