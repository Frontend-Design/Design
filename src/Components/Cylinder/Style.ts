import styled from "styled-components";

type StyledProps = {
    num: number;
}

export const Background = styled.div`
@import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Spectral:ital,wght@1,800&display=swap');
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Poppins', sans-serif;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #222;
    overflow: hidden;
`

export const CylinderLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`

export const CylinderBox = styled.div`
    transform-style: preserve-3d;
    animation: animate 15s linear infinite;

    @keyframes animate {
        0%{
            transform: perspective(1000px) rotateX(0deg) rotate(35deg);
        }
        100%{
            transform: perspective(1000px) rotateX(360deg) rotate(35deg);
        }
    }
` 

export const CylinderText = styled.span<StyledProps>`
    position: absolute;
    color: lightgray;
    font-size: 3.5em;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 900;
    padding: 0 10px;
    transform-style: preserve-3d;
    text-shadow: 0 5px 15px rgba(0.0.0.0.25);
    --i: ${(props) => (props.num)};
    transform: translate(-50%, -50%) rotateX(calc(var(--i) * 22.5deg)) translateZ(100px);

    i:nth-child(1){
        font-style: initial;
        color: #ff246f;
    }
    i:nth-child(2){
        font-style: initial;
        color: #12b5ff;
    }
`