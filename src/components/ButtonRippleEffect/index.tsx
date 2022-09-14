import { useEffect, useState } from "react";
import * as S from "./style";

export default function ButtonRippleEffect() {
  type PoinType = {
    x: number;
    y: number;
  };
  const [point, setPoint] = useState<PoinType>({ x: 0, y: 0 });
  const [chekBtn, setCheckBtn] = useState(0);

  useEffect(() => {
    setTimeout(() => {
      setCheckBtn(0);
    }, 1000);
  }, [point, chekBtn]);

  return (
    <S.bg>
      <S.Button
        href="#"
        onClick={(e: any) => {
          setPoint({
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
          });
          setCheckBtn(1);
        }}
      >
        Button
        {chekBtn == 1 && <S.Span x={point.x} y={point.y} />}
      </S.Button>
      <S.Button
        href="#"
        onClick={(e: any) => {
          setPoint({
            x: e.clientX - e.target.offsetLeft,
            y: e.clientY - e.target.offsetTop,
          });
          setCheckBtn(2);
        }}
      >
        Button
        {chekBtn == 2 && <S.Span x={point.x} y={point.y} />}
      </S.Button>
    </S.bg>
  );
}
