import styled from "@emotion/styled";

type placedprop = {
  num: number;
};

type buttonProp = {
  muted: boolean;
  rotate: boolean;
}

type cubeProp = {
  rotate: boolean;
  value: number;
}

export const bg = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #050505;
    height: 100vh;

    > video{
      filter: blur(10px);
      width: 100%;
      height: 100%;
      object-fit: cover;
      top: 0;
      left: 0;
    }
`;

export const cube = styled.div<cubeProp>`
    position: absolute;
    width: 300px;
    height: 300px;
    transform: ${props => `rotateX(-30deg) rotateY(${props.value}deg)`};
    transform-style: preserve-3d;
    
    div {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      transform-style: preserve-3d;
    }
  `;

export const span = styled.span<placedprop>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #222;
    transform: rotateY(calc(90deg * var(--i))) translateZ(150px);
    --i: ${(prop) => prop.num};

    video{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }
  `;

export const top = styled.div<buttonProp>`
    position: absolute;
    top: 0;
    left: 0;
    width: 300px;
    height: 300px;
    background-color: #222;
    transform: rotateX(90deg) translateZ(149px);
    display: flex;
    justify-content: center;
    align-items: center;

    Button{
      width: 100px;
      height: 100px;
      border-radius: 50%;
      transform: translateZ(5px);
      transition: .1s;
      margin: 0 10px;

      &:nth-of-type(1){
        box-shadow: ${props => props.muted ? "rgba(0, 0, 0, 0.7) 0px 0px 10px 3px" : "#20b7ff 0px 0px 30px -10px inset"};
        border: ${props => props.muted ? "none" : "2px solid #20b7ff"};
      }
      &:nth-of-type(2){
        box-shadow: ${props => props.rotate ? "#20b7ff 0px 0px 30px -10px inset" : "rgba(0, 0, 0, 0.7) 0px 0px 10px 3px"};
        border: ${props => props.rotate ? "2px solid #20b7ff" : "none"};
      }

      &:active{
        transform: translateZ(0px);
        box-shadow: rgba(50, 50, 93, 0.6) 0px 0px 60px -12px inset;
      }
    }
`;