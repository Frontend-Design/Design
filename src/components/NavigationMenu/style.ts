import styled from "@emotion/styled";

type placedprop = {
  num: number;
};

export const bg = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: linear-gradient(45deg, #8469ed, #ff1252);
`;

export const menu = styled.div<any>`
  position: relative;
  width: 220px;
  height: 220px;
  display: flex;
  justify-content: center;
  align-items: center;
  ${(prop) =>
    prop.active
      ? `.toggle {transform: rotate(315deg);}; 
         li{transform: rotate(calc(360deg / 8 * var(--i)));}`
      : ""}
`;

export const toggle = styled.div`
  position: absolute;
  width: 80px;
  height: 80px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  border-radius: 50%;
  cursor: pointer;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.15);
  font-size: 2rem;
  transition: transform 1.25s;
`;

export const li = styled.li<placedprop>`
  position: absolute;
  list-style: none;
  left: 0;
  --i: ${(props) => props.num};
  transform-origin: 110px;
  transition: 0.5s;
  transition-delay: calc(0.1s * var(--i));
  transform: rotate(0deg) translateX(100px);
  a {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    background: #fff;
    border-radius: 50%;
    transform: rotate(calc(360deg / -8 * var(--i)));
    box-shadow: 0 3px 4px rgba(0, 0, 0, 0.15);
    color: #111;
    :hover {
      color: #ff1252;
      transition: 0.5s;
    }
  }
`;