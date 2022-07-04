import * as S from "./style";

export default function NeumorphismAnimation() {
    const list: number[] = [0, 1, 2, 3, 4, 5, 6, 7];
    return (
        <S.bg>
            <S.loader>
                {list.map((e) => {
                    return <S.load num={e} key={e}></S.load>;
                })}
            </S.loader>
        </S.bg>
    );
}