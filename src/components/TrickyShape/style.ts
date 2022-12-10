import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
`;

export const Box = styled.div`
  position: relative;
  width: 340px;
  height: 200px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
`;

export const Circle = styled.div`
  position: relative;
  min-width: 200px;
  height: 200px;
  border: 25px solid #fff;
  border-radius: 50%;
  :nth-of-type(2) {
    left: -60px;
    border: 25px solid #f00;
    ::before {
      content: "";
      position: absolute;
      inset: -25px;
      border: 25px solid transparent;
      border-bottom: 25px solid #f00;
      border-left: 25px solid #f00;
      border-radius: 50%;
      z-index: 100;
      transform: rotate(-45deg);
    }
    ::after {
      content: "";
      position: absolute;
      inset: -25px;
      border-radius: 50%;
      border: 25px solid transparent;
      border-left: 25px solid #000;
      z-index: 1;
      transform: rotate(-65deg);
      filter: blur(15px);
    }
  }

  :nth-of-type(1) {
    ::before {
      content: "";
      position: absolute;
      inset: -25px;
      border: 25px solid transparent;
      border-top: 25px solid #fff;
      border-right: 25px solid #fff;
      border-radius: 50%;
      z-index: 100;
      transform: rotate(-45deg);
    }
    ::after {
      content: "";
      inset: -25px;
      position: absolute;
      border-radius: 50%;
      border: 25px solid transparent;
      border-right: 25px solid #000;
      z-index: 1;
      transform: rotate(-65deg);
      filter: blur(15px);
    }
  }
`;