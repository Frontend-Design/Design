import * as S from "./Style";
import logo from "../../../Assets/youtubelogo.png"

export default function Header() {
    return (
        <S.HeaderLayout>
            <img src={logo} />
            <S.Navigation>
                <li>소개</li>
                <li>프로필</li>
                <li>프로필</li>
            </S.Navigation>
        </S.HeaderLayout>
    );
}