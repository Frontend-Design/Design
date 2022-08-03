import { useState } from "react";
import * as S from "./style";

export default function PopupBox() {
  const [active, setActive] = useState(false);
  return (
    <S.bg>
      <S.container active={active}>
        <S.content active={active}>
          <h2>Heading...</h2>
          <p>
            Lorem ipsum dikir sitm amet consectetur adipisicing elit. Cum
            necessitatibys av fyga at officiis inventire milestiaas quod odio
            eius animi? Ipsa sit atque obcaecati quae consequuntur, qui fugit
            itaque earum!
          </p>
        </S.content>
        <S.toggleBtn
          active={active}
          onClick={() => setActive(!active)}
        ></S.toggleBtn>
      </S.container>
    </S.bg>
  );
}
