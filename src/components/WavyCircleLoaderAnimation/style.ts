import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #9c27b0;
`;

export const Loader = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  transform: perspective(500px) rotateX(60deg);
`;

type LingType = {
  num: number;
};

export const Ling = styled.span<LingType>`
  position: absolute;
  display: block;
  border: 5px solid #fff;
  box-shadow: 0 5px 0 #ccc, inset 0 5px 0 #ccc;
  box-sizing: border-box;
  border-radius: 50%;
  animation: animate 3s ease-in-out infinite;
  @keyframes animate {
    0%,
    100% {
      transform: translateZ(-100px);
    }
    50% {
      transform: translateZ(100px);
    }
  }

  --i: ${(e) => (e.num - 1) * 10 + "px"};
  --d: ${(e) => (15 - e.num) / 10 + "s"};
  :nth-child(${(e) => e.num}) {
    top: var(--i);
    left: var(--i);
    bottom: var(--i);
    right: var(--i);
    animation-delay: var(--d);
  }
`;
