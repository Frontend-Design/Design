import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./style";
import * as SVG from "./SVG";

export default function OceanView() {
  const publicUrl = process.env.PUBLIC_URL;
  const [darkMode, setDarkMode] = useState(true);
  const [MenuToggle, SetMenuToggle] = useState(true);
  const [Navigation, SetNavigation] = useState(true);
  return (
    <S.bg Color={darkMode}>
      <S.Warraper>
        <Link to="#">Logo</Link>
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
            src={`${publicUrl}/VIDEO/video.mp4`}
            type="video/mp4"
          ></source>
        </video>
        <S.Mask src={`${publicUrl}/IMG/mask.png`} Color={darkMode} />
        <S.Title>Ocean</S.Title>
        <S.CopyRightText>© online tutorials - 2022</S.CopyRightText>
        <S.Sci>
          <S.SciList>
            <Link to="#">
              <SVG.FacebookLogo Color={darkMode} />
            </Link>
          </S.SciList>
          <S.SciList>
            <Link to="#">
              <SVG.TwiiterLogo Color={darkMode} />
            </Link>
          </S.SciList>
          <S.SciList>
            <Link to="#">
              <SVG.InstagramLogo Color={darkMode} />
            </Link>
          </S.SciList>
        </S.Sci>
      </S.Main>
      <S.Navigation Show={Navigation}>
        <S.NaviBtn>
          <Link to="#">Home</Link>
        </S.NaviBtn>
        <S.NaviBtn>
          <Link to="#">About</Link>
        </S.NaviBtn>
        <S.NaviBtn>
          <Link to="#">Package</Link>
        </S.NaviBtn>
        <S.NaviBtn>
          <Link to="#">Contact</Link>
        </S.NaviBtn>
      </S.Navigation>
    </S.bg>
  );
}
