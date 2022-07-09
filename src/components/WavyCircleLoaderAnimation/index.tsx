import * as S from "./style";

export default function WavyCircleLoaderAnimation() {
  const List = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <S.bg>
      <S.Loader>
        {List.map((e) => {
          return <S.Ling num={e} key={e} />;
        })}
      </S.Loader>
    </S.bg>
  );
}
