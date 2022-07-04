import * as S from './style';

export default function Wavify() {

    return (
        <S.WavifyLayout>
            <S.FigureWave mask="url(#mask1)" fill='red' options={{ height: 18, amplitude: 70, points: 3 }}>
                <mask id="mask1">
                    <path d="M10,35 A20,20,0,0,1,50,35 A20,20,0,0,1,90,35 Q90,65,50,95 Q10,65,10,35 Z" fill="white" />
                </mask>
            </S.FigureWave>
            <S.FigureWave mask="url(#mask2)" fill='yellow' options={{ height: 25, amplitude: 60, points: 2 }}>
                <mask id="mask2">
                    <path d="M22,64 L16,96 L36,76 L56,96 L48,64 L72,48 L44,48 L36,20 L28,48 L0,48 Z" fill="white" />
                </mask>
            </S.FigureWave>
            <S.WaterWave fill='skyblue' options={{ height: 50, amplitude: 70, points: 2 }} />
            <S.WaterWave fill='#46AAEB' options={{ height: 90, amplitude: 80, points: 3 }} />
            <S.WaterWave fill='#7878FF' options={{ height: 150, amplitude: 100, points: 4 }} />
        </S.WavifyLayout>
    );
}

// npm i react-wavify
// yarn add react-wavify