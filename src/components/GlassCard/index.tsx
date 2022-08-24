import * as S from "./style";

export default function GlassCard() {
  const List = [0, 1, 2, 3];
  return (
    <S.bg>
      <S.Card>
        {List.map((i, index) => {
          return <S.Span num={i} key={index}></S.Span>;
        })}
      </S.Card>
      <S.Glass>
        <S.Title>
          Muhammad Irshad
          <br />
          <i>+91 987 654 3210</i>
        </S.Title>
      </S.Glass>
    </S.bg>
  );
}
