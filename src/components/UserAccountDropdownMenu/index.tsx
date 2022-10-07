import { useState } from "react";
import * as S from "./style";
import * as SVG from "./SVG";

export default function UserAccountDropdownMenu() {
  const [menu, setMenu] = useState(false);
  return (
    <S.bg>
      <S.Action>
        <S.Profile onClick={() => setMenu(!menu)}>
          <S.Img src={`${process.env.REACT_APP_PUBLIC_URL}/img/imgtag.png`} />
        </S.Profile>
        <S.Menu toggle={menu}>
          <h3>
            Someone Famous
            <br />
            <span>Website Designer</span>
          </h3>
          <ul>
            <li>
              <SVG.Profile />
              <a href="">My profile</a>
            </li>
            <li>
              <SVG.Edit />
              <a href="">Edit profile</a>
            </li>
            <li>
              <SVG.Inbox />
              <a href="">Inbox</a>
            </li>
            <li>
              <SVG.Settings />
              <a href="">Settings</a>
            </li>
            <li>
              <SVG.Help />
              <a href="">Help</a>
            </li>
            <li>
              <SVG.Logout />
              <a href="">Logout</a>
            </li>
          </ul>
        </S.Menu>
      </S.Action>
    </S.bg>
  );
}
