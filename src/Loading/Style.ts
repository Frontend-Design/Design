import styled from "styled-components";

type StyledProps = {
    num: number;
}

export const LoadingLayout = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #042104;
    animation: changeColor 10s linear infinite;

    @keyframes changeColor {
        0%
        {
            filter: hue-rotate(0deg);
        }

        100%
        {
            filter: hue-rotate(360deg);
        }
    }
`

export const LoaderBox = styled.div`
    position: relative;
    width: 120px;
    height: 120px;
`

export const Point = styled.span<StyledProps>`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    --i: ${props => props.num};
    transform: rotate(calc(18deg * var(--i)));

    &::before{
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 15px;
        height: 15px;
        border-radius: 50%;
        background-color: #00ff0a;
        box-shadow: 0 0 20px #00ff0a, 0 0 40px #00ff0a, 0 0 60px #00ff0a, 0 0 80px #00ff0a, 0 0 100px #00ff0a;
        animation: animate 2s linear infinite;
        animation-delay: calc(0.1s * var(--i));
    }

    @keyframes animate {
        0%{
            transform: scale(1);
        }
        80%, 100%{
            transform: scale(0);
        }
    }
`