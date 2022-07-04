import * as S from "./style";

interface propsType {
    c1: string;
    c2: string;
    c3: string;
}

export default function DotAnimation(props: propsType) {
    return (
        <S.bg>
            <S.loader>
                <S.circle Cl={props.c1}></S.circle>
                <S.circle2 Cl={props.c2}></S.circle2>
                <S.circle3 Cl={props.c3}></S.circle3>
            </S.loader>
        </S.bg>
    );
}