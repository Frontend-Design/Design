import * as S from "./style";

export default function Animation3D() {
  const List = ["#e2e2e2", "#f0f0f0", "#e2e2e2", "#f0f0f0"];
  return (
    <S.bg>
      <S.Cube>
        <S.Big>
          {List.map((e, index) => {
            return <S.Span key={index} num={index} color={e}></S.Span>;
          })}
          <S.Span className="top" color="#fff"></S.Span>
        </S.Big>
      </S.Cube>
      <S.Cube>
        <S.Big>
          {List.map((e, index) => {
            return <S.Span key={index} num={index} color={e}></S.Span>;
          })}
          <S.Span className="top" color="#fff"></S.Span>
        </S.Big>
      </S.Cube>
    </S.bg>
  );
}
