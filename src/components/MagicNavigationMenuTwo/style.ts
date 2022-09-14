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
  z-index: 2;
  ${(e) =>
    e.active &&
    `
    a {
      .icon {
        transform: translateY(-35px);
        color: #2196f3;
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
  background: #2196f3;
  color: white;
  padding: 2px 7px;
  border-radius: 12px;
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
  background: #fff;
  border-radius: 50%;
  z-index: 1;
  transition: 0.5s;
  ::before {
    content: "";
    position: absolute;
    top: 5px;
    left: -28px;
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
    box-shadow: 15px 18px #fff;
  }
  ::after {
    content: "";
    position: absolute;
    top: 5px;
    right: -28px;
    width: 30px;
    height: 30px;
    background: transparent;
    border-radius: 50%;
    box-shadow: -15px 18px #fff;
  }
  ${(e) => `transform: translateX(calc(70px * ${e.point} ));`}
`;
