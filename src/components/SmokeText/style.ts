import styled from "@emotion/styled";

type SpanType = {
  active: boolean;
};

export const bg = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
  overflow: hidden;
`;

export const P = styled.p`
  position: relative;
  color: #fff;
  margin: 40px;
  max-width: 800px;
  user-select: none;
  font-size: 1.5em;
`;

export const Span = styled.span<SpanType>`
  position: relative;
  cursor: pointer;
  ${(e) =>
    e.active &&
    `
    animation: smoke 1s linear forwards;
    @keyframes smoke {
      0% {
        opacity: 1;
        filter: blur(0);
        transform: translateX(0) translateY(0) rotate(0deg) scale(1);
      }
      50% {
        opacity: 1;
        pointer-events: none;
      }
      100% {
        opacity: 0;
        filter: blur(20px);
        transform: translateX(300px) translateY(-300px) rotate(720deg) scale(4);
        difplay:none;
      }
    }
`}
`;
