import { useEffect } from "react";
import { Background, CylinderBox, CylinderLayout, CylinderText } from "./Style";

export default function Cyilnder() {
    const nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

    return (
        <Background>
            <CylinderLayout>
                <CylinderBox>
                    {
                        nums.map((num: number) => (
                            <CylinderText num={num}><i>CSS</i> is <i>A</i>wesome</CylinderText>
                        ))
                    }
                </CylinderBox>
            </CylinderLayout>
        </Background>
    );
}