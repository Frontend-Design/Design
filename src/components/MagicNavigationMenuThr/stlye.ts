import styled from "@emotion/styled";

type ListType = {
  active: boolean;
  bgColor: string;
};

type IndicatorType = {
  point: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #222327;
`;

export const Navigation = styled.div`
  position: relative;
  width: 400px;
  height: 60px;
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
  width: 100%;
  height: 100%;
`;

export const List = styled.li<ListType>`
  --clr: ${(e) => e.bgColor};
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
        background: var(--clr);
        transform: translateY(-27px);
        color: #fff;
        transition-delay: 0.25s;
        ::before {
          opacity:  0.5;
          transition-delay: 0.25s;
        }
      }
    }
  
  `}
`;

export const Icon = styled.span`
  position: relative;
  display: block;
  width: 55px;
  height: 55px;
  text-align: center;
  line-height: 65px;
  border-radius: 50%;
  color: #222327;
  font-size: 1.5em;
  transition: 0.5s;
  ::before {
    content: "";
    position: absolute;
    top: 10px;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    border-radius: 50%;
    transition: 0.5s;
    filter: blur(5px);
    opacity: 0;
  }
`;

export const Indicator = styled.div<IndicatorType>`
  position: absolute;
  top: -35px;
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
