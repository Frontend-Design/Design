import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #f9f9f9;
`;

export const Music = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 2em;
  color: #38a7ff;
  display: inline-flex;
  text-align: center;
  margin-bottom: 20px;
`;

export const Player = styled.div`
  position: relative;
  width: 500px;
  min-height: 100px;
  background: #fbfbfb;
  border-radius: 80px;
  padding: 20px 30px;
  box-shadow: -10px -10px 15px #fff, 10px 10px 15px rgba(0, 0, 0, 0.1),
    inset -5px -5px 15px #fff, 5px 5px 15px rgba(0, 0, 0, 0.1);
`;

export const Audio = styled.audio``;

export const Btns = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  span {
    position: relative;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #777;
    cursor: pointer;
    box-shadow: inset 0 -5px 5px rgba(0, 0, 0, 0.1),
      0 5px 10px rgba(0, 0, 0, 0.1), 0 10px 15px rgba(0, 0, 0, 0.1);
    :active {
      color: #ff669a;
      box-shadow: inset 0 -7px 5px rgba(0, 0, 0, 0.25),
        inset 0 5px 10px rgba(0, 0, 0, 0.15);
    }
    i {
      font-size: 2em;
    }
  }
`;

export const Prev = styled.span``;

export const PlayPause = styled.span`
  width: 100px;
  height: 100px;
  i {
    font-size: 3em;
  }
`;

export const Next = styled.span``;
