import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
`;

export const H2 = styled.h2`
  display: flex;
  color: transparent;
  font-size: 15vw;
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  animation: animate 3s linear infinite;
  animation-delay: calc(0.1s * var(--i));
  @keyframes animate {
    0% {
      color: #fff;
      filter: blur(2px) hue-rotate(0deg);
      text-shadow: 0 0 10px #00baff, 0 0 20px #00baff, 0 0 40px #00baff,
        0 0 80px #00baff, 0 0 120px #00baff, 0 0 200px #00baff,
        0 0 300px #00baff, 0 0 400px #00baff;
    }
    30%,
    70% {
      color: #fff;
      filter: blur(2px) hue-rotate(360deg);
      text-shadow: 0 0 10px #00baff, 0 0 20px #00baff, 0 0 40px #00baff,
        0 0 80px #00baff, 0 0 120px #00baff, 0 0 200px #00baff;
    }
    100% {
      color: #fff;
      box-shadow: none;
      filter: blur(2px) hue-rotate(0deg);
    }
  }
`;
