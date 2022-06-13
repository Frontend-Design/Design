import * as S from "./style";

export default function MilkEffect() {
  const nums: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      <S.bg>
        <S.container>
          <h2>Milk</h2>
          <S.loader>
            {nums.map((e) => {
              return <S.span num={e}></S.span>;
            })}
          </S.loader>
        </S.container>

        <svg>
          <filter id="Gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="10" />
            <feColorMatrix
              values="
            1 0 0 0 0
            0 1 0 0 0
            0 0 1 0 0
            0 0 0 20 -10"
            />
          </filter>
        </svg>
      </S.bg>
      <S.WaterWave
        fill="#fff"
        options={{ height: 200, amplitude: 600, points: 4 }}
      />
    </>
  );
}
