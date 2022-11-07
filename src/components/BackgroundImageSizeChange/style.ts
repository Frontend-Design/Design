import styled from "@emotion/styled";

export const bg = styled.div`
  margin: 0;
  padding: 0;
`;

export const Header = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background: url(${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png);
  background-size: 160%;
  background-position: center;
  background-attachment: fixed;
`;

export const Section = styled.section`
  padding: 100px;
  color: #111;
  h2 {
    font-size: 2.5em;
  }
  p {
    font-size: 1.5em;
  }
`;
