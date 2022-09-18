import * as S from "./style";
import * as SVG from "./SVG";

export default function SwipeButton() {
  return (
    <S.bg>
      <S.Btn href="#">
        Swipe Next
        <span>
          <SVG.Forw />
        </span>
      </S.Btn>
    </S.bg>
  );
}
