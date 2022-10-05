import * as S from "./style";

export default function LightBulbAnimation() {
  const List = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <S.bg>
      <S.Box>
        {List.map((_, index) => {
          return <S.Span num={index} key={index}></S.Span>;
        })}
      </S.Box>
    </S.bg>
  );
}
