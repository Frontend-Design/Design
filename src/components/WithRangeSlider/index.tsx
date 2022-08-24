import { useState } from "react";
import * as S from "./style";

export default function WithRangeSlider() {
  const [value, setValue] = useState(0);
  return (
    <S.bg>
      <S.Wrapper>
        <S.RangeValue>{value}</S.RangeValue>
        <S.FillRangeValue Widht={value}></S.FillRangeValue>
        <S.Range
          type="range"
          name=""
          value={value}
          min="0"
          max="100"
          onMouseMove={(e: any) => setValue(e.target.value)}
          onChange={(e: any) => setValue(e.target.value)}
        />
      </S.Wrapper>
    </S.bg>
  );
}
