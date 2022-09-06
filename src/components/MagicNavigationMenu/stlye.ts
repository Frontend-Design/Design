import styled from "@emotion/styled";

type ListType = {
  active: boolean;
};

type IndicatorType = {
  point: number;
};

export const bg = styled.div`
  --clr: #222327;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: var(--clr);
`;

export const Navigation = styled.div`
  position: relative;
  width: 400px;
  height: 70px;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 10px;
`;

export const Ul = styled.ul`
  display: flex;
  width: 350px;
  padding: 0;
`;

export const A = styled.a`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  text-align: center;
  font-weight: 500;
`;

export const List = styled.li<ListType>`
  position: relative;
  list-style: none;
  width: 70px;
  height: 70px;
  z-index: 1;
  ${(e) =>
    e.active &&
    `
    a {
      .icon {
        transform: translateY(-35px);
      }
      .text {
        opacity: 1;
        transform: translateY(10px);
      }
    }
  
  `}
`;

export const Icon = styled.span`
  position: relative;
  display: block;
  line-height: 75px;
  font-size: 1.5em;
  text-align: center;
  transition: 0.5s;
  color: var(--clr);
`;

export const Text = styled.span`
  position: absolute;
  color: var(--clr);
  font-weight: 400;
  font-size: 0.75em;
  letter-spacing: 0.05em;
  transition: 0.5s;
  opacity: 0;
  transform: translateY(20px);
`;

export const Indicator = styled.div<IndicatorType>`
  position: absolute;
  top: -50%;
  width: 70px;
  height: 70px;
  background: #29fd53;
  border-radius: 50%;
  border: 6px solid var(--clr);
  transition: 0.5s;
  ::before {
    content: "";
    position: absolute;
    top: 50%;
    left: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-right-radius: 20px;
    box-shadow: 1px -10px 0 0 var(--clr);
  }
  ::after {
    content: "";
    position: absolute;
    top: 50%;
    right: -22px;
    width: 20px;
    height: 20px;
    background: transparent;
    border-top-left-radius: 20px;
    box-shadow: -1px -10px 0 0 var(--clr);
  }
  ${(e) => `transform: translateX(calc(70px * ${e.point} ));`}
`;
