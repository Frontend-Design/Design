import * as S from "./style";

export default function ImgHover3D() {
  const List = [0, 1, 2, 3];
  return (
    <S.bg>
      <S.Box>
        {List.map((e, index) => {
          return <S.Span key={index} num={e}></S.Span>;
        })}
      </S.Box>
    </S.bg>
  );
}
