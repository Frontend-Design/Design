import { useState } from "react";
import * as S from "./Style";
import bird from "../../../Assets/tlqkfto.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

export default function Menubar() {

    const [toggle, setToggle] = useState<boolean>(false);

    return (
        <>
            <S.Navigation toggle={toggle}>
                <S.UserBox toggle={toggle}>
                    <S.ImgBox>
                        <img src={bird} />
                    </S.ImgBox>
                    <S.UserName>강경민</S.UserName>
                </S.UserBox>
                <S.MenuToggle onClick={() => setToggle(!toggle)} toggle={toggle}></S.MenuToggle>
                <S.Menu>
                    <ul>
                        <li>설정</li>
                        <li>프로필</li>
                        <li><FontAwesomeIcon icon={faUser} /></li>
                    </ul>
                </S.Menu>
            </S.Navigation>
        </>
    );
}