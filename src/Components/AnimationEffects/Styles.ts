import styled from "styled-components";

export const bg = styled.div`
  min-height: 100vh;
  background-color: #262e31;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const loader = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  span {
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    :nth-child(1) {
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border-top: 0.25px solid rgba(255, 255, 255, 0.5);
      border-bottom: 0.25px solid rgba(255, 255, 255, 0.5);
      z-index: 2;
    }
    :nth-child(2) {
      background-color: #04fe4d;
      animation: animate 4s ease-in-out infinite;
    }
    :nth-child(3) {
      background-color: #fff;
      animation: animate 4s ease-in-out infinite;
      animation-delay: -2s;
      border-radius: 0%;
    }
    @keyframes animate {
      0% {
        transform: translate(-150px, 50px) scale(0.4) rotate(0deg);
        z-index: 1;
      }
      50% {
        transform: translate(150px, -50px) scale(0.4) rotate(180deg);
        z-index: 1;
      }
      50.00001% {
        transform: translate(150px, -50px) scale(0.4) rotate(180deg);
        z-index: 3;
      }
      100% {
        transform: translate(-150px, 50px) scale(0.4) rotate(360deg);
        z-index: 3;
      }
    }
  }
`;
