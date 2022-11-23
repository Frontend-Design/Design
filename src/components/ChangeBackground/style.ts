import styled from "@emotion/styled";

type SpanType = {
  clr: string;
  active: boolean;
};

export const bg = styled.div`
  min-height: 100vh;
  /* background: #1dd1a1; */
`;

export const Colors = styled.div`
  position: absolute;
  right: 0;
  width: 75px;
  height: 100vh;
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-left: 3px solid #333;
`;

export const Span = styled.span<SpanType>`
  --clr: ${({ clr }) => clr};
  position: relative;
  width: 30px;
  height: 30px;
  background: var(--clr);
  margin: 15px 0;
  border-radius: 50%;
  cursor: pointer;
  ::before {
    content: "";
    position: absolute;
    width: 18px;
    height: 18px;
    background: var(--clr);
    rotate: 45deg;
    translate: -36px;
    border-top: 3px solid #333;
    border-right: 3px solid #333;
    opacity: 0;
    transition: 0.5s;
    ::before {
      opacity: 1;
    }
  }
  ${({ active }) =>
    active
      ? `
      border: 3px solid #333; ::before {
      opacity: 1;
    } `
      : ""}
`;
