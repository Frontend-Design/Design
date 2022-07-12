import styled from "@emotion/styled";

export const Layout = styled.div`
    min-height: 100vh;
    cursor: none;
    span{
        position: fixed;
        background: #f00;
        width: 10px;
        height: 10px;
        pointer-events: none;
        border-radius: 50%;
        transform: translate(-5px, -5px);
    }
    svg{
        width: 100%;
        height: 100vh;
        pointer-events: none;
        position: fixed; 
        left: 0; 
        top: 0;
    }
`

export const Dot = styled.div`
    position: fixed;
    background: #f00;
    width: 10px;
    height: 10px;
    pointer-events: none;
    border-radius: 50%;
    transform: translate(-5px, -5px);
    animation: animate 3s linear infinite;

    @keyframes animate{
        0%{
            filter: hue-rotate(0deg);
        }

        100%{
            filter: hue-rotate(360deg);
        }
    }
`

export const Circle = styled.circle`
    /* position: fixed;
    width: 40px;
    height: 40px;
    border-radius: 100%;
    transform: translate(-20px,-20px);
    pointer-events: none; */
    fill: #D2330F;
    animation: animate 3s linear infinite;

    @keyframes animate {
        0%{filter: hue-rotate(0deg);}
        100%{filter: hue-rotate(360deg);}
    }
`

export const Polyline = styled.polyline`
    fill: none; 
    stroke: #D2330F; 
    stroke-width: 2;
    animation: animate 3s linear infinite;

    @keyframes animate {
        0%{filter: hue-rotate(0deg);}
        100%{filter: hue-rotate(360deg);}
    }
`