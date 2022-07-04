import styled from "@emotion/styled";

type StyledProps = {
    delay: string;
    length: number;
}

export const BackgroundLayer = styled.section`
    position: relative;
    width: 100%;
    height: 100vh;
    background-color: #333;
`;

export const Banner = styled.div`
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    display: flex;
    flex-wrap: wrap;
`

export const Block = styled.div<StyledProps>`
    position: relative;
    display: block;
    width: ${props => { return 100 / props.length + "vw" }};
    height: ${props => { return 100 / props.length + "vh" }};
    background: #fff;
    animation: animate .5s ease-in-out forwards;
    animation-delay: ${props => props.delay};
    opacity: 0;
    
    &:nth-child(even) { // (2,4,6,8,10...2n)번째의 자식요소
        animation: animate .8s ease-in-out forwards;
        animation-delay: ${props => props.delay};
    }
    &:nth-child(7n+1) { // (1,8,15,22,30...7n+1)번째의 자식요소
        animation: animate 2s ease-in-out forwards;
        animation-delay: ${props => props.delay};
    }
    &:nth-child(7n) { // (7,14,21,28,35...7n)번째의 자식요소
        animation: animate 1.2s ease-in-out forwards;
        animation-delay: ${props => props.delay};
    }
    
    @keyframes animate {
        0%{
            transform: scale(0) translateY(1000px);
        }
        100%{
            opacity: 1;
            transform: scale(1) translateY(0px);
        }
    }


`
