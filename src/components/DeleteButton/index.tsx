import { useState } from "react";
import * as S from "./style";

export default function DeleteButton() {
  const [active, setActive] = useState(false);
  return (
    <S.bg>
      <S.Btn href="#" onClick={() => setActive(!active)} active={active}>
        <S.Span active={active}></S.Span>
        <S.Text>Delete</S.Text>
      </S.Btn>
    </S.bg>
  );
}
