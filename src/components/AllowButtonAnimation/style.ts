import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #43345d;
`;

export const LinkBt = styled.a`
  position: relative;
  display: inline-block;
  width: 160px;
  height: 50px;
  box-shadow: 0 5px 25px rgba(0, 0, 0, 0.25);
`;

export const BtnSection = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  color: #fff;
  background: #6c4ba5;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: 2px;
  font-size: 18px;
  :hover ~ :nth-child(2) {
    clip-path: polygon(100% 0, 100% 0%, 100% 100%, 100% 100%, 100% 50%);
  }
  :nth-child(2) {
    color: #6c4ba5;
    background: #fff;
    overflow: hidden;
    z-index: 2;
    transition: 0.5s;
    clip-path: polygon(60% 0, 100% 0%, 100% 100%, 60% 100%, 40% 53%);
    :hover {
      clip-path: polygon(0 0, 100% 0%, 100% 100%, 0% 100%, 0% 50%);
    }
  }
`;
