import styled from "@emotion/styled";

export const bg = styled.div`
  width: 100%;
  min-height: 100vh;
  overflow: hidden;
  font-family: "Source Code Pro", monospace;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #0e0e0e;
`;

export const Container = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  h2 {
    margin: 0;
    position: relative;
    width: 100%;
    text-align: center;
    text-transform: uppercase;
    font-weight: 900;
    color: #151515;
    font-size: 5em;
    line-height: 0.9em;
    letter-spacing: 4px;
    span {
      position: relative;
      z-index: 1;
      color: #fff;
      animation: animate 5s linear infinite;
    }
    .text2 {
      animation-delay: -0.5s;
      filter: hue-rotate(255deg);
    }
    .text3 {
      animation-delay: -0.5s;
      filter: hue-rotate(225deg);
    }
  }
  @keyframes animate {
    0%,
    5%,
    10.1%,
    15.1%,
    25.1%,
    45%,
    70.1%,
    90%,
    100% {
      color: #222;
      text-shadow: 0 0 0 #222;
    }
    5.1%,
    10%,
    15.2%,
    25%,
    45.1%,
    70%,
    90.1%,
    95% {
      color: #fff;
      text-shadow: 0 0 10px #ff3177, 0 0 20px #ff3177, 0 0 40px #ff3177,
        0 0 80px #ff3177, 0 0 160px #ff3177;
    }
  }
`;