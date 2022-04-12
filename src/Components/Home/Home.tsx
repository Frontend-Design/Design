import { Link } from "react-router-dom";
import img from "../../Assets/Group150.svg"

export default function Home() {
    return(
        <>
            <Link to='/loading'><p>Loading</p></Link>
            <Link to='/wavify'><p>Wavify</p></Link>
            <Link to='/neonlightbtn'><p>Neon Light Button</p></Link>
            <Link to='/cylinder'><p>3D Cylinder</p></Link>
            <Link to='/colorfulrain'><p>Colorful Rain</p></Link>
            <Link to='/imageroop'><p>Background Image Roop</p></Link>
        </>
    );
}