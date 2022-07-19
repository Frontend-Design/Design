import { useEffect, useState } from "react";
import * as S from "./style";

export default function VideoCube() {
    const list: Array<number> = [0, 1, 2, 3];
    const [muted, setMuted] = useState<boolean>(true);
    const [rotate, setRotate] = useState<boolean>(true);
    const [value, setValue] = useState<number>(0);
    const time = 6;

    useEffect(() => {
        rotate && setTimeout(() => setValue(value >= 360 ? 0 : value + 1), time * 1000 / 360);
    })

    return (
        <S.bg>
            <video autoPlay={true} loop={true} muted={muted}>
                <source src={"/video/marvel_intro.mp4"} /></video>
            <S.cube rotate={rotate} value={value}>
                <S.top muted={muted} rotate={rotate}>
                    <button onClick={() => setMuted(!muted)}>Sound</button>
                    <button onClick={() => setRotate(!rotate)}>Rotate</button>
                </S.top>
                <div>
                    {list.map((e) => {
                        return <S.span num={e} key={e}><video autoPlay={true} loop={true} muted={true}>
                            <source src={"/video/marvel_intro.mp4"} /></video></S.span>;
                    })}
                </div>
            </S.cube>
        </S.bg >
    )
}

// video 출처: https://www.youtube.com/watch?v=os2C0TdDphc