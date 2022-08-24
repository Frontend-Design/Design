import styled from "@emotion/styled";

type FillRangeValueType = {
  Widht: number;
};

export const bg = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: #151515;
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const RangeValue = styled.h2`
  position: relative;
  display: block;
  font-size: 6em;
  color: rgba(0, 0, 0, 0.8);
  font-weight: 800;
  z-index: 2;
  ::after {
    content: "%";
  }
`;

export const Range = styled.input`
  position: relative;
  widows: 400px;
  height: 15px;
  -webkit-appearance: none;
  background: rgba(0, 0, 0, 0.8);
  outline: none;
  border-radius: 15px;
  box-shadow: 0 0 0 2px #151515, inset 0 0 5px #000;
  z-index: 2;
  overflow: hidden;
  ::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background: #00adff;
    border: 4px solid #222;
    z-index: 2;
    box-shadow: -407px 0 0 400px #00adff;
  }
`;

export const FillRangeValue = styled.div<FillRangeValueType>`
  --i: ${(e) => e.Widht + "%"};
  position: fixed;
  top: 0;
  left: 0;
  width: calc(var(--i));
  height: 100%;
  background: #00adff;
  z-index: 1;
`;
