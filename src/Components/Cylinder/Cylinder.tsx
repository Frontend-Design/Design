import { useEffect, useState } from "react";
import { Background, CylinderBox, CylinderLayout, CylinderText } from "./Style";

export default function Cyilnder() {
    const nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // 면 개수  

    return (
        <Background>
            <CylinderLayout>
                <CylinderBox X={360+"deg"} Y={0+"deg"} Z={360+"deg"} time={15+"s"}>
                    {
                        nums.map((num: number) => (
                            <CylinderText num={num}><i>CSS</i> is <i>A</i>wesome</CylinderText>
                        ))
                    }
                </CylinderBox>
                <CylinderBox X={360+"deg"} Y={360+"deg"} Z={360+"deg"} time={2+"s"}>
                    {
                        nums.map((num: number) => (
                            <CylinderText num={num}><i>I</i> like <i>C</i>ss</CylinderText>
                        ))
                    }
                </CylinderBox>
            </CylinderLayout>
        </Background>
    );
}