import styled from "@emotion/styled";

type CheckType = {
  active: boolean;
};

type LoadingType = {
  active: boolean;
  check: boolean;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Wrapper = styled.div<CheckType>`
  position: relative;
  width: 150px;
  height: 50px;
  background: lightgray;
  border-radius: 15px;
  display: flex;
  gap: 5px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  overflow: hidden;
  box-shadow: 0 3px 10px;
  svg {
    width: 20%;
    transition: 0.5s;
    transform: ${(e) => (e.active ? "translateY(-200px)" : "")};
  }
`;

export const Title = styled.h2<CheckType>`
  font-size: 15px;
  font-weight: 500;
  color: #111;
  transition: 1s;
  transform: ${(e) => (e.active ? "translateY(-200px)" : "")};
`;

export const Loading = styled.div<LoadingType>`
  position: absolute;
  width: auto;
  height: 10px;
  display: flex;
  gap: 10px;
  transition: 0.5s;
  transform: ${(e) => (e.active ? "" : "translateY(-200px)")};
  span {
    width: 10px;
    height: 10px;
    transition: 0.5s;
    background: ${(e) => (e.check ? "green" : "black")};
    border-radius: ${(e) => !e.check && "50%"};
    ${(e) => !e.check && "animation: loading 1s ease-in-out infinite"};
    @keyframes loading {
      0%,
      100% {
        transform: translateY();
      }
      50% {
        transform: translateY(-10px);
      }
    }
    :nth-child(1) {
      ${(e) =>
        e.check &&
        `    
      background: green;
      width: 3px;
      height: 10px;
      transform: rotate(-45deg);
      `}
    }
    :nth-child(2) {
      display: ${(e) => e.check && "none"};
      animation-delay: 0.25s;
    }
    :nth-child(3) {
      animation-delay: 0.5s;
      ${(e) =>
        e.check &&
        `  
      background: green;
      width: 3px;
      height: 19px;
      transform: translateX(-3px) translateY(-6px) rotate(45deg);
      `}
    }
  }
`;
