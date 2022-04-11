import { useEffect, useState } from "react";
import * as S from "./Style";

export default function NeonLightBtn() {
    return (
        <S.Background>
            <S.Button1 to='#' BtnColor="#2196f3">
                <S.ActiveBorder1 BtnColor="#2196f3"/>
                <S.ActiveBorder1 BtnColor="#2196f3"/>
                <S.ActiveBorder1 BtnColor="#2196f3"/>
                <S.ActiveBorder1 BtnColor="#2196f3"/>
                Neon Button
            </S.Button1>

            <S.Button2 to='#' BtnColor="#0ec445">
                <S.ActiveBorder2 BtnColor="#0ec445"/>
                <S.ActiveBorder2 BtnColor="#0ec445"/>
                <S.ActiveBorder2 BtnColor="#0ec445"/>
                <S.ActiveBorder2 BtnColor="#0ec445"/>
                Neon Button
            </S.Button2>
        </S.Background>
    );
}