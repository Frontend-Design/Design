import styled from "@emotion/styled";

type placedprop = {
    num: number;
}

type colorprop = {
    color: number;
}

export const LoadingLayout = styled.section<colorprop>`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #042104;
    animation: changeColor 10s linear infinite;
    --startcolor: ${prop => prop.color + "deg"};
    --endcolor: ${prop => prop.color + 720 + "deg"};

    @keyframes changeColor {
        // filter : 흐림 효과나 색상 변형 등 그래픽 효과를 요소에 적용
        // hue-rotate( 각도 ) : 색조, 색상을 변경. 각도(deg)를 지정하여 변화를 줌
        0% {
            filter: hue-rotate(var(--startcolor)); 
        }

        100% {
            filter: hue-rotate(var(--encdcolor));
        }
    }
`

export const LoaderBox = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
`

export const Point = styled.span<placedprop>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    --i: ${props => props.num}; // 앞에 붙임표(-) 두 개를 붙여 사용자 지정 속성(css 변수) 를 선언. 사용자 지정 속성을 쓸 때는 var() 함수 안에 쓰기
    transform: rotate(calc(18deg * var(--i))); // 점들의 위치 부여

    &::before{
        content: ''; // 공백으로 요소 지정
        transform: scale(0);
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #00ff0a;
        box-shadow: 0 0 20px #00ff0a, 0 0 40px #00ff0a, 0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
        animation: animate 2s linear infinite;
        animation-delay: calc(0.1s * var(--i)); // 회전하는 것처럼 보이기 위해 각 점들의 애니메이션에 딜레이를 줌
    }

    @keyframes animate {
        // transform : 요소에 회전, 크기 조절, 기울이기, 이동 효과를 부여
        // scale() : 요소를 확대 또는 축소. 1보다 크면 확대, 1보다 작으면 축소

        0%{
            transform: scale(1);
        }
        100%{
            transform: scale(0);
        }
    }
`