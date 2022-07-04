import * as S from "./style";

export default function EnergeBall() {
    const list = [
        { color: "#fbad04", size: "18px", speed: " 2.5s" },
        { color: "#03a1d9", size: "13px", speed: " 5s" },
        { color: "#f7036d", size: "15px", speed: " 7.5s" },
        { color: "#93ff16", size: "20px", speed: " 10s" },
    ];
    return (
        <S.bg>
            <S.energy>
                {list.map((e, key) => {
                    return (
                        <S.ball color={e.color} size={e.size} speed={e.speed} key={key}></S.ball>
                    );
                })}
            </S.energy>
        </S.bg>
    );
}