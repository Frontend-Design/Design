import styled from "@emotion/styled";

type StyledProps = {
    top: string;
    width: string;
}

export const MenuIndicatorLayout = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #333;
`

export const MenuContainer = styled.ul`
    position: relative;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

export const MenuWrapper = styled.li`
    list-style: none;
    a{
        position: relative;
        font-size: 2em;
        color: #fff;
        text-decoration: none;
        margin: 10px 0;
        display: inline-block;
    }
`

export const Marker = styled.div<StyledProps>`
    position: absolute;
    top: ${props => props.top};
    width: ${props => props.width};
    height: 50px;
    transition: .4s;
    display: flex;
    align-items: center;
    justify-content: space-between;
    --border: 4px solid ${props => props.color};

    &:before {
        content: '';
        width: 15px;
        height: 15px;
        border-top: var(--border);
        border-right: var(--border);
        transform: rotate(45deg) translate(-22px,22px);
    }
    &:after {
        content: '';
        width: 15px;
        height: 15px;
        border-top: var(--border);
        border-left: var(--border);
        transform: rotate(-45deg) translate(22px,22px);
    }
`