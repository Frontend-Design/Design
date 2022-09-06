import { useState } from "react";
import * as S from "./style";

export default function SmokeText() {
  const text =
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit,Ullam totam labore ipsa perferendis! lpas lavore doloremeque laboriosam debitis sunt distinctio necessitatibus fugit ex aspernatur!";
  const [list, setList] = useState([-1]);
  return (
    <S.bg>
      <S.P>
        {text.split("").map((e, index) => {
          return (
            <S.Span
              key={index}
              onMouseMove={() => {
                setList([...list, index]);
              }}
              active={list.includes(index)}
            >
              {e}
            </S.Span>
          );
        })}
      </S.P>
    </S.bg>
  );
}
