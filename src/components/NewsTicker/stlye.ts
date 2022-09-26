import styled from "@emotion/styled";

export const bg = styled.div`
  background: #000000;
`;

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
`;

export const Scroll = styled.div`
  width: 100%;
  display: flex;
  transform: rotate(30deg) translateY(200px) translateX(-200px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  :nth-child(2) {
    transform: rotate(-25deg) translateY(120px) translateX(-200px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  :nth-child(3) {
    transform: rotate(25deg) translateY(300px) translateX(-200px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  :nth-child(4) {
    transform: rotate(-2deg) translateY(-150px) translateX(-200px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
  :nth-child(5) {
    transform: rotate(5deg) translateY(250px) translateX(-200px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.5);
  }
`;

export const Line = styled.div`
  color: #000;
  font-size: 4em;
  background: #fff;
  white-space: nowrap;
  font-weight: 900;
  text-transform: uppercase;
  animation: animate 40s linear infinite;
  animation-delay: -40s;
  :nth-child(2) {
    animation: animate2 40s linear infinite;
    animation-delay: -20s;
  }
  span {
    -webkit-text-stroke: 2px #000;
    color: transparent;
  }
  @keyframes animate {
    0% {
      transform: translateX(100%);
    }
    100% {
      transform: translateX(-100%);
    }
  }
  @keyframes animate2 {
    0% {
      transform: translateX(0%);
    }
    100% {
      transform: translateX(-200%);
    }
  }
`;

export const Text = styled.span``;
