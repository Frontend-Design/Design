import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
`;

export const Continer = styled.div`
  display: flex;
`;

export const Box = styled.div`
  width: 500px;
  height: 500px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 50px 0;
  :nth-child(2) {
    span {
      border: none;
      background: rgba(0, 255, 255, 0.25);
    }
  }
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  box-sizing: border-box;
  border: 2px solid #fff;
  border-radius: 50%;
  animation: animate 5s linear infinite;
  animation-delay: calc(-0.5s * var(--i));

  @keyframes animate {
    0% {
      width: 0px;
      height: 0pc;
    }
    50% {
      opacity: 1;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
`;
