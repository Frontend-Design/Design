import * as S from "./style";

export default function LoadingSpin() {
  const width = "                                            ";
  const width1 =
    "                                                                      ";
  return (
    <S.bg>
      <S.Section>
        <S.Box num={width.length} x={4} spin={false}>
          {width.split("").map((_, index) => {
            return (
              <S.Span num={index} length={width.length} key={index}>
                <a></a>
              </S.Span>
            );
          })}
        </S.Box>
        <S.Box num={width.length} x={5} spin={true}>
          {width.split("").map((_, index) => {
            return (
              <S.Span num={index} length={width.length} key={index}>
                <a></a>
              </S.Span>
            );
          })}
        </S.Box>
        <S.Box num={width1.length} x={8} spin={false}>
          {width1.split("").map((_, index) => {
            return (
              <S.Span num={index} length={width1.length} key={index}>
                <a></a>
              </S.Span>
            );
          })}
        </S.Box>
        <S.Box num={width1.length} x={10} spin={true}>
          {width1.split("").map((_, index) => {
            return (
              <S.Span num={index} length={width1.length} key={index}>
                <a></a>
              </S.Span>
            );
          })}
        </S.Box>
      </S.Section>
    </S.bg>
  );
}
