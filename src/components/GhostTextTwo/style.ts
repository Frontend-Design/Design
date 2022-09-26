import styled from "@emotion/styled";

export const Section = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #111;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
`;

export const Title = styled.h2`
  font-size: 10em;
  color: #fff;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  :hover {
    span {
      filter: blur(20px);
      opacity: 0;
      transform: scale(2);
    }
  }
`;

export const Span = styled.span`
  transition: 1.5s;
  :nth-child(10n + 1) {
    transition-delay: 0s;
  }
  :nth-child(10n + 2) {
    transition-delay: 0.1s;
  }
  :nth-child(10n + 3) {
    transition-delay: 0.2s;
  }
  :nth-child(10n + 4) {
    transition-delay: 0.3s;
  }
  :nth-child(10n + 5) {
    transition-delay: 0.4s;
  }
  :nth-child(10n + 6) {
    transition-delay: 0.5s;
  }
  :nth-child(10n + 7) {
    transition-delay: 0.6s;
  }
  :nth-child(10n + 8) {
    transition-delay: 0.7s;
  }
  :nth-child(10n + 9) {
    transition-delay: 0.8s;
  }
  :nth-child(10n + 10) {
    transition-delay: 0.9s;
  }
`;
