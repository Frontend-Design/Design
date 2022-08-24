import styled from "@emotion/styled";

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  animation: changeBgColor 4s steps(1) infinite;
  @keyframes changeBgColor {
    0% {
      background: #ff0;
    }
    25% {
      background: #0f0;
    }
    50% {
      background: #ff4786;
    }
    75% {
      background: #2da2ff;
    }
    100% {
      background: #ff0;
    }
  }
`;

export const Loader = styled.div`
  position: relative;
  width: 50px;
  height: 50px;
  background: #000;
  animation: rotate 1s linear infinite;
  @keyframes rotate {
    0% {
      transform: rotate(90deg);
    }
    50%,
    100% {
      transform: rotate(0deg);
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #fff;
  }
`;

export const LoadaeBox = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  background: #000;
  animation: animate 1s linear infinite;
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }

    50%,
    100% {
      transform: rotate(180deg);
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    right: 2px;
    bottom: 2px;
    background: #fff;
  }
  :nth-child(1) {
    top: -100%;
    left: -2px;
    transform-origin: bottom right;
    ::before {
      background: #ff0;
    }
  }
  :nth-child(2) {
    right: -100%;
    top: -2px;
    transform-origin: bottom left;
    ::before {
      background: #0f0;
    }
  }
  :nth-child(3) {
    bottom: -100%;
    left: 2px;
    transform-origin: top left;
    ::before {
      background: #ff4786;
    }
  }
  :nth-child(4) {
    left: -100%;
    top: 2px;
    transform-origin: top right;
    ::before {
      background: #2da2ff;
    }
  }
`;
