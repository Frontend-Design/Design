import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  background: #1d0035;
  min-height: 100vh;
  overflow: hidden;
`;

export const Section = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  transform-style: preserve-3d;
  transform: perspective(700px);
`;

export const Box = styled.div`
  position: absolute;
  transform-style: preserve-3d;
  top: 325px;
`;

export const Cube = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  transform-style: preserve-3d;
  animation: animate 20s linear infinite;
  @keyframes animate {
    0% {
      transform: rotateY(0deg);
    }
    100% {
      transform: rotateY(360deg);
    }
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
  }
  .top {
    position: absolute;
    top: 0;
    left: 0;
    width: 200px;
    height: 200px;
    background: #b22708;
    transform: rotateX(90deg) translateZ(100px);
    display: flex;
    justify-content: center;
    align-items: center;
    ::before {
      content: "";
      position: absolute;
      width: 400px;
      height: 400px;
      background: #fb6200;
      filter: blur(50px);
      transform: translateZ(-400px);
      box-shadow: 0 0 120px rgba(251, 98, 0, 0.2),
        0 0 200px rgba(251, 98, 0, 0.4), 0 0 300px rgba(251, 98, 0, 0.6),
        0 0 400px rgba(251, 98, 0, 0.8), 0 0 500px rgba(251, 98, 0, 1);
    }
  }
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: radial-gradient(#fb6200, #fb6200, #c3300f);
  transform: rotateY(calc(90deg * var(--i))) translateZ(100px);
`;
