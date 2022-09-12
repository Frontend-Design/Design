import * as S from "./style";

export default function NeumorphismGradientLoading() {
  const width = "Neumorphism Gradient Loading Animation Effects -";

  return (
    <S.bg>
      <S.Loader>
        <S.Text>
          {width.split("").map((e, index) => {
            return (
              <S.TSpan num={index} key={index}>
                {e}
              </S.TSpan>
            );
          })}
        </S.Text>
        <S.Span>
          <S.I></S.I>
        </S.Span>
      </S.Loader>
    </S.bg>
  );
}
