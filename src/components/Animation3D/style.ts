import styled from "@emotion/styled";

type SpanType = {
  num?: number;
  color: string;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #222;
`;

export const Cube = styled.div`
  position: absolute;
  width: 300px;
  height: 300px;
  :nth-child(2) {
    top: 50%;
    left: 50%;
    transform: translate(-50%, -400px);
    div {
      animation: animate2 6s linear infinite;
      scale: 0.5;
    }
    @keyframes animate2 {
      0% {
        transform: rotateX(-20deg) rotateY(0deg);
      }
      100% {
        transform: rotateX(-20deg) rotateY(360deg);
      }
    }
  }
  div {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transform-style: preserve-3d;
    transform: rotateX(-20deg) rotateY(25deg);
    animation: animate 6s linear infinite;
    .top {
      transform: rotateX(90deg) translateZ(150px);
      ::before {
        content: "";
        position: absolute;
        inset: 0;
        transform: translateZ(-350px);
        background: rgba(0, 0, 0, 0.5);
        filter: blur(50px);
      }
    }
  }
  @keyframes animate {
    0% {
      transform: rotateX(-20deg) rotateY(360deg);
    }
    100% {
      transform: rotateX(-20deg) rotateY(0deg);
    }
  }
  :hover {
    div {
      span {
        background: transparent;
        border: 10px solid #ffa20d;
        filter: drop-shadow(0 0 20px #ffa20d);
      }
    }
  }
`;

export const Big = styled.div``;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  --clr: ${(e) => e.color};
  position: absolute;
  width: 300px;
  height: 300px;
  background: #f2f2f2;
  background: var(--clr);
  transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
  transform-style: preserve-3d;
  transition: 0.5s;
`;
