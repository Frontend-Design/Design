import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #111;
  min-height: 100vh;
`;

export const Loader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border: 2px solid #fff;
  pointer-events: none;
  animation: animate 5s linear infinite;
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  :nth-child(1) {
    border-radius: 38% 62% 64% 36% / 43% 35% 65% 57%;
  }
  :nth-child(2) {
    border-radius: 41% 59% 40% 60% / 65% 66% 34% 35%;
    animation-direction: reverse;
  }
  :nth-child(3) {
    border-radius: 73% 27% 56% 44% / 57% 74% 26% 43%;
    animation-duration: 3s;
  }
`;

export const title = styled.h2`
  color: #fff;
  font-weight: 500;
`;
