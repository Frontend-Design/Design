import { useState } from "react";
import * as S from "./style";

export default function ModernToggleButton() {
  const [active, setActive] = useState(false);
  return (
    <S.bg>
      <S.Toggle onClick={() => setActive(!active)} active={active}>
        <S.Span></S.Span>
        <S.Span></S.Span>
        <S.Span></S.Span>
      </S.Toggle>
    </S.bg>
  );
}
