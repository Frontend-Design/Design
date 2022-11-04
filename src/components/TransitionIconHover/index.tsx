import * as S from "./style";
import * as SVG from "./SVG";

export default function TransitionIconHover() {
  return (
    <S.Section>
      <S.Color></S.Color>
      <S.Color></S.Color>
      <S.Color></S.Color>
      <ul>
        <li>
          <S.A href="#">
            <SVG.FaceBook />
          </S.A>
        </li>
        <li>
          <S.A href="#">
            <SVG.Discord />
          </S.A>
        </li>
        <li>
          <S.A href="#">
            <SVG.In />
          </S.A>
        </li>
        <li>
          <S.A href="#">
            <SVG.Instagram />
          </S.A>
        </li>
        <li>
          <S.A href="#">
            <SVG.Whatsapp />
          </S.A>
        </li>
      </ul>
    </S.Section>
  );
}
