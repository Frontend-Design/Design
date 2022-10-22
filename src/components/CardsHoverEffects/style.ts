import styled from "@emotion/styled";

type TagType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #2e557c;
  transition: 0.5s;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 0;
    background: #30bfa5;
    transition: 0.5s;
    clip-path: circle(250px at center);
  }
`;

export const Container = styled.div`
  position: relative;
  width: 1100px;
  height: 400px;
  :hover {
    .Card {
      position: absolute;
      top: 50%;
      left: 50%;
      z-index: 1;
      opacity: 1;
      transform: translateX(calc(-50% + calc(350px * (var(--i) - 2))))
        translateY(-50%) rotate(0deg) skew(0, 0) scale(1);
    }
    .Content {
      opacity: 1;
      transition-delay: calc(0.2s * var(--j));
      transform: translateY(0px);
    }
  }
`;

export const Card = styled.div<TagType>`
  position: absolute;
  --i: ${(e) => e.num};
  top: calc(50% - 200px);
  left: 50%;
  width: 300px;
  height: 400px;
  background: #fff;
  border-radius: 10px;
  transform: translateX(-50%) translateY(calc(50px * (var(--i) - 2)))
    rotate(40deg) skew(-20deg, -10deg) scale(0.6);
  box-shadow: 25px 25px 100px rgba(0, 0, 0, 0.2);
  z-index: calc(-1 * var(--i) + 4);
  transition: 0.5s;
  display: flex;
  justify-content: center;
  align-items: center;
  :nth-child(2) {
    opacity: 0.8;
  }
  :nth-child(3) {
    opacity: 0.6;
  }
`;

export const Content = styled.div<TagType>`
  --j: ${(e) => e.num};
  position: relative;
  padding: 25px;
  color: #333;
  opacity: 0;
  transition: 0.5s;
  transform: translateY(50px);
`;
