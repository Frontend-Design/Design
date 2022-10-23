import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Label = styled.label`
  position: relative;
  width: 160px;
  height: 80px;
`;

export const Input = styled.input`
  position: relative;
  z-index: 1;
  appearance: none;
  :checked ~ span {
    background: #05be05;
    box-shadow: 0 15px 25px #05be0566;
  }
  :checked ~ span i {
    left: 84px;
    ::before {
      background: #05be05;
      box-shadow: 35px 0 0 #05be05;
    }

    ::after {
      border: 12px;
      height: 16 px;
      border-bottom-left-radius: 15px;
      border-bottom-right-radius: 15px;
      background: #05be05;
    }
  }
`;

export const Span = styled.span`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #f30000;
  box-shadow: 0 15px 25px #fe000066;
  border-radius: 80px;
  transition: 0.5s;
`;

export const I = styled.i`
  position: absolute;
  top: 4px;
  left: 4px;
  width: 72px;
  height: 72px;
  background: #fff;
  border-radius: 50%;
  transition: 0.5s;
  ::before {
    content: "";
    position: absolute;
    top: 22px;
    left: 12px;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    background: #fe0000;
    box-shadow: 35px 0 0 #fe0000;
    transition: 0.5s;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 15px;
    left: calc(50% - 15px);
    width: 30px;
    height: 6px;
    border-radius: 6px;
    background: #fe0000;
    transition: 0.5s;
  }
`;