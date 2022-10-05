import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #222;
  overflow: hidden;
`;

export const Box = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  inset: 0;
  transform: rotate(calc(45deg * var(--i)));
  ::before {
    content: "";
    position: absolute;
    left: 50%;
    width: 250px;
    height: 300px;
    background-image: url(${process.env.REACT_APP_PUBLIC_URL}/img/off.png);
    background-size: cover;
    background-position: center;
    transform: translateX(-50%) translateY(-100px) scale(0.75);
    animation: animate 2s steps(1) infinite;
    animation-delay: calc(0.1s * var(--i));
  }
  @keyframes animate {
    0%,
    100% {
      background-image: url(${process.env.REACT_APP_PUBLIC_URL}/img/off.png);
    }
    50% {
      background-image: url(${process.env.REACT_APP_PUBLIC_URL}/img/on.png);
    }
  }
`;
