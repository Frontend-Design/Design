import { useState } from "react";
import * as S from "./style";
import * as SVG from "./SVG";

export default function SidebarMenu() {
  const [toggle, setToggle] = useState(false);
  const List = [
    { color: "#f44336", svg: <SVG.Home />, name: "Home" },
    { color: "#ffa117", svg: <SVG.About />, name: "About" },
    { color: "#0fc70f", svg: <SVG.Messages />, name: "Messages" },
    { color: "#2196f3", svg: <SVG.Photos />, name: "Photos" },
    { color: "#b145e9", svg: <SVG.Settings />, name: "Settings" },
  ];
  const [select, setSelect] = useState("");
  return (
    <S.bg>
      <S.Navigation toggle={toggle}>
        <S.MenuToggle
          toggle={toggle}
          onClick={() => setToggle(!toggle)}
        ></S.MenuToggle>
        <ul>
          {List.map((e, index) => {
            return (
              <S.List
                key={index}
                onClick={() => setSelect(e.name)}
                select={e.name == select}
                toggle={toggle}
              >
                <a>
                  <S.Icon color={e.name == select ? e.color : ""}>
                    {e.svg}
                  </S.Icon>
                  <S.Text
                    color={e.name == select ? e.color : "#333"}
                    toggle={toggle}
                  >
                    {e.name}
                  </S.Text>
                </a>
              </S.List>
            );
          })}
        </ul>
      </S.Navigation>
    </S.bg>
  );
}
