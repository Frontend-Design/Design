import { useState } from "react";
import * as S from "./style";

export default function MenuToggleIcon() {
  const [toggle, setToggle] = useState(true);
  return (
    <S.bg>
      <S.Toggle
        turn={toggle}
        onClick={() => setToggle((prev) => !prev)}
      ></S.Toggle>
    </S.bg>
  );
}
