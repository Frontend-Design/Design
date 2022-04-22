import ColorfulRain from "../ColorfulRain/ColorfulRain";
import * as S from "./Style";
import rain from "../../Assets/rain.jpg";
import blog from "../../Assets/pexels-pixabay.jpg";
import background from "../../Assets/background.jpg";
import { useState } from "react";

function NextArrow(props: any) {
    const { className, onClick } = props;
    return (
        <S.Button
            className={className}
            onClick={onClick}
            pos="right"
        />
    );
}

function PrevArrow(props: any) {
    const { className, onClick } = props;
    return (
        <S.Button
            className={className}
            onClick={onClick}
            pos="left"
        />
    );
}

export default function HeroImages() {

    const [imageArray, setImageArray] = useState<Array<string>>([
        rain, blog, background
    ]);

    var settings = {
        dots: true,     // 슬라이드 밑에 점 보이게
        infinite: true, // 무한으로 반복
        speed: 700,     // 넘기는 속도
        autoplay: true, // 자동으로 넘김
        autoplaySpeed: 3000, //자동으로 넘어가는 속도
        slidesToShow: 1,    // 스크린에 보여지는 슬라이드 개수
        slidesToScroll: 1,  // n장씩 뒤로 넘어가게 함
        centerMode: true,   // 중앙정렬
        centerPadding: "0px", // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
        prevArrow: <PrevArrow />,   // 슬라이드 좌우 넘기기 커스텀 버튼
        nextArrow: <NextArrow />,  //슬라이드 좌우 넘기기 커스텀 버튼
    };

    return (
        <S.HeroImageLayout>
            <S.HeroImageBox {...settings}>
                {
                    imageArray.map((image: string) => {
                        return (
                            <S.HeroImageWrapper>
                                <img src={image} alt={"img"} />
                            </S.HeroImageWrapper>

                        );
                    })
                }
            </S.HeroImageBox>
        </S.HeroImageLayout>
    );
}