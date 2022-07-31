import * as S from "./style";

export default function HotCup() {
  const List = [
    1, 3, 16, 5, 13, 20, 6, 7, 10, 8, 17, 11, 12, 14, 2, 9, 15, 4, 19,
  ];
  return (
    <S.bg>
      <S.Container>
        <S.Plate></S.Plate>
        <S.Cup>
          <S.Top>
            <S.Vapour>
              {List.map((e, index) => {
                return <S.Span key={index} num={e}></S.Span>;
              })}
            </S.Vapour>
            <S.Circle>
              <S.Tea></S.Tea>
            </S.Circle>
          </S.Top>
          <S.Handle></S.Handle>
        </S.Cup>
      </S.Container>
    </S.bg>
  );
}
