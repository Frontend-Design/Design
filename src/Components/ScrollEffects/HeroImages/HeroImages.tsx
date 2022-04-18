import ColorfulRain from "../../ColorfulRain/ColorfulRain";
import { HeroImageBox, HeroImageLayout } from "./Style";

export default function HeroIamges() {

    return (
        <>
            <HeroImageLayout>
                <p>◀</p>
                <p>▶</p>
                <HeroImageBox>
                    <img src={require("../../../Assets/pexels-pixabay.jpg")} />
                    <img src={require("../../../Assets/rain.jpg")} />
                </HeroImageBox>
            </HeroImageLayout>
        </>
    );
}