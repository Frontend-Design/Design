import * as S from "./style";

export default function TriangleIMG() {
  return (
    <S.bg>
      <S.Container>
        <S.Card>
          <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
        </S.Card>
        <S.Card>
          <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
        </S.Card>
        <S.Card>
          <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
        </S.Card>
        <S.Card>
          <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
        </S.Card>
      </S.Container>
    </S.bg>
  );
}
