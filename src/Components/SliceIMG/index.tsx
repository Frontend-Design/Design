import * as S from "./style";

export default function SliceIMG() {
  return (
    <S.bg>
      <S.Container>
        <S.clipOne>
          <S.content>
            <h1>Post Title One</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </S.content>
        </S.clipOne>
        <S.clipTwo>
          <S.content>
            <h1>Post Title Two</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </S.content>
        </S.clipTwo>
        <S.clipThr>
          <S.content>
            <h1>Post Title Three</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
          </S.content>
        </S.clipThr>
      </S.Container>
    </S.bg>
  );
}
