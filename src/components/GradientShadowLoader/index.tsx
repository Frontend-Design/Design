import * as S from "./style";

export default function GradientShadowLoader() {
  return (
    <S.bg>
      <S.Loader>
        <S.Span>Loading</S.Span>
      </S.Loader>
    </S.bg>
  );
}
