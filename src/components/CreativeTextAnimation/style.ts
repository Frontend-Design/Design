import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #252839;
`;

export const DataText = styled.h2`
  position: relative;
  font-size: 14vw;
  color: #252839;
  -webkit-text-stroke: 0.3vw #329d52;
  text-transform: uppercase;
  ::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 0;
    height: 100%;
    color: #01f287;
    -webkit-text-stroke: 0vw #383d52;
    border-right: 2px solid #01f287;
    overflow: hidden;
    animation: animate 6s linear infinite;
    @keyframes animate {
      0%,
      10%,
      100% {
        width: 0;
      }
      70%,
      90% {
        width: 100%;
      }
    }
  }
`;
