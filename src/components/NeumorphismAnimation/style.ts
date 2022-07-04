import styled from "@emotion/styled";

type List = {
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
  `;

export const load = styled.span<List>`
    position: relative;
    width: 50px;
    height: 50px;
    background: #eaeef0;
    margin: 0 10px;
    border-radius: 50%;
    border: 6px solid #eaeef0;
    box-shadow: -8px -8px 15px rgba(255, 255, 255, 1),
      8px 8px 15px rgba(0, 0, 0, 0.2), inset 3px 3px 5px rgba(0, 0, 0, 0.1),
      inset -1px -1px 5px rgba(255, 255, 255, 1);
    ::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background: #5c89ff;
      border-radius: 50%;
      box-shadow: inset 3px 3px 5px rgba(0, 0, 0, 0.1),
        inset -1px -1px 5px rgba(255, 255, 255, 1);
      transform: scale(0);
      animation: animate 3.5s linear infinite, animateColor 5s linear infinite;
      --i: ${(props) => props.num};
      animation-delay: calc(var(--i) * 0.2s);
      @keyframes animate {
        0%,
        9.99%,
        70.0001% {
          transform: scale(0);
        }
        10%,
        70% {
          transform: scale(1);
        }
      }
      @keyframes animateColor {
        0% {
          filter: hue-rotate(0deg);
        }
        100% {
          filter: hue-rotate(360deg);
        }
      }
    }
  `;