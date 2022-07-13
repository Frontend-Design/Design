import styled from "@emotion/styled";

export const Layout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh; 
    background: #1c1c1c;
    gap: 50px;
`

export const box1 = styled.div`
    position: relative;
    height: 200px;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const circle = styled.div`
    position: relative;
    width: 200px;
    height: 200px;
    border: 40px solid #000;
    border-radius: 50%;
    &:nth-child(1){
        left: 20px;
    }
    &:nth-child(2){
        right: 20px;
    }
`

export const dot = styled.div`
    position: absolute;
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: #fff;
    left: 180px;
    top: 50%;
    transform: translateY(-50%);
    animation: dot 8s linear infinite;
    transform-origin: 100px 50%;

    @keyframes dot {
        0%{
            transform: translate(0, -50%) rotate(0);
            transform-origin: 100px 50%;
        }
        
        50%{
            transform: translate(0, -50%) rotate(360deg);
            transform-origin: 100px 50%;
        }
        50.00000000001%{
            transform: translate(0, -50%) rotate(0);
            transform-origin: -60px 50%;
        }
        
        to{
            transform: translate(0, -50%) rotate(-360deg);
            transform-origin: -60px 50%;
        }
    }
`

export const box2 = styled.div`
    width: 400px;

    svg{
        fill: none;
        stroke-width: 14px;
        stroke: url(#color);
        transform: scale(3.7);
        stroke-dasharray: 60 172;
        stroke-linecap: round;
        animation: line 2.5s linear infinite;

        @keyframes line {
            0%{
                stroke-dashoffset: 0;
            }
            to{
                stroke-dashoffset: 232;
            }
        }
    }
`