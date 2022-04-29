import styled from "styled-components";

export const HeaderLayout = styled.div`
    width: 100vw;
    height: 10vh;
    display: flexbox;
    align-items: center;
    justify-content: space-around;

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
        height: 50px;
    }
`