import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #607d88;
`;

export const Box = styled.div`
  position: absolute;
  top: calc(50% - 100px);
  left: calc(50% - 100px);
  height: 200px;
  transform-style: preserve-3d;
  animation: animate2 15s linear infinite;
  @keyframes animate2 {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }
    100% {
      transform: perspective(1000px) rotateY(360deg);
    }
  }
`;

export const Div = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  display: flex;
  transform-style: preserve-3d;
`;

export const Span = styled.span<SpanType>`
  content: "";
  position: relative;
  width: 50px;
  height: 100%;
  background: linear-gradient(#e8e8e8, #a7a7a7, #e8e8e8);
  animation: animate 2.8s linear infinite;
  ::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    transform-style: preserve-3d;
    transform: translateX(-25px) scale(0.5);
  }
  animation-delay: ${(e) => e.num * 0.2 + "s"};
  @keyframes animate {
    0% {
      transform: rotateX(0deg);
    }
    100% {
      transform: rotateX(360deg);
    }
  }
`;
