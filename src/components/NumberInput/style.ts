import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000d0f;
`;

export const Container = styled.div`
  position: relative;
  width: 80px;
  height: 50px;
  border-radius: 40px;
  border: 2px solid rgba(255, 255, 255, 0.2);
  transition: 0.5s;
  :hover {
    width: 120px;
    border: 2px solid rgba(255, 255, 255, 1);
    span {
      opacity: 1;
      :nth-child(1) {
        right: 20px;
      }
      :nth-child(2) {
        left: 20px;
      }
    }
  }
`;

export const Next = styled.span`
  position: absolute;
  top: 50%;
  right: 30px;
  display: block;
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  z-index: 1;
  transform: translateY(-50%) rotate(135deg);
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
`;

export const Prev = styled.span`
  position: absolute;
  top: 50%;
  left: 30px;
  display: block;
  width: 12px;
  height: 12px;
  border-top: 2px solid #fff;
  border-left: 2px solid #fff;
  z-index: 1;
  transform: translateY(-50%) rotate(315deg);
  cursor: pointer;
  opacity: 0;
  transition: 0.5s;
`;

export const Box = styled.div``;

export const Span = styled.span`
  position: absolute;
  display: block;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  height: 100%;
  text-align: center;
  line-height: 46px;
  color: #00deff;
  font-size: 24px;
  font-weight: 700;
  user-select: none;
`;
