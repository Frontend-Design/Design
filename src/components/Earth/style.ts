import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/earthBg.png);
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
`;

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  transform-style: preserve-3d;
`;

export const Earth = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 300px;
  height: 300px;
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/earth.png);
  background-size: cover;
  background-repeat: repeat-x;
  border-radius: 50%;
  box-shadow: inset 0 0 20px rgba(0, 0, 0, 1), 0 0 50px #4069ff;
  animation: animateEarth 15s linear infinite;
  @keyframes animateEarth {
    0% {
      background-position: 0 0;
    }
    100% {
      background-position: -750px 0;
    }
  }
`;

export const Circle = styled.div`
  transform-style: preserve-3d;
  animation: animateText 10s linear infinite;
  @keyframes animateText {
    0% {
      transform: perspective(1000px) rotateY(360deg) rotateX(15deg)
        translateY(-30px);
    }
    100% {
      transform: perspective(1000px) rotateY(0deg) rotateX(15deg)
        translateY(-30px);
    }
  }
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  top: 0;
  left: 0;
  background: #fff;
  color: #35146f;
  font-size: 3em;
  transform-origin: center;
  transform-style: preserve-3d;
  padding: 5px 11px;
  transform: rotateY(calc(var(--i) * calc(360deg / 31))) translateZ(300px);
  border-top: 4px solid #35146f;
  border-bottom: 4px solid #35146f;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: translateZ(-1px);
  }
`;
