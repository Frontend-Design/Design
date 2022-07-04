import { Background, CylinderBox, CylinderLayout, CylinderText } from "./style";

interface CylinderType {
    x: number;
    y: number;
    z: number;
    time: number;
    size: number;
    text: string;
}

export default function Cyilnder({ x, y, z, time, size, text }: CylinderType) {
    const nums: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]; // 면 개수  

    return (
        <Background>
            <CylinderLayout>
                <CylinderBox X={x} Y={y} Z={z} time={time + "s"}>
                    {
                        nums.map((num: number) => (
                            <CylinderText num={num} size={size} key={num}>{text}</CylinderText>
                        ))
                    }
                </CylinderBox>
            </CylinderLayout>
        </Background>
    );
}