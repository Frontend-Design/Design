import * as S from "./Style";

export default function Menubar() {
    return (
        <>
            <S.Navigation>
                {/* <svg width="45" height="80" ><g fill="none"><path stroke="black" stroke-width="2" d="M5 20 l30 0 M5 30 l30 0 M5 40 l30 0" /></g> </svg> */}
                <S.UserBox>
                    <S.ImgBox></S.ImgBox>
                </S.UserBox>
                <S.MenuToggle></S.MenuToggle>
            </S.Navigation>
        </>
    );
}