import styled from "@emotion/styled";

export const bg = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  background: #111;
  span {
    position: absolute;
    pointer-events: none;
    animation: animate 1s linear infinite;
    @keyframes animate {
      0% {
        translate: 0 0;
        opacity: 0;
      }
      10% {
        opacity: 1;
      }
      30% {
        translate: 0 100px;
        opacity: 1;
      }
      90% {
        opacity: 1;
      }
      100% {
        translate: 0 80px;
        opacity: 0;
      }
    }
  }
`;
