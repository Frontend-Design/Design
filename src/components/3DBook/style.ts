import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/floor.png);
  background-attachment: fixed;
  background-size: cover;
`;

export const Book = styled.div`
  position: relative;
  top: 0;
  width: 400px;
  height: 600px;
  background: #fff;
  transform: rotate(-37.5deg) skewX(10deg);
  box-shadow: -35px 35px 50px rgba(0, 0, 0, 1);
  transition: 0.5s;
  h2 {
    position: absolute;
    bottom: 30px;
    left: 20px;
    font-size: 5em;
    line-height: 1em;
    color: #fff;
    span {
      background: url(${process.env.REACT_APP_PUBLIC_URL}/img/bg.png);
      background-attachment: fixed;
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
  }
  :hover {
    transform: rotate(-37.5deg) skewX(10deg) translate(20px, -20px);
    box-shadow: -50px 50px 100px rgba(0, 0, 0, 1);
  }
  ::before {
    content: "";
    width: 30px;
    height: 100%;
    background: url(${process.env.REACT_APP_PUBLIC_URL}/img/bg.png);
    position: absolute;
    top: 0;
    left: 0;
    transform: skewY(-45deg) translate(-30px, -15px);
    box-shadow: inset -10px 0 20px rgba(0, 0, 0, 0.2);
  }
  ::after {
    content: "";
    width: 100%;
    height: 30px;
    background: #ccc;
    position: absolute;
    bottom: 0;
    left: 0;
    transform: skewX(-45deg) translate(15px, 30px);
  }
`;

export const Cover = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 70%;
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/bg.png);
  background-size: cover;
`;

export const Writer = styled.div`
  position: absolute;
  bottom: 20px;
  right: 20px;
  color: #262626;
  font-size: 0.6em;
  padding-top: 5px;
  font-weight: 500;
  border-top-left-radius: 1px solid #262626;
  i {
    font-weight: 700;
  }
`;
