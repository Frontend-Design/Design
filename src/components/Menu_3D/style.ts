import styled from "@emotion/styled";

type StyledProps = {
    num: number;
}

export const MenuLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #434750;
`
export const MenuContainer = styled.ul`
    position: relative;
    transform: skewY(-15deg);
    `
export const MenuWrapper = styled.li<StyledProps>`
    position: relative;
    list-style: none;
    width: 200px;
    background: #3e3f46;
    padding: 15px;
    transition: 0.5s;
    z-index: ${props => { return props.num * -1 }};

    a{
        text-decoration: none;
        color: #999;
        display: block;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        transition: .5s;
        font-weight: 900;
    }
    
    &:before{
        content: '';
        position: absolute;
        top: 0;
        left: -40px;
        width: 40px;
        height: 100%;
        background: #2e3133;
        transform-origin: right;
        transform: skewY(45deg);
    }

    &:after{
        content: '';
        position: absolute;
        top: -40px;
        left: 0;
        width: 100%;
        height: 40px;
        background: #35383e;
        transform-origin: bottom;
        transform: skewX(45deg);
    }

    &:hover{
        transform: translateX(-50px);
        background: #33a3ee;
        a{
            color: #666;
        }
        &:before{
            background: #1f5378;
        }
        &:after{
            background: #2982b9;
        }
    }

    &:last-child:after{
        box-shadow: -120px 120px 20px rgba(0,0,0,0.25);
    }
`