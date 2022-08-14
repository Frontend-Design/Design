import styled from "@emotion/styled";

export const bg = styled.div`
  margin: 0;
  padding: 0;
  background: #000;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const H1 = styled.h1`
  position: relative;
  text-transform: uppercase;
  font-family: consolas;
  letter-spacing: 0.1em;
  margin: 0;
  padding: 0;
  font-size: 10em;
  white-space: nowrap;
  color: #fff;
  ::before {
    content: attr(data-text);
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-right: 1px solid #fff;
    white-space: nowrap;
    overflow: hidden;
    background: linear-gradient(to right, #f00, #ff0, #0ff, #0f0, #ffc800);
    -webkit-background-clip: text;
    color: transparent;
    animation: type 6s linear infinite;
    @keyframes type {
      0% {
        width: 0%;
      }
      70% {
        width: 100%;
      }
      80% {
        width: 100%;
      }
      100% {
        width: 0%;
      }
    }
  }
`;
