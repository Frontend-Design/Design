import styled from "@emotion/styled";

export const Wrraper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  overflow: hidden;
`;

export const Box = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0e2330;
  :nth-child(2) {
    background: #e91e63;
    clip-path: circle(200px at center);
    h2 {
      -webkit-text-stroke: 2px;
      -webkit-text-stroke-color: #fff;
      color: transparent;
    }
  }
  h2 {
    position: absolute;
    left: 0;
    font-size: 10em;
    color: #fff;
    white-space: nowrap;
    line-height: 70vh;
    cursor: default;
    animation: animate 60s linear infinite;
    @keyframes animate {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-100%);
      }
    }
  }
`;
