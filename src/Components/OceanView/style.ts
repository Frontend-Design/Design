import styled from "styled-components";

type NavigationType = {
  Show: boolean;
};

type DarkModeType = {
  Color: boolean;
};

export const bg = styled.div<DarkModeType>`
  ${(prop) =>
    prop.Color
      ? " --black: #333; --white: #fff;"
      : " --black: #fff; --white: #333;"}
`;

export const Warraper = styled.header`
  position: absolute;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 40px 100px;
  z-index: 100000;

  a {
    position: relative;
    display: inline-flex;
    color: var(--black);
    transition: 0.5s;
    text-decoration: none;
    font-size: 2em;
    font-weight: 700;
    letter-spacing: 0.05em;
    text-transform: uppercase;
  }
  @media (max-width: 768px) {
    padding: 20px;
  }
`;

export const RightSide = styled.div`
  display: flex;
`;

export const Btns = styled.div`
  position: relative;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  margin-left: 10px;
  svg {
    color: var(--black);
    transition: 0.5s;
    :nth-child(2) {
      display: none;
    }
  }
`;

export const DayNight = styled(Btns)``;

export const Menutoggle = styled(Btns)`
  svg {
    font-size: 3em;
  }
`;

export const Main = styled.section`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Mask = styled.img<DarkModeType>`
  mix-blend-mode: multiplay;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 2;
  user-select: none;
  mix-blend-mode: screen;

  ${(prop) => (prop.Color ? "" : "filter: invert(1); mix-blend-mode:multiply;")}
`;

export const Title = styled.h2`
  position: relative;
  z-index: 3;
  font-size: 16vw;
  color: #fff;
  text-shadow: 0 20px 30px rgba(0, 0, 0, 0.2);
`;

export const Navigation = styled.ul<NavigationType>`
  position: absolute;
  top: 0;
  left: ${(prop) => (prop.Show ? "-100%" : "0%")};
  transition: 0.5s;

  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: var(--white);
  z-index: 4;
  transition: 0.5s;
`;

export const NaviBtn = styled.li`
  list-style: none;
  a {
    display: inline-flex;
    margin: 5px 0;
    font-size: 1.35em;
    text-decoration: none;
    color: var(--black);
    transition: 0.5s;

    padding: 5px 20px;
    border-radius: 40px;
    :hover {
      background: var(--black);
      color: var(--white);
    }
  }
`;

export const CopyRightText = styled.p`
  position: absolute;
  left: 100px;
  bottom: 40px;
  z-index: 4;
  font-weight: 500;
  font-size: 1.2em;
  color: var(--black);
  @media (max-width: 768px) {
    left: 20px;
    bottom: 30px;
  }
`;

export const Sci = styled.ul`
  position: absolute;
  right: 100px;
  bottom: 30px;
  z-index: 4;
  display: flex;
  flex-direction: column;
  @media (max-width: 768px) {
    right: 20px;
    bottom: 20px;
  }
`;

export const SciList = styled.li`
  list-style: none;
  a {
    text-decoration: none;
    color: var(--black);
    transition: 0.5s;

    svg {
      font-size: 1.7em;
      color: white;
    }
  }
`;
