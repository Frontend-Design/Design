import * as S from './Style';

export default function Wavify() {

    return (
        <S.WavifyLayout>
            <S.Wavify mask="url(#mask1)" fill='red' options={{ height: 15, amplitude: 75, points: 2 }}>
                <mask id="mask1">
                    <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="white" />
                </mask>
            </S.Wavify>
            <S.Wavify mask="url(#mask2)" fill='yellow' options={{ height: 25, amplitude: 60, points: 2 }}>
                <mask id="mask2">
                    <path d="M22,64 L16,96 L36,76 L56,96 L48,64 L72,48 L44,48 L36,20 L28,48 L0,48 Z" fill="white" />
                </mask>
            </S.Wavify>
            <S.Wavify fill='blue' options={{ height: 250, amplitude: 300, points: 1}} />    
        </S.WavifyLayout>
    );
}

// npm i react-wavify
// yarn add react-wavify