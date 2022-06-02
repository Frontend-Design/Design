import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

type placedprop = {
  num: number;
};

const GlobalStyle = createGlobalStyle`
  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  } 
  body {
      display: flex;
      justify-content: center;
      align-items: center;
      min-height: 100vh;
      background: #181c1f;
  }
`;

export const Container = styled.div`
  position: relative;
  height: 400px;
  border-bottom: 2px solid #fff;
`;

export const Cloud = styled.div`
  position: relative;
  top: 50px;
  width: 320px;
  height: 100px;
  background: #fff;
  border-radius: 100px;
  ::before {
    content: "";
    position: absolute;
    top: -50px;
    left: 40px;
    width: 110px;
    height: 110px;
    background-color: #fff;
    border-radius: 50%;
    box-shadow: 90px 0 0 30px #fff;
  }
`;

export const Rain = styled.div`
  position: relative;
  display: flex;
  z-index: 1;
  padding: 0 20px;
`;

export const Rains = styled.span<placedprop>`
  position: relative;
  bottom: 10px;
  bottom: -40px;
  width: 10px;
  height: 10px;
  background-color: #fff;
  margin: 0 2px;
  border-radius: 50%;
  animation: animate 5s linear infinite;
  --i: ${(props) => props.num};
  animation-duration: calc(15s / var(--i));
  transform-origin: bottom;
  @keyframes animate {
    0% {
      transform: translateY(0) scale(1);
    }
    70% {
      transform: translateY(298px) scale(1);
    }
    100% {
      transform: translateY(298px) scale(0);
    }
  }
`;

export default GlobalStyle;
