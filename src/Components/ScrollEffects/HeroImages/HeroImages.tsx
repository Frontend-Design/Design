import { HeroImageBox, HeroImageLayout } from "./Style";

export default function HeroIamges() {

    return (
        <>
            <HeroImageLayout>
                <HeroImageBox>
                    <img src={require("../../../Assets/pexels-pixabay.jpg")}/>
                </HeroImageBox>
            </HeroImageLayout>
        </>
    );
}