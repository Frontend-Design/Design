import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  width: 100%;
  background: #e0f7fa;
  font-family: "Poppins", sans-serif;
`;

export const Section = styled.section``;

export const Container = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  margin: 40px 0;
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 400px;
  margin: 20px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  border-radius: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  :hover {
    div {
      bottom: 0;
      div {
        h3 {
          opacity: 1;
          transform: translateY(0px);
        }
      }
      li {
        transform: translateY(0);
        opacity: 1;
      }
    }
  }
`;

export const ImgBx = styled.div``;

export const Img = styled.img``;

export const Content = styled.div`
  position: absolute;
  bottom: -160px;
  width: 100%;
  height: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10;
  flex-direction: column;
  backdrop-filter: blur(15px);
  box-shadow: 0 -10px 10px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: bottom 0.5s;
`;

export const ContentBx = styled.div`
  h3 {
    color: #fff;
    text-transform: uppercase;
    letter-spacing: 2px;
    font-weight: 500;
    font-size: 18px;
    text-align: center;
    margin: 20px 0 15px;
    line-height: 1.1em;
    transition: 0.5s;
    opacity: 1;
    transform: translateY(-20px);
    span {
      font-size: 12px;
      font-weight: 300;
      text-transform: initial;
    }
  }
`;

export const Sci = styled.ul`
  position: relative;
  bottom: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Li = styled.li`
  --i: ${({ i }: { i: number }) => i};
  list-style: none;
  margin: 0 10px;
  transform: translateY(40px);
  transition: 0.5s;
  opacity: 0;
  transition-delay: calc(0.2s * var(--i));
  a {
    svg {
      fill: #fff;
    }
  }
`;
