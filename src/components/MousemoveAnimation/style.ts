import styled from "@emotion/styled";

export const Continer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #001300;
  overflow: hidden;
  animation: animateColor 5s linear infinite;
  @keyframes animateColor {
    0% {
      filter: hue-rotate(0deg);
    }
    100% {
      filter: hue-rotate(360deg);
    }
  }
`;

export const Span = styled.span`
  position: relative;
  display: block;
  width: 40px;
  height: 40px;
  :hover {
    ::before {
      transition: 0s;
      transform: scale(1);
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 200%;
    height: 200%;
    background: #00ff0a;
    border-radius: 50%;
    transform: scale(0);
    transition: 1s;
    box-shadow: 0 0 10px #00ff0a, 0 0 20px #00ff0a, 0 0 40px #00ff0a,
      0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
  }
`;
