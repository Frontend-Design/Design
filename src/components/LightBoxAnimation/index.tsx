import * as S from "./style";

export default function LightBoxAnimation() {
  const list: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <S.bg>
      <S.Box>
        <S.Loader>
          {list.map((e, index) => {
            return <S.Span key={index} num={e}></S.Span>;
          })}
        </S.Loader>
        <S.Title>
          CSS is <b>Awesome</b>
        </S.Title>
      </S.Box>
    </S.bg>
  );
}
