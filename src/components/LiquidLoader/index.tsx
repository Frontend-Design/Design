import * as S from "./style";

export default function LiquidLoader() {
  const List = [1, 2, 3, 4, 5, 6, 7, 8];
  const RotateList = [0, 1, 2, 3, 4];
  return (
    <S.Section>
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
      <S.Loader>
        {List.map((i, index) => {
          return <S.Span num={i + 1} key={index}></S.Span>;
        })}
        {RotateList.map((e, index) => {
          return <S.Rotate num={e} key={index}></S.Rotate>;
        })}
      </S.Loader>
    </S.Section>
  );
}
