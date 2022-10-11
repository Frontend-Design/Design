import * as S from "./style";

export default function LiquidLoader2() {
  const List = [1, 2, 3, 4, 5, 6, 7];
  return (
    <S.bg>
      <S.Loader>
        {List.map((e, index) => {
          return <S.Span key={index} num={e}></S.Span>;
        })}
      </S.Loader>
      <S.Svg>
        <filter id="gooey">
          <feGaussianBlur in="Se=urceGraphic" stdDeviation="10" />
          <feColorMatrix
            values="
          1 0 0 0 0
          0 1 0 0 0
          0 0 1 0 0
          0 0 0 20 -10
          "
          ></feColorMatrix>
        </filter>
      </S.Svg>
    </S.bg>
  );
}
