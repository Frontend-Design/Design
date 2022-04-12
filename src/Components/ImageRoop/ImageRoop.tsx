import * as S from "./Style";

export default function ImageRoop() {
  let arr: Array<number> = [];

  for (let i = 0, amount = 324; i < amount; i++) {
    arr.push(i);
  }

  return (
    <S.ImageRoopLayer>
      <S.Banner>
        <S.Blocks />
        {arr.map((index) => {
          return <S.Blocks />;
        })}
      </S.Banner>
    </S.ImageRoopLayer>
  );
}
