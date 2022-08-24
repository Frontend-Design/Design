import styled from "@emotion/styled";

export const bg = styled.div`
  background: #0e1538;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Box = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    transform: skewX(2deg) skewY(4deg);
    background: linear-gradient(315deg, #00ccff, #0e1538, #d400d4);
  }
  ::after {
    content: "";
    position: absolute;
    top: -4px;
    left: -4px;
    bottom: -4px;
    right: -4px;
    transform: skewX(2deg) skewY(4deg);
    background: linear-gradient(315deg, #00ccff, #0e1538, #d400d4);
    filter: blur(50px);
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #0e1538;
  z-index: 10;
`;

export const Title = styled.h2`
  position: relative;
  z-index: 11;
  color: #fff;
  font-size: 10em;
`;
