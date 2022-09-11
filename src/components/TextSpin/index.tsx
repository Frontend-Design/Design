import * as S from "./style";

export default function TextSpin() {
  const width = "dfaddfsfsdffdsfssfdsfsf afsdfdsfdsf dsfsfsds";
  const width1 = "dsafnsd fsdf dsf ds  fsdsdfdsfs fdsfdsf";
  return (
    <S.bg>
      <S.Section>
        <S.Box num={width.length} x={10} spin={false}>
          {width.split("").map((e, index) => {
            return (
              <S.Span num={index} length={width.length} key={index}>
                <a>{e}</a>
              </S.Span>
            );
          })}
        </S.Box>
        <S.Box num={width1.length} x={10} spin={true}>
          {width1.split("").map((e, index) => {
            return (
              <S.Span num={index} length={width1.length} key={index}>
                <a>{e}</a>
              </S.Span>
            );
          })}
        </S.Box>
      </S.Section>
    </S.bg>
  );
}
