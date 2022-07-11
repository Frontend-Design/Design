import * as S from "./styls";

export default function BoxShadowLoading() {
  const list = [1, 2, 3, 4, 5, 6, 7];
  return (
    <S.bg>
      <S.Loader>
        {list.map((e) => {
          return <S.Box num={e} key={e} />;
        })}
      </S.Loader>
    </S.bg>
  );
}
