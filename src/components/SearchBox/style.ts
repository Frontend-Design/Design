import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #cfd1e1;
  overflow: hidden;
`;

export const SearchBox = styled.div`
  position: relative;
  width: 65px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.5s;
  :hover {
    width: 400px;
    input {
      ::placeholder {
        color: #555;
      }
    }
    input:hover,
    input {
      color: #555;
    }
  }
  ::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 10px;
    height: 100%;
    background: linear-gradient(#fff, #fff, #e3e3e3);
    z-index: 1;
    filter: blur(1px);
  }
  ::after {
    content: "";
    position: absolute;
    top: 0;
    right: -1px;
    width: 10px;
    height: 100%;
    background: #9d9d9d;
    z-index: 1;
    filter: blur(1px);
  }
  input {
    position: relative;
    width: 100%;
    height: 100%;
    border: none;
    padding: 10px 25px;
    outline: none;
    font-size: 1.1em;
    color: transparent;
    :hover {
      color: transparent;
    }
    ::placeholder {
      color: transparent;
    }
    background: linear-gradient(#dbdae1, #a3aaba);
    box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1),
      15px 15px 15px rgba(0, 0, 0, 0.1), 20px 20px 15px rgba(0, 0, 0, 0.1),
      30px 30px 15px rgba(0, 0, 0, 0.1);
    inset: 1px 1px 2px #fff;
  }
  svg {
    position: absolute;
    right: 20px;
    color: #555;
    font-size: 1.5em;
    cursor: pointer;
  }
`;
export const Shadow = styled.div`
  position: absolute;
  top: 0;
  left: -50px;
  width: calc(100% + 50px);
  height: 300px;
  background: linear-gradient(
    180deg,
    rgba(0, 0, 0, 0.1),
    transparent,
    transparent
  );
  transform-origin: top;
  transform: skew(45deg);
  ::before {
    content: "";
    position: absolute;
    width: 50px;
    height: 50px;
    background: #cfd1e1;
    z-index: 1;
  }
`;
