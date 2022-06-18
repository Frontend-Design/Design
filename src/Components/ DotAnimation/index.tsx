import * as S from "./Styles";

export default function DotAnimation() {
  return (
    <S.bg>
      <S.loader>
        <S.circle Cl="#04fc43"></S.circle>
        <S.circle2 Cl="#fee800"></S.circle2>
        <S.circle3 Cl="#ff00be"></S.circle3>
      </S.loader>
    </S.bg>
  );
}
