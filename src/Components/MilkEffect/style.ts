import styled from "styled-components";
import Wave from "react-wavify";

type placedprop = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #006bc6, #1ecafc);
  svg {
    width: 0;
    height: 0;
  }
`;

export const container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  h2 {
    position: absolute;
    color: #fff;
    font-size: 1.75em;
    font-weight: 500;
  }
`;

export const loader = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.25);
  filter: url(#Gooey);
`;

export const span = styled.div<placedprop>`
  position: absolute;
  left: 0;
  transform-origin: 150px;
  width: 60px;
  height: 60px;
  background: #fff;
  border-radius: 50%;
  animation: animate 5s ease-in-out infinite;
  animation-delay: calc(0.15s * var(--i));
  --i: ${(props) => props.num};
  @keyframes animate {
    0%,
    10% {
      width: 100px;
      height: 100px;
      transform: rotate(0deg) translateX(120px);
    }
    40%,
    70% {
      width: 40px;
      height: 40px;
      transform: rotate(calc(360deg / 8 * var(--i)));
      box-shadow: 0 0 0 10px #fff;
    }
    90%,
    100% {
      width: 100px;
      height: 100px;
      transform: rotate(0deg) translateX(120px);
    }
  }
`;

export const FigureWave = styled(Wave)``;

export const WaterWave = styled(Wave)`
  position: fixed;
  height: 50vh;
  bottom: 0;
`;
