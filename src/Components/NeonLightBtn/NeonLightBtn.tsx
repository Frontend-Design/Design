import { ActiveBorder, Background, BtnLink } from "./Style";

export default function NeonLightBtn() {
    return (
        <Background>
            <BtnLink to='#' BtnColor="#2196f3">
                <ActiveBorder BtnColor="#2196f3"/>
                <ActiveBorder BtnColor="#2196f3"/>
                <ActiveBorder BtnColor="#2196f3"/>
                <ActiveBorder BtnColor="#2196f3"/>
                Neon Button
            </BtnLink>

            <BtnLink to='#' BtnColor="#0ec445">
                <ActiveBorder BtnColor="#0ec445"/>
                <ActiveBorder BtnColor="#0ec445"/>
                <ActiveBorder BtnColor="#0ec445"/>
                <ActiveBorder BtnColor="#0ec445"/>
                Neon Button
            </BtnLink>
        </Background>
    );
}