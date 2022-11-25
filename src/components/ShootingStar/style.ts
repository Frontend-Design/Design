import styled from "@emotion/styled";

export const bg = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
`;

export const Section = styled.section`
  position: relative;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/bg2.png);
  background-position-x: center;
  background-size: cover;
  animation: animateBg 5s linear infinite;
  @keyframes animateBg {
    0%,
    100% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.2);
    }
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 4px;
  height: 4px;
  background: #fff;
  border-radius: 50%;
  box-shadow: 0 0 0 4px rgba(255, 255, 255, 0.1),
    0 0 0 8px rgba(255, 255, 255, 0.1), 0 0 20px rgba(255, 255, 255, 1);
  animation: animate 3s linear infinite;
  @keyframes animate {
    0% {
      transform: rotate(315deg) translateX(0);
      opacity: 1;
    }
    70% {
      opacity: 1;
    }
    100% {
      transform: rotate(315deg) translateX(-1000px);
      opacity: 0;
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    width: 300px;
    height: 1px;
    background: linear-gradient(90deg, #fff, transparent);
  }
  :nth-of-type(1) {
    top: 0;
    right: 0;
    left: initial;
    animation-delay: 0;
    animation-duration: 1s;
  }
  :nth-of-type(2) {
    top: 0;
    right: 80px;
    left: initial;
    animation-delay: 0.2s;
    animation-duration: 3s;
  }
  :nth-of-type(3) {
    top: 80px;
    right: 0;
    left: initial;
    animation-delay: 0.4s;
    animation-duration: 2s;
  }
  :nth-of-type(4) {
    top: 0;
    right: 180px;
    left: initial;
    animation-delay: 0.6s;
    animation-duration: 1.5s;
  }
  :nth-of-type(5) {
    top: 0;
    right: 400px;
    left: initial;
    animation-delay: 0.8s;
    animation-duration: 2.5s;
  }
  :nth-of-type(6) {
    top: 0;
    right: 600px;
    left: initial;
    animation-delay: 1s;
    animation-duration: 3s;
  }
  :nth-of-type(7) {
    top: 300px;
    right: 0px;
    left: initial;
    animation-delay: 1.2s;
    animation-duration: 1.75s;
  }
  :nth-of-type(8) {
    top: 0;
    right: 700px;
    left: initial;
    animation-delay: 1.4s;
    animation-duration: 1.75s;
  }
  :nth-of-type(9) {
    top: 0px;
    right: 1000px;
    left: initial;
    animation-delay: 0.75s;
    animation-duration: 2.25s;
  }
  :nth-of-type(10) {
    top: 0;
    right: 450px;
    left: initial;
    animation-delay: 2.75s;
    animation-duration: 2.25s;
  }
`;
