import * as S from "./style";

export default function WavyLoader() {
  const List = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <S.bg>
      <S.Loader>
        {List.map((e, index) => {
          return <S.Span num={e} key={index}></S.Span>;
        })}
      </S.Loader>
    </S.bg>
  );
}
