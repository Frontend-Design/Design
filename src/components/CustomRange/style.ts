import styled from "@emotion/styled";

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #edf1f4;
`;

export const Box = styled.div`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background: linear-gradient(to bottom, rgba(0, 0, 0, 0.05), #edf1f4);
  border-radius: 40px;
  box-shadow: 15px 15px 20px rgba(0, 0, 0, 0.1), -15px -15px 20px #fff;
`;

export const Range = styled.input`
  width: 400px;
  height: 15px;
  appearance: none;
  outline: none;
  border-radius: 15px;
  box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.1), -5px -5px 10px #fff,
    inset 5px 5px 5px rgba(0, 0, 0, 0.1);
  overflow: hidden;
  ::-webkit-slider-thumb {
    appearance: none;
    width: 15px;
    height: 15px;
    background: #fff;
    border-radius: 50%;
    border: 2px solid #0074cf;
    box-shadow: -407px 0 0 400px #27a0ff;
    cursor: pointer;
  }
`;

export const RangeValue = styled.span`
  position: relative;
  text-align: center;
  width: 60px;
  font-size: 1.25em;
  color: #fff;
  background: #27a0ff;
  margin-left: 15px;
  border-radius: 25px;
  font-weight: 500;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.1), -5px -5px 10px #fff,
    inset 5px 5px 10px rgba(0, 0, 0, 0.1),
    inset -5px -5px 5px rgba(255, 255, 255, 0.25);
`;
