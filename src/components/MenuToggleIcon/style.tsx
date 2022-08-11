import styled from "@emotion/styled";

type ToggleType = {
  turn: boolean;
};

export const bg = styled.div`
  background: #04202e;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Toggle = styled.div<ToggleType>`
  position: relative;
  width: 50px;
  height: 50px;
  background: ${(e) => (e.turn ? "#37a6ff" : "#f7226a")};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.2s;
  ::before {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    transition: 0.2s;
    transform: ${(e) =>
      e.turn ? "translateY(-10px)" : "translateY(0px) rotate(45deg)"};
    box-shadow: ${(e) => (e.turn ? "0 10px 0" : "0 0 0")} #fff;
  }
  ::after {
    content: "";
    position: absolute;
    width: 20px;
    height: 2px;
    background: #fff;
    transition: 0.2s;
    transform: ${(e) =>
      e.turn ? "translateY(10px)" : "translateY(0px) rotate(-45deg)"};
  }
`;
