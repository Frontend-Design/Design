import * as S from "./Styles";

export default function NeumorphismAnimation() {
  const list: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <S.bg>
      <S.loader>
        {list.map((e) => {
          return <S.load num={e}></S.load>;
        })}
      </S.loader>
    </S.bg>
  );
}
