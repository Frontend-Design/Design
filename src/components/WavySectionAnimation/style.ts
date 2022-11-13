import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Wave = styled.div`
  position: absolute;
  left: 0;
  width: 100%;
  height: 100%;
  background: #4973ff;
  span {
    position: absolute;
    width: 325vh;
    height: 325vh;
    left: 50%;
    transform: translate(-50%, -75%);
    background: #000;
    :nth-child(1) {
      animation: aimate 5s linear infinite;
      border-radius: 45%;
      background: rgba(20, 20, 20, 1);
    }
    :nth-child(2) {
      animation: aimate 10s linear infinite;
      border-radius: 40%;
      background: rgba(20, 20, 20, 1);
    }
    :nth-child(3) {
      animation: aimate 15s linear infinite;
      border-radius: 42.5%;
      background: rgba(20, 20, 20, 0.5);
    }
  }
  @keyframes aimate {
    0% {
      transform: translate(-50%, -75%) rotate(0);
    }
    100% {
      transform: translate(-50%, -75%) rotate(360deg);
    }
  }
`;

export const Content = styled.div`
  position: relative;
  z-index: 1;
  color: #fff;
  font-size: 4em;
`;
