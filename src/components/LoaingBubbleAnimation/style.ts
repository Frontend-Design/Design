import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Box = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  animation: rotatBox 10s linear infinite;
  @keyframes rotatBox {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Circle = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #38c1ff;
  border-radius: 50%;
  animation: animate 5s linear infinite;
  @keyframes animate {
    0% {
      transform: scale(1);
      transform-origin: left;
    }
    50% {
      transform: scale(0);
      transform-origin: left;
    }
    50.01% {
      transform: scale(0);
      transform-origin: right;
    }
    100% {
      transform: scale(1);
      transform-origin: right;
    }
  }
  :nth-child(2) {
    background: #ff3378;
    animation-delay: -2.5s;
  }
`;

export const Title = styled.h2`
  margin-top: 20px;
  font-size: 20px;
  font-weight: 400;
  letter-spacing: 4px;
`;
