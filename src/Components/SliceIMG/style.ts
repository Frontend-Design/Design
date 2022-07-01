import styled from "styled-components";

const publicUrl = process.env.PUBLIC_URL;

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #111;
`;

export const Container = styled.div`
  position: relative;
  width: 800px;
  height: 500px;
  background: #222;
  :hover {
    > div {
      clip-path: polygon(100% 0, 100% 0, 100% 100%, 100% 100%);
    }
  }
`;

export const clip = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  transition: 0.5s;
  :hover {
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%) !important;
    div {
      bottom: 0;
      opacity: 1;
    }
  }
`;

export const clipOne = styled(clip)`
  background: url(${publicUrl}/IMG/sliceImg1.jpg);
  background-size: cover;
  clip-path: polygon(0 0, 55% 0, 20% 100%, 0% 100%);
`;
export const clipTwo = styled(clip)`
  background: url(${publicUrl}/IMG/sliceImg2.jpg);
  background-size: cover;
  clip-path: polygon(55% 0, 100% 0, 45% 100%, 20% 100%);
`;
export const clipThr = styled(clip)`
  background: url(${publicUrl}/IMG/sliceImg3.jpg);
  background-size: cover;
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 45% 100%);
`;

export const content = styled.div`
  position: absolute;
  bottom: -100%;
  left: 0;
  width: 70%;
  padding: 20px;
  opacity: 0;
  background: #fff;
  transition: 0.5s;
`;
