import * as S from "./style";
import * as SVG from "./SVG";

export default function SearchBox() {
  return (
    <S.bg>
      <S.SearchBox>
        <S.Shadow></S.Shadow>
        <input type="text" placeholder="Search Anything You Want..." />
        <SVG.Search />
      </S.SearchBox>
    </S.bg>
  );
}
