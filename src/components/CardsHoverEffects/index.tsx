import * as S from "./style";

export default function CardsHoverEffects() {
  const List = [1, 2, 3];
  return (
    <S.bg>
      <S.Container>
        {List.map((e, index) => {
          return (
            <S.Card num={e} key={index} className="Card">
              <S.Content num={e} className="Content">
                <h2>Card 0{e}</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Accusantium ut sunt natus in quisquam nihil amet, atque magnam
                  dolorem. Sequi vel corporis sapiente ut fugiat?
                </p>
              </S.Content>
            </S.Card>
          );
        })}
      </S.Container>
    </S.bg>
  );
}
