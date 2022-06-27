import { useState } from "react";
import * as S from "./Style";
import bird from "../../../public/img/tlqkfto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

export function Menubar() {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <>
            <S.Navigation toggle={toggle}>
                <S.UserBox toggle={toggle}>
                    <S.ImgBox>
                        <img src={bird.src} />
                    </S.ImgBox>
                    <S.UserName>강경민</S.UserName>
                </S.UserBox>
                <S.MenuToggle onClick={() => setToggle(!toggle)} toggle={toggle}></S.MenuToggle>
                <S.Menu>
                    <li>설정</li>
                    <li>프로필</li>
                    <li><FontAwesomeIcon icon={faUser} /></li>
                    <li>로그아웃</li>
                </S.Menu>
            </S.Navigation>
        </>
    );
}