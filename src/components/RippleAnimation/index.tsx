import * as S from "./style";

export default function RippleAnimation() {
  const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  return (
    <S.bg>
      <S.Continer>
        <S.Box>
          {List.map((e, index) => {
            return <S.Span num={e} key={index}></S.Span>;
          })}
        </S.Box>
        <S.Box>
          {List.map((e, index) => {
            return <S.Span num={e} key={index}></S.Span>;
          })}
        </S.Box>
      </S.Continer>
    </S.bg>
  );
}
