import * as S from "./style";

export default function CustomCheckbox() {
  return (
    <S.bg>
      <S.Label>
        <S.Input type="checkbox" />
        <S.Span>
          <S.I></S.I>
        </S.Span>
      </S.Label>
    </S.bg>
  );
}
