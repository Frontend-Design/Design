import styled from "@emotion/styled";

export const bg = styled.div`
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8f8f8;
`;

export const Box = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  background: #62baea;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: linear-gradient(-135deg, #f8f8f8 12px, transparent 0%),
      linear-gradient(135deg, #f8f8f8 12px, transparent 0%);
    background-size: 24px;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 24px;
    background: linear-gradient(-45deg, #f8f8f8 12px, transparent 0%),
      linear-gradient(45deg, #f8f8f8 12px, transparent 0%);
    background-size: 24px;
  }
`;
