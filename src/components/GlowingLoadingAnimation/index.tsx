import * as S from "./style";

export default function GlowingLoadingAnimation() {
  const List = ["L", "o", "a", "d", "i", "n", "g", "."];

  return (
    <S.bg>
      <S.Loader>
        {List.map((e, index) => {
          return (
            <S.Span num={index + 1} key={index}>
              <S.I>{e}</S.I>
            </S.Span>
          );
        })}
      </S.Loader>
    </S.bg>
  );
}
