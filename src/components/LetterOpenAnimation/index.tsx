import { useState } from "react";
import * as S from "./style";
export default function LetterOpenAnimation() {
  const [active, setActive] = useState(false);
  return (
    <S.EnvelopeWrapper>
      <S.Envelope>
        <S.Flap active={active}></S.Flap>
        <S.Pocket></S.Pocket>
        <S.Letter active={active}>
          <S.Words />
          <S.Words />
          <S.Words />
          <S.Words />
        </S.Letter>
      </S.Envelope>
      <S.Reset>
        <button onClick={() => setActive(true)}>Open</button>
        <button onClick={() => setActive(false)}>Reset</button>
      </S.Reset>
    </S.EnvelopeWrapper>
  );
}
