import * as S from "./style";

export default function RotationAnimationEffects() {
  const List = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <S.bg>
      <S.Box>
        <S.Div>
          {List.map((e, index) => {
            return <S.Span num={e - 1} key={index}></S.Span>;
          })}
        </S.Div>
      </S.Box>
    </S.bg>
  );
}
