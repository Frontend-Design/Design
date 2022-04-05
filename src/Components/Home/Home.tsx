import { Link } from "react-router-dom";

export default function Home() {
    return(
        <>
            <Link to='/loading'><p>Loading</p></Link>
            <Link to='/wavify'><p>Wavify</p></Link>
            <Link to='/neonlightbtn'><p>Neon Light Button</p></Link>
            <Link to='/cylinder'><p>3D Cylinder</p></Link>
            <Link to='/colorfulrain'><p>Colorful Rain</p></Link>
        </>
    );
}