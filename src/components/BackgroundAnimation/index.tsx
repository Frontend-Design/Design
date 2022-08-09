import * as S from "./style";

export default function BackgroundAnimation({ side }: { side: number }) {
    const blocks = () => {
        const result: JSX.Element[] = [];
        for (var i: number = 0; i < side * side; i++) {
            result.push(<S.Blocks key={i} delay={i * 0.03 + "s"} length={side} />);
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