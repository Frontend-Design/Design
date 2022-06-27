import styled from "@emotion/styled";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

type StyledProps = {
    pos: string;
}

export const HeroImageLayout = styled.div`
   
`

export const HeroImageBox = styled(Slider)`
    .slick-list {  //슬라이드 스크린
    margin: 0 auto;
    overflow-x: hidden;
  }
`

export const HeroImageWrapper = styled.div`
    img {
        margin: 0 auto;
        width: 50vw;
    }
    
`

export const Button = styled.div<StyledProps>`
    ${prop => prop.pos}: 10vw;
    z-index: 10;   
`