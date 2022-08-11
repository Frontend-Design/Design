import { MouseEventHandler, useEffect, useState } from "react";
import * as S from "./style";

export default function BackgroundAnimation({ side }: { side: number }) {
    const [kind, setKind] = useState<number>(1);

    const blocks = () => {
        const result: JSX.Element[] = [];
        for (var i: number = 0; i < side * side; i++) {
            result.push(<S.Blocks key={i} kind={kind} delay={i * 0.03 + "s"} length={side} duration={Math.random() * 5} />);
        }
        return result;
    }

    const onClick: any = (num: number) => {
        setKind(num);
    }

    return (
        <S.BackgroundLayer>
            <S.Container>
                <button onClick={() => onClick(1)}>1</button>
                <button onClick={() => onClick(2)}>2</button>
                <button onClick={() => onClick(3)}>3</button>
            </S.Container>
            <S.Banner>
                {blocks()}
            </S.Banner>
        </S.BackgroundLayer>
    );
}