import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #333;
`;

export const loader = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  background: black;
  border-radius: 50%;
  box-shadow: 25px 25px 75px rgba(0, 0, 0, 0.25),
    10px 10px 70px rgba(0, 0, 0, 0.25);
  border: 2px solid #222;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  span {
    position: absolute;
    top: 50%;
    left: 50%;
    width: 100%;
    height: 100%;
    background: transparent;
    transform-origin: top left;
    animation: animate 1s linear infinite;
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
      left: -1px;
      width: 50%;
      height: 100%;
      background: #333;
      transform-origin: top left;
    }
    ::after {
      content: "";
      position: absolute;
      width: 50%;
      height: 100%;
      top: -50%;
      left: -50%;
      background: #333;
    }
  }
`;