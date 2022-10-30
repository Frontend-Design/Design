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
`;

export const Box = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  width: 10px;
  height: 250px;
  background: transparent;
  border-bottom: 40px solid #222;
  transform-origin: bottom;
  transform: rotate(calc(22.5deg * var(--i)));
  ::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 50px;
    background: #03a9f4;
    box-shadow: 0 0 20px #03a9f4;
    border-radius: 10px;
    animation: animate 1.5s linear infinite;
    animation-delay: calc(0.1s * var(--i));
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    width: 20px;
    height: 10px;
    background: #03a9f4;
    transform: rotate(102deg);
    animation: animateColor 1.5s linear infinite;
  }
  i {
    position: absolute;
    width: 15px;
    height: 100px;
    background: #222;
    border-left: 2px solid #03a9f4;
    border-right: 2px solid #03a9fa;
    transform-origin: top;
    transform: rotate(79deg);
    animation: animateColor 1.5s linear infinite,
      animateSide 1.5s linear infinite;
    animation-delay: calc(0.1s * var(--i));
  }
  @keyframes animate {
    0% {
      transform: translateY(160px) rotate(0deg);
      filter: hue-rotate(0deg);
    }
    50% {
      transform: translateY(0px);
    }
    100% {
      transform: translateY(160px) rotate(360deg);
      filter: hue-rotate(360deg);
    }
  }
  @keyframes animateColor {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
  @keyframes animateSide {
    0%,
    40%,
    65.1%,
    100% {
      background: #222;
    }
    40.1%,
    65% {
      background: #03a9f4;
    }
  }
`;
