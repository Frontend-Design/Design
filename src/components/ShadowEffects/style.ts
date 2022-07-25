import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #011000;
`;

export const Circle = styled.div`
  position: relative;
  width: 400px;
  height: 400px;
  background: transparent;
  border-radius: 50%;
  box-shadow: 0 0 0 40px rgba(37, 255, 11, 0.2),
    0 0 0 80px rgba(37, 255, 11, 0.2), 0 0 0 120px rgba(37, 255, 11, 0.2),
    0 0 0 160px rgba(37, 255, 11, 0.2), 0 0 0 200px rgba(37, 255, 11, 0.2),
    0 0 0 240px rgba(37, 255, 11, 0.1);
`;
