import * as S from "./style";

export default function CubesHoverEffects() {
  const List = [1, 2, 3];
  const List2 = [
    { x: -1, y: 0 },
    { x: 0, y: 0 },
    { x: 1, y: 0 },
  ];
  const List3 = [3, 2, 1];
  return (
    <S.bg>
      <S.Container>
        {List.map((_, index) => {
          return (
            <S.Cube key={index}>
              {List2.map((e2, index2) => {
                return (
                  <S.Div x={e2.x} y={e2.y} key={index2}>
                    {List3.map((e3, index3) => {
                      return <S.Span num={e3} key={index3}></S.Span>;
                    })}
                  </S.Div>
                );
              })}
            </S.Cube>
          );
        })}
      </S.Container>
    </S.bg>
  );
}
