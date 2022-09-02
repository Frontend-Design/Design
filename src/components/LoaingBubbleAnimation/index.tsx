import * as S from "./style";

export default function LoaingBubbleAnimation() {
  return (
    <S.bg>
      <S.Container>
        <S.Box>
          <S.Circle></S.Circle>
          <S.Circle></S.Circle>
        </S.Box>
        <S.Title>Loading...</S.Title>
      </S.Container>
    </S.bg>
  );
}
