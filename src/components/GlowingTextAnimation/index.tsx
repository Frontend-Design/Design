import * as S from "./style";

export default function GlowingTextAnimation() {
  const List = ["H", "a", "p", "p", "y", "D", "i", "w", "a", "l", "i"];

  return (
    <S.bg>
      <S.H2>
        {List.map((e, index) => {
          return (
            <S.Span num={index + 1} key={index}>
              {e}
            </S.Span>
          );
        })}
      </S.H2>
    </S.bg>
  );
}
