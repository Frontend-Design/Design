import { useState } from "react";
import * as S from "./stlye";
import * as SVG from "./SVG";

export default function RadialMenu() {
  const list: Array<any> = [
    { e: <SVG.home key={0} />, color: "#ff2972" },
    { e: <SVG.user key={1} />, color: "#fee800" },
    { e: <SVG.sett key={2} />, color: "#04fc43" },
    { e: <SVG.mail key={3} />, color: "#fe00f1" },
    { e: <SVG.key key={4} />, color: "#00b0fe" },
    { e: <SVG.video key={5} />, color: "#fea600" },
    { e: <SVG.game key={6} />, color: "#a529ff" },
    { e: <SVG.camera key={7} />, color: "#01bdab" },
  ];
  const [menu, setMenu] = useState(false);
  return (
    <S.bg>
      <S.menu active={menu}>
        <S.toggle className="toggle" onClick={() => setMenu(!menu)}>
          <SVG.add />
        </S.toggle>
        {list.map((e, key) => {
          return (
            <S.li key={key} num={key} clr={e.color}>
              <a href="#">{e.e}</a>
            </S.li>
          );
        })}
      </S.menu>
    </S.bg>
  );
}
