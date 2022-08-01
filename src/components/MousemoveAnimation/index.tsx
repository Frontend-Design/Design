import * as S from "./style";

function MakeSpan() {
  let array = [];
  for (let i = 0; i < 1032; i++) {
    array.push(<S.Span></S.Span>);
  }
  return array;
}

export default function MousemoveAnimation() {
  return <S.Continer>{MakeSpan()}</S.Continer>;
}
