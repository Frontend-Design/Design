import { Link } from "react-router-dom";
import { HomeLayer } from "./Style";

export default function Home() {
    return(
        <HomeLayer>
            <Link to='/loading'>Loading</Link>
            <Link to='/wavify'>Wavify</Link>
            <Link to='/neonlightbtn'>Neon Light Button</Link>
            <Link to='/cylinder'>3D Cylinder</Link>
            <Link to='/colorfulrain'>Colorful Rain</Link>
            <Link to='/imageroop'>Background Image Roop</Link>
            <Link to='/carousel'>Carousel</Link>
            <Link to='/scrolleffects'>Scroll Effects Page</Link>
        </HomeLayer>
    );
}