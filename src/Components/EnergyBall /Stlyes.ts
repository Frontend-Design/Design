import styled from "styled-components";

type BallType = {
  color: string;
  size: string;
  speed: string;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
`;

export const energy = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
`;

export const ball = styled.span<BallType>`
  --clr: ${(e) => e.color};
  --i: ${(e) => e.size};
  --d: ${(e) => e.speed};

  position: absolute;
  width: calc(300px + var(--i));
  height: calc(300px + var(--i));
  height: 300px;
  background: var(--clr);
  border-radius: 50%;
  transform-origin: calc(100px + var(--i));
  animation: animate 5s linear infinite;
  animation-duration: calc(var(--d));
  mix-blend-mode: plus-lighter;
  filter: blur(30px);

  :nth-child(even) {
    animation-direction: reverse;
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
