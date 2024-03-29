import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
`;

export const Bubble = styled.div`
  position: absolute;
  width: 200px;
  height: 200px;
  border-radius: 50%;
  box-shadow: inset 0 0 25px rgba(255, 255, 255, 0.25);
  animation: animate 8s ease-in-out infinite;
  :nth-child(2) {
    position: relative;
    zoom: 0.45;
    left: -10px;
    top: -100px;
    animation-delay: -4s;
  }
  :nth-child(3) {
    position: relative;
    zoom: 0.235;
    right: -80px;
    top: -300px;
    animation-delay: -6s;
  }
  :nth-child(4) {
    position: relative;
    zoom: 0.35;
    left: -120px;
    bottom: -200px;
    animation-delay: -3s;
  }
  :nth-child(5) {
    position: relative;
    zoom: 0.5;
    left: 0px;
    top: 200px;
    animation-delay: -5s;
  }
  @keyframes animate {
    0%,
    100% {
      transform: translateY(-20px);
    }
    50% {
      transform: translateY(20px);
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 50px;
    left: 45px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    z-index: 10;
    filter: blur(2px);
  }
  ::after {
    content: "";
    position: absolute;
    top: 80px;
    left: 80px;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background: #fff;
    z-index: 10;
    filter: blur(2px);
  }
`;

export const Span = styled.span`
  position: absolute;
  border-radius: 50%;
  :nth-child(1) {
    inset: 10px;
    border-left: 15px solid #0fb4ff;
    filter: blur(8px);
  }
  :nth-child(2) {
    inset: 10px;
    border-right: 15px solid #ff4884;
    filter: blur(8px);
  }
  :nth-child(3) {
    inset: 20px;
    border-top: 15px solid #ffeb3b;
    filter: blur(8px);
  }
  :nth-child(4) {
    inset: 30px;
    border-left: 15px solid #ff4884;
    filter: blur(12px);
  }
  :nth-child(5) {
    inset: 10px;
    border-bottom: 10px solid #fff;
    filter: blur(8px);
    transform: rotate(330deg);
  }
`;
