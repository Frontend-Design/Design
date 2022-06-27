import Link from 'next/link';
import styled from "@emotion/styled";

type StyledProps = {
    BtnColor: string;
}

export const Background = styled.div`
    margin: 0;
    padding: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #031321;
    font-family: consolas;
    gap: 10%;
`

export const ActiveBorder = styled.span<StyledProps>`
    position: absolute;
    display: black;

    &:nth-child(1){ // 버튼의 위쪽 border
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${(props) => (props.BtnColor)});
    }
    &:nth-child(2){ // 버튼의 오른쪽 border
        right: 0%;
        top: -100%;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, ${(props) => (props.BtnColor)});
    }
    &:nth-child(3){ // 버튼의 아래쪽 border
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, ${(props) => (props.BtnColor)});
    }   
    &:nth-child(4){ // 버튼의 왼쪽 border
        left: 0;
        bottom: -100%;
        width: 2px;
        height: 100%;
        background: linear-gradient(0deg, transparent, ${(props) => (props.BtnColor)});
    }
`

export const Button = styled.a <StyledProps>`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    color: ${(props) => (props.BtnColor)};
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 24px;
    overFlow: hidden;
    border: none;
    background: none;
    transition: 0.25s; // CSS 속성을 변경할 때 에니매이션 속도 조절

    &:hover{
        color: black;
        background: ${(props) => (props.BtnColor)};
        box-shadow: 0 0 10px ${(props) => (props.BtnColor)}, 
                    0 0 40px ${(props) => (props.BtnColor)}, 
                    0 0 80px ${(props) => (props.BtnColor)};
        transition-delay: .55s;
    }

    &:hover ${ActiveBorder}:nth-child(1){ // 버튼의 위쪽 border;
        left: 100%;
        transition: 0.5s;
    }
    &:hover ${ActiveBorder}:nth-child(2){ // 버튼의 오른쪽 border
        top: 100%;
        transition: 0.4s;
        transition-delay: 0.125s;
    }
    &:hover ${ActiveBorder}:nth-child(3){ // 버튼의 아래쪽 border
        right: 100%;
        transition: 0.5s;
        transition-delay: 0.25s;
    }
    &:hover ${ActiveBorder}:nth-child(4){ // 버튼의 왼쪽 border
        bottom: 100%;
        transition: 0.4s;
        transition-delay: 0.4s;
    }

`

//-----------------------------------------------------------------------------------

export const ActiveBorder2 = styled.span<StyledProps>`
    position: absolute;
    display: black;

    &:nth-child(1){ // 버튼의 위쪽 border
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${(props) => (props.BtnColor)});
        animation: topmove 1s infinite;
    }
    @keyframes topmove {
        0%{left: -100%}
        100%{left: 100%}
    }
    &:nth-child(2){ // 버튼의 오른쪽 border
        right: 0%;
        top: -100%;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, ${(props) => (props.BtnColor)});
        animation: rightmove 1s 0.25s infinite;
        /* animation-delay: 0.25s; */
    }
    @keyframes rightmove {
        0%{top: -100%}
        100%{top: 100%}
    }
    &:nth-child(3){ // 버튼의 아래쪽 border
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, ${(props) => (props.BtnColor)});
        animation: bottommove 1s 0.5s infinite;

    }   
    @keyframes bottommove {
        0%{right: -100%}
        100%{right: 100%}
    }
    &:nth-child(4){ // 버튼의 왼쪽 border
        left: 0;
        bottom: -100%;
        width: 2px;
        height: 100%;
        background: linear-gradient(0deg, transparent, ${(props) => (props.BtnColor)});
        animation: leftpmove 1s 0.75s infinite;

    }
    @keyframes leftpmove {
        0%{bottom: -100%}
        100%{bottom: 100%}
    }
`

export const Button2 = styled(Link) <StyledProps>`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    color: ${(props) => (props.BtnColor)};
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 24px;
    overFlow: hidden;
    transition: 0.2s; // CSS 속성을 변경할 때 에니매이션 속도 조절

    &:hover{
        color: black;
        background: ${(props) => (props.BtnColor)};
        box-shadow: 0 0 10px ${(props) => (props.BtnColor)}, 
                    0 0 40px ${(props) => (props.BtnColor)}, 
                    0 0 80px ${(props) => (props.BtnColor)};
    }

    /* &:hover ${ActiveBorder2}:nth-child(1){ // 버튼의 위쪽 border: ;
        left: 100%;
        transition: 1s;
    }
    &:hover ${ActiveBorder2}:nth-child(2){ // 버튼의 오른쪽 border
        top: 100%;
        transition: 0.8s;
        transition-delay: 0.25s;
    }
    &:hover ${ActiveBorder2}:nth-child(3){ // 버튼의 아래쪽 border
        right: 100%;
        transition: 1s;
        transition-delay: 0.5s;
    }
    &:hover ${ActiveBorder2}:nth-child(4){ // 버튼의 왼쪽 border
        bottom: 100%;
        transition: 0.8s;
        transition-delay: 0.8s;
    } */

`