import * as S from "./style";

function MakeLine() {
  let array = [];
  for (let i = 0; i <= 36; i++) {
    array.push(<S.line num={i}></S.line>);
  }
  return array;
}
export default function SafariLogo() {
  return (
    <S.bg>
      <S.Safari>
        <S.CircleLines>{MakeLine()}</S.CircleLines>
        <S.Niddle className="niddle"></S.Niddle>
      </S.Safari>
    </S.bg>
  );
}
