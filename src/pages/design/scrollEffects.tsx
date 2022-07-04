import HeroImages from '../../components/Carousel';
import * as SE from '../../components/ScrollEffects';

export default function ScrollEffectsPage() {
    return (
        <>
            <SE.Header />
            <HeroImages
                dots={true}
                infinite={true}
                speed={700}
                autoplay={true}
                autoplaySpeed={3000}
                slidesToShow={1}
                slidesToScroll={1}
                centerMode={true}
                centerPadding={"0px"}
            />
            <SE.ScrollProgress />
        </>
    )
}