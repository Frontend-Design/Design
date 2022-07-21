import * as S from "./style";

export default function LoadingAnimationTwo() {
  const List = [0, 1, 2];
  return (
    <S.bg>
      <S.Loader>
        {List.map((e, index) => {
          return <S.Span num={e} key={index} />;
        })}
      </S.Loader>
    </S.bg>
  );
}
