import styled from "@emotion/styled";

type SpanType = {
  num: number;
};

export const Section = styled.section`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0c1b21;
`;

export const Loader = styled.div`
  position: relative;
  width: 250px;
  height: 250px;
  filter: url(#gooey);
  animation: animate 16s ease-in-out infinite;
`;

export const Span = styled.span<SpanType>`
  --i: ${(e) => e.num};
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: block;
  transform: rotate(calc(45deg * var(--i)));
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: calc(50% - 20px);
    width: 40px;
    height: 40px;
    background: linear-gradient(45deg, #c7eeff, #03a9f4);
    border-radius: 50%;
    box-shadow: 0 0 30px #00bcd4;
  }
`;

export const Rotate = styled(Span)<SpanType>`
  --j: ${(e) => e.num};
  animation: animate 4s ease-in-out infinite;
  animation-delay: calc(-0.2s * var(--j));
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Svg = styled.svg`
  width: 0;
  height: 0;
`;
