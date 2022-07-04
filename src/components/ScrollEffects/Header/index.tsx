import * as S from "./style";
import logo from "../../../../public/img/youtubelogo.png"
import { Menubar } from "../index";

export function Header() {
    return (
        <S.HeaderLayout>
            <img src={logo.src} />

            <Menubar />
        </S.HeaderLayout>
    );
}