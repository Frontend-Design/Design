import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
`;

export const Loader = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  border-radius: 50%;
  overflow: hidden;
  transform: rotate(175deg);
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  top: calc(12px * var(--i));
  left: calc(12px * var(--i));
  right: calc(12px * var(--i));
  bottom: calc(12px * var(--i));
  border: 10px solid #0b0b0b;
  border-top: 10px solid #0f0;
  border-left: 10px solid #0f0;
  border-radius: 50%;
  animation: animate 1s alternate ease-in-out infinite;
  filter: hue-rotate(calc(60deg * var(--i)));
  animation-delay: calc(-0.1s * var(--i));
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(90deg);
    }
  }
`;
