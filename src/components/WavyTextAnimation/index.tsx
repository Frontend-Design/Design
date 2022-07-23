import * as S from "./style";

export default function WavyTextAnimation() {
  const List = ["L", "o", "a", "d", "i", "n", "g", "."];
  return (
    <S.bg>
      <S.Wavy>
        {List.map((e, index) => {
          return (
            <S.Span num={index + 1} key={index}>
              {e}
            </S.Span>
          );
        })}
      </S.Wavy>
    </S.bg>
  );
}
