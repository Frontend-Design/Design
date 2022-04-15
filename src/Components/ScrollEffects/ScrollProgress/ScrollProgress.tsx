import { useState } from 'react';
import * as S from './Style';

export default function ScrollProgress() {

    const [progressWidth, setProgressWidth] = useState<number>(0);

    window.addEventListener('scroll', (e) => {
        setProgressWidth(window.scrollY / (document.body.scrollHeight - window.innerHeight) * 100);
    })

    // let arr: Array<number> = [];

    // for (let i = 0, amount = 30; i < amount; i++) {
    //     arr.push(i);
    // }

    return (
        <S.Background>
            <S.ProgressBar progresswidth={progressWidth+"%"}/>
            <S.ScrollPath />
            {
                // arr.map((index) => {
                //     return(
                //         <h1>ㅇ</h1>
                //     );
                // })
            }
        </S.Background>
    );
}