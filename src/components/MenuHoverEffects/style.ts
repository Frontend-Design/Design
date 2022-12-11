import styled from "@emotion/styled";

export const bg = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Oleo+Script+Swash+Caps&family=Sacramento&display=swap");
  position: absolute;
  width: 100%;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  overflow: hidden;
  background: #fff;
  font-family: "Poppins", sans-serif;
`;

export const Ul = styled.ul`
  position: relative;
  :hover > li:not(:hover) {
    opacity: 0;
  }
`;

export const Li = styled.li`
  --clr: ${({ clr }: { clr: string }) => clr};
  list-style: none;
  text-align: center;
  z-index: 10;
  a {
    color: #333;
    text-decoration: none;
    font-size: 2em;
    padding: 5px 20px;
    display: inline-flex;
    font-weight: 300;
    letter-spacing: 0.1em;
    text-transform: uppercase;

    ::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 5em;
      opacity: 1;
      color: #222;
      z-index: -1;
      font-weight: 400;
      text-transform: initial;
      letter-spacing: 500px;
      transition: letter-spacing 0.5s;
    }
    :hover {
      background: #fff;
      color: var(--clr);
      ::before {
        content: attr(data-text);
        opacity: 1;
        background: var(--clr);
        width: 250vh;
        height: 250vh;
        letter-spacing: 0;
        font-family: "Sacramento", cursive;
      }
    }
  }
`;
