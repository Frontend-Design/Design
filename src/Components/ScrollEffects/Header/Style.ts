import styled from "styled-components";

export const HeaderLayout = styled.div`
    width: calc(100vw - 30px);
    height: 10vh;
    display: flex;
    align-items: center;
    margin-left: 30px;
    img{
        height: 50%;
        background: #fff;
    }
`

export const Navigation = styled.ul`
    width: 30%;
    display: flex;
    gap: 10px;
    display: flex;
    align-items: center;

    svg {
        height: 1.4em;
    }
`