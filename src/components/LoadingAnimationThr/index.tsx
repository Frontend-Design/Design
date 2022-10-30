import * as S from "./style";

export default function LoadingAnimationThr() {
  const List = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <S.bg>
      <S.Box>
        {List.map((e, index) => {
          return (
            <S.Span key={index} num={e}>
              <i></i>
            </S.Span>
          );
        })}
      </S.Box>
    </S.bg>
  );
}
