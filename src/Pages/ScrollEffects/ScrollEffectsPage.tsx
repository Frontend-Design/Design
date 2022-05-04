import ColorfulRain from "../../Components/ColorfulRain/ColorfulRain";
import HeroImages from "../../Components/Carousel/Carousel";
import ScrollProgress from "../../Components/ScrollEffects/ScrollProgress/ScrollProgress";
import Header from "../../Components/ScrollEffects/Header/Header"

export default function ScrollEffects() {
    return (
        <div style={{width: '100%', height: '100vh'}}>
            {/* <ColorfulRain /> */}
            <Header/>
            <HeroImages />
            <ScrollProgress />
        </div>
    );
}