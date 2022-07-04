import * as S from "./style";
import * as SVG from "./SVG";

export default function LogoRadar() {
    return (
        <S.bg>
            <S.loader>
                <SVG.WhiteLogo />
                <span />
            </S.loader>
        </S.bg>
    );
}