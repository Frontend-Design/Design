import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
`;

export const SVG = styled.svg`
  position: absolute;
  width: 400px;
  fill: none;
  :nth-child(2) {
    filter: blur(40px);
  }
  path {
    d: path("M0,25 C150,110, 150, -60 300,25");
    stroke: #ff0092;
    stroke-width: 50;
    stroke-linecap: round;
    transform: translate(50px, 50%);
    animation: animate 2s ease-in-out infinite;
  }
  @keyframes animate {
    0% {
      stroke: #ff0092;
      d: path("M0,25 C150,110, 150, -60 300,25");
    }
    50% {
      stroke: #00ff00;
      d: path("M0,25 C160,-50, 140,110 300,25");
    }
  }
`;
