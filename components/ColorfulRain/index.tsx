import { useEffect, useState } from 'react';
import * as S from './Style'

export default function ColorfulRain({ amount }: { amount: number }) {

    const arr: Array<number> = [];
    const [maxWidth, setMaxWidth] = useState<number>(0);

    for (let i = 0; i < amount; i++) {
        arr.push(i);
    }

    useEffect(() => {
        setMaxWidth(window.innerWidth - 22);
    }, [])

    return (
        <S.Background>
            {
                arr.map((index) => {
                    return (
                        <S.RainLine key={index}
                            randomwidth={0.2 + Math.random() * 5 + 'px'}
                            randomleft={Math.floor(Math.random() * maxWidth) + 'px'}
                            randomdelay={Math.random() * -20 + 's'}
                            randomduration={Math.random() * 5 + 1 + 's'} />
                    );
                })
            }

        </S.Background>
    );
}