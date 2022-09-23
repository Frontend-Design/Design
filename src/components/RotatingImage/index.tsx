import * as S from "./style";

export default function RotatingImage() {
  const List = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <S.bg>
      <S.Box>
        {List.map((i, index) => {
          return (
            <S.Span key={index} num={i}>
              <S.Img
                src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`}
              />
            </S.Span>
          );
        })}
      </S.Box>
    </S.bg>
  );
}
