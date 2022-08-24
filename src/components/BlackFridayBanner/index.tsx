import { useState } from "react";
import * as S from "./style";

export default function BlackFridayBanner() {
  const [point, setPoint] = useState(100);

  return (
    <S.Section
      onMouseMove={(e: any) => {
        setPoint(e.clientX);
      }}
    >
      <S.MainTitle>
        Black
        <br />
        <S.Subtitle>Friday</S.Subtitle>
      </S.MainTitle>
      <S.Black move={point}></S.Black>
    </S.Section>
  );
}
