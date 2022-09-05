import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
`;

export const Scan = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const Qrcode = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/QR_Code01.png);
  background-size: 400px;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: url(${process.env.REACT_APP_PUBLIC_URL}/img/QR_Code02.png);
    background-size: 400px;
    overflow: hidden;
    animation: animate 4s ease-in-out infinite;
  }
  @keyframes animate {
    0%,
    100% {
      height: 20px;
    }
    50% {
      height: calc(100% - 20px);
    }
  }
  :after {
    content: "";
    position: absolute;
    inset: 20px;
    width: calc(100% - 40px);
    height: 2px;
    background: #35fd5c;
    filter: drop-shadow(0 0 20px #35fd5c) drop-shadow(0 0 60px #35fd5c);
    animation: animateLine 4s ease-in-out infinite;
  }
  @keyframes animateLine {
    0%,
    100% {
      top: 20px;
    }
    50% {
      top: calc(100% - 20px);
    }
  }
`;

export const Title = styled.h3`
  text-transform: uppercase;
  font-size: 2em;
  margin-top: 20px;
  color: #fff;
  letter-spacing: 2px;
  filter: drop-shadow(0 0 20px #fff) drop-shadow(0 0 60px #fff);
  animation: animateText 0.5s steps(1) infinite;
  @keyframes animateText {
    0%,
    100% {
      opacity: 0;
    }
    50% {
      opacity: 1;
    }
  }
`;

export const Border = styled.div`
  position: absolute;
  inset: 0;
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/border.png);
  background-size: 400px;
  background-repeat: no-repeat;
  animation: animateText 0.5s linear infinite;
`;
