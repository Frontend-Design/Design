import { Link } from "react-router-dom";
import styled from "styled-components";

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
`

export const BtnLink = styled(Link)<StyledProps>`
    position: relative;
    display: inline-block;
    padding: 15px 30px;
    color: ${(props) => (props.BtnColor)};
    text-transform: uppercase;
    letter-spacing: 4px;
    text-decoration: none;
    font-size: 24px;
    overFlow: hidden;
    transition: 0.2s;

    &:hover{
        color: black;
        background: ${(props) => (props.BtnColor)};
        box-shadow: 0 0 10px ${(props) => (props.BtnColor)}, 0 0 40px ${(props) => (props.BtnColor)}, 0 0 80px ${(props) => (props.BtnColor)};
        transition-delay: 1.1s;
    }

    &:hover span:nth-child(1){
        left: 100%;
        transition: 1s;
    }
    &:hover span:nth-child(2){
        top: 100%;
        transition: 0.8s;
        transition-delay: 0.25s;
    }
    &:hover span:nth-child(3){
        right: 100%;
        transition: 1s;
        transition-delay: 0.5s;
    }
    &:hover span:nth-child(4){
        bottom: 100%;
        transition: 0.8s;
        transition-delay: 0.8s;
    }

`

export const ActiveBorder = styled.span<StyledProps>`
    position: absolute;
    display: black;

    &:nth-child(1){
        top: 0;
        left: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(90deg, transparent, ${(props) => (props.BtnColor)});
    }
    &:nth-child(2){
        top: -100%;
        right: 0%;
        width: 2px;
        height: 100%;
        background: linear-gradient(180deg, transparent, ${(props) => (props.BtnColor)});
    }
    &:nth-child(3){
        bottom: 0;
        right: -100%;
        width: 100%;
        height: 2px;
        background: linear-gradient(270deg, transparent, ${(props) => (props.BtnColor)});
    }   
    &:nth-child(4){
        bottom: -100%;
        left: 0;
        width: 2px;
        height: 100%;
        background: linear-gradient(0deg, transparent, ${(props) => (props.BtnColor)});
    }
`