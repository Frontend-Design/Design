import { useState } from "react";
import * as S from "./style";

export default function NumberInput() {
  const [index, setIndex] = useState(0);
  return (
    <S.bg>
      <S.Container>
        <S.Next onClick={() => setIndex((index + 1) % 100)}></S.Next>
        <S.Prev onClick={() => setIndex((index - 1 + 100) % 100)}></S.Prev>
        <S.Box>
          <S.Span>{index}</S.Span>
        </S.Box>
      </S.Container>
    </S.bg>
  );
}
