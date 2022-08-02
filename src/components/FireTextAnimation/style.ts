import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #0e0e0e;
`;

export const Text = styled.div`
  position: relative;
  width: 100%;
  text-align: center;
  filter: url(#fire);
`;

export const Title = styled.h2`
  position: relative;
  color: #ffeb3b;
  font-weight: 600;
  font-size: 16em;
  text-shadow: 0 0 10px #ff8c3b, 0 0 40px #ff8c3b, 0 0 80px #ff8c3b,
    0 0 160px #ff8c3b, 0 0 240px #ff8c3b;
  -webkit-box-reflect: below -100 px linear-gradient(transparent, #0008);
`;

export const Svg = styled.svg`
  width: 0;
  height: 0;
`;
