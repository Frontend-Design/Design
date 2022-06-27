import * as S from "./Style";

export default function BackgroundAnimation({ side }: { side: number }) {
    const blocks = () => {
        const result: JSX.Element[] = [];
        for (var i: number = 0; i < side * side; i++) {
            result.push(<S.Block key={i} delay={i * 0.03 + "s"} length={length} />);
        }
        return result;
    }

    return (
        <S.BackgroundLayer>
            <S.Banner>
                {blocks()}
            </S.Banner>
        </S.BackgroundLayer>
    );
}