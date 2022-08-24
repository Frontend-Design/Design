import * as S from "./style";

function MakeSpan() {
  let array = [];
  for (let i = 1; i <= 28; i++) {
    array.push(<S.Span num={i}></S.Span>);
  }
  return array;
}

export default function TextRotation() {
  return (
    <S.bg>
      <S.Box>
        <S.Div>{MakeSpan()}</S.Div>
      </S.Box>
    </S.bg>
  );
}
