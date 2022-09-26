import { useState } from "react";
import * as S from "./stlye";
import * as SVG from "./SVG";

export default function MagicNavigationMenuThr() {
  const List = [
    { SVG: <SVG.Home />, color: "#f44336 " },
    { SVG: <SVG.User />, color: "#ffa117" },
    { SVG: <SVG.Chat />, color: "#0fc70f" },
    { SVG: <SVG.Came />, color: "#2196f3" },
    { SVG: <SVG.Sett />, color: "#b145e9" },
  ];

  const [focu, setFocu] = useState(0);
  return (
    <S.bg>
      <S.Navigation>
        <S.Ul>
          {List.map(({ SVG, color }, index) => {
            return (
              <S.List
                key={index}
                onClick={() => setFocu(index)}
                active={index == focu}
                bgColor={color}
              >
                <S.A>
                  <S.Icon className="icon">{SVG}</S.Icon>
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
