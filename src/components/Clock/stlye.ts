import styled from "@emotion/styled";

type TimeType = {
  num: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  min-height: 100vh;
  background: #040615;
`;

export const Clock = styled.div`
  width: 350px;
  height: 350px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 8px solid #fff;
  border-radius: 50%;
  ::before {
    content: "";
    position: absolute;
    width: 15px;
    height: 15px;
    background: #2196f3;
    z-index: 10000;
    border-radius: 50%;
  }
  div {
    position: absolute;
    div {
      display: flex;
      justify-content: center;
      position: absolute;
    }
  }
`;

export const Hour = styled.div<TimeType>`
  width: 200px;
  height: 200px;
  div {
    width: 200px;
    height: 200px;
    ${(e) => `transform: rotateZ(${e.num + "deg"});`};
    ::before {
      content: "";
      position: absolute;
      width: 8px;
      height: 100px;
      background: #fff;
    }
  }
`;

export const Min = styled.div<TimeType>`
  width: 230px;
  height: 230px;
  div {
    width: 230px;
    height: 230px;
    ${(e) => `transform: rotateZ(${e.num + "deg"});`};
    ::before {
      content: "";
      position: absolute;
      width: 4px;
      height: 110px;
      background: #fff;
    }
  }
`;

export const Sec = styled.div<TimeType>`
  width: 250px;
  height: 250px;
  div {
    width: 250px;
    height: 250px;
    ${(e) => `transform: rotateZ(${e.num + "deg"});`};
    ::before {
      content: "";
      position: absolute;
      width: 2px;
      height: 120px;
      background: #2196f3;
    }
  }
`;

export const DigitalClock = styled.div`
  display: flex;
  color: #fff;
  font-size: 4em;
  margin-top: 20px;
`;
