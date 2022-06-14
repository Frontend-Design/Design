import styled from "styled-components";

type placedprop = {
  num: number;
  nam: number;
};

export const bg = styled.div`
  min-height: 100vh;
  background-color: #262e31;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImgBox = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  transform-style: preserve-3d;
  perspective: 1000px;
  :hover {
    img {
      transform: rotate(-30deg) skew(25deg) translateX(calc(35px * var(--i)))
        translateY(calc(-35px * var(--i)));
      box-shadow: -20px 20px 20px rgba(0, 0, 0, 0.25);
    }
  }
`;

export const Img = styled.img<placedprop>`
  --i: ${(props) => props.num};
  --j: ${(props) => props.nam};

  position: absolute;
  top: 0;
  left: 0;
  width: 300px;
  height: 300px;
  object-fit: cover;
  transition: 0.5s;
  z-index: calc(1 + var(--i));
  opacity: calc(1- (0.2 * var(--j)));
`;
