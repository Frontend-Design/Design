import styled from "@emotion/styled";

type SpanTpye = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #010b10;
`;

export const Loader = styled.div`
  position: relative;
  width: 200px;
  height: 200px;
  filter: url(#gooey);
`;

export const Span = styled.span<SpanTpye>`
  --i: ${(e) => e.num};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  animation: animate 4s ease-in-out infinite;
  animation-delay: calc(-0.2s * var(--i));
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 20px);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    box-shadow: 0 0 30px #03a9f4;
    background: linear-gradient(#fce4ec, #03a8f4);
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    50%,
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Svg = styled.svg`
  width: 0;
  height: 0;
`;
