import styled from "@emotion/styled";

export const bg = styled.div`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: white;
`;

export const Loader = styled.div`
  position: relative;
  display: flex;
`;

type BoxType = {
  num: number;
};

export const Box = styled.span<BoxType>`
  width: 50px;
  height: 300px;
  height: 300px;
  margin: 0 20px;
  background: red;
  animation: animate 1.4s linear infinite;
  --i: ${(e) => (e.num - 1) * 0.2 + "s"};
  :nth-child(${(e) => e.num}) {
    animation-delay: var(--i);
  }
  @keyframes animate {
    0% {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
      opacity: 0;
      transform: translateX(-50px) scale(1);
    }
    50% {
      box-shadow: 0 20px 50px rgba(0, 0, 0, 0.5);
      opacity: 1;
      transform: translateX(0px) scale(1.2);
    }
    100% {
      box-shadow: 0 0 0 rgba(0, 0, 0, 0.5);
      opacity: 0;
      transform: translateX(50px) scale(1);
    }
  }
`;
