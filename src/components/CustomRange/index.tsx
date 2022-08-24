import { useState } from "react";
import * as S from "./style";

export default function CustomRange() {
  const [value, setValue] = useState(0);

  return (
    <S.bg>
      <S.Box>
        <S.Range
          type="range"
          name=""
          value={value}
          min="0"
          max="100"
          onMouseMove={(e: any) => setValue(e.target.value)}
          onChange={(e: any) => setValue(e.target.value)}
        />
        <S.RangeValue>{value}</S.RangeValue>
      </S.Box>
    </S.bg>
  );
}
