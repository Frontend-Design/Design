import { useState } from "react";
import * as S from "./style";
import * as SVG from "./SVG";

export default function NavigationMenu() {
    const list: Array<JSX.Element> = [
        <SVG.home key={0} />,
        <SVG.user key={1} />,
        <SVG.sett key={2} />,
        <SVG.mail key={3} />,
        <SVG.key key={4} />,
        <SVG.video key={5} />,
        <SVG.game key={6} />,
        <SVG.camera key={7} />,
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
                        <S.li key={key} num={key}>
                            <a href="#">{e}</a>
                        </S.li>
                    );
                })}
            </S.menu>
        </S.bg>
    );
}