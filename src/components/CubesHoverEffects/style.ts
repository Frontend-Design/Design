import styled from "@emotion/styled";

type DivType = {
  x: number;
  y: number;
};

type SpanType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #25335b;
`;

export const Container = styled.div`
  position: relative;
  top: -80px;
  transform: skewY(-20deg);
  animation: animate 5s linear infinite;
  @keyframes animate {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const Cube = styled.div`
  position: relative;
  z-index: 2;
  :nth-child(2) {
    z-index: 1;
    translate: -60px -60px;
  }
  :nth-child(3) {
    z-index: 3;
    translate: 60px 60px;
  }
`;

export const Div = styled.div<DivType>`
  --x: ${(e) => e.x};
  --y: ${(e) => e.y};
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 30px;
  translate: calc(-70px * var(--x)) calc(-60px * var(--y));
`;

export const Span = styled.div<SpanType>`
  --i: ${(e) => e.num};
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  background: #dcdcdc;
  z-index: calc(1 * var(--i));
  transition: 1.5s;
  :hover {
    transition: 0s;
    background: #ef4149;
    filter: drop-shadow(0 0 30px #ef4149);
    ::before {
      transition: 0s;
      background: #ef4149;
    }
    ::after {
      transition: 0s;
      background: #f14e55;
    }
  }
  ::before {
    content: "";
    position: absolute;
    left: -40px;
    width: 40px;
    height: 100%;
    background: #fff;
    transform-origin: right;
    transform: skewY(45deg);
    transition: 1.5s;
  }
  ::after {
    content: "";
    position: absolute;
    top: -40px;
    left: 0;
    width: 100%;
    height: 40px;
    background: #f2f2f2;
    transform-origin: bottom;
    transform: skewX(45deg);
    transition: 1.5s;
  }
`;
