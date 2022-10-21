import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #382f45;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  p {
    color: #fff;
    font-size: 2em;
    margin-bottom: 10px;
  }
`;

export const Label = styled.label`
  position: relative;
  margin: 5px 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  font-size: 2em;
  color: #fff;
`;

export const Input = styled.input`
  appearance: none;
  display: none;
  :checked ~ span.check {
    transform: rotate(-45deg) translate(7px, -7px);
    ::before {
      background: #0f0;
      box-shadow: 0 0 0 transparent;
    }
    ::after {
      height: 50%;
      background: #0f0;
      box-shadow: 0 0 0 transparent;
    }
  }
  :checked ~ span.cross {
    ::before {
      background: #f00;
      box-shadow: 0 0 0 transparent;
      transform: rotate(-45deg) translate(10px, -10px);
    }
    ::after {
      background: #f00;
      box-shadow: 0 0 0 transparent;
      transform: rotate(-45deg) translate(10px, 10px);
    }
  }
`;

export const Check = styled.span`
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  /* background: #111; */
  margin-right: 15px;
  transition: 0.5s;
  ::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 3px;
    background: #fff;
    box-shadow: 0 -27px 0 #fff;
    transition: 0.5s;
  }
  ::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 3px;
    height: 100%;
    background: #fff;
    box-shadow: 27px 0 #fff;
    transition: 0.5s;
  }
`;
