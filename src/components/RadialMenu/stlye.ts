import styled from "@emotion/styled";

type placedprop = {
  num: number;
  clr: string;
};

export const bg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 100vh;
  background: #2f363e;
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
  background: #2f363e;
  border: 2px solid #fff;
  color: #fff;
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
  --clr: ${(props) => props.clr};
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
    border: 2px solid var(--clr);
    border-radius: 50%;
    transform: rotate(calc(360deg / -8 * var(--i)));
    color: var(--clr);
    transition: 1s;
    :hover {
      transition: 0s;
      color: var(--clr);
      background: var(--clr);
      color: #333;
      box-shadow: 0 0 10px var(--clr), 0 0 30px var(--clr), 0 0 50px var(--clr);
    }
  }
`;
