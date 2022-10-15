import styled from "@emotion/styled";

type LayerType = {
  move: number;
};

export const Section = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  background: #222;
  overflow: hidden;
  div {
    h2 {
      position: absolute;
      width: 100%;
      text-align: center;
      font-size: 12em;
      line-height: 1em;
      color: #0488f5;
      cursor: pointer;
    }
  }
`;

export const TextBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #333;
  clip-path: polygon(0 0, 50% 0, 50% 100%, 0% 100%);
`;

export const Skew1 = styled.div`
  h2 {
    opacity: 0.6;
  }
  position: relative;
  top: 50px;
  transform: skewY(20deg);
`;

export const Skew2 = styled.div`
  position: relative;
  top: 50px;
  transform: skewY(340deg);
`;

export const H2 = styled.h2<LayerType>`
  transform: ${(e) => `translateX(${e.move}px)`};
`;
