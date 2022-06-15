import { Link } from "react-router-dom";
import { HomeLayer } from "./Style";

export default function Home() {
  return (
    <HomeLayer>
      <Link to="/loading">Loading</Link>
      <Link to="/wavify">Wavify</Link>
      <Link to="/neonlightbtn">Neon Light Button</Link>
      <Link to="/cylinder">3D Cylinder</Link>
      <Link to="/colorfulrain">Colorful Rain</Link>
      <Link to="/menuindicator">Arrow Menu Indicator</Link>
      <Link to="/menu_3d">Isometric 3D Menu Effects</Link>
      <Link to="/bganimation">Background Image Loop Animation</Link>
      <Link to="/scrolleffects">Scroll Effects Page</Link>
      <Link to="/rainycloud">RainyCloud</Link>
      <Link to="/NavigationMenu">NavigationMenu</Link>
      <Link to="/CheckBox">CheckBox</Link>
      <Link to="/LightCube">LightCube</Link>
      <Link to="/WaterDrop">WaterDrop</Link>
      <Link to="/MilkEffect">MilkEffect</Link>
      <Link to="/2DTo3D">2DTo3D</Link>
      <Link to="/SpinAnimation">Spin</Link>
    </HomeLayer>
  );
}
