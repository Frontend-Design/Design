import { useEffect, useState, useRef } from "react";
import Link from 'next/link';
import * as S from "./style";

export default function MenuIndicator({ color }: { color: string }) {

    const [markerTop, setMarkerTop] = useState<number>(10);
    const [markerWidth, setMarkerWidth] = useState<number>(38);
    const firstList: any = useRef();

    const indicator = (e: any) => {
        console.log(e);
        setMarkerTop(e.target.offsetTop);
        var width = e.target.offsetWidth;
        setMarkerWidth(width < 38 ? 38 : width);
    }

    useEffect(() => {
        setMarkerTop(firstList.current.offsetTop);
        var width = firstList.current.offsetWidth;
        setMarkerWidth(width < 38 ? 38 : width);
    }, [])



    return (
        <S.MenuIndicatorLayout>
            <S.MenuContainer>
                <S.Marker top={markerTop + "px"} width={markerWidth + "px"} color={color} />
                <S.MenuWrapper><a href="#" onMouseOver={indicator} onFocus={indicator} ref={firstList}>홈</a></S.MenuWrapper>
                <S.MenuWrapper><a href="#" onMouseOver={indicator}>정보</a></S.MenuWrapper>
                <S.MenuWrapper><a href="#" onMouseOver={indicator}>프로필</a></S.MenuWrapper>
                <S.MenuWrapper><a href="#" onMouseOver={indicator}>설정</a></S.MenuWrapper>
            </S.MenuContainer>
        </S.MenuIndicatorLayout>
    );
}