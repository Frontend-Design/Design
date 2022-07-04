import styled from "@emotion/styled";

type placedprop = {
  num: number;
  color: string;
};

export const bg = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #050505;
  `;

export const cube = styled.div`
    position: relative;
    width: 300px;
    height: 300px;
    transform-style: preserve-3d;
    animation: animate 4s linear infinite;
    @keyframes animate {
      0% {
        transform: rotateX(-30deg) rotateY(0deg);
      }
      100% {
        transform: rotateX(-30deg) rotateY(360deg);
      }
    }
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
    }
  `;

export const span = styled.span<placedprop>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(#151515, ${props => props.color});
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
    --i: ${(prop) => prop.num};
  `;

export const top = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background-color: #222;
    transform: rotateX(90deg) translateZ(150px);
  `;