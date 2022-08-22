import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  background: #333;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Box = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  transform-style: preserve-3d;
`;

export const Div = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  transform-style: preserve-3d;
  animation: animate 24s linear infinite;
  @keyframes animate {
    0% {
      transform: perspective(1000px) rotateX(0deg);
    }
    100% {
      transform: perspective(1000px) rotateX(360deg);
    }
  }
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  inset: 0;
  transform: rotateX(calc(var(--i) * 15deg));
  ::before {
    content: "3D Text";
    position: absolute;
    width: 100%;
    height: 100%;
    text-align: center;
    color: #fffd;
    text-transform: uppercase;
    font-size: 8em;
    font-weight: 800;
    -webkit-text-stroke: 2px #000;
    text-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
  }
  :nth-child(3n + 2) {
    ::before {
      color: #e3f2fd;
    }
  }
  :nth-child(3n + 3) {
    color: #fce4fc;
  }
`;
