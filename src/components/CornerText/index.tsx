import { useState } from "react";
import * as S from "./style";

export default function CornerText() {
  const [move, setMove] = useState(0);
  return (
    <S.Section
      onMouseMove={(e) => {
        setMove((window.innerWidth - e.pageX * 2) / 2);
      }}
    >
      <S.Skew1>
        <S.H2 move={move}>Corner Text</S.H2>
      </S.Skew1>
      <S.TextBox>
        <S.Skew2>
          <S.H2 move={move}>Corner Text</S.H2>
        </S.Skew2>
      </S.TextBox>
    </S.Section>
  );
}
