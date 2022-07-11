import styled from "@emotion/styled";

export const Section = styled.section`
  position: absolute;
  top: -50px;
  left: -50px;
  width: calc(100% + 50px);
  height: calc(100% + 50px);
  background: repeating-linear-gradient(#111, #111 50%, #fff 50%, #fff);
  background-size: 5px 5px;
  filter: url(#noise);
`;

export const Svg = styled.svg`
  width: 0;
  height: 0;
`;
