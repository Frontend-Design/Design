import * as S from "./style";
import * as SVG from "./SVG";

export default function ListDesign() {
  return (
    <S.bg>
      <S.Container>
        <S.Box color="#fc5f9b">
          <S.Content>
            <S.Icon>
              <SVG.Color />
            </S.Icon>
            <S.Text>
              <h3>Website Designing</h3>
              <p>5 Projects</p>
            </S.Text>
          </S.Content>
        </S.Box>
        <S.Box color="#a362ea">
          <S.Content>
            <S.Icon>
              <SVG.Code />
            </S.Icon>
            <S.Text>
              <h3>Website Development</h3>
              <p>3 Projects</p>
            </S.Text>
          </S.Content>
        </S.Box>
        <S.Box color="#0ed095">
          <S.Content>
            <S.Icon>
              <SVG.Earth />
            </S.Icon>
            <S.Text>
              <h3>SEO</h3>
              <p>12 Projects</p>
            </S.Text>
          </S.Content>
        </S.Box>
      </S.Container>
    </S.bg>
  );
}
