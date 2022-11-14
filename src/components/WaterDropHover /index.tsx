import * as S from "./style";

export default function WaterDropHover() {
  return (
    <S.bg>
      <S.Container>
        <S.Drop clr="#ff0f5b">
          <S.Content className="content">
            <h1>01</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              magni placeat temporibus suscipit! Ipsa, sit?
            </p>
            <a href="#">Read More</a>
          </S.Content>
        </S.Drop>
        <S.Drop clr="#be01fe">
          <S.Content className="content">
            <h1>02</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              magni placeat temporibus suscipit! Ipsa, sit?
            </p>
            <a href="#">Read More</a>
          </S.Content>
        </S.Drop>
        <S.Drop clr="#01b4ff">
          <S.Content className="content">
            <h1>03</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              magni placeat temporibus suscipit! Ipsa, sit?
            </p>
            <a href="#">Read More</a>
          </S.Content>
        </S.Drop>
      </S.Container>
    </S.bg>
  );
}
