import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #000;
`;

export const Loader = styled.div`
  display: flex;
  align-items: flex-end;
  transform: translateY(-35px);
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  width: 20px;
  height: 20px;
  background: #111;
  margin: 0 10px;
  height: calc(20px * var(--i));
  display: flex;
  justify-content: center;
  align-items: flex-end;
  animation: animate 2s linear infinite;
  animation-delay: calc(0.25s * var(--i));
  @keyframes animate {
    0% {
      background: #fff;
      filter: blur(2px);
      box-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
        0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff,
        0 0 300px #00b3ff, 0 0 400px #00b3ff;
    }
    25%,
    75% {
      background: #111;
      filter: blur(0px);
      box-shadow: none;
    }
    100% {
      background: #fff;
      filter: blur(2px);
      box-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
        0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff,
        0 0 300px #00b3ff, 0 0 400px #00b3ff;
    }
  }
`;

export const I = styled.i`
  display: flex;
  font-style: normal;
  color: #fff;
  font-size: 50px;
  font-weight: bold;
  transform: translateY(70px);
  animation: animate2 2s linear infinite;
  animation-delay: calc(0.25s * var(--i));
  @keyframes animate2 {
    0% {
      color: #fff;
      filter: blur(2px);
      text-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
        0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff,
        0 0 300px #00b3ff, 0 0 400px #00b3ff;
    }
    25%,
    75% {
      color: #111;
      filter: blur(0px);
      text-shadow: none;
    }
    100% {
      color: #fff;
      filter: blur(2px);
      textç-shadow: 0 0 10px #00b3ff, 0 0 20px #00b3ff, 0 0 40px #00b3ff,
        0 0 80px #00b3ff, 0 0 120px #00b3ff, 0 0 200px #00b3ff,
        0 0 300px #00b3ff, 0 0 400px #00b3ff;
    }
  }
`;