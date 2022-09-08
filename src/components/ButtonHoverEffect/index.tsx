import * as S from "./style";

export default function ButtonHoverEffect() {
  return (
    <S.bg>
      <S.Container>
        <S.A href="#">
          <S.Button>Button</S.Button>
        </S.A>
        <S.A href="#">
          <S.Button>Button</S.Button>
        </S.A>
      </S.Container>
    </S.bg>
  );
}
