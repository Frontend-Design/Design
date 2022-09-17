import * as S from "./stlye";

export default function NewsTicker() {
  const Num = [1, 2, 3, 4, 5];
  return (
    <S.bg>
      <S.Section>
        {Num.map((_, index) => {
          return (
            <S.Scroll key={index}>
              <S.Line>
                Online
                <S.Text>Tutorials - </S.Text>
                Online
                <S.Text>Tutorials - </S.Text>
                Online
                <S.Text>Tutorials - </S.Text>
                Online
                <S.Text>Tutorials - </S.Text>
              </S.Line>
              <S.Line>
                Online
                <S.Text>Tutorials - </S.Text>
                Online
                <S.Text>Tutorials - </S.Text>
                Online
                <S.Text>Tutorials - </S.Text>
                Online
                <S.Text>Tutorials - </S.Text>
              </S.Line>
            </S.Scroll>
          );
        })}
      </S.Section>
    </S.bg>
  );
}
