import * as S from "./style";

export default function ImageHoverOverlay() {
  return (
    <S.bg>
      <S.Container>
        <S.Card>
          <S.ImgBox>
            <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
          </S.ImgBox>
          <S.ContentBx className="ContentBx">
            <S.Content>
              <S.H3>Post One</S.H3>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunu ut labore et dolore magna aliqua.
              </S.P>
            </S.Content>
          </S.ContentBx>
        </S.Card>
        <S.Card>
          <S.ImgBox>
            <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
          </S.ImgBox>
          <S.ContentBx>
            <S.Content>
              <S.H3>Post Two</S.H3>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunu ut labore et dolore magna aliqua.
              </S.P>
            </S.Content>
          </S.ContentBx>
        </S.Card>
        <S.Card>
          <S.ImgBox>
            <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
          </S.ImgBox>
          <S.ContentBx>
            <S.Content>
              <S.H3>Post Three</S.H3>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunu ut labore et dolore magna aliqua.
              </S.P>
            </S.Content>
          </S.ContentBx>
        </S.Card>
        <S.Card>
          <S.ImgBox>
            <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
          </S.ImgBox>
          <S.ContentBx>
            <S.Content>
              <S.H3>Post Four</S.H3>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunu ut labore et dolore magna aliqua.
              </S.P>
            </S.Content>
          </S.ContentBx>
        </S.Card>
        <S.Card>
          <S.ImgBox>
            <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
          </S.ImgBox>
          <S.ContentBx>
            <S.Content>
              <S.H3>Post Five</S.H3>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunu ut labore et dolore magna aliqua.
              </S.P>
            </S.Content>
          </S.ContentBx>
        </S.Card>
        <S.Card>
          <S.ImgBox>
            <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
          </S.ImgBox>
          <S.ContentBx>
            <S.Content>
              <S.H3>Post Sixs</S.H3>
              <S.P>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunu ut labore et dolore magna aliqua.
              </S.P>
            </S.Content>
          </S.ContentBx>
        </S.Card>
      </S.Container>
    </S.bg>
  );
}
