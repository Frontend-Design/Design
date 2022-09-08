import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0e1538;
`;

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const A = styled.a`
  position: relative;
  width: 160px;
  height: 60px;
  display: inline-block;
  background: #fff;
  margin: 20px;
  ::before,
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background: #f00;
    transition: 0.5s;
  }
  :nth-child(1) {
    ::before,
    ::after {
      background: linear-gradient(45deg, #00ccff, #0e1538, #0e1538, #d400d4);
    }
  }
  :nth-child(2) {
    ::before,
    ::after {
      background: linear-gradient(45deg, #ff075b, #0e1538, #0e1538, #1aff22);
    }
  }
  :hover {
    ::before {
      inset: -3px;
    }
    ::after {
      inset: -3px;
      filter: blur(10px);
    }
  }
`;

export const Button = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: inline-block;
  background: #0e1538;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.2em;
  text-transform: uppercase;
  letter-spacing: 2px;
  color: #fff;
  border: 1px solid #040a29;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: -50%;
    width: 100%;
    height: 100%;
    background: rgba(255, 255, 255, 0.075);
    transform: skew(25deg);
    transition: 0.5s;
  }
  :hover {
    ::before {
      left: -10%;
      transform: skew(-25deg);
      width: 120%;
    }
  }
`;
