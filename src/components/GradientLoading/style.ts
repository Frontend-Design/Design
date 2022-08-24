import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100ch;
  background: #000;
`;

export const Loader = styled.div`
  position: relative;
  width: 600px;
  height: 30px;
  background: #fff;
  -webkit-box-reflect: below 1px linear-gradient(transparent, #0005);
  ::before {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #fb0094
    );
    animation: animate 20s linear infinite;
    background-size: 500%;
  }
  ::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      90deg,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #fb0094,
      #0000ff,
      #00ff00,
      #ffff00,
      #fb0094
    );
    animation: animate 20s linear infinite;
    background-size: 500%;
    filter: blur(20px);
  }
  @keyframes animate {
    0% {
      background-position: 0 0;
    }
    0% {
      background-position: 500% 0;
    }
  }
`;
