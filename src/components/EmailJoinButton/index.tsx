import { useState } from "react";
import * as SVG from "./svg";
import * as S from "./style";

export default function EmailJoinButton() {
  const [CheckEmail, setCheckEmail] = useState(false);
  const [Loading, setLoading] = useState(false);
  return (
    <S.bg onClick={() => setLoading(!Loading)}>
      <S.Wrapper active={CheckEmail} onClick={() => setCheckEmail(!CheckEmail)}>
        <SVG.Letter></SVG.Letter>
        <S.Title active={CheckEmail}>이메일 인증</S.Title>
        <S.Loading active={CheckEmail} check={Loading}>
          <span></span>
          <span></span>
          <span></span>
        </S.Loading>
      </S.Wrapper>
    </S.bg>
  );
}
