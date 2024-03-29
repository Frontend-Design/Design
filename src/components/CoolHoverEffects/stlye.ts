import styled from "@emotion/styled";

export const bg = styled.div`
  width: 100%;
  min-height: 100vh;
`;

export const Boreder = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  border-radius: 50%;
  box-shadow: 0 0 0 15px #03a9f4;
  box-sizing: border-box;
  text-align: center;
  transition: 0.5s;
  :hover {
    border-radius: 0;
    p {
      box-shadow: 0 0 50px rgba(0, 0, 0, 0.5);
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #03a9f4;
    z-index: -1;
    transform: rotate(-45deg);
    border-radius: 10px;
  }
`;

export const P = styled.p`
  margin: 0;
  padding: 0;
  color: #fff;
  font-size: 16px;
  padding: 20px;
  font-family: sans-serif;
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  transition: 0.5s;
`;
