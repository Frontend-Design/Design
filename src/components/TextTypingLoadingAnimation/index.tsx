import * as S from "./style";

export default function TextTypingLoadingAnimation() {
  return (
    <S.bg>
      <S.Loader>
        <S.Spin></S.Spin>
        <S.Spin></S.Spin>
        <S.Spin></S.Spin>
        <S.Spin></S.Spin>
        <S.Title>Loading...</S.Title>
      </S.Loader>
    </S.bg>
  );
}
