import { useState } from "react";
import * as S from "./style";
import * as SVG from "./SVG";

export default function IPhone() {
  const [on, setOn] = useState(false);
  return (
    <S.bg>
      <S.Box>
        <S.Inner onClick={() => setOn(!on)}>
          <S.IsLandPopup turn={on}>
            <S.Content>
              <S.Details className="Detail">
                <S.ImgBox>
                  <S.Img
                    src={`${process.env.REACT_APP_PUBLIC_URL}/img/egg.png`}
                  />
                </S.ImgBox>
                <p>Alex Calling</p>
              </S.Details>
              <S.Action className="Action">
                <SVG.Call />
                <SVG.Call />
              </S.Action>
            </S.Content>
          </S.IsLandPopup>
        </S.Inner>
        <S.Btn className="btn1"></S.Btn>
        <S.Btn className="btn2"></S.Btn>
        <S.Btn className="btn3"></S.Btn>
        <S.RightSideBtn></S.RightSideBtn>
      </S.Box>
    </S.bg>
  );
}
