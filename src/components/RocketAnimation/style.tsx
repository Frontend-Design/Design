import styled from "@emotion/styled";

type StyleType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #eaeef0;
`;

export const loader = styled.div`
  position: relative;
  display: flex;
  span {
    position: relative;
    width: 250px;
    height: 250px;
    background: #eaeef0;
    border: 6px solid #eaeef0;
    border-radius: 50%;
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
      8px 8px 25px rgba(0, 0, 0, 0.15);
    overflow: hidden;
    ::before {
      content: "";
      position: absolute;
      inset: 0;
      border-radius: 50%;
      box-shadow: inset 10px 10px 20px rgba(0, 0, 0, 0.15),
        inset -5px -5px 15px rgba(255, 255, 255, 1);
    }
    ::after {
      content: "";
      position: absolute;
      inset: 40px;
      background: #eaeef0;
      border: 3px solid #eaeef0;
      border-radius: 50%;
      box-shadow: -8px -8px 25px rgba(255, 255, 255, 1),
        8px 8px 25px rgba(0, 0, 0, 0, 0.25),
        inset 3px 3px 10px rgba(0, 0, 0, 0, 0.15),
        inset -1px -1px 15px rgba(255, 255, 255, 1);
    }
    i {
      position: absolute;
      inset: 0;
      filter: blur(5px);
      border-radius: 50%;
      background: linear-gradient(#42abff, #ff4f8b, #ffeb3b);
      animation: animate 1s linear infinite;
      @keyframes animate {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
    }
  }
`;

export const rocket = styled.div`
  i {
    position: absolute;
    inset: 50px;
    z-index: 10;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    overflow: hidden;
  }
`;

export const Rocket = styled.i`
  svg {
    position: absolute;
    animation: animateRocket 0.2s linear infinite;
    @keyframes animateRocket {
      0%,
      75%,
      100% {
        transform: translate(0, 0) rotate(-45deg);
      }
      25% {
        transform: translate(3px, -3px) rotate(-45deg);
      }
      50% {
        transform: translate(-3px, -3px) rotate(-45deg);
      }
    }
  }
`;

export const Cloud = styled.i<StyleType>`
  svg {
    position: absolute;
    --i: ${(prop) => prop.num};
    top: calc(35px * var(--i));
    left: calc(45px * var(--i));
    animation: animateClouds 1s linear infinite;
    animation-delay: calc(-0.5s * var(--i));
    @keyframes animateClouds {
      0% {
        transform: translateY(calc(-35 * 5px));
      }
      100% {
        transform: translateY(calc(35 * 5px));
      }
    }
  }
`;
