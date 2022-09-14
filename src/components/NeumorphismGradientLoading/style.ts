import styled from "@emotion/styled";

type SpnaType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #eaeef0;
`;

export const Loader = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const I = styled.i`
  position: absolute;
  inset: 0;
  background: linear-gradient(#42abff, #ff4f8b, #ffeb3b);
  border-radius: 50%;
  filter: blur(5px);
  animation: animate 1s linear infinite;
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const Span = styled.span`
  position: relative;
  width: 250px;
  height: 250px;
  background: #eaeef0;
  border: 6px solid #eaeef0;
  box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
    8px 8px 25px rgba(0, 0, 0, 0.15);
  border-radius: 50%;
  overflow: hidden;
  ::before {
    content: "";
    position: absolute;
    inset: 40px;
    background: #eaeef0;
    border-radius: 50%;
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
      8px 8px 25px rgba(0, 0, 0, 0.25), inset 3px 3px 10px rgba(0, 0, 0, 0.1),
      inset -1px -1px 15px rgba(255, 255, 255, 1);
    border: 2px solid #eaeef0;
    z-index: 1;
  }
`;

export const Text = styled.div`
  position: absolute;
  width: 340px;
  height: 340px;
  border-radius: 50%;
  animation: animateText 25s linear infinite;
  @keyframes animateText {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export const TSpan = styled.span<SpnaType>`
  position: absolute;
  display: block;
  left: 50%;
  transform-origin: 0 170px;
  --i: ${(props) => props.num};
  transform: rotate(calc(var(--i) * 7.35deg));
  font-weight: normal;
  font-size: 1.4em;
`;
