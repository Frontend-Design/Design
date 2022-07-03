import { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import * as S from "./Style";

export default function MenuIndicator() {

    const [markerTop, setMarkerTop] = useState<number>(10);
    const [markerWidth, setMarkerWidth] = useState<number>();
    const firstList: any = useRef();

    const indicator = (e: any) => {
        setMarkerTop(e.target.offsetTop);
        var width = e.target.offsetWidth;
        setMarkerWidth(width < 38 ? 38 : width);
    }

    useEffect(() => {
        // firstList.current.focus();
        setMarkerTop(firstList.current.offsetTop);
        var width = firstList.current.offsetWidth;
        setMarkerWidth(width < 38 ? 38 : width);
    }, [])



    return (
        <S.MenuIndicatorLayout>
            <S.MenuContainer>
                <S.Marker top={markerTop + "px"} width={markerWidth + "px"} />
                <S.MenuWrapper><Link to="#" onMouseOver={indicator} onFocus={indicator} ref={firstList}>홈</Link></S.MenuWrapper>
                <S.MenuWrapper><Link to="#" onMouseOver={indicator}>정보</Link></S.MenuWrapper>
                <S.MenuWrapper><Link to="#" onMouseOver={indicator}>프로필</Link></S.MenuWrapper>
                <S.MenuWrapper><Link to="#" onMouseOver={indicator}>설정</Link></S.MenuWrapper>
            </S.MenuContainer>
        </S.MenuIndicatorLayout>
    );
}