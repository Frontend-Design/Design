import * as S from "./style";
import * as SVG from "./SVG";

export default function GlowingAppleAnimation() {
  return (
    <S.bg>
      <S.Box>
        <SVG.Apple />
      </S.Box>
    </S.bg>
  );
}
