import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
`;

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  width: 600px;
  gap: 10px;
`;

export const Card = styled.div`
  position: relative;
  width: 300px;
  height: 300px;
  overflow: hidden;
  margin: 0 -75px;
  display: flex;
  justify-content: center;
  align-items: center;
  clip-path: polygon(50% 100%, 0 0, 100% 0);
  :nth-child(2) {
    clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
  }
`;

export const Img = styled.img`
  transition: 0.5s;
  margin: auto;
  display: block;
  object-fit: cover;
  :hover {
    transform: scale(1.5);
  }
`;
