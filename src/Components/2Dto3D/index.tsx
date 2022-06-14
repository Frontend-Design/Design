import * as S from "./Styles";

export function TwoDToTHRD() {
  const publicUrl = process.env.PUBLIC_URL;
  const nums: Array<number> = [2, 1, 0, -1, -2];
  return (
    <S.bg>
      <S.ImgBox>
        {nums.map((e, index) => {
          console.log(index);
          return (
            <S.Img num={e} nam={index} src={`${publicUrl}/IMG/imgtag.png`} />
          );
        })}
      </S.ImgBox>
    </S.bg>
  );
}
