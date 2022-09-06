import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
  overflow: hidden;
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  transform: rotate(-35deg);
`;

export const Box = styled.div`
  position: relative;
  left: -200px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: calc(100% + 400px);
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  animation: animateSurface 1.5s ease-in-out infinite;
  @keyframes animateSurface {
    0% {
      transform: translateX(0px);
    }
    100% {
      transform: translateX(-200px);
    }
  }
`;

export const Cube = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: #03e9f4;
  box-shadow: 0 0 5px rgba(3, 233, 244, 1), 0 0 25px rgba(3, 233, 244, 1),
    0 0 50px rgba(3, 233, 244, 1), 0 0 100px rgba(3, 233, 244, 1),
    0 0 200px rgba(3, 233, 244, 1), 0 0 300px rgba(3, 233, 244, 1);
  transform-origin: bottom right;
  animation: animate 1.5s ease-in-out infinite;
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    60% {
      transform: rotate(90deg);
    }
    65% {
      transform: rotate(85deg);
    }
    70% {
      transform: rotate(90deg);
    }
    75% {
      transform: rotate(87.5deg);
    }
    80%,
    100% {
      transform: rotate(90deg);
    }
  }
`;
