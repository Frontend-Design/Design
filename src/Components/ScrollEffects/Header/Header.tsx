import * as S from "./Style";
import logo from "../../../Assets/youtubelogo.png"
import Menubar from "../Menubar/Menubar";

export default function Header() {
    return (
        <S.HeaderLayout>
            <img src={logo} />
            
            <Menubar/>
        </S.HeaderLayout>
    );
}