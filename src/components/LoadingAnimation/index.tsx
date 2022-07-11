import * as S from "./style";

export default function LoadingAnimation() {
  return (
    <S.bg>
      <S.Loader>
        <S.Span></S.Span>
        <S.Span></S.Span>
        <S.Span></S.Span>
        <S.title>Loading...</S.title>
      </S.Loader>
    </S.bg>
  );
}
