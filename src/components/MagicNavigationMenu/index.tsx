import { useState } from "react";
import * as S from "./stlye";
import * as SVG from "./SVG";

export default function MagicNavigationMenu() {
  const List = [
    { SVG: <SVG.Home />, Text: "Home" },
    { SVG: <SVG.User />, Text: "Profile" },
    { SVG: <SVG.Chat />, Text: "Message" },
    { SVG: <SVG.Came />, Text: "Photos" },
    { SVG: <SVG.Sett />, Text: "Setting" },
  ];

  const [focu, setFocu] = useState(0);
  return (
    <S.bg>
      <S.Navigation>
        <S.Ul>
          {List.map(({ SVG, Text }, index) => {
            return (
              <S.List
                key={index}
                onClick={() => setFocu(index)}
                active={index == focu}
              >
                <S.A>
                  <S.Icon className="icon">{SVG}</S.Icon>
                  <S.Text className="text">{Text}</S.Text>
                </S.A>
              </S.List>
            );
          })}
          <S.Indicator point={focu}></S.Indicator>
        </S.Ul>
      </S.Navigation>
    </S.bg>
  );
}
