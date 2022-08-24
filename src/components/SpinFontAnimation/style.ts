import styled from "@emotion/styled";

type FontsType = {
  num: number;
};

export const bg = styled.div`
  background: #222;
  overflow: hidden;
`;

export const Circle = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -35%);
  width: 1400px;
  height: 1400px;
  border-radius: 50%;
`;

export const Span = styled.span<FontsType>`
  position: absolute;
  display: block;
  border-radius: 50%;
  overflow: hidden;
  background: #222;
  animation: animate 5s cubic-bezier(0.64, -0.56, 0.36, 1.56) infinite;
  --i: ${(e) => e.num};

  :nth-child(${(e) => e.num + 1}) {
    top: calc(var(--i) * 150px);
    left: calc(var(--i) * 150px);
    right: calc(var(--i) * 150px);
    bottom: calc(var(--i) * 150px);
    animation-delay: calc(var(--i) * 0.2s);
  }

  ::before {
    content: attr(data-text);
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 16em;
    text-align: center;
    font-weight: 900;
    color: #fff;
    text-transform: uppercase;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: 50%;
    box-shadow: inset 0 0 50px rgba(0, 0, 0, 0.5),
      inset 0 0 75px rgba(0, 0, 0, 0.5), inset 0 0 100px rgba(0, 0, 0, 0.5),
      inset 0 0 125px rgba(0, 0, 0, 0.5);
  }
  @keyframes animate {
    0% {
      transform: rotate(0deg);
    }
    80%,
    100% {
      transform: rotate(360deg);
    }
  }
`;
