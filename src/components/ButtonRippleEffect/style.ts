import styled from "@emotion/styled";

type SpanType = {
  x?: number;
  y?: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  flex-direction: column;
  background: #040d15;
`;

export const Button = styled.a`
  position: relative;
  display: inline-block;
  padding: 16px 36px;
  margin: 10px 0;
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;
  font-size: 18px;
  letter-spacing: 2px;
  border-radius: 40px;
  background: linear-gradient(90deg, #0162c8, #55e7fc);
  :nth-child(2) {
    background: linear-gradient(90deg, #755bea, #ff72c0);
  }
  overflow: hidden;
`;

export const Span = styled.span<SpanType>`
  position: absolute;
  top: ${(e) => e.y + "px"};
  left: ${(e) => e.x + "px"};
  background: #fff;
  transform: translate(-50%, -50%);
  pointer-events: none;
  border-radius: 50%;
  animation: animate 1s linear infinite;
  @keyframes animate {
    0% {
      width: 0;
      height: 0;
      opacity: 0.5;
    }
    100% {
      width: 500px;
      height: 500px;
      opacity: 0;
    }
  }
`;
