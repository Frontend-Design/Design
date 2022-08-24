import styled from "@emotion/styled";

type BtnType = {
  active: boolean;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #222;
`;

export const Btn = styled.a<BtnType>`
  position: relative;
  width: 160px;
  height: 50px;
  background: ${(e) => (e.active ? "#2196f3" : "#333")};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  text-decoration: none;

  :hover {
    span {
      transform: ${(e) =>
        e.active ? "" : "scale(1.5) rotate(60deg) translateY(10px)"};
      ::before {
        transform: ${(e) =>
          e.active ? "" : "rotate(-90deg) translateX(50%) translateY(-10px)"};
      }
    }
    text {
      transform: translateX(-50px) translateY(-5px) scale(0);
    }
  }
  text {
    transform: ${(e) =>
      e.active ? "translateX(-50px) translateY(-5px) scale(0)" : ""};
  }
  span {
    ::before {
      transform: ${(e) => (e.active ? "scale(0)" : "")};
    }
  }
`;

export const Span = styled.span<BtnType>`
  position: absolute;
  left: 40px;
  width: 18px;
  height: 20px;
  display: inline-block;
  background: #fff;
  border-bottom-left-radius: 3px;
  border-bottom-right-radius: 3px;
  transition: 0.5s;
  ${(e) =>
    e.active &&
    `
    left: 50%;
    transform: translateX(-50%) rotate(-45deg);
    border-radius: 0;
    width: 20px;
    height: 10px;
    background: transparent;
    border-left: 2px solid #fff;
    border-bottom: 2px solid #fff;
      `}
  ::before {
    content: "";
    position: absolute;
    top: -3px;
    width: 100%;
    height: 2px;
    background: #fff;
    box-shadow: 12px -2px 0 #333, 12px -3px 0 #333, 15px -1px 0 #333,
      6px -2px 0 #fff;
    transition: 0.5s;
  }
`;

export const Text = styled.text`
  position: absolute;
  right: 40px;
  color: #fff;
  transition: 0.5s;
`;
