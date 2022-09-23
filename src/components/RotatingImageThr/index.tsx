import { useState } from "react";
import * as S from "./style";

export default function RotatingImageThr() {
  const List = [1, 2, 3, 4, 5, 6, 7, 8];
  const [x, setX] = useState(0);

  return (
    <S.bg onMouseMove={(e) => setX(e.clientX)}>
      <S.Box x={x}>
        {List.map((i, index) => {
          return (
            <S.Span key={index} num={i}>
              <S.Img
                src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`}
              />
            </S.Span>
          );
        })}
      </S.Box>
    </S.bg>
  );
}
