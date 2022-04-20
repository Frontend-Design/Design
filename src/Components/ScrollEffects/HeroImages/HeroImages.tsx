import ColorfulRain from "../../ColorfulRain/ColorfulRain";
import { HeroImageBox, HeroImageLayout } from "./Style";
import rain from "../../../Assets/rain.jpg";
import blog from "../../../Assets/pexels-pixabay.jpg";

export default function HeroIamges() {

    const ImageArray:Array<string> = [rain, blog];

    return (
        <>
            <HeroImageLayout>
                <p>◀</p>
                <p>▶</p>
                <HeroImageBox>
                    {
                        ImageArray.map((image:string) => {
                            return(
                                <img src={image} alt="img"/>
                            );

                        })
                    }
                    {/* <img src={rain}/> */}
                </HeroImageBox>
            </HeroImageLayout>
        </>
    );
}