import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #ff0057, #2196f3);
`;

export const H2 = styled.h2`
  position: relative;
  display: flex;
  gap: 5px;
  color: #fff;
  font-size: 4em;
  cursor: pointer;
`;

export const Span = styled.div`
  width: 65px;
  height: 65px;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  filter: blur(5px);
  transition: 0.5s;
  :hover {
    filter: blur(0px);
    transition: 0s;
    i {
      ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 2px;
        height: 8px;
        background: #fff;
        box-shadow: 0 58px #fff, 62px 58px #fff, 62px 0 #fff;
      }
      ::after {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 8px;
        height: 2px;
        background: #fff;
        box-shadow: 0 64px #fff, 56px 64px #fff, 56px 0 #fff;
      }
    }
  }
`;

export const I = styled.i`
  position: absolute;
  inset: 0;
  background: transparent;
`;
