import * as S from "./style";

export default function NeonLightBtn({ color, HoverColor }: { color: string, HoverColor: string }) {
    return (
        <S.Background>
            <S.Button BtnColor={color} HoverColor={HoverColor}>
                <S.ActiveBorder BtnColor={color} />
                <S.ActiveBorder BtnColor={color} />
                <S.ActiveBorder BtnColor={color} />
                <S.ActiveBorder BtnColor={color} />
                Neon Button
            </S.Button >
        </S.Background>
    );
}