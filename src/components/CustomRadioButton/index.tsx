import * as S from "./style";

export default function CustomRadioButton() {
  return (
    <S.bg>
      <S.Label>
        <S.Input type="radio" name="btn" checked />
        <span></span>
      </S.Label>
      <S.Label>
        <S.Input type="radio" name="btn" />
        <span></span>
      </S.Label>
    </S.bg>
  );
}
