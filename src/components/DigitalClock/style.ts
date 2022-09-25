import styled from "@emotion/styled";

type CircleType = {
  color: string;
  stroke: any;
};

type DotsType = {
  num: number;
};

type DivType = {
  c: string;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  background: #2f363e;
`;

export const Time = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Circle = styled.div<CircleType>`
  --clr: ${(e) => e.color};
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    position: relative;
    transform: rotate(270deg);
    circle {
      width: 100%;
      height: 100%;
      fill: transparent;
      stroke: var(--clr);
      stroke-width: 5;
      transform: translate(5px, 5px);
      opacity: 0.25;
    }
  }
  :nth-child(1) {
    svg {
      width: 250px;
      height: 250px;
      circle {
        stroke-dasharray: 760;
        stroke-dashoffset: ${(e) => 760 - (760 * e.stroke.ss) / 60};
      }
    }
  }
  :nth-child(2) {
    svg {
      width: 210px;
      height: 210px;
      circle {
        stroke-dasharray: 630;
        stroke-dashoffset: ${(e) => 630 - (630 * e.stroke.mm) / 60};
      }
    }
  }
  :nth-child(3) {
    svg {
      width: 170px;
      height: 170px;
      circle {
        stroke-dasharray: 510;
        stroke-dashoffset: ${(e) => 510 - (510 * e.stroke.hh) / 12};
      }
    }
  }
`;

export const Dots = styled.div<DotsType>`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  z-index: 10;
  ::before {
    content: "";
    position: absolute;
    top: -3px;
    width: 15px;
    height: 15px;
    background: var(--clr);
    border-radius: 50%;
    box-shadow: 0 0 20px var(--clr), 0 0 40px var(--clr), 0 0 60px var(--clr),
      0 0 80px var(--clr);
  }
  transform: ${(e) => `rotateZ(${e.num}deg)`};
`;

export const TimeBox = styled.div`
  position: absolute;
  inset: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  color: #fff;
  font-family: consolas;
  gap: 15px;
  font-size: 1.5em;
  font-weight: bold;
  :nth-child(1) {
    ::after {
      content: ":";
      position: absolute;
    }
  }
  :nth-child(2) {
    ::after {
      content: ":";
      position: absolute;
    }
  }
`;

export const Div = styled.div<DivType>`
  --c: ${(e) => e.c};
  color: var(--c);
  text-shadow: 0 0 10px var(--c), 0 0 20px var(--c);
  :nth-child(4) {
    position: absolute;
    transform: translateY(-15px);
    font-size: 0.5em;
    right: 56px;
  }
`;
