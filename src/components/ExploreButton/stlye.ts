import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #28272a;
`;

export const A = styled.a`
  position: relative;
  width: 200px;
  height: 60px;
  background: #333;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: rgba(255, 255, 255, 0.5);
  text-decoration: none;
  letter-spacing: 0.2em;
  font-size: 1.25em;
  text-transform: uppercase;
  font-weight: 500;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #359ad8;
    transform: scaleX(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
  }
  :hover {
    ::before {
      transform: scaleX(1);
      transform-origin: left;
    }
    i {
      width: 30px;
      height: 2px;
      background: #333;
      transition-delay: 0s, 1s, 0.5s;
      ::before {
        background: #333;
        rotate: 45deg;
        transition-delay: 1.5s;
      }
      ::after {
        background: #333;
        rotate: -45deg;
        transition-delay: 1.5s;
      }
    }
  }
`;

export const I = styled.i`
  position: relative;
  display: inline-block;
  width: 2px;
  height: 30px;
  background: #d3d636;
  transition: 0.5s, width 0.5s, height 0.5s;
  transition-delay: 0s, 0.5s, 1s;
  ::before {
    content: "";
    position: absolute;
    top: 0.5px;
    right: 0;
    width: 50%;
    height: 2px;
    background: transparent;
    rotate: 0;
    transform-origin: right;
    transition: 1s;
  }
  ::after {
    content: "";
    position: absolute;
    top: 0.5px;
    right: 0;
    width: 50%;
    height: 2px;
    background: transparent;
    rotate: 0;
    transform-origin: right;
    transition: 1s;
  }
`;

export const Span = styled.span`
  display: inline-block;
  z-index: 2;
  transition: 0.5s ease-in-out;
  :hover {
    color: #333;
  }
`;
