import * as S from "./style";

export default function Radar({ color }: { color: string }) {
    return (
        <S.bg>
            <S.loader color={color}>
                <span />
            </S.loader>
            <S.loader color={color}>
                <span />
            </S.loader>
        </S.bg>
    );
}