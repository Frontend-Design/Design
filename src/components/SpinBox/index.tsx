import * as S from "./style";

export default function SpinBox() {
  const List = [0, 1, 2, 3];
  return (
    <S.bg>
      <S.Section>
        <S.Box>
          <S.Cube>
            <div className="top"></div>
            <div>
              {List.map((e, index) => {
                return <S.Span num={e} key={index}></S.Span>;
              })}
            </div>
          </S.Cube>
        </S.Box>
      </S.Section>
    </S.bg>
  );
}
