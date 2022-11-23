import { useState } from "react";
import * as S from "./style";

export default function ChangeBackground() {
  const [active, setActive] = useState("#1dd1a1");
  return (
    <S.bg style={{ background: active }}>
      <S.Colors>
        <S.Span
          clr="#1dd1a1"
          active={active == "#1dd1a1"}
          onClick={() => {
            setActive("#1dd1a1");
          }}
        />
        <S.Span
          clr="#ff6b6b"
          active={active == "#ff6b6b"}
          onClick={() => {
            setActive("#ff6b6b");
          }}
        />
        <S.Span
          clr="#2e86de"
          active={active == "#2e86de"}
          onClick={() => {
            setActive("#2e86de");
          }}
        />
        <S.Span
          clr="#f368e0"
          active={active == "#f368e0"}
          onClick={() => {
            setActive("#f368e0");
          }}
        />
        <S.Span
          clr="#ff9f43"
          active={active == "#ff9f43"}
          onClick={() => {
            setActive("#ff9f43");
          }}
        />
      </S.Colors>
    </S.bg>
  );
}
