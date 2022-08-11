import styled from "@emotion/styled";

type StyledProps = {
    kind: number;
    delay: string;
    length: number;
    duration: number;
}

export const BackgroundLayer = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #333;
    display: flex;
    justify-content: center;
`;

export const Banner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
    transform: preserve-3d;
    perspective: 500px;
`

export const Blocks = styled.div<StyledProps>`
    position: relative;
    display: block;
    width: ${props => { return 100 / props.length + "vw" }};
    height: ${props => { return 100 / props.length + "vh" }};
    animation: ${props => {
        switch (props.kind) {
            case 1: return "first .5s ease-in-out forwards"
            case 2: return "second 2s ease-in-out forwards"
            case 3: return "third 2s ease-in-out forwards"
            default: return
        }
    }};
    ${props => {
        switch (props.kind) {
            case 1: return `animation-delay: ${props.delay}; opacity: 0;`
            case 2: return `animation-delay: ${props.duration}s; animation-duration: ${2 + props.duration}s;`
            case 3: return `background: url("/img/rain.jpg");`
        }
    }}
    
    /* &:nth-of-type(2n) { // (2,4,6,8,10...2n)번째의 자식요소
        animation: animate .8s ease-in-out forwards;
        animation-delay: ${props => props.delay};
    }
    &:nth-of-type(7n+1) { // (1,8,15,22,30...7n+1)번째의 자식요소
        animation: animate 1.6s ease-in-out forwards;
        animation-delay: ${props => props.delay};
    }
    &:nth-of-type(7n) { // (7,14,21,28,35...7n)번째의 자식요소
        animation: animate 1.2s ease-in-out forwards;
        animation-delay: ${props => props.delay};
    } */

    @keyframes first {
        0%{
            opacity: 0; 
            top: 0;
        }
        50%{
            top: 300px;
            background: url("/img/rain.jpg");
            background-position: center;
            background-attachment: fixed;
            background-size: cover;
        }
        100%{
            opacity: 1;
            top: 0;
            background: url("/img/rain.jpg");
            background-position: center;
            background-attachment: fixed;
            background-size: cover;
        }
    }
    @keyframes second {
        0%{
            transform: translateZ(2000px);
            background: url("/img/rain.jpg");
            background-position: center;
            background-attachment: fixed;
            background-size: cover;
            box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
        }
        100%{
            transform: translateZ(0px);
            background: url("/img/rain.jpg");
            background-position: center;
            background-attachment: fixed;
            background-size: cover;
            border: 1px solid rgba(0,0,0,1);
            box-shadow: 0 5px 15px rgba(0, 0, 0, 0);
        }
    }
`

export const Container = styled.div`
    position: fixed;
    z-index: 100;
    bottom: 5vh;
    display: flex;
    gap: 20px;
    
    button{
        width: 100px;
    }
`