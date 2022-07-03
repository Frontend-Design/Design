import * as S from "./style";

export default function LoadingAnimation() {
  return (
    <S.bg>
      <S.Loader>
        <S.Sapn></S.Sapn>
        <S.Sapn></S.Sapn>
        <S.Sapn></S.Sapn>
        <S.title>Loading...</S.title>
      </S.Loader>
    </S.bg>
  );
}
