import styled from "@emotion/styled";

type IsLandPopup = {
  turn: boolean;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #fff;
`;

export const Box = styled.div`
  position: relative;
  width: 300px;
  height: 600px;
  background: #666;
  border-radius: 50px;
  ::before {
    content: "";
    position: absolute;
    inset: 3px;
    background: #000;
    border-radius: 48px;
  }
  :hover {
    div {
      opacity: 1;
    }
  }
  .btn2 {
    top: 160px;
    height: 40px;
  }
  .btn3 {
    top: 220px;
    height: 40px;
  }
`;

export const Inner = styled.div`
  position: absolute;
  inset: 3px;
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/iphone.png);
  background-size: cover;
  background-position: center;
  border-radius: 48px;
  border: 10px solid #000;
  display: flex;
  justify-content: center;
  opacity: 0;
  transition: 0.5s;
`;

export const Btn = styled.i`
  position: absolute;
  top: 110px;
  left: -2px;
  width: 3px;
  height: 26px;
  border-top-left-radius: 4px;
  border-bottom-left-radius: 4px;
  background: radial-gradient(#ccc, #666, #222);
  z-index: 10px;
`;

export const RightSideBtn = styled.i`
  position: absolute;
  top: 170px;
  right: -2px;
  width: 3px;
  height: 70px;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  background: radial-gradient(#ccc, #666, #222);
  z-index: 10px;
`;

export const IsLandPopup = styled.div<IsLandPopup>`
  position: absolute;
  top: 10px;
  width: ${(e) => (e.turn ? "250px" : "90px")};
  height: ${(e) => (e.turn ? "60px" : "25px")};
  background: #000;
  border-radius: ${(e) => (e.turn ? "50px" : "20px")};
  transition: 0.5s ease-in-out;
  display: flex;
  justify-content: space-between;
  align-items: center;
  ${(e) =>
    e.turn
      ? ""
      : `:hover {
    width: 200px;
    height: 25px;
  }`}

  :hover {
    p,
    .Action {
      visibility: visible;
      opacity: 1;
      transition-delay: 0.25;
      svg {
        opacity: 1;
        transition-delay: 0.25;
      }
    }
  }

  ${(e) =>
    e.turn
      ? `  p,
  .Action {
    visibility: visible;
    opacity: 1;
    transition-delay: 0.25;
  }
  .Action {
    svg {
       opacity: 1;
      :nth-child(1) {
        fill: #fff;
        transform: rotate(135deg);
        cursor: pointer;
        transition: 0.5s;
        background: #fd443b;
        border-radius: 50%;
        box-shadow: 0 0 0 8px #fd443b;
        margin-right: 12px;
      }
      :nth-child(2) {
        fill: #fff;
        cursor: pointer;
        transition: 0.5s;
        background: #31d059;
        border-radius: 50%;
        box-shadow: 0 0 0 8px #31d059;
        margin-right: 8px;
      }
    }
  }
  .Detail {
    div {
      width: 40px;
      height: 40px;
      margin-right: 8px;
      transition: 0.5s;
    }
  }
  `
      : ""}
`;

export const Content = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px;
  line-height: 25px;
  p {
    color: #fff;
    font-size: 0.6em;
    cursor: default;
    visibility: hidden;
    opacity: 0;
    transition: 0.5s;
  }
`;

export const Details = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  p {
    white-space: nowrap;
  }
`;

export const ImgBox = styled.div`
  position: relative;
  width: 0;
  height: 0;
  background: #fff;
  transition: 0.5;
  border-radius: 50%;
  overflow: hidden;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Action = styled.div`
  position: relative;
  color: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 15px;
  visibility: hidden;
  opacity: 0;
  svg {
    opacity: 0;
    :nth-child(1) {
      fill: #fd443b;
      transform: rotate(135deg);
      cursor: pointer;
      transition: 0.5s;
    }
    :nth-child(2) {
      fill: #31d059;
      cursor: pointer;
      transition: 0.5s;
    }
  }
`;
