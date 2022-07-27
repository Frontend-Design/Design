import styled from "@emotion/styled";
type BlackType = {
  move: number;
};

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const MainTitle = styled.h2`
  position: relative;
  font-size: 20vw;
  text-align: center;
  line-height: 0.75em;
  text-transform: uppercase;
  font-weight: 800;
`;

export const Subtitle = styled.span`
  font-size: 18.2vw;
  color: transparent;
  -webkit-text-stroke: 0.3vw #000;
`;

export const Black = styled.div<BlackType>`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  mix-blend-mode: difference;
  left: ${(e) => e.move + "px"};
`;
