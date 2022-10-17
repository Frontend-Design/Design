import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #222;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  max-width: 1100px;
`;

export const Card = styled.div`
  position: relative;
  width: 320px;
  height: 320px;
  margin: 15px;
  overflow: hidden;
  :hover {
    div {
      ::before {
        transform: scaleX(1);
        transition: transform 0.5s ease-in-out;
        transform-origin: left;
        transition-delay: 0s;
      }
      div {
        transform: translateX(0px);
        transition-delay: 0.5s;
      }
    }
  }
`;

export const ImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const ContentBx = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #fff;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
    transition-delay: 0.5s;
  }
`;

export const Content = styled.div`
  position: relative;
  padding: 30px;
  z-index: 1px;
  transition: 0.5s;
  transform: translateX(-300px);
  transition-delay: 0s;
`;

export const H3 = styled.h3`
  font-size: 1.3em;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

export const P = styled.p`
  font-size: 1em;
  line-height: 1.4em;
  font-weight: 300;
`;
