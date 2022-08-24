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

export const Wavy = styled.div`
  position: relative;
  -webkit-box-reflect: below -12px linear-gradient(transparent, rgba(0, 0, 0, 0.2));
`;

export const Span = styled.span<SpanType>`
  position: relative;
  display: inline-block;
  color: #fff;
  font-size: 2em;
  text-transform: uppercase;
  animation: animtate 1s ease-in-out infinite;
  --i: ${(e) => e.num};
  animation-delay: calc(0.1s * var(--i));
  @keyframes animtate {
    0% {
      transform: translateY(0px);
    }
    20% {
      transform: translateY(-20px);
    }
    40%,
    100% {
      transform: translateY(0px);
    }
  }
`;
