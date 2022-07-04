import styled from "@emotion/styled";

type placeprop = {
    num: number;
    size: number;
}
type rotateprops = {
    X: number;
    Y: number;
    Z: number;
    time: string;
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
    gap: 500px;
`

export const CylinderBox = styled.div<rotateprops>`
    transform-style: preserve-3d;
    animation: animate ${props => props.time} linear infinite;
    --X: ${props => props.X * 360 + "deg"};
    --Y: ${props => props.Y * 360 + "deg"};
    --Z: ${props => props.Z * 360 + "deg"};

    @keyframes animate {
        0%{
            transform: perspective(1000px) rotateX(0deg)  rotateY(0deg) rotateZ(0deg);
        }
        100%{
            transform: perspective(1000px) rotateX(var(--X)) rotateY(var(--Y)) rotateZ(var(--Z)) ;
        }
    }
`

export const CylinderText = styled.span<placeprop>`
    position: absolute;
    color: lightgray;
    font-size: ${props => props.size}em;
    white-space: nowrap;
    text-transform: uppercase;
    font-weight: 1000;
    padding: 0 10px;
    transform-style: preserve-3d;
    text-shadow: 0 5px 15px rgba(0.0.0.0.25);
    --i: ${(props) => (props.num)};
    transform: translate(-50%, -50%) rotateX(calc(${props => props.num} * 22.5deg)) translateZ(${props => props.size * 30}px);

    i:nth-child(1){
        font-style: initial;
        color: #ff246f;
    }
    i:nth-child(2){
        font-style: initial;
        color: #12b5ff;
    }
`