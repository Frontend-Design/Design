import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f7f7f7;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 30px;
  :hover {
    div {
      :nth-child(1) {
        transform: translateX(0px);
      }
      :nth-child(3) {
        transform: translateX(0px);
      }
    }
  }
`;

export const Box = styled.div`
  --clr: ${(e) => e.color};
  position: relative;
  width: 400px;
  height: 100px;
  background: #fff;
  cursor: pointer;
  transition: 0.5s ease-in-out;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.025);
  ::before {
    content: "";
    position: absolute;
    width: 6px;
    height: 100%;
    background: var(--clr);
    transition: 0.5s ease-in-out;
  }
  :hover {
    ::before {
      width: 100%;
    }
    div {
      :nth-child(1) {
        svg {
          color: #fff;
          fill: #fff;
        }
      }
      :nth-child(2) {
        h3,
        p {
          color: #fff;
        }
      }
    }
  }
  :nth-child(1) {
    transform: translateX(-70px);
  }
  :nth-child(3) {
    transform: translateX(70px);
  }
`;

export const Content = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
`;

export const Icon = styled.div`
  position: relative;
  min-width: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    font-size: 2.5em;
    color: var(--clr);
    fill: var(--clr);
    transition: 0.5s ease-in-out;
  }
`;

export const Text = styled.div`
  h3 {
    font-weight: 500;
    color: var(--clr);
    transition: 0.5s ease-in-out;
  }
  p {
    font-size: 0.9em;
    color: #999;
    transition: 0.5s ease-in-out;
  }
`;
