import * as S from "./style";

export default function SpinFontAnimation() {
  const Title = "Just4Fun";
  const List = [0, 1, 2, 3, 4];
  return (
    <S.bg>
      <S.Circle>
        {List.map((e, index) => {
          return <S.Span data-text={Title} key={index} num={e}></S.Span>;
        })}
      </S.Circle>
    </S.bg>
  );
}
