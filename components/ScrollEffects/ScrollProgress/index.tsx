import { useEffect, useState } from 'react';
import * as S from './Style';

export function ScrollProgress() {

    const [progressWidth, setProgressWidth] = useState<number>(0);

    useEffect(() => {
        window.addEventListener('scroll', (e) => {
            console.log(e);
            setProgressWidth(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
        })
    })

    return (
        <S.Background>
            <S.ProgressBar progresswidth={progressWidth + "%"} />
            <S.ScrollPath />
        </S.Background>
    );
}