import { useRef, useState } from "react";
import * as S from "./Style";
import * as SVG from "./SVG";

export default function NavigationMenu() {
  const list: Array<any> = [
    <SVG.home />,
    <SVG.user />,
    <SVG.sett />,
    <SVG.mail />,
    <SVG.key />,
    <SVG.video />,
    <SVG.game />,
    <SVG.camera />,
  ];
  const [menu, setMenu] = useState(false);
  console.log(menu);
  return (
    <S.bg>
      <S.menu active={menu}>
        <S.toggle className="toggle" onClick={() => setMenu(!menu)}>
          <SVG.add />
        </S.toggle>
        {list.map((e, key) => {
          return (
            <S.li key={key} num={key}>
              <a href="#">{e}</a>
            </S.li>
          );
        })}
      </S.menu>
    </S.bg>
  );
}
