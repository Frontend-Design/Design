import * as S from "./style";
import * as SVG from "./SVG";

export default function GlassMorphismUserCard() {
  const List = [1, 2, 3];
  return (
    <S.bg>
      <S.Section>
        <S.Container>
          {List.map((_, index) => {
            return (
              <S.Card key={index}>
                <S.ImgBx>
                  <S.Img
                    src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`}
                  />
                </S.ImgBx>
                <S.Content>
                  <S.ContentBx>
                    <h3>
                      Someone Famous
                      <br />
                      <span>Creative Designer</span>
                    </h3>
                  </S.ContentBx>
                  <S.Sci>
                    <S.Li i={1}>
                      <a href="#">
                        <SVG.FaceBook />
                      </a>
                    </S.Li>
                    <S.Li i={2}>
                      <a href="#">
                        <SVG.Twitter />
                      </a>
                    </S.Li>
                    <S.Li i={3}>
                      <a href="#">
                        <SVG.Instagram />
                      </a>
                    </S.Li>
                  </S.Sci>
                </S.Content>
              </S.Card>
            );
          })}
        </S.Container>
      </S.Section>
    </S.bg>
  );
}
