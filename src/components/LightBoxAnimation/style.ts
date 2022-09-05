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

export const Box = styled.div``;

export const Loader = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  animation: animate 24s steps(12) infinite;
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
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
  transform: rotate(calc(30deg * var(--i)));
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 20px;
    height: 20px;
    background: rgba(255, 255, 255, 0.15);
  }
  :nth-child(3n + 3) {
    ::before {
      background: #fff;
      box-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
        0 0 50px #fff;
      animation: animateSquare 2s linear infinite;
      transform-origin: 75px;
      @keyframes animateSquare {
        0%,
        25% {
          transform: rotate(0deg);
        }
        75%,
        90%,
        100% {
          transform: rotate(180deg);
        }
      }
    }
  }
`;

export const Title = styled.h3`
  margin: 0;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 0.85em;
  font-weight: 300;
  color: rgba(255, 255, 255, 0.25);
  text-transform: uppercase;
  b {
    color: #fff;
    font-weight: 500;
    text-shadow: 0 0 10px #fff, 0 0 20px #fff, 0 0 30px #fff, 0 0 40px #fff,
      0 0 50px #fff;
  }
`;
