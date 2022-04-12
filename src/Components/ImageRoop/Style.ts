import styled from "styled-components";

export const ImageRoopLayer = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  background: #333;
`;

export const Banner = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  overflow: hidden;
`;

export const Blocks = styled.div`
  position: relative;
  display: block;
  width: 4vw;
  height: 4vw;
  background: #fff;
  animation: animate 0.75s ease-in-out forwards;

  @keyframes animate {
      0%{
          opacity: 0;
          transform: scale(0) translateY(1000px);
      }
      50%{
          opacity: 1;
      }
      100%{
          opacity: 1;
          transform: scale(1) translateY(0);
      }
  }
`;