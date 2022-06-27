import * as S from "./Style";
import rain from "../../public/img/egg.png";
import blog from "../../public/img/pexels-pixabay.jpg";
import background from "../../public/img/background.jpg";
import { StaticImageData } from "next/image";

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

interface settingType {
    dots: boolean,     // 슬라이드 밑에 점 보이게
    infinite: boolean, // 무한으로 반복
    speed: number,     // 넘기는 속도
    autoplay: boolean, // 자동으로 넘김
    autoplaySpeed: number, //자동으로 넘어가는 속도
    slidesToShow: number,    // 스크린에 보여지는 슬라이드 개수
    slidesToScroll: number,  // n장씩 뒤로 넘어가게 함
    centerMode: boolean,   // 중앙정렬
    centerPadding: string, // 0px 하면 슬라이드 끝쪽 이미지가 안잘림
}

export default function HeroImages(props: settingType) {

    const imageArray: Array<StaticImageData> = [rain, blog, background];

    var settings = {
        ...props,
        prevArrow: <PrevArrow />,   // 슬라이드 좌로 넘기기 커스텀 버튼
        nextArrow: <NextArrow />,   // 슬라이드 우로 넘기기 커스텀 버튼
    };

    return (
        <S.HeroImageLayout>
            <S.HeroImageBox {...settings}>
                {
                    imageArray.map((image: StaticImageData, key: number) => {
                        return (
                            <S.HeroImageWrapper key={key}>
                                <img src={image.src} alt={"img"} />
                            </S.HeroImageWrapper>

                        );
                    })
                }
            </S.HeroImageBox>
        </S.HeroImageLayout >
    );
}