import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #27282c;
`;

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 220px;
`;

export const A = styled.a`
  --clr: ${({ clr }: { clr: string }) => clr};
  position: relative;
  padding: 16px 30px;
  font-size: 1.5em;
  color: var(--clr);
  text-shadow: 0 0 15px var(--clr);
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  transition: 0.5s;
  border: 2px solid rgba(0, 0, 0, 0.5);
  z-index: 1;
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: var(--clr);
    z-index: -1;
    transform: scale(0);
    transition: 0.5s;
  }
  :hover {
    color: #fff;
    border: 2px solid rgba(0, 0, 0, 0);
    text-shadow: var(--clr);
    ::before {
      transform: scale(1);
      transition-delay: 0.5s;
      box-shadow: 0 0 10px var(--clr), 0 0 30px var(--clr), 0 0 60px var(--clr);
    }
    span {
      :nth-child(1) {
        left: 50%;
        transform: scaleX(0);
        transition-delay: 0s;
      }
      :nth-child(3) {
        right: 50%;
        transform: scaleX(0);
        transition-delay: 0s;
      }
      :nth-child(2) {
        top: 50%;
        transform: scaleY(0);
        transition-delay: 0s;
      }
      :nth-child(4) {
        bottom: 50%;
        transform: scaleY(0);
        transition-delay: 0s;
      }
    }
  }
`;

export const Span = styled.span`
  position: absolute;
  background: var(--clr);
  pointer-events: none;
  box-shadow: 0 0 10px var(--clr), 0 0 20px var(--clr), 0 0 30px var(--clr),
    0 0 50px var(--clr), 0 0 100px var(--clr);
  :nth-child(1),
  :nth-child(3) {
    width: 40px;
    height: 4px;
  }
  :nth-child(2),
  :nth-child(4) {
    width: 4px;
    height: 40px;
  }
  :nth-child(1) {
    top: calc(50% - 2px);
    left: -50%;
    transform-origin: left;
    transition: 0.5s ease-in-out;
    transition-delay: 0.25s;
  }

  :nth-child(3) {
    top: calc(50% - 2px);
    right: -50%;
    transform-origin: right;
    transition: 0.5s ease-in-out;
    transition-delay: 0.25s;
  }

  :nth-child(2) {
    left: calc(50% - 2px);
    top: -100%;
    transform-origin: top;
    transition: 0.5s ease-in-out;
    transition-delay: 0.25s;
  }

  :nth-child(4) {
    left: calc(50% - 2px);
    bottom: -100%;
    transform-origin: bottom;
    transition: 0.5s ease-in-out;
    transition-delay: 0.25s;
  }
`;
