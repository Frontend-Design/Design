import styled from "@emotion/styled";

type MenuType = {
  toggle: boolean;
};

export const bg = styled.div`
  background: #ffccbc;
`;

export const Action = styled.div`
  position: fixed;
  top: 20px;
  right: 30px;
`;

export const Profile = styled.div`
  position: relative;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  overflow: hidden;
  cursor: pointer;
`;

export const Img = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const Menu = styled.div<MenuType>`
  position: absolute;
  top: ${(e) => (e.toggle ? "80px" : "120px")};
  right: -10px;
  padding: 10px 20px;
  background: #fff;
  width: 200px;
  box-sizing: 0 5px 25px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  transition: 0.5s;
  visibility: ${(e) => (e.toggle ? "visible" : "hidden")};
  opacity: ${(e) => (e.toggle ? 1 : 0)};
  ::before {
    content: "";
    position: absolute;
    top: -5px;
    right: 28px;
    width: 20px;
    height: 20px;
    background: #fff;
    transform: rotate(45deg);
  }
  h3 {
    width: 100%;
    text-align: center;
    font-size: 18px;
    padding: 20px 0;
    font-weight: 600;
    color: #555;
    line-height: 1.2em;
    span {
      font-size: 14px;
      color: #cecece;
      font-weight: 400;
    }
  }
  ul {
    li {
      list-style: none;
      padding: 10px 0;
      border-top: 1px solid rgba(0, 0, 0, 0.05);
      direction: flex;
      align-items: center;
      :hover {
        svg {
          opacity: 1;
        }
        a {
          color: #ff5d94;
        }
      }
      svg {
        max-width: 20px;
        opacity: 0.5;
        transition: 0.5s;
      }
      a {
        display: inline-block;
        text-decoration: none;
        color: #555;
        font-weight: 500;
        transition: 0.5s;
      }
    }
  }
`;
