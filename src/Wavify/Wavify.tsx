import * as S from './Style';
import heart from '../Assets/heart.png';

export default function Wavify() {
    return (
        <S.WavifyLayout>
            <S.Wavify mask="url(#mask1)" fill='red' options={{ height: 15, amplitude: 75, points: 2 }}>
                <mask id="mask1">
                    <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="white" />
                </mask>
            </S.Wavify>
            <S.Wavify mask="url(#mask2)" fill='yellow' options={{ height: 15, amplitude: 75, points: 2 }}>
                <mask id="mask2">
                    <path d="M26,32 L22,48 L32,38 L42,48 L38,32 L50,24 L36,24 L32,10 L28,24 L14,24 Z" fill="white" />
                </mask>
            </S.Wavify>
            {/* <S.Wavify fill='blue' options={{ height: 250, amplitude: 300, points: 1}} /> */}
        </S.WavifyLayout>
    );
}

// npm i react-wavify
// yarn add react-wavify