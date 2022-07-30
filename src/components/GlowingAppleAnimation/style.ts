import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
`;

export const Box = styled.div`
  position: relative;

  svg {
    border-radius: 50%;
    box-shadow: 0 0 100px #0f0, inset 0 0 150px #0f0;
    animation: animate 5s linear infinite;
    @keyframes animate {
      0% {
        filter: hue-rotate(0deg);
      }
      100% {
        filter: hue-rotate(360deg);
      }
    }
  }
`;
