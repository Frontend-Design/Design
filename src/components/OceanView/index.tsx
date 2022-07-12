import Link from "next/link";
import { useState } from "react";
import * as S from "./style";
import * as SVG from "./SVG";

export default function OceanView() {
    const publicUrl = process.env.REACT_APP_PUBLIC_URL;
    const [darkMode, setDarkMode] = useState(true);
    const [MenuToggle, SetMenuToggle] = useState(true);
    const [Navigation, SetNavigation] = useState(true);
    return (
        <S.bg Color={darkMode}>
            <S.Warraper>
                <Link href="#">Logo</Link>
                <S.RightSide>
                    <S.DayNight onClick={() => setDarkMode(!darkMode)}>
                        {darkMode ? <SVG.Moon /> : <SVG.Sun />}
                    </S.DayNight>
                    <S.Menutoggle
                        onClick={() => {
                            SetMenuToggle(!MenuToggle);
                            SetNavigation(!Navigation);
                        }}
                    >
                        {MenuToggle ? <SVG.Menu /> : <SVG.Close />}
                    </S.Menutoggle>
                </S.RightSide>
            </S.Warraper>
            <S.Main>
                <video autoPlay={true} loop={true} muted={true}>
                    <source
                        src={`${publicUrl}/video/video.mp4`} // 영상 출처: https://www.pexels.com/video/drawing-a-large-heart-figure-on-the-sand-of-a-seashore-3094026/
                        type="video/mp4"
                    ></source>
                </video>
                <S.Mask src={`${publicUrl}/IMG/mask.png`} Color={darkMode} />
                <S.Title>Ocean</S.Title>
                <S.CopyRightText>© online tutorials - 2022</S.CopyRightText>
                <S.Sci>
                    <S.SciList>
                        <Link href="#">
                            <SVG.FacebookLogo Color={darkMode} />
                        </Link>
                    </S.SciList>
                    <S.SciList>
                        <Link href="#">
                            <SVG.TwiiterLogo Color={darkMode} />
                        </Link>
                    </S.SciList>
                    <S.SciList>
                        <Link href="#">
                            <SVG.InstagramLogo Color={darkMode} />
                        </Link>
                    </S.SciList>
                </S.Sci>
            </S.Main>
            <S.Navigation Show={Navigation}>
                <S.NaviBtn>
                    <Link href="#">Home</Link>
                </S.NaviBtn>
                <S.NaviBtn>
                    <Link href="#">About</Link>
                </S.NaviBtn>
                <S.NaviBtn>
                    <Link href="#">Package</Link>
                </S.NaviBtn>
                <S.NaviBtn>
                    <Link href="#">Contact</Link>
                </S.NaviBtn>
            </S.Navigation>
        </S.bg>
    );
}