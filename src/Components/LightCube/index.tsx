import * as S from "./style";

export function LightCube() {
  const list: Array<number> = [0, 1, 2, 3];
  return (
    <S.bg>
      <S.cube>
        <S.top></S.top>
        <div>
          {list.map((e) => {
            return <S.span num={e}></S.span>;
          })}
        </div>
      </S.cube>
    </S.bg>
  );
}
