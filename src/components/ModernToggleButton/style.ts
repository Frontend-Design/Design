import styled from "@emotion/styled";

type SapnType = {
  active: boolean;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f5f5f5;
`;

export const Toggle = styled.div<SapnType>`
  position: relative;
  width: 70px;
  height: 70px;
  background: #fff;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.08);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  span {
    :nth-child(1) {
      ${(e) =>
        e.active &&
        `
        width: 40px;
        transform: translateY(0px) rotate(45deg);
        transition-delay: 0.125s;
        `};
    }
    :nth-child(2) {
      ${(e) =>
        e.active &&
        `
        width: 40px;
        transform: translateY(0px) rotate(315deg);
        transition-delay: 0.25s;
        `};
    }
    :nth-child(3) {
      transform: ${(e) => e.active && "translateX(60px)"};
    }
  }
`;

export const Span = styled.span`
  position: absolute;
  width: 40px;
  height: 4px;
  background: #1863ff;
  border-radius: 4px;
  transition: 0.5s;
  :nth-child(1) {
    transform: translateY(-15px);
    width: 25px;
    left: 15px;
  }
  :nth-child(2) {
    transform: translateY(15px);
    width: 15px;
    left: 15px;
  }
`;
