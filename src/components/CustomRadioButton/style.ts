import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: #001f24;
`;

export const Label = styled.label`
  position: relative;
  margin: 12px;
  width: 200px;
  height: 70px;
  cursor: pointer;
  span {
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    background: #000;
    border-radius: 10px;
    ::before {
      content: "Inactive";
      position: absolute;
      top: 3px;
      left: 3px;
      width: calc(100% - 6px);
      height: calc(100% - 6px);
      background: linear-gradient(to bottom, #081d22, #073130);
      border-radius: 8px;
      box-shadow: 0 2px 5px rgba(0, 0, 0, 0.5),
        inset 2px 2px 2px rgba(255, 255, 255, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.4em;
      font-weight: 500;
      color: #030f11;
    }
    ::after {
      content: "";
      position: absolute;
      top: 50%;
      right: 20px;
      transform: translateY(-50%);
      width: 10px;
      height: 10px;
      border-radius: 50%;
      background: #f00;
      box-shadow: 0 0 2px #f00, 0 0 5px #f00, 0 0 10px #f00, 0 0 15px #f00,
        0 0 20px #f00, 0 0 25px #f00, 0 0 30px #f00, 0 0 40px #f00;
    }
  }
`;

export const Input = styled.input`
  appearance: none;

  :checked ~ span {
    ::before {
      content: "Active";
      color: #fff;
      text-shadow: 0 0 20px #0f0;
      background: linear-gradient(to top, #081d22, #073130);
      box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.5),
        inset 1px 1px 1px rgba(0, 0, 0, 0.4),
        inset -1px -1px 4px rgba(255, 255, 255, 0.2);
    }
    ::after {
      background: #0f0;
      box-shadow: 0 0 2px #0f0, 0 0 5px #0f0, 0 0 10px #0f0, 0 0 15px #0f0,
        0 0 20px #0f0, 0 0 25px #0f0, 0 0 30px #0f0, 0 0 40px #0f0;
    }
  }
`;
