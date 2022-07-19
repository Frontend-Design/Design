import * as S from "./style";

export function TwoDToThirdD() {
  const nums: Array<number> = [2, 1, 0, -1, -2];
  return (
    <S.bg>
      <S.ImgBox>
        {nums.map((e, index) => {
          return (
            <S.Img
              num={e}
              nam={index}
              key={index}
              src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`}
            />
          );
        })}
      </S.ImgBox>
    </S.bg>
  );
}
