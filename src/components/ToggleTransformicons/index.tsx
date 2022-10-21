import * as S from "./style";

export default function ToggleTransformicons() {
  return (
    <S.bg>
      <S.Container>
        <p>Are you Like This ?</p>
        <S.Label>
          <S.Input type="radio" name="yseNo" />
          <S.Check className="check"></S.Check>
          yes
        </S.Label>
        <S.Label>
          <S.Input type="radio" name="yseNo" />
          <S.Check className="cross"></S.Check>
          no
        </S.Label>
      </S.Container>
    </S.bg>
  );
}
