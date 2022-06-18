import styled from "styled-components";

type CircleType = {
  Cl: string;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #222;
`;

export const loader = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: #2a2a2a;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const circle = styled.div<CircleType>`
  position: absolute;
  width: 300px;
  height: 300px;
  border: 2px solid #191919;
  border-radius: 50%;
  --clr: ${(prop) => prop.Cl};
  animation: animate 3s linear infinite;
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 20px;
    height: 20px;
    background: var(--clr);
    border-radius: 50%;
    box-shadow: 0 0 20px var(--clr), 0 0 60px var(--clr);
  }
`;

export const circle2 = styled(circle)`
  width: 200px;
  height: 200px;
  animation: animate 6s linear infinite;
`;

export const circle3 = styled(circle)`
  width: 100px;
  height: 100px;
  animation: animate 2s linear infinite;
`;
