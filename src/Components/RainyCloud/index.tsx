import * as S from "./style";
import GlobalStyle from "./style";

export default function RainyCloud() {
  const nums: Array<number> = [
    11, 12, 10, 14, 18, 16, 19, 20, 19, 10, 16, 14, 18, 11, 13, 15, 12, 17, 13,
    15,
  ];
  return (
    <>
      <GlobalStyle />
      <S.Container>
        <S.Cloud>
          <S.Rain>
            {nums.map((e) => {
              return <S.Rains num={e}></S.Rains>;
            })}
          </S.Rain>
        </S.Cloud>
      </S.Container>
    </>
  );
}
