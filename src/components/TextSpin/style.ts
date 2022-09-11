import styled from "@emotion/styled";

type BoxType = {
  num: number;
  x: number;
  spin: boolean;
};

type SpanType = {
  num: number;
  length: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #121212;
  min-height: 100vh;
`;

export const Section = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  width: 1000px;
  height: 1000px;
`;

export const Box = styled.div<BoxType>`
  --k: ${(e) => e.num};
  --l: ${(e) => e.x * e.num};
  position: absolute;
  top: 50%;
  left: 50%;
  width: calc(var(--l) * 1px);
  height: calc(var(--l) * 1px);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${(e) => (e.spin ? "animate" : "animate2")} 10s linear infinite;
  @keyframes animate {
    0% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
  }
  @keyframes animate2 {
    0% {
      transform: translate(-50%, -50%) rotate(360deg);
    }
    100% {
      transform: translate(-50%, -50%) rotate(0deg);
    }
  }
`;

export const Span = styled.span<SpanType>`
  position: absolute;
  left: 0;
  list-style: none;
  --i: ${(props) => props.num};
  transform-origin: calc(var(--l) / 2 * 1px);
  transition: 0.5s;
  transition-delay: calc(0.1s * var(--i));
  transform: rotate(calc(360deg / ${(e) => e.length} * var(--i)));
  a {
    font-size: 20px;
    width: 200px;
    height: 2px;
    border-radius: 50%;
    display: flex;
    text-align: center;
    justify-content: center;
    align-items: center;
    background: transparent;
    transform: rotate(-90deg);
    color: white;
    @keyframes setColor {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
  }
`;
