import ColorfulRain from "../../Components/ColorfulRain/ColorfulRain";
import HeroIamges from "../../Components/ScrollEffects/HeroImages/HeroImages";
import ScrollProgress from "../../Components/ScrollEffects/ScrollProgress/ScrollProgress";

export default function ScrollEffects() {
    return (
        <div style={{width: '100%', height: '200vh'}}>
            <ColorfulRain />
            <ScrollProgress />
            <HeroIamges />
        </div>
    );
}