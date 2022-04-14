import { useState } from 'react';
import * as S from './Style';

export default function ScrollProgress() {

    const [progressWidth, setProgressWidth] = useState<number>(0);

    window.addEventListener('scroll', (e) => {
        setProgressWidth(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
    })

    return (
        <S.Background>
            <S.ProgressBar progresswidth={progressWidth+"%"}/>
            <S.ScrollPath />
        </S.Background>
    );
}