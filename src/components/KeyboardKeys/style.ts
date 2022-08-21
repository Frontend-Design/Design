import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #232323;
`;

export const Div = styled.div``;

export const Span = styled.span`
  position: relative;
  display: inline-block;
  width: 80px;
  height: 80px;
  padding: 8px 15px;
  margin: 8px 4px;
  border-radius: 10px;
  background: linear-gradient(180deg, #282828, #202020);
  box-shadow: inset -8px 0 8px rgba(0, 0, 0, 0.15),
    inset 0 0 0 2px rgba(0, 0, 0, 0.25), 0 0 0 2px rgba(0, 0, 0, 0.75),
    10px 20px 25px rgba(0, 0, 0, 0.4);
  overflow: hidden;
  :last-child {
    width: 100%;
  }
  ::before {
    content: "";
    position: absolute;
    top: 3px;
    left: 4px;
    bottom: 14px;
    right: 12px;
    background: linear-gradient(90deg, #232323, #4a4a4a);
    box-shadow: -10px -10px 10px rgba(255, 255, 255, 0.25),
      10px 5px 10px rgba(0, 0, 0, 0.15);
    border-left: 1px solid #0004;
    border-bottom: 1px solid #0004;
    border-top: 1px solid #0009;
  }
`;

export const Font = styled.i`
  position: relative;
  color: #fff;
  font-style: normal;
  font-size: 1.5em;
  text-transform: uppercase;
`;
