import * as S from "./Style";
import img from "../../Assets/egg.png"

export default function BackgroundAnimation() {
    const blocks = () => {
        const length:number = 5;
        const result:JSX.Element[] = [];
        for(var i:number = 0; i < length*length; i++){
            result.push(<S.Block key={i} delay={i*0.03+"s"} length={length} style={{background: require(img)}}/> );
        }
        return result;
    }
    
    return (
        <S.BackgroundLayer>
            <S.Banner>
                {blocks()}
            </S.Banner>     
        </S.BackgroundLayer>
    );
}