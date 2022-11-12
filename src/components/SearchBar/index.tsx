import { useState } from "react";
import * as S from "./style";

export default function SearchBar() {
  const [input, setInput] = useState("");
  const [active, setActive] = useState(false);
  return (
    <S.bg>
      <S.Search active={active}>
        <S.Icon onClick={() => setActive((prev) => !prev)}></S.Icon>
        <S.Input>
          <input
            type="text"
            placeholder="Search"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
        </S.Input>
        <S.Clear onClick={() => setInput("")} />
      </S.Search>
    </S.bg>
  );
}
