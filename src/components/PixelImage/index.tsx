import * as S from "./style";

export default function PixelImage() {
  return (
    <S.bg>
      <S.Box>
        <S.Img
          src={`${process.env.REACT_APP_PUBLIC_URL}/img/monalisa.png`}
        ></S.Img>
      </S.Box>
      <S.Pixel>
        <S.Img
          src={`${process.env.REACT_APP_PUBLIC_URL}/img/monalisa_pixel.png`}
        ></S.Img>
      </S.Pixel>
    </S.bg>
  );
}
