import * as S from "./style";
import * as SVG from "./SVG";

export default function RocketAnimation() {
    const list = [0, 1, 2, 3];
    return (
        <S.bg>
            <S.loader>
                <S.rocket>
                    <S.Rocket>
                        <SVG.Rocket />
                    </S.Rocket>
                    {list.map((e) => {
                        return (
                            <S.Cloud num={e} key={e}>
                                <SVG.Cloud />
                            </S.Cloud>
                        );
                    })}
                </S.rocket>
                <span>
                    <i></i>
                </span>
            </S.loader>
        </S.bg>
    );
}