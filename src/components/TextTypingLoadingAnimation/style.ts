import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #121213;
`;

export const Loader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  background: #1a1a1f;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  overflow: hidden;
  color: #fff;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0004);
  :hover {
    background: #03e9f4;
    color: #050801;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03d9f4, 0 0 50px #03e9f4,
      0 0 200px #03e9f4;
    h2 {
      color: #111;
      border-right: 1px solid #111;
    }
  }
`;

export const Title = styled.h2`
  font-family: consolas;
  color: #03e9f4;
  overflow: hidden;
  letter-spacing: 2px;
  transition: 0.5s;
  border-right: 1px solid #03e9f4;
  animation: typing 5s steps(10) infinite;
  @keyframes typing {
    0%,
    90%,
    100% {
      width: 0px;
    }
    30%,
    60% {
      width: 123.89px;
    }
  }
`;

export const Spin = styled.span`
  position: absolute;
  display: block;
  :nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 5px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: animate1 2s linear infinite;
    animation-delay: 0s;
    @keyframes animate1 {
      0% {
        left: -100;
      }
      50%,
      100% {
        left: 100%;
      }
    }
  }
  :nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 5px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: animate3 2s linear infinite;
    animation-delay: 1s;
    @keyframes animate3 {
      0% {
        right: -100;
      }
      50%,
      100% {
        right: 100%;
      }
    }
  }
  :nth-child(2) {
    top: -100%;
    right: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: animate2 2s linear infinite;
    animation-delay: 0.5s;
    @keyframes animate2 {
      0% {
        top: -100;
      }
      50%,
      100% {
        top: 100%;
      }
    }
  }
  :nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 5px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: animate4 2s linear infinite;
    animation-delay: 1.5s;
    @keyframes animate4 {
      0% {
        bottom: -100;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  }
`;
