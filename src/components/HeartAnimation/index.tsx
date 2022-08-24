import * as S from "./style";

export default function HeartAnimation() {
  const List = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
  ];
  return (
    <S.Section>
      <S.Loader>
        {List.map((e, index) => {
          return <S.Span key={index} num={e}></S.Span>;
        })}
      </S.Loader>
    </S.Section>
  );
}
