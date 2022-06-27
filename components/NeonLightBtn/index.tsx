import * as S from "./Style";

export default function NeonLightBtn() {
    return (
        <S.Background>
            {Btn("#2196f3")}
            {Btn("#0ec445")}
        </S.Background>
    );
}

function Btn(color: string) {
    return (
        <S.Button BtnColor={color}>
            <S.ActiveBorder BtnColor={color} />
            <S.ActiveBorder BtnColor={color} />
            <S.ActiveBorder BtnColor={color} />
            <S.ActiveBorder BtnColor={color} />
            Neon Button
        </S.Button >
    )
}