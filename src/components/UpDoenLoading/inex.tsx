import * as S from "./style";

export default function UpDoenLoading() {
  const List = [0, 1, 2, 3, 4];
  return (
    <S.bg>
      <S.Loader>
        {List.map((e, index) => {
          return <S.Stick key={index} num={e}></S.Stick>;
        })}
      </S.Loader>
    </S.bg>
  );
}
