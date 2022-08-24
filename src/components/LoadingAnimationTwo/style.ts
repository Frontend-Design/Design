import styled from "@emotion/styled";

type SpnaType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: radial-gradient(#78d5ff, #0081e8);
`;

export const Loader = styled.div`
  position: relative;
  width: 180px;
  height: 180px;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(45deg);
`;

export const Span = styled.span<SpnaType>`
  position: absolute;
  display: block;
  border: 15px solid #fff;
  box-sizing: border-box;
  border-radius: 50%;
  box-shadow: 0 10px 0 #e0e0e0, inset 0 10px 0 #e0e0e0;
  --i: ${(prop) => prop.num};
  :nth-child(${(prop) => prop.num + 1}) {
    animation-delay: calc(var(--i) * 1.5s);
  }
  animation: animate 4.5s ease-in-out infinite;
  @keyframes animate {
    0% {
      transform: translateZ(-100px);
      width: 100%;
      height: 100%;
    }
    25% {
      transform: translateZ(100px);
      width: 100%;
      height: 100%;
    }
    50% {
      transform: translateZ(100px);
      width: 35%;
      height: 35%;
    }
    75% {
      transform: translateZ(-100px);
      width: 35%;
      height: 35%;
    }
    100% {
      transform: translateZ(-100px);
      width: 100%;
      height: 100%;
    }
  }
`;
