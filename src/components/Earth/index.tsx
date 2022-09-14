import * as S from "./style";

export default function Earth() {
  const Text = "Rotating-Text-Around-The-Earth-";
  return (
    <S.bg>
      <S.Section>
        <S.Earth></S.Earth>
        <S.Circle>
          {Text.split("").map((e, index) => {
            return (
              <S.Span num={index + 1} key={index}>
                {e}
              </S.Span>
            );
          })}
        </S.Circle>
      </S.Section>
    </S.bg>
  );
}
